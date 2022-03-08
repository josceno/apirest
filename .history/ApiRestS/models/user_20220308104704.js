const mongoose =  require('../database')
const bycpt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
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
});
UserSchema.pre('save',function(next){
    const hash = await bycpt.hash(this.password)
})
const User = mongoose.model('User', UserSchema);

module.exports = User