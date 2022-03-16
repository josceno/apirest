const express = require('express')
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