const express = require('express');
const router = express.Router();
const { create, list, remove, read, update } = require('../controllers/report');

const { requireLogin, authMiddleware, adminMiddleware } = require('../controllers/auth');

router.post('/report', requireLogin, adminMiddleware, create);
router.get('/report', list);
router.get('/report/:id', read);
// router.put('/report/:id', update);
router.delete('/report/:id', remove);


module.exports = router;