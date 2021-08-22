const connection = require('./connection')

function getThemes (db = connection) {
  return db('themes')
    .select()
}

module.exports = {
  getThemes
}
