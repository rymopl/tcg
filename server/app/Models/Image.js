'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Image extends Model {
  card() {
    return this.belongsTo('App/Models/Card');
  }
}

module.exports = Image
