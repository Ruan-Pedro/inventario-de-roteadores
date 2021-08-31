'use strict';
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const userOperations = require('../data/user.db')

const register = async (req,res,next) => {
    try {
        let user = req.body;
        user.senha = bcrypt.hashSync(user.senha);
        await userOperations.registerUser(user);
        const data = await userOperations.authenticateUser(user);
        if(!data){
            return res.status(400).send({ msg: 'Cannot register user' });
        }
        return res.status(200).send({ data });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const login = async (req,res,next) => {
    try {
        const user = req.body;
        const password = user.senha

        const dbPassword = await userOperations.authenticateUser(user);
        console.log(dbPassword)
        
        if(!dbPassword){
            return res.status(404).send('User not found');
        }

        if(bcrypt.compareSync(password,dbPassword.senha)){
            
            const userDB = { 
                id: dbPassword.id_user, 
                nome: dbPassword.nome, 
                email: dbPassword.email, 
                admin: dbPassword.permissao 
            }
            const token = jwt.sign(userDB, process.env.JWT_KEY, { expiresIn: "16h" })

            return res.status(200).send({ token, data: userDB });
        } else {

            return res.status(401).send('Not authorized');
        }

    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    login, register
}