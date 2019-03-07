'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ConnectRelatedLinksToCardSchema extends Schema {
  up () {
    this.table('related_uris', (table) => {
      // alter table
      table.integer('card_id').unsigned().references('id').inTable('cards').alter();

    })
  }

  down () {
    this.table('related_uris', (table) => {
      // reverse alternations
      table.string('card_id', 100).alter();

    })
  }
}

module.exports = ConnectRelatedLinksToCardSchema
