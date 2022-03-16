const router = require('express').Router()
const Person = require('./models/Person')



// API routes
router.post('/', async (req,res)=>{
    const{ name, salary, approved} = req.body
    const person = {
        name,
        salary,
        approved,
    }
    if(!name){
        res.status(422).json({error: 'name is required'})
    }
    try{
        await Person.create(person)

        res.status(201).json({message: 'Person has been successfully inserted in the system  '})

    } catch(err){
        res.status(500).json({err: err})
        console.log(err)
    }
})
module.exports = router