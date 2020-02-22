//  Variables
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");

let teamMembers = [];

// Prompt for getting manager details
async function addManager() {
  try {
    const response = await inquirer.prompt([
      {
        type: "input",
        message: "What is the manager's name?",
        name: "managerName"
      },
      {
        type: "input",
        message: "What's your ID Number?",
        name: "managerID"
      },
      {
        type: "input",
        message: "What's your manager's email?",
        name: "managerEmail"
      },
      {
        type: "input",
        message: "What's your manager's office number?",
        name: "managerOfficeNumber"
      }
    ]);

    const newManager = new Manager(
      response.managerName,
      response.managerID,
      response.managerEmail,
      response.managerOfficeNumber
    );
    teamMembers.push(newManager);
  } catch (err) {
    console.log(err);
  }
  buildTeam();
}

// Give options on which member to create and add to the team

async function buildTeam() {
  try {
    const response = await inquirer.prompt([
      {
        type: "list",
        message: "Let's create your team! Please select from the options below",
        name: "memberType",
        choices: ["Engineer", "Intern", "Done"]
      }
    ]);
    switch (response.memberType) {
      case "Engineer":
        console.log("Engineer selected");
        break;
      case "Intern":
        console.log("intern selected");
        break;
      case "Done":
        console.log("Generate HTML");
        break;
    }
  } catch (err) {
    console.log(err);
  }
}

addManager();
