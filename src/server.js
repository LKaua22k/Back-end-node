const express = require('express')

const routes = require('./routes')


const app = express()
app.use(express.json())

app.use(routes)

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



const PORT = 3333;

app.listen(PORT , ()=>{console.log('Serve rodando')})