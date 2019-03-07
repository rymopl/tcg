'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CardFaceSchema extends Schema {
  up () {
    this.create('card_faces', (table) => {
      table.increments();
      table.string('object', 40);
      table.string('name', 255);
      table.string('mana_cost', 100);
      table.string('type_line', 100);
      table.string('watermark', 100);
      table.string('artist', 100);
      table.text('oracle_text');
      table.string('illustration_id', 100);
      table.string('card_id', 100);
      table.timestamps();
    })
  }

  down () {
    this.drop('card_faces')
  }
}

module.exports = CardFaceSchema
