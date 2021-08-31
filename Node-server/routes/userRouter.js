const express = require('express')
const userRouter = express.Router()
const bodyParser = require('body-parser')
const userController = require('../controllers/userController')
const User = require('../models/modelUser')

const bcrypt = require('bcryptjs')

require('dotenv').config()

userRouter.use((req,res, next)=>{
    next()
})

userRouter.post('/register', bodyParser.json(), (req,res,next)=>{
    const userModel = req.body
    userController.registerUser(userModel).then(result =>{
        res.status(200).send(result)

require('dotenv').config()

userRouter.use((req,res, next)=>{
    next()
})

userRouter.post('/register', bodyParser.json(), (req,res,next)=>{
    let userModel = req.body
    userController.registerUser(userModel).then(result =>{
        console.log(userModel)
        res.status(200).json(result)

    })
})
// router.post('/login', userController)

module.exports = userRouter