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
var Template = Package['templating-runtime'].Template;
var FlowRouter = Package['kadira:flow-router'].FlowRouter;
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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:analytics":{"client":{"loadScript.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_analytics/client/loadScript.js                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.body.onRendered(function () {                                                                                // 1
	Tracker.autorun(function (c) {                                                                                       // 2
		var piwikUrl = RocketChat.settings.get('PiwikAnalytics_enabled') && RocketChat.settings.get('PiwikAnalytics_url');  // 3
		var piwikSiteId = piwikUrl && RocketChat.settings.get('PiwikAnalytics_siteId');                                     // 4
		var googleId = RocketChat.settings.get('GoogleAnalytics_enabled') && RocketChat.settings.get('GoogleAnalytics_ID');
                                                                                                                      //
		if (piwikSiteId || googleId) {                                                                                      // 6
			c.stop();                                                                                                          // 7
                                                                                                                      //
			if (piwikSiteId) {                                                                                                 // 9
				window._paq = window._paq || [];                                                                                  // 10
                                                                                                                      //
				if (Meteor.userId()) {                                                                                            // 11
					window._paq.push(['setUserId', Meteor.userId()]);                                                                // 12
				}                                                                                                                 // 13
                                                                                                                      //
				window._paq.push(['trackPageView']);                                                                              // 15
                                                                                                                      //
				window._paq.push(['enableLinkTracking']);                                                                         // 16
                                                                                                                      //
				(function () {                                                                                                    // 17
					window._paq.push(['setTrackerUrl', piwikUrl + "piwik.php"]);                                                     // 18
                                                                                                                      //
					window._paq.push(['setSiteId', Number.parseInt(piwikSiteId)]);                                                   // 19
                                                                                                                      //
					var d = document;                                                                                                // 20
					var g = d.createElement('script');                                                                               // 21
					var s = d.getElementsByTagName('script')[0];                                                                     // 22
					g.type = 'text/javascript';                                                                                      // 23
					g.async = true;                                                                                                  // 24
					g.defer = true;                                                                                                  // 25
					g.src = piwikUrl + "piwik.js";                                                                                   // 26
					s.parentNode.insertBefore(g, s);                                                                                 // 27
				})();                                                                                                             // 28
			}                                                                                                                  // 29
                                                                                                                      //
			if (googleId) {                                                                                                    // 31
				/*eslint-disable */(function (i, s, o, g, r, a, m) {                                                              // 32
					i['GoogleAnalyticsObject'] = r;                                                                                  // 33
					i[r] = i[r] || function () {                                                                                     // 33
						(i[r].q = i[r].q || []).push(arguments);                                                                        // 34
					}, i[r].l = 1 * new Date();                                                                                      // 34
					a = s.createElement(o), m = s.getElementsByTagName(o)[0];                                                        // 34
					a.async = 1;                                                                                                     // 35
					a.src = g;                                                                                                       // 35
					m.parentNode.insertBefore(a, m);                                                                                 // 35
				})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');                            // 36
                                                                                                                      //
				ga('create', googleId, 'auto');                                                                                   // 38
				ga('send', 'pageview'); /*eslint-enable */                                                                        // 39
			}                                                                                                                  // 41
		}                                                                                                                   // 42
	});                                                                                                                  // 43
});                                                                                                                   // 44
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"trackEvents.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_analytics/client/trackEvents.js                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
function trackEvent(category, action, label) {                                                                        // 1
	if (window._paq) {                                                                                                   // 2
		window._paq.push(['trackEvent', category, action, label]);                                                          // 3
	}                                                                                                                    // 4
                                                                                                                      //
	if (window.ga) {                                                                                                     // 5
		window.ga('send', 'event', category, action, label);                                                                // 6
	}                                                                                                                    // 7
}                                                                                                                     // 8
                                                                                                                      //
