import { Command } from "commander";
import path from "path";
import { fileURLToPath } from "url";

export const versionCommand = new Command("version").action(async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const packageJsonPath = path.resolve(__dirname, "../../package.json");

    const fs = await import("fs").then(m => m.default || m);
    const packageJson = JSON.parse(await fs.promises.readFile(packageJsonPath, "utf-8"));

    console.log(packageJson.version);
});