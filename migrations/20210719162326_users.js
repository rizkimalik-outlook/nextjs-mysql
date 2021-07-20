
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
        table.increments('id');
        table.string('name');
        table.string('username').unique().notNullable();
        table.string('email').unique();
        table.string('password').notNullable();
        table.string('lavel');
        table.timestamps(true, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
