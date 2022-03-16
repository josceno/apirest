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

            res.status(200).json(person)
            if(!person){
                res.status(422).json({message:'User not found'})
                return
            }
        } catch (error) {
            res.status(500).json({error: error})
            console.log(error)
            
        }
    })
})
module.exports = router