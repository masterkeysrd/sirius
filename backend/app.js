const express = require('express');
const indexRouter = require('./routes/index');

const app = express();

app.use('/api', indexRouter);

module.exports = app;