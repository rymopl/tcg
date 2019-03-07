'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Card extends Model {

  games () {
    return this
      .belongsToMany('App/Models/Game')
      .withTimestamps();
  }
  /**
   * @method tasks
   *
   * @return {Object}
   */
  cardFaces () {
    return this.hasMany('App/Models/CardFace');
  }

  colors () {
    return this.hasMany('App/Models/Color');
  }

  colorIdentities () {
    return this.hasMany('App/Models/ColorIdentity');
  }

  legality () {
    return this.hasOne('App/Models/Legality');
  }

  marketPrice () {
    return this.hasOne('App/Models/MarketPrice');
  }

  image () {
    return this.hasOne('App/Models/Image');
  }

  relatedUri () {
    return this.hasOne('App/Models/RelatedUri');
  }

}

module.exports = Card;
