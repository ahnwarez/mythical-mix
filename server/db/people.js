const connection = require('./connection')

function getPeople(db = connection) {
  return db('people')
    .select()
}

function addPerson(name, db = connection) {
  return db('people')
    .insert({ name })
}

function deletePerson(id, db = connection) {
  return db('people')
    .where('id', id)
    .del()
}

module.exports = {
  getPeople,
  addPerson,
  deletePerson
}
