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

//initial route
app.get('/',(req,res)=>{
    res.json({message: "hello express"})
})
//listen a port
app.listen(8081,()=>{
    console.log('ok good to go')
})
mongoose
.connect('mongodb+srv://josceno:jd654718@apicluster.flug9.mongodb.net/bancodaapi?retryWrites=true&w=majority')
//mongodb+srv://josceno:jd654718@apicluster.flug9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
.then(()=>{
    console.log('mongodb connected')
    app.listen(8081)
})
.catch((err) => console.log(err))