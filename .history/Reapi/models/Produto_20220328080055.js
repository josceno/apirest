const mongoose = require('mongoose')


const Produto = mongoose.model('Produto',{
    nome: String,
    valor_unitario: Number,
    qtde_estoque: Number
})

module.exports = Produto