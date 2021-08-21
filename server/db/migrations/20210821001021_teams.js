exports.up = function (knex) {
    return knex.schema.createTable('teams', table => {
        table.increments('id').primary()
        table.integer('theme_id').references('themes.id')
        table.string('name')
        table.string('image_url')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('teams')
};


