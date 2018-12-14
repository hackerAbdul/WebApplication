const mongoose = require('mongoose');

const ProductsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, require: true},
    price: {type: Number, require: true},
    category: {type: String, require:true},
    condition: {type: String, require: true},
    location: {type: String, require: true},
    description: {type: String, require: true},
    productImage: {type: String, require: true}
});

module.exports = mongoose.model('Product', ProductsSchema);