const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handles GET request for /products"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: "Handles POST request for /products"
    });
});

//getting information for a single product
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special'){
        res.status(200).json({
            message: "special ID",
            id: id
        });
    }else {
        res.status(200).json({
            message: "you passed an id"
        });
    };
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