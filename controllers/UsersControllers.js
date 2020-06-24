const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const bcryt = require('bcrypt');
const jwt = require('jsonwebtoken');


var {Users } =require('../models/Users');


router.post('/signup',(req,res, next)=>{

    Users.find({email:req.body.email})
    .then(users=>{
        if(users.length>=1){
            return res.status(500).json({
                message: 'user exists'
            });
        } else{
            bcryt.hash(req.body.password,10,(err,hash)=>{
                if (err){
                    return res.status(500).json({
                        error : err    
                    });
                }
                else{
                    const user = new Users({
                    email: req.body.email,
                    password:hash
                });
                user
                 .save()
                 .then(result => { 
                     console.log(result),
                    res.status(200).json({
                        message:'user created'
                    });
                })
            .catch( err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            })
        };  
    
    });
        }
    }
    )        
});

router.get('/', (req, res) => {
    Users.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving users :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.post('/login',(req,res,next)=>{
Users.find({email:req.body.email})
.then(Users=>{
    if(Users.length<1){
        res.status(500).json({
            message:'Authentication error'
        });
    }
    bcryt.compare(req.body.password,Users[0].password,(err,result)=>{
        if(err){
            return res,status(500).json({
                message:'Authentication error'
            });
            
        }
        if(result){
           const token= jwt.sign({
                email:Users[0].email
            },"secert-password",{
                expiresIn:"1 hr"
        
            });
            return res.status(200).json({
                message:'Authentication successful',
                token : token
                
            });
        }

    })

.catch(err => {
    console.log(err);
    res.status(500).json({
        error: err
    });
})

})
})
















router.delete('/:Id',(req,res,next)=>{
    Users.remove({_id:req.params.ID})
.then(result=>{
    res.status (200).json({
        message: 'user deleted'
    });
})
.catch( err => {
    console.log(err);
    res.status(500).json({
        error: err
    });
})
});





module.exports = router;