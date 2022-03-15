const express = require('express')
const authMiddleware = require('../middleware/auth')

const Project = require('../models/Projects')
const Task = require('../models/Task')

const router = express.Router()

router.use(authMiddleware)

router.get('/',async(req,res)=>{
    try {
        const projects = await Project.find().populate('user')
        return res.send({projects})
    } catch (err) {
        return res.status(400).send({error: "Error loading new project"})
    }
})
router.get('/:projectId',async (req,res)=>{
    try {
        const projects = await Project.findById(req.params.projectId).populate('user')
        return res.send({projects}) 
    } catch (err) {
        return res.status(400).send({erro: 'Error finding projects'})
    }
    
})
router.post('/', async (req,res)=>{
    try {
        const {title, description, tasks} = req.body;
        const project = await Project.create({title, description, user: req.userId, title: req.title});
        tasks.map(task=>{
            const projectTask = new Task({...task, project: project._id})
            projectTask.save()
        })
       
        console.log(req.body)
        console.log({project})
        return res.send(project)
    } catch (err) {
        console.log(err)
        return res.status(400).send({error: "Error creating new project"})
    }
})
router.put('/:projectId',async (req,res)=>{
    res.send({user: req.userId})
})
router.delete('/:projectId', async (req,res)=>{
    try {
        const project = await Project.findByIdAndRemove(req.params.projectId).populate('user')

        return res.send()
    } catch (err) {
        return res.status(400).send({error: 'Error cannot delete project'})
        
    }
})

module.exports = app => app.use('/projects', router);