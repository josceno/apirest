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
    try {
        const project = await Project.create(req.body);
        console.log(req.body)
        console(project)
        return res.send({project})
    } catch (err) {
        console.log(err)
        return res.status(400).send({error: "Error creating new project"})
    }
})
router.put('/:projectId',async (req,res)=>{
    res.send({user: req.userId})
})
router.delete('/:projectId', async (req,res)=>{
    res.send({user: req.userId})
})

module.exports = app => app.use('/projects', router);