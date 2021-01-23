
const services = require('../services/students')

async function getStudents(){
  let data = await services.getStudents()
  return data
}


module.exports = {
  getStudents
}