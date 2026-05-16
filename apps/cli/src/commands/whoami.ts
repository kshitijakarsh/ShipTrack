import { Command } from "commander";
import { Storage } from "../utils/storage.js";
import { GitHubService } from "../auth/github/service.js";

export const whoamiCommand = new Command("whoami")
  .description("Display the currently authenticated user")
  .action(async () => {
    const token = await Storage.getGitHubToken();
    
    if (!token) {
      console.log("You are not logged in. Run `ship login github` to authenticate.");
      return;
    }

    try {
      const githubService = new GitHubService();
      const username = await githubService.validateToken(token);
      console.log(`Logged in as: \x1b[32m${username}\x1b[0m (GitHub)`);
    } catch (error) {
      console.log("\x1b[31mYour session has expired or the token is invalid.\x1b[0m");
      console.log("Please run `ship login github` again.");
    }
  });
