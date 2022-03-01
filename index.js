// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        
    },

    {
        type: 'input',
        message: 'Write a description of your project.',
        name: 'description',
      },
  

    {
        type: 'input',
        message: 'Write table of contents',
        name: 'tableOfContents',
    },


    {
      type: 'input',
      message: 'What are the installation instructions?',
      name: 'installation',
    },

    

    {
      type: 'input',
      message: 'What is your username on GitHub?',
      name: 'userName',
    },

    

    {
      type: 'input',
      message: 'What is your e-mail address on GitHub?',
      name: 'emailAddress',
    },

    {
      type: 'list',
      message: 'What license will your project use?',
      name: 'license',
      choices: [ "GPLv3", "MIT", "Apache"]
    
    },
    
    {
        type: 'input',
        message: 'How can others contribute?',
        name: 'contribute',
    },

    {
      type: 'input',
      message: 'How can this code be tested?',
      name: 'test'
    },

    {
      type: 'input',
      message: 'Enter usage information.',
      name: 'usage'
    },
];

// TODO: Create a function to write README file

function writeToFile(data) {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.error(err)
            return
        }
        //file written successfully
    })

}

// TODO: Create a function to initialize app

function init() {
    inquirer
        .prompt(questions)
        .then(response => {
        //    console.log(response.fullName)
            writeToFile(generateMarkdown(response))
            
        });
}

// Function call to initialize app
init();


