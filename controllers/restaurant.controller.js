const Restaurant = require('../models/Restaurant');

// Create and Save new Restaurant
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Restaurant name cant't be empty!"})
        return;
    }

    // Create a Restaurant
   Restaurant.create(req.body)
      .then(restaurant => res.json({
          msg: 'Restaurant added successfully',
          restaurant_created: restaurant
        }))
      .catch(err => res.status(400).json({ error: 'Unable to add this Restaurant' }));
}

// Retrieve all Restaurants from the database
exports.findAll = (req, res) => {
    Restaurant.find()
      .then(restaurants => res.json(restaurants))
      .catch(err => res.status(404).json({ norestaurantsfound: 'No Restaurants found'}));
}

// Find a single Restaurant with an id
exports.findOne = (req, res) => {
    Restaurant.findById(req.params.id)
      .then(restaurant => res.json(restaurant))
      .catch(err => res.status(404).json({ norestaurantfound: 'No Restaurant found'}));
}

// Update a Restaurant by the id in the request
exports.update = (req, res) => {
    Restaurant.findByIdAndUpdate(req.params.id, req.body)
        .then(restaurant => res.json({ msg: 'Restaurant updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update Restaurant in the database' }));
}

// Delete a Restaurant with the specified id in the request
exports.delete = (req, res) => {
    Restaurant.findByIdAndRemove(req.params.id, req.body)
      .then(restaurant => res.json({ mgs: `${restaurant} -> Restaurant record deleted successfully` }))
      .catch(err => res.status(404).json({ error: 'No such restaurant' }));
}

