'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConnectFacesToCardSchema extends Schema {
  up () {
    this.table('card_faces', (table) => {
      // alter table
      table.integer('card_id').unsigned().references('id').inTable('cards').alter();
    })
  }

  down () {
    this.table('card_faces', (table) => {
      // reverse alternations
      table.string('card_id', 100).alter();
    })
  }
}

module.exports = ConnectFacesToCardSchema

