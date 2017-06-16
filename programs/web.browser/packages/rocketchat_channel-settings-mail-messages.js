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
var Template = Package['templating-runtime'].Template;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var Mongo = Package.mongo.Mongo;
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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:channel-settings-mail-messages":{"client":{"lib":{"startup.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rocketchat_channel-settings-mail-messages/client/lib/startup.js                                         //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var resetSelection = void 0;                                                                                        // 1
module.watch(require("../resetSelection"), {                                                                        // 1
	"default": function (v) {                                                                                          // 1
		resetSelection = v;                                                                                               // 1
	}                                                                                                                  // 1
}, 0);                                                                                                              // 1
Meteor.startup(function () {                                                                                        // 2
	RocketChat.ChannelSettings.addOption({                                                                             // 3
		group: ['room'],                                                                                                  // 4
		id: 'mail-messages',                                                                                              // 5
		template: 'channelSettingsMailMessages',                                                                          // 6
		validation: function () {                                                                                         // 7
			return RocketChat.authz.hasAllPermission('mail-messages');                                                       // 8
		}                                                                                                                 // 9
	});                                                                                                                // 3
	RocketChat.callbacks.add('roomExit', function () {                                                                 // 11
		return resetSelection(false);                                                                                     // 11
	}, RocketChat.callbacks.priority.MEDIUM, 'room-exit-mail-messages');                                               // 11
});                                                                                                                 // 12
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"views":{"template.channelSettingsMailMessages.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rocketchat_channel-settings-mail-messages/client/views/template.channelSettingsMailMessages.js          //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("channelSettingsMailMessages");                                                                // 2
Template["channelSettingsMailMessages"] = new Template("Template.channelSettingsMailMessages", (function() {        // 3
  var view = this;                                                                                                  // 4
  return Blaze.If(function() {                                                                                      // 5
    return Spacebars.call(view.lookup("canSendEmail"));                                                             // 6
  }, function() {                                                                                                   // 7
    return [ "\n\t\t", HTML.LI("\n\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                           // 8
      return Spacebars.mustache(view.lookup("_"), "Mail_Messages");                                                 // 9
    })), "\n\t\t\t", HTML.DIV("\n\t\t\t\t", HTML.BUTTON({                                                           // 10
      type: "button",                                                                                               // 11
      class: "button primary mail-messages"                                                                         // 12
    }, Blaze.View("lookup:_", function() {                                                                          // 13
      return Spacebars.mustache(view.lookup("_"), "Choose_messages");                                               // 14
    })), "\n\t\t\t"), "\n\t\t"), "\n\t" ];                                                                          // 15
  });                                                                                                               // 16
}));                                                                                                                // 17
                                                                                                                    // 18
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"channelSettingsMailMessages.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rocketchat_channel-settings-mail-messages/client/views/channelSettingsMailMessages.js                   //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var resetSelection = void 0;                                                                                        // 1
module.watch(require("../resetSelection"), {                                                                        // 1
	"default": function (v) {                                                                                          // 1
		resetSelection = v;                                                                                               // 1
	}                                                                                                                  // 1
}, 0);                                                                                                              // 1
Template.channelSettingsMailMessages.helpers({                                                                      // 3
	canSendEmail: function () {                                                                                        // 4
		return FlowRouter.getRouteName() !== 'admin-rooms';                                                               // 5
	}                                                                                                                  // 6
});                                                                                                                 // 3
Template.channelSettingsMailMessages.events({                                                                       // 9
	'click button.mail-messages': function () {                                                                        // 10
		Session.set('channelSettingsMailMessages', Session.get('openedRoom'));                                            // 11
		this.tabBar.setTemplate('mailMessagesInstructions');                                                              // 12
		resetSelection(true);                                                                                             // 13
	}                                                                                                                  // 14
});                                                                                                                 // 9
Template.channelSettingsMailMessages.onCreated(function () {                                                        // 17
	return resetSelection(false);                                                                                      // 17
});                                                                                                                 // 17
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.mailMessagesInstructions.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rocketchat_channel-settings-mail-messages/client/views/template.mailMessagesInstructions.js             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
                                                                                                                    // 1
