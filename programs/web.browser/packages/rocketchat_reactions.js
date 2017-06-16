//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Template = Package['templating-runtime'].Template;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:reactions":{"client":{"init.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/rocketchat_reactions/client/init.js                                                                   //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Template.room.events({                                                                                            // 1
	'click .add-reaction': function (event) {                                                                        // 2
		event.preventDefault();                                                                                         // 3
		event.stopPropagation();                                                                                        // 4
		var data = Blaze.getData(event.currentTarget);                                                                  // 5
		var user = Meteor.user();                                                                                       // 7
		var room = RocketChat.models.Rooms.findOne({                                                                    // 8
			_id: data._arguments[1].rid                                                                                    // 8
		});                                                                                                             // 8
                                                                                                                  //
		if (Array.isArray(room.muted) && room.muted.indexOf(user.username) !== -1 && !room.reactWhenReadOnly) {         // 10
			return false;                                                                                                  // 11
		}                                                                                                               // 12
                                                                                                                  //
		RocketChat.EmojiPicker.open(event.currentTarget, function (emoji) {                                             // 14
			Meteor.call('setReaction', ":" + emoji + ":", data._arguments[1]._id);                                         // 15
		});                                                                                                             // 16
	},                                                                                                               // 17
	'click .reactions > li:not(.add-reaction)': function (event) {                                                   // 19
		event.preventDefault();                                                                                         // 20
		var data = Blaze.getData(event.currentTarget);                                                                  // 21
		Meteor.call('setReaction', $(event.currentTarget).data('emoji'), data._arguments[1]._id, function () {          // 22
			RocketChat.tooltip.hide();                                                                                     // 23
		});                                                                                                             // 24
	},                                                                                                               // 25
	'mouseenter .reactions > li:not(.add-reaction)': function (event) {                                              // 27
		event.stopPropagation();                                                                                        // 28
		RocketChat.tooltip.showElement($(event.currentTarget).find('.people').get(0), event.currentTarget);             // 29
	},                                                                                                               // 30
	'mouseleave .reactions > li:not(.add-reaction)': function (event) {                                              // 32
		event.stopPropagation();                                                                                        // 33
		RocketChat.tooltip.hide();                                                                                      // 34
	}                                                                                                                // 35
});                                                                                                               // 1
Meteor.startup(function () {                                                                                      // 38
	RocketChat.MessageAction.addButton({                                                                             // 39
		id: 'reaction-message',                                                                                         // 40
		icon: 'icon-people-plus',                                                                                       // 41
		i18nLabel: 'Reactions',                                                                                         // 42
		context: ['message', 'message-mobile'],                                                                         // 43
		action: function (event) {                                                                                      // 47
			var data = Blaze.getData(event.currentTarget);                                                                 // 48
			event.stopPropagation();                                                                                       // 50
			RocketChat.EmojiPicker.open(event.currentTarget, function (emoji) {                                            // 52
				Meteor.call('setReaction', ":" + emoji + ":", data._arguments[1]._id);                                        // 53
			});                                                                                                            // 54
		},                                                                                                              // 55
		validation: function (message) {                                                                                // 56
			var room = RocketChat.models.Rooms.findOne({                                                                   // 57
				_id: message.rid                                                                                              // 57
			});                                                                                                            // 57
			var user = Meteor.user();                                                                                      // 58
                                                                                                                  //
			if (Array.isArray(room.muted) && room.muted.indexOf(user.username) !== -1 && !room.reactWhenReadOnly) {        // 60
				return false;                                                                                                 // 61
			} else if (!RocketChat.models.Subscriptions.findOne({                                                          // 62
				rid: message.rid                                                                                              // 62
			})) {                                                                                                          // 62
				return false;                                                                                                 // 63
			} else if (message.private) {                                                                                  // 64
				return false;                                                                                                 // 65
			}                                                                                                              // 66
                                                                                                                  //
			return true;                                                                                                   // 68
		},                                                                                                              // 69
		order: 22                                                                                                       // 70
	});                                                                                                              // 39
});                                                                                                               // 72
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"methods":{"setReaction.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/rocketchat_reactions/client/methods/setReaction.js                                                    //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.methods({                                                                                                  // 1
	setReaction: function (reaction, messageId) {                                                                    // 2
		if (!Meteor.userId()) {                                                                                         // 3
			throw new Meteor.Error(203, 'User_logged_out');                                                                // 4
		}                                                                                                               // 5
                                                                                                                  //
		var user = Meteor.user();                                                                                       // 7
		var message = RocketChat.models.Messages.findOne({                                                              // 9
			_id: messageId                                                                                                 // 9
		});                                                                                                             // 9
		var room = RocketChat.models.Rooms.findOne({                                                                    // 10
			_id: message.rid                                                                                               // 10
		});                                                                                                             // 10
                                                                                                                  //
		if (Array.isArray(room.muted) && room.muted.indexOf(user.username) !== -1 && !room.reactWhenReadOnly) {         // 12
			return false;                                                                                                  // 13
		} else if (!RocketChat.models.Subscriptions.findOne({                                                           // 14
			rid: message.rid                                                                                               // 14
		})) {                                                                                                           // 14
			return false;                                                                                                  // 15
		} else if (message.private) {                                                                                   // 16
			return false;                                                                                                  // 17
		}                                                                                                               // 18
                                                                                                                  //
		if (message.reactions && message.reactions[reaction] && message.reactions[reaction].usernames.indexOf(user.username) !== -1) {
			message.reactions[reaction].usernames.splice(message.reactions[reaction].usernames.indexOf(user.username), 1);
                                                                                                                  //
			if (message.reactions[reaction].usernames.length === 0) {                                                      // 23
				delete message.reactions[reaction];                                                                           // 24
			}                                                                                                              // 25
                                                                                                                  //
			if (_.isEmpty(message.reactions)) {                                                                            // 27
				delete message.reactions;                                                                                     // 28
				RocketChat.models.Messages.unsetReactions(messageId);                                                         // 29
				RocketChat.callbacks.run('unsetReaction', messageId, reaction);                                               // 30
			} else {                                                                                                       // 31
				RocketChat.models.Messages.setReactions(messageId, message.reactions);                                        // 32
				RocketChat.callbacks.run('setReaction', messageId, reaction);                                                 // 33
			}                                                                                                              // 34
		} else {                                                                                                        // 35
			if (!message.reactions) {                                                                                      // 36
				message.reactions = {};                                                                                       // 37
			}                                                                                                              // 38
                                                                                                                  //
			if (!message.reactions[reaction]) {                                                                            // 39
				message.reactions[reaction] = {                                                                               // 40
					usernames: []                                                                                                // 41
				};                                                                                                            // 40
			}                                                                                                              // 43
                                                                                                                  //
			message.reactions[reaction].usernames.push(user.username);                                                     // 44
			RocketChat.models.Messages.setReactions(messageId, message.reactions);                                         // 46
			RocketChat.callbacks.run('setReaction', messageId, reaction);                                                  // 47
		}                                                                                                               // 48
                                                                                                                  //
		return;                                                                                                         // 50
	}                                                                                                                // 51
});                                                                                                               // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"server":{"models":{"Messages.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/rocketchat_reactions/server/models/Messages.js                                                        //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
RocketChat.models.Messages.setReactions = function (messageId, reactions) {                                       // 1
	return this.update({                                                                                             // 2
		_id: messageId                                                                                                  // 2
	}, {                                                                                                             // 2
		$set: {                                                                                                         // 2
			reactions: reactions                                                                                           // 2
		}                                                                                                               // 2
	});                                                                                                              // 2
};                                                                                                                // 3
                                                                                                                  //
RocketChat.models.Messages.unsetReactions = function (messageId) {                                                // 5
	return this.update({                                                                                             // 6
		_id: messageId                                                                                                  // 6
	}, {                                                                                                             // 6
		$unset: {                                                                                                       // 6
			reactions: 1                                                                                                   // 6
		}                                                                                                               // 6
	});                                                                                                              // 6
};                                                                                                                // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".less"
  ]
});
require("./node_modules/meteor/rocketchat:reactions/client/init.js");
require("./node_modules/meteor/rocketchat:reactions/server/models/Messages.js");
require("./node_modules/meteor/rocketchat:reactions/client/methods/setReaction.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:reactions'] = {};

})();
