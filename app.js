//  Variables
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");

let teamMembers = [];

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
}

addManager();