Template.__checkName("mailMessagesInstructions");                                                                   // 2
Template["mailMessagesInstructions"] = new Template("Template.mailMessagesInstructions", (function() {              // 3
  var view = this;                                                                                                  // 4
  return HTML.DIV({                                                                                                 // 5
    class: "content"                                                                                                // 6
  }, "\n\t\t", HTML.DIV({                                                                                           // 7
    class: "list-view mail-message"                                                                                 // 8
  }, "\n\t\t\t", HTML.DIV({                                                                                         // 9
    class: "title"                                                                                                  // 10
  }, "\n\t\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                                                      // 11
    return Spacebars.mustache(view.lookup("_"), "Mail_Messages");                                                   // 12
  })), "\n\t\t\t"), "\n\t\t\t", HTML.P(Blaze.View("lookup:_", function() {                                          // 13
    return Spacebars.mustache(view.lookup("_"), "Mail_Messages_Instructions");                                      // 14
  })), "\n\t\t\t", HTML.FORM("\n\t\t\t\t", HTML.FIELDSET("\n\t\t\t\t\t", HTML.DIV({                                 // 15
    class: "input-line double-col"                                                                                  // 16
  }, "\n\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                               // 17
    return Spacebars.mustache(view.lookup("_"), "From");                                                            // 18
  })), "\n\t\t\t\t\t\t", HTML.DIV(Blaze.View("lookup:name", function() {                                            // 19
    return Spacebars.mustache(view.lookup("name"));                                                                 // 20
  })), "\n\t\t\t\t\t\t", HTML.DIV(Blaze.View("lookup:email", function() {                                           // 21
    return Spacebars.mustache(view.lookup("email"));                                                                // 22
  })), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                                                  // 23
    class: "input-line double-col"                                                                                  // 24
  }, "\n\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                               // 25
    return Spacebars.mustache(view.lookup("_"), "To_users");                                                        // 26
  })), "\n\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                              // 27
    return {                                                                                                        // 28
      settings: Spacebars.call(view.lookup("autocompleteSettings")),                                                // 29
      id: Spacebars.call("to_users"),                                                                               // 30
      name: Spacebars.call("to_users"),                                                                             // 31
      class: Spacebars.call("search"),                                                                              // 32
      autocomplete: Spacebars.call("off")                                                                           // 33
    };                                                                                                              // 34
  }, function() {                                                                                                   // 35
    return Spacebars.include(view.lookupTemplate("inputAutocomplete"));                                             // 36
  }), "\n\t\t\t\t\t\t\t", HTML.UL({                                                                                 // 37
    class: "selected-users"                                                                                         // 38
  }, "\n\t\t\t\t\t\t\t\t", Blaze.Each(function() {                                                                  // 39
    return Spacebars.call(view.lookup("selectedUsers"));                                                            // 40
  }, function() {                                                                                                   // 41
    return [ "\n\t\t\t\t\t\t\t\t\t", HTML.LI(Blaze.View("lookup:.", function() {                                    // 42
      return Spacebars.mustache(view.lookup("."));                                                                  // 43
    }), " ", HTML.I({                                                                                               // 44
      class: "icon-cancel remove-to-user"                                                                           // 45
    })), "\n\t\t\t\t\t\t\t\t" ];                                                                                    // 46
  }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                           // 47
    class: "input-line double-col"                                                                                  // 48
  }, "\n\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                               // 49
    return Spacebars.mustache(view.lookup("_"), "Additional_emails");                                               // 50
  })), "\n\t\t\t\t\t\t", HTML.Raw('<div>\n\t\t\t\t\t\t\t<input type="text" name="to_emails" value="">\n\t\t\t\t\t\t</div>'), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({
    class: "input-line double-col"                                                                                  // 52
  }, "\n\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                               // 53
    return Spacebars.mustache(view.lookup("_"), "Subject");                                                         // 54
  })), "\n\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t", HTML.INPUT({                                                  // 55
    type: "text",                                                                                                   // 56
    name: "subject",                                                                                                // 57
    value: function() {                                                                                             // 58
      return Spacebars.mustache(view.lookup("_"), "Mail_Messages_Subject", view.lookup("roomName"));                // 59
    }                                                                                                               // 60
  }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                        // 61
    class: "error error-missing-to alert error-color error-background error-border",                                // 62
    style: "display: none"                                                                                          // 63
  }, "\n\t\t\t\t", Blaze.View("lookup:_", function() {                                                              // 64
    return Spacebars.mustache(view.lookup("_"), "Mail_Message_Missing_to");                                         // 65
  }), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                           // 66
    class: "error error-invalid-emails alert error-color error-background error-border",                            // 67
    style: "display: none"                                                                                          // 68
  }, "\n\t\t\t\t", Blaze.View("lookup:_", function() {                                                              // 69
    return Spacebars.mustache(view.lookup("_"), "Mail_Message_Invalid_emails", view.lookup("erroredEmails"));       // 70
  }), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                           // 71
    class: "error error-select alert error-color error-background error-border",                                    // 72
    style: "display: none"                                                                                          // 73
  }, "\n\t\t\t\t", Blaze.View("lookup:_", function() {                                                              // 74
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Mail_Message_No_messages_selected_select_all"));
  }), "\n\t\t\t"), "\n\t\t\t", HTML.P({                                                                             // 76
    style: "margin-top: 30px"                                                                                       // 77
  }, "\n\t\t\t\t", HTML.BUTTON({                                                                                    // 78
    type: "button",                                                                                                 // 79
    class: "button cancel"                                                                                          // 80
  }, Blaze.View("lookup:_", function() {                                                                            // 81
    return Spacebars.mustache(view.lookup("_"), "Cancel");                                                          // 82
  })), "\n\t\t\t\t", HTML.BUTTON({                                                                                  // 83
    type: "button",                                                                                                 // 84
    class: "button primary send"                                                                                    // 85
  }, Blaze.View("lookup:_", function() {                                                                            // 86
    return Spacebars.mustache(view.lookup("_"), "Send");                                                            // 87
  })), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                                             // 88
}));                                                                                                                // 89
                                                                                                                    // 90
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"mailMessagesInstructions.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rocketchat_channel-settings-mail-messages/client/views/mailMessagesInstructions.js                      //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var toastr = void 0;                                                                                                // 1
module.watch(require("toastr"), {                                                                                   // 1
	"default": function (v) {                                                                                          // 1
		toastr = v;                                                                                                       // 1
	}                                                                                                                  // 1
}, 0);                                                                                                              // 1
var resetSelection = void 0;                                                                                        // 1
module.watch(require("../resetSelection"), {                                                                        // 1
	"default": function (v) {                                                                                          // 1
		resetSelection = v;                                                                                               // 1
	}                                                                                                                  // 1
}, 1);                                                                                                              // 1
Template.mailMessagesInstructions.helpers({                                                                         // 3
	name: function () {                                                                                                // 4
		return Meteor.user().name;                                                                                        // 5
	},                                                                                                                 // 6
	email: function () {                                                                                               // 7
		var _Meteor$user = Meteor.user(),                                                                                 // 7
		    emails = _Meteor$user.emails;                                                                                 // 7
                                                                                                                    //
		return emails && emails[0] && emails[0].address;                                                                  // 9
	},                                                                                                                 // 10
	roomName: function () {                                                                                            // 11
		var room = ChatRoom.findOne(Session.get('openedRoom'));                                                           // 12
		return room && room.name;                                                                                         // 13
	},                                                                                                                 // 14
	erroredEmails: function () {                                                                                       // 15
		var instance = Template.instance();                                                                               // 16
		return instance && instance.erroredEmails.get().join(', ');                                                       // 17
	},                                                                                                                 // 18
	autocompleteSettings: function () {                                                                                // 19
		return {                                                                                                          // 20
			limit: 10,                                                                                                       // 21
			rules: [{                                                                                                        // 22
				collection: 'CachedChannelList',                                                                                // 24
				subscription: 'userAutocomplete',                                                                               // 25
				field: 'username',                                                                                              // 26
				template: Template.userSearch,                                                                                  // 27
				noMatchTemplate: Template.userSearchEmpty,                                                                      // 28
				matchAll: true,                                                                                                 // 29
				filter: {                                                                                                       // 30
					exceptions: Template.instance().selectedUsers.get()                                                            // 31
				},                                                                                                              // 30
				selector: function (match) {                                                                                    // 33
					return {                                                                                                       // 34
						term: match                                                                                                   // 35
					};                                                                                                             // 34
				},                                                                                                              // 37
				sort: 'username'                                                                                                // 38
			}]                                                                                                               // 23
		};                                                                                                                // 20
	},                                                                                                                 // 42
	selectedUsers: function () {                                                                                       // 43
		return Template.instance().selectedUsers.get();                                                                   // 44
	}                                                                                                                  // 45
});                                                                                                                 // 3
Template.mailMessagesInstructions.events({                                                                          // 48
	'click .cancel': function (e, t) {                                                                                 // 49
		return t.reset();                                                                                                 // 50
	},                                                                                                                 // 51
	'click .send': function (e, t) {                                                                                   // 52
		t.$('.error').hide();                                                                                             // 53
		var $btn = t.$('button.send');                                                                                    // 54
		var oldBtnValue = $btn.html();                                                                                    // 55
		$btn.html(TAPi18n.__('Sending'));                                                                                 // 56
		var selectedMessages = $('.messages-box .message.selected');                                                      // 57
		var error = false;                                                                                                // 58
                                                                                                                    //
		if (selectedMessages.length === 0) {                                                                              // 59
			t.$('.error-select').show();                                                                                     // 60
			error = true;                                                                                                    // 61
		}                                                                                                                 // 62
                                                                                                                    //
		if (t.$('input[name=to_emails]').val().trim()) {                                                                  // 63
			var rfcMailPatternWithName = /^(?:.*<)?([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)(?:>?)$/;
			var emails = t.$('input[name=to_emails]').val().trim().split(',');                                               // 65
			var erroredEmails = [];                                                                                          // 66
			emails.forEach(function (email) {                                                                                // 67
				if (!rfcMailPatternWithName.test(email.trim())) {                                                               // 68
					erroredEmails.push(email.trim());                                                                              // 69
				}                                                                                                               // 70
			});                                                                                                              // 71
			t.erroredEmails.set(erroredEmails);                                                                              // 72
                                                                                                                    //
			if (erroredEmails.length > 0) {                                                                                  // 73
				t.$('.error-invalid-emails').show();                                                                            // 74
				error = true;                                                                                                   // 75
			}                                                                                                                // 76
		} else if (!t.selectedUsers.get().length) {                                                                       // 77
			t.$('.error-missing-to').show();                                                                                 // 78
			error = true;                                                                                                    // 79
		}                                                                                                                 // 80
                                                                                                                    //
		if (error) {                                                                                                      // 81
			return $btn.html(oldBtnValue);                                                                                   // 82
		}                                                                                                                 // 83
                                                                                                                    //
		var data = {                                                                                                      // 84
			rid: Session.get('openedRoom'),                                                                                  // 85
			to_users: t.selectedUsers.get(),                                                                                 // 86
			to_emails: t.$('input[name=to_emails]').val().trim(),                                                            // 87
			subject: t.$('input[name=subject]').val().trim(),                                                                // 88
			messages: selectedMessages.map(function (i, message) {                                                           // 89
				return message.id;                                                                                              // 90
			}).toArray(),                                                                                                    // 91
			language: localStorage.getItem('userLanguage')                                                                   // 92
		};                                                                                                                // 84
		return Meteor.call('mailMessages', data, function (err, result) {                                                 // 94
			$btn.html(oldBtnValue);                                                                                          // 95
                                                                                                                    //
			if (err != null) {                                                                                               // 96
				return handleError(err);                                                                                        // 97
			}                                                                                                                // 98
                                                                                                                    //
			console.log(result);                                                                                             // 99
			toastr.success(TAPi18n.__('Your_email_has_been_queued_for_sending'));                                            // 100
			return t.reset();                                                                                                // 101
		});                                                                                                               // 102
	},                                                                                                                 // 103
	'click .select-all': function (e, t) {                                                                             // 104
		t.$('.error-select').hide();                                                                                      // 105
		var view = Blaze.getView($('.messages-box')[0]);                                                                  // 106
                                                                                                                    //
		if (view != null) {                                                                                               // 107
			if (typeof view.templateInstance === 'function') {                                                               // 108
				var chat = ChatMessage.find({                                                                                   // 109
					rid: Session.get('openedRoom')                                                                                 // 110
				});                                                                                                             // 109
				view.templateInstance().selectedMessages = _.pluck(chat && chat.fetch(), '_id');                                // 112
			}                                                                                                                // 113
		}                                                                                                                 // 114
                                                                                                                    //
		return $('.messages-box .message').addClass('selected');                                                          // 115
	},                                                                                                                 // 116
	'autocompleteselect #to_users': function (event, instance, doc) {                                                  // 117
		instance.selectedUsers.set(instance.selectedUsers.get().concat(doc.username));                                    // 118
		event.currentTarget.value = '';                                                                                   // 119
		return event.currentTarget.focus();                                                                               // 120
	},                                                                                                                 // 121
	'click .remove-to-user': function () {                                                                             // 122
		var _this = this;                                                                                                 // 122
                                                                                                                    //
		var users = Template.instance().selectedUsers.get();                                                              // 123
		users = _.reject(Template.instance().selectedUsers.get(), function (_id) {                                        // 124
			return _id === _this.valueOf();                                                                                  // 125
		});                                                                                                               // 126
		Template.instance().selectedUsers.set(users);                                                                     // 127
		return $('#to_users').focus();                                                                                    // 128
	}                                                                                                                  // 129
});                                                                                                                 // 48
Template.mailMessagesInstructions.onCreated(function () {                                                           // 132
	var _this2 = this;                                                                                                 // 132
                                                                                                                    //
	var currentData = Template.currentData();                                                                          // 133
	this.autoCompleteCollection = new Mongo.Collection(null);                                                          // 134
	this.selectedUsers = new ReactiveVar([]);                                                                          // 135
	this.erroredEmails = new ReactiveVar([]);                                                                          // 136
                                                                                                                    //
	this.reset = function () {                                                                                         // 137
		_this2.selectedUsers.set([]);                                                                                     // 138
                                                                                                                    //
		currentData.tabBar.setTemplate('channelSettings');                                                                // 139
		resetSelection(false);                                                                                            // 140
	};                                                                                                                 // 141
                                                                                                                    //
	return this.autorun(function () {                                                                                  // 142
		if (Session.get('channelSettingsMailMessages') !== Session.get('openedRoom')) {                                   // 143
			return _this2.reset();                                                                                           // 144
		}                                                                                                                 // 145
	});                                                                                                                // 146
});                                                                                                                 // 147
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"resetSelection.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rocketchat_channel-settings-mail-messages/client/resetSelection.js                                      //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");                                               //
                                                                                                                    //
