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
var Logger = Package['rocketchat:logger'].Logger;
var SystemLogger = Package['rocketchat:logger'].SystemLogger;
var LoggerManager = Package['rocketchat:logger'].LoggerManager;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var SHA256 = Package.sha.SHA256;
var Template = Package['templating-runtime'].Template;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:crowd":{"client":{"loginHelper.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rocketchat_crowd/client/loginHelper.js                   //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Meteor.loginWithCrowd = function (username, password, callback) {    // 1
	// Retrieve arguments as array                                      // 2
	var args = [];                                                      // 3
                                                                     //
	for (var i = 0; i < arguments.length; i++) {                        // 4
		args.push(arguments[i]);                                           // 5
	} // Pull username and password                                     // 6
                                                                     //
                                                                     //
	username = args.shift();                                            // 8
	password = args.shift();                                            // 9
	var loginRequest = {                                                // 10
		crowd: true,                                                       // 11
		username: username,                                                // 12
		crowdPassword: password                                            // 13
	};                                                                  // 10
	Accounts.callLoginMethod({                                          // 15
		methodArguments: [loginRequest],                                   // 16
		userCallback: function (error) {                                   // 17
			if (error) {                                                      // 18
				if (callback) {                                                  // 19
					callback(error);                                                // 20
				}                                                                // 21
			} else if (callback) {                                            // 22
				callback();                                                      // 23
			}                                                                 // 24
		}                                                                  // 25
	});                                                                 // 15
};                                                                   // 27
///////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:crowd/client/loginHelper.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:crowd'] = {};

})();
