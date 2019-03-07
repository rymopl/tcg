'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CardSchema extends Schema {
  up () {
    this.create('cards', (table) => {
      table.increments();
      table.string('object', 40);
      table.string('card_id', 255);
      table.string('oracle_id', 255);
      table.integer('mtgo_id');
      table.integer('arena_id');
      table.integer('tcgplayer_id');
      table.string('name', 255);
      table.string('lang', 10);
      table.date('released_at');
      table.string('layout', 40);
      table.boolean('highres_image');
      table.string('mana_cost', 100);
      table.float('cmc', 1, 1);
      table.boolean('reserved');
      table.boolean('foil');
      table.boolean('nonfoil');
      table.boolean('oversized');
      table.boolean('promo');
      table.boolean('reprint');
      table.string('set', 20);
      table.string('set_name', 100);
      table.string('rulings_uri', 255);
      table.string('collector_number', 10);
      table.boolean('digital');
      table.string('rarity', 20);
      table.string('illustration_id', 255);
      table.string('artist', 100);
      table.string('border_color', 30);
      table.string('frame', 30);
      table.string('frame_effect', 50);
      table.boolean('full_art');
      table.boolean('timeshifted');
      table.boolean('colorshifted');
      table.boolean('futureshifted');
      table.boolean('story_spotlight');
      table.integer('edhrec_rank');
      table.timestamps();
    })
  }

  down () {
    this.drop('cards')
  }
}

module.exports = CardSchema
