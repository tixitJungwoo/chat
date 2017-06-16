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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:videobridge":{"client":{"views":{"template.videoFlexTab.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/rocketchat_videobridge/client/views/template.videoFlexTab.js                                //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
                                                                                                        // 1
Template.__checkName("videoFlexTab");                                                                   // 2
Template["videoFlexTab"] = new Template("Template.videoFlexTab", (function() {                          // 3
  var view = this;                                                                                      // 4
  return HTML.DIV({                                                                                     // 5
    class: "content"                                                                                    // 6
  }, "\n\t\t", Blaze.If(function() {                                                                    // 7
    return Spacebars.call(view.lookup("openInNewWindow"));                                              // 8
  }, function() {                                                                                       // 9
    return [ "\n\t\t\t", HTML.DIV({                                                                     // 10
      class: "list-view"                                                                                // 11
    }, "\n\t\t\t\t", HTML.DIV({                                                                         // 12
      class: "title"                                                                                    // 13
    }, "\n\t\t\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                                      // 14
      return Spacebars.mustache(view.lookup("_"), "Video_Conference");                                  // 15
    })), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.P(Blaze.View("lookup:_", function() {                        // 16
      return Spacebars.mustache(view.lookup("_"), "Opened_in_a_new_window");                            // 17
    })), "\n\t\t\t"), "\n\t\t" ];                                                                       // 18
  }, function() {                                                                                       // 19
    return [ "\n\t\t\t", HTML.DIV({                                                                     // 20
      class: "video-chat"                                                                               // 21
    }, "\n\t\t\t\t", HTML.DIV({                                                                         // 22
      class: "main-video"                                                                               // 23
    }, "\n\t\t\t\t\t", HTML.DIV({                                                                       // 24
      class: "video-container"                                                                          // 25
    }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t" ];                                                         // 26
  }), "\n\t");                                                                                          // 27
}));                                                                                                    // 28
                                                                                                        // 29
//////////////////////////////////////////////////////////////////////////////////////////////////////////

},"videoFlexTab.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/rocketchat_videobridge/client/views/videoFlexTab.js                                         //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
/* globals JitsiMeetExternalAPI */ /* eslint new-cap: [2, {"capIsNewExceptions": ["MD5"]}] */Template.videoFlexTab.helpers({
	openInNewWindow: function () {                                                                         // 5
		if (Meteor.isCordova) {                                                                               // 6
			return true;                                                                                         // 7
		} else {                                                                                              // 8
			return RocketChat.settings.get('Jitsi_Open_New_Window');                                             // 9
		}                                                                                                     // 10
	}                                                                                                      // 11
});                                                                                                     // 4
Template.videoFlexTab.onCreated(function () {                                                           // 14
	this.tabBar = Template.currentData().tabBar;                                                           // 15
});                                                                                                     // 16
Template.videoFlexTab.onRendered(function () {                                                          // 18
	var _this = this;                                                                                      // 18
                                                                                                        //
	this.api = null;                                                                                       // 19
	var timeOut = null;                                                                                    // 21
	var width = 'auto';                                                                                    // 23
	var height = 500;                                                                                      // 24
	var configOverwrite = {                                                                                // 26
		desktopSharingChromeExtId: RocketChat.settings.get('Jitsi_Chrome_Extension')                          // 27
	};                                                                                                     // 26
	var interfaceConfigOverwrite = {};                                                                     // 29
	var jitsiRoomActive = null;                                                                            // 31
                                                                                                        //
	var closePanel = function () {                                                                         // 33
		// Reset things.  Should probably be handled better in closeFlex()                                    // 34
		$('.flex-tab').css('max-width', '');                                                                  // 35
		$('.main-content').css('right', '');                                                                  // 36
                                                                                                        //
		_this.tabBar.close();                                                                                 // 38
                                                                                                        //
		RocketChat.TabBar.updateButton('video', {                                                             // 40
			"class": ''                                                                                          // 40
		});                                                                                                   // 40
	};                                                                                                     // 41
                                                                                                        //
	this.timeout = null;                                                                                   // 43
	this.autorun(function () {                                                                             // 44
		if (RocketChat.settings.get('Jitsi_Enabled')) {                                                       // 45
			if (_this.tabBar.getState() === 'opened') {                                                          // 46
				var roomId = Session.get('openedRoom');                                                             // 47
				var domain = RocketChat.settings.get('Jitsi_Domain');                                               // 49
				var jitsiRoom = RocketChat.settings.get('Jitsi_URL_Room_Prefix') + CryptoJS.MD5(RocketChat.settings.get('uniqueID') + roomId).toString();
				var noSsl = RocketChat.settings.get('Jitsi_SSL') ? false : true;                                    // 51
                                                                                                        //
				if (jitsiRoomActive !== null && jitsiRoomActive !== jitsiRoom) {                                    // 53
					jitsiRoomActive = null;                                                                            // 54
					closePanel(); // Clean up and stop updating timeout.                                               // 56
                                                                                                        //
					Meteor.defer(function () {                                                                         // 59
						return _this.api && _this.api.dispose();                                                          // 59
					});                                                                                                // 59
                                                                                                        //
					if (timeOut) {                                                                                     // 60
						clearInterval(timeOut);                                                                           // 61
					}                                                                                                  // 62
				} else {                                                                                            // 63
					jitsiRoomActive = jitsiRoom;                                                                       // 64
					RocketChat.TabBar.updateButton('video', {                                                          // 66
						"class": 'red'                                                                                    // 66
					});                                                                                                // 66
                                                                                                        //
					if (RocketChat.settings.get('Jitsi_Open_New_Window') || Meteor.isCordova) {                        // 68
						Meteor.call('jitsi:updateTimeout', roomId);                                                       // 69
						timeOut = Meteor.setInterval(function () {                                                        // 71
							return Meteor.call('jitsi:updateTimeout', roomId);                                               // 71
						}, 10 * 1000);                                                                                    // 71
						var newWindow = null;                                                                             // 72
                                                                                                        //
						if (Meteor.isCordova) {                                                                           // 73
							newWindow = window.open((noSsl ? 'http://' : 'https://') + domain + "/" + jitsiRoom, '_system');
							closePanel();                                                                                    // 75
							clearInterval(timeOut);                                                                          // 76
						} else {                                                                                          // 77
							newWindow = window.open((noSsl ? 'http://' : 'https://') + domain + "/" + jitsiRoom, jitsiRoom);
							var closeInterval = setInterval(function () {                                                    // 79
								if (newWindow.closed !== false) {                                                               // 80
									closePanel();                                                                                  // 81
									clearInterval(closeInterval);                                                                  // 82
									clearInterval(timeOut);                                                                        // 83
								}                                                                                               // 84
							}, 300);                                                                                         // 85
						}                                                                                                 // 86
                                                                                                        //
						if (newWindow) {                                                                                  // 87
							newWindow.focus();                                                                               // 88
						} // Lets make sure its loaded before we try to show it.                                          // 89
                                                                                                        //
					} else if (typeof JitsiMeetExternalAPI !== 'undefined') {                                          // 94
						// Keep it from showing duplicates when re-evaluated on variable change.                          // 96
						if (!$('[id^=jitsiConference]').length) {                                                         // 97
							_this.api = new JitsiMeetExternalAPI(domain, jitsiRoom, width, height, _this.$('.video-container').get(0), configOverwrite, interfaceConfigOverwrite, noSsl); /*
                                                                                                                                                                     * Hack to send after frame is loaded.
                                                                                                                                                                     * postMessage converts to events in the jitsi meet iframe.
                                                                                                                                                                     * For some reason those aren't working right.
                                                                                                                                                                     */
							Meteor.setTimeout(function () {                                                                  // 105
								_this.api.executeCommand('displayName', [Meteor.user().name]);                                  // 106
							}, 5000);                                                                                        // 107
							Meteor.call('jitsi:updateTimeout', roomId);                                                      // 109
							timeOut = Meteor.setInterval(function () {                                                       // 111
								return Meteor.call('jitsi:updateTimeout', roomId);                                              // 111
							}, 10 * 1000);                                                                                   // 111
						} // Execute any commands that might be reactive.  Like name changing.                            // 112
                                                                                                        //
                                                                                                        //
						_this.api && _this.api.executeCommand('displayName', [Meteor.user().name]);                       // 115
					}                                                                                                  // 116
				}                                                                                                   // 117
			} else {                                                                                             // 118
				RocketChat.TabBar.updateButton('video', {                                                           // 119
					"class": ''                                                                                        // 119
				}); // Clean up and stop updating timeout.                                                          // 119
                                                                                                        //
				if (timeOut) {                                                                                      // 122
					Meteor.defer(function () {                                                                         // 123
						return _this.api && _this.api.dispose();                                                          // 123
					});                                                                                                // 123
					clearInterval(timeOut);                                                                            // 124
				}                                                                                                   // 125
			}                                                                                                    // 126
		}                                                                                                     // 127
	});                                                                                                    // 128
});                                                                                                     // 129
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"tabBar.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/rocketchat_videobridge/client/tabBar.js                                                     //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
Meteor.startup(function () {                                                                            // 1
	Tracker.autorun(function () {                                                                          // 2
		if (RocketChat.settings.get('Jitsi_Enabled')) {                                                       // 3
			RocketChat.TabBar.addButton({                                                                        // 4
				groups: ['direct', 'group'],                                                                        // 5
				id: 'video',                                                                                        // 6
				i18nTitle: 'Video Chat',                                                                            // 7
				icon: 'icon-videocam',                                                                              // 8
				iconColor: 'red',                                                                                   // 9
				template: 'videoFlexTab',                                                                           // 10
				width: 600,                                                                                         // 11
				order: 12                                                                                           // 12
			});                                                                                                  // 4
		} else {                                                                                              // 14
			RocketChat.TabBar.removeButton('video');                                                             // 15
		}                                                                                                     // 16
	});                                                                                                    // 17
	Tracker.autorun(function () {                                                                          // 19
		if (RocketChat.settings.get('Jitsi_Enabled') && RocketChat.settings.get('Jitsi_Enable_Channels')) {   // 20
			RocketChat.TabBar.addGroup('video', ['channel']);                                                    // 21
		} else {                                                                                              // 22
			RocketChat.TabBar.removeGroup('video', ['channel']);                                                 // 23
		}                                                                                                     // 24
	});                                                                                                    // 25
	Tracker.autorun(function () {                                                                          // 27
		if (RocketChat.settings.get('Jitsi_Enabled')) {                                                       // 28
			// Load from the jitsi meet instance.                                                                // 29
			if (typeof JitsiMeetExternalAPI === 'undefined') {                                                   // 30
				var prefix = __meteor_runtime_config__.ROOT_URL_PATH_PREFIX || '';                                  // 31
				$.getScript(prefix + "/packages/rocketchat_videobridge/client/public/external_api.js");             // 32
			} // Compare current time to call started timeout.  If its past then call is probably over.          // 33
                                                                                                        //
                                                                                                        //
			if (Session.get('openedRoom')) {                                                                     // 36
				var rid = Session.get('openedRoom');                                                                // 37
				var room = RocketChat.models.Rooms.findOne({                                                        // 39
					_id: rid                                                                                           // 39
				});                                                                                                 // 39
				var currentTime = new Date().getTime();                                                             // 40
				var jitsiTimeout = new Date(room && room.jitsiTimeout || currentTime).getTime();                    // 41
                                                                                                        //
				if (jitsiTimeout > currentTime) {                                                                   // 43
					RocketChat.TabBar.updateButton('video', {                                                          // 44
						"class": 'attention'                                                                              // 44
					});                                                                                                // 44
				} else {                                                                                            // 45
					RocketChat.TabBar.updateButton('video', {                                                          // 46
						"class": ''                                                                                       // 46
					});                                                                                                // 46
				}                                                                                                   // 47
			}                                                                                                    // 48
		}                                                                                                     // 49
	});                                                                                                    // 50
});                                                                                                     // 51
//////////////////////////////////////////////////////////////////////////////////////////////////////////

},"actionLink.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/rocketchat_videobridge/client/actionLink.js                                                 //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
var toastr = void 0;                                                                                    // 1
module.watch(require("toastr"), {                                                                       // 1
	"default": function (v) {                                                                              // 1
		toastr = v;                                                                                           // 1
	}                                                                                                      // 1
}, 0);                                                                                                  // 1
RocketChat.actionLinks.register('joinJitsiCall', function (message, params, instance) {                 // 2
	if (Session.get('openedRoom')) {                                                                       // 3
		var rid = Session.get('openedRoom');                                                                  // 4
		var room = RocketChat.models.Rooms.findOne({                                                          // 6
			_id: rid                                                                                             // 6
		});                                                                                                   // 6
		var currentTime = new Date().getTime();                                                               // 7
		var jitsiTimeout = new Date(room && room.jitsiTimeout || currentTime).getTime();                      // 8
                                                                                                        //
		if (jitsiTimeout > currentTime) {                                                                     // 10
			instance.tabBar.open('video');                                                                       // 11
		} else {                                                                                              // 12
			toastr.info(TAPi18n.__('Call Already Ended', ''));                                                   // 13
		}                                                                                                     // 14
	}                                                                                                      // 15
});                                                                                                     // 16
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"messageType.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/rocketchat_videobridge/lib/messageType.js                                                   //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
Meteor.startup(function () {                                                                            // 1
	RocketChat.MessageTypes.registerType({                                                                 // 2
		id: 'jitsi_call_started',                                                                             // 3
		system: true,                                                                                         // 4
		message: 'Started a Video Call!'                                                                      // 5
	});                                                                                                    // 2
});                                                                                                     // 7
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".less",
    ".html"
  ]
});
require("./node_modules/meteor/rocketchat:videobridge/client/views/template.videoFlexTab.js");
require("./node_modules/meteor/rocketchat:videobridge/client/views/videoFlexTab.js");
require("./node_modules/meteor/rocketchat:videobridge/client/tabBar.js");
require("./node_modules/meteor/rocketchat:videobridge/client/actionLink.js");
require("./node_modules/meteor/rocketchat:videobridge/lib/messageType.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:videobridge'] = {};

})();
