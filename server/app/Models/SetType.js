'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SetType extends Model {

  sets () {
    return this.hasMany('App/Models/Set')
  }
}

module.exports = SetType
