const express = require('express');
const cors = require('cors');

const config = require('./Config/config');

const propertyRoutes = require('./Routes/propertyRouter');
const userRoutes = require('./Routes/userRoute');


const app = express()

app.use(express.json())
app.use(cors())

const Port = config.port || 8080

app.use('/api/property', propertyRoutes.routes);
app.use('/api/user', userRoutes.routes);

app.listen(config.port || 8080, ()=>{
    console.log(`Server is Running on Port ${Port}`);
})