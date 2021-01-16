const express = require('express');
const indexRouter = require('./routes/index');
const productRouter = require('./routes/product');
const errorHandler = require('./core/errorHandler');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', indexRouter);
app.use('/api/products', productRouter);

app.use(errorHandler);

module.exports = app;