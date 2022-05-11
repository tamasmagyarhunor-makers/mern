// models/Restaurant.js

const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema(
{
    name: String,
    type: String,
    description: String,
    address: String,
    phone: String,
    owner: String,
    opendate: Date,
    open: Boolean,
}, 
{
    timestamps: true
});

module.exports = Restaurant = mongoose.model('restaurant', RestaurantSchema);