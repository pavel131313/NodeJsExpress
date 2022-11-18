const colors = require('colors');
const mysql = require('mysql')
const config = require('../config')

const connection = mysql.createConnection({
  host: config.HOST,
  port: config.PORT,
  user: config.DBUSER,
  password: config.DBPASSWORD,
  database: config.DBNAME
})

connection.connect((error) => {
  if(error) {
    return console.log(colors.red.underline('Database connection error!'));
  } else {
    return console.log(colors.green('Connection successful!'));
  }
})

module.exports = connection