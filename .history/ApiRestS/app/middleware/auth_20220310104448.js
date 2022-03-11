const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')


module.exports = (req, res, next)=>{
    const autheader  = req.headers.authorization;

    if(!autheader){
        return res.status(401).send({error: 'no token provided'})
    }
    const parts = autheader.split(' ');

    if(!parts.lenght == 2){
        return res.status(401).send({error: 'token  error'})
    }
    const [scheme, token] = parts;
    if(!/^Bearer$/i.test(scheme)){
        return res.status(401).send({error: 'token malformatted'})
    }

    jwt.verify(token,authConfig.secret,(err, decoded)=>{
        if(err){
            res.status(401).send({error: 'token invalid'})
        }
        req.userId = decoded.id
        return next()
    });
}