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
  var entityno = req.body.number ;
  var i = 65;
  
var j = entityno + i;
console.log(j)
for(; i<j ;i++){  
 
 Name ="Tower"+ String.fromCharCode(i); 
 if(Name.length=6){
   Code=Name.charAt(0)+Name.charAt(6);
 }
 elseif(Name.length=7)
 console.log(Name)
var entity =  new Entities({
    name :Name,
    code:Code
})
  entity.save((err)=>{
    if (!err)
     { console.log('entity added')}
     if(err){
        { console.log('Error in adding Entity name :' + JSON.stringify(err, undefined, 2)); }
     }
});

}
//return res.send("Entities Added")
});

router.post('/SuperLocations/',(req, res) => {
  var basements = req.body.basementsno ;
  var floors = req.body.floorsno;
  var i = 1;
  
var j = basements;
console.log(j)
for(; i<=j ;i++){  
 
 Name ="Basement"+ i; 
 console.log(Name)
var SuperLocation =  new SuperLocations({
    name :Name
})
  SuperLocation.save((err)=>{
    if (!err)
     { console.log('SuperLocation added')}
     if(err){
        { console.log('Error in adding Superlocation name :' + JSON.stringify(err, undefined, 2)); }
     }
});

}
var i = 1
for(; i<=floors ;i++){  
 
  Name ="Floor"+ i; 
  console.log(Name)
 var SuperLocation =  new SuperLocations({
     name :Name
 })
   SuperLocation.save((err)=>{
     if (!err)
      { console.log('SuperLocation added')}
      if(err){
         { console.log('Error in adding Superlocation name :' + JSON.stringify(err, undefined, 2)); }
      }
 });
 
 }


return res.send("SuperLocations Added")
});





module.exports = router;