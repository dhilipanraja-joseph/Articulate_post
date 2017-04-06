const express = require('express');
const router = express.Router();

router.use('/articles',require('./articles'));
router.use('/search',require('./search'));

module.exports = router;
