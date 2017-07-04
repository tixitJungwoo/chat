(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var _ = Package.underscore._;
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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:push-notifications":{"server":{"methods":{"saveNotificationSettings.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rocketchat_push-notifications/server/methods/saveNotificationSettings.js                                //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Meteor.methods({                                                                                                    // 1
	saveNotificationSettings: function (rid, field, value) {                                                           // 2
		if (!Meteor.userId()) {                                                                                           // 3
			throw new Meteor.Error('error-invalid-user', 'Invalid user', {                                                   // 4
				method: 'saveNotificationSettings'                                                                              // 4
			});                                                                                                              // 4
		}                                                                                                                 // 5
                                                                                                                    //
		check(rid, String);                                                                                               // 7
		check(field, String);                                                                                             // 8
		check(value, String);                                                                                             // 9
                                                                                                                    //
		if (['audioNotification', 'desktopNotifications', 'mobilePushNotifications', 'emailNotifications', 'unreadAlert', 'disableNotifications', 'hideUnreadStatus'].indexOf(field) === -1) {
			throw new Meteor.Error('error-invalid-settings', 'Invalid settings field', {                                     // 12
				method: 'saveNotificationSettings'                                                                              // 12
			});                                                                                                              // 12
		}                                                                                                                 // 13
                                                                                                                    //
		if (field !== 'audioNotification' && field !== 'hideUnreadStatus' && field !== 'disableNotifications' && ['all', 'mentions', 'nothing', 'default'].indexOf(value) === -1) {
			throw new Meteor.Error('error-invalid-settings', 'Invalid settings value', {                                     // 16
				method: 'saveNotificationSettings'                                                                              // 16
			});                                                                                                              // 16
		}                                                                                                                 // 17
                                                                                                                    //
		var subscription = RocketChat.models.Subscriptions.findOneByRoomIdAndUserId(rid, Meteor.userId());                // 19
                                                                                                                    //
		if (!subscription) {                                                                                              // 20
			throw new Meteor.Error('error-invalid-subscription', 'Invalid subscription', {                                   // 21
				method: 'saveNotificationSettings'                                                                              // 21
			});                                                                                                              // 21
		}                                                                                                                 // 22
                                                                                                                    //
		switch (field) {                                                                                                  // 24
			case 'audioNotification':                                                                                        // 25
				RocketChat.models.Subscriptions.updateAudioNotificationById(subscription._id, value);                           // 26
				break;                                                                                                          // 27
                                                                                                                    //
			case 'desktopNotifications':                                                                                     // 28
				RocketChat.models.Subscriptions.updateDesktopNotificationsById(subscription._id, value);                        // 29
				break;                                                                                                          // 30
                                                                                                                    //
			case 'mobilePushNotifications':                                                                                  // 31
				RocketChat.models.Subscriptions.updateMobilePushNotificationsById(subscription._id, value);                     // 32
				break;                                                                                                          // 33
                                                                                                                    //
			case 'emailNotifications':                                                                                       // 34
				RocketChat.models.Subscriptions.updateEmailNotificationsById(subscription._id, value);                          // 35
				break;                                                                                                          // 36
                                                                                                                    //
			case 'unreadAlert':                                                                                              // 37
				RocketChat.models.Subscriptions.updateUnreadAlertById(subscription._id, value);                                 // 38
				break;                                                                                                          // 39
                                                                                                                    //
			case 'disableNotifications':                                                                                     // 40
				RocketChat.models.Subscriptions.updateDisableNotificationsById(subscription._id, value === '1' ? true : false);
				break;                                                                                                          // 42
                                                                                                                    //
			case 'hideUnreadStatus':                                                                                         // 43
				RocketChat.models.Subscriptions.updateHideUnreadStatusById(subscription._id, value === '1' ? true : false);     // 44
				break;                                                                                                          // 45
		}                                                                                                                 // 24
                                                                                                                    //
		return true;                                                                                                      // 48
	},                                                                                                                 // 49
	saveDesktopNotificationDuration: function (rid, value) {                                                           // 51
		var subscription = RocketChat.models.Subscriptions.findOneByRoomIdAndUserId(rid, Meteor.userId());                // 52
                                                                                                                    //
		if (!subscription) {                                                                                              // 53
			throw new Meteor.Error('error-invalid-subscription', 'Invalid subscription', {                                   // 54
				method: 'saveDesktopNotificationDuration'                                                                       // 54
			});                                                                                                              // 54
		}                                                                                                                 // 55
                                                                                                                    //
		RocketChat.models.Subscriptions.updateDesktopNotificationDurationById(subscription._id, value);                   // 56
		return true;                                                                                                      // 57
	}                                                                                                                  // 58
});                                                                                                                 // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"models":{"Subscriptions.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rocketchat_push-notifications/server/models/Subscriptions.js                                            //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
RocketChat.models.Subscriptions.updateAudioNotificationById = function (_id, audioNotification) {                   // 1
	var query = {                                                                                                      // 2
		_id: _id                                                                                                          // 3
	};                                                                                                                 // 2
	var update = {                                                                                                     // 6
		$set: {                                                                                                           // 7
			audioNotification: audioNotification                                                                             // 8
		}                                                                                                                 // 7
	};                                                                                                                 // 6
	return this.update(query, update);                                                                                 // 12
};                                                                                                                  // 13
                                                                                                                    //
