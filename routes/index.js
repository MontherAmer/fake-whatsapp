const express = require('express');
const router = express.Router();

const { isAuthenticated, upload } = require('../app/utils');
const controllers = require('../app/controllers');

router.post('/signup', controllers.signup);

router.post('/login', controllers.login);

router.put('/user', isAuthenticated, upload.single('image'), controllers.update);

router.post('/friend', isAuthenticated, controllers.friend);

router.post('/group', isAuthenticated, upload.single('image'), controllers.group);

router.get('/messages/:id', isAuthenticated, controllers.listMessages);

router.get('/chatlist', isAuthenticated, controllers.listContacts);

module.exports = router;
