const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name: {
        type: String,
        required
    },
    phoneNo: {
        type: Number,
        length: 10,
        required
    },
    address: {
        type: String,
        required
    },
    propertyType: {
        // BuyProperty, RentOutProperty, RentAProperty, SellProperty
        type: String,
        required
    }
},
    {timestamps: true}
)

module.exports = mongoose.model('User', User)