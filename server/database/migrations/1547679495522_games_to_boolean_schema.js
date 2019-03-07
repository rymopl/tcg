'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GamesToBooleanSchema extends Schema {
  up () {
    this.table('games', (table) => {
      // alter table
      table.boolean('arena');
      table.boolean('mtgo');
      table.boolean('paper');
      table.string('card_id', 100);
      table.dropUnique('name');
    })
  }

  down () {
    this.table('games', (table) => {
      // reverse alternations
      table.dropColumn('arena');
      table.dropColumn('mtgo');
      table.dropColumn('paper');
      table.dropColumn('card_id');
      table.unique('name');
    })
  }
}

module.exports = GamesToBooleanSchema
