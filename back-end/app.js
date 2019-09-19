var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const database = require('./config/database');
database('mongodb://localhost:27017/4not-2019-2');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

var cliente = require('./routes/cliente');
app.use('/cliente', cliente);

const pedido = require('./routes/pedido');
app.use('/pedido', pedido);

const parcela = require('./routes/parcela');
app.use('/parcela', parcela);

const itenspedido = require('./routes/itenspedido');
app.use('/itenspedido', itenspedido);

const produto = require('./routes/produto');
app.use('/produto', produto);
module.exports = app;
