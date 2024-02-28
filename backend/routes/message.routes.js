const express = require('express');
const {sendMessage, getMessage} = require('../controllers/message.controllers')
const router = express.Router();

router.get('/:id', getMessage);
router.post('/:id', sendMessage);

module.exports = router;