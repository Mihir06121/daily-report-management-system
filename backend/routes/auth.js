const express = require('express');
const router = express.Router();
const { register, login, logout } = require('../controllers/auth');

// validators
const { runValidation } = require('../validators');
const { registerValidator, loginValidator } = require('../validators/auth');

router.post('/register', registerValidator, runValidation, register);
router.post('/login', loginValidator, runValidation, login);
router.get('/logout', logout);

module.exports = router;