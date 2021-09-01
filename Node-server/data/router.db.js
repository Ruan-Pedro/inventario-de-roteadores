const config = require('./connection.db')
const sql = require('mssql')
const routerModel = require('../models/routerModel')


async function getRouters(){
    try{
        let pool = await sql.connect(config)
        let routers = await pool.request().query("select * from roteadores_cad;")
        return routers.recordset
    }catch(error){
        console.log(error)
    }
}

async function getRouter(routerID){
    try{
        let pool = await sql.connect(config)
        let router = await pool.request()
        .input('input_parameter', sql.Int, routerID)
        .query("select * from roteadores_cad where id_roteador = @input_parameter");
    return router.recordset[0]
    }
    catch(error){
        console.log(error)
    }
}

async function getRouterByName(nome){
    try{
        let pool = await sql.connect(config)
        let router = await pool.request()
        .input('input_parameter', sql.VarChar, nome)
        .query("select * from roteadores_cad where nome = @input_parameter");
    return router.recordset[0]
    }
    catch(error){
        console.log(error)
    }
}

async function insertRouter(model){
    try{
        let pool = await sql.connect(config)
        let insertRouter = await pool.request()
        
        //  .input('id', sql.Int, model.id)
        .input('nome', sql.VarChar, model.nome)
        .input('fabricante', sql.VarChar, model.fabricante)
        .input('garantia', sql.VarChar, model.garantia)
        .input('suporte', sql.VarChar, model.suporte)
        .input('justificativa', sql.VarChar, model.justificativa)
        .input('imagem', sql.VarChar, model.imagem)
        .query(`
        insert into roteadores_cad (nome, fabricante , garantia, suporte, justificativa, rot_img) 
        values 
        (@nome , @fabricante, @garantia, @suporte, @justificativa, @imagem)
        `)
        
        // .query("select * from roteadores_cad where id_roteador = @input_parameter");
        return insertRouter.recordset
        }
        catch(error){
        console.log(error)
        }
}

async function deleteRouter(routerID){
    try{
        let pool = await sql.connect(config)
        let router = await pool.request()
        .input('input_parameter', sql.Int, routerID)
        .query("delete from roteadores_cad where id_roteador = @input_parameter");
    return router.recordset
    }
    catch(error){
        console.log(error)
    }
}

async function updateRouter(model, routerID){
    try{
        let pool = await sql.connect(config)
        let updateRouter = await pool.request()
        
        //  .input('id', sql.Int, model.id)
        .input('id', sql.Int, routerID)
        .input('nome', sql.VarChar, model.nome)
        .input('fabricante', sql.VarChar, model.fabricante)
        .input('garantia', sql.VarChar, model.garantia)
        .input('suporte', sql.VarChar, model.suporte)
        .input('justificativa', sql.VarChar, model.justificativa)
        .input('imagem', sql.VarChar, model.imagem)

        .query(`
        UPDATE roteadores_cad
        SET nome = @nome, fabricante = @fabricante, garantia = @garantia, suporte = @suporte, justificativa = @justificativa, rot_img = @imagem
        WHERE id_roteador = @id
        `)
        
        // .query("select * from roteadores_cad where id_roteador = @input_parameter");
    return updateRouter.recordset
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {
    getRouters,
    getRouter,
    getRouterByName,
    insertRouter,
    deleteRouter,
    updateRouter
}