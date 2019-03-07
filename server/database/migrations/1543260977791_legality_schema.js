'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LegalitySchema extends Schema {
  up () {
    this.create('legalities', (table) => {
      table.increments();
      table.string('standard', 20);
      table.string('future', 20);
      table.string('frontier', 20);
      table.string('modern', 20);
      table.string('legacy', 20);
      table.string('pauper', 20);
      table.string('vintage', 20);
      table.string('penny', 20);
      table.string('commander', 20);
      table.string('1v1', 20);
      table.string('duel', 20);
      table.string('brawl', 20);
      table.string('card_id', 100);
      table.timestamps();
    })
  }

  down () {
    this.drop('legalities')
  }
}

module.exports = LegalitySchema
