const { Router } = require('express')

const userRouter = require('./user.routes')
const newusers = require('./newusers.routes')

const routes = Router()

routes.use("/users", userRouter)

routes.use("/newusers", newusers)

module.exports = routes;

