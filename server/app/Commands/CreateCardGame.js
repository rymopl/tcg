'use strict'

const { Command } = require('@adonisjs/ace');
const CardsGameService = use('App/Services/CardsGameService');

class CreateCardGame extends Command {
  static get signature () {
    return `
      create:card:game
      { name?=all : Name of game to add}
      { --log : Log game added}
    `
  }

  static get description () {
    return 'Tell something helpful about this command'
  }

  async handle (args, options) {
    const defaultGames = ['arena', 'mtgo', 'paper'];
    const promises = [];
    if (args.name === 'all') {
      for (let gameName of defaultGames) {
        const cardGamePromise = CardsGameService.createCardsGame(gameName) ;   // async call
        promises.push(cardGamePromise)
      }
    } else {
      const cardGamePromise = CardsGameService.createCardsGame(args.name) ;   // async call
      promises.push(cardGamePromise)
    }

    await Promise.all(promises);
    this.info('Dummy implementation for create:card:game command')
  }
}

module.exports = CreateCardGame;
