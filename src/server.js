const express = require('express')

const app = express()

// Metod simples
app.get("/", (req,res) => {
    res.send("hello world")
})

// Route params
app.get("/params/:id/:user", (req,res) => {

    const {id , user} = req.params

    res.send(`Isso é um route params, seu id é ${id} e seu usuario é ${user}`)
})

// querry params
app.get("/params", (req,res) => {

    const {page , lemit} = req.query

    res.send(`Isso é um Querry params, seu id é ${page} e seu usuario é ${lemit}`)
})



const PORT = 3333;

app.listen(PORT , ()=>{console.log('Serve rodando')})