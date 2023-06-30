const mongoose = require('mongoose');

const Schema = mongoose.Schema

const eScooterSchema = new Schema({
    readin: {},
    zoneId: {},
    oldlocation: {},
    oldtime: {},
    oldlat: {},
    oldlng: {},
    code: {},
    oldbatteryLevel: {},
    newlocation: {},
    newlat: {},
    newlng: {},
    newtime: {},
    id: {},
    newbatteryLevel: {},
    batteryDeviation: {},
    duration: {},
    batpromin: {},
    dist: {},
    distance_osmr: {},
    detour_factor: {},
    energyConsumption: {},
    full_juicing: {},
    juicing: {},
    redistribution: {},
    round_trip: {},
    speed: {},
    dayOfWeek: {},
    weekend: {}
});

// Gives Name To the Collection in the DataBase
module.exports = mongoose.model('EScooterBerlinFullSet', eScooterSchema, 'test');
