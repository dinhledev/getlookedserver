const mysql = require("mysql");
require('dotenv').config();

// const db = mysql.createConnection({
//     user: "admin", 
//     host: "awseb-e-kdzrcpfnxm-stack-awsebrdsdatabase-1eseaby5hc9u.cor0kbnpjcax.us-east-1.rds.amazonaws.com",
//     password: "Mapiumap1%",
//     database: "getlookedDB",
//  });

 const db = mysql.createConnection({
    user: process.env.MysqlUser, 
    host: process.env.MysqlHost,
    password: process.env.MysqlPassword,
    database: process.env.MysqlDatabase
 });
 console.log(db);
 module.exports = db