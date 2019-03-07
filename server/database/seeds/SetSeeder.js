'use strict'

/*
|--------------------------------------------------------------------------
| SetSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Set = use('App/Models/Set');
const SetType = use('App/Models/SetType');


const got = use('got');

class SetSeeder {
  async run () {
    const response = await got.get('/sets',{baseUrl: 'https://api.scryfall.com', json: true});
    for (let set of response.body.data) {
      // console.log('response.body.data', response.body.data)
//     const elo = response.body.data[2];
      const type = await SetType.findBy('type', set.set_type);
// // console.log('type', type);
      const addSet = new Set();
      addSet.object = set.object;
      addSet.name = set.name;
      addSet.code = set.code;
      addSet.card_count = set.card_count;
      addSet.parent_set_code = set.parent_set_code;
      addSet.released_at = set.released_at;
      addSet.digital = set.digital;
      addSet.foil_only = set.foil_only;
      addSet.icon_svg_uri = set.icon_svg_uri;
      addSet.set_type_id = type.id;
//     //
//     // await set.save();
//     //
      await type.sets().save(addSet)    // const response = await got('https://api.scryfall.com/cards/named?fuzzy=aust+com');
//     // // const response = await got.get('/cards/named?fuzzy=aust+com', {baseUrl: 'https://api.scryfall.com', json: true});
//     //
//     console.log('response', set);
    }
  }
}

module.exports = SetSeeder;
