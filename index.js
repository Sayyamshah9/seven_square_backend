const express = require('express')
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')

const config = require('./config')

// const user = require('./Routes/')
const propertyRoutes = require('./Routes/propertyRouter')


const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

const Port = config.port || 8080

app.use('/api', propertyRoutes.routes);

app.listen(config.port || 8080, ()=>{
    console.log(`Server is Running on Port ${Port}`)
})