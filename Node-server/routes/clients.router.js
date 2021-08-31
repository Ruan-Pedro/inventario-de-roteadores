const express = require('express');
const clients = express.Router();
const controller = require('../controllers/client.controller');

clients.get('/', controller.getAllClients);

clients.get('/:id', controller.getOneClient);

clients.get('/n/:name', controller.getClientByName);

clients.post('/', controller.createClient);

clients.put('/:id', controller.updateClient);

clients.delete('/:id', controller.deleteClient);

module.exports = clients;