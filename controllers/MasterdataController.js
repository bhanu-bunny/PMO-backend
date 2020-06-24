const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const multer = require('multer');
const upload= multer();



const checkAuth= require('../middlewares/check-auth');

var { SuperLocationType, EntityType,LocationType ,Building} = require('../models/Masterdata');


// => localhost:3000/Masterdata/
//EntityType Controllers
router.get('/EntityType/', (req, res) => {
    EntityType.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Entities :' + JSON.stringify(err, undefined, 2)); }
    }).select('name _id');
});

router.get('/EntityType/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    EntityType.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Entity :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/EntityType/',upload.single('image'), (req, res) => {
    var ET= new EntityType({
        name: req.body.name
    });

    ET.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in adding Entity :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/EntityType/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var Entitytype = {
        name: req.body.name
    };
    Entitytype.findByIdAndUpdate(req.params.id, { $set: Entitytype }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Entity Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/EntityType/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        EntityType.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Entity Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});



//LocationType controllers

router.post('/LocationType/',checkAuth, (req, res) => {
    var LT= new LocationType({
        name: req.body.name
    });

    LT.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in adding Location Type :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/LocationType/', (req, res) => {
    LocationType.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Locationtype :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/LocationType/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    LocationType.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving LocationType :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.put('/LocationType/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var Locationtype = {
        name: req.body.name
    };
    Locationtype.findByIdAndUpdate(req.params.id, { $set: Locationtype }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in locationtype Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/LocationType/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        LocationType.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in location Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

//superlocationtype controllers

router.post('/SuperLocationType/', (req, res) => {
    var SLT= new SuperLocationType({
        name: req.body.name
    });

    SLT.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in adding Super Location Type :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/SuperLocationType/', (req, res) => {
    SuperLocationType.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Super Locationtype :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/SuperLocationType/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    SuperLocationType.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Super LocationType :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.put('/LocationType/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var SuperLocationtype = {
        name: req.body.name
    };
    SuperLocationtype.findByIdAndUpdate(req.params.id, { $set: SuperLocationtype }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Superlocationtype Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/LocationType/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        SuperLocationType.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Super locationtype Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

//building controllers

router.post('/Building/', (req, res) => {
    var building= new Building({
        EntityType: req.body.EntityType,
        SuperLocationType:req.body.SuperLocationType
    });

    building.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in adding Building :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/Building/', (req, res) => {
    Building.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Building :' + JSON.stringify(err, undefined, 2)); }
    }).populate('EntityType','name').populate('SuperLocationType','name');
});


















module.exports = router;