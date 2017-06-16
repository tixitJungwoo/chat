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
var LDAPJS = Package['rocketchat:ldapjs'].LDAPJS;
var Logger = Package['rocketchat:logger'].Logger;
var SystemLogger = Package['rocketchat:logger'].SystemLogger;
var LoggerManager = Package['rocketchat:logger'].LoggerManager;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var slugify = Package['yasaricli:slugify'].slugify;
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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:ldap":{"client":{"loginHelper.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// packages/rocketchat_ldap/client/loginHelper.js                                      //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////
                                                                                       //
// Pass in username, password as normal                                                // 1
// customLdapOptions should be passed in if you want to override LDAP_DEFAULTS         // 2
// on any particular call (if you have multiple ldap servers you'd like to connect to)
// You'll likely want to set the dn value here {dn: "..."}                             // 4
Meteor.loginWithLDAP = function (username, password, customLdapOptions, callback) {    // 5
	// Retrieve arguments as array                                                        // 6
	var args = [];                                                                        // 7
                                                                                       //
	for (var i = 0; i < arguments.length; i++) {                                          // 8
		args.push(arguments[i]);                                                             // 9
	} // Pull username and password                                                       // 10
                                                                                       //
                                                                                       //
	username = args.shift();                                                              // 12
	password = args.shift(); // Check if last argument is a function                      // 13
	// if it is, pop it off and set callback to it                                        // 16
                                                                                       //
	if (typeof args[args.length - 1] === 'function') {                                    // 17
		callback = args.pop();                                                               // 18
	} else {                                                                              // 19
		callback = null;                                                                     // 20
	} // if args still holds options item, grab it                                        // 21
                                                                                       //
                                                                                       //
	if (args.length > 0) {                                                                // 24
		customLdapOptions = args.shift();                                                    // 25
	} else {                                                                              // 26
		customLdapOptions = {};                                                              // 27
	} // Set up loginRequest object                                                       // 28
                                                                                       //
                                                                                       //
	var loginRequest = {                                                                  // 31
		ldap: true,                                                                          // 32
		username: username,                                                                  // 33
		ldapPass: password,                                                                  // 34
		ldapOptions: customLdapOptions                                                       // 35
	};                                                                                    // 31
	Accounts.callLoginMethod({                                                            // 38
		// Call login method with ldap = true                                                // 39
		// This will hook into our login handler for ldap                                    // 40
		methodArguments: [loginRequest],                                                     // 41
		userCallback: function (error /*, result*/) {                                        // 42
			if (error) {                                                                        // 43
				if (callback) {                                                                    // 44
					callback(error);                                                                  // 45
				}                                                                                  // 46
			} else if (callback) {                                                              // 47
				callback();                                                                        // 48
			}                                                                                   // 49
		}                                                                                    // 50
	});                                                                                   // 38
};                                                                                     // 52
/////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:ldap/client/loginHelper.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:ldap'] = {};

})();
