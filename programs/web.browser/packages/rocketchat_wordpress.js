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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:wordpress":{"common.js":function(){

////////////////////////////////////////////////////////////////////////////////
//                                                                            //
// packages/rocketchat_wordpress/common.js                                    //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////
                                                                              //
/* globals CustomOAuth */var config = {                                       // 1
	serverURL: '',                                                               // 4
	identityPath: '/oauth/me',                                                   // 5
	addAutopublishFields: {                                                      // 6
		forLoggedInUser: ['services.wordpress'],                                    // 7
		forOtherUsers: ['services.wordpress.user_login']                            // 8
	}                                                                            // 6
};                                                                            // 3
var WordPress = new CustomOAuth('wordpress', config);                         // 12
                                                                              //
if (Meteor.isServer) {                                                        // 14
	Meteor.startup(function () {                                                 // 15
		return RocketChat.settings.get('API_Wordpress_URL', function (key, value) {
			config.serverURL = value;                                                  // 17
			return WordPress.configure(config);                                        // 18
		});                                                                         // 19
	});                                                                          // 20
} else {                                                                      // 21
	Meteor.startup(function () {                                                 // 22
		return Tracker.autorun(function () {                                        // 23
			if (RocketChat.settings.get('API_Wordpress_URL')) {                        // 24
				config.serverURL = RocketChat.settings.get('API_Wordpress_URL');          // 25
				return WordPress.configure(config);                                       // 26
			}                                                                          // 27
		});                                                                         // 28
	});                                                                          // 29
}                                                                             // 30
////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".css"
  ]
});
require("./node_modules/meteor/rocketchat:wordpress/common.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:wordpress'] = {};

})();
