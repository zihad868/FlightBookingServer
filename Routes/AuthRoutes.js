const express = require('express');
const registerValidator = require('../Middlewares/AuthValidation');
const register = require('../Controllers/AuthController');
const router = express.Router();


router.post('/register', registerValidator, register)


module.exports = router;