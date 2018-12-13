// load app server....
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//declare routes
const productsRoute = require('./API/Routes/Products');
const ordersRoute = require('./API/Routes/Orders');

mongoose.connect('mongodb://304CEM:' + process.env.MONGO_PASS + '@304cem-api-shard-00-00-2ear1.mongodb.net:27017,304cem-api-shard-00-01-2ear1.mongodb.net:27017,304cem-api-shard-00-02-2ear1.mongodb.net:27017/test?ssl=true&replicaSet=304CEM-API-shard-0&authSource=admin&retryWrites=true', 
{ useNewUrlParser: true }
);

app.use(morgan('short'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH, PUT');
        return res.status(200).json({});
    }
    next();
});

//Request Handles
app.use('/Products', productsRoute);
app.use('/Orders', ordersRoute);

app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        err: {
            message: err.message
        }
    });
});

module.exports = app;