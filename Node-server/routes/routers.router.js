const express = require('express');
const routers = express.Router();
const controller = require('../controllers/router.controller');
const login = require('../middleware/login')

routers.get('/',login.optional, controller.getAllRouters);

routers.get('/:id',login.optional, controller.getOneRouter);

routers.get('/n/:nome',login.optional, controller.getRouterByName);

routers.post('/', login.required,controller.createRouter);

routers.put('/:id',login.required, controller.updateRouter);

routers.delete('/:id',login.required, controller.deleteRouter);

module.exports = routers;