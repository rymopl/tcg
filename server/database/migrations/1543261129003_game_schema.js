'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GameSchema extends Schema {
  up () {
    this.create('games', (table) => {
      table.increments();
      table.boolean('arena');
      table.boolean('mtgo');
      table.boolean('paper');
      table.string('card_id', 100);
      table.timestamps();
    })
  }

  down () {
    this.drop('games')
  }
}

module.exports = GameSchema
