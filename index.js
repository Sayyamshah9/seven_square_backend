const express = require('express');
const cors = require('cors');

// const config = require('./Config/config');

const propertyRoutes = require('./Routes/propertyRouter');
const userRoutes = require('./Routes/userRoute');


const app = express()

app.use(express.json())
app.use(cors())

const Port = 8080

app.use('/api/property', propertyRoutes.routes);
app.use('/api/user', userRoutes.routes);

app.get('/', (req,res)=>{
    res.json({ApiStatus: "7Square realtors Api is Working"})
})

app.listen(8080, ()=>{
    console.log(`Server is Running on Port ${Port}`);
})