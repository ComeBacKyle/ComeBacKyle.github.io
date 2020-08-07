const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileSync = util.promisify(fs.writeFile);

function askQuestion() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the name of your project?",
            name: "name"
        },
        {
            type: "input",
            message: "What does you project do?",
            name: "decribe"
        },

        {
            type: "input",
            message: "How do you install your project?",
            name: "install"
        },
        {
            type: "input",
            message: "What could your project be used for?",
            name: "usage"
        },

        {
            type: "list",
            message: "Select type of license",
            name: "license",
            choices: [
                { value: "mit" },
                { value: "gpl-3.0" },
                { value: "agpl-3.0" }
            ]
        },
        {
            type: "input",
            message: "Are people able to contribute to your project?",
            name: "contribution"
        },

        {
            type: "input",
            message: "What is your GitHub username",
            name: "username"
        },

    ])
}

function renderREADME(answers) {
    return $(answers.name)

};

askQuestion()
    .then(function (answers) {
        const readme = renderREADME(answers);
        return writeFileSync("README.md", readme);
    })
    .then(function () {
        console.log("Writing README.md");
    })
    .catch(function (err) {
        console.log(err)
    })