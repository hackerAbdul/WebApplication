const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const Product = require('../models/products');

router.get('/', (req, res, next) => {
    Product.find()
    .exec()
    .then(docs => {
        console.log(docs);
        if (docs.length <= 0){
            res.status(404).json({
                message: "No users found"
            });
        }else{
            res.status(200).json(docs)
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
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
    const id = req.params.productId;
    const updateOps = {};
    for (const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Product.update({
        _id: id
    },
    {$set: updateOps})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: "Updated"
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});


//Delete route
router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId
    Product.deleteOne({
        _id: id
    })
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error : err});
    })
});


module.exports = router;