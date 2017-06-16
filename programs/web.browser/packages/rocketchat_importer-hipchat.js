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

/* Package-scope variables */
var __coffeescriptShare;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:importer-hipchat":{"main.coffee.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rocketchat_importer-hipchat/main.coffee.js               //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Importer.addImporter('hipchat', Importer.HipChat, {                  // 1
  name: 'HipChat',                                                   // 2
  mimeType: 'application/zip'                                        // 3
});                                                                  // 2
///////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".coffee"
  ]
});
require("./node_modules/meteor/rocketchat:importer-hipchat/main.coffee.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:importer-hipchat'] = {};

})();
