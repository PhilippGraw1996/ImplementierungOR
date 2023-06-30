const express = require('express');
const router = express.Router();


const Trips = require('../models/eScooterDataModel');

const {
    getAllTrips,
    getSingleTrip,
    getDescendingTripsByCategory
} = require('../controllers/tripControllers');


// GET all Scooter Trips
router.get('/', getAllTrips);

// GET 5 Trips Sorted by Category Descending
router.get('/descByCat/:category/:amount/:order/:code', getDescendingTripsByCategory)

// GET single Scooter Trips
router.get('/:id', getSingleTrip);


module.exports = router; 