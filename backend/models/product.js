const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    categories: [String],
    sold: {
        type: Boolean,
        default: false
    },
    info: {
        condition: {
            type: String,
            required: true
        },
        hasDelivery: {
            type: Boolean,
            default: true
        }
    },
    properties: [
        {
            propertyName: String,
            propertyValue: String,
        }
    ],
    tags: [String],
    createdDate: {
        type: Date,
        default: Date.now
    },
    lastUpdate: [Date],
    deleteDate: [Date]
});


const Product = new mongoose.model('products', ProductSchema);

module.exports = Product;