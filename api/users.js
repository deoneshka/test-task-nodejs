const express = require('express');
const router = express.Router();

const { signup, info, signin, logout } = require('../controllers/users');
const { usersValidate } = require('../middlewars/validation/users');
const authenticate = require('../middlewars/userAuth');

router.post('/signup', express.json(), usersValidate, signup);

router.post('/signin', express.json(), usersValidate, signin);

router.get('/info', authenticate, info);

router.get('/logout', authenticate, logout);

module.exports = router;
