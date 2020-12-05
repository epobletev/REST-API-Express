const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes')

const app = express();


app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

module.exports = app;