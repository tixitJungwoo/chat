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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:gitlab":{"common.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rocketchat_gitlab/common.js                              //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
/* global CustomOAuth */var config = {                               // 1
	serverURL: 'https://gitlab.com',                                    // 3
	identityPath: '/api/v3/user',                                       // 4
	scope: 'api',                                                       // 5
	addAutopublishFields: {                                             // 6
		forLoggedInUser: ['services.gitlab'],                              // 7
		forOtherUsers: ['services.gitlab.username']                        // 8
	}                                                                   // 6
};                                                                   // 2
var Gitlab = new CustomOAuth('gitlab', config);                      // 12
                                                                     //
if (Meteor.isServer) {                                               // 14
	Meteor.startup(function () {                                        // 15
		RocketChat.settings.get('API_Gitlab_URL', function (key, value) {  // 16
			config.serverURL = value;                                         // 17
			Gitlab.configure(config);                                         // 18
		});                                                                // 19
	});                                                                 // 20
} else {                                                             // 21
	Meteor.startup(function () {                                        // 22
		Tracker.autorun(function () {                                      // 23
			if (RocketChat.settings.get('API_Gitlab_URL')) {                  // 24
				config.serverURL = RocketChat.settings.get('API_Gitlab_URL');    // 25
				Gitlab.configure(config);                                        // 26
			}                                                                 // 27
		});                                                                // 28
	});                                                                 // 29
}                                                                    // 30
///////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".css"
  ]
});
require("./node_modules/meteor/rocketchat:gitlab/common.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:gitlab'] = {};

})();
