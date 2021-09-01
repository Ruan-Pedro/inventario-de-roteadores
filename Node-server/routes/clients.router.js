const express = require('express');
const clients = express.Router();
const controller = require('../controllers/client.controller');
const login = require('../middleware/login')

clients.get('/',login.optional, controller.getAllClients);

clients.get('/:id',login.optional, controller.getOneClient);

clients.get('/n/:name',login.optional, controller.getClientByName);

clients.post('/',login.required, controller.createClient);

clients.put('/:id',login.required, controller.updateClient);

clients.delete('/:id',login.required, controller.deleteClient);

module.exports = clients;