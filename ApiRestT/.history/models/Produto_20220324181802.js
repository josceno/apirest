const mongoose = require('mongoose')


const Produto = mongoose.model('Produto',{
    name: String,
    Salary: Number,
    approved: Boolean,
})

module.exports = Person