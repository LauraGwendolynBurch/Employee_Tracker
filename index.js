const db = require("./db");
const inquirer = require("inquirer");
const connection = require("./db/connection");
const header = require("asciiart-logo");
const table = require('console.table');

function askForAction() {

  inquirer
    .prompt({
      message: "Choose something to do",
      name: "action",
      type: "list",
      choices: [
        "VIEW_DEPARTMENT",
        "VIEW_ROLE",
        "VIEW_EMPLOYEE",
        "CREATE_ROLE",
        "QUIT"
        // quit
        // view all employees
        // view all employees by department 
        // view all employees by manager 
        // add employee
        // remove emplyee
        // update employee role
        // update employee manager
        // view all the roles
        // add role
        // remove role
        // view all departments
        // add department
        // remove department 
      ]
    })
    .then((res) => {

      switch (res.action) {
        case "VIEW_DEPARTMENT":
          viewDepartment();
          return;

        case "VIEW_ROLE":
          viewRole()
          return;

        case "VIEW_EMPLOYEE":
          viewEmployee()
          return;

        case "CREATE_ROLE":
          createRole();
          return;

        case "QUIT":
          connection.end();
          return;

        default:
          connection.end();

      }


    })
}

function viewDepartment() {

  db
    .getDepartment()
    .then((results) => {
      console.table(results);
      askForAction();
    });
}

function viewRole() {

  db
    .getRoles()
    .then((results) => {
      console.table(results);
      askForAction();
    });
}

function viewEmployee() {

  db
    .getEmployees()
    .then((results) => {
      console.table(results);
      askForAction();
    });
}


function createRole() {

  db
    .getDepartment()
    .then((department) => {

      const departmentChoices = department.map((department) => ({
        value: department.id,
        name: department.name
      }))

      inquirer
        .prompt([
          {

            message: "What department is this role for?",
            type: "list",
            name: "department_id",
            choices: departmentChoices

          }
        ])
    });
}

db.getDepartment().then((results) => {

  console.log(results);

})

askForAction()

// quit
// view all employees
// view all employees by department 
// view all employees by manager 
// add employee
// remove emplyee
// update employee role
// update employee manager
// view all the roles
// add role
// remove role
// view all departments
// add department
// remove department 


