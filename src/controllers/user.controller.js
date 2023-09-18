const sqlConnection = require('../database/sqlite')
const AppError = require('../utils/App.Error')

class UserController {
    async create(req,res){
        const {name , email} = req.body

        const database = await sqlConnection()

        const checkUser = database.get("SELECT * FROM users WHERE email = (?)",[email])

        if(!checkUser){
            throw new AppError('Usuario ja existe')
        }

        res.status(201).json({})
        
        
        // if(!name){
        //     throw new AppError("Nome é obrigatorio")
        // }

        // res.json({name,email});
    }
}

module.exports = UserController;