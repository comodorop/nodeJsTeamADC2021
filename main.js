const express  = require('express')
const bodyParser = require('body-parser')
const app = express()
const subject = require('./routes/subject')
const clients = require('./routes/clients')
require('dotenv').config()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/v1/subjects', subject)
app.use('/v1/clients', clients)


app.listen(process.env.PORT, ()=>{
  console.log(`Server start in the port ${process.env.PORT} `)
})
