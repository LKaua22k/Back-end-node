//metodo post
const { Router } = require('express');

const userRouter = Router();

userRouter.post("/", (req,res) => {

    res.send(`Metodo Post`)
    
})

module.exports = userRouter;