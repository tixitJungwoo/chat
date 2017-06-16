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
var HTTP = Package.http.HTTP;
var Template = Package['templating-runtime'].Template;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:google-natural-language":{"client":{"index.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rocketchat_google-natural-language/client/index.js       //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Template.room.helpers({                                              // 1
	sentimentSmile: function () {                                       // 2
		if (!RocketChat.settings.get('GoogleNaturalLanguage_Enabled')) {   // 3
			return;                                                           // 4
		}                                                                  // 5
                                                                     //
		var room = ChatRoom.findOne(this._id, {                            // 7
			fields: {                                                         // 7
				sentiment: 1                                                     // 7
			}                                                                 // 7
		});                                                                // 7
                                                                     //
		if (room.sentiment >= 0.3) {                                       // 9
			return ':)';                                                      // 10
		} else if (room.sentiment >= -0.3) {                               // 11
			return ':|';                                                      // 12
		} else if (room.sentiment < -0.3) {                                // 13
			return ':(';                                                      // 14
		}                                                                  // 15
	}                                                                   // 16
});                                                                  // 1
///////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
var exports = require("./node_modules/meteor/rocketchat:google-natural-language/client/index.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:google-natural-language'] = exports;

})();
