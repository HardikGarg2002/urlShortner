const express = require('express');
const router = express.Router();
const controller = require('../controllers/url')

router.route('/').post(controller.generateShortUrl);
router.route('/:id').get(controller.redirectUrl);
module.exports= router;