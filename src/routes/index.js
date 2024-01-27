const { Router } = require('express')

const newusers = require('./newusers.routes')
const notesRoutes = require('./notes.routes')
const TagsRoutes = require('./tags.routes')
const sessionsRoutes = require('./sessions.routes')

const routes = Router()

routes.use("/newusers", newusers)
routes.use("/notes", notesRoutes)
routes.use("/tags", TagsRoutes)
routes.use("/sessions", sessionsRoutes)

module.exports = routes;