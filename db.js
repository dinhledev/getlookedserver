const mysql = require("mysql");
require('dotenv').config();

// const db = mysql.createConnection({
//     user: "admin", 
//     host: "awseb-e-kdzrcpfnxm-stack-awsebrdsdatabase-1eseaby5hc9u.cor0kbnpjcax.us-east-1.rds.amazonaws.com",
//     password: "Mapiumap1%",
//     database: "getlookedDB",
//  });
const user =  process.env.MysqlUser
const host =  process.env.MysqlHost
const password =  process.env.MysqlPassword
const database =  process.env.MysqlDatabase

 const db = mysql.createConnection({
    user: user , 
    host: host,
    password: password,
    database: database
 });
 console.log(db);
 module.exports = db