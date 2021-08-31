'use strict';

const clientOperations = require('../data/client.db')

const getAllClients = async (req,res,next) => {
    try {
        const data = await clientOperations.getClients();
        return res.status(200).send({ data });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getOneClient = async (req,res,next) => {
    try {
        const { id } = req.params;
        const data = await clientOperations.getClient(id);
        if(data){
            return res.status(200).send({ data });
        } else {
            return res.status(404).send({ msg: 'Client not found' });
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getClientByName = async (req,res,next) => {
    try {
        const { name } = req.params;
        const data = await clientOperations.getClientByName(name);
        if(data){
            return res.status(200).send({ data });
        } else {
            return res.status(404).send({ msg: 'Client not found' });
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createClient = async (req,res,next) => {
    try {
        const client = req.body;
        await clientOperations.insertClient(client);
        const data = await clientOperations.getClientByName(client.nome)
        if(data){
            return res.status(200).send({ data });
        } else {
            return res.status(400).send({ msg: 'Cannot add client' });
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateClient = async (req,res,next) => {
    try {
        const { id } = req.params;
        const client = req.body;
        await clientOperations.updateClient(client, id);
        const data = await clientOperations.getClient(id)
        if(data){
            return res.status(200).send({ data });
        } else {
            return res.status(400).send({ msg: 'Cannot update client' });
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteClient = async (req,res,next) => {
    try {
        const { id } = req.params;
        await clientOperations.deleteClient(id);
        const data = await clientOperations.getClient(id)
        if(!data){
            return res.status(200).send({ data });
        } else {
            return res.status(400).send({ msg: 'Cannot delete client' });
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllClients,
    getOneClient,
    getClientByName,
    createClient,
    updateClient,
    deleteClient
}