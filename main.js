#!/user/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// initialiaze user balance and pin code 
let myBalance = 5000;
let myPin = 232006;
// print welcome message
console.log(chalk.cyan.bold("\n\t || WELCOME TO SHEIKH'S - ATM MACHINE || \n\t "));
console.log("=".repeat(60));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin code:"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.cyan.bold("\n\t PIN IS CORRECT, LOGIN SUCCESSFULLY \n\t "));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operaion:",
            choices: ["withdraw amount", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                Message: "enter the amount to withdraw",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log(chalk.redBright.bold("\n\t INSUFFICIENT BALANCE \n\t"));
        }
        else {
            myBalance -= amountAns.amount;
            console.log(chalk.cyan.bold(`\n\t ${amountAns.amount},WITHDRAW SUCCESSFULLY! \n\t`));
            console.log(chalk.cyan.bold(`\n\t YOUR REMAINING BALANCE IS ${myBalance} \n\t`));
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(chalk.cyan.bold(`\n\t YOUR ACCOUNT BALANCE IS ${myBalance}\n\t`));
    }
}
else {
    console.log(chalk.redBright.bold(" \n\t YOUR PIN IS INCORECT , TRY AGAIN! \n\t"));
}
