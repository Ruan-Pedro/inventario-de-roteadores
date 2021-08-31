const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use('/router', bodyParser.json(), require('./routers.router'));
router.use('/user', bodyParser.json(), require('./user.router'));
router.use('/client', bodyParser.json(), require('./clients.router'));

module.exports = router; 