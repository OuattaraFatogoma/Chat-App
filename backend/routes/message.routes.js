const express = require('express');
const {sendMessage, getMessages} = require('../controllers/message.controllers')
const authMidleware = require('../middleware/authentification')
const router = express.Router();

router.get('/:id', authMidleware, getMessages);
router.post('/send/:id', authMidleware, sendMessage);

module.exports = router;