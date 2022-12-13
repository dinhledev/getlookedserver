const mysql = require("mysql");
require('dotenv').config();

// const db = mysql.createConnection({
//     user: "admin", 
//     host: "awseb-e-kdzrcpfnxm-stack-awsebrdsdatabase-1eseaby5hc9u.cor0kbnpjcax.us-east-1.rds.amazonaws.com",
//     password: "Mapiumap1%",
//     database: "getlookedDB",
//  });

 const db = mysql.createConnection({
    user: process.env.PORT ? process.env.MYSQLUSER:"root" , 
    host: process.env.PORT ? process.env.MYSQLHOST:"localhost",
    password: process.env.PORT ? process.env.MYSQLPASSWORD:"12345",
    database: process.env.PORT ? process.env.MYSQLDATABASE:"getlookeddb"
 });
 console.log(db);
 module.exports = db