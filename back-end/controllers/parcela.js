const Parcela = require('../models/Parcela');

const controller = {}; // Objeto vazio

controller.novo = async function(req, res) {
   try {
      await Parcela.create(req.body);
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
      const alunos = await Parcela
      .find()
      .populate('pedido');// Nome do atributo
      res.send(parcelas);
   }
   catch(erro) {
      console.error(erro);
      res.sendStatus(500).end();
   }
}

controller.obterUm = async function(req, res) {
   const id = req.params.id;
   try {
      const parcela = await Parcela.findById(id);
      if(parcela) {    
         res.send(parcela);
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
      const parcela = await Parcela.findByIdAndUpdate(id, req.body);
      if(parcela) {
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
      const parcela = await Parcela.findByIdAndDelete(id);
      if(parcela) {
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