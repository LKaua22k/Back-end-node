const { hash } = require('bcryptjs')
const sqlConnection = require('../database/sqlite')
const AppError = require('../utils/App.Error')

class UserController {
    async create(req,res){

        const {name,email,password} = req.body

        const database = await sqlConnection()
        const checkUser = await database.get("SELECT * FROM users WHERE email = (?)",[email])

        const HashPassword = await hash(password, 8)

        if(checkUser){
            throw new AppError('Usuario ja existe')
        }

        await database.run("INSERT INTO users (name,email,password) VALUES (?,?,?)",[name,email,HashPassword])
        
        res.status(201).json()
    }

    async update(req,res){
        const { name , email} = req.body;   
        const { id } = req.params;

        const database = await sqlConnection()
        const user = await database.get("SELECT * FROM users WHERE id = (?)",[id])

        if(!user){
            throw new AppError("Usuario não encontrado")
        }

        const UserUpdate = await database.get("SELECT * FROM users WHERE email = (?)",[email])

        if(UserUpdate && UserUpdate.id !== user.id){
            throw new AppError("Este email ja esta em uso")
        }

        user.name = name
        user.email = email
        
        await database.run("UPDATE users SET name = ?, email = ?, update_att = ? WHERE id = ?",[user.name,user.email,new Date(),id])

        return res.json()
    }
}

module.exports = UserController;