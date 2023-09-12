const express = require('express')

const app = express()

app.get("/", (req,res) => {
    res.send("hello world")
})

app.get("/params/:id/:user", (req,res) => {

    const {id , user} = req.params

    res.send(`Isso é um route params, seu id é ${id} e seu usuario é ${user}`)
})



const PORT = 3333;

app.listen(PORT , ()=>{console.log('Serve rodando')})