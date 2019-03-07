'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FaceImagesSchema extends Schema {
  up () {
    this.create('face_images', (table) => {
      table.increments();
      table.string('small', 100);
      table.string('normal', 100);
      table.string('large', 100);
      table.string('png', 100);
      table.string('art_crop', 100);
      table.string('border_crop', 100);
      table.string('face_id', 100);
      table.timestamps();
    })
  }

  down () {
    this.drop('face_images')
  }
}

module.exports = FaceImagesSchema
