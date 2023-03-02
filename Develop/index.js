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
        name: 'profile-link',
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'project-title'

    },
    {
        type: 'input',
        message: 'Please provide a brief description of your project',
        name: 'project-description'
    },
    {
        type: 'input',
        message: 'Please provide any necessary installation instructions',
        name: 'installation-instructions'
    },
    {
        type: 'input',
        message: 'Please provide usage information',
        name: 'project-usage'
    },
    {
        type: 'input',
        message: 'Please provide any guidelines for contribution to the project',
        name: 'project-contribution'
    },
    {
        type: 'input',
        message: 'Please provide instructions for testing',
        name: 'project-testing'

    },
    {
        type: 'list',
        name: 'project-license',
        message: 'Choose a license for your application',
        choices: ['license1', 'license2', 'license3'],
    },
];

inquirer
    .prompt(questions
    );


const markdown = `# ${answers.project - title}

## Description

[Insert description here]

## User Story

## Usage

`;

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile('README.md',)
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
