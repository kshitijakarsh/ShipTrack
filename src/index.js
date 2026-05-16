#!/usr/bin/env node

import { Command } from "commander";
import { sailCommand } from "./commands/sail.js";
import { versionCommand } from "./commands/version.js";

const program = new Command();

program
    .name("ship")
    .description("Deployment tracking CLI");

program.addCommand(sailCommand);
program.addCommand(versionCommand);

program.parse();