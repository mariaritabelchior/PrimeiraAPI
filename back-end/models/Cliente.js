const mongoose = require('mongoose');

const schema = mongoose.Schema({
   CodCliente: {
      type: String,required: true,
      index: {unique : true}
   },
   Nome: {
      type: String,
      required: true
   },
   Rua: {
      type: String,
      required: true
   },
   Numero: {
      type: String,
      required: true
   },
   Bairro: {
      type: String,
      required: true
   },
   Cidade: {
      type: String,
      required: true
   },
   Estado: {
      type: String,
      required: true
   },
   Pais: {
      type: String,
      required: true
   },
   Cep: {
      type: String,
      required: true
   },
   Telefone: {
      type: String,
      required: true
   },
   DataNascimento: {
      type: Date,
      required: true
   },
   Cpf: {
      type: String,
      required: true,
      // Não pode repetir CPF no cadastro
      index: {unique : true}
   },
   Rg: {
      type: String,
      required: true,
   },
   Email: {
      type: String,
      required: true,
      // Não pode repetir e-mail no cadastro
      index: {unique : true}
   }   
});
module.exports = mongoose.model('Cliente', schema, 'clientes');