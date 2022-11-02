const newPropertyRouter = require('express').Router()

newPropertyRouter.get('/', (req,res)=>{
    res.send("NewPropertyRoute working Fine")
})

module.exports = newPropertyRouter