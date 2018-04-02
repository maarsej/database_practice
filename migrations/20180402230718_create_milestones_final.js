exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('newmigration', function (table) {
            table.increments('id');
            table.string('description');
            table.date('date_achieved');
            table.integer('famous_person_id')
        })
    ])
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('newmigration')
      ])
};