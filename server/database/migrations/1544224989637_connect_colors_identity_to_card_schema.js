'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConnectColorsIdentityToCardSchema extends Schema {
  up () {
    this.table('color_identities', (table) => {
      // alter table
      table.integer('card_id').unsigned().references('id').inTable('cards').alter();
    })
  }

  down () {
    this.table('color_identities', (table) => {
      // reverse alternations
      table.string('card_id', 100).alter();
    })
  }
}

module.exports = ConnectColorsIdentityToCardSchema
