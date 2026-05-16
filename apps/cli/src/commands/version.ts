import { Command } from "commander";
import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const versionCommand = new Command("version").action(async () => {
    const packageJsonPath = path.resolve(__dirname, "../../package.json");
    const packageJson = JSON.parse(await fs.readFile(packageJsonPath, "utf-8"));

    console.log(packageJson.version);
});
