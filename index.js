const { prompt } = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");





function promptUser(){
    // prompt the user for github data.
// array of questions for user
const questions = [
    {
        type: "input",
        name: "username",
        message: "Please enter your github username"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address"
    },
    {
        type: "input",
        name: "title",
        message:  "Please enter the project's title"
        
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a project description"
    },
    {
        type: "input",
        name: "install",
        message: "Please enter the installation instructions for your project",
        default: "npm i"
    },
    {  type: "input",
        name: "usage",
        message: "Please provide details on usage information for your project.",
    },
    {
        type: "list",
        name: "license",
        choices:[
            "Apache License 2.0",
            "GNU Public License (GPL)",
            "GNU Library or 'Lesser' General Public License (LGPL)",
            "MIT License",
            "Mozilla Public License2.0",
            "Common Development and Distribution License",
            "Eclipse Public License version 2.0",
            "Other"

        ]
    },
    { 
        type: "input",
        name: "contributing",
        message: "Please advise of any guidelines in contributing to this project"
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide any  testing instructions for this project"
    }]
    return prompt(questions);
}
    

// function to write README file
async function writeToFile(fileName, data) {
    console.log("writeToFile: Filename is " + fileName);
     console.log("writeToFile: data is " + data);
    fs.writeFile(filename, data);
    console.log("The README was created successfully");
}

// function to initialize program
async function init() {
    try{
        const answers = await promptUser();
        const readmeFile = await generateMarkdown(answers);
   
        console.log(answers);
        console.log(readmeFile);
        
        writeToFile( "goodReadme.md", readmeFile);
          
    }
    catch (err){
        console.log(err);
    }
   
}

// function call to initialize program
init();
