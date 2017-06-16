var require = meteorInstall({"client":{"lib":{"handleError.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/lib/handleError.js                                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var toastr = void 0;                                                                                                  // 1
module.watch(require("toastr"), {                                                                                     // 1
	"default": function (v) {                                                                                            // 1
		toastr = v;                                                                                                         // 1
	}                                                                                                                    // 1
}, 0);                                                                                                                // 1
                                                                                                                      //
this.handleError = function (error) {                                                                                 // 2
	var useToastr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;                            // 2
                                                                                                                      //
	if (_.isObject(error.details)) {                                                                                     // 3
		for (var key in meteorBabelHelpers.sanitizeForInObject(error.details)) {                                            // 4
			if (error.details.hasOwnProperty(key)) {                                                                           // 5
				error.details[key] = TAPi18n.__(error.details[key]);                                                              // 6
			}                                                                                                                  // 7
		}                                                                                                                   // 8
	}                                                                                                                    // 9
                                                                                                                      //
	if (useToastr) {                                                                                                     // 11
		return toastr.error(TAPi18n.__(error.error, error.details), error.details && error.details.errorTitle ? TAPi18n.__(error.details.errorTitle) : null);
	}                                                                                                                    // 13
                                                                                                                      //
	return TAPi18n.__(error.error, error.details);                                                                       // 15
};                                                                                                                    // 16
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"toastr.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/lib/toastr.js                                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.watch(require("toastr/build/toastr.min.css"));                                                                 // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"helpers":{"log.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/helpers/log.js                                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _arguments = arguments;                                                                                           //
Template.registerHelper('log', function () {                                                                          // 1
	console.log.apply(console, _arguments);                                                                              // 2
});                                                                                                                   // 3
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"not.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/helpers/not.js                                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.registerHelper('not', function (value) {                                                                     // 1
	return !value;                                                                                                       // 2
});                                                                                                                   // 3
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"methods":{"deleteMessage.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/methods/deleteMessage.js                                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var moment = void 0;                                                                                                  // 1
module.watch(require("moment"), {                                                                                     // 1
	"default": function (v) {                                                                                            // 1
		moment = v;                                                                                                         // 1
	}                                                                                                                    // 1
}, 0);                                                                                                                // 1
var toastr = void 0;                                                                                                  // 1
module.watch(require("toastr"), {                                                                                     // 1
	"default": function (v) {                                                                                            // 1
		toastr = v;                                                                                                         // 1
	}                                                                                                                    // 1
}, 1);                                                                                                                // 1
Meteor.methods({                                                                                                      // 4
	deleteMessage: function (message) {                                                                                  // 5
		if (!Meteor.userId()) {                                                                                             // 6
			return false;                                                                                                      // 7
		} //We're now only passed in the `_id` property to lower the amount of data sent to the server                      // 8
                                                                                                                      //
                                                                                                                      //
		message = ChatMessage.findOne({                                                                                     // 11
			_id: message._id                                                                                                   // 11
		});                                                                                                                 // 11
		var hasPermission = RocketChat.authz.hasAtLeastOnePermission('delete-message', message.rid);                        // 13
		var deleteAllowed = RocketChat.settings.get('Message_AllowDeleting');                                               // 14
		var deleteOwn = false;                                                                                              // 15
                                                                                                                      //
		if (message && message.u && message.u._id) {                                                                        // 16
			deleteOwn = message.u._id === Meteor.userId();                                                                     // 17
		}                                                                                                                   // 18
                                                                                                                      //
		if (!(hasPermission || deleteAllowed && deleteOwn)) {                                                               // 20
			return false;                                                                                                      // 21
		}                                                                                                                   // 22
                                                                                                                      //
		var blockDeleteInMinutes = RocketChat.settings.get('Message_AllowDeleting_BlockDeleteInMinutes');                   // 24
                                                                                                                      //
		if (_.isNumber(blockDeleteInMinutes) && blockDeleteInMinutes !== 0) {                                               // 25
			if (message.ts) {                                                                                                  // 26
				var msgTs = moment(message.ts);                                                                                   // 27
                                                                                                                      //
				if (msgTs) {                                                                                                      // 28
					var currentTsDiff = moment().diff(msgTs, 'minutes');                                                             // 29
                                                                                                                      //
					if (currentTsDiff > blockDeleteInMinutes) {                                                                      // 30
						toastr.error(t('error-message-deleting-blocked'));                                                              // 31
						return false;                                                                                                   // 32
					}                                                                                                                // 33
				}                                                                                                                 // 34
			}                                                                                                                  // 35
		}                                                                                                                   // 36
                                                                                                                      //
		Tracker.nonreactive(function () {                                                                                   // 38
			ChatMessage.remove({                                                                                               // 39
				_id: message._id,                                                                                                 // 40
				'u._id': Meteor.userId()                                                                                          // 41
			});                                                                                                                // 39
		});                                                                                                                 // 43
	}                                                                                                                    // 44
});                                                                                                                   // 4
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"hideRoom.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/methods/hideRoom.js                                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Meteor.methods({                                                                                                      // 1
	hideRoom: function (rid) {                                                                                           // 2
		if (!Meteor.userId()) {                                                                                             // 3
			return false;                                                                                                      // 4
		}                                                                                                                   // 5
                                                                                                                      //
		ChatSubscription.update({                                                                                           // 7
			rid: rid,                                                                                                          // 8
			'u._id': Meteor.userId()                                                                                           // 9
		}, {                                                                                                                // 7
			$set: {                                                                                                            // 11
				alert: false,                                                                                                     // 12
				open: false                                                                                                       // 13
			}                                                                                                                  // 11
		});                                                                                                                 // 10
	}                                                                                                                    // 16
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"leaveRoom.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/methods/leaveRoom.js                                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Meteor.methods({                                                                                                      // 1
	leaveRoom: function (rid) {                                                                                          // 2
		if (!Meteor.userId()) {                                                                                             // 3
			return false;                                                                                                      // 4
		}                                                                                                                   // 5
                                                                                                                      //
		ChatSubscription.remove({                                                                                           // 7
			rid: rid,                                                                                                          // 8
			'u._id': Meteor.userId()                                                                                           // 9
		});                                                                                                                 // 7
		ChatRoom.update(rid, {                                                                                              // 12
			$pull: {                                                                                                           // 13
				usernames: Meteor.user().username                                                                                 // 14
			}                                                                                                                  // 13
		});                                                                                                                 // 12
	}                                                                                                                    // 17
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"openRoom.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/methods/openRoom.js                                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Meteor.methods({                                                                                                      // 1
	openRoom: function (rid) {                                                                                           // 2
		if (!Meteor.userId()) {                                                                                             // 3
			return false;                                                                                                      // 4
		}                                                                                                                   // 5
                                                                                                                      //
		ChatSubscription.update({                                                                                           // 7
			rid: rid,                                                                                                          // 8
			'u._id': Meteor.userId()                                                                                           // 9
		}, {                                                                                                                // 7
			$set: {                                                                                                            // 11
				open: true                                                                                                        // 12
			}                                                                                                                  // 11
		});                                                                                                                 // 10
	}                                                                                                                    // 15
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"setUserActiveStatus.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/methods/setUserActiveStatus.js                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Meteor.methods({                                                                                                      // 1
	setUserActiveStatus: function (userId, active) {                                                                     // 2
		Meteor.users.update(userId, {                                                                                       // 3
			$set: {                                                                                                            // 3
				active: active                                                                                                    // 3
			}                                                                                                                  // 3
		});                                                                                                                 // 3
		return true;                                                                                                        // 4
	}                                                                                                                    // 5
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"toggleFavorite.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/methods/toggleFavorite.js                                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Meteor.methods({                                                                                                      // 1
	toggleFavorite: function (rid, f) {                                                                                  // 2
		if (!Meteor.userId()) {                                                                                             // 3
			return false;                                                                                                      // 4
		}                                                                                                                   // 5
                                                                                                                      //
		ChatSubscription.update({                                                                                           // 7
			rid: rid,                                                                                                          // 8
			'u._id': Meteor.userId()                                                                                           // 9
		}, {                                                                                                                // 7
			$set: {                                                                                                            // 11
				f: f                                                                                                              // 12
			}                                                                                                                  // 11
		});                                                                                                                 // 10
	}                                                                                                                    // 15
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"updateMessage.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/methods/updateMessage.js                                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var moment = void 0;                                                                                                  // 1
module.watch(require("moment"), {                                                                                     // 1
	"default": function (v) {                                                                                            // 1
		moment = v;                                                                                                         // 1
	}                                                                                                                    // 1
}, 0);                                                                                                                // 1
var toastr = void 0;                                                                                                  // 1
module.watch(require("toastr"), {                                                                                     // 1
	"default": function (v) {                                                                                            // 1
		toastr = v;                                                                                                         // 1
	}                                                                                                                    // 1
}, 1);                                                                                                                // 1
Meteor.methods({                                                                                                      // 4
	updateMessage: function (message) {                                                                                  // 5
		if (!Meteor.userId()) {                                                                                             // 6
			return false;                                                                                                      // 7
		}                                                                                                                   // 8
                                                                                                                      //
		var originalMessage = ChatMessage.findOne(message._id);                                                             // 10
		var hasPermission = RocketChat.authz.hasAtLeastOnePermission('edit-message', message.rid);                          // 12
		var editAllowed = RocketChat.settings.get('Message_AllowEditing');                                                  // 13
		var editOwn = false;                                                                                                // 14
                                                                                                                      //
		if (originalMessage && originalMessage.u && originalMessage.u._id) {                                                // 15
			editOwn = originalMessage.u._id === Meteor.userId();                                                               // 16
		}                                                                                                                   // 17
                                                                                                                      //
		var me = Meteor.users.findOne(Meteor.userId());                                                                     // 19
                                                                                                                      //
		if (!(hasPermission || editAllowed && editOwn)) {                                                                   // 21
			toastr.error(t('error-action-not-allowed', {                                                                       // 22
				action: t('Message_editing')                                                                                      // 22
			}));                                                                                                               // 22
			return false;                                                                                                      // 23
		}                                                                                                                   // 24
                                                                                                                      //
		var blockEditInMinutes = RocketChat.settings.get('Message_AllowEditing_BlockEditInMinutes');                        // 26
                                                                                                                      //
		if (_.isNumber(blockEditInMinutes) && blockEditInMinutes !== 0) {                                                   // 27
			if (originalMessage.ts) {                                                                                          // 28
				var msgTs = moment(originalMessage.ts);                                                                           // 29
                                                                                                                      //
				if (msgTs) {                                                                                                      // 30
					var currentTsDiff = moment().diff(msgTs, 'minutes');                                                             // 31
                                                                                                                      //
					if (currentTsDiff > blockEditInMinutes) {                                                                        // 32
						toastr.error(t('error-message-editing-blocked'));                                                               // 33
						return false;                                                                                                   // 34
					}                                                                                                                // 35
				}                                                                                                                 // 36
			}                                                                                                                  // 37
		}                                                                                                                   // 38
                                                                                                                      //
		Tracker.nonreactive(function () {                                                                                   // 40
			if (isNaN(TimeSync.serverOffset())) {                                                                              // 42
				message.editedAt = new Date();                                                                                    // 43
			} else {                                                                                                           // 44
				message.editedAt = new Date(Date.now() + TimeSync.serverOffset());                                                // 45
			}                                                                                                                  // 46
                                                                                                                      //
			message.editedBy = {                                                                                               // 48
				_id: Meteor.userId(),                                                                                             // 49
				username: me.username                                                                                             // 50
			};                                                                                                                 // 48
			message = RocketChat.callbacks.run('beforeSaveMessage', message);                                                  // 53
			var messageObject = {                                                                                              // 54
				'editedAt': message.editedAt,                                                                                     // 54
				'editedBy': message.editedBy,                                                                                     // 54
				msg: message.msg                                                                                                  // 54
			};                                                                                                                 // 54
                                                                                                                      //
			if (originalMessage.attachments) {                                                                                 // 56
				if (originalMessage.attachments[0].description !== undefined) {                                                   // 57
					delete messageObject.$set.msg;                                                                                   // 58
				}                                                                                                                 // 59
			}                                                                                                                  // 60
                                                                                                                      //
			ChatMessage.update({                                                                                               // 61
				_id: message._id,                                                                                                 // 62
				'u._id': Meteor.userId()                                                                                          // 63
			}, {                                                                                                               // 61
				$set: messageObject                                                                                               // 64
			});                                                                                                                // 64
		});                                                                                                                 // 65
	}                                                                                                                    // 66
});                                                                                                                   // 4
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"notifications":{"UsersNameChanged.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/notifications/UsersNameChanged.js                                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Meteor.startup(function () {                                                                                          // 1
	RocketChat.Notifications.onLogged('Users:NameChanged', function (_ref) {                                             // 2
		var _id = _ref._id,                                                                                                 // 2
		    name = _ref.name,                                                                                               // 2
		    username = _ref.username;                                                                                       // 2
		RocketChat.models.Messages.update({                                                                                 // 3
			'u._id': _id                                                                                                       // 4
		}, {                                                                                                                // 3
			$set: {                                                                                                            // 6
				'u.name': name                                                                                                    // 7
			}                                                                                                                  // 6
		}, {                                                                                                                // 5
			multi: true                                                                                                        // 10
		});                                                                                                                 // 9
		RocketChat.models.Subscriptions.update({                                                                            // 13
			name: username,                                                                                                    // 14
			t: 'd'                                                                                                             // 15
		}, {                                                                                                                // 13
			$set: {                                                                                                            // 17
				fname: name                                                                                                       // 18
			}                                                                                                                  // 17
		});                                                                                                                 // 16
	});                                                                                                                  // 21
});                                                                                                                   // 22
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"notification.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/notifications/notification.js                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/* globals KonchatNotification, fireGlobalEvent, readMessage */ // Show notifications and play a sound for new messages.
// We trust the server to only send notifications for interesting messages, e.g. direct messages or                   // 4
// group messages in which the user is mentioned.                                                                     // 5
Meteor.startup(function () {                                                                                          // 7
	Tracker.autorun(function () {                                                                                        // 8
		if (Meteor.userId()) {                                                                                              // 9
			RocketChat.Notifications.onUser('notification', function (notification) {                                          // 10
				var openedRoomId = undefined;                                                                                     // 12
                                                                                                                      //
				if (['channel', 'group', 'direct'].includes(FlowRouter.getRouteName())) {                                         // 13
					openedRoomId = Session.get('openedRoom');                                                                        // 14
				} // This logic is duplicated in /client/startup/unread.coffee.                                                   // 15
                                                                                                                      //
                                                                                                                      //
				var hasFocus = readMessage.isEnable();                                                                            // 18
				var messageIsInOpenedRoom = openedRoomId === notification.payload.rid;                                            // 19
				fireGlobalEvent('notification', {                                                                                 // 21
					notification: notification,                                                                                      // 22
					fromOpenedRoom: messageIsInOpenedRoom,                                                                           // 23
					hasFocus: hasFocus                                                                                               // 24
				});                                                                                                               // 21
                                                                                                                      //
				if (RocketChat.Layout.isEmbedded()) {                                                                             // 27
					if (!hasFocus && messageIsInOpenedRoom) {                                                                        // 28
						// Play a sound and show a notification.                                                                        // 29
						KonchatNotification.newMessage(notification.payload.rid);                                                       // 30
						KonchatNotification.showDesktop(notification);                                                                  // 31
					}                                                                                                                // 32
				} else if (!(hasFocus && messageIsInOpenedRoom)) {                                                                // 33
					// Play a sound and show a notification.                                                                         // 34
					KonchatNotification.newMessage(notification.payload.rid);                                                        // 35
					KonchatNotification.showDesktop(notification);                                                                   // 36
				}                                                                                                                 // 37
			});                                                                                                                // 38
		}                                                                                                                   // 39
	});                                                                                                                  // 40
});                                                                                                                   // 41
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"updateAvatar.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/notifications/updateAvatar.js                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/* globals updateAvatarOfUsername */Meteor.startup(function () {                                                      // 1
	RocketChat.Notifications.onLogged('updateAvatar', function (data) {                                                  // 4
		updateAvatarOfUsername(data.username);                                                                              // 5
	});                                                                                                                  // 6
});                                                                                                                   // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"routes":{"adminRouter.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/routes/adminRouter.js                                                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
FlowRouter.route('/admin/users', {                                                                                    // 1
	name: 'admin-users',                                                                                                 // 2
	action: function () {                                                                                                // 3
		BlazeLayout.render('main', {                                                                                        // 4
			center: 'adminUsers'                                                                                               // 4
		});                                                                                                                 // 4
	}                                                                                                                    // 5
});                                                                                                                   // 1
FlowRouter.route('/admin/rooms', {                                                                                    // 8
	name: 'admin-rooms',                                                                                                 // 9
	action: function () {                                                                                                // 10
		BlazeLayout.render('main', {                                                                                        // 11
			center: 'adminRooms'                                                                                               // 11
		});                                                                                                                 // 11
	}                                                                                                                    // 12
});                                                                                                                   // 8
FlowRouter.route('/admin/info', {                                                                                     // 15
	name: 'admin-info',                                                                                                  // 16
	action: function () {                                                                                                // 17
		BlazeLayout.render('main', {                                                                                        // 18
			center: 'adminInfo'                                                                                                // 18
		});                                                                                                                 // 18
	}                                                                                                                    // 19
});                                                                                                                   // 15
FlowRouter.route('/admin/import', {                                                                                   // 22
	name: 'admin-import',                                                                                                // 23
	action: function () {                                                                                                // 24
		BlazeLayout.render('main', {                                                                                        // 25
			center: 'adminImport'                                                                                              // 25
		});                                                                                                                 // 25
	}                                                                                                                    // 26
});                                                                                                                   // 22
FlowRouter.route('/admin/import/prepare/:importer', {                                                                 // 29
	name: 'admin-import-prepare',                                                                                        // 30
	action: function () {                                                                                                // 31
		BlazeLayout.render('main', {                                                                                        // 32
			center: 'adminImportPrepare'                                                                                       // 32
		});                                                                                                                 // 32
	}                                                                                                                    // 33
});                                                                                                                   // 29
FlowRouter.route('/admin/import/progress/:importer', {                                                                // 36
	name: 'admin-import-progress',                                                                                       // 37
	action: function () {                                                                                                // 38
		BlazeLayout.render('main', {                                                                                        // 39
			center: 'adminImportProgress'                                                                                      // 39
		});                                                                                                                 // 39
	}                                                                                                                    // 40
});                                                                                                                   // 36
FlowRouter.route('/admin/:group?', {                                                                                  // 43
	name: 'admin',                                                                                                       // 44
	action: function () {                                                                                                // 45
		BlazeLayout.render('main', {                                                                                        // 46
			center: 'admin'                                                                                                    // 46
		});                                                                                                                 // 46
	}                                                                                                                    // 47
});                                                                                                                   // 43
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"roomRoute.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/routes/roomRoute.js                                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
FlowRouter.goToRoomById = function (roomId) {                                                                         // 1
	var subscription = ChatSubscription.findOne({                                                                        // 2
		rid: roomId                                                                                                         // 2
	});                                                                                                                  // 2
                                                                                                                      //
	if (subscription) {                                                                                                  // 3
		RocketChat.roomTypes.openRouteLink(subscription.t, subscription, FlowRouter.current().queryParams);                 // 4
	}                                                                                                                    // 5
};                                                                                                                    // 6
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"router.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/routes/router.js                                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/* globals KonchatNotification */Blaze.registerHelper('pathFor', function (path, kw) {                                // 1
    return FlowRouter.path(path, kw.hash);                                                                            // 4
});                                                                                                                   // 5
BlazeLayout.setRoot('body');                                                                                          // 7
                                                                                                                      //
