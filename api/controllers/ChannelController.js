/**
 * XpController
 *
 * @description :: Server-side logic for managing xps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  //http://localhost:1337/xp/add?name=gamingdaddies&xp=10
  add: function (req, res) {
    var arguments = req.query;
    var name = arguments.name.toLowerCase();
    var xp = parseInt(arguments.xp);
    Channel.find({name: name}).then(function (channel) {
      var toUpdate = channel[0];
      toUpdate.xp += xp;
      Channel.update({name: name}, toUpdate).then(function (updated) {
        var updatedChannel = updated[0];
        res.send('Added ' + xp + ' xp! New total: ' + updatedChannel.xp + '!');
      });
    })
  },

  //http://localhost:1337/xp/add?name=gamingdaddies&action=<follow,sub,tip,host,raid,epic>
  addForAction: function (req, res) {
    var arguments = req.query;
    var name = arguments.name.toLowerCase();
    var action = arguments.action.toLowerCase();
    Channel.findOne({name: name}).then(function (channel) {
      var actionToUse = _.find(channel.actions, {'name': action});
      //toUpdate.xp += actionToUse.value;
      res.send(channel);// + "actiontoUse: " + actionToUse);
      /*  Channel.update({name: name},toUpdate).then(function(updated){
       var updatedChannel = updated[0];
       res.send('Added ' + actionToUse.value + ' xp! New total: ' + updatedChannel.xp + '!');
       });*/
    })
  }
};

