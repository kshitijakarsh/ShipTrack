import axios, { AxiosInstance } from "axios";
import { 
  AuthConfig,
  GitHubDeviceCodeResponse, 
  GitHubTokenResponse, 
  UserProfile 
} from "@shiptrack/shared-types";

/**
 * Low-level API client for GitHub OAuth and API endpoints
 */
export class GitHubClient {
  private axiosInstance: AxiosInstance;

  constructor(accessToken?: string) {
    this.axiosInstance = axios.create({
      headers: {
        Accept: "application/json",
        ...(accessToken ? { Authorization: `token ${accessToken}` } : {}),
      },
    });
  }

  async requestDeviceCode(clientId: string): Promise<GitHubDeviceCodeResponse> {
    const response = await this.axiosInstance.post(
      "https://github.com/login/device/code",
      {
        client_id: clientId,
        scope: "read:user user:email",
      }
    );
    return response.data;
  }

  async pollForToken(
    clientId: string,
    deviceCode: string
  ): Promise<GitHubTokenResponse> {
    const response = await this.axiosInstance.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: clientId,
        device_code: deviceCode,
        grant_type: "urn:ietf:params:oauth:grant-type:device_code",
      }
    );
    return response.data;
  }

  async getUserProfile(): Promise<UserProfile> {
    const response = await this.axiosInstance.get("https://api.github.com/user");
    return response.data;
  }
}
