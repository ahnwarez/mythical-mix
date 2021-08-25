const connection = require('./connection')

function getPeople(db = connection) {
  return db('people')
    .select()
    .then((people) =>
      people.map(({ name, image_url }) => ({
        name,
        imageUrl: image_url
      }))
    )
}

function addPerson({ name, imageUrl }, db = connection) {
  return db('people')
    .insert({
      name,
      image_url: imageUrl
    })
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
