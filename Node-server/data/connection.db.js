require('dotenv').config()

const PASSWORD = process.env.PASSWORD
const USER = process.env.USER
const DATABASE = process.env.DATABASE
const SERVER = process.env.SERVER
const config = {
    user: USER,
    password: PASSWORD,
    database:DATABASE,
    server: SERVER,
    // host:"192.168.0.111",
    options:{
      //  trustedconnection:true,
        encrypt: false,
        enableArithPort: true,
       // instancename:'\MSSQL',
    }
}
module.exports = config