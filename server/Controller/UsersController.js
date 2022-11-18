'use strict'

const response = require('./../response')
const db = require('./../settings/db')

exports.getAllUsers = (req, res) => {

  db.query('SELECT `ID`, `user_login`, `user_nicename`, `user_email` FROM `wp_users`', (error, rows, fields) => {
    if(error) {
      response.status(400, error, res)
    } else {
      response.status(200, rows, res)
    }
  })

}