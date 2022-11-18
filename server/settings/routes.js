'use strict'

module.exports = (app) => {
  const candidatesController = require('./../Controller/CandidatesController')

  app
    .route('/api/candidates')
    .get(candidatesController.getAllCandidates)

}
