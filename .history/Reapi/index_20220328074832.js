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
mongoose
.connect(`mongodb+srv://${dbuser}:${dbpassword}@apicluster.flug9.mongodb.net/bancodaapi?retryWrites=true&w=majority`)

app.get('/',(req,res)=>{
    res.json({message: "hello express"})
})


app.listen(8081)