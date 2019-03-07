'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ImageSchema extends Schema {
  up () {
    this.create('images', (table) => {
      table.increments();
      table.string('type', 15);
      table.string('small', 100);
      table.string('normal', 100);
      table.string('large', 100);
      table.string('png', 100);
      table.string('art_crop', 100);
      table.string('border_crop', 100);
      table.string('card_id', 100);
      table.timestamps();
    })
  }

  down () {
    this.drop('images')
  }
}

module.exports = ImageSchema;
