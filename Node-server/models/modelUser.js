const sql = require('mssql')
class User {
    constructor(id, nome, email, senha){
        this.id = id
        this.nome = nome
        this.email = email
        this.senha = senha
    }
}
module.exports = User