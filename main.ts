import { ProgressBar } from "./include/progressBars.ts";
import { delay } from "jsr:@std/async";
import { showAskTextInput } from "./include/inputs.ts";
import {Filter} from "bad-words";

const filter = new Filter({placeHolder:"█"});

const bar = new ProgressBar();

bar.createType("[ ]", "*", " ", 50);

for (let i = 0; i <= 100; i++) {
  bar.update(i / 100);
  process.stdout.write(`\rProgress: ${bar.display()} ${i}%`);
  await delay(Math.random() * 100);
}
var shellInput:string;
console.log("\nDone!");
try {
  while (true) {
    shellInput = await showAskTextInput("tssh-1.0.0 > ", "");
    shellInput = filter.clean(shellInput);
    console.log(`You entered: ${shellInput}`);
    if (shellInput.toLowerCase() === "exit" || shellInput.toLowerCase() === "quit") {
        console.log("Exitting...");
        Deno.exit(0);
    }
    if (shellInput.includes("█")) {
        console.warn("Your message has been filtered and blocked.");
    }
    


  }
} catch (error) {
  console.log("Quitting...");
    Deno.exit(0);
}
