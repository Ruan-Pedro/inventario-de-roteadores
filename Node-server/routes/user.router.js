const express = require('express');
const users = express.Router();
const controller = require('../controllers/user.controller');

users.post('/login', controller.login);
users.post('/register', controller.register);

module.exports = users;