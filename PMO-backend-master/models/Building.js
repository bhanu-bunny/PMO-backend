const mongoose = require('mongoose');

var SimpleSchema = mongoose.Schema({
    name: {type: String , required: true},
    code:{ type:String,required:true}
});
var arraySchema = mongoose.Schema({
    name:{type:Array,required:true}
})
//var Noschema= mongoose.Schema({
  //  number:{ type:Number, required:true}
//});

var BuildingSchema = mongoose.Schema({
    EntityType:{ type: mongoose.Schema.Types.ObjectId,ref:'EntityType', required: true},
    SuperLocationType:{ type: mongoose.Schema.Types.ObjectId,ref:'SuperLocationType', required: true}
});


const Projectname= mongoose.model('projects',SimpleSchema,'Projects');
//const TowerNos= mongoose.model('TowerNos',Noschema,'TowerNos')
const Entities =mongoose.model('Entities',SimpleSchema,'Entities');
const SuperLocations =mongoose.model('SuperLocations',SimpleSchema,'SuperLocations');


const Building = mongoose.model('Building',BuildingSchema,'Buildings');

module.exports = { Building, Projectname,Entities,SuperLocations};