const config = require('./connection.db')
const sql = require('mssql')


async function getClients(){
    try{
        let pool = await sql.connect(config)
        let clients = await pool.request().query("select * from clientes_emp;")
        return clients.recordset
    }catch(error){
        console.log(error)
    }
}

async function getClient(clientID){
    try{
        let pool = await sql.connect(config)
        let client = await pool.request()
        .input('input_parameter', sql.Int, clientID)
        .query("select * from clientes_emp where id_cliente = @input_parameter");
    return client.recordset[0]
    }
    catch(error){
        console.log(error)
    }
}

async function getClientByName(name){
    try{
        let pool = await sql.connect(config)
        let client = await pool.request()
        .input('input_parameter', sql.VarChar, name)
        .query("select * from clientes_emp where nome = @input_parameter");
    return client.recordset[0]
    }
    catch(error){
        console.log(error)
    }
}

async function insertClient(model){
    try{
        let pool = await sql.connect(config)
        let insertClient = await pool.request()
        
        //  .input('id', sql.Int, model.id)
        .input('cnpj', sql.VarChar, model.cnpj)
        .input('nome', sql.VarChar, model.nome)
        .input('tel', sql.VarChar, model.tel)
        .input('email', sql.VarChar, model.email)
        .input('logo', sql.VarChar, model.logo)
        .input('est_end', sql.VarChar, model.imagem)
        .input('rua_end', sql.VarChar, model.rua)
        .input('n_end', sql.Int, model.n)
        .input('pais_end', sql.VarChar, model.pais)
        .input('cid_end', sql.VarChar, model.cid)
        .input('bairro_end', sql.VarChar, model.bairro)

        .query(`
        insert into clientes_emp (cnpj, nome , tel, email, logo, data_cad, est_end,rua_end,n_end,pais_end,cid_end,bairro_end) 
        values 
        (@cnpj, @nome , @tel, @email, @logo, GETDATE(), @est_end,@rua_end,@n_end,@pais_end,@cid_end,@bairro_end)
        `)
        
        // .query("select * from clientes_emp where id_cliente = @input_parameter");
        return insertClient.recordset
        }
        catch(error){
        console.log(error)
        }
}

async function deleteClient(clientID){
    try{
        let pool = await sql.connect(config)
        let client = await pool.request()
        .input('input_parameter', sql.Int, clientID)
        .query("delete from clientes_emp where id_cliente = @input_parameter");
    return client.recordset
    }
    catch(error){
        console.log(error)
    }
}

async function updateClient(model, clientID){
    try{
        let pool = await sql.connect(config)
        let updateClient = await pool.request()
        
        .input('id', sql.Int, clientID)
        .input('cnpj', sql.VarChar, model.cnpj)
        .input('nome', sql.VarChar, model.nome)
        .input('tel', sql.VarChar, model.tel)
        .input('email', sql.VarChar, model.email)
        .input('logo', sql.VarChar, model.logo)
        .input('est_end', sql.VarChar, model.imagem)
        .input('rua_end', sql.VarChar, model.rua)
        .input('n_end', sql.Int, model.n)
        .input('pais_end', sql.VarChar, model.pais)
        .input('cid_end', sql.VarChar, model.cid)
        .input('bairro_end', sql.VarChar, model.bairro)

        .query(`
        UPDATE clientes_emp
        SET cnpj=@cnpj, nome=@nome , tel=@tel, email=@email, logo=@logo, est_end=@est_end,rua_end=@rua_end,n_end=@n_end,pais_end=@pais_end,cid_end=@cid_end,bairro_end=@bairro_end
        WHERE id_cliente = @id
         `)
        
        // .query("select * from clientes_emp where id_cliente = @input_parameter");
    return updateClient.recordset
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {
    getClients,
    getClient,
    insertClient,
    deleteClient,
    updateClient,
    getClientByName
}