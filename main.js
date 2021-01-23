
const express  = require('express')
const bodyParser = require('body-parser')
const app = express()
const subject = require('./routes/subject')
const clients = require('./routes/clients')
const students = require('./routes/students')
const con = require('./repository/connection/connection')
const {validateToken} = require('./middleware/validateToke')
const {validate} = require('./middleware/students')
require('dotenv').config()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(validateToken)

app.use('/v1/subjects',  subject)
app.use('/v1/clients', clients)
app.use('/v1/students', validate, students)

con.connection().then(msg=>{
    app.listen(process.env.PORT, ()=>{
      console.log(`Server start  ${process.env.PORT}`)
    })
}).catch(err=>{
  console.log("There is a problem with the connection")
})
