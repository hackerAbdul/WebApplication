const mongoose = require('mongoose');

const ProductsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
    location: String
});

module.exports = mongoose.model('Product', ProductsSchema);