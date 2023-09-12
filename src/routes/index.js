const { Router } = require('express')

const newusers = require('./newusers.routes')

const routes = Router()

routes.use("/newusers", newusers)

module.exports = routes;