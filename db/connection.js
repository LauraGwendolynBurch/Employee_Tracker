const util = require("util");
const mysql = require("mysql");


// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Mysrch83141",
  database: "employees"
});

// connect to the mysql server and sql database
connection.connect();

 connection.query = util.promisify(connection.query);

 module.exports = connection;