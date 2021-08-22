const connection = require('./connection')

function getPeople (db = connection) {
  return db('people')
    .select()
}

module.exports = {
  getPeople
}
