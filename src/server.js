require('express-async-errors')

const express = require('express')
const routes = require('./routes')
const AppError = require('./utils/App.Error')


const app = express()
app.use(express.json())

app.use(routes)

app.use((error,req,res,next) => {

    // Para erro do lado do cliente
    if(error instanceof AppError){
        return res.status(error.statusCode).json({
            Status: "Error",
            message: error.message
        })
    }

    // Para erro interno na parte do servidor 
        return res.status(500).json({
            Status: "error",
            message: "Internal server error"
        })
})

const PORT = 3333;

app.listen(PORT , ()=>{console.log('Serve rodando')})