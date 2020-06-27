const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Projectname ,Entities,SuperLocations} = require('../models/Building');


router.post('/Projects/',(req, res) => {
    var Project= new Projectname({
        name: req.body.name
    });

    Project.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in adding project name :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.post('/Entities/',(req, res) => {
  var entity = new Entities({
    name:req.body.name
  });

  entity.save((err,doc)=>{
    if (!err) { res.send(doc); }
        else { console.log('Error in adding entity name :' + JSON.stringify(err, undefined, 2)); }
  })



});



router.post('/SuperLocations/',(req, res) => {
 
});







module.exports = router;