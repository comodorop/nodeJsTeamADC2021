const express = require('express')
const routes = express.Router()
const ctrClients = require('../controller/clients')


routes.post('/', (req, resp)=> {
  let {body} = req
  let status= 201
  let msg= "New record avaliable"
  let ok = ctrClients.postClient(body)
  if(ok === false){
    status = 401,
    msg ="Datos invalidos"
  }
  return resp.status(status).send({
    status: status,
    msg: msg
  })
})


routes.get('/', (req, resp)=> {
  return resp.status(200).send({
    status: 200,
    msg: "Este es un endpoint"
  })
})

routes.get('/:id', (req, resp)=> {
  return resp.status(200).send({
    status: 200,
    data:[],
    msg: "Record not found"
  })
})



module.exports = routes