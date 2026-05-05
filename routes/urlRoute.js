const { generateUrl } = require('../controllers/urlController');
const express = require('express');
const router = express.Router();

router.post('/url', generateUrl);

module.exports = router;