import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from project root
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

/**
 * Utility to manage and validate environment variables
 */
export const env = {
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,

  validate() {
    if (!this.GITHUB_CLIENT_ID) {
      console.error("\x1b[31mError: GITHUB_CLIENT_ID is missing in .env file.\x1b[0m");
      console.log("Please check .env.example for instructions.");
      process.exit(1);
    }
  },
};
