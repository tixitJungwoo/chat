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
var check = Package.check.check;
var Match = Package.check.Match;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:slashcommands-join":{"client.js":function(){

////////////////////////////////////////////////////////////////////////////
//                                                                        //
// packages/rocketchat_slashcommands-join/client.js                       //
//                                                                        //
////////////////////////////////////////////////////////////////////////////
                                                                          //
RocketChat.slashCommands.add('join', undefined, {                         // 1
	description: 'Join_the_given_channel',                                   // 2
	params: '#channel'                                                       // 3
}, function (err, result, params) {                                       // 1
	if (err.error === 'error-user-already-in-room') {                        // 5
		params.cmd = 'open';                                                    // 6
		params.msg.msg = params.msg.msg.replace('join', 'open');                // 7
		return RocketChat.slashCommands.run('open', params.params, params.msg);
	}                                                                        // 9
});                                                                       // 10
////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:slashcommands-join/client.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:slashcommands-join'] = {};

})();
