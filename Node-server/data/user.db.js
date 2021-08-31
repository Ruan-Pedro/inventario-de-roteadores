const config = require('./connection.db')
const sql = require('mssql')

async function registerUser(userModel){
        
    try {
        let pool = await sql.connect(config)
        let register = await pool.request()
        .input('nome', sql.VarChar, userModel.nome)
        .input('email',sql.VarChar, userModel.email)
        .input('senha', sql.VarChar, userModel.senha)
        .query(`INSERT INTO user_info 
        (nome,email,senha,permissao)
        values
        (@nome,@email,@senha,0)
        `)
        return register.recordset
    }catch(error){
        console.log(error)
    }
}

async function authenticateUser(userModel){
        
    try {
        let pool = await sql.connect(config)
        let register = await pool.request()
        .input('email',sql.VarChar, userModel.email)
        .query(`SELECT * FROM user_info 
        WHERE email = @email`)
        return register.recordset[0]
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    registerUser,
    authenticateUser
}