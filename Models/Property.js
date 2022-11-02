const mongoose = require('mongoose')

const Property = new mongoose.Schema({
    title: {
        type: String,
        required
    },
    price: {
        type: Number,
        required
    },
    description: {
        type: String,
        required
    },
    address: {
        type: String,
        required
    },
    propertyActionType: {
        // Sell, Rent, Featured
        type: String,
        required
    },
    livingArea: {
        type: Number,
        required
    },
    furnished: {
        // Fully Furnished, Semi Furnished, Not Furnished
        type: String,
        required
    },
    bedrooms: {
        type: Number,
        required
    }
},
    {timestamps: true}
)

module.exports = mongoose.model('Property', Property)