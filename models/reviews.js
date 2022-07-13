const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

module.exports = mongoose.model('reviews', {
    author: {
        type: ObjectId,
        required: true,
        ref: users
    },
    date:{
        default: Date.now,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    house: {
        type: ObjectId,
        required: true,
        ref: houses
    },
    // rating: Number
})

