import { Command } from "commander";
import { getUnifiedStatus } from "../core/status.js";

export const sailCommand = new Command("sail").action(async () => {
  const result = await getUnifiedStatus();
  console.log(result);
});
