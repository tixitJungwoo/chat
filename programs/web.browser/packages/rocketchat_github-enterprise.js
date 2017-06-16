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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:github-enterprise":{"common.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
// packages/rocketchat_github-enterprise/common.js                                           //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////
                                                                                             //
/* global CustomOAuth */ // GitHub Enterprise Server CallBack URL needs to be http(s)://{rocketchat.server}[:port]/_oauth/github_enterprise
// In RocketChat -> Administration the URL needs to be http(s)://{github.enterprise.server}/
var config = {                                                                               // 6
	serverURL: '',                                                                              // 7
	identityPath: '/api/v3/user',                                                               // 8
	authorizePath: '/login/oauth/authorize',                                                    // 9
	tokenPath: '/login/oauth/access_token',                                                     // 10
	addAutopublishFields: {                                                                     // 11
		forLoggedInUser: ['services.github-enterprise'],                                           // 12
		forOtherUsers: ['services.github-enterprise.username']                                     // 13
	}                                                                                           // 11
};                                                                                           // 6
var GitHubEnterprise = new CustomOAuth('github_enterprise', config);                         // 17
                                                                                             //
if (Meteor.isServer) {                                                                       // 19
	Meteor.startup(function () {                                                                // 20
		RocketChat.settings.get('API_GitHub_Enterprise_URL', function (key, value) {               // 21
			config.serverURL = value;                                                                 // 22
			GitHubEnterprise.configure(config);                                                       // 23
		});                                                                                        // 24
	});                                                                                         // 25
} else {                                                                                     // 26
	Meteor.startup(function () {                                                                // 27
		Tracker.autorun(function () {                                                              // 28
			if (RocketChat.settings.get('API_GitHub_Enterprise_URL')) {                               // 29
				config.serverURL = RocketChat.settings.get('API_GitHub_Enterprise_URL');                 // 30
				GitHubEnterprise.configure(config);                                                      // 31
			}                                                                                         // 32
		});                                                                                        // 33
	});                                                                                         // 34
}                                                                                            // 35
///////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".css"
  ]
});
require("./node_modules/meteor/rocketchat:github-enterprise/common.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:github-enterprise'] = {};

})();
