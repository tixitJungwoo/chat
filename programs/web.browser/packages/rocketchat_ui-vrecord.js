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
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:ui-vrecord":{"client":{"template.vrecord.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// packages/rocketchat_ui-vrecord/client/template.vrecord.js                                      //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
                                                                                                  // 1
Template.__checkName("vrecDialog");                                                               // 2
Template["vrecDialog"] = new Template("Template.vrecDialog", (function() {                        // 3
  var view = this;                                                                                // 4
  return HTML.DIV({                                                                               // 5
    class: "vrec-dialog secondary-background-color"                                               // 6
  }, HTML.Raw('\n\t\t<div class="video-container">\n\t\t\t<video width="320" height="240" src=""></video>\n\t\t</div>\n\t\t'), HTML.DIV({
    class: "buttons"                                                                              // 8
  }, "\n\t\t\t", HTML.UL("\n\t\t\t\t", HTML.LI({                                                  // 9
    class: "left-aligned border-secondary-background-color"                                       // 10
  }, "\n\t\t\t\t\t", HTML.BUTTON(HTML.Attrs({                                                     // 11
    class: function() {                                                                           // 12
      return [ "button primary record ", Spacebars.mustache(view.lookup("recordDisabled")) ];     // 13
    }                                                                                             // 14
  }, function() {                                                                                 // 15
    return Spacebars.attrMustache(view.lookup("recordDisabled"));                                 // 16
  }), "\n\t\t\t\t\t\t", HTML.I({                                                                  // 17
    class: function() {                                                                           // 18
      return Spacebars.mustache(view.lookup("recordIcon"));                                       // 19
    }                                                                                             // 20
  }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.LI({                                     // 21
    class: "right-aligned border-secondary-background-color"                                      // 22
  }, "\n\t\t\t\t\t", HTML.BUTTON({                                                                // 23
    class: "button cancel"                                                                        // 24
  }, Blaze.View("lookup:_", function() {                                                          // 25
    return Spacebars.mustache(view.lookup("_"), "Cancel");                                        // 26
  })), "\n\t\t\t\t\t", HTML.BUTTON(HTML.Attrs({                                                   // 27
    class: function() {                                                                           // 28
      return [ "button primary ok ", Spacebars.mustache(view.lookup("okDisabled")) ];             // 29
    }                                                                                             // 30
  }, function() {                                                                                 // 31
    return Spacebars.attrMustache(view.lookup("okDisabled"));                                     // 32
  }), Blaze.View("lookup:_", function() {                                                         // 33
    return Spacebars.mustache(view.lookup("_"), "Ok");                                            // 34
  })), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t");                                            // 35
}));                                                                                              // 36
                                                                                                  // 37
////////////////////////////////////////////////////////////////////////////////////////////////////

},"vrecord.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// packages/rocketchat_ui-vrecord/client/vrecord.js                                               //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var VRecDialog = void 0;                                                                          // 1
module.watch(require("./VRecDialog"), {                                                           // 1
	VRecDialog: function (v) {                                                                       // 1
		VRecDialog = v;                                                                                 // 1
	}                                                                                                // 1
}, 0);                                                                                            // 1
Template.vrecDialog.helpers({                                                                     // 4
	recordIcon: function () {                                                                        // 5
		if (VideoRecorder.cameraStarted.get() && VideoRecorder.recording.get()) {                       // 6
			return 'icon-stop';                                                                            // 7
		} else {                                                                                        // 8
			return 'icon-circle';                                                                          // 9
		}                                                                                               // 10
	},                                                                                               // 11
	okDisabled: function () {                                                                        // 13
		if (VideoRecorder.cameraStarted.get() && VideoRecorder.recordingAvailable.get()) {              // 14
			return '';                                                                                     // 15
		} else {                                                                                        // 16
			return 'disabled';                                                                             // 17
		}                                                                                               // 18
	},                                                                                               // 19
	recordDisabled: function () {                                                                    // 21
		return VideoRecorder.cameraStarted.get() ? '' : 'disabled';                                     // 22
	}                                                                                                // 23
});                                                                                               // 4
Template.vrecDialog.events({                                                                      // 27
	'click .vrec-dialog .cancel': function () {                                                      // 28
		VideoRecorder.stop();                                                                           // 29
		VRecDialog.close();                                                                             // 30
	},                                                                                               // 31
	'click .vrec-dialog .record': function () {                                                      // 33
		if (VideoRecorder.recording.get()) {                                                            // 34
			VideoRecorder.stopRecording();                                                                 // 35
		} else {                                                                                        // 36
			VideoRecorder.record();                                                                        // 37
		}                                                                                               // 38
	},                                                                                               // 39
	'click .vrec-dialog .ok': function () {                                                          // 41
		var cb = function (blob) {                                                                      // 42
			fileUpload([{                                                                                  // 43
				file: blob,                                                                                   // 43
				type: 'video',                                                                                // 43
				name: TAPi18n.__('Video record') + ".webm"                                                    // 43
			}]);                                                                                           // 43
			VRecDialog.close();                                                                            // 44
		};                                                                                              // 45
                                                                                                  //
		VideoRecorder.stop(cb);                                                                         // 46
	}                                                                                                // 47
});                                                                                               // 27
////////////////////////////////////////////////////////////////////////////////////////////////////

},"VRecDialog.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// packages/rocketchat_ui-vrecord/client/VRecDialog.js                                            //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                           //
                                                                                                  //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                  //
                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
                                                                                                  //
module.export({                                                                                   // 1
	VRecDialog: function () {                                                                        // 1
		return VRecDialog;                                                                              // 1
	}                                                                                                // 1
});                                                                                               // 1
var VRecDialog = new (function () {                                                               // 1
	function _class() {                                                                              // 1
		(0, _classCallCheck3.default)(this, _class);                                                    // 1
	}                                                                                                // 1
                                                                                                  //
	_class.initClass = function () {                                                                 // 1
		function initClass() {                                                                          // 1
			this.prototype.opened = false;                                                                 // 3
			this.prototype.initiated = false;                                                              // 4
			this.prototype.width = 400;                                                                    // 5
			this.prototype.height = 280;                                                                   // 6
		}                                                                                               // 7
                                                                                                  //
		return initClass;                                                                               // 1
	}();                                                                                             // 1
                                                                                                  //
	_class.prototype.init = function () {                                                            // 1
		function init() {                                                                               // 1
			if (this.initiated) {                                                                          // 10
				return;                                                                                       // 11
			}                                                                                              // 12
                                                                                                  //
			this.initiated = true;                                                                         // 14
			return Blaze.render(Template.vrecDialog, document.body);                                       // 15
		}                                                                                               // 16
                                                                                                  //
		return init;                                                                                    // 1
	}();                                                                                             // 1
                                                                                                  //
	_class.prototype.open = function () {                                                            // 1
		function open(source) {                                                                         // 1
			if (!this.initiated) {                                                                         // 19
				this.init();                                                                                  // 20
			}                                                                                              // 21
                                                                                                  //
			this.source = source;                                                                          // 23
			var dialog = $('.vrec-dialog');                                                                // 24
			this.setPosition(dialog, source);                                                              // 25
			dialog.addClass('show');                                                                       // 26
			this.opened = true;                                                                            // 27
			return this.initializeCamera();                                                                // 29
		}                                                                                               // 30
                                                                                                  //
		return open;                                                                                    // 1
	}();                                                                                             // 1
                                                                                                  //
	_class.prototype.close = function () {                                                           // 1
		function close() {                                                                              // 1
			$('.vrec-dialog').removeClass('show');                                                         // 33
			this.opened = false;                                                                           // 34
                                                                                                  //
			if (this.video != null) {                                                                      // 36
				return VideoRecorder.stop();                                                                  // 37
			}                                                                                              // 38
		}                                                                                               // 39
                                                                                                  //
		return close;                                                                                   // 1
	}();                                                                                             // 1
                                                                                                  //
	_class.prototype.setPosition = function () {                                                     // 1
		function setPosition(dialog, source) {                                                          // 1
			var sourcePos = $(source).offset();                                                            // 42
			var left = sourcePos.left - this.width + 100;                                                  // 43
			var top = sourcePos.top - this.height - 40;                                                    // 44
                                                                                                  //
			if (left < 0) {                                                                                // 46
				left = 10;                                                                                    // 47
			}                                                                                              // 48
                                                                                                  //
			if (top < 0) {                                                                                 // 49
				top = 10;                                                                                     // 50
			}                                                                                              // 51
                                                                                                  //
			return dialog.css({                                                                            // 53
				top: top + "px",                                                                              // 53
				left: left + "px"                                                                             // 53
			});                                                                                            // 53
		}                                                                                               // 54
                                                                                                  //
		return setPosition;                                                                             // 1
	}();                                                                                             // 1
                                                                                                  //
	_class.prototype.initializeCamera = function () {                                                // 1
		function initializeCamera() {                                                                   // 1
			this.video = $('.vrec-dialog video').get('0');                                                 // 57
                                                                                                  //
			if (!this.video) {                                                                             // 58
				return;                                                                                       // 59
			}                                                                                              // 60
                                                                                                  //
			return VideoRecorder.start(this.video);                                                        // 61
		}                                                                                               // 62
                                                                                                  //
		return initializeCamera;                                                                        // 1
	}();                                                                                             // 1
                                                                                                  //
	return _class;                                                                                   // 1
}())();                                                                                           // 1
////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".less",
    ".html"
  ]
});
require("./node_modules/meteor/rocketchat:ui-vrecord/client/template.vrecord.js");
require("./node_modules/meteor/rocketchat:ui-vrecord/client/vrecord.js");
var exports = require("./node_modules/meteor/rocketchat:ui-vrecord/client/VRecDialog.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:ui-vrecord'] = exports;

})();
