'use strict';

const routerOperations = require('../data/router.db')

const getAllRouters = async (req,res,next) => {
    try {
        const data = await routerOperations.getRouters();
        return res.status(200).send({ data });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getOneRouter = async (req,res,next) => {
    try {
        const { id } = req.params;
        const data = await routerOperations.getRouter(id);
        if(data){
            return res.status(200).send({ data });
        } else {
            return res.status(404).send({ msg: 'Router not found' });
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getRouterByName = async (req,res,next) => {
    try {
        const name = req.params.nome;
        const data = await routerOperations.getRouterByName(name);
        if(data){
            return res.status(200).send({ data });
        } else {
            return res.status(404).send({ msg: 'Router not found' });
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createRouter = async (req,res,next) => {
    try {
        const router = req.body;
        await routerOperations.insertRouter(router);
        const data = await routerOperations.getRouterByName(router.nome)
        if(data){
            return res.status(200).send({ data });
        } else {
            return res.status(400).send({ msg: 'Cannot add router' });
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateRouter = async (req,res,next) => {
    try {
        const { id } = req.params;
        const router = req.body;
        await routerOperations.updateRouter(router, id);
        const data = await routerOperations.getRouterByName(router.nome)
        if(data){
            return res.status(200).send({ data });
        } else {
            return res.status(400).send({ msg: 'Cannot update router' });
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteRouter = async (req,res,next) => {
    try {
        const { id } = req.params;
        await routerOperations.deleteRouter(id);
        const data = await routerOperations.getRouter(id)
        if(!data){
            return res.status(200).send({ data });
        } else {
            return res.status(400).send({ msg: 'Cannot delete router' });
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllRouters,
    getOneRouter,
    getRouterByName,
    createRouter,
    updateRouter,
    deleteRouter
}