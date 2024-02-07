const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    database: "employee_db",
    user: "root",
    password: ""
})

con.connect((err) => {
    if (err) throw err;
    console.log("connected to db...");
})


module.exports.con = con;