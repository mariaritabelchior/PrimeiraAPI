const mongoose = require('mongoose');

const schema = mongoose.Schema({
    CodProduto: {
        type: String,
        required: true,
        index:{unique:true}
    },
    NomeProduto:{
        type: String,
        required: true
    },
    Cor:{
        type: String,
        required: true
    },
    Valor:{
        type: Number,
        required: true
    },
    tamanho:{
        type: String,
        required: true
    },
    QuaEstoque:{
        type: Number,
        required: true
    },
    NomeImagem:{
        type: String,
        required: true
    },
    ItensPedido:{
        type: mongoose.ObjectId,
        ref:'ItensPedido',
        required: true
    }       
});

module.exports = mongoose.model('Produto', schema, 'produtos');
