const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    database: "practica2php",
    user: "root",
    password: "",
    port: "3307"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con;
// exports.con = con;