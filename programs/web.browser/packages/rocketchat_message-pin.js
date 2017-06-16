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
var Mongo = Package.mongo.Mongo;
var _ = Package.underscore._;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var Template = Package['templating-runtime'].Template;
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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:message-pin":{"client":{"lib":{"PinnedMessage.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/rocketchat_message-pin/client/lib/PinnedMessage.js                                             //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
this.PinnedMessage = new Mongo.Collection('rocketchat_pinned_message');                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"actionButton.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/rocketchat_message-pin/client/actionButton.js                                                  //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var toastr = void 0;                                                                                       // 1
module.watch(require("toastr"), {                                                                          // 1
	"default": function (v) {                                                                                 // 1
		toastr = v;                                                                                              // 1
	}                                                                                                         // 1
}, 0);                                                                                                     // 1
Meteor.startup(function () {                                                                               // 3
	RocketChat.MessageAction.addButton({                                                                      // 4
		id: 'pin-message',                                                                                       // 5
		icon: 'icon-pin',                                                                                        // 6
		i18nLabel: 'Pin_Message',                                                                                // 7
		context: ['pinned', 'message', 'message-mobile'],                                                        // 8
		action: function () {                                                                                    // 10
			var message = this._arguments[1];                                                                       // 11
			message.pinned = true;                                                                                  // 12
			return Meteor.call('pinMessage', message, function (error) {                                            // 13
				if (error) {                                                                                           // 14
					return handleError(error);                                                                            // 15
				}                                                                                                      // 16
			});                                                                                                     // 17
		},                                                                                                       // 18
		validation: function (message) {                                                                         // 20
			if (RocketChat.models.Subscriptions.findOne({                                                           // 21
				rid: message.rid                                                                                       // 21
			}) == null) {                                                                                           // 21
				return false;                                                                                          // 22
			} else if (message.pinned || !RocketChat.settings.get('Message_AllowPinning')) {                        // 23
				return false;                                                                                          // 24
			}                                                                                                       // 25
                                                                                                           //
			return RocketChat.authz.hasAtLeastOnePermission('pin-message', message.rid);                            // 26
		},                                                                                                       // 27
		order: 20                                                                                                // 28
	});                                                                                                       // 4
	RocketChat.MessageAction.addButton({                                                                      // 31
		id: 'unpin-message',                                                                                     // 32
		icon: 'icon-pin rotate-45',                                                                              // 33
		i18nLabel: 'Unpin_Message',                                                                              // 34
		context: ['pinned', 'message', 'message-mobile'],                                                        // 35
		action: function () {                                                                                    // 36
			var message = this._arguments[1];                                                                       // 37
			message.pinned = false;                                                                                 // 38
			return Meteor.call('unpinMessage', message, function (error) {                                          // 39
				if (error) {                                                                                           // 40
					return handleError(error);                                                                            // 41
				}                                                                                                      // 42
			});                                                                                                     // 43
		},                                                                                                       // 44
		validation: function (message) {                                                                         // 46
			if (RocketChat.models.Subscriptions.findOne({                                                           // 47
				rid: message.rid                                                                                       // 47
			}) == null) {                                                                                           // 47
				return false;                                                                                          // 48
			} else if (!message.pinned || !RocketChat.settings.get('Message_AllowPinning')) {                       // 49
				return false;                                                                                          // 50
			}                                                                                                       // 51
                                                                                                           //
			return RocketChat.authz.hasAtLeastOnePermission('pin-message', message.rid);                            // 52
		},                                                                                                       // 53
		order: 21                                                                                                // 54
	});                                                                                                       // 31
	RocketChat.MessageAction.addButton({                                                                      // 57
		id: 'jump-to-pin-message',                                                                               // 58
		icon: 'icon-right-hand',                                                                                 // 59
		i18nLabel: 'Jump_to_message',                                                                            // 60
		context: ['pinned'],                                                                                     // 61
		action: function () {                                                                                    // 62
			var message = this._arguments[1];                                                                       // 63
			RocketChat.MessageAction.hideDropDown();                                                                // 64
			return RoomHistoryManager.getSurroundingMessages(message, 50);                                          // 65
		},                                                                                                       // 66
		validation: function (message) {                                                                         // 67
			if (RocketChat.models.Subscriptions.findOne({                                                           // 68
				rid: message.rid                                                                                       // 68
			}) == null) {                                                                                           // 68
				return false;                                                                                          // 69
			}                                                                                                       // 70
                                                                                                           //
			return true;                                                                                            // 71
		},                                                                                                       // 72
		order: 100                                                                                               // 73
	});                                                                                                       // 57
	return RocketChat.MessageAction.addButton({                                                               // 76
		id: 'permalink-pinned',                                                                                  // 77
		icon: 'icon-link',                                                                                       // 78
		i18nLabel: 'Permalink',                                                                                  // 79
		classes: 'clipboard',                                                                                    // 80
		context: ['pinned'],                                                                                     // 81
		action: function () {                                                                                    // 82
			var message = this._arguments[1];                                                                       // 83
			RocketChat.MessageAction.hideDropDown();                                                                // 84
			$(event.currentTarget).attr('data-clipboard-text', RocketChat.MessageAction.getPermaLink(message._id));
			return toastr.success(TAPi18n.__('Copied'));                                                            // 86
		},                                                                                                       // 87
		validation: function (message) {                                                                         // 89
			if (RocketChat.models.Subscriptions.findOne({                                                           // 90
				rid: message.rid                                                                                       // 90
			}) == null) {                                                                                           // 90
				return false;                                                                                          // 91
			}                                                                                                       // 92
                                                                                                           //
			return true;                                                                                            // 93
		},                                                                                                       // 94
		order: 101                                                                                               // 95
	});                                                                                                       // 76
});                                                                                                        // 97
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"messageType.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/rocketchat_message-pin/client/messageType.js                                                   //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
Meteor.startup(function () {                                                                               // 1
	RocketChat.MessageTypes.registerType({                                                                    // 2
		id: 'message_pinned',                                                                                    // 3
		system: true,                                                                                            // 4
		message: 'Pinned_a_message'                                                                              // 5
	});                                                                                                       // 2
});                                                                                                        // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"pinMessage.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/rocketchat_message-pin/client/pinMessage.js                                                    //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
Meteor.methods({                                                                                           // 1
	pinMessage: function (message) {                                                                          // 2
		if (!Meteor.userId()) {                                                                                  // 3
			return false;                                                                                           // 4
		}                                                                                                        // 5
                                                                                                           //
		if (!RocketChat.settings.get('Message_AllowPinning')) {                                                  // 6
			return false;                                                                                           // 7
		}                                                                                                        // 8
                                                                                                           //
		if (RocketChat.models.Subscriptions.findOne({                                                            // 9
			rid: message.rid                                                                                        // 9
		}) == null) {                                                                                            // 9
			return false;                                                                                           // 10
		}                                                                                                        // 11
                                                                                                           //
		return ChatMessage.update({                                                                              // 12
			_id: message._id                                                                                        // 13
		}, {                                                                                                     // 12
			$set: {                                                                                                 // 15
				pinned: true                                                                                           // 16
			}                                                                                                       // 15
		});                                                                                                      // 14
	},                                                                                                        // 19
	unpinMessage: function (message) {                                                                        // 20
		if (!Meteor.userId()) {                                                                                  // 21
			return false;                                                                                           // 22
		}                                                                                                        // 23
                                                                                                           //
		if (!RocketChat.settings.get('Message_AllowPinning')) {                                                  // 24
			return false;                                                                                           // 25
		}                                                                                                        // 26
                                                                                                           //
		if (RocketChat.models.Subscriptions.findOne({                                                            // 27
			rid: message.rid                                                                                        // 27
		}) == null) {                                                                                            // 27
			return false;                                                                                           // 28
		}                                                                                                        // 29
                                                                                                           //
		return ChatMessage.update({                                                                              // 30
			_id: message._id                                                                                        // 31
		}, {                                                                                                     // 30
			$set: {                                                                                                 // 33
				pinned: false                                                                                          // 34
			}                                                                                                       // 33
		});                                                                                                      // 32
	}                                                                                                         // 37
});                                                                                                        // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tabBar.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/rocketchat_message-pin/client/tabBar.js                                                        //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
Meteor.startup(function () {                                                                               // 1
	return Tracker.autorun(function () {                                                                      // 2
		if (RocketChat.settings.get('Message_AllowPinning')) {                                                   // 3
			return RocketChat.TabBar.addButton({                                                                    // 4
				groups: ['channel', 'group', 'direct'],                                                                // 5
				id: 'pinned-messages',                                                                                 // 6
				i18nTitle: 'Pinned_Messages',                                                                          // 7
				icon: 'icon-pin',                                                                                      // 8
				template: 'pinnedMessages',                                                                            // 9
				order: 10                                                                                              // 10
			});                                                                                                     // 4
		} else {                                                                                                 // 12
			return RocketChat.TabBar.removeButton('pinned-messages');                                               // 13
		}                                                                                                        // 14
	});                                                                                                       // 15
});                                                                                                        // 16
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"views":{"template.pinnedMessages.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/rocketchat_message-pin/client/views/template.pinnedMessages.js                                 //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
                                                                                                           // 1
Template.__checkName("pinnedMessages");                                                                    // 2
Template["pinnedMessages"] = new Template("Template.pinnedMessages", (function() {                         // 3
  var view = this;                                                                                         // 4
  return HTML.DIV({                                                                                        // 5
    class: "content"                                                                                       // 6
  }, "\n\t\t", HTML.DIV({                                                                                  // 7
    class: "list-view pinned-messages-list"                                                                // 8
  }, "\n\t\t\t", HTML.DIV({                                                                                // 9
    class: "title"                                                                                         // 10
  }, "\n\t\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                                             // 11
    return Spacebars.mustache(view.lookup("_"), "Pinned_Messages");                                        // 12
  })), "\n\t\t\t"), "\n\t\t\t", Blaze.If(function() {                                                      // 13
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                   // 14
  }, function() {                                                                                          // 15
    return [ "\n\t\t\t\t", Blaze.Unless(function() {                                                       // 16
      return Spacebars.call(view.lookup("hasMessages"));                                                   // 17
    }, function() {                                                                                        // 18
      return [ "\n\t\t\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                                 // 19
        return Spacebars.mustache(view.lookup("_"), "No_pinned_messages");                                 // 20
      })), "\n\t\t\t\t" ];                                                                                 // 21
    }), "\n\t\t\t" ];                                                                                      // 22
  }), "\n\t\t"), "\n\t\t", HTML.UL({                                                                       // 23
    class: "list clearfix"                                                                                 // 24
  }, "\n\t\t\t", Blaze.Each(function() {                                                                   // 25
    return Spacebars.call(view.lookup("messages"));                                                        // 26
  }, function() {                                                                                          // 27
    return [ "\n\t\t\t\t", Blaze._TemplateWith(function() {                                                // 28
      return Spacebars.dataMustache(view.lookup("nrrargs"), "message", view.lookup("message"));            // 29
    }, function() {                                                                                        // 30
      return Spacebars.include(view.lookupTemplate("nrr"), function() {                                    // 31
        return null;                                                                                       // 32
      });                                                                                                  // 33
    }), "\n\t\t\t" ];                                                                                      // 34
  }), "\n\t\t"), "\n\t\t", Blaze.If(function() {                                                           // 35
    return Spacebars.call(view.lookup("hasMore"));                                                         // 36
  }, function() {                                                                                          // 37
    return [ "\n\t\t\t", HTML.DIV({                                                                        // 38
      class: "load-more"                                                                                   // 39
    }, "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("loading")), "\n\t\t\t"), "\n\t\t" ];           // 40
  }), "\n\t");                                                                                             // 41
}));                                                                                                       // 42
                                                                                                           // 43
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"pinnedMessages.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/rocketchat_message-pin/client/views/pinnedMessages.js                                          //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
/* globals PinnedMessage */Template.pinnedMessages.helpers({                                               // 1
	hasMessages: function () {                                                                                // 3
		return PinnedMessage.find({                                                                              // 4
			rid: this.rid                                                                                           // 5
		}, {                                                                                                     // 4
			sort: {                                                                                                 // 7
				ts: -1                                                                                                 // 8
			}                                                                                                       // 7
		}).count() > 0;                                                                                          // 6
	},                                                                                                        // 11
	messages: function () {                                                                                   // 12
		return PinnedMessage.find({                                                                              // 13
			rid: this.rid                                                                                           // 14
		}, {                                                                                                     // 13
			sort: {                                                                                                 // 16
				ts: -1                                                                                                 // 17
			}                                                                                                       // 16
		});                                                                                                      // 15
	},                                                                                                        // 20
	message: function () {                                                                                    // 21
		return _.extend(this, {                                                                                  // 22
			customClass: 'pinned'                                                                                   // 23
		});                                                                                                      // 22
	},                                                                                                        // 25
	hasMore: function () {                                                                                    // 26
		return Template.instance().hasMore.get();                                                                // 27
	}                                                                                                         // 28
});                                                                                                        // 2
Template.pinnedMessages.onCreated(function () {                                                            // 31
	var _this = this;                                                                                         // 31
                                                                                                           //
	this.hasMore = new ReactiveVar(true);                                                                     // 32
	this.limit = new ReactiveVar(50);                                                                         // 33
	return this.autorun(function () {                                                                         // 34
		var data = Template.currentData();                                                                       // 35
		return _this.subscribe('pinnedMessages', data.rid, _this.limit.get(), function () {                      // 36
			if (PinnedMessage.find({                                                                                // 37
				rid: data.rid                                                                                          // 38
			}).count() < _this.limit.get()) {                                                                       // 37
				return _this.hasMore.set(false);                                                                       // 40
			}                                                                                                       // 41
		});                                                                                                      // 42
	});                                                                                                       // 43
});                                                                                                        // 44
Template.pinnedMessages.events({                                                                           // 46
	'click .message-cog': function (e, t) {                                                                   // 47
		e.stopPropagation();                                                                                     // 48
		e.preventDefault();                                                                                      // 49
		var message_id = $(e.currentTarget).closest('.message').attr('id');                                      // 50
		RocketChat.MessageAction.hideDropDown();                                                                 // 51
		t.$("#" + message_id + " .message-dropdown").remove();                                                   // 52
		var message = PinnedMessage.findOne(message_id);                                                         // 53
		var actions = RocketChat.MessageAction.getButtons(message, 'pinned');                                    // 54
		var el = Blaze.toHTMLWithData(Template.messageDropdown, {                                                // 55
			actions: actions                                                                                        // 56
		});                                                                                                      // 55
		t.$("#" + message_id + " .message-cog-container").append(el);                                            // 58
		var dropDown = t.$("#" + message_id + " .message-dropdown");                                             // 59
		return dropDown.show();                                                                                  // 60
	},                                                                                                        // 61
	'scroll .content': _.throttle(function (e, instance) {                                                    // 62
		if (e.target.scrollTop >= e.target.scrollHeight - e.target.clientHeight && instance.hasMore.get()) {     // 63
			return instance.limit.set(instance.limit.get() + 50);                                                   // 64
		}                                                                                                        // 65
	}, 200)                                                                                                   // 66
});                                                                                                        // 46
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".less"
  ]
});
require("./node_modules/meteor/rocketchat:message-pin/client/lib/PinnedMessage.js");
require("./node_modules/meteor/rocketchat:message-pin/client/actionButton.js");
require("./node_modules/meteor/rocketchat:message-pin/client/messageType.js");
require("./node_modules/meteor/rocketchat:message-pin/client/pinMessage.js");
require("./node_modules/meteor/rocketchat:message-pin/client/tabBar.js");
require("./node_modules/meteor/rocketchat:message-pin/client/views/template.pinnedMessages.js");
require("./node_modules/meteor/rocketchat:message-pin/client/views/pinnedMessages.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:message-pin'] = {};

})();
