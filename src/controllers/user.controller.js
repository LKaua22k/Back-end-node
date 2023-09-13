const AppError = require('../utils/App.Error')

class UserController {
    create(req,res){
        const {name , email} = req.body

        if(!name){
            throw new AppError("Nome é obrigatorio")
        }

        res.json({name,email});
    }
}

module.exports = UserController;