FlowRouter.subscriptions = function () {                                                                              // 9
    var _this = this;                                                                                                 // 9
                                                                                                                      //
    Tracker.autorun(function () {                                                                                     // 10
        if (Meteor.userId()) {                                                                                        // 11
            _this.register('userData', Meteor.subscribe('userData'));                                                 // 12
                                                                                                                      //
            _this.register('activeUsers', Meteor.subscribe('activeUsers'));                                           // 13
        }                                                                                                             // 14
    });                                                                                                               // 15
};                                                                                                                    // 16
                                                                                                                      //
FlowRouter.route('/', {                                                                                               // 19
    name: 'index',                                                                                                    // 20
    action: function () {                                                                                             // 21
        BlazeLayout.render('main', {                                                                                  // 22
            modal: RocketChat.Layout.isEmbedded(),                                                                    // 22
            center: 'loading'                                                                                         // 22
        });                                                                                                           // 22
                                                                                                                      //
        if (!Meteor.userId()) {                                                                                       // 23
            return FlowRouter.go('home');                                                                             // 24
        }                                                                                                             // 25
                                                                                                                      //
        Tracker.autorun(function (c) {                                                                                // 27
            if (FlowRouter.subsReady() === true) {                                                                    // 28
                Meteor.defer(function () {                                                                            // 29
                    if (Meteor.user() && Meteor.user().defaultRoom) {                                                 // 30
                        var room = Meteor.user().defaultRoom.split('/');                                              // 31
                        FlowRouter.go(room[0], {                                                                      // 32
                            name: room[1]                                                                             // 32
                        }, FlowRouter.current().queryParams);                                                         // 32
                    } else {                                                                                          // 33
                        FlowRouter.go('home');                                                                        // 34
                    }                                                                                                 // 35
                });                                                                                                   // 36
                c.stop();                                                                                             // 37
            }                                                                                                         // 38
        });                                                                                                           // 39
    }                                                                                                                 // 40
});                                                                                                                   // 19
FlowRouter.route('/login', {                                                                                          // 44
    name: 'login',                                                                                                    // 45
    action: function () {                                                                                             // 47
        FlowRouter.go('home');                                                                                        // 48
    }                                                                                                                 // 49
});                                                                                                                   // 44
FlowRouter.route('/home', {                                                                                           // 52
    name: 'home',                                                                                                     // 53
    action: function (params, queryParams) {                                                                          // 55
        KonchatNotification.getDesktopPermission();                                                                   // 56
                                                                                                                      //
        if (queryParams.saml_idp_credentialToken !== undefined) {                                                     // 57
            Accounts.callLoginMethod({                                                                                // 58
                methodArguments: [{                                                                                   // 59
                    saml: true,                                                                                       // 60
                    credentialToken: queryParams.saml_idp_credentialToken                                             // 61
                }],                                                                                                   // 59
                userCallback: function () {                                                                           // 63
                    BlazeLayout.render('main', {                                                                      // 64
                        center: 'home'                                                                                // 64
                    });                                                                                               // 64
                }                                                                                                     // 65
            });                                                                                                       // 58
        } else {                                                                                                      // 67
            BlazeLayout.render('main', {                                                                              // 68
                center: 'home'                                                                                        // 68
            });                                                                                                       // 68
        }                                                                                                             // 69
    }                                                                                                                 // 70
});                                                                                                                   // 52
FlowRouter.route('/changeavatar', {                                                                                   // 73
    name: 'changeAvatar',                                                                                             // 74
    action: function () {                                                                                             // 76
        BlazeLayout.render('main', {                                                                                  // 77
            center: 'avatarPrompt'                                                                                    // 77
        });                                                                                                           // 77
    }                                                                                                                 // 78
});                                                                                                                   // 73
FlowRouter.route('/account/:group?', {                                                                                // 81
    name: 'account',                                                                                                  // 82
    action: function (params) {                                                                                       // 84
        if (!params.group) {                                                                                          // 85
            params.group = 'Preferences';                                                                             // 86
        }                                                                                                             // 87
                                                                                                                      //
        params.group = _.capitalize(params.group, true);                                                              // 88
        BlazeLayout.render('main', {                                                                                  // 89
            center: "account" + params.group                                                                          // 89
        });                                                                                                           // 89
    }                                                                                                                 // 90
});                                                                                                                   // 81
FlowRouter.route('/history/private', {                                                                                // 93
    name: 'privateHistory',                                                                                           // 94
    subscriptions: function () /*params, queryParams*/{                                                               // 96
        this.register('privateHistory', Meteor.subscribe('privateHistory'));                                          // 97
    },                                                                                                                // 98
    action: function () {                                                                                             // 100
        Session.setDefault('historyFilter', '');                                                                      // 101
        BlazeLayout.render('main', {                                                                                  // 102
            center: 'privateHistory'                                                                                  // 102
        });                                                                                                           // 102
    }                                                                                                                 // 103
});                                                                                                                   // 93
FlowRouter.route('/terms-of-service', {                                                                               // 106
    name: 'terms-of-service',                                                                                         // 107
    action: function () {                                                                                             // 109
        Session.set('cmsPage', 'Layout_Terms_of_Service');                                                            // 110
        BlazeLayout.render('cmsPage');                                                                                // 111
    }                                                                                                                 // 112
});                                                                                                                   // 106
FlowRouter.route('/privacy-policy', {                                                                                 // 115
    name: 'privacy-policy',                                                                                           // 116
    action: function () {                                                                                             // 118
        Session.set('cmsPage', 'Layout_Privacy_Policy');                                                              // 119
        BlazeLayout.render('cmsPage');                                                                                // 120
    }                                                                                                                 // 121
});                                                                                                                   // 115
FlowRouter.route('/room-not-found/:type/:name', {                                                                     // 124
    name: 'room-not-found',                                                                                           // 125
    action: function (params) {                                                                                       // 127
        Session.set('roomNotFound', {                                                                                 // 128
            type: params.type,                                                                                        // 128
            name: params.name                                                                                         // 128
        });                                                                                                           // 128
        BlazeLayout.render('main', {                                                                                  // 129
            center: 'roomNotFound'                                                                                    // 129
        });                                                                                                           // 129
    }                                                                                                                 // 130
});                                                                                                                   // 124
FlowRouter.route('/fxos', {                                                                                           // 133
    name: 'firefox-os-install',                                                                                       // 134
    action: function () {                                                                                             // 136
        BlazeLayout.render('fxOsInstallPrompt');                                                                      // 137
    }                                                                                                                 // 138
});                                                                                                                   // 133
FlowRouter.route('/register/:hash', {                                                                                 // 141
    name: 'register-secret-url',                                                                                      // 142
    action: function () /*params*/{                                                                                   // 144
        BlazeLayout.render('secretURL'); // if RocketChat.settings.get('Accounts_RegistrationForm') is 'Secret URL'   // 145
        // 	Meteor.call 'checkRegistrationSecretURL', params.hash, (err, success) ->                                  // 148
        // 		if success                                                                                               // 149
        // 			Session.set 'loginDefaultState', 'register'                                                             // 150
        // 			BlazeLayout.render 'main', {center: 'home'}                                                             // 151
        // 			KonchatNotification.getDesktopPermission()                                                              // 152
        // 		else                                                                                                     // 153
        // 			BlazeLayout.render 'logoLayout', { render: 'invalidSecretURL' }                                         // 154
        // else                                                                                                       // 155
        // 	BlazeLayout.render 'logoLayout', { render: 'invalidSecretURL' }                                           // 156
    }                                                                                                                 // 157
});                                                                                                                   // 141
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"startup":{"emailVerification.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/startup/emailVerification.js                                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var toastr = void 0;                                                                                                  // 1
module.watch(require("toastr"), {                                                                                     // 1
	"default": function (v) {                                                                                            // 1
		toastr = v;                                                                                                         // 1
	}                                                                                                                    // 1
}, 0);                                                                                                                // 1
Meteor.startup(function () {                                                                                          // 2
	Tracker.autorun(function () {                                                                                        // 3
		var user = Meteor.user();                                                                                           // 4
                                                                                                                      //
		if (user && user.emails && user.emails[0] && user.emails[0].verified !== true && RocketChat.settings.get('Accounts_EmailVerification') === true && !Session.get('Accounts_EmailVerification_Warning')) {
			toastr.warning(TAPi18n.__('You_have_not_verified_your_email'));                                                    // 6
			Session.set('Accounts_EmailVerification_Warning', true);                                                           // 7
		}                                                                                                                   // 8
	});                                                                                                                  // 9
});                                                                                                                   // 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"roomObserve.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/startup/roomObserve.js                                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Meteor.startup(function () {                                                                                          // 1
	ChatRoom.find().observe({                                                                                            // 2
		added: function (data) {                                                                                            // 3
			Session.set("roomData" + data._id, data);                                                                          // 4
		},                                                                                                                  // 5
		changed: function (data) {                                                                                          // 6
			Session.set("roomData" + data._id, data);                                                                          // 7
		},                                                                                                                  // 8
		removed: function (data) {                                                                                          // 9
			Session.set("roomData" + data._id, undefined);                                                                     // 10
		}                                                                                                                   // 11
	});                                                                                                                  // 2
});                                                                                                                   // 13
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"startup.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/startup/startup.js                                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var moment = void 0;                                                                                                  // 1
module.watch(require("moment"), {                                                                                     // 1
	"default": function (v) {                                                                                            // 1
		moment = v;                                                                                                         // 1
	}                                                                                                                    // 1
}, 0);                                                                                                                // 1
var toastr = void 0;                                                                                                  // 1
module.watch(require("toastr"), {                                                                                     // 1
	"default": function (v) {                                                                                            // 1
		toastr = v;                                                                                                         // 1
	}                                                                                                                    // 1
}, 1);                                                                                                                // 1
var hljs = void 0;                                                                                                    // 1
module.watch(require("highlight.js"), {                                                                               // 1
	"default": function (v) {                                                                                            // 1
		hljs = v;                                                                                                           // 1
	}                                                                                                                    // 1
}, 2);                                                                                                                // 1
module.watch(require("highlight.js/styles/github.css"));                                                              // 1
hljs.initHighlightingOnLoad();                                                                                        // 8
                                                                                                                      //