RocketChat.models.Subscriptions.updateDesktopNotificationsById = function (_id, desktopNotifications) {             // 15
	var query = {                                                                                                      // 16
		_id: _id                                                                                                          // 17
	};                                                                                                                 // 16
	var update = {                                                                                                     // 20
		$set: {                                                                                                           // 21
			desktopNotifications: desktopNotifications                                                                       // 22
		}                                                                                                                 // 21
	};                                                                                                                 // 20
	return this.update(query, update);                                                                                 // 26
};                                                                                                                  // 27
                                                                                                                    //
RocketChat.models.Subscriptions.updateDesktopNotificationDurationById = function (_id, value) {                     // 29
	var query = {                                                                                                      // 30
		_id: _id                                                                                                          // 31
	};                                                                                                                 // 30
	var update = {                                                                                                     // 34
		$set: {                                                                                                           // 35
			desktopNotificationDuration: value - 0                                                                           // 36
		}                                                                                                                 // 35
	};                                                                                                                 // 34
	return this.update(query, update);                                                                                 // 40
};                                                                                                                  // 41
                                                                                                                    //
RocketChat.models.Subscriptions.updateMobilePushNotificationsById = function (_id, mobilePushNotifications) {       // 43
	var query = {                                                                                                      // 44
		_id: _id                                                                                                          // 45
	};                                                                                                                 // 44
	var update = {                                                                                                     // 48
		$set: {                                                                                                           // 49
			mobilePushNotifications: mobilePushNotifications                                                                 // 50
		}                                                                                                                 // 49
	};                                                                                                                 // 48
	return this.update(query, update);                                                                                 // 54
};                                                                                                                  // 55
                                                                                                                    //
RocketChat.models.Subscriptions.updateEmailNotificationsById = function (_id, emailNotifications) {                 // 57
	var query = {                                                                                                      // 58
		_id: _id                                                                                                          // 59
	};                                                                                                                 // 58
	var update = {                                                                                                     // 62
		$set: {                                                                                                           // 63
			emailNotifications: emailNotifications                                                                           // 64
		}                                                                                                                 // 63
	};                                                                                                                 // 62
	return this.update(query, update);                                                                                 // 68
};                                                                                                                  // 69
                                                                                                                    //
RocketChat.models.Subscriptions.updateUnreadAlertById = function (_id, unreadAlert) {                               // 71
	var query = {                                                                                                      // 72
		_id: _id                                                                                                          // 73
	};                                                                                                                 // 72
	var update = {                                                                                                     // 76
		$set: {                                                                                                           // 77
			unreadAlert: unreadAlert                                                                                         // 78
		}                                                                                                                 // 77
	};                                                                                                                 // 76
	return this.update(query, update);                                                                                 // 82
};                                                                                                                  // 83
                                                                                                                    //
RocketChat.models.Subscriptions.updateDisableNotificationsById = function (_id, disableNotifications) {             // 85
	var query = {                                                                                                      // 86
		_id: _id                                                                                                          // 87
	};                                                                                                                 // 86
	var update = {                                                                                                     // 90
		$set: {                                                                                                           // 91
			disableNotifications: disableNotifications                                                                       // 92
		}                                                                                                                 // 91
	};                                                                                                                 // 90
	return this.update(query, update);                                                                                 // 96
};                                                                                                                  // 97
                                                                                                                    //
