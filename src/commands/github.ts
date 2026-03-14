import { Command } from "commander";
export function loadCommands(programme: Command) {
  programme
    .command("github")
    .description("Interact with Github API")
    .action(() => {
      console.log("Da bluetooth devices had been connecteds");
    });
}
