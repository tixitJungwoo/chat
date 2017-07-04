(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:analytics":{"server":{"settings.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rocketchat_analytics/server/settings.js                  //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
RocketChat.settings.addGroup('Analytics', function () {              // 1
	function addSettings() {                                            // 1
		this.section('Piwik', function () {                                // 2
			var enableQuery = {                                               // 3
				_id: 'PiwikAnalytics_enabled',                                   // 3
				value: true                                                      // 3
			};                                                                // 3
			this.add('PiwikAnalytics_enabled', false, {                       // 4
				type: 'boolean',                                                 // 5
				"public": true,                                                  // 6
				i18nLabel: 'Enable'                                              // 7
			});                                                               // 4
			this.add('PiwikAnalytics_url', '', {                              // 9
				type: 'string',                                                  // 10
				"public": true,                                                  // 11
				i18nLabel: 'URL',                                                // 12
				enableQuery: enableQuery                                         // 13
			});                                                               // 9
			this.add('PiwikAnalytics_siteId', '', {                           // 15
				type: 'string',                                                  // 16
				"public": true,                                                  // 17
				i18nLabel: 'Client_ID',                                          // 18
				enableQuery: enableQuery                                         // 19
			});                                                               // 15
		});                                                                // 21
		this.section('Analytics_Google', function () {                     // 23
			var enableQuery = {                                               // 24
				_id: 'GoogleAnalytics_enabled',                                  // 24
				value: true                                                      // 24
			};                                                                // 24
			this.add('GoogleAnalytics_enabled', false, {                      // 25
				type: 'boolean',                                                 // 26
				"public": true,                                                  // 27
				i18nLabel: 'Enable'                                              // 28
			});                                                               // 25
			this.add('GoogleAnalytics_ID', '', {                              // 31
				type: 'string',                                                  // 32
				"public": true,                                                  // 33
				i18nLabel: 'Analytics_Google_id',                                // 34
				enableQuery: enableQuery                                         // 35
			});                                                               // 31
		});                                                                // 37
		this.section('Analytics_features_enabled', function () {           // 39
			function addFeaturesEnabledSettings() {                           // 39
				this.add('Analytics_features_messages', true, {                  // 40
					type: 'boolean',                                                // 41
					"public": true,                                                 // 42
					i18nLabel: 'Messages',                                          // 43
					i18nDescription: 'Analytics_features_messages_Description'      // 44
				});                                                              // 40
				this.add('Analytics_features_rooms', true, {                     // 46
					type: 'boolean',                                                // 47
					"public": true,                                                 // 48
					i18nLabel: 'Rooms',                                             // 49
					i18nDescription: 'Analytics_features_rooms_Description'         // 50
				});                                                              // 46
				this.add('Analytics_features_users', true, {                     // 52
					type: 'boolean',                                                // 53
					"public": true,                                                 // 54
					i18nLabel: 'Users',                                             // 55
					i18nDescription: 'Analytics_features_users_Description'         // 56
				});                                                              // 52
			}                                                                 // 58
                                                                     //
			return addFeaturesEnabledSettings;                                // 39
		}());                                                              // 39
	}                                                                   // 59
                                                                     //
	return addSettings;                                                 // 1
}());                                                                // 1
///////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:analytics/server/settings.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:analytics'] = {};

})();

//# sourceMappingURL=rocketchat_analytics.js.map
