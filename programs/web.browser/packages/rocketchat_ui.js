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
var Accounts = Package['accounts-base'].Accounts;
var Mongo = Package.mongo.Mongo;
var Session = Package.session.Session;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var Template = Package['templating-runtime'].Template;
var _ = Package.underscore._;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var Push = Package['raix:push'].Push;
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

/* Package-scope variables */
var __coffeescriptShare, CodeMirrors;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:ui":{"getAvatarUrlFromUsername.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/getAvatarUrlFromUsername.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// TODO: remove global                                                                                                 // 1
this.getAvatarUrlFromUsername = function (username) {                                                                  // 2
	var key = "avatar_random_" + username;                                                                                // 3
	var random = typeof Session !== 'undefined' ? Session.keys[key] : 0;                                                  // 4
                                                                                                                       //
	if (username == null) {                                                                                               // 5
		return;                                                                                                              // 6
	}                                                                                                                     // 7
                                                                                                                       //
	var cdnPrefix = (RocketChat.settings.get('CDN_PREFIX') || '').trim().replace(/\/$/, '');                              // 8
	var pathPrefix = (__meteor_runtime_config__.ROOT_URL_PATH_PREFIX || '').trim().replace(/\/$/, '');                    // 9
	var path = pathPrefix;                                                                                                // 10
                                                                                                                       //
	if (cdnPrefix) {                                                                                                      // 11
		path = cdnPrefix + pathPrefix;                                                                                       // 12
	} else if (Meteor.isCordova) {                                                                                        // 13
		path = Meteor.absoluteUrl().replace(/\/$/, '');                                                                      // 14
	}                                                                                                                     // 15
                                                                                                                       //
	return path + "/avatar/" + encodeURIComponent(username) + "?_dc=" + random;                                           // 16
};                                                                                                                     // 17
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"client":{"lib":{"accountBox.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/accountBox.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
this.AccountBox = function () {                                                                                        // 1
	var status = 0;                                                                                                       // 2
	var self = {};                                                                                                        // 3
	var items = new ReactiveVar([]);                                                                                      // 4
                                                                                                                       //
	function setStatus(status) {                                                                                          // 5
		return Meteor.call('UserPresence:setDefaultStatus', status);                                                         // 6
	}                                                                                                                     // 7
                                                                                                                       //
	function open() {                                                                                                     // 8
		if (SideNav.flexStatus()) {                                                                                          // 9
			SideNav.closeFlex();                                                                                                // 10
			return;                                                                                                             // 11
		}                                                                                                                    // 12
                                                                                                                       //
		status = 1;                                                                                                          // 13
		self.options.removeClass('animated-hidden');                                                                         // 14
		self.box.addClass('active');                                                                                         // 15
		return SideNav.toggleArrow(1);                                                                                       // 16
	}                                                                                                                     // 17
                                                                                                                       //
	function close() {                                                                                                    // 18
		status = 0;                                                                                                          // 19
		self.options.addClass('animated-hidden');                                                                            // 20
		self.box.removeClass('active');                                                                                      // 21
		return SideNav.toggleArrow(-1);                                                                                      // 22
	}                                                                                                                     // 23
                                                                                                                       //
	function toggle() {                                                                                                   // 24
		if (status) {                                                                                                        // 25
			return close();                                                                                                     // 26
		} else {                                                                                                             // 27
			return open();                                                                                                      // 28
		}                                                                                                                    // 29
	}                                                                                                                     // 30
                                                                                                                       //
	function openFlex() {                                                                                                 // 31
		status = 0;                                                                                                          // 32
		self.options.addClass('animated-hidden');                                                                            // 33
		return self.box.removeClass('active');                                                                               // 34
	}                                                                                                                     // 35
                                                                                                                       //
	function init() {                                                                                                     // 36
		self.box = $('.account-box');                                                                                        // 37
		return self.options = self.box.find('.options');                                                                     // 38
	} /*                                                                                                                  // 39
   * @param newOption:                                                                                                 //
   *   name: Button label                                                                                              //
   *   icon: Button icon                                                                                               //
   *   class: Class of the item                                                                                        //
   *   permissions: Which permissions a user should have (all of them) to see this item                                //
   */                                                                                                                  //
                                                                                                                       //
	function addItem(newItem) {                                                                                           // 48
		return Tracker.nonreactive(function () {                                                                             // 49
			var actual = items.get();                                                                                           // 50
			actual.push(newItem);                                                                                               // 51
			return items.set(actual);                                                                                           // 52
		});                                                                                                                  // 53
	}                                                                                                                     // 54
                                                                                                                       //
	function checkCondition(item) {                                                                                       // 55
		return item.condition == null || item.condition();                                                                   // 56
	}                                                                                                                     // 57
                                                                                                                       //
	function getItems() {                                                                                                 // 58
		return _.filter(items.get(), function (item) {                                                                       // 59
			if (checkCondition(item)) {                                                                                         // 60
				return true;                                                                                                       // 61
			}                                                                                                                   // 62
		});                                                                                                                  // 63
	}                                                                                                                     // 64
                                                                                                                       //
	function addRoute(newRoute, router) {                                                                                 // 65
		if (router == null) {                                                                                                // 66
			router = FlowRouter;                                                                                                // 67
		}                                                                                                                    // 68
                                                                                                                       //
		var routeConfig = {                                                                                                  // 69
			center: 'pageContainer',                                                                                            // 70
			pageTemplate: newRoute.pageTemplate                                                                                 // 71
		};                                                                                                                   // 69
                                                                                                                       //
		if (newRoute.i18nPageTitle != null) {                                                                                // 73
			routeConfig.i18nPageTitle = newRoute.i18nPageTitle;                                                                 // 74
		}                                                                                                                    // 75
                                                                                                                       //
		if (newRoute.pageTitle != null) {                                                                                    // 76
			routeConfig.pageTitle = newRoute.pageTitle;                                                                         // 77
		}                                                                                                                    // 78
                                                                                                                       //
		return router.route(newRoute.path, {                                                                                 // 79
			name: newRoute.name,                                                                                                // 80
			action: function () {                                                                                               // 81
				Session.set('openedRoom');                                                                                         // 82
				return BlazeLayout.render('main', routeConfig);                                                                    // 83
			},                                                                                                                  // 84
			triggersEnter: [function () {                                                                                       // 85
				if (newRoute.sideNav != null) {                                                                                    // 87
					SideNav.setFlex(newRoute.sideNav);                                                                                // 88
					return SideNav.openFlex();                                                                                        // 89
				}                                                                                                                  // 90
			}]                                                                                                                  // 91
		});                                                                                                                  // 79
	}                                                                                                                     // 94
                                                                                                                       //
	return {                                                                                                              // 95
		setStatus: setStatus,                                                                                                // 96
		toggle: toggle,                                                                                                      // 97
		open: open,                                                                                                          // 98
		close: close,                                                                                                        // 99
		openFlex: openFlex,                                                                                                  // 100
		init: init,                                                                                                          // 101
		addRoute: addRoute,                                                                                                  // 102
		addItem: addItem,                                                                                                    // 103
		getItems: getItems                                                                                                   // 104
	};                                                                                                                    // 95
}();                                                                                                                   // 106
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"accounts.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/accounts.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var toastr = void 0;                                                                                                   // 1
module.watch(require("toastr"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		toastr = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
Accounts.onEmailVerificationLink(function (token, done) {                                                              // 2
	Accounts.verifyEmail(token, function (error) {                                                                        // 3
		if (error == null) {                                                                                                 // 4
			toastr.success(t('Email_verified'));                                                                                // 5
			Meteor.call('afterVerifyEmail');                                                                                    // 6
		}                                                                                                                    // 7
                                                                                                                       //
		return done();                                                                                                       // 8
	});                                                                                                                   // 9
});                                                                                                                    // 10
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"avatar.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/avatar.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Blaze.registerHelper('avatarUrlFromUsername', getAvatarUrlFromUsername);                                               // 1
                                                                                                                       //
this.getAvatarAsPng = function (username, cb) {                                                                        // 3
	var image = new Image();                                                                                              // 4
	image.src = getAvatarUrlFromUsername(username);                                                                       // 5
                                                                                                                       //
	image.onload = function () {                                                                                          // 6
		var canvas = document.createElement('canvas');                                                                       // 8
		canvas.width = image.width;                                                                                          // 9
		canvas.height = image.height;                                                                                        // 10
		var context = canvas.getContext('2d');                                                                               // 11
		context.drawImage(image, 0, 0);                                                                                      // 12
		return cb(canvas.toDataURL('image/png'));                                                                            // 13
	};                                                                                                                    // 14
                                                                                                                       //
	return image.onerror = function () {                                                                                  // 15
		return cb('');                                                                                                       // 16
	};                                                                                                                    // 17
};                                                                                                                     // 18
                                                                                                                       //
this.updateAvatarOfUsername = function (username) {                                                                    // 20
	var key = "avatar_random_" + username;                                                                                // 22
	Session.set(key, Math.round(Math.random() * 1000));                                                                   // 23
	Object.keys(RoomManager.openedRooms).forEach(function (key) {                                                         // 25
		var room = RoomManager.openedRooms[key];                                                                             // 26
		var url = getAvatarUrlFromUsername(username);                                                                        // 27
		$(room.dom).find(".message[data-username='" + username + "'] .avatar-image").css('background-image', "url(" + url + ")");
	});                                                                                                                   // 29
	return true;                                                                                                          // 30
};                                                                                                                     // 31
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"chatMessages.coffee.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/chatMessages.coffee.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var moment = void 0;                                                                                                   // 1
module.import('moment', {                                                                                              // 1
  "default": function (v) {                                                                                            // 1
    moment = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var toastr = void 0;                                                                                                   // 1
module.import('toastr', {                                                                                              // 1
  "default": function (v) {                                                                                            // 1
    toastr = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
                                                                                                                       //
var indexOf = [].indexOf || function (item) {                                                                          // 1
  for (var i = 0, l = this.length; i < l; i++) {                                                                       // 1
    if (i in this && this[i] === item) return i;                                                                       // 1
  }                                                                                                                    // 1
                                                                                                                       //
  return -1;                                                                                                           // 1
};                                                                                                                     // 1
                                                                                                                       //
this.ChatMessages = function () {                                                                                      // 4
  function ChatMessages() {}                                                                                           // 8
                                                                                                                       //
  ChatMessages.prototype.init = function (node) {                                                                      // 10
    this.editing = {};                                                                                                 // 6
    this.records = {};                                                                                                 // 7
    this.messageMaxSize = RocketChat.settings.get('Message_MaxAllowedSize');                                           // 8
    this.wrapper = $(node).find(".wrapper");                                                                           // 9
    this.input = $(node).find(".input-message").get(0);                                                                // 10
    this.$input = $(this.input);                                                                                       // 11
    this.hasValue = new ReactiveVar(false);                                                                            // 12
    this.bindEvents();                                                                                                 // 13
  };                                                                                                                   // 5
                                                                                                                       //
  ChatMessages.prototype.resize = function () {                                                                        // 21
    var dif;                                                                                                           // 17
    dif = (RocketChat.Layout.isEmbedded() ? 0 : 60) + $(".messages-container").find("footer").outerHeight();           // 17
    dif += $(".announcement").length > 0 ? 40 : 0;                                                                     // 18
    return $(".messages-box").css({                                                                                    // 25
      height: "calc(100% - " + dif + "px)"                                                                             // 20
    });                                                                                                                // 20
  };                                                                                                                   // 16
                                                                                                                       //
  ChatMessages.prototype.getEditingIndex = function (element) {                                                        // 30
    var index, j, len, msg, msgs;                                                                                      // 23
    msgs = this.wrapper.get(0).querySelectorAll(".own:not(.system)");                                                  // 23
    index = 0;                                                                                                         // 24
                                                                                                                       //
    for (j = 0, len = msgs.length; j < len; j++) {                                                                     // 25
      msg = msgs[j];                                                                                                   // 35
                                                                                                                       //
      if (msg === element) {                                                                                           // 26
        return index;                                                                                                  // 27
      }                                                                                                                // 38
                                                                                                                       //
      index++;                                                                                                         // 28
    }                                                                                                                  // 25
                                                                                                                       //
    return -1;                                                                                                         // 29
  };                                                                                                                   // 22
                                                                                                                       //
  ChatMessages.prototype.recordInputAsDraft = function () {                                                            // 44
    var draft, id, message, record;                                                                                    // 32
    id = this.editing.id;                                                                                              // 32
    message = this.getMessageById(id);                                                                                 // 34
    record = this.records[id] || {};                                                                                   // 35
    draft = this.input.value;                                                                                          // 36
                                                                                                                       //
    if (draft === message.msg) {                                                                                       // 38
      return this.clearCurrentDraft();                                                                                 // 51
    } else {                                                                                                           // 38
      record.draft = draft;                                                                                            // 41
      return this.records[id] = record;                                                                                // 54
    }                                                                                                                  // 55
  };                                                                                                                   // 31
                                                                                                                       //
  ChatMessages.prototype.getMessageDraft = function (id) {                                                             // 58
    return this.records[id];                                                                                           // 45
  };                                                                                                                   // 44
                                                                                                                       //
  ChatMessages.prototype.clearMessageDraft = function (id) {                                                           // 62
    return delete this.records[id];                                                                                    // 63
  };                                                                                                                   // 47
                                                                                                                       //
  ChatMessages.prototype.clearCurrentDraft = function () {                                                             // 66
    return this.clearMessageDraft(this.editing.id);                                                                    // 67
  };                                                                                                                   // 50
                                                                                                                       //
  ChatMessages.prototype.resetToDraft = function (id) {                                                                // 70
    var message, old_value;                                                                                            // 54
    message = this.getMessageById(id);                                                                                 // 54
    old_value = this.input.value;                                                                                      // 56
    this.input.value = message.msg;                                                                                    // 57
    return old_value !== message.msg;                                                                                  // 59
  };                                                                                                                   // 53
                                                                                                                       //
  ChatMessages.prototype.getMessageById = function (id) {                                                              // 78
    return ChatMessage.findOne(id);                                                                                    // 62
  };                                                                                                                   // 61
                                                                                                                       //
  ChatMessages.prototype.toPrevMessage = function () {                                                                 // 82
    var index;                                                                                                         // 65
    index = this.editing.index;                                                                                        // 65
    return this.editByIndex(index != null ? index - 1 : void 0);                                                       // 85
  };                                                                                                                   // 64
                                                                                                                       //
  ChatMessages.prototype.toNextMessage = function () {                                                                 // 88
    var index;                                                                                                         // 69
    index = this.editing.index;                                                                                        // 69
                                                                                                                       //
    if (!this.editByIndex(index + 1)) {                                                                                // 70
      return this.clearEditing();                                                                                      // 92
    }                                                                                                                  // 93
  };                                                                                                                   // 68
                                                                                                                       //
  ChatMessages.prototype.editByIndex = function (index) {                                                              // 96
    var element, msgs;                                                                                                 // 73
                                                                                                                       //
    if (!this.editing.element && index != null) {                                                                      // 73
      return false;                                                                                                    // 73
    }                                                                                                                  // 100
                                                                                                                       //
    msgs = this.wrapper.get(0).querySelectorAll(".own:not(.system)");                                                  // 75
                                                                                                                       //
    if (index == null) {                                                                                               // 76
      index = msgs.length - 1;                                                                                         // 76
    }                                                                                                                  // 104
                                                                                                                       //
    if (!msgs[index]) {                                                                                                // 78
      return false;                                                                                                    // 78
    }                                                                                                                  // 107
                                                                                                                       //
    element = msgs[index];                                                                                             // 80
    this.edit(element, index);                                                                                         // 81
    return true;                                                                                                       // 83
  };                                                                                                                   // 72
                                                                                                                       //
  ChatMessages.prototype.edit = function (element, index) {                                                            // 113
    var blockEditInMinutes, currentTsDiff, cursor_pos, editAllowed, editOwn, editingNext, hasPermission, message, msg, msgTs, old_input, ref, ref1;
                                                                                                                       //
    if (index == null) {                                                                                               // 86
      index = this.getEditingIndex(element);                                                                           // 86
    }                                                                                                                  // 117
                                                                                                                       //
    message = this.getMessageById(element.getAttribute("id"));                                                         // 88
    hasPermission = RocketChat.authz.hasAtLeastOnePermission('edit-message', message.rid);                             // 90
    editAllowed = RocketChat.settings.get('Message_AllowEditing');                                                     // 91
    editOwn = (message != null ? (ref = message.u) != null ? ref._id : void 0 : void 0) === Meteor.userId();           // 92
                                                                                                                       //
    if (!(hasPermission || editAllowed && editOwn)) {                                                                  // 94
      return;                                                                                                          // 94
    }                                                                                                                  // 124
                                                                                                                       //
    if (element.classList.contains("system")) {                                                                        // 95
      return;                                                                                                          // 95
    }                                                                                                                  // 127
                                                                                                                       //
    blockEditInMinutes = RocketChat.settings.get('Message_AllowEditing_BlockEditInMinutes');                           // 97
                                                                                                                       //
    if (blockEditInMinutes != null && blockEditInMinutes !== 0) {                                                      // 98
      if (message.ts != null) {                                                                                        // 99
        msgTs = moment(message.ts);                                                                                    // 99
      }                                                                                                                // 132
                                                                                                                       //
      if (msgTs != null) {                                                                                             // 100
        currentTsDiff = moment().diff(msgTs, 'minutes');                                                               // 100
      }                                                                                                                // 135
                                                                                                                       //
      if (currentTsDiff > blockEditInMinutes) {                                                                        // 101
        return;                                                                                                        // 102
      }                                                                                                                // 98
    }                                                                                                                  // 139
                                                                                                                       //
    msg = (ref1 = this.getMessageDraft(message._id)) != null ? ref1.draft : void 0;                                    // 104
                                                                                                                       //
    if (msg == null) {                                                                                                 // 105
      msg = message.msg;                                                                                               // 105
    }                                                                                                                  // 143
                                                                                                                       //
    editingNext = this.editing.index < index;                                                                          // 107
    old_input = this.input.value;                                                                                      // 109
    this.clearEditing();                                                                                               // 111
    this.hasValue.set(true);                                                                                           // 113
    this.editing.element = element;                                                                                    // 114
    this.editing.index = index;                                                                                        // 115
    this.editing.id = message._id;                                                                                     // 116
    element.classList.add("editing");                                                                                  // 117
    this.input.classList.add("editing");                                                                               // 118
    this.$input.closest('.message-form').addClass('editing');                                                          // 119
    this.input.focus();                                                                                                // 121
                                                                                                                       //
    if (message.attachments != null && message.attachments[0].description != null) {                                   // 122
      this.input.value = message.attachments[0].description;                                                           // 123
    } else {                                                                                                           // 122
      this.input.value = msg;                                                                                          // 125
    }                                                                                                                  // 159
                                                                                                                       //
    cursor_pos = editingNext ? 0 : -1;                                                                                 // 127
    return this.$input.setCursorPosition(cursor_pos);                                                                  // 161
  };                                                                                                                   // 85
                                                                                                                       //
  ChatMessages.prototype.clearEditing = function () {                                                                  // 164
    var cursor_pos, ref;                                                                                               // 131
                                                                                                                       //
    if (this.editing.element) {                                                                                        // 131
      this.recordInputAsDraft();                                                                                       // 132
      this.editing.element.classList.remove("editing");                                                                // 134
      this.input.classList.remove("editing");                                                                          // 135
      this.$input.closest('.message-form').removeClass('editing');                                                     // 136
      delete this.editing.id;                                                                                          // 137
      delete this.editing.element;                                                                                     // 138
      delete this.editing.index;                                                                                       // 139
      this.input.value = this.editing.saved || "";                                                                     // 141
      cursor_pos = (ref = this.editing.savedCursor) != null ? ref : -1;                                                // 142
      this.$input.setCursorPosition(cursor_pos);                                                                       // 143
      return this.hasValue.set(this.input.value !== '');                                                               // 177
    } else {                                                                                                           // 131
      this.editing.saved = this.input.value;                                                                           // 147
      return this.editing.savedCursor = this.input.selectionEnd;                                                       // 180
    }                                                                                                                  // 181
  }; /**                                                                                                               // 130
     	 * * @param {string} rim room ID                                                                                 //
     	 * * @param {Element} input DOM element                                                                          //
     	 * * @param {function?} done callback                                                                            //
      */                                                                                                               //
                                                                                                                       //
  ChatMessages.prototype.send = function (rid, input, done) {                                                          // 191
    var message, msg, msgObject;                                                                                       // 156
                                                                                                                       //
    if (done == null) {                                                                                                // 193
      done = function () {};                                                                                           // 155
    }                                                                                                                  // 195
                                                                                                                       //
    if (_.trim(input.value) !== '') {                                                                                  // 156
      readMessage.enable();                                                                                            // 157
      readMessage.readNow();                                                                                           // 158
      $('.message.first-unread').removeClass('first-unread');                                                          // 159
      msg = input.value;                                                                                               // 161
      msgObject = {                                                                                                    // 162
        _id: Random.id(),                                                                                              // 162
        rid: rid,                                                                                                      // 162
        msg: msg                                                                                                       // 162
      };                                                                                                               // 162
      return RocketChat.promises.run('onClientBeforeSendMessage', msgObject).then(function (_this) {                   // 206
        return function (msgObject) {                                                                                  // 207
          var command, commandOptions, invalidCommandMsg, match, param;                                                // 168
                                                                                                                       //
          if (_this.isMessageTooLong(msgObject.msg)) {                                                                 // 168
            return toastr.error(t('Message_too_long'));                                                                // 169
          }                                                                                                            // 211
                                                                                                                       //
          _this.clearCurrentDraft();                                                                                   // 171
                                                                                                                       //
          if (_this.editing.id) {                                                                                      // 172
            _this.update(_this.editing.id, rid, msgObject.msg);                                                        // 173
                                                                                                                       //
            return;                                                                                                    // 174
          }                                                                                                            // 216
                                                                                                                       //
          KonchatNotification.removeRoomNotification(rid);                                                             // 176
          input.value = '';                                                                                            // 177
                                                                                                                       //
          if (typeof input.updateAutogrow === "function") {                                                            // 219
            input.updateAutogrow();                                                                                    // 178
          }                                                                                                            // 221
                                                                                                                       //
          _this.hasValue.set(false);                                                                                   // 179
                                                                                                                       //
          _this.stopTyping(rid);                                                                                       // 180
                                                                                                                       //
          if (msg[0] === '/') {                                                                                        // 183
            match = msg.match(/^\/([^\s]+)(?:\s+(.*))?$/m);                                                            // 184
                                                                                                                       //
            if (match != null) {                                                                                       // 185
              if (RocketChat.slashCommands.commands[match[1]]) {                                                       // 186
                commandOptions = RocketChat.slashCommands.commands[match[1]];                                          // 187
                command = match[1];                                                                                    // 188
                param = match[2] != null ? match[2] : '';                                                              // 189
                                                                                                                       //
                if (commandOptions.clientOnly) {                                                                       // 190
                  commandOptions.callback(command, param, msgObject);                                                  // 191
                } else {                                                                                               // 190
                  Meteor.call('slashCommand', {                                                                        // 193
                    cmd: command,                                                                                      // 193
                    params: param,                                                                                     // 193
                    msg: msgObject                                                                                     // 193
                  }, function (err, result) {                                                                          // 193
                    return typeof commandOptions.result === "function" ? commandOptions.result(err, result, {          // 239
                      cmd: command,                                                                                    // 193
                      params: param,                                                                                   // 193
                      msg: msgObject                                                                                   // 193
                    }) : void 0;                                                                                       // 193
                  });                                                                                                  // 193
                }                                                                                                      // 245
                                                                                                                       //
                return;                                                                                                // 194
              }                                                                                                        // 247
                                                                                                                       //
              if (!RocketChat.settings.get('Message_AllowUnrecognizedSlashCommand')) {                                 // 196
                invalidCommandMsg = {                                                                                  // 197
                  _id: Random.id(),                                                                                    // 198
                  rid: rid,                                                                                            // 199
                  ts: new Date(),                                                                                      // 200
                  msg: TAPi18n.__('No_such_command', {                                                                 // 201
                    command: match[1]                                                                                  // 201
                  }),                                                                                                  // 201
                  u: {                                                                                                 // 202
                    username: "rocketbot"                                                                              // 203
                  },                                                                                                   // 203
                  "private": true                                                                                      // 204
                };                                                                                                     // 198
                ChatMessage.upsert({                                                                                   // 205
                  _id: invalidCommandMsg._id                                                                           // 205
                }, invalidCommandMsg);                                                                                 // 205
                return;                                                                                                // 206
              }                                                                                                        // 185
            }                                                                                                          // 183
          }                                                                                                            // 267
                                                                                                                       //
          Meteor.call('sendMessage', msgObject);                                                                       // 208
          return done();                                                                                               // 269
        };                                                                                                             // 165
      }(this));                                                                                                        // 165
    } else if (this.editing.element) {                                                                                 // 156
      message = this.getMessageById(this.editing.id);                                                                  // 213
                                                                                                                       //
      if (message.attachments != null && message.attachments[0].description != null) {                                 // 214
        this.update(this.editing.id, rid, '', true);                                                                   // 215
        return;                                                                                                        // 216
      }                                                                                                                // 277
                                                                                                                       //
      this.resetToDraft(this.editing.id);                                                                              // 218
      return this.confirmDeleteMsg(message, done);                                                                     // 279
    }                                                                                                                  // 280
  };                                                                                                                   // 155
                                                                                                                       //
  ChatMessages.prototype.confirmDeleteMsg = function (message, done) {                                                 // 283
    if (done == null) {                                                                                                // 284
      done = function () {};                                                                                           // 222
    }                                                                                                                  // 286
                                                                                                                       //
    if (RocketChat.MessageTypes.isSystemMessage(message)) {                                                            // 223
      return;                                                                                                          // 223
    }                                                                                                                  // 289
                                                                                                                       //
    swal({                                                                                                             // 224
      title: t('Are_you_sure'),                                                                                        // 225
      text: t('You_will_not_be_able_to_recover'),                                                                      // 226
      type: 'warning',                                                                                                 // 227
      showCancelButton: true,                                                                                          // 228
      confirmButtonColor: '#DD6B55',                                                                                   // 229
      confirmButtonText: t('Yes_delete_it'),                                                                           // 230
      cancelButtonText: t('Cancel'),                                                                                   // 231
      closeOnConfirm: false,                                                                                           // 232
      html: false                                                                                                      // 233
    }, function (_this) {                                                                                              // 224
      return function () {                                                                                             // 301
        swal({                                                                                                         // 235
          title: t('Deleted'),                                                                                         // 236
          text: t('Your_entry_has_been_deleted'),                                                                      // 237
          type: 'success',                                                                                             // 238
          timer: 1000,                                                                                                 // 239
          showConfirmButton: false                                                                                     // 240
        });                                                                                                            // 236
                                                                                                                       //
        if (_this.editing.id === message._id) {                                                                        // 242
          _this.clearEditing(message);                                                                                 // 243
        }                                                                                                              // 311
                                                                                                                       //
        _this.deleteMsg(message);                                                                                      // 244
                                                                                                                       //
        _this.$input.focus();                                                                                          // 246
                                                                                                                       //
        return done();                                                                                                 // 314
      };                                                                                                               // 234
    }(this));                                                                                                          // 234
    return $('.sweet-alert').addClass('visible');                                                                      // 317
  };                                                                                                                   // 222
                                                                                                                       //
  ChatMessages.prototype.deleteMsg = function (message) {                                                              // 320
    var blockDeleteInMinutes, currentTsDiff, msgTs;                                                                    // 253
    blockDeleteInMinutes = RocketChat.settings.get('Message_AllowDeleting_BlockDeleteInMinutes');                      // 253
                                                                                                                       //
    if (blockDeleteInMinutes != null && blockDeleteInMinutes !== 0) {                                                  // 254
      if (message.ts != null) {                                                                                        // 255
        msgTs = moment(message.ts);                                                                                    // 255
      }                                                                                                                // 326
                                                                                                                       //
      if (msgTs != null) {                                                                                             // 256
        currentTsDiff = moment().diff(msgTs, 'minutes');                                                               // 256
      }                                                                                                                // 329
                                                                                                                       //
      if (currentTsDiff > blockDeleteInMinutes) {                                                                      // 257
        toastr.error(t('Message_deleting_blocked'));                                                                   // 258
        return;                                                                                                        // 259
      }                                                                                                                // 254
    }                                                                                                                  // 334
                                                                                                                       //
    return Meteor.call('deleteMessage', {                                                                              // 335
      _id: message._id                                                                                                 // 261
    }, function (error, result) {                                                                                      // 261
      if (error) {                                                                                                     // 262
        return handleError(error);                                                                                     // 263
      }                                                                                                                // 340
    });                                                                                                                // 261
  };                                                                                                                   // 252
                                                                                                                       //
  ChatMessages.prototype.pinMsg = function (message) {                                                                 // 344
    message.pinned = true;                                                                                             // 266
    return Meteor.call('pinMessage', message, function (error, result) {                                               // 346
      if (error) {                                                                                                     // 268
        return handleError(error);                                                                                     // 269
      }                                                                                                                // 349
    });                                                                                                                // 267
  };                                                                                                                   // 265
                                                                                                                       //
  ChatMessages.prototype.unpinMsg = function (message) {                                                               // 353
    message.pinned = false;                                                                                            // 272
    return Meteor.call('unpinMessage', message, function (error, result) {                                             // 355
      if (error) {                                                                                                     // 274
        return handleError(error);                                                                                     // 275
      }                                                                                                                // 358
    });                                                                                                                // 273
  };                                                                                                                   // 271
                                                                                                                       //
  ChatMessages.prototype.update = function (id, rid, msg, isDescription) {                                             // 362
    if (_.trim(msg) !== '' || isDescription === true) {                                                                // 278
      Meteor.call('updateMessage', {                                                                                   // 279
        _id: id,                                                                                                       // 279
        msg: msg,                                                                                                      // 279
        rid: rid                                                                                                       // 279
      });                                                                                                              // 279
      this.clearEditing();                                                                                             // 280
      return this.stopTyping(rid);                                                                                     // 370
    }                                                                                                                  // 371
  };                                                                                                                   // 277
                                                                                                                       //
  ChatMessages.prototype.startTyping = function (rid, input) {                                                         // 374
    if (_.trim(input.value) !== '') {                                                                                  // 284
      return MsgTyping.start(rid);                                                                                     // 376
    } else {                                                                                                           // 284
      return MsgTyping.stop(rid);                                                                                      // 378
    }                                                                                                                  // 379
  };                                                                                                                   // 283
                                                                                                                       //
  ChatMessages.prototype.stopTyping = function (rid) {                                                                 // 382
    return MsgTyping.stop(rid);                                                                                        // 383
  };                                                                                                                   // 289
                                                                                                                       //
  ChatMessages.prototype.bindEvents = function () {                                                                    // 386
    var ref;                                                                                                           // 293
                                                                                                                       //
    if ((ref = this.wrapper) != null ? ref.length : void 0) {                                                          // 293
      return $(".input-message").autogrow({                                                                            // 389
        postGrowCallback: function (_this) {                                                                           // 295
          return function () {                                                                                         // 391
            return _this.resize();                                                                                     // 392
          };                                                                                                           // 295
        }(this)                                                                                                        // 295
      });                                                                                                              // 295
    }                                                                                                                  // 396
  };                                                                                                                   // 292
                                                                                                                       //
  ChatMessages.prototype.tryCompletion = function (input) {                                                            // 399
    var re, user, value;                                                                                               // 299
    value = input.value.match(/[^\s]+$/);                                                                              // 299
                                                                                                                       //
    if ((value != null ? value.length : void 0) > 0) {                                                                 // 300
      value = value[0];                                                                                                // 301
      re = new RegExp(value, 'i');                                                                                     // 303
      user = Meteor.users.findOne({                                                                                    // 305
        username: re                                                                                                   // 305
      });                                                                                                              // 305
                                                                                                                       //
      if (user != null) {                                                                                              // 306
        return input.value = input.value.replace(value, "@" + user.username + " ");                                    // 409
      }                                                                                                                // 300
    }                                                                                                                  // 411
  };                                                                                                                   // 298
                                                                                                                       //
  ChatMessages.prototype.keyup = function (rid, event) {                                                               // 414
    var i, input, j, k, keyCodes, l;                                                                                   // 310
    input = event.currentTarget;                                                                                       // 310
    k = event.which;                                                                                                   // 311
    keyCodes = [13, 20, 16, 9, 27, 17, 91, 19, 18, 93, 45, 34, 35, 144, 145];                                          // 312
                                                                                                                       //
    for (i = j = 35; j <= 40; i = ++j) {                                                                               // 329
      keyCodes.push(i);                                                                                                // 329
    }                                                                                                                  // 329
                                                                                                                       //
    for (i = l = 112; l <= 123; i = ++l) {                                                                             // 330
      keyCodes.push(i);                                                                                                // 330
    }                                                                                                                  // 330
                                                                                                                       //
    if (indexOf.call(keyCodes, k) < 0) {                                                                               // 332
      this.startTyping(rid, input);                                                                                    // 333
    }                                                                                                                  // 427
                                                                                                                       //
    return this.hasValue.set(input.value !== '');                                                                      // 428
  };                                                                                                                   // 309
                                                                                                                       //
  ChatMessages.prototype.keydown = function (rid, event) {                                                             // 431
    var $input, cursor_pos, input, k, record, ref, ref1, ref2, ref3, ref4, sendOnEnter;                                // 338
    sendOnEnter = (ref = Meteor.user()) != null ? (ref1 = ref.settings) != null ? (ref2 = ref1.preferences) != null ? ref2.sendOnEnter : void 0 : void 0 : void 0;
    input = event.currentTarget;                                                                                       // 339
    $input = $(input);                                                                                                 // 340
    k = event.which;                                                                                                   // 341
    this.resize(input);                                                                                                // 342
                                                                                                                       //
    if (k === 13) {                                                                                                    // 344
      if (sendOnEnter == null || sendOnEnter === 'normal' || sendOnEnter === 'desktop' && Meteor.Device.isDesktop()) {
        if (!event.shiftKey && !event.ctrlKey && !event.altKey && !event.metaKey) {                                    // 346
          event.preventDefault();                                                                                      // 347
          event.stopPropagation();                                                                                     // 348
          this.send(rid, input);                                                                                       // 349
          return;                                                                                                      // 350
        } else if (!event.shiftKey) {                                                                                  // 346
          return input.value += '\n';                                                                                  // 352
        }                                                                                                              // 345
      } else if (sendOnEnter === 'alternative') {                                                                      // 345
        if (event.shiftKey || event.ctrlKey || event.altKey || event.metaKey) {                                        // 354
          event.preventDefault();                                                                                      // 355
          event.stopPropagation();                                                                                     // 356
          this.send(rid, input);                                                                                       // 357
          return;                                                                                                      // 358
        }                                                                                                              // 353
      }                                                                                                                // 344
    }                                                                                                                  // 456
                                                                                                                       //
    if (k === 9) {                                                                                                     // 362
      event.preventDefault();                                                                                          // 363
      event.stopPropagation();                                                                                         // 364
      this.tryCompletion(input);                                                                                       // 365
    }                                                                                                                  // 461
                                                                                                                       //
    if (k === 27) {                                                                                                    // 367
      if (this.editing.index != null) {                                                                                // 368
        record = this.getMessageDraft(this.editing.id);                                                                // 369
                                                                                                                       //
        if (!this.resetToDraft(this.editing.id)) {                                                                     // 372
          this.clearCurrentDraft();                                                                                    // 373
          this.clearEditing();                                                                                         // 374
        }                                                                                                              // 468
                                                                                                                       //
        event.preventDefault();                                                                                        // 376
        event.stopPropagation();                                                                                       // 377
      }                                                                                                                // 367
    } else if (k === 38 || k === 40) {                                                                                 // 367
      if (event.shiftKey) {                                                                                            // 380
        return true;                                                                                                   // 380
      }                                                                                                                // 475
                                                                                                                       //
      cursor_pos = input.selectionEnd;                                                                                 // 382
                                                                                                                       //
      if (k === 38) {                                                                                                  // 384
        if (cursor_pos === 0) {                                                                                        // 385
          this.toPrevMessage();                                                                                        // 386
        } else if (!event.altKey) {                                                                                    // 385
          return true;                                                                                                 // 388
        }                                                                                                              // 482
                                                                                                                       //
        if (event.altKey) {                                                                                            // 390
          this.$input.setCursorPosition(0);                                                                            // 390
        }                                                                                                              // 384
      } else {                                                                                                         // 384
        if (cursor_pos === input.value.length) {                                                                       // 393
          this.toNextMessage();                                                                                        // 394
        } else if (!event.altKey) {                                                                                    // 393
          return true;                                                                                                 // 396
        }                                                                                                              // 491
                                                                                                                       //
        if (event.altKey) {                                                                                            // 398
          this.$input.setCursorPosition(-1);                                                                           // 398
        }                                                                                                              // 384
      }                                                                                                                // 495
                                                                                                                       //
      return false;                                                                                                    // 400
    } else if (k === 75 && ((typeof navigator !== "undefined" && navigator !== null ? (ref3 = navigator.platform) != null ? ref3.indexOf('Mac') : void 0 : void 0) !== -1 && event.metaKey && event.shiftKey || (typeof navigator !== "undefined" && navigator !== null ? (ref4 = navigator.platform) != null ? ref4.indexOf('Mac') : void 0 : void 0) === -1 && event.ctrlKey && event.shiftKey)) {
      return RoomHistoryManager.clear(rid);                                                                            // 498
    }                                                                                                                  // 499
  };                                                                                                                   // 337
                                                                                                                       //
  ChatMessages.prototype.valueChanged = function (rid, event) {                                                        // 502
    if (this.input.value.length === 1) {                                                                               // 407
      return this.determineInputDirection();                                                                           // 504
    }                                                                                                                  // 505
  };                                                                                                                   // 406
                                                                                                                       //
  ChatMessages.prototype.determineInputDirection = function () {                                                       // 508
    return this.input.dir = this.isMessageRtl(this.input.value) ? 'rtl' : 'ltr';                                       // 509
  };                                                                                                                   // 410
                                                                                                                       //
  ChatMessages.prototype.isMessageRtl = function (message) {                                                           // 512
    var ltrChars, rtlChars, rtlDirCheck;                                                                               // 415
    ltrChars = "A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u0300-\u0590\u0800-\u1FFF" + "\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF";
    rtlChars = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC";                                                              // 416
    rtlDirCheck = new RegExp("^[^" + ltrChars + "]*[" + rtlChars + "]");                                               // 417
    return rtlDirCheck.test(message);                                                                                  // 419
  };                                                                                                                   // 414
                                                                                                                       //
  ChatMessages.prototype.isMessageTooLong = function (message) {                                                       // 520
    return (message != null ? message.length : void 0) > this.messageMaxSize;                                          // 521
  };                                                                                                                   // 421
                                                                                                                       //
  ChatMessages.prototype.isEmpty = function () {                                                                       // 524
    return !this.hasValue.get();                                                                                       // 425
  };                                                                                                                   // 424
                                                                                                                       //
  return ChatMessages;                                                                                                 // 528
}();                                                                                                                   // 530
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"collections.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/collections.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _this = this;                                                                                                      //
                                                                                                                       //
this.ChatMessage = new Mongo.Collection(null);                                                                         // 1
this.CachedChatRoom = new RocketChat.CachedCollection({                                                                // 2
	name: 'rooms'                                                                                                         // 2
});                                                                                                                    // 2
this.ChatRoom = this.CachedChatRoom.collection;                                                                        // 3
this.CachedChatSubscription = new RocketChat.CachedCollection({                                                        // 5
	name: 'subscriptions'                                                                                                 // 5
});                                                                                                                    // 5
this.ChatSubscription = this.CachedChatSubscription.collection;                                                        // 6
this.UserRoles = new Mongo.Collection(null);                                                                           // 7
this.RoomRoles = new Mongo.Collection(null);                                                                           // 8
this.UserAndRoom = new Mongo.Collection(null);                                                                         // 9
this.CachedChannelList = new Mongo.Collection(null);                                                                   // 10
this.CachedUserList = new Mongo.Collection(null);                                                                      // 11
RocketChat.models.Users = _.extend({}, RocketChat.models.Users, Meteor.users);                                         // 13
RocketChat.models.Subscriptions = _.extend({}, RocketChat.models.Subscriptions, this.ChatSubscription);                // 14
RocketChat.models.Rooms = _.extend({}, RocketChat.models.Rooms, this.ChatRoom);                                        // 15
RocketChat.models.Messages = _.extend({}, RocketChat.models.Messages, this.ChatMessage);                               // 16
Meteor.startup(function () {                                                                                           // 18
	Tracker.autorun(function () {                                                                                         // 19
		if (!Meteor.userId() && RocketChat.settings.get('Accounts_AllowAnonymousRead') === true) {                           // 20
			_this.CachedChatRoom.init();                                                                                        // 21
                                                                                                                       //
			_this.CachedChatSubscription.ready.set(true);                                                                       // 22
		}                                                                                                                    // 23
	});                                                                                                                   // 24
});                                                                                                                    // 25
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"customEventPolyfill.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/customEventPolyfill.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
  function CustomEvent(event, params) {                                                                                // 2
    params = params || {                                                                                               // 3
      bubbles: false,                                                                                                  // 3
      cancelable: false,                                                                                               // 3
      detail: undefined                                                                                                // 3
    };                                                                                                                 // 3
    var evt = document.createEvent('CustomEvent');                                                                     // 4
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);                                      // 5
    return evt;                                                                                                        // 6
  }                                                                                                                    // 7
                                                                                                                       //
  CustomEvent.prototype = window.Event.prototype;                                                                      // 9
  window.CustomEvent = CustomEvent;                                                                                    // 11
})();                                                                                                                  // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"fileUpload.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/fileUpload.coffee.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var formatBytes, getUploadPreview, readAsArrayBuffer, readAsDataURL;                                                   // 1
                                                                                                                       //
readAsDataURL = function (file, callback) {                                                                            // 1
  var reader;                                                                                                          // 2
  reader = new FileReader();                                                                                           // 2
                                                                                                                       //
  reader.onload = function (ev) {                                                                                      // 3
    return callback(ev.target.result, file);                                                                           // 7
  };                                                                                                                   // 3
                                                                                                                       //
  return reader.readAsDataURL(file);                                                                                   // 9
};                                                                                                                     // 1
                                                                                                                       //
getUploadPreview = function (file, callback) {                                                                         // 8
  if (file.file.size > 10 * 1000000) {                                                                                 // 10
    return callback(file, null);                                                                                       // 14
  } else if (file.file.type == null) {                                                                                 // 10
    return callback(file, null);                                                                                       // 16
  } else {                                                                                                             // 12
    if (file.file.type.indexOf('audio') > -1 || file.file.type.indexOf('video') > -1 || file.file.type.indexOf('image') > -1) {
      file.type = file.file.type.split('/')[0];                                                                        // 16
      return readAsDataURL(file.file, function (content) {                                                             // 20
        return callback(file, content);                                                                                // 21
      });                                                                                                              // 18
    } else {                                                                                                           // 15
      return callback(file, null);                                                                                     // 24
    }                                                                                                                  // 12
  }                                                                                                                    // 26
};                                                                                                                     // 8
                                                                                                                       //
formatBytes = function (bytes, decimals) {                                                                             // 23
  var dm, i, k, sizes;                                                                                                 // 24
                                                                                                                       //
  if (bytes === 0) {                                                                                                   // 24
    return '0 Bytes';                                                                                                  // 25
  }                                                                                                                    // 33
                                                                                                                       //
  k = 1000;                                                                                                            // 27
  dm = decimals + 1 || 3;                                                                                              // 28
  sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];                                                                     // 30
  i = Math.floor(Math.log(bytes) / Math.log(k));                                                                       // 39
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];                                            // 38
};                                                                                                                     // 23
                                                                                                                       //
readAsArrayBuffer = function (file, callback) {                                                                        // 43
  var reader;                                                                                                          // 44
  reader = new FileReader();                                                                                           // 44
                                                                                                                       //
  reader.onload = function (ev) {                                                                                      // 45
    return callback(ev.target.result, file);                                                                           // 45
  };                                                                                                                   // 45
                                                                                                                       //
  return reader.readAsArrayBuffer(file);                                                                               // 47
};                                                                                                                     // 43
                                                                                                                       //
this.fileUpload = function (files) {                                                                                   // 51
  var consume, roomId;                                                                                                 // 52
  roomId = Session.get('openedRoom');                                                                                  // 52
  files = [].concat(files);                                                                                            // 53
                                                                                                                       //
  consume = function () {                                                                                              // 55
    var file;                                                                                                          // 56
    file = files.pop();                                                                                                // 56
                                                                                                                       //
    if (file == null) {                                                                                                // 57
      swal.close();                                                                                                    // 58
      return;                                                                                                          // 59
    }                                                                                                                  // 60
                                                                                                                       //
    if (!RocketChat.fileUploadIsValidContentType(file.file.type)) {                                                    // 61
      swal({                                                                                                           // 62
        title: t('FileUpload_MediaType_NotAccepted'),                                                                  // 63
        text: file.file.type || "*." + s.strRightBack(file.file.name, '.'),                                            // 64
        type: 'error',                                                                                                 // 65
        timer: 3000                                                                                                    // 66
      });                                                                                                              // 63
      return;                                                                                                          // 67
    }                                                                                                                  // 69
                                                                                                                       //
    if (file.file.size === 0) {                                                                                        // 69
      swal({                                                                                                           // 70
        title: t('FileUpload_File_Empty'),                                                                             // 71
        type: 'error',                                                                                                 // 72
        timer: 1000                                                                                                    // 73
      });                                                                                                              // 71
      return;                                                                                                          // 74
    }                                                                                                                  // 77
                                                                                                                       //
    return getUploadPreview(file, function (file, preview) {                                                           // 78
      var fileSize, text;                                                                                              // 77
      text = '';                                                                                                       // 77
                                                                                                                       //
      if (file.type === 'audio') {                                                                                     // 79
        text = "<div class='upload-preview'>\n	<audio  style=\"width: 100%;\" controls=\"controls\">\n		<source src=\"" + preview + "\" type=\"audio/wav\">\n		Your browser does not support the audio element.\n	</audio>\n</div>\n<div class='upload-preview-title'>\n	<input id='file-name' style='display: inherit;' value='" + Handlebars._escape(file.name) + "' placeholder='" + t("Upload_file_name") + "'>\n	<input id='file-description' style='display: inherit;' value='' placeholder='" + t("Upload_file_description") + "'>\n</div>";
      } else if (file.type === 'video') {                                                                              // 79
        text = "<div class='upload-preview'>\n	<video  style=\"width: 100%;\" controls=\"controls\">\n		<source src=\"" + preview + "\" type=\"video/webm\">\n		Your browser does not support the video element.\n	</video>\n</div>\n<div class='upload-preview-title'>\n	<input id='file-name' style='display: inherit;' value='" + Handlebars._escape(file.name) + "' placeholder='" + t("Upload_file_name") + "'>\n	<input id='file-description' style='display: inherit;' value='' placeholder='" + t("Upload_file_description") + "'>\n</div>";
      } else if (file.type === 'image') {                                                                              // 92
        text = "<div class='upload-preview'>\n	<div class='upload-preview-file' style='background-image: url(" + preview + ")'></div>\n</div>\n<div class='upload-preview-title'>\n	<input id='file-name' style='display: inherit;' value='" + Handlebars._escape(file.name) + "' placeholder='" + t("Upload_file_name") + "'>\n	<input id='file-description' style='display: inherit;' value='' placeholder='" + t("Upload_file_description") + "'>\n</div>";
      } else {                                                                                                         // 105
        fileSize = formatBytes(file.file.size);                                                                        // 116
        text = "<div class='upload-preview'>\n	<div>" + Handlebars._escape(file.name) + " - " + fileSize + "</div>\n</div>\n<div class='upload-preview-title'>\n	<input id='file-name' style='display: inherit;' value='" + Handlebars._escape(file.name) + "' placeholder='" + t("Upload_file_name") + "'>\n	<input id='file-description' style='display: inherit;' value='' placeholder='" + t("Upload_file_description") + "'>\n</div>";
      }                                                                                                                // 90
                                                                                                                       //
      return swal({                                                                                                    // 91
        title: t('Upload_file_question'),                                                                              // 129
        text: text,                                                                                                    // 130
        showCancelButton: true,                                                                                        // 131
        closeOnConfirm: false,                                                                                         // 132
        closeOnCancel: false,                                                                                          // 133
        confirmButtonText: t('Send'),                                                                                  // 134
        cancelButtonText: t('Cancel'),                                                                                 // 135
        html: true                                                                                                     // 136
      }, function (isConfirm) {                                                                                        // 129
        var record, upload, uploading;                                                                                 // 138
        consume();                                                                                                     // 138
                                                                                                                       //
        if (isConfirm !== true) {                                                                                      // 139
          return;                                                                                                      // 140
        }                                                                                                              // 105
                                                                                                                       //
        record = {                                                                                                     // 142
          name: document.getElementById('file-name').value || file.name || file.file.name,                             // 143
          size: file.file.size,                                                                                        // 144
          type: file.file.type,                                                                                        // 145
          rid: roomId,                                                                                                 // 146
          description: document.getElementById('file-description').value                                               // 147
        };                                                                                                             // 143
        upload = fileUploadHandler(record, file.file);                                                                 // 149
        uploading = Session.get('uploading') || [];                                                                    // 151
        uploading.push({                                                                                               // 152
          id: upload.id,                                                                                               // 153
          name: upload.getFileName(),                                                                                  // 154
          percentage: 0                                                                                                // 155
        });                                                                                                            // 153
        Session.set('uploading', uploading);                                                                           // 157
                                                                                                                       //
        upload.onProgress = function (progress) {                                                                      // 159
          var item;                                                                                                    // 160
          uploading = Session.get('uploading');                                                                        // 160
          item = _.findWhere(uploading, {                                                                              // 162
            id: upload.id                                                                                              // 162
          });                                                                                                          // 162
                                                                                                                       //
          if (item != null) {                                                                                          // 163
            item.percentage = Math.round(progress * 100) || 0;                                                         // 164
            return Session.set('uploading', uploading);                                                                // 129
          }                                                                                                            // 130
        };                                                                                                             // 159
                                                                                                                       //
        upload.start();                                                                                                // 167
        return Tracker.autorun(function (c) {                                                                          // 133
          var cancel, item;                                                                                            // 170
          cancel = Session.get("uploading-cancel-" + upload.id);                                                       // 170
                                                                                                                       //
          if (cancel) {                                                                                                // 171
            upload.stop();                                                                                             // 172
            c.stop();                                                                                                  // 173
            uploading = Session.get('uploading');                                                                      // 175
                                                                                                                       //
            if (uploading != null) {                                                                                   // 176
              item = _.findWhere(uploading, {                                                                          // 177
                id: upload.id                                                                                          // 177
              });                                                                                                      // 177
                                                                                                                       //
              if (item != null) {                                                                                      // 178
                item.percentage = 0;                                                                                   // 179
              }                                                                                                        // 146
                                                                                                                       //
              Session.set('uploading', uploading);                                                                     // 180
            }                                                                                                          // 148
                                                                                                                       //
            return Meteor.setTimeout(function () {                                                                     // 149
              uploading = Session.get('uploading');                                                                    // 183
                                                                                                                       //
              if (uploading != null) {                                                                                 // 184
                item = _.findWhere(uploading, {                                                                        // 185
                  id: upload.id                                                                                        // 185
                });                                                                                                    // 185
                return Session.set('uploading', _.without(uploading, item));                                           // 155
              }                                                                                                        // 156
            }, 1000);                                                                                                  // 182
          }                                                                                                            // 158
        });                                                                                                            // 169
      });                                                                                                              // 128
    });                                                                                                                // 76
  };                                                                                                                   // 55
                                                                                                                       //
  return consume();                                                                                                    // 163
};                                                                                                                     // 51
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"fireEvent.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/fireEvent.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
window.fireGlobalEvent = function () {                                                                                 // 1
	function _fireGlobalEvent(eventName, params) {                                                                        // 1
		window.dispatchEvent(new CustomEvent(eventName, {                                                                    // 2
			detail: params                                                                                                      // 2
		}));                                                                                                                 // 2
		Tracker.autorun(function (computation) {                                                                             // 4
			var enabled = RocketChat.settings.get('Iframe_Integration_send_enable');                                            // 5
                                                                                                                       //
			if (enabled === undefined) {                                                                                        // 6
				return;                                                                                                            // 7
			}                                                                                                                   // 8
                                                                                                                       //
			computation.stop();                                                                                                 // 9
                                                                                                                       //
			if (enabled) {                                                                                                      // 10
				parent.postMessage({                                                                                               // 11
					eventName: eventName,                                                                                             // 12
					data: params                                                                                                      // 13
				}, RocketChat.settings.get('Iframe_Integration_send_target_origin'));                                              // 11
			}                                                                                                                   // 15
		});                                                                                                                  // 16
	}                                                                                                                     // 17
                                                                                                                       //
	return _fireGlobalEvent;                                                                                              // 1
}();                                                                                                                   // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"iframeCommands.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/iframeCommands.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _typeof2 = require("babel-runtime/helpers/typeof");                                                                //
                                                                                                                       //
var _typeof3 = _interopRequireDefault(_typeof2);                                                                       //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
var commands = {                                                                                                       // 1
	go: function (data) {                                                                                                 // 2
		if (typeof data.path !== 'string' || data.path.trim().length === 0) {                                                // 3
			return console.error('`path` not defined');                                                                         // 4
		}                                                                                                                    // 5
                                                                                                                       //
		FlowRouter.go(data.path, null, FlowRouter.current().queryParams);                                                    // 6
	},                                                                                                                    // 7
	'set-user-status': function (data) {                                                                                  // 10
		AccountBox.setStatus(data.status);                                                                                   // 11
	},                                                                                                                    // 12
	'call-custom-oauth-login': function (data, event) {                                                                   // 14
		var customOAuthCallback = function (response) {                                                                      // 15
			event.source.postMessage({                                                                                          // 16
				event: 'custom-oauth-callback',                                                                                    // 17
				response: response                                                                                                 // 18
			}, event.origin);                                                                                                   // 16
		};                                                                                                                   // 20
                                                                                                                       //
		var siteUrl = Meteor.settings.Site_Url + "/";                                                                        // 22
                                                                                                                       //
		if (typeof data.redirectUrl !== 'string' || !data.redirectUrl.startsWith(siteUrl)) {                                 // 23
			data.redirectUrl = null;                                                                                            // 24
		}                                                                                                                    // 25
                                                                                                                       //
		if (typeof data.service === 'string' && window.ServiceConfiguration) {                                               // 27
			var customOauth = ServiceConfiguration.configurations.findOne({                                                     // 28
				service: data.service                                                                                              // 28
			});                                                                                                                 // 28
                                                                                                                       //
			if (customOauth) {                                                                                                  // 30
				var customLoginWith = Meteor["loginWith" + _.capitalize(customOauth.service, true)];                               // 31
                                                                                                                       //
				var customRedirectUri = data.redirectUrl || siteUrl;                                                               // 32
				customLoginWith.call(Meteor, {                                                                                     // 33
					'redirectUrl': customRedirectUri                                                                                  // 33
				}, customOAuthCallback);                                                                                           // 33
			}                                                                                                                   // 34
		}                                                                                                                    // 35
	},                                                                                                                    // 36
	'login-with-token': function (data) {                                                                                 // 38
		if (typeof data.token === 'string') {                                                                                // 39
			Meteor.loginWithToken(data.token, function () {                                                                     // 40
				console.log('Iframe command [login-with-token]: result', arguments);                                               // 41
			});                                                                                                                 // 42
		}                                                                                                                    // 43
	},                                                                                                                    // 44
	'logout': function () {                                                                                               // 46
		var user = Meteor.user();                                                                                            // 47
		Meteor.logout(function () {                                                                                          // 48
			RocketChat.callbacks.run('afterLogoutCleanUp', user);                                                               // 49
			Meteor.call('logoutCleanUp', user);                                                                                 // 50
			return FlowRouter.go('home');                                                                                       // 51
		});                                                                                                                  // 52
	}                                                                                                                     // 53
};                                                                                                                     // 1
window.addEventListener('message', function (e) {                                                                      // 56
	if (RocketChat.settings.get('Iframe_Integration_receive_enable') !== true) {                                          // 57
		return;                                                                                                              // 58
	}                                                                                                                     // 59
                                                                                                                       //
	if ((0, _typeof3.default)(e.data) !== 'object' || typeof e.data.externalCommand !== 'string') {                       // 61
		return;                                                                                                              // 62
	}                                                                                                                     // 63
                                                                                                                       //
	var origins = RocketChat.settings.get('Iframe_Integration_receive_origin');                                           // 65
                                                                                                                       //
	if (origins !== '*' && origins.split(',').indexOf(e.origin) === -1) {                                                 // 67
		return console.error('Origin not allowed', e.origin);                                                                // 68
	}                                                                                                                     // 69
                                                                                                                       //
	var command = commands[e.data.externalCommand];                                                                       // 71
                                                                                                                       //
	if (command) {                                                                                                        // 72
		command(e.data, e);                                                                                                  // 73
	}                                                                                                                     // 74
});                                                                                                                    // 75
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"menu.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/menu.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
/* globals isRtl */this.menu = new (function () {                                                                      // 1
	function _class() {                                                                                                   // 3
		var _this = this;                                                                                                    // 3
                                                                                                                       //
		(0, _classCallCheck3.default)(this, _class);                                                                         // 3
		this.updateUnreadBars = _.throttle(function () {                                                                     // 4
			if (_this.list == null) {                                                                                           // 5
				return;                                                                                                            // 6
			}                                                                                                                   // 7
                                                                                                                       //
			var listOffset = _this.list.offset();                                                                               // 8
                                                                                                                       //
			var listHeight = _this.list.height();                                                                               // 9
                                                                                                                       //
			var showTop = false;                                                                                                // 10
			var showBottom = false;                                                                                             // 11
			$('li.has-alert').each(function () {                                                                                // 12
				if ($(this).offset().top < listOffset.top - $(this).height()) {                                                    // 13
					showTop = true;                                                                                                   // 14
				}                                                                                                                  // 15
                                                                                                                       //
				if ($(this).offset().top > listOffset.top + listHeight) {                                                          // 16
					return showBottom = true;                                                                                         // 17
				}                                                                                                                  // 18
			});                                                                                                                 // 19
                                                                                                                       //
			if (showTop === true) {                                                                                             // 20
				$('.top-unread-rooms').removeClass('hidden');                                                                      // 21
			} else {                                                                                                            // 22
				$('.top-unread-rooms').addClass('hidden');                                                                         // 23
			}                                                                                                                   // 24
                                                                                                                       //
			if (showBottom === true) {                                                                                          // 25
				return $('.bottom-unread-rooms').removeClass('hidden');                                                            // 26
			} else {                                                                                                            // 27
				return $('.bottom-unread-rooms').addClass('hidden');                                                               // 28
			}                                                                                                                   // 29
		}, 200);                                                                                                             // 30
	}                                                                                                                     // 31
                                                                                                                       //
	_class.prototype.init = function () {                                                                                 // 2
		function init() {                                                                                                    // 2
			this.mainContent = $('.main-content');                                                                              // 33
			this.list = $('.rooms-list');                                                                                       // 34
			Session.set('isMenuOpen', false);                                                                                   // 35
		}                                                                                                                    // 36
                                                                                                                       //
		return init;                                                                                                         // 2
	}();                                                                                                                  // 2
                                                                                                                       //
	_class.prototype.isOpen = function () {                                                                               // 2
		function isOpen() {                                                                                                  // 2
			return Session.get('isMenuOpen');                                                                                   // 39
		}                                                                                                                    // 40
                                                                                                                       //
		return isOpen;                                                                                                       // 2
	}();                                                                                                                  // 2
                                                                                                                       //
	_class.prototype.open = function () {                                                                                 // 2
		function open() {                                                                                                    // 2
			Session.set('isMenuOpen', true);                                                                                    // 43
			this.mainContent && this.mainContent.css('transform', "translateX(" + (isRtl(localStorage.getItem('userLanguage')) ? '-' : '') + "260px)");
		}                                                                                                                    // 45
                                                                                                                       //
		return open;                                                                                                         // 2
	}();                                                                                                                  // 2
                                                                                                                       //
	_class.prototype.close = function () {                                                                                // 2
		function close() {                                                                                                   // 2
			Session.set('isMenuOpen', false);                                                                                   // 48
			this.mainContent && this.mainContent.css('transform', 'translateX(0)');                                             // 49
		}                                                                                                                    // 50
                                                                                                                       //
		return close;                                                                                                        // 2
	}();                                                                                                                  // 2
                                                                                                                       //
	_class.prototype.toggle = function () {                                                                               // 2
		function toggle() {                                                                                                  // 2
			return this.isOpen() ? this.close() : this.open();                                                                  // 53
		}                                                                                                                    // 54
                                                                                                                       //
		return toggle;                                                                                                       // 2
	}();                                                                                                                  // 2
                                                                                                                       //
	return _class;                                                                                                        // 2
}())();                                                                                                                // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"modal.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/modal.coffee.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.Modal = function () {                                                                                             // 1
  var check, checkFooter, close, focus, init, keydown, open, self, setContent, startListening, stopListening, win;     // 3
  self = {};                                                                                                           // 3
  win = $(window);                                                                                                     // 4
                                                                                                                       //
  focus = function () {                                                                                                // 9
    var input;                                                                                                         // 10
                                                                                                                       //
    if (self.$modal) {                                                                                                 // 10
      input = self.$modal.find("input[type='text']");                                                                  // 11
                                                                                                                       //
      if (input.length) {                                                                                              // 12
        return input.get(0).focus();                                                                                   // 10
      }                                                                                                                // 10
    }                                                                                                                  // 12
  };                                                                                                                   // 9
                                                                                                                       //
  keydown = function (e) {                                                                                             // 13
    var k;                                                                                                             // 14
    k = e.which;                                                                                                       // 14
                                                                                                                       //
    if (k === 27) {                                                                                                    // 15
      e.preventDefault();                                                                                              // 16
      e.stopImmediatePropagation();                                                                                    // 17
      return close();                                                                                                  // 20
    }                                                                                                                  // 21
  };                                                                                                                   // 13
                                                                                                                       //
  check = function () {                                                                                                // 20
    if (self.$modal && self.$modal.length) {                                                                           // 21
      if (win.height() < self.$window.outerHeight() + win.height() * 0.10) {                                           // 22
        if (!self.$modal.hasClass("fluid")) {                                                                          // 23
          return self.$modal.addClass("fluid");                                                                        // 27
        }                                                                                                              // 22
      }                                                                                                                // 21
    }                                                                                                                  // 30
  };                                                                                                                   // 20
                                                                                                                       //
  open = function (template, params) {                                                                                 // 29
    params = params || {};                                                                                             // 30
    RocketChat.animeBack(self.$modal, function () {                                                                    // 31
      return focus();                                                                                                  // 35
    });                                                                                                                // 31
    self.opened = 1;                                                                                                   // 33
                                                                                                                       //
    if (params.listening) {                                                                                            // 34
      startListening();                                                                                                // 34
    }                                                                                                                  // 40
                                                                                                                       //
    if (template != null) {                                                                                            // 35
      setContent(template, params.data);                                                                               // 35
    }                                                                                                                  // 43
                                                                                                                       //
    self.$modal.addClass("opened");                                                                                    // 36
    self.$modal.removeClass("fluid");                                                                                  // 37
    return setTimeout(function () {                                                                                    // 46
      return focus();                                                                                                  // 47
    }, 200);                                                                                                           // 38
  };                                                                                                                   // 29
                                                                                                                       //
  close = function () {                                                                                                // 42
    self.$modal.addClass("closed");                                                                                    // 43
    win.unbind("keydown.modal");                                                                                       // 44
    return setTimeout(function () {                                                                                    // 53
      self.opened = 0;                                                                                                 // 47
      stopListening();                                                                                                 // 48
      return self.$modal.removeClass("opened closed");                                                                 // 56
    }, 300);                                                                                                           // 46
  };                                                                                                                   // 42
                                                                                                                       //
  setContent = function (template, data) {                                                                             // 52
    self.$main.empty();                                                                                                // 53
                                                                                                                       //
    if (template) {                                                                                                    // 54
      if (data) {                                                                                                      // 55
        Blaze.renderWithData(template, data, self.$main.get(0));                                                       // 56
      } else {                                                                                                         // 55
        Blaze.render(template, self.$main.get(0));                                                                     // 58
      }                                                                                                                // 66
                                                                                                                       //
      checkFooter();                                                                                                   // 59
      return check();                                                                                                  // 68
    }                                                                                                                  // 69
  };                                                                                                                   // 52
                                                                                                                       //
  checkFooter = function () {                                                                                          // 62
    var buttons;                                                                                                       // 63
                                                                                                                       //
    if (self.$footer && self.$footer.length) {                                                                         // 63
      buttons = self.$footer.find("button");                                                                           // 64
      return buttons.each(function () {                                                                                // 75
        var btn;                                                                                                       // 66
        btn = $(this);                                                                                                 // 66
                                                                                                                       //
        if (btn.html().match(/fechar/ig)) {                                                                            // 67
          return btn.click(function (e) {                                                                              // 79
            e.preventDefault();                                                                                        // 69
            return close();                                                                                            // 81
          });                                                                                                          // 68
        }                                                                                                              // 83
      });                                                                                                              // 65
    }                                                                                                                  // 85
  };                                                                                                                   // 62
                                                                                                                       //
  startListening = function () {                                                                                       // 72
    stopListening();                                                                                                   // 73
    return self.interval = setInterval(function () {                                                                   // 89
      return check();                                                                                                  // 90
    }, 100);                                                                                                           // 74
  };                                                                                                                   // 72
                                                                                                                       //
  stopListening = function () {                                                                                        // 78
    if (self.interval) {                                                                                               // 79
      return clearInterval(self.interval);                                                                             // 95
    }                                                                                                                  // 96
  };                                                                                                                   // 78
                                                                                                                       //
  init = function ($modal, params) {                                                                                   // 81
    self.params = params || {};                                                                                        // 82
    self.opened = 0;                                                                                                   // 83
    self.initialized = 0;                                                                                              // 84
    self.$modal = $modal.length ? $modal : $(".rocket-modal");                                                         // 85
                                                                                                                       //
    if (self.$modal.length) {                                                                                          // 86
      self.initialized = 0;                                                                                            // 87
      self.$window = self.$modal.find(".modal");                                                                       // 88
      self.$main = self.$modal.find("main");                                                                           // 89
      self.$close = self.$modal.find("header > .close");                                                               // 90
      self.$footer = self.$modal.find("footer");                                                                       // 91
      self.$close.unbind("click").click(close);                                                                        // 92
      win.unbind("resize.modal").bind("resize.modal", check);                                                          // 93
      return win.unbind("keydown.modal").bind("keydown.modal", function (e) {                                          // 111
        return keydown(e);                                                                                             // 112
      });                                                                                                              // 94
    }                                                                                                                  // 114
  };                                                                                                                   // 81
                                                                                                                       //
  return {                                                                                                             // 116
    init: init,                                                                                                        // 97
    open: open,                                                                                                        // 98
    close: close,                                                                                                      // 99
    focus: focus,                                                                                                      // 100
    setContent: setContent                                                                                             // 101
  };                                                                                                                   // 97
}();                                                                                                                   // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Modernizr.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/Modernizr.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _typeof2 = require("babel-runtime/helpers/typeof");                                                                //
                                                                                                                       //
var _typeof3 = _interopRequireDefault(_typeof2);                                                                       //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD                                                                          // 1
* Build: http://modernizr.com/download/#-cssanimations-csstransitions-touch-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-css_calc-load
*/;                                                                                                                    //
window.Modernizr = function (a, b, c) {                                                                                // 4
  function z(a) {                                                                                                      // 4
    j.cssText = a;                                                                                                     // 4
  }                                                                                                                    // 4
                                                                                                                       //
  function A(a, b) {                                                                                                   // 4
    return z(m.join(a + ";") + (b || ""));                                                                             // 4
  }                                                                                                                    // 4
                                                                                                                       //
  function B(a, b) {                                                                                                   // 4
    return (typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a)) === b;                                  // 4
  }                                                                                                                    // 4
                                                                                                                       //
  function C(a, b) {                                                                                                   // 4
    return !!~("" + a).indexOf(b);                                                                                     // 4
  }                                                                                                                    // 4
                                                                                                                       //
  function D(a, b) {                                                                                                   // 4
    for (var d in meteorBabelHelpers.sanitizeForInObject(a)) {                                                         // 4
      var e = a[d];                                                                                                    // 4
      if (!C(e, "-") && j[e] !== c) return b == "pfx" ? e : !0;                                                        // 4
    }                                                                                                                  // 4
                                                                                                                       //
    return !1;                                                                                                         // 4
  }                                                                                                                    // 4
                                                                                                                       //
  function E(a, b, d) {                                                                                                // 4
    for (var e in meteorBabelHelpers.sanitizeForInObject(a)) {                                                         // 4
      var f = b[a[e]];                                                                                                 // 4
      if (f !== c) return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f;                                     // 4
    }                                                                                                                  // 4
                                                                                                                       //
    return !1;                                                                                                         // 4
  }                                                                                                                    // 4
                                                                                                                       //
  function F(a, b, c) {                                                                                                // 4
    var d = a.charAt(0).toUpperCase() + a.slice(1),                                                                    // 4
        e = (a + " " + o.join(d + " ") + d).split(" ");                                                                // 4
    return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c));
  }                                                                                                                    // 4
                                                                                                                       //
  var d = "2.8.3",                                                                                                     // 4
      e = {},                                                                                                          // 4
      f = !0,                                                                                                          // 4
      g = b.documentElement,                                                                                           // 4
      h = "modernizr",                                                                                                 // 4
      i = b.createElement(h),                                                                                          // 4
      j = i.style,                                                                                                     // 4
      k,                                                                                                               // 4
      l = {}.toString,                                                                                                 // 4
      m = " -webkit- -moz- -o- -ms- ".split(" "),                                                                      // 4
      n = "Webkit Moz O ms",                                                                                           // 4
      o = n.split(" "),                                                                                                // 4
      p = n.toLowerCase().split(" "),                                                                                  // 4
      q = {},                                                                                                          // 4
      r = {},                                                                                                          // 4
      s = {},                                                                                                          // 4
      t = [],                                                                                                          // 4
      u = t.slice,                                                                                                     // 4
      v,                                                                                                               // 4
      w = function (a, c, d, e) {                                                                                      // 4
    var f,                                                                                                             // 4
        i,                                                                                                             // 4
        j,                                                                                                             // 4
        k,                                                                                                             // 4
        l = b.createElement("div"),                                                                                    // 4
        m = b.body,                                                                                                    // 4
        n = m || b.createElement("body");                                                                              // 4
    if (parseInt(d, 10)) while (d--) {                                                                                 // 4
      j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);                                     // 4
    }                                                                                                                  // 4
    return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i;
  },                                                                                                                   // 4
      x = {}.hasOwnProperty,                                                                                           // 4
      y;                                                                                                               // 4
                                                                                                                       //
  !B(x, "undefined") && !B(x.call, "undefined") ? y = function (a, b) {                                                // 4
    return x.call(a, b);                                                                                               // 4
  } : y = function (a, b) {                                                                                            // 4
    return b in a && B(a.constructor.prototype[b], "undefined");                                                       // 4
  }, Function.prototype.bind || (Function.prototype.bind = function (b) {                                              // 4
    var c = this;                                                                                                      // 4
    if (typeof c != "function") throw new TypeError();                                                                 // 4
                                                                                                                       //
    var d = u.call(arguments, 1),                                                                                      // 4
        e = function () {                                                                                              // 4
      if (this instanceof e) {                                                                                         // 4
        var a = function () {};                                                                                        // 4
                                                                                                                       //
        a.prototype = c.prototype;                                                                                     // 4
        var f = new a(),                                                                                               // 4
            g = c.apply(f, d.concat(u.call(arguments)));                                                               // 4
        return Object(g) === g ? g : f;                                                                                // 4
      }                                                                                                                // 4
                                                                                                                       //
      return c.apply(b, d.concat(u.call(arguments)));                                                                  // 4
    };                                                                                                                 // 4
                                                                                                                       //
    return e;                                                                                                          // 4
  }), q.touch = function () {                                                                                          // 4
    var c;                                                                                                             // 4
    return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : w(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) {
      c = a.offsetTop === 9;                                                                                           // 4
    }), c;                                                                                                             // 4
  }, q.cssanimations = function () {                                                                                   // 4
    return F("animationName");                                                                                         // 4
  }, q.csstransitions = function () {                                                                                  // 4
    return F("transition");                                                                                            // 4
  };                                                                                                                   // 4
                                                                                                                       //
  for (var G in meteorBabelHelpers.sanitizeForInObject(q)) {                                                           // 4
    y(q, G) && (v = G.toLowerCase(), e[v] = q[G](), t.push((e[v] ? "" : "no-") + v));                                  // 4
  }                                                                                                                    // 4
                                                                                                                       //
  return e.addTest = function (a, b) {                                                                                 // 4
    if ((typeof a === "undefined" ? "undefined" : (0, _typeof3.default)(a)) == "object") for (var d in meteorBabelHelpers.sanitizeForInObject(a)) {
      y(a, d) && e.addTest(d, a[d]);                                                                                   // 4
    } else {                                                                                                           // 4
      a = a.toLowerCase();                                                                                             // 4
      if (e[a] !== c) return e;                                                                                        // 4
      b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b;
    }                                                                                                                  // 4
    return e;                                                                                                          // 4
  }, z(""), i = k = null, function (a, b) {                                                                            // 4
    function l(a, b) {                                                                                                 // 4
      var c = a.createElement("p"),                                                                                    // 4
          d = a.getElementsByTagName("head")[0] || a.documentElement;                                                  // 4
      return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild);                     // 4
    }                                                                                                                  // 4
                                                                                                                       //
    function m() {                                                                                                     // 4
      var a = s.elements;                                                                                              // 4
      return typeof a == "string" ? a.split(" ") : a;                                                                  // 4
    }                                                                                                                  // 4
                                                                                                                       //
    function n(a) {                                                                                                    // 4
      var b = j[a[h]];                                                                                                 // 4
      return b || (b = {}, i++, a[h] = i, j[i] = b), b;                                                                // 4
    }                                                                                                                  // 4
                                                                                                                       //
    function o(a, c, d) {                                                                                              // 4
      c || (c = b);                                                                                                    // 4
      if (k) return c.createElement(a);                                                                                // 4
      d || (d = n(c));                                                                                                 // 4
      var g;                                                                                                           // 4
      return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g;
    }                                                                                                                  // 4
                                                                                                                       //
    function p(a, c) {                                                                                                 // 4
      a || (a = b);                                                                                                    // 4
      if (k) return a.createDocumentFragment();                                                                        // 4
      c = c || n(a);                                                                                                   // 4
      var d = c.frag.cloneNode(),                                                                                      // 4
          e = 0,                                                                                                       // 4
          f = m(),                                                                                                     // 4
          g = f.length;                                                                                                // 4
                                                                                                                       //
      for (; e < g; e++) {                                                                                             // 4
        d.createElement(f[e]);                                                                                         // 4
      }                                                                                                                // 4
                                                                                                                       //
      return d;                                                                                                        // 4
    }                                                                                                                  // 4
                                                                                                                       //
    function q(a, b) {                                                                                                 // 4
      b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
        return s.shivMethods ? o(c, a, b) : b.createElem(c);                                                           // 4
      }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function (a) {
        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")';                                             // 4
      }) + ");return n}")(s, b.frag);                                                                                  // 4
    }                                                                                                                  // 4
                                                                                                                       //
    function r(a) {                                                                                                    // 4
      a || (a = b);                                                                                                    // 4
      var c = n(a);                                                                                                    // 4
      return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a;
    }                                                                                                                  // 4
                                                                                                                       //
    var c = "3.7.0",                                                                                                   // 4
        d = a.html5 || {},                                                                                             // 4
        e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,                                      // 4
        f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        g,                                                                                                             // 4
        h = "_html5shiv",                                                                                              // 4
        i = 0,                                                                                                         // 4
        j = {},                                                                                                        // 4
        k;                                                                                                             // 4
                                                                                                                       //
    (function () {                                                                                                     // 4
      try {                                                                                                            // 4
        var a = b.createElement("a");                                                                                  // 4
        a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function () {                  // 4
          b.createElement("a");                                                                                        // 4
          var a = b.createDocumentFragment();                                                                          // 4
          return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined";
        }();                                                                                                           // 4
      } catch (c) {                                                                                                    // 4
        g = !0, k = !0;                                                                                                // 4
      }                                                                                                                // 4
    })();                                                                                                              // 4
                                                                                                                       //
    var s = {                                                                                                          // 4
      elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
      version: c,                                                                                                      // 4
      shivCSS: d.shivCSS !== !1,                                                                                       // 4
      supportsUnknownElements: k,                                                                                      // 4
      shivMethods: d.shivMethods !== !1,                                                                               // 4
      type: "default",                                                                                                 // 4
      shivDocument: r,                                                                                                 // 4
      createElement: o,                                                                                                // 4
      createDocumentFragment: p                                                                                        // 4
    };                                                                                                                 // 4
    a.html5 = s, r(b);                                                                                                 // 4
  }(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function (a) {   // 4
    return D([a]);                                                                                                     // 4
  }, e.testAllProps = F, e.testStyles = w, e.prefixed = function (a, b, c) {                                           // 4
    return b ? F(a, b, c) : F(a, "pfx");                                                                               // 4
  }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e;              // 4
}(this, this.document), function (a, b, c) {                                                                           // 4
  function d(a) {                                                                                                      // 4
    return "[object Function]" == o.call(a);                                                                           // 4
  }                                                                                                                    // 4
                                                                                                                       //
  function e(a) {                                                                                                      // 4
    return "string" == typeof a;                                                                                       // 4
  }                                                                                                                    // 4
                                                                                                                       //
  function f() {}                                                                                                      // 4
                                                                                                                       //
  function g(a) {                                                                                                      // 4
    return !a || "loaded" == a || "complete" == a || "uninitialized" == a;                                             // 4
  }                                                                                                                    // 4
                                                                                                                       //
  function h() {                                                                                                       // 4
    var a = p.shift();                                                                                                 // 4
    q = 1, a ? a.t ? m(function () {                                                                                   // 4
      ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);                                               // 4
    }, 0) : (a(), h()) : q = 0;                                                                                        // 4
  }                                                                                                                    // 4
                                                                                                                       //
  function i(a, c, d, e, f, i, j) {                                                                                    // 4
    function k(b) {                                                                                                    // 4
      if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {              // 4
        "img" != a && m(function () {                                                                                  // 4
          t.removeChild(l);                                                                                            // 4
        }, 50);                                                                                                        // 4
                                                                                                                       //
        for (var d in meteorBabelHelpers.sanitizeForInObject(y[c])) {                                                  // 4
          y[c].hasOwnProperty(d) && y[c][d].onload();                                                                  // 4
        }                                                                                                              // 4
      }                                                                                                                // 4
    }                                                                                                                  // 4
                                                                                                                       //
    var j = j || B.errorTimeout,                                                                                       // 4
        l = b.createElement(a),                                                                                        // 4
        o = 0,                                                                                                         // 4
        r = 0,                                                                                                         // 4
        u = {                                                                                                          // 4
      t: d,                                                                                                            // 4
      s: c,                                                                                                            // 4
      e: f,                                                                                                            // 4
      a: i,                                                                                                            // 4
      x: j                                                                                                             // 4
    };                                                                                                                 // 4
    1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
      k.call(this, r);                                                                                                 // 4
    }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l));
  }                                                                                                                    // 4
                                                                                                                       //
  function j(a, b, c, d, f) {                                                                                          // 4
    return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this;
  }                                                                                                                    // 4
                                                                                                                       //
  function k() {                                                                                                       // 4
    var a = B;                                                                                                         // 4
    return a.loader = {                                                                                                // 4
      load: j,                                                                                                         // 4
      i: 0                                                                                                             // 4
    }, a;                                                                                                              // 4
  }                                                                                                                    // 4
                                                                                                                       //
  var l = b.documentElement,                                                                                           // 4
      m = a.setTimeout,                                                                                                // 4
      n = b.getElementsByTagName("script")[0],                                                                         // 4
      o = {}.toString,                                                                                                 // 4
      p = [],                                                                                                          // 4
      q = 0,                                                                                                           // 4
      r = "MozAppearance" in l.style,                                                                                  // 4
      s = r && !!b.createRange().compareNode,                                                                          // 4
      t = s ? l : n.parentNode,                                                                                        // 4
      l = a.opera && "[object Opera]" == o.call(a.opera),                                                              // 4
      l = !!b.attachEvent && !l,                                                                                       // 4
      u = r ? "object" : l ? "script" : "img",                                                                         // 4
      v = l ? "script" : u,                                                                                            // 4
      w = Array.isArray || function (a) {                                                                              // 4
    return "[object Array]" == o.call(a);                                                                              // 4
  },                                                                                                                   // 4
      x = [],                                                                                                          // 4
      y = {},                                                                                                          // 4
      z = {                                                                                                            // 4
    timeout: function (a, b) {                                                                                         // 4
      return b.length && (a.timeout = b[0]), a;                                                                        // 4
    }                                                                                                                  // 4
  },                                                                                                                   // 4
      A,                                                                                                               // 4
      B;                                                                                                               // 4
                                                                                                                       //
  B = function (a) {                                                                                                   // 4
    function b(a) {                                                                                                    // 4
      var a = a.split("!"),                                                                                            // 4
          b = x.length,                                                                                                // 4
          c = a.pop(),                                                                                                 // 4
          d = a.length,                                                                                                // 4
          c = {                                                                                                        // 4
        url: c,                                                                                                        // 4
        origUrl: c,                                                                                                    // 4
        prefixes: a                                                                                                    // 4
      },                                                                                                               // 4
          e,                                                                                                           // 4
          f,                                                                                                           // 4
          g;                                                                                                           // 4
                                                                                                                       //
      for (f = 0; f < d; f++) {                                                                                        // 4
        g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));                                                      // 4
      }                                                                                                                // 4
                                                                                                                       //
      for (f = 0; f < b; f++) {                                                                                        // 4
        c = x[f](c);                                                                                                   // 4
      }                                                                                                                // 4
                                                                                                                       //
      return c;                                                                                                        // 4
    }                                                                                                                  // 4
                                                                                                                       //
    function g(a, e, f, g, h) {                                                                                        // 4
      var i = b(a),                                                                                                    // 4
          j = i.autoCallback;                                                                                          // 4
      i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
        k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2;                                           // 4
      })));                                                                                                            // 4
    }                                                                                                                  // 4
                                                                                                                       //
    function h(a, b) {                                                                                                 // 4
      function c(a, c) {                                                                                               // 4
        if (a) {                                                                                                       // 4
          if (e(a)) c || (j = function () {                                                                            // 4
            var a = [].slice.call(arguments);                                                                          // 4
            k.apply(this, a), l();                                                                                     // 4
          }), g(a, j, b, 0, h);else if (Object(a) === a) for (n in meteorBabelHelpers.sanitizeForInObject((m = function () {
            var b = 0,                                                                                                 // 4
                c;                                                                                                     // 4
                                                                                                                       //
            for (c in meteorBabelHelpers.sanitizeForInObject(a)) {                                                     // 4
              a.hasOwnProperty(c) && b++;                                                                              // 4
            }                                                                                                          // 4
                                                                                                                       //
            return b;                                                                                                  // 4
          }(), a))) {                                                                                                  // 4
            a.hasOwnProperty(n) && (!c && ! --m && (d(j) ? j = function () {                                           // 4
              var a = [].slice.call(arguments);                                                                        // 4
              k.apply(this, a), l();                                                                                   // 4
            } : j[n] = function (a) {                                                                                  // 4
              return function () {                                                                                     // 4
                var b = [].slice.call(arguments);                                                                      // 4
                a && a.apply(this, b), l();                                                                            // 4
              };                                                                                                       // 4
            }(k[n])), g(a[n], j, b, n, h));                                                                            // 4
          }                                                                                                            // 4
        } else !c && l();                                                                                              // 4
      }                                                                                                                // 4
                                                                                                                       //
      var h = !!a.test,                                                                                                // 4
          i = a.load || a.both,                                                                                        // 4
          j = a.callback || f,                                                                                         // 4
          k = j,                                                                                                       // 4
          l = a.complete || f,                                                                                         // 4
          m,                                                                                                           // 4
          n;                                                                                                           // 4
      c(h ? a.yep : a.nope, !!i), i && c(i);                                                                           // 4
    }                                                                                                                  // 4
                                                                                                                       //
    var i,                                                                                                             // 4
        j,                                                                                                             // 4
        l = this.yepnope.loader;                                                                                       // 4
    if (e(a)) g(a, 0, l, 0);else if (w(a)) for (i = 0; i < a.length; i++) {                                            // 4
      j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);                                       // 4
    } else Object(a) === a && h(a, l);                                                                                 // 4
  }, B.addPrefix = function (a, b) {                                                                                   // 4
    z[a] = b;                                                                                                          // 4
  }, B.addFilter = function (a) {                                                                                      // 4
    x.push(a);                                                                                                         // 4
  }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () {
    b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete";                                        // 4
  }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {              // 4
    var k = b.createElement("script"),                                                                                 // 4
        l,                                                                                                             // 4
        o,                                                                                                             // 4
        e = e || B.errorTimeout;                                                                                       // 4
    k.src = a;                                                                                                         // 4
                                                                                                                       //
    for (o in meteorBabelHelpers.sanitizeForInObject(d)) {                                                             // 4
      k.setAttribute(o, d[o]);                                                                                         // 4
    }                                                                                                                  // 4
                                                                                                                       //
    c = j ? h : c || f, k.onreadystatechange = k.onload = function () {                                                // 4
      !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null);                                   // 4
    }, m(function () {                                                                                                 // 4
      l || (l = 1, c(1));                                                                                              // 4
    }, e), i ? k.onload() : n.parentNode.insertBefore(k, n);                                                           // 4
  }, a.yepnope.injectCss = function (a, c, d, e, g, i) {                                                               // 4
    var e = b.createElement("link"),                                                                                   // 4
        j,                                                                                                             // 4
        c = i ? h : c || f;                                                                                            // 4
    e.href = a, e.rel = "stylesheet", e.type = "text/css";                                                             // 4
                                                                                                                       //
    for (j in meteorBabelHelpers.sanitizeForInObject(d)) {                                                             // 4
      e.setAttribute(j, d[j]);                                                                                         // 4
    }                                                                                                                  // 4
                                                                                                                       //
    g || (n.parentNode.insertBefore(e, n), m(c, 0));                                                                   // 4
  };                                                                                                                   // 4
}(this, document), Modernizr.load = function () {                                                                      // 4
  yepnope.apply(window, [].slice.call(arguments, 0));                                                                  // 4
}, Modernizr.addTest("csscalc", function () {                                                                          // 4
  var a = "width:",                                                                                                    // 4
      b = "calc(10px);",                                                                                               // 4
      c = document.createElement("div");                                                                               // 4
  return c.style.cssText = a + Modernizr._prefixes.join(b + a), !!c.style.length;                                      // 4
});                                                                                                                    // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"msgTyping.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/msgTyping.coffee.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.MsgTyping = function () {                                                                                         // 1
  var addStream, dep, get, renew, renewTimeout, selfTyping, start, stop, timeout, timeouts, usersTyping;               // 2
  timeout = 15000;                                                                                                     // 2
  timeouts = {};                                                                                                       // 3
  renew = true;                                                                                                        // 4
  renewTimeout = 10000;                                                                                                // 5
  selfTyping = new ReactiveVar(false);                                                                                 // 6
  usersTyping = {};                                                                                                    // 7
  dep = new Tracker.Dependency();                                                                                      // 8
                                                                                                                       //
  addStream = function (room) {                                                                                        // 10
    var ref;                                                                                                           // 11
                                                                                                                       //
    if (_.isEmpty((ref = usersTyping[room]) != null ? ref.users : void 0)) {                                           // 11
      usersTyping[room] = {                                                                                            // 12
        users: {}                                                                                                      // 12
      };                                                                                                               // 12
      return RocketChat.Notifications.onRoom(room, 'typing', function (username, typing) {                             // 16
        var ref1, users;                                                                                               // 14
                                                                                                                       //
        if (username !== ((ref1 = Meteor.user()) != null ? ref1.username : void 0)) {                                  // 14
          if (typing === true) {                                                                                       // 15
            users = usersTyping[room].users;                                                                           // 16
            users[username] = Meteor.setTimeout(function () {                                                          // 17
              delete users[username];                                                                                  // 18
              usersTyping[room].users = users;                                                                         // 19
              return dep.changed();                                                                                    // 24
            }, timeout);                                                                                               // 17
            usersTyping[room].users = users;                                                                           // 22
            return dep.changed();                                                                                      // 27
          } else {                                                                                                     // 15
            users = usersTyping[room].users;                                                                           // 25
            delete users[username];                                                                                    // 26
            usersTyping[room].users = users;                                                                           // 27
            return dep.changed();                                                                                      // 32
          }                                                                                                            // 14
        }                                                                                                              // 34
      });                                                                                                              // 13
    }                                                                                                                  // 36
  };                                                                                                                   // 10
                                                                                                                       //
  Tracker.autorun(function () {                                                                                        // 30
    if (Session.get('openedRoom')) {                                                                                   // 31
      return addStream(Session.get('openedRoom'));                                                                     // 40
    }                                                                                                                  // 41
  });                                                                                                                  // 30
                                                                                                                       //
  start = function (room) {                                                                                            // 34
    var ref;                                                                                                           // 35
                                                                                                                       //
    if (!renew) {                                                                                                      // 35
      return;                                                                                                          // 35
    }                                                                                                                  // 47
                                                                                                                       //
    setTimeout(function () {                                                                                           // 37
      return renew = true;                                                                                             // 49
    }, renewTimeout);                                                                                                  // 37
    renew = false;                                                                                                     // 41
    selfTyping.set(true);                                                                                              // 42
    RocketChat.Notifications.notifyRoom(room, 'typing', (ref = Meteor.user()) != null ? ref.username : void 0, true);  // 43
    clearTimeout(timeouts[room]);                                                                                      // 44
    return timeouts[room] = Meteor.setTimeout(function () {                                                            // 55
      return stop(room);                                                                                               // 56
    }, timeout);                                                                                                       // 45
  };                                                                                                                   // 34
                                                                                                                       //
  stop = function (room) {                                                                                             // 49
    var ref;                                                                                                           // 50
    renew = true;                                                                                                      // 50
    selfTyping.set(false);                                                                                             // 51
                                                                                                                       //
    if ((timeouts != null ? timeouts[room] : void 0) != null) {                                                        // 52
      clearTimeout(timeouts[room]);                                                                                    // 53
      timeouts[room] = null;                                                                                           // 54
    }                                                                                                                  // 66
                                                                                                                       //
    return RocketChat.Notifications.notifyRoom(room, 'typing', (ref = Meteor.user()) != null ? ref.username : void 0, false);
  };                                                                                                                   // 49
                                                                                                                       //
  get = function (room) {                                                                                              // 57
    var users;                                                                                                         // 58
    dep.depend();                                                                                                      // 58
                                                                                                                       //
    if (!usersTyping[room]) {                                                                                          // 59
      usersTyping[room] = {                                                                                            // 60
        users: {}                                                                                                      // 60
      };                                                                                                               // 60
    }                                                                                                                  // 76
                                                                                                                       //
    users = usersTyping[room].users;                                                                                   // 61
    return _.keys(users) || [];                                                                                        // 62
  };                                                                                                                   // 57
                                                                                                                       //
  return {                                                                                                             // 64
    start: start,                                                                                                      // 65
    stop: stop,                                                                                                        // 66
    get: get,                                                                                                          // 67
    selfTyping: selfTyping                                                                                             // 68
  };                                                                                                                   // 64
}();                                                                                                                   // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"notification.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/notification.coffee.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.KonchatNotification = {                                                                                           // 2
  notificationStatus: new ReactiveVar(),                                                                               // 3
  getDesktopPermission: function () {                                                                                  // 6
    if (window.Notification && Notification.permission !== "granted" && !Meteor.settings["public"].sandstorm) {        // 7
      return Notification.requestPermission(function (status) {                                                        // 5
        KonchatNotification.notificationStatus.set(status);                                                            // 9
                                                                                                                       //
        if (Notification.permission !== status) {                                                                      // 10
          return Notification.permission = status;                                                                     // 8
        }                                                                                                              // 9
      });                                                                                                              // 8
    }                                                                                                                  // 11
  },                                                                                                                   // 3
  notify: function (notification) {                                                                                    // 13
    var message, ref;                                                                                                  // 14
                                                                                                                       //
    if (window.Notification && Notification.permission === "granted") {                                                // 14
      message = {                                                                                                      // 15
        rid: (ref = notification.payload) != null ? ref.rid : void 0,                                                  // 15
        msg: notification.text,                                                                                        // 15
        notification: true                                                                                             // 15
      };                                                                                                               // 15
      return RocketChat.promises.run('onClientMessageReceived', message).then(function (message) {                     // 21
        var n, notificationDuration, ref1, ref2, ref3, ref4;                                                           // 17
        n = new Notification(notification.title, {                                                                     // 17
          icon: notification.icon || getAvatarUrlFromUsername(notification.payload.sender.username),                   // 18
          body: _.stripTags(message.msg),                                                                              // 19
          tag: notification.payload._id,                                                                               // 20
          silent: true,                                                                                                // 21
          canReply: true                                                                                               // 22
        });                                                                                                            // 18
        notificationDuration = notification.duration - 0 || ((ref1 = Meteor.user()) != null ? (ref2 = ref1.settings) != null ? (ref3 = ref2.preferences) != null ? ref3.desktopNotificationDuration : void 0 : void 0 : void 0) - 0 || RocketChat.settings.get('Desktop_Notifications_Duration');
                                                                                                                       //
        if (notificationDuration > 0) {                                                                                // 25
          setTimeout(function () {                                                                                     // 26
            return n.close();                                                                                          // 33
          }, notificationDuration * 1000);                                                                             // 26
        }                                                                                                              // 35
                                                                                                                       //
        if (((ref4 = notification.payload) != null ? ref4.rid : void 0) != null) {                                     // 28
          if (n.addEventListener != null) {                                                                            // 29
            n.addEventListener('reply', function (arg) {                                                               // 30
              var response;                                                                                            // 31
              response = arg.response;                                                                                 // 30
              return Meteor.call('sendMessage', {                                                                      // 41
                _id: Random.id(),                                                                                      // 32
                rid: notification.payload.rid,                                                                         // 33
                msg: response                                                                                          // 34
              });                                                                                                      // 32
            });                                                                                                        // 30
          }                                                                                                            // 47
                                                                                                                       //
          return n.onclick = function () {                                                                             // 48
            this.close();                                                                                              // 37
            window.focus();                                                                                            // 38
                                                                                                                       //
            switch (notification.payload.type) {                                                                       // 39
              case 'd':                                                                                                // 39
                return FlowRouter.go('direct', {                                                                       // 53
                  username: notification.payload.sender.username                                                       // 41
                }, FlowRouter.current().queryParams);                                                                  // 41
                                                                                                                       //
              case 'c':                                                                                                // 39
                return FlowRouter.go('channel', {                                                                      // 57
                  name: notification.payload.name                                                                      // 43
                }, FlowRouter.current().queryParams);                                                                  // 43
                                                                                                                       //
              case 'p':                                                                                                // 39
                return FlowRouter.go('group', {                                                                        // 61
                  name: notification.payload.name                                                                      // 45
                }, FlowRouter.current().queryParams);                                                                  // 45
            }                                                                                                          // 39
          };                                                                                                           // 36
        }                                                                                                              // 66
      });                                                                                                              // 16
    }                                                                                                                  // 68
  },                                                                                                                   // 3
  showDesktop: function (notification) {                                                                               // 47
    var base;                                                                                                          // 48
                                                                                                                       //
    if (notification.payload.rid === Session.get('openedRoom') && (typeof (base = window.document).hasFocus === "function" ? base.hasFocus() : void 0)) {
      return;                                                                                                          // 49
    }                                                                                                                  // 74
                                                                                                                       //
    if (Meteor.user().status === 'busy' || Meteor.settings["public"].sandstorm != null) {                              // 51
      return;                                                                                                          // 52
    }                                                                                                                  // 77
                                                                                                                       //
    return getAvatarAsPng(notification.payload.sender.username, function (avatarAsPng) {                               // 78
      notification.icon = avatarAsPng;                                                                                 // 55
      return KonchatNotification.notify(notification);                                                                 // 80
    });                                                                                                                // 54
  },                                                                                                                   // 3
  newMessage: function (rid) {                                                                                         // 58
    var newMessageNotification, ref, ref1, ref2, ref3, ref4, ref5, ref6, sub;                                          // 59
                                                                                                                       //
    if (!Session.equals('user_' + Meteor.userId() + '_status', 'busy')) {                                              // 59
      newMessageNotification = ((ref = Meteor.user()) != null ? (ref1 = ref.settings) != null ? (ref2 = ref1.preferences) != null ? ref2.newMessageNotification : void 0 : void 0 : void 0) || 'chime';
      sub = ChatSubscription.findOne({                                                                                 // 61
        rid: rid                                                                                                       // 61
      }, {                                                                                                             // 61
        fields: {                                                                                                      // 61
          audioNotification: 1                                                                                         // 61
        }                                                                                                              // 61
      });                                                                                                              // 61
                                                                                                                       //
      if ((sub != null ? sub.audioNotification : void 0) !== 'none') {                                                 // 62
        if (sub != null ? sub.audioNotification : void 0) {                                                            // 63
          return (ref3 = $("audio#" + sub.audioNotification)) != null ? (ref4 = ref3[0]) != null ? typeof ref4.play === "function" ? ref4.play() : void 0 : void 0 : void 0;
        } else if (newMessageNotification !== 'none') {                                                                // 63
          return (ref5 = $("audio#" + newMessageNotification)) != null ? (ref6 = ref5[0]) != null ? typeof ref6.play === "function" ? ref6.play() : void 0 : void 0 : void 0;
        }                                                                                                              // 62
      }                                                                                                                // 59
    }                                                                                                                  // 101
  },                                                                                                                   // 3
  newRoom: function (rid, withSound) {                                                                                 // 68
    if (withSound == null) {                                                                                           // 104
      withSound = true;                                                                                                // 68
    }                                                                                                                  // 106
                                                                                                                       //
    return Tracker.nonreactive(function () {                                                                           // 107
      var newRoomSound;                                                                                                // 70
      newRoomSound = Session.get('newRoomSound');                                                                      // 70
                                                                                                                       //
      if (newRoomSound != null) {                                                                                      // 71
        newRoomSound = _.union(newRoomSound, rid);                                                                     // 72
      } else {                                                                                                         // 71
        newRoomSound = [rid];                                                                                          // 74
      }                                                                                                                // 114
                                                                                                                       //
      return Session.set('newRoomSound', newRoomSound);                                                                // 115
    });                                                                                                                // 69
  },                                                                                                                   // 3
  removeRoomNotification: function (rid) {                                                                             // 80
    Tracker.nonreactive(function () {                                                                                  // 81
      return Session.set('newRoomSound', []);                                                                          // 120
    });                                                                                                                // 81
    return $('.link-room-' + rid).removeClass('new-room-highlight');                                                   // 122
  }                                                                                                                    // 3
};                                                                                                                     // 3
Tracker.autorun(function () {                                                                                          // 86
  var newRoomNotification, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;                                              // 87
  newRoomNotification = ((ref = Meteor.user()) != null ? (ref1 = ref.settings) != null ? (ref2 = ref1.preferences) != null ? ref2.newRoomNotification : void 0 : void 0 : void 0) || 'door';
                                                                                                                       //
  if (((ref3 = Session.get('newRoomSound')) != null ? ref3.length : void 0) > 0) {                                     // 88
    return Tracker.nonreactive(function () {                                                                           // 130
      var ref4, ref5;                                                                                                  // 90
                                                                                                                       //
      if (!Session.equals('user_' + Meteor.userId() + '_status', 'busy') && newRoomNotification !== 'none') {          // 90
        return (ref4 = $("audio#" + newRoomNotification)) != null ? (ref5 = ref4[0]) != null ? typeof ref5.play === "function" ? ref5.play() : void 0 : void 0 : void 0;
      }                                                                                                                // 134
    });                                                                                                                // 89
  } else {                                                                                                             // 88
    if ((ref4 = $("audio#" + newRoomNotification)) != null) {                                                          // 137
      if ((ref5 = ref4[0]) != null) {                                                                                  // 138
        if (typeof ref5.pause === "function") {                                                                        // 139
          ref5.pause();                                                                                                // 140
        }                                                                                                              // 141
      }                                                                                                                // 142
    }                                                                                                                  // 143
                                                                                                                       //
    return (ref6 = $("audio#" + newRoomNotification)) != null ? (ref7 = ref6[0]) != null ? ref7.currentTime = 0 : void 0 : void 0;
  }                                                                                                                    // 145
});                                                                                                                    // 86
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"parentTemplate.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/parentTemplate.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    // 1
 * Get the parent template instance                                                                                    //
 * @param {Number} [levels] How many levels to go up. Default is 1                                                     //
 * @returns {Blaze.TemplateInstance}                                                                                   //
 */Blaze.TemplateInstance.prototype.parentTemplate = function (levels) {                                               //
	var view = Blaze.currentView;                                                                                         // 8
                                                                                                                       //
	if (typeof levels === 'undefined') {                                                                                  // 9
		levels = 1;                                                                                                          // 10
	}                                                                                                                     // 11
                                                                                                                       //
	while (view) {                                                                                                        // 12
		if (view.name.substring(0, 9) === 'Template.' && !levels--) {                                                        // 13
			return view.templateInstance();                                                                                     // 14
		}                                                                                                                    // 15
                                                                                                                       //
		view = view.parentView;                                                                                              // 16
	}                                                                                                                     // 17
};                                                                                                                     // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"readMessages.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/readMessages.coffee.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
/* DEFINITIONS                                                                                                         // 1
- If window loses focus user needs to scroll or click/touch some place                                                 //
- On hit ESC enable read, force read of current room and remove unread mark                                            //
- When user change room disable read until user interaction                                                            //
- Only read if mark of *first-unread* is visible for user or if flag *force* was passed                                //
- Always read the opened room                                                                                          //
- The default method *read* has a delay of 2000ms to prevent multiple reads and to user be able to see the mark        //
 */this.readMessage = new (function () {                                                                               //
  _Class.prototype.debug = false;                                                                                      // 11
  _Class.prototype.callbacks = [];                                                                                     // 13
                                                                                                                       //
  function _Class() {                                                                                                  // 19
    this.canReadMessage = false;                                                                                       // 20
  }                                                                                                                    // 19
                                                                                                                       //
  _Class.prototype.readNow = function (force) {                                                                        // 19
    var position, rid, room, self, subscription, unreadMark, visible;                                                  // 23
                                                                                                                       //
    if (force == null) {                                                                                               // 21
      force = false;                                                                                                   // 22
    }                                                                                                                  // 23
                                                                                                                       //
    if (this.debug) {                                                                                                  // 23
      console.log('--------------');                                                                                   // 23
    }                                                                                                                  // 26
                                                                                                                       //
    if (this.debug) {                                                                                                  // 24
      console.log('readMessage -> readNow init process force:', force);                                                // 24
    }                                                                                                                  // 29
                                                                                                                       //
    self = this;                                                                                                       // 26
    self.refreshUnreadMark();                                                                                          // 28
                                                                                                                       //
    if (force !== true && this.canReadMessage === false) {                                                             // 30
      if (this.debug) {                                                                                                // 31
        console.log('readMessage -> readNow canceled by canReadMessage: false');                                       // 31
      }                                                                                                                // 35
                                                                                                                       //
      return;                                                                                                          // 32
    }                                                                                                                  // 37
                                                                                                                       //
    rid = Session.get('openedRoom');                                                                                   // 34
                                                                                                                       //
    if (rid == null) {                                                                                                 // 35
      if (this.debug) {                                                                                                // 36
        console.log('readMessage -> readNow canceled, no rid informed');                                               // 36
      }                                                                                                                // 42
                                                                                                                       //
      return;                                                                                                          // 37
    }                                                                                                                  // 44
                                                                                                                       //
    if (force === true) {                                                                                              // 39
      if (this.debug) {                                                                                                // 40
        console.log('readMessage -> readNow via force rid:', rid);                                                     // 40
      }                                                                                                                // 48
                                                                                                                       //
      return Meteor.call('readMessages', rid, function () {                                                            // 41
        RoomHistoryManager.getRoom(rid).unreadNotLoaded.set(0);                                                        // 42
        self.refreshUnreadMark();                                                                                      // 43
        return self.fireRead(rid);                                                                                     // 52
      });                                                                                                              // 41
    }                                                                                                                  // 54
                                                                                                                       //
    subscription = ChatSubscription.findOne({                                                                          // 46
      rid: rid                                                                                                         // 46
    });                                                                                                                // 46
                                                                                                                       //
    if (subscription == null) {                                                                                        // 47
      if (this.debug) {                                                                                                // 48
        console.log('readMessage -> readNow canceled, no subscription found for rid:', rid);                           // 48
      }                                                                                                                // 61
                                                                                                                       //
      return;                                                                                                          // 49
    }                                                                                                                  // 63
                                                                                                                       //
    if (subscription.alert === false && subscription.unread === 0) {                                                   // 51
      if (this.debug) {                                                                                                // 52
        console.log('readMessage -> readNow canceled, alert', subscription.alert, 'and unread', subscription.unread);  // 52
      }                                                                                                                // 67
                                                                                                                       //
      return;                                                                                                          // 53
    }                                                                                                                  // 69
                                                                                                                       //
    room = RoomManager.getOpenedRoomByRid(rid);                                                                        // 55
                                                                                                                       //
    if (room == null) {                                                                                                // 56
      if (this.debug) {                                                                                                // 57
        console.log('readMessage -> readNow canceled, no room found for typeName:', subscription.t + subscription.name);
      }                                                                                                                // 74
                                                                                                                       //
      return;                                                                                                          // 58
    }                                                                                                                  // 76
                                                                                                                       //
    unreadMark = $('.message.first-unread');                                                                           // 61
                                                                                                                       //
    if (unreadMark.length > 0) {                                                                                       // 62
      position = unreadMark.position();                                                                                // 63
      visible = (position != null ? position.top : void 0) >= 0;                                                       // 64
                                                                                                                       //
      if (!visible && room.unreadSince.get() != null) {                                                                // 65
        if (this.debug) {                                                                                              // 66
          console.log('readMessage -> readNow canceled, unread mark visible:', visible, 'unread since exists', room.unreadSince.get() != null);
        }                                                                                                              // 84
                                                                                                                       //
        return;                                                                                                        // 67
      }                                                                                                                // 62
    }                                                                                                                  // 87
                                                                                                                       //
    if (this.debug) {                                                                                                  // 69
      console.log('readMessage -> readNow rid:', rid);                                                                 // 69
    }                                                                                                                  // 90
                                                                                                                       //
    return Meteor.call('readMessages', rid, function () {                                                              // 91
      RoomHistoryManager.getRoom(rid).unreadNotLoaded.set(0);                                                          // 71
      self.refreshUnreadMark();                                                                                        // 72
      return self.fireRead(rid);                                                                                       // 94
    });                                                                                                                // 70
  };                                                                                                                   // 22
                                                                                                                       //
  _Class.prototype.read = _.debounce(function (force) {                                                                // 98
    return this.readNow(force);                                                                                        // 99
  }, 1000);                                                                                                            // 75
                                                                                                                       //
  _Class.prototype.disable = function () {                                                                             // 102
    return this.canReadMessage = false;                                                                                // 103
  };                                                                                                                   // 79
                                                                                                                       //
  _Class.prototype.enable = function () {                                                                              // 106
    return this.canReadMessage = document.hasFocus();                                                                  // 107
  };                                                                                                                   // 82
                                                                                                                       //
  _Class.prototype.isEnable = function () {                                                                            // 110
    return this.canReadMessage === true;                                                                               // 86
  };                                                                                                                   // 85
                                                                                                                       //
  _Class.prototype.onRead = function (cb) {                                                                            // 114
    return this.callbacks.push(cb);                                                                                    // 115
  };                                                                                                                   // 88
                                                                                                                       //
  _Class.prototype.fireRead = function (rid) {                                                                         // 118
    var cb, i, len, ref, results;                                                                                      // 92
    ref = this.callbacks;                                                                                              // 92
    results = [];                                                                                                      // 92
                                                                                                                       //
    for (i = 0, len = ref.length; i < len; i++) {                                                                      // 122
      cb = ref[i];                                                                                                     // 123
      results.push(cb(rid));                                                                                           // 124
    }                                                                                                                  // 92
                                                                                                                       //
    return results;                                                                                                    // 126
  };                                                                                                                   // 91
                                                                                                                       //
  _Class.prototype.refreshUnreadMark = function (rid, force) {                                                         // 129
    var $roomDom, firstUnreadRecord, lastReadRecord, room, self, subscription;                                         // 96
    self = this;                                                                                                       // 96
                                                                                                                       //
    if (rid == null) {                                                                                                 // 132
      rid = Session.get('openedRoom');                                                                                 // 98
    }                                                                                                                  // 134
                                                                                                                       //
    if (rid == null) {                                                                                                 // 99
      return;                                                                                                          // 100
    }                                                                                                                  // 137
                                                                                                                       //
    subscription = ChatSubscription.findOne({                                                                          // 102
      rid: rid                                                                                                         // 102
    }, {                                                                                                               // 102
      reactive: false                                                                                                  // 102
    });                                                                                                                // 102
                                                                                                                       //
    if (subscription == null) {                                                                                        // 103
      return;                                                                                                          // 104
    }                                                                                                                  // 145
                                                                                                                       //
    room = RoomManager.openedRooms[subscription.t + subscription.name];                                                // 106
                                                                                                                       //
    if (room == null) {                                                                                                // 107
      return;                                                                                                          // 108
    }                                                                                                                  // 149
                                                                                                                       //
    $roomDom = $(room.dom);                                                                                            // 110
    $roomDom.find('.message.first-unread').addClass('first-unread-opaque');                                            // 111
                                                                                                                       //
    if (!subscription.alert && subscription.unread === 0) {                                                            // 113
      room.unreadSince.set(void 0);                                                                                    // 114
      return;                                                                                                          // 115
    }                                                                                                                  // 155
                                                                                                                       //
    if (force == null && subscription.rid === Session.get('openedRoom') && document.hasFocus()) {                      // 117
      return;                                                                                                          // 118
    }                                                                                                                  // 158
                                                                                                                       //
    $roomDom.find('.message.first-unread').removeClass('first-unread').removeClass('first-unread-opaque');             // 120
    lastReadRecord = ChatMessage.findOne({                                                                             // 122
      rid: subscription.rid,                                                                                           // 123
      ts: {                                                                                                            // 124
        $lt: subscription.ls                                                                                           // 125
      }                                                                                                                // 125
    }, {                                                                                                               // 123
      sort: {                                                                                                          // 129
        ts: -1                                                                                                         // 130
      }                                                                                                                // 130
    });                                                                                                                // 129
                                                                                                                       //
    if (lastReadRecord == null && RoomHistoryManager.getRoom(room.rid).unreadNotLoaded.get() === 0) {                  // 132
      lastReadRecord = {                                                                                               // 133
        ts: new Date(0)                                                                                                // 134
      };                                                                                                               // 134
    }                                                                                                                  // 174
                                                                                                                       //
    if (lastReadRecord != null || RoomHistoryManager.getRoom(room.rid).unreadNotLoaded.get() > 0) {                    // 136
      room.unreadSince.set(subscription.ls);                                                                           // 137
    } else {                                                                                                           // 136
      room.unreadSince.set(void 0);                                                                                    // 139
    }                                                                                                                  // 179
                                                                                                                       //
    if (lastReadRecord != null) {                                                                                      // 141
      firstUnreadRecord = ChatMessage.findOne({                                                                        // 142
        rid: subscription.rid,                                                                                         // 143
        ts: {                                                                                                          // 144
          $gt: lastReadRecord.ts                                                                                       // 145
        },                                                                                                             // 145
        'u._id': {                                                                                                     // 146
          $ne: Meteor.userId()                                                                                         // 147
        }                                                                                                              // 147
      }, {                                                                                                             // 143
        sort: {                                                                                                        // 149
          ts: 1                                                                                                        // 150
        }                                                                                                              // 150
      });                                                                                                              // 149
                                                                                                                       //
      if (firstUnreadRecord != null) {                                                                                 // 152
        room.unreadFirstId = firstUnreadRecord._id;                                                                    // 153
        return $roomDom.find('.message#' + firstUnreadRecord._id).addClass('first-unread');                            // 196
      }                                                                                                                // 141
    }                                                                                                                  // 198
  };                                                                                                                   // 95
                                                                                                                       //
  return _Class;                                                                                                       // 201
}())();                                                                                                                // 203
Meteor.startup(function () {                                                                                           // 157
  $(window).on('blur', function () {                                                                                   // 158
    return readMessage.disable();                                                                                      // 207
  });                                                                                                                  // 158
  $(window).on('focus', function () {                                                                                  // 161
    readMessage.enable();                                                                                              // 162
    return readMessage.read();                                                                                         // 211
  });                                                                                                                  // 161
  $(window).on('click', function (e) {                                                                                 // 165
    readMessage.enable();                                                                                              // 166
    return readMessage.read();                                                                                         // 215
  });                                                                                                                  // 165
  $(window).on('touchend', function (e) {                                                                              // 169
    readMessage.enable();                                                                                              // 170
    return readMessage.read();                                                                                         // 219
  });                                                                                                                  // 169
  return $(window).on('keyup', function (e) {                                                                          // 221
    var key;                                                                                                           // 174
    key = e.which;                                                                                                     // 174
                                                                                                                       //
    if (key === 27) {                                                                                                  // 176
      readMessage.enable();                                                                                            // 177
      readMessage.readNow(true);                                                                                       // 178
      return $('.message.first-unread').removeClass('first-unread');                                                   // 227
    }                                                                                                                  // 228
  });                                                                                                                  // 173
});                                                                                                                    // 157
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"rocket.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/rocket.coffee.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
RocketChat.Login = function () {                                                                                       // 1
  var check, onBlur, onClick;                                                                                          // 2
                                                                                                                       //
  onClick = function (el) {                                                                                            // 2
    var $el;                                                                                                           // 3
    $el = $(el);                                                                                                       // 3
                                                                                                                       //
    if ($el.length) {                                                                                                  // 4
      $el.addClass("active");                                                                                          // 5
      return $el.find("input").focus();                                                                                // 8
    }                                                                                                                  // 9
  };                                                                                                                   // 2
                                                                                                                       //
  onBlur = function (input) {                                                                                          // 7
    var $input;                                                                                                        // 8
    $input = $(input);                                                                                                 // 8
                                                                                                                       //
    if ($input.length) {                                                                                               // 9
      if (input.value === "") {                                                                                        // 10
        return $input.parents(".input-text").removeClass("active");                                                    // 16
      }                                                                                                                // 9
    }                                                                                                                  // 18
  };                                                                                                                   // 7
                                                                                                                       //
  check = function (form) {                                                                                            // 12
    var $form, inputs;                                                                                                 // 13
    $form = $(form);                                                                                                   // 13
                                                                                                                       //
    if ($form.length) {                                                                                                // 14
      inputs = $form.find("input");                                                                                    // 15
      return inputs.each(function () {                                                                                 // 25
        if (this.value !== "") {                                                                                       // 17
          console.log(this.value);                                                                                     // 18
          return $(this).parents(".input-text").addClass("active");                                                    // 28
        }                                                                                                              // 29
      });                                                                                                              // 16
    }                                                                                                                  // 31
  };                                                                                                                   // 12
                                                                                                                       //
  return {                                                                                                             // 33
    check: check,                                                                                                      // 20
    onClick: onClick,                                                                                                  // 21
    onBlur: onBlur                                                                                                     // 22
  };                                                                                                                   // 20
}();                                                                                                                   // 1
                                                                                                                       //
RocketChat.Button = function () {                                                                                      // 25
  var done, loading, reset, time;                                                                                      // 26
  time = void 0;                                                                                                       // 26
                                                                                                                       //
  loading = function (el) {                                                                                            // 27
    var $el, html, next;                                                                                               // 28
    $el = $(el);                                                                                                       // 28
    next = el.attr("data-loading-text");                                                                               // 29
    html = el.find("span").html();                                                                                     // 30
    el.addClass("-progress").attr("data-def-text", html).find("span").html(next);                                      // 31
    return time = setTimeout(function () {                                                                             // 49
      return el.addClass("going");                                                                                     // 50
    }, 1);                                                                                                             // 32
  };                                                                                                                   // 27
                                                                                                                       //
  done = function (el) {                                                                                               // 35
    var $el;                                                                                                           // 36
    $el = $(el);                                                                                                       // 36
    return el.addClass("done");                                                                                        // 56
  };                                                                                                                   // 35
                                                                                                                       //
  reset = function (el) {                                                                                              // 38
    var $el, html;                                                                                                     // 39
                                                                                                                       //
    if (time) {                                                                                                        // 39
      clearTimeout(time);                                                                                              // 39
    }                                                                                                                  // 62
                                                                                                                       //
    $el = $(el);                                                                                                       // 40
    html = $el.attr("data-def-text");                                                                                  // 41
                                                                                                                       //
    if (html) {                                                                                                        // 42
      $el.find("span").html(html);                                                                                     // 42
    }                                                                                                                  // 67
                                                                                                                       //
    return $el.removeClass("-progress going done");                                                                    // 68
  };                                                                                                                   // 38
                                                                                                                       //
  return {                                                                                                             // 70
    done: done,                                                                                                        // 44
    loading: loading,                                                                                                  // 45
    reset: reset                                                                                                       // 46
  };                                                                                                                   // 44
}();                                                                                                                   // 25
                                                                                                                       //
RocketChat.animationSupport = function () {                                                                            // 49
  var animeEnd, prefixA, prefixB, support, transEndEventNames;                                                         // 50
  animeEnd = {                                                                                                         // 50
    WebkitAnimation: "webkitAnimationEnd",                                                                             // 51
    OAnimation: "oAnimationEnd",                                                                                       // 52
    msAnimation: "MSAnimationEnd",                                                                                     // 53
    animation: "animationend"                                                                                          // 54
  };                                                                                                                   // 51
  transEndEventNames = {                                                                                               // 56
    WebkitTransition: "webkitTransitionEnd",                                                                           // 57
    MozTransition: "transitionend",                                                                                    // 58
    OTransition: "oTransitionEnd otransitionend",                                                                      // 59
    msTransition: "MSTransitionEnd",                                                                                   // 60
    transition: "transitionend"                                                                                        // 61
  };                                                                                                                   // 57
  prefixB = transEndEventNames[Modernizr.prefixed("transition")];                                                      // 62
  prefixA = animeEnd[Modernizr.prefixed("animation")];                                                                 // 63
  support = Modernizr.cssanimations;                                                                                   // 64
  return {                                                                                                             // 95
    support: support,                                                                                                  // 65
    animation: prefixA,                                                                                                // 66
    transition: prefixB                                                                                                // 67
  };                                                                                                                   // 65
};                                                                                                                     // 49
                                                                                                                       //
RocketChat.animeBack = function (el, callback, type) {                                                                 // 69
  var p, s;                                                                                                            // 70
  el = $(el);                                                                                                          // 70
                                                                                                                       //
  if (!el.length > 0) {                                                                                                // 71
    if (callback) {                                                                                                    // 72
      callback(el);                                                                                                    // 72
    }                                                                                                                  // 108
                                                                                                                       //
    return;                                                                                                            // 73
  }                                                                                                                    // 110
                                                                                                                       //
  s = animationSupport();                                                                                              // 74
  p = type ? s.animation : s.transition;                                                                               // 75
  el.one(p, function (e) {                                                                                             // 76
    callback(e);                                                                                                       // 79
  });                                                                                                                  // 76
};                                                                                                                     // 69
                                                                                                                       //
RocketChat.preLoadImgs = function (urls, callback) {                                                                   // 84
  var L_, ended, i, im, loaded, preLoader;                                                                             // 85
                                                                                                                       //
  L_ = function (x) {                                                                                                  // 85
    var ended, imgs, loaded;                                                                                           // 86
                                                                                                                       //
    if (x.width > 0) {                                                                                                 // 86
      $(x).addClass("loaded").removeClass("loading");                                                                  // 87
      loaded = $(".loaded", preLoader);                                                                                // 88
                                                                                                                       //
      if (loaded.length === urls.length && !ended) {                                                                   // 89
        ended = 1;                                                                                                     // 90
        imgs = preLoader.children();                                                                                   // 91
        callback(imgs);                                                                                                // 92
        preLoader.remove();                                                                                            // 93
      }                                                                                                                // 86
    }                                                                                                                  // 131
  };                                                                                                                   // 85
                                                                                                                       //
  im = new Array();                                                                                                    // 95
  preLoader = $("<div/>").attr({                                                                                       // 96
    id: "perverter-preloader"                                                                                          // 96
  });                                                                                                                  // 96
  loaded = void 0;                                                                                                     // 97
  ended = void 0;                                                                                                      // 98
  i = 0;                                                                                                               // 99
                                                                                                                       //
  while (i < urls.length) {                                                                                            // 101
    im[i] = new Image();                                                                                               // 102
                                                                                                                       //
    im[i].onload = function () {                                                                                       // 103
      L_(this);                                                                                                        // 104
    };                                                                                                                 // 103
                                                                                                                       //
    $(im[i]).appendTo(preLoader).addClass("loading");                                                                  // 107
    im[i].src = urls[i];                                                                                               // 108
                                                                                                                       //
    if (im[i].width > 0) {                                                                                             // 109
      L_(im[i]);                                                                                                       // 109
    }                                                                                                                  // 149
                                                                                                                       //
    i++;                                                                                                               // 110
  }                                                                                                                    // 101
};                                                                                                                     // 84
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"RoomHistoryManager.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/RoomHistoryManager.coffee.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.RoomHistoryManager = new (function () {                                                                           // 1
  var clear, defaultLimit, getMore, getMoreIfIsEmpty, getMoreNext, getRoom, getSurroundingMessages, hasMore, hasMoreNext, histories, isLoading;
                                                                                                                       //
  function _Class() {}                                                                                                 // 4
                                                                                                                       //
  defaultLimit = 50;                                                                                                   // 2
  histories = {};                                                                                                      // 4
                                                                                                                       //
  getRoom = function (rid) {                                                                                           // 6
    if (histories[rid] == null) {                                                                                      // 7
      histories[rid] = {                                                                                               // 8
        hasMore: new ReactiveVar(true),                                                                                // 9
        hasMoreNext: new ReactiveVar(false),                                                                           // 10
        isLoading: new ReactiveVar(false),                                                                             // 11
        unreadNotLoaded: new ReactiveVar(0),                                                                           // 12
        firstUnread: new ReactiveVar(),                                                                                // 13
        loaded: void 0                                                                                                 // 14
      };                                                                                                               // 9
    }                                                                                                                  // 20
                                                                                                                       //
    return histories[rid];                                                                                             // 16
  };                                                                                                                   // 6
                                                                                                                       //
  getMore = function (rid, limit) {                                                                                    // 18
    var curRoomDoc, lastMessage, ls, room, subscription, ts, typeName;                                                 // 19
                                                                                                                       //
    if (limit == null) {                                                                                               // 26
      limit = defaultLimit;                                                                                            // 18
    }                                                                                                                  // 28
                                                                                                                       //
    room = getRoom(rid);                                                                                               // 19
                                                                                                                       //
    if (room.hasMore.curValue !== true) {                                                                              // 20
      return;                                                                                                          // 21
    }                                                                                                                  // 32
                                                                                                                       //
    room.isLoading.set(true);                                                                                          // 23
    lastMessage = ChatMessage.findOne({                                                                                // 26
      rid: rid                                                                                                         // 26
    }, {                                                                                                               // 26
      sort: {                                                                                                          // 26
        ts: 1                                                                                                          // 26
      }                                                                                                                // 26
    });                                                                                                                // 26
                                                                                                                       //
    if (lastMessage != null) {                                                                                         // 29
      ts = lastMessage.ts;                                                                                             // 30
    } else {                                                                                                           // 29
      ts = void 0;                                                                                                     // 32
    }                                                                                                                  // 45
                                                                                                                       //
    ls = void 0;                                                                                                       // 34
    typeName = void 0;                                                                                                 // 35
    subscription = ChatSubscription.findOne({                                                                          // 37
      rid: rid                                                                                                         // 37
    });                                                                                                                // 37
                                                                                                                       //
    if (subscription != null) {                                                                                        // 38
      ls = subscription.ls;                                                                                            // 39
      typeName = subscription.t + subscription.name;                                                                   // 40
    } else {                                                                                                           // 38
      curRoomDoc = ChatRoom.findOne({                                                                                  // 42
        _id: rid                                                                                                       // 42
      });                                                                                                              // 42
      typeName = (curRoomDoc != null ? curRoomDoc.t : void 0) + (curRoomDoc != null ? curRoomDoc.name : void 0);       // 43
    }                                                                                                                  // 59
                                                                                                                       //
    return Meteor.call('loadHistory', rid, ts, limit, ls, function (err, result) {                                     // 60
      var heightDiff, i, item, len, previousHeight, ref, ref1, ref2, ref3, ref4, ref5, ref6, wrapper;                  // 46
      room.unreadNotLoaded.set(result != null ? result.unreadNotLoaded : void 0);                                      // 46
      room.firstUnread.set(result != null ? result.firstUnread : void 0);                                              // 47
      wrapper = $('.messages-box .wrapper').get(0);                                                                    // 49
                                                                                                                       //
      if (wrapper != null) {                                                                                           // 50
        previousHeight = wrapper.scrollHeight;                                                                         // 51
      }                                                                                                                // 67
                                                                                                                       //
      ref = (result != null ? result.messages : void 0) || [];                                                         // 53
                                                                                                                       //
      for (i = 0, len = ref.length; i < len; i++) {                                                                    // 53
        item = ref[i];                                                                                                 // 70
                                                                                                                       //
        if (!(item.t !== 'command')) {                                                                                 // 71
          continue;                                                                                                    // 72
        }                                                                                                              // 73
                                                                                                                       //
        item.roles = _.union((ref1 = UserRoles.findOne((ref2 = item.u) != null ? ref2._id : void 0)) != null ? ref1.roles : void 0, (ref3 = RoomRoles.findOne({
          rid: item.rid,                                                                                               // 75
          'u._id': (ref4 = item.u) != null ? ref4._id : void 0                                                         // 76
        })) != null ? ref3.roles : void 0);                                                                            // 54
        ChatMessage.upsert({                                                                                           // 55
          _id: item._id                                                                                                // 55
        }, item);                                                                                                      // 55
      }                                                                                                                // 53
                                                                                                                       //
      if (wrapper != null) {                                                                                           // 57
        heightDiff = wrapper.scrollHeight - previousHeight;                                                            // 58
        wrapper.scrollTop += heightDiff;                                                                               // 59
      }                                                                                                                // 85
                                                                                                                       //
      Meteor.defer(function () {                                                                                       // 61
        readMessage.refreshUnreadMark(rid, true);                                                                      // 62
        return RoomManager.updateMentionsMarksOfRoom(typeName);                                                        // 88
      });                                                                                                              // 61
      room.isLoading.set(false);                                                                                       // 65
                                                                                                                       //
      if (room.loaded == null) {                                                                                       // 91
        room.loaded = 0;                                                                                               // 66
      }                                                                                                                // 93
                                                                                                                       //
      if ((result != null ? (ref5 = result.messages) != null ? ref5.length : void 0 : void 0) != null) {               // 67
        room.loaded += result.messages.length;                                                                         // 68
      }                                                                                                                // 96
                                                                                                                       //
      if ((result != null ? (ref6 = result.messages) != null ? ref6.length : void 0 : void 0) < limit) {               // 69
        return room.hasMore.set(false);                                                                                // 98
      }                                                                                                                // 99
    });                                                                                                                // 45
  };                                                                                                                   // 18
                                                                                                                       //
  getMoreNext = function (rid, limit) {                                                                                // 72
    var curRoomDoc, instance, lastMessage, ls, room, subscription, ts, typeName;                                       // 73
                                                                                                                       //
    if (limit == null) {                                                                                               // 105
      limit = defaultLimit;                                                                                            // 72
    }                                                                                                                  // 107
                                                                                                                       //
    room = getRoom(rid);                                                                                               // 73
                                                                                                                       //
    if (room.hasMoreNext.curValue !== true) {                                                                          // 74
      return;                                                                                                          // 75
    }                                                                                                                  // 111
                                                                                                                       //
    instance = Blaze.getView($('.messages-box .wrapper')[0]).templateInstance();                                       // 77
    instance.atBottom = false;                                                                                         // 78
    room.isLoading.set(true);                                                                                          // 80
    lastMessage = ChatMessage.findOne({                                                                                // 82
      rid: rid                                                                                                         // 82
    }, {                                                                                                               // 82
      sort: {                                                                                                          // 82
        ts: -1                                                                                                         // 82
      }                                                                                                                // 82
    });                                                                                                                // 82
    typeName = void 0;                                                                                                 // 84
    subscription = ChatSubscription.findOne({                                                                          // 86
      rid: rid                                                                                                         // 86
    });                                                                                                                // 86
                                                                                                                       //
    if (subscription != null) {                                                                                        // 87
      ls = subscription.ls;                                                                                            // 88
      typeName = subscription.t + subscription.name;                                                                   // 89
    } else {                                                                                                           // 87
      curRoomDoc = ChatRoom.findOne({                                                                                  // 91
        _id: rid                                                                                                       // 91
      });                                                                                                              // 91
      typeName = (curRoomDoc != null ? curRoomDoc.t : void 0) + (curRoomDoc != null ? curRoomDoc.name : void 0);       // 92
    }                                                                                                                  // 134
                                                                                                                       //
    ts = lastMessage.ts;                                                                                               // 94
                                                                                                                       //
    if (ts) {                                                                                                          // 96
      return Meteor.call('loadNextMessages', rid, ts, limit, function (err, result) {                                  // 137
        var i, item, len, ref, ref1, ref2, ref3, ref4;                                                                 // 98
        ref = (result != null ? result.messages : void 0) || [];                                                       // 98
                                                                                                                       //
        for (i = 0, len = ref.length; i < len; i++) {                                                                  // 98
          item = ref[i];                                                                                               // 141
                                                                                                                       //
          if (item.t !== 'command') {                                                                                  // 99
            item.roles = _.union((ref1 = UserRoles.findOne((ref2 = item.u) != null ? ref2._id : void 0)) != null ? ref1.roles : void 0, (ref3 = RoomRoles.findOne({
              rid: item.rid,                                                                                           // 144
              'u._id': (ref4 = item.u) != null ? ref4._id : void 0                                                     // 145
            })) != null ? ref3.roles : void 0);                                                                        // 100
            ChatMessage.upsert({                                                                                       // 101
              _id: item._id                                                                                            // 101
            }, item);                                                                                                  // 101
          }                                                                                                            // 150
        }                                                                                                              // 98
                                                                                                                       //
        Meteor.defer(function () {                                                                                     // 103
          return RoomManager.updateMentionsMarksOfRoom(typeName);                                                      // 153
        });                                                                                                            // 103
        room.isLoading.set(false);                                                                                     // 106
                                                                                                                       //
        if (room.loaded == null) {                                                                                     // 156
          room.loaded = 0;                                                                                             // 107
        }                                                                                                              // 158
                                                                                                                       //
        if (result.messages.length != null) {                                                                          // 108
          room.loaded += result.messages.length;                                                                       // 109
        }                                                                                                              // 161
                                                                                                                       //
        if (result.messages.length < limit) {                                                                          // 110
          return room.hasMoreNext.set(false);                                                                          // 163
        }                                                                                                              // 164
      });                                                                                                              // 97
    }                                                                                                                  // 166
  };                                                                                                                   // 72
                                                                                                                       //
  getSurroundingMessages = function (message, limit) {                                                                 // 113
    var curRoomDoc, instance, ls, msgElement, pos, room, subscription, typeName, wrapper;                              // 114
                                                                                                                       //
    if (limit == null) {                                                                                               // 171
      limit = defaultLimit;                                                                                            // 113
    }                                                                                                                  // 173
                                                                                                                       //
    if (!(message != null ? message.rid : void 0)) {                                                                   // 114
      return;                                                                                                          // 115
    }                                                                                                                  // 176
                                                                                                                       //
    instance = Blaze.getView($('.messages-box .wrapper')[0]).templateInstance();                                       // 117
                                                                                                                       //
    if (ChatMessage.findOne(message._id)) {                                                                            // 119
      wrapper = $('.messages-box .wrapper');                                                                           // 120
      msgElement = $("#" + message._id, wrapper);                                                                      // 121
      pos = wrapper.scrollTop() + msgElement.offset().top - wrapper.height() / 2;                                      // 122
      wrapper.animate({                                                                                                // 123
        scrollTop: pos                                                                                                 // 124
      }, 500);                                                                                                         // 123
      msgElement.addClass('highlight');                                                                                // 126
      setTimeout(function () {                                                                                         // 128
        var messages;                                                                                                  // 129
        messages = wrapper[0];                                                                                         // 129
        return instance.atBottom = messages.scrollTop >= messages.scrollHeight - messages.clientHeight;                // 189
      });                                                                                                              // 128
      return setTimeout(function () {                                                                                  // 191
        return msgElement.removeClass('highlight');                                                                    // 192
      }, 500);                                                                                                         // 132
    } else {                                                                                                           // 119
      room = getRoom(message.rid);                                                                                     // 136
      room.isLoading.set(true);                                                                                        // 137
      ChatMessage.remove({                                                                                             // 138
        rid: message.rid                                                                                               // 138
      });                                                                                                              // 138
      typeName = void 0;                                                                                               // 140
      subscription = ChatSubscription.findOne({                                                                        // 142
        rid: message.rid                                                                                               // 142
      });                                                                                                              // 142
                                                                                                                       //
      if (subscription != null) {                                                                                      // 143
        ls = subscription.ls;                                                                                          // 144
        typeName = subscription.t + subscription.name;                                                                 // 145
      } else {                                                                                                         // 143
        curRoomDoc = ChatRoom.findOne({                                                                                // 147
          _id: message.rid                                                                                             // 147
        });                                                                                                            // 147
        typeName = (curRoomDoc != null ? curRoomDoc.t : void 0) + (curRoomDoc != null ? curRoomDoc.name : void 0);     // 148
      }                                                                                                                // 212
                                                                                                                       //
      return Meteor.call('loadSurroundingMessages', message, limit, function (err, result) {                           // 213
        var i, item, len, ref, ref1, ref2, ref3, ref4;                                                                 // 151
        ref = (result != null ? result.messages : void 0) || [];                                                       // 151
                                                                                                                       //
        for (i = 0, len = ref.length; i < len; i++) {                                                                  // 151
          item = ref[i];                                                                                               // 217
                                                                                                                       //
          if (item.t !== 'command') {                                                                                  // 152
            item.roles = _.union((ref1 = UserRoles.findOne((ref2 = item.u) != null ? ref2._id : void 0)) != null ? ref1.roles : void 0, (ref3 = RoomRoles.findOne({
              rid: item.rid,                                                                                           // 220
              'u._id': (ref4 = item.u) != null ? ref4._id : void 0                                                     // 221
            })) != null ? ref3.roles : void 0);                                                                        // 153
            ChatMessage.upsert({                                                                                       // 154
              _id: item._id                                                                                            // 154
            }, item);                                                                                                  // 154
          }                                                                                                            // 226
        }                                                                                                              // 151
                                                                                                                       //
        Meteor.defer(function () {                                                                                     // 156
          readMessage.refreshUnreadMark(message.rid, true);                                                            // 157
          RoomManager.updateMentionsMarksOfRoom(typeName);                                                             // 158
          wrapper = $('.messages-box .wrapper');                                                                       // 159
          msgElement = $("#" + message._id, wrapper);                                                                  // 160
          pos = wrapper.scrollTop() + msgElement.offset().top - wrapper.height() / 2;                                  // 161
          wrapper.animate({                                                                                            // 162
            scrollTop: pos                                                                                             // 163
          }, 500);                                                                                                     // 162
          msgElement.addClass('highlight');                                                                            // 166
          setTimeout(function () {                                                                                     // 168
            var messages;                                                                                              // 169
            room.isLoading.set(false);                                                                                 // 169
            messages = wrapper[0];                                                                                     // 170
            return instance.atBottom = !result.moreAfter && messages.scrollTop >= messages.scrollHeight - messages.clientHeight;
          }, 500);                                                                                                     // 168
          return setTimeout(function () {                                                                              // 244
            return msgElement.removeClass('highlight');                                                                // 245
          }, 500);                                                                                                     // 174
        });                                                                                                            // 156
                                                                                                                       //
        if (room.loaded == null) {                                                                                     // 248
          room.loaded = 0;                                                                                             // 177
        }                                                                                                              // 250
                                                                                                                       //
        if (result.messages.length != null) {                                                                          // 178
          room.loaded += result.messages.length;                                                                       // 179
        }                                                                                                              // 253
                                                                                                                       //
        room.hasMore.set(result.moreBefore);                                                                           // 180
        return room.hasMoreNext.set(result.moreAfter);                                                                 // 255
      });                                                                                                              // 150
    }                                                                                                                  // 257
  };                                                                                                                   // 113
                                                                                                                       //
  hasMore = function (rid) {                                                                                           // 183
    var room;                                                                                                          // 184
    room = getRoom(rid);                                                                                               // 184
    return room.hasMore.get();                                                                                         // 186
  };                                                                                                                   // 183
                                                                                                                       //
  hasMoreNext = function (rid) {                                                                                       // 188
    var room;                                                                                                          // 189
    room = getRoom(rid);                                                                                               // 189
    return room.hasMoreNext.get();                                                                                     // 190
  };                                                                                                                   // 188
                                                                                                                       //
  getMoreIfIsEmpty = function (rid) {                                                                                  // 193
    var room;                                                                                                          // 194
    room = getRoom(rid);                                                                                               // 194
                                                                                                                       //
    if (room.loaded === void 0) {                                                                                      // 196
      return getMore(rid);                                                                                             // 276
    }                                                                                                                  // 277
  };                                                                                                                   // 193
                                                                                                                       //
  isLoading = function (rid) {                                                                                         // 200
    var room;                                                                                                          // 201
    room = getRoom(rid);                                                                                               // 201
    return room.isLoading.get();                                                                                       // 202
  };                                                                                                                   // 200
                                                                                                                       //
  clear = function (rid) {                                                                                             // 204
    ChatMessage.remove({                                                                                               // 205
      rid: rid                                                                                                         // 205
    });                                                                                                                // 205
                                                                                                                       //
    if (histories[rid] != null) {                                                                                      // 206
      histories[rid].hasMore.set(true);                                                                                // 207
      histories[rid].isLoading.set(false);                                                                             // 208
      return histories[rid].loaded = void 0;                                                                           // 293
    }                                                                                                                  // 294
  };                                                                                                                   // 204
                                                                                                                       //
  _Class.prototype.getRoom = getRoom;                                                                                  // 297
  _Class.prototype.getMore = getMore;                                                                                  // 299
  _Class.prototype.getMoreNext = getMoreNext;                                                                          // 301
  _Class.prototype.getMoreIfIsEmpty = getMoreIfIsEmpty;                                                                // 303
  _Class.prototype.hasMore = hasMore;                                                                                  // 305
  _Class.prototype.hasMoreNext = hasMoreNext;                                                                          // 307
  _Class.prototype.isLoading = isLoading;                                                                              // 309
  _Class.prototype.clear = clear;                                                                                      // 311
  _Class.prototype.getSurroundingMessages = getSurroundingMessages;                                                    // 313
  return _Class;                                                                                                       // 315
}())();                                                                                                                // 317
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"RoomManager.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/RoomManager.coffee.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var connectionWasOnline, currentUsername, loadMissedMessages, onDeleteMessageStream;                                   // 1
                                                                                                                       //
loadMissedMessages = function (rid) {                                                                                  // 1
  var lastMessage;                                                                                                     // 2
  lastMessage = ChatMessage.findOne({                                                                                  // 2
    rid: rid                                                                                                           // 2
  }, {                                                                                                                 // 2
    sort: {                                                                                                            // 2
      ts: -1                                                                                                           // 2
    },                                                                                                                 // 2
    limit: 1                                                                                                           // 2
  });                                                                                                                  // 2
                                                                                                                       //
  if (lastMessage == null) {                                                                                           // 3
    return;                                                                                                            // 4
  }                                                                                                                    // 15
                                                                                                                       //
  return Meteor.call('loadMissedMessages', rid, lastMessage.ts, function (err, result) {                               // 16
    var i, item, len, results;                                                                                         // 7
    results = [];                                                                                                      // 7
                                                                                                                       //
    for (i = 0, len = result.length; i < len; i++) {                                                                   // 19
      item = result[i];                                                                                                // 20
      results.push(RocketChat.promises.run('onClientMessageReceived', item).then(function (item) {                     // 21
        var ref, ref1, ref2, ref3;                                                                                     // 9
        item.roles = _.union((ref = UserRoles.findOne((ref1 = item.u) != null ? ref1._id : void 0)) != null ? ref.roles : void 0, (ref2 = RoomRoles.findOne({
          rid: item.rid,                                                                                               // 24
          'u._id': (ref3 = item.u) != null ? ref3._id : void 0                                                         // 25
        })) != null ? ref2.roles : void 0);                                                                            // 9
        return ChatMessage.upsert({                                                                                    // 27
          _id: item._id                                                                                                // 10
        }, item);                                                                                                      // 10
      }));                                                                                                             // 8
    }                                                                                                                  // 7
                                                                                                                       //
    return results;                                                                                                    // 32
  });                                                                                                                  // 6
};                                                                                                                     // 1
                                                                                                                       //
connectionWasOnline = true;                                                                                            // 12
Tracker.autorun(function () {                                                                                          // 13
  var connected, key, ref, value;                                                                                      // 14
  connected = Meteor.connection.status().connected;                                                                    // 14
                                                                                                                       //
  if (connected === true && connectionWasOnline === false && RoomManager.openedRooms != null) {                        // 16
    ref = RoomManager.openedRooms;                                                                                     // 17
                                                                                                                       //
    for (key in meteorBabelHelpers.sanitizeForInObject(ref)) {                                                         // 17
      value = ref[key];                                                                                                // 44
                                                                                                                       //
      if (value.rid != null) {                                                                                         // 18
        loadMissedMessages(value.rid);                                                                                 // 19
      }                                                                                                                // 47
    }                                                                                                                  // 16
  }                                                                                                                    // 49
                                                                                                                       //
  return connectionWasOnline = connected;                                                                              // 50
});                                                                                                                    // 13
currentUsername = void 0;                                                                                              // 24
Tracker.autorun(function (c) {                                                                                         // 25
  var user;                                                                                                            // 26
  user = Meteor.user();                                                                                                // 26
                                                                                                                       //
  if (currentUsername === void 0 && (user != null ? user.username : void 0) != null) {                                 // 27
    currentUsername = user.username;                                                                                   // 28
    RoomManager.closeAllRooms();                                                                                       // 29
    return FlowRouter._current.route.callAction(FlowRouter._current);                                                  // 61
  }                                                                                                                    // 62
});                                                                                                                    // 25
Meteor.startup(function () {                                                                                           // 32
  return ChatMessage.find().observe({                                                                                  // 66
    removed: function (record) {                                                                                       // 34
      var recordAfter, recordBefore;                                                                                   // 35
                                                                                                                       //
      if (RoomManager.getOpenedRoomByRid(record.rid) != null) {                                                        // 35
        recordBefore = ChatMessage.findOne({                                                                           // 36
          ts: {                                                                                                        // 36
            $lt: record.ts                                                                                             // 36
          }                                                                                                            // 36
        }, {                                                                                                           // 36
          sort: {                                                                                                      // 36
            ts: -1                                                                                                     // 36
          }                                                                                                            // 36
        });                                                                                                            // 36
                                                                                                                       //
        if (recordBefore != null) {                                                                                    // 37
          ChatMessage.update({                                                                                         // 38
            _id: recordBefore._id                                                                                      // 38
          }, {                                                                                                         // 38
            $set: {                                                                                                    // 38
              tick: new Date()                                                                                         // 38
            }                                                                                                          // 38
          });                                                                                                          // 38
        }                                                                                                              // 87
                                                                                                                       //
        recordAfter = ChatMessage.findOne({                                                                            // 40
          ts: {                                                                                                        // 40
            $gt: record.ts                                                                                             // 40
          }                                                                                                            // 40
        }, {                                                                                                           // 40
          sort: {                                                                                                      // 40
            ts: 1                                                                                                      // 40
          }                                                                                                            // 40
        });                                                                                                            // 40
                                                                                                                       //
        if (recordAfter != null) {                                                                                     // 41
          return ChatMessage.update({                                                                                  // 98
            _id: recordAfter._id                                                                                       // 42
          }, {                                                                                                         // 42
            $set: {                                                                                                    // 42
              tick: new Date()                                                                                         // 42
            }                                                                                                          // 42
          });                                                                                                          // 42
        }                                                                                                              // 35
      }                                                                                                                // 106
    }                                                                                                                  // 34
  });                                                                                                                  // 34
});                                                                                                                    // 32
                                                                                                                       //
onDeleteMessageStream = function (msg) {                                                                               // 45
  return ChatMessage.remove({                                                                                          // 112
    _id: msg._id                                                                                                       // 46
  });                                                                                                                  // 46
};                                                                                                                     // 45
                                                                                                                       //
Tracker.autorun(function () {                                                                                          // 49
  if (Meteor.userId()) {                                                                                               // 50
    return RocketChat.Notifications.onUser('message', function (msg) {                                                 // 119
      msg.u = {                                                                                                        // 52
        username: 'rocket.cat'                                                                                         // 53
      };                                                                                                               // 53
      msg["private"] = true;                                                                                           // 54
      return ChatMessage.upsert({                                                                                      // 124
        _id: msg._id                                                                                                   // 56
      }, msg);                                                                                                         // 56
    });                                                                                                                // 51
  }                                                                                                                    // 128
});                                                                                                                    // 49
this.RoomManager = new (function () {                                                                                  // 59
  var Dep, close, closeAllRooms, closeOlderRooms, computation, existsDomOfRoom, getDomOfRoom, getOpenedRoomByRid, msgStream, onlineUsers, open, openedRooms, updateMentionsMarksOfRoom, updateUserStatus;
                                                                                                                       //
  function _Class() {}                                                                                                 // 134
                                                                                                                       //
  openedRooms = {};                                                                                                    // 60
  msgStream = new Meteor.Streamer('room-messages');                                                                    // 61
  onlineUsers = new ReactiveVar({});                                                                                   // 62
  Dep = new Tracker.Dependency();                                                                                      // 64
                                                                                                                       //
  close = function (typeName) {                                                                                        // 66
    var rid;                                                                                                           // 67
                                                                                                                       //
    if (openedRooms[typeName]) {                                                                                       // 67
      if (openedRooms[typeName].rid != null) {                                                                         // 68
        msgStream.removeAllListeners(openedRooms[typeName].rid);                                                       // 69
        RocketChat.Notifications.unRoom(openedRooms[typeName].rid, 'deleteMessage', onDeleteMessageStream);            // 70
      }                                                                                                                // 150
                                                                                                                       //
      openedRooms[typeName].ready = false;                                                                             // 72
      openedRooms[typeName].active = false;                                                                            // 73
                                                                                                                       //
      if (openedRooms[typeName].template != null) {                                                                    // 74
        Blaze.remove(openedRooms[typeName].template);                                                                  // 75
      }                                                                                                                // 155
                                                                                                                       //
      delete openedRooms[typeName].dom;                                                                                // 76
      delete openedRooms[typeName].template;                                                                           // 77
      rid = openedRooms[typeName].rid;                                                                                 // 79
      delete openedRooms[typeName];                                                                                    // 80
                                                                                                                       //
      if (rid != null) {                                                                                               // 82
        return RoomHistoryManager.clear(rid);                                                                          // 161
      }                                                                                                                // 67
    }                                                                                                                  // 163
  };                                                                                                                   // 66
                                                                                                                       //
  computation = Tracker.autorun(function () {                                                                          // 86
    var record, results, typeName;                                                                                     // 87
    results = [];                                                                                                      // 87
                                                                                                                       //
    for (typeName in meteorBabelHelpers.sanitizeForInObject(openedRooms)) {                                            // 169
      record = openedRooms[typeName];                                                                                  // 170
                                                                                                                       //
      if (record.active === true) {                                                                                    // 171
        results.push(function (typeName, record) {                                                                     // 172
          var name, ready, room, type, user;                                                                           // 90
          user = Meteor.user();                                                                                        // 90
                                                                                                                       //
          if (record.ready === true) {                                                                                 // 92
            return;                                                                                                    // 93
          }                                                                                                            // 177
                                                                                                                       //
          ready = CachedChatRoom.ready.get() && CachedChatSubscription.ready.get() === true;                           // 95
                                                                                                                       //
          if (ready === true) {                                                                                        // 97
            type = typeName.substr(0, 1);                                                                              // 98
            name = typeName.substr(1);                                                                                 // 99
            room = Tracker.nonreactive(function (_this) {                                                              // 101
              return function () {                                                                                     // 183
                return RocketChat.roomTypes.findRoom(type, name, user);                                                // 102
              };                                                                                                       // 101
            }(this));                                                                                                  // 101
                                                                                                                       //
            if (room == null) {                                                                                        // 104
              record.ready = true;                                                                                     // 105
            } else {                                                                                                   // 104
              openedRooms[typeName].rid = room._id;                                                                    // 107
              RoomHistoryManager.getMoreIfIsEmpty(room._id);                                                           // 109
              record.ready = RoomHistoryManager.isLoading(room._id) === false;                                         // 110
              Dep.changed();                                                                                           // 111
                                                                                                                       //
              if (openedRooms[typeName].streamActive !== true) {                                                       // 113
                openedRooms[typeName].streamActive = true;                                                             // 114
                msgStream.on(openedRooms[typeName].rid, function (msg) {                                               // 115
                  return RocketChat.promises.run('onClientMessageReceived', msg).then(function (msg) {                 // 197
                    var ref, ref1, ref2, ref3;                                                                         // 120
                                                                                                                       //
                    if (RoomHistoryManager.hasMoreNext(openedRooms[typeName].rid) === false) {                         // 120
                      if (msg.t !== 'command') {                                                                       // 123
                        msg.roles = _.union((ref = UserRoles.findOne((ref1 = msg.u) != null ? ref1._id : void 0)) != null ? ref.roles : void 0, (ref2 = RoomRoles.findOne({
                          rid: msg.rid,                                                                                // 202
                          'u._id': (ref3 = msg.u) != null ? ref3._id : void 0                                          // 203
                        })) != null ? ref2.roles : void 0);                                                            // 124
                        ChatMessage.upsert({                                                                           // 125
                          _id: msg._id                                                                                 // 125
                        }, msg);                                                                                       // 125
                      }                                                                                                // 208
                                                                                                                       //
                      Meteor.defer(function () {                                                                       // 127
                        return RoomManager.updateMentionsMarksOfRoom(typeName);                                        // 210
                      });                                                                                              // 127
                      RocketChat.callbacks.run('streamMessage', msg);                                                  // 130
                      return window.fireGlobalEvent('new-message', msg);                                               // 213
                    }                                                                                                  // 214
                  });                                                                                                  // 117
                });                                                                                                    // 115
                RocketChat.Notifications.onRoom(openedRooms[typeName].rid, 'deleteMessage', onDeleteMessageStream);    // 134
              }                                                                                                        // 104
            }                                                                                                          // 97
          }                                                                                                            // 220
                                                                                                                       //
          return Dep.changed();                                                                                        // 221
        }(typeName, record));                                                                                          // 88
      }                                                                                                                // 223
    }                                                                                                                  // 87
                                                                                                                       //
    return results;                                                                                                    // 225
  });                                                                                                                  // 86
                                                                                                                       //
  closeOlderRooms = function () {                                                                                      // 139
    var i, len, maxRoomsOpen, results, roomToClose, roomsToClose;                                                      // 140
    maxRoomsOpen = 10;                                                                                                 // 140
                                                                                                                       //
    if (Object.keys(openedRooms).length <= maxRoomsOpen) {                                                             // 141
      return;                                                                                                          // 142
    }                                                                                                                  // 233
                                                                                                                       //
    roomsToClose = _.sortBy(_.values(openedRooms), 'lastSeen').reverse().slice(maxRoomsOpen);                          // 144
    results = [];                                                                                                      // 145
                                                                                                                       //
    for (i = 0, len = roomsToClose.length; i < len; i++) {                                                             // 236
      roomToClose = roomsToClose[i];                                                                                   // 237
      results.push(close(roomToClose.typeName));                                                                       // 238
    }                                                                                                                  // 145
                                                                                                                       //
    return results;                                                                                                    // 240
  };                                                                                                                   // 139
                                                                                                                       //
  closeAllRooms = function () {                                                                                        // 149
    var key, openedRoom, results;                                                                                      // 150
    results = [];                                                                                                      // 150
                                                                                                                       //
    for (key in meteorBabelHelpers.sanitizeForInObject(openedRooms)) {                                                 // 246
      openedRoom = openedRooms[key];                                                                                   // 247
      results.push(close(openedRoom.typeName));                                                                        // 248
    }                                                                                                                  // 150
                                                                                                                       //
    return results;                                                                                                    // 250
  };                                                                                                                   // 149
                                                                                                                       //
  open = function (typeName) {                                                                                         // 154
    if (openedRooms[typeName] == null) {                                                                               // 155
      openedRooms[typeName] = {                                                                                        // 156
        typeName: typeName,                                                                                            // 157
        active: false,                                                                                                 // 158
        ready: false,                                                                                                  // 159
        unreadSince: new ReactiveVar(void 0)                                                                           // 160
      };                                                                                                               // 157
    }                                                                                                                  // 261
                                                                                                                       //
    openedRooms[typeName].lastSeen = new Date();                                                                       // 162
                                                                                                                       //
    if (openedRooms[typeName].ready) {                                                                                 // 164
      closeOlderRooms();                                                                                               // 165
    }                                                                                                                  // 265
                                                                                                                       //
    if (CachedChatSubscription.ready.get() === true) {                                                                 // 167
      if (openedRooms[typeName].active !== true) {                                                                     // 169
        openedRooms[typeName].active = true;                                                                           // 170
                                                                                                                       //
        if (computation != null) {                                                                                     // 269
          computation.invalidate();                                                                                    // 172
        }                                                                                                              // 169
      }                                                                                                                // 167
    }                                                                                                                  // 273
                                                                                                                       //
    return {                                                                                                           // 174
      ready: function () {                                                                                             // 175
        Dep.depend();                                                                                                  // 176
        return openedRooms[typeName].ready;                                                                            // 177
      }                                                                                                                // 174
    };                                                                                                                 // 174
  };                                                                                                                   // 154
                                                                                                                       //
  getOpenedRoomByRid = function (rid) {                                                                                // 180
    var openedRoom, typeName;                                                                                          // 181
                                                                                                                       //
    for (typeName in meteorBabelHelpers.sanitizeForInObject(openedRooms)) {                                            // 181
      openedRoom = openedRooms[typeName];                                                                              // 285
                                                                                                                       //
      if (openedRoom.rid === rid) {                                                                                    // 182
        return openedRoom;                                                                                             // 183
      }                                                                                                                // 288
    }                                                                                                                  // 181
  };                                                                                                                   // 180
                                                                                                                       //
  getDomOfRoom = function (typeName, rid) {                                                                            // 185
    var contentAsFunc, room;                                                                                           // 186
    room = openedRooms[typeName];                                                                                      // 186
                                                                                                                       //
    if (room == null) {                                                                                                // 187
      return;                                                                                                          // 188
    }                                                                                                                  // 297
                                                                                                                       //
    if (room.dom == null && rid != null) {                                                                             // 190
      room.dom = document.createElement('div');                                                                        // 191
      room.dom.classList.add('room-container');                                                                        // 192
                                                                                                                       //
      contentAsFunc = function (content) {                                                                             // 193
        return function () {                                                                                           // 194
          return content;                                                                                              // 303
        };                                                                                                             // 194
      };                                                                                                               // 193
                                                                                                                       //
      room.template = Blaze._TemplateWith({                                                                            // 196
        _id: rid                                                                                                       // 196
      }, contentAsFunc(Template.room));                                                                                // 196
      Blaze.render(room.template, room.dom);                                                                           // 197
    }                                                                                                                  // 310
                                                                                                                       //
    return room.dom;                                                                                                   // 199
  };                                                                                                                   // 185
                                                                                                                       //
  existsDomOfRoom = function (typeName) {                                                                              // 201
    var room;                                                                                                          // 202
    room = openedRooms[typeName];                                                                                      // 202
    return (room != null ? room.dom : void 0) != null;                                                                 // 203
  };                                                                                                                   // 201
                                                                                                                       //
  updateUserStatus = function (user, status, utcOffset) {                                                              // 205
    var onlineUsersValue;                                                                                              // 206
    onlineUsersValue = onlineUsers.curValue;                                                                           // 206
                                                                                                                       //
    if (status === 'offline') {                                                                                        // 208
      delete onlineUsersValue[user.username];                                                                          // 209
    } else {                                                                                                           // 208
      onlineUsersValue[user.username] = {                                                                              // 211
        _id: user._id,                                                                                                 // 212
        status: status,                                                                                                // 213
        utcOffset: utcOffset                                                                                           // 214
      };                                                                                                               // 212
    }                                                                                                                  // 331
                                                                                                                       //
    return onlineUsers.set(onlineUsersValue);                                                                          // 332
  };                                                                                                                   // 205
                                                                                                                       //
  updateMentionsMarksOfRoom = function (typeName) {                                                                    // 218
    var dom, scrollTop, ticksBar, totalHeight;                                                                         // 219
    dom = getDomOfRoom(typeName);                                                                                      // 219
                                                                                                                       //
    if (dom == null) {                                                                                                 // 220
      return;                                                                                                          // 221
    }                                                                                                                  // 340
                                                                                                                       //
    ticksBar = $(dom).find('.ticks-bar');                                                                              // 223
    $(dom).find('.ticks-bar > .tick').remove();                                                                        // 224
    scrollTop = $(dom).find('.messages-box > .wrapper').scrollTop() - 50;                                              // 226
    totalHeight = $(dom).find('.messages-box > .wrapper > ul').height() + 40;                                          // 227
    return $('.messages-box .mention-link-me').each(function (index, item) {                                           // 345
      var percent, topOffset;                                                                                          // 230
      topOffset = $(item).offset().top + scrollTop;                                                                    // 230
      percent = 100 / totalHeight * topOffset;                                                                         // 231
                                                                                                                       //
      if ($(item).hasClass('mention-link-all')) {                                                                      // 232
        return ticksBar.append('<div class="tick background-attention-color" style="top: ' + percent + '%;"></div>');  // 350
      } else {                                                                                                         // 232
        return ticksBar.append('<div class="tick background-primary-action-color" style="top: ' + percent + '%;"></div>');
      }                                                                                                                // 353
    });                                                                                                                // 229
  };                                                                                                                   // 218
                                                                                                                       //
  _Class.prototype.open = open;                                                                                        // 357
  _Class.prototype.close = close;                                                                                      // 359
  _Class.prototype.closeAllRooms = closeAllRooms;                                                                      // 361
  _Class.prototype.getDomOfRoom = getDomOfRoom;                                                                        // 363
  _Class.prototype.existsDomOfRoom = existsDomOfRoom;                                                                  // 365
  _Class.prototype.msgStream = msgStream;                                                                              // 367
  _Class.prototype.openedRooms = openedRooms;                                                                          // 369
  _Class.prototype.updateUserStatus = updateUserStatus;                                                                // 371
  _Class.prototype.onlineUsers = onlineUsers;                                                                          // 373
  _Class.prototype.updateMentionsMarksOfRoom = updateMentionsMarksOfRoom;                                              // 375
  _Class.prototype.getOpenedRoomByRid = getOpenedRoomByRid;                                                            // 377
  _Class.prototype.computation = computation;                                                                          // 379
  return _Class;                                                                                                       // 381
}())();                                                                                                                // 383
RocketChat.callbacks.add('afterLogoutCleanUp', function () {                                                           // 251
  return RoomManager.closeAllRooms();                                                                                  // 386
}, RocketChat.callbacks.priority.MEDIUM, 'roommanager-after-logout-cleanup');                                          // 251
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"sideNav.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/sideNav.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
this.SideNav = new (function () {                                                                                      // 1
	function _class() {                                                                                                   // 2
		(0, _classCallCheck3.default)(this, _class);                                                                         // 2
		this.initiated = false;                                                                                              // 3
		this.sideNav = {};                                                                                                   // 4
		this.flexNav = {};                                                                                                   // 5
		this.arrow = {};                                                                                                     // 6
		this.animating = false;                                                                                              // 7
		this.openQueue = [];                                                                                                 // 8
	}                                                                                                                     // 9
                                                                                                                       //
	_class.prototype.toggleArrow = function () {                                                                          // 1
		function toggleArrow() {                                                                                             // 1
			var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;                              // 11
                                                                                                                       //
			if (status === 0) {                                                                                                 // 12
				this.arrow.addClass('close');                                                                                      // 13
				this.arrow.removeClass('top');                                                                                     // 14
				return this.arrow.removeClass('bottom');                                                                           // 15
			} else if (status === -1 || status !== 1 && this.arrow.hasClass('top')) {                                           // 16
				this.arrow.removeClass('close');                                                                                   // 17
				this.arrow.removeClass('top');                                                                                     // 18
				return this.arrow.addClass('bottom');                                                                              // 19
			} else {                                                                                                            // 20
				this.arrow.removeClass('close');                                                                                   // 21
				this.arrow.addClass('top');                                                                                        // 22
				return this.arrow.removeClass('bottom');                                                                           // 23
			}                                                                                                                   // 24
		}                                                                                                                    // 25
                                                                                                                       //
		return toggleArrow;                                                                                                  // 1
	}();                                                                                                                  // 1
                                                                                                                       //
	_class.prototype.toggleFlex = function () {                                                                           // 1
		function toggleFlex(status, callback) {                                                                              // 1
			var _this = this;                                                                                                   // 26
                                                                                                                       //
			if (this.animating === true) {                                                                                      // 27
				return;                                                                                                            // 28
			}                                                                                                                   // 29
                                                                                                                       //
			this.animating = true;                                                                                              // 30
                                                                                                                       //
			if (status === -1 || status !== 1 && this.flexNav.opened) {                                                         // 31
				this.flexNav.opened = false;                                                                                       // 32
				this.flexNav.addClass('animated-hidden');                                                                          // 33
			} else {                                                                                                            // 34
				this.flexNav.opened = true;                                                                                        // 35
				setTimeout(function () {                                                                                           // 36
					return _this.flexNav.removeClass('animated-hidden');                                                              // 37
				}, 50);                                                                                                            // 38
			}                                                                                                                   // 39
                                                                                                                       //
			return setTimeout(function () {                                                                                     // 40
				_this.animating = false;                                                                                           // 41
				return typeof callback === 'function' && callback();                                                               // 42
			}, 500);                                                                                                            // 43
		}                                                                                                                    // 44
                                                                                                                       //
		return toggleFlex;                                                                                                   // 1
	}();                                                                                                                  // 1
                                                                                                                       //
	_class.prototype.closeFlex = function () {                                                                            // 1
		function closeFlex() {                                                                                               // 1
			var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;                            // 45
			var subscription = void 0;                                                                                          // 46
                                                                                                                       //
			if (!RocketChat.roomTypes.getTypes().filter(function (i) {                                                          // 47
				return i.route;                                                                                                    // 48
			}).map(function (i) {                                                                                               // 49
				return i.route.name;                                                                                               // 50
			}).includes(FlowRouter.current().route.name)) {                                                                     // 51
				subscription = RocketChat.models.Subscriptions.findOne({                                                           // 52
					rid: Session.get('openedRoom')                                                                                    // 53
				});                                                                                                                // 52
                                                                                                                       //
				if (subscription != null) {                                                                                        // 55
					RocketChat.roomTypes.openRouteLink(subscription.t, subscription, FlowRouter.current().queryParams);               // 56
				} else {                                                                                                           // 57
					FlowRouter.go('home');                                                                                            // 58
				}                                                                                                                  // 59
			}                                                                                                                   // 60
                                                                                                                       //
			if (this.animating === true) {                                                                                      // 61
				return;                                                                                                            // 62
			}                                                                                                                   // 63
                                                                                                                       //
			this.toggleArrow(-1);                                                                                               // 64
			return this.toggleFlex(-1, callback);                                                                               // 65
		}                                                                                                                    // 66
                                                                                                                       //
		return closeFlex;                                                                                                    // 1
	}();                                                                                                                  // 1
                                                                                                                       //
	_class.prototype.flexStatus = function () {                                                                           // 1
		function flexStatus() {                                                                                              // 1
			return this.flexNav.opened;                                                                                         // 68
		}                                                                                                                    // 69
                                                                                                                       //
		return flexStatus;                                                                                                   // 1
	}();                                                                                                                  // 1
                                                                                                                       //
	_class.prototype.setFlex = function () {                                                                              // 1
		function setFlex(template, data) {                                                                                   // 1
			if (data == null) {                                                                                                 // 71
				data = {};                                                                                                         // 72
			}                                                                                                                   // 73
                                                                                                                       //
			Session.set('flex-nav-template', template);                                                                         // 74
			return Session.set('flex-nav-data', data);                                                                          // 75
		}                                                                                                                    // 76
                                                                                                                       //
		return setFlex;                                                                                                      // 1
	}();                                                                                                                  // 1
                                                                                                                       //
	_class.prototype.getFlex = function () {                                                                              // 1
		function getFlex() {                                                                                                 // 1
			return {                                                                                                            // 78
				template: Session.get('flex-nav-template'),                                                                        // 79
				data: Session.get('flex-nav-data')                                                                                 // 80
			};                                                                                                                  // 78
		}                                                                                                                    // 82
                                                                                                                       //
		return getFlex;                                                                                                      // 1
	}();                                                                                                                  // 1
                                                                                                                       //
	_class.prototype.toggleCurrent = function () {                                                                        // 1
		function toggleCurrent() {                                                                                           // 1
			if (this.flexNav && this.flexNav.opened) {                                                                          // 85
				return this.closeFlex();                                                                                           // 86
			} else {                                                                                                            // 87
				return AccountBox.toggle();                                                                                        // 88
			}                                                                                                                   // 89
		}                                                                                                                    // 90
                                                                                                                       //
		return toggleCurrent;                                                                                                // 1
	}();                                                                                                                  // 1
                                                                                                                       //
	_class.prototype.overArrow = function () {                                                                            // 1
		function overArrow() {                                                                                               // 1
			return this.arrow.addClass('hover');                                                                                // 92
		}                                                                                                                    // 93
                                                                                                                       //
		return overArrow;                                                                                                    // 1
	}();                                                                                                                  // 1
                                                                                                                       //
	_class.prototype.leaveArrow = function () {                                                                           // 1
		function leaveArrow() {                                                                                              // 1
			return this.arrow.removeClass('hover');                                                                             // 95
		}                                                                                                                    // 96
                                                                                                                       //
		return leaveArrow;                                                                                                   // 1
	}();                                                                                                                  // 1
                                                                                                                       //
	_class.prototype.arrowBindHover = function () {                                                                       // 1
		function arrowBindHover() {                                                                                          // 1
			var _this2 = this;                                                                                                  // 97
                                                                                                                       //
			this.arrow.on('mouseenter', function () {                                                                           // 98
				return _this2.sideNav.find('header').addClass('hover');                                                            // 99
			});                                                                                                                 // 100
			return this.arrow.on('mouseout', function () {                                                                      // 101
				return _this2.sideNav.find('header').removeClass('hover');                                                         // 102
			});                                                                                                                 // 103
		}                                                                                                                    // 104
                                                                                                                       //
		return arrowBindHover;                                                                                               // 1
	}();                                                                                                                  // 1
                                                                                                                       //
	_class.prototype.focusInput = function () {                                                                           // 1
		function focusInput() {                                                                                              // 1
			var sideNavDivs = _.filter(document.querySelectorAll('aside.side-nav')[0].children, function (ele) {                // 106
				return ele.tagName === 'DIV' && !ele.classList.contains('hidden');                                                 // 107
			});                                                                                                                 // 108
                                                                                                                       //
			var highestZidx = 0;                                                                                                // 109
			var highestZidxElem = void 0;                                                                                       // 110
                                                                                                                       //
			_.each(sideNavDivs, function (ele) {                                                                                // 111
				var zIndex = Number(window.getComputedStyle(ele).zIndex);                                                          // 112
                                                                                                                       //
				if (Number(zIndex) > highestZidx) {                                                                                // 113
					highestZidx = Number(zIndex);                                                                                     // 114
					highestZidxElem = ele;                                                                                            // 115
				}                                                                                                                  // 116
			});                                                                                                                 // 117
                                                                                                                       //
			setTimeout(function () {                                                                                            // 118
				var ref = highestZidxElem.querySelector('input');                                                                  // 119
				return ref && ref.focus();                                                                                         // 120
			}, 200);                                                                                                            // 121
		}                                                                                                                    // 122
                                                                                                                       //
		return focusInput;                                                                                                   // 1
	}();                                                                                                                  // 1
                                                                                                                       //
	_class.prototype.validate = function () {                                                                             // 1
		function validate() {                                                                                                // 1
			var invalid = [];                                                                                                   // 124
			this.sideNav.find('input.required').each(function () {                                                              // 125
				if (!this.value.length) {                                                                                          // 126
					return invalid.push($(this).prev('label').html());                                                                // 127
				}                                                                                                                  // 128
			});                                                                                                                 // 129
                                                                                                                       //
			if (invalid.length) {                                                                                               // 130
				return invalid;                                                                                                    // 131
			}                                                                                                                   // 132
                                                                                                                       //
			return false;                                                                                                       // 133
		}                                                                                                                    // 134
                                                                                                                       //
		return validate;                                                                                                     // 1
	}();                                                                                                                  // 1
                                                                                                                       //
	_class.prototype.openFlex = function () {                                                                             // 1
		function openFlex(callback) {                                                                                        // 1
			if (!this.initiated) {                                                                                              // 137
				return this.openQueue.push({                                                                                       // 138
					config: this.getFlex(),                                                                                           // 139
					callback: callback                                                                                                // 140
				});                                                                                                                // 138
			}                                                                                                                   // 142
                                                                                                                       //
			if (this.animating === true) {                                                                                      // 143
				return;                                                                                                            // 144
			}                                                                                                                   // 145
                                                                                                                       //
			AccountBox.close();                                                                                                 // 146
			this.toggleArrow(0);                                                                                                // 147
			this.toggleFlex(1, callback);                                                                                       // 148
			return this.focusInput();                                                                                           // 149
		}                                                                                                                    // 150
                                                                                                                       //
		return openFlex;                                                                                                     // 1
	}();                                                                                                                  // 1
                                                                                                                       //
	_class.prototype.init = function () {                                                                                 // 1
		function init() {                                                                                                    // 1
			var _this3 = this;                                                                                                  // 152
                                                                                                                       //
			this.sideNav = $('.side-nav');                                                                                      // 153
			this.flexNav = this.sideNav.find('.flex-nav');                                                                      // 154
			this.arrow = this.sideNav.children('.arrow');                                                                       // 155
			this.setFlex('');                                                                                                   // 156
			this.arrowBindHover();                                                                                              // 157
			this.initiated = true;                                                                                              // 158
                                                                                                                       //
			if (this.openQueue.length > 0) {                                                                                    // 159
				this.openQueue.forEach(function (item) {                                                                           // 160
					_this3.setFlex(item.config.template, item.config.data);                                                           // 161
                                                                                                                       //
					return _this3.openFlex(item.callback);                                                                            // 162
				});                                                                                                                // 163
				return this.openQueue = [];                                                                                        // 164
			}                                                                                                                   // 165
		}                                                                                                                    // 166
                                                                                                                       //
		return init;                                                                                                         // 1
	}();                                                                                                                  // 1
                                                                                                                       //
	_class.prototype.getSideNav = function () {                                                                           // 1
		function getSideNav() {                                                                                              // 1
			return this.sideNav;                                                                                                // 168
		}                                                                                                                    // 169
                                                                                                                       //
		return getSideNav;                                                                                                   // 1
	}();                                                                                                                  // 1
                                                                                                                       //
	return _class;                                                                                                        // 1
}())();                                                                                                                // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tapi18n.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/tapi18n.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
this.t = function (key) {                                                                                              // 1
	for (var _len = arguments.length, replaces = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {         // 1
		replaces[_key - 1] = arguments[_key];                                                                                // 1
	}                                                                                                                     // 1
                                                                                                                       //
	if (_.isObject(replaces[0])) {                                                                                        // 2
		return TAPi18n.__(key, replaces);                                                                                    // 3
	} else {                                                                                                              // 4
		return TAPi18n.__(key, {                                                                                             // 5
			postProcess: 'sprintf',                                                                                             // 6
			sprintf: replaces                                                                                                   // 7
		});                                                                                                                  // 5
	}                                                                                                                     // 9
};                                                                                                                     // 10
                                                                                                                       //
this.tr = function (key, options) {                                                                                    // 12
	for (var _len2 = arguments.length, replaces = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {  // 12
		replaces[_key2 - 2] = arguments[_key2];                                                                              // 12
	}                                                                                                                     // 12
                                                                                                                       //
	if (_.isObject(replaces[0])) {                                                                                        // 13
		return TAPi18n.__(key, options, replaces);                                                                           // 14
	} else {                                                                                                              // 15
		return TAPi18n.__(key, options, {                                                                                    // 16
			postProcess: 'sprintf',                                                                                             // 17
			sprintf: replaces                                                                                                   // 18
		});                                                                                                                  // 16
	}                                                                                                                     // 20
};                                                                                                                     // 21
                                                                                                                       //
this.isRtl = function (language) {                                                                                     // 23
	return language != null && ['ar', 'dv', 'fa', 'he', 'ku', 'ps', 'sd', 'ug', 'ur', 'yi'].includes(language.split('-').shift().toLowerCase());
};                                                                                                                     // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"textarea-autogrow.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/textarea-autogrow.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function ($) {                                                                                                        // 1
	/**                                                                                                                   // 2
  * Auto-growing textareas; technique ripped from Facebook                                                             //
  *                                                                                                                    //
  *                                                                                                                    //
  * http://github.com/jaz303/jquery-grab-bag/tree/master/javascripts/jquery.autogrow-textarea.js                       //
  */$.fn.autogrow = function (options) {                                                                               //
		return this.filter('textarea').each(function () {                                                                    // 9
			var self = this;                                                                                                    // 10
			var $self = $(self);                                                                                                // 11
			var minHeight = $self.height();                                                                                     // 12
			var noFlickerPad = $self.hasClass('autogrow-short') ? 0 : parseInt($self.css('lineHeight')) || 0;                   // 13
			var settings = $.extend({                                                                                           // 14
				preGrowCallback: null,                                                                                             // 15
				postGrowCallback: null                                                                                             // 16
			}, options);                                                                                                        // 14
			var shadow = $("div.autogrow-shadow");                                                                              // 19
                                                                                                                       //
			if (!shadow.length) {                                                                                               // 20
				shadow = $('<div></div>').addClass("autogrow-shadow").appendTo(document.body);                                     // 21
			}                                                                                                                   // 22
                                                                                                                       //
			shadow.css({                                                                                                        // 24
				width: $self.width(),                                                                                              // 25
				fontSize: $self.css('fontSize'),                                                                                   // 26
				fontFamily: $self.css('fontFamily'),                                                                               // 27
				fontWeight: $self.css('fontWeight'),                                                                               // 28
				lineHeight: $self.css('lineHeight'),                                                                               // 29
				resize: 'none',                                                                                                    // 30
				wordWrap: 'break-word'                                                                                             // 31
			});                                                                                                                 // 24
                                                                                                                       //
			var update = function (event) {                                                                                     // 34
				var times = function (string, number) {                                                                            // 35
					for (var i = 0, r = ''; i < number; i++) {                                                                        // 36
						r += string;                                                                                                     // 36
					}                                                                                                                 // 36
                                                                                                                       //
					return r;                                                                                                         // 37
				};                                                                                                                 // 38
                                                                                                                       //
				var val = self.value.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/&/g, '&amp;').replace(/\n$/, '<br/>&nbsp;').replace(/\n/g, '<br/>').replace(/ {2,}/g, function (space) {
					return times('&nbsp;', space.length - 1) + ' ';                                                                   // 46
				}); // Did enter get pressed?  Resize in this keydown event so that the flicker doesn't occur.                     // 47
                                                                                                                       //
				if (event && event.data && event.data.event === 'keydown' && event.keyCode === 13 && (event.shiftKey || event.ctrlKey || event.altKey)) {
					val += '<br />';                                                                                                  // 51
				}                                                                                                                  // 52
                                                                                                                       //
				shadow.css('width', $self.width());                                                                                // 54
				shadow.html(val + (noFlickerPad === 0 ? '...' : '')); // Append '...' to resize pre-emptively.                     // 55
                                                                                                                       //
				var newHeight = Math.max(shadow.height() + noFlickerPad + 1, minHeight);                                           // 57
                                                                                                                       //
				if (settings.preGrowCallback !== null) {                                                                           // 58
					newHeight = settings.preGrowCallback($self, shadow, newHeight, minHeight);                                        // 59
				}                                                                                                                  // 60
                                                                                                                       //
				$self.height(newHeight);                                                                                           // 62
                                                                                                                       //
				if (settings.postGrowCallback !== null) {                                                                          // 64
					settings.postGrowCallback($self);                                                                                 // 65
				}                                                                                                                  // 66
			};                                                                                                                  // 67
                                                                                                                       //
			$self.change(update).keyup(update).keydown({                                                                        // 69
				event: 'keydown'                                                                                                   // 70
			}, update);                                                                                                         // 69
			$(window).resize(update);                                                                                           // 72
			update();                                                                                                           // 74
			self.updateAutogrow = update;                                                                                       // 75
		});                                                                                                                  // 76
	};                                                                                                                    // 77
})(jQuery);                                                                                                            // 78
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"codeMirror":{"codeMirror.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/codeMirror/codeMirror.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./codeMirrorComponent.html"));                                                                   // 1
module.watch(require("./codeMirrorComponent.js"));                                                                     // 1
module.watch(require("codemirror/addon/fold/brace-fold.js"));                                                          // 1
module.watch(require("codemirror/addon/fold/comment-fold.js"));                                                        // 1
module.watch(require("codemirror/addon/fold/foldcode.js"));                                                            // 1
module.watch(require("codemirror/addon/fold/foldgutter.css"));                                                         // 1
module.watch(require("codemirror/addon/fold/foldgutter.js"));                                                          // 1
module.watch(require("codemirror/addon/fold/indent-fold.js"));                                                         // 1
module.watch(require("codemirror/addon/fold/markdown-fold.js"));                                                       // 1
module.watch(require("codemirror/addon/fold/xml-fold.js"));                                                            // 1
module.watch(require("codemirror/addon/selection/active-line.js"));                                                    // 1
module.watch(require("codemirror/addon/search/search.js"));                                                            // 1
module.watch(require("codemirror/addon/search/searchcursor.js"));                                                      // 1
module.watch(require("codemirror/addon/dialog/dialog.js"));                                                            // 1
module.watch(require("codemirror/addon/dialog/dialog.css"));                                                           // 1
module.watch(require("codemirror/addon/mode/overlay.js"));                                                             // 1
module.watch(require("codemirror/addon/edit/continuelist.js"));                                                        // 1
module.watch(require("codemirror/mode/apl/apl.js"));                                                                   // 1
module.watch(require("codemirror/mode/asterisk/asterisk.js"));                                                         // 1
module.watch(require("codemirror/mode/clike/clike.js"));                                                               // 1
module.watch(require("codemirror/mode/clojure/clojure.js"));                                                           // 1
module.watch(require("codemirror/mode/cobol/cobol.js"));                                                               // 1
module.watch(require("codemirror/mode/commonlisp/commonlisp.js"));                                                     // 1
module.watch(require("codemirror/mode/coffeescript/coffeescript.js"));                                                 // 1
module.watch(require("codemirror/mode/css/css.js"));                                                                   // 1
module.watch(require("codemirror/mode/cypher/cypher.js"));                                                             // 1
module.watch(require("codemirror/mode/d/d.js"));                                                                       // 1
module.watch(require("codemirror/mode/diff/diff.js"));                                                                 // 1
module.watch(require("codemirror/mode/django/django.js"));                                                             // 1
module.watch(require("codemirror/mode/dockerfile/dockerfile.js"));                                                     // 1
module.watch(require("codemirror/mode/dtd/dtd.js"));                                                                   // 1
module.watch(require("codemirror/mode/dylan/dylan.js"));                                                               // 1
module.watch(require("codemirror/mode/ecl/ecl.js"));                                                                   // 1
module.watch(require("codemirror/mode/eiffel/eiffel.js"));                                                             // 1
module.watch(require("codemirror/mode/erlang/erlang.js"));                                                             // 1
module.watch(require("codemirror/mode/fortran/fortran.js"));                                                           // 1
module.watch(require("codemirror/mode/gas/gas.js"));                                                                   // 1
module.watch(require("codemirror/mode/gfm/gfm.js"));                                                                   // 1
module.watch(require("codemirror/mode/gherkin/gherkin.js"));                                                           // 1
module.watch(require("codemirror/mode/go/go.js"));                                                                     // 1
module.watch(require("codemirror/mode/groovy/groovy.js"));                                                             // 1
module.watch(require("codemirror/mode/haml/haml.js"));                                                                 // 1
module.watch(require("codemirror/mode/haskell/haskell.js"));                                                           // 1
module.watch(require("codemirror/mode/haxe/haxe.js"));                                                                 // 1
module.watch(require("codemirror/mode/htmlembedded/htmlembedded.js"));                                                 // 1
module.watch(require("codemirror/mode/htmlmixed/htmlmixed.js"));                                                       // 1
module.watch(require("codemirror/mode/http/http.js"));                                                                 // 1
module.watch(require("codemirror/mode/idl/idl.js"));                                                                   // 1
module.watch(require("codemirror/mode/javascript/javascript.js"));                                                     // 1
module.watch(require("codemirror/mode/jinja2/jinja2.js"));                                                             // 1
module.watch(require("codemirror/mode/julia/julia.js"));                                                               // 1
module.watch(require("codemirror/mode/livescript/livescript.js"));                                                     // 1
module.watch(require("codemirror/mode/lua/lua.js"));                                                                   // 1
module.watch(require("codemirror/mode/markdown/markdown.js"));                                                         // 1
module.watch(require("codemirror/mode/mirc/mirc.js"));                                                                 // 1
module.watch(require("codemirror/mode/mllike/mllike.js"));                                                             // 1
module.watch(require("codemirror/mode/modelica/modelica.js"));                                                         // 1
module.watch(require("codemirror/mode/nginx/nginx.js"));                                                               // 1
module.watch(require("codemirror/mode/ntriples/ntriples.js"));                                                         // 1
module.watch(require("codemirror/mode/octave/octave.js"));                                                             // 1
module.watch(require("codemirror/mode/pascal/pascal.js"));                                                             // 1
module.watch(require("codemirror/mode/pegjs/pegjs.js"));                                                               // 1
module.watch(require("codemirror/mode/perl/perl.js"));                                                                 // 1
module.watch(require("codemirror/mode/php/php.js"));                                                                   // 1
module.watch(require("codemirror/mode/pig/pig.js"));                                                                   // 1
module.watch(require("codemirror/mode/properties/properties.js"));                                                     // 1
module.watch(require("codemirror/mode/puppet/puppet.js"));                                                             // 1
module.watch(require("codemirror/mode/python/python.js"));                                                             // 1
module.watch(require("codemirror/mode/q/q.js"));                                                                       // 1
module.watch(require("codemirror/mode/r/r.js"));                                                                       // 1
module.watch(require("codemirror/mode/rpm/rpm.js"));                                                                   // 1
module.watch(require("codemirror/mode/rst/rst.js"));                                                                   // 1
module.watch(require("codemirror/mode/ruby/ruby.js"));                                                                 // 1
module.watch(require("codemirror/mode/rust/rust.js"));                                                                 // 1
module.watch(require("codemirror/mode/sass/sass.js"));                                                                 // 1
module.watch(require("codemirror/mode/scheme/scheme.js"));                                                             // 1
module.watch(require("codemirror/mode/shell/shell.js"));                                                               // 1
module.watch(require("codemirror/mode/sieve/sieve.js"));                                                               // 1
module.watch(require("codemirror/mode/slim/slim.js"));                                                                 // 1
module.watch(require("codemirror/mode/smalltalk/smalltalk.js"));                                                       // 1
module.watch(require("codemirror/mode/smarty/smarty.js"));                                                             // 1
module.watch(require("codemirror/mode/solr/solr.js"));                                                                 // 1
module.watch(require("codemirror/mode/sparql/sparql.js"));                                                             // 1
module.watch(require("codemirror/mode/sql/sql.js"));                                                                   // 1
module.watch(require("codemirror/mode/stex/stex.js"));                                                                 // 1
module.watch(require("codemirror/mode/tcl/tcl.js"));                                                                   // 1
module.watch(require("codemirror/mode/textile/textile.js"));                                                           // 1
module.watch(require("codemirror/mode/tiddlywiki/tiddlywiki.js"));                                                     // 1
module.watch(require("codemirror/mode/tiki/tiki.js"));                                                                 // 1
module.watch(require("codemirror/mode/toml/toml.js"));                                                                 // 1
module.watch(require("codemirror/mode/tornado/tornado.js"));                                                           // 1
module.watch(require("codemirror/mode/turtle/turtle.js"));                                                             // 1
module.watch(require("codemirror/mode/vb/vb.js"));                                                                     // 1
module.watch(require("codemirror/mode/vbscript/vbscript.js"));                                                         // 1
module.watch(require("codemirror/mode/velocity/velocity.js"));                                                         // 1
module.watch(require("codemirror/mode/verilog/verilog.js"));                                                           // 1
module.watch(require("codemirror/mode/xml/xml.js"));                                                                   // 1
module.watch(require("codemirror/mode/xquery/xquery.js"));                                                             // 1
module.watch(require("codemirror/mode/yaml/yaml.js"));                                                                 // 1
module.watch(require("codemirror/mode/z80/z80.js"));                                                                   // 1
module.watch(require("codemirror/keymap/sublime.js"));                                                                 // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"codeMirrorComponent.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/rocketchat_ui/client/lib/codeMirror/codeMirrorComponent.html                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.codeMirrorComponent.js");                                                         // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.codeMirrorComponent.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/codeMirror/template.codeMirrorComponent.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("CodeMirror");                                                                                    // 2
Template["CodeMirror"] = new Template("Template.CodeMirror", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return HTML.TEXTAREA({                                                                                               // 5
    id: function() {                                                                                                   // 6
      return Spacebars.mustache(view.lookup("editorId"));                                                              // 7
    },                                                                                                                 // 8
    name: function() {                                                                                                 // 9
      return Spacebars.mustache(view.lookup("editorName"));                                                            // 10
    },                                                                                                                 // 11
    style: "display: none",                                                                                            // 12
    value: function() {                                                                                                // 13
      return Spacebars.mustache(view.lookup("code"));                                                                  // 14
    }                                                                                                                  // 15
  });                                                                                                                  // 16
}));                                                                                                                   // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"codeMirrorComponent.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/codeMirror/codeMirrorComponent.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("codemirror/lib/codemirror.css"));                                                                // 1
var CodeMirror = void 0;                                                                                               // 1
module.watch(require("codemirror/lib/codemirror.js"), {                                                                // 1
	"default": function (v) {                                                                                             // 1
		CodeMirror = v;                                                                                                      // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
/* global CodeMirrors */CodeMirrors = {};                                                                              // 1
                                                                                                                       //
Template.CodeMirror.rendered = function () {                                                                           // 7
	var options = this.data.options || {                                                                                  // 8
		lineNumbers: true                                                                                                    // 8
	};                                                                                                                    // 8
	var textarea = this.find('textarea');                                                                                 // 9
	var editor = CodeMirror.fromTextArea(textarea, options);                                                              // 10
	CodeMirrors[this.data.id || 'code-mirror-textarea'] = editor;                                                         // 12
	var self = this;                                                                                                      // 14
	editor.on('change', function (doc) {                                                                                  // 15
		var val = doc.getValue();                                                                                            // 16
		textarea.value = val;                                                                                                // 17
                                                                                                                       //
		if (self.data.reactiveVar) {                                                                                         // 18
			Session.set(self.data.reactiveVar, val);                                                                            // 19
		}                                                                                                                    // 20
	});                                                                                                                   // 21
                                                                                                                       //
	if (this.data.reactiveVar) {                                                                                          // 23
		this.autorun(function () {                                                                                           // 24
			var val = Session.get(self.data.reactiveVar) || '';                                                                 // 25
                                                                                                                       //
			if (val !== editor.getValue()) {                                                                                    // 26
				editor.setValue(val);                                                                                              // 27
			}                                                                                                                   // 28
		});                                                                                                                  // 29
	}                                                                                                                     // 30
                                                                                                                       //
	Meteor.defer(function () {                                                                                            // 32
		editor.refresh();                                                                                                    // 33
	});                                                                                                                   // 34
};                                                                                                                     // 35
                                                                                                                       //
Template.CodeMirror.destroyed = function () {                                                                          // 37
	delete CodeMirrors[this.data.id || 'code-mirror-textarea'];                                                           // 38
	this.$("#" + (this.data.id || 'code-mirror-textarea')).next('.CodeMirror').remove();                                  // 39
};                                                                                                                     // 40
                                                                                                                       //
Template.CodeMirror.helpers({                                                                                          // 42
	editorId: function () {                                                                                               // 43
		return this.id || 'code-mirror-textarea';                                                                            // 44
	},                                                                                                                    // 45
	editorName: function () {                                                                                             // 47
		return this.name || 'code-mirror-textarea';                                                                          // 48
	}                                                                                                                     // 49
});                                                                                                                    // 42
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"cordova":{"facebook-login.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/cordova/facebook-login.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals facebookConnectPlugin Facebook*/Meteor.loginWithFacebookCordova = function (options, callback) {            // 1
	if (!callback && typeof options === 'function') {                                                                     // 3
		callback = options;                                                                                                  // 4
		options = null;                                                                                                      // 5
	}                                                                                                                     // 6
                                                                                                                       //
	var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);                    // 7
                                                                                                                       //
	var fbLoginSuccess = function (data) {                                                                                // 8
		data.cordova = true;                                                                                                 // 9
		return Accounts.callLoginMethod({                                                                                    // 10
			methodArguments: [data],                                                                                            // 11
			userCallback: callback                                                                                              // 12
		});                                                                                                                  // 10
	};                                                                                                                    // 14
                                                                                                                       //
	if (typeof facebookConnectPlugin !== 'undefined') {                                                                   // 15
		return facebookConnectPlugin.getLoginStatus(function (response) {                                                    // 16
			if (response.status !== 'connected') {                                                                              // 17
				return facebookConnectPlugin.login(['public_profile', 'email'], fbLoginSuccess, function (error) {                 // 18
					console.log('login', JSON.stringify(error), error);                                                               // 19
					return callback(error);                                                                                           // 20
				});                                                                                                                // 21
			} else {                                                                                                            // 22
				return fbLoginSuccess(response);                                                                                   // 23
			}                                                                                                                   // 24
		}, function (error) {                                                                                                // 25
			console.log('getLoginStatus', JSON.stringify(error), error);                                                        // 26
			return callback(error);                                                                                             // 27
		});                                                                                                                  // 28
	}                                                                                                                     // 29
                                                                                                                       //
	return Facebook.requestCredential(options, credentialRequestCompleteCallback);                                        // 30
};                                                                                                                     // 31
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"keyboard-fix.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/cordova/keyboard-fix.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals device cordova*/if (Meteor.isCordova) {                                                                     // 1
	var body = $(document.body);                                                                                          // 3
	document.addEventListener('deviceready', function () {                                                                // 4
		if (typeof device !== 'undefined' && device !== null && device.platform.toLowerCase() !== 'android') {               // 5
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);                                                            // 6
			return cordova.plugins.Keyboard.disableScroll(true);                                                                // 7
		}                                                                                                                    // 8
	});                                                                                                                   // 9
	window.addEventListener('native.keyboardshow', function () {                                                          // 10
		if (typeof device !== 'undefined' && device !== null && device.platform.toLowerCase() !== 'android') {               // 11
			if (Meteor.userId() != null) {                                                                                      // 12
				$('.main-content').css('height', window.innerHeight);                                                              // 13
				$('.sweet-alert').css('transform', "translateY(-" + (document.height - window.innerHeight) / 2 + "px)").css('-webkit-transform', "translateY(-" + (document.height - window.innerHeight) / 2 + "px)");
			} else {                                                                                                            // 15
				body.css('height', window.innerHeight);                                                                            // 16
				body.css('overflow', 'scroll');                                                                                    // 17
			}                                                                                                                   // 18
		}                                                                                                                    // 19
	});                                                                                                                   // 20
	window.addEventListener('native.keyboardhide', function () {                                                          // 21
		if (typeof device !== 'undefined' && device !== null && device.platform.toLowerCase() !== 'android') {               // 22
			if (Meteor.userId() != null) {                                                                                      // 23
				$('.main-content').css('height', window.innerHeight);                                                              // 24
				$('.sweet-alert').css('transform', '').css('-webkit-transform', '');                                               // 25
			} else {                                                                                                            // 26
				body.css('height', window.innerHeight);                                                                            // 27
				body.css('overflow', 'visible');                                                                                   // 28
			}                                                                                                                   // 29
		}                                                                                                                    // 30
	});                                                                                                                   // 31
}                                                                                                                      // 32
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"push.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/cordova/push.coffee.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
if (Meteor.isCordova) {                                                                                                // 1
  Push.addListener('startup', function (notification) {                                                                // 25
    var host, path, ref;                                                                                               // 28
                                                                                                                       //
    if (((ref = notification.payload) != null ? ref.rid : void 0) != null) {                                           // 28
      if (notification.payload.host === Meteor.absoluteUrl()) {                                                        // 29
        switch (notification.payload.type) {                                                                           // 30
          case 'c':                                                                                                    // 30
            return FlowRouter.go('channel', {                                                                          // 8
              name: notification.payload.name                                                                          // 32
            }, FlowRouter.current().queryParams);                                                                      // 32
                                                                                                                       //
          case 'p':                                                                                                    // 30
            return FlowRouter.go('group', {                                                                            // 12
              name: notification.payload.name                                                                          // 34
            }, FlowRouter.current().queryParams);                                                                      // 34
                                                                                                                       //
          case 'd':                                                                                                    // 30
            return FlowRouter.go('direct', {                                                                           // 16
              username: notification.payload.sender.username                                                           // 36
            }, FlowRouter.current().queryParams);                                                                      // 36
        }                                                                                                              // 30
      } else {                                                                                                         // 29
        path = '';                                                                                                     // 38
                                                                                                                       //
        switch (notification.payload.type) {                                                                           // 39
          case 'c':                                                                                                    // 39
            path = 'channel/' + notification.payload.name;                                                             // 41
            break;                                                                                                     // 40
                                                                                                                       //
          case 'p':                                                                                                    // 39
            path = 'group/' + notification.payload.name;                                                               // 43
            break;                                                                                                     // 42
                                                                                                                       //
          case 'd':                                                                                                    // 39
            path = 'direct/' + notification.payload.sender.username;                                                   // 45
        }                                                                                                              // 39
                                                                                                                       //
        host = notification.payload.host.replace(/\/$/, '');                                                           // 47
                                                                                                                       //
        if (Servers.serverExists(host) !== true) {                                                                     // 48
          return;                                                                                                      // 49
        }                                                                                                              // 35
                                                                                                                       //
        return Servers.startServer(host, path, function (err, url) {                                                   // 36
          if (err != null) {                                                                                           // 52
            return console.log(err);                                                                                   // 54
          }                                                                                                            // 39
        });                                                                                                            // 51
      }                                                                                                                // 28
    }                                                                                                                  // 42
  });                                                                                                                  // 25
  Meteor.startup(function () {                                                                                         // 57
    return Tracker.autorun(function () {                                                                               // 45
      if (RocketChat.settings.get('Push_enable') === true) {                                                           // 59
        return Push.Configure({                                                                                        // 47
          android: {                                                                                                   // 62
            senderID: window.ANDROID_SENDER_ID,                                                                        // 63
            sound: true,                                                                                               // 64
            vibrate: true                                                                                              // 65
          },                                                                                                           // 63
          ios: {                                                                                                       // 66
            badge: true,                                                                                               // 67
            clearBadge: true,                                                                                          // 68
            sound: true,                                                                                               // 69
            alert: true                                                                                                // 70
          }                                                                                                            // 67
        });                                                                                                            // 62
      }                                                                                                                // 60
    });                                                                                                                // 58
  });                                                                                                                  // 57
}                                                                                                                      // 63
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"urls.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/cordova/urls.coffee.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.startup(function () {                                                                                           // 1
  if (!Meteor.isCordova) {                                                                                             // 2
    return;                                                                                                            // 2
  }                                                                                                                    // 4
                                                                                                                       //
  return $(document).on('deviceready', function () {                                                                   // 5
    var platform;                                                                                                      // 6
    platform = device.platform.toLowerCase();                                                                          // 6
    return $(document).on('click', function (e) {                                                                      // 8
      var $link, url;                                                                                                  // 8
      $link = $(e.target).closest('a[href]');                                                                          // 8
                                                                                                                       //
      if (!($link.length > 0)) {                                                                                       // 9
        return;                                                                                                        // 9
      }                                                                                                                // 13
                                                                                                                       //
      url = $link.attr('href');                                                                                        // 10
                                                                                                                       //
      if (/^https?:\/\/.+/.test(url) === true) {                                                                       // 12
        window.open(url, '_system');                                                                                   // 13
        return e.preventDefault();                                                                                     // 17
      }                                                                                                                // 18
    });                                                                                                                // 7
  });                                                                                                                  // 5
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"user-state.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/cordova/user-state.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals UserPresence, readMessage */var timer = undefined;                                                          // 1
                                                                                                                       //
if (Meteor.isCordova) {                                                                                                // 4
	document.addEventListener('pause', function () {                                                                      // 5
		UserPresence.setAway();                                                                                              // 6
		readMessage.disable(); //Only disconnect after one minute of being in the background                                 // 7
                                                                                                                       //
		timer = setTimeout(function () {                                                                                     // 10
			Meteor.disconnect();                                                                                                // 11
			timer = undefined;                                                                                                  // 12
		}, 60000);                                                                                                           // 13
	}, true);                                                                                                             // 14
	document.addEventListener('resume', function () {                                                                     // 16
		if (!_.isUndefined(timer)) {                                                                                         // 17
			clearTimeout(timer);                                                                                                // 18
		}                                                                                                                    // 19
                                                                                                                       //
		Meteor.reconnect();                                                                                                  // 21
		UserPresence.setOnline();                                                                                            // 22
		readMessage.enable();                                                                                                // 23
	}, true);                                                                                                             // 24
}                                                                                                                      // 25
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"recorderjs":{"audioRecorder.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/recorderjs/audioRecorder.coffee.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.AudioRecorder = new (function () {                                                                                // 1
  function _Class() {}                                                                                                 // 2
                                                                                                                       //
  _Class.prototype.start = function (cb) {                                                                             // 4
    var ok;                                                                                                            // 3
    window.AudioContext = window.AudioContext || window.webkitAudioContext;                                            // 3
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;                                   // 4
    window.URL = window.URL || window.webkitURL;                                                                       // 5
    window.audioContext = new AudioContext();                                                                          // 7
                                                                                                                       //
    ok = function (_this) {                                                                                            // 9
      return function (stream) {                                                                                       // 11
        _this.startUserMedia(stream);                                                                                  // 10
                                                                                                                       //
        return cb != null ? cb.call(_this) : void 0;                                                                   // 13
      };                                                                                                               // 9
    }(this);                                                                                                           // 9
                                                                                                                       //
    if (navigator.getUserMedia == null) {                                                                              // 13
      return cb(false);                                                                                                // 14
    }                                                                                                                  // 18
                                                                                                                       //
    return navigator.getUserMedia({                                                                                    // 19
      audio: true                                                                                                      // 16
    }, ok, function (e) {                                                                                              // 16
      return console.log('No live audio input: ' + e);                                                                 // 22
    });                                                                                                                // 16
  };                                                                                                                   // 2
                                                                                                                       //
  _Class.prototype.startUserMedia = function (stream) {                                                                // 26
    var input;                                                                                                         // 20
    this.stream = stream;                                                                                              // 20
    input = window.audioContext.createMediaStreamSource(stream);                                                       // 21
    this.recorder = new Recorder(input, {                                                                              // 22
      workerPath: '/recorderWorker.js'                                                                                 // 22
    });                                                                                                                // 22
    return this.recorder.record();                                                                                     // 33
  };                                                                                                                   // 19
                                                                                                                       //
  _Class.prototype.stop = function (cb) {                                                                              // 36
    this.recorder.stop();                                                                                              // 26
                                                                                                                       //
    if (cb != null) {                                                                                                  // 28
      this.getBlob(cb);                                                                                                // 29
    }                                                                                                                  // 40
                                                                                                                       //
    this.stream.getAudioTracks()[0].stop();                                                                            // 31
    this.recorder.clear();                                                                                             // 33
    window.audioContext.close();                                                                                       // 35
    delete window.audioContext;                                                                                        // 36
    delete this.recorder;                                                                                              // 37
    return delete this.stream;                                                                                         // 46
  };                                                                                                                   // 25
                                                                                                                       //
  _Class.prototype.getBlob = function (cb) {                                                                           // 49
    return this.recorder.exportWAV(cb);                                                                                // 50
  };                                                                                                                   // 40
                                                                                                                       //
  return _Class;                                                                                                       // 53
}())();                                                                                                                // 55
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"videoRecorder.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/recorderjs/videoRecorder.coffee.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.VideoRecorder = new (function () {                                                                                // 1
  function _Class() {}                                                                                                 // 2
                                                                                                                       //
  _Class.prototype.started = false;                                                                                    // 4
  _Class.prototype.cameraStarted = new ReactiveVar(false);                                                             // 6
  _Class.prototype.recording = new ReactiveVar(false);                                                                 // 8
  _Class.prototype.recordingAvailable = new ReactiveVar(false);                                                        // 10
                                                                                                                       //
  _Class.prototype.start = function (videoel, cb) {                                                                    // 12
    var ok;                                                                                                            // 8
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;      // 8
    window.URL = window.URL || window.webkitURL;                                                                       // 9
    this.videoel = videoel;                                                                                            // 11
                                                                                                                       //
    ok = function (_this) {                                                                                            // 12
      return function (stream) {                                                                                       // 18
        _this.startUserMedia(stream);                                                                                  // 13
                                                                                                                       //
        return cb != null ? cb.call(_this) : void 0;                                                                   // 20
      };                                                                                                               // 12
    }(this);                                                                                                           // 12
                                                                                                                       //
    if (navigator.getUserMedia == null) {                                                                              // 16
      return cb(false);                                                                                                // 17
    }                                                                                                                  // 25
                                                                                                                       //
    return navigator.getUserMedia({                                                                                    // 26
      audio: true,                                                                                                     // 19
      video: true                                                                                                      // 19
    }, ok, function (e) {                                                                                              // 19
      return console.log('No live video input: ' + e);                                                                 // 30
    });                                                                                                                // 19
  };                                                                                                                   // 7
                                                                                                                       //
  _Class.prototype.record = function () {                                                                              // 34
    this.chunks = [];                                                                                                  // 23
                                                                                                                       //
    if (this.stream == null) {                                                                                         // 24
      return;                                                                                                          // 25
    }                                                                                                                  // 38
                                                                                                                       //
    this.mediaRecorder = new MediaRecorder(this.stream);                                                               // 26
    this.mediaRecorder.stream = this.stream;                                                                           // 27
    this.mediaRecorder.mimeType = 'video/webm';                                                                        // 28
                                                                                                                       //
    this.mediaRecorder.ondataavailable = function (_this) {                                                            // 29
      return function (blobev) {                                                                                       // 43
        _this.chunks.push(blobev.data);                                                                                // 30
                                                                                                                       //
        if (!_this.recordingAvailable.get()) {                                                                         // 31
          return _this.recordingAvailable.set(true);                                                                   // 46
        }                                                                                                              // 47
      };                                                                                                               // 29
    }(this);                                                                                                           // 29
                                                                                                                       //
    this.mediaRecorder.start();                                                                                        // 33
    return this.recording.set(true);                                                                                   // 51
  };                                                                                                                   // 22
                                                                                                                       //
  _Class.prototype.startUserMedia = function (stream) {                                                                // 54
    this.stream = stream;                                                                                              // 37
    this.videoel.src = URL.createObjectURL(stream);                                                                    // 38
                                                                                                                       //
    this.videoel.onloadedmetadata = function (_this) {                                                                 // 39
      return function (e) {                                                                                            // 58
        return _this.videoel.play();                                                                                   // 59
      };                                                                                                               // 39
    }(this);                                                                                                           // 39
                                                                                                                       //
    this.started = true;                                                                                               // 42
    return this.cameraStarted.set(true);                                                                               // 63
  };                                                                                                                   // 36
                                                                                                                       //
  _Class.prototype.stop = function (cb) {                                                                              // 66
    var atrack, atracks, blob, i, j, len, len1, vtrack, vtracks;                                                       // 46
                                                                                                                       //
    if (this.started) {                                                                                                // 46
      this.stopRecording();                                                                                            // 47
                                                                                                                       //
      if (this.stream != null) {                                                                                       // 49
        vtracks = this.stream.getVideoTracks();                                                                        // 50
                                                                                                                       //
        for (i = 0, len = vtracks.length; i < len; i++) {                                                              // 51
          vtrack = vtracks[i];                                                                                         // 73
          vtrack.stop();                                                                                               // 52
        }                                                                                                              // 51
                                                                                                                       //
        atracks = this.stream.getAudioTracks();                                                                        // 54
                                                                                                                       //
        for (j = 0, len1 = atracks.length; j < len1; j++) {                                                            // 55
          atrack = atracks[j];                                                                                         // 78
          atrack.stop();                                                                                               // 56
        }                                                                                                              // 49
      }                                                                                                                // 81
                                                                                                                       //
      if (this.videoel != null) {                                                                                      // 58
        this.videoel.pause;                                                                                            // 59
        this.videoel.src = '';                                                                                         // 60
      }                                                                                                                // 85
                                                                                                                       //
      this.started = false;                                                                                            // 62
      this.cameraStarted.set(false);                                                                                   // 63
      this.recordingAvailable.set(false);                                                                              // 64
                                                                                                                       //
      if (cb != null && this.chunks != null) {                                                                         // 66
        blob = new Blob(this.chunks, {                                                                                 // 67
          'type': 'video/webm'                                                                                         // 67
        });                                                                                                            // 67
        cb(blob);                                                                                                      // 68
      }                                                                                                                // 94
                                                                                                                       //
      delete this.recorder;                                                                                            // 70
      delete this.stream;                                                                                              // 71
      return delete this.videoel;                                                                                      // 97
    }                                                                                                                  // 98
  };                                                                                                                   // 45
                                                                                                                       //
  _Class.prototype.stopRecording = function () {                                                                       // 101
    if (this.started && this.recording && this.mediaRecorder != null) {                                                // 75
      this.mediaRecorder.stop();                                                                                       // 76
      this.recording.set(false);                                                                                       // 77
      return delete this.mediaRecorder;                                                                                // 105
    }                                                                                                                  // 106
  };                                                                                                                   // 74
                                                                                                                       //
  return _Class;                                                                                                       // 109
}())();                                                                                                                // 111
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"recorder.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/recorderjs/recorder.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function (window) {                                                                                                   // 1
  var WORKER_PATH = 'recorderWorker.js';                                                                               // 3
                                                                                                                       //
  var Recorder = function (source, cfg) {                                                                              // 5
    var config = cfg || {};                                                                                            // 6
    var bufferLen = config.bufferLen || 4096;                                                                          // 7
    var numChannels = config.numChannels || 2;                                                                         // 8
    this.context = source.context;                                                                                     // 9
    this.node = (this.context.createScriptProcessor || this.context.createJavaScriptNode).call(this.context, bufferLen, numChannels, numChannels);
    var worker = new Worker(config.workerPath || WORKER_PATH);                                                         // 13
    worker.postMessage({                                                                                               // 14
      command: 'init',                                                                                                 // 15
      config: {                                                                                                        // 16
        sampleRate: this.context.sampleRate,                                                                           // 17
        numChannels: numChannels                                                                                       // 18
      }                                                                                                                // 16
    });                                                                                                                // 14
    var recording = false,                                                                                             // 21
        currCallback;                                                                                                  // 21
                                                                                                                       //
    this.node.onaudioprocess = function (e) {                                                                          // 24
      if (!recording) return;                                                                                          // 25
      var buffer = [];                                                                                                 // 26
                                                                                                                       //
      for (var channel = 0; channel < numChannels; channel++) {                                                        // 27
        buffer.push(e.inputBuffer.getChannelData(channel));                                                            // 28
      }                                                                                                                // 29
                                                                                                                       //
      worker.postMessage({                                                                                             // 30
        command: 'record',                                                                                             // 31
        buffer: buffer                                                                                                 // 32
      });                                                                                                              // 30
    };                                                                                                                 // 34
                                                                                                                       //
    this.configure = function (cfg) {                                                                                  // 36
      for (var prop in meteorBabelHelpers.sanitizeForInObject(cfg)) {                                                  // 37
        if (cfg.hasOwnProperty(prop)) {                                                                                // 38
          config[prop] = cfg[prop];                                                                                    // 39
        }                                                                                                              // 40
      }                                                                                                                // 41
    };                                                                                                                 // 42
                                                                                                                       //
    this.record = function () {                                                                                        // 44
      recording = true;                                                                                                // 45
    };                                                                                                                 // 46
                                                                                                                       //
    this.stop = function () {                                                                                          // 48
      recording = false;                                                                                               // 49
    };                                                                                                                 // 50
                                                                                                                       //
    this.clear = function () {                                                                                         // 52
      worker.postMessage({                                                                                             // 53
        command: 'clear'                                                                                               // 53
      });                                                                                                              // 53
    };                                                                                                                 // 54
                                                                                                                       //
    this.getBuffer = function (cb) {                                                                                   // 56
      currCallback = cb || config.callback;                                                                            // 57
      worker.postMessage({                                                                                             // 58
        command: 'getBuffer'                                                                                           // 58
      });                                                                                                              // 58
    };                                                                                                                 // 59
                                                                                                                       //
    this.exportWAV = function (cb, type) {                                                                             // 61
      currCallback = cb || config.callback;                                                                            // 62
      type = type || config.type || 'audio/wav';                                                                       // 63
      if (!currCallback) throw new Error('Callback not set');                                                          // 64
      worker.postMessage({                                                                                             // 65
        command: 'exportWAV',                                                                                          // 66
        type: type                                                                                                     // 67
      });                                                                                                              // 65
    };                                                                                                                 // 69
                                                                                                                       //
    worker.onmessage = function (e) {                                                                                  // 71
      var blob = e.data;                                                                                               // 72
      currCallback(blob);                                                                                              // 73
    };                                                                                                                 // 74
                                                                                                                       //
    source.connect(this.node);                                                                                         // 76
    this.node.connect(this.context.destination); //this should not be necessary                                        // 77
  };                                                                                                                   // 78
                                                                                                                       //
  Recorder.forceDownload = function (blob, filename) {                                                                 // 80
    var url = (window.URL || window.webkitURL).createObjectURL(blob);                                                  // 81
    var link = window.document.createElement('a');                                                                     // 82
    link.href = url;                                                                                                   // 83
    link.download = filename || 'output.wav';                                                                          // 84
    var click = document.createEvent("Event");                                                                         // 85
    click.initEvent("click", true, true);                                                                              // 86
    link.dispatchEvent(click);                                                                                         // 87
  };                                                                                                                   // 88
                                                                                                                       //
  window.Recorder = Recorder;                                                                                          // 90
})(window);                                                                                                            // 92
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"textarea-cursor":{"set-cursor-position.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/textarea-cursor/set-cursor-position.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Adapted from http://stackoverflow.com/a/499158                                                                      // 1
$.fn.setCursorPosition = function (pos) {                                                                              // 3
	this.each(function (index, elem) {                                                                                    // 4
		var p = pos < 0 ? elem.value.length - pos : pos;                                                                     // 5
                                                                                                                       //
		if (elem.setSelectionRange) {                                                                                        // 6
			elem.setSelectionRange(p, p);                                                                                       // 7
		} else if (elem.createTextRange) {                                                                                   // 8
			var range = elem.createTextRange();                                                                                 // 9
			range.collapse(true);                                                                                               // 10
			range.moveEnd('character', p);                                                                                      // 11
			range.moveStart('character', p);                                                                                    // 12
			range.select();                                                                                                     // 13
		}                                                                                                                    // 14
	});                                                                                                                   // 15
	return this;                                                                                                          // 16
};                                                                                                                     // 17
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"esc.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/lib/esc.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var escapify = {                                                                                                       // 1
	init: function () {                                                                                                   // 2
		var that = this;                                                                                                     // 3
		document.addEventListener('keyup', function (event) {                                                                // 4
			var keyName = event.key;                                                                                            // 5
                                                                                                                       //
			if (keyName === 'Escape') {                                                                                         // 6
				that.sideNavIcon();                                                                                                // 7
				that.flextTabButton();                                                                                             // 8
				that.videoDialog();                                                                                                // 9
				that.sweetAlerts();                                                                                                // 10
			}                                                                                                                   // 11
		}, false);                                                                                                           // 12
	},                                                                                                                    // 13
	getClickEvent: function () {                                                                                          // 15
		return new MouseEvent('click', {                                                                                     // 16
			bubbles: true,                                                                                                      // 17
			cancelable: true,                                                                                                   // 18
			view: window                                                                                                        // 19
		});                                                                                                                  // 16
	},                                                                                                                    // 21
	flextTabButton: function () {                                                                                         // 23
		var flextTabButton = document.querySelector('.flex-tab-bar .tab-button.active');                                     // 24
                                                                                                                       //
		if (flextTabButton) {                                                                                                // 25
			flextTabButton.dispatchEvent(this.getClickEvent());                                                                 // 26
			return;                                                                                                             // 27
		}                                                                                                                    // 28
	},                                                                                                                    // 29
	sideNavIcon: function () {                                                                                            // 31
		var sideNavArrow = document.querySelector('.side-nav .arrow');                                                       // 32
                                                                                                                       //
		if (sideNavArrow && (sideNavArrow.classList.contains('top') || sideNavArrow.classList.contains('close'))) {          // 33
			SideNav.toggleCurrent();                                                                                            // 34
			return;                                                                                                             // 35
		}                                                                                                                    // 36
	},                                                                                                                    // 37
	videoDialog: function () {                                                                                            // 39
		var vrecDialog = document.querySelector('.vrec-dialog');                                                             // 40
                                                                                                                       //
		if (vrecDialog && Number(window.getComputedStyle(vrecDialog).opacity) === 1) {                                       // 41
			VideoRecorder.stop();                                                                                               // 42
			VRecDialog.close();                                                                                                 // 43
			return;                                                                                                             // 44
		}                                                                                                                    // 45
	},                                                                                                                    // 46
	sweetAlerts: function () {                                                                                            // 48
		var sweetAlert = document.querySelector('.sweet-alert');                                                             // 49
                                                                                                                       //
		if (sweetAlert) {                                                                                                    // 50
			document.querySelector('.sweet-alert .sa-button-container .cancel').dispatchEvent(this.getClickEvent());            // 51
			return;                                                                                                             // 52
		}                                                                                                                    // 53
	}                                                                                                                     // 54
};                                                                                                                     // 1
this.escapify = escapify;                                                                                              // 57
this.escapify.init();                                                                                                  // 58
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"views":{"404":{"template.roomNotFound.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/404/template.roomNotFound.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("roomNotFound");                                                                                  // 2
Template["roomNotFound"] = new Template("Template.roomNotFound", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return HTML.SECTION({                                                                                                // 5
    class: "page-container page-list content-background-color"                                                         // 6
  }, "\n\t\t", HTML.HEADER({                                                                                           // 7
    class: "fixed-title content-background-color border-component-color"                                               // 8
  }, "\n\t\t\t", Spacebars.include(view.lookupTemplate("burger")), "\n\t\t\t", HTML.H2("\n\t\t\t\t", HTML.SPAN({       // 9
    class: "room-title"                                                                                                // 10
  }, Blaze.View("lookup:_", function() {                                                                               // 11
    return Spacebars.mustache(view.lookup("_"), "Room_not_found");                                                     // 12
  })), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                    // 13
    class: "content room-not-found error-color"                                                                        // 14
  }, "\n\t\t\t", HTML.Raw('<i class="icon-attention"></i>'), "\n\t\t\t", HTML.DIV("\n\t\t\t\t", Spacebars.With(function() {
    return Spacebars.call(view.lookup("data"));                                                                        // 16
  }, function() {                                                                                                      // 17
    return [ "\n\t\t\t\t\t", Blaze.If(function() {                                                                     // 18
      return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("type"), "c");                                     // 19
    }, function() {                                                                                                    // 20
      return [ "\n\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                   // 21
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "No_channel_with_name_%s_was_found", view.lookup("name")));
      }), "\n\t\t\t\t\t" ];                                                                                            // 23
    }), "\n\t\t\t\t\t", Blaze.If(function() {                                                                          // 24
      return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("type"), "p");                                     // 25
    }, function() {                                                                                                    // 26
      return [ "\n\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                   // 27
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "No_group_with_name_%s_was_found", view.lookup("name")));
      }), "\n\t\t\t\t\t" ];                                                                                            // 29
    }), "\n\t\t\t\t\t", Blaze.If(function() {                                                                          // 30
      return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("type"), "d");                                     // 31
    }, function() {                                                                                                    // 32
      return [ "\n\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                   // 33
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "No_user_with_username_%s_was_found", view.lookup("name")));
      }), "\n\t\t\t\t\t" ];                                                                                            // 35
    }), "\n\t\t\t\t" ];                                                                                                // 36
  }), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                                                 // 37
}));                                                                                                                   // 38
                                                                                                                       // 39
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.invalidSecretURL.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/404/template.invalidSecretURL.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("invalidSecretURL");                                                                              // 2
Template["invalidSecretURL"] = new Template("Template.invalidSecretURL", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "content"                                                                                                   // 6
  }, "\n\t\t", HTML.DIV({                                                                                              // 7
    class: "attention-message"                                                                                         // 8
  }, "\n\t\t\t", HTML.Raw('<i class="icon-attention"></i>'), "\n\t\t\t", Blaze.View("lookup:_", function() {           // 9
    return Spacebars.mustache(view.lookup("_"), "Invalid_secret_URL_message");                                         // 10
  }), "\n\t\t"), "\n\t");                                                                                              // 11
}));                                                                                                                   // 12
                                                                                                                       // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"roomNotFound.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/404/roomNotFound.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.roomNotFound.helpers({                                                                                        // 1
	data: function () {                                                                                                   // 2
		return Session.get('roomNotFound');                                                                                  // 3
	},                                                                                                                    // 4
	name: function () {                                                                                                   // 5
		return Blaze._escape(this.name);                                                                                     // 6
	}                                                                                                                     // 7
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"template.cmsPage.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/template.cmsPage.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("cmsPage");                                                                                       // 2
Template["cmsPage"] = new Template("Template.cmsPage", (function() {                                                   // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "cms-page content-background-color"                                                                         // 6
  }, HTML.Raw('\n\t\t<div class="cms-page-close">\n\t\t\t<a href="/login" class="button primary"><i class="icon-cancel"></i></a>\n\t\t</div>\n\t\t'), Blaze.View("lookup:page", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("page")));                                                 // 8
  }), "\n\t");                                                                                                         // 9
}));                                                                                                                   // 10
                                                                                                                       // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.fxos.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/template.fxos.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("fxOsInstallPrompt");                                                                             // 2
Template["fxOsInstallPrompt"] = new Template("Template.fxOsInstallPrompt", (function() {                               // 3
  var view = this;                                                                                                     // 4
  return HTML.SECTION({                                                                                                // 5
    class: "full-page color-tertiary-font-color"                                                                       // 6
  }, "\n\t\t", HTML.DIV({                                                                                              // 7
    class: "wrapper"                                                                                                   // 8
  }, "\n\t\t\t", HTML.Raw('<header>\n\t\t\t\t<a class="logo" href="/">\n\t\t\t\t\t<img src="images/logo/logo.svg?v=3">\n\t\t\t\t</a>\n\t\t\t</header>'), "\n\t\t\t", HTML.DIV({
    class: "cms-page content-background-color"                                                                         // 10
  }, "\n\t\t\t\t", HTML.H1(Blaze.View("lookup:_", function() {                                                         // 11
    return Spacebars.mustache(view.lookup("_"), "Install_FxOs");                                                       // 12
  })), "\n\t\t\t\t", HTML.P(Blaze.View("lookup:_", function() {                                                        // 13
    return Spacebars.mustache(view.lookup("_"), "Install_FxOs_follow_instructions");                                   // 14
  })), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                                                // 15
}));                                                                                                                   // 16
                                                                                                                       // 17
Template.__checkName("fxOsInstallDone");                                                                               // 18
Template["fxOsInstallDone"] = new Template("Template.fxOsInstallDone", (function() {                                   // 19
  var view = this;                                                                                                     // 20
  return HTML.SECTION({                                                                                                // 21
    class: "full-page color-tertiary-font-color"                                                                       // 22
  }, "\n\t\t", HTML.DIV({                                                                                              // 23
    class: "wrapper"                                                                                                   // 24
  }, "\n\t\t\t", HTML.Raw('<header>\n\t\t\t\t<a class="logo" href="/">\n\t\t\t\t\t<img src="images/logo/logo.svg?v=3">\n\t\t\t\t</a>\n\t\t\t</header>'), "\n\t\t\t", HTML.DIV({
    class: "cms-page content-background-color"                                                                         // 26
  }, "\n\t\t\t\t", HTML.H1(Blaze.View("lookup:_", function() {                                                         // 27
    return Spacebars.mustache(view.lookup("_"), "Install_FxOs");                                                       // 28
  })), "\n\t\t\t\t", HTML.P(Blaze.View("lookup:_", function() {                                                        // 29
    return Spacebars.mustache(view.lookup("_"), "Install_FxOs_done");                                                  // 30
  })), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                                                // 31
}));                                                                                                                   // 32
                                                                                                                       // 33
Template.__checkName("fxOsInstallError");                                                                              // 34
Template["fxOsInstallError"] = new Template("Template.fxOsInstallError", (function() {                                 // 35
  var view = this;                                                                                                     // 36
  return HTML.SECTION({                                                                                                // 37
    class: "full-page color-tertiary-font-color"                                                                       // 38
  }, "\n\t\t", HTML.DIV({                                                                                              // 39
    class: "wrapper"                                                                                                   // 40
  }, "\n\t\t\t", HTML.Raw('<header>\n\t\t\t\t<a class="logo" href="/">\n\t\t\t\t\t<img src="images/logo/logo.svg?v=3">\n\t\t\t\t</a>\n\t\t\t</header>'), "\n\t\t\t", HTML.DIV({
    class: "cms-page content-background-color"                                                                         // 42
  }, "\n\t\t\t\t", HTML.H1(Blaze.View("lookup:_", function() {                                                         // 43
    return Spacebars.mustache(view.lookup("_"), "Install_FxOs");                                                       // 44
  })), "\n\t\t\t\t", HTML.P(Blaze.View("lookup:_", function() {                                                        // 45
    return Spacebars.mustache(view.lookup("_"), "Install_FxOs_error");                                                 // 46
  })), "\n\t\t\t\t", HTML.P(Blaze.View("lookup:installError", function() {                                             // 47
    return Spacebars.mustache(view.lookup("installError"));                                                            // 48
  })), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                                                // 49
}));                                                                                                                   // 50
                                                                                                                       // 51
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.modal.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/template.modal.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("modal");                                                                                         // 2
Template["modal"] = new Template("Template.modal", (function() {                                                       // 3
  var view = this;                                                                                                     // 4
  return HTML.SECTION({                                                                                                // 5
    id: function() {                                                                                                   // 6
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "id"));                                                // 7
    },                                                                                                                 // 8
    class: function() {                                                                                                // 9
      return [ "rocket-modal ", Spacebars.mustache(Spacebars.dot(view.lookup("."), "class")) ];                        // 10
    },                                                                                                                 // 11
    tabindex: "-1",                                                                                                    // 12
    role: "dialog",                                                                                                    // 13
    "aria-hidden": "true"                                                                                              // 14
  }, "\n\t\t", HTML.DIV({                                                                                              // 15
    class: "wrapper"                                                                                                   // 16
  }, "\n\t\t\t", HTML.DIV({                                                                                            // 17
    class: "window"                                                                                                    // 18
  }, "\n\t\t\t\t", HTML.FORM({                                                                                         // 19
    id: function() {                                                                                                   // 20
      return [ Spacebars.mustache(Spacebars.dot(view.lookup("."), "id")), "-form" ];                                   // 21
    },                                                                                                                 // 22
    class: "modal form-horizontal"                                                                                     // 23
  }, "\n\t\t\t\t\t", HTML.HEADER("\n\t\t\t\t\t\t", HTML.H3(Blaze.View("lookup:..title", function() {                   // 24
    return Spacebars.mustache(Spacebars.dot(view.lookup("."), "title"));                                               // 25
  })), "\n\t\t\t\t\t\t", HTML.Raw('<span class="close"><i class="icon-cancel"></i></span>'), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.MAIN("\n\t\t\t\t\t\t", Blaze._InOuterTemplateScope(view, function() {
    return Spacebars.include(function() {                                                                              // 27
      return Spacebars.call(view.templateContentBlock);                                                                // 28
    });                                                                                                                // 29
  }), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.FOOTER("\n\t\t\t\t\t\t", Blaze.If(function() {                             // 30
    return Spacebars.call(Spacebars.dot(view.lookup("."), "save"));                                                    // 31
  }, function() {                                                                                                      // 32
    return [ "\n\t\t\t\t\t\t\t", HTML.BUTTON({                                                                         // 33
      class: "button primary",                                                                                         // 34
      type: "submit",                                                                                                  // 35
      "data-loading-text": function() {                                                                                // 36
        return [ Spacebars.mustache(view.lookup("_"), "Please_wait"), "..." ];                                         // 37
      }                                                                                                                // 38
    }, HTML.SPAN(Blaze.View("lookup:..save", function() {                                                              // 39
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "save"));                                              // 40
    }))), "\n\t\t\t\t\t\t" ];                                                                                          // 41
  }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                          // 42
    return Spacebars.call(Spacebars.dot(view.lookup("."), "close"));                                                   // 43
  }, function() {                                                                                                      // 44
    return [ "\n\t\t\t\t\t\t\t", HTML.BUTTON({                                                                         // 45
      class: "button danger"                                                                                           // 46
    }, HTML.SPAN(Blaze.View("lookup:..close", function() {                                                             // 47
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "close"));                                             // 48
    }))), "\n\t\t\t\t\t\t" ];                                                                                          // 49
  }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                 // 50
}));                                                                                                                   // 51
                                                                                                                       // 52
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"app":{"template.audioNotification.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/app/template.audioNotification.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("audioNotification");                                                                             // 2
Template["audioNotification"] = new Template("Template.audioNotification", (function() {                               // 3
  var view = this;                                                                                                     // 4
  return HTML.Raw('<div id="audioFilesPreload">\n\t\t<audio id="chime" preload="">\n\t\t\t<source src="sounds/chime.mp3" type="audio/mpeg">\n\t\t</audio>\n\t\t<audio id="door" preload="">\n\t\t\t<source src="sounds/door.mp3" type="audio/mpeg">\n\t\t</audio>\n\t</div>');
}));                                                                                                                   // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.burger.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/app/template.burger.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("burger");                                                                                        // 2
Template["burger"] = new Template("Template.burger", (function() {                                                     // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: function() {                                                                                                // 6
      return [ "burger ", Spacebars.mustache(view.lookup("isMenuOpen")) ];                                             // 7
    }                                                                                                                  // 8
  }, HTML.Raw("\n\t\t<i></i>\n\t\t<i></i>\n\t\t<i></i>\n\t\t"), Blaze.If(function() {                                  // 9
    return Spacebars.call(view.lookup("unread"));                                                                      // 10
  }, function() {                                                                                                      // 11
    return [ "\n\t\t\t", HTML.DIV({                                                                                    // 12
      class: "unread-burger-alert color-error-contrast background-error-color"                                         // 13
    }, "\n\t\t\t\t", Blaze.View("lookup:unread", function() {                                                          // 14
      return Spacebars.mustache(view.lookup("unread"));                                                                // 15
    }), "\n\t\t\t"), "\n\t\t" ];                                                                                       // 16
  }), "\n\t");                                                                                                         // 17
}));                                                                                                                   // 18
                                                                                                                       // 19
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.home.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/app/template.home.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("home");                                                                                          // 2
Template["home"] = new Template("Template.home", (function() {                                                         // 3
  var view = this;                                                                                                     // 4
  return HTML.SECTION({                                                                                                // 5
    class: "page-container page-home page-static content-background-color"                                             // 6
  }, "\n\t\t", HTML.HEADER({                                                                                           // 7
    class: "fixed-title content-background-color border-component-color"                                               // 8
  }, "\n\t\t\t", Spacebars.include(view.lookupTemplate("burger")), "\n\t\t\t", HTML.H2("\n\t\t\t\t", HTML.SPAN({       // 9
    class: "room-title"                                                                                                // 10
  }, Blaze.View("lookup:title", function() {                                                                           // 11
    return Spacebars.mustache(view.lookup("title"));                                                                   // 12
  })), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                    // 13
    class: "content"                                                                                                   // 14
  }, "\n            packages/rocketchat-ui/client/views/app ", Blaze.View("lookup:body", function() {                  // 15
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("body")));                                                 // 16
  }), "\n\t\t"), "\n\t");                                                                                              // 17
}));                                                                                                                   // 18
                                                                                                                       // 19
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.notAuthorized.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/app/template.notAuthorized.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("notAuthorized");                                                                                 // 2
Template["notAuthorized"] = new Template("Template.notAuthorized", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return HTML.H2(Blaze.View("lookup:_", function() {                                                                   // 5
    return Spacebars.mustache(view.lookup("_"), "Access_not_authorized");                                              // 6
  }));                                                                                                                 // 7
}));                                                                                                                   // 8
                                                                                                                       // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.pageContainer.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/app/template.pageContainer.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("pageContainer");                                                                                 // 2
Template["pageContainer"] = new Template("Template.pageContainer", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return HTML.SECTION({                                                                                                // 5
    class: "page-container page-home page-static page-list content-background-color"                                   // 6
  }, "\n\t\t", HTML.HEADER({                                                                                           // 7
    class: "fixed-title content-background-color border-component-color"                                               // 8
  }, "\n\t\t\t", Spacebars.include(view.lookupTemplate("burger")), "\n\t\t\t", HTML.H2("\n\t\t\t\t", HTML.SPAN({       // 9
    class: "page-title"                                                                                                // 10
  }, "\n\t\t\t\t\t", Blaze.If(function() {                                                                             // 11
    return Spacebars.call(view.lookup("i18nPageTitle"));                                                               // 12
  }, function() {                                                                                                      // 13
    return [ "\n\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                     // 14
      return Spacebars.mustache(view.lookup("_"), view.lookup("i18nPageTitle"));                                       // 15
    }), "\n\t\t\t\t\t" ];                                                                                              // 16
  }, function() {                                                                                                      // 17
    return [ "\n\t\t\t\t\t\t", Blaze.View("lookup:pageTitle", function() {                                             // 18
      return Spacebars.mustache(view.lookup("pageTitle"));                                                             // 19
    }), "\n\t\t\t\t\t" ];                                                                                              // 20
  }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.DIV({                                                      // 21
    class: "content"                                                                                                   // 22
  }, "\n\t\t\t", HTML.DIV("\n\t\t\t\t", Blaze._TemplateWith(function() {                                               // 23
    return {                                                                                                           // 24
      template: Spacebars.call(view.lookup("pageTemplate"))                                                            // 25
    };                                                                                                                 // 26
  }, function() {                                                                                                      // 27
    return Spacebars.include(function() {                                                                              // 28
      return Spacebars.call(Template.__dynamic);                                                                       // 29
    });                                                                                                                // 30
  }), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                                                 // 31
}));                                                                                                                   // 32
                                                                                                                       // 33
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.pageSettingsContainer.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/app/template.pageSettingsContainer.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("pageSettingsContainer");                                                                         // 2
Template["pageSettingsContainer"] = new Template("Template.pageSettingsContainer", (function() {                       // 3
  var view = this;                                                                                                     // 4
  return HTML.SECTION({                                                                                                // 5
    class: "page-container page-home page-static page-settings content-background-color"                               // 6
  }, "\n\t\t", HTML.HEADER({                                                                                           // 7
    class: "fixed-title content-background-color border-component-color"                                               // 8
  }, "\n\t\t\t", Spacebars.include(view.lookupTemplate("burger")), "\n\t\t\t", HTML.H2("\n\t\t\t\t", HTML.SPAN({       // 9
    class: "page-title"                                                                                                // 10
  }, Blaze.View("lookup:pageTitle", function() {                                                                       // 11
    return Spacebars.mustache(view.lookup("pageTitle"));                                                               // 12
  })), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                    // 13
    class: function() {                                                                                                // 14
      return [ "content ", Blaze.If(function() {                                                                       // 15
        return Spacebars.call(view.lookup("noScroll"));                                                                // 16
      }, function() {                                                                                                  // 17
        return "no-scroll";                                                                                            // 18
      }) ];                                                                                                            // 19
    }                                                                                                                  // 20
  }, "\n\t\t\t", Blaze._TemplateWith(function() {                                                                      // 21
    return {                                                                                                           // 22
      template: Spacebars.call(view.lookup("pageTemplate"))                                                            // 23
    };                                                                                                                 // 24
  }, function() {                                                                                                      // 25
    return Spacebars.include(function() {                                                                              // 26
      return Spacebars.call(Template.__dynamic);                                                                       // 27
    });                                                                                                                // 28
  }), "\n\t\t"), "\n\t");                                                                                              // 29
}));                                                                                                                   // 30
                                                                                                                       // 31
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.privateHistory.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/app/template.privateHistory.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("privateHistory");                                                                                // 2
Template["privateHistory"] = new Template("Template.privateHistory", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return HTML.SECTION({                                                                                                // 5
    class: "page-container page-list content-background-color"                                                         // 6
  }, "\n\t\t", HTML.HEADER({                                                                                           // 7
    class: "fixed-title content-background-color border-component-color"                                               // 8
  }, "\n\t\t\t", Spacebars.include(view.lookupTemplate("burger")), "\n\t\t\t", HTML.H2("\n\t\t\t\t", HTML.SPAN({       // 9
    class: "room-title"                                                                                                // 10
  }, Blaze.View("lookup:_", function() {                                                                               // 11
    return Spacebars.mustache(view.lookup("_"), "History");                                                            // 12
  })), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                    // 13
    class: "content"                                                                                                   // 14
  }, "\n\t\t\t", HTML.FORM({                                                                                           // 15
    class: "search-form",                                                                                              // 16
    role: "form"                                                                                                       // 17
  }, "\n\t\t\t\t", HTML.DIV({                                                                                          // 18
    class: "input-line search"                                                                                         // 19
  }, "\n\t\t\t\t\t", HTML.INPUT({                                                                                      // 20
    type: "text",                                                                                                      // 21
    id: "history-filter",                                                                                              // 22
    placeholder: function() {                                                                                          // 23
      return Spacebars.mustache(view.lookup("_"), "Search");                                                           // 24
    },                                                                                                                 // 25
    dir: "auto"                                                                                                        // 26
  }), "\n\t\t\t\t\t", HTML.Raw('<i class="icon-search secondary-font-color"></i>'), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({
    class: "results"                                                                                                   // 28
  }, "\n\t\t\t\t", Blaze.View("lookup:_", function() {                                                                 // 29
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Showing_results", Spacebars.dot(view.lookup("history"), "length")));
  }), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                              // 31
    class: "list"                                                                                                      // 32
  }, "\n\t\t\t\t", Blaze.Each(function() {                                                                             // 33
    return Spacebars.call(Spacebars.dot(view.lookup("history"), "items"));                                             // 34
  }, function() {                                                                                                      // 35
    return [ "\n\t\t\t\t\t", HTML.A({                                                                                  // 36
      href: function() {                                                                                               // 37
        return Spacebars.mustache(view.lookup("path"));                                                                // 38
      }                                                                                                                // 39
    }, "\n\t\t\t\t\t\t", HTML.DIV({                                                                                    // 40
      class: "info"                                                                                                    // 41
    }, "\n\t\t\t\t\t\t\t", HTML.H3(HTML.I({                                                                            // 42
      class: function() {                                                                                              // 43
        return Spacebars.mustache(view.lookup("type"));                                                                // 44
      }                                                                                                                // 45
    }), HTML.SPAN({                                                                                                    // 46
      class: "enter-room"                                                                                              // 47
    }, Blaze.View("lookup:name", function() {                                                                          // 48
      return Spacebars.mustache(view.lookup("name"));                                                                  // 49
    }))), "\n\t\t\t\t\t\t\t", HTML.UL("\n\t\t\t\t\t\t\t\t", Spacebars.With(function() {                                // 50
      return Spacebars.dataMustache(view.lookup("roomOf"), view.lookup("rid"));                                        // 51
    }, function() {                                                                                                    // 52
      return [ "\n\t\t\t\t\t\t\t\t\t", HTML.LI(Blaze.View("lookup:_", function() {                                     // 53
        return Spacebars.mustache(view.lookup("_"), "n_messages", view.lookup("msgs"));                                // 54
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.LI(Blaze.View("lookup:_", function() {                                         // 55
        return Spacebars.mustache(view.lookup("_"), "since_creation", view.lookup("creation"));                        // 56
      })), "\n\t\t\t\t\t\t\t\t" ];                                                                                     // 57
    }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({                                           // 58
      class: "title"                                                                                                   // 59
    }, "\n\t\t\t\t\t\t\t", Spacebars.With(function() {                                                                 // 60
      return Spacebars.dataMustache(view.lookup("roomOf"), view.lookup("rid"));                                        // 61
    }, function() {                                                                                                    // 62
      return [ "\n\t\t\t\t\t\t\t\t", HTML.STRONG(Blaze.View("lookup:lastMessage", function() {                         // 63
        return Spacebars.mustache(view.lookup("lastMessage"));                                                         // 64
      })), "\n\t\t\t\t\t\t\t" ];                                                                                       // 65
    }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                            // 66
  }), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                              // 67
    class: "results"                                                                                                   // 68
  }, "\n\t\t\t\t", Blaze.View("lookup:_", function() {                                                                 // 69
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Showing_archived_results", Spacebars.dot(view.lookup("archivedHistory"), "length")));
  }), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                              // 71
    class: "list"                                                                                                      // 72
  }, "\n\t\t\t\t", Blaze.Each(function() {                                                                             // 73
    return Spacebars.call(Spacebars.dot(view.lookup("archivedHistory"), "items"));                                     // 74
  }, function() {                                                                                                      // 75
    return [ "\n\t\t\t\t\t", HTML.A({                                                                                  // 76
      href: function() {                                                                                               // 77
        return Spacebars.mustache(view.lookup("path"));                                                                // 78
      }                                                                                                                // 79
    }, "\n\t\t\t\t\t\t", HTML.DIV({                                                                                    // 80
      class: "info"                                                                                                    // 81
    }, "\n\t\t\t\t\t\t\t", HTML.H3(HTML.I({                                                                            // 82
      class: function() {                                                                                              // 83
        return Spacebars.mustache(view.lookup("type"));                                                                // 84
      }                                                                                                                // 85
    }), HTML.SPAN({                                                                                                    // 86
      class: "enter-room"                                                                                              // 87
    }, Blaze.View("lookup:name", function() {                                                                          // 88
      return Spacebars.mustache(view.lookup("name"));                                                                  // 89
    }))), "\n\t\t\t\t\t\t\t", HTML.UL("\n\t\t\t\t\t\t\t\t", Spacebars.With(function() {                                // 90
      return Spacebars.dataMustache(view.lookup("roomOf"), view.lookup("rid"));                                        // 91
    }, function() {                                                                                                    // 92
      return [ "\n\t\t\t\t\t\t\t\t\t", HTML.LI(Blaze.View("lookup:_", function() {                                     // 93
        return Spacebars.mustache(view.lookup("_"), "n_messages", view.lookup("msgs"));                                // 94
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.LI(Blaze.View("lookup:_", function() {                                         // 95
        return Spacebars.mustache(view.lookup("_"), "since_creation", view.lookup("creation"));                        // 96
      })), "\n\t\t\t\t\t\t\t\t" ];                                                                                     // 97
    }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({                                           // 98
      class: "title"                                                                                                   // 99
    }, "\n\t\t\t\t\t\t\t", Spacebars.With(function() {                                                                 // 100
      return Spacebars.dataMustache(view.lookup("roomOf"), view.lookup("rid"));                                        // 101
    }, function() {                                                                                                    // 102
      return [ "\n\t\t\t\t\t\t\t\t", HTML.STRONG(Blaze.View("lookup:lastMessage", function() {                         // 103
        return Spacebars.mustache(view.lookup("lastMessage"));                                                         // 104
      })), "\n\t\t\t\t\t\t\t" ];                                                                                       // 105
    }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                            // 106
  }), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                                                 // 107
}));                                                                                                                   // 108
                                                                                                                       // 109
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.room.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/app/template.room.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("room");                                                                                          // 2
Template["room"] = new Template("Template.room", (function() {                                                         // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "dropzone"                                                                                                  // 6
  }, "\n\t\t", HTML.DIV({                                                                                              // 7
    class: "dropzone-overlay background-transparent-darkest color-content-background-color"                            // 8
  }, "\n\t\t\t", HTML.DIV({                                                                                            // 9
    class: "background-transparent-darkest"                                                                            // 10
  }, "\n\t\t\t\t", Blaze.View("lookup:_", function() {                                                                 // 11
    return Spacebars.mustache(view.lookup("_"), "Drop_to_upload_file");                                                // 12
  }), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                     // 13
    class: "main-content-flex"                                                                                         // 14
  }, "\n\t\t\t", HTML.SECTION({                                                                                        // 15
    class: function() {                                                                                                // 16
      return [ "messages-container flex-tab-main-content ", Spacebars.mustache(view.lookup("adminClass")) ];           // 17
    },                                                                                                                 // 18
    id: function() {                                                                                                   // 19
      return Spacebars.mustache(view.lookup("windowId"));                                                              // 20
    },                                                                                                                 // 21
    "aria-label": function() {                                                                                         // 22
      return Spacebars.mustache(view.lookup("_"), "Channel");                                                          // 23
    }                                                                                                                  // 24
  }, "\n\t\t\t\t", Blaze.Unless(function() {                                                                           // 25
    return Spacebars.call(view.lookup("embeddedVersion"));                                                             // 26
  }, function() {                                                                                                      // 27
    return [ "\n\t\t\t\t\t", HTML.HEADER({                                                                             // 28
      class: "fixed-title content-background-color border-component-color"                                             // 29
    }, "\n\t\t\t\t\t\t", Spacebars.include(view.lookupTemplate("burger")), "\n\t\t\t\t\t\t", HTML.H2("\n\t\t\t\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(view.lookup("showToggleFavorite"));                                                        // 31
    }, function() {                                                                                                    // 32
      return [ "\n\t\t\t\t\t\t\t\t", HTML.A({                                                                          // 33
        href: "#favorite",                                                                                             // 34
        class: "toggle-favorite"                                                                                       // 35
      }, HTML.I({                                                                                                      // 36
        class: function() {                                                                                            // 37
          return Spacebars.mustache(view.lookup("favorite"));                                                          // 38
        },                                                                                                             // 39
        "aria-label": function() {                                                                                     // 40
          return Spacebars.mustache(view.lookup("_"), view.lookup("favoriteLabel"));                                   // 41
        }                                                                                                              // 42
      })), "\n\t\t\t\t\t\t\t" ];                                                                                       // 43
    }), "\n\t\t\t\t\t\t\t", HTML.I({                                                                                   // 44
      class: function() {                                                                                              // 45
        return [ Spacebars.mustache(view.lookup("roomIcon")), " status-", Spacebars.mustache(view.lookup("userStatus")) ];
      }                                                                                                                // 47
    }), "\n\t\t\t\t\t\t\t", HTML.SPAN({                                                                                // 48
      class: "room-title"                                                                                              // 49
    }, Blaze.View("lookup:roomName", function() {                                                                      // 50
      return Spacebars.mustache(view.lookup("roomName"));                                                              // 51
    })), "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                                     // 52
      return Spacebars.call(view.lookup("secondaryName"));                                                             // 53
    }, function() {                                                                                                    // 54
      return [ "\n\t\t\t\t\t\t\t\t", HTML.SPAN({                                                                       // 55
        class: "secondary-name"                                                                                        // 56
      }, "@", Blaze.View("lookup:secondaryName", function() {                                                          // 57
        return Spacebars.mustache(view.lookup("secondaryName"));                                                       // 58
      })), "\n\t\t\t\t\t\t\t" ];                                                                                       // 59
    }), "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                                      // 60
      return Spacebars.call(view.lookup("sentimentSmile"));                                                            // 61
    }, function() {                                                                                                    // 62
      return [ "\n\t\t\t\t\t\t\t\t", HTML.SPAN({                                                                       // 63
        class: "sentiment"                                                                                             // 64
      }, Blaze.View("lookup:sentimentSmile", function() {                                                              // 65
        return Spacebars.mustache(view.lookup("sentimentSmile"));                                                      // 66
      })), "\n\t\t\t\t\t\t\t" ];                                                                                       // 67
    }), "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                                      // 68
      return Spacebars.call(view.lookup("isTranslated"));                                                              // 69
    }, function() {                                                                                                    // 70
      return [ "\n\t\t\t\t\t\t\t\t", HTML.I({                                                                          // 71
        class: "icon-language",                                                                                        // 72
        "aria-label": function() {                                                                                     // 73
          return Spacebars.mustache(view.lookup("_"), "Translated");                                                   // 74
        }                                                                                                              // 75
      }), "\n\t\t\t\t\t\t\t" ];                                                                                        // 76
    }), "\n\t\t\t\t\t\t\t", HTML.SPAN({                                                                                // 77
      class: "room-topic"                                                                                              // 78
    }, Blaze.View("lookup:RocketChatMarkdown", function() {                                                            // 79
      return Spacebars.mustache(view.lookup("RocketChatMarkdown"), view.lookup("roomTopic"));                          // 80
    })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", Blaze.If(function() {                                     // 81
      return Spacebars.call(view.lookup("showAnnouncement"));                                                          // 82
    }, function() {                                                                                                    // 83
      return [ "\n\t\t\t\t\t\t", HTML.DIV({                                                                            // 84
        class: "fixed-title announcement"                                                                              // 85
      }, "\n\t\t\t\t\t\t\t", Blaze.View("lookup:RocketChatMarkdown", function() {                                      // 86
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("RocketChatMarkdown"), view.lookup("roomAnnouncement")));
      }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                                                                         // 88
    }), "\n\t\t\t\t" ];                                                                                                // 89
  }), "\n\t\t\t\t", HTML.DIV({                                                                                         // 90
    class: function() {                                                                                                // 91
      return [ "container-bars ", Spacebars.mustache(view.lookup("containerBarsShow"), view.lookup("unreadData"), view.lookup("uploading")) ];
    }                                                                                                                  // 93
  }, "\n\t\t\t\t\t", Spacebars.With(function() {                                                                       // 94
    return Spacebars.call(view.lookup("unreadData"));                                                                  // 95
  }, function() {                                                                                                      // 96
    return [ "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                   // 97
      return Spacebars.call(view.lookup("since"));                                                                     // 98
    }, function() {                                                                                                    // 99
      return [ "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                               // 100
        return Spacebars.call(view.lookup("count"));                                                                   // 101
      }, function() {                                                                                                  // 102
        return [ "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                      // 103
          class: "unread-bar color-primary-action-color background-component-color"                                    // 104
        }, "\n\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                       // 105
          class: "jump-to"                                                                                             // 106
        }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.SPAN({                                                                       // 107
          class: "jump-to-large"                                                                                       // 108
        }, Blaze.View("lookup:_", function() {                                                                         // 109
          return Spacebars.mustache(view.lookup("_"), "Jump_to_first_unread");                                         // 110
        })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.SPAN({                                                                     // 111
          class: "jump-to-small"                                                                                       // 112
        }, Blaze.View("lookup:_", function() {                                                                         // 113
          return Spacebars.mustache(view.lookup("_"), "Jump");                                                         // 114
        })), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t", HTML.SPAN({                                              // 115
          class: "unread-count-since"                                                                                  // 116
        }, "\n\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                               // 117
          return Spacebars.mustache(view.lookup("_"), "S_new_messages_since_s", view.lookup("count"), view.lookup("formatUnreadSince"));
        }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t", HTML.SPAN({                                               // 119
          class: "unread-count"                                                                                        // 120
        }, "\n\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                               // 121
          return Spacebars.mustache(view.lookup("_"), "N_new_messages", view.lookup("count"));                         // 122
        }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                             // 123
          class: "mark-read"                                                                                           // 124
        }, "\n\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                               // 125
          return Spacebars.mustache(view.lookup("_"), "Mark_as_read");                                                 // 126
        }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];                                      // 127
      }), "\n\t\t\t\t\t\t" ];                                                                                          // 128
    }), "\n\t\t\t\t\t" ];                                                                                              // 129
  }), "\n\t\t\t\t\t", Blaze.Each(function() {                                                                          // 130
    return Spacebars.call(view.lookup("uploading"));                                                                   // 131
  }, function() {                                                                                                      // 132
    return [ "\n\t\t\t\t\t\t", HTML.DIV({                                                                              // 133
      class: function() {                                                                                              // 134
        return [ "upload-progress color-primary-action-color background-component-color ", Blaze.If(function() {       // 135
          return Spacebars.call(view.lookup("error"));                                                                 // 136
        }, function() {                                                                                                // 137
          return "error-background error-border";                                                                      // 138
        }) ];                                                                                                          // 139
      }                                                                                                                // 140
    }, "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                                       // 141
      return Spacebars.call(view.lookup("error"));                                                                     // 142
    }, function() {                                                                                                    // 143
      return [ "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                        // 144
        class: "upload-progress-text"                                                                                  // 145
      }, "\n\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:error", function() {                                               // 146
        return Spacebars.mustache(view.lookup("error"));                                                               // 147
      }), "\n\t\t\t\t\t\t\t\t\t", HTML.BUTTON("\n\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {            // 148
        return Spacebars.mustache(view.lookup("_"), "close");                                                          // 149
      }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];                                        // 150
    }, function() {                                                                                                    // 151
      return [ "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                        // 152
        class: "upload-progress-progress",                                                                             // 153
        style: function() {                                                                                            // 154
          return [ "width: ", Spacebars.mustache(view.lookup("percentage")), "%;" ];                                   // 155
        }                                                                                                              // 156
      }), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                             // 157
        class: "upload-progress-text"                                                                                  // 158
      }, "\n\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:name", function() {                                                // 159
        return Spacebars.mustache(view.lookup("name"));                                                                // 160
      }), "... ", Blaze.View("lookup:percentage", function() {                                                         // 161
        return Spacebars.mustache(view.lookup("percentage"));                                                          // 162
      }), "%\n\t\t\t\t\t\t\t\t\t", HTML.BUTTON("\n\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {           // 163
        return Spacebars.mustache(view.lookup("_"), "cancel");                                                         // 164
      }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];                                        // 165
    }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                                                                           // 166
  }), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                                          // 167
    class: function() {                                                                                                // 168
      return [ "messages-box ", Blaze.If(function() {                                                                  // 169
        return Spacebars.call(view.lookup("selectable"));                                                              // 170
      }, function() {                                                                                                  // 171
        return "selectable";                                                                                           // 172
      }), " ", Spacebars.mustache(view.lookup("viewMode")) ];                                                          // 173
    }                                                                                                                  // 174
  }, "\n                    ", HTML.Raw('<div style="height:30px;width:100%;background-color:#FFEE98;position:fixed;z-index:1000;padding-left:20px;padding-top:10px">\n                        공지사항\n                    </div>'), "\n                    ", HTML.Raw('<div class="ticks-bar"></div>'), "\n\t\t\t\t\t", HTML.BUTTON({
    class: "new-message background-primary-action-color color-content-background-color not"                            // 176
  }, "\n\t\t\t\t\t\t", HTML.Raw('<i class="icon-down-big"></i>'), "\n\t\t\t\t\t\t", Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "New_messages");                                                       // 178
  }), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                                                      // 179
    class: function() {                                                                                                // 180
      return [ "jump-recent background-component-color ", Blaze.Unless(function() {                                    // 181
        return Spacebars.call(view.lookup("hasMoreNext"));                                                             // 182
      }, function() {                                                                                                  // 183
        return "not";                                                                                                  // 184
      }) ];                                                                                                            // 185
    }                                                                                                                  // 186
  }, "\n\t\t\t\t\t\t", HTML.BUTTON(Blaze.View("lookup:_", function() {                                                 // 187
    return Spacebars.mustache(view.lookup("_"), "Jump_to_recent_messages");                                            // 188
  }), " ", HTML.Raw('<i class="icon-level-down"></i>')), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", Blaze.Unless(function() {    // 189
    return Spacebars.call(view.lookup("canPreview"));                                                                  // 190
  }, function() {                                                                                                      // 191
    return [ "\n\t\t\t\t\t\t", HTML.DIV({                                                                              // 192
      class: "content room-not-found error-color"                                                                      // 193
    }, "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                          // 194
      return Spacebars.mustache(view.lookup("_"), "You_must_join_to_view_messages_in_this_channel");                   // 195
    }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                                                      // 196
  }), "\n\t\t\t\t\t", HTML.DIV({                                                                                       // 197
    class: function() {                                                                                                // 198
      return [ "wrapper ", Blaze.If(function() {                                                                       // 199
        return Spacebars.call(view.lookup("hasMoreNext"));                                                             // 200
      }, function() {                                                                                                  // 201
        return "has-more-next";                                                                                        // 202
      }), " ", Spacebars.mustache(view.lookup("hideUsername")), " ", Spacebars.mustache(view.lookup("hideAvatar")) ];  // 203
    }                                                                                                                  // 204
  }, "\n\n\t\t\t\t\t\t", HTML.UL({                                                                                     // 205
    "aria-live": "polite"                                                                                              // 206
  }, "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                                         // 207
    return Spacebars.call(view.lookup("canPreview"));                                                                  // 208
  }, function() {                                                                                                      // 209
    return [ "\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                               // 210
      return Spacebars.call(view.lookup("hasMore"));                                                                   // 211
    }, function() {                                                                                                    // 212
      return [ "\n\t\t\t\t\t\t\t\t\t", HTML.LI({                                                                       // 213
        class: "load-more"                                                                                             // 214
      }, "\n\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                               // 215
        return Spacebars.call(view.lookup("isLoading"));                                                               // 216
      }, function() {                                                                                                  // 217
        return [ "\n\t\t\t\t\t\t\t\t\t\t\t", Spacebars.include(view.lookupTemplate("loading")), "\n\t\t\t\t\t\t\t\t\t\t" ];
      }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t" ];                                                             // 219
    }, function() {                                                                                                    // 220
      return [ "\n\t\t\t\t\t\t\t\t\t", HTML.LI({                                                                       // 221
        class: "start color-info-font-color"                                                                           // 222
      }, "\n\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                 // 223
        return Spacebars.mustache(view.lookup("_"), "Start_of_conversation");                                          // 224
      }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t" ];                                                             // 225
    }), "\n\t\t\t\t\t\t\t" ];                                                                                          // 226
  }), "\n\t\t\t\t\t\t\t", Blaze.Each(function() {                                                                      // 227
    return Spacebars.call(view.lookup("messagesHistory"));                                                             // 228
  }, function() {                                                                                                      // 229
    return [ "\n\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                    // 230
      return Spacebars.dataMustache(view.lookup("nrrargs"), "message", view.lookup("."));                              // 231
    }, function() {                                                                                                    // 232
      return Spacebars.include(view.lookupTemplate("nrr"), function() {                                                // 233
        return null;                                                                                                   // 234
      });                                                                                                              // 235
    }), "\n\t\t\t\t\t\t\t" ];                                                                                          // 236
  }), "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                                        // 237
    return Spacebars.call(view.lookup("hasMoreNext"));                                                                 // 238
  }, function() {                                                                                                      // 239
    return [ "\n\t\t\t\t\t\t\t\t", HTML.LI({                                                                           // 240
      class: "load-more"                                                                                               // 241
    }, "\n\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                                   // 242
      return Spacebars.call(view.lookup("isLoading"));                                                                 // 243
    }, function() {                                                                                                    // 244
      return [ "\n\t\t\t\t\t\t\t\t\t\t", Spacebars.include(view.lookupTemplate("loading")), "\n\t\t\t\t\t\t\t\t\t" ];  // 245
    }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];                                                                   // 246
  }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.FOOTER({                                   // 247
    class: "footer border-component-color"                                                                             // 248
  }, "\n\t\t\t\t\t", Spacebars.include(view.lookupTemplate("messageBox")), "\n\t\t\t\t"), "\n\t\t"), "\n\t\t\t", Spacebars.With(function() {
    return Spacebars.call(view.lookup("flexData"));                                                                    // 250
  }, function() {                                                                                                      // 251
    return [ "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("flexTabBar")), "\n\t\t\t" ];                         // 252
  }), "\n\t\t"), "\n\t");                                                                                              // 253
}));                                                                                                                   // 254
                                                                                                                       // 255
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.roomSearch.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/app/template.roomSearch.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("roomSearch");                                                                                    // 2
Template["roomSearch"] = new Template("Template.roomSearch", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return [ HTML.I({                                                                                                    // 5
    class: function() {                                                                                                // 6
      return [ Spacebars.mustache(view.lookup("roomIcon")), " ", Spacebars.mustache(view.lookup("userStatus")) ];      // 7
    }                                                                                                                  // 8
  }), " ", Blaze.View("lookup:name", function() {                                                                      // 9
    return Spacebars.mustache(view.lookup("name"));                                                                    // 10
  }) ];                                                                                                                // 11
}));                                                                                                                   // 12
                                                                                                                       // 13
Template.__checkName("roomSearchEmpty");                                                                               // 14
Template["roomSearchEmpty"] = new Template("Template.roomSearchEmpty", (function() {                                   // 15
  var view = this;                                                                                                     // 16
  return HTML.P(Blaze.View("lookup:_", function() {                                                                    // 17
    return Spacebars.mustache(view.lookup("_"), "Nothing_found");                                                      // 18
  }), ".");                                                                                                            // 19
}));                                                                                                                   // 20
                                                                                                                       // 21
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.secretURL.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/app/template.secretURL.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("secretURL");                                                                                     // 2
Template["secretURL"] = new Template("Template.secretURL", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("ready"));                                                                       // 6
  }, function() {                                                                                                      // 7
    return [ "\n\t\t", Blaze.If(function() {                                                                           // 8
      return Spacebars.call(view.lookup("registrationAllowed"));                                                       // 9
    }, function() {                                                                                                    // 10
      return [ "\n\t\t\t", Blaze._TemplateWith(function() {                                                            // 11
        return {                                                                                                       // 12
          center: Spacebars.call("home")                                                                               // 13
        };                                                                                                             // 14
      }, function() {                                                                                                  // 15
        return Spacebars.include(view.lookupTemplate("main"));                                                         // 16
      }), "\n\t\t" ];                                                                                                  // 17
    }, function() {                                                                                                    // 18
      return [ "\n\t\t\t", Blaze._TemplateWith(function() {                                                            // 19
        return {                                                                                                       // 20
          render: Spacebars.call("invalidSecretURL")                                                                   // 21
        };                                                                                                             // 22
      }, function() {                                                                                                  // 23
        return Spacebars.include(view.lookupTemplate("logoLayout"));                                                   // 24
      }), "\n\t\t" ];                                                                                                  // 25
    }), "\n\t" ];                                                                                                      // 26
  }, function() {                                                                                                      // 27
    return [ "\n\t\t", Spacebars.include(view.lookupTemplate("loading")), "\n\t" ];                                    // 28
  });                                                                                                                  // 29
}));                                                                                                                   // 30
                                                                                                                       // 31
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.userSearch.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/app/template.userSearch.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("userSearch");                                                                                    // 2
Template["userSearch"] = new Template("Template.userSearch", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return [ HTML.I({                                                                                                    // 5
    class: function() {                                                                                                // 6
      return [ "icon-at status-", Spacebars.mustache(view.lookup("status")) ];                                         // 7
    }                                                                                                                  // 8
  }), " ", Blaze.View("lookup:username", function() {                                                                  // 9
    return Spacebars.mustache(view.lookup("username"));                                                                // 10
  }), Blaze.If(function() {                                                                                            // 11
    return Spacebars.call(view.lookup("name"));                                                                        // 12
  }, function() {                                                                                                      // 13
    return [ " - ", HTML.STRONG(Blaze.View("lookup:name", function() {                                                 // 14
      return Spacebars.mustache(view.lookup("name"));                                                                  // 15
    })) ];                                                                                                             // 16
  }) ];                                                                                                                // 17
}));                                                                                                                   // 18
                                                                                                                       // 19
Template.__checkName("userSearchEmpty");                                                                               // 20
Template["userSearchEmpty"] = new Template("Template.userSearchEmpty", (function() {                                   // 21
  var view = this;                                                                                                     // 22
  return HTML.P(Blaze.View("lookup:_", function() {                                                                    // 23
    return Spacebars.mustache(view.lookup("_"), "Nothing_found");                                                      // 24
  }), ".");                                                                                                            // 25
}));                                                                                                                   // 26
                                                                                                                       // 27
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"videoCall":{"template.videoButtons.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/app/videoCall/template.videoButtons.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("videoButtons");                                                                                  // 2
Template["videoButtons"] = new Template("Template.videoButtons", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "buttons-group"                                                                                             // 6
  }, "\n\t\t", Blaze.If(function() {                                                                                   // 7
    return Spacebars.call(view.lookup("videoAvaliable"));                                                              // 8
  }, function() {                                                                                                      // 9
    return [ "\n\t\t\t", Blaze.Unless(function() {                                                                     // 10
      return Spacebars.call(view.lookup("videoActive"));                                                               // 11
    }, function() {                                                                                                    // 12
      return [ "\n\t\t\t\t", Blaze.If(function() {                                                                     // 13
        return Spacebars.call(view.lookup("callInProgress"));                                                          // 14
      }, function() {                                                                                                  // 15
        return [ "\n\t\t\t\t\t", HTML.BUTTON({                                                                         // 16
          class: "button join-video-call primary",                                                                     // 17
          "aria-label": function() {                                                                                   // 18
            return Spacebars.mustache(view.lookup("_"), "Join_video_call");                                            // 19
          }                                                                                                            // 20
        }, HTML.I({                                                                                                    // 21
          class: "icon-videocam"                                                                                       // 22
        })), "\n\t\t\t\t\t", HTML.BUTTON({                                                                             // 23
          class: "button join-audio-call secondary",                                                                   // 24
          "aria-label": function() {                                                                                   // 25
            return Spacebars.mustache(view.lookup("_"), "Join_audio_call");                                            // 26
          }                                                                                                            // 27
        }, HTML.I({                                                                                                    // 28
          class: "icon-phone"                                                                                          // 29
        })), "\n\t\t\t\t" ];                                                                                           // 30
      }, function() {                                                                                                  // 31
        return [ "\n\t\t\t\t\t", HTML.BUTTON({                                                                         // 32
          class: "button start-video-call primary",                                                                    // 33
          "aria-label": function() {                                                                                   // 34
            return Spacebars.mustache(view.lookup("_"), "Start_video_call");                                           // 35
          }                                                                                                            // 36
        }, HTML.I({                                                                                                    // 37
          class: "icon-videocam"                                                                                       // 38
        })), "\n\t\t\t\t\t", HTML.BUTTON({                                                                             // 39
          class: "button start-audio-call secondary",                                                                  // 40
          "aria-label": function() {                                                                                   // 41
            return Spacebars.mustache(view.lookup("_"), "Start_audio_call");                                           // 42
          }                                                                                                            // 43
        }, HTML.I({                                                                                                    // 44
          class: "icon-phone"                                                                                          // 45
        })), "\n\t\t\t\t" ];                                                                                           // 46
      }), "\n\t\t\t" ];                                                                                                // 47
    }), "\n\t\t" ];                                                                                                    // 48
  }), "\n\t");                                                                                                         // 49
}));                                                                                                                   // 50
                                                                                                                       // 51
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.videoCall.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/app/videoCall/template.videoCall.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("videoCall");                                                                                     // 2
Template["videoCall"] = new Template("Template.videoCall", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("videoAvaliable"));                                                              // 6
  }, function() {                                                                                                      // 7
    return [ "\n\t\t", Blaze.If(function() {                                                                           // 8
      return Spacebars.call(view.lookup("videoActive"));                                                               // 9
    }, function() {                                                                                                    // 10
      return [ "\n\t\t\t", HTML.DIV({                                                                                  // 11
        class: function() {                                                                                            // 12
          return [ "webrtc-video ", Blaze.If(function() {                                                              // 13
            return Spacebars.call(view.lookup("overlay"));                                                             // 14
          }, function() {                                                                                              // 15
            return "webrtc-video-overlay background-transparent-darker";                                               // 16
          }) ];                                                                                                        // 17
        }                                                                                                              // 18
      }, "\n\t\t\t\t", HTML.DIV({                                                                                      // 19
        class: "main-video background-transparent-darker"                                                              // 20
      }, "\n\t\t\t\t\t", HTML.VIDEO({                                                                                  // 21
        src: function() {                                                                                              // 22
          return Spacebars.mustache(view.lookup("mainVideoUrl"));                                                      // 23
        },                                                                                                             // 24
        autoplay: "",                                                                                                  // 25
        muted: "true",                                                                                                 // 26
        class: function() {                                                                                            // 27
          return [ "webrtc-video-element ", Blaze.If(function() {                                                      // 28
            return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("mainVideoUrl"), view.lookup("selfVideoUrl"));
          }, function() {                                                                                              // 30
            return Blaze.Unless(function() {                                                                           // 31
              return Spacebars.call(view.lookup("screenShareEnabled"));                                                // 32
            }, function() {                                                                                            // 33
              return "video-flip";                                                                                     // 34
            });                                                                                                        // 35
          }) ];                                                                                                        // 36
        }                                                                                                              // 37
      }), "\n\t\t\t\t\t", HTML.DIV({                                                                                   // 38
        class: "background-transparent-darker"                                                                         // 39
      }, Blaze.View("lookup:mainVideoUsername", function() {                                                           // 40
        return Spacebars.mustache(view.lookup("mainVideoUsername"));                                                   // 41
      })), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                                     // 42
        class: "videos"                                                                                                // 43
      }, "\n\t\t\t\t\t", Blaze.If(function() {                                                                         // 44
        return Spacebars.call(view.lookup("selfVideoUrl"));                                                            // 45
      }, function() {                                                                                                  // 46
        return [ "\n\t\t\t\t\t\t", HTML.DIV({                                                                          // 47
          class: "video-item background-transparent-darker",                                                           // 48
          "data-username": "$self"                                                                                     // 49
        }, "\n\t\t\t\t\t\t\t", HTML.VIDEO({                                                                            // 50
          src: function() {                                                                                            // 51
            return Spacebars.mustache(view.lookup("selfVideoUrl"));                                                    // 52
          },                                                                                                           // 53
          autoplay: "",                                                                                                // 54
          muted: "true",                                                                                               // 55
          class: function() {                                                                                          // 56
            return [ "webrtc-video-element ", Blaze.Unless(function() {                                                // 57
              return Spacebars.call(view.lookup("screenShareEnabled"));                                                // 58
            }, function() {                                                                                            // 59
              return "video-flip";                                                                                     // 60
            }) ];                                                                                                      // 61
          }                                                                                                            // 62
        }), "\n\t\t\t\t\t\t\t", Blaze.Unless(function() {                                                              // 63
          return Spacebars.call(view.lookup("audioAndVideoEnabled"));                                                  // 64
        }, function() {                                                                                                // 65
          return [ "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 66
            class: "video-muted-overlay background-transparent-darker"                                                 // 67
          }, "\n\t\t\t\t\t\t\t\t\t", Blaze.Unless(function() {                                                         // 68
            return Spacebars.call(view.lookup("audioEnabled"));                                                        // 69
          }, function() {                                                                                              // 70
            return [ "\n\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON(HTML.I({                                                    // 71
              class: "icon-mute"                                                                                       // 72
            })), "\n\t\t\t\t\t\t\t\t\t" ];                                                                             // 73
          }), "\n\t\t\t\t\t\t\t\t\t", Blaze.Unless(function() {                                                        // 74
            return Spacebars.call(view.lookup("videoEnabled"));                                                        // 75
          }, function() {                                                                                              // 76
            return [ "\n\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON(HTML.I({                                                    // 77
              class: "icon-eye-off"                                                                                    // 78
            })), "\n\t\t\t\t\t\t\t\t\t" ];                                                                             // 79
          }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];                                                             // 80
        }), "\n\t\t\t\t\t\t\t", HTML.DIV({                                                                             // 81
          class: "background-transparent-darker"                                                                       // 82
        }, Blaze.View("lookup:_", function() {                                                                         // 83
          return Spacebars.mustache(view.lookup("_"), "you");                                                          // 84
        })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                                                                      // 85
      }), "\n\t\t\t\t\t", Blaze.Each(function() {                                                                      // 86
        return Spacebars.call(view.lookup("remoteVideoItems"));                                                        // 87
      }, function() {                                                                                                  // 88
        return [ "\n\t\t\t\t\t\t", HTML.DIV({                                                                          // 89
          class: function() {                                                                                          // 90
            return [ "video-item background-transparent-darker ", Blaze.Unless(function() {                            // 91
              return Spacebars.call(view.lookup("connected"));                                                         // 92
            }, function() {                                                                                            // 93
              return "state-overlay background-transparent-darker-before";                                             // 94
            }) ];                                                                                                      // 95
          },                                                                                                           // 96
          "data-state-text": function() {                                                                              // 97
            return Spacebars.mustache(view.lookup("stateText"));                                                       // 98
          },                                                                                                           // 99
          "data-username": function() {                                                                                // 100
            return Spacebars.mustache(view.lookup("id"));                                                              // 101
          }                                                                                                            // 102
        }, "\n\t\t\t\t\t\t\t", HTML.VIDEO({                                                                            // 103
          src: function() {                                                                                            // 104
            return Spacebars.mustache(view.lookup("url"));                                                             // 105
          },                                                                                                           // 106
          autoplay: "",                                                                                                // 107
          class: "webrtc-video-element"                                                                                // 108
        }), "\n\t\t\t\t\t\t\t", HTML.DIV({                                                                             // 109
          class: "background-transparent-darker"                                                                       // 110
        }, Blaze.View("lookup:usernameByUserId", function() {                                                          // 111
          return Spacebars.mustache(view.lookup("usernameByUserId"), view.lookup("id"));                               // 112
        })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                                                                      // 113
      }), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                                      // 114
        class: "buttons-group"                                                                                         // 115
      }, "\n\t\t\t\t\t", Blaze.If(function() {                                                                         // 116
        return Spacebars.call(view.lookup("videoActive"));                                                             // 117
      }, function() {                                                                                                  // 118
        return [ "\n\t\t\t\t\t\t", HTML.BUTTON({                                                                       // 119
          class: "button stop-call"                                                                                    // 120
        }, HTML.I({                                                                                                    // 121
          class: "icon-stop"                                                                                           // 122
        }), Blaze.View("lookup:_", function() {                                                                        // 123
          return Spacebars.mustache(view.lookup("_"), "Stop");                                                         // 124
        })), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                   // 125
          return Spacebars.call(view.lookup("audioEnabled"));                                                          // 126
        }, function() {                                                                                                // 127
          return [ "\n\t\t\t\t\t\t\t", HTML.BUTTON({                                                                   // 128
            class: "button disable-audio",                                                                             // 129
            title: function() {                                                                                        // 130
              return Spacebars.mustache(view.lookup("_"), "Mute");                                                     // 131
            },                                                                                                         // 132
            "aria-label": function() {                                                                                 // 133
              return Spacebars.mustache(view.lookup("_"), "Mute");                                                     // 134
            }                                                                                                          // 135
          }, HTML.I({                                                                                                  // 136
            class: "icon-mute"                                                                                         // 137
          })), "\n\t\t\t\t\t\t" ];                                                                                     // 138
        }, function() {                                                                                                // 139
          return [ "\n\t\t\t\t\t\t\t", HTML.BUTTON({                                                                   // 140
            class: "button enable-audio",                                                                              // 141
            title: function() {                                                                                        // 142
              return Spacebars.mustache(view.lookup("_"), "Unmute");                                                   // 143
            },                                                                                                         // 144
            "aria-label": function() {                                                                                 // 145
              return Spacebars.mustache(view.lookup("_"), "Unmute");                                                   // 146
            }                                                                                                          // 147
          }, HTML.I({                                                                                                  // 148
            class: "icon-mic"                                                                                          // 149
          })), "\n\t\t\t\t\t\t" ];                                                                                     // 150
        }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                    // 151
          return Spacebars.call(view.lookup("videoEnabled"));                                                          // 152
        }, function() {                                                                                                // 153
          return [ "\n\t\t\t\t\t\t\t", HTML.BUTTON({                                                                   // 154
            class: "button disable-video"                                                                              // 155
          }, HTML.I({                                                                                                  // 156
            class: "icon-eye-off"                                                                                      // 157
          })), "\n\t\t\t\t\t\t" ];                                                                                     // 158
        }, function() {                                                                                                // 159
          return [ "\n\t\t\t\t\t\t\t", HTML.BUTTON({                                                                   // 160
            class: "button enable-video"                                                                               // 161
          }, HTML.I({                                                                                                  // 162
            class: "icon-eye"                                                                                          // 163
          })), "\n\t\t\t\t\t\t" ];                                                                                     // 164
        }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                    // 165
          return Spacebars.call(view.lookup("screenShareAvailable"));                                                  // 166
        }, function() {                                                                                                // 167
          return [ "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                           // 168
            return Spacebars.call(view.lookup("screenShareEnabled"));                                                  // 169
          }, function() {                                                                                              // 170
            return [ "\n\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                               // 171
              class: "button disable-screen-share"                                                                     // 172
            }, HTML.I({                                                                                                // 173
              class: "icon-desktop"                                                                                    // 174
            })), "\n\t\t\t\t\t\t\t" ];                                                                                 // 175
          }, function() {                                                                                              // 176
            return [ "\n\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                               // 177
              class: "button enable-screen-share"                                                                      // 178
            }, HTML.I({                                                                                                // 179
              class: "icon-desktop"                                                                                    // 180
            })), "\n\t\t\t\t\t\t\t" ];                                                                                 // 181
          }), "\n\t\t\t\t\t\t" ];                                                                                      // 182
        }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                    // 183
          return Spacebars.call(view.lookup("overlayEnabled"));                                                        // 184
        }, function() {                                                                                                // 185
          return [ "\n\t\t\t\t\t\t\t", HTML.BUTTON({                                                                   // 186
            class: "button disable-overlay"                                                                            // 187
          }, HTML.I({                                                                                                  // 188
            class: "icon-resize-small"                                                                                 // 189
          })), "\n\t\t\t\t\t\t" ];                                                                                     // 190
        }, function() {                                                                                                // 191
          return [ "\n\t\t\t\t\t\t\t", HTML.BUTTON({                                                                   // 192
            class: "button enable-overlay"                                                                             // 193
          }, HTML.I({                                                                                                  // 194
            class: "icon-resize-full-alt"                                                                              // 195
          })), "\n\t\t\t\t\t\t" ];                                                                                     // 196
        }), "\n\t\t\t\t\t" ];                                                                                          // 197
      }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t" ];                                                                      // 198
    }), "\n\t" ];                                                                                                      // 199
  });                                                                                                                  // 200
}));                                                                                                                   // 201
                                                                                                                       // 202
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"videoButtons.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/app/videoCall/videoButtons.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals WebRTC */Template.videoButtons.helpers({                                                                    // 1
	videoAvaliable: function () {                                                                                         // 3
		return WebRTC.getInstanceByRoomId(Session.get('openedRoom')) != null;                                                // 4
	},                                                                                                                    // 5
	videoActive: function () {                                                                                            // 6
		var _WebRTC$getInstanceBy = WebRTC.getInstanceByRoomId(Session.get('openedRoom')),                                   // 6
		    localUrl = _WebRTC$getInstanceBy.localUrl,                                                                       // 6
		    remoteItems = _WebRTC$getInstanceBy.remoteItems;                                                                 // 6
                                                                                                                       //
		var r = remoteItems.get() || [];                                                                                     // 8
		return localUrl.get() != null || r.length > 0;                                                                       // 9
	},                                                                                                                    // 10
	callInProgress: function () {                                                                                         // 11
		return WebRTC.getInstanceByRoomId(Session.get('openedRoom')).callInProgress.get();                                   // 12
	}                                                                                                                     // 13
});                                                                                                                    // 2
Template.videoButtons.events({                                                                                         // 16
	'click .start-video-call': function () {                                                                              // 17
		return WebRTC.getInstanceByRoomId(Session.get('openedRoom')).startCall({                                             // 18
			audio: true,                                                                                                        // 19
			video: true                                                                                                         // 20
		});                                                                                                                  // 18
	},                                                                                                                    // 22
	'click .start-audio-call': function () {                                                                              // 23
		return WebRTC.getInstanceByRoomId(Session.get('openedRoom')).startCall({                                             // 24
			audio: true                                                                                                         // 25
		});                                                                                                                  // 24
	},                                                                                                                    // 27
	'click .join-video-call': function () {                                                                               // 28
		return WebRTC.getInstanceByRoomId(Session.get('openedRoom')).joinCall({                                              // 29
			audio: true,                                                                                                        // 30
			video: true                                                                                                         // 31
		});                                                                                                                  // 29
	},                                                                                                                    // 33
	'click .join-audio-call': function () {                                                                               // 34
		return WebRTC.getInstanceByRoomId(Session.get('openedRoom')).joinCall({                                              // 35
			audio: true                                                                                                         // 36
		});                                                                                                                  // 35
	}                                                                                                                     // 38
});                                                                                                                    // 16
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"videoCall.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/app/videoCall/videoCall.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals WebRTC */Template.videoCall.onCreated(function () {                                                         // 1
	return this.mainVideo = new ReactiveVar('$auto');                                                                     // 3
});                                                                                                                    // 4
Template.videoCall.helpers({                                                                                           // 6
	videoAvaliable: function () {                                                                                         // 7
		return WebRTC.getInstanceByRoomId(Session.get('openedRoom')) != null;                                                // 8
	},                                                                                                                    // 9
	videoActive: function () {                                                                                            // 10
		var webrtc = WebRTC.getInstanceByRoomId(Session.get('openedRoom'));                                                  // 11
		var overlay = this.overlay != null;                                                                                  // 12
                                                                                                                       //
		if (overlay !== (webrtc != null ? webrtc.overlayEnabled.get() : null)) {                                             // 13
			return false;                                                                                                       // 14
		}                                                                                                                    // 15
                                                                                                                       //
		var remoteItems = webrtc.remoteItems;                                                                                // 10
		var localUrl = webrtc.localUrl;                                                                                      // 10
		remoteItems = remoteItems.get() || [];                                                                               // 18
		return localUrl.get() != null || remoteItems.length > 0;                                                             // 19
	},                                                                                                                    // 20
	callInProgress: function () {                                                                                         // 21
		return WebRTC.getInstanceByRoomId(Session.get('openedRoom')).callInProgress.get();                                   // 22
	},                                                                                                                    // 23
	overlayEnabled: function () {                                                                                         // 24
		return WebRTC.getInstanceByRoomId(Session.get('openedRoom')).overlayEnabled.get();                                   // 25
	},                                                                                                                    // 26
	audioEnabled: function () {                                                                                           // 27
		return WebRTC.getInstanceByRoomId(Session.get('openedRoom')).audioEnabled.get();                                     // 28
	},                                                                                                                    // 29
	videoEnabled: function () {                                                                                           // 30
		return WebRTC.getInstanceByRoomId(Session.get('openedRoom')).videoEnabled.get();                                     // 31
	},                                                                                                                    // 32
	audioAndVideoEnabled: function () {                                                                                   // 33
		return WebRTC.getInstanceByRoomId(Session.get('openedRoom')).audioEnabled.get() && WebRTC.getInstanceByRoomId(Session.get('openedRoom')).videoEnabled.get();
	},                                                                                                                    // 35
	screenShareAvailable: function () {                                                                                   // 36
		return WebRTC.getInstanceByRoomId(Session.get('openedRoom')).screenShareAvailable;                                   // 37
	},                                                                                                                    // 38
	screenShareEnabled: function () {                                                                                     // 39
		return WebRTC.getInstanceByRoomId(Session.get('openedRoom')).screenShareEnabled.get();                               // 40
	},                                                                                                                    // 41
	remoteVideoItems: function () {                                                                                       // 42
		return WebRTC.getInstanceByRoomId(Session.get('openedRoom')).remoteItems.get();                                      // 43
	},                                                                                                                    // 44
	selfVideoUrl: function () {                                                                                           // 45
		return WebRTC.getInstanceByRoomId(Session.get('openedRoom')).localUrl.get();                                         // 46
	},                                                                                                                    // 47
	mainVideoUrl: function () {                                                                                           // 48
		var template = Template.instance();                                                                                  // 49
		var webrtc = WebRTC.getInstanceByRoomId(Session.get('openedRoom'));                                                  // 50
                                                                                                                       //
		if (template.mainVideo.get() === '$self') {                                                                          // 51
			return webrtc.localUrl.get();                                                                                       // 52
		}                                                                                                                    // 53
                                                                                                                       //
		if (template.mainVideo.get() === '$auto') {                                                                          // 54
			var remoteItems = webrtc.remoteItems.get() | [];                                                                    // 55
                                                                                                                       //
			if (remoteItems.length > 0) {                                                                                       // 56
				return remoteItems[0].url;                                                                                         // 57
			}                                                                                                                   // 58
                                                                                                                       //
			return webrtc.localUrl.get();                                                                                       // 59
		}                                                                                                                    // 60
                                                                                                                       //
		if (webrtc.remoteItemsById.get()[template.mainVideo.get()] != null) {                                                // 61
			return webrtc.remoteItemsById.get()[template.mainVideo.get()].url;                                                  // 62
		} else {                                                                                                             // 63
			template.mainVideo.set('$auto');                                                                                    // 64
		}                                                                                                                    // 65
	},                                                                                                                    // 66
	mainVideoUsername: function () {                                                                                      // 67
		var template = Template.instance();                                                                                  // 68
		var webrtc = WebRTC.getInstanceByRoomId(Session.get('openedRoom'));                                                  // 69
                                                                                                                       //
		if (template.mainVideo.get() === '$self') {                                                                          // 70
			return t('you');                                                                                                    // 71
		}                                                                                                                    // 72
                                                                                                                       //
		if (template.mainVideo.get() === '$auto') {                                                                          // 73
			var remoteItems = webrtc.remoteItems.get() || [];                                                                   // 74
                                                                                                                       //
			if (remoteItems.length > 0) {                                                                                       // 75
				var user = Meteor.users.findOne(remoteItems[0].id);                                                                // 76
				return user != null ? user.username : undefined;                                                                   // 77
			}                                                                                                                   // 78
                                                                                                                       //
			return t('you');                                                                                                    // 79
		}                                                                                                                    // 80
                                                                                                                       //
		if (webrtc.remoteItemsById.get()[template.mainVideo.get()] != null) {                                                // 81
			var _user = Meteor.users.findOne(webrtc.remoteItemsById.get()[template.mainVideo.get()].id);                        // 82
                                                                                                                       //
			return _user != null ? _user.username : undefined;                                                                  // 83
		} else {                                                                                                             // 84
			template.mainVideo.set('$auto');                                                                                    // 85
		}                                                                                                                    // 86
	},                                                                                                                    // 87
	usernameByUserId: function (userId) {                                                                                 // 88
		var user = Meteor.users.findOne(userId);                                                                             // 89
		return user != null ? user.username : undefined;                                                                     // 90
	}                                                                                                                     // 91
});                                                                                                                    // 6
Template.videoCall.events({                                                                                            // 94
	'click .stop-call': function () {                                                                                     // 95
		return WebRTC.getInstanceByRoomId(Session.get('openedRoom')).stop();                                                 // 96
	},                                                                                                                    // 97
	'click .video-item': function (e, t) {                                                                                // 98
		return t.mainVideo.set($(e.currentTarget).data('username'));                                                         // 99
	},                                                                                                                    // 100
	'click .disable-audio': function () {                                                                                 // 101
		return WebRTC.getInstanceByRoomId(Session.get('openedRoom')).disableAudio();                                         // 102
	},                                                                                                                    // 103
	'click .enable-audio': function () {                                                                                  // 104
		return WebRTC.getInstanceByRoomId(Session.get('openedRoom')).enableAudio();                                          // 105
	},                                                                                                                    // 106
	'click .disable-video': function () {                                                                                 // 107
		return WebRTC.getInstanceByRoomId(Session.get('openedRoom')).disableVideo();                                         // 108
	},                                                                                                                    // 109
	'click .enable-video': function () {                                                                                  // 110
		return WebRTC.getInstanceByRoomId(Session.get('openedRoom')).enableVideo();                                          // 111
	},                                                                                                                    // 112
	'click .disable-screen-share': function () {                                                                          // 113
		return WebRTC.getInstanceByRoomId(Session.get('openedRoom')).disableScreenShare();                                   // 114
	},                                                                                                                    // 115
	'click .enable-screen-share': function () {                                                                           // 116
		return WebRTC.getInstanceByRoomId(Session.get('openedRoom')).enableScreenShare();                                    // 117
	},                                                                                                                    // 118
	'click .disable-overlay': function () {                                                                               // 119
		return WebRTC.getInstanceByRoomId(Session.get('openedRoom')).overlayEnabled.set(false);                              // 120
	},                                                                                                                    // 121
	'click .enable-overlay': function () {                                                                                // 122
		return WebRTC.getInstanceByRoomId(Session.get('openedRoom')).overlayEnabled.set(true);                               // 123
	},                                                                                                                    // 124
	'loadstart video[muted]': function (e) {                                                                              // 125
		e.currentTarget.muted = true;                                                                                        // 126
		return e.currentTarget.volume = 0;                                                                                   // 127
	}                                                                                                                     // 128
});                                                                                                                    // 94
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"template.photoswipe.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/app/template.photoswipe.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("photoswipe");                                                                                    // 2
Template["photoswipe"] = new Template("Template.photoswipe", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return HTML.Raw('<div class="pswp" id="pswp" tabindex="-1" role="dialog" aria-hidden="true">\n\t\t<div class="pswp__bg"></div>\n\t\t<div class="pswp__scroll-wrap">\n\t\t\t<div class="pswp__container">\n\t\t\t\t<div class="pswp__item"></div>\n\t\t\t\t<div class="pswp__item"></div>\n\t\t\t\t<div class="pswp__item"></div>\n\t\t\t</div>\n\n\t\t\t<div class="pswp__ui pswp__ui--hidden">\n\t\t\t\t<div class="pswp__top-bar">\n\n\t\t\t\t\t<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>\n\t\t\t\t\t<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>\n\t\t\t\t\t<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>\n\n\t\t\t\t\t<div class="pswp__preloader">\n\t\t\t\t\t\t<div class="pswp__preloader__icn">\n\t\t\t\t\t\t<div class="pswp__preloader__cut">\n\t\t\t\t\t\t\t<div class="pswp__preloader__donut"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>\n\n\t\t\t\t<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>\n\n\t\t\t\t<div class="pswp__caption">\n\t\t\t\t\t<div class="pswp__caption__center"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>');
}));                                                                                                                   // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"burger.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/app/burger.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.burger.helpers({                                                                                              // 1
	unread: function () {                                                                                                 // 2
		return Session.get('unread');                                                                                        // 3
	},                                                                                                                    // 4
	isMenuOpen: function () {                                                                                             // 5
		if (Session.equals('isMenuOpen', true)) {                                                                            // 6
			return 'menu-opened';                                                                                               // 7
		}                                                                                                                    // 8
	}                                                                                                                     // 9
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"home.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/app/home.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.home.helpers({                                                                                                // 1
	title: function () {                                                                                                  // 2
		return RocketChat.settings.get('Layout_Home_Title');                                                                 // 3
	},                                                                                                                    // 4
	body: function () {                                                                                                   // 5
		return RocketChat.settings.get('Layout_Home_Body');                                                                  // 6
	}                                                                                                                     // 7
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"mobileMessageMenu.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/app/mobileMessageMenu.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var mobileMessageMenu = {                                                                                              // 1
	show: function (message, template, e, scope) {                                                                        // 2
		if (!window.plugins.actionsheet) {                                                                                   // 3
			return false;                                                                                                       // 4
		}                                                                                                                    // 5
                                                                                                                       //
		var options = {                                                                                                      // 7
			'androidTheme': window.plugins.actionsheet.ANDROID_THEMES.THEME_HOLO_LIGHT,                                         // 8
			'buttonLabels': [TAPi18n.__('Report Abuse')],                                                                       // 9
			androidEnableCancelButton: true,                                                                                    // 12
			addCancelButtonWithLabel: TAPi18n.__('Cancel')                                                                      // 13
		};                                                                                                                   // 7
		var buttonActions = [mobileMessageMenu.reportAbuse];                                                                 // 16
		var buttons = RocketChat.MessageAction.getButtons(message, message.customClass || 'message-mobile');                 // 20
                                                                                                                       //
		for (var i = 0, len = buttons.length; i < len; i++) {                                                                // 22
			if (buttons[i].id === 'delete-message') {                                                                           // 23
				options.addDestructiveButtonWithLabel = TAPi18n.__(buttons[i].i18nLabel);                                          // 24
				buttonActions.unshift(buttons[i].action);                                                                          // 25
			} else {                                                                                                            // 26
				buttonActions.push(buttons[i].action);                                                                             // 27
				options.buttonLabels.push(TAPi18n.__(buttons[i].i18nLabel));                                                       // 28
			}                                                                                                                   // 29
		}                                                                                                                    // 30
                                                                                                                       //
		window.plugins.actionsheet.show(options, function (buttonIndex) {                                                    // 32
			if (buttonActions[buttonIndex - 1] != null) {                                                                       // 33
				return buttonActions[buttonIndex - 1].call(scope, e, template, message);                                           // 34
			}                                                                                                                   // 35
		});                                                                                                                  // 36
	},                                                                                                                    // 38
	reportAbuse: function (e, t, message) {                                                                               // 39
		swal({                                                                                                               // 40
			title: TAPi18n.__('Report_this_message_question_mark'),                                                             // 41
			text: message.msg,                                                                                                  // 42
			inputPlaceholder: TAPi18n.__('Why_do_you_want_to_report_question_mark'),                                            // 43
			type: 'input',                                                                                                      // 44
			showCancelButton: true,                                                                                             // 45
			confirmButtonColor: '#DD6B55',                                                                                      // 46
			confirmButtonText: TAPi18n.__('Report_exclamation_mark'),                                                           // 47
			cancelButtonText: TAPi18n.__('Cancel'),                                                                             // 48
			closeOnConfirm: false,                                                                                              // 49
			html: false                                                                                                         // 50
		}, function (inputValue) {                                                                                           // 40
			if (inputValue === false) {                                                                                         // 52
				return false;                                                                                                      // 53
			}                                                                                                                   // 54
                                                                                                                       //
			if (inputValue === '') {                                                                                            // 56
				swal.showInputError(TAPi18n.__('You_need_to_write_something'));                                                    // 57
				return false;                                                                                                      // 58
			}                                                                                                                   // 59
                                                                                                                       //
			Meteor.call('reportMessage', message._id, inputValue);                                                              // 61
			swal({                                                                                                              // 63
				title: TAPi18n.__('Report_sent'),                                                                                  // 64
				text: TAPi18n.__('Thank_you_exclamation_mark '),                                                                   // 65
				type: 'success',                                                                                                   // 66
				timer: 1000,                                                                                                       // 67
				showConfirmButton: false                                                                                           // 68
			});                                                                                                                 // 63
		});                                                                                                                  // 70
	}                                                                                                                     // 71
};                                                                                                                     // 1
this.mobileMessageMenu = mobileMessageMenu;                                                                            // 74
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"privateHistory.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/app/privateHistory.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var moment = void 0;                                                                                                   // 1
module.watch(require("moment"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		moment = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
Template.privateHistory.helpers({                                                                                      // 3
	history: function () {                                                                                                // 4
		var items = ChatSubscription.find({                                                                                  // 5
			name: {                                                                                                             // 6
				$regex: Session.get('historyFilter'),                                                                              // 7
				$options: 'i'                                                                                                      // 8
			},                                                                                                                  // 6
			t: {                                                                                                                // 10
				$in: ['d', 'c', 'p']                                                                                               // 11
			},                                                                                                                  // 10
			archived: {                                                                                                         // 13
				$ne: true                                                                                                          // 14
			}                                                                                                                   // 13
		}, {                                                                                                                 // 5
			'sort': {                                                                                                           // 17
				'ts': -1                                                                                                           // 18
			}                                                                                                                   // 17
		});                                                                                                                  // 16
		return {                                                                                                             // 21
			items: items,                                                                                                       // 22
			length: items.count()                                                                                               // 23
		};                                                                                                                   // 21
	},                                                                                                                    // 25
	archivedHistory: function () {                                                                                        // 26
		var items = ChatSubscription.find({                                                                                  // 27
			name: {                                                                                                             // 28
				$regex: Session.get('historyFilter'),                                                                              // 29
				$options: 'i'                                                                                                      // 30
			},                                                                                                                  // 28
			t: {                                                                                                                // 32
				$in: ['d', 'c', 'p']                                                                                               // 33
			},                                                                                                                  // 32
			archived: true                                                                                                      // 35
		}, {                                                                                                                 // 27
			'sort': {                                                                                                           // 37
				'ts': -1                                                                                                           // 38
			}                                                                                                                   // 37
		});                                                                                                                  // 36
		return {                                                                                                             // 41
			items: items,                                                                                                       // 42
			length: items.count()                                                                                               // 43
		};                                                                                                                   // 41
	},                                                                                                                    // 45
	roomOf: function (rid) {                                                                                              // 46
		return ChatRoom.findOne(rid);                                                                                        // 47
	},                                                                                                                    // 48
	type: function () {                                                                                                   // 49
		switch (this.t) {                                                                                                    // 50
			case 'd':                                                                                                           // 51
				return 'icon-at';                                                                                                  // 52
                                                                                                                       //
			case 'c':                                                                                                           // 53
				return 'icon-hash';                                                                                                // 54
                                                                                                                       //
			case 'p':                                                                                                           // 55
				return 'icon-lock';                                                                                                // 56
		}                                                                                                                    // 50
	},                                                                                                                    // 58
	creation: function () {                                                                                               // 59
		return moment(this.ts).format('LLL');                                                                                // 60
	},                                                                                                                    // 61
	lastMessage: function () {                                                                                            // 62
		if (this.lm) {                                                                                                       // 63
			return moment(this.lm).format('LLL');                                                                               // 64
		}                                                                                                                    // 65
	},                                                                                                                    // 66
	path: function () {                                                                                                   // 67
		switch (this.t) {                                                                                                    // 68
			case 'c':                                                                                                           // 69
				return FlowRouter.path('channel', {                                                                                // 70
					name: this.name                                                                                                   // 71
				});                                                                                                                // 70
                                                                                                                       //
			case 'p':                                                                                                           // 73
				return FlowRouter.path('group', {                                                                                  // 74
					name: this.name                                                                                                   // 75
				});                                                                                                                // 74
                                                                                                                       //
			case 'd':                                                                                                           // 77
				return FlowRouter.path('direct', {                                                                                 // 78
					username: this.name                                                                                               // 79
				});                                                                                                                // 78
		}                                                                                                                    // 68
	}                                                                                                                     // 82
});                                                                                                                    // 3
Template.privateHistory.events({                                                                                       // 85
	'keydown #history-filter': function (event) {                                                                         // 86
		if (event.which === 13) {                                                                                            // 87
			event.stopPropagation();                                                                                            // 88
			return event.preventDefault();                                                                                      // 89
		}                                                                                                                    // 90
	},                                                                                                                    // 91
	'keyup #history-filter': function (event) {                                                                           // 92
		event.stopPropagation();                                                                                             // 93
		event.preventDefault();                                                                                              // 94
		return Session.set('historyFilter', event.currentTarget.value);                                                      // 95
	}                                                                                                                     // 96
});                                                                                                                    // 85
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"room.coffee.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/app/room.coffee.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var moment = void 0;                                                                                                   // 1
module.import('moment', {                                                                                              // 1
  "default": function (v) {                                                                                            // 1
    moment = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var mime = void 0;                                                                                                     // 1
module.import('mime-type/with-db', {                                                                                   // 1
  "default": function (v) {                                                                                            // 1
    mime = v;                                                                                                          // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var ChartDialog = void 0;                                                                                              // 1
module.import('meteor/lily:ui-chart', {                                                                                // 1
  "ChartDialog": function (v) {                                                                                        // 1
    ChartDialog = v;                                                                                                   // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var favoritesEnabled, isSocialSharingOpen, isSubscribed, socialSharing, touchMoved, userCanDrop;                       // 1
                                                                                                                       //
socialSharing = function (options) {                                                                                   // 5
  if (options == null) {                                                                                               // 12
    options = {};                                                                                                      // 5
  }                                                                                                                    // 14
                                                                                                                       //
  return window.plugins.socialsharing.share(options.message, options.subject, options.file, options.link);             // 15
};                                                                                                                     // 5
                                                                                                                       //
isSubscribed = function (_id) {                                                                                        // 8
  return ChatSubscription.find({                                                                                       // 9
    rid: _id                                                                                                           // 9
  }).count() > 0;                                                                                                      // 9
};                                                                                                                     // 8
                                                                                                                       //
favoritesEnabled = function () {                                                                                       // 11
  return RocketChat.settings.get('Favorite_Rooms');                                                                    // 12
};                                                                                                                     // 11
                                                                                                                       //
userCanDrop = function (_id) {                                                                                         // 14
  return !RocketChat.roomTypes.readOnly(_id, Meteor.user());                                                           // 15
};                                                                                                                     // 14
                                                                                                                       //
Template.room.helpers({                                                                                                // 17
  isTranslated: function () {                                                                                          // 18
    var sub;                                                                                                           // 19
    sub = ChatSubscription.findOne({                                                                                   // 19
      rid: this._id                                                                                                    // 19
    }, {                                                                                                               // 19
      fields: {                                                                                                        // 19
        autoTranslate: 1,                                                                                              // 19
        autoTranslateLanguage: 1                                                                                       // 19
      }                                                                                                                // 19
    });                                                                                                                // 19
    return RocketChat.settings.get('AutoTranslate_Enabled') && (sub != null ? sub.autoTranslate : void 0) === true && sub.autoTranslateLanguage != null;
  },                                                                                                                   // 18
  embeddedVersion: function () {                                                                                       // 22
    return RocketChat.Layout.isEmbedded();                                                                             // 23
  },                                                                                                                   // 18
  favorite: function () {                                                                                              // 25
    var sub;                                                                                                           // 26
    sub = ChatSubscription.findOne({                                                                                   // 26
      rid: this._id                                                                                                    // 26
    }, {                                                                                                               // 26
      fields: {                                                                                                        // 26
        f: 1                                                                                                           // 26
      }                                                                                                                // 26
    });                                                                                                                // 26
                                                                                                                       //
    if ((sub != null ? sub.f : void 0) != null && sub.f && favoritesEnabled()) {                                       // 27
      return 'icon-star favorite-room pending-color';                                                                  // 27
    }                                                                                                                  // 59
                                                                                                                       //
    return 'icon-star-empty';                                                                                          // 28
  },                                                                                                                   // 18
  favoriteLabel: function () {                                                                                         // 30
    var sub;                                                                                                           // 31
    sub = ChatSubscription.findOne({                                                                                   // 31
      rid: this._id                                                                                                    // 31
    }, {                                                                                                               // 31
      fields: {                                                                                                        // 31
        f: 1                                                                                                           // 31
      }                                                                                                                // 31
    });                                                                                                                // 31
                                                                                                                       //
    if ((sub != null ? sub.f : void 0) != null && sub.f && favoritesEnabled()) {                                       // 32
      return "Unfavorite";                                                                                             // 32
    }                                                                                                                  // 73
                                                                                                                       //
    return "Favorite";                                                                                                 // 33
  },                                                                                                                   // 18
  subscribed: function () {                                                                                            // 35
    return isSubscribed(this._id);                                                                                     // 36
  },                                                                                                                   // 18
  messagesHistory: function () {                                                                                       // 38
    var console, hideMessagesOfType, options, query;                                                                   // 39
    console = {                                                                                                        // 39
      log: function () {                                                                                               // 39
        return '### messagesHistory';                                                                                  // 83
      }                                                                                                                // 39
    };                                                                                                                 // 39
    hideMessagesOfType = [];                                                                                           // 40
    RocketChat.settings.collection.find({                                                                              // 41
      _id: /Message_HideType_.+/                                                                                       // 41
    }).forEach(function (record) {                                                                                     // 41
      var type, types;                                                                                                 // 42
      type = record._id.replace('Message_HideType_', '');                                                              // 42
                                                                                                                       //
      switch (type) {                                                                                                  // 43
        case 'mute_unmute':                                                                                            // 43
          console.log('##### mute_unmute');                                                                            // 45
          types = ['user-muted', 'user-unmuted'];                                                                      // 46
          break;                                                                                                       // 44
                                                                                                                       //
        default:                                                                                                       // 43
          console.log('##### NOT mute_unmute');                                                                        // 48
          types = [type];                                                                                              // 49
      }                                                                                                                // 43
                                                                                                                       //
      return types.forEach(function (type) {                                                                           // 101
        var index;                                                                                                     // 51
        index = hideMessagesOfType.indexOf(type);                                                                      // 51
                                                                                                                       //
        if (record.value === true && index === -1) {                                                                   // 53
          return hideMessagesOfType.push(type);                                                                        // 105
        } else if (index > -1) {                                                                                       // 53
          return hideMessagesOfType.splice(index, 1);                                                                  // 107
        }                                                                                                              // 108
      });                                                                                                              // 50
    });                                                                                                                // 41
    query = {                                                                                                          // 58
      rid: this._id                                                                                                    // 59
    };                                                                                                                 // 59
                                                                                                                       //
    if (hideMessagesOfType.length > 0) {                                                                               // 61
      query.t = {                                                                                                      // 62
        $nin: hideMessagesOfType                                                                                       // 63
      };                                                                                                               // 63
    }                                                                                                                  // 118
                                                                                                                       //
    options = {                                                                                                        // 65
      sort: {                                                                                                          // 66
        ts: 1                                                                                                          // 67
      }                                                                                                                // 67
    };                                                                                                                 // 66
    return ChatMessage.find(query, options);                                                                           // 69
  },                                                                                                                   // 18
  hasMore: function () {                                                                                               // 71
    return RoomHistoryManager.hasMore(this._id);                                                                       // 72
  },                                                                                                                   // 18
  hasMoreNext: function () {                                                                                           // 74
    return RoomHistoryManager.hasMoreNext(this._id);                                                                   // 75
  },                                                                                                                   // 18
  isLoading: function () {                                                                                             // 77
    return RoomHistoryManager.isLoading(this._id);                                                                     // 78
  },                                                                                                                   // 18
  windowId: function () {                                                                                              // 80
    return "chat-window-" + this._id;                                                                                  // 81
  },                                                                                                                   // 18
  uploading: function () {                                                                                             // 83
    return Session.get('uploading');                                                                                   // 84
  },                                                                                                                   // 18
  roomName: function () {                                                                                              // 86
    var roomData;                                                                                                      // 87
    roomData = Session.get('roomData' + this._id);                                                                     // 87
                                                                                                                       //
    if (!roomData) {                                                                                                   // 88
      return '';                                                                                                       // 88
    }                                                                                                                  // 146
                                                                                                                       //
    return RocketChat.roomTypes.getRoomName(roomData.t, roomData);                                                     // 90
  },                                                                                                                   // 18
  secondaryName: function () {                                                                                         // 92
    var roomData;                                                                                                      // 93
    roomData = Session.get('roomData' + this._id);                                                                     // 93
                                                                                                                       //
    if (!roomData) {                                                                                                   // 94
      return '';                                                                                                       // 94
    }                                                                                                                  // 154
                                                                                                                       //
    return RocketChat.roomTypes.getSecondaryRoomName(roomData.t, roomData);                                            // 96
  },                                                                                                                   // 18
  roomTopic: function () {                                                                                             // 98
    var roomData;                                                                                                      // 99
    roomData = Session.get('roomData' + this._id);                                                                     // 99
    console.log(roomData.topic);                                                                                       // 100
                                                                                                                       //
    if (!roomData) {                                                                                                   // 101
      return '';                                                                                                       // 101
    }                                                                                                                  // 163
                                                                                                                       //
    return roomData.topic;                                                                                             // 102
  },                                                                                                                   // 18
  showAnnouncement: function () {                                                                                      // 104
    var roomData;                                                                                                      // 105
    roomData = Session.get('roomData' + this._id);                                                                     // 105
                                                                                                                       //
    if (!roomData) {                                                                                                   // 106
      return false;                                                                                                    // 106
    }                                                                                                                  // 171
                                                                                                                       //
    Meteor.defer(function (_this) {                                                                                    // 107
      return function () {                                                                                             // 173
        if (window.chatMessages && window.chatMessages[roomData._id]) {                                                // 108
          return window.chatMessages[roomData._id].resize();                                                           // 175
        }                                                                                                              // 176
      };                                                                                                               // 107
    }(this));                                                                                                          // 107
    return roomData.announcement !== void 0 && roomData.announcement !== '';                                           // 110
  },                                                                                                                   // 18
  roomAnnouncement: function () {                                                                                      // 112
    var roomData;                                                                                                      // 113
    roomData = Session.get('roomData' + this._id);                                                                     // 113
                                                                                                                       //
    if (!roomData) {                                                                                                   // 114
      return '';                                                                                                       // 114
    }                                                                                                                  // 186
                                                                                                                       //
    return roomData.announcement;                                                                                      // 115
  },                                                                                                                   // 18
  roomIcon: function () {                                                                                              // 117
    var roomData;                                                                                                      // 118
    roomData = Session.get('roomData' + this._id);                                                                     // 118
                                                                                                                       //
    if (!(roomData != null ? roomData.t : void 0)) {                                                                   // 119
      return '';                                                                                                       // 119
    }                                                                                                                  // 194
                                                                                                                       //
    return RocketChat.roomTypes.getIcon(roomData != null ? roomData.t : void 0);                                       // 121
  },                                                                                                                   // 18
  userStatus: function () {                                                                                            // 123
    var roomData;                                                                                                      // 124
    roomData = Session.get('roomData' + this._id);                                                                     // 124
    return RocketChat.roomTypes.getUserStatus(roomData.t, this._id) || 'offline';                                      // 125
  },                                                                                                                   // 18
  maxMessageLength: function () {                                                                                      // 127
    return RocketChat.settings.get('Message_MaxAllowedSize');                                                          // 128
  },                                                                                                                   // 18
  unreadData: function () {                                                                                            // 130
    var data, ref, room;                                                                                               // 131
    data = {                                                                                                           // 131
      count: RoomHistoryManager.getRoom(this._id).unreadNotLoaded.get() + Template.instance().unreadCount.get()        // 132
    };                                                                                                                 // 132
    room = RoomManager.getOpenedRoomByRid(this._id);                                                                   // 134
                                                                                                                       //
    if (room != null) {                                                                                                // 135
      data.since = (ref = room.unreadSince) != null ? ref.get() : void 0;                                              // 136
    }                                                                                                                  // 213
                                                                                                                       //
    return data;                                                                                                       // 138
  },                                                                                                                   // 18
  containerBarsShow: function (unreadData, uploading) {                                                                // 140
    if ((unreadData != null ? unreadData.count : void 0) > 0 && unreadData.since != null || (uploading != null ? uploading.length : void 0) > 0) {
      return 'show';                                                                                                   // 141
    }                                                                                                                  // 219
  },                                                                                                                   // 18
  formatUnreadSince: function () {                                                                                     // 143
    if (this.since == null) {                                                                                          // 144
      return;                                                                                                          // 144
    }                                                                                                                  // 224
                                                                                                                       //
    return moment(this.since).calendar(null, {                                                                         // 146
      sameDay: 'LT'                                                                                                    // 146
    });                                                                                                                // 146
  },                                                                                                                   // 18
  flexData: function () {                                                                                              // 148
    var flexData;                                                                                                      // 149
    flexData = {                                                                                                       // 149
      tabBar: Template.instance().tabBar,                                                                              // 150
      data: {                                                                                                          // 151
        rid: this._id,                                                                                                 // 152
        userDetail: Template.instance().userDetail.get(),                                                              // 153
        clearUserDetail: Template.instance().clearUserDetail                                                           // 154
      }                                                                                                                // 152
    };                                                                                                                 // 150
    return flexData;                                                                                                   // 156
  },                                                                                                                   // 18
  adminClass: function () {                                                                                            // 158
    if (RocketChat.authz.hasRole(Meteor.userId(), 'admin')) {                                                          // 159
      return 'admin';                                                                                                  // 159
    }                                                                                                                  // 244
  },                                                                                                                   // 18
  showToggleFavorite: function () {                                                                                    // 161
    if (isSubscribed(this._id) && favoritesEnabled()) {                                                                // 162
      return true;                                                                                                     // 162
    }                                                                                                                  // 249
  },                                                                                                                   // 18
  viewMode: function () {                                                                                              // 164
    var cssClass, ref, ref1, ref2, viewMode;                                                                           // 165
    viewMode = (ref = Meteor.user()) != null ? (ref1 = ref.settings) != null ? (ref2 = ref1.preferences) != null ? ref2.viewMode : void 0 : void 0 : void 0;
                                                                                                                       //
    switch (viewMode) {                                                                                                // 166
      case 1:                                                                                                          // 166
        cssClass = 'cozy';                                                                                             // 167
        break;                                                                                                         // 167
                                                                                                                       //
      case 2:                                                                                                          // 166
        cssClass = 'compact';                                                                                          // 168
        break;                                                                                                         // 168
                                                                                                                       //
      default:                                                                                                         // 166
        cssClass = '';                                                                                                 // 169
    }                                                                                                                  // 166
                                                                                                                       //
    return cssClass;                                                                                                   // 170
  },                                                                                                                   // 18
  selectable: function () {                                                                                            // 172
    return Template.instance().selectable.get();                                                                       // 173
  },                                                                                                                   // 18
  hideUsername: function () {                                                                                          // 175
    var ref, ref1, ref2;                                                                                               // 176
                                                                                                                       //
    if ((ref = Meteor.user()) != null ? (ref1 = ref.settings) != null ? (ref2 = ref1.preferences) != null ? ref2.hideUsernames : void 0 : void 0 : void 0) {
      return 'hide-usernames';                                                                                         // 272
    }                                                                                                                  // 273
  },                                                                                                                   // 18
  hideAvatar: function () {                                                                                            // 178
    var ref, ref1, ref2;                                                                                               // 179
                                                                                                                       //
    if ((ref = Meteor.user()) != null ? (ref1 = ref.settings) != null ? (ref2 = ref1.preferences) != null ? ref2.hideAvatars : void 0 : void 0 : void 0) {
      return 'hide-avatars';                                                                                           // 278
    }                                                                                                                  // 279
  },                                                                                                                   // 18
  userCanDrop: function () {                                                                                           // 181
    return userCanDrop(this._id);                                                                                      // 182
  },                                                                                                                   // 18
  canPreview: function () {                                                                                            // 184
    var room;                                                                                                          // 185
    room = Session.get('roomData' + this._id);                                                                         // 185
                                                                                                                       //
    if (room.t !== 'c') {                                                                                              // 186
      return true;                                                                                                     // 187
    }                                                                                                                  // 289
                                                                                                                       //
    if (RocketChat.settings.get('Accounts_AllowAnonymousRead') === true) {                                             // 189
      return true;                                                                                                     // 190
    }                                                                                                                  // 292
                                                                                                                       //
    if (RocketChat.authz.hasAllPermission('preview-c-room')) {                                                         // 192
      return true;                                                                                                     // 193
    }                                                                                                                  // 295
                                                                                                                       //
    return RocketChat.models.Subscriptions.findOne({                                                                   // 195
      rid: this._id                                                                                                    // 297
    }) != null;                                                                                                        // 195
  }                                                                                                                    // 18
});                                                                                                                    // 18
isSocialSharingOpen = false;                                                                                           // 197
touchMoved = false;                                                                                                    // 198
Template.room.events({                                                                                                 // 200
  "click, touchend": function (e, t) {                                                                                 // 201
    return Meteor.setTimeout(function () {                                                                             // 308
      return t.sendToBottomIfNecessaryDebounced();                                                                     // 309
    }, 100);                                                                                                           // 202
  },                                                                                                                   // 201
  "click .messages-container": function (e) {                                                                          // 206
    var ref, ref1, ref2;                                                                                               // 207
                                                                                                                       //
    if (Template.instance().tabBar.getState() === 'opened' && ((ref = Meteor.user()) != null ? (ref1 = ref.settings) != null ? (ref2 = ref1.preferences) != null ? ref2.hideFlexTab : void 0 : void 0 : void 0)) {
      return Template.instance().tabBar.close();                                                                       // 315
    }                                                                                                                  // 316
  },                                                                                                                   // 201
  "touchstart .message": function (e, t) {                                                                             // 210
    var doLongTouch, message;                                                                                          // 211
    touchMoved = false;                                                                                                // 211
    isSocialSharingOpen = false;                                                                                       // 212
                                                                                                                       //
    if (e.originalEvent.touches.length !== 1) {                                                                        // 213
      return;                                                                                                          // 214
    }                                                                                                                  // 324
                                                                                                                       //
    if ($(e.currentTarget).hasClass('system')) {                                                                       // 216
      return;                                                                                                          // 217
    }                                                                                                                  // 327
                                                                                                                       //
    if (e.target && e.target.nodeName === 'AUDIO') {                                                                   // 219
      return;                                                                                                          // 220
    }                                                                                                                  // 330
                                                                                                                       //
    if (e.target && e.target.nodeName === 'A' && /^https?:\/\/.+/.test(e.target.getAttribute('href'))) {               // 222
      e.preventDefault();                                                                                              // 223
      e.stopPropagation();                                                                                             // 224
    }                                                                                                                  // 334
                                                                                                                       //
    message = this._arguments[1];                                                                                      // 226
                                                                                                                       //
    doLongTouch = function (_this) {                                                                                   // 227
      return function () {                                                                                             // 337
        var attachment, ref;                                                                                           // 229
                                                                                                                       //
        if (((ref = window.plugins) != null ? ref.socialsharing : void 0) != null) {                                   // 229
          isSocialSharingOpen = true;                                                                                  // 230
                                                                                                                       //
          if (e.target && e.target.nodeName === 'A' && /^https?:\/\/.+/.test(e.target.getAttribute('href'))) {         // 232
            if (message.attachments != null) {                                                                         // 233
              attachment = _.find(message.attachments, function (item) {                                               // 234
                return item.title === e.target.innerText;                                                              // 234
              });                                                                                                      // 234
                                                                                                                       //
              if (attachment != null) {                                                                                // 235
                socialSharing({                                                                                        // 236
                  file: e.target.href,                                                                                 // 237
                  subject: e.target.innerText,                                                                         // 238
                  message: message.msg                                                                                 // 239
                });                                                                                                    // 237
                return;                                                                                                // 240
              }                                                                                                        // 233
            }                                                                                                          // 354
                                                                                                                       //
            socialSharing({                                                                                            // 242
              link: e.target.href,                                                                                     // 243
              subject: e.target.innerText,                                                                             // 244
              message: message.msg                                                                                     // 245
            });                                                                                                        // 243
            return;                                                                                                    // 246
          }                                                                                                            // 361
                                                                                                                       //
          if (e.target && e.target.nodeName === 'IMG') {                                                               // 248
            socialSharing({                                                                                            // 249
              file: e.target.src,                                                                                      // 250
              message: message.msg                                                                                     // 251
            });                                                                                                        // 250
            return;                                                                                                    // 252
          }                                                                                                            // 229
        }                                                                                                              // 369
                                                                                                                       //
        return mobileMessageMenu.show(message, t, e, _this);                                                           // 370
      };                                                                                                               // 227
    }(this);                                                                                                           // 227
                                                                                                                       //
    Meteor.clearTimeout(t.touchtime);                                                                                  // 256
    return t.touchtime = Meteor.setTimeout(doLongTouch, 500);                                                          // 374
  },                                                                                                                   // 201
  "click .message img": function (e, t) {                                                                              // 259
    Meteor.clearTimeout(t.touchtime);                                                                                  // 260
                                                                                                                       //
    if (isSocialSharingOpen === true || touchMoved === true) {                                                         // 261
      e.preventDefault();                                                                                              // 262
      return e.stopPropagation();                                                                                      // 380
    }                                                                                                                  // 381
  },                                                                                                                   // 201
  "touchend .message": function (e, t) {                                                                               // 265
    Meteor.clearTimeout(t.touchtime);                                                                                  // 266
                                                                                                                       //
    if (isSocialSharingOpen === true) {                                                                                // 267
      e.preventDefault();                                                                                              // 268
      e.stopPropagation();                                                                                             // 269
      return;                                                                                                          // 270
    }                                                                                                                  // 389
                                                                                                                       //
    if (e.target && e.target.nodeName === 'A' && /^https?:\/\/.+/.test(e.target.getAttribute('href'))) {               // 272
      if (touchMoved === true) {                                                                                       // 273
        e.preventDefault();                                                                                            // 274
        e.stopPropagation();                                                                                           // 275
        return;                                                                                                        // 276
      }                                                                                                                // 395
                                                                                                                       //
      if ((typeof cordova !== "undefined" && cordova !== null ? cordova.InAppBrowser : void 0) != null) {              // 278
        return cordova.InAppBrowser.open(e.target.href, '_system');                                                    // 397
      } else {                                                                                                         // 278
        return window.open(e.target.href);                                                                             // 399
      }                                                                                                                // 272
    }                                                                                                                  // 401
  },                                                                                                                   // 201
  "touchmove .message": function (e, t) {                                                                              // 283
    touchMoved = true;                                                                                                 // 284
    return Meteor.clearTimeout(t.touchtime);                                                                           // 405
  },                                                                                                                   // 201
  "touchcancel .message": function (e, t) {                                                                            // 287
    return Meteor.clearTimeout(t.touchtime);                                                                           // 408
  },                                                                                                                   // 201
  "click .upload-progress-text > button": function (e) {                                                               // 290
    e.preventDefault();                                                                                                // 291
    return Session.set("uploading-cancel-" + this.id, true);                                                           // 412
  },                                                                                                                   // 201
  "click .unread-bar > button.mark-read": function () {                                                                // 294
    return readMessage.readNow(true);                                                                                  // 415
  },                                                                                                                   // 201
  "click .unread-bar > button.jump-to": function (e, t) {                                                              // 297
    var _id, message, ref, subscription;                                                                               // 298
                                                                                                                       //
    _id = t.data._id;                                                                                                  // 298
    message = (ref = RoomHistoryManager.getRoom(_id)) != null ? ref.firstUnread.get() : void 0;                        // 299
                                                                                                                       //
    if (message != null) {                                                                                             // 300
      return RoomHistoryManager.getSurroundingMessages(message, 50);                                                   // 422
    } else {                                                                                                           // 300
      subscription = ChatSubscription.findOne({                                                                        // 303
        rid: _id                                                                                                       // 303
      });                                                                                                              // 303
      message = ChatMessage.find({                                                                                     // 304
        rid: _id,                                                                                                      // 304
        ts: {                                                                                                          // 304
          $gt: subscription != null ? subscription.ls : void 0                                                         // 304
        }                                                                                                              // 304
      }, {                                                                                                             // 304
        sort: {                                                                                                        // 304
          ts: 1                                                                                                        // 304
        },                                                                                                             // 304
        limit: 1                                                                                                       // 304
      }).fetch()[0];                                                                                                   // 304
      return RoomHistoryManager.getSurroundingMessages(message, 50);                                                   // 438
    }                                                                                                                  // 439
  },                                                                                                                   // 201
  'click .toggle-favorite': function (event) {                                                                         // 307
    event.stopPropagation();                                                                                           // 308
    event.preventDefault();                                                                                            // 309
    return Meteor.call('toggleFavorite', this._id, !$('i', event.currentTarget).hasClass('favorite-room'), function (err) {
      if (err) {                                                                                                       // 311
        return handleError(err);                                                                                       // 312
      }                                                                                                                // 447
    });                                                                                                                // 310
  },                                                                                                                   // 201
  'click .edit-room-title': function (event) {                                                                         // 314
    event.preventDefault();                                                                                            // 315
    Session.set('editRoomTitle', true);                                                                                // 316
    $(".fixed-title").addClass("visible");                                                                             // 317
    return Meteor.setTimeout(function () {                                                                             // 454
      return $('#room-title-field').focus().select();                                                                  // 455
    }, 10);                                                                                                            // 318
  },                                                                                                                   // 201
  "click .flex-tab .user-image > button": function (e, instance) {                                                     // 322
    if (Meteor.userId() == null) {                                                                                     // 323
      return;                                                                                                          // 324
    }                                                                                                                  // 461
                                                                                                                       //
    instance.tabBar.open();                                                                                            // 326
    return instance.setUserDetail(this.user.username);                                                                 // 463
  },                                                                                                                   // 201
  'click .user-card-message': function (e, instance) {                                                                 // 329
    var ref, roomData;                                                                                                 // 330
                                                                                                                       //
    if (Meteor.userId() == null) {                                                                                     // 330
      return;                                                                                                          // 331
    }                                                                                                                  // 469
                                                                                                                       //
    roomData = Session.get('roomData' + this._arguments[1].rid);                                                       // 333
                                                                                                                       //
    if (RocketChat.Layout.isEmbedded()) {                                                                              // 335
      fireGlobalEvent('click-user-card-message', {                                                                     // 336
        username: this._arguments[1].u.username                                                                        // 336
      });                                                                                                              // 336
      e.preventDefault();                                                                                              // 337
      e.stopPropagation();                                                                                             // 338
      return;                                                                                                          // 339
    }                                                                                                                  // 478
                                                                                                                       //
    if ((ref = roomData.t) === 'c' || ref === 'p' || ref === 'd') {                                                    // 341
      instance.setUserDetail(this._arguments[1].u.username);                                                           // 342
    }                                                                                                                  // 481
                                                                                                                       //
    instance.tabBar.setTemplate('membersList');                                                                        // 344
    return instance.tabBar.open();                                                                                     // 483
  },                                                                                                                   // 201
  'scroll .wrapper': _.throttle(function (e, instance) {                                                               // 347
    if (RoomHistoryManager.isLoading(this._id) === false && (RoomHistoryManager.hasMore(this._id) === true || RoomHistoryManager.hasMoreNext(this._id) === true)) {
      if (RoomHistoryManager.hasMore(this._id) === true && e.target.scrollTop === 0) {                                 // 349
        return RoomHistoryManager.getMore(this._id);                                                                   // 488
      } else if (RoomHistoryManager.hasMoreNext(this._id) === true && e.target.scrollTop >= e.target.scrollHeight - e.target.clientHeight) {
        return RoomHistoryManager.getMoreNext(this._id);                                                               // 490
      }                                                                                                                // 348
    }                                                                                                                  // 492
  }, 200),                                                                                                             // 347
  'click .new-message': function (e) {                                                                                 // 355
    Template.instance().atBottom = true;                                                                               // 356
    return Template.instance().find('.input-message').focus();                                                         // 496
  },                                                                                                                   // 201
  'click .message-cog': function (e) {                                                                                 // 359
    var actions, dropDown, el, message;                                                                                // 360
    message = this._arguments[1];                                                                                      // 360
    RocketChat.MessageAction.hideDropDown();                                                                           // 361
    dropDown = $(".messages-box \#" + message._id + " .message-dropdown");                                             // 363
                                                                                                                       //
    if (dropDown.length === 0) {                                                                                       // 365
      actions = RocketChat.MessageAction.getButtons(message, 'message');                                               // 366
      el = Blaze.toHTMLWithData(Template.messageDropdown, {                                                            // 368
        actions: actions                                                                                               // 369
      });                                                                                                              // 369
      $(".messages-box \#" + message._id + " .message-cog-container").append(el);                                      // 371
      dropDown = $(".messages-box \#" + message._id + " .message-dropdown");                                           // 373
    }                                                                                                                  // 510
                                                                                                                       //
    return dropDown.show();                                                                                            // 511
  },                                                                                                                   // 201
  'click .message-dropdown .message-action': function (e, t) {                                                         // 377
    var button, el;                                                                                                    // 378
    el = $(e.currentTarget);                                                                                           // 378
    button = RocketChat.MessageAction.getButtonById(el.data('id'));                                                    // 380
                                                                                                                       //
    if ((button != null ? button.action : void 0) != null) {                                                           // 381
      return button.action.call(this, e, t);                                                                           // 518
    }                                                                                                                  // 519
  },                                                                                                                   // 201
  'click .message-dropdown-close': function () {                                                                       // 384
    return RocketChat.MessageAction.hideDropDown();                                                                    // 522
  },                                                                                                                   // 201
  "click .mention-link": function (e, instance) {                                                                      // 387
    var channel;                                                                                                       // 388
                                                                                                                       //
    if (Meteor.userId() == null) {                                                                                     // 388
      return;                                                                                                          // 389
    }                                                                                                                  // 528
                                                                                                                       //
    channel = $(e.currentTarget).data('channel');                                                                      // 391
                                                                                                                       //
    if (channel != null) {                                                                                             // 392
      if (RocketChat.Layout.isEmbedded()) {                                                                            // 393
        return fireGlobalEvent('click-mention-link', {                                                                 // 394
          path: FlowRouter.path('channel', {                                                                           // 394
            name: channel                                                                                              // 394
          }),                                                                                                          // 394
          channel: channel                                                                                             // 394
        });                                                                                                            // 394
      }                                                                                                                // 538
                                                                                                                       //
      FlowRouter.go('channel', {                                                                                       // 396
        name: channel                                                                                                  // 396
      }, FlowRouter.current().queryParams);                                                                            // 396
      return;                                                                                                          // 397
    }                                                                                                                  // 543
                                                                                                                       //
    if (RocketChat.Layout.isEmbedded()) {                                                                              // 399
      fireGlobalEvent('click-mention-link', {                                                                          // 400
        username: $(e.currentTarget).data('username')                                                                  // 400
      });                                                                                                              // 400
      e.stopPropagation();                                                                                             // 401
      e.preventDefault();                                                                                              // 402
      return;                                                                                                          // 403
    }                                                                                                                  // 551
                                                                                                                       //
    instance.tabBar.setTemplate('membersList');                                                                        // 405
    instance.setUserDetail($(e.currentTarget).data('username'));                                                       // 406
    return instance.tabBar.open();                                                                                     // 554
  },                                                                                                                   // 201
  'click .image-to-download': function (event) {                                                                       // 410
    ChatMessage.update({                                                                                               // 411
      _id: this._arguments[1]._id,                                                                                     // 411
      'urls.url': $(event.currentTarget).data('url')                                                                   // 411
    }, {                                                                                                               // 411
      $set: {                                                                                                          // 411
        'urls.$.downloadImages': true                                                                                  // 411
      }                                                                                                                // 411
    });                                                                                                                // 411
    return ChatMessage.update({                                                                                        // 565
      _id: this._arguments[1]._id,                                                                                     // 412
      'attachments.image_url': $(event.currentTarget).data('url')                                                      // 412
    }, {                                                                                                               // 412
      $set: {                                                                                                          // 412
        'attachments.$.downloadImages': true                                                                           // 412
      }                                                                                                                // 412
    });                                                                                                                // 412
  },                                                                                                                   // 201
  'click li[data-chartView=true]': function (event) {                                                                  // 415
    return ChartDialog.preview(event.currentTarget);                                                                   // 575
  },                                                                                                                   // 201
  'click .collapse-switch': function (e) {                                                                             // 418
    var collapsed, id, index, obj, obj1, ref, ref1;                                                                    // 419
    index = $(e.currentTarget).data('index');                                                                          // 419
    collapsed = $(e.currentTarget).data('collapsed');                                                                  // 420
    id = this._arguments[1]._id;                                                                                       // 421
                                                                                                                       //
    if (((ref = this._arguments[1]) != null ? ref.attachments : void 0) != null) {                                     // 423
      ChatMessage.update({                                                                                             // 424
        _id: id                                                                                                        // 424
      }, {                                                                                                             // 424
        $set: (obj = {}, obj["attachments." + index + ".collapsed"] = !collapsed, obj)                                 // 424
      });                                                                                                              // 424
    }                                                                                                                  // 592
                                                                                                                       //
    if (((ref1 = this._arguments[1]) != null ? ref1.urls : void 0) != null) {                                          // 426
      return ChatMessage.update({                                                                                      // 594
        _id: id                                                                                                        // 427
      }, {                                                                                                             // 427
        $set: (obj1 = {}, obj1["urls." + index + ".collapsed"] = !collapsed, obj1)                                     // 427
      });                                                                                                              // 427
    }                                                                                                                  // 603
  },                                                                                                                   // 201
  'dragenter .dropzone': function (e) {                                                                                // 429
    var ref, ref1, types;                                                                                              // 430
    types = (ref = e.originalEvent) != null ? (ref1 = ref.dataTransfer) != null ? ref1.types : void 0 : void 0;        // 430
                                                                                                                       //
    if ((types != null ? types.length : void 0) > 0 && _.every(types, function (_this) {                               // 431
      return function (type) {                                                                                         // 609
        return type.indexOf('text/') === -1 || type.indexOf('text/uri-list') !== -1;                                   // 610
      };                                                                                                               // 431
    }(this)) && userCanDrop(this._id)) {                                                                               // 431
      return e.currentTarget.classList.add('over');                                                                    // 613
    }                                                                                                                  // 614
  },                                                                                                                   // 201
  'dragleave .dropzone-overlay': function (e) {                                                                        // 434
    return e.currentTarget.parentNode.classList.remove('over');                                                        // 617
  },                                                                                                                   // 201
  'dragover .dropzone-overlay': function (e) {                                                                         // 437
    var ref;                                                                                                           // 438
    e = e.originalEvent || e;                                                                                          // 438
                                                                                                                       //
    if ((ref = e.dataTransfer.effectAllowed) === 'move' || ref === 'linkMove') {                                       // 439
      return e.dataTransfer.dropEffect = 'move';                                                                       // 623
    } else {                                                                                                           // 439
      return e.dataTransfer.dropEffect = 'copy';                                                                       // 625
    }                                                                                                                  // 626
  },                                                                                                                   // 201
  'dropped .dropzone-overlay': function (event) {                                                                      // 444
    var e, file, files, filesToUpload, j, len, ref;                                                                    // 445
    event.currentTarget.parentNode.classList.remove('over');                                                           // 445
    e = event.originalEvent || event;                                                                                  // 447
    files = ((ref = e.dataTransfer) != null ? ref.files : void 0) || [];                                               // 448
    filesToUpload = [];                                                                                                // 450
                                                                                                                       //
    for (j = 0, len = files.length; j < len; j++) {                                                                    // 451
      file = files[j];                                                                                                 // 635
      Object.defineProperty(file, 'type', {                                                                            // 453
        value: mime.lookup(file.name)                                                                                  // 453
      });                                                                                                              // 453
      filesToUpload.push({                                                                                             // 454
        file: file,                                                                                                    // 455
        name: file.name                                                                                                // 456
      });                                                                                                              // 455
    }                                                                                                                  // 451
                                                                                                                       //
    return fileUpload(filesToUpload);                                                                                  // 644
  },                                                                                                                   // 201
  'load img': function (e, template) {                                                                                 // 460
    return typeof template.sendToBottomIfNecessary === "function" ? template.sendToBottomIfNecessary() : void 0;       // 647
  },                                                                                                                   // 201
  'click .jump-recent button': function (e, template) {                                                                // 463
    var ref;                                                                                                           // 464
    e.preventDefault();                                                                                                // 464
    template.atBottom = true;                                                                                          // 465
    return RoomHistoryManager.clear(template != null ? (ref = template.data) != null ? ref._id : void 0 : void 0);     // 653
  },                                                                                                                   // 201
  'click .message': function (e, template) {                                                                           // 468
    var _id, addClass, data, j, k, len, len1, message, ref, ref1, ref2, removeClass, results1, selectedMessages;       // 469
                                                                                                                       //
    if (template.selectable.get()) {                                                                                   // 469
      ((ref = document.selection) != null ? ref.empty() : void 0) || (typeof window.getSelection === "function" ? window.getSelection().removeAllRanges() : void 0);
      data = Blaze.getData(e.currentTarget);                                                                           // 471
      _id = data != null ? (ref1 = data._arguments) != null ? (ref2 = ref1[1]) != null ? ref2._id : void 0 : void 0 : void 0;
                                                                                                                       //
      if (!template.selectablePointer) {                                                                               // 474
        template.selectablePointer = _id;                                                                              // 475
      }                                                                                                                // 663
                                                                                                                       //
      if (!e.shiftKey) {                                                                                               // 477
        template.selectedMessages = template.getSelectedMessages();                                                    // 478
        template.selectedRange = [];                                                                                   // 479
        template.selectablePointer = _id;                                                                              // 480
      }                                                                                                                // 668
                                                                                                                       //
      template.selectMessages(_id);                                                                                    // 482
      selectedMessages = $('.messages-box .message.selected').map(function (i, message) {                              // 484
        return message.id;                                                                                             // 671
      });                                                                                                              // 484
      removeClass = _.difference(selectedMessages, template.getSelectedMessages());                                    // 485
      addClass = _.difference(template.getSelectedMessages(), selectedMessages);                                       // 486
                                                                                                                       //
      for (j = 0, len = removeClass.length; j < len; j++) {                                                            // 487
        message = removeClass[j];                                                                                      // 676
        $(".messages-box #" + message).removeClass('selected');                                                        // 488
      }                                                                                                                // 487
                                                                                                                       //
      results1 = [];                                                                                                   // 489
                                                                                                                       //
      for (k = 0, len1 = addClass.length; k < len1; k++) {                                                             // 680
        message = addClass[k];                                                                                         // 681
        results1.push($(".messages-box #" + message).addClass('selected'));                                            // 682
      }                                                                                                                // 489
                                                                                                                       //
      return results1;                                                                                                 // 684
    }                                                                                                                  // 685
  }                                                                                                                    // 201
});                                                                                                                    // 201
Template.room.onCreated(function () {                                                                                  // 493
  this.showUsersOffline = new ReactiveVar(false);                                                                      // 496
  this.atBottom = FlowRouter.getQueryParam('msg') ? false : true;                                                      // 497
  this.unreadCount = new ReactiveVar(0);                                                                               // 498
  this.selectable = new ReactiveVar(false);                                                                            // 500
  this.selectedMessages = [];                                                                                          // 501
  this.selectedRange = [];                                                                                             // 502
  this.selectablePointer = null;                                                                                       // 503
  this.flexTemplate = new ReactiveVar();                                                                               // 505
  this.userDetail = new ReactiveVar(FlowRouter.getParam('username'));                                                  // 507
  this.tabBar = new RocketChatTabBar();                                                                                // 509
  this.tabBar.showGroup(FlowRouter.current().route.name);                                                              // 510
                                                                                                                       //
  this.resetSelection = function (_this) {                                                                             // 512
    return function (enabled) {                                                                                        // 702
      _this.selectable.set(enabled);                                                                                   // 513
                                                                                                                       //
      $('.messages-box .message.selected').removeClass('selected');                                                    // 514
      _this.selectedMessages = [];                                                                                     // 515
      _this.selectedRange = [];                                                                                        // 516
      return _this.selectablePointer = null;                                                                           // 707
    };                                                                                                                 // 512
  }(this);                                                                                                             // 512
                                                                                                                       //
  this.selectMessages = function (_this) {                                                                             // 519
    return function (to) {                                                                                             // 711
      var maxTs, message1, message2, minTs;                                                                            // 520
                                                                                                                       //
      if (_this.selectablePointer === to && _this.selectedRange.length > 0) {                                          // 520
        return _this.selectedRange = [];                                                                               // 714
      } else {                                                                                                         // 520
        message1 = ChatMessage.findOne(_this.selectablePointer);                                                       // 523
        message2 = ChatMessage.findOne(to);                                                                            // 524
        minTs = _.min([message1.ts, message2.ts]);                                                                     // 526
        maxTs = _.max([message1.ts, message2.ts]);                                                                     // 527
        return _this.selectedRange = _.pluck(ChatMessage.find({                                                        // 720
          rid: message1.rid,                                                                                           // 529
          ts: {                                                                                                        // 529
            $gte: minTs,                                                                                               // 529
            $lte: maxTs                                                                                                // 529
          }                                                                                                            // 529
        }).fetch(), '_id');                                                                                            // 529
      }                                                                                                                // 727
    };                                                                                                                 // 519
  }(this);                                                                                                             // 519
                                                                                                                       //
  this.getSelectedMessages = function (_this) {                                                                        // 531
    return function () {                                                                                               // 731
      var addMessages, j, len, message, messages, previewMessages, ref;                                                // 532
      messages = _this.selectedMessages;                                                                               // 532
      addMessages = false;                                                                                             // 533
      ref = _this.selectedRange;                                                                                       // 534
                                                                                                                       //
      for (j = 0, len = ref.length; j < len; j++) {                                                                    // 534
        message = ref[j];                                                                                              // 737
                                                                                                                       //
        if (messages.indexOf(message) === -1) {                                                                        // 535
          addMessages = true;                                                                                          // 536
          break;                                                                                                       // 537
        }                                                                                                              // 741
      }                                                                                                                // 534
                                                                                                                       //
      if (addMessages) {                                                                                               // 539
        previewMessages = _.compact(_.uniq(_this.selectedMessages.concat(_this.selectedRange)));                       // 540
      } else {                                                                                                         // 539
        previewMessages = _.compact(_.difference(_this.selectedMessages, _this.selectedRange));                        // 542
      }                                                                                                                // 747
                                                                                                                       //
      return previewMessages;                                                                                          // 544
    };                                                                                                                 // 531
  }(this);                                                                                                             // 531
                                                                                                                       //
  this.setUserDetail = function (_this) {                                                                              // 546
    return function (username) {                                                                                       // 752
      return _this.userDetail.set(username);                                                                           // 753
    };                                                                                                                 // 546
  }(this);                                                                                                             // 546
                                                                                                                       //
  this.clearUserDetail = function (_this) {                                                                            // 549
    return function () {                                                                                               // 757
      return _this.userDetail.set(null);                                                                               // 758
    };                                                                                                                 // 549
  }(this);                                                                                                             // 549
                                                                                                                       //
  Meteor.call('getRoomRoles', this.data._id, function (error, results) {                                               // 552
    var j, len, record, results1;                                                                                      // 553
                                                                                                                       //
    if (error) {                                                                                                       // 553
      return handleError(error);                                                                                       // 554
    }                                                                                                                  // 765
                                                                                                                       //
    results1 = [];                                                                                                     // 556
                                                                                                                       //
    for (j = 0, len = results.length; j < len; j++) {                                                                  // 767
      record = results[j];                                                                                             // 768
      delete record._id;                                                                                               // 557
      results1.push(RoomRoles.upsert({                                                                                 // 770
        rid: record.rid,                                                                                               // 558
        "u._id": record.u._id                                                                                          // 558
      }, record));                                                                                                     // 558
    }                                                                                                                  // 556
                                                                                                                       //
    return results1;                                                                                                   // 775
  });                                                                                                                  // 552
  return RoomRoles.find({                                                                                              // 777
    rid: this.data._id                                                                                                 // 560
  }).observe({                                                                                                         // 560
    added: function (_this) {                                                                                          // 561
      return function (role) {                                                                                         // 781
        var ref;                                                                                                       // 562
        return ChatMessage.update({                                                                                    // 783
          rid: _this.data._id,                                                                                         // 562
          "u._id": role != null ? (ref = role.u) != null ? ref._id : void 0 : void 0                                   // 562
        }, {                                                                                                           // 562
          $addToSet: {                                                                                                 // 562
            roles: role._id                                                                                            // 562
          }                                                                                                            // 562
        }, {                                                                                                           // 562
          multi: true                                                                                                  // 562
        });                                                                                                            // 562
      };                                                                                                               // 561
    }(this),                                                                                                           // 561
    changed: function (_this) {                                                                                        // 563
      return function (role, oldRole) {                                                                                // 796
        var ref;                                                                                                       // 564
        return ChatMessage.update({                                                                                    // 798
          rid: _this.data._id,                                                                                         // 564
          "u._id": role != null ? (ref = role.u) != null ? ref._id : void 0 : void 0                                   // 564
        }, {                                                                                                           // 564
          $inc: {                                                                                                      // 564
            rerender: 1                                                                                                // 564
          }                                                                                                            // 564
        }, {                                                                                                           // 564
          multi: true                                                                                                  // 564
        });                                                                                                            // 564
      };                                                                                                               // 563
    }(this),                                                                                                           // 563
    removed: function (_this) {                                                                                        // 565
      return function (role) {                                                                                         // 811
        var ref;                                                                                                       // 566
        return ChatMessage.update({                                                                                    // 813
          rid: _this.data._id,                                                                                         // 566
          "u._id": role != null ? (ref = role.u) != null ? ref._id : void 0 : void 0                                   // 566
        }, {                                                                                                           // 566
          $pull: {                                                                                                     // 566
            roles: role._id                                                                                            // 566
          }                                                                                                            // 566
        }, {                                                                                                           // 566
          multi: true                                                                                                  // 566
        });                                                                                                            // 566
      };                                                                                                               // 565
    }(this)                                                                                                            // 565
  });                                                                                                                  // 561
});                                                                                                                    // 493
Template.room.onDestroyed(function () {                                                                                // 568
  return window.removeEventListener('resize', this.onWindowResize);                                                    // 829
});                                                                                                                    // 568
Template.room.onRendered(function () {                                                                                 // 571
  var messageBox, newMessage, observer, rtl, template, updateUnreadCount, webrtc, wrapper, wrapperUl;                  // 572
                                                                                                                       //
  if (!window.chatMessages) {                                                                                          // 572
    window.chatMessages = {};                                                                                          // 573
  }                                                                                                                    // 836
                                                                                                                       //
  if (!window.chatMessages[Session.get('openedRoom')]) {                                                               // 574
    window.chatMessages[Session.get('openedRoom')] = new ChatMessages();                                               // 575
  }                                                                                                                    // 839
                                                                                                                       //
  chatMessages[Session.get('openedRoom')].init(this.firstNode);                                                        // 576
                                                                                                                       //
  if (Meteor.Device.isDesktop()) {                                                                                     // 578
    setTimeout(function () {                                                                                           // 579
      return $('.message-form .input-message').focus();                                                                // 843
    }, 100);                                                                                                           // 579
  }                                                                                                                    // 845
                                                                                                                       //
  wrapper = this.find('.wrapper');                                                                                     // 585
  wrapperUl = this.find('.wrapper > ul');                                                                              // 586
  newMessage = this.find(".new-message");                                                                              // 587
  $.each($(wrapperUl).find("li[data-chartview=true]"), function (index) {                                              // 590
    return Highcharts.chart($(this).data('target'), $(this).data("chartdata"));                                        // 850
  });                                                                                                                  // 590
  template = this;                                                                                                     // 593
  messageBox = $('.messages-box');                                                                                     // 595
                                                                                                                       //
  template.isAtBottom = function (scrollThreshold) {                                                                   // 597
    if (scrollThreshold == null) {                                                                                     // 598
      scrollThreshold = 0;                                                                                             // 598
    }                                                                                                                  // 857
                                                                                                                       //
    if (wrapper.scrollTop + scrollThreshold >= wrapper.scrollHeight - wrapper.clientHeight) {                          // 599
      newMessage.className = "new-message background-primary-action-color color-content-background-color not";         // 600
      return true;                                                                                                     // 601
    }                                                                                                                  // 861
                                                                                                                       //
    return false;                                                                                                      // 602
  };                                                                                                                   // 597
                                                                                                                       //
  template.sendToBottom = function () {                                                                                // 604
    wrapper.scrollTop = wrapper.scrollHeight - wrapper.clientHeight;                                                   // 605
    return newMessage.className = "new-message background-primary-action-color color-content-background-color not";    // 866
  };                                                                                                                   // 604
                                                                                                                       //
  template.checkIfScrollIsAtBottom = function () {                                                                     // 608
    template.atBottom = template.isAtBottom(100);                                                                      // 609
    readMessage.enable();                                                                                              // 610
    return readMessage.read();                                                                                         // 871
  };                                                                                                                   // 608
                                                                                                                       //
  template.sendToBottomIfNecessary = function () {                                                                     // 613
    if (template.atBottom === true && template.isAtBottom() !== true) {                                                // 614
      return template.sendToBottom();                                                                                  // 875
    }                                                                                                                  // 876
  };                                                                                                                   // 613
                                                                                                                       //
  template.sendToBottomIfNecessaryDebounced = _.debounce(template.sendToBottomIfNecessary, 10);                        // 617
  template.sendToBottomIfNecessary();                                                                                  // 619
                                                                                                                       //
  if (window.MutationObserver == null) {                                                                               // 621
    wrapperUl.addEventListener('DOMSubtreeModified', function () {                                                     // 622
      return template.sendToBottomIfNecessaryDebounced();                                                              // 882
    });                                                                                                                // 622
  } else {                                                                                                             // 621
    observer = new MutationObserver(function (mutations) {                                                             // 625
      return mutations.forEach(function (mutation) {                                                                   // 886
        return template.sendToBottomIfNecessaryDebounced();                                                            // 887
      });                                                                                                              // 626
    });                                                                                                                // 625
    observer.observe(wrapperUl, {                                                                                      // 629
      childList: true                                                                                                  // 630
    });                                                                                                                // 630
  }                                                                                                                    // 893
                                                                                                                       //
  template.onWindowResize = function () {                                                                              // 633
    return Meteor.defer(function () {                                                                                  // 895
      return template.sendToBottomIfNecessaryDebounced();                                                              // 896
    });                                                                                                                // 634
  };                                                                                                                   // 633
                                                                                                                       //
  window.addEventListener('resize', template.onWindowResize);                                                          // 637
  wrapper.addEventListener('mousewheel', function () {                                                                 // 639
    template.atBottom = false;                                                                                         // 640
    return Meteor.defer(function () {                                                                                  // 902
      return template.checkIfScrollIsAtBottom();                                                                       // 903
    });                                                                                                                // 641
  });                                                                                                                  // 639
  wrapper.addEventListener('wheel', function () {                                                                      // 644
    template.atBottom = false;                                                                                         // 645
    return Meteor.defer(function () {                                                                                  // 908
      return template.checkIfScrollIsAtBottom();                                                                       // 909
    });                                                                                                                // 646
  });                                                                                                                  // 644
  wrapper.addEventListener('touchstart', function () {                                                                 // 649
    return template.atBottom = false;                                                                                  // 913
  });                                                                                                                  // 649
  wrapper.addEventListener('touchend', function () {                                                                   // 652
    Meteor.defer(function () {                                                                                         // 653
      return template.checkIfScrollIsAtBottom();                                                                       // 917
    });                                                                                                                // 653
    Meteor.setTimeout(function () {                                                                                    // 655
      return template.checkIfScrollIsAtBottom();                                                                       // 920
    }, 1000);                                                                                                          // 655
    return Meteor.setTimeout(function () {                                                                             // 922
      return template.checkIfScrollIsAtBottom();                                                                       // 923
    }, 2000);                                                                                                          // 658
  });                                                                                                                  // 652
  wrapper.addEventListener('scroll', function () {                                                                     // 662
    template.atBottom = false;                                                                                         // 663
    return Meteor.defer(function () {                                                                                  // 928
      return template.checkIfScrollIsAtBottom();                                                                       // 929
    });                                                                                                                // 664
  });                                                                                                                  // 662
  $('.flex-tab-bar').on('click', function (e, t) {                                                                     // 667
    return Meteor.setTimeout(function () {                                                                             // 933
      return template.sendToBottomIfNecessaryDebounced();                                                              // 934
    }, 50);                                                                                                            // 668
  });                                                                                                                  // 667
  rtl = $('html').hasClass('rtl');                                                                                     // 672
  updateUnreadCount = _.throttle(function () {                                                                         // 674
    var count, lastInvisibleMessageOnScreen, lastMessage, messageBoxOffset, subscription;                              // 675
    messageBoxOffset = messageBox.offset();                                                                            // 675
                                                                                                                       //
    if (rtl) {                                                                                                         // 677
      lastInvisibleMessageOnScreen = document.elementFromPoint(messageBoxOffset.left + messageBox.width() - 1, messageBoxOffset.top + 1);
    } else {                                                                                                           // 677
      lastInvisibleMessageOnScreen = document.elementFromPoint(messageBoxOffset.left + 1, messageBoxOffset.top + 1);   // 680
    }                                                                                                                  // 945
                                                                                                                       //
    if ((lastInvisibleMessageOnScreen != null ? lastInvisibleMessageOnScreen.id : void 0) != null) {                   // 682
      lastMessage = ChatMessage.findOne(lastInvisibleMessageOnScreen.id);                                              // 683
                                                                                                                       //
      if (lastMessage != null) {                                                                                       // 684
        subscription = ChatSubscription.findOne({                                                                      // 685
          rid: template.data._id                                                                                       // 685
        });                                                                                                            // 685
        count = ChatMessage.find({                                                                                     // 686
          rid: template.data._id,                                                                                      // 686
          ts: {                                                                                                        // 686
            $lte: lastMessage.ts,                                                                                      // 686
            $gt: subscription != null ? subscription.ls : void 0                                                       // 686
          }                                                                                                            // 686
        }).count();                                                                                                    // 686
        return template.unreadCount.set(count);                                                                        // 959
      } else {                                                                                                         // 684
        return template.unreadCount.set(0);                                                                            // 961
      }                                                                                                                // 682
    }                                                                                                                  // 963
  }, 300);                                                                                                             // 674
  readMessage.onRead(function (rid) {                                                                                  // 692
    if (rid === template.data._id) {                                                                                   // 693
      return template.unreadCount.set(0);                                                                              // 967
    }                                                                                                                  // 968
  });                                                                                                                  // 692
  wrapper.addEventListener('scroll', function () {                                                                     // 696
    return updateUnreadCount();                                                                                        // 971
  });                                                                                                                  // 696
  $.data(this.firstNode, 'renderedAt', new Date());                                                                    // 700
  webrtc = WebRTC.getInstanceByRoomId(template.data._id);                                                              // 702
                                                                                                                       //
  if (webrtc != null) {                                                                                                // 703
    return Tracker.autorun(function (_this) {                                                                          // 976
      return function () {                                                                                             // 977
        var ref;                                                                                                       // 705
                                                                                                                       //
        if (((ref = webrtc.remoteItems.get()) != null ? ref.length : void 0) > 0) {                                    // 705
          _this.tabBar.setTemplate('membersList');                                                                     // 706
                                                                                                                       //
          _this.tabBar.open();                                                                                         // 707
        }                                                                                                              // 982
                                                                                                                       //
        if (webrtc.localUrl.get() != null) {                                                                           // 709
          _this.tabBar.setTemplate('membersList');                                                                     // 710
                                                                                                                       //
          return _this.tabBar.open();                                                                                  // 985
        }                                                                                                              // 986
      };                                                                                                               // 704
    }(this));                                                                                                          // 704
  }                                                                                                                    // 989
});                                                                                                                    // 571
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"roomSearch.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/app/roomSearch.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.roomSearch.helpers({                                                                                          // 1
	roomIcon: function () {                                                                                               // 2
		if (this.type === 'u') {                                                                                             // 3
			return 'icon-at';                                                                                                   // 4
		}                                                                                                                    // 5
                                                                                                                       //
		if (this.type === 'r') {                                                                                             // 6
			return RocketChat.roomTypes.getIcon(this.t);                                                                        // 7
		}                                                                                                                    // 8
	},                                                                                                                    // 9
	userStatus: function () {                                                                                             // 10
		if (this.type === 'u') {                                                                                             // 11
			return "status-" + this.status;                                                                                     // 12
		}                                                                                                                    // 13
	}                                                                                                                     // 14
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"secretURL.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/app/secretURL.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals KonchatNotification */Template.secretURL.helpers({                                                          // 1
	registrationAllowed: function () {                                                                                    // 3
		var _Template$instance = Template.instance(),                                                                        // 3
		    hashIsValid = _Template$instance.hashIsValid;                                                                    // 3
                                                                                                                       //
		return RocketChat.settings.get('Accounts_RegistrationForm') === 'Secret URL' && hashIsValid && hashIsValid.get();    // 5
	},                                                                                                                    // 6
	ready: function () {                                                                                                  // 7
		var _Template$instance2 = Template.instance(),                                                                       // 7
		    subscriptionsReady = _Template$instance2.subscriptionsReady,                                                     // 7
		    hashReady = _Template$instance2.hashReady;                                                                       // 7
                                                                                                                       //
		return typeof subscriptionsReady === 'function' && subscriptionsReady() && hashReady && hashReady.get();             // 9
	}                                                                                                                     // 10
});                                                                                                                    // 2
Template.secretURL.onCreated(function () {                                                                             // 13
	var _this = this;                                                                                                     // 13
                                                                                                                       //
	this.hashIsValid = new ReactiveVar(false);                                                                            // 14
	this.hashReady = new ReactiveVar(false);                                                                              // 15
	Meteor.call('checkRegistrationSecretURL', FlowRouter.getParam('hash'), function (err, success) {                      // 16
		_this.hashReady.set(true);                                                                                           // 17
                                                                                                                       //
		if (success) {                                                                                                       // 18
			Session.set('loginDefaultState', 'register');                                                                       // 19
			KonchatNotification.getDesktopPermission();                                                                         // 20
			return _this.hashIsValid.set(true);                                                                                 // 21
		}                                                                                                                    // 22
                                                                                                                       //
		return _this.hashIsValid.set(false);                                                                                 // 23
	});                                                                                                                   // 24
});                                                                                                                    // 25
Template.secretURL.onRendered(function () {                                                                            // 27
	return $('#initial-page-loading').remove();                                                                           // 28
});                                                                                                                    // 29
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"photoswipe.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/app/photoswipe.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var PhotoSwipe = void 0;                                                                                               // 1
module.watch(require("photoswipe"), {                                                                                  // 1
	"default": function (v) {                                                                                             // 1
		PhotoSwipe = v;                                                                                                      // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
var PhotoSwipeUI_Default = void 0;                                                                                     // 1
module.watch(require("photoswipe/dist/photoswipe-ui-default"), {                                                       // 1
	"default": function (v) {                                                                                             // 1
		PhotoSwipeUI_Default = v;                                                                                            // 1
	}                                                                                                                     // 1
}, 1);                                                                                                                 // 1
module.watch(require("photoswipe/dist/photoswipe.css"));                                                               // 1
Meteor.startup(function () {                                                                                           // 5
	var initGallery = function (selector, items, options) {                                                               // 6
		var gallery = new PhotoSwipe(selector, PhotoSwipeUI_Default, items, options);                                        // 7
		gallery.init();                                                                                                      // 8
	};                                                                                                                    // 9
                                                                                                                       //
	var getItems = function (selector, imageSrc) {                                                                        // 11
		var results = {                                                                                                      // 12
			index: 0,                                                                                                           // 13
			items: []                                                                                                           // 14
		};                                                                                                                   // 12
                                                                                                                       //
		for (var i = 0, len = selector.length; i < len; i++) {                                                               // 17
			results.items.push({                                                                                                // 18
				src: selector[i].src,                                                                                              // 19
				w: selector[i].naturalWidth,                                                                                       // 20
				h: selector[i].naturalHeight,                                                                                      // 21
				title: selector[i].dataset.title,                                                                                  // 22
				description: selector[i].dataset.description                                                                       // 23
			});                                                                                                                 // 18
                                                                                                                       //
			if (imageSrc === selector[i].src) {                                                                                 // 26
				results.index = i;                                                                                                 // 27
			}                                                                                                                   // 28
		}                                                                                                                    // 29
                                                                                                                       //
		return results;                                                                                                      // 31
	};                                                                                                                    // 32
                                                                                                                       //
	var galleryOptions = {                                                                                                // 34
		index: 0,                                                                                                            // 35
		bgOpacity: 0.8,                                                                                                      // 36
		showHideOpacity: true,                                                                                               // 37
		counterEl: false,                                                                                                    // 38
		shareEl: false                                                                                                       // 39
	};                                                                                                                    // 34
	$(document).on('click', '.gallery-item', function () {                                                                // 42
		var images = getItems(document.querySelectorAll('.gallery-item'), $(this)[0].src);                                   // 43
		galleryOptions.index = images.index;                                                                                 // 45
                                                                                                                       //
		galleryOptions.addCaptionHTMLFn = function (item, captionEl) {                                                       // 46
			captionEl.children[0].innerHTML = item.title + "<br/><small>" + item.description + "</small> ";                     // 47
			return true;                                                                                                        // 48
		};                                                                                                                   // 49
                                                                                                                       //
		initGallery(document.getElementById('pswp'), images.items, galleryOptions);                                          // 51
	});                                                                                                                   // 52
	$(document).on('click', '.room-files-image', function (e) {                                                           // 54
		e.preventDefault();                                                                                                  // 55
		e.stopPropagation();                                                                                                 // 56
		var img = new Image();                                                                                               // 58
		img.src = e.currentTarget.href;                                                                                      // 59
		img.addEventListener('load', function () {                                                                           // 60
			var item = [{                                                                                                       // 61
				src: this.src,                                                                                                     // 62
				w: this.naturalWidth,                                                                                              // 63
				h: this.naturalHeight                                                                                              // 64
			}];                                                                                                                 // 61
			initGallery(document.getElementById('pswp'), item, galleryOptions);                                                 // 67
		});                                                                                                                  // 68
	});                                                                                                                   // 69
});                                                                                                                    // 70
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"cmsPage.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/cmsPage.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.cmsPage.onCreated(function () {                                                                               // 1
	var _this = this;                                                                                                     // 1
                                                                                                                       //
	this.page = new ReactiveVar('');                                                                                      // 2
	return Meteor.autorun(function () {                                                                                   // 3
		var cmsPage = Session.get('cmsPage');                                                                                // 4
                                                                                                                       //
		if (cmsPage != null) {                                                                                               // 5
			return _this.page.set(RocketChat.settings.get(cmsPage));                                                            // 6
		}                                                                                                                    // 7
	});                                                                                                                   // 8
});                                                                                                                    // 9
Template.cmsPage.helpers({                                                                                             // 11
	page: function () {                                                                                                   // 12
		return Template.instance().page.get();                                                                               // 13
	}                                                                                                                     // 14
});                                                                                                                    // 11
Template.cmsPage.events({                                                                                              // 17
	'click .cms-page-close': function () {                                                                                // 18
		return FlowRouter.go('/');                                                                                           // 19
	}                                                                                                                     // 20
});                                                                                                                    // 17
Template.cmsPage.onRendered(function () {                                                                              // 23
	return $('#initial-page-loading').remove();                                                                           // 24
});                                                                                                                    // 25
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"fxos.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/fxos.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.fxOsInstallPrompt.onRendered(function () {                                                                    // 1
	var showPrompt = function () {                                                                                        // 3
		var request = window.navigator.mozApps.install("http://" + location.host + "/manifest.webapp");                      // 4
                                                                                                                       //
		request.onsuccess = function () {                                                                                    // 5
			BlazeLayout.render('fxOsInstallDone');                                                                              // 6
		};                                                                                                                   // 7
                                                                                                                       //
		request.onerror = function () {                                                                                      // 8
			BlazeLayout.render('fxOsInstallError', {                                                                            // 9
				installError: this.error.name                                                                                      // 10
			});                                                                                                                 // 9
		};                                                                                                                   // 12
	};                                                                                                                    // 13
                                                                                                                       //
	setTimeout(showPrompt, 2000);                                                                                         // 14
	return $('#initial-page-loading').remove();                                                                           // 15
});                                                                                                                    // 16
Template.fxOsInstallDone.onRendered(function () {                                                                      // 18
	return $('#initial-page-loading').remove();                                                                           // 18
});                                                                                                                    // 18
Template.fxOsInstallError.onRendered(function () {                                                                     // 19
	return $('#initial-page-loading').remove();                                                                           // 19
});                                                                                                                    // 19
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"modal.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui/client/views/modal.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.modal.rendered = function () {};                                                                              // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".coffee",
    ".html"
  ]
});
require("./node_modules/meteor/rocketchat:ui/getAvatarUrlFromUsername.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/accountBox.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/accounts.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/avatar.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/chatMessages.coffee.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/collections.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/customEventPolyfill.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/fileUpload.coffee.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/fireEvent.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/iframeCommands.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/menu.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/modal.coffee.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/Modernizr.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/msgTyping.coffee.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/notification.coffee.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/parentTemplate.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/readMessages.coffee.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/rocket.coffee.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/RoomHistoryManager.coffee.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/RoomManager.coffee.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/sideNav.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/tapi18n.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/textarea-autogrow.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/codeMirror/codeMirror.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/cordova/facebook-login.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/cordova/keyboard-fix.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/cordova/push.coffee.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/cordova/urls.coffee.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/cordova/user-state.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/recorderjs/audioRecorder.coffee.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/recorderjs/videoRecorder.coffee.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/recorderjs/recorder.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/textarea-cursor/set-cursor-position.js");
require("./node_modules/meteor/rocketchat:ui/client/lib/esc.js");
require("./node_modules/meteor/rocketchat:ui/client/views/template.cmsPage.js");
require("./node_modules/meteor/rocketchat:ui/client/views/template.fxos.js");
require("./node_modules/meteor/rocketchat:ui/client/views/template.modal.js");
require("./node_modules/meteor/rocketchat:ui/client/views/404/template.roomNotFound.js");
require("./node_modules/meteor/rocketchat:ui/client/views/404/template.invalidSecretURL.js");
require("./node_modules/meteor/rocketchat:ui/client/views/app/template.audioNotification.js");
require("./node_modules/meteor/rocketchat:ui/client/views/app/template.burger.js");
require("./node_modules/meteor/rocketchat:ui/client/views/app/template.home.js");
require("./node_modules/meteor/rocketchat:ui/client/views/app/template.notAuthorized.js");
require("./node_modules/meteor/rocketchat:ui/client/views/app/template.pageContainer.js");
require("./node_modules/meteor/rocketchat:ui/client/views/app/template.pageSettingsContainer.js");
require("./node_modules/meteor/rocketchat:ui/client/views/app/template.privateHistory.js");
require("./node_modules/meteor/rocketchat:ui/client/views/app/template.room.js");
require("./node_modules/meteor/rocketchat:ui/client/views/app/template.roomSearch.js");
require("./node_modules/meteor/rocketchat:ui/client/views/app/template.secretURL.js");
require("./node_modules/meteor/rocketchat:ui/client/views/app/template.userSearch.js");
require("./node_modules/meteor/rocketchat:ui/client/views/app/videoCall/template.videoButtons.js");
require("./node_modules/meteor/rocketchat:ui/client/views/app/videoCall/template.videoCall.js");
require("./node_modules/meteor/rocketchat:ui/client/views/app/template.photoswipe.js");
require("./node_modules/meteor/rocketchat:ui/client/views/cmsPage.js");
require("./node_modules/meteor/rocketchat:ui/client/views/fxos.js");
require("./node_modules/meteor/rocketchat:ui/client/views/modal.js");
require("./node_modules/meteor/rocketchat:ui/client/views/404/roomNotFound.js");
require("./node_modules/meteor/rocketchat:ui/client/views/app/burger.js");
require("./node_modules/meteor/rocketchat:ui/client/views/app/home.js");
require("./node_modules/meteor/rocketchat:ui/client/views/app/mobileMessageMenu.js");
require("./node_modules/meteor/rocketchat:ui/client/views/app/privateHistory.js");
require("./node_modules/meteor/rocketchat:ui/client/views/app/room.coffee.js");
require("./node_modules/meteor/rocketchat:ui/client/views/app/roomSearch.js");
require("./node_modules/meteor/rocketchat:ui/client/views/app/secretURL.js");
require("./node_modules/meteor/rocketchat:ui/client/views/app/videoCall/videoButtons.js");
require("./node_modules/meteor/rocketchat:ui/client/views/app/videoCall/videoCall.js");
require("./node_modules/meteor/rocketchat:ui/client/views/app/photoswipe.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:ui'] = {};

})();
