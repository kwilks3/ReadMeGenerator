const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

function promptInfo() {
  return inquirer.prompt([
    {
      type: "input",
      name: "GitHub",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "GitHub",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "GitHub",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "GitHub",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "GitHub",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "GitHub",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "GitHub",
      message: "What is your GitHub username?",
    },
  ]);
}
