/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('contacts',(table) =>{
        table.increments('id').primary(),
        table.string('name'),
        table.string('phone_number'),
        table.string('email'),
        table.integer('user_id').unsigned(),
        table.foreign('user_id').references('id').inTable('users')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
