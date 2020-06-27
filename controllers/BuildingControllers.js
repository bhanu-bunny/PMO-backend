const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Entities,SuperLocations} = require('../models/Building');




router.post('/Entities/',(req, res) => {
  var entity = new Entities({

    Project: req.body.Project,
    EntityName:req.body.EntityName,
    Entitycode: req.body.Entitycode
  })

  entity.save((err,doc)=>{
    if (!err) { res.send(doc); }
        else { console.log('Error in adding entity name :' + JSON.stringify(err, undefined, 2)); }
  }
  )



});









module.exports = router;