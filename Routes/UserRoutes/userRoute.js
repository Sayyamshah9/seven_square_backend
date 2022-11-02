const userRouter = require('express').Router()

userRouter.get('/', (req,res)=>{
    res.send("UserRoute Working Fine")
})

module.exports = userRouter