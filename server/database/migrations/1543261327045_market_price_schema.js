'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class MarketPriceSchema extends Schema {
  up () {
    this.create('market_prices', (table) => {
      table.increments();
      table.float('usd', 2, 2);
      table.float('eur', 2, 2);
      table.float('tix', 2, 2);
      table.string('card_id', 100);
      table.timestamps();
    })
  }

  down () {
    this.drop('market_prices')
  }
}

module.exports = MarketPriceSchema;
