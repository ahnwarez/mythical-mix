exports.up = function (knex) {
    return knex.schema.createTable('themes', table => {
        table.increments('id').primary()
        table.string('name')
        table.string('image_url')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('themes')
};
