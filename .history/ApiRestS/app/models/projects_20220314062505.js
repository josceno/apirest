const mongoose =  require('../../database')
const bcrypt = require('bcryptjs')

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        select: false 
    },
    description:{
        type: String,
        require: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    task:[{
        type: mongoose.Schema.ObjectId,
        ref: 'task',
    }],

    createdAt: {
        type: Date,
        default: Date.new
    },
});

const Project = mongoose.model('Project', UserSchema);

module.exports = Project