if (window.DISABLE_ANIMATION) {                                                                                       // 10
	toastr.options.timeOut = 1;                                                                                          // 11
	toastr.options.showDuration = 0;                                                                                     // 12
	toastr.options.hideDuration = 0;                                                                                     // 13
	toastr.options.extendedTimeOut = 0;                                                                                  // 14
}                                                                                                                     // 15
                                                                                                                      //
Meteor.startup(function () {                                                                                          // 17
	TimeSync.loggingEnabled = false;                                                                                     // 18
	UserPresence.awayTime = 300000;                                                                                      // 20
	UserPresence.start();                                                                                                // 21
	Meteor.subscribe('activeUsers');                                                                                     // 22
	Session.setDefault('AvatarRandom', 0);                                                                               // 24
	window.lastMessageWindow = {};                                                                                       // 26
	window.lastMessageWindowHistory = {};                                                                                // 27
	TAPi18n.conf.i18n_files_route = Meteor._relativeToSiteRootUrl('/tap-i18n');                                          // 29
                                                                                                                      //
	var defaultAppLanguage = function () {                                                                               // 31
		var lng = window.navigator.userLanguage || window.navigator.language || 'en'; // Fix browsers having all-lowercase language settings eg. pt-br, en-us
                                                                                                                      //
		var re = /([a-z]{2}-)([a-z]{2})/;                                                                                   // 34
                                                                                                                      //
		if (re.test(lng)) {                                                                                                 // 35
			lng = lng.replace(re, function (match) {                                                                           // 36
				for (var _len = arguments.length, parts = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {        // 36
					parts[_key - 1] = arguments[_key];                                                                               // 36
				}                                                                                                                 // 36
                                                                                                                      //
				return parts[0] + parts[1].toUpperCase();                                                                         // 37
			});                                                                                                                // 38
		}                                                                                                                   // 39
                                                                                                                      //
		return lng;                                                                                                         // 40
	};                                                                                                                   // 41
                                                                                                                      //
	window.defaultUserLanguage = function () {                                                                           // 43
		return RocketChat.settings.get('Language') || defaultAppLanguage();                                                 // 44
	};                                                                                                                   // 45
                                                                                                                      //
	var availableLanguages = TAPi18n.getLanguages();                                                                     // 47
	var loadedLanguages = [];                                                                                            // 48
                                                                                                                      //
	window.setLanguage = function (language) {                                                                           // 50
		if (!language) {                                                                                                    // 51
			return;                                                                                                            // 52
		}                                                                                                                   // 53
                                                                                                                      //
		if (loadedLanguages.indexOf(language) > -1) {                                                                       // 55
			return;                                                                                                            // 56
		}                                                                                                                   // 57
                                                                                                                      //
		loadedLanguages.push(language);                                                                                     // 59
                                                                                                                      //
		if (isRtl(language)) {                                                                                              // 61
			$('html').addClass('rtl');                                                                                         // 62
		} else {                                                                                                            // 63
			$('html').removeClass('rtl');                                                                                      // 64
		}                                                                                                                   // 65
                                                                                                                      //
		if (!availableLanguages[language]) {                                                                                // 67
			language = language.split('-').shift();                                                                            // 68
		}                                                                                                                   // 69
                                                                                                                      //
		TAPi18n.setLanguage(language);                                                                                      // 71
		language = language.toLowerCase();                                                                                  // 73
                                                                                                                      //
		if (language !== 'en') {                                                                                            // 74
			Meteor.call('loadLocale', language, function (err, localeFn) {                                                     // 75
				Function(localeFn).call({                                                                                         // 76
					moment: moment                                                                                                   // 76
				});                                                                                                               // 76
				moment.locale(language);                                                                                          // 77
			});                                                                                                                // 78
		}                                                                                                                   // 79
	};                                                                                                                   // 80
                                                                                                                      //
	Meteor.subscribe('userData', function () {                                                                           // 82
		var userLanguage = Meteor.user() && Meteor.user().language ? Meteor.user().language : window.defaultUserLanguage();
                                                                                                                      //
		if (localStorage.getItem('userLanguage') !== userLanguage) {                                                        // 85
			localStorage.setItem('userLanguage', userLanguage);                                                                // 86
		}                                                                                                                   // 87
                                                                                                                      //
		window.setLanguage(userLanguage);                                                                                   // 89
		var status = undefined;                                                                                             // 91
		Tracker.autorun(function () {                                                                                       // 92
			if (!Meteor.userId()) {                                                                                            // 93
				return;                                                                                                           // 94
			}                                                                                                                  // 95
                                                                                                                      //
			if (Meteor.user() && Meteor.user().status !== status) {                                                            // 97
				status = Meteor.user().status;                                                                                    // 98
				fireGlobalEvent('status-changed', status);                                                                        // 99
			}                                                                                                                  // 100
		});                                                                                                                 // 101
	});                                                                                                                  // 102
});                                                                                                                   // 103
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"unread.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/startup/unread.js                                                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/* globals fireGlobalEvent, readMessage, Favico, favico, menu */Meteor.startup(function () {                          // 1
	Tracker.autorun(function () {                                                                                        // 4
		var unreadCount = 0;                                                                                                // 5
		var unreadAlert = false;                                                                                            // 6
		var subscriptions = ChatSubscription.find({                                                                         // 8
			open: true,                                                                                                        // 8
			hideUnreadStatus: {                                                                                                // 8
				$ne: true                                                                                                         // 8
			}                                                                                                                  // 8
		}, {                                                                                                                // 8
			fields: {                                                                                                          // 8
				unread: 1,                                                                                                        // 8
				alert: 1,                                                                                                         // 8
				rid: 1,                                                                                                           // 8
				t: 1,                                                                                                             // 8
				name: 1,                                                                                                          // 8
				ls: 1,                                                                                                            // 8
				unreadAlert: 1                                                                                                    // 8
			}                                                                                                                  // 8
		});                                                                                                                 // 8
		var openedRoomId = undefined;                                                                                       // 10
		Tracker.nonreactive(function () {                                                                                   // 11
			if (['channel', 'group', 'direct'].includes(FlowRouter.getRouteName())) {                                          // 12
				openedRoomId = Session.get('openedRoom');                                                                         // 13
			}                                                                                                                  // 14
		});                                                                                                                 // 15
                                                                                                                      //
		for (var _iterator = subscriptions.fetch(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
			var _ref;                                                                                                          // 17
                                                                                                                      //
			if (_isArray) {                                                                                                    // 17
				if (_i >= _iterator.length) break;                                                                                // 17
				_ref = _iterator[_i++];                                                                                           // 17
			} else {                                                                                                           // 17
				_i = _iterator.next();                                                                                            // 17
				if (_i.done) break;                                                                                               // 17
				_ref = _i.value;                                                                                                  // 17
			}                                                                                                                  // 17
                                                                                                                      //
			var subscription = _ref;                                                                                           // 17
			fireGlobalEvent('unread-changed-by-subscription', subscription);                                                   // 18
                                                                                                                      //
			if (subscription.alert || subscription.unread > 0) {                                                               // 20
				// This logic is duplicated in /client/notifications/notification.coffee.                                         // 21
				var hasFocus = readMessage.isEnable();                                                                            // 22
				var subscriptionIsTheOpenedRoom = openedRoomId === subscription.rid;                                              // 23
                                                                                                                      //
				if (hasFocus && subscriptionIsTheOpenedRoom) {                                                                    // 24
					// The user has probably read all messages in this room.                                                         // 25
					// TODO: readNow() should return whether it has actually marked the room as read.                                // 26
					Meteor.setTimeout(function () {                                                                                  // 27
						readMessage.readNow();                                                                                          // 28
					}, 500);                                                                                                         // 29
				} // Increment the total unread count.                                                                            // 30
                                                                                                                      //
                                                                                                                      //
				unreadCount += subscription.unread;                                                                               // 33
                                                                                                                      //
				if (subscription.alert === true && subscription.unreadAlert !== 'nothing') {                                      // 34
					var userUnreadAlert = Meteor.user() && Meteor.user().settings && Meteor.user().settings.preferences && Meteor.user().settings.preferences.unreadAlert;
                                                                                                                      //
					if (subscription.unreadAlert === 'all' || userUnreadAlert !== false) {                                           // 36
						unreadAlert = '•';                                                                                              // 37
					}                                                                                                                // 38
				}                                                                                                                 // 39
			}                                                                                                                  // 40
                                                                                                                      //
			if (RoomManager.openedRooms[subscription.t + subscription.name]) {                                                 // 42
				readMessage.refreshUnreadMark(subscription.rid);                                                                  // 43
			}                                                                                                                  // 44
		}                                                                                                                   // 45
                                                                                                                      //
		menu.updateUnreadBars();                                                                                            // 47
                                                                                                                      //
		if (unreadCount > 0) {                                                                                              // 49
			if (unreadCount > 999) {                                                                                           // 50
				Session.set('unread', '999+');                                                                                    // 51
			} else {                                                                                                           // 52
				Session.set('unread', unreadCount);                                                                               // 53
			}                                                                                                                  // 54
		} else if (unreadAlert !== false) {                                                                                 // 55
			Session.set('unread', unreadAlert);                                                                                // 56
		} else {                                                                                                            // 57
			Session.set('unread', '');                                                                                         // 58
		}                                                                                                                   // 59
	});                                                                                                                  // 60
});                                                                                                                   // 61
Meteor.startup(function () {                                                                                          // 63
	window.favico = new Favico({                                                                                         // 64
		position: 'up',                                                                                                     // 65
		animation: 'none'                                                                                                   // 66
	});                                                                                                                  // 64
	Tracker.autorun(function () {                                                                                        // 69
		var siteName = RocketChat.settings.get('Site_Name') || '';                                                          // 70
		var unread = Session.get('unread');                                                                                 // 72
		fireGlobalEvent('unread-changed', unread);                                                                          // 73
                                                                                                                      //
		if (favico) {                                                                                                       // 75
			favico.badge(unread, {                                                                                             // 76
				bgColor: typeof unread !== 'number' ? '#3d8a3a' : '#ac1b1b'                                                       // 77
			});                                                                                                                // 76
		}                                                                                                                   // 79
                                                                                                                      //
		document.title = unread === '' ? siteName : "(" + unread + ") " + siteName;                                         // 81
	});                                                                                                                  // 82
});                                                                                                                   // 83
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userSetUtcOffset.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/startup/userSetUtcOffset.js                                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var moment = void 0;                                                                                                  // 1
module.watch(require("moment"), {                                                                                     // 1
	"default": function (v) {                                                                                            // 1
		moment = v;                                                                                                         // 1
	}                                                                                                                    // 1
}, 0);                                                                                                                // 1
Meteor.startup(function () {                                                                                          // 3
	Tracker.autorun(function () {                                                                                        // 4
		var user = Meteor.user();                                                                                           // 5
                                                                                                                      //
		if (user && user.statusConnection === 'online') {                                                                   // 6
			var utcOffset = moment().utcOffset() / 60;                                                                         // 7
                                                                                                                      //
			if (user.utcOffset !== utcOffset) {                                                                                // 8
				Meteor.call('userSetUtcOffset', utcOffset);                                                                       // 9
			}                                                                                                                  // 10
		}                                                                                                                   // 11
	});                                                                                                                  // 12
});                                                                                                                   // 13
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"usersObserve.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/startup/usersObserve.js                                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Meteor.startup(function () {                                                                                          // 1
	Meteor.users.find({}, {                                                                                              // 2
		fields: {                                                                                                           // 2
			name: 1,                                                                                                           // 2
			username: 1,                                                                                                       // 2
			pictures: 1,                                                                                                       // 2
			status: 1,                                                                                                         // 2
			emails: 1,                                                                                                         // 2
			phone: 1,                                                                                                          // 2
			services: 1,                                                                                                       // 2
			utcOffset: 1                                                                                                       // 2
		}                                                                                                                   // 2
	}).observe({                                                                                                         // 2
		added: function (user) {                                                                                            // 3
			Session.set("user_" + user.username + "_status", user.status);                                                     // 4
			RoomManager.updateUserStatus(user, user.status, user.utcOffset);                                                   // 5
		},                                                                                                                  // 6
		changed: function (user) {                                                                                          // 7
			Session.set("user_" + user.username + "_status", user.status);                                                     // 8
			RoomManager.updateUserStatus(user, user.status, user.utcOffset);                                                   // 9
		},                                                                                                                  // 10
		removed: function (user) {                                                                                          // 11
			Session.set("user_" + user.username + "_status", null);                                                            // 12
			RoomManager.updateUserStatus(user, 'offline', null);                                                               // 13
		}                                                                                                                   // 14
	});                                                                                                                  // 2
});                                                                                                                   // 16
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"lib":{"RegExp.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// lib/RegExp.js                                                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
RegExp.escape = function (s) {                                                                                        // 1
	return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');                                                                  // 2
};                                                                                                                    // 3
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"fileUpload.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// lib/fileUpload.js                                                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var Cookies = void 0;                                                                                                 // 1
module.watch(require("meteor/ostrio:cookies"), {                                                                      // 1
	Cookies: function (v) {                                                                                              // 1
		Cookies = v;                                                                                                        // 1
	}                                                                                                                    // 1
}, 0);                                                                                                                // 1
                                                                                                                      //
if (UploadFS) {                                                                                                       // 4
	var initFileStore = function () {                                                                                    // 5
		var cookie = new Cookies();                                                                                         // 6
                                                                                                                      //
		if (Meteor.isClient) {                                                                                              // 7
			document.cookie = "rc_uid=" + escape(Meteor.userId()) + "; path=/";                                                // 8
			document.cookie = "rc_token=" + escape(Accounts._storedLoginToken()) + "; path=/";                                 // 9
		}                                                                                                                   // 10
                                                                                                                      //
		Meteor.fileStore = new UploadFS.store.GridFS({                                                                      // 12
			collection: RocketChat.models.Uploads.model,                                                                       // 13
			name: 'rocketchat_uploads',                                                                                        // 14
			collectionName: 'rocketchat_uploads',                                                                              // 15
			filter: new UploadFS.Filter({                                                                                      // 16
				onCheck: FileUpload.validateFileUpload                                                                            // 17
			}),                                                                                                                // 16
			transformWrite: function (readStream, writeStream, fileId, file) {                                                 // 19
				if (RocketChatFile.enabled === false || !/^image\/.+/.test(file.type)) {                                          // 20
					return readStream.pipe(writeStream);                                                                             // 21
				}                                                                                                                 // 22
                                                                                                                      //
				var stream = undefined;                                                                                           // 24
                                                                                                                      //
				var identify = function (err, data) {                                                                             // 26
					if (err) {                                                                                                       // 27
						return stream.pipe(writeStream);                                                                                // 28
					}                                                                                                                // 29
                                                                                                                      //
					file.identify = {                                                                                                // 31
						format: data.format,                                                                                            // 32
						size: data.size                                                                                                 // 33
					};                                                                                                               // 31
                                                                                                                      //
					if (data.Orientation && !['', 'Unknown', 'Undefined'].includes(data.Orientation)) {                              // 36
						RocketChatFile.gm(stream).autoOrient().stream().pipe(writeStream);                                              // 37
					} else {                                                                                                         // 38
						stream.pipe(writeStream);                                                                                       // 39
					}                                                                                                                // 40
				};                                                                                                                // 41
                                                                                                                      //
				stream = RocketChatFile.gm(readStream).identify(identify).stream();                                               // 43
			},                                                                                                                 // 44
			onRead: function (fileId, file, req, res) {                                                                        // 46
				if (RocketChat.settings.get('FileUpload_ProtectFiles')) {                                                         // 47
					var uid = void 0;                                                                                                // 48
					var token = void 0;                                                                                              // 49
                                                                                                                      //
					if (req && req.headers && req.headers.cookie) {                                                                  // 51
						var rawCookies = req.headers.cookie;                                                                            // 52
                                                                                                                      //
						if (rawCookies) {                                                                                               // 54
							uid = cookie.get('rc_uid', rawCookies);                                                                        // 55
							token = cookie.get('rc_token', rawCookies);                                                                    // 56
						}                                                                                                               // 57
					}                                                                                                                // 58
                                                                                                                      //
					if (!uid) {                                                                                                      // 60
						uid = req.query.rc_uid;                                                                                         // 61
						token = req.query.rc_token;                                                                                     // 62
					}                                                                                                                // 63
                                                                                                                      //
					if (!uid || !token || !RocketChat.models.Users.findOneByIdAndLoginToken(uid, token)) {                           // 65
						res.writeHead(403);                                                                                             // 66
						return false;                                                                                                   // 67
					}                                                                                                                // 68
				}                                                                                                                 // 69
                                                                                                                      //
				res.setHeader('content-disposition', "attachment; filename=\"" + encodeURIComponent(file.name) + "\"");           // 71
				return true;                                                                                                      // 72
			}                                                                                                                  // 73
		});                                                                                                                 // 12
	};                                                                                                                   // 75
                                                                                                                      //
	Meteor.startup(function () {                                                                                         // 77
		if (Meteor.isServer) {                                                                                              // 78
			initFileStore();                                                                                                   // 79
		} else {                                                                                                            // 80
			Tracker.autorun(function (c) {                                                                                     // 81
				if (Meteor.userId() && RocketChat.settings.cachedCollection.ready.get()) {                                        // 82
					initFileStore();                                                                                                 // 83
					c.stop();                                                                                                        // 84
				}                                                                                                                 // 85
			});                                                                                                                // 86
		}                                                                                                                   // 87
	});                                                                                                                  // 88
}                                                                                                                     // 89
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"francocatena_fix.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// lib/francocatena_fix.js                                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
this.i18n_status_func = function (key, options) {                                                                     // 1
	return TAPi18n.__(key, options);                                                                                     // 2
};                                                                                                                    // 3
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"underscore.string.js":function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// lib/underscore.string.js                                                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/* globals mixin */ // This will add underscore.string methods to Underscore.js                                       // 1
// except for include, contains, reverse and join that are                                                            // 4
// dropped because they collide with the functions already                                                            // 5
// defined by Underscore.js.                                                                                          // 6
mixin = function (obj) {                                                                                              // 8
	_.each(_.functions(obj), function (name) {                                                                           // 9
		if (!_[name] && !_.prototype[name]) {                                                                               // 10
			_[name] = obj[name];                                                                                               // 11
		}                                                                                                                   // 12
	});                                                                                                                  // 13
};                                                                                                                    // 14
                                                                                                                      //
mixin(s.exports());                                                                                                   // 16
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css",
    ".less",
    ".coffee",
    ".info"
  ]
});
require("./client/lib/handleError.js");
require("./client/lib/toastr.js");
require("./lib/RegExp.js");
require("./lib/fileUpload.js");
require("./lib/francocatena_fix.js");
require("./lib/underscore.string.js");
require("./client/helpers/log.js");
require("./client/helpers/not.js");
require("./client/methods/deleteMessage.js");
require("./client/methods/hideRoom.js");
require("./client/methods/leaveRoom.js");
require("./client/methods/openRoom.js");
require("./client/methods/setUserActiveStatus.js");
require("./client/methods/toggleFavorite.js");
require("./client/methods/updateMessage.js");
require("./client/notifications/UsersNameChanged.js");
require("./client/notifications/notification.js");
require("./client/notifications/updateAvatar.js");
require("./client/routes/adminRouter.js");
require("./client/routes/roomRoute.js");
require("./client/routes/router.js");
require("./client/startup/emailVerification.js");
require("./client/startup/roomObserve.js");
require("./client/startup/startup.js");
require("./client/startup/unread.js");
require("./client/startup/userSetUtcOffset.js");
require("./client/startup/usersObserve.js");