const express = require('express')
const app = express()

const router = express.Router()
router.get('/',(req,res)=>{
    res.send({ok: true})
})
module.exports = app => app.use('/projects', router);