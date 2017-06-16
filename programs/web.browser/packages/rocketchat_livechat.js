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
var s = Package['underscorestring:underscore.string'].s;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var Logger = Package['rocketchat:logger'].Logger;
var SystemLogger = Package['rocketchat:logger'].SystemLogger;
var LoggerManager = Package['rocketchat:logger'].LoggerManager;
var Streamer = Package['rocketchat:streamer'].Streamer;
var UserPresence = Package['konecty:user-presence'].UserPresence;
var FlowRouter = Package['kadira:flow-router'].FlowRouter;
var Template = Package['templating-runtime'].Template;
var HTTP = Package.http.HTTP;
var check = Package.check.check;
var Match = Package.check.Match;
var Mongo = Package.mongo.Mongo;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
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

/* Package-scope variables */
var livechatManagerRoutes, exports;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:livechat":{"messageTypes.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/messageTypes.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
RocketChat.MessageTypes.registerType({                                                                                 // 1
	id: 'livechat_video_call',                                                                                            // 2
	system: true,                                                                                                         // 3
	message: 'New_videocall_request'                                                                                      // 4
});                                                                                                                    // 1
RocketChat.actionLinks.register('createLivechatCall', function (message, params, instance) {                           // 7
	if (Meteor.isClient) {                                                                                                // 8
		instance.tabBar.open('video');                                                                                       // 9
	}                                                                                                                     // 10
});                                                                                                                    // 11
RocketChat.actionLinks.register('denyLivechatCall', function (message /*, params*/) {                                  // 13
	if (Meteor.isServer) {                                                                                                // 14
		var user = Meteor.user();                                                                                            // 15
		RocketChat.models.Messages.createWithTypeRoomIdMessageAndUser('command', message.rid, 'endCall', user);              // 17
		RocketChat.Notifications.notifyRoom(message.rid, 'deleteMessage', {                                                  // 18
			_id: message._id                                                                                                    // 18
		});                                                                                                                  // 18
		var language = user.language || RocketChat.settings.get('language') || 'en';                                         // 20
		RocketChat.Livechat.closeRoom({                                                                                      // 22
			user: user,                                                                                                         // 23
			room: RocketChat.models.Rooms.findOneById(message.rid),                                                             // 24
			comment: TAPi18n.__('Videocall_declined', {                                                                         // 25
				lng: language                                                                                                      // 25
			})                                                                                                                  // 25
		});                                                                                                                  // 22
		Meteor.defer(function () {                                                                                           // 27
			RocketChat.models.Messages.setHiddenById(message._id);                                                              // 28
		});                                                                                                                  // 29
	}                                                                                                                     // 30
});                                                                                                                    // 31
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"roomType.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/roomType.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals openRoom, LivechatInquiry */RocketChat.roomTypes.add('l', 5, {                                              // 1
	template: 'livechat',                                                                                                 // 4
	icon: 'icon-chat-empty',                                                                                              // 5
	route: {                                                                                                              // 6
		name: 'live',                                                                                                        // 7
		path: '/live/:code(\\d+)',                                                                                           // 8
		action: function (params /*, queryParams*/) {                                                                        // 9
			openRoom('l', params.code);                                                                                         // 10
		},                                                                                                                   // 11
		link: function (sub) {                                                                                               // 12
			return {                                                                                                            // 13
				code: sub.code                                                                                                     // 14
			};                                                                                                                  // 13
		}                                                                                                                    // 16
	},                                                                                                                    // 6
	findRoom: function (identifier) {                                                                                     // 19
		return ChatRoom.findOne({                                                                                            // 20
			code: parseInt(identifier)                                                                                          // 20
		});                                                                                                                  // 20
	},                                                                                                                    // 21
	roomName: function (roomData) {                                                                                       // 23
		if (!roomData.name) {                                                                                                // 24
			return roomData.label;                                                                                              // 25
		} else {                                                                                                             // 26
			return roomData.name;                                                                                               // 27
		}                                                                                                                    // 28
	},                                                                                                                    // 29
	condition: function () {                                                                                              // 31
		return RocketChat.settings.get('Livechat_enabled') && RocketChat.authz.hasAllPermission('view-l-room');              // 32
	},                                                                                                                    // 33
	canSendMessage: function (roomId) {                                                                                   // 35
		var room = ChatRoom.findOne({                                                                                        // 36
			_id: roomId                                                                                                         // 36
		}, {                                                                                                                 // 36
			fields: {                                                                                                           // 36
				open: 1                                                                                                            // 36
			}                                                                                                                   // 36
		});                                                                                                                  // 36
		return room && room.open === true;                                                                                   // 37
	},                                                                                                                    // 38
	getUserStatus: function (roomId) {                                                                                    // 40
		var guestName = void 0;                                                                                              // 41
		var room = Session.get("roomData" + roomId);                                                                         // 42
                                                                                                                       //
		if (room) {                                                                                                          // 44
			guestName = room.v && room.v.username;                                                                              // 45
		} else {                                                                                                             // 46
			var inquiry = LivechatInquiry.findOne({                                                                             // 47
				rid: roomId                                                                                                        // 47
			});                                                                                                                 // 47
			guestName = inquiry && inquiry.v && inquiry.v.username;                                                             // 48
		}                                                                                                                    // 49
                                                                                                                       //
		if (guestName) {                                                                                                     // 51
			return Session.get("user_" + guestName + "_status");                                                                // 52
		}                                                                                                                    // 53
	},                                                                                                                    // 54
	notSubscribedTpl: {                                                                                                   // 56
		template: 'livechatNotSubscribed'                                                                                    // 57
	}                                                                                                                     // 56
});                                                                                                                    // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"client":{"ui.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/ui.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
AccountBox.addItem({                                                                                                   // 1
	name: 'Livechat',                                                                                                     // 2
	icon: 'icon-chat-empty',                                                                                              // 3
	href: 'livechat-current-chats',                                                                                       // 4
	sideNav: 'livechatFlex',                                                                                              // 5
	condition: function () {                                                                                              // 6
		return RocketChat.settings.get('Livechat_enabled') && RocketChat.authz.hasAllPermission('view-livechat-manager');    // 7
	}                                                                                                                     // 8
});                                                                                                                    // 1
RocketChat.TabBar.addButton({                                                                                          // 11
	groups: ['live'],                                                                                                     // 12
	id: 'visitor-info',                                                                                                   // 13
	i18nTitle: 'Visitor_Info',                                                                                            // 14
	icon: 'icon-info-circled',                                                                                            // 15
	template: 'visitorInfo',                                                                                              // 16
	order: 0                                                                                                              // 17
}); // RocketChat.TabBar.addButton({                                                                                   // 11
// 	groups: ['livechat'],                                                                                              // 21
// 	id: 'visitor-navigation',                                                                                          // 22
// 	i18nTitle: 'Visitor_Navigation',                                                                                   // 23
// 	icon: 'icon-history',                                                                                              // 24
// 	template: 'visitorNavigation',                                                                                     // 25
// 	order: 10                                                                                                          // 26
// });                                                                                                                 // 27
                                                                                                                       //
RocketChat.TabBar.addButton({                                                                                          // 29
	groups: ['live'],                                                                                                     // 30
	id: 'visitor-history',                                                                                                // 31
	i18nTitle: 'Past_Chats',                                                                                              // 32
	icon: 'icon-chat',                                                                                                    // 33
	template: 'visitorHistory',                                                                                           // 34
	order: 11                                                                                                             // 35
});                                                                                                                    // 29
RocketChat.TabBar.addGroup('message-search', ['live']);                                                                // 38
RocketChat.TabBar.addGroup('starred-messages', ['live']);                                                              // 39
RocketChat.TabBar.addGroup('uploaded-files-list', ['live']);                                                           // 40
RocketChat.TabBar.addGroup('push-notifications', ['live']);                                                            // 41
RocketChat.TabBar.addGroup('video', ['live']);                                                                         // 42
RocketChat.TabBar.addButton({                                                                                          // 44
	groups: ['live'],                                                                                                     // 45
	id: 'external-search',                                                                                                // 46
	i18nTitle: 'Knowledge_Base',                                                                                          // 47
	icon: 'icon-lightbulb',                                                                                               // 48
	template: 'externalSearch',                                                                                           // 49
	order: 10                                                                                                             // 50
});                                                                                                                    // 44
RocketChat.MessageTypes.registerType({                                                                                 // 53
	id: 'livechat-close',                                                                                                 // 54
	system: true,                                                                                                         // 55
	message: 'Conversation_closed',                                                                                       // 56
	data: function (message) {                                                                                            // 57
		return {                                                                                                             // 58
			comment: message.msg                                                                                                // 59
		};                                                                                                                   // 58
	}                                                                                                                     // 61
});                                                                                                                    // 53
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"route.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/route.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
livechatManagerRoutes = FlowRouter.group({                                                                             // 1
	prefix: '/livechat-manager',                                                                                          // 2
	name: 'livechat-manager'                                                                                              // 3
});                                                                                                                    // 1
AccountBox.addRoute({                                                                                                  // 6
	name: 'livechat-dashboard',                                                                                           // 7
	path: '/dashboard',                                                                                                   // 8
	sideNav: 'livechatFlex',                                                                                              // 9
	i18nPageTitle: 'Livechat_Dashboard',                                                                                  // 10
	pageTemplate: 'livechatDashboard'                                                                                     // 11
}, livechatManagerRoutes);                                                                                             // 6
AccountBox.addRoute({                                                                                                  // 14
	name: 'livechat-current-chats',                                                                                       // 15
	path: '/current',                                                                                                     // 16
	sideNav: 'livechatFlex',                                                                                              // 17
	i18nPageTitle: 'Current_Chats',                                                                                       // 18
	pageTemplate: 'livechatCurrentChats'                                                                                  // 19
}, livechatManagerRoutes);                                                                                             // 14
AccountBox.addRoute({                                                                                                  // 22
	name: 'livechat-users',                                                                                               // 23
	path: '/users',                                                                                                       // 24
	sideNav: 'livechatFlex',                                                                                              // 25
	i18nPageTitle: 'Livechat_Users',                                                                                      // 26
	pageTemplate: 'livechatUsers'                                                                                         // 27
}, livechatManagerRoutes);                                                                                             // 22
AccountBox.addRoute({                                                                                                  // 30
	name: 'livechat-departments',                                                                                         // 31
	path: '/departments',                                                                                                 // 32
	sideNav: 'livechatFlex',                                                                                              // 33
	i18nPageTitle: 'Departments',                                                                                         // 34
	pageTemplate: 'livechatDepartments'                                                                                   // 35
}, livechatManagerRoutes);                                                                                             // 30
AccountBox.addRoute({                                                                                                  // 38
	name: 'livechat-department-edit',                                                                                     // 39
	path: '/departments/:_id/edit',                                                                                       // 40
	sideNav: 'livechatFlex',                                                                                              // 41
	i18nPageTitle: 'Edit_Department',                                                                                     // 42
	pageTemplate: 'livechatDepartmentForm'                                                                                // 43
}, livechatManagerRoutes);                                                                                             // 38
AccountBox.addRoute({                                                                                                  // 46
	name: 'livechat-department-new',                                                                                      // 47
	path: '/departments/new',                                                                                             // 48
	sideNav: 'livechatFlex',                                                                                              // 49
	i18nPageTitle: 'New_Department',                                                                                      // 50
	pageTemplate: 'livechatDepartmentForm'                                                                                // 51
}, livechatManagerRoutes);                                                                                             // 46
AccountBox.addRoute({                                                                                                  // 54
	name: 'livechat-triggers',                                                                                            // 55
	path: '/triggers',                                                                                                    // 56
	sideNav: 'livechatFlex',                                                                                              // 57
	i18nPageTitle: 'Triggers',                                                                                            // 58
	pageTemplate: 'livechatTriggers'                                                                                      // 59
}, livechatManagerRoutes);                                                                                             // 54
AccountBox.addRoute({                                                                                                  // 62
	name: 'livechat-trigger-edit',                                                                                        // 63
	path: '/triggers/:_id/edit',                                                                                          // 64
	sideNav: 'livechatFlex',                                                                                              // 65
	i18nPageTitle: 'Edit_Trigger',                                                                                        // 66
	pageTemplate: 'livechatTriggersForm'                                                                                  // 67
}, livechatManagerRoutes);                                                                                             // 62
AccountBox.addRoute({                                                                                                  // 70
	name: 'livechat-trigger-new',                                                                                         // 71
	path: '/triggers/new',                                                                                                // 72
	sideNav: 'livechatFlex',                                                                                              // 73
	i18nPageTitle: 'New_Trigger',                                                                                         // 74
	pageTemplate: 'livechatTriggersForm'                                                                                  // 75
}, livechatManagerRoutes);                                                                                             // 70
AccountBox.addRoute({                                                                                                  // 78
	name: 'livechat-installation',                                                                                        // 79
	path: '/installation',                                                                                                // 80
	sideNav: 'livechatFlex',                                                                                              // 81
	i18nPageTitle: 'Installation',                                                                                        // 82
	pageTemplate: 'livechatInstallation'                                                                                  // 83
}, livechatManagerRoutes);                                                                                             // 78
AccountBox.addRoute({                                                                                                  // 86
	name: 'livechat-appearance',                                                                                          // 87
	path: '/appearance',                                                                                                  // 88
	sideNav: 'livechatFlex',                                                                                              // 89
	i18nPageTitle: 'Appearance',                                                                                          // 90
	pageTemplate: 'livechatAppearance'                                                                                    // 91
}, livechatManagerRoutes);                                                                                             // 86
AccountBox.addRoute({                                                                                                  // 94
	name: 'livechat-officeHours',                                                                                         // 95
	path: '/officeHours',                                                                                                 // 96
	sideNav: 'livechatFlex',                                                                                              // 97
	i18nPageTitle: 'Office_Hours',                                                                                        // 98
	pageTemplate: 'livechatOfficeHours'                                                                                   // 99
}, livechatManagerRoutes);                                                                                             // 94
AccountBox.addRoute({                                                                                                  // 102
	name: 'livechat-customfields',                                                                                        // 103
	path: '/customfields',                                                                                                // 104
	sideNav: 'livechatFlex',                                                                                              // 105
	i18nPageTitle: 'Custom_Fields',                                                                                       // 106
	pageTemplate: 'livechatCustomFields'                                                                                  // 107
}, livechatManagerRoutes);                                                                                             // 102
AccountBox.addRoute({                                                                                                  // 110
	name: 'livechat-customfield-edit',                                                                                    // 111
	path: '/customfields/:_id/edit',                                                                                      // 112
	sideNav: 'livechatFlex',                                                                                              // 113
	i18nPageTitle: 'Edit_Custom_Field',                                                                                   // 114
	pageTemplate: 'livechatCustomFieldForm'                                                                               // 115
}, livechatManagerRoutes);                                                                                             // 110
AccountBox.addRoute({                                                                                                  // 118
	name: 'livechat-customfield-new',                                                                                     // 119
	path: '/customfields/new',                                                                                            // 120
	sideNav: 'livechatFlex',                                                                                              // 121
	i18nPageTitle: 'New_Custom_Field',                                                                                    // 122
	pageTemplate: 'livechatCustomFieldForm'                                                                               // 123
}, livechatManagerRoutes);                                                                                             // 118
AccountBox.addRoute({                                                                                                  // 126
	name: 'livechat-integrations',                                                                                        // 127
	path: '/integrations',                                                                                                // 128
	sideNav: 'livechatFlex',                                                                                              // 129
	i18nPageTitle: 'Integrations',                                                                                        // 130
	pageTemplate: 'livechatIntegrations'                                                                                  // 131
}, livechatManagerRoutes);                                                                                             // 126
AccountBox.addRoute({                                                                                                  // 134
	name: 'livechat-queue',                                                                                               // 135
	path: '/livechat-queue',                                                                                              // 136
	i18nPageTitle: 'Livechat_Queue',                                                                                      // 137
	pageTemplate: 'livechatQueue'                                                                                         // 138
});                                                                                                                    // 134
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"collections":{"AgentUsers.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/collections/AgentUsers.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
this.AgentUsers = new Mongo.Collection('agentUsers');                                                                  // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"LivechatCustomField.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/collections/LivechatCustomField.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
this.LivechatCustomField = new Mongo.Collection('rocketchat_livechat_custom_field');                                   // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"LivechatDepartment.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/collections/LivechatDepartment.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
this.LivechatDepartment = new Mongo.Collection('rocketchat_livechat_department');                                      // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"LivechatDepartmentAgents.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/collections/LivechatDepartmentAgents.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
this.LivechatDepartmentAgents = new Mongo.Collection('rocketchat_livechat_department_agents');                         // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"LivechatIntegration.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/collections/LivechatIntegration.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
this.LivechatIntegration = new Mongo.Collection('livechatIntegration');                                                // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"LivechatPageVisited.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/collections/LivechatPageVisited.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
this.LivechatPageVisited = new Mongo.Collection('rocketchat_livechat_page_visited');                                   // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"LivechatQueueUser.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/collections/LivechatQueueUser.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
this.LivechatQueueUser = new Mongo.Collection('livechatQueueUser');                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"LivechatTrigger.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/collections/LivechatTrigger.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
this.LivechatTrigger = new Mongo.Collection('rocketchat_livechat_trigger');                                            // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"LivechatInquiry.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/collections/LivechatInquiry.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
this.LivechatInquiry = new Mongo.Collection('rocketchat_livechat_inquiry');                                            // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"livechatOfficeHour.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/collections/livechatOfficeHour.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
this.LivechatOfficeHour = new Mongo.Collection('rocketchat_livechat_office_hour');                                     // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"methods":{"changeLivechatStatus.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/methods/changeLivechatStatus.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.methods({                                                                                                       // 1
	'livechat:changeLivechatStatus': function () {                                                                        // 2
		if (!Meteor.userId()) {                                                                                              // 3
			return false;                                                                                                       // 4
		}                                                                                                                    // 5
                                                                                                                       //
		var user = Meteor.user();                                                                                            // 7
		var newStatus = user.statusLivechat === 'available' ? 'not-available' : 'available';                                 // 9
		Meteor.users.update(user._id, {                                                                                      // 11
			$set: {                                                                                                             // 11
				statusLivechat: newStatus                                                                                          // 11
			}                                                                                                                   // 11
		});                                                                                                                  // 11
	}                                                                                                                     // 12
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"views":{"app":{"template.livechatAppearance.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/template.livechatAppearance.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("livechatAppearance");                                                                            // 2
Template["livechatAppearance"] = new Template("Template.livechatAppearance", (function() {                             // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return "view-livechat-manager";                                                                                    // 6
  }, function() {                                                                                                      // 7
    return Spacebars.include(view.lookupTemplate("requiresPermission"), function() {                                   // 8
      return [ "\n\t\t", HTML.DIV({                                                                                    // 9
        class: "livechat-settings-div"                                                                                 // 10
      }, "\n\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                                                       // 11
        return Spacebars.mustache(view.lookup("_"), "Settings");                                                       // 12
      })), "\n\n\t\t\t", HTML.FORM({                                                                                   // 13
        class: "rocket-form"                                                                                           // 14
      }, "\n\t\t\t\t", HTML.FIELDSET("\n\t\t\t\t\t", HTML.LEGEND(Blaze.View("lookup:_", function() {                   // 15
        return Spacebars.mustache(view.lookup("_"), "Livechat_online");                                                // 16
      })), "\n\t\t\t\t\t", HTML.DIV({                                                                                  // 17
        class: "input-line"                                                                                            // 18
      }, "\n\t\t\t\t\t\t", HTML.LABEL({                                                                                // 19
        for: "title"                                                                                                   // 20
      }, Blaze.View("lookup:_", function() {                                                                           // 21
        return Spacebars.mustache(view.lookup("_"), "Title");                                                          // 22
      })), "\n\t\t\t\t\t\t", HTML.INPUT({                                                                              // 23
        type: "text",                                                                                                  // 24
        class: "preview-settings",                                                                                     // 25
        name: "title",                                                                                                 // 26
        id: "title",                                                                                                   // 27
        value: function() {                                                                                            // 28
          return Spacebars.mustache(view.lookup("title"));                                                             // 29
        }                                                                                                              // 30
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                                                  // 31
        class: "input-line"                                                                                            // 32
      }, "\n\t\t\t\t\t\t", HTML.LABEL({                                                                                // 33
        for: "color"                                                                                                   // 34
      }, Blaze.View("lookup:_", function() {                                                                           // 35
        return Spacebars.mustache(view.lookup("_"), "Title_bar_color");                                                // 36
      })), "\n\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t", HTML.INPUT({                                                 // 37
        type: "text",                                                                                                  // 38
        class: "preview-settings colorpicker-input",                                                                   // 39
        name: "color",                                                                                                 // 40
        id: "color",                                                                                                   // 41
        value: function() {                                                                                            // 42
          return Spacebars.mustache(view.lookup("color"));                                                             // 43
        }                                                                                                              // 44
      }), "\n\t\t\t\t\t\t\t", HTML.SPAN({                                                                              // 45
        class: "colorpicker-swatch border-component-color",                                                            // 46
        style: function() {                                                                                            // 47
          return [ "background-color: ", Spacebars.mustache(view.lookup("color")) ];                                   // 48
        }                                                                                                              // 49
      }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.FIELDSET("\n\t\t\t\t\t", HTML.LEGEND(Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Livechat_offline");                                               // 51
      })), "\n\t\t\t\t\t", HTML.DIV({                                                                                  // 52
        class: "input-line"                                                                                            // 53
      }, "\n\t\t\t\t\t\t", HTML.LABEL({                                                                                // 54
        for: "displayOfflineForm"                                                                                      // 55
      }, Blaze.View("lookup:_", function() {                                                                           // 56
        return Spacebars.mustache(view.lookup("_"), "Display_offline_form");                                           // 57
      })), "\n\t\t\t\t\t\t", HTML.DIV({                                                                                // 58
        class: "inline-fields"                                                                                         // 59
      }, "\n\t\t\t\t\t\t\t", HTML.INPUT({                                                                              // 60
        type: "radio",                                                                                                 // 61
        class: "preview-settings",                                                                                     // 62
        name: "displayOfflineForm",                                                                                    // 63
        id: "displayOfflineFormTrue",                                                                                  // 64
        checked: function() {                                                                                          // 65
          return Spacebars.mustache(view.lookup("displayOfflineFormTrueChecked"));                                     // 66
        },                                                                                                             // 67
        value: "true"                                                                                                  // 68
      }), "\n\t\t\t\t\t\t\t", HTML.LABEL({                                                                             // 69
        for: "displayOfflineFormTrue"                                                                                  // 70
      }, Blaze.View("lookup:_", function() {                                                                           // 71
        return Spacebars.mustache(view.lookup("_"), "True");                                                           // 72
      })), "\n\t\t\t\t\t\t\t", HTML.INPUT({                                                                            // 73
        type: "radio",                                                                                                 // 74
        class: "preview-settings",                                                                                     // 75
        name: "displayOfflineForm",                                                                                    // 76
        id: "displayOfflineFormFalse",                                                                                 // 77
        checked: function() {                                                                                          // 78
          return Spacebars.mustache(view.lookup("displayOfflineFormFalseChecked"));                                    // 79
        },                                                                                                             // 80
        value: "false"                                                                                                 // 81
      }), "\n\t\t\t\t\t\t\t", HTML.LABEL({                                                                             // 82
        for: "displayOfflineFormFalse"                                                                                 // 83
      }, Blaze.View("lookup:_", function() {                                                                           // 84
        return Spacebars.mustache(view.lookup("_"), "False");                                                          // 85
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                              // 86
        class: "input-line"                                                                                            // 87
      }, "\n\t\t\t\t\t\t", HTML.LABEL({                                                                                // 88
        for: "offlineUnavailableMessage"                                                                               // 89
      }, Blaze.View("lookup:_", function() {                                                                           // 90
        return Spacebars.mustache(view.lookup("_"), "Offline_form_unavailable_message");                               // 91
      })), "\n\t\t\t\t\t\t", HTML.TEXTAREA({                                                                           // 92
        class: "preview-settings",                                                                                     // 93
        name: "offlineUnavailableMessage",                                                                             // 94
        id: "offlineUnavailableMessage",                                                                               // 95
        value: function() {                                                                                            // 96
          return Spacebars.mustache(view.lookup("offlineUnavailableMessage"));                                         // 97
        }                                                                                                              // 98
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                                                  // 99
        class: "input-line"                                                                                            // 100
      }, "\n\t\t\t\t\t\t", HTML.LABEL({                                                                                // 101
        for: "offlineMessage"                                                                                          // 102
      }, Blaze.View("lookup:_", function() {                                                                           // 103
        return Spacebars.mustache(view.lookup("_"), "Offline_message");                                                // 104
      })), "\n\t\t\t\t\t\t", HTML.TEXTAREA({                                                                           // 105
        class: "preview-settings",                                                                                     // 106
        name: "offlineMessage",                                                                                        // 107
        id: "offlineMessage",                                                                                          // 108
        value: function() {                                                                                            // 109
          return Spacebars.mustache(view.lookup("offlineMessage"));                                                    // 110
        }                                                                                                              // 111
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                                                  // 112
        class: "input-line"                                                                                            // 113
      }, "\n\t\t\t\t\t\t", HTML.LABEL({                                                                                // 114
        for: "titleOffline"                                                                                            // 115
      }, Blaze.View("lookup:_", function() {                                                                           // 116
        return Spacebars.mustache(view.lookup("_"), "Title_offline");                                                  // 117
      })), "\n\t\t\t\t\t\t", HTML.INPUT({                                                                              // 118
        type: "text",                                                                                                  // 119
        class: "preview-settings",                                                                                     // 120
        name: "titleOffline",                                                                                          // 121
        id: "titleOffline",                                                                                            // 122
        value: function() {                                                                                            // 123
          return Spacebars.mustache(view.lookup("titleOffline"));                                                      // 124
        }                                                                                                              // 125
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                                                  // 126
        class: "input-line"                                                                                            // 127
      }, "\n\t\t\t\t\t\t", HTML.LABEL({                                                                                // 128
        for: "colorOffline"                                                                                            // 129
      }, Blaze.View("lookup:_", function() {                                                                           // 130
        return Spacebars.mustache(view.lookup("_"), "Title_bar_color_offline");                                        // 131
      })), "\n\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t", HTML.INPUT({                                                 // 132
        type: "text",                                                                                                  // 133
        class: "preview-settings colorpicker-input",                                                                   // 134
        name: "colorOffline",                                                                                          // 135
        id: "colorOffline",                                                                                            // 136
        value: function() {                                                                                            // 137
          return Spacebars.mustache(view.lookup("colorOffline"));                                                      // 138
        }                                                                                                              // 139
      }), "\n\t\t\t\t\t\t\t", HTML.SPAN({                                                                              // 140
        class: "colorpicker-swatch border-component-color",                                                            // 141
        style: function() {                                                                                            // 142
          return [ "background-color: ", Spacebars.mustache(view.lookup("colorOffline")) ];                            // 143
        }                                                                                                              // 144
      }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                               // 145
        class: "input-line"                                                                                            // 146
      }, "\n\t\t\t\t\t\t", HTML.LABEL({                                                                                // 147
        for: "emailOffline"                                                                                            // 148
      }, Blaze.View("lookup:_", function() {                                                                           // 149
        return Spacebars.mustache(view.lookup("_"), "Email_address_to_send_offline_messages");                         // 150
      })), "\n\t\t\t\t\t\t", HTML.INPUT({                                                                              // 151
        type: "text",                                                                                                  // 152
        class: "preview-settings",                                                                                     // 153
        name: "emailOffline",                                                                                          // 154
        id: "emailOffline",                                                                                            // 155
        value: function() {                                                                                            // 156
          return Spacebars.mustache(view.lookup("emailOffline"));                                                      // 157
        }                                                                                                              // 158
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                                                  // 159
        class: "input-line"                                                                                            // 160
      }, "\n\t\t\t\t\t\t", HTML.LABEL({                                                                                // 161
        for: "offlineSuccessMessage"                                                                                   // 162
      }, Blaze.View("lookup:_", function() {                                                                           // 163
        return Spacebars.mustache(view.lookup("_"), "Offline_success_message");                                        // 164
      })), "\n\t\t\t\t\t\t", HTML.TEXTAREA({                                                                           // 165
        class: "preview-settings",                                                                                     // 166
        name: "offlineSuccessMessage",                                                                                 // 167
        id: "offlineSuccessMessage",                                                                                   // 168
        value: function() {                                                                                            // 169
          return Spacebars.mustache(view.lookup("offlineSuccessMessage"));                                             // 170
        }                                                                                                              // 171
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                     // 172
        class: "submit"                                                                                                // 173
      }, "\n\t\t\t\t\t", HTML.BUTTON({                                                                                 // 174
        class: "button secondary reset-settings"                                                                       // 175
      }, HTML.I({                                                                                                      // 176
        class: "icon-ccw"                                                                                              // 177
      }), Blaze.View("lookup:_", function() {                                                                          // 178
        return Spacebars.mustache(view.lookup("_"), "Reset");                                                          // 179
      })), "\n\t\t\t\t\t", HTML.BUTTON({                                                                               // 180
        class: "button primary save"                                                                                   // 181
      }, HTML.I({                                                                                                      // 182
        class: "icon-floppy"                                                                                           // 183
      }), Blaze.View("lookup:_", function() {                                                                          // 184
        return Spacebars.mustache(view.lookup("_"), "Save");                                                           // 185
      })), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\n\t\t", HTML.DIV({                                               // 186
        class: "livechat-preview-div"                                                                                  // 187
      }, "\n\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                                                       // 188
        return Spacebars.mustache(view.lookup("_"), "Preview");                                                        // 189
      })), "\n\n\t\t\t", HTML.SELECT({                                                                                 // 190
        class: "preview-mode"                                                                                          // 191
      }, "\n\t\t\t\t", HTML.OPTGROUP({                                                                                 // 192
        label: function() {                                                                                            // 193
          return Spacebars.mustache(view.lookup("_"), "Online");                                                       // 194
        }                                                                                                              // 195
      }, "\n\t\t\t\t\t", HTML.OPTION({                                                                                 // 196
        value: "opened"                                                                                                // 197
      }, Blaze.View("lookup:_", function() {                                                                           // 198
        return Spacebars.mustache(view.lookup("_"), "Chat_window");                                                    // 199
      })), "\n\t\t\t\t\t", HTML.OPTION({                                                                               // 200
        value: "closed"                                                                                                // 201
      }, Blaze.View("lookup:_", function() {                                                                           // 202
        return Spacebars.mustache(view.lookup("_"), "Chat_button");                                                    // 203
      })), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.OPTGROUP({                                                                // 204
        label: function() {                                                                                            // 205
          return Spacebars.mustache(view.lookup("_"), "Offline");                                                      // 206
        }                                                                                                              // 207
      }, "\n\t\t\t\t\t", HTML.OPTION({                                                                                 // 208
        value: "opened-offline"                                                                                        // 209
      }, Blaze.View("lookup:_", function() {                                                                           // 210
        return Spacebars.mustache(view.lookup("_"), "Offline_form");                                                   // 211
      })), "\n\t\t\t\t\t", HTML.OPTION({                                                                               // 212
        value: "offline-unavailable"                                                                                   // 213
      }, Blaze.View("lookup:_", function() {                                                                           // 214
        return Spacebars.mustache(view.lookup("_"), "Offline_unavailable");                                            // 215
      })), "\n\t\t\t\t\t", HTML.OPTION({                                                                               // 216
        value: "offline-success"                                                                                       // 217
      }, Blaze.View("lookup:_", function() {                                                                           // 218
        return Spacebars.mustache(view.lookup("_"), "Success_message");                                                // 219
      })), "\n\t\t\t\t\t", HTML.OPTION({                                                                               // 220
        value: "closed-offline"                                                                                        // 221
      }, Blaze.View("lookup:_", function() {                                                                           // 222
        return Spacebars.mustache(view.lookup("_"), "Chat_button");                                                    // 223
      })), "\n\t\t\t\t"), "\n\t\t\t"), "\n\n\t\t\t", HTML.DIV({                                                        // 224
        class: function() {                                                                                            // 225
          return [ "livechat-preview ", Spacebars.mustache(view.lookup("previewState")) ];                             // 226
        }                                                                                                              // 227
      }, "\n\t\t\t\t", HTML.DIV({                                                                                      // 228
        class: "preview-wrapper"                                                                                       // 229
      }, "\n\t\t\t\t\t", Spacebars.With(function() {                                                                   // 230
        return Spacebars.call(view.lookup("sampleData"));                                                              // 231
      }, function() {                                                                                                  // 232
        return [ "\n\t\t\t\t\t\t", HTML.DIV({                                                                          // 233
          class: "livechat-room"                                                                                       // 234
        }, "\n\t\t\t\t\t\t\t", HTML.DIV({                                                                              // 235
          class: "title",                                                                                              // 236
          style: function() {                                                                                          // 237
            return [ "background-color:", Spacebars.mustache(view.lookup("sampleColor")) ];                            // 238
          }                                                                                                            // 239
        }, "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                            // 240
          class: "toolbar"                                                                                             // 241
        }, "\n\t\t\t\t\t\t\t\t\t", HTML.CharRef({                                                                      // 242
          html: "&nbsp;",                                                                                              // 243
          str: " "                                                                                                     // 244
        }), "\n\t\t\t\t\t\t\t\t\t", HTML.I({                                                                           // 245
          class: "popout icon-link-ext",                                                                               // 246
          title: "Open in a new window"                                                                                // 247
        }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.H1(Blaze.View("lookup:sampleTitle", function() {         // 248
          return Spacebars.mustache(view.lookup("sampleTitle"));                                                       // 249
        })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                            // 250
          return Spacebars.call(view.lookup("showOnline"));                                                            // 251
        }, function() {                                                                                                // 252
          return [ "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 253
            class: "messages"                                                                                          // 254
          }, "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                        // 255
            class: "wrapper"                                                                                           // 256
          }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.UL("\n\t\t\t\t\t\t\t\t\t\t\t", Blaze.Each(function() {                     // 257
            return Spacebars.call(view.lookup("messages"));                                                            // 258
          }, function() {                                                                                              // 259
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.LI({                                                           // 260
              id: function() {                                                                                         // 261
                return Spacebars.mustache(view.lookup("_id"));                                                         // 262
              },                                                                                                       // 263
              class: function() {                                                                                      // 264
                return [ "message ", Spacebars.mustache(view.lookup("sequential")) ];                                  // 265
              },                                                                                                       // 266
              "data-username": function() {                                                                            // 267
                return Spacebars.mustache(Spacebars.dot(view.lookup("u"), "username"));                                // 268
              },                                                                                                       // 269
              "data-date": function() {                                                                                // 270
                return Spacebars.mustache(view.lookup("date"));                                                        // 271
              }                                                                                                        // 272
            }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.SPAN({                                                             // 273
              class: "thumb thumb-small",                                                                              // 274
              "data-username": function() {                                                                            // 275
                return Spacebars.mustache(Spacebars.dot(view.lookup("u"), "username"));                                // 276
              },                                                                                                       // 277
              tabindex: "1"                                                                                            // 278
            }, Blaze._TemplateWith(function() {                                                                        // 279
              return {                                                                                                 // 280
                username: Spacebars.call(Spacebars.dot(view.lookup("u"), "username"))                                  // 281
              };                                                                                                       // 282
            }, function() {                                                                                            // 283
              return Spacebars.include(view.lookupTemplate("avatar"));                                                 // 284
            })), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.SPAN({                                                           // 285
              class: "user",                                                                                           // 286
              "data-username": function() {                                                                            // 287
                return Spacebars.mustache(Spacebars.dot(view.lookup("u"), "username"));                                // 288
              },                                                                                                       // 289
              tabindex: "1"                                                                                            // 290
            }, Blaze.View("lookup:u.username", function() {                                                            // 291
              return Spacebars.mustache(Spacebars.dot(view.lookup("u"), "username"));                                  // 292
            })), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.SPAN({                                                           // 293
              class: "info"                                                                                            // 294
            }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.SPAN({                                                           // 295
              class: "time"                                                                                            // 296
            }, Blaze.View("lookup:time", function() {                                                                  // 297
              return Spacebars.mustache(view.lookup("time"));                                                          // 298
            })), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                           // 299
              class: "body",                                                                                           // 300
              dir: "auto"                                                                                              // 301
            }, "\n                                                        packages/rocketchat-livechat/client/views/app ", Blaze.View("lookup:body", function() {
              return Spacebars.makeRaw(Spacebars.mustache(view.lookup("body")));                                       // 303
            }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t" ];          // 304
          }), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.DIV({
            class: "footer"                                                                                            // 306
          }, "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                        // 307
            class: "input-wrapper"                                                                                     // 308
          }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.TEXTAREA({                                                                 // 309
            class: "input-message",                                                                                    // 310
            placeholder: "Type your message"                                                                           // 311
          }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t", HTML.I({                                                // 312
            class: "send-button icon-paper-plane",                                                                     // 313
            "aria-label": function() {                                                                                 // 314
              return Spacebars.mustache(view.lookup("_"), "Send");                                                     // 315
            }                                                                                                          // 316
          }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];                                                             // 317
        }), "\n\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                                // 318
          return Spacebars.call(view.lookup("showOfflineForm"));                                                       // 319
        }, function() {                                                                                                // 320
          return [ "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 321
            class: "offline"                                                                                           // 322
          }, "\n\t\t\t\t\t\t\t\t\t", HTML.P({                                                                          // 323
            class: "offline-message"                                                                                   // 324
          }, Blaze.View("lookup:sampleOfflineMessage", function() {                                                    // 325
            return Spacebars.makeRaw(Spacebars.mustache(view.lookup("sampleOfflineMessage")));                         // 326
          })), "\n\n\t\t\t\t\t\t\t\t\t", HTML.FORM("\n\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                              // 327
            type: "text",                                                                                              // 328
            id: "name",                                                                                                // 329
            name: "name",                                                                                              // 330
            placeholder: function() {                                                                                  // 331
              return Spacebars.mustache(view.lookup("_"), "Type_your_name");                                           // 332
            }                                                                                                          // 333
          }), "\n\n\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                                                 // 334
            type: "email",                                                                                             // 335
            id: "email",                                                                                               // 336
            name: "email",                                                                                             // 337
            placeholder: function() {                                                                                  // 338
              return Spacebars.mustache(view.lookup("_"), "Type_your_email");                                          // 339
            }                                                                                                          // 340
          }), "\n\n\t\t\t\t\t\t\t\t\t\t", HTML.TEXTAREA({                                                              // 341
            id: "message",                                                                                             // 342
            name: "message",                                                                                           // 343
            placeholder: function() {                                                                                  // 344
              return Spacebars.mustache(view.lookup("_"), "Type_your_message");                                        // 345
            },                                                                                                         // 346
            rows: "2"                                                                                                  // 347
          }), "\n\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                   // 348
            class: "buttons"                                                                                           // 349
          }, "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                 // 350
            class: "button primary send"                                                                               // 351
          }, Blaze.View("lookup:_", function() {                                                                       // 352
            return Spacebars.mustache(view.lookup("_"), "Send");                                                       // 353
          })), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];        // 354
        }), "\n\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                                // 355
          return Spacebars.call(view.lookup("showOfflineSuccess"));                                                    // 356
        }, function() {                                                                                                // 357
          return [ "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 358
            class: "offline"                                                                                           // 359
          }, "\n\t\t\t\t\t\t\t\t\t", HTML.P({                                                                          // 360
            class: "message-sent"                                                                                      // 361
          }, Blaze.View("lookup:sampleOfflineSuccessMessage", function() {                                             // 362
            return Spacebars.makeRaw(Spacebars.mustache(view.lookup("sampleOfflineSuccessMessage")));                  // 363
          })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];                                                            // 364
        }), "\n\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                                // 365
          return Spacebars.call(view.lookup("showOfflineUnavailable"));                                                // 366
        }, function() {                                                                                                // 367
          return [ "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 368
            class: "offline"                                                                                           // 369
          }, "\n\t\t\t\t\t\t\t\t\t", HTML.P({                                                                          // 370
            class: "offline-message"                                                                                   // 371
          }, Blaze.View("lookup:sampleOfflineUnavailableMessage", function() {                                         // 372
            return Spacebars.makeRaw(Spacebars.mustache(view.lookup("sampleOfflineUnavailableMessage")));              // 373
          })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];                                                            // 374
        }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                                                                       // 375
      }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t" ];                                                             // 376
    });                                                                                                                // 377
  });                                                                                                                  // 378
}));                                                                                                                   // 379
                                                                                                                       // 380
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"livechatAppearance.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/livechatAppearance.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var moment = void 0;                                                                                                   // 1
module.watch(require("moment"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		moment = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
var toastr = void 0;                                                                                                   // 1
module.watch(require("toastr"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		toastr = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 1);                                                                                                                 // 1
var LivechatAppearance = new Mongo.Collection('livechatAppearance');                                                   // 6
Template.livechatAppearance.helpers({                                                                                  // 8
	previewState: function () {                                                                                           // 9
		return Template.instance().previewState.get();                                                                       // 10
	},                                                                                                                    // 11
	showOnline: function () {                                                                                             // 12
		return Template.instance().previewState.get().indexOf('offline') === -1;                                             // 13
	},                                                                                                                    // 14
	showOfflineForm: function () {                                                                                        // 15
		var state = Template.instance().previewState.get();                                                                  // 16
		return state === 'opened-offline' || state === 'closed-offline';                                                     // 17
	},                                                                                                                    // 18
	showOfflineSuccess: function () {                                                                                     // 19
		return Template.instance().previewState.get() === 'offline-success';                                                 // 20
	},                                                                                                                    // 21
	showOfflineUnavailable: function () {                                                                                 // 22
		return Template.instance().previewState.get() === 'offline-unavailable';                                             // 23
	},                                                                                                                    // 24
	color: function () {                                                                                                  // 25
		return Template.instance().color.get();                                                                              // 26
	},                                                                                                                    // 27
	title: function () {                                                                                                  // 28
		return Template.instance().title.get();                                                                              // 29
	},                                                                                                                    // 30
	colorOffline: function () {                                                                                           // 31
		return Template.instance().colorOffline.get();                                                                       // 32
	},                                                                                                                    // 33
	titleOffline: function () {                                                                                           // 34
		return Template.instance().titleOffline.get();                                                                       // 35
	},                                                                                                                    // 36
	offlineMessage: function () {                                                                                         // 37
		return Template.instance().offlineMessage.get();                                                                     // 38
	},                                                                                                                    // 39
	sampleOfflineMessage: function () {                                                                                   // 40
		return Template.instance().offlineMessage.get().replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br>$2');                // 41
	},                                                                                                                    // 42
	offlineSuccessMessage: function () {                                                                                  // 43
		return Template.instance().offlineSuccessMessage.get();                                                              // 44
	},                                                                                                                    // 45
	sampleOfflineSuccessMessage: function () {                                                                            // 46
		return Template.instance().offlineSuccessMessage.get().replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br>$2');         // 47
	},                                                                                                                    // 48
	displayOfflineFormTrueChecked: function () {                                                                          // 49
		if (Template.instance().displayOfflineForm.get()) {                                                                  // 50
			return 'checked';                                                                                                   // 51
		}                                                                                                                    // 52
	},                                                                                                                    // 53
	displayOfflineFormFalseChecked: function () {                                                                         // 54
		if (!Template.instance().displayOfflineForm.get()) {                                                                 // 55
			return 'checked';                                                                                                   // 56
		}                                                                                                                    // 57
	},                                                                                                                    // 58
	offlineUnavailableMessage: function () {                                                                              // 59
		return Template.instance().offlineUnavailableMessage.get();                                                          // 60
	},                                                                                                                    // 61
	sampleOfflineUnavailableMessage: function () {                                                                        // 62
		return Template.instance().offlineUnavailableMessage.get().replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br>$2');     // 63
	},                                                                                                                    // 64
	emailOffline: function () {                                                                                           // 65
		return Template.instance().offlineEmail.get();                                                                       // 66
	},                                                                                                                    // 67
	sampleColor: function () {                                                                                            // 68
		if (Template.instance().previewState.get().indexOf('offline') !== -1) {                                              // 69
			return Template.instance().colorOffline.get();                                                                      // 70
		} else {                                                                                                             // 71
			return Template.instance().color.get();                                                                             // 72
		}                                                                                                                    // 73
	},                                                                                                                    // 74
	sampleTitle: function () {                                                                                            // 75
		if (Template.instance().previewState.get().indexOf('offline') !== -1) {                                              // 76
			return Template.instance().titleOffline.get();                                                                      // 77
		} else {                                                                                                             // 78
			return Template.instance().title.get();                                                                             // 79
		}                                                                                                                    // 80
	},                                                                                                                    // 81
	sampleData: function () {                                                                                             // 82
		return {                                                                                                             // 83
			messages: [{                                                                                                        // 84
				_id: Random.id(),                                                                                                  // 86
				u: {                                                                                                               // 87
					username: 'guest'                                                                                                 // 88
				},                                                                                                                 // 87
				time: moment(this.ts).format('LT'),                                                                                // 90
				date: moment(this.ts).format('LL'),                                                                                // 91
				body: 'Hello',                                                                                                     // 92
				sequential: null                                                                                                   // 93
			}, {                                                                                                                // 85
				_id: Random.id(),                                                                                                  // 96
				u: {                                                                                                               // 97
					username: 'rocketchat-agent'                                                                                      // 98
				},                                                                                                                 // 97
				time: moment(this.ts).format('LT'),                                                                                // 100
				date: moment(this.ts).format('LL'),                                                                                // 101
				body: 'Hey, what can I help you with?',                                                                            // 102
				sequential: null                                                                                                   // 103
			}, {                                                                                                                // 95
				_id: Random.id(),                                                                                                  // 106
				u: {                                                                                                               // 107
					username: 'guest'                                                                                                 // 108
				},                                                                                                                 // 107
				time: moment(this.ts).format('LT'),                                                                                // 110
				date: moment(this.ts).format('LL'),                                                                                // 111
				body: 'I\'m looking for informations about your product.',                                                         // 112
				sequential: null                                                                                                   // 113
			}, {                                                                                                                // 105
				_id: Random.id(),                                                                                                  // 116
				u: {                                                                                                               // 117
					username: 'rocketchat-agent'                                                                                      // 118
				},                                                                                                                 // 117
				time: moment(this.ts).format('LT'),                                                                                // 120
				date: moment(this.ts).format('LL'),                                                                                // 121
				body: 'Our product is open source, you can do what you want with it! =D',                                          // 122
				sequential: null                                                                                                   // 123
			}, {                                                                                                                // 115
				_id: Random.id(),                                                                                                  // 126
				u: {                                                                                                               // 127
					username: 'guest'                                                                                                 // 128
				},                                                                                                                 // 127
				time: moment(this.ts).format('LT'),                                                                                // 130
				date: moment(this.ts).format('LL'),                                                                                // 131
				body: 'Yay, thanks. That\'s awesome.',                                                                             // 132
				sequential: null                                                                                                   // 133
			}, {                                                                                                                // 125
				_id: Random.id(),                                                                                                  // 136
				u: {                                                                                                               // 137
					username: 'rocketchat-agent'                                                                                      // 138
				},                                                                                                                 // 137
				time: moment(this.ts).format('LT'),                                                                                // 140
				date: moment(this.ts).format('LL'),                                                                                // 141
				body: 'You\'re welcome.',                                                                                          // 142
				sequential: null                                                                                                   // 143
			}]                                                                                                                  // 135
		};                                                                                                                   // 83
	}                                                                                                                     // 147
});                                                                                                                    // 8
Template.livechatAppearance.onCreated(function () {                                                                    // 150
	var _this = this;                                                                                                     // 150
                                                                                                                       //
	this.subscribe('livechat:appearance');                                                                                // 151
	this.previewState = new ReactiveVar('opened');                                                                        // 153
	this.title = new ReactiveVar(null);                                                                                   // 155
	this.color = new ReactiveVar(null);                                                                                   // 156
	this.displayOfflineForm = new ReactiveVar(null);                                                                      // 158
	this.offlineUnavailableMessage = new ReactiveVar(null);                                                               // 159
	this.offlineMessage = new ReactiveVar(null);                                                                          // 160
	this.offlineSuccessMessage = new ReactiveVar(null);                                                                   // 161
	this.titleOffline = new ReactiveVar(null);                                                                            // 162
	this.colorOffline = new ReactiveVar(null);                                                                            // 163
	this.offlineEmail = new ReactiveVar(null);                                                                            // 164
	this.autorun(function () {                                                                                            // 166
		var setting = LivechatAppearance.findOne('Livechat_title');                                                          // 167
                                                                                                                       //
		_this.title.set(setting && setting.value);                                                                           // 168
	});                                                                                                                   // 169
	this.autorun(function () {                                                                                            // 170
		var setting = LivechatAppearance.findOne('Livechat_title_color');                                                    // 171
                                                                                                                       //
		_this.color.set(setting && setting.value);                                                                           // 172
	});                                                                                                                   // 173
	this.autorun(function () {                                                                                            // 174
		var setting = LivechatAppearance.findOne('Livechat_display_offline_form');                                           // 175
                                                                                                                       //
		_this.displayOfflineForm.set(setting && setting.value);                                                              // 176
	});                                                                                                                   // 177
	this.autorun(function () {                                                                                            // 178
		var setting = LivechatAppearance.findOne('Livechat_offline_form_unavailable');                                       // 179
                                                                                                                       //
		_this.offlineUnavailableMessage.set(setting && setting.value);                                                       // 180
	});                                                                                                                   // 181
	this.autorun(function () {                                                                                            // 182
		var setting = LivechatAppearance.findOne('Livechat_offline_message');                                                // 183
                                                                                                                       //
		_this.offlineMessage.set(setting && setting.value);                                                                  // 184
	});                                                                                                                   // 185
	this.autorun(function () {                                                                                            // 186
		var setting = LivechatAppearance.findOne('Livechat_offline_success_message');                                        // 187
                                                                                                                       //
		_this.offlineSuccessMessage.set(setting && setting.value);                                                           // 188
	});                                                                                                                   // 189
	this.autorun(function () {                                                                                            // 190
		var setting = LivechatAppearance.findOne('Livechat_offline_title');                                                  // 191
                                                                                                                       //
		_this.titleOffline.set(setting && setting.value);                                                                    // 192
	});                                                                                                                   // 193
	this.autorun(function () {                                                                                            // 194
		var setting = LivechatAppearance.findOne('Livechat_offline_title_color');                                            // 195
                                                                                                                       //
		_this.colorOffline.set(setting && setting.value);                                                                    // 196
	});                                                                                                                   // 197
	this.autorun(function () {                                                                                            // 198
		var setting = LivechatAppearance.findOne('Livechat_offline_email');                                                  // 199
                                                                                                                       //
		_this.offlineEmail.set(setting && setting.value);                                                                    // 200
	});                                                                                                                   // 201
});                                                                                                                    // 202
Template.livechatAppearance.events({                                                                                   // 204
	'change .preview-mode': function (e, instance) {                                                                      // 205
		instance.previewState.set(e.currentTarget.value);                                                                    // 206
	},                                                                                                                    // 207
	'change .preview-settings, keyup .preview-settings': function (e, instance) {                                         // 208
		var value = e.currentTarget.value;                                                                                   // 209
                                                                                                                       //
		if (e.currentTarget.type === 'radio') {                                                                              // 210
			value = value === 'true';                                                                                           // 211
		}                                                                                                                    // 212
                                                                                                                       //
		instance[e.currentTarget.name].set(value);                                                                           // 213
	},                                                                                                                    // 214
	'click .reset-settings': function (e, instance) {                                                                     // 215
		e.preventDefault();                                                                                                  // 216
		var settingTitle = LivechatAppearance.findOne('Livechat_title');                                                     // 218
		instance.title.set(settingTitle && settingTitle.value);                                                              // 219
		var settingTitleColor = LivechatAppearance.findOne('Livechat_title_color');                                          // 221
		instance.color.set(settingTitleColor && settingTitleColor.value);                                                    // 222
		var settingDiplayOffline = LivechatAppearance.findOne('Livechat_display_offline_form');                              // 224
		instance.displayOfflineForm.set(settingDiplayOffline && settingDiplayOffline.value);                                 // 225
		var settingFormUnavailable = LivechatAppearance.findOne('Livechat_offline_form_unavailable');                        // 227
		instance.offlineUnavailableMessage.set(settingFormUnavailable && settingFormUnavailable.value);                      // 228
		var settingOfflineMessage = LivechatAppearance.findOne('Livechat_offline_message');                                  // 230
		instance.offlineMessage.set(settingOfflineMessage && settingOfflineMessage.value);                                   // 231
		var settingOfflineSuccess = LivechatAppearance.findOne('Livechat_offline_success_message');                          // 233
		instance.offlineSuccessMessage.set(settingOfflineSuccess && settingOfflineSuccess.value);                            // 234
		var settingOfflineTitle = LivechatAppearance.findOne('Livechat_offline_title');                                      // 236
		instance.titleOffline.set(settingOfflineTitle && settingOfflineTitle.value);                                         // 237
		var settingOfflineTitleColor = LivechatAppearance.findOne('Livechat_offline_title_color');                           // 239
		instance.colorOffline.set(settingOfflineTitleColor && settingOfflineTitleColor.value);                               // 240
	},                                                                                                                    // 241
	'submit .rocket-form': function (e, instance) {                                                                       // 242
		e.preventDefault();                                                                                                  // 243
		var settings = [{                                                                                                    // 245
			_id: 'Livechat_title',                                                                                              // 247
			value: _.trim(instance.title.get())                                                                                 // 248
		}, {                                                                                                                 // 246
			_id: 'Livechat_title_color',                                                                                        // 251
			value: instance.color.get()                                                                                         // 252
		}, {                                                                                                                 // 250
			_id: 'Livechat_display_offline_form',                                                                               // 255
			value: instance.displayOfflineForm.get()                                                                            // 256
		}, {                                                                                                                 // 254
			_id: 'Livechat_offline_form_unavailable',                                                                           // 259
			value: _.trim(instance.offlineUnavailableMessage.get())                                                             // 260
		}, {                                                                                                                 // 258
			_id: 'Livechat_offline_message',                                                                                    // 263
			value: _.trim(instance.offlineMessage.get())                                                                        // 264
		}, {                                                                                                                 // 262
			_id: 'Livechat_offline_success_message',                                                                            // 267
			value: _.trim(instance.offlineSuccessMessage.get())                                                                 // 268
		}, {                                                                                                                 // 266
			_id: 'Livechat_offline_title',                                                                                      // 271
			value: _.trim(instance.titleOffline.get())                                                                          // 272
		}, {                                                                                                                 // 270
			_id: 'Livechat_offline_title_color',                                                                                // 275
			value: instance.colorOffline.get()                                                                                  // 276
		}, {                                                                                                                 // 274
			_id: 'Livechat_offline_email',                                                                                      // 279
			value: instance.$('#emailOffline').val()                                                                            // 280
		}];                                                                                                                  // 278
		Meteor.call('livechat:saveAppearance', settings, function (err /*, success*/) {                                      // 284
			if (err) {                                                                                                          // 285
				return handleError(err);                                                                                           // 286
			}                                                                                                                   // 287
                                                                                                                       //
			toastr.success(t('Settings_updated'));                                                                              // 288
		});                                                                                                                  // 289
	}                                                                                                                     // 290
});                                                                                                                    // 204
Template.livechatAppearance.onRendered(function () {                                                                   // 293
	Meteor.setTimeout(function () {                                                                                       // 294
		$('.colorpicker-input').each(function (index, el) {                                                                  // 295
			new jscolor(el);                                                                                                    // 296
		});                                                                                                                  // 297
	}, 500);                                                                                                              // 298
});                                                                                                                    // 299
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.livechatCurrentChats.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/template.livechatCurrentChats.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("livechatCurrentChats");                                                                          // 2
Template["livechatCurrentChats"] = new Template("Template.livechatCurrentChats", (function() {                         // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return "view-livechat-manager";                                                                                    // 6
  }, function() {                                                                                                      // 7
    return Spacebars.include(view.lookupTemplate("requiresPermission"), function() {                                   // 8
      return [ "\n\t\t", HTML.FIELDSET("\n\t\t\t", HTML.FORM({                                                         // 9
        class: "form-inline",                                                                                          // 10
        method: "post"                                                                                                 // 11
      }, "\n\t\t\t\t", HTML.DIV({                                                                                      // 12
        class: "form-group"                                                                                            // 13
      }, "\n\t\t\t\t\t", HTML.LABEL({                                                                                  // 14
        for: "name"                                                                                                    // 15
      }, Blaze.View("lookup:_", function() {                                                                           // 16
        return Spacebars.mustache(view.lookup("_"), "Name");                                                           // 17
      })), "\n\t\t\t\t\t", HTML.INPUT({                                                                                // 18
        type: "text",                                                                                                  // 19
        name: "name"                                                                                                   // 20
      }), "\n\t\t\t\t"), "\n\n\t\t\t\t", HTML.DIV({                                                                    // 21
        class: "form-group"                                                                                            // 22
      }, "\n\t\t\t\t\t", HTML.LABEL({                                                                                  // 23
        for: "agent"                                                                                                   // 24
      }, Blaze.View("lookup:_", function() {                                                                           // 25
        return Spacebars.mustache(view.lookup("_"), "Served_By");                                                      // 26
      })), "\n\t\t\t\t\t", HTML.SELECT({                                                                               // 27
        name: "agent"                                                                                                  // 28
      }, "\n\t\t\t\t\t\t", HTML.OPTION({                                                                               // 29
        value: ""                                                                                                      // 30
      }), "\n\t\t\t\t\t\t", Blaze.Each(function() {                                                                    // 31
        return Spacebars.call(view.lookup("agents"));                                                                  // 32
      }, function() {                                                                                                  // 33
        return [ "\n\t\t\t\t\t\t\t", HTML.OPTION({                                                                     // 34
          value: function() {                                                                                          // 35
            return Spacebars.mustache(view.lookup("_id"));                                                             // 36
          }                                                                                                            // 37
        }, Blaze.View("lookup:username", function() {                                                                  // 38
          return Spacebars.mustache(view.lookup("username"));                                                          // 39
        })), "\n\t\t\t\t\t\t" ];                                                                                       // 40
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                     // 41
        class: "form-group"                                                                                            // 42
      }, "\n\t\t\t\t\t", HTML.LABEL({                                                                                  // 43
        for: "status"                                                                                                  // 44
      }, Blaze.View("lookup:_", function() {                                                                           // 45
        return Spacebars.mustache(view.lookup("_"), "Status");                                                         // 46
      })), "\n\t\t\t\t\t", HTML.SELECT({                                                                               // 47
        name: "status"                                                                                                 // 48
      }, "\n\t\t\t\t\t\t", HTML.OPTION({                                                                               // 49
        value: ""                                                                                                      // 50
      }), "\n\t\t\t\t\t\t", HTML.OPTION({                                                                              // 51
        value: "opened"                                                                                                // 52
      }, Blaze.View("lookup:_", function() {                                                                           // 53
        return Spacebars.mustache(view.lookup("_"), "Opened");                                                         // 54
      })), "\n\t\t\t\t\t\t", HTML.OPTION({                                                                             // 55
        value: "closed"                                                                                                // 56
      }, Blaze.View("lookup:_", function() {                                                                           // 57
        return Spacebars.mustache(view.lookup("_"), "Closed");                                                         // 58
      })), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                    // 59
        class: "form-group input-daterange"                                                                            // 60
      }, "\n\t\t\t\t\t", HTML.SPAN({                                                                                   // 61
        class: "input-group-addon"                                                                                     // 62
      }, Blaze.View("lookup:_", function() {                                                                           // 63
        return Spacebars.mustache(view.lookup("_"), "Date_From");                                                      // 64
      })), "\n\t\t\t\t\t", HTML.INPUT({                                                                                // 65
        type: "text",                                                                                                  // 66
        class: "form-control",                                                                                         // 67
        id: "from",                                                                                                    // 68
        name: "from"                                                                                                   // 69
      }), "\n\t\t\t\t\t\t", HTML.SPAN({                                                                                // 70
        class: "input-group-addon"                                                                                     // 71
      }, Blaze.View("lookup:_", function() {                                                                           // 72
        return Spacebars.mustache(view.lookup("_"), "Date_to");                                                        // 73
      })), "\n\t\t\t\t\t", HTML.INPUT({                                                                                // 74
        type: "text",                                                                                                  // 75
        class: "form-control",                                                                                         // 76
        id: "to",                                                                                                      // 77
        name: "to"                                                                                                     // 78
      }), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.BUTTON({                                                                   // 79
        class: "button"                                                                                                // 80
      }, Blaze.View("lookup:_", function() {                                                                           // 81
        return Spacebars.mustache(view.lookup("_"), "Filter");                                                         // 82
      })), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                // 83
        class: "list"                                                                                                  // 84
      }, "\n\t\t\t", HTML.TABLE("\n\t\t\t\t", HTML.THEAD("\n\t\t\t\t\t", HTML.TR("\n\t\t\t\t\t\t", HTML.TH({           // 85
        width: "25%"                                                                                                   // 86
      }, Blaze.View("lookup:_", function() {                                                                           // 87
        return Spacebars.mustache(view.lookup("_"), "Name");                                                           // 88
      })), "\n\t\t\t\t\t\t", HTML.TH({                                                                                 // 89
        width: "25%"                                                                                                   // 90
      }, Blaze.View("lookup:_", function() {                                                                           // 91
        return Spacebars.mustache(view.lookup("_"), "Served_By");                                                      // 92
      })), "\n\t\t\t\t\t\t", HTML.TH({                                                                                 // 93
        width: "15%"                                                                                                   // 94
      }, Blaze.View("lookup:_", function() {                                                                           // 95
        return Spacebars.mustache(view.lookup("_"), "Started_At");                                                     // 96
      })), "\n\t\t\t\t\t\t", HTML.TH({                                                                                 // 97
        width: "15%"                                                                                                   // 98
      }, Blaze.View("lookup:_", function() {                                                                           // 99
        return Spacebars.mustache(view.lookup("_"), "Last_Message_At");                                                // 100
      })), "\n\t\t\t\t\t\t", HTML.TH({                                                                                 // 101
        width: "10%"                                                                                                   // 102
      }, Blaze.View("lookup:_", function() {                                                                           // 103
        return Spacebars.mustache(view.lookup("_"), "Status");                                                         // 104
      })), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.TBODY("\n\t\t\t\t\t", Blaze.Each(function() {            // 105
        return Spacebars.call(view.lookup("livechatRoom"));                                                            // 106
      }, function() {                                                                                                  // 107
        return [ "\n\t\t\t\t\t\t", HTML.TR({                                                                           // 108
          class: "row-link"                                                                                            // 109
        }, "\n\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:label", function() {                                         // 110
          return Spacebars.mustache(view.lookup("label"));                                                             // 111
        })), "\n\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:servedBy", function() {                                    // 112
          return Spacebars.mustache(view.lookup("servedBy"));                                                          // 113
        })), "\n\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:startedAt", function() {                                   // 114
          return Spacebars.mustache(view.lookup("startedAt"));                                                         // 115
        })), "\n\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:lastMessage", function() {                                 // 116
          return Spacebars.mustache(view.lookup("lastMessage"));                                                       // 117
        })), "\n\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:status", function() {                                      // 118
          return Spacebars.mustache(view.lookup("status"));                                                            // 119
        })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                                                                      // 120
      }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.DIV({                                                  // 121
        class: "text-center"                                                                                           // 122
      }, "\n\t\t\t", HTML.BUTTON({                                                                                     // 123
        class: "button load-more"                                                                                      // 124
      }, Blaze.View("lookup:_", function() {                                                                           // 125
        return Spacebars.mustache(view.lookup("_"), "Load_more");                                                      // 126
      })), "\n\t\t"), "\n\t" ];                                                                                        // 127
    });                                                                                                                // 128
  });                                                                                                                  // 129
}));                                                                                                                   // 130
                                                                                                                       // 131
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"livechatCurrentChats.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/livechatCurrentChats.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var moment = void 0;                                                                                                   // 1
module.watch(require("moment"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		moment = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
var LivechatRoom = new Mongo.Collection('livechatRoom');                                                               // 3
Template.livechatCurrentChats.helpers({                                                                                // 5
	livechatRoom: function () {                                                                                           // 6
		return LivechatRoom.find({                                                                                           // 7
			t: 'l'                                                                                                              // 7
		}, {                                                                                                                 // 7
			sort: {                                                                                                             // 7
				ts: -1                                                                                                             // 7
			}                                                                                                                   // 7
		});                                                                                                                  // 7
	},                                                                                                                    // 8
	startedAt: function () {                                                                                              // 9
		return moment(this.ts).format('L LTS');                                                                              // 10
	},                                                                                                                    // 11
	lastMessage: function () {                                                                                            // 12
		return moment(this.lm).format('L LTS');                                                                              // 13
	},                                                                                                                    // 14
	servedBy: function () {                                                                                               // 15
		return this.servedBy && this.servedBy.username;                                                                      // 16
	},                                                                                                                    // 17
	status: function () {                                                                                                 // 18
		return this.open ? t('Opened') : t('Closed');                                                                        // 19
	},                                                                                                                    // 20
	agents: function () {                                                                                                 // 21
		return AgentUsers.find({}, {                                                                                         // 22
			sort: {                                                                                                             // 22
				name: 1                                                                                                            // 22
			}                                                                                                                   // 22
		});                                                                                                                  // 22
	}                                                                                                                     // 23
});                                                                                                                    // 5
Template.livechatCurrentChats.events({                                                                                 // 26
	'click .row-link': function () {                                                                                      // 27
		FlowRouter.go('live', {                                                                                              // 28
			code: this.code                                                                                                     // 28
		});                                                                                                                  // 28
	},                                                                                                                    // 29
	'click .load-more': function (event, instance) {                                                                      // 30
		instance.limit.set(instance.limit.get() + 20);                                                                       // 31
	},                                                                                                                    // 32
	'submit form': function (event, instance) {                                                                           // 33
		event.preventDefault();                                                                                              // 34
		var filter = {};                                                                                                     // 36
		$(':input', event.currentTarget).each(function () {                                                                  // 37
			if (this.name) {                                                                                                    // 38
				filter[this.name] = $(this).val();                                                                                 // 39
			}                                                                                                                   // 40
		});                                                                                                                  // 41
                                                                                                                       //
		if (!_.isEmpty(filter.from)) {                                                                                       // 43
			filter.from = moment(filter.from, moment.localeData().longDateFormat('L')).toDate();                                // 44
		} else {                                                                                                             // 45
			delete filter.from;                                                                                                 // 46
		}                                                                                                                    // 47
                                                                                                                       //
		if (!_.isEmpty(filter.to)) {                                                                                         // 49
			filter.to = moment(filter.to, moment.localeData().longDateFormat('L')).toDate();                                    // 50
		} else {                                                                                                             // 51
			delete filter.to;                                                                                                   // 52
		}                                                                                                                    // 53
                                                                                                                       //
		instance.filter.set(filter);                                                                                         // 55
		instance.limit.set(20);                                                                                              // 56
	}                                                                                                                     // 57
});                                                                                                                    // 26
Template.livechatCurrentChats.onCreated(function () {                                                                  // 60
	var _this = this;                                                                                                     // 60
                                                                                                                       //
	this.limit = new ReactiveVar(20);                                                                                     // 61
	this.filter = new ReactiveVar({});                                                                                    // 62
	this.subscribe('livechat:agents');                                                                                    // 64
	this.autorun(function () {                                                                                            // 66
		_this.subscribe('livechat:rooms', _this.filter.get(), 0, _this.limit.get());                                         // 67
	});                                                                                                                   // 68
});                                                                                                                    // 69
Template.livechatCurrentChats.onRendered(function () {                                                                 // 71
	this.$('.input-daterange').datepicker({                                                                               // 72
		autoclose: true,                                                                                                     // 73
		todayHighlight: true,                                                                                                // 74
		format: moment.localeData().longDateFormat('L').toLowerCase()                                                        // 75
	});                                                                                                                   // 72
});                                                                                                                    // 77
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.livechatCustomFields.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/template.livechatCustomFields.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("livechatCustomFields");                                                                          // 2
Template["livechatCustomFields"] = new Template("Template.livechatCustomFields", (function() {                         // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return "view-livechat-manager";                                                                                    // 6
  }, function() {                                                                                                      // 7
    return Spacebars.include(view.lookupTemplate("requiresPermission"), function() {                                   // 8
      return [ "\n\t\t", HTML.DIV({                                                                                    // 9
        class: "list"                                                                                                  // 10
      }, "\n\t\t\t", HTML.TABLE("\n\t\t\t\t", HTML.THEAD("\n\t\t\t\t\t", HTML.TR("\n\t\t\t\t\t\t", HTML.TH({           // 11
        width: "25%"                                                                                                   // 12
      }, Blaze.View("lookup:_", function() {                                                                           // 13
        return Spacebars.mustache(view.lookup("_"), "Field");                                                          // 14
      })), "\n\t\t\t\t\t\t", HTML.TH({                                                                                 // 15
        width: "25%"                                                                                                   // 16
      }, Blaze.View("lookup:_", function() {                                                                           // 17
        return Spacebars.mustache(view.lookup("_"), "Label");                                                          // 18
      })), "\n\t\t\t\t\t\t", HTML.TH({                                                                                 // 19
        width: "25%"                                                                                                   // 20
      }, Blaze.View("lookup:_", function() {                                                                           // 21
        return Spacebars.mustache(view.lookup("_"), "Scope");                                                          // 22
      })), "\n\t\t\t\t\t\t", HTML.TH({                                                                                 // 23
        width: "25%"                                                                                                   // 24
      }, Blaze.View("lookup:_", function() {                                                                           // 25
        return Spacebars.mustache(view.lookup("_"), "Visibility");                                                     // 26
      })), "\n\t\t\t\t\t\t", HTML.TH(Blaze.View("lookup:_", function() {                                               // 27
        return Spacebars.mustache(view.lookup("_"), "Delete");                                                         // 28
      })), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.TBODY("\n\t\t\t\t\t", Blaze.Each(function() {            // 29
        return Spacebars.call(view.lookup("customFields"));                                                            // 30
      }, function() {                                                                                                  // 31
        return [ "\n\t\t\t\t\t\t", HTML.TR({                                                                           // 32
          class: "custom-field-info row-link",                                                                         // 33
          "data-id": function() {                                                                                      // 34
            return Spacebars.mustache(view.lookup("_id"));                                                             // 35
          }                                                                                                            // 36
        }, "\n\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:_id", function() {                                           // 37
          return Spacebars.mustache(view.lookup("_id"));                                                               // 38
        })), "\n\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:label", function() {                                       // 39
          return Spacebars.mustache(view.lookup("label"));                                                             // 40
        })), "\n\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:scope", function() {                                       // 41
          return Spacebars.mustache(view.lookup("scope"));                                                             // 42
        })), "\n\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:visibility", function() {                                  // 43
          return Spacebars.mustache(view.lookup("visibility"));                                                        // 44
        })), "\n\t\t\t\t\t\t\t", HTML.TD(HTML.A({                                                                      // 45
          href: "#remove",                                                                                             // 46
          class: "remove-custom-field"                                                                                 // 47
        }, HTML.I({                                                                                                    // 48
          class: "icon-trash"                                                                                          // 49
        }))), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                                                                     // 50
      }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.A({                                                    // 51
        href: function() {                                                                                             // 52
          return Spacebars.mustache(view.lookup("pathFor"), "livechat-customfield-new");                               // 53
        },                                                                                                             // 54
        class: "button primary"                                                                                        // 55
      }, Blaze.View("lookup:_", function() {                                                                           // 56
        return Spacebars.mustache(view.lookup("_"), "New_Custom_Field");                                               // 57
      })), "\n\t" ];                                                                                                   // 58
    });                                                                                                                // 59
  });                                                                                                                  // 60
}));                                                                                                                   // 61
                                                                                                                       // 62
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"livechatCustomFields.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/livechatCustomFields.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.livechatCustomFields.helpers({                                                                                // 1
	customFields: function () {                                                                                           // 2
		return LivechatCustomField.find();                                                                                   // 3
	}                                                                                                                     // 4
});                                                                                                                    // 1
Template.livechatCustomFields.events({                                                                                 // 7
	'click .remove-custom-field': function (e) {                                                                          // 8
		var _this = this;                                                                                                    // 8
                                                                                                                       //
		e.preventDefault();                                                                                                  // 9
		e.stopPropagation();                                                                                                 // 10
		swal({                                                                                                               // 12
			title: t('Are_you_sure'),                                                                                           // 13
			type: 'warning',                                                                                                    // 14
			showCancelButton: true,                                                                                             // 15
			confirmButtonColor: '#DD6B55',                                                                                      // 16
			confirmButtonText: t('Yes'),                                                                                        // 17
			cancelButtonText: t('Cancel'),                                                                                      // 18
			closeOnConfirm: false,                                                                                              // 19
			html: false                                                                                                         // 20
		}, function () {                                                                                                     // 12
			Meteor.call('livechat:removeCustomField', _this._id, function (error /*, result*/) {                                // 22
				if (error) {                                                                                                       // 23
					return handleError(error);                                                                                        // 24
				}                                                                                                                  // 25
                                                                                                                       //
				swal({                                                                                                             // 26
					title: t('Removed'),                                                                                              // 27
					text: t('Field_removed'),                                                                                         // 28
					type: 'success',                                                                                                  // 29
					timer: 1000,                                                                                                      // 30
					showConfirmButton: false                                                                                          // 31
				});                                                                                                                // 26
			});                                                                                                                 // 33
		});                                                                                                                  // 34
	},                                                                                                                    // 35
	'click .custom-field-info': function (e /*, instance*/) {                                                             // 37
		e.preventDefault();                                                                                                  // 38
		FlowRouter.go('livechat-customfield-edit', {                                                                         // 39
			_id: this._id                                                                                                       // 39
		});                                                                                                                  // 39
	}                                                                                                                     // 40
});                                                                                                                    // 7
Template.livechatCustomFields.onCreated(function () {                                                                  // 43
	this.subscribe('livechat:customFields');                                                                              // 44
});                                                                                                                    // 45
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.livechatCustomFieldForm.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/template.livechatCustomFieldForm.js                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("livechatCustomFieldForm");                                                                       // 2
Template["livechatCustomFieldForm"] = new Template("Template.livechatCustomFieldForm", (function() {                   // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return "view-livechat-manager";                                                                                    // 6
  }, function() {                                                                                                      // 7
    return Spacebars.include(view.lookupTemplate("requiresPermission"), function() {                                   // 8
      return [ "\n\t\t", HTML.FORM({                                                                                   // 9
        id: "customField-form",                                                                                        // 10
        "data-id": function() {                                                                                        // 11
          return Spacebars.mustache(Spacebars.dot(view.lookup("customField"), "_id"));                                 // 12
        }                                                                                                              // 13
      }, "\n\t\t\t", HTML.DIV({                                                                                        // 14
        class: "rocket-form"                                                                                           // 15
      }, "\n\t\t\t\t", Blaze.If(function() {                                                                           // 16
        return Spacebars.call(view.templateInstance().subscriptionsReady());                                           // 17
      }, function() {                                                                                                  // 18
        return [ "\n\t\t\t\t\t", HTML.FIELDSET("\n\t\t\t\t\t\t", HTML.DIV({                                            // 19
          class: "input-line"                                                                                          // 20
        }, "\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                          // 21
          return Spacebars.mustache(view.lookup("_"), "Field");                                                        // 22
        })), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", HTML.INPUT({                                           // 23
          type: "text",                                                                                                // 24
          name: "field",                                                                                               // 25
          value: function() {                                                                                          // 26
            return Spacebars.mustache(Spacebars.dot(view.lookup("customField"), "_id"));                               // 27
          },                                                                                                           // 28
          readonly: function() {                                                                                       // 29
            return Spacebars.mustache(view.lookup("$exists"), Spacebars.dot(view.lookup("customField"), "_id"));       // 30
          },                                                                                                           // 31
          placeholder: function() {                                                                                    // 32
            return Spacebars.mustache(view.lookup("_"), "Field");                                                      // 33
          }                                                                                                            // 34
        }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({                                       // 35
          class: "input-line"                                                                                          // 36
        }, "\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                          // 37
          return Spacebars.mustache(view.lookup("_"), "Label");                                                        // 38
        })), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", HTML.INPUT({                                           // 39
          type: "text",                                                                                                // 40
          name: "label",                                                                                               // 41
          value: function() {                                                                                          // 42
            return Spacebars.mustache(Spacebars.dot(view.lookup("customField"), "label"));                             // 43
          },                                                                                                           // 44
          placeholder: function() {                                                                                    // 45
            return Spacebars.mustache(view.lookup("_"), "Label");                                                      // 46
          }                                                                                                            // 47
        }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({                                       // 48
          class: "input-line"                                                                                          // 49
        }, "\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                          // 50
          return Spacebars.mustache(view.lookup("_"), "Scope");                                                        // 51
        })), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", HTML.SELECT({                                          // 52
          name: "scope"                                                                                                // 53
        }, "\n\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                       // 54
          value: "visitor",                                                                                            // 55
          selected: function() {                                                                                       // 56
            return Spacebars.mustache(view.lookup("$eq"), Spacebars.dot(view.lookup("customField"), "scope"), "visitor");
          }                                                                                                            // 58
        }, Blaze.View("lookup:_", function() {                                                                         // 59
          return Spacebars.mustache(view.lookup("_"), "Visitor");                                                      // 60
        })), "\n\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                     // 61
          value: "room",                                                                                               // 62
          selected: function() {                                                                                       // 63
            return Spacebars.mustache(view.lookup("$eq"), Spacebars.dot(view.lookup("customField"), "scope"), "room");
          }                                                                                                            // 65
        }, Blaze.View("lookup:_", function() {                                                                         // 66
          return Spacebars.mustache(view.lookup("_"), "Room");                                                         // 67
        })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({               // 68
          class: "input-line"                                                                                          // 69
        }, "\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                          // 70
          return Spacebars.mustache(view.lookup("_"), "Visibility");                                                   // 71
        })), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", HTML.SELECT({                                          // 72
          name: "visibility"                                                                                           // 73
        }, "\n\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                       // 74
          value: "visible",                                                                                            // 75
          selected: function() {                                                                                       // 76
            return Spacebars.mustache(view.lookup("$eq"), Spacebars.dot(view.lookup("customField"), "visibility"), "visible");
          }                                                                                                            // 78
        }, Blaze.View("lookup:_", function() {                                                                         // 79
          return Spacebars.mustache(view.lookup("_"), "Visible");                                                      // 80
        })), "\n\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                     // 81
          value: "hidden",                                                                                             // 82
          selected: function() {                                                                                       // 83
            return Spacebars.mustache(view.lookup("$eq"), Spacebars.dot(view.lookup("customField"), "visibility"), "hidden");
          }                                                                                                            // 85
        }, Blaze.View("lookup:_", function() {                                                                         // 86
          return Spacebars.mustache(view.lookup("_"), "Hidden");                                                       // 87
        })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({
          class: "submit"                                                                                              // 89
        }, "\n\t\t\t\t\t\t", HTML.BUTTON({                                                                             // 90
          class: "button back",                                                                                        // 91
          type: "button"                                                                                               // 92
        }, HTML.I({                                                                                                    // 93
          class: "icon-left-big"                                                                                       // 94
        }), HTML.SPAN(Blaze.View("lookup:_", function() {                                                              // 95
          return Spacebars.mustache(view.lookup("_"), "Back");                                                         // 96
        }))), "\n\t\t\t\t\t\t", HTML.BUTTON({                                                                          // 97
          class: "button primary save"                                                                                 // 98
        }, HTML.I({                                                                                                    // 99
          class: "icon-floppy"                                                                                         // 100
        }), HTML.SPAN(Blaze.View("lookup:_", function() {                                                              // 101
          return Spacebars.mustache(view.lookup("_"), "Save");                                                         // 102
        }))), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                         // 103
      }, function() {                                                                                                  // 104
        return [ "\n\t\t\t\t\t", Spacebars.include(view.lookupTemplate("loading")), "\n\t\t\t\t" ];                    // 105
      }), "\n\t\t\t"), "\n\t\t"), "\n\t" ];                                                                            // 106
    });                                                                                                                // 107
  });                                                                                                                  // 108
}));                                                                                                                   // 109
                                                                                                                       // 110
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"livechatCustomFieldForm.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/livechatCustomFieldForm.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var toastr = void 0;                                                                                                   // 1
module.watch(require("toastr"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		toastr = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
Template.livechatCustomFieldForm.helpers({                                                                             // 2
	customField: function () {                                                                                            // 3
		return Template.instance().customField.get();                                                                        // 4
	}                                                                                                                     // 5
});                                                                                                                    // 2
Template.livechatCustomFieldForm.events({                                                                              // 8
	'submit #customField-form': function (e, instance) {                                                                  // 9
		e.preventDefault();                                                                                                  // 10
		var $btn = instance.$('button.save');                                                                                // 11
                                                                                                                       //
		var _id = $(e.currentTarget).data('id');                                                                             // 13
                                                                                                                       //
		var field = instance.$('input[name=field]').val();                                                                   // 14
		var label = instance.$('input[name=label]').val();                                                                   // 15
		var scope = instance.$('select[name=scope]').val();                                                                  // 16
		var visibility = instance.$('select[name=visibility]').val();                                                        // 17
                                                                                                                       //
		if (!/^[0-9a-zA-Z-_]+$/.test(field)) {                                                                               // 19
			return toastr.error(t('error-invalid-custom-field-name'));                                                          // 20
		}                                                                                                                    // 21
                                                                                                                       //
		if (label.trim() === '') {                                                                                           // 23
			return toastr.error(t('Please_fill_a_label'));                                                                      // 24
		}                                                                                                                    // 25
                                                                                                                       //
		var oldBtnValue = $btn.html();                                                                                       // 27
		$btn.html(t('Saving'));                                                                                              // 28
		var customFieldData = {                                                                                              // 30
			field: field,                                                                                                       // 31
			label: label,                                                                                                       // 32
			scope: scope.trim(),                                                                                                // 33
			visibility: visibility.trim()                                                                                       // 34
		};                                                                                                                   // 30
		Meteor.call('livechat:saveCustomField', _id, customFieldData, function (error) {                                     // 37
			$btn.html(oldBtnValue);                                                                                             // 38
                                                                                                                       //
			if (error) {                                                                                                        // 39
				return handleError(error);                                                                                         // 40
			}                                                                                                                   // 41
                                                                                                                       //
			toastr.success(t('Saved'));                                                                                         // 43
			FlowRouter.go('livechat-customfields');                                                                             // 44
		});                                                                                                                  // 45
	},                                                                                                                    // 46
	'click button.back': function (e /*, instance*/) {                                                                    // 48
		e.preventDefault();                                                                                                  // 49
		FlowRouter.go('livechat-customfields');                                                                              // 50
	}                                                                                                                     // 51
});                                                                                                                    // 8
Template.livechatCustomFieldForm.onCreated(function () {                                                               // 54
	var _this = this;                                                                                                     // 54
                                                                                                                       //
	this.customField = new ReactiveVar({});                                                                               // 55
	this.autorun(function () {                                                                                            // 56
		var sub = _this.subscribe('livechat:customFields', FlowRouter.getParam('_id'));                                      // 57
                                                                                                                       //
		if (sub.ready()) {                                                                                                   // 58
			var customField = LivechatCustomField.findOne({                                                                     // 59
				_id: FlowRouter.getParam('_id')                                                                                    // 59
			});                                                                                                                 // 59
                                                                                                                       //
			if (customField) {                                                                                                  // 60
				_this.customField.set(customField);                                                                                // 61
			}                                                                                                                   // 62
		}                                                                                                                    // 63
	});                                                                                                                   // 64
});                                                                                                                    // 65
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.livechatDashboard.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/template.livechatDashboard.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("livechatDashboard");                                                                             // 2
Template["livechatDashboard"] = new Template("Template.livechatDashboard", (function() {                               // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return "view-livechat-manager";                                                                                    // 6
  }, function() {                                                                                                      // 7
    return Spacebars.include(view.lookupTemplate("requiresPermission"), function() {                                   // 8
      return [ "\n\t\t", HTML.H1("Dashboard"), "\n\t" ];                                                               // 9
    });                                                                                                                // 10
  });                                                                                                                  // 11
}));                                                                                                                   // 12
                                                                                                                       // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.livechatDepartmentForm.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/template.livechatDepartmentForm.js                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("livechatDepartmentForm");                                                                        // 2
Template["livechatDepartmentForm"] = new Template("Template.livechatDepartmentForm", (function() {                     // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return "view-livechat-manager";                                                                                    // 6
  }, function() {                                                                                                      // 7
    return Spacebars.include(view.lookupTemplate("requiresPermission"), function() {                                   // 8
      return [ "\n\t\t", HTML.FORM({                                                                                   // 9
        id: "department-form",                                                                                         // 10
        "data-id": function() {                                                                                        // 11
          return Spacebars.mustache(Spacebars.dot(view.lookup("department"), "_id"));                                  // 12
        }                                                                                                              // 13
      }, "\n\t\t\t", HTML.DIV({                                                                                        // 14
        class: "rocket-form"                                                                                           // 15
      }, "\n\t\t\t\t", Blaze.If(function() {                                                                           // 16
        return Spacebars.call(view.templateInstance().subscriptionsReady());                                           // 17
      }, function() {                                                                                                  // 18
        return [ "\n\t\t\t\t\t", HTML.FIELDSET("\n\t\t\t\t\t\t", HTML.DIV({                                            // 19
          class: "input-line"                                                                                          // 20
        }, "\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                          // 21
          return Spacebars.mustache(view.lookup("_"), "Enabled");                                                      // 22
        })), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                // 23
          type: "radio",                                                                                               // 24
          name: "enabled",                                                                                             // 25
          value: "1",                                                                                                  // 26
          checked: function() {                                                                                        // 27
            return Spacebars.mustache(view.lookup("$eq"), Spacebars.dot(view.lookup("department"), "enabled"), true);  // 28
          }                                                                                                            // 29
        }), " ", Blaze.View("lookup:_", function() {                                                                   // 30
          return Spacebars.mustache(view.lookup("_"), "Yes");                                                          // 31
        })), "\n\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                             // 32
          type: "radio",                                                                                               // 33
          name: "enabled",                                                                                             // 34
          value: "0",                                                                                                  // 35
          checked: function() {                                                                                        // 36
            return Spacebars.mustache(view.lookup("$eq"), Spacebars.dot(view.lookup("department"), "enabled"), false);
          }                                                                                                            // 38
        }), " ", Blaze.View("lookup:_", function() {                                                                   // 39
          return Spacebars.mustache(view.lookup("_"), "No");                                                           // 40
        })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({                                      // 41
          class: "input-line"                                                                                          // 42
        }, "\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                          // 43
          return Spacebars.mustache(view.lookup("_"), "Name");                                                         // 44
        })), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", HTML.INPUT({                                           // 45
          type: "text",                                                                                                // 46
          name: "name",                                                                                                // 47
          value: function() {                                                                                          // 48
            return Spacebars.mustache(Spacebars.dot(view.lookup("department"), "name"));                               // 49
          },                                                                                                           // 50
          placeholder: function() {                                                                                    // 51
            return Spacebars.mustache(view.lookup("_"), "Name");                                                       // 52
          }                                                                                                            // 53
        }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({                                       // 54
          class: "input-line"                                                                                          // 55
        }, "\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                          // 56
          return Spacebars.mustache(view.lookup("_"), "Description");                                                  // 57
        })), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", HTML.TEXTAREA({                                        // 58
          name: "description",                                                                                         // 59
          rows: "6",                                                                                                   // 60
          value: function() {                                                                                          // 61
            return Spacebars.mustache(Spacebars.dot(view.lookup("department"), "description"));                        // 62
          }                                                                                                            // 63
        }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({                                       // 64
          class: "input-line"                                                                                          // 65
        }, "\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                          // 66
          return Spacebars.mustache(view.lookup("_"), "Show_on_registration_page");                                    // 67
        })), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                // 68
          type: "radio",                                                                                               // 69
          name: "showOnRegistration",                                                                                  // 70
          value: "1",                                                                                                  // 71
          checked: function() {                                                                                        // 72
            return Spacebars.mustache(view.lookup("showOnRegistration"), true);                                        // 73
          }                                                                                                            // 74
        }), " ", Blaze.View("lookup:_", function() {                                                                   // 75
          return Spacebars.mustache(view.lookup("_"), "Yes");                                                          // 76
        })), "\n\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                             // 77
          type: "radio",                                                                                               // 78
          name: "showOnRegistration",                                                                                  // 79
          value: "0",                                                                                                  // 80
          checked: function() {                                                                                        // 81
            return Spacebars.mustache(view.lookup("showOnRegistration"), false);                                       // 82
          }                                                                                                            // 83
        }), " ", Blaze.View("lookup:_", function() {                                                                   // 84
          return Spacebars.mustache(view.lookup("_"), "No");                                                           // 85
        })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.HR(), "\n\t\t\t\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {
          return Spacebars.mustache(view.lookup("_"), "Agents");                                                       // 87
        })), "\n\n\t\t\t\t\t\t", HTML.FIELDSET("\n\t\t\t\t\t\t\t", HTML.LEGEND(Blaze.View("lookup:_", function() {     // 88
          return Spacebars.mustache(view.lookup("_"), "Available_agents");                                             // 89
        })), "\n\n\t\t\t\t\t\t\t", HTML.UL({                                                                           // 90
          class: "department-agents available-agents"                                                                  // 91
        }, "\n\t\t\t\t\t\t\t\t", Blaze.Each(function() {                                                               // 92
          return Spacebars.call(view.lookup("availableAgents"));                                                       // 93
        }, function() {                                                                                                // 94
          return [ "\n\t\t\t\t\t\t\t\t\t", HTML.LI(HTML.I({                                                            // 95
            class: "icon-plus-circled"                                                                                 // 96
          }), Blaze.View("lookup:username", function() {                                                               // 97
            return Spacebars.mustache(view.lookup("username"));                                                        // 98
          })), "\n\t\t\t\t\t\t\t\t" ];                                                                                 // 99
        }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\n\t\t\t\t\t\t", HTML.FIELDSET("\n\t\t\t\t\t\t\t", HTML.LEGEND(Blaze.View("lookup:_", function() {
          return Spacebars.mustache(view.lookup("_"), "Selected_agents");                                              // 101
        })), "\n\n\t\t\t\t\t\t\t", HTML.DIV({                                                                          // 102
          class: "list"                                                                                                // 103
        }, "\n\t\t\t\t\t\t\t\t", HTML.TABLE("\n\t\t\t\t\t\t\t\t\t", HTML.THEAD("\n\t\t\t\t\t\t\t\t\t\t", HTML.TR("\n\t\t\t\t\t\t\t\t\t\t\t", HTML.TH({
          width: "25%"                                                                                                 // 105
        }, Blaze.View("lookup:_", function() {                                                                         // 106
          return Spacebars.mustache(view.lookup("_"), "Username");                                                     // 107
        })), "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.TH(Blaze.View("lookup:_", function() {                                   // 108
          return Spacebars.mustache(view.lookup("_"), "Count");                                                        // 109
        })), "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.TH(Blaze.View("lookup:_", function() {                                   // 110
          return Spacebars.mustache(view.lookup("_"), "Order");                                                        // 111
        })), "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.TH(HTML.CharRef({                                                        // 112
          html: "&nbsp;",                                                                                              // 113
          str: " "                                                                                                     // 114
        })), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t", HTML.TBODY("\n\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {
          return Spacebars.call(view.lookup("selectedAgents"));                                                        // 116
        }, function() {                                                                                                // 117
          return [ "\n\t\t\t\t\t\t\t\t\t\t\t", Blaze.Each(function() {                                                 // 118
            return Spacebars.call(view.lookup("selectedAgents"));                                                      // 119
          }, function() {                                                                                              // 120
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.TR({                                                           // 121
              class: "agent-info"                                                                                      // 122
            }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:username", function() {                      // 123
              return Spacebars.mustache(view.lookup("username"));                                                      // 124
            })), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.TD(HTML.INPUT({                                                  // 125
              type: "text",                                                                                            // 126
              class: function() {                                                                                      // 127
                return [ "count-", Spacebars.mustache(view.lookup("agentId")) ];                                       // 128
              },                                                                                                       // 129
              name: "count",                                                                                           // 130
              value: function() {                                                                                      // 131
                return Spacebars.mustache(view.lookup("count"));                                                       // 132
              },                                                                                                       // 133
              size: "3"                                                                                                // 134
            })), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.TD(HTML.INPUT({                                                  // 135
              type: "text",                                                                                            // 136
              class: function() {                                                                                      // 137
                return [ "order-", Spacebars.mustache(view.lookup("agentId")) ];                                       // 138
              },                                                                                                       // 139
              name: "order",                                                                                           // 140
              value: function() {                                                                                      // 141
                return Spacebars.mustache(view.lookup("order"));                                                       // 142
              },                                                                                                       // 143
              size: "3"                                                                                                // 144
            })), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.TD(HTML.A({                                                      // 145
              href: "#remove",                                                                                         // 146
              class: "remove-agent"                                                                                    // 147
            }, HTML.I({                                                                                                // 148
              class: "icon-trash"                                                                                      // 149
            }))), "\n\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t" ];                                         // 150
          }), "\n\t\t\t\t\t\t\t\t\t\t" ];                                                                              // 151
        }, function() {                                                                                                // 152
          return [ "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.TR("\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.TD({                         // 153
            colspan: "4"                                                                                               // 154
          }, Blaze.View("lookup:_", function() {                                                                       // 155
            return Spacebars.mustache(view.lookup("_"), "There_are_no_agents_added_to_this_department_yet");           // 156
          })), "\n\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t" ];                                                // 157
        }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\n\t\t\t\t\t\t"), "\n\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({
          class: "submit"                                                                                              // 159
        }, "\n\t\t\t\t\t\t", HTML.BUTTON({                                                                             // 160
          class: "button back",                                                                                        // 161
          type: "button"                                                                                               // 162
        }, HTML.I({                                                                                                    // 163
          class: "icon-left-big"                                                                                       // 164
        }), HTML.SPAN(Blaze.View("lookup:_", function() {                                                              // 165
          return Spacebars.mustache(view.lookup("_"), "Back");                                                         // 166
        }))), "\n\t\t\t\t\t\t", HTML.BUTTON({                                                                          // 167
          class: "button primary save"                                                                                 // 168
        }, HTML.I({                                                                                                    // 169
          class: "icon-floppy"                                                                                         // 170
        }), HTML.SPAN(Blaze.View("lookup:_", function() {                                                              // 171
          return Spacebars.mustache(view.lookup("_"), "Save");                                                         // 172
        }))), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                         // 173
      }, function() {                                                                                                  // 174
        return [ "\n\t\t\t\t\t", Spacebars.include(view.lookupTemplate("loading")), "\n\t\t\t\t" ];                    // 175
      }), "\n\t\t\t"), "\n\t\t"), "\n\t" ];                                                                            // 176
    });                                                                                                                // 177
  });                                                                                                                  // 178
}));                                                                                                                   // 179
                                                                                                                       // 180
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"livechatDepartmentForm.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/livechatDepartmentForm.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var toastr = void 0;                                                                                                   // 1
module.watch(require("toastr"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		toastr = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
Template.livechatDepartmentForm.helpers({                                                                              // 2
	department: function () {                                                                                             // 3
		return Template.instance().department.get();                                                                         // 4
	},                                                                                                                    // 5
	agents: function () {                                                                                                 // 6
		return Template.instance().department && !_.isEmpty(Template.instance().department.get()) ? Template.instance().department.get().agents : [];
	},                                                                                                                    // 8
	selectedAgents: function () {                                                                                         // 9
		return _.sortBy(Template.instance().selectedAgents.get(), 'username');                                               // 10
	},                                                                                                                    // 11
	availableAgents: function () {                                                                                        // 12
		var selected = _.pluck(Template.instance().selectedAgents.get(), 'username');                                        // 13
                                                                                                                       //
		return AgentUsers.find({                                                                                             // 14
			username: {                                                                                                         // 14
				$nin: selected                                                                                                     // 14
			}                                                                                                                   // 14
		}, {                                                                                                                 // 14
			sort: {                                                                                                             // 14
				username: 1                                                                                                        // 14
			}                                                                                                                   // 14
		});                                                                                                                  // 14
	},                                                                                                                    // 15
	showOnRegistration: function (value) {                                                                                // 16
		var department = Template.instance().department.get();                                                               // 17
		return department.showOnRegistration === value || department.showOnRegistration === undefined && value === true;     // 18
	}                                                                                                                     // 19
});                                                                                                                    // 2
Template.livechatDepartmentForm.events({                                                                               // 22
	'submit #department-form': function (e, instance) {                                                                   // 23
		e.preventDefault();                                                                                                  // 24
		var $btn = instance.$('button.save');                                                                                // 25
                                                                                                                       //
		var _id = $(e.currentTarget).data('id');                                                                             // 27
                                                                                                                       //
		var enabled = instance.$('input[name=enabled]:checked').val();                                                       // 28
		var name = instance.$('input[name=name]').val();                                                                     // 29
		var description = instance.$('textarea[name=description]').val();                                                    // 30
		var showOnRegistration = instance.$('input[name=showOnRegistration]:checked').val();                                 // 31
                                                                                                                       //
		if (enabled !== '1' && enabled !== '0') {                                                                            // 33
			return toastr.error(t('Please_select_enabled_yes_or_no'));                                                          // 34
		}                                                                                                                    // 35
                                                                                                                       //
		if (name.trim() === '') {                                                                                            // 37
			return toastr.error(t('Please_fill_a_name'));                                                                       // 38
		}                                                                                                                    // 39
                                                                                                                       //
		var oldBtnValue = $btn.html();                                                                                       // 41
		$btn.html(t('Saving'));                                                                                              // 42
		var departmentData = {                                                                                               // 44
			enabled: enabled === '1' ? true : false,                                                                            // 45
			name: name.trim(),                                                                                                  // 46
			description: description.trim(),                                                                                    // 47
			showOnRegistration: showOnRegistration === '1' ? true : false                                                       // 48
		};                                                                                                                   // 44
		var departmentAgents = [];                                                                                           // 51
		instance.selectedAgents.get().forEach(function (agent) {                                                             // 53
			agent.count = instance.$(".count-" + agent.agentId).val();                                                          // 54
			agent.order = instance.$(".order-" + agent.agentId).val();                                                          // 55
			departmentAgents.push(agent);                                                                                       // 57
		});                                                                                                                  // 58
		Meteor.call('livechat:saveDepartment', _id, departmentData, departmentAgents, function (error /*, result*/) {        // 60
			$btn.html(oldBtnValue);                                                                                             // 61
                                                                                                                       //
			if (error) {                                                                                                        // 62
				return handleError(error);                                                                                         // 63
			}                                                                                                                   // 64
                                                                                                                       //
			toastr.success(t('Saved'));                                                                                         // 66
			FlowRouter.go('livechat-departments');                                                                              // 67
		});                                                                                                                  // 68
	},                                                                                                                    // 69
	'click button.back': function (e /*, instance*/) {                                                                    // 71
		e.preventDefault();                                                                                                  // 72
		FlowRouter.go('livechat-departments');                                                                               // 73
	},                                                                                                                    // 74
	'click .remove-agent': function (e, instance) {                                                                       // 76
		var _this = this;                                                                                                    // 76
                                                                                                                       //
		e.preventDefault();                                                                                                  // 77
		var selectedAgents = instance.selectedAgents.get();                                                                  // 79
		selectedAgents = _.reject(selectedAgents, function (agent) {                                                         // 80
			return agent._id === _this._id;                                                                                     // 80
		});                                                                                                                  // 80
		instance.selectedAgents.set(selectedAgents);                                                                         // 81
	},                                                                                                                    // 82
	'click .available-agents li': function (e, instance) {                                                                // 84
		var selectedAgents = instance.selectedAgents.get();                                                                  // 85
                                                                                                                       //
		var agent = _.clone(this);                                                                                           // 86
                                                                                                                       //
		agent.agentId = this._id;                                                                                            // 87
		delete agent._id;                                                                                                    // 88
		selectedAgents.push(agent);                                                                                          // 89
		instance.selectedAgents.set(selectedAgents);                                                                         // 90
	}                                                                                                                     // 91
});                                                                                                                    // 22
Template.livechatDepartmentForm.onCreated(function () {                                                                // 94
	var _this2 = this;                                                                                                    // 94
                                                                                                                       //
	this.department = new ReactiveVar({                                                                                   // 95
		enabled: true                                                                                                        // 95
	});                                                                                                                   // 95
	this.selectedAgents = new ReactiveVar([]);                                                                            // 96
	this.subscribe('livechat:agents');                                                                                    // 98
	this.autorun(function () {                                                                                            // 100
		var sub = _this2.subscribe('livechat:departments', FlowRouter.getParam('_id'));                                      // 101
                                                                                                                       //
		if (sub.ready()) {                                                                                                   // 102
			var department = LivechatDepartment.findOne({                                                                       // 103
				_id: FlowRouter.getParam('_id')                                                                                    // 103
			});                                                                                                                 // 103
                                                                                                                       //
			if (department) {                                                                                                   // 104
				_this2.department.set(department);                                                                                 // 105
                                                                                                                       //
				_this2.subscribe('livechat:departmentAgents', department._id, function () {                                        // 107
					var newSelectedAgents = [];                                                                                       // 108
					LivechatDepartmentAgents.find({                                                                                   // 109
						departmentId: department._id                                                                                     // 109
					}).forEach(function (agent) {                                                                                     // 109
						newSelectedAgents.push(agent);                                                                                   // 110
					});                                                                                                               // 111
                                                                                                                       //
					_this2.selectedAgents.set(newSelectedAgents);                                                                     // 112
				});                                                                                                                // 113
			}                                                                                                                   // 114
		}                                                                                                                    // 115
	});                                                                                                                   // 116
});                                                                                                                    // 117
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.livechatDepartments.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/template.livechatDepartments.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("livechatDepartments");                                                                           // 2
Template["livechatDepartments"] = new Template("Template.livechatDepartments", (function() {                           // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return "view-livechat-manager";                                                                                    // 6
  }, function() {                                                                                                      // 7
    return Spacebars.include(view.lookupTemplate("requiresPermission"), function() {                                   // 8
      return [ "\n\t\t", HTML.DIV({                                                                                    // 9
        class: "list"                                                                                                  // 10
      }, "\n\t\t\t", HTML.TABLE("\n\t\t\t\t", HTML.THEAD("\n\t\t\t\t\t", HTML.TR("\n\t\t\t\t\t\t", HTML.TH({           // 11
        width: "20%"                                                                                                   // 12
      }, Blaze.View("lookup:_", function() {                                                                           // 13
        return Spacebars.mustache(view.lookup("_"), "Name");                                                           // 14
      })), "\n\t\t\t\t\t\t", HTML.TH({                                                                                 // 15
        width: "30%"                                                                                                   // 16
      }, Blaze.View("lookup:_", function() {                                                                           // 17
        return Spacebars.mustache(view.lookup("_"), "Description");                                                    // 18
      })), "\n\t\t\t\t\t\t", HTML.TH({                                                                                 // 19
        width: "10%"                                                                                                   // 20
      }, Blaze.View("lookup:_", function() {                                                                           // 21
        return Spacebars.mustache(view.lookup("_"), "Num_Agents");                                                     // 22
      })), "\n\t\t\t\t\t\t", HTML.TH({                                                                                 // 23
        width: "20%"                                                                                                   // 24
      }, Blaze.View("lookup:_", function() {                                                                           // 25
        return Spacebars.mustache(view.lookup("_"), "Enabled");                                                        // 26
      })), "\n\t\t\t\t\t\t", HTML.TH({                                                                                 // 27
        width: "20%"                                                                                                   // 28
      }, Blaze.View("lookup:_", function() {                                                                           // 29
        return Spacebars.mustache(view.lookup("_"), "Show_on_registration_page");                                      // 30
      })), "\n\t\t\t\t\t\t", HTML.TH(Blaze.View("lookup:_", function() {                                               // 31
        return Spacebars.mustache(view.lookup("_"), "Delete");                                                         // 32
      })), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.TBODY("\n\t\t\t\t\t", Blaze.Each(function() {            // 33
        return Spacebars.call(view.lookup("departments"));                                                             // 34
      }, function() {                                                                                                  // 35
        return [ "\n\t\t\t\t\t\t", HTML.TR({                                                                           // 36
          class: "department-info row-link",                                                                           // 37
          "data-id": function() {                                                                                      // 38
            return Spacebars.mustache(view.lookup("_id"));                                                             // 39
          }                                                                                                            // 40
        }, "\n\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:name", function() {                                          // 41
          return Spacebars.mustache(view.lookup("name"));                                                              // 42
        })), "\n\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:description", function() {                                 // 43
          return Spacebars.mustache(view.lookup("description"));                                                       // 44
        })), "\n\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:numAgents", function() {                                   // 45
          return Spacebars.mustache(view.lookup("numAgents"));                                                         // 46
        })), "\n\t\t\t\t\t\t\t", HTML.TD(Blaze.If(function() {                                                         // 47
          return Spacebars.call(view.lookup("enabled"));                                                               // 48
        }, function() {                                                                                                // 49
          return Blaze.View("lookup:_", function() {                                                                   // 50
            return Spacebars.mustache(view.lookup("_"), "Yes");                                                        // 51
          });                                                                                                          // 52
        }, function() {                                                                                                // 53
          return Blaze.View("lookup:_", function() {                                                                   // 54
            return Spacebars.mustache(view.lookup("_"), "No");                                                         // 55
          });                                                                                                          // 56
        })), "\n\t\t\t\t\t\t\t", HTML.TD(Blaze.If(function() {                                                         // 57
          return Spacebars.call(view.lookup("showOnRegistration"));                                                    // 58
        }, function() {                                                                                                // 59
          return Blaze.View("lookup:_", function() {                                                                   // 60
            return Spacebars.mustache(view.lookup("_"), "Yes");                                                        // 61
          });                                                                                                          // 62
        }, function() {                                                                                                // 63
          return Blaze.View("lookup:_", function() {                                                                   // 64
            return Spacebars.mustache(view.lookup("_"), "No");                                                         // 65
          });                                                                                                          // 66
        })), "\n\t\t\t\t\t\t\t", HTML.TD(HTML.A({                                                                      // 67
          href: "#remove",                                                                                             // 68
          class: "remove-department"                                                                                   // 69
        }, HTML.I({                                                                                                    // 70
          class: "icon-trash"                                                                                          // 71
        }))), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                                                                     // 72
      }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\n\t\t", HTML.A({                                                  // 73
        href: function() {                                                                                             // 74
          return Spacebars.mustache(view.lookup("pathFor"), "livechat-department-new");                                // 75
        },                                                                                                             // 76
        class: "button primary"                                                                                        // 77
      }, Blaze.View("lookup:_", function() {                                                                           // 78
        return Spacebars.mustache(view.lookup("_"), "New_Department");                                                 // 79
      })), "\n\t" ];                                                                                                   // 80
    });                                                                                                                // 81
  });                                                                                                                  // 82
}));                                                                                                                   // 83
                                                                                                                       // 84
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"livechatDepartments.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/livechatDepartments.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.livechatDepartments.helpers({                                                                                 // 1
	departments: function () {                                                                                            // 2
		return LivechatDepartment.find();                                                                                    // 3
	}                                                                                                                     // 4
});                                                                                                                    // 1
Template.livechatDepartments.events({                                                                                  // 7
	'click .remove-department': function (e /*, instance*/) {                                                             // 8
		var _this = this;                                                                                                    // 8
                                                                                                                       //
		e.preventDefault();                                                                                                  // 9
		e.stopPropagation();                                                                                                 // 10
		swal({                                                                                                               // 12
			title: t('Are_you_sure'),                                                                                           // 13
			type: 'warning',                                                                                                    // 14
			showCancelButton: true,                                                                                             // 15
			confirmButtonColor: '#DD6B55',                                                                                      // 16
			confirmButtonText: t('Yes'),                                                                                        // 17
			cancelButtonText: t('Cancel'),                                                                                      // 18
			closeOnConfirm: false,                                                                                              // 19
			html: false                                                                                                         // 20
		}, function () {                                                                                                     // 12
			Meteor.call('livechat:removeDepartment', _this._id, function (error /*, result*/) {                                 // 22
				if (error) {                                                                                                       // 23
					return handleError(error);                                                                                        // 24
				}                                                                                                                  // 25
                                                                                                                       //
				swal({                                                                                                             // 26
					title: t('Removed'),                                                                                              // 27
					text: t('Department_removed'),                                                                                    // 28
					type: 'success',                                                                                                  // 29
					timer: 1000,                                                                                                      // 30
					showConfirmButton: false                                                                                          // 31
				});                                                                                                                // 26
			});                                                                                                                 // 33
		});                                                                                                                  // 34
	},                                                                                                                    // 35
	'click .department-info': function (e /*, instance*/) {                                                               // 37
		e.preventDefault();                                                                                                  // 38
		FlowRouter.go('livechat-department-edit', {                                                                          // 39
			_id: this._id                                                                                                       // 39
		});                                                                                                                  // 39
	}                                                                                                                     // 40
});                                                                                                                    // 7
Template.livechatDepartments.onCreated(function () {                                                                   // 43
	this.subscribe('livechat:departments');                                                                               // 44
});                                                                                                                    // 45
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.livechatInstallation.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/template.livechatInstallation.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("livechatInstallation");                                                                          // 2
Template["livechatInstallation"] = new Template("Template.livechatInstallation", (function() {                         // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return "view-livechat-manager";                                                                                    // 6
  }, function() {                                                                                                      // 7
    return Spacebars.include(view.lookupTemplate("requiresPermission"), function() {                                   // 8
      return [ "\n\t\t", HTML.P(Blaze.View("lookup:_", function() {                                                    // 9
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "To_install_RocketChat_Livechat_in_your_website_copy_paste_this_code_above_the_last_body_tag_on_your_site"));
      })), "\n\n\t\t", HTML.DIV({                                                                                      // 11
        class: "livechat-code"                                                                                         // 12
      }, "\n\t\t\t", HTML.TEXTAREA({                                                                                   // 13
        class: "clipboard",                                                                                            // 14
        "data-clipboard-target": ".livechat-code textarea",                                                            // 15
        value: function() {                                                                                            // 16
          return Spacebars.mustache(view.lookup("script"));                                                            // 17
        }                                                                                                              // 18
      }), "\n\t\t\t", HTML.BUTTON({                                                                                    // 19
        class: "button clipboard",                                                                                     // 20
        "data-clipboard-target": ".livechat-code textarea"                                                             // 21
      }, HTML.I({                                                                                                      // 22
        class: "icon-docs"                                                                                             // 23
      }), Blaze.View("lookup:_", function() {                                                                          // 24
        return Spacebars.mustache(view.lookup("_"), "Copy_to_clipboard");                                              // 25
      })), "\n\t\t"), "\n\t" ];                                                                                        // 26
    });                                                                                                                // 27
  });                                                                                                                  // 28
}));                                                                                                                   // 29
                                                                                                                       // 30
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"livechatInstallation.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/livechatInstallation.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.livechatInstallation.helpers({                                                                                // 1
	script: function () {                                                                                                 // 2
		var siteUrl = s.rtrim(RocketChat.settings.get('Site_Url'), '/');                                                     // 3
		return "<!-- Start of Rocket.Chat Livechat Script -->\n<script type=\"text/javascript\">\n(function(w, d, s, u) {\n\tw.RocketChat = function(c) { w.RocketChat._.push(c) }; w.RocketChat._ = []; w.RocketChat.url = u;\n\tvar h = d.getElementsByTagName(s)[0], j = d.createElement(s);\n\tj.async = true; j.src = '" + siteUrl + "/packages/rocketchat_livechat/assets/rocketchat-livechat.min.js?_=201702160944';\n\th.parentNode.insertBefore(j, h);\n})(window, document, 'script', '" + siteUrl + "/livechat');\n</script>\n<!-- End of Rocket.Chat Livechat Script -->";
	}                                                                                                                     // 15
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.livechatIntegrations.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/template.livechatIntegrations.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("livechatIntegrations");                                                                          // 2
Template["livechatIntegrations"] = new Template("Template.livechatIntegrations", (function() {                         // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return "view-livechat-manager";                                                                                    // 6
  }, function() {                                                                                                      // 7
    return Spacebars.include(view.lookupTemplate("requiresPermission"), function() {                                   // 8
      return [ "\n\t\t", HTML.DIV({                                                                                    // 9
        class: "rocket-form"                                                                                           // 10
      }, "\n\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                                                       // 11
        return Spacebars.mustache(view.lookup("_"), "Webhooks");                                                       // 12
      })), "\n\t\t\t", HTML.P("\n\t\t\t\t", Blaze.View("lookup:_", function() {                                        // 13
        return Spacebars.mustache(view.lookup("_"), "You_can_use_webhooks_to_easily_integrate_livechat_with_your_CRM");
      }), "\n\t\t\t\t", HTML.A({                                                                                       // 15
        href: "https://rocket.chat/docs/administrator-guides/livechat/#integrations"                                   // 16
      }, Blaze.View("lookup:_", function() {                                                                           // 17
        return Spacebars.mustache(view.lookup("_"), "Click_here");                                                     // 18
      })), " ", Blaze.View("lookup:_", function() {                                                                    // 19
        return Spacebars.mustache(view.lookup("_"), "to_see_more_details_on_how_to_integrate");                        // 20
      }), "\n\t\t\t"), "\n\n\t\t\t", HTML.FORM({                                                                       // 21
        id: "integration-form"                                                                                         // 22
      }, "\n\t\t\t\t", HTML.DIV({                                                                                      // 23
        class: "input-line"                                                                                            // 24
      }, "\n\t\t\t\t\t", HTML.LABEL({                                                                                  // 25
        for: "webhookUrl"                                                                                              // 26
      }, Blaze.View("lookup:_", function() {                                                                           // 27
        return Spacebars.mustache(view.lookup("_"), "Webhook_URL");                                                    // 28
      })), "\n\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t", HTML.INPUT({                                                     // 29
        type: "url",                                                                                                   // 30
        name: "webhookUrl",                                                                                            // 31
        id: "webhookUrl",                                                                                              // 32
        value: function() {                                                                                            // 33
          return Spacebars.mustache(view.lookup("webhookUrl"));                                                        // 34
        },                                                                                                             // 35
        placeholder: "https://yourdomain.com/webhook/entrypoint"                                                       // 36
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                     // 37
        class: "input-line"                                                                                            // 38
      }, "\n\t\t\t\t\t", HTML.LABEL({                                                                                  // 39
        for: "secretToken"                                                                                             // 40
      }, Blaze.View("lookup:_", function() {                                                                           // 41
        return Spacebars.mustache(view.lookup("_"), "Secret_token");                                                   // 42
      })), "\n\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t", HTML.INPUT({                                                     // 43
        type: "text",                                                                                                  // 44
        name: "secretToken",                                                                                           // 45
        id: "secretToken",                                                                                             // 46
        value: function() {                                                                                            // 47
          return Spacebars.mustache(view.lookup("secretToken"));                                                       // 48
        }                                                                                                              // 49
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                     // 50
        class: "input-line"                                                                                            // 51
      }, "\n\t\t\t\t\t", HTML.LABEL({                                                                                  // 52
        for: "sendOnClose"                                                                                             // 53
      }, "\n\t\t\t\t\t\t", HTML.INPUT({                                                                                // 54
        type: "checkbox",                                                                                              // 55
        name: "sendOnClose",                                                                                           // 56
        id: "sendOnClose",                                                                                             // 57
        value: "1",                                                                                                    // 58
        checked: function() {                                                                                          // 59
          return Spacebars.mustache(view.lookup("sendOnCloseChecked"));                                                // 60
        }                                                                                                              // 61
      }), "\n\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                        // 62
        return Spacebars.mustache(view.lookup("_"), "Send_request_on_chat_close");                                     // 63
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                     // 64
        class: "input-line"                                                                                            // 65
      }, "\n\t\t\t\t\t", HTML.LABEL({                                                                                  // 66
        for: "sendOnOffline"                                                                                           // 67
      }, "\n\t\t\t\t\t\t", HTML.INPUT({                                                                                // 68
        type: "checkbox",                                                                                              // 69
        name: "sendOnOffline",                                                                                         // 70
        id: "sendOnOffline",                                                                                           // 71
        value: "1",                                                                                                    // 72
        checked: function() {                                                                                          // 73
          return Spacebars.mustache(view.lookup("sendOnOfflineChecked"));                                              // 74
        }                                                                                                              // 75
      }), "\n\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                        // 76
        return Spacebars.mustache(view.lookup("_"), "Send_request_on_offline_messages");                               // 77
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                     // 78
        class: "submit"                                                                                                // 79
      }, "\n\t\t\t\t\t", HTML.BUTTON({                                                                                 // 80
        class: "button danger reset-settings",                                                                         // 81
        type: "button"                                                                                                 // 82
      }, HTML.I({                                                                                                      // 83
        class: "icon-ccw"                                                                                              // 84
      }), Blaze.View("lookup:_", function() {                                                                          // 85
        return Spacebars.mustache(view.lookup("_"), "Reset");                                                          // 86
      })), "\n\t\t\t\t\t", HTML.BUTTON({                                                                               // 87
        class: "button secondary test",                                                                                // 88
        type: "button",                                                                                                // 89
        disabled: function() {                                                                                         // 90
          return Spacebars.mustache(view.lookup("disableTest"));                                                       // 91
        }                                                                                                              // 92
      }, Blaze.View("lookup:_", function() {                                                                           // 93
        return Spacebars.mustache(view.lookup("_"), "Send_Test");                                                      // 94
      })), "\n\t\t\t\t\t", HTML.BUTTON({                                                                               // 95
        class: "button primary save"                                                                                   // 96
      }, HTML.I({                                                                                                      // 97
        class: "icon-floppy"                                                                                           // 98
      }), Blaze.View("lookup:_", function() {                                                                          // 99
        return Spacebars.mustache(view.lookup("_"), "Save");                                                           // 100
      })), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t" ];                                                            // 101
    });                                                                                                                // 102
  });                                                                                                                  // 103
}));                                                                                                                   // 104
                                                                                                                       // 105
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"livechatIntegrations.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/livechatIntegrations.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var toastr = void 0;                                                                                                   // 1
module.watch(require("toastr"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		toastr = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
/* globals LivechatIntegration */Template.livechatIntegrations.helpers({                                               // 2
	webhookUrl: function () {                                                                                             // 4
		var setting = LivechatIntegration.findOne('Livechat_webhookUrl');                                                    // 5
		return setting && setting.value;                                                                                     // 6
	},                                                                                                                    // 7
	secretToken: function () {                                                                                            // 8
		var setting = LivechatIntegration.findOne('Livechat_secret_token');                                                  // 9
		return setting && setting.value;                                                                                     // 10
	},                                                                                                                    // 11
	disableTest: function () {                                                                                            // 12
		return Template.instance().disableTest.get();                                                                        // 13
	},                                                                                                                    // 14
	sendOnCloseChecked: function () {                                                                                     // 15
		var setting = LivechatIntegration.findOne('Livechat_webhook_on_close');                                              // 16
		return setting && setting.value;                                                                                     // 17
	},                                                                                                                    // 18
	sendOnOfflineChecked: function () {                                                                                   // 19
		var setting = LivechatIntegration.findOne('Livechat_webhook_on_offline_msg');                                        // 20
		return setting && setting.value;                                                                                     // 21
	}                                                                                                                     // 22
});                                                                                                                    // 3
Template.livechatIntegrations.onCreated(function () {                                                                  // 25
	var _this = this;                                                                                                     // 25
                                                                                                                       //
	this.disableTest = new ReactiveVar(true);                                                                             // 26
	this.autorun(function () {                                                                                            // 28
		var webhook = LivechatIntegration.findOne('Livechat_webhookUrl');                                                    // 29
                                                                                                                       //
		_this.disableTest.set(!webhook || _.isEmpty(webhook.value));                                                         // 30
	});                                                                                                                   // 31
	this.subscribe('livechat:integration');                                                                               // 33
});                                                                                                                    // 34
Template.livechatIntegrations.events({                                                                                 // 36
	'change #webhookUrl, blur #webhookUrl': function (e, instance) {                                                      // 37
		var setting = LivechatIntegration.findOne('Livechat_webhookUrl');                                                    // 38
		instance.disableTest.set(!setting || e.currentTarget.value !== setting.value);                                       // 39
	},                                                                                                                    // 40
	'click .test': function (e, instance) {                                                                               // 41
		if (!instance.disableTest.get()) {                                                                                   // 42
			Meteor.call('livechat:webhookTest', function (err) {                                                                // 43
				if (err) {                                                                                                         // 44
					return handleError(err);                                                                                          // 45
				}                                                                                                                  // 46
                                                                                                                       //
				swal(t('It_works'), null, 'success');                                                                              // 47
			});                                                                                                                 // 48
		}                                                                                                                    // 49
	},                                                                                                                    // 50
	'click .reset-settings': function (e, instance) {                                                                     // 51
		e.preventDefault();                                                                                                  // 52
		var webhookUrl = LivechatIntegration.findOne('Livechat_webhookUrl');                                                 // 54
		var secretToken = LivechatIntegration.findOne('Livechat_secret_token');                                              // 55
		var webhookOnClose = LivechatIntegration.findOne('Livechat_webhook_on_close');                                       // 56
		var webhookOnOfflineMsg = LivechatIntegration.findOne('Livechat_webhook_on_offline_msg');                            // 57
		instance.$('#webhookUrl').val(webhookUrl && webhookUrl.value);                                                       // 59
		instance.$('#secretToken').val(secretToken && secretToken.value);                                                    // 60
		instance.$('#sendOnClose').get(0).checked = webhookOnClose && webhookOnClose.value;                                  // 61
		instance.$('#sendOnOffline').get(0).checked = webhookOnOfflineMsg && webhookOnOfflineMsg.value;                      // 62
		instance.disableTest.set(!webhookUrl || _.isEmpty(webhookUrl.value));                                                // 64
	},                                                                                                                    // 65
	'submit .rocket-form': function (e, instance) {                                                                       // 66
		e.preventDefault();                                                                                                  // 67
		var settings = {                                                                                                     // 69
			'Livechat_webhookUrl': s.trim(instance.$('#webhookUrl').val()),                                                     // 70
			'Livechat_secret_token': s.trim(instance.$('#secretToken').val()),                                                  // 71
			'Livechat_webhook_on_close': instance.$('#sendOnClose').get(0).checked,                                             // 72
			'Livechat_webhook_on_offline_msg': instance.$('#sendOnOffline').get(0).checked                                      // 73
		};                                                                                                                   // 69
		Meteor.call('livechat:saveIntegration', settings, function (err) {                                                   // 75
			if (err) {                                                                                                          // 76
				return handleError(err);                                                                                           // 77
			}                                                                                                                   // 78
                                                                                                                       //
			toastr.success(t('Saved'));                                                                                         // 79
		});                                                                                                                  // 80
	}                                                                                                                     // 81
});                                                                                                                    // 36
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.livechatNotSubscribed.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/template.livechatNotSubscribed.js                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("livechatNotSubscribed");                                                                         // 2
Template["livechatNotSubscribed"] = new Template("Template.livechatNotSubscribed", (function() {                       // 3
  var view = this;                                                                                                     // 4
  return HTML.P(Blaze.View("lookup:_", function() {                                                                    // 5
    return Spacebars.mustache(view.lookup("_"), "This_conversation_is_already_closed");                                // 6
  }));                                                                                                                 // 7
}));                                                                                                                   // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.livechatQueue.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/template.livechatQueue.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("livechatQueue");                                                                                 // 2
Template["livechatQueue"] = new Template("Template.livechatQueue", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("hasPermission"));                                                               // 6
  }, function() {                                                                                                      // 7
    return [ "\n\t\t", Blaze.Each(function() {                                                                         // 8
      return Spacebars.call(view.lookup("departments"));                                                               // 9
    }, function() {                                                                                                    // 10
      return [ "\n\t\t\t", HTML.P({                                                                                    // 11
        class: "queue-department"                                                                                      // 12
      }, "\n\t\t\t\t", Blaze.View("lookup:_", function() {                                                             // 13
        return Spacebars.mustache(view.lookup("_"), "Department");                                                     // 14
      }), ": ", HTML.STRONG(Blaze.View("lookup:name", function() {                                                     // 15
        return Spacebars.mustache(view.lookup("name"));                                                                // 16
      })), "\n\t\t\t\t( ", HTML.LABEL({                                                                                // 17
        for: function() {                                                                                              // 18
          return [ "show-offline-", Spacebars.mustache(view.lookup("_id")) ];                                          // 19
        }                                                                                                              // 20
      }, Blaze.View("lookup:_", function() {                                                                           // 21
        return Spacebars.mustache(view.lookup("_"), "show_offline_users");                                             // 22
      })), "\n\t\t\t\t", HTML.INPUT({                                                                                  // 23
        type: "checkbox",                                                                                              // 24
        class: "show-offline",                                                                                         // 25
        id: function() {                                                                                               // 26
          return [ "show-offline-", Spacebars.mustache(view.lookup("_id")) ];                                          // 27
        }                                                                                                              // 28
      }), ")\n\t\t\t"), "\n\n\t\t\t", HTML.DIV({                                                                       // 29
        class: "rocket-form"                                                                                           // 30
      }, "\n\t\t\t\t", HTML.DIV({                                                                                      // 31
        class: "list"                                                                                                  // 32
      }, "\n\t\t\t\t\t", HTML.TABLE("\n\t\t\t\t\t\t", HTML.THEAD("\n\t\t\t\t\t\t\t", HTML.TR("\n\t\t\t\t\t\t\t\t", HTML.TH({
        width: "70%"                                                                                                   // 34
      }, Blaze.View("lookup:_", function() {                                                                           // 35
        return Spacebars.mustache(view.lookup("_"), "Agent");                                                          // 36
      })), "\n\t\t\t\t\t\t\t\t", HTML.TH({                                                                             // 37
        width: "15%",                                                                                                  // 38
        class: "text-right"                                                                                            // 39
      }, Blaze.View("lookup:_", function() {                                                                           // 40
        return Spacebars.mustache(view.lookup("_"), "Count");                                                          // 41
      })), "\n\t\t\t\t\t\t\t\t", HTML.TH({                                                                             // 42
        width: "15%",                                                                                                  // 43
        class: "text-right"                                                                                            // 44
      }, Blaze.View("lookup:_", function() {                                                                           // 45
        return Spacebars.mustache(view.lookup("_"), "Order");                                                          // 46
      })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TBODY("\n\t\t\t\t\t\t\t", Blaze.Each(function() {
        return Spacebars.call(view.lookup("users"));                                                                   // 48
      }, function() {                                                                                                  // 49
        return [ "\n\t\t\t\t\t\t\t\t", HTML.TR("\n\t\t\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:username", function() {
          return Spacebars.mustache(view.lookup("username"));                                                          // 51
        })), "\n\t\t\t\t\t\t\t\t\t", HTML.TD({                                                                         // 52
          class: "text-right"                                                                                          // 53
        }, Blaze.View("lookup:count", function() {                                                                     // 54
          return Spacebars.mustache(view.lookup("count"));                                                             // 55
        })), "\n\t\t\t\t\t\t\t\t\t", HTML.TD({                                                                         // 56
          class: "text-right"                                                                                          // 57
        }, Blaze.View("lookup:order", function() {                                                                     // 58
          return Spacebars.mustache(view.lookup("order"));                                                             // 59
        })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];                                                              // 60
      }, function() {                                                                                                  // 61
        return [ "\n\t\t\t\t\t\t\t", HTML.TR("\n\t\t\t\t\t\t\t\t", HTML.TD({                                           // 62
          colspan: "3"                                                                                                 // 63
        }, Blaze.View("lookup:_", function() {                                                                         // 64
          return Spacebars.mustache(view.lookup("_"), "Nobody_available");                                             // 65
        })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];                                                                // 66
      }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t" ];                                  // 67
    }), "\n\t" ];                                                                                                      // 68
  }, function() {                                                                                                      // 69
    return [ "\n\t\t", HTML.P(Blaze.View("lookup:_", function() {                                                      // 70
      return Spacebars.mustache(view.lookup("_"), "You_are_not_authorized_to_view_this_page");                         // 71
    })), "\n\t" ];                                                                                                     // 72
  });                                                                                                                  // 73
}));                                                                                                                   // 74
                                                                                                                       // 75
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"livechatQueue.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/livechatQueue.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals LivechatQueueUser */Template.livechatQueue.helpers({                                                        // 1
	departments: function () {                                                                                            // 4
		return LivechatDepartment.find({                                                                                     // 5
			enabled: true                                                                                                       // 6
		}, {                                                                                                                 // 5
			sort: {                                                                                                             // 8
				name: 1                                                                                                            // 9
			}                                                                                                                   // 8
		});                                                                                                                  // 7
	},                                                                                                                    // 12
	users: function () {                                                                                                  // 14
		var _this = this;                                                                                                    // 14
                                                                                                                       //
		var users = [];                                                                                                      // 15
		var showOffline = Template.instance().showOffline.get();                                                             // 17
		LivechatQueueUser.find({                                                                                             // 19
			departmentId: this._id                                                                                              // 20
		}, {                                                                                                                 // 19
			sort: {                                                                                                             // 22
				count: 1,                                                                                                          // 23
				order: 1,                                                                                                          // 24
				username: 1                                                                                                        // 25
			}                                                                                                                   // 22
		}).forEach(function (user) {                                                                                         // 21
			var options = {                                                                                                     // 28
				fields: {                                                                                                          // 28
					_id: 1                                                                                                            // 28
				}                                                                                                                  // 28
			};                                                                                                                  // 28
			var userFilter = {                                                                                                  // 29
				_id: user.agentId,                                                                                                 // 29
				status: {                                                                                                          // 29
					$ne: 'offline'                                                                                                    // 29
				}                                                                                                                  // 29
			};                                                                                                                  // 29
			var agentFilter = {                                                                                                 // 30
				_id: user.agentId,                                                                                                 // 30
				statusLivechat: 'available'                                                                                        // 30
			};                                                                                                                  // 30
                                                                                                                       //
			if (showOffline[_this._id] || Meteor.users.findOne(userFilter, options) && AgentUsers.findOne(agentFilter, options)) {
				users.push(user);                                                                                                  // 33
			}                                                                                                                   // 34
		});                                                                                                                  // 35
		return users;                                                                                                        // 37
	},                                                                                                                    // 38
	hasPermission: function () {                                                                                          // 40
		var user = RocketChat.models.Users.findOne(Meteor.userId(), {                                                        // 41
			fields: {                                                                                                           // 41
				statusLivechat: 1                                                                                                  // 41
			}                                                                                                                   // 41
		});                                                                                                                  // 41
		return RocketChat.authz.hasRole(Meteor.userId(), 'livechat-manager') || user.statusLivechat === 'available' && RocketChat.settings.get('Livechat_show_queue_list_link');
	}                                                                                                                     // 43
});                                                                                                                    // 3
Template.livechatQueue.events({                                                                                        // 46
	'click .show-offline': function (event, instance) {                                                                   // 47
		var showOffline = instance.showOffline.get();                                                                        // 48
		showOffline[this._id] = event.currentTarget.checked;                                                                 // 50
		instance.showOffline.set(showOffline);                                                                               // 52
	}                                                                                                                     // 53
});                                                                                                                    // 46
Template.livechatQueue.onCreated(function () {                                                                         // 56
	this.showOffline = new ReactiveVar({});                                                                               // 57
	this.subscribe('livechat:queue');                                                                                     // 59
	this.subscribe('livechat:agents');                                                                                    // 60
	this.subscribe('livechat:departments');                                                                               // 61
});                                                                                                                    // 62
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.livechatTriggers.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/template.livechatTriggers.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("livechatTriggers");                                                                              // 2
Template["livechatTriggers"] = new Template("Template.livechatTriggers", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return "view-livechat-manager";                                                                                    // 6
  }, function() {                                                                                                      // 7
    return Spacebars.include(view.lookupTemplate("requiresPermission"), function() {                                   // 8
      return [ "\n\t\t", HTML.DIV({                                                                                    // 9
        class: "list"                                                                                                  // 10
      }, "\n\t\t\t", HTML.TABLE("\n\t\t\t\t", HTML.THEAD("\n\t\t\t\t\t", HTML.TR("\n\t\t\t\t\t\t", HTML.TH({           // 11
        width: "30%"                                                                                                   // 12
      }, Blaze.View("lookup:_", function() {                                                                           // 13
        return Spacebars.mustache(view.lookup("_"), "Name");                                                           // 14
      })), "\n\t\t\t\t\t\t", HTML.TH({                                                                                 // 15
        width: "50%"                                                                                                   // 16
      }, Blaze.View("lookup:_", function() {                                                                           // 17
        return Spacebars.mustache(view.lookup("_"), "Description");                                                    // 18
      })), "\n\t\t\t\t\t\t", HTML.TH({                                                                                 // 19
        width: "20%"                                                                                                   // 20
      }, Blaze.View("lookup:_", function() {                                                                           // 21
        return Spacebars.mustache(view.lookup("_"), "Enabled");                                                        // 22
      })), "\n\t\t\t\t\t\t", HTML.TH(Blaze.View("lookup:_", function() {                                               // 23
        return Spacebars.mustache(view.lookup("_"), "Delete");                                                         // 24
      })), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.TBODY("\n\t\t\t\t\t", Blaze.Each(function() {            // 25
        return Spacebars.call(view.lookup("triggers"));                                                                // 26
      }, function() {                                                                                                  // 27
        return [ "\n\t\t\t\t\t\t", HTML.TR({                                                                           // 28
          class: "trigger-info row-link",                                                                              // 29
          "data-id": function() {                                                                                      // 30
            return Spacebars.mustache(view.lookup("_id"));                                                             // 31
          }                                                                                                            // 32
        }, "\n\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:name", function() {                                          // 33
          return Spacebars.mustache(view.lookup("name"));                                                              // 34
        })), "\n\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:description", function() {                                 // 35
          return Spacebars.mustache(view.lookup("description"));                                                       // 36
        })), "\n\t\t\t\t\t\t\t", HTML.TD(Blaze.If(function() {                                                         // 37
          return Spacebars.call(view.lookup("enabled"));                                                               // 38
        }, function() {                                                                                                // 39
          return Blaze.View("lookup:_", function() {                                                                   // 40
            return Spacebars.mustache(view.lookup("_"), "Yes");                                                        // 41
          });                                                                                                          // 42
        }, function() {                                                                                                // 43
          return Blaze.View("lookup:_", function() {                                                                   // 44
            return Spacebars.mustache(view.lookup("_"), "No");                                                         // 45
          });                                                                                                          // 46
        })), "\n\t\t\t\t\t\t\t", HTML.TD(HTML.A({                                                                      // 47
          href: "#remove",                                                                                             // 48
          class: "remove-trigger"                                                                                      // 49
        }, HTML.I({                                                                                                    // 50
          class: "icon-trash"                                                                                          // 51
        }))), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                                                                     // 52
      }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\n\t\t", HTML.A({                                                  // 53
        href: function() {                                                                                             // 54
          return Spacebars.mustache(view.lookup("pathFor"), "livechat-trigger-new");                                   // 55
        },                                                                                                             // 56
        class: "button primary"                                                                                        // 57
      }, Blaze.View("lookup:_", function() {                                                                           // 58
        return Spacebars.mustache(view.lookup("_"), "New_Trigger");                                                    // 59
      })), "\n\t" ];                                                                                                   // 60
    });                                                                                                                // 61
  });                                                                                                                  // 62
}));                                                                                                                   // 63
                                                                                                                       // 64
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"livechatTriggers.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/livechatTriggers.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.livechatTriggers.helpers({                                                                                    // 1
	triggers: function () {                                                                                               // 2
		return LivechatTrigger.find();                                                                                       // 3
	}                                                                                                                     // 4
});                                                                                                                    // 1
Template.livechatTriggers.events({                                                                                     // 7
	'click .remove-trigger': function (e /*, instance*/) {                                                                // 8
		var _this = this;                                                                                                    // 8
                                                                                                                       //
		e.preventDefault();                                                                                                  // 9
		e.stopPropagation();                                                                                                 // 10
		swal({                                                                                                               // 12
			title: t('Are_you_sure'),                                                                                           // 13
			type: 'warning',                                                                                                    // 14
			showCancelButton: true,                                                                                             // 15
			confirmButtonColor: '#DD6B55',                                                                                      // 16
			confirmButtonText: t('Yes'),                                                                                        // 17
			cancelButtonText: t('Cancel'),                                                                                      // 18
			closeOnConfirm: false,                                                                                              // 19
			html: false                                                                                                         // 20
		}, function () {                                                                                                     // 12
			Meteor.call('livechat:removeTrigger', _this._id, function (error /*, result*/) {                                    // 22
				if (error) {                                                                                                       // 23
					return handleError(error);                                                                                        // 24
				}                                                                                                                  // 25
                                                                                                                       //
				swal({                                                                                                             // 26
					title: t('Removed'),                                                                                              // 27
					text: t('Trigger_removed'),                                                                                       // 28
					type: 'success',                                                                                                  // 29
					timer: 1000,                                                                                                      // 30
					showConfirmButton: false                                                                                          // 31
				});                                                                                                                // 26
			});                                                                                                                 // 33
		});                                                                                                                  // 34
	},                                                                                                                    // 35
	'click .trigger-info': function (e /*, instance*/) {                                                                  // 37
		e.preventDefault();                                                                                                  // 38
		FlowRouter.go('livechat-trigger-edit', {                                                                             // 39
			_id: this._id                                                                                                       // 39
		});                                                                                                                  // 39
	},                                                                                                                    // 40
	'click .delete-trigger': function (e /*, instance*/) {                                                                // 42
		var _this2 = this;                                                                                                   // 42
                                                                                                                       //
		e.preventDefault();                                                                                                  // 43
		swal({                                                                                                               // 45
			title: t('Are_you_sure'),                                                                                           // 46
			type: 'warning',                                                                                                    // 47
			showCancelButton: true,                                                                                             // 48
			confirmButtonColor: '#DD6B55',                                                                                      // 49
			confirmButtonText: t('Yes'),                                                                                        // 50
			cancelButtonText: t('Cancel'),                                                                                      // 51
			closeOnConfirm: false,                                                                                              // 52
			html: false                                                                                                         // 53
		}, function () {                                                                                                     // 45
			Meteor.call('livechat:removeTrigger', _this2._id, function (error /*, result*/) {                                   // 55
				if (error) {                                                                                                       // 56
					return handleError(error);                                                                                        // 57
				}                                                                                                                  // 58
                                                                                                                       //
				swal({                                                                                                             // 60
					title: t('Removed'),                                                                                              // 61
					text: t('Trigger_removed'),                                                                                       // 62
					type: 'success',                                                                                                  // 63
					timer: 1000,                                                                                                      // 64
					showConfirmButton: false                                                                                          // 65
				});                                                                                                                // 60
			});                                                                                                                 // 67
		});                                                                                                                  // 68
	}                                                                                                                     // 69
});                                                                                                                    // 7
Template.livechatTriggers.onCreated(function () {                                                                      // 72
	this.subscribe('livechat:triggers');                                                                                  // 73
});                                                                                                                    // 74
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.livechatTriggersForm.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/template.livechatTriggersForm.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("livechatTriggersForm");                                                                          // 2
Template["livechatTriggersForm"] = new Template("Template.livechatTriggersForm", (function() {                         // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return "view-livechat-manager";                                                                                    // 6
  }, function() {                                                                                                      // 7
    return Spacebars.include(view.lookupTemplate("requiresPermission"), function() {                                   // 8
      return [ "\n\t\t", HTML.FORM({                                                                                   // 9
        id: "trigger-form"                                                                                             // 10
      }, "\n\t\t\t", HTML.DIV({                                                                                        // 11
        class: "rocket-form"                                                                                           // 12
      }, "\n\t\t\t\t", HTML.FIELDSET("\n\t\t\t\t\t", HTML.DIV({                                                        // 13
        class: "input-line"                                                                                            // 14
      }, "\n\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 15
        return Spacebars.mustache(view.lookup("_"), "Enabled");                                                        // 16
      })), "\n\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                      // 17
        type: "radio",                                                                                                 // 18
        name: "enabled",                                                                                               // 19
        value: "1",                                                                                                    // 20
        checked: function() {                                                                                          // 21
          return Spacebars.mustache(view.lookup("$eq"), view.lookup("enabled"), true);                                 // 22
        }                                                                                                              // 23
      }), " ", Blaze.View("lookup:_", function() {                                                                     // 24
        return Spacebars.mustache(view.lookup("_"), "Yes");                                                            // 25
      })), "\n\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                                 // 26
        type: "radio",                                                                                                 // 27
        name: "enabled",                                                                                               // 28
        value: "0",                                                                                                    // 29
        checked: function() {                                                                                          // 30
          return Spacebars.mustache(view.lookup("$eq"), view.lookup("enabled"), false);                                // 31
        }                                                                                                              // 32
      }), " ", Blaze.View("lookup:_", function() {                                                                     // 33
        return Spacebars.mustache(view.lookup("_"), "No");                                                             // 34
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                              // 35
        class: "input-line"                                                                                            // 36
      }, "\n\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 37
        return Spacebars.mustache(view.lookup("_"), "Name");                                                           // 38
      })), "\n\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t", HTML.INPUT({                                                 // 39
        type: "text",                                                                                                  // 40
        name: "name",                                                                                                  // 41
        value: function() {                                                                                            // 42
          return Spacebars.mustache(view.lookup("name"));                                                              // 43
        }                                                                                                              // 44
      }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                               // 45
        class: "input-line"                                                                                            // 46
      }, "\n\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 47
        return Spacebars.mustache(view.lookup("_"), "Description");                                                    // 48
      })), "\n\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t", HTML.INPUT({                                                 // 49
        type: "text",                                                                                                  // 50
        name: "description",                                                                                           // 51
        value: function() {                                                                                            // 52
          return Spacebars.mustache(view.lookup("description"));                                                       // 53
        }                                                                                                              // 54
      }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.FIELDSET("\n\t\t\t\t\t", HTML.LEGEND(Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Condition");                                                      // 56
      })), "\n\t\t\t\t\t", HTML.DIV({                                                                                  // 57
        class: "conditions"                                                                                            // 58
      }, "\n\t\t\t\t\t\t", Blaze.Each(function() {                                                                     // 59
        return Spacebars.call(view.lookup("conditions"));                                                              // 60
      }, function() {                                                                                                  // 61
        return [ "\n\t\t\t\t\t\t\t", Spacebars.include(view.lookupTemplate("livechatTriggerCondition")), "\n\t\t\t\t\t\t" ];
      }), "\n\t\t\t\t\t\t", Blaze.Unless(function() {                                                                  // 63
        return Spacebars.call(view.lookup("conditions"));                                                              // 64
      }, function() {                                                                                                  // 65
        return [ "\n\t\t\t\t\t\t\t", Spacebars.include(view.lookupTemplate("livechatTriggerCondition")), "\n\t\t\t\t\t\t" ];
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.FIELDSET("\n\t\t\t\t\t", HTML.LEGEND(Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Action");                                                         // 68
      })), "\n\t\t\t\t\t", HTML.DIV({                                                                                  // 69
        class: "actions"                                                                                               // 70
      }, "\n\t\t\t\t\t\t", Blaze.Each(function() {                                                                     // 71
        return Spacebars.call(view.lookup("actions"));                                                                 // 72
      }, function() {                                                                                                  // 73
        return [ "\n\t\t\t\t\t\t\t", Spacebars.include(view.lookupTemplate("livechatTriggerAction")), "\n\t\t\t\t\t\t" ];
      }), "\n\t\t\t\t\t\t", Blaze.Unless(function() {                                                                  // 75
        return Spacebars.call(view.lookup("actions"));                                                                 // 76
      }, function() {                                                                                                  // 77
        return [ "\n\t\t\t\t\t\t\t", Spacebars.include(view.lookupTemplate("livechatTriggerAction")), "\n\t\t\t\t\t\t" ];
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                     // 79
        class: "submit"                                                                                                // 80
      }, "\n\t\t\t\t\t", HTML.BUTTON({                                                                                 // 81
        class: "button back",                                                                                          // 82
        type: "button"                                                                                                 // 83
      }, HTML.I({                                                                                                      // 84
        class: "icon-left-big"                                                                                         // 85
      }), HTML.SPAN(Blaze.View("lookup:_", function() {                                                                // 86
        return Spacebars.mustache(view.lookup("_"), "Back");                                                           // 87
      }))), "\n\t\t\t\t\t", HTML.BUTTON({                                                                              // 88
        class: "button primary save"                                                                                   // 89
      }, HTML.I({                                                                                                      // 90
        class: "icon-floppy"                                                                                           // 91
      }), HTML.SPAN(Blaze.View("lookup:_", function() {                                                                // 92
        return Spacebars.mustache(view.lookup("_"), "Save");                                                           // 93
      }))), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t" ];                                                           // 94
    });                                                                                                                // 95
  });                                                                                                                  // 96
}));                                                                                                                   // 97
                                                                                                                       // 98
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"livechatTriggersForm.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/livechatTriggersForm.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var toastr = void 0;                                                                                                   // 1
module.watch(require("toastr"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		toastr = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
Template.livechatTriggersForm.helpers({                                                                                // 2
	name: function () {                                                                                                   // 3
		var trigger = LivechatTrigger.findOne(FlowRouter.getParam('_id'));                                                   // 4
		return trigger && trigger.name;                                                                                      // 5
	},                                                                                                                    // 6
	description: function () {                                                                                            // 7
		var trigger = LivechatTrigger.findOne(FlowRouter.getParam('_id'));                                                   // 8
		return trigger && trigger.description;                                                                               // 9
	},                                                                                                                    // 10
	enabled: function () {                                                                                                // 11
		var trigger = LivechatTrigger.findOne(FlowRouter.getParam('_id'));                                                   // 12
		return trigger && trigger.enabled;                                                                                   // 13
	},                                                                                                                    // 14
	conditions: function () {                                                                                             // 15
		var trigger = LivechatTrigger.findOne(FlowRouter.getParam('_id'));                                                   // 16
                                                                                                                       //
		if (!trigger) {                                                                                                      // 17
			return [];                                                                                                          // 18
		}                                                                                                                    // 19
                                                                                                                       //
		return trigger.conditions;                                                                                           // 21
	},                                                                                                                    // 22
	actions: function () {                                                                                                // 23
		var trigger = LivechatTrigger.findOne(FlowRouter.getParam('_id'));                                                   // 24
                                                                                                                       //
		if (!trigger) {                                                                                                      // 25
			return [];                                                                                                          // 26
		}                                                                                                                    // 27
                                                                                                                       //
		return trigger.actions;                                                                                              // 29
	}                                                                                                                     // 30
});                                                                                                                    // 2
Template.livechatTriggersForm.events({                                                                                 // 33
	'submit #trigger-form': function (e, instance) {                                                                      // 34
		e.preventDefault();                                                                                                  // 35
		var $btn = instance.$('button.save');                                                                                // 36
		var oldBtnValue = $btn.html();                                                                                       // 38
		$btn.html(t('Saving'));                                                                                              // 39
		var data = {                                                                                                         // 41
			_id: FlowRouter.getParam('_id'),                                                                                    // 42
			name: instance.$('input[name=name]').val(),                                                                         // 43
			description: instance.$('input[name=description]').val(),                                                           // 44
			enabled: instance.$('input[name=enabled]:checked').val() === '1' ? true : false,                                    // 45
			conditions: [],                                                                                                     // 46
			actions: []                                                                                                         // 47
		};                                                                                                                   // 41
		$('.each-condition').each(function () {                                                                              // 50
			data.conditions.push({                                                                                              // 51
				name: $('.trigger-condition', this).val(),                                                                         // 52
				value: $("." + $('.trigger-condition', this).val() + "-value").val()                                               // 53
			});                                                                                                                 // 51
		});                                                                                                                  // 55
		$('.each-action').each(function () {                                                                                 // 57
			if ($('.trigger-action', this).val() === 'send-message') {                                                          // 58
				data.actions.push({                                                                                                // 59
					name: $('.trigger-action', this).val(),                                                                           // 60
					params: {                                                                                                         // 61
						name: $('[name=send-message-name]', this).val(),                                                                 // 62
						msg: $('[name=send-message-msg]', this).val()                                                                    // 63
					}                                                                                                                 // 61
				});                                                                                                                // 59
			} else {                                                                                                            // 66
				data.actions.push({                                                                                                // 67
					name: $('.trigger-action', this).val(),                                                                           // 68
					value: $("." + $('.trigger-action', this).val() + "-value").val()                                                 // 69
				});                                                                                                                // 67
			}                                                                                                                   // 71
		});                                                                                                                  // 72
		Meteor.call('livechat:saveTrigger', data, function (error /*, result*/) {                                            // 74
			$btn.html(oldBtnValue);                                                                                             // 75
                                                                                                                       //
			if (error) {                                                                                                        // 76
				return handleError(error);                                                                                         // 77
			}                                                                                                                   // 78
                                                                                                                       //
			FlowRouter.go('livechat-triggers');                                                                                 // 80
			toastr.success(t('Saved'));                                                                                         // 82
		});                                                                                                                  // 83
	},                                                                                                                    // 84
	'click button.back': function (e /*, instance*/) {                                                                    // 86
		e.preventDefault();                                                                                                  // 87
		FlowRouter.go('livechat-triggers');                                                                                  // 88
	}                                                                                                                     // 89
});                                                                                                                    // 33
Template.livechatTriggersForm.onCreated(function () {                                                                  // 92
	this.subscribe('livechat:triggers', FlowRouter.getParam('_id'));                                                      // 93
});                                                                                                                    // 94
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.livechatUsers.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/template.livechatUsers.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("livechatUsers");                                                                                 // 2
Template["livechatUsers"] = new Template("Template.livechatUsers", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return "view-livechat-manager";                                                                                    // 6
  }, function() {                                                                                                      // 7
    return Spacebars.include(view.lookupTemplate("requiresPermission"), function() {                                   // 8
      return [ "\n\t\t", HTML.H2(Blaze.View("lookup:_", function() {                                                   // 9
        return Spacebars.mustache(view.lookup("_"), "Livechat_managers");                                              // 10
      })), "\n\t\t", HTML.FORM({                                                                                       // 11
        id: "form-manager",                                                                                            // 12
        class: "inline"                                                                                                // 13
      }, "\n\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                                    // 14
        return Spacebars.mustache(view.lookup("_"), "Add_manager");                                                    // 15
      })), "\n\t\t\t", Blaze._TemplateWith(function() {                                                                // 16
        return {                                                                                                       // 17
          settings: Spacebars.call(view.lookup("managerAutocompleteSettings")),                                        // 18
          name: Spacebars.call("username"),                                                                            // 19
          class: Spacebars.call("search"),                                                                             // 20
          placeholder: Spacebars.call(Spacebars.dataMustache(view.lookup("_"), "Search_by_username")),                 // 21
          autocomplete: Spacebars.call("off")                                                                          // 22
        };                                                                                                             // 23
      }, function() {                                                                                                  // 24
        return Spacebars.include(view.lookupTemplate("inputAutocomplete"));                                            // 25
      }), "\n\t\t\t", HTML.BUTTON({                                                                                    // 26
        name: "add",                                                                                                   // 27
        class: "button primary add"                                                                                    // 28
      }, Blaze.View("lookup:_", function() {                                                                           // 29
        return Spacebars.mustache(view.lookup("_"), "Add");                                                            // 30
      })), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                             // 31
        class: "list"                                                                                                  // 32
      }, "\n\t\t\t", HTML.TABLE("\n\t\t\t\t", HTML.THEAD("\n\t\t\t\t\t", HTML.TR("\n\t\t\t\t\t\t", HTML.TH(HTML.CharRef({
        html: "&nbsp;",                                                                                                // 34
        str: " "                                                                                                       // 35
      })), "\n\t\t\t\t\t\t", HTML.TH({                                                                                 // 36
        width: "34%"                                                                                                   // 37
      }, Blaze.View("lookup:_", function() {                                                                           // 38
        return Spacebars.mustache(view.lookup("_"), "Name");                                                           // 39
      })), "\n\t\t\t\t\t\t", HTML.TH({                                                                                 // 40
        width: "33%"                                                                                                   // 41
      }, Blaze.View("lookup:_", function() {                                                                           // 42
        return Spacebars.mustache(view.lookup("_"), "Username");                                                       // 43
      })), "\n\t\t\t\t\t\t", HTML.TH({                                                                                 // 44
        width: "33%"                                                                                                   // 45
      }, Blaze.View("lookup:_", function() {                                                                           // 46
        return Spacebars.mustache(view.lookup("_"), "Email");                                                          // 47
      })), "\n\t\t\t\t\t\t", HTML.TH(HTML.CharRef({                                                                    // 48
        html: "&nbsp;",                                                                                                // 49
        str: " "                                                                                                       // 50
      })), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.TBODY("\n\t\t\t\t\t", Blaze.Each(function() {            // 51
        return Spacebars.call(view.lookup("managers"));                                                                // 52
      }, function() {                                                                                                  // 53
        return [ "\n\t\t\t\t\t\t", HTML.TR({                                                                           // 54
          class: "user-info",                                                                                          // 55
          "data-id": function() {                                                                                      // 56
            return Spacebars.mustache(view.lookup("_id"));                                                             // 57
          }                                                                                                            // 58
        }, "\n\t\t\t\t\t\t\t", HTML.TD("\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                // 59
          class: function() {                                                                                          // 60
            return [ "user-image status-", Spacebars.mustache(view.lookup("status")) ];                                // 61
          }                                                                                                            // 62
        }, "\n\t\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                    // 63
          return {                                                                                                     // 64
            username: Spacebars.call(view.lookup("username"))                                                          // 65
          };                                                                                                           // 66
        }, function() {                                                                                                // 67
          return Spacebars.include(view.lookupTemplate("avatar"));                                                     // 68
        }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:name", function() {
          return Spacebars.mustache(view.lookup("name"));                                                              // 70
        })), "\n\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:username", function() {                                    // 71
          return Spacebars.mustache(view.lookup("username"));                                                          // 72
        })), "\n\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:emailAddress", function() {                                // 73
          return Spacebars.mustache(view.lookup("emailAddress"));                                                      // 74
        })), "\n\t\t\t\t\t\t\t", HTML.TD(HTML.A({                                                                      // 75
          href: "#remove",                                                                                             // 76
          class: "remove-manager"                                                                                      // 77
        }, HTML.I({                                                                                                    // 78
          class: "icon-trash"                                                                                          // 79
        }))), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                                                                     // 80
      }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.H2(Blaze.View("lookup:_", function() {                 // 81
        return Spacebars.mustache(view.lookup("_"), "Livechat_agents");                                                // 82
      })), "\n\t\t", HTML.FORM({                                                                                       // 83
        id: "form-agent",                                                                                              // 84
        class: "inline"                                                                                                // 85
      }, "\n\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                                    // 86
        return Spacebars.mustache(view.lookup("_"), "Add_agent");                                                      // 87
      })), "\n\t\t\t", Blaze._TemplateWith(function() {                                                                // 88
        return {                                                                                                       // 89
          settings: Spacebars.call(view.lookup("agentAutocompleteSettings")),                                          // 90
          name: Spacebars.call("username"),                                                                            // 91
          class: Spacebars.call("search"),                                                                             // 92
          placeholder: Spacebars.call(Spacebars.dataMustache(view.lookup("_"), "Search_by_username")),                 // 93
          autocomplete: Spacebars.call("off")                                                                          // 94
        };                                                                                                             // 95
      }, function() {                                                                                                  // 96
        return Spacebars.include(view.lookupTemplate("inputAutocomplete"));                                            // 97
      }), "\n\t\t\t", HTML.BUTTON({                                                                                    // 98
        name: "add",                                                                                                   // 99
        class: "button primary add"                                                                                    // 100
      }, Blaze.View("lookup:_", function() {                                                                           // 101
        return Spacebars.mustache(view.lookup("_"), "Add");                                                            // 102
      })), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                             // 103
        class: "list"                                                                                                  // 104
      }, "\n\t\t\t", HTML.TABLE("\n\t\t\t\t", HTML.THEAD("\n\t\t\t\t\t", HTML.TR("\n\t\t\t\t\t\t", HTML.TH(HTML.CharRef({
        html: "&nbsp;",                                                                                                // 106
        str: " "                                                                                                       // 107
      })), "\n\t\t\t\t\t\t", HTML.TH({                                                                                 // 108
        width: "34%"                                                                                                   // 109
      }, Blaze.View("lookup:_", function() {                                                                           // 110
        return Spacebars.mustache(view.lookup("_"), "Name");                                                           // 111
      })), "\n\t\t\t\t\t\t", HTML.TH({                                                                                 // 112
        width: "33%"                                                                                                   // 113
      }, Blaze.View("lookup:_", function() {                                                                           // 114
        return Spacebars.mustache(view.lookup("_"), "Username");                                                       // 115
      })), "\n\t\t\t\t\t\t", HTML.TH({                                                                                 // 116
        width: "33%"                                                                                                   // 117
      }, Blaze.View("lookup:_", function() {                                                                           // 118
        return Spacebars.mustache(view.lookup("_"), "Email");                                                          // 119
      })), "\n\t\t\t\t\t\t", HTML.TH(HTML.CharRef({                                                                    // 120
        html: "&nbsp;",                                                                                                // 121
        str: " "                                                                                                       // 122
      })), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.TBODY("\n\t\t\t\t\t", Blaze.Each(function() {            // 123
        return Spacebars.call(view.lookup("agents"));                                                                  // 124
      }, function() {                                                                                                  // 125
        return [ "\n\t\t\t\t\t\t", HTML.TR({                                                                           // 126
          class: "user-info",                                                                                          // 127
          "data-id": function() {                                                                                      // 128
            return Spacebars.mustache(view.lookup("_id"));                                                             // 129
          }                                                                                                            // 130
        }, "\n\t\t\t\t\t\t\t", HTML.TD("\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                // 131
          class: function() {                                                                                          // 132
            return [ "user-image status-", Spacebars.mustache(view.lookup("status")) ];                                // 133
          }                                                                                                            // 134
        }, "\n\t\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                    // 135
          return {                                                                                                     // 136
            username: Spacebars.call(view.lookup("username"))                                                          // 137
          };                                                                                                           // 138
        }, function() {                                                                                                // 139
          return Spacebars.include(view.lookupTemplate("avatar"));                                                     // 140
        }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:name", function() {
          return Spacebars.mustache(view.lookup("name"));                                                              // 142
        })), "\n\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:username", function() {                                    // 143
          return Spacebars.mustache(view.lookup("username"));                                                          // 144
        })), "\n\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:emailAddress", function() {                                // 145
          return Spacebars.mustache(view.lookup("emailAddress"));                                                      // 146
        })), "\n\t\t\t\t\t\t\t", HTML.TD(HTML.A({                                                                      // 147
          href: "#remove",                                                                                             // 148
          class: "remove-agent"                                                                                        // 149
        }, HTML.I({                                                                                                    // 150
          class: "icon-trash"                                                                                          // 151
        }))), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                                                                     // 152
      }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t" ];                                                             // 153
    });                                                                                                                // 154
  });                                                                                                                  // 155
}));                                                                                                                   // 156
                                                                                                                       // 157
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"livechatUsers.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/livechatUsers.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var toastr = void 0;                                                                                                   // 1
module.watch(require("toastr"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		toastr = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
var ManagerUsers = void 0;                                                                                             // 2
Meteor.startup(function () {                                                                                           // 4
	ManagerUsers = new Mongo.Collection('managerUsers');                                                                  // 5
});                                                                                                                    // 6
Template.livechatUsers.helpers({                                                                                       // 8
	managers: function () {                                                                                               // 9
		return ManagerUsers.find({}, {                                                                                       // 10
			sort: {                                                                                                             // 10
				name: 1                                                                                                            // 10
			}                                                                                                                   // 10
		});                                                                                                                  // 10
	},                                                                                                                    // 11
	agents: function () {                                                                                                 // 12
		return AgentUsers.find({}, {                                                                                         // 13
			sort: {                                                                                                             // 13
				name: 1                                                                                                            // 13
			}                                                                                                                   // 13
		});                                                                                                                  // 13
	},                                                                                                                    // 14
	emailAddress: function () {                                                                                           // 15
		if (this.emails && this.emails.length > 0) {                                                                         // 16
			return this.emails[0].address;                                                                                      // 17
		}                                                                                                                    // 18
	},                                                                                                                    // 19
	agentAutocompleteSettings: function () {                                                                              // 20
		return {                                                                                                             // 21
			limit: 10,                                                                                                          // 22
			// inputDelay: 300                                                                                                  // 23
			rules: [{                                                                                                           // 24
				// @TODO maybe change this 'collection' and/or template                                                            // 25
				collection: 'UserAndRoom',                                                                                         // 26
				subscription: 'userAutocomplete',                                                                                  // 27
				field: 'username',                                                                                                 // 28
				template: Template.userSearch,                                                                                     // 29
				noMatchTemplate: Template.userSearchEmpty,                                                                         // 30
				matchAll: true,                                                                                                    // 31
				filter: {                                                                                                          // 32
					exceptions: _.map(AgentUsers.find({}, {                                                                           // 33
						fields: {                                                                                                        // 33
							username: 1                                                                                                     // 33
						}                                                                                                                // 33
					}).fetch(), function (user) {                                                                                     // 33
						return user.username;                                                                                            // 33
					})                                                                                                                // 33
				},                                                                                                                 // 32
				selector: function (match) {                                                                                       // 35
					return {                                                                                                          // 36
						term: match                                                                                                      // 36
					};                                                                                                                // 36
				},                                                                                                                 // 37
				sort: 'username'                                                                                                   // 38
			}]                                                                                                                  // 24
		};                                                                                                                   // 21
	},                                                                                                                    // 41
	managerAutocompleteSettings: function () {                                                                            // 42
		return {                                                                                                             // 43
			limit: 10,                                                                                                          // 44
			// inputDelay: 300                                                                                                  // 45
			rules: [{                                                                                                           // 46
				// @TODO maybe change this 'collection' and/or template                                                            // 47
				collection: 'UserAndRoom',                                                                                         // 48
				subscription: 'userAutocomplete',                                                                                  // 49
				field: 'username',                                                                                                 // 50
				template: Template.userSearch,                                                                                     // 51
				noMatchTemplate: Template.userSearchEmpty,                                                                         // 52
				matchAll: true,                                                                                                    // 53
				filter: {                                                                                                          // 54
					exceptions: _.map(ManagerUsers.find({}, {                                                                         // 55
						fields: {                                                                                                        // 55
							username: 1                                                                                                     // 55
						}                                                                                                                // 55
					}).fetch(), function (user) {                                                                                     // 55
						return user.username;                                                                                            // 55
					})                                                                                                                // 55
				},                                                                                                                 // 54
				selector: function (match) {                                                                                       // 57
					return {                                                                                                          // 58
						term: match                                                                                                      // 58
					};                                                                                                                // 58
				},                                                                                                                 // 59
				sort: 'username'                                                                                                   // 60
			}]                                                                                                                  // 46
		};                                                                                                                   // 43
	}                                                                                                                     // 63
});                                                                                                                    // 8
Template.livechatUsers.events({                                                                                        // 66
	'click .remove-manager': function (e /*, instance*/) {                                                                // 67
		var _this = this;                                                                                                    // 67
                                                                                                                       //
		e.preventDefault();                                                                                                  // 68
		swal({                                                                                                               // 70
			title: t('Are_you_sure'),                                                                                           // 71
			type: 'warning',                                                                                                    // 72
			showCancelButton: true,                                                                                             // 73
			confirmButtonColor: '#DD6B55',                                                                                      // 74
			confirmButtonText: t('Yes'),                                                                                        // 75
			cancelButtonText: t('Cancel'),                                                                                      // 76
			closeOnConfirm: false,                                                                                              // 77
			html: false                                                                                                         // 78
		}, function () {                                                                                                     // 70
			Meteor.call('livechat:removeManager', _this.username, function (error /*, result*/) {                               // 80
				if (error) {                                                                                                       // 81
					return handleError(error);                                                                                        // 82
				}                                                                                                                  // 83
                                                                                                                       //
				swal({                                                                                                             // 84
					title: t('Removed'),                                                                                              // 85
					text: t('Manager_removed'),                                                                                       // 86
					type: 'success',                                                                                                  // 87
					timer: 1000,                                                                                                      // 88
					showConfirmButton: false                                                                                          // 89
				});                                                                                                                // 84
			});                                                                                                                 // 91
		});                                                                                                                  // 92
	},                                                                                                                    // 93
	'click .remove-agent': function (e /*, instance*/) {                                                                  // 94
		var _this2 = this;                                                                                                   // 94
                                                                                                                       //
		e.preventDefault();                                                                                                  // 95
		swal({                                                                                                               // 97
			title: t('Are_you_sure'),                                                                                           // 98
			type: 'warning',                                                                                                    // 99
			showCancelButton: true,                                                                                             // 100
			confirmButtonColor: '#DD6B55',                                                                                      // 101
			confirmButtonText: t('Yes'),                                                                                        // 102
			cancelButtonText: t('Cancel'),                                                                                      // 103
			closeOnConfirm: false,                                                                                              // 104
			html: false                                                                                                         // 105
		}, function () {                                                                                                     // 97
			Meteor.call('livechat:removeAgent', _this2.username, function (error /*, result*/) {                                // 107
				if (error) {                                                                                                       // 108
					return handleError(error);                                                                                        // 109
				}                                                                                                                  // 110
                                                                                                                       //
				swal({                                                                                                             // 111
					title: t('Removed'),                                                                                              // 112
					text: t('Agent_removed'),                                                                                         // 113
					type: 'success',                                                                                                  // 114
					timer: 1000,                                                                                                      // 115
					showConfirmButton: false                                                                                          // 116
				});                                                                                                                // 111
			});                                                                                                                 // 118
		});                                                                                                                  // 119
	},                                                                                                                    // 120
	'submit #form-manager': function (e /*, instance*/) {                                                                 // 121
		e.preventDefault();                                                                                                  // 122
                                                                                                                       //
		if (e.currentTarget.elements.username.value.trim() === '') {                                                         // 124
			return toastr.error(t('Please_fill_a_username'));                                                                   // 125
		}                                                                                                                    // 126
                                                                                                                       //
		var oldBtnValue = e.currentTarget.elements.add.value;                                                                // 128
		e.currentTarget.elements.add.value = t('Saving');                                                                    // 130
		Meteor.call('livechat:addManager', e.currentTarget.elements.username.value, function (error /*, result*/) {          // 132
			e.currentTarget.elements.add.value = oldBtnValue;                                                                   // 133
                                                                                                                       //
			if (error) {                                                                                                        // 134
				return handleError(error);                                                                                         // 135
			}                                                                                                                   // 136
                                                                                                                       //
			toastr.success(t('Manager_added'));                                                                                 // 138
			e.currentTarget.reset();                                                                                            // 139
		});                                                                                                                  // 140
	},                                                                                                                    // 141
	'submit #form-agent': function (e /*, instance*/) {                                                                   // 142
		e.preventDefault();                                                                                                  // 143
                                                                                                                       //
		if (e.currentTarget.elements.username.value.trim() === '') {                                                         // 145
			return toastr.error(t('Please_fill_a_username'));                                                                   // 146
		}                                                                                                                    // 147
                                                                                                                       //
		var oldBtnValue = e.currentTarget.elements.add.value;                                                                // 149
		e.currentTarget.elements.add.value = t('Saving');                                                                    // 151
		Meteor.call('livechat:addAgent', e.currentTarget.elements.username.value, function (error /*, result*/) {            // 153
			e.currentTarget.elements.add.value = oldBtnValue;                                                                   // 154
                                                                                                                       //
			if (error) {                                                                                                        // 155
				return handleError(error);                                                                                         // 156
			}                                                                                                                   // 157
                                                                                                                       //
			toastr.success(t('Agent_added'));                                                                                   // 159
			e.currentTarget.reset();                                                                                            // 160
		});                                                                                                                  // 161
	}                                                                                                                     // 162
});                                                                                                                    // 66
Template.livechatUsers.onCreated(function () {                                                                         // 165
	this.subscribe('livechat:agents');                                                                                    // 166
	this.subscribe('livechat:managers');                                                                                  // 167
});                                                                                                                    // 168
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.livechatOfficeHours.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/template.livechatOfficeHours.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("livechatOfficeHours");                                                                           // 2
Template["livechatOfficeHours"] = new Template("Template.livechatOfficeHours", (function() {                           // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return "view-livechat-manager";                                                                                    // 6
  }, function() {                                                                                                      // 7
    return Spacebars.include(view.lookupTemplate("requiresPermission"), function() {                                   // 8
      return [ "\n\t\t", HTML.DIV({                                                                                    // 9
        class: "livechat-officeHours-div"                                                                              // 10
      }, "\n\t\t\t", HTML.FORM({                                                                                       // 11
        class: "rocket-form",                                                                                          // 12
        id: "officeHoursForm"                                                                                          // 13
      }, "\n\n\t\t\t\t", HTML.FIELDSET("\n\t\t\t\t\t", HTML.LEGEND(Blaze.View("lookup:_", function() {                 // 14
        return Spacebars.mustache(view.lookup("_"), "Office_hours_enabled");                                           // 15
      })), "\n\t\t\t\t\t", HTML.INPUT({                                                                                // 16
        type: "radio",                                                                                                 // 17
        class: "preview-settings",                                                                                     // 18
        name: "enableOfficeHours",                                                                                     // 19
        id: "enableOfficeHoursTrue",                                                                                   // 20
        checked: function() {                                                                                          // 21
          return Spacebars.mustache(view.lookup("enableOfficeHoursTrueChecked"));                                      // 22
        },                                                                                                             // 23
        value: "true"                                                                                                  // 24
      }), "\n\t\t\t\t\t", HTML.LABEL({                                                                                 // 25
        for: "displayOfflineFormTrue"                                                                                  // 26
      }, Blaze.View("lookup:_", function() {                                                                           // 27
        return Spacebars.mustache(view.lookup("_"), "True");                                                           // 28
      })), "\n\t\t\t\t\t", HTML.INPUT({                                                                                // 29
        type: "radio",                                                                                                 // 30
        class: "preview-settings",                                                                                     // 31
        name: "enableOfficeHours",                                                                                     // 32
        id: "enableOfficeHoursFalse",                                                                                  // 33
        checked: function() {                                                                                          // 34
          return Spacebars.mustache(view.lookup("enableOfficeHoursFalseChecked"));                                     // 35
        },                                                                                                             // 36
        value: "false"                                                                                                 // 37
      }), "\n\t\t\t\t\t", HTML.LABEL({                                                                                 // 38
        for: "displayOfflineFormFalse"                                                                                 // 39
      }, Blaze.View("lookup:_", function() {                                                                           // 40
        return Spacebars.mustache(view.lookup("_"), "False");                                                          // 41
      })), "\n\t\t\t\t"), "\n\n\t\t\t\t", HTML.Comment(" days open "), "\n\t\t\t\t", HTML.FIELDSET("\n\t\t\t\t\t", HTML.LEGEND(Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Open_days_of_the_week");                                          // 43
      })), "\n\t\t\t\t\t", Blaze.Each(function() {                                                                     // 44
        return {                                                                                                       // 45
          _sequence: Spacebars.call(view.lookup("days")),                                                              // 46
          _variable: "day"                                                                                             // 47
        };                                                                                                             // 48
      }, function() {                                                                                                  // 49
        return [ "\n\t\t\t\t\t\t", Blaze.If(function() {                                                               // 50
          return Spacebars.dataMustache(view.lookup("open"), view.lookup("day"));                                      // 51
        }, function() {                                                                                                // 52
          return [ "\n\t\t\t\t\t\t\t", HTML.LABEL({                                                                    // 53
            class: "dayOpenCheck"                                                                                      // 54
          }, HTML.INPUT({                                                                                              // 55
            type: "checkbox",                                                                                          // 56
            name: function() {                                                                                         // 57
              return Spacebars.mustache(view.lookup("openName"), view.lookup("day"));                                  // 58
            },                                                                                                         // 59
            checked: ""                                                                                                // 60
          }), Blaze.View("lookup:name", function() {                                                                   // 61
            return Spacebars.mustache(view.lookup("name"), view.lookup("day"));                                        // 62
          })), "\n\t\t\t\t\t\t" ];                                                                                     // 63
        }, function() {                                                                                                // 64
          return [ "\n\t\t\t\t\t\t\t", HTML.LABEL({                                                                    // 65
            class: "dayOpenCheck"                                                                                      // 66
          }, HTML.INPUT({                                                                                              // 67
            type: "checkbox",                                                                                          // 68
            name: function() {                                                                                         // 69
              return Spacebars.mustache(view.lookup("openName"), view.lookup("day"));                                  // 70
            }                                                                                                          // 71
          }), Blaze.View("lookup:name", function() {                                                                   // 72
            return Spacebars.mustache(view.lookup("name"), view.lookup("day"));                                        // 73
          })), "\n\t\t\t\t\t\t" ];                                                                                     // 74
        }), "\n\t\t\t\t\t" ];                                                                                          // 75
      }), "\n\t\t\t\t"), "\n\n\t\t\t\t", HTML.Comment(" times "), "\n\t\t\t\t", HTML.FIELDSET("\n\t\t\t\t\t", HTML.LEGEND(Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Hours");                                                          // 77
      })), "\n\t\t\t\t\t", Blaze.Each(function() {                                                                     // 78
        return {                                                                                                       // 79
          _sequence: Spacebars.call(view.lookup("days")),                                                              // 80
          _variable: "day"                                                                                             // 81
        };                                                                                                             // 82
      }, function() {                                                                                                  // 83
        return [ "\n\t\t\t\t\t\t", HTML.DIV({                                                                          // 84
          class: "input-line"                                                                                          // 85
        }, "\n\t\t\t\t\t\t\t", HTML.H1(HTML.STRONG(Blaze.View("lookup:name", function() {                              // 86
          return Spacebars.mustache(view.lookup("name"), view.lookup("day"));                                          // 87
        }))), "\n\t\t\t\t\t\t\t", HTML.TABLE({                                                                         // 88
          style: "width:100%;"                                                                                         // 89
        }, "\n\t\t\t\t\t\t\t\t", HTML.TR("\n\t\t\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:_", function() {           // 90
          return Spacebars.mustache(view.lookup("_"), "Open");                                                         // 91
        }), ":"), "\n\t\t\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:_", function() {                                  // 92
          return Spacebars.mustache(view.lookup("_"), "Close");                                                        // 93
        }), ":"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.TR("\n\t\t\t\t\t\t\t\t\t", HTML.TD("\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({
          style: "margin-right:30px"                                                                                   // 95
        }, "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                                                    // 96
          type: "time",                                                                                                // 97
          class: "preview-settings",                                                                                   // 98
          name: function() {                                                                                           // 99
            return Spacebars.mustache(view.lookup("startName"), view.lookup("day"));                                   // 100
          },                                                                                                           // 101
          id: function() {                                                                                             // 102
            return Spacebars.mustache(view.lookup("startName"), view.lookup("day"));                                   // 103
          },                                                                                                           // 104
          value: function() {                                                                                          // 105
            return Spacebars.mustache(view.lookup("start"), view.lookup("day"));                                       // 106
          },                                                                                                           // 107
          style: "width=100px;"                                                                                        // 108
        }), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t", HTML.TD("\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({
          style: "margin-right:30px"                                                                                   // 110
        }, "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                                                    // 111
          type: "time",                                                                                                // 112
          class: "preview-settings",                                                                                   // 113
          name: function() {                                                                                           // 114
            return Spacebars.mustache(view.lookup("finishName"), view.lookup("day"));                                  // 115
          },                                                                                                           // 116
          id: function() {                                                                                             // 117
            return Spacebars.mustache(view.lookup("finishName"), view.lookup("day"));                                  // 118
          },                                                                                                           // 119
          value: function() {                                                                                          // 120
            return Spacebars.mustache(view.lookup("finish"), view.lookup("day"));                                      // 121
          },                                                                                                           // 122
          style: "width=100px;"                                                                                        // 123
        }), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];
      }), "\n\t\t\t\t"), "\n\n\n\t\t\t\t", HTML.DIV({                                                                  // 125
        class: "submit"                                                                                                // 126
      }, "\n\t\t\t\t\t", HTML.BUTTON({                                                                                 // 127
        class: "button"                                                                                                // 128
      }, HTML.I({                                                                                                      // 129
        class: "icon-floppy"                                                                                           // 130
      }), Blaze.View("lookup:_", function() {                                                                          // 131
        return Spacebars.mustache(view.lookup("_"), "Save");                                                           // 132
      })), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t" ];                                                            // 133
    });                                                                                                                // 134
  });                                                                                                                  // 135
}));                                                                                                                   // 136
                                                                                                                       // 137
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"livechatOfficeHours.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/livechatOfficeHours.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var toastr = void 0;                                                                                                   // 1
module.watch(require("toastr"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		toastr = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
var moment = void 0;                                                                                                   // 1
module.watch(require("moment"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		moment = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 1);                                                                                                                 // 1
Template.livechatOfficeHours.helpers({                                                                                 // 5
	days: function () {                                                                                                   // 6
		return LivechatOfficeHour.find({}, {                                                                                 // 7
			sort: {                                                                                                             // 7
				code: 1                                                                                                            // 7
			}                                                                                                                   // 7
		});                                                                                                                  // 7
	},                                                                                                                    // 8
	startName: function (day) {                                                                                           // 9
		return day.day + "_start";                                                                                           // 10
	},                                                                                                                    // 11
	finishName: function (day) {                                                                                          // 12
		return day.day + "_finish";                                                                                          // 13
	},                                                                                                                    // 14
	openName: function (day) {                                                                                            // 15
		return day.day + "_open";                                                                                            // 16
	},                                                                                                                    // 17
	start: function (day) {                                                                                               // 18
		return Template.instance().dayVars[day.day].start.get();                                                             // 19
	},                                                                                                                    // 20
	finish: function (day) {                                                                                              // 21
		return Template.instance().dayVars[day.day].finish.get();                                                            // 22
	},                                                                                                                    // 24
	name: function (day) {                                                                                                // 25
		return day.day;                                                                                                      // 26
	},                                                                                                                    // 27
	open: function (day) {                                                                                                // 28
		return Template.instance().dayVars[day.day].open.get();                                                              // 29
	},                                                                                                                    // 30
	enableOfficeHoursTrueChecked: function () {                                                                           // 31
		if (Template.instance().enableOfficeHours.get()) {                                                                   // 32
			return 'checked';                                                                                                   // 33
		}                                                                                                                    // 34
	},                                                                                                                    // 35
	enableOfficeHoursFalseChecked: function () {                                                                          // 36
		if (!Template.instance().enableOfficeHours.get()) {                                                                  // 37
			return 'checked';                                                                                                   // 38
		}                                                                                                                    // 39
	}                                                                                                                     // 40
});                                                                                                                    // 5
Template.livechatOfficeHours.events({                                                                                  // 43
	'change .preview-settings, keydown .preview-settings': function (e, instance) {                                       // 44
		var temp = e.currentTarget.name.split('_');                                                                          // 45
		var newTime = moment(e.currentTarget.value, 'HH:mm'); // check if start and stop do not cross                        // 47
                                                                                                                       //
		if (temp[1] === 'start') {                                                                                           // 50
			if (newTime.isSameOrBefore(moment(instance.dayVars[temp[0]].finish.get(), 'HH:mm'))) {                              // 51
				instance.dayVars[temp[0]].start.set(e.currentTarget.value);                                                        // 52
			} else {                                                                                                            // 53
				e.currentTarget.value = instance.dayVars[temp[0]].start.get();                                                     // 54
			}                                                                                                                   // 55
		} else if (temp[1] === 'finish') {                                                                                   // 56
			if (newTime.isSameOrAfter(moment(instance.dayVars[temp[0]].start.get(), 'HH:mm'))) {                                // 57
				instance.dayVars[temp[0]].finish.set(e.currentTarget.value);                                                       // 58
			} else {                                                                                                            // 59
				e.currentTarget.value = instance.dayVars[temp[0]].finish.get();                                                    // 60
			}                                                                                                                   // 61
		}                                                                                                                    // 62
	},                                                                                                                    // 63
	'change .dayOpenCheck input': function (e, instance) {                                                                // 64
		var temp = e.currentTarget.name.split('_');                                                                          // 65
		instance.dayVars[temp[0]][temp[1]].set(e.target.checked);                                                            // 66
	},                                                                                                                    // 67
	'change .preview-settings, keyup .preview-settings': function (e, instance) {                                         // 68
		var value = e.currentTarget.value;                                                                                   // 69
                                                                                                                       //
		if (e.currentTarget.type === 'radio') {                                                                              // 70
			value = value === 'true';                                                                                           // 71
			instance[e.currentTarget.name].set(value);                                                                          // 72
		}                                                                                                                    // 73
	},                                                                                                                    // 74
	'submit .rocket-form': function (e, instance) {                                                                       // 75
		e.preventDefault(); // convert all times to utc then update them in db                                               // 76
                                                                                                                       //
		for (var d in meteorBabelHelpers.sanitizeForInObject(instance.dayVars)) {                                            // 79
			if (instance.dayVars.hasOwnProperty(d)) {                                                                           // 80
				var day = instance.dayVars[d];                                                                                     // 81
				var start_utc = moment(day.start.get(), 'HH:mm').utc().format('HH:mm');                                            // 82
				var finish_utc = moment(day.finish.get(), 'HH:mm').utc().format('HH:mm');                                          // 83
				Meteor.call('livechat:saveOfficeHours', d, start_utc, finish_utc, day.open.get(), function (err /*,result*/) {     // 85
					if (err) {                                                                                                        // 86
						return handleError(err);                                                                                         // 87
					}                                                                                                                 // 88
				});                                                                                                                // 89
			}                                                                                                                   // 90
		}                                                                                                                    // 91
                                                                                                                       //
		RocketChat.settings.set('Livechat_enable_office_hours', instance.enableOfficeHours.get(), function (err /*, success*/) {
			if (err) {                                                                                                          // 94
				return handleError(err);                                                                                           // 95
			}                                                                                                                   // 96
                                                                                                                       //
			toastr.success(t('Office_hours_updated'));                                                                          // 97
		});                                                                                                                  // 98
	}                                                                                                                     // 99
});                                                                                                                    // 43
Template.livechatOfficeHours.onCreated(function () {                                                                   // 102
	var _this = this;                                                                                                     // 102
                                                                                                                       //
	this.dayVars = {                                                                                                      // 103
		Monday: {                                                                                                            // 104
			start: new ReactiveVar('08:00'),                                                                                    // 105
			finish: new ReactiveVar('20:00'),                                                                                   // 106
			open: new ReactiveVar(true)                                                                                         // 107
		},                                                                                                                   // 104
		Tuesday: {                                                                                                           // 109
			start: new ReactiveVar('00:00'),                                                                                    // 110
			finish: new ReactiveVar('00:00'),                                                                                   // 111
			open: new ReactiveVar(true)                                                                                         // 112
		},                                                                                                                   // 109
		Wednesday: {                                                                                                         // 114
			start: new ReactiveVar('00:00'),                                                                                    // 115
			finish: new ReactiveVar('00:00'),                                                                                   // 116
			open: new ReactiveVar(true)                                                                                         // 117
		},                                                                                                                   // 114
		Thursday: {                                                                                                          // 119
			start: new ReactiveVar('00:00'),                                                                                    // 120
			finish: new ReactiveVar('00:00'),                                                                                   // 121
			open: new ReactiveVar(true)                                                                                         // 122
		},                                                                                                                   // 119
		Friday: {                                                                                                            // 124
			start: new ReactiveVar('00:00'),                                                                                    // 125
			finish: new ReactiveVar('00:00'),                                                                                   // 126
			open: new ReactiveVar(true)                                                                                         // 127
		},                                                                                                                   // 124
		Saturday: {                                                                                                          // 129
			start: new ReactiveVar('00:00'),                                                                                    // 130
			finish: new ReactiveVar('00:00'),                                                                                   // 131
			open: new ReactiveVar(false)                                                                                        // 132
		},                                                                                                                   // 129
		Sunday: {                                                                                                            // 134
			start: new ReactiveVar('00:00'),                                                                                    // 135
			finish: new ReactiveVar('00:00'),                                                                                   // 136
			open: new ReactiveVar(false)                                                                                        // 137
		}                                                                                                                    // 134
	};                                                                                                                    // 103
	this.autorun(function () {                                                                                            // 141
		_this.subscribe('livechat:officeHour');                                                                              // 142
                                                                                                                       //
		if (_this.subscriptionsReady()) {                                                                                    // 144
			LivechatOfficeHour.find().forEach(function (d) {                                                                    // 145
				Template.instance().dayVars[d.day].start.set(moment.utc(d.start, 'HH:mm').local().format('HH:mm'));                // 146
				Template.instance().dayVars[d.day].finish.set(moment.utc(d.finish, 'HH:mm').local().format('HH:mm'));              // 147
				Template.instance().dayVars[d.day].open.set(d.open);                                                               // 148
			});                                                                                                                 // 149
		}                                                                                                                    // 150
	});                                                                                                                   // 151
	this.enableOfficeHours = new ReactiveVar(null);                                                                       // 153
	this.autorun(function () {                                                                                            // 155
		_this.enableOfficeHours.set(RocketChat.settings.get('Livechat_enable_office_hours'));                                // 156
	});                                                                                                                   // 157
});                                                                                                                    // 158
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tabbar":{"template.externalSearch.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/tabbar/template.externalSearch.js                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("externalSearch");                                                                                // 2
Template["externalSearch"] = new Template("Template.externalSearch", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "content"                                                                                                   // 6
  }, "\n\t\t", HTML.DIV({                                                                                              // 7
    class: "title"                                                                                                     // 8
  }, "\n\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                                                           // 9
    return Spacebars.mustache(view.lookup("_"), "Knowledge_Base");                                                     // 10
  })), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                                 // 11
    class: "external-messages"                                                                                         // 12
  }, "\n\t\t\t", Blaze.Each(function() {                                                                               // 13
    return Spacebars.call(view.lookup("messages"));                                                                    // 14
  }, function() {                                                                                                      // 15
    return [ "\n\t\t\t\t", HTML.DIV({                                                                                  // 16
      class: "external-message"                                                                                        // 17
    }, "\n\t\t\t\t\t", HTML.BUTTON({                                                                                   // 18
      class: "pick-message"                                                                                            // 19
    }, HTML.I({                                                                                                        // 20
      class: "icon-edit"                                                                                               // 21
    })), "\n\t\t\t\t\t", Blaze.View("lookup:msg", function() {                                                         // 22
      return Spacebars.mustache(view.lookup("msg"));                                                                   // 23
    }), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                                   // 24
  }), "\n\t\t"), "\n\t");                                                                                              // 25
}));                                                                                                                   // 26
                                                                                                                       // 27
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"externalSearch.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/tabbar/externalSearch.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.externalSearch.helpers({                                                                                      // 1
	messages: function () {                                                                                               // 2
		return RocketChat.models.LivechatExternalMessage.findByRoomId(this.rid, {                                            // 3
			ts: 1                                                                                                               // 3
		});                                                                                                                  // 3
	}                                                                                                                     // 4
});                                                                                                                    // 1
Template.externalSearch.events({                                                                                       // 7
	'click button.pick-message': function (event, instance) {                                                             // 8
		event.preventDefault();                                                                                              // 9
		$("#chat-window-" + instance.roomId + " .input-message").val(this.msg).focus();                                      // 11
	}                                                                                                                     // 12
});                                                                                                                    // 7
Template.externalSearch.onCreated(function () {                                                                        // 15
	var _this = this;                                                                                                     // 15
                                                                                                                       //
	this.roomId = null; // console.log('externalSearch.this ->',this);                                                    // 16
                                                                                                                       //
	this.autorun(function () {                                                                                            // 18
		_this.roomId = Template.currentData().rid;                                                                           // 19
                                                                                                                       //
		_this.subscribe('livechat:externalMessages', Template.currentData().rid);                                            // 20
	});                                                                                                                   // 21
});                                                                                                                    // 22
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.visitorHistory.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/tabbar/template.visitorHistory.js                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("visitorHistory");                                                                                // 2
Template["visitorHistory"] = new Template("Template.visitorHistory", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "content"                                                                                                   // 6
  }, "\n\t\t", HTML.DIV({                                                                                              // 7
    class: "list-view"                                                                                                 // 8
  }, "\n\t\t\t", HTML.DIV({                                                                                            // 9
    class: "title"                                                                                                     // 10
  }, "\n\t\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                                                         // 11
    return Spacebars.mustache(view.lookup("_"), "Past_Chats");                                                         // 12
  })), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                             // 13
    class: "visitor-navigation"                                                                                        // 14
  }, "\n\t\t\t\t", HTML.DIV({                                                                                          // 15
    class: "visitor-scroll"                                                                                            // 16
  }, "\n\t\t\t\t\t", HTML.UL("\n\t\t\t\t\t\t", Blaze.Each(function() {                                                 // 17
    return Spacebars.call(view.lookup("previousChats"));                                                               // 18
  }, function() {                                                                                                      // 19
    return [ "\n\t\t\t\t\t\t\t", HTML.LI(HTML.A({                                                                      // 20
      href: function() {                                                                                               // 21
        return Spacebars.mustache(view.lookup("pathFor"), "live", Spacebars.kw({                                       // 22
          code: view.lookup("code")                                                                                    // 23
        }));                                                                                                           // 24
      }                                                                                                                // 25
    }, Blaze.View("lookup:title", function() {                                                                         // 26
      return Spacebars.mustache(view.lookup("title"));                                                                 // 27
    }))), "\n\t\t\t\t\t\t" ];                                                                                          // 28
  }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                 // 29
}));                                                                                                                   // 30
                                                                                                                       // 31
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"visitorHistory.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/tabbar/visitorHistory.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var moment = void 0;                                                                                                   // 1
module.watch(require("moment"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		moment = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
Template.visitorHistory.helpers({                                                                                      // 3
	historyLoaded: function () {                                                                                          // 4
		return !Template.instance().loadHistory.ready();                                                                     // 5
	},                                                                                                                    // 6
	previousChats: function () {                                                                                          // 8
		return ChatRoom.find({                                                                                               // 9
			_id: {                                                                                                              // 10
				$ne: this.rid                                                                                                      // 10
			},                                                                                                                  // 10
			'v._id': Template.instance().visitorId.get()                                                                        // 11
		}, {                                                                                                                 // 9
			sort: {                                                                                                             // 13
				ts: -1                                                                                                             // 14
			}                                                                                                                   // 13
		});                                                                                                                  // 12
	},                                                                                                                    // 17
	title: function () {                                                                                                  // 19
		var title = moment(this.ts).format('L LTS');                                                                         // 20
                                                                                                                       //
		if (this.label) {                                                                                                    // 22
			title += " - " + this.label;                                                                                        // 23
		}                                                                                                                    // 24
                                                                                                                       //
		return title;                                                                                                        // 26
	}                                                                                                                     // 27
});                                                                                                                    // 3
Template.visitorHistory.onCreated(function () {                                                                        // 30
	var _this = this;                                                                                                     // 30
                                                                                                                       //
	var currentData = Template.currentData();                                                                             // 31
	this.visitorId = new ReactiveVar();                                                                                   // 32
	this.autorun(function () {                                                                                            // 34
		var room = ChatRoom.findOne({                                                                                        // 35
			_id: Template.currentData().rid                                                                                     // 35
		});                                                                                                                  // 35
                                                                                                                       //
		_this.visitorId.set(room.v._id);                                                                                     // 36
	});                                                                                                                   // 37
                                                                                                                       //
	if (currentData && currentData.rid) {                                                                                 // 39
		this.loadHistory = this.subscribe('livechat:visitorHistory', {                                                       // 40
			rid: currentData.rid                                                                                                // 40
		});                                                                                                                  // 40
	}                                                                                                                     // 41
});                                                                                                                    // 42
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.visitorNavigation.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/tabbar/template.visitorNavigation.js                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("visitorNavigation");                                                                             // 2
Template["visitorNavigation"] = new Template("Template.visitorNavigation", (function() {                               // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "content"                                                                                                   // 6
  }, "\n\t\t", HTML.DIV({                                                                                              // 7
    class: "list-view"                                                                                                 // 8
  }, "\n\t\t\t", HTML.H4(Blaze.View("lookup:_", function() {                                                           // 9
    return Spacebars.mustache(view.lookup("_"), "Navigation_History");                                                 // 10
  })), "\n\t\t\t", HTML.DIV({                                                                                          // 11
    class: "visitor-navigation"                                                                                        // 12
  }, "\n\t\t\t\t", Blaze.If(function() {                                                                               // 13
    return Spacebars.call(view.lookup("loadingNavigation"));                                                           // 14
  }, function() {                                                                                                      // 15
    return [ "\n\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                       // 16
      return Spacebars.mustache(view.lookup("_"), "Loading...");                                                       // 17
    }), "\n\t\t\t\t" ];                                                                                                // 18
  }, function() {                                                                                                      // 19
    return [ "\n\t\t\t\t\t", HTML.DIV({                                                                                // 20
      class: "visitor-scroll"                                                                                          // 21
    }, "\n\t\t\t\t\t\t", HTML.UL("\n\t\t\t\t\t\t\t", Blaze.Each(function() {                                           // 22
      return Spacebars.call(view.lookup("pageVisited"));                                                               // 23
    }, function() {                                                                                                    // 24
      return [ "\n\t\t\t\t\t\t\t\t", HTML.LI(HTML.A({                                                                  // 25
        href: function() {                                                                                             // 26
          return Spacebars.mustache(Spacebars.dot(view.lookup("page"), "location", "href"));                           // 27
        },                                                                                                             // 28
        target: "_blank",                                                                                              // 29
        title: function() {                                                                                            // 30
          return Spacebars.mustache(view.lookup("accessDateTime"));                                                    // 31
        }                                                                                                              // 32
      }, Blaze.View("lookup:pageTitle", function() {                                                                   // 33
        return Spacebars.mustache(view.lookup("pageTitle"));                                                           // 34
      }))), "\n\t\t\t\t\t\t\t" ];                                                                                      // 35
    }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                            // 36
  }), "\n\t\t\t"), "\n\t\t"), "\n\n\t");                                                                               // 37
}));                                                                                                                   // 38
                                                                                                                       // 39
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"visitorNavigation.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/tabbar/visitorNavigation.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var moment = void 0;                                                                                                   // 1
module.watch(require("moment"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		moment = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
Template.visitorNavigation.helpers({                                                                                   // 3
	loadingNavigation: function () {                                                                                      // 4
		return !Template.instance().pageVisited.ready();                                                                     // 5
	},                                                                                                                    // 6
	pageVisited: function () {                                                                                            // 8
		var room = ChatRoom.findOne({                                                                                        // 9
			_id: this.rid                                                                                                       // 9
		}, {                                                                                                                 // 9
			fields: {                                                                                                           // 9
				'v.token': 1                                                                                                       // 9
			}                                                                                                                   // 9
		});                                                                                                                  // 9
                                                                                                                       //
		if (room && room.v && room.v.token) {                                                                                // 11
			return LivechatPageVisited.find({                                                                                   // 12
				token: room.v.token                                                                                                // 12
			}, {                                                                                                                // 12
				sort: {                                                                                                            // 12
					ts: -1                                                                                                            // 12
				}                                                                                                                  // 12
			});                                                                                                                 // 12
		}                                                                                                                    // 13
	},                                                                                                                    // 14
	pageTitle: function () {                                                                                              // 16
		return this.page.title || t('Empty_title');                                                                          // 17
	},                                                                                                                    // 18
	accessDateTime: function () {                                                                                         // 20
		return moment(this.ts).format('L LTS');                                                                              // 21
	}                                                                                                                     // 22
});                                                                                                                    // 3
Template.visitorNavigation.onCreated(function () {                                                                     // 25
	var currentData = Template.currentData();                                                                             // 26
                                                                                                                       //
	if (currentData && currentData.rid) {                                                                                 // 28
		this.pageVisited = this.subscribe('livechat:visitorPageVisited', {                                                   // 29
			rid: currentData.rid                                                                                                // 29
		});                                                                                                                  // 29
	}                                                                                                                     // 30
});                                                                                                                    // 31
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.visitorEdit.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/tabbar/template.visitorEdit.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("visitorEdit");                                                                                   // 2
Template["visitorEdit"] = new Template("Template.visitorEdit", (function() {                                           // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "visitor-edit"                                                                                              // 6
  }, "\n\t\t", HTML.FORM({                                                                                             // 7
    class: "edit-form",                                                                                                // 8
    autocomplete: "off"                                                                                                // 9
  }, "\n\t\t\t", Spacebars.With(function() {                                                                           // 10
    return Spacebars.call(view.lookup("visitor"));                                                                     // 11
  }, function() {                                                                                                      // 12
    return [ "\n\t\t\t\t", HTML.H3(Blaze.View("lookup:username", function() {                                          // 13
      return Spacebars.mustache(view.lookup("username"));                                                              // 14
    })), "\n\t\t\t\t", HTML.DIV({                                                                                      // 15
      class: "input-line"                                                                                              // 16
    }, "\n\t\t\t\t\t", HTML.LABEL({                                                                                    // 17
      for: "name"                                                                                                      // 18
    }, Blaze.View("lookup:_", function() {                                                                             // 19
      return Spacebars.mustache(view.lookup("_"), "Name");                                                             // 20
    })), "\n\t\t\t\t\t", HTML.INPUT({                                                                                  // 21
      type: "text",                                                                                                    // 22
      name: "name",                                                                                                    // 23
      autocomplete: "off",                                                                                             // 24
      value: function() {                                                                                              // 25
        return Spacebars.mustache(view.lookup("name"));                                                                // 26
      }                                                                                                                // 27
    }), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                                        // 28
      class: "input-line"                                                                                              // 29
    }, "\n\t\t\t\t\t", HTML.LABEL({                                                                                    // 30
      for: "email"                                                                                                     // 31
    }, Blaze.View("lookup:_", function() {                                                                             // 32
      return Spacebars.mustache(view.lookup("_"), "Email");                                                            // 33
    })), "\n\t\t\t\t\t", HTML.INPUT({                                                                                  // 34
      type: "email",                                                                                                   // 35
      name: "email",                                                                                                   // 36
      autocomplete: "off",                                                                                             // 37
      value: function() {                                                                                              // 38
        return Spacebars.mustache(view.lookup("email"));                                                               // 39
      }                                                                                                                // 40
    }), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                                        // 41
      class: "input-line"                                                                                              // 42
    }, "\n\t\t\t\t\t", HTML.LABEL({                                                                                    // 43
      for: "phone"                                                                                                     // 44
    }, Blaze.View("lookup:_", function() {                                                                             // 45
      return Spacebars.mustache(view.lookup("_"), "Phone");                                                            // 46
    })), "\n\t\t\t\t\t", HTML.INPUT({                                                                                  // 47
      type: "text",                                                                                                    // 48
      name: "phone",                                                                                                   // 49
      autocomplete: "off",                                                                                             // 50
      value: function() {                                                                                              // 51
        return Spacebars.mustache(view.lookup("phone"));                                                               // 52
      }                                                                                                                // 53
    }), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                                   // 54
  }), "\n\n\t\t\t", Spacebars.With(function() {                                                                        // 55
    return Spacebars.call(view.lookup("room"));                                                                        // 56
  }, function() {                                                                                                      // 57
    return [ "\n\t\t\t\t", HTML.H3(Blaze.View("lookup:_", function() {                                                 // 58
      return Spacebars.mustache(view.lookup("_"), "Conversation");                                                     // 59
    })), "\n\t\t\t\t", HTML.DIV({                                                                                      // 60
      class: "input-line"                                                                                              // 61
    }, "\n\t\t\t\t\t", HTML.LABEL({                                                                                    // 62
      for: "topic"                                                                                                     // 63
    }, Blaze.View("lookup:_", function() {                                                                             // 64
      return Spacebars.mustache(view.lookup("_"), "Topic");                                                            // 65
    })), "\n\t\t\t\t\t", HTML.INPUT({                                                                                  // 66
      type: "text",                                                                                                    // 67
      name: "topic",                                                                                                   // 68
      autocomplete: "off",                                                                                             // 69
      value: function() {                                                                                              // 70
        return Spacebars.mustache(view.lookup("topic"));                                                               // 71
      }                                                                                                                // 72
    }), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                                        // 73
      class: "input-line"                                                                                              // 74
    }, "\n\t\t\t\t\t", HTML.LABEL({                                                                                    // 75
      for: "tags"                                                                                                      // 76
    }, Blaze.View("lookup:_", function() {                                                                             // 77
      return Spacebars.mustache(view.lookup("_"), "Tags");                                                             // 78
    })), "\n\t\t\t\t\t", HTML.INPUT({                                                                                  // 79
      type: "text",                                                                                                    // 80
      name: "tags",                                                                                                    // 81
      autocomplete: "off",                                                                                             // 82
      value: function() {                                                                                              // 83
        return Spacebars.mustache(view.lookup("joinTags"));                                                            // 84
      }                                                                                                                // 85
    }), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                                   // 86
  }), "\n\t\t\t", HTML.NAV("\n\t\t\t\t", HTML.BUTTON({                                                                 // 87
    class: "button button-block cancel",                                                                               // 88
    type: "button"                                                                                                     // 89
  }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                     // 90
    return Spacebars.mustache(view.lookup("_"), "Cancel");                                                             // 91
  }))), "\n\t\t\t\t", HTML.BUTTON({                                                                                    // 92
    class: "button button-block primary save"                                                                          // 93
  }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                     // 94
    return Spacebars.mustache(view.lookup("_"), "Save");                                                               // 95
  }))), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                                               // 96
}));                                                                                                                   // 97
                                                                                                                       // 98
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"visitorEdit.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/tabbar/visitorEdit.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var toastr = void 0;                                                                                                   // 1
module.watch(require("toastr"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		toastr = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
Template.visitorEdit.helpers({                                                                                         // 2
	visitor: function () {                                                                                                // 3
		return Template.instance().visitor.get();                                                                            // 4
	},                                                                                                                    // 5
	room: function () {                                                                                                   // 7
		return Template.instance().room.get();                                                                               // 8
	},                                                                                                                    // 9
	email: function () {                                                                                                  // 11
		var visitor = Template.instance().visitor.get();                                                                     // 12
                                                                                                                       //
		if (visitor.visitorEmails && visitor.visitorEmails.length > 0) {                                                     // 13
			return visitor.visitorEmails[0].address;                                                                            // 14
		}                                                                                                                    // 15
	},                                                                                                                    // 16
	phone: function () {                                                                                                  // 18
		var visitor = Template.instance().visitor.get();                                                                     // 19
                                                                                                                       //
		if (visitor.phone && visitor.phone.length > 0) {                                                                     // 20
			return visitor.phone[0].phoneNumber;                                                                                // 21
		}                                                                                                                    // 22
	},                                                                                                                    // 23
	joinTags: function () {                                                                                               // 25
		return this.tags && this.tags.join(', ');                                                                            // 26
	}                                                                                                                     // 27
});                                                                                                                    // 2
Template.visitorEdit.onCreated(function () {                                                                           // 30
	var _this = this;                                                                                                     // 30
                                                                                                                       //
	this.visitor = new ReactiveVar();                                                                                     // 31
	this.room = new ReactiveVar();                                                                                        // 32
	this.autorun(function () {                                                                                            // 34
		_this.visitor.set(Meteor.users.findOne({                                                                             // 35
			_id: Template.currentData().visitorId                                                                               // 35
		}));                                                                                                                 // 35
	});                                                                                                                   // 36
	this.autorun(function () {                                                                                            // 38
		_this.room.set(ChatRoom.findOne({                                                                                    // 39
			_id: Template.currentData().roomId                                                                                  // 39
		}));                                                                                                                 // 39
	});                                                                                                                   // 40
});                                                                                                                    // 41
Template.visitorEdit.events({                                                                                          // 43
	'submit form': function (event, instance) {                                                                           // 44
		console.log('this ->', this);                                                                                        // 45
		event.preventDefault();                                                                                              // 46
		var userData = {                                                                                                     // 47
			_id: instance.visitor.get()._id                                                                                     // 47
		};                                                                                                                   // 47
		var roomData = {                                                                                                     // 48
			_id: instance.room.get()._id                                                                                        // 48
		};                                                                                                                   // 48
		userData.name = event.currentTarget.elements['name'].value;                                                          // 50
		userData.email = event.currentTarget.elements['email'].value;                                                        // 51
		userData.phone = event.currentTarget.elements['phone'].value;                                                        // 52
		roomData.topic = event.currentTarget.elements['topic'].value;                                                        // 54
		roomData.tags = event.currentTarget.elements['tags'].value;                                                          // 55
		Meteor.call('livechat:saveInfo', userData, roomData, function (err) {                                                // 57
			if (err) {                                                                                                          // 58
				toastr.error(t(err.error));                                                                                        // 59
			} else {                                                                                                            // 60
				toastr.success(t('Saved'));                                                                                        // 61
			}                                                                                                                   // 62
		});                                                                                                                  // 63
	},                                                                                                                    // 64
	'click .save': function () {                                                                                          // 66
		this.save();                                                                                                         // 67
	},                                                                                                                    // 68
	'click .cancel': function () {                                                                                        // 70
		this.cancel();                                                                                                       // 71
	}                                                                                                                     // 72
});                                                                                                                    // 43
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.visitorForward.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/tabbar/template.visitorForward.js                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("visitorForward");                                                                                // 2
Template["visitorForward"] = new Template("Template.visitorForward", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "user-view"                                                                                                 // 6
  }, "\n\t\t", HTML.DIV({                                                                                              // 7
    class: "edit-form"                                                                                                 // 8
  }, "\n\t\t\t", HTML.H3(Blaze.View("lookup:_", function() {                                                           // 9
    return Spacebars.mustache(view.lookup("_"), "Forward_chat");                                                       // 10
  })), "\n\t\t\t", Spacebars.With(function() {                                                                         // 11
    return Spacebars.call(view.lookup("visitor"));                                                                     // 12
  }, function() {                                                                                                      // 13
    return [ "\n\t\t\t\t", HTML.DIV({                                                                                  // 14
      class: "input-line"                                                                                              // 15
    }, "\n\t\t\t\t\t", HTML.LABEL({                                                                                    // 16
      for: "name"                                                                                                      // 17
    }, Blaze.View("lookup:_", function() {                                                                             // 18
      return Spacebars.mustache(view.lookup("_"), "Name");                                                             // 19
    })), "\n\t\t\t\t\t", HTML.SPAN(Blaze.View("lookup:username", function() {                                          // 20
      return Spacebars.mustache(view.lookup("username"));                                                              // 21
    })), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                                  // 22
  }), "\n\t\t\t", HTML.FORM("\n\t\t\t\t", Blaze.If(function() {                                                        // 23
    return Spacebars.call(view.lookup("hasDepartments"));                                                              // 24
  }, function() {                                                                                                      // 25
    return [ "\n\t\t\t\t\t", HTML.DIV({                                                                                // 26
      class: "input-line"                                                                                              // 27
    }, "\n\t\t\t\t\t\t", HTML.LABEL({                                                                                  // 28
      for: "forwardDepartment"                                                                                         // 29
    }, Blaze.View("lookup:_", function() {                                                                             // 30
      return Spacebars.mustache(view.lookup("_"), "Forward_to_department");                                            // 31
    })), "\n\t\t\t\t\t\t", HTML.SELECT({                                                                               // 32
      name: "forwardDepartment",                                                                                       // 33
      id: "forwardDepartment"                                                                                          // 34
    }, "\n\t\t\t\t\t\t\t", HTML.OPTION({                                                                               // 35
      value: ""                                                                                                        // 36
    }, Blaze.View("lookup:_", function() {                                                                             // 37
      return Spacebars.mustache(view.lookup("_"), "Select_a_department");                                              // 38
    })), "\n\t\t\t\t\t\t\t", Blaze.Each(function() {                                                                   // 39
      return Spacebars.call(view.lookup("departments"));                                                               // 40
    }, function() {                                                                                                    // 41
      return [ "\n\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                     // 42
        value: function() {                                                                                            // 43
          return Spacebars.mustache(view.lookup("_id"));                                                               // 44
        }                                                                                                              // 45
      }, Blaze.View("lookup:name", function() {                                                                        // 46
        return Spacebars.mustache(view.lookup("name"));                                                                // 47
      })), "\n\t\t\t\t\t\t\t" ];                                                                                       // 48
    }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\n\t\t\t\t\t", HTML.DIV({                                               // 49
      class: "form-divisor"                                                                                            // 50
    }, "\n\t\t\t\t\t\t", HTML.SPAN(Blaze.View("lookup:_", function() {                                                 // 51
      return Spacebars.mustache(view.lookup("_"), "or");                                                               // 52
    })), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                              // 53
  }), "\n\n\t\t\t\t", HTML.DIV({                                                                                       // 54
    class: "input-line"                                                                                                // 55
  }, "\n\t\t\t\t\t", HTML.LABEL({                                                                                      // 56
    for: "forwardUser"                                                                                                 // 57
  }, Blaze.View("lookup:_", function() {                                                                               // 58
    return Spacebars.mustache(view.lookup("_"), "Forward_to_user");                                                    // 59
  })), "\n\t\t\t\t\t", HTML.SELECT({                                                                                   // 60
    name: "forwardUser",                                                                                               // 61
    id: "forwardUser"                                                                                                  // 62
  }, "\n\t\t\t\t\t\t", HTML.OPTION({                                                                                   // 63
    value: ""                                                                                                          // 64
  }, Blaze.View("lookup:_", function() {                                                                               // 65
    return Spacebars.mustache(view.lookup("_"), "Select_a_user");                                                      // 66
  })), "\n\t\t\t\t\t\t", Blaze.Each(function() {                                                                       // 67
    return Spacebars.call(view.lookup("agents"));                                                                      // 68
  }, function() {                                                                                                      // 69
    return [ "\n\t\t\t\t\t\t\t", HTML.OPTION({                                                                         // 70
      value: function() {                                                                                              // 71
        return Spacebars.mustache(view.lookup("_id"));                                                                 // 72
      }                                                                                                                // 73
    }, Blaze.View("lookup:agentName", function() {                                                                     // 74
      return Spacebars.mustache(view.lookup("agentName"));                                                             // 75
    })), "\n\t\t\t\t\t\t" ];                                                                                           // 76
  }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\n\t\t\t\t", HTML.NAV({                                                       // 77
    class: "buttons"                                                                                                   // 78
  }, "\n\t\t\t\t\t", HTML.BUTTON({                                                                                     // 79
    class: "button button-block cancel",                                                                               // 80
    type: "button"                                                                                                     // 81
  }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                     // 82
    return Spacebars.mustache(view.lookup("_"), "Cancel");                                                             // 83
  }))), "\n\t\t\t\t\t", HTML.BUTTON({                                                                                  // 84
    class: "button button-block primary save"                                                                          // 85
  }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                     // 86
    return Spacebars.mustache(view.lookup("_"), "Forward");                                                            // 87
  }))), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                                // 88
}));                                                                                                                   // 89
                                                                                                                       // 90
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"visitorForward.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/tabbar/visitorForward.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var toastr = void 0;                                                                                                   // 1
module.watch(require("toastr"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		toastr = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
Template.visitorForward.helpers({                                                                                      // 2
	visitor: function () {                                                                                                // 3
		return Template.instance().visitor.get();                                                                            // 4
	},                                                                                                                    // 5
	hasDepartments: function () {                                                                                         // 6
		return LivechatDepartment.find({                                                                                     // 7
			enabled: true                                                                                                       // 7
		}).count() > 0;                                                                                                      // 7
	},                                                                                                                    // 8
	departments: function () {                                                                                            // 9
		return LivechatDepartment.find({                                                                                     // 10
			enabled: true                                                                                                       // 10
		});                                                                                                                  // 10
	},                                                                                                                    // 11
	agents: function () {                                                                                                 // 12
		return AgentUsers.find({                                                                                             // 13
			_id: {                                                                                                              // 13
				$ne: Meteor.userId()                                                                                               // 13
			}                                                                                                                   // 13
		}, {                                                                                                                 // 13
			sort: {                                                                                                             // 13
				name: 1,                                                                                                           // 13
				username: 1                                                                                                        // 13
			}                                                                                                                   // 13
		});                                                                                                                  // 13
	},                                                                                                                    // 14
	agentName: function () {                                                                                              // 15
		return this.name || this.username;                                                                                   // 16
	}                                                                                                                     // 17
});                                                                                                                    // 2
Template.visitorForward.onCreated(function () {                                                                        // 20
	var _this = this;                                                                                                     // 20
                                                                                                                       //
	this.visitor = new ReactiveVar();                                                                                     // 21
	this.room = new ReactiveVar();                                                                                        // 22
	this.autorun(function () {                                                                                            // 24
		_this.visitor.set(Meteor.users.findOne({                                                                             // 25
			_id: Template.currentData().visitorId                                                                               // 25
		}));                                                                                                                 // 25
	});                                                                                                                   // 26
	this.autorun(function () {                                                                                            // 28
		_this.room.set(ChatRoom.findOne({                                                                                    // 29
			_id: Template.currentData().roomId                                                                                  // 29
		}));                                                                                                                 // 29
	});                                                                                                                   // 30
	this.subscribe('livechat:departments');                                                                               // 32
	this.subscribe('livechat:agents');                                                                                    // 33
});                                                                                                                    // 34
Template.visitorForward.events({                                                                                       // 37
	'submit form': function (event, instance) {                                                                           // 38
		var _this2 = this;                                                                                                   // 38
                                                                                                                       //
		event.preventDefault();                                                                                              // 39
		var transferData = {                                                                                                 // 41
			roomId: instance.room.get()._id                                                                                     // 42
		};                                                                                                                   // 41
                                                                                                                       //
		if (instance.find('#forwardUser').value) {                                                                           // 45
			transferData.userId = instance.find('#forwardUser').value;                                                          // 46
		} else if (instance.find('#forwardDepartment').value) {                                                              // 47
			transferData.departmentId = instance.find('#forwardDepartment').value;                                              // 48
		}                                                                                                                    // 49
                                                                                                                       //
		Meteor.call('livechat:transfer', transferData, function (error, result) {                                            // 51
			if (error) {                                                                                                        // 52
				toastr.error(t(error.error));                                                                                      // 53
			} else if (result) {                                                                                                // 54
				_this2.save();                                                                                                     // 55
                                                                                                                       //
				toastr.success(t('Transferred'));                                                                                  // 56
				FlowRouter.go('/');                                                                                                // 57
			} else {                                                                                                            // 58
				toastr.warning(t('No_available_agents_to_transfer'));                                                              // 59
			}                                                                                                                   // 60
		});                                                                                                                  // 61
	},                                                                                                                    // 62
	'change #forwardDepartment, blur #forwardDepartment': function (event, instance) {                                    // 64
		if (event.currentTarget.value) {                                                                                     // 65
			instance.find('#forwardUser').value = '';                                                                           // 66
		}                                                                                                                    // 67
	},                                                                                                                    // 68
	'change #forwardUser, blur #forwardUser': function (event, instance) {                                                // 70
		if (event.currentTarget.value) {                                                                                     // 71
			instance.find('#forwardDepartment').value = '';                                                                     // 72
		}                                                                                                                    // 73
	},                                                                                                                    // 74
	'click .cancel': function (event) {                                                                                   // 76
		event.preventDefault();                                                                                              // 77
		this.cancel();                                                                                                       // 79
	}                                                                                                                     // 80
});                                                                                                                    // 37
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.visitorInfo.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/tabbar/template.visitorInfo.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("visitorInfo");                                                                                   // 2
Template["visitorInfo"] = new Template("Template.visitorInfo", (function() {                                           // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "content"                                                                                                   // 6
  }, "\n\t\t", Blaze.If(function() {                                                                                   // 7
    return Spacebars.call(view.lookup("editing"));                                                                     // 8
  }, function() {                                                                                                      // 9
    return [ "\n\t\t\t", Blaze._TemplateWith(function() {                                                              // 10
      return Spacebars.dataMustache(view.lookup("editDetails"));                                                       // 11
    }, function() {                                                                                                    // 12
      return Spacebars.include(view.lookupTemplate("visitorEdit"));                                                    // 13
    }), "\n\t\t" ];                                                                                                    // 14
  }), "\n\t\t", Blaze.If(function() {                                                                                  // 15
    return Spacebars.call(view.lookup("forwarding"));                                                                  // 16
  }, function() {                                                                                                      // 17
    return [ "\n\t\t\t", Blaze._TemplateWith(function() {                                                              // 18
      return Spacebars.dataMustache(view.lookup("forwardDetails"));                                                    // 19
    }, function() {                                                                                                    // 20
      return Spacebars.include(view.lookupTemplate("visitorForward"));                                                 // 21
    }), "\n\t\t" ];                                                                                                    // 22
  }), "\n\t\t", HTML.DIV({                                                                                             // 23
    class: function() {                                                                                                // 24
      return [ "user-view ", Spacebars.mustache(view.lookup("showDetail")) ];                                          // 25
    }                                                                                                                  // 26
  }, "\n\t\t\t", HTML.DIV({                                                                                            // 27
    class: "about clearfix"                                                                                            // 28
  }, "\n\t\t\t\t", Spacebars.With(function() {                                                                         // 29
    return Spacebars.call(view.lookup("user"));                                                                        // 30
  }, function() {                                                                                                      // 31
    return [ "\n\t\t\t\t\t", HTML.DIV({                                                                                // 32
      class: "info"                                                                                                    // 33
    }, "\n\t\t\t\t\t\t", HTML.H3({                                                                                     // 34
      title: function() {                                                                                              // 35
        return Spacebars.mustache(view.lookup("username"));                                                            // 36
      }                                                                                                                // 37
    }, HTML.I({                                                                                                        // 38
      class: function() {                                                                                              // 39
        return [ "status-", Spacebars.mustache(view.lookup("status")) ];                                               // 40
      }                                                                                                                // 41
    }), " ", Blaze.View("lookup:username", function() {                                                                // 42
      return Spacebars.mustache(view.lookup("username"));                                                              // 43
    })), "\n\t\t\t\t\t\t", HTML.P({                                                                                    // 44
      class: "secondary-font-color"                                                                                    // 45
    }, Blaze.View("lookup:name", function() {                                                                          // 46
      return Spacebars.mustache(view.lookup("name"));                                                                  // 47
    })), "\n\n\t\t\t\t\t\t", HTML.UL("\n\t\t\t\t\t\t\t", Blaze.If(function() {                                         // 48
      return Spacebars.call(view.lookup("utc"));                                                                       // 49
    }, function() {                                                                                                    // 50
      return HTML.LI(HTML.I({                                                                                          // 51
        class: "icon-clock"                                                                                            // 52
      }), Blaze.View("lookup:userTime", function() {                                                                   // 53
        return Spacebars.mustache(view.lookup("userTime"));                                                            // 54
      }), " (UTC ", Blaze.View("lookup:utc", function() {                                                              // 55
        return Spacebars.mustache(view.lookup("utc"));                                                                 // 56
      }), ")");                                                                                                        // 57
    }), "\n\t\t\t\t\t\t\t", Blaze.Each(function() {                                                                    // 58
      return Spacebars.call(view.lookup("visitorEmails"));                                                             // 59
    }, function() {                                                                                                    // 60
      return [ " ", HTML.LI(HTML.I({                                                                                   // 61
        class: "icon-mail"                                                                                             // 62
      }), " ", Blaze.View("lookup:address", function() {                                                               // 63
        return Spacebars.mustache(view.lookup("address"));                                                             // 64
      }), Blaze.If(function() {                                                                                        // 65
        return Spacebars.call(view.lookup("verified"));                                                                // 66
      }, function() {                                                                                                  // 67
        return [ HTML.CharRef({                                                                                        // 68
          html: "&nbsp;",                                                                                              // 69
          str: " "                                                                                                     // 70
        }), HTML.I({                                                                                                   // 71
          class: "icon-ok success-color"                                                                               // 72
        }) ];                                                                                                          // 73
      })), " " ];                                                                                                      // 74
    }), "\n\t\t\t\t\t\t\t", Blaze.Each(function() {                                                                    // 75
      return Spacebars.call(view.lookup("phone"));                                                                     // 76
    }, function() {                                                                                                    // 77
      return [ " ", HTML.LI(HTML.I({                                                                                   // 78
        class: "icon-phone"                                                                                            // 79
      }), " ", Blaze.View("lookup:phoneNumber", function() {                                                           // 80
        return Spacebars.mustache(view.lookup("phoneNumber"));                                                         // 81
      })), " " ];                                                                                                      // 82
    }), "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                                      // 83
      return Spacebars.call(view.lookup("lastLogin"));                                                                 // 84
    }, function() {                                                                                                    // 85
      return [ " ", HTML.LI(HTML.I({                                                                                   // 86
        class: "icon-calendar"                                                                                         // 87
      }), " ", Blaze.View("lookup:_", function() {                                                                     // 88
        return Spacebars.mustache(view.lookup("_"), "Created_at");                                                     // 89
      }), ": ", Blaze.View("lookup:createdAt", function() {                                                            // 90
        return Spacebars.mustache(view.lookup("createdAt"));                                                           // 91
      })), " " ];                                                                                                      // 92
    }), "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                                      // 93
      return Spacebars.call(view.lookup("lastLogin"));                                                                 // 94
    }, function() {                                                                                                    // 95
      return [ " ", HTML.LI(HTML.I({                                                                                   // 96
        class: "icon-calendar"                                                                                         // 97
      }), " ", Blaze.View("lookup:_", function() {                                                                     // 98
        return Spacebars.mustache(view.lookup("_"), "Last_login");                                                     // 99
      }), ": ", Blaze.View("lookup:lastLogin", function() {                                                            // 100
        return Spacebars.mustache(view.lookup("lastLogin"));                                                           // 101
      })), " " ];                                                                                                      // 102
    }), "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                                      // 103
      return Spacebars.call(view.lookup("ip"));                                                                        // 104
    }, function() {                                                                                                    // 105
      return HTML.LI(HTML.I({                                                                                          // 106
        class: "icon-laptop"                                                                                           // 107
      }), HTML.SPAN(Blaze.View("lookup:ip", function() {                                                               // 108
        return Spacebars.mustache(view.lookup("ip"));                                                                  // 109
      })));                                                                                                            // 110
    }), "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                                      // 111
      return Spacebars.call(view.lookup("os"));                                                                        // 112
    }, function() {                                                                                                    // 113
      return HTML.LI(HTML.I({                                                                                          // 114
        class: function() {                                                                                            // 115
          return Spacebars.mustache(view.lookup("osIcon"));                                                            // 116
        }                                                                                                              // 117
      }), HTML.SPAN(Blaze.View("lookup:os", function() {                                                               // 118
        return Spacebars.mustache(view.lookup("os"));                                                                  // 119
      })));                                                                                                            // 120
    }), "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                                      // 121
      return Spacebars.call(view.lookup("browser"));                                                                   // 122
    }, function() {                                                                                                    // 123
      return HTML.LI(HTML.I({                                                                                          // 124
        class: function() {                                                                                            // 125
          return Spacebars.mustache(view.lookup("browserIcon"));                                                       // 126
        }                                                                                                              // 127
      }), HTML.SPAN(Blaze.View("lookup:browser", function() {                                                          // 128
        return Spacebars.mustache(view.lookup("browser"));                                                             // 129
      })));                                                                                                            // 130
    }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                            // 131
  }), "\n\n\t\t\t\t", Spacebars.With(function() {                                                                      // 132
    return Spacebars.call(view.lookup("room"));                                                                        // 133
  }, function() {                                                                                                      // 134
    return [ "\n\t\t\t\t\t", HTML.DIV({                                                                                // 135
      class: "info"                                                                                                    // 136
    }, "\n\t\t\t\t\t\t", HTML.UL("\n\t\t\t\t\t\t\t", Blaze.If(function() {                                             // 137
      return Spacebars.call(view.lookup("sms"));                                                                       // 138
    }, function() {                                                                                                    // 139
      return [ "\n\t\t\t\t\t\t\t\t", HTML.LI(HTML.I({                                                                  // 140
        class: "icon-mobile"                                                                                           // 141
      }), Blaze.View("lookup:_", function() {                                                                          // 142
        return Spacebars.mustache(view.lookup("_"), "SMS_Enabled");                                                    // 143
      })), "\n\t\t\t\t\t\t\t" ];                                                                                       // 144
    }), "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                                      // 145
      return Spacebars.call(view.lookup("topic"));                                                                     // 146
    }, function() {                                                                                                    // 147
      return [ "\n\t\t\t\t\t\t\t\t", HTML.LI(HTML.STRONG(Blaze.View("lookup:_", function() {                           // 148
        return Spacebars.mustache(view.lookup("_"), "Topic");                                                          // 149
      })), ": ", Blaze.View("lookup:topic", function() {                                                               // 150
        return Spacebars.mustache(view.lookup("topic"));                                                               // 151
      })), "\n\t\t\t\t\t\t\t" ];                                                                                       // 152
    }), "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                                      // 153
      return Spacebars.call(view.lookup("tags"));                                                                      // 154
    }, function() {                                                                                                    // 155
      return [ "\n\t\t\t\t\t\t\t\t", HTML.LI(HTML.STRONG(Blaze.View("lookup:_", function() {                           // 156
        return Spacebars.mustache(view.lookup("_"), "Tags");                                                           // 157
      })), ": ", Blaze.View("lookup:joinTags", function() {                                                            // 158
        return Spacebars.mustache(view.lookup("joinTags"));                                                            // 159
      })), "\n\t\t\t\t\t\t\t" ];                                                                                       // 160
    }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                            // 161
  }), "\n\t\t\t"), "\n\n\t\t\t", Blaze.If(function() {                                                                 // 162
    return Spacebars.call(view.lookup("canSeeButtons"));                                                               // 163
  }, function() {                                                                                                      // 164
    return [ "\n\t\t\t\t", HTML.NAV({                                                                                  // 165
      class: "centered-buttons"                                                                                        // 166
    }, "\n\t\t\t\t\t", HTML.BUTTON({                                                                                   // 167
      class: "button button-block edit-livechat"                                                                       // 168
    }, HTML.SPAN(HTML.I({                                                                                              // 169
      class: "icon-edit"                                                                                               // 170
    }), " ", Blaze.View("lookup:_", function() {                                                                       // 171
      return Spacebars.mustache(view.lookup("_"), "Edit");                                                             // 172
    }))), "\n\t\t\t\t\t", Blaze.If(function() {                                                                        // 173
      return Spacebars.call(view.lookup("roomOpen"));                                                                  // 174
    }, function() {                                                                                                    // 175
      return [ "\n\t\t\t\t\t\t", HTML.BUTTON({                                                                         // 176
        class: "button button-block close-livechat"                                                                    // 177
      }, HTML.SPAN(HTML.I({                                                                                            // 178
        class: "icon-download"                                                                                         // 179
      }), " ", Blaze.View("lookup:_", function() {                                                                     // 180
        return Spacebars.mustache(view.lookup("_"), "Close");                                                          // 181
      }))), "\n\t\t\t\t\t\t", HTML.BUTTON({                                                                            // 182
        class: "button button-block forward-livechat"                                                                  // 183
      }, HTML.SPAN(HTML.I({                                                                                            // 184
        class: "icon-forward"                                                                                          // 185
      }), " ", Blaze.View("lookup:_", function() {                                                                     // 186
        return Spacebars.mustache(view.lookup("_"), "Forward");                                                        // 187
      }))), "\n\t\t\t\t\t" ];                                                                                          // 188
    }), "\n\n\t\t\t\t\t", Blaze.If(function() {                                                                        // 189
      return Spacebars.call(view.lookup("guestPool"));                                                                 // 190
    }, function() {                                                                                                    // 191
      return [ "\n\t\t\t\t\t\t", HTML.BUTTON({                                                                         // 192
        class: "button button-block return-inquiry"                                                                    // 193
      }, HTML.SPAN(HTML.I({                                                                                            // 194
        class: "icon-ccw"                                                                                              // 195
      }), " ", Blaze.View("lookup:_", function() {                                                                     // 196
        return Spacebars.mustache(view.lookup("_"), "Return");                                                         // 197
      }))), "\n\t\t\t\t\t" ];                                                                                          // 198
    }), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                                   // 199
  }), "\n\n\t\t\t", Blaze.If(function() {                                                                              // 200
    return Spacebars.call(view.lookup("customFields"));                                                                // 201
  }, function() {                                                                                                      // 202
    return [ "\n\t\t\t\t", HTML.DIV({                                                                                  // 203
      class: "visitor-custom-fields"                                                                                   // 204
    }, "\n\t\t\t\t\t", HTML.H4(Blaze.View("lookup:_", function() {                                                     // 205
      return Spacebars.mustache(view.lookup("_"), "Custom_Fields");                                                    // 206
    })), "\n\n\t\t\t\t\t", HTML.DIV({                                                                                  // 207
      class: "visitor-scroll"                                                                                          // 208
    }, "\n\t\t\t\t\t\t", HTML.UL("\n\t\t\t\t\t\t\t", Blaze.Each(function() {                                           // 209
      return Spacebars.call(view.lookup("customFields"));                                                              // 210
    }, function() {                                                                                                    // 211
      return [ "\n\t\t\t\t\t\t\t\t", HTML.LI(Blaze.View("lookup:label", function() {                                   // 212
        return Spacebars.mustache(view.lookup("label"));                                                               // 213
      }), ": ", Blaze.View("lookup:value", function() {                                                                // 214
        return Spacebars.mustache(view.lookup("value"));                                                               // 215
      })), "\n\t\t\t\t\t\t\t" ];                                                                                       // 216
    }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t" ];                                               // 217
  }), "\n\n\t\t\t", Blaze._TemplateWith(function() {                                                                   // 218
    return Spacebars.call(view.lookup("."));                                                                           // 219
  }, function() {                                                                                                      // 220
    return Spacebars.include(view.lookupTemplate("visitorNavigation"));                                                // 221
  }), "\n\t\t"), "\n\t");                                                                                              // 222
}));                                                                                                                   // 223
                                                                                                                       // 224
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"visitorInfo.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/tabbar/visitorInfo.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var moment = void 0;                                                                                                   // 1
module.watch(require("moment"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		moment = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
var UAParser = void 0;                                                                                                 // 1
module.watch(require("ua-parser-js"), {                                                                                // 1
	"default": function (v) {                                                                                             // 1
		UAParser = v;                                                                                                        // 1
	}                                                                                                                     // 1
}, 1);                                                                                                                 // 1
Template.visitorInfo.helpers({                                                                                         // 4
	user: function () {                                                                                                   // 5
		var user = Template.instance().user.get();                                                                           // 6
                                                                                                                       //
		if (user && user.userAgent) {                                                                                        // 7
			var ua = new UAParser();                                                                                            // 8
			ua.setUA(user.userAgent);                                                                                           // 9
			user.os = ua.getOS().name + " " + ua.getOS().version;                                                               // 11
                                                                                                                       //
			if (['Mac OS', 'iOS'].indexOf(ua.getOS().name) !== -1) {                                                            // 12
				user.osIcon = 'icon-apple';                                                                                        // 13
			} else {                                                                                                            // 14
				user.osIcon = "icon-" + ua.getOS().name.toLowerCase();                                                             // 15
			}                                                                                                                   // 16
                                                                                                                       //
			user.browser = ua.getBrowser().name + " " + ua.getBrowser().version;                                                // 17
			user.browserIcon = "icon-" + ua.getBrowser().name.toLowerCase();                                                    // 18
		}                                                                                                                    // 19
                                                                                                                       //
		return user;                                                                                                         // 21
	},                                                                                                                    // 22
	room: function () {                                                                                                   // 24
		return ChatRoom.findOne({                                                                                            // 25
			_id: this.rid                                                                                                       // 25
		});                                                                                                                  // 25
	},                                                                                                                    // 26
	joinTags: function () {                                                                                               // 28
		return this.tags && this.tags.join(', ');                                                                            // 29
	},                                                                                                                    // 30
	customFields: function () {                                                                                           // 32
		var fields = [];                                                                                                     // 33
		var livechatData = {};                                                                                               // 34
		var user = Template.instance().user.get();                                                                           // 35
                                                                                                                       //
		if (user) {                                                                                                          // 36
			livechatData = _.extend(livechatData, user.livechatData);                                                           // 37
		}                                                                                                                    // 38
                                                                                                                       //
		var data = Template.currentData();                                                                                   // 40
                                                                                                                       //
		if (data && data.rid) {                                                                                              // 41
			var room = RocketChat.models.Rooms.findOne(data.rid);                                                               // 42
                                                                                                                       //
			if (room) {                                                                                                         // 43
				livechatData = _.extend(livechatData, room.livechatData);                                                          // 44
			}                                                                                                                   // 45
		}                                                                                                                    // 46
                                                                                                                       //
		if (!_.isEmpty(livechatData)) {                                                                                      // 48
			for (var _id in meteorBabelHelpers.sanitizeForInObject(livechatData)) {                                             // 49
				if (livechatData.hasOwnProperty(_id)) {                                                                            // 50
					var customFields = Template.instance().customFields.get();                                                        // 51
                                                                                                                       //
					if (customFields) {                                                                                               // 52
						var field = _.findWhere(customFields, {                                                                          // 53
							_id: _id                                                                                                        // 53
						});                                                                                                              // 53
                                                                                                                       //
						if (field && field.visibility !== 'hidden') {                                                                    // 54
							fields.push({                                                                                                   // 55
								label: field.label,                                                                                            // 55
								value: livechatData[_id]                                                                                       // 55
							});                                                                                                             // 55
						}                                                                                                                // 56
					}                                                                                                                 // 57
				}                                                                                                                  // 58
			}                                                                                                                   // 59
                                                                                                                       //
			return fields;                                                                                                      // 60
		}                                                                                                                    // 61
	},                                                                                                                    // 62
	createdAt: function () {                                                                                              // 64
		if (!this.createdAt) {                                                                                               // 65
			return '';                                                                                                          // 66
		}                                                                                                                    // 67
                                                                                                                       //
		return moment(this.createdAt).format('L LTS');                                                                       // 68
	},                                                                                                                    // 69
	lastLogin: function () {                                                                                              // 71
		if (!this.lastLogin) {                                                                                               // 72
			return '';                                                                                                          // 73
		}                                                                                                                    // 74
                                                                                                                       //
		return moment(this.lastLogin).format('L LTS');                                                                       // 75
	},                                                                                                                    // 76
	editing: function () {                                                                                                // 78
		return Template.instance().action.get() === 'edit';                                                                  // 79
	},                                                                                                                    // 80
	forwarding: function () {                                                                                             // 82
		return Template.instance().action.get() === 'forward';                                                               // 83
	},                                                                                                                    // 84
	editDetails: function () {                                                                                            // 86
		var instance = Template.instance();                                                                                  // 87
		var user = instance.user.get();                                                                                      // 88
		return {                                                                                                             // 89
			visitorId: user ? user._id : null,                                                                                  // 90
			roomId: this.rid,                                                                                                   // 91
			save: function () {                                                                                                 // 92
				instance.action.set();                                                                                             // 93
			},                                                                                                                  // 94
			cancel: function () {                                                                                               // 95
				instance.action.set();                                                                                             // 96
			}                                                                                                                   // 97
		};                                                                                                                   // 89
	},                                                                                                                    // 99
	forwardDetails: function () {                                                                                         // 101
		var instance = Template.instance();                                                                                  // 102
		var user = instance.user.get();                                                                                      // 103
		return {                                                                                                             // 104
			visitorId: user ? user._id : null,                                                                                  // 105
			roomId: this.rid,                                                                                                   // 106
			save: function () {                                                                                                 // 107
				instance.action.set();                                                                                             // 108
			},                                                                                                                  // 109
			cancel: function () {                                                                                               // 110
				instance.action.set();                                                                                             // 111
			}                                                                                                                   // 112
		};                                                                                                                   // 104
	},                                                                                                                    // 114
	roomOpen: function () {                                                                                               // 116
		var room = ChatRoom.findOne({                                                                                        // 117
			_id: this.rid                                                                                                       // 117
		});                                                                                                                  // 117
		return room.open;                                                                                                    // 119
	},                                                                                                                    // 120
	guestPool: function () {                                                                                              // 122
		return RocketChat.settings.get('Livechat_Routing_Method') === 'Guest_Pool';                                          // 123
	},                                                                                                                    // 124
	showDetail: function () {                                                                                             // 126
		if (Template.instance().action.get()) {                                                                              // 127
			return 'hidden';                                                                                                    // 128
		}                                                                                                                    // 129
	},                                                                                                                    // 130
	canSeeButtons: function () {                                                                                          // 132
		if (RocketChat.authz.hasRole(Meteor.userId(), 'livechat-manager')) {                                                 // 133
			return true;                                                                                                        // 134
		}                                                                                                                    // 135
                                                                                                                       //
		var data = Template.currentData();                                                                                   // 137
                                                                                                                       //
		if (data && data.rid) {                                                                                              // 138
			var subscription = RocketChat.models.Subscriptions.findOne({                                                        // 139
				rid: data.rid                                                                                                      // 139
			});                                                                                                                 // 139
			return subscription !== undefined;                                                                                  // 140
		}                                                                                                                    // 141
                                                                                                                       //
		return false;                                                                                                        // 142
	}                                                                                                                     // 143
});                                                                                                                    // 4
Template.visitorInfo.events({                                                                                          // 146
	'click .edit-livechat': function (event, instance) {                                                                  // 147
		event.preventDefault();                                                                                              // 148
		instance.action.set('edit');                                                                                         // 150
	},                                                                                                                    // 151
	'click .close-livechat': function (event) {                                                                           // 152
		var _this = this;                                                                                                    // 152
                                                                                                                       //
		event.preventDefault();                                                                                              // 153
		swal({                                                                                                               // 155
			title: t('Closing_chat'),                                                                                           // 156
			type: 'input',                                                                                                      // 157
			inputPlaceholder: t('Please_add_a_comment'),                                                                        // 158
			showCancelButton: true,                                                                                             // 159
			closeOnConfirm: false                                                                                               // 160
		}, function (inputValue) {                                                                                           // 155
			if (!inputValue) {                                                                                                  // 162
				swal.showInputError(t('Please_add_a_comment_to_close_the_room'));                                                  // 163
				return false;                                                                                                      // 164
			}                                                                                                                   // 165
                                                                                                                       //
			if (s.trim(inputValue) === '') {                                                                                    // 167
				swal.showInputError(t('Please_add_a_comment_to_close_the_room'));                                                  // 168
				return false;                                                                                                      // 169
			}                                                                                                                   // 170
                                                                                                                       //
			Meteor.call('livechat:closeRoom', _this.rid, inputValue, function (error /*, result*/) {                            // 172
				if (error) {                                                                                                       // 173
					return handleError(error);                                                                                        // 174
				}                                                                                                                  // 175
                                                                                                                       //
				swal({                                                                                                             // 176
					title: t('Chat_closed'),                                                                                          // 177
					text: t('Chat_closed_successfully'),                                                                              // 178
					type: 'success',                                                                                                  // 179
					timer: 1000,                                                                                                      // 180
					showConfirmButton: false                                                                                          // 181
				});                                                                                                                // 176
			});                                                                                                                 // 183
		});                                                                                                                  // 184
	},                                                                                                                    // 185
	'click .return-inquiry': function (event) {                                                                           // 187
		var _this2 = this;                                                                                                   // 187
                                                                                                                       //
		event.preventDefault();                                                                                              // 188
		swal({                                                                                                               // 190
			title: t('Would_you_like_to_return_the_inquiry'),                                                                   // 191
			type: 'warning',                                                                                                    // 192
			showCancelButton: true,                                                                                             // 193
			confirmButtonColor: '#3085d6',                                                                                      // 194
			cancelButtonColor: '#d33',                                                                                          // 195
			confirmButtonText: t('Yes')                                                                                         // 196
		}, function () {                                                                                                     // 190
			Meteor.call('livechat:returnAsInquiry', _this2.rid, function (error /*, result*/) {                                 // 198
				if (error) {                                                                                                       // 199
					console.log(error);                                                                                               // 200
				} else {                                                                                                           // 201
					Session.set('openedRoom');                                                                                        // 202
					FlowRouter.go('/home');                                                                                           // 203
				}                                                                                                                  // 204
			});                                                                                                                 // 205
		});                                                                                                                  // 206
	},                                                                                                                    // 207
	'click .forward-livechat': function (event, instance) {                                                               // 209
		event.preventDefault();                                                                                              // 210
		instance.action.set('forward');                                                                                      // 212
	}                                                                                                                     // 213
});                                                                                                                    // 146
Template.visitorInfo.onCreated(function () {                                                                           // 216
	var _this3 = this;                                                                                                    // 216
                                                                                                                       //
	this.visitorId = new ReactiveVar(null);                                                                               // 217
	this.customFields = new ReactiveVar([]);                                                                              // 218
	this.action = new ReactiveVar();                                                                                      // 219
	this.user = new ReactiveVar();                                                                                        // 220
	Meteor.call('livechat:getCustomFields', function (err, customFields) {                                                // 222
		if (customFields) {                                                                                                  // 223
			_this3.customFields.set(customFields);                                                                              // 224
		}                                                                                                                    // 225
	});                                                                                                                   // 226
	var currentData = Template.currentData();                                                                             // 228
                                                                                                                       //
	if (currentData && currentData.rid) {                                                                                 // 230
		this.autorun(function () {                                                                                           // 231
			var room = ChatRoom.findOne(currentData.rid);                                                                       // 232
                                                                                                                       //
			if (room && room.v && room.v._id) {                                                                                 // 233
				_this3.visitorId.set(room.v._id);                                                                                  // 234
			} else {                                                                                                            // 235
				_this3.visitorId.set();                                                                                            // 236
			}                                                                                                                   // 237
		});                                                                                                                  // 238
		this.subscribe('livechat:visitorInfo', {                                                                             // 240
			rid: currentData.rid                                                                                                // 240
		});                                                                                                                  // 240
	}                                                                                                                     // 241
                                                                                                                       //
	this.autorun(function () {                                                                                            // 243
		_this3.user.set(Meteor.users.findOne({                                                                               // 244
			'_id': _this3.visitorId.get()                                                                                       // 244
		}));                                                                                                                 // 244
	});                                                                                                                   // 245
});                                                                                                                    // 246
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"triggers":{"template.livechatTriggerAction.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/triggers/template.livechatTriggerAction.js                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("livechatTriggerAction");                                                                         // 2
Template["livechatTriggerAction"] = new Template("Template.livechatTriggerAction", (function() {                       // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "input-line each-action"                                                                                    // 6
  }, "\n\t\t", HTML.DIV({                                                                                              // 7
    class: "trigger-option"                                                                                            // 8
  }, "\n\t\t\t", HTML.SELECT({                                                                                         // 9
    name: "action",                                                                                                    // 10
    class: "trigger-action"                                                                                            // 11
  }, "\n\t\t\t\t", HTML.OPTION({                                                                                       // 12
    value: "send-message"                                                                                              // 13
  }, Blaze.View("lookup:_", function() {                                                                               // 14
    return Spacebars.mustache(view.lookup("_"), "Send_a_message");                                                     // 15
  })), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                    // 16
    class: "trigger-value"                                                                                             // 17
  }, "\n\t\t\t", HTML.DIV({                                                                                            // 18
    class: function() {                                                                                                // 19
      return [ "send-message ", Spacebars.mustache(view.lookup("hiddenValue"), "send-message") ];                      // 20
    }                                                                                                                  // 21
  }, "\n\t\t\t\t", HTML.INPUT({                                                                                        // 22
    type: "text",                                                                                                      // 23
    name: "send-message-name",                                                                                         // 24
    placeholder: function() {                                                                                          // 25
      return Spacebars.mustache(view.lookup("_"), "Name_of_agent");                                                    // 26
    },                                                                                                                 // 27
    value: function() {                                                                                                // 28
      return Spacebars.mustache(Spacebars.dot(view.lookup("params"), "name"));                                         // 29
    },                                                                                                                 // 30
    size: "15"                                                                                                         // 31
  }), "\n\t\t\t\t", HTML.INPUT({                                                                                       // 32
    type: "text",                                                                                                      // 33
    name: "send-message-msg",                                                                                          // 34
    placeholder: function() {                                                                                          // 35
      return Spacebars.mustache(view.lookup("_"), "Message");                                                          // 36
    },                                                                                                                 // 37
    value: function() {                                                                                                // 38
      return Spacebars.mustache(Spacebars.dot(view.lookup("params"), "msg"));                                          // 39
    }                                                                                                                  // 40
  }), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                                                 // 41
}));                                                                                                                   // 42
                                                                                                                       // 43
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"livechatTriggerAction.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/triggers/livechatTriggerAction.js                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.livechatTriggerAction.helpers({                                                                               // 1
	hiddenValue: function (current) {                                                                                     // 2
		if (this.name === undefined && Template.instance().firstAction) {                                                    // 3
			Template.instance().firstAction = false;                                                                            // 4
			return '';                                                                                                          // 5
		} else if (this.name !== current) {                                                                                  // 6
			return 'hidden';                                                                                                    // 7
		}                                                                                                                    // 8
	}                                                                                                                     // 9
});                                                                                                                    // 1
Template.livechatTriggerAction.events({                                                                                // 12
	'change .trigger-action': function (e, instance) {                                                                    // 13
		instance.$('.trigger-action-value ').addClass('hidden');                                                             // 14
		instance.$("." + e.currentTarget.value).removeClass('hidden');                                                       // 15
	}                                                                                                                     // 16
});                                                                                                                    // 12
Template.livechatTriggerAction.onCreated(function () {                                                                 // 19
	this.firstAction = true;                                                                                              // 20
});                                                                                                                    // 21
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.livechatTriggerCondition.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/triggers/template.livechatTriggerCondition.js                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("livechatTriggerCondition");                                                                      // 2
Template["livechatTriggerCondition"] = new Template("Template.livechatTriggerCondition", (function() {                 // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "input-line each-condition"                                                                                 // 6
  }, "\n\t\t", HTML.DIV({                                                                                              // 7
    class: "trigger-option"                                                                                            // 8
  }, "\n\t\t\t", HTML.SELECT({                                                                                         // 9
    name: "condition",                                                                                                 // 10
    class: "trigger-condition"                                                                                         // 11
  }, "\n\t\t\t\t", HTML.OPTION({                                                                                       // 12
    value: "page-url",                                                                                                 // 13
    selected: function() {                                                                                             // 14
      return Spacebars.mustache(view.lookup("conditionSelected"), "page-url");                                         // 15
    }                                                                                                                  // 16
  }, Blaze.View("lookup:_", function() {                                                                               // 17
    return Spacebars.mustache(view.lookup("_"), "Visitor_page_URL");                                                   // 18
  })), "\n\t\t\t\t", HTML.OPTION({                                                                                     // 19
    value: "time-on-site",                                                                                             // 20
    selected: function() {                                                                                             // 21
      return Spacebars.mustache(view.lookup("conditionSelected"), "time-on-site");                                     // 22
    }                                                                                                                  // 23
  }, Blaze.View("lookup:_", function() {                                                                               // 24
    return Spacebars.mustache(view.lookup("_"), "Visitor_time_on_site");                                               // 25
  })), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                    // 26
    class: "trigger-value"                                                                                             // 27
  }, "\n\t\t\t", HTML.DIV({                                                                                            // 28
    class: function() {                                                                                                // 29
      return [ "page-url trigger-condition-value ", Spacebars.mustache(view.lookup("hiddenValue"), "page-url") ];      // 30
    }                                                                                                                  // 31
  }, "\n\t\t\t\t", HTML.INPUT({                                                                                        // 32
    type: "text",                                                                                                      // 33
    name: "page-url-value",                                                                                            // 34
    class: "page-url-value",                                                                                           // 35
    placeholder: function() {                                                                                          // 36
      return Spacebars.mustache(view.lookup("_"), "Enter_a_regex");                                                    // 37
    },                                                                                                                 // 38
    value: function() {                                                                                                // 39
      return Spacebars.mustache(view.lookup("valueFor"), "page-url");                                                  // 40
    }                                                                                                                  // 41
  }), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                              // 42
    class: function() {                                                                                                // 43
      return [ "time-on-site trigger-condition-value ", Spacebars.mustache(view.lookup("hiddenValue"), "time-on-site") ];
    }                                                                                                                  // 45
  }, "\n\t\t\t\t", HTML.INPUT({                                                                                        // 46
    type: "number",                                                                                                    // 47
    name: "time-on-site-value",                                                                                        // 48
    class: "time-on-site-value",                                                                                       // 49
    placeholder: function() {                                                                                          // 50
      return Spacebars.mustache(view.lookup("_"), "Time_in_seconds");                                                  // 51
    },                                                                                                                 // 52
    value: function() {                                                                                                // 53
      return Spacebars.mustache(view.lookup("valueFor"), "time-on-site");                                              // 54
    }                                                                                                                  // 55
  }), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                                                 // 56
}));                                                                                                                   // 57
                                                                                                                       // 58
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"livechatTriggerCondition.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/app/triggers/livechatTriggerCondition.js                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.livechatTriggerCondition.helpers({                                                                            // 1
	hiddenValue: function (current) {                                                                                     // 2
		if (this.name === undefined && Template.instance().firstCondition) {                                                 // 3
			Template.instance().firstCondition = false;                                                                         // 4
			return '';                                                                                                          // 5
		} else if (this.name !== current) {                                                                                  // 6
			return 'hidden';                                                                                                    // 7
		}                                                                                                                    // 8
	},                                                                                                                    // 9
	conditionSelected: function (current) {                                                                               // 10
		if (this.name === current) {                                                                                         // 11
			return 'selected';                                                                                                  // 12
		}                                                                                                                    // 13
	},                                                                                                                    // 14
	valueFor: function (condition) {                                                                                      // 15
		if (this.name === condition) {                                                                                       // 16
			return this.value;                                                                                                  // 17
		}                                                                                                                    // 18
	}                                                                                                                     // 19
});                                                                                                                    // 1
Template.livechatTriggerCondition.events({                                                                             // 22
	'change .trigger-condition': function (e, instance) {                                                                 // 23
		instance.$('.trigger-condition-value ').addClass('hidden');                                                          // 24
		instance.$("." + e.currentTarget.value).removeClass('hidden');                                                       // 25
	}                                                                                                                     // 26
});                                                                                                                    // 22
Template.livechatTriggerCondition.onCreated(function () {                                                              // 29
	this.firstCondition = true;                                                                                           // 30
});                                                                                                                    // 31
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"sideNav":{"template.livechat.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/sideNav/template.livechat.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("livechat");                                                                                      // 2
Template["livechat"] = new Template("Template.livechat", (function() {                                                 // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: function() {                                                                                                // 6
      return [ "livechat-section ", Spacebars.mustache(view.lookup("livechatAvailable")) ];                            // 7
    }                                                                                                                  // 8
  }, "\n\t\t", HTML.H3({                                                                                               // 9
    class: function() {                                                                                                // 10
      return Spacebars.mustache(view.lookup("isActive"));                                                              // 11
    }                                                                                                                  // 12
  }, "\n\t\t\t", Spacebars.With(function() {                                                                           // 13
    return Spacebars.call(view.lookup("available"));                                                                   // 14
  }, function() {                                                                                                      // 15
    return [ "\n\t\t\t\t", HTML.I({                                                                                    // 16
      class: function() {                                                                                              // 17
        return [ "livechat-status ", Spacebars.mustache(view.lookup("status")), " ", Spacebars.mustache(view.lookup("icon")) ];
      },                                                                                                               // 19
      title: function() {                                                                                              // 20
        return Spacebars.mustache(view.lookup("hint"));                                                                // 21
      }                                                                                                                // 22
    }), "\n\t\t\t" ];                                                                                                  // 23
  }), "\n\t\t\t", Blaze.View("lookup:_", function() {                                                                  // 24
    return Spacebars.mustache(view.lookup("_"), "Livechat");                                                           // 25
  }), "\n\t\t"), "\n\n\t\t", Blaze.If(function() {                                                                     // 26
    return Spacebars.call(view.lookup("guestPool"));                                                                   // 27
  }, function() {                                                                                                      // 28
    return [ "\n\t\t\t", Blaze.If(function() {                                                                         // 29
      return Spacebars.call(view.lookup("isLivechatAvailable"));                                                       // 30
    }, function() {                                                                                                    // 31
      return [ "\n\t\t\t\t", HTML.H3({                                                                                 // 32
        class: function() {                                                                                            // 33
          return Spacebars.mustache(view.lookup("isActive"));                                                          // 34
        }                                                                                                              // 35
      }, "\n\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                           // 36
        return Spacebars.mustache(view.lookup("_"), "Incoming_Livechats");                                             // 37
      }), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.UL({                                                                       // 38
        class: "inquiries"                                                                                             // 39
      }, "\n\t\t\t\t\t", Blaze.Each(function() {                                                                       // 40
        return Spacebars.call(view.lookup("inquiries"));                                                               // 41
      }, function() {                                                                                                  // 42
        return [ "\n\t\t\t\t\t\t", Spacebars.include(view.lookupTemplate("chatRoomItem")), "\n\t\t\t\t\t" ];           // 43
      }, function() {                                                                                                  // 44
        return [ "\n\t\t\t\t\t\t", HTML.LI({                                                                           // 45
          class: "empty"                                                                                               // 46
        }, Blaze.View("lookup:_", function() {                                                                         // 47
          return Spacebars.mustache(view.lookup("_"), "No_livechats");                                                 // 48
        })), "\n\t\t\t\t\t" ];                                                                                         // 49
      }), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                                 // 50
    }), "\n\n\t\t\t", HTML.H3({                                                                                        // 51
      class: function() {                                                                                              // 52
        return Spacebars.mustache(view.lookup("isActive"));                                                            // 53
      }                                                                                                                // 54
    }, "\n\t\t\t\t", Blaze.View("lookup:_", function() {                                                               // 55
      return Spacebars.mustache(view.lookup("_"), "Open_Livechats");                                                   // 56
    }), "\n\t\t\t"), "\n\t\t" ];                                                                                       // 57
  }), "\n\n\t\t", HTML.UL("\n\t\t\t", Blaze.If(function() {                                                            // 58
    return Spacebars.call(view.lookup("showQueueLink"));                                                               // 59
  }, function() {                                                                                                      // 60
    return [ "\n\t\t\t\t", HTML.LI({                                                                                   // 61
      class: function() {                                                                                              // 62
        return Spacebars.mustache(view.lookup("activeLivechatQueue"));                                                 // 63
      }                                                                                                                // 64
    }, "\n\t\t\t\t\t", HTML.A({                                                                                        // 65
      href: function() {                                                                                               // 66
        return Spacebars.mustache(view.lookup("pathFor"), "livechat-queue");                                           // 67
      }                                                                                                                // 68
    }, "\n\t\t\t\t\t\t", HTML.I({                                                                                      // 69
      class: "icon-th-list"                                                                                            // 70
    }), "\n\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                          // 71
      return Spacebars.mustache(view.lookup("_"), "Queue");                                                            // 72
    }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                  // 73
  }), "\n\t\t\t", Blaze.Each(function() {                                                                              // 74
    return Spacebars.call(view.lookup("rooms"));                                                                       // 75
  }, function() {                                                                                                      // 76
    return [ "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("chatRoomItem")), "\n\t\t\t" ];                       // 77
  }, function() {                                                                                                      // 78
    return [ "\n\t\t\t\t", HTML.LI({                                                                                   // 79
      class: "empty"                                                                                                   // 80
    }, Blaze.View("lookup:_", function() {                                                                             // 81
      return Spacebars.mustache(view.lookup("_"), "No_livechats");                                                     // 82
    })), "\n\t\t\t" ];                                                                                                 // 83
  }), "\n\t\t"), "\n\t");                                                                                              // 84
}));                                                                                                                   // 85
                                                                                                                       // 86
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"livechat.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/sideNav/livechat.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals LivechatInquiry, KonchatNotification */Template.livechat.helpers({                                          // 1
	isActive: function () {                                                                                               // 3
		var query = {                                                                                                        // 4
			t: 'l',                                                                                                             // 5
			f: {                                                                                                                // 6
				$ne: true                                                                                                          // 6
			},                                                                                                                  // 6
			open: true,                                                                                                         // 7
			rid: Session.get('openedRoom')                                                                                      // 8
		};                                                                                                                   // 4
		var options = {                                                                                                      // 11
			fields: {                                                                                                           // 11
				_id: 1                                                                                                             // 11
			}                                                                                                                   // 11
		};                                                                                                                   // 11
                                                                                                                       //
		if (ChatSubscription.findOne(query, options)) {                                                                      // 13
			return 'active';                                                                                                    // 14
		}                                                                                                                    // 15
	},                                                                                                                    // 16
	rooms: function () {                                                                                                  // 18
		var query = {                                                                                                        // 19
			t: 'l',                                                                                                             // 20
			open: true                                                                                                          // 21
		};                                                                                                                   // 19
		var user = RocketChat.models.Users.findOne(Meteor.userId(), {                                                        // 24
			fields: {                                                                                                           // 25
				'settings.preferences.unreadRoomsMode': 1                                                                          // 25
			}                                                                                                                   // 25
		});                                                                                                                  // 24
                                                                                                                       //
		if (user && user.settings && user.settings.preferences && user.settings.preferences.unreadRoomsMode) {               // 28
			query.alert = {                                                                                                     // 29
				$ne: true                                                                                                          // 29
			};                                                                                                                  // 29
		}                                                                                                                    // 30
                                                                                                                       //
		return ChatSubscription.find(query, {                                                                                // 32
			sort: {                                                                                                             // 32
				't': 1,                                                                                                            // 33
				'name': 1                                                                                                          // 34
			}                                                                                                                   // 32
		});                                                                                                                  // 32
	},                                                                                                                    // 36
	inquiries: function () {                                                                                              // 38
		// get all inquiries of the department                                                                               // 39
		var inqs = LivechatInquiry.find({                                                                                    // 40
			agents: Meteor.userId(),                                                                                            // 41
			status: 'open'                                                                                                      // 42
		}, {                                                                                                                 // 40
			sort: {                                                                                                             // 44
				'ts': 1                                                                                                            // 45
			}                                                                                                                   // 44
		}); // for notification sound                                                                                        // 43
                                                                                                                       //
		inqs.forEach(function (inq) {                                                                                        // 50
			KonchatNotification.newRoom(inq.rid);                                                                               // 51
		});                                                                                                                  // 52
		return inqs;                                                                                                         // 54
	},                                                                                                                    // 55
	guestPool: function () {                                                                                              // 57
		return RocketChat.settings.get('Livechat_Routing_Method') === 'Guest_Pool';                                          // 58
	},                                                                                                                    // 59
	available: function () {                                                                                              // 61
		var statusLivechat = Template.instance().statusLivechat.get();                                                       // 62
		return {                                                                                                             // 64
			status: statusLivechat === 'available' ? 'status-online' : 'status-offline',                                        // 65
			icon: statusLivechat === 'available' ? 'icon-toggle-on' : 'icon-toggle-off',                                        // 66
			hint: statusLivechat === 'available' ? t('Available') : t('Not_Available')                                          // 67
		};                                                                                                                   // 64
	},                                                                                                                    // 69
	livechatAvailable: function () {                                                                                      // 71
		return Template.instance().statusLivechat.get();                                                                     // 72
	},                                                                                                                    // 73
	isLivechatAvailable: function () {                                                                                    // 75
		return Template.instance().statusLivechat.get() === 'available';                                                     // 76
	},                                                                                                                    // 77
	showQueueLink: function () {                                                                                          // 79
		if (RocketChat.settings.get('Livechat_Routing_Method') !== 'Least_Amount') {                                         // 80
			return false;                                                                                                       // 81
		}                                                                                                                    // 82
                                                                                                                       //
		return RocketChat.authz.hasRole(Meteor.userId(), 'livechat-manager') || Template.instance().statusLivechat.get() === 'available' && RocketChat.settings.get('Livechat_show_queue_list_link');
	},                                                                                                                    // 84
	activeLivechatQueue: function () {                                                                                    // 86
		FlowRouter.watchPathChange();                                                                                        // 87
                                                                                                                       //
		if (FlowRouter.current().route.name === 'livechat-queue') {                                                          // 88
			return 'active';                                                                                                    // 89
		}                                                                                                                    // 90
	}                                                                                                                     // 91
});                                                                                                                    // 2
Template.livechat.events({                                                                                             // 94
	'click .livechat-status': function () {                                                                               // 95
		Meteor.call('livechat:changeLivechatStatus', function (err /*, results*/) {                                          // 96
			if (err) {                                                                                                          // 97
				return handleError(err);                                                                                           // 98
			}                                                                                                                   // 99
		});                                                                                                                  // 100
	},                                                                                                                    // 101
	'click .inquiries .open-room': function (event) {                                                                     // 103
		var _this = this;                                                                                                    // 103
                                                                                                                       //
		event.preventDefault();                                                                                              // 104
		event.stopPropagation();                                                                                             // 105
		swal({                                                                                                               // 107
			title: t('Livechat_Take_Confirm'),                                                                                  // 108
			text: t('Message') + ": " + this.message,                                                                           // 109
			showCancelButton: true,                                                                                             // 110
			confirmButtonColor: '#3085d6',                                                                                      // 111
			cancelButtonColor: '#d33',                                                                                          // 112
			confirmButtonText: t('Take_it')                                                                                     // 113
		}, function (isConfirm) {                                                                                            // 107
			if (isConfirm) {                                                                                                    // 115
				Meteor.call('livechat:takeInquiry', _this._id, function (error, result) {                                          // 116
					if (!error) {                                                                                                     // 117
						RocketChat.roomTypes.openRouteLink(result.t, result);                                                            // 118
					}                                                                                                                 // 119
				});                                                                                                                // 120
			}                                                                                                                   // 121
		});                                                                                                                  // 122
	}                                                                                                                     // 123
});                                                                                                                    // 94
Template.livechat.onCreated(function () {                                                                              // 126
	var _this2 = this;                                                                                                    // 126
                                                                                                                       //
	this.statusLivechat = new ReactiveVar();                                                                              // 127
	this.autorun(function () {                                                                                            // 129
		if (Meteor.userId()) {                                                                                               // 130
			var user = RocketChat.models.Users.findOne(Meteor.userId(), {                                                       // 131
				fields: {                                                                                                          // 131
					statusLivechat: 1                                                                                                 // 131
				}                                                                                                                  // 131
			});                                                                                                                 // 131
                                                                                                                       //
			_this2.statusLivechat.set(user.statusLivechat);                                                                     // 132
		} else {                                                                                                             // 133
			_this2.statusLivechat.set();                                                                                        // 134
		}                                                                                                                    // 135
	});                                                                                                                   // 136
	this.subscribe('livechat:inquiry');                                                                                   // 138
});                                                                                                                    // 139
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.livechatFlex.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/sideNav/template.livechatFlex.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("livechatFlex");                                                                                  // 2
Template["livechatFlex"] = new Template("Template.livechatFlex", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return [ HTML.HEADER("\n\t\t", HTML.DIV("\n\t\t\t", HTML.H4(Blaze.View("lookup:_", function() {                      // 5
    return Spacebars.mustache(view.lookup("_"), "Livechat");                                                           // 6
  })), "\n\t\t"), "\n\t"), "\n\t", HTML.DIV({                                                                          // 7
    class: "content"                                                                                                   // 8
  }, "\n\t\t", HTML.DIV({                                                                                              // 9
    class: "wrapper"                                                                                                   // 10
  }, "\n\t\t\t", HTML.UL({                                                                                             // 11
    class: "flex-list"                                                                                                 // 12
  }, "\n\t\t\t\t", HTML.Raw('<li><!-- <a href="{{pathFor \'livechat-dashboard\'}}" class="{{active \'livechat-dashboard\'}}">{{_ "Dashboard"}}</a> --></li>'), "\n\t\t\t\t", HTML.LI(HTML.A({
    href: function() {                                                                                                 // 14
      return Spacebars.mustache(view.lookup("pathFor"), "livechat-current-chats");                                     // 15
    },                                                                                                                 // 16
    class: function() {                                                                                                // 17
      return Spacebars.mustache(view.lookup("active"), "livechat-current-chats");                                      // 18
    }                                                                                                                  // 19
  }, Blaze.View("lookup:_", function() {                                                                               // 20
    return Spacebars.mustache(view.lookup("_"), "Current_Chats");                                                      // 21
  }))), "\n\t\t\t\t", HTML.LI(HTML.A({                                                                                 // 22
    href: function() {                                                                                                 // 23
      return Spacebars.mustache(view.lookup("pathFor"), "livechat-users");                                             // 24
    },                                                                                                                 // 25
    class: function() {                                                                                                // 26
      return Spacebars.mustache(view.lookup("active"), "livechat-users");                                              // 27
    }                                                                                                                  // 28
  }, Blaze.View("lookup:_", function() {                                                                               // 29
    return Spacebars.mustache(view.lookup("_"), "User_management");                                                    // 30
  }))), "\n\t\t\t\t", HTML.LI(HTML.A({                                                                                 // 31
    href: function() {                                                                                                 // 32
      return Spacebars.mustache(view.lookup("pathFor"), "livechat-departments");                                       // 33
    },                                                                                                                 // 34
    class: function() {                                                                                                // 35
      return Spacebars.mustache(view.lookup("active"), "livechat-departments", "livechat-department-edit");            // 36
    }                                                                                                                  // 37
  }, Blaze.View("lookup:_", function() {                                                                               // 38
    return Spacebars.mustache(view.lookup("_"), "Departments");                                                        // 39
  }))), "\n\t\t\t\t", HTML.LI(HTML.A({                                                                                 // 40
    href: function() {                                                                                                 // 41
      return Spacebars.mustache(view.lookup("pathFor"), "livechat-triggers");                                          // 42
    },                                                                                                                 // 43
    class: function() {                                                                                                // 44
      return Spacebars.mustache(view.lookup("active"), "livechat-triggers");                                           // 45
    }                                                                                                                  // 46
  }, Blaze.View("lookup:_", function() {                                                                               // 47
    return Spacebars.mustache(view.lookup("_"), "Triggers");                                                           // 48
  }))), "\n\t\t\t\t", HTML.LI(HTML.A({                                                                                 // 49
    href: function() {                                                                                                 // 50
      return Spacebars.mustache(view.lookup("pathFor"), "livechat-customfields");                                      // 51
    },                                                                                                                 // 52
    class: function() {                                                                                                // 53
      return Spacebars.mustache(view.lookup("active"), "livechat-customfields");                                       // 54
    }                                                                                                                  // 55
  }, Blaze.View("lookup:_", function() {                                                                               // 56
    return Spacebars.mustache(view.lookup("_"), "Custom_Fields");                                                      // 57
  }))), "\n\t\t\t\t", HTML.LI(HTML.A({                                                                                 // 58
    href: function() {                                                                                                 // 59
      return Spacebars.mustache(view.lookup("pathFor"), "livechat-installation");                                      // 60
    },                                                                                                                 // 61
    class: function() {                                                                                                // 62
      return Spacebars.mustache(view.lookup("active"), "livechat-installation");                                       // 63
    }                                                                                                                  // 64
  }, Blaze.View("lookup:_", function() {                                                                               // 65
    return Spacebars.mustache(view.lookup("_"), "Installation");                                                       // 66
  }))), "\n\t\t\t\t", HTML.LI(HTML.A({                                                                                 // 67
    href: function() {                                                                                                 // 68
      return Spacebars.mustache(view.lookup("pathFor"), "livechat-appearance");                                        // 69
    },                                                                                                                 // 70
    class: function() {                                                                                                // 71
      return Spacebars.mustache(view.lookup("active"), "livechat-appearance");                                         // 72
    }                                                                                                                  // 73
  }, Blaze.View("lookup:_", function() {                                                                               // 74
    return Spacebars.mustache(view.lookup("_"), "Appearance");                                                         // 75
  }))), "\n\t\t\t\t", HTML.LI(HTML.A({                                                                                 // 76
    href: function() {                                                                                                 // 77
      return Spacebars.mustache(view.lookup("pathFor"), "livechat-integrations");                                      // 78
    },                                                                                                                 // 79
    class: function() {                                                                                                // 80
      return Spacebars.mustache(view.lookup("active"), "livechat-integrations");                                       // 81
    }                                                                                                                  // 82
  }, Blaze.View("lookup:_", function() {                                                                               // 83
    return Spacebars.mustache(view.lookup("_"), "Integrations");                                                       // 84
  }))), "\n\t\t\t\t", HTML.LI(HTML.A({                                                                                 // 85
    href: function() {                                                                                                 // 86
      return Spacebars.mustache(view.lookup("pathFor"), "livechat-officeHours");                                       // 87
    },                                                                                                                 // 88
    class: function() {                                                                                                // 89
      return Spacebars.mustache(view.lookup("active"), "livechat-officeHours");                                        // 90
    }                                                                                                                  // 91
  }, Blaze.View("lookup:_", function() {                                                                               // 92
    return Spacebars.mustache(view.lookup("_"), "Office_Hours");                                                       // 93
  }))), "\n\t\t\t"), "\n\t\t"), "\n\t") ];                                                                             // 94
}));                                                                                                                   // 95
                                                                                                                       // 96
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"livechatFlex.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/client/views/sideNav/livechatFlex.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.livechatFlex.helpers({                                                                                        // 1
	active: function () {                                                                                                 // 2
		FlowRouter.watchPathChange();                                                                                        // 3
                                                                                                                       //
		for (var _len = arguments.length, routes = Array(_len), _key = 0; _key < _len; _key++) {                             // 2
			routes[_key] = arguments[_key];                                                                                     // 2
		}                                                                                                                    // 2
                                                                                                                       //
		if (routes.indexOf(FlowRouter.current().route.name) !== -1) {                                                        // 4
			return 'active';                                                                                                    // 5
		}                                                                                                                    // 6
	}                                                                                                                     // 7
});                                                                                                                    // 1
Template.livechatFlex.events({                                                                                         // 10
	'mouseenter header': function () {                                                                                    // 11
		SideNav.overArrow();                                                                                                 // 12
	},                                                                                                                    // 13
	'mouseleave header': function () {                                                                                    // 15
		SideNav.leaveArrow();                                                                                                // 16
	},                                                                                                                    // 17
	'click header': function () {                                                                                         // 19
		SideNav.closeFlex();                                                                                                 // 20
	}                                                                                                                     // 21
});                                                                                                                    // 10
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},"server":{"models":{"LivechatExternalMessage.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_livechat/server/models/LivechatExternalMessage.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                          //
                                                                                                                       //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                 //
                                                                                                                       //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                            //
                                                                                                                       //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                   //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
var LivechatExternalMessage = function (_RocketChat$models$_B) {                                                       //
	(0, _inherits3.default)(LivechatExternalMessage, _RocketChat$models$_B);                                              //
                                                                                                                       //
	function LivechatExternalMessage() {                                                                                  // 2
		(0, _classCallCheck3.default)(this, LivechatExternalMessage);                                                        // 2
                                                                                                                       //
		var _this = (0, _possibleConstructorReturn3.default)(this, _RocketChat$models$_B.call(this, 'livechat_external_message'));
                                                                                                                       //
		if (Meteor.isClient) {                                                                                               // 5
			_this._initModel('livechat_external_message');                                                                      // 6
		}                                                                                                                    // 7
                                                                                                                       //
		return _this;                                                                                                        // 2
	} // FIND                                                                                                             // 8
                                                                                                                       //
                                                                                                                       //
	LivechatExternalMessage.prototype.findByRoomId = function () {                                                        //
		function findByRoomId(roomId) {                                                                                      //
			var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {                                    // 11
				ts: -1                                                                                                             // 11
			};                                                                                                                  // 11
			var query = {                                                                                                       // 12
				rid: roomId                                                                                                        // 12
			};                                                                                                                  // 12
			return this.find(query, {                                                                                           // 14
				sort: sort                                                                                                         // 14
			});                                                                                                                 // 14
		}                                                                                                                    // 15
                                                                                                                       //
		return findByRoomId;                                                                                                 //
	}();                                                                                                                  //
                                                                                                                       //
	return LivechatExternalMessage;                                                                                       //
}(RocketChat.models._Base);                                                                                            //
                                                                                                                       //
RocketChat.models.LivechatExternalMessage = new LivechatExternalMessage();                                             // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"node_modules":{"ua-parser-js":{"package.json":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// .npm/package/node_modules/ua-parser-js/package.json                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.name = "ua-parser-js";                                                                                         // 1
exports.version = "0.7.10";                                                                                            // 2
exports.main = "src/ua-parser.js";                                                                                     // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"src":{"ua-parser.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/rocketchat_livechat/node_modules/ua-parser-js/src/ua-parser.js                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    // 1
 * UAParser.js v0.7.10                                                                                                 // 2
 * Lightweight JavaScript-based User-Agent string parser                                                               // 3
 * https://github.com/faisalman/ua-parser-js                                                                           // 4
 *                                                                                                                     // 5
 * Copyright © 2012-2015 Faisal Salman <fyzlman@gmail.com>                                                             // 6
 * Dual licensed under GPLv2 & MIT                                                                                     // 7
 */                                                                                                                    // 8
                                                                                                                       // 9
(function (window, undefined) {                                                                                        // 10
                                                                                                                       // 11
    'use strict';                                                                                                      // 12
                                                                                                                       // 13
    //////////////                                                                                                     // 14
    // Constants                                                                                                       // 15
    /////////////                                                                                                      // 16
                                                                                                                       // 17
                                                                                                                       // 18
    var LIBVERSION  = '0.7.10',                                                                                        // 19
        EMPTY       = '',                                                                                              // 20
        UNKNOWN     = '?',                                                                                             // 21
        FUNC_TYPE   = 'function',                                                                                      // 22
        UNDEF_TYPE  = 'undefined',                                                                                     // 23
        OBJ_TYPE    = 'object',                                                                                        // 24
        STR_TYPE    = 'string',                                                                                        // 25
        MAJOR       = 'major', // deprecated                                                                           // 26
        MODEL       = 'model',                                                                                         // 27
        NAME        = 'name',                                                                                          // 28
        TYPE        = 'type',                                                                                          // 29
        VENDOR      = 'vendor',                                                                                        // 30
        VERSION     = 'version',                                                                                       // 31
        ARCHITECTURE= 'architecture',                                                                                  // 32
        CONSOLE     = 'console',                                                                                       // 33
        MOBILE      = 'mobile',                                                                                        // 34
        TABLET      = 'tablet',                                                                                        // 35
        SMARTTV     = 'smarttv',                                                                                       // 36
        WEARABLE    = 'wearable',                                                                                      // 37
        EMBEDDED    = 'embedded';                                                                                      // 38
                                                                                                                       // 39
                                                                                                                       // 40
    ///////////                                                                                                        // 41
    // Helper                                                                                                          // 42
    //////////                                                                                                         // 43
                                                                                                                       // 44
                                                                                                                       // 45
    var util = {                                                                                                       // 46
        extend : function (regexes, extensions) {                                                                      // 47
            for (var i in extensions) {                                                                                // 48
                if ("browser cpu device engine os".indexOf(i) !== -1 && extensions[i].length % 2 === 0) {              // 49
                    regexes[i] = extensions[i].concat(regexes[i]);                                                     // 50
                }                                                                                                      // 51
            }                                                                                                          // 52
            return regexes;                                                                                            // 53
        },                                                                                                             // 54
        has : function (str1, str2) {                                                                                  // 55
          if (typeof str1 === "string") {                                                                              // 56
            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;                                              // 57
          } else {                                                                                                     // 58
            return false;                                                                                              // 59
          }                                                                                                            // 60
        },                                                                                                             // 61
        lowerize : function (str) {                                                                                    // 62
            return str.toLowerCase();                                                                                  // 63
        },                                                                                                             // 64
        major : function (version) {                                                                                   // 65
            return typeof(version) === STR_TYPE ? version.split(".")[0] : undefined;                                   // 66
        }                                                                                                              // 67
    };                                                                                                                 // 68
                                                                                                                       // 69
                                                                                                                       // 70
    ///////////////                                                                                                    // 71
    // Map helper                                                                                                      // 72
    //////////////                                                                                                     // 73
                                                                                                                       // 74
                                                                                                                       // 75
    var mapper = {                                                                                                     // 76
                                                                                                                       // 77
        rgx : function () {                                                                                            // 78
                                                                                                                       // 79
            var result, i = 0, j, k, p, q, matches, match, args = arguments;                                           // 80
                                                                                                                       // 81
            // loop through all regexes maps                                                                           // 82
            while (i < args.length && !matches) {                                                                      // 83
                                                                                                                       // 84
                var regex = args[i],       // even sequence (0,2,4,..)                                                 // 85
                    props = args[i + 1];   // odd sequence (1,3,5,..)                                                  // 86
                                                                                                                       // 87
                // construct object barebones                                                                          // 88
                if (typeof result === UNDEF_TYPE) {                                                                    // 89
                    result = {};                                                                                       // 90
                    for (p in props) {                                                                                 // 91
                        if (props.hasOwnProperty(p)){                                                                  // 92
                            q = props[p];                                                                              // 93
                            if (typeof q === OBJ_TYPE) {                                                               // 94
                                result[q[0]] = undefined;                                                              // 95
                            } else {                                                                                   // 96
                                result[q] = undefined;                                                                 // 97
                            }                                                                                          // 98
                        }                                                                                              // 99
                    }                                                                                                  // 100
                }                                                                                                      // 101
                                                                                                                       // 102
                // try matching uastring with regexes                                                                  // 103
                j = k = 0;                                                                                             // 104
                while (j < regex.length && !matches) {                                                                 // 105
                    matches = regex[j++].exec(this.getUA());                                                           // 106
                    if (!!matches) {                                                                                   // 107
                        for (p = 0; p < props.length; p++) {                                                           // 108
                            match = matches[++k];                                                                      // 109
                            q = props[p];                                                                              // 110
                            // check if given property is actually array                                               // 111
                            if (typeof q === OBJ_TYPE && q.length > 0) {                                               // 112
                                if (q.length == 2) {                                                                   // 113
                                    if (typeof q[1] == FUNC_TYPE) {                                                    // 114
                                        // assign modified match                                                       // 115
                                        result[q[0]] = q[1].call(this, match);                                         // 116
                                    } else {                                                                           // 117
                                        // assign given value, ignore regex match                                      // 118
                                        result[q[0]] = q[1];                                                           // 119
                                    }                                                                                  // 120
                                } else if (q.length == 3) {                                                            // 121
                                    // check whether function or regex                                                 // 122
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {                      // 123
                                        // call function (usually string mapper)                                       // 124
                                        result[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;               // 125
                                    } else {                                                                           // 126
                                        // sanitize match using given regex                                            // 127
                                        result[q[0]] = match ? match.replace(q[1], q[2]) : undefined;                  // 128
                                    }                                                                                  // 129
                                } else if (q.length == 4) {                                                            // 130
                                        result[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                }                                                                                      // 132
                            } else {                                                                                   // 133
                                result[q] = match ? match : undefined;                                                 // 134
                            }                                                                                          // 135
                        }                                                                                              // 136
                    }                                                                                                  // 137
                }                                                                                                      // 138
                i += 2;                                                                                                // 139
            }                                                                                                          // 140
            return result;                                                                                             // 141
        },                                                                                                             // 142
                                                                                                                       // 143
        str : function (str, map) {                                                                                    // 144
                                                                                                                       // 145
            for (var i in map) {                                                                                       // 146
                // check if array                                                                                      // 147
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {                                                 // 148
                    for (var j = 0; j < map[i].length; j++) {                                                          // 149
                        if (util.has(map[i][j], str)) {                                                                // 150
                            return (i === UNKNOWN) ? undefined : i;                                                    // 151
                        }                                                                                              // 152
                    }                                                                                                  // 153
                } else if (util.has(map[i], str)) {                                                                    // 154
                    return (i === UNKNOWN) ? undefined : i;                                                            // 155
                }                                                                                                      // 156
            }                                                                                                          // 157
            return str;                                                                                                // 158
        }                                                                                                              // 159
    };                                                                                                                 // 160
                                                                                                                       // 161
                                                                                                                       // 162
    ///////////////                                                                                                    // 163
    // String map                                                                                                      // 164
    //////////////                                                                                                     // 165
                                                                                                                       // 166
                                                                                                                       // 167
    var maps = {                                                                                                       // 168
                                                                                                                       // 169
        browser : {                                                                                                    // 170
            oldsafari : {                                                                                              // 171
                version : {                                                                                            // 172
                    '1.0'   : '/8',                                                                                    // 173
                    '1.2'   : '/1',                                                                                    // 174
                    '1.3'   : '/3',                                                                                    // 175
                    '2.0'   : '/412',                                                                                  // 176
                    '2.0.2' : '/416',                                                                                  // 177
                    '2.0.3' : '/417',                                                                                  // 178
                    '2.0.4' : '/419',                                                                                  // 179
                    '?'     : '/'                                                                                      // 180
                }                                                                                                      // 181
            }                                                                                                          // 182
        },                                                                                                             // 183
                                                                                                                       // 184
        device : {                                                                                                     // 185
            amazon : {                                                                                                 // 186
                model : {                                                                                              // 187
                    'Fire Phone' : ['SD', 'KF']                                                                        // 188
                }                                                                                                      // 189
            },                                                                                                         // 190
            sprint : {                                                                                                 // 191
                model : {                                                                                              // 192
                    'Evo Shift 4G' : '7373KT'                                                                          // 193
                },                                                                                                     // 194
                vendor : {                                                                                             // 195
                    'HTC'       : 'APA',                                                                               // 196
                    'Sprint'    : 'Sprint'                                                                             // 197
                }                                                                                                      // 198
            }                                                                                                          // 199
        },                                                                                                             // 200
                                                                                                                       // 201
        os : {                                                                                                         // 202
            windows : {                                                                                                // 203
                version : {                                                                                            // 204
                    'ME'        : '4.90',                                                                              // 205
                    'NT 3.11'   : 'NT3.51',                                                                            // 206
                    'NT 4.0'    : 'NT4.0',                                                                             // 207
                    '2000'      : 'NT 5.0',                                                                            // 208
                    'XP'        : ['NT 5.1', 'NT 5.2'],                                                                // 209
                    'Vista'     : 'NT 6.0',                                                                            // 210
                    '7'         : 'NT 6.1',                                                                            // 211
                    '8'         : 'NT 6.2',                                                                            // 212
                    '8.1'       : 'NT 6.3',                                                                            // 213
                    '10'        : ['NT 6.4', 'NT 10.0'],                                                               // 214
                    'RT'        : 'ARM'                                                                                // 215
                }                                                                                                      // 216
            }                                                                                                          // 217
        }                                                                                                              // 218
    };                                                                                                                 // 219
                                                                                                                       // 220
                                                                                                                       // 221
    //////////////                                                                                                     // 222
    // Regex map                                                                                                       // 223
    /////////////                                                                                                      // 224
                                                                                                                       // 225
                                                                                                                       // 226
    var regexes = {                                                                                                    // 227
                                                                                                                       // 228
        browser : [[                                                                                                   // 229
                                                                                                                       // 230
            // Presto based                                                                                            // 231
            /(opera\smini)\/([\w\.-]+)/i,                                       // Opera Mini                          // 232
            /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,                      // Opera Mobi/Tablet                   // 233
            /(opera).+version\/([\w\.]+)/i,                                     // Opera > 9.80                        // 234
            /(opera)[\/\s]+([\w\.]+)/i                                          // Opera < 9.80                        // 235
                                                                                                                       // 236
            ], [NAME, VERSION], [                                                                                      // 237
                                                                                                                       // 238
            /\s(opr)\/([\w\.]+)/i                                               // Opera Webkit                        // 239
            ], [[NAME, 'Opera'], VERSION], [                                                                           // 240
                                                                                                                       // 241
            // Mixed                                                                                                   // 242
            /(kindle)\/([\w\.]+)/i,                                             // Kindle                              // 243
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,                                           // 244
                                                                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer
                                                                                                                       // 246
            // Trident based                                                                                           // 247
            /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,                                              // 248
                                                                                // Avant/IEMobile/SlimBrowser/Baidu    // 249
            /(?:ms|\()(ie)\s([\w\.]+)/i,                                        // Internet Explorer                   // 250
                                                                                                                       // 251
            // Webkit/KHTML based                                                                                      // 252
            /(rekonq)\/([\w\.]+)*/i,                                            // Rekonq                              // 253
            /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i
                                                                                // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS
            ], [NAME, VERSION], [                                                                                      // 256
                                                                                                                       // 257
            /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i                         // IE11                                // 258
            ], [[NAME, 'IE'], VERSION], [                                                                              // 259
                                                                                                                       // 260
            /(edge)\/((\d+)?[\w\.]+)/i                                          // Microsoft Edge                      // 261
            ], [NAME, VERSION], [                                                                                      // 262
                                                                                                                       // 263
            /(yabrowser)\/([\w\.]+)/i                                           // Yandex                              // 264
            ], [[NAME, 'Yandex'], VERSION], [                                                                          // 265
                                                                                                                       // 266
            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon                       // 267
            ], [[NAME, /_/g, ' '], VERSION], [                                                                         // 268
                                                                                                                       // 269
            /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,                                            // 270
                                                                                // Chrome/OmniWeb/Arora/Tizen/Nokia    // 271
            /(qqbrowser)[\/\s]?([\w\.]+)/i                                                                             // 272
                                                                                // QQBrowser                           // 273
            ], [NAME, VERSION], [                                                                                      // 274
                                                                                                                       // 275
            /(uc\s?browser)[\/\s]?([\w\.]+)/i,                                                                         // 276
            /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,                                                                     // 277
            /JUC.+(ucweb)[\/\s]?([\w\.]+)/i                                                                            // 278
                                                                                // UCBrowser                           // 279
            ], [[NAME, 'UCBrowser'], VERSION], [                                                                       // 280
                                                                                                                       // 281
            /(dolfin)\/([\w\.]+)/i                                              // Dolphin                             // 282
            ], [[NAME, 'Dolphin'], VERSION], [                                                                         // 283
                                                                                                                       // 284
            /((?:android.+)crmo|crios)\/([\w\.]+)/i                             // Chrome for Android/iOS              // 285
            ], [[NAME, 'Chrome'], VERSION], [                                                                          // 286
                                                                                                                       // 287
            /XiaoMi\/MiuiBrowser\/([\w\.]+)/i                                   // MIUI Browser                        // 288
            ], [VERSION, [NAME, 'MIUI Browser']], [                                                                    // 289
                                                                                                                       // 290
            /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i         // Android Browser                     // 291
            ], [VERSION, [NAME, 'Android Browser']], [                                                                 // 292
                                                                                                                       // 293
            /FBAV\/([\w\.]+);/i                                                 // Facebook App for iOS                // 294
            ], [VERSION, [NAME, 'Facebook']], [                                                                        // 295
                                                                                                                       // 296
            /fxios\/([\w\.-]+)/i                                                // Firefox for iOS                     // 297
            ], [VERSION, [NAME, 'Firefox']], [                                                                         // 298
                                                                                                                       // 299
            /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i                       // Mobile Safari                       // 300
            ], [VERSION, [NAME, 'Mobile Safari']], [                                                                   // 301
                                                                                                                       // 302
            /version\/([\w\.]+).+?(mobile\s?safari|safari)/i                    // Safari & Safari Mobile              // 303
            ], [VERSION, NAME], [                                                                                      // 304
                                                                                                                       // 305
            /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i                     // Safari < 3.0                        // 306
            ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [                                        // 307
                                                                                                                       // 308
            /(konqueror)\/([\w\.]+)/i,                                          // Konqueror                           // 309
            /(webkit|khtml)\/([\w\.]+)/i                                                                               // 310
            ], [NAME, VERSION], [                                                                                      // 311
                                                                                                                       // 312
            // Gecko based                                                                                             // 313
            /(navigator|netscape)\/([\w\.-]+)/i                                 // Netscape                            // 314
            ], [[NAME, 'Netscape'], VERSION], [                                                                        // 315
            /(swiftfox)/i,                                                      // Swiftfox                            // 316
            /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,           // 317
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
            /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,                                // 319
                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,                          // Mozilla                             // 321
                                                                                                                       // 322
            // Other                                                                                                   // 323
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,                             // 324
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
            /(links)\s\(([\w\.]+)/i,                                            // Links                               // 326
            /(gobrowser)\/?([\w\.]+)*/i,                                        // GoBrowser                           // 327
            /(ice\s?browser)\/v?([\w\._]+)/i,                                   // ICE Browser                         // 328
            /(mosaic)[\/\s]([\w\.]+)/i                                          // Mosaic                              // 329
            ], [NAME, VERSION]                                                                                         // 330
                                                                                                                       // 331
            /* /////////////////////                                                                                   // 332
            // Media players BEGIN                                                                                     // 333
            ////////////////////////                                                                                   // 334
                                                                                                                       // 335
            , [                                                                                                        // 336
                                                                                                                       // 337
            /(apple(?:coremedia|))\/((\d+)[\w\._]+)/i,                          // Generic Apple CoreMedia             // 338
            /(coremedia) v((\d+)[\w\._]+)/i                                                                            // 339
            ], [NAME, VERSION], [                                                                                      // 340
                                                                                                                       // 341
            /(aqualung|lyssna|bsplayer)\/((\d+)?[\w\.-]+)/i                     // Aqualung/Lyssna/BSPlayer            // 342
            ], [NAME, VERSION], [                                                                                      // 343
                                                                                                                       // 344
            /(ares|ossproxy)\s((\d+)[\w\.-]+)/i                                 // Ares/OSSProxy                       // 345
            ], [NAME, VERSION], [                                                                                      // 346
                                                                                                                       // 347
            /(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i,
                                                                                // Audacious/AudiMusicStream/Amarok/BASS/OpenCORE/Dalvik/GnomeMplayer/MoC
                                                                                // NSPlayer/PSP-InternetRadioPlayer/Videos
            /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i,               // Clementine/MPD                      // 351
            /(lg player|nexplayer)\s((\d+)[\d\.]+)/i,                                                                  // 352
            /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i                   // NexPlayer/LG Player                 // 353
            ], [NAME, VERSION], [                                                                                      // 354
            /(nexplayer)\s((\d+)[\w\.-]+)/i                                     // Nexplayer                           // 355
            ], [NAME, VERSION], [                                                                                      // 356
                                                                                                                       // 357
            /(flrp)\/((\d+)[\w\.-]+)/i                                          // Flip Player                         // 358
            ], [[NAME, 'Flip Player'], VERSION], [                                                                     // 359
                                                                                                                       // 360
            /(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i                                    // 361
                                                                                // FStream/NativeHost/QuerySeekSpider/IA Archiver/facebookexternalhit
            ], [NAME], [                                                                                               // 363
                                                                                                                       // 364
            /(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i                                    // 365
                                                                                // Gstreamer                           // 366
            ], [NAME, VERSION], [                                                                                      // 367
                                                                                                                       // 368
            /(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i,              // HTC Streaming Player                // 369
            /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i,                                    // 370
                                                                                // Java/urllib/requests/wget/cURL      // 371
            /(lavf)((\d+)[\d\.]+)/i                                             // Lavf (FFMPEG)                       // 372
            ], [NAME, VERSION], [                                                                                      // 373
                                                                                                                       // 374
            /(htc_one_s)\/((\d+)[\d\.]+)/i                                      // HTC One S                           // 375
            ], [[NAME, /_/g, ' '], VERSION], [                                                                         // 376
                                                                                                                       // 377
            /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i                           // 378
                                                                                // MPlayer SVN                         // 379
            ], [NAME, VERSION], [                                                                                      // 380
                                                                                                                       // 381
            /(mplayer)(?:\s|\/|[unkow-]+)((\d+)[\w\.-]+)/i                      // MPlayer                             // 382
            ], [NAME, VERSION], [                                                                                      // 383
                                                                                                                       // 384
            /(mplayer)/i,                                                       // MPlayer (no other info)             // 385
            /(yourmuze)/i,                                                      // YourMuze                            // 386
            /(media player classic|nero showtime)/i                             // Media Player Classic/Nero ShowTime  // 387
            ], [NAME], [                                                                                               // 388
                                                                                                                       // 389
            /(nero (?:home|scout))\/((\d+)[\w\.-]+)/i                           // Nero Home/Nero Scout                // 390
            ], [NAME, VERSION], [                                                                                      // 391
                                                                                                                       // 392
            /(nokia\d+)\/((\d+)[\w\.-]+)/i                                      // Nokia                               // 393
            ], [NAME, VERSION], [                                                                                      // 394
                                                                                                                       // 395
            /\s(songbird)\/((\d+)[\w\.-]+)/i                                    // Songbird/Philips-Songbird           // 396
            ], [NAME, VERSION], [                                                                                      // 397
                                                                                                                       // 398
            /(winamp)3 version ((\d+)[\w\.-]+)/i,                               // Winamp                              // 399
            /(winamp)\s((\d+)[\w\.-]+)/i,                                                                              // 400
            /(winamp)mpeg\/((\d+)[\w\.-]+)/i                                                                           // 401
            ], [NAME, VERSION], [                                                                                      // 402
                                                                                                                       // 403
            /(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i  // OCMS-bot/tap in radio/tunein/unknown/winamp (no other info)
                                                                                // inlight radio                       // 405
            ], [NAME], [                                                                                               // 406
                                                                                                                       // 407
            /(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i   // 408
                                                                                // QuickTime/RealMedia/RadioApp/RadioClientApplication/
                                                                                // SoundTap/Totem/Stagefright/Streamium
            ], [NAME, VERSION], [                                                                                      // 411
                                                                                                                       // 412
            /(smp)((\d+)[\d\.]+)/i                                              // SMP                                 // 413
            ], [NAME, VERSION], [                                                                                      // 414
                                                                                                                       // 415
            /(vlc) media player - version ((\d+)[\w\.]+)/i,                     // VLC Videolan                        // 416
            /(vlc)\/((\d+)[\w\.-]+)/i,                                                                                 // 417
            /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i,                    // XBMC/gvfs/Xine/XMMS/irapp           // 418
            /(foobar2000)\/((\d+)[\d\.]+)/i,                                    // Foobar2000                          // 419
            /(itunes)\/((\d+)[\d\.]+)/i                                         // iTunes                              // 420
            ], [NAME, VERSION], [                                                                                      // 421
                                                                                                                       // 422
            /(wmplayer)\/((\d+)[\w\.-]+)/i,                                     // Windows Media Player                // 423
            /(windows-media-player)\/((\d+)[\w\.-]+)/i                                                                 // 424
            ], [[NAME, /-/g, ' '], VERSION], [                                                                         // 425
                                                                                                                       // 426
            /windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i                             // 427
                                                                                // Windows Media Server                // 428
            ], [VERSION, [NAME, 'Windows']], [                                                                         // 429
                                                                                                                       // 430
            /(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i                          // RiseUP Radio Alarm                  // 431
            ], [NAME, VERSION], [                                                                                      // 432
                                                                                                                       // 433
            /(rad.io)\s((\d+)[\d\.]+)/i,                                        // Rad.io                              // 434
            /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i                                                                    // 435
            ], [[NAME, 'rad.io'], VERSION]                                                                             // 436
                                                                                                                       // 437
            //////////////////////                                                                                     // 438
            // Media players END                                                                                       // 439
            ////////////////////*/                                                                                     // 440
                                                                                                                       // 441
        ],                                                                                                             // 442
                                                                                                                       // 443
        cpu : [[                                                                                                       // 444
                                                                                                                       // 445
            /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i                     // AMD64                               // 446
            ], [[ARCHITECTURE, 'amd64']], [                                                                            // 447
                                                                                                                       // 448
            /(ia32(?=;))/i                                                      // IA32 (quicktime)                    // 449
            ], [[ARCHITECTURE, util.lowerize]], [                                                                      // 450
                                                                                                                       // 451
            /((?:i[346]|x)86)[;\)]/i                                            // IA32                                // 452
            ], [[ARCHITECTURE, 'ia32']], [                                                                             // 453
                                                                                                                       // 454
            // PocketPC mistakenly identified as PowerPC                                                               // 455
            /windows\s(ce|mobile);\sppc;/i                                                                             // 456
            ], [[ARCHITECTURE, 'arm']], [                                                                              // 457
                                                                                                                       // 458
            /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i                           // PowerPC                             // 459
            ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [                                                          // 460
                                                                                                                       // 461
            /(sun4\w)[;\)]/i                                                    // SPARC                               // 462
            ], [[ARCHITECTURE, 'sparc']], [                                                                            // 463
                                                                                                                       // 464
            /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, util.lowerize]]                                                                         // 467
        ],                                                                                                             // 468
                                                                                                                       // 469
        device : [[                                                                                                    // 470
                                                                                                                       // 471
            /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i                         // iPad/PlayBook                       // 472
            ], [MODEL, VENDOR, [TYPE, TABLET]], [                                                                      // 473
                                                                                                                       // 474
            /applecoremedia\/[\w\.]+ \((ipad)/                                  // iPad                                // 475
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [                                                           // 476
                                                                                                                       // 477
            /(apple\s{0,1}tv)/i                                                 // Apple TV                            // 478
            ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [                                                             // 479
                                                                                                                       // 480
            /(archos)\s(gamepad2?)/i,                                           // Archos                              // 481
            /(hp).+(touchpad)/i,                                                // HP TouchPad                         // 482
            /(kindle)\/([\w\.]+)/i,                                             // Kindle                              // 483
            /\s(nook)[\w\s]+build\/(\w+)/i,                                     // Nook                                // 484
            /(dell)\s(strea[kpr\s\d]*[\dko])/i                                  // Dell Streak                         // 485
            ], [VENDOR, MODEL, [TYPE, TABLET]], [                                                                      // 486
                                                                                                                       // 487
            /(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i                               // Kindle Fire HD                      // 488
            ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [                                                          // 489
            /(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i                  // Fire Phone                          // 490
            ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [                  // 491
                                                                                                                       // 492
            /\((ip[honed|\s\w*]+);.+(apple)/i                                   // iPod/iPhone                         // 493
            ], [MODEL, VENDOR, [TYPE, MOBILE]], [                                                                      // 494
            /\((ip[honed|\s\w*]+);/i                                            // iPod/iPhone                         // 495
            ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [                                                           // 496
                                                                                                                       // 497
            /(blackberry)[\s-]?(\w+)/i,                                         // BlackBerry                          // 498
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
                                                                                // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Huawei/Meizu/Motorola/Polytron
            /(hp)\s([\w\s]+\w)/i,                                               // HP iPAQ                             // 501
            /(asus)-?(\w+)/i                                                    // Asus                                // 502
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [                                                                      // 503
            /\(bb10;\s(\w+)/i                                                   // BlackBerry 10                       // 504
            ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [                                                      // 505
                                                                                // Asus Tablets                        // 506
            /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i                                        // 507
            ], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [                                                            // 508
                                                                                                                       // 509
            /(sony)\s(tablet\s[ps])\sbuild\//i,                                  // Sony                               // 510
            /(sony)?(?:sgp.+)\sbuild\//i                                                                               // 511
            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [                                         // 512
            /(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i                                                     // 513
            ], [[VENDOR, 'Sony'], [MODEL, 'Xperia Phone'], [TYPE, MOBILE]], [                                          // 514
                                                                                                                       // 515
            /\s(ouya)\s/i,                                                      // Ouya                                // 516
            /(nintendo)\s([wids3u]+)/i                                          // Nintendo                            // 517
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [                                                                     // 518
                                                                                                                       // 519
            /android.+;\s(shield)\sbuild/i                                      // Nvidia                              // 520
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [                                                         // 521
                                                                                                                       // 522
            /(playstation\s[34portablevi]+)/i                                   // Playstation                         // 523
            ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [                                                           // 524
                                                                                                                       // 525
            /(sprint\s(\w+))/i                                                  // Sprint Phones                       // 526
            ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [
                                                                                                                       // 528
            /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i                         // Lenovo tablets                      // 529
            ], [VENDOR, MODEL, [TYPE, TABLET]], [                                                                      // 530
                                                                                                                       // 531
            /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,                               // HTC                                 // 532
            /(zte)-(\w+)*/i,                                                    // ZTE                                 // 533
            /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i                         // 534
                                                                                // Alcatel/GeeksPhone/Huawei/Lenovo/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [                                                         // 536
                                                                                                                       // 537
            /(nexus\s9)/i                                                       // HTC Nexus 9                         // 538
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [                                                             // 539
                                                                                                                       // 540
            /[\s\(;](xbox(?:\sone)?)[\s\);]/i                                   // Microsoft Xbox                      // 541
            ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [                                                      // 542
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin                       // 543
            ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [                                         // 544
                                                                                                                       // 545
                                                                                // Motorola                            // 546
            /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,                         // 547
            /mot[\s-]?(\w+)*/i,                                                                                        // 548
            /(XT\d{3,4}) build\//i,                                                                                    // 549
            /(nexus\s[6])/i                                                                                            // 550
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [                                                        // 551
            /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i                                                             // 552
            ], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [                                                        // 553
                                                                                                                       // 554
            /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,                            // 555
            /((SM-T\w+))/i                                                                                             // 556
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [                  // Samsung                             // 557
            /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,                                                           // 558
            /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,                                                                       // 559
            /sec-((sgh\w+))/i                                                                                          // 560
            ], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [                                                         // 561
            /(samsung);smarttv/i                                                                                       // 562
            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [                                                                     // 563
                                                                                                                       // 564
            /\(dtv[\);].+(aquos)/i                                              // Sharp                               // 565
            ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [                                                          // 566
            /sie-(\w+)*/i                                                       // Siemens                             // 567
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [                                                         // 568
                                                                                                                       // 569
            /(maemo|nokia).*(n900|lumia\s\d+)/i,                                // Nokia                               // 570
            /(nokia)[\s_-]?([\w-]+)*/i                                                                                 // 571
            ], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [                                                           // 572
                                                                                                                       // 573
            /android\s3\.[\s\w;-]{10}(a\d{3})/i                                 // Acer                                // 574
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [                                                            // 575
                                                                                                                       // 576
            /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i                     // LG Tablet                           // 577
            ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [                                                              // 578
            /(lg) netcast\.tv/i                                                 // LG SmartTV                          // 579
            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [                                                                     // 580
            /(nexus\s[45])/i,                                                   // LG                                  // 581
            /lg[e;\s\/-]+(\w+)*/i                                                                                      // 582
            ], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [                                                              // 583
                                                                                                                       // 584
            /android.+(ideatab[a-z0-9\-\s]+)/i                                  // Lenovo                              // 585
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [                                                          // 586
                                                                                                                       // 587
            /linux;.+((jolla));/i                                               // Jolla                               // 588
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [                                                                      // 589
                                                                                                                       // 590
            /((pebble))app\/[\d\.]+\s/i                                         // Pebble                              // 591
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [                                                                    // 592
                                                                                                                       // 593
            /android.+;\s(glass)\s\d/i                                          // Google Glass                        // 594
            ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [                                                        // 595
                                                                                                                       // 596
            /android.+(\w+)\s+build\/hm\1/i,                                        // Xiaomi Hongmi 'numeric' models  // 597
            /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,                   // Xiaomi Hongmi                   // 598
            /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i    // Xiaomi Mi                       // 599
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [                                             // 600
                                                                                                                       // 601
            /\s(tablet)[;\/\s]/i,                                               // Unidentifiable Tablet               // 602
            /\s(mobile)[;\/\s]/i                                                // Unidentifiable Mobile               // 603
            ], [[TYPE, util.lowerize], VENDOR, MODEL]                                                                  // 604
                                                                                                                       // 605
            /*//////////////////////////                                                                               // 606
            // TODO: move to string map                                                                                // 607
            ////////////////////////////                                                                               // 608
                                                                                                                       // 609
            /(C6603)/i                                                          // Sony Xperia Z C6603                 // 610
            ], [[MODEL, 'Xperia Z C6603'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [                                        // 611
            /(C6903)/i                                                          // Sony Xperia Z 1                     // 612
            ], [[MODEL, 'Xperia Z 1'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [                                            // 613
                                                                                                                       // 614
            /(SM-G900[F|H])/i                                                   // Samsung Galaxy S5                   // 615
            ], [[MODEL, 'Galaxy S5'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [                                          // 616
            /(SM-G7102)/i                                                       // Samsung Galaxy Grand 2              // 617
            ], [[MODEL, 'Galaxy Grand 2'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [                                     // 618
            /(SM-G530H)/i                                                       // Samsung Galaxy Grand Prime          // 619
            ], [[MODEL, 'Galaxy Grand Prime'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [                                 // 620
            /(SM-G313HZ)/i                                                      // Samsung Galaxy V                    // 621
            ], [[MODEL, 'Galaxy V'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [                                           // 622
            /(SM-T805)/i                                                        // Samsung Galaxy Tab S 10.5           // 623
            ], [[MODEL, 'Galaxy Tab S 10.5'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [                                  // 624
            /(SM-G800F)/i                                                       // Samsung Galaxy S5 Mini              // 625
            ], [[MODEL, 'Galaxy S5 Mini'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [                                     // 626
            /(SM-T311)/i                                                        // Samsung Galaxy Tab 3 8.0            // 627
            ], [[MODEL, 'Galaxy Tab 3 8.0'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [                                   // 628
                                                                                                                       // 629
            /(R1001)/i                                                          // Oppo R1001                          // 630
            ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [                                                            // 631
            /(X9006)/i                                                          // Oppo Find 7a                        // 632
            ], [[MODEL, 'Find 7a'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [                                               // 633
            /(R2001)/i                                                          // Oppo YOYO R2001                     // 634
            ], [[MODEL, 'Yoyo R2001'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [                                            // 635
            /(R815)/i                                                           // Oppo Clover R815                    // 636
            ], [[MODEL, 'Clover R815'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [                                           // 637
             /(U707)/i                                                          // Oppo Find Way S                     // 638
            ], [[MODEL, 'Find Way S'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [                                            // 639
                                                                                                                       // 640
            /(T3C)/i                                                            // Advan Vandroid T3C                  // 641
            ], [MODEL, [VENDOR, 'Advan'], [TYPE, TABLET]], [                                                           // 642
            /(ADVAN T1J\+)/i                                                    // Advan Vandroid T1J+                 // 643
            ], [[MODEL, 'Vandroid T1J+'], [VENDOR, 'Advan'], [TYPE, TABLET]], [                                        // 644
            /(ADVAN S4A)/i                                                      // Advan Vandroid S4A                  // 645
            ], [[MODEL, 'Vandroid S4A'], [VENDOR, 'Advan'], [TYPE, MOBILE]], [                                         // 646
                                                                                                                       // 647
            /(V972M)/i                                                          // ZTE V972M                           // 648
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [                                                             // 649
                                                                                                                       // 650
            /(i-mobile)\s(IQ\s[\d\.]+)/i                                        // i-mobile IQ                         // 651
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [                                                                      // 652
            /(IQ6.3)/i                                                          // i-mobile IQ IQ 6.3                  // 653
            ], [[MODEL, 'IQ 6.3'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [                                            // 654
            /(i-mobile)\s(i-style\s[\d\.]+)/i                                   // i-mobile i-STYLE                    // 655
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [                                                                      // 656
            /(i-STYLE2.1)/i                                                     // i-mobile i-STYLE 2.1                // 657
            ], [[MODEL, 'i-STYLE 2.1'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [                                       // 658
                                                                                                                       // 659
            /(mobiistar touch LAI 512)/i                                        // mobiistar touch LAI 512             // 660
            ], [[MODEL, 'Touch LAI 512'], [VENDOR, 'mobiistar'], [TYPE, MOBILE]], [                                    // 661
                                                                                                                       // 662
            /////////////                                                                                              // 663
            // END TODO                                                                                                // 664
            ///////////*/                                                                                              // 665
                                                                                                                       // 666
        ],                                                                                                             // 667
                                                                                                                       // 668
        engine : [[                                                                                                    // 669
                                                                                                                       // 670
            /windows.+\sedge\/([\w\.]+)/i                                       // EdgeHTML                            // 671
            ], [VERSION, [NAME, 'EdgeHTML']], [                                                                        // 672
                                                                                                                       // 673
            /(presto)\/([\w\.]+)/i,                                             // Presto                              // 674
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,     // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m
            /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,                          // KHTML/Tasman/Links                  // 676
            /(icab)[\/\s]([23]\.[\d\.]+)/i                                      // iCab                                // 677
            ], [NAME, VERSION], [                                                                                      // 678
                                                                                                                       // 679
            /rv\:([\w\.]+).*(gecko)/i                                           // Gecko                               // 680
            ], [VERSION, NAME]                                                                                         // 681
        ],                                                                                                             // 682
                                                                                                                       // 683
        os : [[                                                                                                        // 684
                                                                                                                       // 685
            // Windows based                                                                                           // 686
            /microsoft\s(windows)\s(vista|xp)/i                                 // Windows (iTunes)                    // 687
            ], [NAME, VERSION], [                                                                                      // 688
            /(windows)\snt\s6\.2;\s(arm)/i,                                     // Windows RT                          // 689
            /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i                               // 690
            ], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [                                               // 691
            /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i                                                                     // 692
            ], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [                                  // 693
                                                                                                                       // 694
            // Mobile/Embedded OS                                                                                      // 695
            /\((bb)(10);/i                                                      // BlackBerry 10                       // 696
            ], [[NAME, 'BlackBerry'], VERSION], [                                                                      // 697
            /(blackberry)\w*\/?([\w\.]+)*/i,                                    // Blackberry                          // 698
            /(tizen)[\/\s]([\w\.]+)/i,                                          // Tizen                               // 699
            /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,                      // 700
                                                                                // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
            /linux;.+(sailfish);/i                                              // Sailfish OS                         // 702
            ], [NAME, VERSION], [                                                                                      // 703
            /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i                 // Symbian                             // 704
            ], [[NAME, 'Symbian'], VERSION], [                                                                         // 705
            /\((series40);/i                                                    // Series 40                           // 706
            ], [NAME], [                                                                                               // 707
            /mozilla.+\(mobile;.+gecko.+firefox/i                               // Firefox OS                          // 708
            ], [[NAME, 'Firefox OS'], VERSION], [                                                                      // 709
                                                                                                                       // 710
            // Console                                                                                                 // 711
            /(nintendo|playstation)\s([wids34portablevu]+)/i,                   // Nintendo/Playstation                // 712
                                                                                                                       // 713
            // GNU/Linux based                                                                                         // 714
            /(mint)[\/\s\(]?(\w+)*/i,                                           // Mint                                // 715
            /(mageia|vectorlinux)[;\s]/i,                                       // Mageia/VectorLinux                  // 716
            /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,
                                                                                // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                                                                                // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
            /(hurd|linux)\s?([\w\.]+)*/i,                                       // Hurd/Linux                          // 720
            /(gnu)\s?([\w\.]+)*/i                                               // GNU                                 // 721
            ], [NAME, VERSION], [                                                                                      // 722
                                                                                                                       // 723
            /(cros)\s[\w]+\s([\w\.]+\w)/i                                       // Chromium OS                         // 724
            ], [[NAME, 'Chromium OS'], VERSION],[                                                                      // 725
                                                                                                                       // 726
            // Solaris                                                                                                 // 727
            /(sunos)\s?([\w\.]+\d)*/i                                           // Solaris                             // 728
            ], [[NAME, 'Solaris'], VERSION], [                                                                         // 729
                                                                                                                       // 730
            // BSD based                                                                                               // 731
            /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i                   // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
            ], [NAME, VERSION],[                                                                                       // 733
                                                                                                                       // 734
            /(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i              // iOS                                 // 735
            ], [[NAME, 'iOS'], [VERSION, /_/g, '.']], [                                                                // 736
                                                                                                                       // 737
            /(mac\sos\sx)\s?([\w\s\.]+\w)*/i,                                                                          // 738
            /(macintosh|mac(?=_powerpc)\s)/i                                    // Mac OS                              // 739
            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [                                                             // 740
                                                                                                                       // 741
            // Other                                                                                                   // 742
            /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,                            // Solaris                             // 743
            /(haiku)\s(\w+)/i,                                                  // Haiku                               // 744
            /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,                               // AIX                                 // 745
            /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,                                            // 746
                                                                                // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
            /(unix)\s?([\w\.]+)*/i                                              // UNIX                                // 748
            ], [NAME, VERSION]                                                                                         // 749
        ]                                                                                                              // 750
    };                                                                                                                 // 751
                                                                                                                       // 752
                                                                                                                       // 753
    /////////////////                                                                                                  // 754
    // Constructor                                                                                                     // 755
    ////////////////                                                                                                   // 756
                                                                                                                       // 757
                                                                                                                       // 758
    var UAParser = function (uastring, extensions) {                                                                   // 759
                                                                                                                       // 760
        if (!(this instanceof UAParser)) {                                                                             // 761
            return new UAParser(uastring, extensions).getResult();                                                     // 762
        }                                                                                                              // 763
                                                                                                                       // 764
        var ua = uastring || ((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
        var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;                                          // 766
                                                                                                                       // 767
        this.getBrowser = function () {                                                                                // 768
            var browser = mapper.rgx.apply(this, rgxmap.browser);                                                      // 769
            browser.major = util.major(browser.version);                                                               // 770
            return browser;                                                                                            // 771
        };                                                                                                             // 772
        this.getCPU = function () {                                                                                    // 773
            return mapper.rgx.apply(this, rgxmap.cpu);                                                                 // 774
        };                                                                                                             // 775
        this.getDevice = function () {                                                                                 // 776
            return mapper.rgx.apply(this, rgxmap.device);                                                              // 777
        };                                                                                                             // 778
        this.getEngine = function () {                                                                                 // 779
            return mapper.rgx.apply(this, rgxmap.engine);                                                              // 780
        };                                                                                                             // 781
        this.getOS = function () {                                                                                     // 782
            return mapper.rgx.apply(this, rgxmap.os);                                                                  // 783
        };                                                                                                             // 784
        this.getResult = function() {                                                                                  // 785
            return {                                                                                                   // 786
                ua      : this.getUA(),                                                                                // 787
                browser : this.getBrowser(),                                                                           // 788
                engine  : this.getEngine(),                                                                            // 789
                os      : this.getOS(),                                                                                // 790
                device  : this.getDevice(),                                                                            // 791
                cpu     : this.getCPU()                                                                                // 792
            };                                                                                                         // 793
        };                                                                                                             // 794
        this.getUA = function () {                                                                                     // 795
            return ua;                                                                                                 // 796
        };                                                                                                             // 797
        this.setUA = function (uastring) {                                                                             // 798
            ua = uastring;                                                                                             // 799
            return this;                                                                                               // 800
        };                                                                                                             // 801
        this.setUA(ua);                                                                                                // 802
        return this;                                                                                                   // 803
    };                                                                                                                 // 804
                                                                                                                       // 805
    UAParser.VERSION = LIBVERSION;                                                                                     // 806
    UAParser.BROWSER = {                                                                                               // 807
        NAME    : NAME,                                                                                                // 808
        MAJOR   : MAJOR, // deprecated                                                                                 // 809
        VERSION : VERSION                                                                                              // 810
    };                                                                                                                 // 811
    UAParser.CPU = {                                                                                                   // 812
        ARCHITECTURE : ARCHITECTURE                                                                                    // 813
    };                                                                                                                 // 814
    UAParser.DEVICE = {                                                                                                // 815
        MODEL   : MODEL,                                                                                               // 816
        VENDOR  : VENDOR,                                                                                              // 817
        TYPE    : TYPE,                                                                                                // 818
        CONSOLE : CONSOLE,                                                                                             // 819
        MOBILE  : MOBILE,                                                                                              // 820
        SMARTTV : SMARTTV,                                                                                             // 821
        TABLET  : TABLET,                                                                                              // 822
        WEARABLE: WEARABLE,                                                                                            // 823
        EMBEDDED: EMBEDDED                                                                                             // 824
    };                                                                                                                 // 825
    UAParser.ENGINE = {                                                                                                // 826
        NAME    : NAME,                                                                                                // 827
        VERSION : VERSION                                                                                              // 828
    };                                                                                                                 // 829
    UAParser.OS = {                                                                                                    // 830
        NAME    : NAME,                                                                                                // 831
        VERSION : VERSION                                                                                              // 832
    };                                                                                                                 // 833
                                                                                                                       // 834
                                                                                                                       // 835
    ///////////                                                                                                        // 836
    // Export                                                                                                          // 837
    //////////                                                                                                         // 838
                                                                                                                       // 839
                                                                                                                       // 840
    // check js environment                                                                                            // 841
    if (typeof(exports) !== UNDEF_TYPE) {                                                                              // 842
        // nodejs env                                                                                                  // 843
        if (typeof module !== UNDEF_TYPE && module.exports) {                                                          // 844
            exports = module.exports = UAParser;                                                                       // 845
        }                                                                                                              // 846
        exports.UAParser = UAParser;                                                                                   // 847
    } else {                                                                                                           // 848
        // requirejs env (optional)                                                                                    // 849
        if (typeof(define) === FUNC_TYPE && define.amd) {                                                              // 850
            define(function () {                                                                                       // 851
                return UAParser;                                                                                       // 852
            });                                                                                                        // 853
        } else {                                                                                                       // 854
            // browser env                                                                                             // 855
            window.UAParser = UAParser;                                                                                // 856
        }                                                                                                              // 857
    }                                                                                                                  // 858
                                                                                                                       // 859
    // jQuery/Zepto specific (optional)                                                                                // 860
    // Note:                                                                                                           // 861
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.                                 // 862
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,                                // 863
    //   and we should catch that.                                                                                     // 864
    var $ = window.jQuery || window.Zepto;                                                                             // 865
    if (typeof $ !== UNDEF_TYPE) {                                                                                     // 866
        var parser = new UAParser();                                                                                   // 867
        $.ua = parser.getResult();                                                                                     // 868
        $.ua.get = function() {                                                                                        // 869
            return parser.getUA();                                                                                     // 870
        };                                                                                                             // 871
        $.ua.set = function (uastring) {                                                                               // 872
            parser.setUA(uastring);                                                                                    // 873
            var result = parser.getResult();                                                                           // 874
            for (var prop in result) {                                                                                 // 875
                $.ua[prop] = result[prop];                                                                             // 876
            }                                                                                                          // 877
        };                                                                                                             // 878
    }                                                                                                                  // 879
                                                                                                                       // 880
})(typeof window === 'object' ? window : this);                                                                        // 881
                                                                                                                       // 882
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".less",
    ".html"
  ]
});
require("./node_modules/meteor/rocketchat:livechat/messageTypes.js");
require("./node_modules/meteor/rocketchat:livechat/roomType.js");
require("./node_modules/meteor/rocketchat:livechat/client/ui.js");
require("./node_modules/meteor/rocketchat:livechat/client/route.js");
require("./node_modules/meteor/rocketchat:livechat/client/collections/AgentUsers.js");
require("./node_modules/meteor/rocketchat:livechat/client/collections/LivechatCustomField.js");
require("./node_modules/meteor/rocketchat:livechat/client/collections/LivechatDepartment.js");
require("./node_modules/meteor/rocketchat:livechat/client/collections/LivechatDepartmentAgents.js");
require("./node_modules/meteor/rocketchat:livechat/client/collections/LivechatIntegration.js");
require("./node_modules/meteor/rocketchat:livechat/client/collections/LivechatPageVisited.js");
require("./node_modules/meteor/rocketchat:livechat/client/collections/LivechatQueueUser.js");
require("./node_modules/meteor/rocketchat:livechat/client/collections/LivechatTrigger.js");
require("./node_modules/meteor/rocketchat:livechat/client/collections/LivechatInquiry.js");
require("./node_modules/meteor/rocketchat:livechat/client/collections/livechatOfficeHour.js");
require("./node_modules/meteor/rocketchat:livechat/client/methods/changeLivechatStatus.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/template.livechatAppearance.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/livechatAppearance.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/template.livechatCurrentChats.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/livechatCurrentChats.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/template.livechatCustomFields.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/livechatCustomFields.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/template.livechatCustomFieldForm.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/livechatCustomFieldForm.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/template.livechatDashboard.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/template.livechatDepartmentForm.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/livechatDepartmentForm.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/template.livechatDepartments.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/livechatDepartments.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/template.livechatInstallation.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/livechatInstallation.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/template.livechatIntegrations.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/livechatIntegrations.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/template.livechatNotSubscribed.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/template.livechatQueue.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/livechatQueue.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/template.livechatTriggers.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/livechatTriggers.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/template.livechatTriggersForm.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/livechatTriggersForm.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/template.livechatUsers.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/livechatUsers.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/template.livechatOfficeHours.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/livechatOfficeHours.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/tabbar/template.externalSearch.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/tabbar/externalSearch.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/tabbar/template.visitorHistory.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/tabbar/visitorHistory.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/tabbar/template.visitorNavigation.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/tabbar/visitorNavigation.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/tabbar/template.visitorEdit.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/tabbar/visitorEdit.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/tabbar/template.visitorForward.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/tabbar/visitorForward.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/tabbar/template.visitorInfo.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/tabbar/visitorInfo.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/sideNav/template.livechat.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/sideNav/livechat.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/sideNav/template.livechatFlex.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/sideNav/livechatFlex.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/triggers/template.livechatTriggerAction.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/triggers/livechatTriggerAction.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/triggers/template.livechatTriggerCondition.js");
require("./node_modules/meteor/rocketchat:livechat/client/views/app/triggers/livechatTriggerCondition.js");
require("./node_modules/meteor/rocketchat:livechat/server/models/LivechatExternalMessage.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:livechat'] = {};

})();
