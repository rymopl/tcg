'use strict';

const Card = use('App/Models/Card');
// const SetType = use('App/Models/SetType');
// const AuthorizationService = use('App/Services/AuthorizationService');

class CardController {
  async index({ auth }) {
    const cards = await Card
      .query()
      .with('cardFaces')
      .with('games')
      .with('colors')
      .with('colorIdentities')
      .fetch();
    // card.games = await card.games().fetch();
    return cards;
  }
}

module.exports = CardController;
