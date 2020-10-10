const express = require('express')
const router = express.Router()
const{ read } = require('../controllers/user')

router.get('/profile', (req, res) => {
    return res.json('hey there!')
})

module.exports = router;