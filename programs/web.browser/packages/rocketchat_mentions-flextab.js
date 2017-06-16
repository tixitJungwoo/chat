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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:mentions-flextab":{"client":{"lib":{"MentionedMessage.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/rocketchat_mentions-flextab/client/lib/MentionedMessage.js                                 //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
this.MentionedMessage = new Mongo.Collection('rocketchat_mentioned_message');                          // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"views":{"template.mentionsFlexTab.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/rocketchat_mentions-flextab/client/views/template.mentionsFlexTab.js                       //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
                                                                                                       // 1
Template.__checkName("mentionsFlexTab");                                                               // 2
Template["mentionsFlexTab"] = new Template("Template.mentionsFlexTab", (function() {                   // 3
  var view = this;                                                                                     // 4
  return HTML.DIV({                                                                                    // 5
    class: "content"                                                                                   // 6
  }, "\n\t\t", HTML.DIV({                                                                              // 7
    class: "list-view mentioned-messages-list"                                                         // 8
  }, "\n\t\t\t", HTML.DIV({                                                                            // 9
    class: "title"                                                                                     // 10
  }, "\n\t\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                                         // 11
    return Spacebars.mustache(view.lookup("_"), "Mentions");                                           // 12
  })), "\n\t\t\t"), "\n\t\t\t", Blaze.If(function() {                                                  // 13
    return Spacebars.call(view.templateInstance().subscriptionsReady());                               // 14
  }, function() {                                                                                      // 15
    return [ "\n\t\t\t\t", Blaze.Unless(function() {                                                   // 16
      return Spacebars.call(view.lookup("hasMessages"));                                               // 17
    }, function() {                                                                                    // 18
      return [ "\n\t\t\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                             // 19
        return Spacebars.mustache(view.lookup("_"), "No_mentions_found");                              // 20
      })), "\n\t\t\t\t" ];                                                                             // 21
    }), "\n\t\t\t" ];                                                                                  // 22
  }), "\n\t\t"), "\n\t\t", HTML.UL({                                                                   // 23
    class: "mentioned-messages-list list clearfix"                                                     // 24
  }, "\n\t\t\t", Blaze.Each(function() {                                                               // 25
    return Spacebars.call(view.lookup("messages"));                                                    // 26
  }, function() {                                                                                      // 27
    return [ "\n\t\t\t\t", Blaze._TemplateWith(function() {                                            // 28
      return Spacebars.dataMustache(view.lookup("nrrargs"), "message", view.lookup("message"));        // 29
    }, function() {                                                                                    // 30
      return Spacebars.include(view.lookupTemplate("nrr"), function() {                                // 31
        return null;                                                                                   // 32
      });                                                                                              // 33
    }), "\n\t\t\t" ];                                                                                  // 34
  }), "\n\t\t"), "\n\t\t", Blaze.If(function() {                                                       // 35
    return Spacebars.call(view.lookup("hasMore"));                                                     // 36
  }, function() {                                                                                      // 37
    return [ "\n\t\t\t", HTML.DIV({                                                                    // 38
      class: "load-more"                                                                               // 39
    }, "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("loading")), "\n\t\t\t"), "\n\t\t" ];       // 40
  }), "\n\t");                                                                                         // 41
}));                                                                                                   // 42
                                                                                                       // 43
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"mentionsFlexTab.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/rocketchat_mentions-flextab/client/views/mentionsFlexTab.js                                //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
/*globals MentionedMessage */Template.mentionsFlexTab.helpers({                                        // 1
	hasMessages: function () {                                                                            // 3
		return MentionedMessage.find({                                                                       // 4
			rid: this.rid                                                                                       // 5
		}, {                                                                                                 // 4
			sort: {                                                                                             // 7
				ts: -1                                                                                             // 8
			}                                                                                                   // 7
		}).count() > 0;                                                                                      // 6
	},                                                                                                    // 11
	messages: function () {                                                                               // 12
		return MentionedMessage.find({                                                                       // 13
			rid: this.rid                                                                                       // 14
		}, {                                                                                                 // 13
			sort: {                                                                                             // 16
				ts: -1                                                                                             // 17
			}                                                                                                   // 16
		});                                                                                                  // 15
	},                                                                                                    // 20
	message: function () {                                                                                // 21
		return _.extend(this, {                                                                              // 22
			customClass: 'mentions'                                                                             // 23
		});                                                                                                  // 22
	},                                                                                                    // 25
	hasMore: function () {                                                                                // 26
		return Template.instance().hasMore.get();                                                            // 27
	}                                                                                                     // 28
});                                                                                                    // 2
Template.mentionsFlexTab.onCreated(function () {                                                       // 31
	var _this = this;                                                                                     // 31
                                                                                                       //
	this.hasMore = new ReactiveVar(true);                                                                 // 32
	this.limit = new ReactiveVar(50);                                                                     // 33
	return this.autorun(function () {                                                                     // 34
		var mentionedMessageFind = MentionedMessage.find({                                                   // 35
			rid: _this.data.rid                                                                                 // 35
		});                                                                                                  // 35
		return _this.subscribe('mentionedMessages', _this.data.rid, _this.limit.get(), function () {         // 36
			if (mentionedMessageFind.count() < _this.limit.get()) {                                             // 37
				return _this.hasMore.set(false);                                                                   // 38
			}                                                                                                   // 39
		});                                                                                                  // 40
	});                                                                                                   // 41
});                                                                                                    // 42
Template.mentionsFlexTab.events({                                                                      // 44
	'click .message-cog': function (e, t) {                                                               // 45
		e.stopPropagation();                                                                                 // 46
		e.preventDefault();                                                                                  // 47
		var message_id = $(e.currentTarget).closest('.message').attr('id');                                  // 48
		RocketChat.MessageAction.hideDropDown();                                                             // 49
		t.$("#" + message_id + " .message-dropdown").remove();                                               // 50
		var message = MentionedMessage.findOne(message_id);                                                  // 51
		var actions = RocketChat.MessageAction.getButtons(message, 'mentions');                              // 52
		var el = Blaze.toHTMLWithData(Template.messageDropdown, {                                            // 53
			actions: actions                                                                                    // 54
		});                                                                                                  // 53
		t.$("#" + message_id + " .message-cog-container").append(el);                                        // 56
		var dropDown = t.$("#" + message_id + " .message-dropdown");                                         // 57
		return dropDown.show();                                                                              // 58
	},                                                                                                    // 59
	'scroll .content': _.throttle(function (e, instance) {                                                // 60
		if (e.target.scrollTop >= e.target.scrollHeight - e.target.clientHeight && instance.hasMore.get()) {
			return instance.limit.set(instance.limit.get() + 50);                                               // 62
		}                                                                                                    // 63
	}, 200)                                                                                               // 64
});                                                                                                    // 44
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"actionButton.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/rocketchat_mentions-flextab/client/actionButton.js                                         //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
Meteor.startup(function () {                                                                           // 1
	return RocketChat.MessageAction.addButton({                                                           // 2
		id: 'jump-to-message',                                                                               // 3
		icon: 'icon-right-hand',                                                                             // 4
		i18nLabel: 'Jump_to_message',                                                                        // 5
		context: ['mentions'],                                                                               // 6
		action: function () {                                                                                // 7
			var message = this._arguments[1];                                                                   // 8
			RocketChat.MessageAction.hideDropDown();                                                            // 9
			return RoomHistoryManager.getSurroundingMessages(message, 50);                                      // 10
		},                                                                                                   // 11
		validation: function (message) {                                                                     // 12
			return message.mentionedList === true;                                                              // 13
		},                                                                                                   // 14
		order: 100                                                                                           // 15
	});                                                                                                   // 2
});                                                                                                    // 17
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tabBar.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/rocketchat_mentions-flextab/client/tabBar.js                                               //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
Meteor.startup(function () {                                                                           // 1
	return RocketChat.TabBar.addButton({                                                                  // 2
		groups: ['channel', 'group'],                                                                        // 3
		id: 'mentions',                                                                                      // 4
		i18nTitle: 'Mentions',                                                                               // 5
		icon: 'icon-at',                                                                                     // 6
		template: 'mentionsFlexTab',                                                                         // 7
		order: 3                                                                                             // 8
	});                                                                                                   // 2
});                                                                                                    // 10
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".less",
    ".html"
  ]
});
require("./node_modules/meteor/rocketchat:mentions-flextab/client/lib/MentionedMessage.js");
require("./node_modules/meteor/rocketchat:mentions-flextab/client/views/template.mentionsFlexTab.js");
require("./node_modules/meteor/rocketchat:mentions-flextab/client/views/mentionsFlexTab.js");
require("./node_modules/meteor/rocketchat:mentions-flextab/client/actionButton.js");
require("./node_modules/meteor/rocketchat:mentions-flextab/client/tabBar.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:mentions-flextab'] = {};

})();
