const express = require('express');
const router = express.Router();
const { requireLogin, authMiddleware, adminMiddleware } = require('../controllers/auth');
const { read } = require('../controllers/user');

router.get('/profile', requireLogin, authMiddleware, read);

module.exports = router;