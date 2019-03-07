'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MarketPriceFloatSchema extends Schema {
  up () {
    this.table('market_prices', (table) => {
      // alter table
      table.float('usd', 8, 2).alter();
      table.float('eur', 8, 2).alter();
      table.float('tix', 8, 2).alter();
    })
  }

  down () {
    this.alter('market_prices', (table) => {
      table.float('usd', 2, 2).alter();
      table.float('eur', 2, 2).alter();
      table.float('tix', 2, 2).alter();
    })
  }
}

module.exports = MarketPriceFloatSchema
