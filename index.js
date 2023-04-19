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
      message: 'Select a License for your Prokect:',
      name: 'license',
      choices: ["GNU General Public License family", "GNU Lesser General Public License family", "Eclipse Public License 1.0", "Mozilla Public License 2.0", "MIT"]
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

${response.license}

## Tests

${response.tests}

## Questions 

Find more projects like this at: "https://github.com/${response.questions}".

Send any and all questions to: "${response.email}"
    
`,    
    (err) => {
        if (err){
            throw err
        } console.log("success")
    })
});