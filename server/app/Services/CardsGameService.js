const Game = use('App/Models/Game');
const Database = use('Database');

class CardsGameService {
  async createCardsGame(name) {

    const game = new Game();

    game.name = name;

    await game.save();

    Database.close();
    return game;
  }
}

module.exports = new CardsGameService();
