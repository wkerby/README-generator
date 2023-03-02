// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
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

        }
    ])


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
