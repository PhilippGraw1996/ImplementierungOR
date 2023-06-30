//  CONTAINS ALL FUNCTIONS TO QUERY DATA
const Trips = require('../models/eScooterDataModel');
const mongoose = require('mongoose');


// Get all Trips
const getAllTrips = async (req, res) => {
    const allTrips = await Trips.find({}).sort({code: -1});

    res.status(200).json(allTrips)
}

// Get 5 Trips in Descending Order by Categorie
const getDescendingTripsByCategory = async(req, res) => {
    const category = req.params.category;
    const amount = req.params.amount;
    const order = (req.params.order == 'descending') ? -1 : 1;
    const scooterCode = req.params.code;
    console.log(category);
    console.log(order);
    console.log(scooterCode);
    console.log(amount);
    
    //const resultTrips = await Trips.find({code: 224807}, {code: 1, duration: 1, distance_osrm: 1, batteryDeviation: 1, speed: 1}).sort({[category]: order}).limit(amount);
    const resultTrips = await Trips.find({}, {code: 1, duration: 1, distance_osrm: 1, batteryDeviation: 1, speed: 1}).sort({[category]: order}).limit(amount);
    res.status(200).json(resultTrips);
}


// Get a single Trip
const getSingleTrip = async(req, res) => {
    const { id } = req.params;
    console.log(req.params);

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such Trip Id known'})
    }

    const singleTrip = await Trips.findById(id);

    res.status(200).json(singleTrip);

}



// Get all trips of 1 Scooter by ID


// *** AGGREGATION FUNCIONS ***






module.exports = {
    getAllTrips,
    getSingleTrip,
    getDescendingTripsByCategory
}