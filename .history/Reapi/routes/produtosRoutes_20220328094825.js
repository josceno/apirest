const router = require('express').Router()
const Produto = require('../models/Produto')
//Create
router.post('/', async (req,res)=>{

    // req.body
    const {nome,valor_unitario,qtde_estoque} = req.body
    if(!nome || !valor_unitario|| !qtde_estoque){
        res.status(402).json('Os valores cadastrados não são válidos')
    }
    const produto = {
        nome,
        valor_unitario,
        qtde_estoque,
    }
    try {
        await Produto.create(produto)
        res.status(200).json('Produto cadastrado')

    } catch (error) {
        res.status(400).json('Ocorreu um erro desconhescido ')
    }

})
//Read
router.get('/', async(req,res)=>{
    try{
        const produtos = await Produto.find()
        res.status(200).json(produtos)
    }catch(error){
        res.status(400).json('Ocorreu um erro desconehscido')
    }
})
router.get('/:id', async (req,res)=>{
    const id = req.params.id
    try {
        const produto = await Produto.findOne({_id:id})
        res.status(200).json(produto)

    } catch (error) {
        res.status(400).json('Ocorreu um erro desconehscido')
        console.log(error)
        
    }
})

//Update
router.patch('/:id', async(req,res)=>{
    const id = req.params.id
    const {nome,valor_unitario,qtde_estoque} = req.body

    const produto = {
        nome,
        valor_unitario,
        qtde_estoque,
    }
    try {
        const updateProduct = await Produto.updateOne({_id: id}, produto)
        console.log(updateProduct)
        if(updateProduct.matchedCount === 0){
            res.status(412).json('id invalida')
            return
        }
       
        res.status(200).json(produto)
    } catch (error) {
        res.status(400).json("Ocorreu um erro desconhescido")
        console.log(error)
    }

})
//Delete
router.delete('/:id', async(req,res)=>{
    const id = req.params.id

    const produto = await Produto.findOne({_id:id})
    if(!produto){
        res.status(402).json('item não encontrado')
        return
    }
})


module.exports = router