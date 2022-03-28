const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(
    express.urlencoded({
        extended: true 
    })
)
app.use(express.json())
const dbuser = 'josceno'
const dbpassword = 'NXHxLy4vFPTGPE35'

app.get('/',(req,res)=>{
    res.json({message: "hello express"})
})

mongoose
    .connect(`mongodb+srv://${dbuser}:${dbpassword}@apicluster.flug9.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
    .then(()=>{
        console.log('connected to Mongodb')
        app.listen(8081)
    })
    .catch((err)=>{
        console.log(err)
    })




app.listen(8081)