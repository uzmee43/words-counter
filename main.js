import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magenta.bold("\n \t\t welcom to sentences counter "));
console.log(chalk.green("==**==").repeat(10), "\n");
let answers = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: chalk.cyan.bold("enter your sentences "),
    }]);
let counts = answers.sentence.trim().split(" ");
console.log(chalk.yellow(` ${counts}`));
console.log(`here is your sentences lenght = ${chalk.red.bold((counts.length))}`);
console.log(chalk.green("==**==").repeat(10), "\n");
