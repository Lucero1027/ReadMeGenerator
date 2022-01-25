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
      message: 'What is your username on GitHub?',
      name: 'userName',
    },

    

    {
      type: 'input',
      message: 'What is your e-mail address on GitHub?',
      name: 'e-mailAddress',
    },

    {
      type: 'input',
      message: 'What license will your project use?',
      name: 'license',
    
    },
    
    {
        type: 'input',
        message: 'Are there any contributors in your project?',
        name: 'contributors',
    },

    {
      type: 'input',
      message: 'How is this project used?',
      name: 'used'
    },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile('README.md', content, err => {
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
            writeFile('README.md'.generateMarkdown(response))
            
        });
}

// Function call to initialize app
init();


