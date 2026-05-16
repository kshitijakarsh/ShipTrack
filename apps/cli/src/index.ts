#!/usr/bin/env node

import { Command } from "commander";
import { sailCommand } from "./commands/sail.js";
import { versionCommand } from "./commands/version.js";
import { loginCommand } from "./commands/login.js";
import { whoamiCommand } from "./commands/whoami.js";

const program = new Command();

program
    .name("ship")
    .description("Deployment tracking CLI")
    .version("1.0.0");

program.addCommand(sailCommand);
program.addCommand(versionCommand);
program.addCommand(loginCommand);
program.addCommand(whoamiCommand);

program.parse();