const express = require('express')
const app = express()
const authMiddleware = require('../middlewares/auth')

const router = express.Router()

router.use(authMiddleware)

router.get('/',(req,res)=>{
    res.send({ok: true})
})
module.exports = app => app.use('/projects', router);