const Manager = require('./classes/manager');
const Engineer = require('./classes/engineer');
const Intern = require('./classes/intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const style_dir = path.resolve(__dirname, 'style');
const stylePath = path.join(style_dir, 'index.html');

const render = require('./src/pagetemplate');
const teamMembers = [];
const idArray = [];

console.log(
    '\n Welcome to Team Generator! Follow the prompted instructions to build your team. \n'
);

// Everything exists within this function
function appMenu() {
// Prompt team managers information
    function createManager() {
        console.log(
            "\n Enter Team Manager's Information: \n"
        );
        inquirer.prompt([
            // Manager Name
            {
                type: 'input',
                name: 'managerName',
                message: 'What is the team manager name?',
                validate: (answer) => {
                    if(answer!== ''){
                        return true
                    } 
                    return 'Please enter at least one character.'
                }
            },
            // Manager ID
            {
                type: 'input',
                name: 'managerId',
                message: 'Enter team manager ID: ',
                validate: (answer) => {
                    // regular expression (reg ex)
                    const pass = answer.match(/^[1-9]\d*$/);
                    if(pass){
                        return true
                    } 
                    return 'Please enter a positive number greater than zero.'
                }
            },
            // Manager Email
            {
                type: 'input',
                name: 'managerEmail',
                message: 'Enter team manager email: ',
                validate: (answer) => {
                    const pass = answer.match(/\S+@\S+\.\S+/);
                    if(pass){
                        return true
                    } 
                    return 'Please enter a valid email address.'
                }
            },
            // Manager Office Number
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'Enter team manager office number: ',
                validate: (answer) => {
                    const pass = answer.match(/^[1-9]\d*$/);
                    if(pass){
                        return true
                    } 
                    return 'Please enter a positive number greater than zero.'
                }
            },
        ])
        // pushes the answers into teamMember array which helps the rendering of the team generator
        .then((answers) => {
            const manager = new Manager(
                answers.managerName,
                answers.managerId,
                answers.managerEmail,
                answers.managerOfficeNumber,
            );
            teamMembers.push(manager);
            idArray.push(answers.mangerId);
            createTeam();
        })
    }
    // prompts the user for how they would like to continue
        // needs to be implemented after each createEngineer() and createIntern() functions
    function createTeam(){
        inquirer.prompt([
            {
                type: 'list',
                name: 'userChoice',
                message: 'How would you like to continue?',
                choices: ['Add an Engineer','Add an Intern','Finish buiding my team']
            }
        ])
        .then((choice) => {
            switch(choice.userChoice){
                case 'Add an Engineer':
                    createEngineer();
                    break;
                case 'Add an Intern':
                    createIntern();
                    break;
                default:
                    buildTeam();
            }
        })
    }
// Engineer 
    function createEngineer() {
        console.log(
            "\n Enter Engineer's Information: \n"
        );
        inquirer.prompt([
            // Engineer Name
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the engineers name?',
                validate: (answer) => {
                    if(answer!== ''){
                        return true
                    } 
                    return 'Please enter at least one character.'
                }
            },
            // Engineer ID
            {
                type: 'input',
                name: 'engineerId',
                message: 'Enter engineers ID: ',
                validate: (answer) => {
                    // regular expression (reg ex)
                    const pass = answer.match(/^[1-9]\d*$/);
                    if(pass){
                        return true
                    } 
                    return 'Please enter a positive number greater than zero.'
                }
            },
            // Engineer Email
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'Enter engineers email: ',
                validate: (answer) => {
                    const pass = answer.match(/\S+@\S+\.\S+/);
                    if(pass){
                        return true
                    } 
                    return 'Please enter a valid email address.'
                }
            },
            // Engineers GitHub
            {
                type: 'input',
                name: 'engineerGitHub',
                message: 'Enter engineers git hub username: ',
                validate: (answer) => {
                    if(answer!== ''){
                        return true
                    } 
                    return 'Please enter at least one character.'
                }
            },
        ])
        // pushes the answers into teamMember array which helps the rendering of the team generator
        .then((answers) => {
            const engineer = new Engineer(
                answers.engineerName,
                answers.engineerId,
                answers.engineerEmail,
                answers.engineerGitHub,
            );
            teamMembers.push(engineer);
            idArray.push(answers.engineerId);
            createTeam();
        })
    }
    // prompts the user for how they would like to continue
        // needs to be implemented after each team member function
    function createTeam(){
        inquirer.prompt([
            {
                type: 'list',
                name: 'userChoice',
                message: 'How would you like to continue?',
                choices: ['Add an Engineer','Add an Intern','Finish buiding my team']
            }
        ])
        .then((choice) => {
            switch(choice.userChoice){
                case 'Add an Engineer':
                    createEngineer();
                    break;
                case 'Add an Intern':
                    createIntern();
                    break;
                default:
                    buildTeam();
            }
        })
    }


// Intern
    function createIntern() {
        console.log(
            "\n Enter Intern's Information: \n"
        );
        inquirer.prompt([
        // Intern Name
        {
            type: 'input',
            name: 'internName',
            message: 'What is the interns name?',
            validate: (answer) => {
                if(answer!== ''){
                    return true
                } 
                return 'Please enter at least one character.'
            }
        },
        // Intern ID
        {
            type: 'input',
            name: 'internId',
            message: 'Enter interns ID: ',
            validate: (answer) => {
                // regular expression (reg ex)
                const pass = answer.match(/^[1-9]\d*$/);
                if(pass){
                    return true
                } 
                return 'Please enter a positive number greater than zero.'
            }
        },
        // Interns Email
        {
            type: 'input',
            name: 'internEmail',
            message: 'Enter interns email: ',
            validate: (answer) => {
                const pass = answer.match(/\S+@\S+\.\S+/);
                if(pass){
                    return true
                } 
                return 'Please enter a valid email address.'
            }
        },
        // Interns School
        {
            type: 'input',
            name: 'internSchool',
            message: 'Enter interns school: ',
            validate: (answer) => {
                if(answer!== ''){
                    return true
                } 
                return 'Please enter at least one character.'
            }
        },
    ])
    // pushes the answers into teamMember array which helps the rendering of the team generator
    .then((answers) => {
        const intern = new Intern(
            answers.internName,
            answers.internId,
            answers.internEmail,
            answers.internSchool,
        );
        teamMembers.push(intern);
        idArray.push(answers.internId);
        createTeam();
    })
}
// prompts the user for how they would like to continue
    // needs to be implemented after each team member function
function createTeam(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'userChoice',
            message: 'How would you like to continue?',
            choices: ['Add an Engineer','Add an Intern','Finish buiding my team']
        }
    ])
    .then((choice) => {
        switch(choice.userChoice){
            case 'Add an Engineer':
                createEngineer();
                break;
            case 'Add an Intern':
                createIntern();
                break;
            default:
                buildTeam();
        }
    })
}   

// Building the team
    function buildTeam() {
        // render(teamMembers) links us back to our page template
        fs.writeFileSync(stylePath, render(teamMembers), 'utf-8')
    }
    // acts as a domino
    createManager();
}

appMenu();
