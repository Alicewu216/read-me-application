const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js')
const writeFileAsync = util.promisify(fs.writeFile);
// const Choice = require('inquirer/lib/objects/choice');
// array of questions for user
const questions = () => 
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the tile of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project breifly.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please describe your installation instructions.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide a Description for how to use your applciation.',
        },
        {
            type: 'input',
            name: 'apppath',
            message: 'Please add a path for your application screen shot or screen recording'
        },
        {
            type: 'input',
            name: 'contribution',
            messge: 'Please provide the name for your collaborator',
        },
        {
            type: 'input',
            name: 'githublink',
            message: 'If you have colloborator, please enter his/her github link',
        },        
        {
            type: 'list',
            name: 'liscence',
            message: 'pick the liscence used',
            choices: ['MIT', 'GPL', 'Apache', 'BSD'],
        },
        {
            type: 'input',
            name: 'githubprofile',
            message: 'What is the address of your GitHub profile page?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        }
    ]);



// function to initialize program
function init() {
    questions()
    //function to write readme file
    .then((data) => writeFileAsync('README1.md',generateMarkdown(data)))
    .then(() => console.log('Successfully wrote to README.md'))
    //catch error if occured
    .catch((err) => console.error(err));
}

// function call to initialize program
init();
