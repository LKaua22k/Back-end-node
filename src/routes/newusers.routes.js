const { Router } = require('express')

const UserController = require('../controllers/user.controller')

const userController = new UserController()

const newusers = Router()

newusers.post("/", userController.create)
newusers.put("/:id", userController.update)

module.exports = newusers;
