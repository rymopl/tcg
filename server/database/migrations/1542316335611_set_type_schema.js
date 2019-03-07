'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SetTypeSchema extends Schema {
  up () {
    this.create('set_types', (table) => {
      table.increments();
      table.string('type');
      table.string('description');
      table.timestamps()
    })
  }

  down () {
    this.drop('set_types')
  }
}

module.exports = SetTypeSchema;
