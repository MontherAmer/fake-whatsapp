exports.signup = require('./user').signup;
exports.login = require('./user').login;
exports.update = require('./user').update;

exports.friend = require('./contacts').friend;
exports.group = require('./contacts').group;
exports.listContacts = require('./contacts').listContacts;

exports.listMessages = require('./messages').list;

exports.onSocketConnect = require('./_socket').onSocketConnect;
