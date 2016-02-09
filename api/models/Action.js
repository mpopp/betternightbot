/**
* Action.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    belongsToChannel: {
      model: 'channel',
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    value: {
      type: 'integer',
      required: true,
      defaultsTo: 0
    }
  }
};

