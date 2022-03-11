const express = require('express')
//encript password and create token MD5
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// create toke for password change
const crypto = require('crypto')
//sen email
const mailer = require('../../modules/mailer')


const authConfig = require('../../config/auth')

const User = require('../models/User') 

const router = express.Router()

function tokengenerator(params = {}){
    return jwt.sign(params, authConfig.secret,{
        expiresIn: 86400,
    })
}

router.post('/register', async(req,res)=>{
    const {email} = req.body

    try{
        if (await User.findOne({email})){
            return res.status(400).send('error: user already exist')
        }
        const user = await User.create(req.body)
        user.password = undefined

        return res.send({
            user,
            token: tokengenerator({id: user.id})
        })
    }catch(err){
        return res.status(400).send({error:'Registration failed'});
    }
})
router.post('/authenticate',async(req,res)=>{
    const {email,password } = req.body;
    const user = await User.findOne({email}).select('+password')

    if(!user){
        return res.status(400).send({error: 'User not found' });
    }
    if(!await bcrypt.compare(password, user.password)){
        return res.status(400).send({error: 'invalid password'})
    }
    user.password = undefined

   
    res.send({
        user,
        token: tokengenerator({id: user.id})
    })
})
router.post('/forgot_password',async(req,res)=>{
    const {email} = req.body;

    try{

        const user = await User.findOne({email})
        if(!user){
            return res.status(400).send({error: 'User not found'})
        }
        const token = crypto.randomBytes(20).toString('hex');

        const now = new Date();
        now.setHours(now.getHours()+ 1)

        await User.findByIdAndUpdate(user.id, {
            '$set':{
                passwordResetExpires: token,
                passwordResetExpires: now
            }
        })
        console.log(token,now)
        mailer.sendMail({
            to: email,
            from: 'jdamasceno414@gmail.com',
            template: 'auth/forgot-password',
            context: {token},
        },(err)=>{
            if(err)
               { 
                   console.log(err)
                   return res.status(400).send({error: 'Cannot send forgot password email'
                })}
               
            return res.send()

        })

    }catch (err){
        res.status(400).send({error: 'Erro on forgot password, try again'})
    }

})
router.post('/reset_password', async(req,rew)=>{
    const {email, token, password} = req.body

    try {
        const user = await User.findOne({email})
        .select('+passwordResetToken passwordReset expires')

        if(!user){
            return res.status(400).send({error: 'User nod found'})
        }
        if(token !== user.passwordResetToken){
            return res.status(400).send({error: "Token invalid"})
        }
        const now = new Date
        if (now> user.passwordResetExpires){
          return res.status(400).send('token expired, generate a new one')  
        }
        user.password =password;
        await user.save()
    } catch (err) {
        res.status(400).send({error: 'Cannot reset password, try again'})
    }

})

module.exports = app => app.use('/auth',router)