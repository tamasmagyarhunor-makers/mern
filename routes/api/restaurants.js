// routes/api/restaurants.js

const express = require('express');
const router = express.Router();

// Load restaurants controller
const restaurants = require('../../controllers/restaurant.controller');

// Load Restaurant model
const Restaurant = require('../../models/Restaurant');

// @route GET api/restaurants/test
// @description tests restaurants route
// @access Public
router.get('/test', (req, res) => res.send('restaurant route testing'));

// @route GET api/restaurants
// @description Get all Restaurants
// @access Public
router.get('/', restaurants.findAll);

// @route GET api/restaurants/:id
// @description Get single restaurant by id
// @access Public
router.get('/:id', restaurants.findOne);

// @route POST api/restaurants
// @description add/save Restaurant
// @access Public
router.post('/', restaurants.create);
  
// @route PUT api/restaurants/:id
// @description Update Restaurant
// @access Public
router.put('/:id', restaurants.update);
  
// @route DELETE api/restaurant/:id
// @description Delete Restaurant by id
// @access Public
router.delete('/:id', restaurants.delete);
  
module.exports = router;