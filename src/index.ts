#!/usr/bin/env node
import { Command } from "commander";
import { loadCommands } from "./commands/github.js";

const programme = new Command();
programme
  .name("physics-cli")
  .description(
    "Command Line tool to return Physics mathematical values and perform calculations in the terminal",
  )
  .version("0.1.0");
loadCommands(programme);
programme.parse(process.argv); // this gets the command line arguments, first is node path, which is executing the code, second is the path to the JS file being executed, finally is any remaining arguments passed to node in the command line: https://tedante.medium.com/input-command-line-process-argv-in-nodejs-bfe4abab7657
