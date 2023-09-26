const { Router } = require('express')

const newusers = require('./newusers.routes')
const notesRoutes = require('./notes.routes')

const routes = Router()

routes.use("/newusers", newusers)
routes.use("/notes", notesRoutes)

module.exports = routes;