const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require('jsonwebtoken');

const User = require("../models/user");

//express router
router.post('/register',(req, res, next) => {
    "use strict";
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    
    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, msg:'failed to register User!'});
        }else{
            res.json({success: true, msg: 'Successfully added User!'});
        }
    });
});

router.post('/authenticate',(req, res, next) => {
    res.send('/AUTHENTICATE');
});

router.get('/profile',(req, res, next) => {
    res.send('PROFILE');
});

module.exports = router;