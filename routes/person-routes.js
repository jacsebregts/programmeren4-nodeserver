//
// Hier de person routes
//
const express = require('express')
const PersonController = require('../controllers/person-controller')
const routes = express.Router()

routes.get('/person', PersonController.getAllPersons)
routes.post('/person', PersonController.createPerson)

routes.get('/person/:id', PersonController.getPersonById)
routes.delete('/person/:id', PersonController.deletePersonById)

module.exports = routes
