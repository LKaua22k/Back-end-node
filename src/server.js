const express = require('express')

const app = express()

app.use(express.json())

// Metod simples
app.get("/", (req,res) => {
    res.send("Metodo get")
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

//metodo post
app.post("/users", (req,res) => {

    res.send(`Metodo Post`)
    
})

app.post("/newusers", (req,res) => {
    const {name , email} = req
    
    const text = `Seu nome é ${name} e seu email é ${email}`

    res.json({name,email})

    // res.send(text)
})


const PORT = 3333;

app.listen(PORT , ()=>{console.log('Serve rodando')})