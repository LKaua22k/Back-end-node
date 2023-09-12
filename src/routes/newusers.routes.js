const { Router } = require('express')

const UserController = require('../controllers/user.controller')

const userController = new UserController()

const newusers = Router()


newusers.post("/", userController.create)

newusers.post("/", (req,res) => {
    const {name , email} = req.body
    

    res.json({name,email});
})


module.exports = newusers;