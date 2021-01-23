const express = require('express')
const routes = express.Router()
const ctrStudent = require('../controller/students')

routes.get('/', async (req, resp)=> {
  let data = await ctrStudent.getStudents()
  return resp.status(200).send({
    status: 200,
    msg: "Success",
    data: data
  })
})


module.exports = routes