if (!window._paq || window.ga) {                                                                                      // 10
	//Trigger the trackPageView manually as the page views don't seem to be tracked                                      // 11
	FlowRouter.triggers.enter([function (route) {                                                                        // 12
		if (window._paq) {                                                                                                  // 13
			var http = location.protocol;                                                                                      // 14
			var slashes = http.concat('//');                                                                                   // 15
			var host = slashes.concat(window.location.hostname);                                                               // 16
                                                                                                                      //
			window._paq.push(['setCustomUrl', host + route.path]);                                                             // 17
                                                                                                                      //
			window._paq.push(['trackPageView']);                                                                               // 18
		}                                                                                                                   // 19
                                                                                                                      //
		if (window.ga) {                                                                                                    // 20
			window.ga('send', 'pageview', route.path);                                                                         // 21
		}                                                                                                                   // 22
	}]); //Login page has manual switches                                                                                // 23
                                                                                                                      //
	RocketChat.callbacks.add('loginPageStateChange', function (state) {                                                  // 26
		trackEvent('Navigation', 'Login Page State Change', state);                                                         // 27
	}, RocketChat.callbacks.priority.MEDIUM, 'analytics-login-state-change'); //Messsages                                // 28
                                                                                                                      //
	RocketChat.callbacks.add('afterSaveMessage', function (message) {                                                    // 31
		if ((window._paq || window.ga) && RocketChat.settings.get('Analytics_features_messages')) {                         // 32
			var room = ChatRoom.findOne({                                                                                      // 33
				_id: message.rid                                                                                                  // 33
			});                                                                                                                // 33
			trackEvent('Message', 'Send', room.name + " (" + room._id + ")");                                                  // 34
		}                                                                                                                   // 35
	}, 2000, 'trackEvents'); //Rooms                                                                                     // 36
                                                                                                                      //
	RocketChat.callbacks.add('afterCreateChannel', function (owner, room) {                                              // 39
		if (RocketChat.settings.get('Analytics_features_rooms')) {                                                          // 40
			trackEvent('Room', 'Create', room.name + " (" + room._id + ")");                                                   // 41
		}                                                                                                                   // 42
	}, RocketChat.callbacks.priority.MEDIUM, 'analytics-after-create-channel');                                          // 43
	RocketChat.callbacks.add('roomNameChanged', function (room) {                                                        // 45
		if (RocketChat.settings.get('Analytics_features_rooms')) {                                                          // 46
			trackEvent('Room', 'Changed Name', room.name + " (" + room._id + ")");                                             // 47
		}                                                                                                                   // 48
	}, RocketChat.callbacks.priority.MEDIUM, 'analytics-room-name-changed');                                             // 49
	RocketChat.callbacks.add('roomTopicChanged', function (room) {                                                       // 51
		if (RocketChat.settings.get('Analytics_features_rooms')) {                                                          // 52
			trackEvent('Room', 'Changed Topic', room.name + " (" + room._id + ")");                                            // 53
		}                                                                                                                   // 54
	}, RocketChat.callbacks.priority.MEDIUM, 'analytics-room-topic-changed');                                            // 55
	RocketChat.callbacks.add('roomAnnouncementChanged', function (room) {                                                // 57
		if (RocketChat.settings.get('Analytics_features_rooms')) {                                                          // 58
			trackEvent('Room', 'Changed Announcement', room.name + " (" + room._id + ")");                                     // 59
		}                                                                                                                   // 60
	}, RocketChat.callbacks.priority.MEDIUM, 'analytics-room-announcement-changed');                                     // 61
	RocketChat.callbacks.add('roomTypeChanged', function (room) {                                                        // 63
		if (RocketChat.settings.get('Analytics_features_rooms')) {                                                          // 64
			trackEvent('Room', 'Changed Room Type', room.name + " (" + room._id + ")");                                        // 65
		}                                                                                                                   // 66
	}, RocketChat.callbacks.priority.MEDIUM, 'analytics-room-type-changed');                                             // 67
	RocketChat.callbacks.add('archiveRoom', function (room) {                                                            // 69
		if (RocketChat.settings.get('Analytics_features_rooms')) {                                                          // 70
			trackEvent('Room', 'Archived', room.name + " (" + room._id + ")");                                                 // 71
		}                                                                                                                   // 72
	}, RocketChat.callbacks.priority.MEDIUM, 'analytics-archive-room');                                                  // 73
	RocketChat.callbacks.add('unarchiveRoom', function (room) {                                                          // 75
		if (RocketChat.settings.get('Analytics_features_rooms')) {                                                          // 76
			trackEvent('Room', 'Unarchived', room.name + " (" + room._id + ")");                                               // 77
		}                                                                                                                   // 78
	}, RocketChat.callbacks.priority.MEDIUM, 'analytics-unarchive-room'); //Users                                        // 79
	//Track logins and associate user ids with piwik                                                                     // 82
                                                                                                                      //
	(function () {                                                                                                       // 83
		var oldUserId = null;                                                                                               // 84
		Meteor.autorun(function () {                                                                                        // 86
			var newUserId = Meteor.userId();                                                                                   // 87
                                                                                                                      //
			if (oldUserId === null && newUserId) {                                                                             // 88
				if (window._paq && RocketChat.settings.get('Analytics_features_users')) {                                         // 89
					trackEvent('User', 'Login', newUserId);                                                                          // 90
                                                                                                                      //
					window._paq.push(['setUserId', newUserId]);                                                                      // 91
				}                                                                                                                 // 92
			} else if (newUserId === null && oldUserId) {                                                                      // 93
				if (window._paq && RocketChat.settings.get('Analytics_features_users')) {                                         // 94
					trackEvent('User', 'Logout', oldUserId);                                                                         // 95
				}                                                                                                                 // 96
			}                                                                                                                  // 97
                                                                                                                      //
			oldUserId = Meteor.userId();                                                                                       // 98
		});                                                                                                                 // 99
	})();                                                                                                                // 100
                                                                                                                      //
	RocketChat.callbacks.add('userRegistered', function () {                                                             // 102
		if (RocketChat.settings.get('Analytics_features_users')) {                                                          // 103
			trackEvent('User', 'Registered');                                                                                  // 104
		}                                                                                                                   // 105
	}, RocketChat.callbacks.priority.MEDIUM, 'piwik-user-resitered');                                                    // 106
	RocketChat.callbacks.add('usernameSet', function () {                                                                // 108
		if (RocketChat.settings.get('Analytics_features_users')) {                                                          // 109
			trackEvent('User', 'Username Set');                                                                                // 110
		}                                                                                                                   // 111
	}, RocketChat.callbacks.priority.MEDIUM, 'piweik-username-set');                                                     // 112
	RocketChat.callbacks.add('userPasswordReset', function () {                                                          // 114
		if (RocketChat.settings.get('Analytics_features_users')) {                                                          // 115
			trackEvent('User', 'Reset Password');                                                                              // 116
		}                                                                                                                   // 117
	}, RocketChat.callbacks.priority.MEDIUM, 'piwik-user-password-reset');                                               // 118
	RocketChat.callbacks.add('userConfirmationEmailRequested', function () {                                             // 120
		if (RocketChat.settings.get('Analytics_features_users')) {                                                          // 121
			trackEvent('User', 'Confirmation Email Requested');                                                                // 122
		}                                                                                                                   // 123
	}, RocketChat.callbacks.priority.MEDIUM, 'piwik-user-confirmation-email-requested');                                 // 124
	RocketChat.callbacks.add('userForgotPasswordEmailRequested', function () {                                           // 126
		if (RocketChat.settings.get('Analytics_features_users')) {                                                          // 127
			trackEvent('User', 'Forgot Password Email Requested');                                                             // 128
		}                                                                                                                   // 129
	}, RocketChat.callbacks.priority.MEDIUM, 'piwik-user-forgot-password-email-requested');                              // 130
	RocketChat.callbacks.add('userStatusManuallySet', function (status) {                                                // 132
		if (RocketChat.settings.get('Analytics_features_users')) {                                                          // 133
			trackEvent('User', 'Status Manually Changed', status);                                                             // 134
		}                                                                                                                   // 135
	}, RocketChat.callbacks.priority.MEDIUM, 'analytics-user-status-manually-set');                                      // 136
	RocketChat.callbacks.add('userAvatarSet', function (service) {                                                       // 138
		if (RocketChat.settings.get('Analytics_features_users')) {                                                          // 139
			trackEvent('User', 'Avatar Changed', service);                                                                     // 140
		}                                                                                                                   // 141
	}, RocketChat.callbacks.priority.MEDIUM, 'analytics-user-avatar-set');                                               // 142
}                                                                                                                     // 143
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:analytics/client/loadScript.js");
require("./node_modules/meteor/rocketchat:analytics/client/trackEvents.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:analytics'] = {};

})();
