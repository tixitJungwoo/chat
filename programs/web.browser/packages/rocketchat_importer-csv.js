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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:importer-csv":{"main.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rocketchat_importer-csv/main.js                          //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
/* globals Importer */Importer.addImporter('csv', Importer.CSV, {    // 1
	name: 'CSV',                                                        // 4
	warnings: [{                                                        // 5
		text: 'Importer_CSV_Information',                                  // 6
		href: 'https://rocket.chat/docs/administrator-guides/import/csv/'  // 7
	}],                                                                 // 5
	mimeType: 'application/zip'                                         // 9
});                                                                  // 3
///////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:importer-csv/main.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:importer-csv'] = {};

})();
