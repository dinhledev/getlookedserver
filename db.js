const mysql = require("mysql");
require('dotenv').config();

// const db = mysql.createConnection({
//     user: "admin", 
//     host: "awseb-e-kdzrcpfnxm-stack-awsebrdsdatabase-1eseaby5hc9u.cor0kbnpjcax.us-east-1.rds.amazonaws.com",
//     password: "Mapiumap1%",
//     database: "getlookedDB",
//  });

 const db = mysql.createConnection({
    user: process.env.MYSQLUSER, 
    host: process.env.MYSQLHOST,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE
 });
 console.log(db);
 module.exports = db