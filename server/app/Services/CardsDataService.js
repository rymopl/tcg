const Card = use('App/Models/Card');
const CardFace = use('App/Models/CardFace');
const Image = use('App/Models/Image');
const RelatedUri = use('App/Models/RelatedUri');
const Color = use('App/Models/Color');
const ColorIdentity = use('App/Models/ColorIdentity');
const Legality = use('App/Models/Legality');
const Game = use('App/Models/Game');
const MarketPrice = use('App/Models/MarketPrice');
const Database = use('Database');
const _ = use('lodash');

class CardsDataService {
  // create normal card a36d3ea7-0f18-4865-b47b-755673db065e
  // create split card 3c99f65-2355-444b-b49a-c6b916f268b1, 2c25b8ef-6331-49df-9457-b8b4e44da2c9
  // create transform card hadans climb: 8e7554bc-8583-4059-8895-c3845bc27ae3 , bolas: b215968-93a6-4278-ac61-4e3e8c3c3943
  // create meld cards 5a7a212e-e0b6-4f12-a95c-173cae023f93
  // create flip cards a00a7180-49bd-4ead-852a-67b6b5e4b933
  // create leveler cards 20d3b541-40aa-469e-be97-20496a7632d4
  async createCardsData (request) {

    let games = await Game.all();
    let promisses = [];

    games = games.toJSON();

    const card = new Card();

    card.object = request.object;
    card.card_id = request.id;
    card.oracle_id = request.oracle_id;
    card.mtgo_id = request.mtgo_id;
    card.arena_id = request.arena_id;
    card.tcgplayer_id = request.tcgplayer_id;
    card.name = request.name;
    card.lang = request.lang;
    card.released_at = request.released_at;
    card.layout = request.layout;
    card.highres_image = request.highres_image;
    card.mana_cost = request.mana_cost;
    card.cmc = request.cmc;
    card.reserved = request.reserved;
    card.foil = request.foil;
    card.nonfoil = request.nonfoil;
    card.oversized = request.oversized;
    card.promo = request.promo;
    card.reprint = request.reprint;
    card.set = request.set;
    card.set_name = request.set_name;
    card.rulings_uri = request.rulings_uri;
    card.collector_number = request.collector_number;
    card.digital = request.digital;
    card.rarity = request.rarity;
    card.illustration_id = request.illustration_id;
    card.artist = request.artist;
    card.border_color = request.border_color;
    card.frame = request.frame;
    card.frame_effect = request.frame_effect;
    card.full_art = request.full_art;
    card.timeshifted = request.timeshifted;
    card.colorshifted = request.colorshifted;
    card.futureshifted = request.futureshifted;
    card.story_spotlight = request.story_spotlight;
    card.edhrec_rank = request.edhrec_rank;

    await card.save();

    for (let cardGame of request.games) {
      const currentGame = _.find(games, {name: cardGame} );
      if (currentGame) {
        const gamePromise = await card.games().attach(currentGame.id);
        promisses.push(gamePromise)
      }
    }

    if (request.card_faces) {
      for (let cardFace of request.card_faces) {
        const cardFacePromise = CardsDataService.crateCardFace(cardFace, card);   // async call
        promisses.push(cardFacePromise)    // sync call
      }
    } else {
      const cardFacePromise = CardsDataService.crateCardFace(request, card);   // async call
      promisses.push(cardFacePromise)    // sync call
    }

    promisses.push(CardsDataService.createImage(request.image_uris, card));
    promisses.push(CardsDataService.createRelatedUrls(request.related_uris, card));

    for (let color of request.colors) {
      const colorPromise = CardsDataService.createColor(color, card) ;   // async call
      promisses.push(colorPromise)    // sync call
    }

    for (let colorIdentity of request.color_identity) {
      const colorIdentityPromise = CardsDataService.createColorIdentity(colorIdentity, card) ;   // async call
      promisses.push(colorIdentityPromise)    // sync call
    }

    promisses.push(CardsDataService.createLegality(request.legalities, card));
    promisses.push(CardsDataService.cratePrices(request.usd, request.eur, request.tix, card));

    await Promise.all(promisses);    // async call

    Database.close();
    console.log('Card added:', card.name);
    return card;
  }

  static async crateCardFace (data, card) {
    const cardFace = new CardFace();

    cardFace.object = data.object;
    cardFace.name = data.name;
    cardFace.mana_cost = data.mana_cost;
    cardFace.type_line = data.type_line;
    cardFace.watermark = data.watermark;
    cardFace.artist = data.artist;
    cardFace.oracle_text = data.oracle_text;
    cardFace.illustration_id = data.illustration_id;

    return await card.cardFaces().save(cardFace);
  }

  static async createImage (data, card) {
    const image = new Image();

    image.small = data.small;
    image.normal = data.normal;
    image.large = data.large;
    image.png = data.png;
    image.art_crop = data.art_crop;
    image.border_crop = data.border_crop;

    return await card.image().save(image);
  }

  static async createRelatedUrls (data, card) {
    const relatedUri = new RelatedUri();

    relatedUri.tcgplayer_decks = data.tcgplayer_decks;
    relatedUri.edhrec = data.edhrec;
    relatedUri.mtgtop8 = data.mtgtop8;

    return await card.relatedUri().save(relatedUri);
  }

  static async createColor (data, card) {
    const color = new Color();
    color.name = data;

    return await card.colors().save(color);
  }

  static async createColorIdentity (data, card) {
    const colorIdentity = new ColorIdentity();
    colorIdentity.name = data;

    return await card.colorIdentities().save(colorIdentity);
  }

  static async createLegality (data, card) {
    const legality = new Legality();

    legality.standard = data.standard;
    legality.future = data.future;
    legality.frontier = data.frontier;
    legality.modern = data.modern;
    legality.legacy = data.legacy;
    legality.pauper = data.pauper;
    legality.vintage = data.vintage;
    legality.penny = data.penny;
    legality.commander = data.commander;
    legality.duel = data.duel;
    legality.brawl = data.brawl;

    return await card.legality().save(legality);
  }


  static async cratePrices (usd, eur, tix, card) {
    const price = new MarketPrice ();

    price.usd = usd;
    price.eur = eur;
    price.tix = tix;

    return await card.marketPrice().save(price);
  }

}

module.exports = new CardsDataService();
