const express = require('express');
const router = express.Router();
const controller = require('../controllers/url')

router.route('/').post(controller);
module.exports= router;