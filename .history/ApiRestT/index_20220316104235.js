const express = require('express')
const mongoose = require('mongoose')

const app = express() 
const Person = require('./models/Person')
// JSON read
app.use(
    express.urlencoded({
        extended:true,       
    })
)
app.use(express.json())
// API routes
app.post('/create', async (req,res)=>{
    const{ name, salary, approved} = req.body
    const person = {
        name,
        salary,
        approved
    }
    try{
        await Person.create(person)

        res.status(201).json({message: 'Person has been successfully inserted in the system  '})

    } catch(err){
        res.status(500).json({err: err})
    }
})
//initial route
app.get('/',(req,res)=>{
    res.json({message: "hello express"})
})
//listen a port

mongoose
.connect('mongodb+srv://josceno:jd654718@apicluster.flug9.mongodb.net/bancodaapi?retryWrites=true&w=majority')
//mongodb+srv://josceno:jd654718@apicluster.flug9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
.then(()=>{
    console.log('mongodb connected')
    app.listen(8081)
})
.catch((err) => console.log(err))