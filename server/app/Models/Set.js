'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Set extends Model {
  setType() {
    return this.belongsTo('App/Models/SetType');
  }
}

module.exports = Set;
