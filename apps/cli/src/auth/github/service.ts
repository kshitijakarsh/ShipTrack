import open from "open";
import { GitHubClient } from "./client.js";
import { GitHubDeviceCodeResponse, GitHubTokenResponse } from "@shiptrack/shared-types";
import { env } from "../../utils/env.js";

/**
 * Service to handle GitHub OAuth Device Flow business logic
 */
export class GitHubService {
  private client: GitHubClient;

  constructor() {
    this.client = new GitHubClient();
  }

  async login(): Promise<string> {
    env.validate();
    const clientId = env.GITHUB_CLIENT_ID!;

    // 1. Request device code
    const deviceData = await this.client.requestDeviceCode(clientId);
    
    console.log("\n\x1b[36m🚀 GitHub Authentication\x1b[0m");
    console.log("------------------------");
    console.log(`1. Copy your code: \x1b[1m${deviceData.user_code}\x1b[0m`);
    console.log(`2. Open: \x1b[34m${deviceData.verification_uri}\x1b[0m`);
    console.log("------------------------\n");

    // 2. Open browser automatically
    await open(deviceData.verification_uri);

    // 3. Poll for token
    return this.pollForToken(clientId, deviceData);
  }

  private async pollForToken(
    clientId: string,
    deviceData: GitHubDeviceCodeResponse
  ): Promise<string> {
    const { device_code, interval, expires_in } = deviceData;
    let currentInterval = interval * 1000;
    const stopTime = Date.now() + expires_in * 1000;

    console.log("⌛ Waiting for authorization...");

    while (Date.now() < stopTime) {
      try {
        const tokenData: any = await this.client.pollForToken(clientId, device_code);

        if (tokenData.access_token) {
          return tokenData.access_token;
        }

        if (tokenData.error) {
          switch (tokenData.error) {
            case "authorization_pending":
              // Keep polling
              break;
            case "slow_down":
              currentInterval += 5000; // Increase interval as requested
              break;
            case "expired_token":
              throw new Error("The device code has expired. Please try again.");
            case "access_denied":
              throw new Error("Access was denied by the user.");
            default:
              throw new Error(`Authentication failed: ${tokenData.error_description || tokenData.error}`);
          }
        }
      } catch (error: any) {
        if (error.message) throw error;
        throw new Error("An unexpected error occurred during authentication.");
      }

      await new Promise((resolve) => setTimeout(resolve, currentInterval));
    }

    throw new Error("Authentication timed out. Please try again.");
  }

  async validateToken(token: string): Promise<string> {
    const client = new GitHubClient(token);
    const profile = await client.getUserProfile();
    return profile.login;
  }
}
