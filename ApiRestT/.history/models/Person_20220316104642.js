const mongoose = require('mongoose')


const Person = mongoose.model('Person',{
    name: String,
    Salary: Number,
    approved: Boolean,
})

module.exports = Person