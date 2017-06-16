(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var HTTP = Package.http.HTTP;
var HTTPInternals = Package.http.HTTPInternals;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var Symbol = Package['ecmascript-runtime-server'].Symbol;
var Map = Package['ecmascript-runtime-server'].Map;
var Set = Package['ecmascript-runtime-server'].Set;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:google-natural-language":{"server":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/rocketchat_google-natural-language/server/index.js                                 //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
module.watch(require("./settings.js"));                                                        // 1
module.watch(require("./models/Rooms.js"));                                                    // 1
                                                                                               //
var googleLanguage = Npm.require('@google-cloud/language');                                    // 4
                                                                                               //
var languageClient = void 0;                                                                   // 6
RocketChat.settings.get('GoogleNaturalLanguage_ServiceAccount', function (key, value) {        // 8
	if (value) {                                                                                  // 9
		try {                                                                                        // 10
			languageClient = googleLanguage({                                                           // 11
				credentials: JSON.parse(value)                                                             // 12
			});                                                                                         // 11
		} catch (e) {                                                                                // 14
			languageClient = null;                                                                      // 15
			console.error('Error parsing Google Natural Language credential.', e);                      // 16
		}                                                                                            // 17
	}                                                                                             // 18
});                                                                                            // 19
                                                                                               //
var setRoomSentiment = function (message) {                                                    // 21
	if (!languageClient) {                                                                        // 22
		return;                                                                                      // 23
	}                                                                                             // 24
                                                                                               //
	languageClient.detectSentiment(message.msg, Meteor.bindEnvironment(function (error, result) {
		if (!error) {                                                                                // 27
			RocketChat.models.Rooms.setSentiment(message.rid, result);                                  // 28
		}                                                                                            // 29
	}));                                                                                          // 30
	return message;                                                                               // 32
};                                                                                             // 33
                                                                                               //
RocketChat.settings.get('GoogleNaturalLanguage_Enabled', function (key, value) {               // 35
	if (value) {                                                                                  // 36
		RocketChat.callbacks.add('afterSaveMessage', setRoomSentiment, RocketChat.callbacks.priority.MEDIUM, 'GoogleNaturalLanguage');
	} else {                                                                                      // 38
		RocketChat.callbacks.remove('afterSaveMessage', 'GoogleNaturalLanguage');                    // 39
	}                                                                                             // 40
});                                                                                            // 41
/////////////////////////////////////////////////////////////////////////////////////////////////

},"settings.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/rocketchat_google-natural-language/server/settings.js                              //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
Meteor.startup(function () {                                                                   // 1
	RocketChat.settings.add('GoogleNaturalLanguage_Enabled', false, {                             // 2
		type: 'boolean',                                                                             // 3
		group: 'Message',                                                                            // 4
		section: 'Google Natural Language',                                                          // 5
		"public": true,                                                                              // 6
		i18nLabel: 'Enabled'                                                                         // 7
	});                                                                                           // 2
	RocketChat.settings.add('GoogleNaturalLanguage_ServiceAccount', '', {                         // 9
		type: 'string',                                                                              // 10
		group: 'Message',                                                                            // 11
		section: 'Google Natural Language',                                                          // 12
		multiline: true,                                                                             // 13
		enableQuery: {                                                                               // 14
			_id: 'GoogleNaturalLanguage_Enabled',                                                       // 15
			value: true                                                                                 // 16
		},                                                                                           // 14
		i18nLabel: 'Service_account_key'                                                             // 18
	});                                                                                           // 9
});                                                                                            // 20
/////////////////////////////////////////////////////////////////////////////////////////////////

},"models":{"Rooms.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/rocketchat_google-natural-language/server/models/Rooms.js                          //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
RocketChat.models.Rooms.setSentiment = function (roomId, sentiment) {                          // 1
	return this.update({                                                                          // 2
		_id: roomId                                                                                  // 2
	}, {                                                                                          // 2
		$set: {                                                                                      // 2
			sentiment: sentiment                                                                        // 2
		}                                                                                            // 2
	});                                                                                           // 2
};                                                                                             // 3
/////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
var exports = require("./node_modules/meteor/rocketchat:google-natural-language/server/index.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:google-natural-language'] = exports;

})();

//# sourceMappingURL=rocketchat_google-natural-language.js.map
