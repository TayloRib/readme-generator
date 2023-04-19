const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the Title of your Project?',
      name: 'title'
    },
    {
      type: 'input',
      message: 'Write a brief Description about your Project:',
      name: 'description'
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use:',
        name: 'usage'
    },
    {
      type: 'list',
      message: 'Select a License for your Project:',
      name: 'license',
      choices: ["GNU General Public License v2.0", "GNU Lesser General Public License v3.0", "Eclipse Public License 1.0", "Mozilla Public License 2.0", "MIT"]
    },
    {
        type: 'list',
        message: 'Select a License Badge (this will appear under the title) for your Project:',
        name: 'badge',
        choices: ["GPL_v2", "LGPL_v3", "EPL_1.0", "MLP_2.0", "MIT"]
      },
    {
        type: 'input',
        message: 'Include any contributors:',
        name: 'credits'
    },
    {
        type: 'input',
        message: 'Write tests for your application:',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Enter the name of the GitHub account that questions will be directed to:',
        name: 'questions'
    },
    {
        type: 'input',
        message: 'Provide an Email address for further correspondence:',
        name: 'email'
    },
  ])

  .then(response => {
    console.log(response)
    fs.writeFile(`README.md`, 
    
`# ${response.title}

[![License](https://img.shields.io/badge/License-${response.badge}-blue.svg)]

## Description

${response.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${response.installation}

## Usage

${response.usage}

## Contributors

${response.credits}

## License

This project is licensed under the terms of the ${response.license} license.

## Tests

${response.tests}

## Questions 

Find more projects like this at: https://github.com/${response.questions}

Send any and all questions to: ${response.email}
    
`,    
    (err) => {
        if (err){
            throw err
        } console.log("success")
    })
});
