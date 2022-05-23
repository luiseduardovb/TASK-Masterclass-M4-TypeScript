import { main as checkInterfaces } from "./interfaces";
import { main as checkUnions } from "./unions";

function main(): void {
  checkInterfaces();
  checkUnions();
}

main();
