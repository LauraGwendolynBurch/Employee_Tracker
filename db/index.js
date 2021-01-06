const connection = require('./connection');

module.exports = {
    getDepartment() {

        return connection.query("SELECT * FROM department")

    },
    getRoles() {

        return connection.query("SELECT * FROM role")

    },
    getEmployees() {

        return connection.query("SELECT * FROM employee")

    },
    createDepartment(department) {

        return connection.query("INSERT INTO department SET ?",
            {
                name: department.department_name
            }
        )

    },
    createRole(results) {


        return connection.query("INSERT INTO role SET ?",
            {
                department_id: results.departmentId,
                title: results.titleName,
                salary: results.salaryAmount
            }
        )


    },
    createEmployee(results) {

        return connection.query("INSERT INTO employee SET ?",
            {
                role_id: results.roleId,
                first_name: results.firstName,
                last_name: results.lastName,
                manager_id: results.managerId
                
            }
        )
    }
}