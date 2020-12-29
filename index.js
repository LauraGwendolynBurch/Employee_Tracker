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
                "QUIT"
            ]


        }).then((res) =>{

            switch (res.action) {
                case "VIEW_DEPARTMENT":
                  viewDepartments();
                  break;
          
                case "VIEW_ROLE":
                
                  break;
          
                case "VIEW_EMPLOYEE":
                  
                  break;
          
                case "QUIT":
                  connection.end();
                  break;
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

db.getDepartments().then((results) =>{

    console.log(results);

})