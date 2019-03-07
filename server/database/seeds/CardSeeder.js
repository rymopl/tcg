'use strict'

/*
|--------------------------------------------------------------------------
| CardSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Set = use('App/Models/Set');

const got = use('got');

class CardSeeder {
  async run () {
    // User.find(1)
    const sets =  await Set.query().fetch();
    // console.log('sets', )

    //GRN guilds of ravnica

    for (let set of sets.toJSON()) {
      if (set.code === 'grn') {
        // https://api.scryfall.com/cards/search?q=e:
        const cards = await got.get('/cards/search?q=e:' + set.code,{baseUrl: 'https://api.scryfall.com', json: true});
        console.log('sets', set.name, set.code)
        console.log('cards', cards.body.next_page)
        const next = await got.get(cards.body.next_page, { json: true});
        console.log('next', next.body.data[1])
      }
    }
  }
}

module.exports = CardSeeder;
