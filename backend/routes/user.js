const express = require('express')
const router = express.Router()

router.get('/profile', (req, res) => {
    res.console.log("Hey there!")
})

module.exports = router;