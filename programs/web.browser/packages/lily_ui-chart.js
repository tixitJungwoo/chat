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

var require = meteorInstall({"node_modules":{"meteor":{"lily:ui-chart":{"client":{"template.chart.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/lily_ui-chart/client/template.chart.js                                                                 //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__checkName("chartDialog");                                                                               // 2
Template["chartDialog"] = new Template("Template.chartDialog", (function() {                                       // 3
  var view = this;                                                                                                 // 4
  return HTML.DIV({                                                                                                // 5
    class: "chart-dialog secondary-background-color preview"                                                       // 6
  }, HTML.Raw('\n        <div id="chartPreview" class="chartdiv"></div>\n            '), HTML.DIV(HTML.Attrs({     // 7
    style: "margin-top: 10px"                                                                                      // 8
  }, function() {                                                                                                  // 9
    return Spacebars.attrMustache(view.lookup("preView"));                                                         // 10
  }), "\n                ", HTML.TEXTAREA({                                                                        // 11
    id: "chartData",                                                                                               // 12
    class: "message-form-text input-message autogrow-short",                                                       // 13
    style: "height: 150px;background-color:#FFFFFF",                                                               // 14
    value: function() {                                                                                            // 15
      return [ "                    ", Spacebars.mustache(view.lookup("chartData")), "\n                " ];       // 16
    }                                                                                                              // 17
  }), "\n            "), "\n            ", HTML.DIV({                                                              // 18
    class: "buttons"                                                                                               // 19
  }, "\n                ", HTML.UL("\n                    ", HTML.LI({                                             // 20
    class: function() {                                                                                            // 21
      return [ "left-aligned border-secondary-background-color ", Spacebars.mustache(view.lookup("preView")) ];    // 22
    }                                                                                                              // 23
  }, "\n                        ", HTML.BUTTON({                                                                   // 24
    class: "button primary previewBtn"                                                                             // 25
  }, Blaze.View("lookup:_", function() {                                                                           // 26
    return Spacebars.mustache(view.lookup("_"), "preview");                                                        // 27
  })), "\n                    "), "\n                    ", HTML.LI({                                              // 28
    class: "right-aligned border-secondary-background-color"                                                       // 29
  }, "\n                        ", HTML.BUTTON({                                                                   // 30
    class: "button cancel"                                                                                         // 31
  }, Blaze.View("lookup:_", function() {                                                                           // 32
    return Spacebars.mustache(view.lookup("_"), "Cancel");                                                         // 33
  })), "\n                        ", HTML.BUTTON({                                                                 // 34
    class: function() {                                                                                            // 35
      return [ "button primary ok ", Spacebars.mustache(view.lookup("preView")) ];                                 // 36
    }                                                                                                              // 37
  }, Blaze.View("lookup:_", function() {                                                                           // 38
    return Spacebars.mustache(view.lookup("_"), "Send");                                                           // 39
  })), "\n                    "), "\n                "), "\n            "), "\n\t");                               // 40
}));                                                                                                               // 41
                                                                                                                   // 42
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"chart.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/lily_ui-chart/client/chart.js                                                                          //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var ChartDialog = void 0;                                                                                          // 1
module.watch(require("./ChartDialog"), {                                                                           // 1
    ChartDialog: function (v) {                                                                                    // 1
        ChartDialog = v;                                                                                           // 1
    }                                                                                                              // 1
}, 0);                                                                                                             // 1
Template.chartDialog.events({                                                                                      // 3
    'click .chart-dialog .previewBtn': function () {                                                               // 4
        Highcharts.chart('chartPreview', JSON.parse($("#chartData").val()));                                       // 5
    },                                                                                                             // 6
    'click .chart-dialog .cancel': function () {                                                                   // 8
        ChartDialog.close();                                                                                       // 9
    },                                                                                                             // 10
    'click .chart-dialog .ok': function () {                                                                       // 12
        var msgObject = {                                                                                          // 13
            _id: Random.id(),                                                                                      // 14
            rid: ChartDialog.roomId,                                                                               // 15
            msg: "",                                                                                               // 16
            t: "chart",                                                                                            // 17
            chartData: JSON.parse($("#chartData").val())                                                           // 18
        };                                                                                                         // 13
        Meteor.call("sendMessage", msgObject);                                                                     // 21
        ChartDialog.close();                                                                                       // 22
    }                                                                                                              // 23
});                                                                                                                // 3
Template.chartDialog.helpers({                                                                                     // 26
    preView: function () {                                                                                         // 27
        return ChartDialog.previewMode;                                                                            // 28
    },                                                                                                             // 29
    chartData: function () {                                                                                       // 30
        return ChartDialog.chartData;                                                                              // 31
    }                                                                                                              // 32
});                                                                                                                // 26
Template.chartDialog.onRendered(function () {                                                                      // 35
    Highcharts.chart('chartPreview', JSON.parse($("#chartData").val()));                                           // 36
});                                                                                                                // 37
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ChartDialog.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/lily_ui-chart/client/ChartDialog.js                                                                    //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                            //
                                                                                                                   //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                   //
                                                                                                                   //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                  //
                                                                                                                   //
module.export({                                                                                                    // 1
	ChartDialog: function () {                                                                                        // 1
		return ChartDialog;                                                                                              // 1
	}                                                                                                                 // 1
});                                                                                                                // 1
var ChartDialog = new (function () {                                                                               // 1
	function _class() {                                                                                               // 1
		(0, _classCallCheck3.default)(this, _class);                                                                     // 1
	}                                                                                                                 // 1
                                                                                                                   //
	_class.initClass = function () {                                                                                  // 1
		function initClass() {                                                                                           // 1
			this.prototype.opened = false;                                                                                  // 3
			this.prototype.initiated = false;                                                                               // 4
			this.prototype.previewMode = show;                                                                              // 5
			this.prototype.roomId;                                                                                          // 6
			this.prototype.chartData; // = {"title": {"text": "Solar Employment Growth by Sector, 2010-2016"},              // 7
			//     "legend": {"layout": "vertical","align": "right","verticalAlign": "middle"},                             // 9
			//     "plotOptions": {"series": {"pointStart": 2010}},                                                         // 10
			//     "series": [{"name": "Installation","data": [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]},
			//         {"name": "Manufacturing","data": [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]},          // 12
			//         {"name": "Sales & Distribution","data": [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]},   // 13
			//         {"name": "Project Development","data": [null, null, 7988, 12169, 15112, 22452, 34400, 34227]}, {"name": "Other","data": [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]}]
			// };                                                                                                           // 15
                                                                                                                   //
			this.prototype.width = 480;                                                                                     // 16
			this.prototype.height = 680;                                                                                    // 17
		}                                                                                                                // 18
                                                                                                                   //
		return initClass;                                                                                                // 1
	}();                                                                                                              // 1
                                                                                                                   //
	_class.prototype.init = function () {                                                                             // 1
		function init() {                                                                                                // 1
			if (this.initiated) {                                                                                           // 21
				return;                                                                                                        // 22
			}                                                                                                               // 23
                                                                                                                   //
			this.initiated = true;                                                                                          // 25
			return Blaze.render(Template.chartDialog, document.body);                                                       // 26
		}                                                                                                                // 27
                                                                                                                   //
		return init;                                                                                                     // 1
	}();                                                                                                              // 1
                                                                                                                   //
	_class.prototype.open = function () {                                                                             // 1
		function open(source, roomId) {                                                                                  // 1
			if (!this.initiated) {                                                                                          // 30
				this.init();                                                                                                   // 31
			}                                                                                                               // 32
                                                                                                                   //
			this.source = source;                                                                                           // 34
			var dialog = $('.chart-dialog');                                                                                // 35
			this.setPosition(dialog, source);                                                                               // 36
			dialog.addClass('show');                                                                                        // 37
			this.opened = true;                                                                                             // 38
			this.roomId = roomId;                                                                                           // 39
			return this.initializeChart();                                                                                  // 41
		}                                                                                                                // 42
                                                                                                                   //
		return open;                                                                                                     // 1
	}();                                                                                                              // 1
                                                                                                                   //
	_class.prototype.preview = function () {                                                                          // 1
		function preview(source, roomId) {                                                                               // 1
			this.previewMode = "hidden";                                                                                    // 45
			this.roomId = roomId;                                                                                           // 46
			this.chartData = JSON.stringify($(source).data('chartdata'));                                                   // 47
			this.open(source);                                                                                              // 48
		}                                                                                                                // 49
                                                                                                                   //
		return preview;                                                                                                  // 1
	}();                                                                                                              // 1
                                                                                                                   //
	_class.prototype.close = function () {                                                                            // 1
		function close() {                                                                                               // 1
			$('.chart-dialog').removeClass('show');                                                                         // 52
			this.opened = false;                                                                                            // 53
			this.initiated = false;                                                                                         // 54
			this.previewMode = "";                                                                                          // 55
			this.chartData = "";                                                                                            // 56
			Blaze.remove(Blaze.currentView);                                                                                // 57
		}                                                                                                                // 58
                                                                                                                   //
		return close;                                                                                                    // 1
	}();                                                                                                              // 1
                                                                                                                   //
	_class.prototype.setPosition = function () {                                                                      // 1
		function setPosition(dialog, source) {                                                                           // 1
			var sourcePos = $(source).offset();                                                                             // 61
			var left = sourcePos.left - this.width + 100;                                                                   // 62
			var top = sourcePos.top - this.height - 40;                                                                     // 63
                                                                                                                   //
			if (left < 0) {                                                                                                 // 65
				left = 10;                                                                                                     // 66
			}                                                                                                               // 67
                                                                                                                   //
			if (top < 0) {                                                                                                  // 68
				top = 10;                                                                                                      // 69
			}                                                                                                               // 70
                                                                                                                   //
			return dialog.css({                                                                                             // 72
				top: top + "px",                                                                                               // 72
				left: left + "px"                                                                                              // 72
			});                                                                                                             // 72
		}                                                                                                                // 73
                                                                                                                   //
		return setPosition;                                                                                              // 1
	}();                                                                                                              // 1
                                                                                                                   //
	_class.prototype.initializeChart = function () {                                                                  // 1
		function initializeChart() {}                                                                                    // 1
                                                                                                                   //
		return initializeChart;                                                                                          // 1
	}();                                                                                                              // 1
                                                                                                                   //
	return _class;                                                                                                    // 1
}())();                                                                                                            // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".less",
    ".html"
  ]
});
require("./node_modules/meteor/lily:ui-chart/client/template.chart.js");
require("./node_modules/meteor/lily:ui-chart/client/chart.js");
var exports = require("./node_modules/meteor/lily:ui-chart/client/ChartDialog.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['lily:ui-chart'] = exports;

})();
