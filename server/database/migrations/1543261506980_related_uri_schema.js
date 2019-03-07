'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RelatedUriSchema extends Schema {
  up () {
    this.create('related_uris', (table) => {
      table.increments();
      table.string('gatherer', 255);
      table.string('tcgplayer_decks', 255);
      table.string('edhrec', 255);
      table.string('mtgtop8', 255);
      table.string('card_id', 100);
      table.timestamps();
    })
  }

  down () {
    this.drop('related_uris')
  }
}

module.exports = RelatedUriSchema
