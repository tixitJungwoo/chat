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
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Template = Package['templating-runtime'].Template;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:channel-settings":{"client":{"lib":{"ChannelSettings.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_channel-settings/client/lib/ChannelSettings.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
RocketChat.ChannelSettings = new (function () {                                                                        // 1
	function _class() {                                                                                                   // 2
		(0, _classCallCheck3.default)(this, _class);                                                                         // 2
		this.options = new ReactiveVar({});                                                                                  // 3
	} /*                                                                                                                  // 4
   	 * Adds an option in Channel Settings                                                                              //
   	 * @config (object)                                                                                                //
   	 *   id: option id (required)                                                                                      //
   	 *   template (string): template name to render (required)                                                         //
   	 *   validation (function): if option should be displayed                                                          //
    */                                                                                                                 //
                                                                                                                       //
	_class.prototype.addOption = function () {                                                                            // 1
		function addOption(config) {                                                                                         // 1
			var _this = this;                                                                                                   // 13
                                                                                                                       //
			if (config == null || config.id == null) {                                                                          // 14
				return false;                                                                                                      // 15
			}                                                                                                                   // 16
                                                                                                                       //
			return Tracker.nonreactive(function () {                                                                            // 17
				var opts = _this.options.get();                                                                                    // 18
                                                                                                                       //
				opts[config.id] = config;                                                                                          // 19
				return _this.options.set(opts);                                                                                    // 20
			});                                                                                                                 // 21
		}                                                                                                                    // 22
                                                                                                                       //
		return addOption;                                                                                                    // 1
	}();                                                                                                                  // 1
                                                                                                                       //
	_class.prototype.getOptions = function () {                                                                           // 1
		function getOptions(currentData, group) {                                                                            // 1
			var allOptions = _.toArray(this.options.get());                                                                     // 25
                                                                                                                       //
			var allowedOptions = _.compact(_.map(allOptions, function (option) {                                                // 26
				if (option.validation == null || option.validation()) {                                                            // 27
					option.data = Object.assign({}, typeof option.data === 'function' ? option.data() : option.data, currentData);    // 28
					return option;                                                                                                    // 29
				}                                                                                                                  // 30
			})).filter(function (option) {                                                                                      // 31
				return !group || !option.group || option.group.includes(group);                                                    // 32
			});                                                                                                                 // 33
                                                                                                                       //
			return _.sortBy(allowedOptions, 'order');                                                                           // 34
		}                                                                                                                    // 35
                                                                                                                       //
		return getOptions;                                                                                                   // 1
	}();                                                                                                                  // 1
                                                                                                                       //
	return _class;                                                                                                        // 1
}())();                                                                                                                // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"startup":{"messageTypes.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_channel-settings/client/startup/messageTypes.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.startup(function () {                                                                                           // 1
	RocketChat.MessageTypes.registerType({                                                                                // 2
		id: 'room_changed_privacy',                                                                                          // 3
		system: true,                                                                                                        // 4
		message: 'room_changed_privacy',                                                                                     // 5
		data: function (message) {                                                                                           // 6
			return {                                                                                                            // 7
				user_by: message.u && message.u.username,                                                                          // 8
				room_type: message.msg                                                                                             // 9
			};                                                                                                                  // 7
		}                                                                                                                    // 11
	});                                                                                                                   // 2
	RocketChat.MessageTypes.registerType({                                                                                // 14
		id: 'room_changed_topic',                                                                                            // 15
		system: true,                                                                                                        // 16
		message: 'room_changed_topic',                                                                                       // 17
		data: function (message) {                                                                                           // 18
			return {                                                                                                            // 19
				user_by: message.u && message.u.username,                                                                          // 20
				room_topic: message.msg                                                                                            // 21
			};                                                                                                                  // 19
		}                                                                                                                    // 23
	});                                                                                                                   // 14
	RocketChat.MessageTypes.registerType({                                                                                // 26
		id: 'room_changed_announcement',                                                                                     // 27
		system: true,                                                                                                        // 28
		message: 'room_changed_announcement',                                                                                // 29
		data: function (message) {                                                                                           // 30
			return {                                                                                                            // 31
				user_by: message.u && message.u.username,                                                                          // 32
				room_announcement: message.msg                                                                                     // 33
			};                                                                                                                  // 31
		}                                                                                                                    // 35
	});                                                                                                                   // 26
	RocketChat.MessageTypes.registerType({                                                                                // 38
		id: 'room_changed_description',                                                                                      // 39
		system: true,                                                                                                        // 40
		message: 'room_changed_description',                                                                                 // 41
		data: function (message) {                                                                                           // 42
			return {                                                                                                            // 43
				user_by: message.u && message.u.username,                                                                          // 44
				room_description: message.msg                                                                                      // 45
			};                                                                                                                  // 43
		}                                                                                                                    // 47
	});                                                                                                                   // 38
});                                                                                                                    // 49
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tabBar.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_channel-settings/client/startup/tabBar.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.startup(function () {                                                                                           // 1
	RocketChat.TabBar.addButton({                                                                                         // 2
		groups: ['channel', 'group', 'direct'],                                                                              // 3
		id: 'channel-settings',                                                                                              // 4
		anonymous: true,                                                                                                     // 5
		i18nTitle: 'Room_Info',                                                                                              // 6
		icon: 'icon-info-circled',                                                                                           // 7
		template: 'channelSettings',                                                                                         // 8
		order: 0                                                                                                             // 9
	});                                                                                                                   // 2
});                                                                                                                    // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"trackSettingsChange.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_channel-settings/client/startup/trackSettingsChange.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.startup(function () {                                                                                           // 1
	var roomSettingsChangedCallback = function (msg) {                                                                    // 2
		Tracker.nonreactive(function () {                                                                                    // 3
			if (msg.t === 'room_changed_privacy') {                                                                             // 4
				if (Session.get('openedRoom') === msg.rid) {                                                                       // 5
					var type = FlowRouter.current().route.name === 'channel' ? 'c' : 'p';                                             // 6
					RoomManager.close(type + FlowRouter.getParam('name'));                                                            // 7
					var subscription = ChatSubscription.findOne({                                                                     // 9
						rid: msg.rid                                                                                                     // 9
					});                                                                                                               // 9
					var route = subscription.t === 'c' ? 'channel' : 'group';                                                         // 10
					FlowRouter.go(route, {                                                                                            // 11
						name: subscription.name                                                                                          // 11
					}, FlowRouter.current().queryParams);                                                                             // 11
				}                                                                                                                  // 12
			}                                                                                                                   // 13
		});                                                                                                                  // 14
		return msg;                                                                                                          // 16
	};                                                                                                                    // 17
                                                                                                                       //
	RocketChat.callbacks.add('streamMessage', roomSettingsChangedCallback, RocketChat.callbacks.priority.HIGH, 'room-settings-changed');
                                                                                                                       //
	var roomNameChangedCallback = function (msg) {                                                                        // 21
		Tracker.nonreactive(function () {                                                                                    // 22
			if (msg.t === 'r') {                                                                                                // 23
				if (Session.get('openedRoom') === msg.rid) {                                                                       // 24
					var type = FlowRouter.current().route.name === 'channel' ? 'c' : 'p';                                             // 25
					RoomManager.close(type + FlowRouter.getParam('name'));                                                            // 26
					FlowRouter.go(FlowRouter.current().route.name, {                                                                  // 27
						name: msg.msg                                                                                                    // 27
					}, FlowRouter.current().queryParams);                                                                             // 27
				}                                                                                                                  // 28
			}                                                                                                                   // 29
		});                                                                                                                  // 30
		return msg;                                                                                                          // 32
	};                                                                                                                    // 33
                                                                                                                       //
	RocketChat.callbacks.add('streamMessage', roomNameChangedCallback, RocketChat.callbacks.priority.HIGH, 'room-name-changed');
});                                                                                                                    // 36
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"views":{"template.channelSettings.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_channel-settings/client/views/template.channelSettings.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("channelSettings");                                                                               // 2
Template["channelSettings"] = new Template("Template.channelSettings", (function() {                                   // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "content"                                                                                                   // 6
  }, "\n\t\t", HTML.DIV({                                                                                              // 7
    class: "list-view channel-settings"                                                                                // 8
  }, "\n\t\t\t", HTML.DIV({                                                                                            // 9
    class: "title"                                                                                                     // 10
  }, "\n\t\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                                                         // 11
    return Spacebars.mustache(view.lookup("_"), "Room_Info");                                                          // 12
  })), "\n\t\t\t"), "\n\t\t\t", HTML.FORM("\n\t\t\t\t", HTML.UL({                                                      // 13
    class: "list clearfix"                                                                                             // 14
  }, "\n\t\t\t\t\t", Blaze.Let({                                                                                       // 15
    room: function() {                                                                                                 // 16
      return Spacebars.call(view.lookup("getRoom"));                                                                   // 17
    }                                                                                                                  // 18
  }, function() {                                                                                                      // 19
    return [ "\n\t\t\t\t\t\t", Blaze.Each(function() {                                                                 // 20
      return Spacebars.dataMustache(view.lookup("toArray"), view.lookup("settings"));                                  // 21
    }, function() {                                                                                                    // 22
      return [ "\n\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                             // 23
        return Spacebars.dataMustache(Spacebars.dot(view.lookup("$value"), "canView"), view.lookup("room"));           // 24
      }, function() {                                                                                                  // 25
        return [ "\n\t\t\t\t\t\t\t\t", Blaze.Let({                                                                     // 26
          value: function() {                                                                                          // 27
            return Spacebars.call(Spacebars.dataMustache(view.lookup("valueOf"), view.lookup("room"), view.lookup("$key")));
          }                                                                                                            // 29
        }, function() {                                                                                                // 30
          return [ "\n\t\t\t\t\t\t\t\t\t", HTML.LI({                                                                   // 31
            class: function() {                                                                                        // 32
              return Spacebars.mustache(Spacebars.dot(view.lookup("$value"), "type"));                                 // 33
            }                                                                                                          // 34
          }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                  // 35
            return Spacebars.mustache(view.lookup("_"), Spacebars.dot(view.lookup("$value"), "label"));                // 36
          })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 37
            class: "setting-block"                                                                                     // 38
          }, "\n\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                         // 39
            return Spacebars.dataMustache(view.lookup("$eq"), Spacebars.dot(view.lookup("$value"), "type"), "text");   // 40
          }, function() {                                                                                              // 41
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                               // 42
              return Spacebars.dataMustache(view.lookup("editing"), view.lookup("$key"));                              // 43
            }, function() {                                                                                            // 44
              return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                           // 45
                return Spacebars.dataMustache(Spacebars.dot(view.lookup("$value"), "canEdit"), view.lookup("room"));   // 46
              }, function() {                                                                                          // 47
                return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                                // 48
                  type: "text",                                                                                        // 49
                  name: function() {                                                                                   // 50
                    return Spacebars.mustache(view.lookup("$key"));                                                    // 51
                  },                                                                                                   // 52
                  value: function() {                                                                                  // 53
                    return Spacebars.mustache(view.lookup("value"));                                                   // 54
                  },                                                                                                   // 55
                  class: "content-background-color editing"                                                            // 56
                }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                  // 57
              }), "\n\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                      // 58
            }, function() {                                                                                            // 59
              return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.SPAN({                                                     // 60
                class: "current-setting",                                                                              // 61
                "data-edit": function() {                                                                              // 62
                  return Blaze.If(function() {                                                                         // 63
                    return Spacebars.dataMustache(Spacebars.dot(view.lookup("$value"), "canEdit"), view.lookup("room"));
                  }, function() {                                                                                      // 65
                    return Blaze.View("lookup:$key", function() {                                                      // 66
                      return Spacebars.mustache(view.lookup("$key"));                                                  // 67
                    });                                                                                                // 68
                  }, function() {                                                                                      // 69
                    return "false";                                                                                    // 70
                  });                                                                                                  // 71
                }                                                                                                      // 72
              }, Blaze.View("lookup:value", function() {                                                               // 73
                return Spacebars.mustache(view.lookup("value"));                                                       // 74
              })), "\n\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                     // 75
            }), "\n\t\t\t\t\t\t\t\t\t\t\t" ];                                                                          // 76
          }), "\n\n\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                      // 77
            return Spacebars.dataMustache(view.lookup("$eq"), Spacebars.dot(view.lookup("$value"), "type"), "markdown");
          }, function() {                                                                                              // 79
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                               // 80
              return Spacebars.dataMustache(view.lookup("editing"), view.lookup("$key"));                              // 81
            }, function() {                                                                                            // 82
              return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                           // 83
                return Spacebars.dataMustache(Spacebars.dot(view.lookup("$value"), "canEdit"), view.lookup("room"));   // 84
              }, function() {                                                                                          // 85
                return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                                // 86
                  type: "text",                                                                                        // 87
                  name: function() {                                                                                   // 88
                    return Spacebars.mustache(view.lookup("$key"));                                                    // 89
                  },                                                                                                   // 90
                  value: function() {                                                                                  // 91
                    return Spacebars.mustache(view.lookup("unscape"), view.lookup("value"));                           // 92
                  },                                                                                                   // 93
                  class: "content-background-color editing"                                                            // 94
                }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                  // 95
              }), "\n\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                      // 96
            }, function() {                                                                                            // 97
              return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.SPAN({                                                     // 98
                class: "current-setting",                                                                              // 99
                "data-edit": function() {                                                                              // 100
                  return Blaze.If(function() {                                                                         // 101
                    return Spacebars.dataMustache(Spacebars.dot(view.lookup("$value"), "canEdit"), view.lookup("room"));
                  }, function() {                                                                                      // 103
                    return Blaze.View("lookup:$key", function() {                                                      // 104
                      return Spacebars.mustache(view.lookup("$key"));                                                  // 105
                    });                                                                                                // 106
                  }, function() {                                                                                      // 107
                    return "false";                                                                                    // 108
                  });                                                                                                  // 109
                }                                                                                                      // 110
              }, Blaze.View("lookup:RocketChatMarkdown", function() {                                                  // 111
                return Spacebars.makeRaw(Spacebars.mustache(view.lookup("RocketChatMarkdown"), view.lookup("value")));
              })), "\n\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                     // 113
            }), "\n\t\t\t\t\t\t\t\t\t\t\t" ];                                                                          // 114
          }), "\n\n\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                      // 115
            return Spacebars.dataMustache(view.lookup("$eq"), Spacebars.dot(view.lookup("$value"), "type"), "select");
          }, function() {                                                                                              // 117
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.Each(function() {                                             // 118
              return Spacebars.dataMustache(view.lookup("toArray"), Spacebars.dot(view.lookup("$value"), "options"));  // 119
            }, function() {                                                                                            // 120
              return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                      // 121
                class: "input radio"                                                                                   // 122
              }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                                        // 123
                type: "radio",                                                                                         // 124
                id: function() {                                                                                       // 125
                  return Spacebars.mustache(view.lookup("$key"));                                                      // 126
                },                                                                                                     // 127
                name: function() {                                                                                     // 128
                  return Spacebars.mustache(Spacebars.dot(view.lookup(".."), "$key"));                                 // 129
                },                                                                                                     // 130
                value: function() {                                                                                    // 131
                  return Spacebars.mustache(view.lookup("$key"));                                                      // 132
                },                                                                                                     // 133
                checked: function() {                                                                                  // 134
                  return Spacebars.mustache(view.lookup("$eq"), view.lookup("value"), view.lookup("$key"));            // 135
                },                                                                                                     // 136
                disabled: function() {                                                                                 // 137
                  return Spacebars.mustache(view.lookup("isDisabled"), view.lookup("$key"), view.lookup("room"));      // 138
                }                                                                                                      // 139
              }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.LABEL({                                                       // 140
                for: function() {                                                                                      // 141
                  return Spacebars.mustache(view.lookup("$key"));                                                      // 142
                }                                                                                                      // 143
              }, Blaze.View("lookup:_", function() {                                                                   // 144
                return Spacebars.mustache(view.lookup("_"), view.lookup("$value"));                                    // 145
              })), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t" ];                                    // 146
            }), "\n\t\t\t\t\t\t\t\t\t\t\t" ];                                                                          // 147
          }), "\n\n\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                      // 148
            return Spacebars.dataMustache(view.lookup("$eq"), Spacebars.dot(view.lookup("$value"), "type"), "boolean");
          }, function() {                                                                                              // 150
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                          // 151
              class: "input checkbox toggle"                                                                           // 152
            }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                                            // 153
              type: "checkbox",                                                                                        // 154
              id: function() {                                                                                         // 155
                return Spacebars.mustache(view.lookup("$key"));                                                        // 156
              },                                                                                                       // 157
              name: function() {                                                                                       // 158
                return Spacebars.mustache(view.lookup("$key"));                                                        // 159
              },                                                                                                       // 160
              value: function() {                                                                                      // 161
                return Spacebars.mustache(view.lookup("value"));                                                       // 162
              },                                                                                                       // 163
              checked: function() {                                                                                    // 164
                return Spacebars.mustache(view.lookup("$eq"), view.lookup("value"), true);                             // 165
              },                                                                                                       // 166
              disabled: function() {                                                                                   // 167
                return Spacebars.mustache(view.lookup("isDisabled"), view.lookup("$key"), view.lookup("room"));        // 168
              }                                                                                                        // 169
            }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.LABEL({                                                           // 170
              for: function() {                                                                                        // 171
                return Spacebars.mustache(view.lookup("$key"));                                                        // 172
              }                                                                                                        // 173
            }), "\n\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                     // 174
              return Spacebars.dataMustache(Spacebars.dot(view.lookup("$value"), "canEdit"), view.lookup("room"));     // 175
            }, function() {                                                                                            // 176
              return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                           // 177
                return Spacebars.call(Spacebars.dot(view.lookup("$value"), "processing", "get"));                      // 178
              }, function() {                                                                                          // 179
                return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", Spacebars.include(view.lookupTemplate("loading")), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t" ];
              }), "\n\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                      // 181
            }), "\n\t\t\t\t\t\t\t\t\t\t\t" ];                                                                          // 182
          }), "\n\n\t\t\t\t\t\t\t\t\t\t\t", Blaze.Unless(function() {                                                  // 183
            return Spacebars.call(Spacebars.dot(view.lookup("$value"), "isToggle"));                                   // 184
          }, function() {                                                                                              // 185
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                               // 186
              return Spacebars.dataMustache(Spacebars.dot(view.lookup("$value"), "canEdit"), view.lookup("room"));     // 187
            }, function() {                                                                                            // 188
              return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                           // 189
                return Spacebars.dataMustache(view.lookup("editing"), view.lookup("$key"));                            // 190
              }, function() {                                                                                          // 191
                return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                  // 192
                  class: "buttons secondary-background-color"                                                          // 193
                }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                   // 194
                  type: "button",                                                                                      // 195
                  class: "button cancel"                                                                               // 196
                }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.I({                                                      // 197
                  class: "icon-cancel"                                                                                 // 198
                }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({             // 199
                  type: "button",                                                                                      // 200
                  class: "button primary save"                                                                         // 201
                }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.I({                                                      // 202
                  class: "icon-ok success-color"                                                                       // 203
                }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t" ];
              }, function() {                                                                                          // 205
                return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                               // 206
                  type: "button",                                                                                      // 207
                  class: "button edit"                                                                                 // 208
                }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.I({                                                        // 209
                  class: "icon-pencil",                                                                                // 210
                  "data-edit": function() {                                                                            // 211
                    return Spacebars.mustache(view.lookup("$key"));                                                    // 212
                  }                                                                                                    // 213
                }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t" ];                               // 214
              }), "\n\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                      // 215
            }), "\n\t\t\t\t\t\t\t\t\t\t\t" ];                                                                          // 216
          }), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t", Blaze.If(function() {        // 217
            return Spacebars.dataMustache(view.lookup("has"), view.lookup("$value"), "message");                       // 218
          }, function() {                                                                                              // 219
            return [ "\n\t\t\t\t\t\t\t\t\t\t", Blaze.Let({                                                             // 220
              message: function() {                                                                                    // 221
                return Spacebars.call(Spacebars.dataMustache(Spacebars.dot(view.lookup("$value"), "message"), view.lookup("room")));
              }                                                                                                        // 223
            }, function() {                                                                                            // 224
              return [ "\n\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                               // 225
                return Spacebars.call(view.lookup("message"));                                                         // 226
              }, function() {                                                                                          // 227
                return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({              // 228
                  class: "alert alert-warning pending-background pending-border"                                       // 229
                }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                               // 230
                  return Spacebars.mustache(view.lookup("_"), view.lookup("message"));                                 // 231
                }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t" ];      // 232
              }), "\n\t\t\t\t\t\t\t\t\t\t" ];                                                                          // 233
            }), "\n\t\t\t\t\t\t\t\t\t" ];                                                                              // 234
          }), "\n\t\t\t\t\t\t\t\t" ];                                                                                  // 235
        }), "\n\t\t\t\t\t\t\t" ];                                                                                      // 236
      }), "\n\t\t\t\t\t\t" ];                                                                                          // 237
    }), "\n\t\t\t\t\t" ];                                                                                              // 238
  }), "\n\n\t\t\t\t\t", Blaze.Each(function() {                                                                        // 239
    return Spacebars.call(view.lookup("channelSettings"));                                                             // 240
  }, function() {                                                                                                      // 241
    return [ "\n\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                        // 242
      return {                                                                                                         // 243
        template: Spacebars.call(view.lookup("template")),                                                             // 244
        data: Spacebars.call(view.lookup("data"))                                                                      // 245
      };                                                                                                               // 246
    }, function() {                                                                                                    // 247
      return Spacebars.include(function() {                                                                            // 248
        return Spacebars.call(Template.__dynamic);                                                                     // 249
      });                                                                                                              // 250
    }), "\n\t\t\t\t\t" ];                                                                                              // 251
  }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t\t", Blaze.If(function() {                                                    // 252
    return Spacebars.call(view.lookup("canDeleteRoom"));                                                               // 253
  }, function() {                                                                                                      // 254
    return [ "\n\t\t\t\t", HTML.NAV("\n\t\t\t\t\t", HTML.BUTTON({                                                      // 255
      class: "button danger delete",                                                                                   // 256
      title: function() {                                                                                              // 257
        return Spacebars.mustache(view.lookup("_"), "Delete");                                                         // 258
      }                                                                                                                // 259
    }, HTML.I({                                                                                                        // 260
      class: "icon-trash"                                                                                              // 261
    })), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                                  // 262
  }), "\n\t\t"), "\n\t");                                                                                              // 263
}));                                                                                                                   // 264
                                                                                                                       // 265
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"channelSettings.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_channel-settings/client/views/channelSettings.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var toastr = void 0;                                                                                                   // 1
module.watch(require("toastr"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		toastr = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
Template.channelSettings.helpers({                                                                                     // 3
	toArray: function (obj) {                                                                                             // 4
		return Object.keys(obj).map(function (key) {                                                                         // 5
			return {                                                                                                            // 6
				$key: key,                                                                                                         // 7
				$value: obj[key]                                                                                                   // 8
			};                                                                                                                  // 6
		});                                                                                                                  // 10
	},                                                                                                                    // 11
	valueOf: function (obj, key) {                                                                                        // 12
		if (key === 't') {                                                                                                   // 13
			if (obj[key] === 'c') {                                                                                             // 14
				return false;                                                                                                      // 15
			}                                                                                                                   // 16
                                                                                                                       //
			return true;                                                                                                        // 17
		}                                                                                                                    // 18
                                                                                                                       //
		return obj && obj[key];                                                                                              // 19
	},                                                                                                                    // 20
	showSetting: function (setting, room) {                                                                               // 21
		if (setting.showInDirect === false) {                                                                                // 22
			return room.t !== 'd';                                                                                              // 23
		}                                                                                                                    // 24
                                                                                                                       //
		return true;                                                                                                         // 25
	},                                                                                                                    // 26
	settings: function () {                                                                                               // 27
		return Template.instance().settings;                                                                                 // 28
	},                                                                                                                    // 29
	getRoom: function () {                                                                                                // 30
		return ChatRoom.findOne(this.rid);                                                                                   // 31
	},                                                                                                                    // 32
	editing: function (field) {                                                                                           // 33
		return Template.instance().editing.get() === field;                                                                  // 34
	},                                                                                                                    // 35
	isDisabled: function (field, room) {                                                                                  // 36
		var setting = Template.instance().settings[field];                                                                   // 37
		return typeof setting.disabled === 'function' && setting.disabled(room) || setting.processing.get() || !RocketChat.authz.hasAllPermission('edit-room', room._id);
	},                                                                                                                    // 39
	channelSettings: function () {                                                                                        // 40
		return RocketChat.ChannelSettings.getOptions(Template.currentData(), 'room');                                        // 41
	},                                                                                                                    // 42
	unscape: function (value) {                                                                                           // 43
		return s.unescapeHTML(value);                                                                                        // 44
	},                                                                                                                    // 45
	canDeleteRoom: function () {                                                                                          // 46
		var room = ChatRoom.findOne(this.rid, {                                                                              // 47
			fields: {                                                                                                           // 48
				t: 1                                                                                                               // 49
			}                                                                                                                   // 48
		});                                                                                                                  // 47
		var roomType = room && room.t;                                                                                       // 52
		return roomType && RocketChat.authz.hasAtLeastOnePermission("delete-" + roomType, this.rid);                         // 53
	},                                                                                                                    // 54
	readOnly: function () {                                                                                               // 55
		var room = ChatRoom.findOne(this.rid, {                                                                              // 56
			fields: {                                                                                                           // 57
				ro: 1                                                                                                              // 58
			}                                                                                                                   // 57
		});                                                                                                                  // 56
		return room && room.ro;                                                                                              // 61
	},                                                                                                                    // 62
	has: function (v, key) {                                                                                              // 63
		return !!(v && v[key]);                                                                                              // 64
	},                                                                                                                    // 65
	readOnlyDescription: function () {                                                                                    // 66
		var room = ChatRoom.findOne(this.rid, {                                                                              // 67
			fields: {                                                                                                           // 68
				ro: 1                                                                                                              // 69
			}                                                                                                                   // 68
		});                                                                                                                  // 67
		return t(room && room.ro ? 'True' : 'False');                                                                        // 72
	}                                                                                                                     // 73
});                                                                                                                    // 3
Template.channelSettings.events({                                                                                      // 76
	'click .delete': function () {                                                                                        // 77
		var _this = this;                                                                                                    // 77
                                                                                                                       //
		return swal({                                                                                                        // 78
			title: t('Are_you_sure'),                                                                                           // 79
			text: t('Delete_Room_Warning'),                                                                                     // 80
			type: 'warning',                                                                                                    // 81
			showCancelButton: true,                                                                                             // 82
			confirmButtonColor: '#DD6B55',                                                                                      // 83
			confirmButtonText: t('Yes_delete_it'),                                                                              // 84
			cancelButtonText: t('Cancel'),                                                                                      // 85
			closeOnConfirm: false,                                                                                              // 86
			html: false                                                                                                         // 87
		}, function () {                                                                                                     // 78
			swal.disableButtons();                                                                                              // 89
			Meteor.call('eraseRoom', _this.rid, function (error) {                                                              // 90
				if (error) {                                                                                                       // 91
					handleError(error);                                                                                               // 92
					return swal.enableButtons();                                                                                      // 93
				}                                                                                                                  // 94
                                                                                                                       //
				swal({                                                                                                             // 95
					title: t('Deleted'),                                                                                              // 96
					text: t('Room_has_been_deleted'),                                                                                 // 97
					type: 'success',                                                                                                  // 98
					timer: 2000,                                                                                                      // 99
					showConfirmButton: false                                                                                          // 100
				});                                                                                                                // 95
			});                                                                                                                 // 102
		});                                                                                                                  // 103
	},                                                                                                                    // 104
	'keydown input[type=text]': function (e, t) {                                                                         // 105
		if (e.keyCode === 13) {                                                                                              // 106
			e.preventDefault();                                                                                                 // 107
			t.saveSetting();                                                                                                    // 108
		}                                                                                                                    // 109
	},                                                                                                                    // 110
	'click [data-edit]': function (e, t) {                                                                                // 111
		e.preventDefault();                                                                                                  // 112
                                                                                                                       //
		if ($(e.currentTarget).data('edit')) {                                                                               // 113
			t.editing.set($(e.currentTarget).data('edit'));                                                                     // 114
			return setTimeout(function () {                                                                                     // 115
				return t.$('input.editing').focus().select();                                                                      // 116
			}, 100);                                                                                                            // 117
		}                                                                                                                    // 118
	},                                                                                                                    // 119
	'change [type="radio"]': function (e, t) {                                                                            // 120
		return t.editing.set($(e.currentTarget).attr('name'));                                                               // 121
	},                                                                                                                    // 122
	'change [type="checkbox"]': function (e, t) {                                                                         // 123
		t.editing.set($(e.currentTarget).attr('name'));                                                                      // 124
		return t.saveSetting();                                                                                              // 125
	},                                                                                                                    // 126
	'click .cancel': function (e, t) {                                                                                    // 127
		e.preventDefault();                                                                                                  // 128
		return t.editing.set();                                                                                              // 129
	},                                                                                                                    // 130
	'click .save': function (e, t) {                                                                                      // 131
		e.preventDefault();                                                                                                  // 132
		return t.saveSetting();                                                                                              // 133
	}                                                                                                                     // 134
});                                                                                                                    // 76
Template.channelSettings.onCreated(function () {                                                                       // 137
	var _this5 = this;                                                                                                    // 137
                                                                                                                       //
	this.editing = new ReactiveVar();                                                                                     // 138
	this.settings = {                                                                                                     // 139
		name: {                                                                                                              // 140
			type: 'text',                                                                                                       // 141
			label: 'Name',                                                                                                      // 142
			canView: function (room) {                                                                                          // 143
				return room.t !== 'd';                                                                                             // 144
			},                                                                                                                  // 145
			canEdit: function (room) {                                                                                          // 146
				return RocketChat.authz.hasAllPermission('edit-room', room._id);                                                   // 147
			},                                                                                                                  // 148
			save: function (value, room) {                                                                                      // 149
				var nameValidation = void 0;                                                                                       // 150
                                                                                                                       //
				if (!RocketChat.authz.hasAllPermission('edit-room', room._id) || room.t !== 'c' && room.t !== 'p') {               // 151
					return toastr.error(t('error-not-allowed'));                                                                      // 152
				}                                                                                                                  // 153
                                                                                                                       //
				try {                                                                                                              // 154
					nameValidation = new RegExp("^" + RocketChat.settings.get('UTF8_Names_Validation') + "$");                        // 155
				} catch (error1) {                                                                                                 // 156
					nameValidation = new RegExp('^[0-9a-zA-Z-_.]+$');                                                                 // 157
				}                                                                                                                  // 158
                                                                                                                       //
				if (!nameValidation.test(value)) {                                                                                 // 159
					return toastr.error(t('error-invalid-room-name', {                                                                // 160
						room_name: {                                                                                                     // 161
							name: value                                                                                                     // 162
						}                                                                                                                // 161
					}));                                                                                                              // 160
				}                                                                                                                  // 165
                                                                                                                       //
				Meteor.call('saveRoomSettings', room._id, 'roomName', value, function (err) {                                      // 166
					if (err) {                                                                                                        // 167
						return handleError(err);                                                                                         // 168
					}                                                                                                                 // 169
                                                                                                                       //
					RocketChat.callbacks.run('roomNameChanged', {                                                                     // 170
						_id: room._id,                                                                                                   // 171
						name: value                                                                                                      // 172
					});                                                                                                               // 170
					return toastr.success(TAPi18n.__('Room_name_changed_successfully'));                                              // 174
				});                                                                                                                // 175
			}                                                                                                                   // 176
		},                                                                                                                   // 140
		topic: {                                                                                                             // 178
			type: 'markdown',                                                                                                   // 179
			label: 'Topic',                                                                                                     // 180
			canView: function () {                                                                                              // 181
				return true;                                                                                                       // 182
			},                                                                                                                  // 183
			canEdit: function (room) {                                                                                          // 184
				return RocketChat.authz.hasAllPermission('edit-room', room._id);                                                   // 185
			},                                                                                                                  // 186
			save: function (value, room) {                                                                                      // 187
				return Meteor.call('saveRoomSettings', room._id, 'roomTopic', value, function (err) {                              // 188
					if (err) {                                                                                                        // 189
						return handleError(err);                                                                                         // 190
					}                                                                                                                 // 191
                                                                                                                       //
					toastr.success(TAPi18n.__('Room_topic_changed_successfully'));                                                    // 192
					return RocketChat.callbacks.run('roomTopicChanged', room);                                                        // 193
				});                                                                                                                // 194
			}                                                                                                                   // 195
		},                                                                                                                   // 178
		announcement: {                                                                                                      // 197
			type: 'markdown',                                                                                                   // 198
			label: 'Announcement',                                                                                              // 199
			canView: function () {                                                                                              // 200
				return true;                                                                                                       // 201
			},                                                                                                                  // 202
			canEdit: function (room) {                                                                                          // 203
				return RocketChat.authz.hasAllPermission('edit-room', room._id);                                                   // 204
			},                                                                                                                  // 205
			save: function (value, room) {                                                                                      // 206
				return Meteor.call('saveRoomSettings', room._id, 'roomAnnouncement', value, function (err) {                       // 207
					if (err) {                                                                                                        // 208
						return handleError(err);                                                                                         // 209
					}                                                                                                                 // 210
                                                                                                                       //
					toastr.success(TAPi18n.__('Room_announcement_changed_successfully'));                                             // 211
					return RocketChat.callbacks.run('roomAnnouncementChanged', room);                                                 // 212
				});                                                                                                                // 213
			}                                                                                                                   // 214
		},                                                                                                                   // 197
		description: {                                                                                                       // 216
			type: 'text',                                                                                                       // 217
			label: 'Description',                                                                                               // 218
			canView: function (room) {                                                                                          // 219
				return room.t !== 'd';                                                                                             // 220
			},                                                                                                                  // 221
			canEdit: function (room) {                                                                                          // 222
				return RocketChat.authz.hasAllPermission('edit-room', room._id);                                                   // 223
			},                                                                                                                  // 224
			save: function (value, room) {                                                                                      // 225
				return Meteor.call('saveRoomSettings', room._id, 'roomDescription', value, function (err) {                        // 226
					if (err) {                                                                                                        // 227
						return handleError(err);                                                                                         // 228
					}                                                                                                                 // 229
                                                                                                                       //
					return toastr.success(TAPi18n.__('Room_description_changed_successfully'));                                       // 230
				});                                                                                                                // 231
			}                                                                                                                   // 232
		},                                                                                                                   // 216
		t: {                                                                                                                 // 234
			type: 'boolean',                                                                                                    // 235
			label: 'Private',                                                                                                   // 236
			isToggle: true,                                                                                                     // 237
			processing: new ReactiveVar(false),                                                                                 // 238
			disabled: function (room) {                                                                                         // 239
				return room['default'] && !RocketChat.authz.hasRole(Meteor.userId(), 'admin');                                     // 240
			},                                                                                                                  // 241
			message: function (room) {                                                                                          // 242
				if (RocketChat.authz.hasAllPermission('edit-room', room._id) && room['default']) {                                 // 243
					if (!RocketChat.authz.hasRole(Meteor.userId(), 'admin')) {                                                        // 244
						return 'Room_type_of_default_rooms_cant_be_changed';                                                             // 245
					}                                                                                                                 // 246
				}                                                                                                                  // 247
			},                                                                                                                  // 248
			canView: function (room) {                                                                                          // 249
				if (['c', 'p'].includes(room.t) === false) {                                                                       // 250
					return false;                                                                                                     // 251
				} else if (room.t === 'p' && !RocketChat.authz.hasAllPermission('create-c')) {                                     // 252
					return false;                                                                                                     // 253
				} else if (room.t === 'c' && !RocketChat.authz.hasAllPermission('create-p')) {                                     // 254
					return false;                                                                                                     // 255
				}                                                                                                                  // 256
                                                                                                                       //
				return true;                                                                                                       // 257
			},                                                                                                                  // 258
			canEdit: function (room) {                                                                                          // 259
				return RocketChat.authz.hasAllPermission('edit-room', room._id) && !room['default'] || RocketChat.authz.hasRole(Meteor.userId(), 'admin');
			},                                                                                                                  // 261
			save: function (value, room) {                                                                                      // 262
				var _this2 = this;                                                                                                 // 262
                                                                                                                       //
				var saveRoomSettings = function () {                                                                               // 263
					_this2.processing.set(true);                                                                                      // 264
                                                                                                                       //
					value = value ? 'p' : 'c';                                                                                        // 265
					RocketChat.callbacks.run('roomTypeChanged', room);                                                                // 266
					return Meteor.call('saveRoomSettings', room._id, 'roomType', value, function (err) {                              // 267
						if (err) {                                                                                                       // 268
							return handleError(err);                                                                                        // 269
						}                                                                                                                // 270
                                                                                                                       //
						_this2.processing.set(false);                                                                                    // 271
                                                                                                                       //
						return toastr.success(TAPi18n.__('Room_type_changed_successfully'));                                             // 272
					});                                                                                                               // 273
				};                                                                                                                 // 274
                                                                                                                       //
				if (room['default']) {                                                                                             // 275
					if (RocketChat.authz.hasRole(Meteor.userId(), 'admin')) {                                                         // 276
						swal({                                                                                                           // 277
							title: t('Room_default_change_to_private_will_be_default_no_more'),                                             // 278
							type: 'warning',                                                                                                // 279
							showCancelButton: true,                                                                                         // 280
							confirmButtonColor: '#DD6B55',                                                                                  // 281
							confirmButtonText: t('Yes'),                                                                                    // 282
							cancelButtonText: t('Cancel'),                                                                                  // 283
							closeOnConfirm: true,                                                                                           // 284
							html: false                                                                                                     // 285
						}, function (confirmed) {                                                                                        // 277
							if (confirmed) {                                                                                                // 287
								return saveRoomSettings();                                                                                     // 288
							}                                                                                                               // 289
						});                                                                                                              // 290
					}                                                                                                                 // 291
                                                                                                                       //
					return $('.channel-settings form [name=\'t\']').prop('checked', !!room.type === 'p');                             // 292
				} else {                                                                                                           // 293
					return saveRoomSettings();                                                                                        // 294
				}                                                                                                                  // 295
			}                                                                                                                   // 296
		},                                                                                                                   // 234
		ro: {                                                                                                                // 298
			type: 'boolean',                                                                                                    // 299
			label: 'Read_only',                                                                                                 // 300
			isToggle: true,                                                                                                     // 301
			processing: new ReactiveVar(false),                                                                                 // 302
			canView: function (room) {                                                                                          // 303
				return room.t !== 'd';                                                                                             // 304
			},                                                                                                                  // 305
			canEdit: function (room) {                                                                                          // 306
				return RocketChat.authz.hasAllPermission('set-readonly', room._id);                                                // 307
			},                                                                                                                  // 308
			save: function (value, room) {                                                                                      // 309
				var _this3 = this;                                                                                                 // 309
                                                                                                                       //
				this.processing.set(true);                                                                                         // 310
				return Meteor.call('saveRoomSettings', room._id, 'readOnly', value, function (err) {                               // 311
					if (err) {                                                                                                        // 312
						return handleError(err);                                                                                         // 313
					}                                                                                                                 // 314
                                                                                                                       //
					_this3.processing.set(false);                                                                                     // 315
                                                                                                                       //
					return toastr.success(TAPi18n.__('Read_only_changed_successfully'));                                              // 316
				});                                                                                                                // 317
			}                                                                                                                   // 318
		},                                                                                                                   // 298
		reactWhenReadOnly: {                                                                                                 // 320
			type: 'boolean',                                                                                                    // 321
			label: 'React_when_read_only',                                                                                      // 322
			isToggle: true,                                                                                                     // 323
			processing: new ReactiveVar(false),                                                                                 // 324
			canView: function (room) {                                                                                          // 325
				return room.t !== 'd' && room.ro;                                                                                  // 326
			},                                                                                                                  // 327
			canEdit: function (room) {                                                                                          // 328
				return RocketChat.authz.hasAllPermission('set-react-when-readonly', room._id);                                     // 329
			},                                                                                                                  // 330
			save: function (value, room) {                                                                                      // 331
				var _this4 = this;                                                                                                 // 331
                                                                                                                       //
				this.processing.set(true);                                                                                         // 332
				return Meteor.call('saveRoomSettings', room._id, 'reactWhenReadOnly', value, function (err) {                      // 333
					if (err) {                                                                                                        // 334
						return handleError(err);                                                                                         // 335
					}                                                                                                                 // 336
                                                                                                                       //
					_this4.processing.set(false);                                                                                     // 337
                                                                                                                       //
					return toastr.success(TAPi18n.__('React_when_read_only_changed_successfully'));                                   // 338
				});                                                                                                                // 339
			}                                                                                                                   // 340
		},                                                                                                                   // 320
		archived: {                                                                                                          // 342
			type: 'boolean',                                                                                                    // 343
			label: 'Room_archivation_state_true',                                                                               // 344
			isToggle: true,                                                                                                     // 345
			processing: new ReactiveVar(false),                                                                                 // 346
			canView: function (room) {                                                                                          // 347
				return room.t !== 'd';                                                                                             // 348
			},                                                                                                                  // 349
			canEdit: function (room) {                                                                                          // 350
				return RocketChat.authz.hasAtLeastOnePermission(['archive-room', 'unarchive-room'], room._id);                     // 351
			},                                                                                                                  // 352
			save: function (value, room) {                                                                                      // 353
				return swal({                                                                                                      // 354
					title: t('Are_you_sure'),                                                                                         // 355
					type: 'warning',                                                                                                  // 356
					showCancelButton: true,                                                                                           // 357
					confirmButtonColor: '#DD6B55',                                                                                    // 358
					confirmButtonText: value ? t('Yes_archive_it') : t('Yes_unarchive_it'),                                           // 359
					cancelButtonText: t('Cancel'),                                                                                    // 360
					closeOnConfirm: false,                                                                                            // 361
					html: false                                                                                                       // 362
				}, function (confirmed) {                                                                                          // 354
					swal.disableButtons();                                                                                            // 364
                                                                                                                       //
					if (confirmed) {                                                                                                  // 365
						var action = value ? 'archiveRoom' : 'unarchiveRoom';                                                            // 366
						return Meteor.call(action, room._id, function (err) {                                                            // 367
							if (err) {                                                                                                      // 368
								swal.enableButtons();                                                                                          // 369
								handleError(err);                                                                                              // 370
							}                                                                                                               // 371
                                                                                                                       //
							swal({                                                                                                          // 372
								title: value ? t('Room_archived') : t('Room_has_been_archived'),                                               // 373
								text: value ? t('Room_has_been_archived') : t('Room_has_been_unarchived'),                                     // 374
								type: 'success',                                                                                               // 375
								timer: 2000,                                                                                                   // 376
								showConfirmButton: false                                                                                       // 377
							});                                                                                                             // 372
							return RocketChat.callbacks.run(action, room);                                                                  // 379
						});                                                                                                              // 380
					} else {                                                                                                          // 381
						return $('.channel-settings form [name=\'archived\']').prop('checked', !!room.archived);                         // 382
					}                                                                                                                 // 383
				});                                                                                                                // 384
			}                                                                                                                   // 385
		},                                                                                                                   // 342
		joinCode: {                                                                                                          // 387
			type: 'text',                                                                                                       // 388
			label: 'Password',                                                                                                  // 389
			canView: function (room) {                                                                                          // 390
				return room.t === 'c' && RocketChat.authz.hasAllPermission('edit-room', room._id);                                 // 391
			},                                                                                                                  // 392
			canEdit: function (room) {                                                                                          // 393
				return RocketChat.authz.hasAllPermission('edit-room', room._id);                                                   // 394
			},                                                                                                                  // 395
			save: function (value, room) {                                                                                      // 396
				return Meteor.call('saveRoomSettings', room._id, 'joinCode', value, function (err) {                               // 397
					if (err) {                                                                                                        // 398
						return handleError(err);                                                                                         // 399
					}                                                                                                                 // 400
                                                                                                                       //
					toastr.success(TAPi18n.__('Room_password_changed_successfully'));                                                 // 401
					return RocketChat.callbacks.run('roomCodeChanged', room);                                                         // 402
				});                                                                                                                // 403
			}                                                                                                                   // 404
		}                                                                                                                    // 387
	};                                                                                                                    // 139
	return this.saveSetting = function () {                                                                               // 407
		var room = ChatRoom.findOne(_this5.data && _this5.data.rid);                                                         // 408
                                                                                                                       //
		var field = _this5.editing.get();                                                                                    // 409
                                                                                                                       //
		var value = void 0;                                                                                                  // 410
                                                                                                                       //
		if (_this5.settings[field].type === 'select') {                                                                      // 411
			value = _this5.$(".channel-settings form [name=" + field + "]:checked").val();                                      // 412
		} else if (_this5.settings[field].type === 'boolean') {                                                              // 413
			value = _this5.$(".channel-settings form [name=" + field + "]").is(':checked');                                     // 414
		} else {                                                                                                             // 415
			value = _this5.$(".channel-settings form [name=" + field + "]").val();                                              // 416
		}                                                                                                                    // 417
                                                                                                                       //
		if (value !== room[field]) {                                                                                         // 418
			_this5.settings[field].save(value, room);                                                                           // 419
		}                                                                                                                    // 420
                                                                                                                       //
		return _this5.editing.set();                                                                                         // 421
	};                                                                                                                    // 422
});                                                                                                                    // 423
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".less"
  ]
});
require("./node_modules/meteor/rocketchat:channel-settings/client/lib/ChannelSettings.js");
require("./node_modules/meteor/rocketchat:channel-settings/client/startup/messageTypes.js");
require("./node_modules/meteor/rocketchat:channel-settings/client/startup/tabBar.js");
require("./node_modules/meteor/rocketchat:channel-settings/client/startup/trackSettingsChange.js");
require("./node_modules/meteor/rocketchat:channel-settings/client/views/template.channelSettings.js");
require("./node_modules/meteor/rocketchat:channel-settings/client/views/channelSettings.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:channel-settings'] = {};

})();
