const User = require('../models/user');
const shortId = require('shortid');
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');

exports.register = (req, res) => {
    User.findOne({ email: req.body.email }).exec((err, user) => {
        if (user) {
            return res.status(400).json({
                error: 'Email is Taken'
            })
        }

        const { name, email, password } = req.body;
        let username = shortId.generate();
        let profile = `${process.env.CLIENT_URL}/profile/${username}`;

        let newUser = new User({ name, email, password, profile, username });
        newUser.save((err, success) => {
            if (err) {
                return res.status(401).json({
                    error:err
                })
            }
            res.json({
                message: 'Registration completed successfully'
            })
        })
    })
}