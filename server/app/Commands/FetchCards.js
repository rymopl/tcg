'use strict';

const { Command } = require('@adonisjs/ace');
const ScryfallService = use('App/Services/ScryfallService');
const CardsDataService = use('App/Services/CardsDataService');

const Set = use('App/Models/Set');

class FetchCards extends Command {
  static get signature () {
    return `
      fetch:cards 
      { set?=grn : Name of set from you want to fetch cards}
      { --log : Log card count}
     `
  }

  static get description () {
    return 'Get cards data from scryfall'
  }

  async handle (args, options) {
    console.log('args.set', args.set)
    const cards = await ScryfallService.getCardsFromSet(args.set);
    // const card = await ScryfallService.getCardById('b4c8ddc1-d95c-499f-b1d1-f608f8f07b02');
    // console.log('card', card.body)
    // const created = await CardsDataService.createCardsData(card.body);
    const promises = [];
    //
    console.log('cards', cards.length)
    for (let card of cards) {
      const cardPromise = await CardsDataService.createCardsData(card);  // async call
      promises.push(cardPromise)    // s
    }

    await Promise.all(promises);
    // console.log('created',created )

    // return 'elo';
    // console.log(options)
    // if (args.set) {
    //
    // } else {
    //   const sets =  await Set.query().fetch();
    //   // console.log('sets', )
    //
    //   //GRN guilds of ravnica
    //
    //   for (let set of sets.toJSON()) {
    //     if (set.code === 'grn') {
    //       // https://api.scryfall.com/cards/search?q=e:
    //       const cards = await got.get('/cards/search?q=e:' + set.code,{baseUrl: 'https://api.scryfall.com', json: true});
    //       console.log('sets', set.name, set.code)
    //       console.log('cards', cards.body.next_page)
    //       const next = await got.get(cards.body.next_page, { json: true});
    //       console.log('next', next.body.data[1])
    //     }
    //   }
    // }
      // User.find(1)


    this.info('Dummy implementation for fetch:card:data command')
  }
}

module.exports = FetchCards;
