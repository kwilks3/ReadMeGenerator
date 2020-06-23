// packages needed for file
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const { makeBadge, ValidationError } = require("badge-maker");

const writefileAsync = util.promisify(fs.writeFile);

// prompt the user for all their info
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
    {
      type: "input",
      name: "badge",
      message:
        "Input your badge label, message, and color separated by spaces.",
    },
  ]);
}

// generate the info for the markdown file
function generateMD(answers) {
  return `# ${answers.title}\n## Description \n
${answers.description} \n
## Table of Contents \n
- [Installation](#installation) \n
- [usage](#usage) \n
- [license](#license) \n
- [Contributing](#contributing) \n
## Installation \n
${answers.installation} \n
## License \n
${answers.license} \n
## Usage \n
${answers.usage} \n
## Contributing \n
${answers.contributing} \n
## Badges \n
![uniquebadge](https://img.shields.io/static/v1?label=${
    answers.badge.split(" ")[0]
  }&message=${answers.badge.split(" ")[1]}&color=${
    answers.badge.split(" ")[2]
  })`;
}

// this function should wait for the prompt to be completed, then it will generate the info for the md file then create the file
async function init() {
  try {
    const answers = await promptInfo();
    const md = generateMD(answers);

    await writefileAsync("README.md", md);
    console.log("Successfully created README");
  } catch (err) {
    console.log(err);
  }
}

init();
