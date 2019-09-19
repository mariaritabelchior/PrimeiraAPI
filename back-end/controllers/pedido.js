const Pedido = require('../models/Pedido');

const controller = {}; // Objeto vazio

controller.novo = async function(req, res) {
   try {
      await Pedido.create(req.body);
      // HTTP 201: Created
      res.sendStatus(201).end();
   }
   catch(erro) {
      console.error(erro);
      // HTTP 500: Internal server error
      res.sendStatus(500).end();
   }
}

controller.listar = async function(req, res) {
   try {
      // find() sempre retorna um VETOR,
      // mesmo que vazio
      const pedidos = await Pedido
      .find()
      .populate('cliente')// Nome do atributo
      res.send(pedidos);
   }
   catch(erro) {
      console.error(erro);
      res.sendStatus(500).end();
   }
}

controller.obterUm = async function(req, res) {
   const id = req.params.id;
   try {
      const pedido = await Pedido.findById(id);
      if(pedido) {    
         res.send(pedido);
      }
      else {     
         // HTTP 404: Not found
         res.sendStatus(404).end();
      }
   }
   catch(erro) {
      console.error(erro);
      res.sendStatus(500).end();
   }
}

controller.atualizar = async function(req, res) {
   const id = req.body._id;
   try {
      const pedido = await Pedido.findByIdAndUpdate(id, req.body);
      if(pedido) {
         // HTTP 204: No content
         res.sendStatus(204).end();
      }
      else {
         res.sendStatus(404).end();
      }
   }
   catch(erro) {
      console.error(erro);
      res.sendStatus(500).end();
   }
}

controller.excluir = async function(req, res) {
   const id = req.body._id;
   try {
      const pedido = await Pedido.findByIdAndDelete(id);
      if(pedido) {
         res.sendStatus(204).end();
      }
      else {
         res.sendStatus(404).end();
      }
   }
   catch(erro) {
      console.error(erro);
      res.sendStatus(500).end();
   }
}

module.exports = controller;