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
        return
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
        const people = await Person.find()
        res.status(200).json(people)
    } catch (error) {
        res.status(500).json({error:error})
        console.log(error)       
    }
    router.get('/:id',async(req,res)=>{
        //requisition data extract
        const id = req.params.id
        try {
            const person = await Person.findOne({_id: id})
            if(!person){
                res.status(422).json({message:'User not found'})
                return
            }

            res.status(200).json(person)
            
        } catch (error) {
            res.status(500).json({error: error})
            console.log(error)
            
        }
    })
})
// U- update data (PUT,PATCH)
router.patch('/:id', async(req,res)=>{
    
    const id = req.params.id

    const {name, salary, approved} = req.body
    const person = {
        name,
        salary,
        approved,
    }
    try {
        const updatePerson = await Person.updateOne({_id:id}, person)
        console.log(updatePerson)
        if(updatePerson.matchedCount ===0){
            res.status(422).json({error:'User not found'})

        }

        res.status(200).json(person)
        
    } catch (error) {
        res.status(500).json({error:error})
        
    }
})
module.exports = router