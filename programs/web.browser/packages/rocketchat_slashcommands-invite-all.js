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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:slashcommands-invite-all":{"client.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rocketchat_slashcommands-invite-all/client.js            //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
RocketChat.slashCommands.add('invite-all-to', undefined, {           // 1
	description: 'Invite_user_to_join_channel_all_to',                  // 2
	params: '#room'                                                     // 3
});                                                                  // 1
RocketChat.slashCommands.add('invite-all-from', undefined, {         // 5
	description: 'Invite_user_to_join_channel_all_from',                // 6
	params: '#room'                                                     // 7
});                                                                  // 5
///////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:slashcommands-invite-all/client.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:slashcommands-invite-all'] = {};

})();
