'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FaceColorsSchema extends Schema {
  up () {
    this.create('face_colors', (table) => {
      table.increments();
      table.boolean('black');
      table.boolean('red');
      table.boolean('green');
      table.boolean('white');
      table.boolean('blue');
      table.boolean('colorless');
      table.string('face_id', 100);
      table.timestamps();
    })
  }

  down () {
    this.drop('face_colors')
  }
}

module.exports = FaceColorsSchema
