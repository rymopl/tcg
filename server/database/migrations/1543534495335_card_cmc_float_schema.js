'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CardCmcFloatSchema extends Schema {
  up () {
    this.table('cards', (table) => {
      // alter table
      table.float('cmc', 3, 1).alter();
    })
  }

  down () {
    this.table('cards', (table) => {
      // reverse alternations
      table.float('cmc', 1, 1).alter();
    })
  }
}

module.exports = CardCmcFloatSchema
