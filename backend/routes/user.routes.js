const express = require('express');
const {getAllUsers, getUser, updateUser, deleteUser} = require('../controllers/user.controllers')
const router = express.Router();

router.get('/', getAllUsers);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;