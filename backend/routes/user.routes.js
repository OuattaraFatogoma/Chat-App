const express = require('express');
const {getAllUsers, getUser, updateUser, deleteUser} = require('../controllers/user.controllers');
const authMiddleware = require('../middleware/authentification');
const router = express.Router();

router.get('/', getAllUsers);
router.route('/:id').get(getUser).delete(authMiddleware, deleteUser);

module.exports = router;