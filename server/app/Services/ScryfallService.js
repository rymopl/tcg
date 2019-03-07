const got = use('got');
const scryfallApiUrl = 'https://api.scryfall.com';

class ScryfallService {

  async getCardById (id) {
    return await got.get('https://api.scryfall.com/cards/' + id, {json: true});
  }
  /**
   * Return all cards from given set
   *
   * @attribute setName
   *
   * @return {Object}
   */
  async getCardsFromSet(setName) {
    const initUrl = scryfallApiUrl + '/cards/search?q=e:' + setName;
    return await ScryfallService.fetchCards(initUrl)
  }

  /**
   * Make recursive calls to api
   *
   * @attribute url
   *
   * @return {Object}
   */
  static async fetchCards (url) {
    const fragment = await ScryfallService.fetchPartialCards(url);
    if (fragment.body.next_page) {
      console.log('fragment.body.data', fragment.body.data.length)
      return fragment.body.data.concat(await ScryfallService.fetchCards(fragment.body.next_page));
    } else {
      console.log('fragment.body.data end', fragment.body.data.length)

      return fragment.body.data;
    }
  }

  /**
   * Call scryfall api for cards on single page
   *
   * @attribute url
   *
   * @return {Object}
   */
  static async fetchPartialCards(url)  {
      return await got.get(url,{json: true});
  }
}

module.exports = new ScryfallService();
