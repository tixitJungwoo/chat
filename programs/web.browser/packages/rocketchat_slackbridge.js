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
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:slackbridge":{"slashcommand":{"slackbridge_import.client.js":function(){

////////////////////////////////////////////////////////////////////////////
//                                                                        //
// packages/rocketchat_slackbridge/slashcommand/slackbridge_import.client //
//                                                                        //
////////////////////////////////////////////////////////////////////////////
                                                                          //
RocketChat.settings.onload('SlackBridge_Enabled', function (key, value) {
	if (value) {                                                             // 2
		RocketChat.slashCommands.add('slackbridge-import', null, {              // 3
			description: 'Import_old_messages_from_slackbridge'                    // 4
		});                                                                     // 3
	} else {                                                                 // 6
		delete RocketChat.slashCommands.commands['slackbridge-import'];         // 7
	}                                                                        // 8
});                                                                       // 9
////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:slackbridge/slashcommand/slackbridge_import.client.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:slackbridge'] = {};

})();
