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
var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var CustomOAuth = Package['rocketchat:custom-oauth'].CustomOAuth;
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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:drupal":{"common.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_drupal/common.js                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/* global CustomOAuth */ // Drupal Server CallBack URL needs to be http(s)://{rocketchat.server}[:port]/_oauth/drupal
// In RocketChat -> Administration the URL needs to be http(s)://{drupal.server}/                                     // 4
var config = {                                                                                                        // 6
	serverURL: '',                                                                                                       // 7
	identityPath: '/oauth2/UserInfo',                                                                                    // 8
	authorizePath: '/oauth2/authorize',                                                                                  // 9
	tokenPath: '/oauth2/token',                                                                                          // 10
	scope: 'openid email profile offline_access',                                                                        // 11
	tokenSentVia: 'payload',                                                                                             // 12
	usernameField: 'preferred_username',                                                                                 // 13
	mergeUsers: true,                                                                                                    // 14
	addAutopublishFields: {                                                                                              // 15
		forLoggedInUser: ['services.drupal'],                                                                               // 16
		forOtherUsers: ['services.drupal.name']                                                                             // 17
	}                                                                                                                    // 15
};                                                                                                                    // 6
var Drupal = new CustomOAuth('drupal', config);                                                                       // 21
                                                                                                                      //
if (Meteor.isServer) {                                                                                                // 23
	Meteor.startup(function () {                                                                                         // 24
		RocketChat.settings.get('API_Drupal_URL', function (key, value) {                                                   // 25
			config.serverURL = value;                                                                                          // 26
			Drupal.configure(config);                                                                                          // 27
		});                                                                                                                 // 28
	});                                                                                                                  // 29
} else {                                                                                                              // 30
	Meteor.startup(function () {                                                                                         // 31
		Tracker.autorun(function () {                                                                                       // 32
			if (RocketChat.settings.get('API_Drupal_URL')) {                                                                   // 33
				config.serverURL = RocketChat.settings.get('API_Drupal_URL');                                                     // 34
				Drupal.configure(config);                                                                                         // 35
			}                                                                                                                  // 36
		});                                                                                                                 // 37
	});                                                                                                                  // 38
}                                                                                                                     // 39
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".css"
  ]
});
require("./node_modules/meteor/rocketchat:drupal/common.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:drupal'] = {};

})();
