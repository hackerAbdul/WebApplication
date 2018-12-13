// load app server....
const express = require('express');
const app = express();
const morgan = require('morgan');

//declare routes
const productsRoute = require('./API/Routes/Products');
const ordersRoute = require('./API/Routes/Orders');

app.use(morgan('short'))

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