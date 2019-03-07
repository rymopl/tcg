'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GameSchema extends Schema {
  up () {
    this.table('games', (table) => {
      // alter table
      table.dropColumn('arena');
      table.dropColumn('mtgo');
      table.dropColumn('paper');
      table.dropColumn('card_id');
      table.string('name', 50);
    })
  }

  down () {
    this.table('games', (table) => {
      // reverse alternations
      table.boolean('arena');
      table.boolean('mtgo');
      table.boolean('paper');
      table.string('card_id', 100);
    })
  }
}

module.exports = GameSchema
