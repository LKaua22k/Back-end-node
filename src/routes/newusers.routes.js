const { Router } = require('express')

const newusers = Router()

newusers.post("/", (req,res) => {
    const {name , email} = req.body
    
    // const text = `Seu nome é ${name} e seu email é ${email}`

    res.json({name,email});

    // res.send(text)
})

module.exports = newusers;