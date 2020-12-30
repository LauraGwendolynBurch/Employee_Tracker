const db = require("./db");
const inquirer = require("inquirer");
const connection = require("./db/connection");

function askForAction (){

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
            ]


        }).then((res) =>{

            switch (res.action) {
                case "VIEW_DEPARTMENT":
                  viewDepartments();
                  return;
          
                case "VIEW_ROLE":
                
                  return;
          
                case "VIEW_EMPLOYEE":
                  
                  return;

                case "CREATE_ROLE":
                  createRole();
                    return;
          
                default:
                  connection.end();
                  
                }


        })
}

function viewDepartments() {

    db  
        .getDepartments()
        .then(( results ) =>{
            console.table( results );
            askForAction();
        });

}

function createRole(){

  db  
        .getDepartments()
        .then(( departments ) =>{

          const departmentChoices = department.map( (department) => ({
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

db.getDepartments().then((results) =>{

    console.log(results);

})

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


