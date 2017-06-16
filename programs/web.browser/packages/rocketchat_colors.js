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
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:colors":{"client.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/rocketchat_colors/client.js                                                                   //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
//                                                                                                        // 1
// HexColorPreview is a named function that will process Colors                                           // 2
// @param {Object} message - The message object                                                           // 3
//                                                                                                        // 4
function HexColorPreview(message) {                                                                       // 6
	var msg = void 0;                                                                                        // 7
                                                                                                          //
	if (_.trim(message.html) && RocketChat.settings.get('HexColorPreview_Enabled')) {                        // 8
		msg = message.html;                                                                                     // 9
		msg = msg.replace(/(?:^|\s|\n)(#[A-Fa-f0-9]{3}([A-Fa-f0-9]{3})?)\b/g, function (match, completeColor) {
			return match.replace(completeColor, "<div class=\"message-color\"><div class=\"message-color-sample\" style=\"background-color:" + completeColor + "\"></div>" + completeColor.toUpperCase() + "</div>");
		});                                                                                                     // 12
		message.html = msg;                                                                                     // 13
	}                                                                                                        // 14
                                                                                                          //
	return message;                                                                                          // 15
}                                                                                                         // 16
                                                                                                          //
RocketChat.callbacks.add('renderMessage', HexColorPreview, RocketChat.callbacks.priority.MEDIUM);         // 18
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".css"
  ]
});
require("./node_modules/meteor/rocketchat:colors/client.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:colors'] = {};

})();
