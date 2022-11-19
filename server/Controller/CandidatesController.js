'use strict'

const response = require('./../response')
const db = require('./../settings/db')

exports.getAllCandidates = (req, res) => {
  db.query(`SELECT 
                users.id, 
                users.email, 
                candidates.landline, 
                candidates.mobile, 
                candidates.created_at, 
                users_metadata.first_name, 
                users_metadata.last_name 
            FROM users 
                INNER JOIN candidates 
                    ON candidates.user_id = users.id 
                INNER JOIN users_metadata 
                    ON users_metadata.user_id = users.id 
            ORDER BY candidates.created_at 
            DESC 
            LIMIT 999999`,
    (error, rows, fields) => {
    if(error) {
      response.status(400, error, res)
    } else {
      response.status(200, rows, res)
    }
  })

}