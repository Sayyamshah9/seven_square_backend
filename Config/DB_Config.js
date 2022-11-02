const mongoose = require('mongoose')

module.exports = function ConnectToDB() {
    try{
        mongoose.connect(
            process.env.DATABASE_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err)=>{
                if(!err){
                    console.log("Database Connected!");
                }else{
                    console.log(err)
                }
            }
        )
    }catch(err){
        console.log(err);
    }
}

// module.exports = ConnectToDB