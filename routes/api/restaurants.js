// routes/api/restaurants.js

const express = require('express');
const router = express.Router();

// Load Restaurant model
const Restaurant = require('../../models/Restaurant');

// @route GET api/restaurants/test
// @description tests restaurants route
// @access Public
router.get('/test', (req, res) => res.send('restaurant route testing'));

// @route GET api/restaurants
// @description Get all Restaurants
// @access Public
router.get('/', (req, res) => {
    Restaurant.find()
      .then(restaurants => res.json(restaurants))
      .catch(err => res.status(404).json({ norestaurantsfound: 'No Restaurants found'}));
});

// @route GET api/restaurants/:id
// @description Get single restaurant by id
// @access Public
router.get('/:id', (req, res) => {
    Restaurant.findById(req.params.id)
      .then(restaurant => res.json(restaurant))
      .catch(err => res.status(404).json({ norestaurantfound: 'No Restaurant found'}));
})

// @route POST api/restaurants
// @description add/save Restaurant
// @access Public
router.post('/', (req, res) => {
    Restaurant.create(req.body)
      .then(restaurant => res.json({ msg: 'Restaurant added successfully' }))
      .catch(err => res.status(400).json({ error: 'Unable to add this Restaurant' }));
  });
  
  // @route PUT api/restaurants/:id
  // @description Update Restaurant
  // @access Public
  router.put('/:id', (req, res) => {
    Restaurant.findByIdAndUpdate(req.params.id, req.body)
      .then(restaurant => res.json({ msg: 'Restaurant updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update Restaurant in the database' })
      );
  });
  
  // @route DELETE api/restaurant/:id
  // @description Delete Restaurant by id
  // @access Public
  router.delete('/:id', (req, res) => {
    Restaurant.findByIdAndRemove(req.params.id, req.body)
      .then(restaurant => res.json({ mgs: 'Restaurant record deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such restaurant' }));
  });
  
  module.exports = router;