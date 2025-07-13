const express = require('express');
const router = express.Router();
const { login, createPassword } = require('../controllers/authController');

router.post('/login', login);
router.post('/create-password', createPassword);

module.exports = router;

