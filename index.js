const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writefileAsync = util.promisify(fs.writeFile);
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
function generateMD(answers) {
  return `
    # ${answers.title}\n 
    ## Description \n
    ${answers.description} \n
    ## Table of Contents \n
    ## Installation \n
    ${answers.installation}
    `;
}
async function init() {
  try {
    const answers = await promptInfo();
    const md = generateMD(answers);
    await writefileAsync("readme.md", md);
    console.log("Successfully created readme");
  } catch (err) {
    console.log(err);
  }
}

init;
