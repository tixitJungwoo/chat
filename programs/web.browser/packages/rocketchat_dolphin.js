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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:dolphin":{"common.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/rocketchat_dolphin/common.js                                                                //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
// Dolphin OAuth2                                                                                       // 1
/* globals CustomOAuth */var config = {                                                                 // 2
	serverURL: '',                                                                                         // 5
	authorizePath: '/m/oauth2/auth/',                                                                      // 6
	tokenPath: '/m/oauth2/token/',                                                                         // 7
	identityPath: '/m/oauth2/api/me/',                                                                     // 8
	scope: 'basic',                                                                                        // 9
	addAutopublishFields: {                                                                                // 10
		forLoggedInUser: ['services.dolphin'],                                                                // 11
		forOtherUsers: ['services.dolphin.name']                                                              // 12
	}                                                                                                      // 10
};                                                                                                      // 4
var Dolphin = new CustomOAuth('dolphin', config);                                                       // 16
                                                                                                        //
function DolphinOnCreateUser(options, user) {                                                           // 18
	if (user && user.services && user.services.dolphin && user.services.dolphin.NickName) {                // 19
		user.username = user.services.dolphin.NickName;                                                       // 20
	}                                                                                                      // 21
                                                                                                        //
	return user;                                                                                           // 22
}                                                                                                       // 23
                                                                                                        //
if (Meteor.isServer) {                                                                                  // 25
	Meteor.startup(function () {                                                                           // 26
		return RocketChat.models.Settings.find({                                                              // 26
			_id: 'Accounts_OAuth_Dolphin_URL'                                                                    // 27
		}).observe({                                                                                          // 27
			added: function () {                                                                                 // 28
				config.serverURL = RocketChat.settings.get('Accounts_OAuth_Dolphin_URL');                           // 29
				return Dolphin.configure(config);                                                                   // 30
			},                                                                                                   // 31
			changed: function () {                                                                               // 32
				config.serverURL = RocketChat.settings.get('Accounts_OAuth_Dolphin_URL');                           // 33
				return Dolphin.configure(config);                                                                   // 34
			}                                                                                                    // 35
		});                                                                                                   // 27
	});                                                                                                    // 26
                                                                                                        //
	if (RocketChat.settings.get('Accounts_OAuth_Dolphin_URL')) {                                           // 39
		var data = {                                                                                          // 40
			buttonLabelText: RocketChat.settings.get('Accounts_OAuth_Dolphin_button_label_text'),                // 41
			buttonColor: RocketChat.settings.get('Accounts_OAuth_Dolphin_button_color'),                         // 42
			buttonLabelColor: RocketChat.settings.get('Accounts_OAuth_Dolphin_button_label_color'),              // 43
			clientId: RocketChat.settings.get('Accounts_OAuth_Dolphin_id'),                                      // 44
			secret: RocketChat.settings.get('Accounts_OAuth_Dolphin_secret'),                                    // 45
			serverURL: RocketChat.settings.get('Accounts_OAuth_Dolphin_URL'),                                    // 46
			loginStyle: RocketChat.settings.get('Accounts_OAuth_Dolphin_login_style')                            // 47
		};                                                                                                    // 40
		ServiceConfiguration.configurations.upsert({                                                          // 50
			service: 'dolphin'                                                                                   // 50
		}, {                                                                                                  // 50
			$set: data                                                                                           // 50
		});                                                                                                   // 50
	}                                                                                                      // 51
                                                                                                        //
	RocketChat.callbacks.add('beforeCreateUser', DolphinOnCreateUser, RocketChat.callbacks.priority.HIGH);
} else {                                                                                                // 54
	Meteor.startup(function () {                                                                           // 55
		return Tracker.autorun(function () {                                                                  // 55
			if (RocketChat.settings.get('Accounts_OAuth_Dolphin_URL')) {                                         // 57
				config.serverURL = RocketChat.settings.get('Accounts_OAuth_Dolphin_URL');                           // 58
				return Dolphin.configure(config);                                                                   // 59
			}                                                                                                    // 60
		});                                                                                                   // 61
	});                                                                                                    // 55
}                                                                                                       // 63
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".css"
  ]
});
require("./node_modules/meteor/rocketchat:dolphin/common.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:dolphin'] = {};

})();
