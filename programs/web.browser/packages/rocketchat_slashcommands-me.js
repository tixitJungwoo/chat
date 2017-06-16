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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:slashcommands-me":{"me.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rocketchat_slashcommands-me/me.js                        //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
/*                                                                   // 2
 * Me is a named function that will replace /me commands             //
 * @param {Object} message - The message object                      //
 */RocketChat.slashCommands.add('me', function () {                  //
	function Me(command, params, item) {                                // 6
		if (command !== 'me') {                                            // 7
			return;                                                           // 8
		}                                                                  // 9
                                                                     //
		if (_.trim(params)) {                                              // 10
			var msg = item;                                                   // 11
			msg.msg = "_" + params + "_";                                     // 12
			Meteor.call('sendMessage', msg);                                  // 13
		}                                                                  // 14
	}                                                                   // 15
                                                                     //
	return Me;                                                          // 6
}(), {                                                               // 6
	description: 'Displays_action_text',                                // 16
	params: 'your_message'                                              // 17
});                                                                  // 15
///////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:slashcommands-me/me.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:slashcommands-me'] = {};

})();
