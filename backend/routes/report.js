const express = require('express');
const router = express.Router();
const { create, list, remove, read, update } = require('../controllers/report');

const { requireLogin, adminMiddleware } = require('../controllers/auth');

router.post('/report', requireLogin, adminMiddleware, create);
// router.get('/reports', list);
router.get('/reports', list);
router.get('/report/:id', read);
// router.put('/report/:id', update);
router.delete('/report/:id', requireLogin, adminMiddleware, remove);

module.exports = router;