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
var Importer = Package['rocketchat:importer'].Importer;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:importer-hipchat-enterprise":{"main.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// packages/rocketchat_importer-hipchat-enterprise/main.js                                    //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                              //
/* globals Importer */Importer.addImporter('hipchatenterprise', Importer.HipChatEnterprise, {
	name: 'HipChat Enterprise',                                                                  // 4
	warnings: [{                                                                                 // 5
		text: 'Importer_HipChatEnterprise_Information',                                             // 7
		href: 'https://rocket.chat/docs/administrator-guides/import/hipchat/enterprise/'            // 8
	}, {                                                                                         // 6
		text: 'Importer_HipChatEnterprise_BetaWarning',                                             // 10
		href: 'https://github.com/RocketChat/Rocket.Chat/issues/new'                                // 11
	}],                                                                                          // 9
	mimeType: 'application/gzip'                                                                 // 14
});                                                                                           // 3
////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:importer-hipchat-enterprise/main.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:importer-hipchat-enterprise'] = {};

})();
