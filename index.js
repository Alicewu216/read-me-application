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
            message: 'Please provide your usage informations.',
        },
        {
            type: 'input',
            name: 'contribution',
            messge: 'Please provide your contribution guidlines.',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide yout test instructions',
        },
        {
            type: 'list',
            name: 'liscence',
            message: 'pick the liscence used',
            choices: ['MIT', 'GPL', 'Apache', 'BSD'],
        },
        {
            type: 'input',
            name: 'githubname',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        }
    ]);


// function to write README file
function writeToFile(fileName, data) {
}
// const generateREADME = (data) =>
// `${data.title}
// ${data.description}`

// function to initialize program
function init() {
    questions()
    .then((data) => writeFileAsync('README,md',generateMarkdown(data)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
}

// function call to initialize program
init();
