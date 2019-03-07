'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Game extends Model {
  cards () {
    return this
      .belongsToMany('App/Models/Card')
  }
}

module.exports = Game;
