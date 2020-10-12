const express = require('express')
const router = express.Router()
const { register, loginIn } = require('../controllers/auth')


router.post('/register', register)
router.post('/loginin', loginIn)


module.exports = router;