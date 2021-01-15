const app = require('../app');
const yaml = require('yamljs');
const morgan = require('morgan');
const config = require('../config');
const swaggerUI = require('swagger-ui-express');


app.use(morgan('dev'));

const swaggerDocument = yaml.load('./api.yaml');

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(config.port, config.host, () => {
    console.log(`Server is listening at ${config.host}:${config.port}`);
});