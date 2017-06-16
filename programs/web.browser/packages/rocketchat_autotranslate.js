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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:autotranslate":{"client":{"lib":{"autotranslate.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/rocketchat_autotranslate/client/lib/autotranslate.js                                           //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
RocketChat.AutoTranslate = {                                                                               // 1
	messageIdsToWait: {},                                                                                     // 2
	supportedLanguages: [],                                                                                   // 3
	getLanguage: function (rid) {                                                                             // 5
		var subscription = {};                                                                                   // 6
                                                                                                           //
		if (rid) {                                                                                               // 7
			subscription = RocketChat.models.Subscriptions.findOne({                                                // 8
				rid: rid                                                                                               // 8
			}, {                                                                                                    // 8
				fields: {                                                                                              // 8
					autoTranslateLanguage: 1                                                                              // 8
				}                                                                                                      // 8
			});                                                                                                     // 8
		}                                                                                                        // 9
                                                                                                           //
		var language = subscription && subscription.autoTranslateLanguage || Meteor.user().language || window.defaultUserLanguage();
                                                                                                           //
		if (language.indexOf('-') !== -1) {                                                                      // 11
			if (!_.findWhere(this.supportedLanguages, {                                                             // 12
				language: language                                                                                     // 12
			})) {                                                                                                   // 12
				return language.substr(0, 2);                                                                          // 13
			}                                                                                                       // 14
		}                                                                                                        // 15
                                                                                                           //
		return language;                                                                                         // 16
	},                                                                                                        // 17
	translateAttachments: function (attachments, language) {                                                  // 19
		for (var _iterator = attachments, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
			var _ref;                                                                                               // 20
                                                                                                           //
			if (_isArray) {                                                                                         // 20
				if (_i >= _iterator.length) break;                                                                     // 20
				_ref = _iterator[_i++];                                                                                // 20
			} else {                                                                                                // 20
				_i = _iterator.next();                                                                                 // 20
				if (_i.done) break;                                                                                    // 20
				_ref = _i.value;                                                                                       // 20
			}                                                                                                       // 20
                                                                                                           //
			var attachment = _ref;                                                                                  // 20
                                                                                                           //
			if (attachment.author_name !== Meteor.user().username) {                                                // 21
				if (attachment.text && attachment.translations && attachment.translations[language]) {                 // 22
					attachment.text = attachment.translations[language];                                                  // 23
				}                                                                                                      // 24
                                                                                                           //
				if (attachment.description && attachment.translations && attachment.translations[language]) {          // 26
					attachment.description = attachment.translations[language];                                           // 27
				}                                                                                                      // 28
                                                                                                           //
				if (attachment.attachments && attachment.attachments.length > 0) {                                     // 30
					attachment.attachments = this.translateAttachments(attachment.attachments, language);                 // 31
				}                                                                                                      // 32
			}                                                                                                       // 33
		}                                                                                                        // 34
                                                                                                           //
		return attachments;                                                                                      // 35
	},                                                                                                        // 36
	init: function () {                                                                                       // 38
		var _this = this;                                                                                        // 38
                                                                                                           //
		Meteor.call('autoTranslate.getSupportedLanguages', 'en', function (err, languages) {                     // 39
			_this.supportedLanguages = languages || [];                                                             // 40
		});                                                                                                      // 41
		Tracker.autorun(function () {                                                                            // 43
			if (RocketChat.settings.get('AutoTranslate_Enabled') && RocketChat.authz.hasAtLeastOnePermission(['auto-translate'])) {
				RocketChat.callbacks.add('renderMessage', function (message) {                                         // 45
					var subscription = RocketChat.models.Subscriptions.findOne({                                          // 46
						rid: message.rid                                                                                     // 46
					}, {                                                                                                  // 46
						fields: {                                                                                            // 46
							autoTranslate: 1,                                                                                   // 46
							autoTranslateLanguage: 1                                                                            // 46
						}                                                                                                    // 46
					});                                                                                                   // 46
                                                                                                           //
					var autoTranslateLanguage = _this.getLanguage(message.rid);                                           // 47
                                                                                                           //
					if (message.u && message.u._id !== Meteor.userId()) {                                                 // 48
						if (!message.translations) {                                                                         // 49
							message.translations = {};                                                                          // 50
						}                                                                                                    // 51
                                                                                                           //
						if (subscription && subscription.autoTranslate !== message.autoTranslateShowInverse) {               // 52
							message.translations['original'] = message.html;                                                    // 53
                                                                                                           //
							if (message.translations[autoTranslateLanguage]) {                                                  // 54
								message.html = message.translations[autoTranslateLanguage];                                        // 55
							}                                                                                                   // 56
                                                                                                           //
							if (message.attachments && message.attachments.length > 0) {                                        // 58
								message.attachments = _this.translateAttachments(message.attachments, autoTranslateLanguage);      // 59
							}                                                                                                   // 60
						}                                                                                                    // 61
					} else if (message.attachments && message.attachments.length > 0) {                                   // 62
						message.attachments = _this.translateAttachments(message.attachments, autoTranslateLanguage);        // 63
					}                                                                                                     // 64
                                                                                                           //
					return message;                                                                                       // 65
				}, RocketChat.callbacks.priority.HIGH - 3, 'autotranslate');                                           // 66
				RocketChat.callbacks.add('streamMessage', function (message) {                                         // 68
					if (message.u && message.u._id !== Meteor.userId()) {                                                 // 69
						var subscription = RocketChat.models.Subscriptions.findOne({                                         // 70
							rid: message.rid                                                                                    // 70
						}, {                                                                                                 // 70
							fields: {                                                                                           // 70
								autoTranslate: 1,                                                                                  // 70
								autoTranslateLanguage: 1                                                                           // 70
							}                                                                                                   // 70
						});                                                                                                  // 70
                                                                                                           //
						var language = _this.getLanguage(message.rid);                                                       // 71
                                                                                                           //
						if (subscription && subscription.autoTranslate === true && message.msg && (!message.translations || !message.translations[language])) {
							// || (message.attachments && !_.find(message.attachments, attachment => { return attachment.translations && attachment.translations[language]; }))
							RocketChat.models.Messages.update({                                                                 // 73
								_id: message._id                                                                                   // 73
							}, {                                                                                                // 73
								$set: {                                                                                            // 73
									autoTranslateFetching: true                                                                       // 73
								}                                                                                                  // 73
							});                                                                                                 // 73
						} else if (_this.messageIdsToWait[message._id] !== undefined && subscription && subscription.autoTranslate !== true) {
							RocketChat.models.Messages.update({                                                                 // 75
								_id: message._id                                                                                   // 75
							}, {                                                                                                // 75
								$set: {                                                                                            // 75
									autoTranslateShowInverse: true                                                                    // 75
								},                                                                                                 // 75
								$unset: {                                                                                          // 75
									autoTranslateFetching: true                                                                       // 75
								}                                                                                                  // 75
							});                                                                                                 // 75
							delete _this.messageIdsToWait[message._id];                                                         // 76
						} else if (message.autoTranslateFetching === true) {                                                 // 77
							RocketChat.models.Messages.update({                                                                 // 78
								_id: message._id                                                                                   // 78
							}, {                                                                                                // 78
								$unset: {                                                                                          // 78
									autoTranslateFetching: true                                                                       // 78
								}                                                                                                  // 78
							});                                                                                                 // 78
						}                                                                                                    // 79
					}                                                                                                     // 80
				}, RocketChat.callbacks.priority.HIGH - 3, 'autotranslate-stream');                                    // 81
			} else {                                                                                                // 82
				RocketChat.callbacks.remove('renderMessage', 'autotranslate');                                         // 83
				RocketChat.callbacks.remove('streamMessage', 'autotranslate-stream');                                  // 84
			}                                                                                                       // 85
		});                                                                                                      // 86
	}                                                                                                         // 87
};                                                                                                         // 1
Meteor.startup(function () {                                                                               // 90
	RocketChat.AutoTranslate.init();                                                                          // 91
});                                                                                                        // 92
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"actionButton.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/rocketchat_autotranslate/client/lib/actionButton.js                                            //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
Meteor.startup(function () {                                                                               // 1
	Tracker.autorun(function () {                                                                             // 2
		if (RocketChat.settings.get('AutoTranslate_Enabled') && RocketChat.authz.hasAtLeastOnePermission(['auto-translate'])) {
			RocketChat.MessageAction.addButton({                                                                    // 4
				id: 'toggle-language',                                                                                 // 5
				icon: 'icon-language',                                                                                 // 6
				i18nLabel: 'Toggle_original_translated',                                                               // 7
				context: ['message', 'message-mobile'],                                                                // 8
				action: function () {                                                                                  // 12
					var message = this._arguments[1];                                                                     // 13
					var language = RocketChat.AutoTranslate.getLanguage(message.rid);                                     // 14
					RocketChat.MessageAction.hideDropDown();                                                              // 15
                                                                                                           //
					if (!message.translations || !message.translations[language]) {                                       // 16
						//} && !_.find(message.attachments, attachment => { return attachment.translations && attachment.translations[language]; })) {
						RocketChat.AutoTranslate.messageIdsToWait[message._id] = true;                                       // 17
						RocketChat.models.Messages.update({                                                                  // 18
							_id: message._id                                                                                    // 18
						}, {                                                                                                 // 18
							$set: {                                                                                             // 18
								autoTranslateFetching: true                                                                        // 18
							}                                                                                                   // 18
						});                                                                                                  // 18
						Meteor.call('autoTranslate.translateMessage', message, language);                                    // 19
					} else if (message.autoTranslateShowInverse) {                                                        // 20
						RocketChat.models.Messages.update({                                                                  // 21
							_id: message._id                                                                                    // 21
						}, {                                                                                                 // 21
							$unset: {                                                                                           // 21
								autoTranslateShowInverse: true                                                                     // 21
							}                                                                                                   // 21
						});                                                                                                  // 21
					} else {                                                                                              // 22
						RocketChat.models.Messages.update({                                                                  // 23
							_id: message._id                                                                                    // 23
						}, {                                                                                                 // 23
							$set: {                                                                                             // 23
								autoTranslateShowInverse: true                                                                     // 23
							}                                                                                                   // 23
						});                                                                                                  // 23
					}                                                                                                     // 24
				},                                                                                                     // 25
				validation: function (message) {                                                                       // 27
					return message && message.u && message.u._id !== Meteor.userId();                                     // 28
				},                                                                                                     // 29
				order: 90                                                                                              // 31
			});                                                                                                     // 4
		} else {                                                                                                 // 33
			RocketChat.MessageAction.removeButton('toggle-language');                                               // 34
		}                                                                                                        // 35
	});                                                                                                       // 36
});                                                                                                        // 37
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tabBar.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/rocketchat_autotranslate/client/lib/tabBar.js                                                  //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
Meteor.startup(function () {                                                                               // 1
	Tracker.autorun(function () {                                                                             // 2
		if (RocketChat.settings.get('AutoTranslate_Enabled') && RocketChat.authz.hasAtLeastOnePermission(['auto-translate'])) {
			RocketChat.TabBar.addButton({                                                                           // 4
				groups: ['channel', 'group', 'direct'],                                                                // 5
				id: 'autotranslate',                                                                                   // 6
				i18nTitle: 'Auto_Translate',                                                                           // 7
				icon: 'icon-language',                                                                                 // 8
				template: 'autoTranslateFlexTab',                                                                      // 9
				order: 20                                                                                              // 10
			});                                                                                                     // 4
		} else {                                                                                                 // 12
			RocketChat.TabBar.removeButton('autotranslate');                                                        // 13
		}                                                                                                        // 14
	});                                                                                                       // 15
});                                                                                                        // 16
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"views":{"template.autoTranslateFlexTab.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/rocketchat_autotranslate/client/views/template.autoTranslateFlexTab.js                         //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
                                                                                                           // 1
Template.__checkName("autoTranslateFlexTab");                                                              // 2
Template["autoTranslateFlexTab"] = new Template("Template.autoTranslateFlexTab", (function() {             // 3
  var view = this;                                                                                         // 4
  return HTML.DIV({                                                                                        // 5
    class: "content"                                                                                       // 6
  }, "\n\t\t", Blaze._TemplateWith(function() {                                                            // 7
    return "auto-translate";                                                                               // 8
  }, function() {                                                                                          // 9
    return Spacebars.include(view.lookupTemplate("requiresPermission"), function() {                       // 10
      return [ "\n\t\t\t", HTML.DIV({                                                                      // 11
        class: "list-view autotranslate"                                                                   // 12
      }, "\n\t\t\t\t", HTML.DIV({                                                                          // 13
        class: "title"                                                                                     // 14
      }, "\n\t\t\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                                       // 15
        return Spacebars.mustache(view.lookup("_"), "Auto_Translate");                                     // 16
      })), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.FORM("\n\t\t\t\t\t", HTML.UL({                                // 17
        class: "list clearfix"                                                                             // 18
      }, "\n\t\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {      // 19
        return Spacebars.mustache(view.lookup("_"), "Automatic_Translation");                              // 20
      })), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", HTML.DIV({                                   // 21
        class: "input checkbox toggle"                                                                     // 22
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                                              // 23
        type: "checkbox",                                                                                  // 24
        id: "autoTranslate",                                                                               // 25
        name: "autoTranslate",                                                                             // 26
        value: "1",                                                                                        // 27
        checked: function() {                                                                              // 28
          return Spacebars.mustache(view.lookup("$eq"), view.lookup("autoTranslate"), true);               // 29
        }                                                                                                  // 30
      }), "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL({                                                             // 31
        for: "autoTranslate"                                                                               // 32
      }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {
        return Spacebars.mustache(view.lookup("_"), "Language");                                           // 34
      })), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                        // 35
        return Spacebars.dataMustache(view.lookup("editing"), "autoTranslateLanguage");                    // 36
      }, function() {                                                                                      // 37
        return [ "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL("\n\t\t\t\t\t\t\t\t\t\t", HTML.SELECT({                // 38
          name: "autoTranslateLanguage"                                                                    // 39
        }, "\n\t\t\t\t\t\t\t\t\t\t\t", Blaze.Each(function() {                                             // 40
          return Spacebars.call(view.lookup("supportedLanguages"));                                        // 41
        }, function() {                                                                                    // 42
          return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                             // 43
            value: function() {                                                                            // 44
              return Spacebars.mustache(view.lookup("language"));                                          // 45
            },                                                                                             // 46
            selected: function() {                                                                         // 47
              return Spacebars.mustache(view.lookup("$eq"), view.lookup("language"), view.lookup("autoTranslateLanguage"));
            }                                                                                              // 49
          }, Blaze.View("lookup:$or", function() {                                                         // 50
            return Spacebars.mustache(view.lookup("$or"), view.lookup("name"), view.lookup("language"));   // 51
          })), "\n\t\t\t\t\t\t\t\t\t\t\t" ];                                                               // 52
        }), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({         // 53
          class: "alert"                                                                                   // 54
        }, "\n\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                   // 55
          return Spacebars.mustache(view.lookup("_"), "AutoTranslate_Change_Language_Description");        // 56
        }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                 // 57
          type: "button",                                                                                  // 58
          class: "button cancel"                                                                           // 59
        }, Blaze.View("lookup:_", function() {                                                             // 60
          return Spacebars.mustache(view.lookup("_"), "Cancel");                                           // 61
        })), "\n\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                         // 62
          type: "button",                                                                                  // 63
          class: "button primary save"                                                                     // 64
        }, Blaze.View("lookup:_", function() {                                                             // 65
          return Spacebars.mustache(view.lookup("_"), "Save");                                             // 66
        })), "\n\t\t\t\t\t\t\t\t" ];                                                                       // 67
      }, function() {                                                                                      // 68
        return [ "\n\t\t\t\t\t\t\t\t\t", HTML.SPAN({                                                       // 69
          class: "current-setting"                                                                         // 70
        }, Blaze.View("lookup:languageName", function() {                                                  // 71
          return Spacebars.mustache(view.lookup("languageName"), view.lookup("autoTranslateLanguage"));    // 72
        }), " ", HTML.I({                                                                                  // 73
          class: "icon-pencil",                                                                            // 74
          "data-edit": "autoTranslateLanguage"                                                             // 75
        })), "\n\t\t\t\t\t\t\t\t" ];                                                                       // 76
      }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t" ];
    });                                                                                                    // 78
  }), "\n\t");                                                                                             // 79
}));                                                                                                       // 80
                                                                                                           // 81
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"autoTranslateFlexTab.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                         //
// packages/rocketchat_autotranslate/client/views/autoTranslateFlexTab.js                                  //
//                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                           //
var toastr = void 0;                                                                                       // 1
module.watch(require("toastr"), {                                                                          // 1
	"default": function (v) {                                                                                 // 1
		toastr = v;                                                                                              // 1
	}                                                                                                         // 1
}, 0);                                                                                                     // 1
Template.autoTranslateFlexTab.helpers({                                                                    // 4
	autoTranslate: function () {                                                                              // 5
		var sub = ChatSubscription.findOne({                                                                     // 6
			rid: Template.instance().rid                                                                            // 7
		}, {                                                                                                     // 6
			fields: {                                                                                               // 9
				autoTranslate: 1                                                                                       // 10
			}                                                                                                       // 9
		});                                                                                                      // 8
		return sub && sub.autoTranslate ? true : false;                                                          // 13
	},                                                                                                        // 14
	autoTranslateValue: function () {                                                                         // 16
		var sub = ChatSubscription.findOne({                                                                     // 17
			rid: Template.instance().rid                                                                            // 18
		}, {                                                                                                     // 17
			fields: {                                                                                               // 20
				autoTranslate: 1                                                                                       // 21
			}                                                                                                       // 20
		});                                                                                                      // 19
		return sub && sub.autoTranslate ? t('True') : t('False');                                                // 24
	},                                                                                                        // 25
	autoTranslateLanguage: function () {                                                                      // 27
		var sub = ChatSubscription.findOne({                                                                     // 28
			rid: Template.instance().rid                                                                            // 29
		}, {                                                                                                     // 28
			fields: {                                                                                               // 31
				autoTranslateLanguage: 1                                                                               // 32
			}                                                                                                       // 31
		});                                                                                                      // 30
		var autoTranslateLanguage = sub && sub.autoTranslateLanguage || Meteor.user().language || window.defaultUserLanguage() || '';
		var supportedLanguages = Template.instance().supportedLanguages.get();                                   // 36
                                                                                                           //
		var language = _.findWhere(supportedLanguages, {                                                         // 37
			language: autoTranslateLanguage                                                                         // 37
		});                                                                                                      // 37
                                                                                                           //
		if (language) {                                                                                          // 38
			return language.language;                                                                               // 39
		} else if (autoTranslateLanguage.indexOf('-') !== -1) {                                                  // 40
			language = _.findWhere(supportedLanguages, {                                                            // 41
				language: autoTranslateLanguage.substr(0, 2)                                                           // 41
			});                                                                                                     // 41
			return language && language.language;                                                                   // 42
		}                                                                                                        // 43
	},                                                                                                        // 44
	editing: function (field) {                                                                               // 46
		return Template.instance().editing.get() === field;                                                      // 47
	},                                                                                                        // 48
	supportedLanguages: function () {                                                                         // 50
		return Template.instance().supportedLanguages.get();                                                     // 51
	},                                                                                                        // 52
	languageName: function (targetLanguage) {                                                                 // 54
		if (targetLanguage) {                                                                                    // 55
			var supportedLanguages = Template.instance().supportedLanguages.get();                                  // 56
                                                                                                           //
			var language = _.findWhere(supportedLanguages, {                                                        // 57
				language: targetLanguage                                                                               // 57
			});                                                                                                     // 57
                                                                                                           //
			if (language) {                                                                                         // 58
				return language.name;                                                                                  // 59
			} else if (targetLanguage.indexOf('-') !== -1) {                                                        // 60
				language = _.findWhere(supportedLanguages, {                                                           // 61
					language: targetLanguage.substr(0, 2)                                                                 // 61
				});                                                                                                    // 61
				return language && language.name;                                                                      // 62
			}                                                                                                       // 63
		}                                                                                                        // 64
	}                                                                                                         // 65
});                                                                                                        // 4
Template.autoTranslateFlexTab.onCreated(function () {                                                      // 68
	var _this = this;                                                                                         // 68
                                                                                                           //
	this.rid = Template.currentData().rid;                                                                    // 69
	this.editing = new ReactiveVar();                                                                         // 70
	this.supportedLanguages = new ReactiveVar([]);                                                            // 71
	var userLanguage = Meteor.user().language || window.defaultUserLanguage();                                // 72
	Meteor.call('autoTranslate.getSupportedLanguages', userLanguage, function (err, languages) {              // 73
		_this.supportedLanguages.set(languages || []);                                                           // 74
	});                                                                                                       // 75
                                                                                                           //
	this.validateSetting = function (field) {                                                                 // 77
		var value = void 0;                                                                                      // 78
                                                                                                           //
		switch (field) {                                                                                         // 79
			case 'autoTranslate':                                                                                   // 80
				return true;                                                                                           // 81
                                                                                                           //
			case 'autoTranslateLanguage':                                                                           // 82
				value = _this.$("select[name=" + field + "]").val();                                                   // 83
                                                                                                           //
				if (!_.findWhere(_this.supportedLanguages.get(), {                                                     // 84
					language: value                                                                                       // 84
				})) {                                                                                                  // 84
					toastr.error(t('Invalid_setting_s', value || ''));                                                    // 85
					return false;                                                                                         // 86
				}                                                                                                      // 87
                                                                                                           //
				return true;                                                                                           // 88
		}                                                                                                        // 79
	};                                                                                                        // 90
                                                                                                           //
	this.saveSetting = function () {                                                                          // 92
		var field = _this.editing.get();                                                                         // 93
                                                                                                           //
		var subscription = RocketChat.models.Subscriptions.findOne({                                             // 94
			rid: _this.rid,                                                                                         // 94
			'u._id': Meteor.userId()                                                                                // 94
		});                                                                                                      // 94
		var previousLanguage = subscription.autoTranslateLanguage;                                               // 95
		var value = void 0;                                                                                      // 96
                                                                                                           //
		switch (field) {                                                                                         // 97
			case 'autoTranslate':                                                                                   // 98
				value = _this.$("input[name=" + field + "]").prop('checked') ? '1' : '0';                              // 99
				break;                                                                                                 // 100
                                                                                                           //
			case 'autoTranslateLanguage':                                                                           // 101
				value = _this.$("select[name=" + field + "]").val();                                                   // 102
				break;                                                                                                 // 103
		}                                                                                                        // 97
                                                                                                           //
		if (_this.validateSetting(field)) {                                                                      // 106
			Meteor.call('autoTranslate.saveSettings', _this.data.rid, field, value, {                               // 107
				defaultLanguage: Meteor.user().language || window.defaultUserLanguage()                                // 107
			}, function (err /*, result*/) {                                                                        // 107
				if (err) {                                                                                             // 108
					return handleError(err);                                                                              // 109
				}                                                                                                      // 110
                                                                                                           //
				var query = {                                                                                          // 112
					rid: _this.data.rid,                                                                                  // 112
					'u._id': {                                                                                            // 112
						$ne: Meteor.userId()                                                                                 // 112
					}                                                                                                     // 112
				};                                                                                                     // 112
                                                                                                           //
				if (field === 'autoTranslateLanguage') {                                                               // 113
					var _ref, _ref2, _ref3, _ref4;                                                                        // 113
                                                                                                           //
					query.$or = [(_ref = {}, _ref["translations." + previousLanguage] = {                                 // 114
						$exists: 1                                                                                           // 114
					}, _ref), (_ref2 = {}, _ref2["translations." + value] = {                                             // 114
						$exists: 1                                                                                           // 114
					}, _ref2), (_ref3 = {}, _ref3["attachments.translations." + previousLanguage] = {                     // 114
						$exists: 1                                                                                           // 114
					}, _ref3), (_ref4 = {}, _ref4["attachments.translations." + value] = {                                // 114
						$exists: 1                                                                                           // 114
					}, _ref4)];                                                                                           // 114
				} else {                                                                                               // 115
					var _ref5, _ref6;                                                                                     // 115
                                                                                                           //
					query.$or = [(_ref5 = {}, _ref5["translations." + subscription.autoTranslateLanguage] = {             // 116
						$exists: 1                                                                                           // 116
					}, _ref5), (_ref6 = {}, _ref6["attachments.translations." + subscription.autoTranslateLanguage] = {   // 116
						$exists: 1                                                                                           // 116
					}, _ref6)];                                                                                           // 116
				}                                                                                                      // 117
                                                                                                           //
				if (field === 'autoTranslate' && value === '0') {                                                      // 119
					RocketChat.models.Messages.update(query, {                                                            // 120
						$unset: {                                                                                            // 120
							autoTranslateShowInverse: 1                                                                         // 120
						}                                                                                                    // 120
					}, {                                                                                                  // 120
						multi: true                                                                                          // 120
					});                                                                                                   // 120
				}                                                                                                      // 121
                                                                                                           //
				var display = field === 'autoTranslate' ? true : subscription && subscription.autoTranslate;           // 123
                                                                                                           //
				if (display) {                                                                                         // 124
					query.autoTranslateShowInverse = {                                                                    // 125
						$ne: true                                                                                            // 125
					};                                                                                                    // 125
				} else {                                                                                               // 126
					query.autoTranslateShowInverse = true;                                                                // 127
				}                                                                                                      // 128
                                                                                                           //
				RocketChat.models.Messages.update(query, {                                                             // 130
					$set: {                                                                                               // 130
						random: Random.id()                                                                                  // 130
					}                                                                                                     // 130
				}, {                                                                                                   // 130
					multi: true                                                                                           // 130
				});                                                                                                    // 130
                                                                                                           //
				_this.editing.set();                                                                                   // 132
			});                                                                                                     // 133
		}                                                                                                        // 134
	};                                                                                                        // 135
});                                                                                                        // 136
Template.autoTranslateFlexTab.events({                                                                     // 138
	'keydown input[type=text]': function (e, instance) {                                                      // 139
		if (e.keyCode === 13) {                                                                                  // 140
			e.preventDefault();                                                                                     // 141
			instance.saveSetting();                                                                                 // 142
		}                                                                                                        // 143
	},                                                                                                        // 144
	'click [data-edit]': function (e, instance) {                                                             // 146
		e.preventDefault();                                                                                      // 147
		instance.editing.set($(e.currentTarget).data('edit'));                                                   // 148
		setTimeout(function () {                                                                                 // 149
			instance.$('input.editing').focus().select();                                                           // 149
		}, 100);                                                                                                 // 149
	},                                                                                                        // 150
	'change [type=checkbox]': function (e, instance) {                                                        // 152
		instance.editing.set($(e.currentTarget).attr('name'));                                                   // 153
		instance.saveSetting();                                                                                  // 154
	},                                                                                                        // 155
	'click .cancel': function (e, instance) {                                                                 // 157
		e.preventDefault();                                                                                      // 158
		instance.editing.set();                                                                                  // 159
	},                                                                                                        // 160
	'click .save': function (e, instance) {                                                                   // 162
		e.preventDefault();                                                                                      // 163
		instance.saveSetting();                                                                                  // 164
	}                                                                                                         // 165
});                                                                                                        // 138
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".less",
    ".html"
  ]
});
require("./node_modules/meteor/rocketchat:autotranslate/client/lib/autotranslate.js");
require("./node_modules/meteor/rocketchat:autotranslate/client/lib/actionButton.js");
require("./node_modules/meteor/rocketchat:autotranslate/client/lib/tabBar.js");
require("./node_modules/meteor/rocketchat:autotranslate/client/views/template.autoTranslateFlexTab.js");
require("./node_modules/meteor/rocketchat:autotranslate/client/views/autoTranslateFlexTab.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:autotranslate'] = {};

})();
