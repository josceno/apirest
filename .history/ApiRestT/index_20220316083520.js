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

//listen a port
app.listen(8081,()=>{
    console.log('ok good to go')
})