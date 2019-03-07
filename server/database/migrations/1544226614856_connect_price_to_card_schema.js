'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConnectPriceToCardSchema extends Schema {
  up () {
    this.table('market_prices', (table) => {
      // alter table
      table.integer('card_id').unsigned().references('id').inTable('cards').alter();
    })
  }

  down () {
    this.table('market_prices', (table) => {
      // reverse alternations
      table.string('card_id', 100).alter();
    })
  }
}

module.exports = ConnectPriceToCardSchema
