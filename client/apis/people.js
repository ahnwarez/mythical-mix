import request from 'superagent'

const rootUrl = '/api/v1'

export function getPeople () {
  return request.get(rootUrl + '/people')
    .then(res => {
      return res.body.results
    })
}
