const mongoose = require('mongoose');

var SimpleSchema = mongoose.Schema({
    name: {type: String , required: true}
});


const EntityType = mongoose.model('EntityType',SimpleSchema,'EntityTypes');
const SuperLocationType = mongoose.model('SuperLocationType',SimpleSchema,'SuperLocationTypes');
const LocationType = mongoose.model('LocationType',SimpleSchema,'LocationTypes');


module.exports = { LocationType,SuperLocationType,EntityType};