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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:highlight-words":{"client.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rocketchat_highlight-words/client.js                     //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
/*                                                                   // 1
 * Hilights is a named function that will process Highlights         //
 * @param {Object} message - The message object                      //
 */function HighlightWordsClient(message) {                          //
	var msg = message;                                                  // 7
                                                                     //
	if (!_.isString(message)) {                                         // 8
		if (_.trim(message.html)) {                                        // 9
			msg = message.html;                                               // 10
		} else {                                                           // 11
			return message;                                                   // 12
		}                                                                  // 13
	}                                                                   // 14
                                                                     //
	var to_highlight = Meteor.user() && Meteor.user().settings && Meteor.user().settings.preferences && Meteor.user().settings.preferences.highlights;
                                                                     //
	if (Array.isArray(to_highlight)) {                                  // 17
		to_highlight.forEach(function (highlight) {                        // 18
			if (!_.isBlank(highlight)) {                                      // 19
				return msg = msg.replace(new RegExp("(^|\\b|[\\s\\n\\r\\t.,\u060C'\\\"\\+!?:-])(" + s.escapeRegExp(highlight) + ")($|\\b|[\\s\\n\\r\\t.,\u060C'\\\"\\+!?:-])(?![^<]*>|[^<>]*<\\/)", 'gmi'), '$1<span class="highlight-text">$2</span>$3');
			}                                                                 // 21
		});                                                                // 22
	}                                                                   // 23
                                                                     //
	message.html = msg;                                                 // 25
	return message;                                                     // 26
}                                                                    // 27
                                                                     //
RocketChat.callbacks.add('renderMessage', HighlightWordsClient, RocketChat.callbacks.priority.MEDIUM + 1, 'highlight-words');
///////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:highlight-words/client.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:highlight-words'] = {};

})();
