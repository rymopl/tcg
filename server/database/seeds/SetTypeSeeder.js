'use strict'

/*
|--------------------------------------------------------------------------
| SetTypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const SetType = use('App/Models/SetType');

const types = [
  {type: 'core', description: 'A yearly Magic core set (Tenth Edition, etc)'},
  {type: 'expansion', description: 'A rotational expansion set in a block (Zendikar, etc)'},
  {type: 'masters', description: 'A reprint set that contains no new cards (Modern Masters, etc)'},
  {type: 'masterpiece', description: 'Masterpiece Series premium foil cards'},
  {type: 'from_the_vault', description: 'From the Vault gift sets'},
  {type: 'spellbook', description: 'Spellbook series gift sets'},
  {type: 'premium_deck', description: 'Premium Deck Series decks'},
  {type: 'duel_deck', description: 'Duel Decks'},
  {type: 'draft_innovation', description: 'Special draft sets, like Conspiracy and Battlebond'},
  {type: 'treasure_chest', description: 'Magic Online treasure chest prize sets'},
  {type: 'commander', description: 'Commander preconstructed decks'},
  {type: 'planechase', description: 'Planechase sets'},
  {type: 'archenemy', description: 'Archenemy sets'},
  {type: 'vanguard', description: 'Vanguard card sets'},
  {type: 'funny', description: 'A funny un-set or set with funny promos (Unglued, Happy Holidays, etc)'},
  {type: 'starter', description: 'A starter/introductory set (Portal, etc)'},
  {type: 'box', description: 'A gift box set'},
  {type: 'promo', description: 'A set that contains purely promotional cards'},
  {type: 'token', description: 'A set made up of tokens and emblems'},
  {type: 'memorabilia', description: 'A set made up of gold-bordered, oversize, or trophy cards that are not legal'}
];

class SetTypeSeeder {
  async run () {
    for (let type of types) {
      const setType = new SetType();
      setType.type = type.type;
      setType.description = type.description;

      await setType.save()
    }

  }
}

module.exports = SetTypeSeeder;
