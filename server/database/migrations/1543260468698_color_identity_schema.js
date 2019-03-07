'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ColorIdentitySchema extends Schema {
  up () {
    this.create('color_identities', (table) => {
      table.increments();
      table.string('name', 2);
      table.string('card_id', 100);
      table.timestamps();
    })
  }

  down () {
    this.drop('color_identities')
  }
}

module.exports = ColorIdentitySchema
