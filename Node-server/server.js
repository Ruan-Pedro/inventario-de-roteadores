const express = require('express')
const sql = require('mssql')
const config = require('./data/connection.db')

const cors = require('cors')
const app = express()
const PORT = process.env.PORT

const routes = require('./routes/routes');

require('dotenv').config()

sql.connect(config)

app.use(cors())

app.use(routes);

app.get('/', (req,res)=>{
    res.send('Server running')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
