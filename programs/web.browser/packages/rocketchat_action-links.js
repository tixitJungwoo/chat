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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:action-links":{"both":{"lib":{"actionLinks.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/rocketchat_action-links/both/lib/actionLinks.js                                     //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
//Action Links namespace creation.                                                              // 1
RocketChat.actionLinks = {                                                                      // 2
	actions: {},                                                                                   // 3
	register: function (name, funct) {                                                             // 4
		RocketChat.actionLinks.actions[name] = funct;                                                 // 5
	},                                                                                             // 6
	getMessage: function (name, messageId) {                                                       // 7
		if (!Meteor.userId()) {                                                                       // 8
			throw new Meteor.Error('error-invalid-user', 'Invalid user', {                               // 9
				"function": 'actionLinks.getMessage'                                                        // 9
			});                                                                                          // 9
		}                                                                                             // 10
                                                                                                //
		var message = RocketChat.models.Messages.findOne({                                            // 12
			_id: messageId                                                                               // 12
		});                                                                                           // 12
                                                                                                //
		if (!message) {                                                                               // 13
			throw new Meteor.Error('error-invalid-message', 'Invalid message', {                         // 14
				"function": 'actionLinks.getMessage'                                                        // 14
			});                                                                                          // 14
		}                                                                                             // 15
                                                                                                //
		var room = RocketChat.models.Rooms.findOne({                                                  // 17
			_id: message.rid                                                                             // 17
		});                                                                                           // 17
                                                                                                //
		if (Array.isArray(room.usernames) && room.usernames.indexOf(Meteor.user().username) === -1) {
			throw new Meteor.Error('error-not-allowed', 'Not allowed', {                                 // 19
				"function": 'actionLinks.getMessage'                                                        // 19
			});                                                                                          // 19
		}                                                                                             // 20
                                                                                                //
		if (!message.actionLinks || !message.actionLinks[name]) {                                     // 22
			throw new Meteor.Error('error-invalid-actionlink', 'Invalid action link', {                  // 23
				"function": 'actionLinks.getMessage'                                                        // 23
			});                                                                                          // 23
		}                                                                                             // 24
                                                                                                //
		return message;                                                                               // 26
	}                                                                                              // 27
};                                                                                              // 2
//////////////////////////////////////////////////////////////////////////////////////////////////

}}},"client":{"lib":{"actionLinks.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/rocketchat_action-links/client/lib/actionLinks.js                                   //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
//Action Links Handler. This method will be called off the client.                              // 1
RocketChat.actionLinks.run = function (name, messageId, instance) {                             // 3
	var message = RocketChat.actionLinks.getMessage(name, messageId);                              // 4
	var actionLink = message.actionLinks[name];                                                    // 6
	var ranClient = false;                                                                         // 8
                                                                                                //
	if (RocketChat.actionLinks && RocketChat.actionLinks.actions && RocketChat.actionLinks.actions[actionLink.method_id]) {
		// run just on client side                                                                    // 11
		RocketChat.actionLinks.actions[actionLink.method_id](message, actionLink.params, instance);   // 12
		ranClient = true;                                                                             // 14
	} // and run on server side                                                                    // 15
                                                                                                //
                                                                                                //
	Meteor.call('actionLinkHandler', name, messageId, function (err) {                             // 18
		if (err && !ranClient) {                                                                      // 19
			handleError(err);                                                                            // 20
		}                                                                                             // 21
	});                                                                                            // 22
};                                                                                              // 23
//////////////////////////////////////////////////////////////////////////////////////////////////

}},"init.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                              //
// packages/rocketchat_action-links/client/init.js                                              //
//                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                //
/* globals fireGlobalEvent */Template.room.events({                                             // 1
	'click .action-link': function (event, instance) {                                             // 3
		event.preventDefault();                                                                       // 4
		event.stopPropagation();                                                                      // 5
		var data = Blaze.getData(event.currentTarget);                                                // 7
                                                                                                //
		if (RocketChat.Layout.isEmbedded()) {                                                         // 9
			return fireGlobalEvent('click-action-link', {                                                // 10
				actionlink: $(event.currentTarget).data('actionlink'),                                      // 11
				value: data._arguments[1]._id,                                                              // 12
				message: data._arguments[1]                                                                 // 13
			});                                                                                          // 10
		}                                                                                             // 15
                                                                                                //
		if (data && data._arguments && data._arguments[1] && data._arguments[1]._id) {                // 17
			RocketChat.actionLinks.run($(event.currentTarget).data('actionlink'), data._arguments[1]._id, instance, function (err) {
				if (err) {                                                                                  // 19
					handleError(err);                                                                          // 20
				}                                                                                           // 21
			});                                                                                          // 22
		}                                                                                             // 23
	}                                                                                              // 24
});                                                                                             // 2
//////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".less"
  ]
});
require("./node_modules/meteor/rocketchat:action-links/both/lib/actionLinks.js");
require("./node_modules/meteor/rocketchat:action-links/client/lib/actionLinks.js");
require("./node_modules/meteor/rocketchat:action-links/client/init.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:action-links'] = {};

})();
