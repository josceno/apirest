const express = require('express')
const app = express() 
// JSON read
app.use(
    express.urlencoded({
        extended:true,       
    })
)
app.use(express.json())