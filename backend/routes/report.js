const express = require('express');
const router = express.Router();
const { create, list, remove, read, update } = require('../controllers/report');

const { requireLogin, authMiddleware, adminMiddleware } = require('../controllers/auth');

router.post('/report', requireLogin, adminMiddleware, create);
router.get('/reports', list);
router.get('/report/:_id', read);
// router.put('/report/:id', update);
router.delete('/report/:_id', requireLogin, authMiddleware, remove);
router.delete('/list-report/:_id', requireLogin, adminMiddleware, remove);


module.exports = router;