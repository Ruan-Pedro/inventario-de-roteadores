const express = require('express');
const routers = express.Router();
const controller = require('../controllers/router.controller');

routers.get('/', controller.getAllRouters);

routers.get('/:id', controller.getOneRouter);

routers.get('/n/:name', controller.getRouterByName);

routers.post('/', controller.createRouter);

routers.put('/:id', controller.updateRouter);

routers.delete('/:id', controller.deleteRouter);

module.exports = routers;