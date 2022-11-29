'use strict'

const cors = require("cors");
const candidatesController = require("../Controller/CandidatesController");
const candidateController = require("../Controller/CandidateController");
module.exports = (app) => {
  const candidatesController = require('./../Controller/CandidatesController')
  const cors = require('cors')
  
  app
    .get('/api/candidates', cors(), candidatesController.getAllCandidates)

  app
    .get('/api/candidate/:id', cors(), candidateController.getCandidate)

}
