const express = require('express')
const authMiddleware = require('../middleware/auth')

const Project = require('../models/projects')
const Task = require('../models/Task')

const router = express.Router()

router.use(authMiddleware)

router.get('/',(req,res)=>{
    res.send({user: req.userId})
})
router.get('/:projectId',async (req,res)=>{
    res.send({user: req.userId})
})
module.exports = app => app.use('/projects', router);