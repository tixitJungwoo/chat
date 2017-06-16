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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:message-star":{"client":{"lib":{"StarredMessage.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/rocketchat_message-star/client/lib/StarredMessage.js                                           //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
this.StarredMessage = new Mongo.Collection('rocketchat_starred_message');                                  // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"actionButton.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/rocketchat_message-star/client/actionButton.js                                                 //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var toastr = void 0;                                                                                       // 1
module.watch(require("toastr"), {                                                                          // 1
	"default": function (v) {                                                                                 // 1
		toastr = v;                                                                                              // 1
	}                                                                                                         // 1
}, 0);                                                                                                     // 1
Meteor.startup(function () {                                                                               // 2
	RocketChat.MessageAction.addButton({                                                                      // 3
		id: 'star-message',                                                                                      // 4
		icon: 'icon-star-empty',                                                                                 // 5
		i18nLabel: 'Star_Message',                                                                               // 6
		context: ['starred', 'message', 'message-mobile'],                                                       // 7
		action: function () {                                                                                    // 8
			var message = this._arguments[1];                                                                       // 9
			message.starred = Meteor.userId();                                                                      // 10
			return Meteor.call('starMessage', message, function (error) {                                           // 11
				if (error) {                                                                                           // 12
					return handleError(error);                                                                            // 13
				}                                                                                                      // 14
			});                                                                                                     // 15
		},                                                                                                       // 16
		validation: function (message) {                                                                         // 17
			if (RocketChat.models.Subscriptions.findOne({                                                           // 18
				rid: message.rid                                                                                       // 18
			}) == null && RocketChat.settings.get('Message_AllowStarring')) {                                       // 18
				return false;                                                                                          // 19
			}                                                                                                       // 20
                                                                                                           //
			return !_.findWhere(message.starred, {                                                                  // 22
				_id: Meteor.userId()                                                                                   // 22
			});                                                                                                     // 22
		},                                                                                                       // 23
		order: 10                                                                                                // 24
	});                                                                                                       // 3
	RocketChat.MessageAction.addButton({                                                                      // 26
		id: 'unstar-message',                                                                                    // 27
		icon: 'icon-star',                                                                                       // 28
		i18nLabel: 'Unstar_Message',                                                                             // 29
		context: ['starred', 'message', 'message-mobile'],                                                       // 30
		action: function () {                                                                                    // 31
			var message = this._arguments[1];                                                                       // 32
			message.starred = false;                                                                                // 33
			return Meteor.call('starMessage', message, function (error) {                                           // 34
				if (error) {                                                                                           // 35
					return handleError(error);                                                                            // 36
				}                                                                                                      // 37
			});                                                                                                     // 38
		},                                                                                                       // 39
		validation: function (message) {                                                                         // 40
			if (RocketChat.models.Subscriptions.findOne({                                                           // 41
				rid: message.rid                                                                                       // 41
			}) == null && RocketChat.settings.get('Message_AllowStarring')) {                                       // 41
				return false;                                                                                          // 42
			}                                                                                                       // 43
                                                                                                           //
			return Boolean(_.findWhere(message.starred, {                                                           // 45
				_id: Meteor.userId()                                                                                   // 45
			}));                                                                                                    // 45
		},                                                                                                       // 46
		order: 10                                                                                                // 47
	});                                                                                                       // 26
	RocketChat.MessageAction.addButton({                                                                      // 49
		id: 'jump-to-star-message',                                                                              // 50
		icon: 'icon-right-hand',                                                                                 // 51
		i18nLabel: 'Jump_to_message',                                                                            // 52
		context: ['starred'],                                                                                    // 53
		action: function () {                                                                                    // 54
			var message = this._arguments[1];                                                                       // 55
			RocketChat.MessageAction.hideDropDown();                                                                // 56
			return RoomHistoryManager.getSurroundingMessages(message, 50);                                          // 57
		},                                                                                                       // 58
		validation: function (message) {                                                                         // 59
			if (RocketChat.models.Subscriptions.findOne({                                                           // 60
				rid: message.rid                                                                                       // 60
			}) == null) {                                                                                           // 60
				return false;                                                                                          // 61
			}                                                                                                       // 62
                                                                                                           //
			return true;                                                                                            // 63
		},                                                                                                       // 64
		order: 100                                                                                               // 65
	});                                                                                                       // 49
	return RocketChat.MessageAction.addButton({                                                               // 67
		id: 'permalink-star',                                                                                    // 68
		icon: 'icon-link',                                                                                       // 69
		i18nLabel: 'Permalink',                                                                                  // 70
		classes: 'clipboard',                                                                                    // 71
		context: ['starred'],                                                                                    // 72
		action: function () {                                                                                    // 73
			var message = this._arguments[1];                                                                       // 74
			RocketChat.MessageAction.hideDropDown();                                                                // 75
			$(event.currentTarget).attr('data-clipboard-text', RocketChat.MessageAction.getPermaLink(message._id));
			return toastr.success(TAPi18n.__('Copied'));                                                            // 77
		},                                                                                                       // 78
		validation: function (message) {                                                                         // 79
			if (RocketChat.models.Subscriptions.findOne({                                                           // 80
				rid: message.rid                                                                                       // 80
			}) == null) {                                                                                           // 80
				return false;                                                                                          // 81
			}                                                                                                       // 82
                                                                                                           //
			return true;                                                                                            // 83
		},                                                                                                       // 84
		order: 101                                                                                               // 85
	});                                                                                                       // 67
});                                                                                                        // 87
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"starMessage.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/rocketchat_message-star/client/starMessage.js                                                  //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
Meteor.methods({                                                                                           // 1
	starMessage: function (message) {                                                                         // 2
		if (!Meteor.userId()) {                                                                                  // 3
			return false;                                                                                           // 4
		}                                                                                                        // 5
                                                                                                           //
		if (RocketChat.models.Subscriptions.findOne({                                                            // 6
			rid: message.rid                                                                                        // 6
		}) == null) {                                                                                            // 6
			return false;                                                                                           // 7
		}                                                                                                        // 8
                                                                                                           //
		if (!RocketChat.settings.get('Message_AllowStarring')) {                                                 // 9
			return false;                                                                                           // 10
		}                                                                                                        // 11
                                                                                                           //
		return ChatMessage.update({                                                                              // 12
			_id: message._id                                                                                        // 13
		}, {                                                                                                     // 12
			$set: {                                                                                                 // 15
				starred: !!message.starred                                                                             // 16
			}                                                                                                       // 15
		});                                                                                                      // 14
	}                                                                                                         // 19
});                                                                                                        // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tabBar.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/rocketchat_message-star/client/tabBar.js                                                       //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
Meteor.startup(function () {                                                                               // 1
	return RocketChat.TabBar.addButton({                                                                      // 2
		groups: ['channel', 'group', 'direct'],                                                                  // 3
		id: 'starred-messages',                                                                                  // 4
		i18nTitle: 'Starred_Messages',                                                                           // 5
		icon: 'icon-star',                                                                                       // 6
		template: 'starredMessages',                                                                             // 7
		order: 3                                                                                                 // 8
	});                                                                                                       // 2
});                                                                                                        // 10
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"views":{"template.starredMessages.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/rocketchat_message-star/client/views/template.starredMessages.js                               //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
                                                                                                           // 1
Template.__checkName("starredMessages");                                                                   // 2
Template["starredMessages"] = new Template("Template.starredMessages", (function() {                       // 3
  var view = this;                                                                                         // 4
  return HTML.DIV({                                                                                        // 5
    class: "content"                                                                                       // 6
  }, "\n\t\t", HTML.DIV({                                                                                  // 7
    class: "list-view starred-messages-list"                                                               // 8
  }, "\n\t\t\t", HTML.DIV({                                                                                // 9
    class: "title"                                                                                         // 10
  }, "\n\t\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                                             // 11
    return Spacebars.mustache(view.lookup("_"), "Starred_Messages");                                       // 12
  })), "\n\t\t\t"), "\n\t\t\t", Blaze.If(function() {                                                      // 13
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                   // 14
  }, function() {                                                                                          // 15
    return [ "\n\t\t\t\t", Blaze.Unless(function() {                                                       // 16
      return Spacebars.call(view.lookup("hasMessages"));                                                   // 17
    }, function() {                                                                                        // 18
      return [ "\n\t\t\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                                 // 19
        return Spacebars.mustache(view.lookup("_"), "No_starred_messages");                                // 20
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

},"starredMessages.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/rocketchat_message-star/client/views/starredMessages.js                                        //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
/*globals StarredMessage */Template.starredMessages.helpers({                                              // 1
	hasMessages: function () {                                                                                // 3
		return StarredMessage.find({                                                                             // 4
			rid: this.rid                                                                                           // 5
		}, {                                                                                                     // 4
			sort: {                                                                                                 // 7
				ts: -1                                                                                                 // 8
			}                                                                                                       // 7
		}).count() > 0;                                                                                          // 6
	},                                                                                                        // 11
	messages: function () {                                                                                   // 12
		return StarredMessage.find({                                                                             // 13
			rid: this.rid                                                                                           // 14
		}, {                                                                                                     // 13
			sort: {                                                                                                 // 16
				ts: -1                                                                                                 // 17
			}                                                                                                       // 16
		});                                                                                                      // 15
	},                                                                                                        // 20
	message: function () {                                                                                    // 21
		return _.extend(this, {                                                                                  // 22
			customClass: 'starred'                                                                                  // 23
		});                                                                                                      // 22
	},                                                                                                        // 25
	hasMore: function () {                                                                                    // 26
		return Template.instance().hasMore.get();                                                                // 27
	}                                                                                                         // 28
});                                                                                                        // 2
Template.starredMessages.onCreated(function () {                                                           // 31
	var _this = this;                                                                                         // 31
                                                                                                           //
	this.hasMore = new ReactiveVar(true);                                                                     // 32
	this.limit = new ReactiveVar(50);                                                                         // 33
	this.autorun(function () {                                                                                // 34
		var sub = _this.subscribe('starredMessages', _this.data.rid, _this.limit.get());                         // 35
                                                                                                           //
		var findStarredMessage = StarredMessage.find({                                                           // 36
			rid: _this.data.rid                                                                                     // 36
		});                                                                                                      // 36
                                                                                                           //
		if (sub.ready()) {                                                                                       // 37
			if (findStarredMessage.count() < _this.limit.get()) {                                                   // 38
				return _this.hasMore.set(false);                                                                       // 39
			}                                                                                                       // 40
		}                                                                                                        // 41
	});                                                                                                       // 42
});                                                                                                        // 43
Template.starredMessages.events({                                                                          // 45
	'click .message-cog': function (e, t) {                                                                   // 46
		e.stopPropagation();                                                                                     // 47
		e.preventDefault();                                                                                      // 48
		var message_id = $(e.currentTarget).closest('.message').attr('id');                                      // 49
		RocketChat.MessageAction.hideDropDown();                                                                 // 50
		t.$("#" + message_id + " .message-dropdown").remove();                                                   // 51
		var message = StarredMessage.findOne(message_id);                                                        // 52
		var actions = RocketChat.MessageAction.getButtons(message, 'starred');                                   // 53
		var el = Blaze.toHTMLWithData(Template.messageDropdown, {                                                // 54
			actions: actions                                                                                        // 55
		});                                                                                                      // 54
		t.$("#" + message_id + " .message-cog-container").append(el);                                            // 57
		var dropDown = t.$("#" + message_id + " .message-dropdown");                                             // 58
		return dropDown.show();                                                                                  // 59
	},                                                                                                        // 60
	'scroll .content': _.throttle(function (e, instance) {                                                    // 61
		if (e.target.scrollTop >= e.target.scrollHeight - e.target.clientHeight) {                               // 62
			return instance.limit.set(instance.limit.get() + 50);                                                   // 63
		}                                                                                                        // 64
	}, 200)                                                                                                   // 65
});                                                                                                        // 45
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".less"
  ]
});
require("./node_modules/meteor/rocketchat:message-star/client/lib/StarredMessage.js");
require("./node_modules/meteor/rocketchat:message-star/client/actionButton.js");
require("./node_modules/meteor/rocketchat:message-star/client/starMessage.js");
require("./node_modules/meteor/rocketchat:message-star/client/tabBar.js");
require("./node_modules/meteor/rocketchat:message-star/client/views/template.starredMessages.js");
require("./node_modules/meteor/rocketchat:message-star/client/views/starredMessages.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:message-star'] = {};

})();
