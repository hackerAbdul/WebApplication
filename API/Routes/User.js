const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Authenticate = require('../middleware/Authentication');

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
                const token = jwt.sign({
                    email: user[0].email,
                    userId: user[0]._id
                }, process.env.JWTKEY, { expiresIn: "1h" })
                return res.status(200).json({
                    message: "LogIn Successful",
                    token: token
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

router.get('/allusers', Authenticate, (req, res, next) =>{
    User.find()
    .select('_id email')
    .exec()
    .then(docs => {
        const response = {
            count: docs.length,
            products: docs.map(doc => {
                return {
                    user: doc,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:2000/user/allusers/' + doc._id
                    }
                }
            })
        };
        console.log(docs);
        if (docs.length <= 0){
            res.status(404).json({
                message: "There are no Users"
            });
        }else{
            res.status(200).json(response)
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
})

router.put('/:userId/report', Authenticate, (req, res, next) => {
    User.findById(req.params.userId)
    .select('_id, email')
    .exec()
    .then(user => {
        res.status(200).json({
            user: user,
            message: "User has been reported to administrator"
        })
    })
    .catch(err => {
        res.status(500).json({
            message: err
        });
    });
})

router.put('/:userId/rateuser', Authenticate, (req, res, next) => {
    User.findById(req.params.userId)
    .select('_id, email')
    .exec()
    .then(user => {
        res.status(200).json({
            user: user,
            message: "You have rated user"
        })
    })
    .catch(err => {
        res.status(500).json({
            message: err
        });
    });
})

module.exports = router;