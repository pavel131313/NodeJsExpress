'use strict'

const response = require('./../response')
const db = require('./../settings/db')

exports.getCandidate = (req, res) => {
  db.query(`SELECT 
                users.id, 
                users.email, 
                candidates.landline, 
                candidates.mobile, 
                candidates.created_at,
                candidates.field_id,
                candidates.skype_id,
                candidates.address_line_1,
                candidates.address_line_2,
                candidates.address_line_3,
                candidates.address_line_4,
                candidates.post_code,
                candidates.linkedin_url,
                candidates.twitter_name,
                candidates.facebook_url,
                candidates.job_title_id,
                candidates.interim_circumstances AS interim_circumstances_slug,
                interim_circumstances.value AS interim_circumstances_value,
                candidates.part_time_circumstances,
                candidates.notice_period AS notice_period_id,
                noticeperiods.value AS notice_period_value,
                candidates.location_comments,
                candidates.additional_notes,
                candidates.internal_notes,
                candidates.cv,
                candidates.status,
                candidates.notify_date,
                candidates.rate_salary_comments,
                users_metadata.first_name,
                users_metadata.last_name 
            FROM users 
                INNER JOIN candidates 
                    ON candidates.user_id = ${req.params.id}
                INNER JOIN candidate_experience
                           ON candidates.user_id = ${req.params.id}
                INNER JOIN noticeperiods
                           ON noticeperiods.id = candidates.notice_period
                INNER JOIN interim_circumstances
                           ON interim_circumstances.id = candidates.interim_circumstances
                INNER JOIN users_metadata 
                    ON users_metadata.user_id = ${req.params.id}
            WHERE
                users.id = ${req.params.id}
            ORDER BY candidates.created_at 
            DESC 
            LIMIT 1`,
    (error, rows, fields) => {
      if(error) {
        response.status(400, error, res)
      } else {
        response.status(200, rows[0], res)
      }
    })

}