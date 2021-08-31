const config = require('../infra/DB-connection')
const sql = require('mssql')
const routerModel = require('../models/routerModel')
const bcrypt = require('bcryptjs')

    async function registerUser(userModel){
        
        try {
            let pool = await sql.connect(config)
            let register = await pool.request()
            .input('nome', sql.VarChar, userModel.nome)
            .input('email',sql.VarChar, userModel.email)
            .input('senha', sql.VarChar,bcrypt.hashSync(userModel.senha))
            .input('senha', sql.VarChar,userModel.senha)
            .query(`INSERT INTO user_info 
            (nome,email,senha)
            values
            (@nome,@email,@senha)
            `)
            return register.recordset
        }catch(error){
            console.log(error)
        }
    }

    // register:function (req,res){
    //     console.log('register')
    //     res.send('register')
    // }, 
    // login:function (req,res){
    //     console.log('login')
    //     res.send('login')
    


module.exports = {
    registerUser: registerUser
}