const express = require('express')
const path = require('path')

const teams = require('./routes/teams')
const themes = require('./routes/themes')
const people = require('./routes/people')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/teams', teams)
server.use('/api/v1/themes', themes)
server.use('/api/v1/people', people)

module.exports = server
