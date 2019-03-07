'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DropTypeFromImageSchema extends Schema {
  up () {
    this.table('images', (table) => {
      // alter table
      table.dropColumn('type')
    })
  }

  down () {
    this.table('images', (table) => {
      // reverse alternations
      table.string('type', 15);

    })
  }
}

module.exports = DropTypeFromImageSchema
