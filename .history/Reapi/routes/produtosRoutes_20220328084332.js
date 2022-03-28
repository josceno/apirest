const router = require('express').Router()
const Produto = require('../models/Produto')

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

module.exports = router