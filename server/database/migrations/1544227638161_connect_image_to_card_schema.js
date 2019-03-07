'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConnectImageToCardSchema extends Schema {
  up () {
    this.table('images', (table) => {
      // alter table
      table.integer('card_id').unsigned().references('id').inTable('cards').alter();
    })
  }

  down () {
    this.table('images', (table) => {
      // reverse alternations
      table.string('card_id', 100).alter();
    })
  }
}

module.exports = ConnectImageToCardSchema