var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);                                                      //
                                                                                                                    //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                   //
                                                                                                                    //
module.export({                                                                                                     // 1
	"default": function () {                                                                                           // 1
		return resetSelection;                                                                                            // 1
	}                                                                                                                  // 1
});                                                                                                                 // 1
                                                                                                                    //
function resetSelection(reset) {                                                                                    // 1
	var _$ = $('.messages-box'),                                                                                       // 1
	    _$2 = (0, _slicedToArray3.default)(_$, 1),                                                                     // 1
	    el = _$2[0];                                                                                                   // 1
                                                                                                                    //
	if (!el) {                                                                                                         // 3
		return;                                                                                                           // 4
	}                                                                                                                  // 5
                                                                                                                    //
	var view = Blaze.getView(el);                                                                                      // 6
                                                                                                                    //
	if (view && typeof view.templateInstance === 'function') {                                                         // 7
		var _view$templateInstanc = view.templateInstance(),                                                              // 7
		    _resetSelection = _view$templateInstanc.resetSelection;                                                       // 7
                                                                                                                    //
		typeof _resetSelection === 'function' && _resetSelection(reset);                                                  // 9
	}                                                                                                                  // 10
}                                                                                                                   // 11
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".less",
    ".html"
  ]
});
require("./node_modules/meteor/rocketchat:channel-settings-mail-messages/client/lib/startup.js");
require("./node_modules/meteor/rocketchat:channel-settings-mail-messages/client/views/template.channelSettingsMailMessages.js");
require("./node_modules/meteor/rocketchat:channel-settings-mail-messages/client/views/channelSettingsMailMessages.js");
require("./node_modules/meteor/rocketchat:channel-settings-mail-messages/client/views/template.mailMessagesInstructions.js");
require("./node_modules/meteor/rocketchat:channel-settings-mail-messages/client/views/mailMessagesInstructions.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:channel-settings-mail-messages'] = {};

})();
