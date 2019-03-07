'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SetSchema extends Schema {
  up () {
    this.create('sets', (table) => {
      table.increments();
      table.string('object', 10);
      table.string('code', 10);
      table.string('name');
      table.date('released_at');
      table.integer('set_type_id').unsigned().references('id').inTable('set_types');
      table.integer('card_count');
      table.string('parent_set_code');
      table.boolean('digital');
      table.boolean('foil_only');
      table.string('icon_svg_uri');
      table.timestamps()
    })
  }

  down () {
    this.drop('sets')
  }
}

module.exports = SetSchema
