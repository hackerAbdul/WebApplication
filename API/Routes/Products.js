const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const Product = require('../models/products');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handles GET request for /products"
    });
});

router.post('/', (req, res, next) => {
//Storing instance of req.body into mongoose database
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        location: req.body.location
    });
    //stores model into the db
    product
    .save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: "Handles POST request for /products",
            createdProduct: result
        });
    })
    //Error Handling
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

//getting information for a single product
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
    .exec()
    .then(doc => {
        console.log("From database", doc)
        if(doc){
            res.status(200).json(doc)
        } else{
            res.status(404).json({
                message: "Id Not Found"
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

//PATCH route
router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "Updated Product"
    });
});


//Delete route
router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "Deleted Product"
    });
});


module.exports = router;