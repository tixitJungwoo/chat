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
var Template = Package['templating-runtime'].Template;
var _ = Package.underscore._;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var Injected = Package['meteorhacks:inject-initial'].Injected;
var Inject = Package['meteorhacks:inject-initial'].Inject;
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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:ui-master":{"client":{"template.main.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-master/client/template.main.js                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.body.addContent((function() {                                                                                // 2
  var view = this;                                                                                                    // 3
  return "";                                                                                                          // 4
}));                                                                                                                  // 5
Meteor.startup(Template.body.renderToDocument);                                                                       // 6
                                                                                                                      // 7
Template.__checkName("main");                                                                                         // 8
Template["main"] = new Template("Template.main", (function() {                                                        // 9
  var view = this;                                                                                                    // 10
  return Blaze.If(function() {                                                                                        // 11
    return Spacebars.call(view.lookup("subsReady"));                                                                  // 12
  }, function() {                                                                                                     // 13
    return [ "\n\t\t", Blaze.Unless(function() {                                                                      // 14
      return Spacebars.call(view.lookup("logged"));                                                                   // 15
    }, function() {                                                                                                   // 16
      return [ "\n\t\t\t", HTML.DIV({                                                                                 // 17
        class: "connection-status"                                                                                    // 18
      }, "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("status")), "\n\t\t\t"), "\n\t\t\t", Blaze.If(function() {
        return Spacebars.call(view.lookup("useIframe"));                                                              // 20
      }, function() {                                                                                                 // 21
        return [ "\n\t\t\t\t", Blaze.If(function() {                                                                  // 22
          return Spacebars.call(view.lookup("iframeUrl"));                                                            // 23
        }, function() {                                                                                               // 24
          return [ "\n\t\t\t\t\t", HTML.IFRAME({                                                                      // 25
            src: function() {                                                                                         // 26
              return Spacebars.mustache(view.lookup("iframeUrl"));                                                    // 27
            },                                                                                                        // 28
            style: "height: 100%; width: 100%;"                                                                       // 29
          }), "\n\t\t\t\t" ];                                                                                         // 30
        }), "\n\t\t\t" ];                                                                                             // 31
      }, function() {                                                                                                 // 32
        return [ "\n\t\t\t\t", Blaze._TemplateWith(function() {                                                       // 33
          return {                                                                                                    // 34
            center: Spacebars.call("loginForm")                                                                       // 35
          };                                                                                                          // 36
        }, function() {                                                                                               // 37
          return Spacebars.include(view.lookupTemplate("loginLayout"));                                               // 38
        }), "\n\t\t\t" ];                                                                                             // 39
      }), "\n\t\t\t", Blaze.View("lookup:CustomScriptLoggedOut", function() {                                         // 40
        return Spacebars.mustache(view.lookup("CustomScriptLoggedOut"));                                              // 41
      }), "\n\t\t" ];                                                                                                 // 42
    }, function() {                                                                                                   // 43
      return [ "\n\t\t\t", Blaze.Unless(function() {                                                                  // 44
        return Spacebars.call(view.lookup("hasUsername"));                                                            // 45
      }, function() {                                                                                                 // 46
        return [ "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("username")), "\n\t\t\t" ];                      // 47
      }, function() {                                                                                                 // 48
        return [ "\n\t\t\t\t", Blaze.If(function() {                                                                  // 49
          return Spacebars.call(view.lookup("requirePasswordChange"));                                                // 50
        }, function() {                                                                                               // 51
          return [ "\n\t\t\t\t\t", Blaze._TemplateWith(function() {                                                   // 52
            return {                                                                                                  // 53
              center: Spacebars.call("resetPassword")                                                                 // 54
            };                                                                                                        // 55
          }, function() {                                                                                             // 56
            return Spacebars.include(view.lookupTemplate("loginLayout"));                                             // 57
          }), "\n\t\t\t\t" ];                                                                                         // 58
        }, function() {                                                                                               // 59
          return [ "\n\t\t\t\t\t", Blaze._TemplateWith(function() {                                                   // 60
            return {                                                                                                  // 61
              overlay: Spacebars.call(true)                                                                           // 62
            };                                                                                                        // 63
          }, function() {                                                                                             // 64
            return Spacebars.include(view.lookupTemplate("videoCall"));                                               // 65
          }), "\n\t\t\t\t\t", HTML.DIV({                                                                              // 66
            id: "user-card-popover"                                                                                   // 67
          }), "\n\t\t\t\t\t", HTML.DIV({                                                                              // 68
            id: "rocket-chat",                                                                                        // 69
            class: function() {                                                                                       // 70
              return [ Spacebars.mustache(view.lookup("embeddedVersion")), " menu-nav" ];                             // 71
            }                                                                                                         // 72
          }, "\n\t\t\t\t\t\t", HTML.DIV({                                                                             // 73
            class: "connection-status"                                                                                // 74
          }, "\n\t\t\t\t\t\t\t", Spacebars.include(view.lookupTemplate("status")), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({
            class: function() {                                                                                       // 76
              return [ "main-content content-background-color ", Blaze.If(function() {                                // 77
                return Spacebars.call(view.lookup("modal"));                                                          // 78
              }, function() {                                                                                         // 79
                return "main-modal";                                                                                  // 80
              }) ];                                                                                                   // 81
            }                                                                                                         // 82
          }, "\n\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                     // 83
            return {                                                                                                  // 84
              template: Spacebars.call(view.lookup("center"))                                                         // 85
            };                                                                                                        // 86
          }, function() {                                                                                             // 87
            return Spacebars.include(function() {                                                                     // 88
              return Spacebars.call(Template.__dynamic);                                                              // 89
            });                                                                                                       // 90
          }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", Blaze.Unless(function() {                                          // 91
            return Spacebars.call(view.lookup("modal"));                                                              // 92
          }, function() {                                                                                             // 93
            return [ "\n\t\t\t\t\t\t\t", Spacebars.include(view.lookupTemplate("sideNav")), "\n\t\t\t\t\t\t" ];       // 94
          }), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", Spacebars.include(view.lookupTemplate("audioNotification")), "\n\t\t\t\t" ];
        }), "\n\t\t\t" ];                                                                                             // 96
      }), "\n\t\t\t", Blaze.View("lookup:CustomScriptLoggedIn", function() {                                          // 97
        return Spacebars.mustache(view.lookup("CustomScriptLoggedIn"));                                               // 98
      }), "\n\t\t\t", Spacebars.include(view.lookupTemplate("photoswipe")), "\n\t\t" ];                               // 99
    }), "\n\t" ];                                                                                                     // 100
  }, function() {                                                                                                     // 101
    return [ "\n\t\t", Spacebars.include(view.lookupTemplate("loading")), "\n\t" ];                                   // 102
  });                                                                                                                 // 103
}));                                                                                                                  // 104
Meteor.startup(function() {                                                                                           // 105
  var attrs = {"class":"global-font-family color-primary-font-color"};                                                // 106
  for (var prop in attrs) {                                                                                           // 107
    document.body.setAttribute(prop, attrs[prop]);                                                                    // 108
  }                                                                                                                   // 109
});                                                                                                                   // 110
                                                                                                                      // 111
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.loading.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-master/client/template.loading.js                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("loading");                                                                                      // 2
Template["loading"] = new Template("Template.loading", (function() {                                                  // 3
  var view = this;                                                                                                    // 4
  return HTML.Raw('<div class="loading-animation">\n\t\t<div class="bounce1"></div>\n\t\t<div class="bounce2"></div>\n\t\t<div class="bounce3"></div>\n\t</div>');
}));                                                                                                                  // 6
                                                                                                                      // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.error.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-master/client/template.error.js                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("error");                                                                                        // 2
Template["error"] = new Template("Template.error", (function() {                                                      // 3
  var view = this;                                                                                                    // 4
  return HTML.SECTION({                                                                                               // 5
    class: "full-page color-tertiary-font-color"                                                                      // 6
  }, "\n\t\t", HTML.DIV({                                                                                             // 7
    class: "wrapper"                                                                                                  // 8
  }, "\n\t\t\t", HTML.Raw('<header>\n\t\t\t\t<a class="logo" href="/">\n\t\t\t\t\t<img src="images/logo/logo.svg?v=3">\n\t\t\t\t</a>\n\t\t\t</header>'), "\n\t\t\t", HTML.H1(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "Not_found_or_not_allowed");                                          // 10
  })), "\n\t\t"), "\n\t");                                                                                            // 11
}));                                                                                                                  // 12
                                                                                                                      // 13
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.logoLayout.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-master/client/template.logoLayout.js                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("logoLayout");                                                                                   // 2
Template["logoLayout"] = new Template("Template.logoLayout", (function() {                                            // 3
  var view = this;                                                                                                    // 4
  return HTML.SECTION({                                                                                               // 5
    class: "full-page color-tertiary-font-color"                                                                      // 6
  }, "\n\t\t", HTML.DIV({                                                                                             // 7
    class: "wrapper"                                                                                                  // 8
  }, "\n\t\t\t", HTML.Raw('<header>\n\t\t\t\t<a class="logo" href="/">\n\t\t\t\t\t<img src="images/logo/logo.svg?v=3">\n\t\t\t\t</a>\n\t\t\t</header>'), "\n\t\t\t", Blaze._TemplateWith(function() {
    return {                                                                                                          // 10
      template: Spacebars.call(view.lookup("render"))                                                                 // 11
    };                                                                                                                // 12
  }, function() {                                                                                                     // 13
    return Spacebars.include(function() {                                                                             // 14
      return Spacebars.call(Template.__dynamic);                                                                      // 15
    });                                                                                                               // 16
  }), "\n\t\t"), "\n\t");                                                                                             // 17
}));                                                                                                                  // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-master/client/main.js                                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");                                                 //
                                                                                                                      //
