class UserController {
    create(req,res){
        const {name , email} = req.body

        res.json({name,email});
    }
}

module.exports = UserController;