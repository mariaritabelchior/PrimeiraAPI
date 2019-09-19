const mongoose = require('mongoose');

const schema = mongoose.Schema({
   CodPedido: {
      type: String,required: true,
      index: {unique : true}
   },
   FormaPagamento: {
      type: String,
      required: true
   },
   DataPedido: {
      type: Date,
      required: true
   },
   Desconto: {
      type: Number,
      required: true
   },
   Frete: {
      type: String,
      required: true
   },
   Cliente: {
      type: mongoose.ObjectId,
      ref: 'Cliente',
      required: true
   }
});

module.exports = mongoose.model('Pedido', schema, 'pedidos');