const express = require('express')
const authMiddleware = require('../middleware/auth')

const Project = require('../models/Projects')
const Task = require('../models/Task')

const router = express.Router()

router.use(authMiddleware)

router.get('/',(req,res)=>{
    res.send({user: req.userId})
})
router.get('/:projectId',async (req,res)=>{
    res.send({user: req.userId})
})
router.post('/', async (req,res)=>{
    router.post('/', async(req, resp) => {
        try {
            const { title, description, tasks } = req.body;
    
            const project = await Project.create({ title, description, user: req.userId });
    
            await Promise.all(tasks.map(async task => {
                const projectTask = new Task({ ...task, project: project._id });
                await projectTask.save();
                project.tasks.push(projectTask)
            }));
    
            await project.save();
    
            return res.send({ project });
    
        } catch(err) {
            console.log(err);
            return res.status(400).send({ error: 'Error creating new project' })
        }
    });
})
router.put('/:projectId',async (req,res)=>{
    res.send({user: req.userId})
})
router.delete('/:projectId', async (req,res)=>{
    res.send({user: req.userId})
})

module.exports = app => app.use('/projects', router);