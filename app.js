//  Variables
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const managerTemplate = require("./templates/manager-template");
const engineerTemplate = require("./templates/engineer-template");
const internTemplate = require("./templates/intern-template");

let managers = [];
let engineers = [];
let interns = [];

const filename = "./output/team.html";

// Prompt for getting manager details
async function addManager() {
  console.log("------MANAGER------");
  try {
    const response = await inquirer.prompt([
      {
        type: "input",
        message: "What is the manager's name?",
        name: "managerName",
        validate: input => {
          if (input !== "" && input != null) {
            return true;
          } else {
            return "Manager's name cannot be blank";
          }
        }
      },
      {
        type: "input",
        message: "What is the manager's ID Number?",
        name: "managerID",
        validate: input => {
          if (input !== "" && !isNaN(input)) {
            return true;
          } else {
            return "Please enter a number";
          }
        }
      },
      {
        type: "input",
        message: "What's your manager's email?",
        name: "managerEmail",
        validate: input => {
          if (
            input !== "" &&
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
          ) {
            return true;
          } else {
            return "Please enter a valid email address";
          }
        }
      },
      {
        type: "input",
        message: "What's your manager's office number?",
        name: "managerOfficeNumber",
        validate: input => {
          if (input !== "" && !isNaN(input)) {
            return true;
          } else {
            return "Please enter a number";
          }
        }
      }
    ]);

    const newManager = new Manager(
      response.managerName,
      response.managerID,
      response.managerEmail,
      response.managerOfficeNumber
    );
    managers.push(newManager);
  } catch (err) {
    console.log(err);
  }
  buildTeam();
}

// Prompt for getting engineer details
async function addEngineer() {
  console.log("------ENGINEER------");
  try {
    const response = await inquirer.prompt([
      {
        type: "input",
        message: "What is the Engineer's name?",
        name: "engineerName",
        validate: input => {
          if (input !== "" && input != null) {
            return true;
          } else {
            return "Engineer's name cannot be blank";
          }
        }
      },
      {
        type: "input",
        message: "What is the Engineer's ID number?",
        name: "engineerId",
        validate: input => {
          if (input !== "" && !isNaN(input)) {
            return true;
          } else {
            return "Please enter a number";
          }
        }
      },
      {
        type: "input",
        message: "What is the Engineer's email?",
        name: "engineerEmail",
        validate: input => {
          if (
            input !== "" &&
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
          ) {
            return true;
          } else {
            return "Please enter a valid email address";
          }
        }
      },
      {
        type: "input",
        message: "What it the Engineer's GitHub handler?",
        name: "engineerGitHub",
        validate: input => {
          if (input !== "" && input != null) {
            return true;
          } else {
            return "Github repo handler cannot be blank";
          }
        }
      }
    ]);
    const newEngineer = new Engineer(
      response.engineerName,
      response.engineerId,
      response.engineerEmail,
      response.engineerGitHub
    );
    engineers.push(newEngineer);
  } catch (err) {
    console.log(err);
  }
  buildTeam();
}

// Prompt for getting intern details
async function addIntern() {
  console.log("------INTERN------");
  try {
    const response = await inquirer.prompt([
      {
        type: "input",
        message: "What is the Intern's name?",
        name: "internName",
        validate: input => {
          if (input !== "" && input != null) {
            return true;
          } else {
            return "Intern's name cannot be blank";
          }
        }
      },
      {
        type: "input",
        message: "What is the Intern's ID number?",
        name: "internId",
        validate: input => {
          if (input !== "" && !isNaN(input)) {
            return true;
          } else {
            return "Please enter a number";
          }
        }
      },
      {
        type: "input",
        message: "What is the Intern's email?",
        name: "internEmail",
        validate: input => {
          if (
            input !== "" &&
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
          ) {
            return true;
          } else {
            return "Please enter a valid email address";
          }
        }
      },
      {
        type: "input",
        message: "What it the Intern's school?",
        name: "internSchool",
        validate: input => {
          if (input !== "" && input != null) {
            return true;
          } else {
            return "School's name cannot be blank";
          }
        }
      }
    ]);
    const newIntern = new Intern(
      response.internName,
      response.internId,
      response.internEmail,
      response.internSchool
    );
    interns.push(newIntern);
  } catch (err) {
    console.log(err);
  }
  buildTeam();
}

// Build HTML file for team members
async function writeHTML(managers, engineers, interns) {
  const managerHTML = managerTemplate.buildManagerCard(managers);
  const engineerHTML = engineerTemplate.buildEngineerCard(engineers);
  const internHTML = internTemplate.buildInternCard(interns);

  let htmlString = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Team</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/sketchy/bootstrap.min.css"
      />
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossorigin="anonymous"
      />
      <style>
        body {
          font-size: 1.5rem;
        }
        a {
          color: #ffffff;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <a class="navbar-brand m-auto" href="#">My Team</a>
      </nav>
  
      <section id="team-members">
        <div class="container">
          <div class="row">
              ${managerHTML}
              ${engineerHTML}
              ${internHTML}
          </div>
        </div>
      </section>
  
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>
  `;
  fs.writeFile(filename, htmlString, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Team HTML File created");
    }
  });
}

// Give options on which member to create.
async function buildTeam() {
  try {
    const response = await inquirer.prompt([
      {
        type: "list",
        message: "Add another member? Please select from the options below",
        name: "memberType",
        choices: ["Manager", "Engineer", "Intern", "Done"]
      }
    ]);
    switch (response.memberType) {
      case "Manager":
        addManager();
        break;
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
      case "Done":
        writeHTML(managers, engineers, interns);
        break;
    }
  } catch (err) {
    console.log(err);
  }
}

addManager();
