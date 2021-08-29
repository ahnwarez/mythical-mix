exports.up = function (knex) {
  return knex.schema.createTable('people', table => {
    table.increments('id')
    table.string('name')
    table.string('image_url')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('people')
}
