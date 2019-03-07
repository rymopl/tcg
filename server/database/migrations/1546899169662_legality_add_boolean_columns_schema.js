'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LegalityAddBooleanColumnsSchema extends Schema {
  up () {
    this.table('legalities', (table) => {
      // alter table
      table.boolean('standard').alter();
      table.boolean('future').alter();
      table.boolean('frontier').alter();
      table.boolean('modern').alter();
      table.boolean('legacy').alter();
      table.boolean('pauper').alter();
      table.boolean('vintage').alter();
      table.boolean('penny').alter();
      table.boolean('commander').alter();
      table.boolean('1v1').alter();
      table.boolean('duel').alter();
      table.boolean('brawl').alter();
    })
  }

  down () {
    this.table('legalities', (table) => {
      // reverse alternations
      table.string('standard', 20).alter();
      table.string('future', 20).alter();
      table.string('frontier', 20).alter();
      table.string('modern', 20).alter();
      table.string('legacy', 20).alter();
      table.string('pauper', 20).alter();
      table.string('vintage', 20).alter();
      table.string('penny', 20).alter();
      table.string('commander', 20).alter();
      table.string('1v1', 20).alter();
      table.string('duel', 20).alter();
      table.string('brawl', 20).alter();
    })
  }
}

module.exports = LegalityAddBooleanColumnsSchema
