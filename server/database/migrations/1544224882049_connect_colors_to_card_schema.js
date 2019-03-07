'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConnectColorsToCardSchema extends Schema {
  up () {
    this.table('colors', (table) => {
      // alter table
      table.integer('card_id').unsigned().references('id').inTable('cards').alter();
    })
  }

  down () {
    this.table('colors', (table) => {
      // reverse alternations
      table.string('card_id', 100).alter();
    })
  }
}

module.exports = ConnectColorsToCardSchema;
