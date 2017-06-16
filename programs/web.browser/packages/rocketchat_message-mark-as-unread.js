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
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var Logger = Package['rocketchat:logger'].Logger;
var SystemLogger = Package['rocketchat:logger'].SystemLogger;
var LoggerManager = Package['rocketchat:logger'].LoggerManager;
var Template = Package['templating-runtime'].Template;
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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:message-mark-as-unread":{"client":{"actionButton.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rocketchat_message-mark-as-unread/client/actionButton.js //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Meteor.startup(function () {                                         // 1
	return RocketChat.MessageAction.addButton({                         // 2
		id: 'mark-message-as-unread',                                      // 3
		icon: 'icon-flag',                                                 // 4
		i18nLabel: 'Mark_as_unread',                                       // 5
		context: ['message', 'message-mobile'],                            // 6
		action: function () {                                              // 7
			var message = this._arguments[1];                                 // 8
			RocketChat.MessageAction.hideDropDown();                          // 9
			return Meteor.call('unreadMessages', message, function (error) {  // 10
				if (error) {                                                     // 11
					return handleError(error);                                      // 12
				}                                                                // 13
                                                                     //
				var subscription = ChatSubscription.findOne({                    // 14
					rid: message.rid                                                // 15
				});                                                              // 14
                                                                     //
				if (subscription == null) {                                      // 17
					return;                                                         // 18
				}                                                                // 19
                                                                     //
				RoomManager.close(subscription.t + subscription.name);           // 20
				return FlowRouter.go('home');                                    // 21
			});                                                               // 22
		},                                                                 // 23
		validation: function (message) {                                   // 24
			return message.u._id !== Meteor.user()._id;                       // 25
		},                                                                 // 26
		order: 22                                                          // 27
	});                                                                 // 2
});                                                                  // 29
///////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:message-mark-as-unread/client/actionButton.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:message-mark-as-unread'] = {};

})();
