// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

//create licenses object
const licenses = {
    license1: {
        name: 'Apache2.0',
        badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        description: `This application is covered under Apache2.0`
    },
    license2: {
        name: 'Boost',
        badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
        description: `This application is covered under Boost`
    }
};

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter your GitHub username',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Please enter your email address',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please provide a link to your GitHub profile',
        name: 'link',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'

    },
    {
        type: 'input',
        message: 'Please provide a brief description of your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please provide any necessary installation instructions',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please provide usage information',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please provide any guidelines for contribution to the project',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Please provide instructions for testing',
        name: 'testing'

    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application',
        choices: [licenses.license1.name, licenses.license2.name],
    },
];

inquirer
    .prompt(questions
    )
    .then(answers => {
        var licenseBadge;
        var licenseDescription;

        for (let i = 0; i < Object.keys(licenses).length; i++) {
            let licenseNum = Object.keys(licenses)[i];
            if (answers.license == licenses[licenseNum].name) {
                licenseBadge = licenses[licenseNum].badge;
                licenseDescription = licenses[licenseNum].description;
                break;
            }
        }
        let markdown = `# ${answers.title}
${licenseBadge}

## Table of Contents

[Description](#description)

[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)

## Description
    
${answers.description}
        
## Installation 

${answers.installation}

## Usage

${answers.usage}

## License

${licenseDescription}

## Contributing

${answers.contribution}

## Tests

${answers.testing}

## Questions

 - If you have any questions, feel free to contact me at ${answers.email}
 - My GitHub username is ${answers.username}
 - a link to my GitHub profile is listed below:

   ${answers.link}

`

        writeToFile('README.md', markdown);

    });


// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, e => e ? console.error(e) : console.log("File created!"))
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
