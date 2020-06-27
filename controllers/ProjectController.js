const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;


var {Projectname} = require('../models/Building');


router.post('/',(req, res) => {
    var Project= new Projectname({
        name: req.body.name
    });

    Project.save((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in adding project name :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.get('/',(req,res)=>{
    Projectname.find((err,doc)=>{
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Projects :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;