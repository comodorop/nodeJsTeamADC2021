const express = require('express')
const routes = express.Router()


routes.get('/students/:id/subjects', (req, resp)=> {
  return resp.status(200).send({
    status: 200,
    msg: "Este es un endpoint"
  })
})

routes.post('/students/:id/subjects', (req, resp)=> {
  let {body} = req
  console.log(body)
  return resp.status(200).send({
    status: 200,
    data: body,
    msg: "Success"
  })
})

module.exports = routes