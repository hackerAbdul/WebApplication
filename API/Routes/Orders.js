const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Authenticate = require('../middleware/Authentication');

//Connecting Orders Schema
const Order = require('../models/orders');
const Product = require('../models/products');

//Getting all orders
router.get('/', Authenticate, (req, res, next) =>{
    Order.find()
    .select('quantity product _id')
    .populate('product')
    .exec()
    .then(docs => {
        const response = {
            count: docs.length,
            orders: docs.map(doc => {
                return {
                    _id: doc._id,
                    product: doc.product,
                    quantity: doc.quantity,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:2000/orders/' + doc._id
                    }
                }
            })
        };
        console.log(docs);
        if (docs.length <= 0){
            res.status(404).json({
                message: "No Order has been placed"
            });
        }else{
            res.status(200).json(response)
        }
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

//Posting a new order
router.post('/', Authenticate, (req, res, next) =>{
    Product.findById(req.body.productId)
        .then(product => {
            if (!product){
                return res.status(404).json({
                    message: "Order Not Found"
                })
            }
            const order = new Order({
                _id: mongoose.Types.ObjectId(),
                quantity: req.body.quantity,
                product: req.body.productId
            })
            return order.save();
        })
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Order has been placed',
                createdOrder: {
                    _id: result._id,
                    product: result.product,
                    quantity: result.quantity
                },
                request: {
                    type: 'GET',
                    url: 'http://localhost:2000/orders/' + result._id
                }
            })
        })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

router.get('/:orderId', Authenticate, (req, res, next) =>{
    Order.findById(req.params.orderId)
    .exec()
    .then(order => {
        res.status(200).json({
            order: order,
            request: {
                type: 'GET',
                url: 'http://localhost:2000/orders'
            }
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

router.delete('/:orderId', Authenticate, (req, res, next) =>{
    Order.remove({_id: req.params.orderId})
    .exec()
    .then(result => {
        res.status(200).json({
            message: "Order Has Been Deleted",
            request: {
                type: 'POST',
                url: 'http://localhost:2000/orders',
                body: { productId: 'ID', quantity:'NUMBER'}
            }
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;