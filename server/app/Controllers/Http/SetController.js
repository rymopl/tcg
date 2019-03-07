'use strict';

const Set = use('App/Models/Set');
const SetType = use('App/Models/SetType');
const AuthorizationService = use('App/Services/AuthorizationService');


class SetController {
  async index({ auth }) {
    return await Set.query().fetch();
  }
}

module.exports = SetController;
