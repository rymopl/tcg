'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ColorSchema extends Schema {
  up () {
    this.create('colors', (table) => {
      table.increments();
      table.string('name', 2);
      table.string('card_id', 100);
      table.timestamps();
    })
  }

  down () {
    this.drop('colors')
  }
}

module.exports = ColorSchema;
