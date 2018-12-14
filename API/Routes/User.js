const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const User = require('../models/user')


//Signs up new user
router.post('/signup', (req, res, next) =>{
    //checks if user email already exists within the database
    User.find({email: req.body.email}).exec()
    .then(user => {
        if(user.length >= 1){
            res.status(409).json({
                message: "Email Already Exists"
            });
        } else{
            //hashes password sent by user
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err){
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    const user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        email: req.body.email,
                        password: hash
                    });
                    user.save()
                    .then( result => {
                        console.log(result);
                        res.status(201).json({
                            message: "User CREATED"
                        });
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({
                            error: err
                        });
                    })
                }
            });
        }
    });
});

router.post('/login', (req, res, next) =>{
    User.find({ email: req.body.email })
    .exec()
    .then(user =>{
        if(user.length<1){
            return res.status(401).json({
                message: "Email cannot be empty"
            });
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if(err){
                return res.status(401).json({
                    message: "LogIn Unsuccessful"
                });
            }
            if(result){
                return res.status(200).json({
                    message: "LogIn Successful"
                });
            }else{
                return res.status(401).json({
                    message: "LogIn Unsuccessful"
                });
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
})

router.delete('/:userId', (req,res,next) =>{
    User.deleteOne({_id: req.params.userId})
    .exec()
    .then(result =>{
        res.status(200).json({
            message: "User deleted"
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
})

module.exports = router;