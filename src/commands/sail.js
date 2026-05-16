import { Command } from "commander";

export const sailCommand = new Command("sail").action(async () => {
  const result = "System is up and running!";
  console.log(result);
});
