const express = require('express');
const router = express.Router();

const userController = require('../controller/user.controller')

/* GET users listing. */
router.post('/', userController.createUser);
router.get('/', userController.getUser);
router.get('/:id', userController.getOneUser);
router.put('/', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
