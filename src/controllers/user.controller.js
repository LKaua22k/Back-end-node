const { hash, compare } = require('bcryptjs')
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
        
        return res.status(201).json()
    }

    async update(req,res){
        const { name , email, password , old_password} = req.body;   
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

        user.name = name ?? user.name
        user.email = email ?? user.email

        if(password && !old_password){
            throw new AppError('Senha antiga não confere')
        }

        if(password && old_password){
            const checkPassword = await compare(old_password, user.password)

            if(!checkPassword){
                throw new AppError('Senha antiga não confere')
            }
        }

        user.password = await hash(password,8)
        
        await database.run("UPDATE users SET name = ?, email = ?, password = ? ,update_att = DATETIME ('now') WHERE id = ?",[user.name,user.email,user.password,id])

        return res.json()
    }
}

module.exports = UserController;