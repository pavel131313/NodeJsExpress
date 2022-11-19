'use strict'

module.exports = (app) => {
  const candidatesController = require('./../Controller/CandidatesController')
  const cors = require('cors')
  
  app
    .get('/api/candidates/:offset', cors(), candidatesController.getAllCandidates)

}
