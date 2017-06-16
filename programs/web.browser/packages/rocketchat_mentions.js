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
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:mentions":{"client.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_mentions/client.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*                                                                                                                     // 1
 * Mentions is a named function that will process Mentions                                                             //
 * @param {Object} message - The message object                                                                        //
 */function MentionsClient(message) {                                                                                  //
	var msg = message && message.html || '';                                                                              // 7
                                                                                                                       //
	if (!msg.trim()) {                                                                                                    // 8
		return message;                                                                                                      // 9
	}                                                                                                                     // 10
                                                                                                                       //
	var msgMentionRegex = new RegExp("(?:^|\\s|\\n)(@(" + RocketChat.settings.get('UTF8_Names_Validation') + "):?)[:.,s]?", 'g');
	var me = Meteor.user();                                                                                               // 13
	me = me ? me.username : null;                                                                                         // 14
	msg = msg.replace(msgMentionRegex, function (match, mention, username) {                                              // 16
		if (['all', 'here'].includes(username)) {                                                                            // 17
			return match.replace(mention, "<a class=\"mention-link mention-link-me mention-link-all background-attention-color\">" + mention + "</a>");
		}                                                                                                                    // 19
                                                                                                                       //
		if (message.temp == null && _.findWhere(message.mentions, {                                                          // 20
			username: username                                                                                                  // 20
		}) == null) {                                                                                                        // 20
			return match;                                                                                                       // 21
		}                                                                                                                    // 22
                                                                                                                       //
		return match.replace(mention, "<a class=\"mention-link " + (username === me ? 'mention-link-me background-primary-action-color' : '') + "\" data-username=\"" + username + "\">" + mention + "</a>");
	});                                                                                                                   // 24
	var msgChannelRegex = new RegExp("(?:^|\\s|\\n)(#(" + RocketChat.settings.get('UTF8_Names_Validation') + "))[:.,s]?", 'g');
	msg = msg.replace(msgChannelRegex, function (match, mention, name) {                                                  // 28
		if (message.temp == null && _.findWhere(message.channels, {                                                          // 29
			name: name                                                                                                          // 29
		}) == null) {                                                                                                        // 29
			return match;                                                                                                       // 30
		}                                                                                                                    // 31
                                                                                                                       //
		return match.replace(mention, "<a class=\"mention-link\" data-channel=\"" + name + "\">" + mention + "</a>");        // 32
	});                                                                                                                   // 33
	message.html = msg;                                                                                                   // 34
	return message;                                                                                                       // 35
}                                                                                                                      // 36
                                                                                                                       //
RocketChat.callbacks.add('renderMessage', MentionsClient, RocketChat.callbacks.priority.MEDIUM, 'mentions-message');   // 39
RocketChat.callbacks.add('renderMentions', MentionsClient, RocketChat.callbacks.priority.MEDIUM, 'mentions-mentions');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:mentions/client.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:mentions'] = {};

})();
