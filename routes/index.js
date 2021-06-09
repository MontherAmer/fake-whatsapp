const express = require('express');
const router = express.Router();

const { isAuthenticated } = require('../app/utils');
const controllers = require('../app/controllers');

router.post('/signup', controllers.signup);

router.post('/login', controllers.login);

router.post('/friend', isAuthenticated, controllers.friend);

module.exports = router;
