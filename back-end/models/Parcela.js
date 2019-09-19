const mongoose = require('mongoose');

const mongooseSeq = require('mongoose-sequence')(mongoose);

const schema = mongoose.Schema({
    CodParcela:{
        type: String,
        required: true,
        index:{unique:true}
    },
    ValorParcela:{
        type: Number,
        required: true
    },
    DataPagamento:{
        type: Date,
        required: true
    },
    DataVencimento:{
        type: Date,
        required: true
    },
    NumeroParcelas:{
        type: Number,
        required: true
    },
    Pedido:{
        type: mongoose.ObjectId,
        ref:'Pedido',
        required:true
    }
});
module.exports = mongoose.model('Parcela', schema, 'parcelas');
