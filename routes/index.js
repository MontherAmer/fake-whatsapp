const express = require('express');
const router = express.Router();

const { isAuthenticated, upload } = require('../app/utils');
const controllers = require('../app/controllers');

router.post('/signup', controllers.signup);

router.post('/login', controllers.login);

router.put('/user', isAuthenticated, upload.single('image'), controllers.update);

router.post('/friend', isAuthenticated, controllers.friend);

router.post('/group', isAuthenticated, controllers.group);

module.exports = router;
