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
var FlowRouter = Package['kadira:flow-router'].FlowRouter;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var Accounts = Package['accounts-base'].Accounts;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:login-token":{"client":{"login_token_client.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rocketchat_login-token/client/login_token_client.js      //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Meteor.loginWithLoginToken = function (token) {                      // 1
	Accounts.callLoginMethod({                                          // 2
		methodArguments: [{                                                // 3
			loginToken: token                                                 // 4
		}],                                                                // 3
		userCallback: function (error) {                                   // 6
			if (!error) {                                                     // 7
				FlowRouter.go('/');                                              // 8
			}                                                                 // 9
		}                                                                  // 10
	});                                                                 // 2
};                                                                   // 12
                                                                     //
FlowRouter.route('/login-token/:token', {                            // 14
	name: 'tokenLogin',                                                 // 15
	action: function () {                                               // 16
		BlazeLayout.render('loginLayout');                                 // 17
		Meteor.loginWithLoginToken(this.getParam('token'));                // 18
	}                                                                   // 19
});                                                                  // 14
///////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:login-token/client/login_token_client.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:login-token'] = {};

})();
