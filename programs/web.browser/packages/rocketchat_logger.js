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
var Random = Package.random.Random;
var Log = Package.logging.Log;
var EventEmitter = Package['raix:eventemitter'].EventEmitter;
var Template = Package['templating-runtime'].Template;
var FlowRouter = Package['kadira:flow-router'].FlowRouter;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var ansispan, Logger, SystemLogger, LoggerManager;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:logger":{"ansispan.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_logger/ansispan.js                                                                          //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
/* globals ansispan:true */ansispan = function (str) {                                                             // 1
	str = str.replace(/>/g, '&gt;');                                                                                  // 4
	str = str.replace(/</g, '&lt;');                                                                                  // 5
	Object.keys(ansispan.foregroundColors).forEach(function (ansi) {                                                  // 7
		var span = "<span style=\"color: " + ansispan.foregroundColors[ansi] + "\">"; //                                 // 8
		// `\033[Xm` == `\033[0;Xm` sets foreground color to `X`.                                                        // 11
		//                                                                                                               // 12
                                                                                                                   //
		str = str.replace(new RegExp("\0o33\\[" + ansi + "m", 'g'), span).replace(new RegExp("\0o33\\[0;" + ansi + "m", 'g'), span);
	}); //                                                                                                            // 21
	// `\033[1m` enables bold font, `\033[22m` disables it                                                            // 23
	//                                                                                                                // 24
                                                                                                                   //
	str = str.replace(/\033\[1m/g, '<b>').replace(/\033\[22m/g, '</b>'); //                                           // 25
	// `\033[3m` enables italics font, `\033[23m` disables it                                                         // 28
	//                                                                                                                // 29
                                                                                                                   //
	str = str.replace(/\033\[3m/g, '<i>').replace(/\033\[23m/g, '</i>');                                              // 30
	str = str.replace(/\033\[m/g, '</span>');                                                                         // 32
	str = str.replace(/\033\[0m/g, '</span>');                                                                        // 33
	return str.replace(/\033\[39m/g, '</span>');                                                                      // 34
};                                                                                                                 // 35
                                                                                                                   //
ansispan.foregroundColors = {                                                                                      // 37
	'30': 'gray',                                                                                                     // 38
	'31': 'red',                                                                                                      // 39
	'32': 'lime',                                                                                                     // 40
	'33': 'yellow',                                                                                                   // 41
	'34': '#6B98FF',                                                                                                  // 42
	'35': '#FF00FF',                                                                                                  // 43
	'36': 'cyan',                                                                                                     // 44
	'37': 'white'                                                                                                     // 45
};                                                                                                                 // 37
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"logger.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_logger/logger.js                                                                            //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var Template = Package.templating.Template;                                                                        // 1
Template.log = false;                                                                                              // 3
Template.logMatch = /.*/;                                                                                          // 5
                                                                                                                   //
Template.enableLogs = function (log) {                                                                             // 7
	Template.logMatch = /.*/;                                                                                         // 8
                                                                                                                   //
	if (log === false) {                                                                                              // 9
		return Template.log = false;                                                                                     // 10
	} else {                                                                                                          // 11
		Template.log = true;                                                                                             // 12
                                                                                                                   //
		if (log instanceof RegExp) {                                                                                     // 13
			return Template.logMatch = log;                                                                                 // 14
		}                                                                                                                // 15
	}                                                                                                                 // 16
};                                                                                                                 // 17
                                                                                                                   //
var wrapHelpersAndEvents = function (original, prefix, color) {                                                    // 19
	return function (dict) {                                                                                          // 20
		var template = this;                                                                                             // 22
                                                                                                                   //
		var fn1 = function (name, fn) {                                                                                  // 23
			if (fn instanceof Function) {                                                                                   // 24
				return dict[name] = function () {                                                                              // 25
					var result = fn.apply(this, arguments);                                                                       // 27
                                                                                                                   //
					if (Template.log === true) {                                                                                  // 28
						var completeName = prefix + ":" + template.viewName.replace('Template.', '') + "." + name;                   // 29
                                                                                                                   //
						if (Template.logMatch.test(completeName)) {                                                                  // 30
							console.log("%c" + completeName, "color: " + color, {                                                       // 31
								args: arguments,                                                                                           // 32
								scope: this,                                                                                               // 33
								result: result                                                                                             // 34
							});                                                                                                         // 31
						}                                                                                                            // 36
					}                                                                                                             // 37
                                                                                                                   //
					return result;                                                                                                // 38
				};                                                                                                             // 39
			}                                                                                                               // 40
		};                                                                                                               // 41
                                                                                                                   //
		_.each(name, function (fn, name) {                                                                               // 42
			fn1(name, fn);                                                                                                  // 43
		});                                                                                                              // 44
                                                                                                                   //
		return original.call(template, dict);                                                                            // 45
	};                                                                                                                // 46
};                                                                                                                 // 47
                                                                                                                   //
Template.prototype.helpers = wrapHelpersAndEvents(Template.prototype.helpers, 'helper', 'blue');                   // 49
Template.prototype.events = wrapHelpersAndEvents(Template.prototype.events, 'event', 'green');                     // 51
                                                                                                                   //
var wrapLifeCycle = function (original, prefix, color) {                                                           // 53
	return function (fn) {                                                                                            // 54
		var template = this;                                                                                             // 55
                                                                                                                   //
		if (fn instanceof Function) {                                                                                    // 56
			var wrap = function () {                                                                                        // 57
				var result = fn.apply(this, arguments);                                                                        // 58
                                                                                                                   //
				if (Template.log === true) {                                                                                   // 59
					var completeName = prefix + ":" + template.viewName.replace('Template.', '') + "." + name;                    // 60
                                                                                                                   //
					if (Template.logMatch.test(completeName)) {                                                                   // 61
						console.log("%c" + completeName, "color: " + color + "; font-weight: bold", {                                // 62
							args: arguments,                                                                                            // 63
							scope: this,                                                                                                // 64
							result: result                                                                                              // 65
						});                                                                                                          // 62
					}                                                                                                             // 67
				}                                                                                                              // 68
                                                                                                                   //
				return result;                                                                                                 // 69
			};                                                                                                              // 70
                                                                                                                   //
			return original.call(template, wrap);                                                                           // 71
		} else {                                                                                                         // 72
			return original.call(template, fn);                                                                             // 73
		}                                                                                                                // 74
	};                                                                                                                // 75
};                                                                                                                 // 76
                                                                                                                   //
Template.prototype.onCreated = wrapLifeCycle(Template.prototype.onCreated, 'onCreated', 'blue');                   // 78
Template.prototype.onRendered = wrapLifeCycle(Template.prototype.onRendered, 'onRendered', 'green');               // 80
Template.prototype.onDestroyed = wrapLifeCycle(Template.prototype.onDestroyed, 'onDestroyed', 'red');              // 82
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"client":{"viewLogs.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_logger/client/viewLogs.js                                                                   //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
this.stdout = new Mongo.Collection('stdout');                                                                      // 2
Meteor.startup(function () {                                                                                       // 4
	return RocketChat.AdminBox.addOption({                                                                            // 5
		href: 'admin-view-logs',                                                                                         // 6
		i18nLabel: 'View_Logs',                                                                                          // 7
		permissionGranted: function () {                                                                                 // 8
			return RocketChat.authz.hasAllPermission('view-logs');                                                          // 9
		}                                                                                                                // 10
	});                                                                                                               // 5
});                                                                                                                // 12
FlowRouter.route('/admin/view-logs', {                                                                             // 14
	name: 'admin-view-logs',                                                                                          // 15
	action: function () {                                                                                             // 16
		return BlazeLayout.render('main', {                                                                              // 17
			center: 'pageSettingsContainer',                                                                                // 18
			pageTitle: t('View_Logs'),                                                                                      // 19
			pageTemplate: 'viewLogs',                                                                                       // 20
			noScroll: true                                                                                                  // 21
		});                                                                                                              // 17
	}                                                                                                                 // 23
});                                                                                                                // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"views":{"template.viewLogs.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_logger/client/views/template.viewLogs.js                                                    //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__checkName("viewLogs");                                                                                  // 2
Template["viewLogs"] = new Template("Template.viewLogs", (function() {                                             // 3
  var view = this;                                                                                                 // 4
  return Blaze.If(function() {                                                                                     // 5
    return Spacebars.call(view.lookup("hasPermission"));                                                           // 6
  }, function() {                                                                                                  // 7
    return [ "\n\t\t", HTML.DIV({                                                                                  // 8
      class: "section terminal"                                                                                    // 9
    }, "\n\t\t\t", Blaze.Each(function() {                                                                         // 10
      return Spacebars.call(view.lookup("logs"));                                                                  // 11
    }, function() {                                                                                                // 12
      return [ "\n\t\t\t\t", HTML.DIV({                                                                            // 13
        class: "terminal-line"                                                                                     // 14
      }, "\n\t\t\t\t\t\n\t\t\t\t\t", Blaze.View("lookup:ansispan", function() {                                    // 15
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("ansispan"), view.lookup("string")));              // 16
      }), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                             // 17
    }), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                            // 18
      class: "new-logs not color-primary-action-color"                                                             // 19
    }, "\n\t\t\t", HTML.I({                                                                                        // 20
      class: "icon-down-big"                                                                                       // 21
    }), "\n\t\t\t", HTML.SPAN(Blaze.View("lookup:_", function() {                                                  // 22
      return Spacebars.mustache(view.lookup("_"), "New_logs");                                                     // 23
    })), "\n\t\t"), "\n\t" ];                                                                                      // 24
  }, function() {                                                                                                  // 25
    return [ "\n\t\t", Blaze.View("lookup:_", function() {                                                         // 26
      return Spacebars.mustache(view.lookup("_"), "Not_authorized");                                               // 27
    }), "\n\t" ];                                                                                                  // 28
  });                                                                                                              // 29
}));                                                                                                               // 30
                                                                                                                   // 31
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"viewLogs.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_logger/client/views/viewLogs.js                                                             //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var moment = void 0;                                                                                               // 1
module.watch(require("moment"), {                                                                                  // 1
	"default": function (v) {                                                                                         // 1
		moment = v;                                                                                                      // 1
	}                                                                                                                 // 1
}, 0);                                                                                                             // 1
// TODO: remove this globals                                                                                       // 2
/* globals ansispan stdout readMessage*/Template.viewLogs.onCreated(function () {                                  // 3
	this.subscribe('stdout');                                                                                         // 6
	return this.atBottom = true;                                                                                      // 7
});                                                                                                                // 8
Template.viewLogs.helpers({                                                                                        // 10
	hasPermission: function () {                                                                                      // 11
		return RocketChat.authz.hasAllPermission('view-logs');                                                           // 12
	},                                                                                                                // 13
	logs: function () {                                                                                               // 14
		return stdout.find({}, {                                                                                         // 15
			sort: {                                                                                                         // 16
				ts: 1                                                                                                          // 17
			}                                                                                                               // 16
		});                                                                                                              // 15
	},                                                                                                                // 20
	ansispan: function (string) {                                                                                     // 21
		string = ansispan(string.replace(/\s/g, '&nbsp;').replace(/(\\n|\n)/g, '<br>'));                                 // 22
		string = string.replace(/(.\d{8}-\d\d:\d\d:\d\d\.\d\d\d\(?.{0,2}\)?)/, '<span class="terminal-time">$1</span>');
		return string;                                                                                                   // 24
	},                                                                                                                // 25
	formatTS: function (date) {                                                                                       // 26
		return moment(date).format('YMMDD-HH:mm:ss.SSS(ZZ)');                                                            // 27
	}                                                                                                                 // 28
});                                                                                                                // 10
Template.viewLogs.events({                                                                                         // 31
	'click .new-logs': function () {                                                                                  // 32
		Template.instance().atBottom = true;                                                                             // 33
		return Template.instance().sendToBottomIfNecessary();                                                            // 34
	}                                                                                                                 // 35
});                                                                                                                // 31
Template.viewLogs.onRendered(function () {                                                                         // 38
	var wrapper = this.find('.terminal');                                                                             // 40
	var wrapperUl = this.find('.terminal');                                                                           // 41
	var newLogs = this.find('.new-logs');                                                                             // 42
	var template = this;                                                                                              // 43
                                                                                                                   //
	template.isAtBottom = function (scrollThreshold) {                                                                // 44
		if (scrollThreshold == null) {                                                                                   // 45
			scrollThreshold = 0;                                                                                            // 46
		}                                                                                                                // 47
                                                                                                                   //
		if (wrapper.scrollTop + scrollThreshold >= wrapper.scrollHeight - wrapper.clientHeight) {                        // 48
			newLogs.className = 'new-logs not';                                                                             // 49
			return true;                                                                                                    // 50
		}                                                                                                                // 51
                                                                                                                   //
		return false;                                                                                                    // 52
	};                                                                                                                // 53
                                                                                                                   //
	template.sendToBottom = function () {                                                                             // 54
		wrapper.scrollTop = wrapper.scrollHeight - wrapper.clientHeight;                                                 // 55
		return newLogs.className = 'new-logs not';                                                                       // 56
	};                                                                                                                // 57
                                                                                                                   //
	template.checkIfScrollIsAtBottom = function () {                                                                  // 58
		template.atBottom = template.isAtBottom(100);                                                                    // 59
		readMessage.enable();                                                                                            // 60
		return readMessage.read();                                                                                       // 61
	};                                                                                                                // 62
                                                                                                                   //
	template.sendToBottomIfNecessary = function () {                                                                  // 63
		if (template.atBottom === true && template.isAtBottom() !== true) {                                              // 64
			return template.sendToBottom();                                                                                 // 65
		} else if (template.atBottom === false) {                                                                        // 66
			return newLogs.className = 'new-logs';                                                                          // 67
		}                                                                                                                // 68
	};                                                                                                                // 69
                                                                                                                   //
	template.sendToBottomIfNecessaryDebounced = _.debounce(template.sendToBottomIfNecessary, 10);                     // 70
	template.sendToBottomIfNecessary();                                                                               // 71
                                                                                                                   //
	if (window.MutationObserver == null) {                                                                            // 72
		wrapperUl.addEventListener('DOMSubtreeModified', function () {                                                   // 73
			return template.sendToBottomIfNecessaryDebounced();                                                             // 74
		});                                                                                                              // 75
	} else {                                                                                                          // 76
		var observer = new MutationObserver(function (mutations) {                                                       // 77
			return mutations.forEach(function () {                                                                          // 78
				return template.sendToBottomIfNecessaryDebounced();                                                            // 79
			});                                                                                                             // 80
		});                                                                                                              // 81
		observer.observe(wrapperUl, {                                                                                    // 82
			childList: true                                                                                                 // 83
		});                                                                                                              // 82
	}                                                                                                                 // 85
                                                                                                                   //
	template.onWindowResize = function () {                                                                           // 86
		return Meteor.defer(function () {                                                                                // 87
			return template.sendToBottomIfNecessaryDebounced();                                                             // 88
		});                                                                                                              // 89
	};                                                                                                                // 90
                                                                                                                   //
	window.addEventListener('resize', template.onWindowResize);                                                       // 91
	wrapper.addEventListener('mousewheel', function () {                                                              // 92
		template.atBottom = false;                                                                                       // 93
		return Meteor.defer(function () {                                                                                // 94
			return template.checkIfScrollIsAtBottom();                                                                      // 95
		});                                                                                                              // 96
	});                                                                                                               // 97
	wrapper.addEventListener('wheel', function () {                                                                   // 98
		template.atBottom = false;                                                                                       // 99
		return Meteor.defer(function () {                                                                                // 100
			return template.checkIfScrollIsAtBottom();                                                                      // 101
		});                                                                                                              // 102
	});                                                                                                               // 103
	wrapper.addEventListener('touchstart', function () {                                                              // 104
		return template.atBottom = false;                                                                                // 105
	});                                                                                                               // 106
	wrapper.addEventListener('touchend', function () {                                                                // 107
		Meteor.defer(function () {                                                                                       // 108
			return template.checkIfScrollIsAtBottom();                                                                      // 109
		});                                                                                                              // 110
		Meteor.setTimeout(function () {                                                                                  // 111
			return template.checkIfScrollIsAtBottom();                                                                      // 112
		}, 1000);                                                                                                        // 113
		return Meteor.setTimeout(function () {                                                                           // 114
			return template.checkIfScrollIsAtBottom();                                                                      // 115
		}, 2000);                                                                                                        // 116
	});                                                                                                               // 117
	return wrapper.addEventListener('scroll', function () {                                                           // 118
		template.atBottom = false;                                                                                       // 119
		return Meteor.defer(function () {                                                                                // 120
			return template.checkIfScrollIsAtBottom();                                                                      // 121
		});                                                                                                              // 122
	});                                                                                                               // 123
});                                                                                                                // 124
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html"
  ]
});
require("./node_modules/meteor/rocketchat:logger/ansispan.js");
require("./node_modules/meteor/rocketchat:logger/logger.js");
require("./node_modules/meteor/rocketchat:logger/client/viewLogs.js");
require("./node_modules/meteor/rocketchat:logger/client/views/template.viewLogs.js");
require("./node_modules/meteor/rocketchat:logger/client/views/viewLogs.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['rocketchat:logger'] = {}, {
  Logger: Logger,
  SystemLogger: SystemLogger,
  LoggerManager: LoggerManager
});

})();