var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);                                                        //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                     //
                                                                                                                      //
var Clipboard = void 0;                                                                                               // 1
module.watch(require("clipboard"), {                                                                                  // 1
	"default": function (v) {                                                                                            // 1
		Clipboard = v;                                                                                                      // 1
	}                                                                                                                    // 1
}, 0);                                                                                                                // 1
Template.body.onRendered(function () {                                                                                // 4
	new Clipboard('.clipboard');                                                                                         // 5
	$(document.body).on('keydown', function (e) {                                                                        // 7
		if ((e.keyCode === 80 || e.keyCode === 75) && (e.ctrlKey === true || e.metaKey === true) && e.shiftKey === false) {
			e.preventDefault();                                                                                                // 9
			e.stopPropagation();                                                                                               // 10
			toolbarSearch.focus(true);                                                                                         // 11
		}                                                                                                                   // 12
                                                                                                                      //
		var unread = Session.get('unread');                                                                                 // 13
                                                                                                                      //
		if (e.keyCode === 27 && e.shiftKey === true && unread != null && unread !== '') {                                   // 14
			e.preventDefault();                                                                                                // 15
			e.stopPropagation();                                                                                               // 16
			return swal({                                                                                                      // 17
				title: t('Clear_all_unreads_question'),                                                                           // 18
				type: 'warning',                                                                                                  // 19
				confirmButtonText: t('Yes_clear_all'),                                                                            // 20
				showCancelButton: true,                                                                                           // 21
				cancelButtonText: t('Cancel'),                                                                                    // 22
				confirmButtonColor: '#DD6B55'                                                                                     // 23
			}, function () {                                                                                                   // 17
				var subscriptions = ChatSubscription.find({                                                                       // 25
					open: true                                                                                                       // 26
				}, {                                                                                                              // 25
					fields: {                                                                                                        // 28
						unread: 1,                                                                                                      // 29
						alert: 1,                                                                                                       // 30
						rid: 1,                                                                                                         // 31
						t: 1,                                                                                                           // 32
						name: 1,                                                                                                        // 33
						ls: 1                                                                                                           // 34
					}                                                                                                                // 28
				});                                                                                                               // 27
				subscriptions.forEach(function (subscription) {                                                                   // 38
					if (subscription.alert || subscription.unread > 0) {                                                             // 39
						Meteor.call('readMessages', subscription.rid);                                                                  // 40
					}                                                                                                                // 41
				});                                                                                                               // 42
			});                                                                                                                // 43
		}                                                                                                                   // 44
	});                                                                                                                  // 45
	$(document.body).on('keydown', function (e) {                                                                        // 47
		var target = e.target;                                                                                              // 48
                                                                                                                      //
		if (e.ctrlKey === true || e.metaKey === true) {                                                                     // 49
			return;                                                                                                            // 50
		}                                                                                                                   // 51
                                                                                                                      //
		if (!(e.keyCode > 45 && e.keyCode < 91 || e.keyCode === 8)) {                                                       // 52
			return;                                                                                                            // 53
		}                                                                                                                   // 54
                                                                                                                      //
		if (/input|textarea|select/i.test(target.tagName)) {                                                                // 55
			return;                                                                                                            // 56
		}                                                                                                                   // 57
                                                                                                                      //
		if (target.id === 'pswp') {                                                                                         // 58
			return;                                                                                                            // 59
		}                                                                                                                   // 60
                                                                                                                      //
		var inputMessage = $('textarea.input-message');                                                                     // 61
                                                                                                                      //
		if (inputMessage.length === 0) {                                                                                    // 62
			return;                                                                                                            // 63
		}                                                                                                                   // 64
                                                                                                                      //
		return inputMessage.focus();                                                                                        // 65
	});                                                                                                                  // 66
	$(document.body).on('click', 'a', function (e) {                                                                     // 67
		var link = e.currentTarget;                                                                                         // 68
                                                                                                                      //
		if (link.origin === s.rtrim(Meteor.absoluteUrl(), '/') && /msg=([a-zA-Z0-9]+)/.test(link.search)) {                 // 69
			e.preventDefault();                                                                                                // 70
			e.stopPropagation();                                                                                               // 71
                                                                                                                      //
			if (RocketChat.Layout.isEmbedded()) {                                                                              // 72
				return fireGlobalEvent('click-message-link', {                                                                    // 73
					link: link.pathname + link.search                                                                                // 74
				});                                                                                                               // 73
			}                                                                                                                  // 76
                                                                                                                      //
			return FlowRouter.go(link.pathname + link.search, null, FlowRouter.current().queryParams);                         // 77
		}                                                                                                                   // 78
	});                                                                                                                  // 79
	Tracker.autorun(function (c) {                                                                                       // 80
		var w = window;                                                                                                     // 81
		var d = document;                                                                                                   // 82
		var s = 'script';                                                                                                   // 83
		var l = 'dataLayer';                                                                                                // 84
		var i = RocketChat.settings.get('GoogleTagManager_id');                                                             // 85
                                                                                                                      //
		if (Match.test(i, String) && i.trim() !== '') {                                                                     // 86
			c.stop();                                                                                                          // 87
			return function (w, d, s, l, i) {                                                                                  // 88
				w[l] = w[l] || [];                                                                                                // 89
				w[l].push({                                                                                                       // 90
					'gtm.start': new Date().getTime(),                                                                               // 91
					event: 'gtm.js'                                                                                                  // 92
				});                                                                                                               // 90
				var f = d.getElementsByTagName(s)[0];                                                                             // 94
				var j = d.createElement(s);                                                                                       // 95
				var dl = l !== 'dataLayer' ? "&l=" + l : '';                                                                      // 96
				j.async = true;                                                                                                   // 97
				j.src = "//www.googletagmanager.com/gtm.js?id=" + i + dl;                                                         // 98
				return f.parentNode.insertBefore(j, f);                                                                           // 99
			}(w, d, s, l, i);                                                                                                  // 100
		}                                                                                                                   // 101
	});                                                                                                                  // 102
                                                                                                                      //
	if (Meteor.isCordova) {                                                                                              // 103
		return $(document.body).addClass('is-cordova');                                                                     // 104
	}                                                                                                                    // 105
});                                                                                                                   // 106
Template.main.helpers({                                                                                               // 108
	siteName: function () {                                                                                              // 109
		return RocketChat.settings.get('Site_Name');                                                                        // 110
	},                                                                                                                   // 111
	logged: function () {                                                                                                // 112
		if (Meteor.userId() != null || RocketChat.settings.get('Accounts_AllowAnonymousRead') === true && Session.get('forceLogin') !== true) {
			$('html').addClass('noscroll').removeClass('scroll');                                                              // 114
			return true;                                                                                                       // 115
		} else {                                                                                                            // 116
			$('html').addClass('scroll').removeClass('noscroll');                                                              // 117
			return false;                                                                                                      // 118
		}                                                                                                                   // 119
	},                                                                                                                   // 120
	useIframe: function () {                                                                                             // 121
		var iframeEnabled = typeof RocketChat.iframeLogin !== 'undefined';                                                  // 122
		return iframeEnabled && RocketChat.iframeLogin.reactiveEnabled.get();                                               // 123
	},                                                                                                                   // 124
	iframeUrl: function () {                                                                                             // 125
		var iframeEnabled = typeof RocketChat.iframeLogin !== 'undefined';                                                  // 126
		return iframeEnabled && RocketChat.iframeLogin.reactiveIframeUrl.get();                                             // 127
	},                                                                                                                   // 128
	subsReady: function () {                                                                                             // 129
		var routerReady = FlowRouter.subsReady('userData', 'activeUsers');                                                  // 130
		var subscriptionsReady = CachedChatSubscription.ready.get();                                                        // 131
		var ready = Meteor.userId() == null || routerReady && subscriptionsReady;                                           // 132
		RocketChat.CachedCollectionManager.syncEnabled = ready;                                                             // 133
		return ready;                                                                                                       // 134
	},                                                                                                                   // 135
	hasUsername: function () {                                                                                           // 136
		return Meteor.userId() != null && Meteor.user().username != null || Meteor.userId() == null && RocketChat.settings.get('Accounts_AllowAnonymousRead') === true;
	},                                                                                                                   // 138
	requirePasswordChange: function () {                                                                                 // 139
		var user = Meteor.user();                                                                                           // 140
		return user && user.requirePasswordChange === true;                                                                 // 141
	},                                                                                                                   // 142
	CustomScriptLoggedOut: function () {                                                                                 // 143
		var script = RocketChat.settings.get('Custom_Script_Logged_Out') || '';                                             // 144
                                                                                                                      //
		if (script.trim()) {                                                                                                // 145
			module.runSetters(eval(script)); //eslint-disable-line                                                             // 146
		}                                                                                                                   // 147
	},                                                                                                                   // 148
	CustomScriptLoggedIn: function () {                                                                                  // 149
		var script = RocketChat.settings.get('Custom_Script_Logged_In') || '';                                              // 150
                                                                                                                      //
		if (script.trim()) {                                                                                                // 151
			module.runSetters(eval(script)); //eslint-disable-line                                                             // 152
		}                                                                                                                   // 153
	},                                                                                                                   // 154
	embeddedVersion: function () {                                                                                       // 155
		if (RocketChat.Layout.isEmbedded()) {                                                                               // 156
			return 'embedded-view';                                                                                            // 157
		}                                                                                                                   // 158
	}                                                                                                                    // 159
});                                                                                                                   // 108
Template.main.events({                                                                                                // 162
	'click .burger': function () {                                                                                       // 163
		if (window.rocketDebug) {                                                                                           // 164
			console.log('room click .burger');                                                                                 // 165
		}                                                                                                                   // 166
                                                                                                                      //
		return menu.toggle();                                                                                               // 167
	},                                                                                                                   // 168
	'touchstart': function (e, t) {                                                                                      // 169
		if (document.body.clientWidth > 780) {                                                                              // 170
			return;                                                                                                            // 171
		}                                                                                                                   // 172
                                                                                                                      //
		t.touchstartX = undefined;                                                                                          // 173
		t.touchstartY = undefined;                                                                                          // 174
		t.movestarted = false;                                                                                              // 175
		t.blockmove = false;                                                                                                // 176
		t.isRtl = isRtl(localStorage.getItem('userLanguage'));                                                              // 177
                                                                                                                      //
		if ($(e.currentTarget).closest('.main-content').length > 0) {                                                       // 178
			t.touchstartX = e.originalEvent.touches[0].clientX;                                                                // 179
			t.touchstartY = e.originalEvent.touches[0].clientY;                                                                // 180
			t.mainContent = $('.main-content');                                                                                // 181
			return t.wrapper = $('.messages-box > .wrapper');                                                                  // 182
		}                                                                                                                   // 183
	},                                                                                                                   // 184
	'touchmove': function (e, t) {                                                                                       // 185
		if (t.touchstartX != null) {                                                                                        // 186
			var _e$originalEvent$touc = (0, _slicedToArray3.default)(e.originalEvent.touches, 1),                              // 186
			    touch = _e$originalEvent$touc[0];                                                                              // 186
                                                                                                                      //
			var diffX = touch.clientX - t.touchstartX;                                                                         // 188
			var diffY = touch.clientY - t.touchstartY;                                                                         // 189
			var absX = Math.abs(diffX);                                                                                        // 190
			var absY = Math.abs(diffY);                                                                                        // 191
                                                                                                                      //
			if (t.movestarted !== true && t.blockmove !== true && absY > 5) {                                                  // 192
				t.blockmove = true;                                                                                               // 193
			}                                                                                                                  // 194
                                                                                                                      //
			if (t.blockmove !== true && (t.movestarted === true || absX > 5)) {                                                // 195
				t.movestarted = true;                                                                                             // 196
                                                                                                                      //
				if (t.isRtl) {                                                                                                    // 197
					if (menu.isOpen()) {                                                                                             // 198
						t.diff = -260 + diffX;                                                                                          // 199
					} else {                                                                                                         // 200
						t.diff = diffX;                                                                                                 // 201
					}                                                                                                                // 202
                                                                                                                      //
					if (t.diff < -260) {                                                                                             // 203
						t.diff = -260;                                                                                                  // 204
					}                                                                                                                // 205
                                                                                                                      //
					if (t.diff > 0) {                                                                                                // 206
						t.diff = 0;                                                                                                     // 207
					}                                                                                                                // 208
				} else {                                                                                                          // 209
					if (menu.isOpen()) {                                                                                             // 210
						t.diff = 260 + diffX;                                                                                           // 211
					} else {                                                                                                         // 212
						t.diff = diffX;                                                                                                 // 213
					}                                                                                                                // 214
                                                                                                                      //
					if (t.diff > 260) {                                                                                              // 215
						t.diff = 260;                                                                                                   // 216
					}                                                                                                                // 217
                                                                                                                      //
					if (t.diff < 0) {                                                                                                // 218
						t.diff = 0;                                                                                                     // 219
					}                                                                                                                // 220
				}                                                                                                                 // 221
                                                                                                                      //
				t.mainContent.addClass('notransition');                                                                           // 222
				t.mainContent.css('transform', "translate(" + t.diff + "px)");                                                    // 223
				return t.wrapper.css('overflow', 'hidden');                                                                       // 224
			}                                                                                                                  // 225
		}                                                                                                                   // 226
	},                                                                                                                   // 227
	'touchend': function (e, t) {                                                                                        // 228
		if (t.movestarted === true) {                                                                                       // 229
			t.mainContent.removeClass('notransition');                                                                         // 230
			t.wrapper.css('overflow', '');                                                                                     // 231
                                                                                                                      //
			if (t.isRtl) {                                                                                                     // 232
				if (menu.isOpen()) {                                                                                              // 233
					if (t.diff >= -200) {                                                                                            // 234
						return menu.close();                                                                                            // 235
					} else {                                                                                                         // 236
						return menu.open();                                                                                             // 237
					}                                                                                                                // 238
				} else if (t.diff <= -60) {                                                                                       // 239
					return menu.open();                                                                                              // 240
				} else {                                                                                                          // 241
					return menu.close();                                                                                             // 242
				}                                                                                                                 // 243
			} else if (menu.isOpen()) {                                                                                        // 244
				if (t.diff >= 200) {                                                                                              // 245
					return menu.open();                                                                                              // 246
				} else {                                                                                                          // 247
					return menu.close();                                                                                             // 248
				}                                                                                                                 // 249
			} else if (t.diff >= 60) {                                                                                         // 250
				return menu.open();                                                                                               // 251
			} else {                                                                                                           // 252
				return menu.close();                                                                                              // 253
			}                                                                                                                  // 254
		}                                                                                                                   // 255
	}                                                                                                                    // 256
});                                                                                                                   // 162
Template.main.onRendered(function () {                                                                                // 259
	if (isRtl(localStorage.getItem('userLanguage'))) {                                                                   // 260
		$('html').addClass('rtl');                                                                                          // 261
	} else {                                                                                                             // 262
		$('html').removeClass('rtl');                                                                                       // 263
	}                                                                                                                    // 264
                                                                                                                      //
	$('#initial-page-loading').remove();                                                                                 // 265
	window.addEventListener('focus', function () {                                                                       // 266
		return Meteor.setTimeout(function () {                                                                              // 267
			if (!$(':focus').is('INPUT,TEXTAREA')) {                                                                           // 268
				return $('.input-message').focus();                                                                               // 269
			}                                                                                                                  // 270
		}, 100);                                                                                                            // 271
	});                                                                                                                  // 272
	return Tracker.autorun(function () {                                                                                 // 273
		swal.setDefaults({                                                                                                  // 274
			cancelButtonText: t('Cancel')                                                                                      // 275
		});                                                                                                                 // 274
		var user = Meteor.user();                                                                                           // 277
		var settings = user && user.settings;                                                                               // 278
		var prefs = settings && settings.preferences;                                                                       // 279
                                                                                                                      //
		if (prefs && prefs.hideUsernames != null) {                                                                         // 280
			$(document.body).on('mouseleave', 'button.thumb', function () {                                                    // 281
				return RocketChat.tooltip.hide();                                                                                 // 282
			});                                                                                                                // 283
			return $(document.body).on('mouseenter', 'button.thumb', function (e) {                                            // 284
				var avatarElem = $(e.currentTarget);                                                                              // 285
				var username = avatarElem.attr('data-username');                                                                  // 286
                                                                                                                      //
				if (username) {                                                                                                   // 287
					e.stopPropagation();                                                                                             // 288
					return RocketChat.tooltip.showElement($('<span>').text(username), avatarElem);                                   // 289
				}                                                                                                                 // 290
			});                                                                                                                // 291
		} else {                                                                                                            // 292
			$(document.body).off('mouseenter', 'button.thumb');                                                                // 293
			return $(document.body).off('mouseleave', 'button.thumb');                                                         // 294
		}                                                                                                                   // 295
	});                                                                                                                  // 296
});                                                                                                                   // 297
Meteor.startup(function () {                                                                                          // 299
	return fireGlobalEvent('startup', true);                                                                             // 300
});                                                                                                                   // 301
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"node_modules":{"clipboard":{"package.json":function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// .npm/package/node_modules/clipboard/package.json                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.name = "clipboard";                                                                                           // 1
exports.version = "1.5.12";                                                                                           // 2
exports.main = "lib/clipboard.js";                                                                                    // 3
                                                                                                                      // 4
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lib":{"clipboard.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// node_modules/meteor/rocketchat_ui-master/node_modules/clipboard/lib/clipboard.js                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
(function (global, factory) {                                                                                         // 1
    if (typeof define === "function" && define.amd) {                                                                 // 2
        define(['module', './clipboard-action', 'tiny-emitter', 'good-listener'], factory);                           // 3
    } else if (typeof exports !== "undefined") {                                                                      // 4
        factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));            // 5
    } else {                                                                                                          // 6
        var mod = {                                                                                                   // 7
            exports: {}                                                                                               // 8
        };                                                                                                            // 9
        factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);                                // 10
        global.clipboard = mod.exports;                                                                               // 11
    }                                                                                                                 // 12
})(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {                                           // 13
    'use strict';                                                                                                     // 14
                                                                                                                      // 15
    var _clipboardAction2 = _interopRequireDefault(_clipboardAction);                                                 // 16
                                                                                                                      // 17
    var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);                                                         // 18
                                                                                                                      // 19
    var _goodListener2 = _interopRequireDefault(_goodListener);                                                       // 20
                                                                                                                      // 21
    function _interopRequireDefault(obj) {                                                                            // 22
        return obj && obj.__esModule ? obj : {                                                                        // 23
            default: obj                                                                                              // 24
        };                                                                                                            // 25
    }                                                                                                                 // 26
                                                                                                                      // 27
    function _classCallCheck(instance, Constructor) {                                                                 // 28
        if (!(instance instanceof Constructor)) {                                                                     // 29
            throw new TypeError("Cannot call a class as a function");                                                 // 30
        }                                                                                                             // 31
    }                                                                                                                 // 32
                                                                                                                      // 33
    function _possibleConstructorReturn(self, call) {                                                                 // 34
        if (!self) {                                                                                                  // 35
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");                    // 36
        }                                                                                                             // 37
                                                                                                                      // 38
        return call && (typeof call === "object" || typeof call === "function") ? call : self;                        // 39
    }                                                                                                                 // 40
                                                                                                                      // 41
    function _inherits(subClass, superClass) {                                                                        // 42
        if (typeof superClass !== "function" && superClass !== null) {                                                // 43
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);      // 44
        }                                                                                                             // 45
                                                                                                                      // 46
        subClass.prototype = Object.create(superClass && superClass.prototype, {                                      // 47
            constructor: {                                                                                            // 48
                value: subClass,                                                                                      // 49
                enumerable: false,                                                                                    // 50
                writable: true,                                                                                       // 51
                configurable: true                                                                                    // 52
            }                                                                                                         // 53
        });                                                                                                           // 54
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }                                                                                                                 // 56
                                                                                                                      // 57
    var Clipboard = function (_Emitter) {                                                                             // 58
        _inherits(Clipboard, _Emitter);                                                                               // 59
                                                                                                                      // 60
        /**                                                                                                           // 61
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger                                                // 62
         * @param {Object} options                                                                                    // 63
         */                                                                                                           // 64
                                                                                                                      // 65
        function Clipboard(trigger, options) {                                                                        // 66
            _classCallCheck(this, Clipboard);                                                                         // 67
                                                                                                                      // 68
            var _this = _possibleConstructorReturn(this, _Emitter.call(this));                                        // 69
                                                                                                                      // 70
            _this.resolveOptions(options);                                                                            // 71
            _this.listenClick(trigger);                                                                               // 72
            return _this;                                                                                             // 73
        }                                                                                                             // 74
                                                                                                                      // 75
        /**                                                                                                           // 76
         * Defines if attributes would be resolved using internal setter functions                                    // 77
         * or custom functions that were passed in the constructor.                                                   // 78
         * @param {Object} options                                                                                    // 79
         */                                                                                                           // 80
                                                                                                                      // 81
                                                                                                                      // 82
        Clipboard.prototype.resolveOptions = function resolveOptions() {                                              // 83
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];                    // 84
                                                                                                                      // 85
            this.action = typeof options.action === 'function' ? options.action : this.defaultAction;                 // 86
            this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;                 // 87
            this.text = typeof options.text === 'function' ? options.text : this.defaultText;                         // 88
        };                                                                                                            // 89
                                                                                                                      // 90
        Clipboard.prototype.listenClick = function listenClick(trigger) {                                             // 91
            var _this2 = this;                                                                                        // 92
                                                                                                                      // 93
            this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {                              // 94
                return _this2.onClick(e);                                                                             // 95
            });                                                                                                       // 96
        };                                                                                                            // 97
                                                                                                                      // 98
        Clipboard.prototype.onClick = function onClick(e) {                                                           // 99
            var trigger = e.delegateTarget || e.currentTarget;                                                        // 100
                                                                                                                      // 101
            if (this.clipboardAction) {                                                                               // 102
                this.clipboardAction = null;                                                                          // 103
            }                                                                                                         // 104
                                                                                                                      // 105
            this.clipboardAction = new _clipboardAction2.default({                                                    // 106
                action: this.action(trigger),                                                                         // 107
                target: this.target(trigger),                                                                         // 108
                text: this.text(trigger),                                                                             // 109
                trigger: trigger,                                                                                     // 110
                emitter: this                                                                                         // 111
            });                                                                                                       // 112
        };                                                                                                            // 113
                                                                                                                      // 114
        Clipboard.prototype.defaultAction = function defaultAction(trigger) {                                         // 115
            return getAttributeValue('action', trigger);                                                              // 116
        };                                                                                                            // 117
                                                                                                                      // 118
        Clipboard.prototype.defaultTarget = function defaultTarget(trigger) {                                         // 119
            var selector = getAttributeValue('target', trigger);                                                      // 120
                                                                                                                      // 121
            if (selector) {                                                                                           // 122
                return document.querySelector(selector);                                                              // 123
            }                                                                                                         // 124
        };                                                                                                            // 125
                                                                                                                      // 126
        Clipboard.prototype.defaultText = function defaultText(trigger) {                                             // 127
            return getAttributeValue('text', trigger);                                                                // 128
        };                                                                                                            // 129
                                                                                                                      // 130
        Clipboard.prototype.destroy = function destroy() {                                                            // 131
            this.listener.destroy();                                                                                  // 132
                                                                                                                      // 133
            if (this.clipboardAction) {                                                                               // 134
                this.clipboardAction.destroy();                                                                       // 135
                this.clipboardAction = null;                                                                          // 136
            }                                                                                                         // 137
        };                                                                                                            // 138
                                                                                                                      // 139
        return Clipboard;                                                                                             // 140
    }(_tinyEmitter2.default);                                                                                         // 141
                                                                                                                      // 142
    /**                                                                                                               // 143
     * Helper function to retrieve attribute value.                                                                   // 144
     * @param {String} suffix                                                                                         // 145
     * @param {Element} element                                                                                       // 146
     */                                                                                                               // 147
    function getAttributeValue(suffix, element) {                                                                     // 148
        var attribute = 'data-clipboard-' + suffix;                                                                   // 149
                                                                                                                      // 150
        if (!element.hasAttribute(attribute)) {                                                                       // 151
            return;                                                                                                   // 152
        }                                                                                                             // 153
                                                                                                                      // 154
        return element.getAttribute(attribute);                                                                       // 155
    }                                                                                                                 // 156
                                                                                                                      // 157
    module.exports = Clipboard;                                                                                       // 158
});                                                                                                                   // 159
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"clipboard-action.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// node_modules/meteor/rocketchat_ui-master/node_modules/clipboard/lib/clipboard-action.js                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
(function (global, factory) {                                                                                         // 1
    if (typeof define === "function" && define.amd) {                                                                 // 2
        define(['module', 'select'], factory);                                                                        // 3
    } else if (typeof exports !== "undefined") {                                                                      // 4
        factory(module, require('select'));                                                                           // 5
    } else {                                                                                                          // 6
        var mod = {                                                                                                   // 7
            exports: {}                                                                                               // 8
        };                                                                                                            // 9
        factory(mod, global.select);                                                                                  // 10
        global.clipboardAction = mod.exports;                                                                         // 11
    }                                                                                                                 // 12
})(this, function (module, _select) {                                                                                 // 13
    'use strict';                                                                                                     // 14
                                                                                                                      // 15
    var _select2 = _interopRequireDefault(_select);                                                                   // 16
                                                                                                                      // 17
    function _interopRequireDefault(obj) {                                                                            // 18
        return obj && obj.__esModule ? obj : {                                                                        // 19
            default: obj                                                                                              // 20
        };                                                                                                            // 21
    }                                                                                                                 // 22
                                                                                                                      // 23
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {              // 24
        return typeof obj;                                                                                            // 25
    } : function (obj) {                                                                                              // 26
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;             // 27
    };                                                                                                                // 28
                                                                                                                      // 29
    function _classCallCheck(instance, Constructor) {                                                                 // 30
        if (!(instance instanceof Constructor)) {                                                                     // 31
            throw new TypeError("Cannot call a class as a function");                                                 // 32
        }                                                                                                             // 33
    }                                                                                                                 // 34
                                                                                                                      // 35
    var _createClass = function () {                                                                                  // 36
        function defineProperties(target, props) {                                                                    // 37
            for (var i = 0; i < props.length; i++) {                                                                  // 38
                var descriptor = props[i];                                                                            // 39
                descriptor.enumerable = descriptor.enumerable || false;                                               // 40
                descriptor.configurable = true;                                                                       // 41
                if ("value" in descriptor) descriptor.writable = true;                                                // 42
                Object.defineProperty(target, descriptor.key, descriptor);                                            // 43
            }                                                                                                         // 44
        }                                                                                                             // 45
                                                                                                                      // 46
        return function (Constructor, protoProps, staticProps) {                                                      // 47
            if (protoProps) defineProperties(Constructor.prototype, protoProps);                                      // 48
            if (staticProps) defineProperties(Constructor, staticProps);                                              // 49
            return Constructor;                                                                                       // 50
        };                                                                                                            // 51
    }();                                                                                                              // 52
                                                                                                                      // 53
    var ClipboardAction = function () {                                                                               // 54
        /**                                                                                                           // 55
         * @param {Object} options                                                                                    // 56
         */                                                                                                           // 57
                                                                                                                      // 58
        function ClipboardAction(options) {                                                                           // 59
            _classCallCheck(this, ClipboardAction);                                                                   // 60
                                                                                                                      // 61
            this.resolveOptions(options);                                                                             // 62
            this.initSelection();                                                                                     // 63
        }                                                                                                             // 64
                                                                                                                      // 65
        /**                                                                                                           // 66
         * Defines base properties passed from constructor.                                                           // 67
         * @param {Object} options                                                                                    // 68
         */                                                                                                           // 69
                                                                                                                      // 70
                                                                                                                      // 71
        ClipboardAction.prototype.resolveOptions = function resolveOptions() {                                        // 72
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];                    // 73
                                                                                                                      // 74
            this.action = options.action;                                                                             // 75
            this.emitter = options.emitter;                                                                           // 76
            this.target = options.target;                                                                             // 77
            this.text = options.text;                                                                                 // 78
            this.trigger = options.trigger;                                                                           // 79
                                                                                                                      // 80
            this.selectedText = '';                                                                                   // 81
        };                                                                                                            // 82
                                                                                                                      // 83
        ClipboardAction.prototype.initSelection = function initSelection() {                                          // 84
            if (this.text) {                                                                                          // 85
                this.selectFake();                                                                                    // 86
            } else if (this.target) {                                                                                 // 87
                this.selectTarget();                                                                                  // 88
            }                                                                                                         // 89
        };                                                                                                            // 90
                                                                                                                      // 91
        ClipboardAction.prototype.selectFake = function selectFake() {                                                // 92
            var _this = this;                                                                                         // 93
                                                                                                                      // 94
            var isRTL = document.documentElement.getAttribute('dir') == 'rtl';                                        // 95
                                                                                                                      // 96
            this.removeFake();                                                                                        // 97
                                                                                                                      // 98
            this.fakeHandlerCallback = function () {                                                                  // 99
                return _this.removeFake();                                                                            // 100
            };                                                                                                        // 101
            this.fakeHandler = document.body.addEventListener('click', this.fakeHandlerCallback) || true;             // 102
                                                                                                                      // 103
            this.fakeElem = document.createElement('textarea');                                                       // 104
            // Prevent zooming on iOS                                                                                 // 105
            this.fakeElem.style.fontSize = '12pt';                                                                    // 106
            // Reset box model                                                                                        // 107
            this.fakeElem.style.border = '0';                                                                         // 108
            this.fakeElem.style.padding = '0';                                                                        // 109
            this.fakeElem.style.margin = '0';                                                                         // 110
            // Move element out of screen horizontally                                                                // 111
            this.fakeElem.style.position = 'absolute';                                                                // 112
            this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';                                                // 113
            // Move element to the same position vertically                                                           // 114
            this.fakeElem.style.top = (window.pageYOffset || document.documentElement.scrollTop) + 'px';              // 115
            this.fakeElem.setAttribute('readonly', '');                                                               // 116
            this.fakeElem.value = this.text;                                                                          // 117
                                                                                                                      // 118
            document.body.appendChild(this.fakeElem);                                                                 // 119
                                                                                                                      // 120
            this.selectedText = (0, _select2.default)(this.fakeElem);                                                 // 121
            this.copyText();                                                                                          // 122
        };                                                                                                            // 123
                                                                                                                      // 124
        ClipboardAction.prototype.removeFake = function removeFake() {                                                // 125
            if (this.fakeHandler) {                                                                                   // 126
                document.body.removeEventListener('click', this.fakeHandlerCallback);                                 // 127
                this.fakeHandler = null;                                                                              // 128
                this.fakeHandlerCallback = null;                                                                      // 129
            }                                                                                                         // 130
                                                                                                                      // 131
            if (this.fakeElem) {                                                                                      // 132
                document.body.removeChild(this.fakeElem);                                                             // 133
                this.fakeElem = null;                                                                                 // 134
            }                                                                                                         // 135
        };                                                                                                            // 136
                                                                                                                      // 137
        ClipboardAction.prototype.selectTarget = function selectTarget() {                                            // 138
            this.selectedText = (0, _select2.default)(this.target);                                                   // 139
            this.copyText();                                                                                          // 140
        };                                                                                                            // 141
                                                                                                                      // 142
        ClipboardAction.prototype.copyText = function copyText() {                                                    // 143
            var succeeded = undefined;                                                                                // 144
                                                                                                                      // 145
            try {                                                                                                     // 146
                succeeded = document.execCommand(this.action);                                                        // 147
            } catch (err) {                                                                                           // 148
                succeeded = false;                                                                                    // 149
            }                                                                                                         // 150
                                                                                                                      // 151
            this.handleResult(succeeded);                                                                             // 152
        };                                                                                                            // 153
                                                                                                                      // 154
        ClipboardAction.prototype.handleResult = function handleResult(succeeded) {                                   // 155
            if (succeeded) {                                                                                          // 156
                this.emitter.emit('success', {                                                                        // 157
                    action: this.action,                                                                              // 158
                    text: this.selectedText,                                                                          // 159
                    trigger: this.trigger,                                                                            // 160
                    clearSelection: this.clearSelection.bind(this)                                                    // 161
                });                                                                                                   // 162
            } else {                                                                                                  // 163
                this.emitter.emit('error', {                                                                          // 164
                    action: this.action,                                                                              // 165
                    trigger: this.trigger,                                                                            // 166
                    clearSelection: this.clearSelection.bind(this)                                                    // 167
                });                                                                                                   // 168
            }                                                                                                         // 169
        };                                                                                                            // 170
                                                                                                                      // 171
        ClipboardAction.prototype.clearSelection = function clearSelection() {                                        // 172
            if (this.target) {                                                                                        // 173
                this.target.blur();                                                                                   // 174
            }                                                                                                         // 175
                                                                                                                      // 176
            window.getSelection().removeAllRanges();                                                                  // 177
        };                                                                                                            // 178
                                                                                                                      // 179
        ClipboardAction.prototype.destroy = function destroy() {                                                      // 180
            this.removeFake();                                                                                        // 181
        };                                                                                                            // 182
                                                                                                                      // 183
        _createClass(ClipboardAction, [{                                                                              // 184
            key: 'action',                                                                                            // 185
            set: function set() {                                                                                     // 186
                var action = arguments.length <= 0 || arguments[0] === undefined ? 'copy' : arguments[0];             // 187
                                                                                                                      // 188
                this._action = action;                                                                                // 189
                                                                                                                      // 190
                if (this._action !== 'copy' && this._action !== 'cut') {                                              // 191
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');                            // 192
                }                                                                                                     // 193
            },                                                                                                        // 194
            get: function get() {                                                                                     // 195
                return this._action;                                                                                  // 196
            }                                                                                                         // 197
        }, {                                                                                                          // 198
            key: 'target',                                                                                            // 199
            set: function set(target) {                                                                               // 200
                if (target !== undefined) {                                                                           // 201
                    if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                        if (this.action === 'copy' && target.hasAttribute('disabled')) {                              // 203
                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        }                                                                                             // 205
                                                                                                                      // 206
                        if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        }                                                                                             // 209
                                                                                                                      // 210
                        this._target = target;                                                                        // 211
                    } else {                                                                                          // 212
                        throw new Error('Invalid "target" value, use a valid Element');                               // 213
                    }                                                                                                 // 214
                }                                                                                                     // 215
            },                                                                                                        // 216
            get: function get() {                                                                                     // 217
                return this._target;                                                                                  // 218
            }                                                                                                         // 219
        }]);                                                                                                          // 220
                                                                                                                      // 221
        return ClipboardAction;                                                                                       // 222
    }();                                                                                                              // 223
                                                                                                                      // 224
    module.exports = ClipboardAction;                                                                                 // 225
});                                                                                                                   // 226
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"select":{"package.json":function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// .npm/package/node_modules/select/package.json                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.name = "select";                                                                                              // 1
exports.version = "1.1.0";                                                                                            // 2
exports.main = "src/select.js";                                                                                       // 3
                                                                                                                      // 4
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"src":{"select.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// node_modules/meteor/rocketchat_ui-master/node_modules/select/src/select.js                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
function select(element) {                                                                                            // 1
    var selectedText;                                                                                                 // 2
                                                                                                                      // 3
    if (element.nodeName === 'SELECT') {                                                                              // 4
        element.focus();                                                                                              // 5
                                                                                                                      // 6
        selectedText = element.value;                                                                                 // 7
    }                                                                                                                 // 8
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {                                       // 9
        element.focus();                                                                                              // 10
        element.setSelectionRange(0, element.value.length);                                                           // 11
                                                                                                                      // 12
        selectedText = element.value;                                                                                 // 13
    }                                                                                                                 // 14
    else {                                                                                                            // 15
        if (element.hasAttribute('contenteditable')) {                                                                // 16
            element.focus();                                                                                          // 17
        }                                                                                                             // 18
                                                                                                                      // 19
        var selection = window.getSelection();                                                                        // 20
        var range = document.createRange();                                                                           // 21
                                                                                                                      // 22
        range.selectNodeContents(element);                                                                            // 23
        selection.removeAllRanges();                                                                                  // 24
        selection.addRange(range);                                                                                    // 25
                                                                                                                      // 26
        selectedText = selection.toString();                                                                          // 27
    }                                                                                                                 // 28
                                                                                                                      // 29
    return selectedText;                                                                                              // 30
}                                                                                                                     // 31
                                                                                                                      // 32
module.exports = select;                                                                                              // 33
                                                                                                                      // 34
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"tiny-emitter":{"package.json":function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// .npm/package/node_modules/tiny-emitter/package.json                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.name = "tiny-emitter";                                                                                        // 1
exports.version = "1.1.0";                                                                                            // 2
exports.main = "index.js";                                                                                            // 3
                                                                                                                      // 4
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// node_modules/meteor/rocketchat_ui-master/node_modules/tiny-emitter/index.js                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
function E () {                                                                                                       // 1
  // Keep this empty so it's easier to inherit from                                                                   // 2
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)                      // 3
}                                                                                                                     // 4
                                                                                                                      // 5
E.prototype = {                                                                                                       // 6
  on: function (name, callback, ctx) {                                                                                // 7
    var e = this.e || (this.e = {});                                                                                  // 8
                                                                                                                      // 9
    (e[name] || (e[name] = [])).push({                                                                                // 10
      fn: callback,                                                                                                   // 11
      ctx: ctx                                                                                                        // 12
    });                                                                                                               // 13
                                                                                                                      // 14
    return this;                                                                                                      // 15
  },                                                                                                                  // 16
                                                                                                                      // 17
  once: function (name, callback, ctx) {                                                                              // 18
    var self = this;                                                                                                  // 19
    function listener () {                                                                                            // 20
      self.off(name, listener);                                                                                       // 21
      callback.apply(ctx, arguments);                                                                                 // 22
    };                                                                                                                // 23
                                                                                                                      // 24
    listener._ = callback                                                                                             // 25
    return this.on(name, listener, ctx);                                                                              // 26
  },                                                                                                                  // 27
                                                                                                                      // 28
  emit: function (name) {                                                                                             // 29
    var data = [].slice.call(arguments, 1);                                                                           // 30
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();                                                     // 31
    var i = 0;                                                                                                        // 32
    var len = evtArr.length;                                                                                          // 33
                                                                                                                      // 34
    for (i; i < len; i++) {                                                                                           // 35
      evtArr[i].fn.apply(evtArr[i].ctx, data);                                                                        // 36
    }                                                                                                                 // 37
                                                                                                                      // 38
    return this;                                                                                                      // 39
  },                                                                                                                  // 40
                                                                                                                      // 41
  off: function (name, callback) {                                                                                    // 42
    var e = this.e || (this.e = {});                                                                                  // 43
    var evts = e[name];                                                                                               // 44
    var liveEvents = [];                                                                                              // 45
                                                                                                                      // 46
    if (evts && callback) {                                                                                           // 47
      for (var i = 0, len = evts.length; i < len; i++) {                                                              // 48
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)                                                     // 49
          liveEvents.push(evts[i]);                                                                                   // 50
      }                                                                                                               // 51
    }                                                                                                                 // 52
                                                                                                                      // 53
    // Remove event from queue to prevent memory leak                                                                 // 54
    // Suggested by https://github.com/lazd                                                                           // 55
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910
                                                                                                                      // 57
    (liveEvents.length)                                                                                               // 58
      ? e[name] = liveEvents                                                                                          // 59
      : delete e[name];                                                                                               // 60
                                                                                                                      // 61
    return this;                                                                                                      // 62
  }                                                                                                                   // 63
};                                                                                                                    // 64
                                                                                                                      // 65
module.exports = E;                                                                                                   // 66
                                                                                                                      // 67
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"good-listener":{"package.json":function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// .npm/package/node_modules/good-listener/package.json                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.name = "good-listener";                                                                                       // 1
exports.version = "1.2.0";                                                                                            // 2
exports.main = "src/listen.js";                                                                                       // 3
                                                                                                                      // 4
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"src":{"listen.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// node_modules/meteor/rocketchat_ui-master/node_modules/good-listener/src/listen.js                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var is = require('./is');                                                                                             // 1
var delegate = require('delegate');                                                                                   // 2
                                                                                                                      // 3
/**                                                                                                                   // 4
 * Validates all params and calls the right                                                                           // 5
 * listener function based on its target type.                                                                        // 6
 *                                                                                                                    // 7
 * @param {String|HTMLElement|HTMLCollection|NodeList} target                                                         // 8
 * @param {String} type                                                                                               // 9
 * @param {Function} callback                                                                                         // 10
 * @return {Object}                                                                                                   // 11
 */                                                                                                                   // 12
function listen(target, type, callback) {                                                                             // 13
    if (!target && !type && !callback) {                                                                              // 14
        throw new Error('Missing required arguments');                                                                // 15
    }                                                                                                                 // 16
                                                                                                                      // 17
    if (!is.string(type)) {                                                                                           // 18
        throw new TypeError('Second argument must be a String');                                                      // 19
    }                                                                                                                 // 20
                                                                                                                      // 21
    if (!is.fn(callback)) {                                                                                           // 22
        throw new TypeError('Third argument must be a Function');                                                     // 23
    }                                                                                                                 // 24
                                                                                                                      // 25
    if (is.node(target)) {                                                                                            // 26
        return listenNode(target, type, callback);                                                                    // 27
    }                                                                                                                 // 28
    else if (is.nodeList(target)) {                                                                                   // 29
        return listenNodeList(target, type, callback);                                                                // 30
    }                                                                                                                 // 31
    else if (is.string(target)) {                                                                                     // 32
        return listenSelector(target, type, callback);                                                                // 33
    }                                                                                                                 // 34
    else {                                                                                                            // 35
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');             // 36
    }                                                                                                                 // 37
}                                                                                                                     // 38
                                                                                                                      // 39
/**                                                                                                                   // 40
 * Adds an event listener to a HTML element                                                                           // 41
 * and returns a remove listener function.                                                                            // 42
 *                                                                                                                    // 43
 * @param {HTMLElement} node                                                                                          // 44
 * @param {String} type                                                                                               // 45
 * @param {Function} callback                                                                                         // 46
 * @return {Object}                                                                                                   // 47
 */                                                                                                                   // 48
function listenNode(node, type, callback) {                                                                           // 49
    node.addEventListener(type, callback);                                                                            // 50
                                                                                                                      // 51
    return {                                                                                                          // 52
        destroy: function() {                                                                                         // 53
            node.removeEventListener(type, callback);                                                                 // 54
        }                                                                                                             // 55
    }                                                                                                                 // 56
}                                                                                                                     // 57
                                                                                                                      // 58
/**                                                                                                                   // 59
 * Add an event listener to a list of HTML elements                                                                   // 60
 * and returns a remove listener function.                                                                            // 61
 *                                                                                                                    // 62
 * @param {NodeList|HTMLCollection} nodeList                                                                          // 63
 * @param {String} type                                                                                               // 64
 * @param {Function} callback                                                                                         // 65
 * @return {Object}                                                                                                   // 66
 */                                                                                                                   // 67
function listenNodeList(nodeList, type, callback) {                                                                   // 68
    Array.prototype.forEach.call(nodeList, function(node) {                                                           // 69
        node.addEventListener(type, callback);                                                                        // 70
    });                                                                                                               // 71
                                                                                                                      // 72
    return {                                                                                                          // 73
        destroy: function() {                                                                                         // 74
            Array.prototype.forEach.call(nodeList, function(node) {                                                   // 75
                node.removeEventListener(type, callback);                                                             // 76
            });                                                                                                       // 77
        }                                                                                                             // 78
    }                                                                                                                 // 79
}                                                                                                                     // 80
                                                                                                                      // 81
/**                                                                                                                   // 82
 * Add an event listener to a selector                                                                                // 83
 * and returns a remove listener function.                                                                            // 84
 *                                                                                                                    // 85
 * @param {String} selector                                                                                           // 86
 * @param {String} type                                                                                               // 87
 * @param {Function} callback                                                                                         // 88
 * @return {Object}                                                                                                   // 89
 */                                                                                                                   // 90
function listenSelector(selector, type, callback) {                                                                   // 91
    return delegate(document.body, selector, type, callback);                                                         // 92
}                                                                                                                     // 93
                                                                                                                      // 94
module.exports = listen;                                                                                              // 95
                                                                                                                      // 96
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"is.js":function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// node_modules/meteor/rocketchat_ui-master/node_modules/good-listener/src/is.js                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/**                                                                                                                   // 1
 * Check if argument is a HTML element.                                                                               // 2
 *                                                                                                                    // 3
 * @param {Object} value                                                                                              // 4
 * @return {Boolean}                                                                                                  // 5
 */                                                                                                                   // 6
exports.node = function(value) {                                                                                      // 7
    return value !== undefined                                                                                        // 8
        && value instanceof HTMLElement                                                                               // 9
        && value.nodeType === 1;                                                                                      // 10
};                                                                                                                    // 11
                                                                                                                      // 12
/**                                                                                                                   // 13
 * Check if argument is a list of HTML elements.                                                                      // 14
 *                                                                                                                    // 15
 * @param {Object} value                                                                                              // 16
 * @return {Boolean}                                                                                                  // 17
 */                                                                                                                   // 18
exports.nodeList = function(value) {                                                                                  // 19
    var type = Object.prototype.toString.call(value);                                                                 // 20
                                                                                                                      // 21
    return value !== undefined                                                                                        // 22
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')                                       // 23
        && ('length' in value)                                                                                        // 24
        && (value.length === 0 || exports.node(value[0]));                                                            // 25
};                                                                                                                    // 26
                                                                                                                      // 27
/**                                                                                                                   // 28
 * Check if argument is a string.                                                                                     // 29
 *                                                                                                                    // 30
 * @param {Object} value                                                                                              // 31
 * @return {Boolean}                                                                                                  // 32
 */                                                                                                                   // 33
exports.string = function(value) {                                                                                    // 34
    return typeof value === 'string'                                                                                  // 35
        || value instanceof String;                                                                                   // 36
};                                                                                                                    // 37
                                                                                                                      // 38
/**                                                                                                                   // 39
 * Check if argument is a function.                                                                                   // 40
 *                                                                                                                    // 41
 * @param {Object} value                                                                                              // 42
 * @return {Boolean}                                                                                                  // 43
 */                                                                                                                   // 44
exports.fn = function(value) {                                                                                        // 45
    var type = Object.prototype.toString.call(value);                                                                 // 46
                                                                                                                      // 47
    return type === '[object Function]';                                                                              // 48
};                                                                                                                    // 49
                                                                                                                      // 50
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"delegate":{"package.json":function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// .npm/package/node_modules/delegate/package.json                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.name = "delegate";                                                                                            // 1
exports.version = "3.1.0";                                                                                            // 2
exports.main = "src/delegate.js";                                                                                     // 3
                                                                                                                      // 4
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"src":{"delegate.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// node_modules/meteor/rocketchat_ui-master/node_modules/delegate/src/delegate.js                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var closest = require('./closest');                                                                                   // 1
                                                                                                                      // 2
/**                                                                                                                   // 3
 * Delegates event to a selector.                                                                                     // 4
 *                                                                                                                    // 5
 * @param {Element} element                                                                                           // 6
 * @param {String} selector                                                                                           // 7
 * @param {String} type                                                                                               // 8
 * @param {Function} callback                                                                                         // 9
 * @param {Boolean} useCapture                                                                                        // 10
 * @return {Object}                                                                                                   // 11
 */                                                                                                                   // 12
function delegate(element, selector, type, callback, useCapture) {                                                    // 13
    var listenerFn = listener.apply(this, arguments);                                                                 // 14
                                                                                                                      // 15
    element.addEventListener(type, listenerFn, useCapture);                                                           // 16
                                                                                                                      // 17
    return {                                                                                                          // 18
        destroy: function() {                                                                                         // 19
            element.removeEventListener(type, listenerFn, useCapture);                                                // 20
        }                                                                                                             // 21
    }                                                                                                                 // 22
}                                                                                                                     // 23
                                                                                                                      // 24
/**                                                                                                                   // 25
 * Finds closest match and invokes callback.                                                                          // 26
 *                                                                                                                    // 27
 * @param {Element} element                                                                                           // 28
 * @param {String} selector                                                                                           // 29
 * @param {String} type                                                                                               // 30
 * @param {Function} callback                                                                                         // 31
 * @return {Function}                                                                                                 // 32
 */                                                                                                                   // 33
function listener(element, selector, type, callback) {                                                                // 34
    return function(e) {                                                                                              // 35
        e.delegateTarget = closest(e.target, selector);                                                               // 36
                                                                                                                      // 37
        if (e.delegateTarget) {                                                                                       // 38
            callback.call(element, e);                                                                                // 39
        }                                                                                                             // 40
    }                                                                                                                 // 41
}                                                                                                                     // 42
                                                                                                                      // 43
module.exports = delegate;                                                                                            // 44
                                                                                                                      // 45
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"closest.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// node_modules/meteor/rocketchat_ui-master/node_modules/delegate/src/closest.js                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/**                                                                                                                   // 1
 * A polyfill for Element.matches()                                                                                   // 2
 */                                                                                                                   // 3
if (Element && !Element.prototype.matches) {                                                                          // 4
    var proto = Element.prototype;                                                                                    // 5
                                                                                                                      // 6
    proto.matches = proto.matchesSelector ||                                                                          // 7
                    proto.mozMatchesSelector ||                                                                       // 8
                    proto.msMatchesSelector ||                                                                        // 9
                    proto.oMatchesSelector ||                                                                         // 10
                    proto.webkitMatchesSelector;                                                                      // 11
}                                                                                                                     // 12
                                                                                                                      // 13
/**                                                                                                                   // 14
 * Finds the closest parent that matches a selector.                                                                  // 15
 *                                                                                                                    // 16
 * @param {Element} element                                                                                           // 17
 * @param {String} selector                                                                                           // 18
 * @return {Function}                                                                                                 // 19
 */                                                                                                                   // 20
function closest (element, selector) {                                                                                // 21
    while (element && element !== document) {                                                                         // 22
        if (element.matches(selector)) return element;                                                                // 23
        element = element.parentNode;                                                                                 // 24
    }                                                                                                                 // 25
}                                                                                                                     // 26
                                                                                                                      // 27
module.exports = closest;                                                                                             // 28
                                                                                                                      // 29
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html"
  ]
});
require("./node_modules/meteor/rocketchat:ui-master/client/template.main.js");
require("./node_modules/meteor/rocketchat:ui-master/client/template.loading.js");
require("./node_modules/meteor/rocketchat:ui-master/client/template.error.js");
require("./node_modules/meteor/rocketchat:ui-master/client/template.logoLayout.js");
require("./node_modules/meteor/rocketchat:ui-master/client/main.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:ui-master'] = {};

})();
