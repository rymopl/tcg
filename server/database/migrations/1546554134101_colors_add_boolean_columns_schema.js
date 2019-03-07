'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ColorsAddBooleanColumnsSchema extends Schema {
  up () {
    this.table('colors', (table) => {
      // alter table
      table.dropColumn('name');
      table.boolean('black');
      table.boolean('red');
      table.boolean('green');
      table.boolean('white');
      table.boolean('blue');
      table.boolean('colorless');
    })
  }

  down () {
    this.table('colors', (table) => {
      // reverse alternations
      table.string('name', 2);
      table.dropColumn('black');
      table.dropColumn('red');
      table.dropColumn('green');
      table.dropColumn('white');
      table.dropColumn('blue');
      table.dropColumn('colorless');

    })
  }
}

module.exports = ColorsAddBooleanColumnsSchema
