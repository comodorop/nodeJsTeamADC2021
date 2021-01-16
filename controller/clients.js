
function postClient(body){
  let isOk = false
  let ok = validate(body)
  if(ok){
    isOk = true
  }
  return isOk
}


function validate(body){
  let ok = false
  if(body && typeof body === 'object' && Object.keys(body).length> 0 ){
    if(body.hasOwnProperty('name') && body.name !== '' && body.name.length > 3){
      ok = true
    }
  }
  return ok
}




module.exports ={
  postClient
}
