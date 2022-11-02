const express = require('express')
require('dotenv').config()
const cors = require('cors')
const ConnectToDB  = require('./Config/DB_Config')

const user = require('./Routes/UserRoutes/userRoute')
const property = require('./Routes/PropertyRoutes/addNewProperty')

const app = express()

app.use(express.json())
app.use(cors())

const Port = process.env.PORT || 5000

app.use('/api/user', user)
app.use('/api/property', property)

//Trial Route
app.get('/', (req,res)=>{
    res.send("Working Fine")
})

app.listen(Port, ()=>{
    console.log(`Server is Running on Port ${Port}`)
})

ConnectToDB()
