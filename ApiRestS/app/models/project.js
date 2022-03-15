const mongoose = require('../../database');


const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        select:true
    },
     description: {
         type: String,
         require:true,
         select:true
     },
         user: {
             type: mongoose.Schema.Types.ObjectId,
             ref: 'User',
             require: true,
         },
     
     tasks: [{
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Task',

     }],
        createdAt: {
            type: Date,
            default: Date.now,
        }
});



const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;