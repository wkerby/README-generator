// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

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
        choices: ['license1', 'license2', 'license3'],
    },
];

inquirer
    .prompt(questions
    );



// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile('README.md',)
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
