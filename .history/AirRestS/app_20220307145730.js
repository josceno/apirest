const express = require('express')
const bodyParser = require('body-parser')
const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false }))

app.get('/',(req,rest)=>{
    res.send('ok')
});
app.listen(8081,()=>{console.log('foi')});