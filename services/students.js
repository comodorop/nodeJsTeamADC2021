const exec = require('../repository/execute')

async function getStudents(){
  let sql = `SELECT * FROM students`
  let data = await exec.execute(sql)
  return data
}

module.exports = {
  getStudents
}