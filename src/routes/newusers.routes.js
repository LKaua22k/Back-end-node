const { Router } = require('express')

const UserController = require('../controllers/user.controller')

const userController = new UserController()

function myMiddlewarer(req,res,next){
    console.log('Isso é um middleware')

    // if(!req.body.isAdmin){
    //     return res.json({"message": "Não autorizado"})
    // }

    // next()
}


const newusers = Router()


newusers.post("/", userController.create)

module.exports = newusers;