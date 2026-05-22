import { Command } from "commander";

export const loginCommand = new Command("login").action(async () => {
  console.log("Go to http://localhost:3000/login to log in to your account.");
});
