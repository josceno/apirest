const router = require('express').Router()
const Person = require('../models/Person')



// API routes
// C- Create data
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
// R- Read Data
router.get('/',async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({error:error})
        console.log(error)
        
    }
})
module.exports = router