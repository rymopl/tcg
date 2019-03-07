'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GameSchema extends Schema {
  up () {
    this.table('games', (table) => {
      // alter table
      table.unique('name');
    })
  }

  down () {
    this.table('games', (table) => {
      // reverse alternations
      table.dropUnique('name');
    })
  }
}

module.exports = GameSchema
