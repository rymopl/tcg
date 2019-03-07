'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ColorsIndentityAddBooleanColumnsSchema extends Schema {
  up () {
    this.table('color_identities', (table) => {
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
    this.table('color_identities', (table) => {
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

module.exports = ColorsIndentityAddBooleanColumnsSchema
