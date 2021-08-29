exports.up = function (knex) {
  return knex.schema.createTable('people_teams', table => {
    table.integer('id')
    table.string('name')
    table.string('image_url')
    table.string('group')
    table.string('week')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('people_teams')
}
