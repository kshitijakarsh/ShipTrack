import { Command } from "commander";
import { GitHubService } from "../auth/github/service.js";
import { Storage } from "../utils/storage.js";

const githubLoginCommand = new Command("github")
  .description("Login with GitHub OAuth Device Flow")
  .action(async () => {
    try {
      const githubService = new GitHubService();
      const token = await githubService.login();
      
      console.log("✔ Token received. Validating...");
      const username = await githubService.validateToken(token);
      
      await Storage.setGitHubToken(token, username);
      
      console.log(`\n\x1b[32m✔ Successfully authenticated as ${username}!\x1b[0m`);
      console.log("Your token has been stored in ~/.ship/config.json\n");
    } catch (error: any) {
      console.error(`\n\x1b[31m✖ Error: ${error.message}\x1b[0m\n`);
      process.exit(1);
    }
  });

export const loginCommand = new Command("login")
  .description("Authenticate with external providers")
  .addCommand(githubLoginCommand);
