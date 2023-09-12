const { Router } = require('express')

const newusers = Router()

newusers.post("/", (req,res) => {
    const {name , email} = req.body
    

    res.json({name,email});
})

module.exports = newusers;