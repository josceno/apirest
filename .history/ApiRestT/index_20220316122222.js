require('dotenv').config
const express = require('express')
const mongoose = require('mongoose')

const app = express() 

// JSON read
app.use(
    express.urlencoded({
        extended:true,       
    })
)
app.use(express.json())

//API routes
const personRoutes = require('./routes/personRoutes')
app.use('/person',personRoutes)

//initial route
app.get('/',(req,res)=>{
    res.json({message: "hello express"})
})
//listen a port
const dbuser = process.env.dbuser
const dbpassword = process.env.dbpassword
mongoose
.connect(`mongodb+srv://${dbuser}:${dbpassword}@apicluster.flug9.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
//mongodb+srv://josceno:jd654718@apicluster.flug9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
.then(()=>{
    console.log('mongodb connected')
    app.listen(8081)
})
.catch((err) => console.log(err))