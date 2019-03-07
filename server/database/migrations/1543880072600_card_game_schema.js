'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CardGameSchema extends Schema {
  up () {
    this.create('card_game', (table) => {
      table.increments();
      table.integer('card_id').unsigned().references('id').inTable('cards');
      table.integer('game_id').unsigned().references('id').inTable('games');
      table.timestamps();
    })
  }

  down () {
    this.drop('card_game')
  }
}

module.exports = CardGameSchema
