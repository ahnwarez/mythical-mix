import request from 'superagent'

const rootUrl = '/api/v1/people'

export function getPeople () {
  return request.get(rootUrl + '/')
    .then(res => {
      return res.body.results
    })
}

export function addPerson(name) {
  return request.post(rootUrl + '/add')
    .send({name})
    .then()
}

export function deletePerson(id) {
  return request.delete(rootUrl + '/delete')
    .send({id})
    .then()
}
