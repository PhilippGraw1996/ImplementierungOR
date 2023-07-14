const express = require('express');
const router = express.Router();


const Trips = require('../models/eScooterDataModel');

const {
    getAllTrips,
    getSingleTrip,
    getDescendingTripsByCategory,
    getDescendingTripsByCode
} = require('../controllers/tripControllers');


// GET all Scooter Trips - Depricated, not used
router.get('/', getAllTrips);

// GET 5 Trips Sorted by Category Descending
router.get('/descByCat/:category/:amount/:order', getDescendingTripsByCategory)

// GET single Scooter Trips - Depricated, not used
router.get('/:id', getSingleTrip);

// GET single Scooter Trips - Depricated, not used
router.get('/:code', getDescendingTripsByCode);


module.exports = router; 