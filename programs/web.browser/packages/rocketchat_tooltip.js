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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:tooltip":{"template.rocketchat-tooltip.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/rocketchat_tooltip/template.rocketchat-tooltip.js                            //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
                                                                                         // 1
Template.__checkName("rocketchatTooltip");                                               // 2
Template["rocketchatTooltip"] = new Template("Template.rocketchatTooltip", (function() {
  var view = this;                                                                       // 4
  return HTML.Raw('<div class="tooltip">\n\t\t<div class="content">\n\t\t</div>\n\t\t<div class="tooltip-arrow"></div>\n\t</div>');
}));                                                                                     // 6
                                                                                         // 7
///////////////////////////////////////////////////////////////////////////////////////////

},"rocketchat-tooltip.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/rocketchat_tooltip/rocketchat-tooltip.js                                     //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
/* globals Blaze, RocketChat */RocketChat.tooltip = {                                    // 1
	source: null,                                                                           // 3
	initiated: false,                                                                       // 4
	opened: false,                                                                          // 5
	init: function () {                                                                     // 7
		if (this.initiated) {                                                                  // 8
			return;                                                                               // 9
		}                                                                                      // 10
                                                                                         //
		this.initiated = true;                                                                 // 11
		Blaze.render(Template.rocketchatTooltip, document.body);                               // 13
	},                                                                                      // 14
	showElement: function (element, source) {                                               // 16
		var _this = this;                                                                      // 16
                                                                                         //
		if (this.opened) {                                                                     // 17
			return;                                                                               // 18
		}                                                                                      // 19
                                                                                         //
		if (this.timeout) {                                                                    // 21
			clearTimeout(this.timeout);                                                           // 22
		}                                                                                      // 23
                                                                                         //
		this.timeout = setTimeout(function () {                                                // 25
			_this.timeout = null;                                                                 // 26
			_this.source = source;                                                                // 27
			$('.tooltip .content').empty().append($(element).clone().show());                     // 29
                                                                                         //
			_this.setPosition().addClass('show');                                                 // 31
                                                                                         //
			_this.opened = true;                                                                  // 33
		}, 300);                                                                               // 34
	},                                                                                      // 36
	hide: function () {                                                                     // 38
		if (this.timeout) {                                                                    // 39
			clearTimeout(this.timeout);                                                           // 40
		}                                                                                      // 41
                                                                                         //
		if (this.opened) {                                                                     // 43
			$('.tooltip').removeClass('show');                                                    // 44
			$('.tooltip .content').empty();                                                       // 45
			this.opened = false;                                                                  // 46
		}                                                                                      // 47
	},                                                                                      // 48
	setPosition: function () {                                                              // 50
		var sourcePos = $(this.source).offset();                                               // 51
		var sourceWidth = $(this.source).outerWidth();                                         // 53
		var tip = $('.tooltip');                                                               // 55
		var top = sourcePos.top - tip.outerHeight() - 5;                                       // 57
		var left = sourcePos.left;                                                             // 58
		left = left + sourceWidth / 2 - tip.outerWidth() / 2;                                  // 60
                                                                                         //
		if (left < 0) {                                                                        // 62
			$('.tooltip .tooltip-arrow').css({                                                    // 63
				'margin-left': left - 5 + "px"                                                       // 64
			});                                                                                   // 63
			left = 0;                                                                             // 66
		} else {                                                                               // 67
			$('.tooltip .tooltip-arrow').css({                                                    // 68
				'margin-left': ''                                                                    // 69
			});                                                                                   // 68
		}                                                                                      // 71
                                                                                         //
		if (top < 0) {                                                                         // 73
			top = sourcePos.top + $(this.source).outerHeight() + 5;                               // 74
			tip.addClass('bellow');                                                               // 75
		} else {                                                                               // 76
			tip.removeClass('bellow');                                                            // 77
		}                                                                                      // 78
                                                                                         //
		return tip.css({                                                                       // 80
			top: top + "px",                                                                      // 82
			left: left + "px"                                                                     // 83
		});                                                                                    // 81
	}                                                                                       // 85
};                                                                                       // 2
///////////////////////////////////////////////////////////////////////////////////////////

},"init.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// packages/rocketchat_tooltip/init.js                                                   //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
Template.main.onCreated(function () {                                                    // 1
	RocketChat.tooltip.init();                                                              // 2
});                                                                                      // 3
///////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".less",
    ".html"
  ]
});
require("./node_modules/meteor/rocketchat:tooltip/template.rocketchat-tooltip.js");
require("./node_modules/meteor/rocketchat:tooltip/rocketchat-tooltip.js");
require("./node_modules/meteor/rocketchat:tooltip/init.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:tooltip'] = {};

})();
