const { Router } = require('express')

const newusers = require('./newusers.routes')
const notes = require('./notes.routes')

const routes = Router()

routes.use("/newusers", newusers)
routes.use("/notes", notes)

module.exports = routes;