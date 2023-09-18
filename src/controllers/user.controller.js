const { hash } = require('bcryptjs')
const sqlConnection = require('../database/sqlite')
const AppError = require('../utils/App.Error')

class UserController {
    async create(req,res){
        const {name, email, password} = req.body

        const database = await sqlConnection()
        const checkUser = await database.get("SELECT * FROM users WHERE email = (?)",[email])

        if(checkUser){
            throw new AppError('Usuario ja existe')
        }

        await database.run("INSERT INTO users (name,email,password) VALUES (?,?,?)",[name,email,password])

        return res.status(201).json()
    }
}

module.exports = UserController;