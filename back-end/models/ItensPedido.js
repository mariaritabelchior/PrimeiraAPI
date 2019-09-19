const mongoose = require('mongoose');

const schema = mongoose.Schema({
    CodIntensPedido:{
        type: String,
        required: true
    },
    QuaProduto:{
        type: Number,
        required: true
    },
    Desconto:{
        type: Number
    }
});

module.exports = mongoose.model('ItensPedido', schema, 'itenspedidos');