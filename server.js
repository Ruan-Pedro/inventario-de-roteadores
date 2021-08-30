const express = require('express')
const path = require('path')
//  const fs = require('fs')
//  const bodyParser = require('body-parser')
const apiRoutes = require('./routes/api')

const app = express()
const PORT = 5050

app.use('/',express.static(path.join(__dirname, "client")))
app.use('/api',apiRoutes)
 app.use('/database', express.static(path.join(__dirname, "public/database.html")))
//  app.use('/database/style.css', express.static(path.join(__dirname, "public/styles/style.css")))

 app.use('/dashboard', express.static(path.join(__dirname, "public/dashboard.html")))
app.use('/management',express.static(path.join(__dirname, "public/management.html")))

// app.get('/', (req,res)=>{
// res.send(express.static(path.join(__dirname + "client")))
// })


// app.get('/', (req,res)=>{
//     res.send('funcionou amigão')
// })
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
