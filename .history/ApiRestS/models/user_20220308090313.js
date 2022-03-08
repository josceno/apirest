const mongoose =  require('mongoose')
const { stringify } = require('nodemon/lib/utils')

const UserSvhema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true,
        select:false,
    },
    createdAt: {
        type: Date,
        default: Date.new
    },
})
const User = mongoose.model('User', UserSchema)

module.exports = User