exports.decodeJWT = require('./_tokens').decodeJWT;
exports.createJWT = require('./_tokens').createJWT;
exports.getTokenFromHeader = require('./_tokens').getTokenFromHeader;

exports.upload = require('./_upload');

exports.isAuthenticated = require('./_middlewares').isAuthenticated;
exports.canSeeMessages = require('./_middlewares').canSeeMessages;

exports.getUserConnections = require('./_getuserconnections').getUserConnections;
