import fs from "fs/promises";
import path from "path";
import os from "os";
import { AuthConfig } from "@shiptrack/shared-types";

const CONFIG_DIR = path.join(os.homedir(), ".ship");
const CONFIG_FILE = path.join(CONFIG_DIR, "config.json");

/**
 * Handles persistence of tokens and configuration in ~/.ship/config.json
 */
export class Storage {
  private static async ensureDir() {
    try {
      await fs.mkdir(CONFIG_DIR, { recursive: true });
    } catch (error) {
      // Ignore if already exists
    }
  }

  static async getConfig(): Promise<AuthConfig> {
    try {
      const content = await fs.readFile(CONFIG_FILE, "utf-8");
      return JSON.parse(content);
    } catch (error) {
      return {};
    }
  }

  static async setConfig(config: AuthConfig): Promise<void> {
    await this.ensureDir();
    await fs.writeFile(CONFIG_FILE, JSON.stringify(config, null, 2));
  }

  static async getGitHubToken(): Promise<string | undefined> {
    const config = await this.getConfig();
    return config.github?.access_token;
  }

  static async setGitHubToken(token: string, username?: string): Promise<void> {
    const config = await this.getConfig();
    config.github = { access_token: token, username };
    await this.setConfig(config);
  }

  static async clear(): Promise<void> {
    try {
      await fs.unlink(CONFIG_FILE);
    } catch (error) {
      // Ignore if not found
    }
  }
}
