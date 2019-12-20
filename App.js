// load app server....
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//declare routes
const productsRoute = require('./API/Routes/Products');
const ordersRoute = require('./API/Routes/Orders');
const userRoute = require('./API/Routes/User')

mongoose.connect('mongodb+srv://304CEM:' + process.env.MONGO_PASS + '@api-2ear1.mongodb.net/test?retryWrites=true&w=majority', 
{ useNewUrlParser: true }



);

app.use(morgan('short'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

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
app.use('/User', userRoute);

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