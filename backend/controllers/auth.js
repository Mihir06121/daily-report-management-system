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

exports.loginIn = (req, res) => {
    const { email, password } = req.body;

    User.findOne({email}).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error:'User Does not exist'
            })
        }

        if (!user.authenticate(password)) {
            return res.status(400).json({
                error: 'Email and Password did not matched'
            })
        }

        const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET, {expiresIn: '1d'})

        res.cookie('token', token, {expiresIn: '1d'})
        const {_id, username, name, email, role} = user
        return res.json({
            token, user: {_id, username, name, email, role}
        })
    })
}