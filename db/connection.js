const mysql = require('mysql2');
require("dotenv").config();


const db = mysql.createConnection({
        host: 'localhost',
        user: user,
        password: password,
        database: 'employee_tracker'
    },
    console.log('Connected to the employee_tracker database.')
);


module.exports = db;