RocketChat.models.Subscriptions.updateHideUnreadStatusById = function (_id, hideUnreadStatus) {                     // 99
	var query = {                                                                                                      // 100
		_id: _id                                                                                                          // 101
	};                                                                                                                 // 100
	var update = {                                                                                                     // 104
		$set: {                                                                                                           // 105
			hideUnreadStatus: hideUnreadStatus                                                                               // 106
		}                                                                                                                 // 105
	};                                                                                                                 // 104
	return this.update(query, update);                                                                                 // 110
};                                                                                                                  // 111
                                                                                                                    //
RocketChat.models.Subscriptions.findAlwaysNotifyDesktopUsersByRoomId = function (roomId) {                          // 113
	var query = {                                                                                                      // 114
		rid: roomId,                                                                                                      // 115
		desktopNotifications: 'all'                                                                                       // 116
	};                                                                                                                 // 114
	return this.find(query);                                                                                           // 119
};                                                                                                                  // 120
                                                                                                                    //
RocketChat.models.Subscriptions.findDontNotifyDesktopUsersByRoomId = function (roomId) {                            // 122
	var query = {                                                                                                      // 123
		rid: roomId,                                                                                                      // 124
		desktopNotifications: 'nothing'                                                                                   // 125
	};                                                                                                                 // 123
	return this.find(query);                                                                                           // 128
};                                                                                                                  // 129
                                                                                                                    //
RocketChat.models.Subscriptions.findAlwaysNotifyMobileUsersByRoomId = function (roomId) {                           // 131
	var query = {                                                                                                      // 132
		rid: roomId,                                                                                                      // 133
		mobilePushNotifications: 'all'                                                                                    // 134
	};                                                                                                                 // 132
	return this.find(query);                                                                                           // 137
};                                                                                                                  // 138
                                                                                                                    //
RocketChat.models.Subscriptions.findDontNotifyMobileUsersByRoomId = function (roomId) {                             // 140
	var query = {                                                                                                      // 141
		rid: roomId,                                                                                                      // 142
		mobilePushNotifications: 'nothing'                                                                                // 143
	};                                                                                                                 // 141
	return this.find(query);                                                                                           // 146
};                                                                                                                  // 147
                                                                                                                    //
RocketChat.models.Subscriptions.findNotificationPreferencesByRoom = function (roomId) {                             // 149
	var query = {                                                                                                      // 150
		rid: roomId,                                                                                                      // 151
		'u._id': {                                                                                                        // 152
			$exists: true                                                                                                    // 152
		},                                                                                                                // 152
		$or: [{                                                                                                           // 153
			audioNotification: {                                                                                             // 154
				$exists: true                                                                                                   // 154
			}                                                                                                                // 154
		}, {                                                                                                              // 154
			desktopNotifications: {                                                                                          // 155
				$exists: true                                                                                                   // 155
			}                                                                                                                // 155
		}, {                                                                                                              // 155
			desktopNotificationDuration: {                                                                                   // 156
				$exists: true                                                                                                   // 156
			}                                                                                                                // 156
		}, {                                                                                                              // 156
			mobilePushNotifications: {                                                                                       // 157
				$exists: true                                                                                                   // 157
			}                                                                                                                // 157
		}, {                                                                                                              // 157
			disableNotifications: {                                                                                          // 158
				$exists: true                                                                                                   // 158
			}                                                                                                                // 158
		}]                                                                                                                // 158
	};                                                                                                                 // 150
	return this.find(query);                                                                                           // 162
};                                                                                                                  // 163
                                                                                                                    //
RocketChat.models.Subscriptions.findWithSendEmailByRoomId = function (roomId) {                                     // 165
	var query = {                                                                                                      // 166
		rid: roomId,                                                                                                      // 167
		emailNotifications: {                                                                                             // 168
			$exists: true                                                                                                    // 169
		}                                                                                                                 // 168
	};                                                                                                                 // 166
	return this.find(query, {                                                                                          // 173
		fields: {                                                                                                         // 173
			emailNotifications: 1,                                                                                           // 173
			u: 1                                                                                                             // 173
		}                                                                                                                 // 173
	});                                                                                                                // 173
};                                                                                                                  // 174
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:push-notifications/server/methods/saveNotificationSettings.js");
require("./node_modules/meteor/rocketchat:push-notifications/server/models/Subscriptions.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:push-notifications'] = {};

})();

//# sourceMappingURL=rocketchat_push-notifications.js.map
