const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

function promptInfo() {
  return inquirer.prompt([
    {
      type: "input",
      name: "gitHub",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "title",
      message: "What is the project title?",
    },
    {
      type: "input",
      name: "description",
      message: "What is the project description?",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps required for installation?",
    },
    {
      type: "input",
      name: "usage",
      message: "What are the usage instructions and examples?",
    },
    {
      type: "input",
      name: "license",
      message: "What open source license would you like to use?",
    },
    {
      type: "input",
      name: "contributing",
      message: "How can others contribute?",
    },
  ]);
}
promptInfo();
