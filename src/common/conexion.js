var con = mysql.createConnection({
    host: "localhost",
    //port: "3307",
    database: "practica2php",
    user: "root",
    password: ""
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

//module.exports = con;
// exports.con = con;