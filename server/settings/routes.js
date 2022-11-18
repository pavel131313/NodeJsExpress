'use strict'

module.exports = (app) => {
  const candidatesController = require('./../Controller/CandidatesController')
  const usersController = require('./../Controller/UsersController')
  const postsController = require('./../Controller/PostsController')

  app
    .route('/api/candidates')
    .get(candidatesController.getAllCandidates)

  app
    .route('/api/users')
    .get(usersController.getAllUsers)

  app
    .route('/api/posts')
    .get(postsController.getPosts)

}