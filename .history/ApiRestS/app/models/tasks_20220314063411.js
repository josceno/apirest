const mongoose =  require('../../database')
const bcrypt = require('bcryptjs')

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        select: false 
    },
    project:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        require: true
    },
    assignedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:'true',

    },
   completed:{
    type:Boolean,
    require:true,
    default:false,
   },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
   

    createdAt: {
        type: Date,
        default: Date.new
    },
});

const Task = mongoose.model('Task', UserSchema);

module.exports = Task