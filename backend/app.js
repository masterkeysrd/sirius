const morgan = require('morgan');
const express = require('express');
const config = require('./config');
const indexRouter = require('./routes/index');

const app = express();

app.use(morgan('dev'));

app.use('/', indexRouter);

app.listen(config.port, config.host, () => {
    console.log(`Server is listening at ${config.host}:${config.port}`);
});