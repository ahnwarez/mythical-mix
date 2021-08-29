import request from 'superagent'

const rootUrl = '/api/v1/people'

export function getPeople () {
  return request.get(rootUrl + '/')
    .then(res => {
      return res.body.results
    })
}

export function addPerson (person) {
  return request.post(rootUrl + '/add')
    .send(person)
}

export function deletePerson (id) {
  return request.delete(rootUrl + '/delete')
    .send({ id })
}
