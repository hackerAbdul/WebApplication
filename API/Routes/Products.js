const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const Product = require('../models/products');

router.get('/', (req, res, next) => {
    Product.find()
    .select('name price category condition location description _id')
    .exec()
    .then(docs => {
        const response = {
            count: docs.length,
            products: docs.map(doc => {
                return {
                    _id: doc._id,
                    name: doc.name,
                    price: doc.price,
                    category: doc.category,
                    condition: doc.condition,
                    location: doc.location,
                    description: doc.description,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:2000/products/' + doc._id
                    }
                }
            })
        };
        console.log(docs);
        if (docs.length <= 0){
            res.status(404).json({
                message: "No products in the listing"
            });
        }else{
            res.status(200).json(response)
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
        category: req.body.category,
        condition: req.body.condition,
        location: req.body.location,
        description: req.body.description
    });
    //stores model into the db
    product
    .save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: "Product has been created",
            createdProduct: {
                _id: result._id,
                name: result.name,
                price: result.price,
                category: result.category,
                condition: result.condition,
                location: result.location,
                description: result.description,
                request: {
                    type: 'GET',
                    url: 'http://localhost:2000/products/' + result._id
                }
            }
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
    .select('name price category condition location description _id')
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
    Product.updateOne({
        _id: id
    },
    {$set: updateOps})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: "Updated",
            request: {
                type: 'GET',
                url: 'http://localhost:2000/products/' + id
            }
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
        res.status(200).json({
            message: "Item deleted from listing"
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error : err});
    })
});


module.exports = router;