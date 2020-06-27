const mongoose = require('mongoose');

var EntitySchema = mongoose.Schema({
    Project:{ type:mongoose.Schema.Types.ObjectId, ref:"projectname", required: true},
    EntityName: {type: String , required: true},
    Entitycode:{ type:String,required:true}
});

var SuperLocationSchema = mongoose.Schema({
    Project:{ type:mongoose.Schema.Types.ObjectId, ref:"projectname", required: true},
    EntityName: {type:mongoose.Schema.Types.ObjectId, ref:"Entities", required: true},
    SuperLocation:{ type: String, required:true },
    SuperLocationcode:{type:String,required:true }
});





var NameSchema = mongoose.Schema({
    name: {type: String, required: true}
});


var BuildingSchema = mongoose.Schema({
    EntityType:{ type: mongoose.Schema.Types.ObjectId,ref:'EntityType', required: true},
    SuperLocationType:{ type: mongoose.Schema.Types.ObjectId,ref:'SuperLocationType', required: true}
});


const Projectname= mongoose.model('projects',NameSchema,'Projects');

const Entities =mongoose.model('Entities',EntitySchema,'Entities');

const SuperLocations =mongoose.model('SuperLocations',SuperLocationSchema,'SuperLocations');


const Building = mongoose.model('Building',BuildingSchema,'Buildings');

module.exports = { Building, Projectname,Entities,SuperLocations};