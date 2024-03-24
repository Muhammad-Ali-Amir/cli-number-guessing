#! /usr/bin/env node


import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);
{
  console.log("Welcome to Guessing Number Game");
}

const answer = await inquirer.prompt([
  {
    name: "NumberGuessdByUser",
    type: "number",
    message: "please guess the number 1-6",
  },
]);

if (answer.NumberGuessdByUser === randomNumber) {
  console.log("Congratulation! you guessed the right number");
} else {
  console.log("You guess the wrong number");
}
