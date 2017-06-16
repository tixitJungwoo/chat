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
var _ = Package.underscore._;
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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:spotify":{"lib":{"client":{"widget.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_spotify/lib/client/widget.js                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.registerHelper('replace', function (source, find, replace, option) {                                        // 1
	if (option.hash.regex === true) {                                                                                   // 2
		find = new RegExp(find);                                                                                           // 3
	}                                                                                                                   // 4
                                                                                                                     //
	return source.replace(find, replace);                                                                               // 5
});                                                                                                                  // 6
Template.registerHelper('match', function (source, regex) {                                                          // 8
	return new RegExp(regex).test(source);                                                                              // 8
});                                                                                                                  // 8
Template.oembedBaseWidget.onCreated(function () {                                                                    // 10
	if (this.data && this.data.meta && /^(music\.song|music\.album)$/.test(this.data.meta.ogType) && this.data.parsedUrl && this.data.parsedUrl.host === 'open.spotify.com') {
		return this.data._overrideTemplate = 'oembedSpotifyWidget';                                                        // 12
	}                                                                                                                   // 13
});                                                                                                                  // 14
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.oembedSpotifyWidget.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_spotify/lib/client/template.oembedSpotifyWidget.js                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("oembedSpotifyWidget");                                                                         // 2
Template["oembedSpotifyWidget"] = new Template("Template.oembedSpotifyWidget", (function() {                         // 3
  var view = this;                                                                                                   // 4
  return Blaze.If(function() {                                                                                       // 5
    return Spacebars.call(view.lookup("parsedUrl"));                                                                 // 6
  }, function() {                                                                                                    // 7
    return [ "\n\t\t", HTML.BLOCKQUOTE({                                                                             // 8
      class: "background-transparent-darker-before"                                                                  // 9
    }, "\n\t\t\t", HTML.A({                                                                                          // 10
      href: "https://www.spotify.com",                                                                               // 11
      style: "color: #9e9ea6"                                                                                        // 12
    }, "Spotify"), HTML.BR(), "\n\t\t\t", Blaze.If(function() {                                                      // 13
      return Spacebars.dataMustache(view.lookup("match"), Spacebars.dot(view.lookup("meta"), "ogAudio"), "spotify:artist:\\S+");
    }, function() {                                                                                                  // 15
      return [ "\n\t\t\t\t", HTML.A({                                                                                // 16
        href: function() {                                                                                           // 17
          return Spacebars.mustache(view.lookup("url"));                                                             // 18
        }                                                                                                            // 19
      }, Blaze.View("lookup:meta.ogTitle", function() {                                                              // 20
        return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(view.lookup("meta"), "ogTitle")));                 // 21
      })), "\n\t\t\t" ];                                                                                             // 22
    }, function() {                                                                                                  // 23
      return [ "\n\t\t\t\t", HTML.A({                                                                                // 24
        href: function() {                                                                                           // 25
          return Spacebars.mustache(view.lookup("url"));                                                             // 26
        }                                                                                                            // 27
      }, Blaze.View("lookup:replace", function() {                                                                   // 28
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("replace"), Spacebars.dot(view.lookup("meta"), "ogDescription"), ", an? (?:song|album) by (.+?) on Spotify", " - $1", Spacebars.kw({
          regex: true                                                                                                // 30
        })));                                                                                                        // 31
      })), "\n\t\t\t" ];                                                                                             // 32
    }), "\n\t\t\t", Blaze.If(function() {                                                                            // 33
      return Spacebars.call(view.lookup("collapsed"));                                                               // 34
    }, function() {                                                                                                  // 35
      return [ "\n\t\t\t\t", HTML.SPAN({                                                                             // 36
        class: "collapse-switch icon-right-dir",                                                                     // 37
        "data-url": function() {                                                                                     // 38
          return Spacebars.mustache(view.lookup("url"));                                                             // 39
        },                                                                                                           // 40
        "data-collapsed": function() {                                                                               // 41
          return Spacebars.mustache(view.lookup("collapsed"));                                                       // 42
        }                                                                                                            // 43
      }), "\n\t\t\t" ];                                                                                              // 44
    }, function() {                                                                                                  // 45
      return [ "\n\t\t\t\t", HTML.SPAN({                                                                             // 46
        class: "collapse-switch icon-down-dir",                                                                      // 47
        "data-url": function() {                                                                                     // 48
          return Spacebars.mustache(view.lookup("url"));                                                             // 49
        },                                                                                                           // 50
        "data-collapsed": function() {                                                                               // 51
          return Spacebars.mustache(view.lookup("collapsed"));                                                       // 52
        }                                                                                                            // 53
      }), "\n\t\t\t\t", HTML.IFRAME({                                                                                // 54
        width: "300",                                                                                                // 55
        height: "380",                                                                                               // 56
        src: function() {                                                                                            // 57
          return [ "https://embed.spotify.com/?uri=", Spacebars.mustache(view.lookup("url")) ];                      // 58
        },                                                                                                           // 59
        frameborder: "0"                                                                                             // 60
      }), HTML.BR(), "\n\t\t\t" ];                                                                                   // 61
    }), "\n\t\t"), "\n\t" ];                                                                                         // 62
  });                                                                                                                // 63
}));                                                                                                                 // 64
                                                                                                                     // 65
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"spotify.js":function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_spotify/lib/spotify.js                                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                              //
                                                                                                                     //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                     //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                    //
                                                                                                                     //
/*                                                                                                                   // 1
 * Spotify a named function that will process Spotify links or syntaxes (ex: spotify:track:1q6IK1l4qpYykOaWaLJkWG)   //
 * @param {Object} message - The message object                                                                      //
 */var process = function (message, source, callback) {                                                              //
	if (_.trim(source)) {                                                                                               // 7
		// Separate text in code blocks and non code blocks                                                                // 8
		var msgParts = source.split(/(```\w*[\n ]?[\s\S]*?```+?)|(`(?:[^`]+)`)/);                                          // 9
                                                                                                                     //
		for (var index = 0; index < msgParts.length; index++) {                                                            // 11
			// Verify if this part is code                                                                                    // 12
			var part = msgParts[index];                                                                                       // 13
                                                                                                                     //
			if ((part != null ? part.length > 0 : undefined) != null) {                                                       // 15
				var codeMatch = part.match(/(?:```(\w*)[\n ]?([\s\S]*?)```+?)|(?:`(?:[^`]+)`)/);                                 // 16
                                                                                                                     //
				if (codeMatch == null) {                                                                                         // 17
					callback(message, msgParts, index, part);                                                                       // 18
				}                                                                                                                // 19
			}                                                                                                                 // 20
		}                                                                                                                  // 21
	}                                                                                                                   // 22
};                                                                                                                   // 23
                                                                                                                     //
var Spotify = function () {                                                                                          //
	function Spotify() {                                                                                                //
		(0, _classCallCheck3.default)(this, Spotify);                                                                      //
	}                                                                                                                   //
                                                                                                                     //
	Spotify.transform = function () {                                                                                   //
		function transform(message) {                                                                                      //
			var urls = [];                                                                                                    // 26
                                                                                                                     //
			if (Array.isArray(message.urls)) {                                                                                // 27
				urls = urls.concat(message.urls);                                                                                // 28
			}                                                                                                                 // 29
                                                                                                                     //
			var changed = false;                                                                                              // 31
			process(message, message.msg, function (message, msgParts, index, part) {                                         // 33
				var re = /(?:^|\s)spotify:([^:\s]+):([^:\s]+)(?::([^:\s]+))?(?::(\S+))?(?:\s|$)/g;                               // 34
				var match = void 0;                                                                                              // 36
                                                                                                                     //
				while (match = re.exec(part)) {                                                                                  // 37
					var data = _.filter(match.slice(1), function (value) {                                                          // 38
						return value != null;                                                                                          // 38
					});                                                                                                             // 38
                                                                                                                     //
					var path = _.map(data, function (value) {                                                                       // 39
						return _.escape(value);                                                                                        // 39
					}).join('/');                                                                                                   // 39
                                                                                                                     //
					var url = "https://open.spotify.com/" + path;                                                                   // 40
					urls.push({                                                                                                     // 41
						url: url,                                                                                                      // 41
						'source': "spotify:" + data.join(':')                                                                          // 41
					});                                                                                                             // 41
					changed = true;                                                                                                 // 42
				}                                                                                                                // 43
			}); // Re-mount message                                                                                           // 45
                                                                                                                     //
			if (changed) {                                                                                                    // 48
				message.urls = urls;                                                                                             // 49
			}                                                                                                                 // 50
                                                                                                                     //
			return message;                                                                                                   // 52
		}                                                                                                                  // 53
                                                                                                                     //
		return transform;                                                                                                  //
	}();                                                                                                                //
                                                                                                                     //
	Spotify.render = function () {                                                                                      //
		function render(message) {                                                                                         //
			process(message, message.html, function (message, msgParts, index, part) {                                        // 56
				if (Array.isArray(message.urls)) {                                                                               // 57
					for (var _iterator = Array.from(message.urls), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
						var _ref;                                                                                                      // 58
                                                                                                                     //
						if (_isArray) {                                                                                                // 58
							if (_i >= _iterator.length) break;                                                                            // 58
							_ref = _iterator[_i++];                                                                                       // 58
						} else {                                                                                                       // 58
							_i = _iterator.next();                                                                                        // 58
							if (_i.done) break;                                                                                           // 58
							_ref = _i.value;                                                                                              // 58
						}                                                                                                              // 58
                                                                                                                     //
						var item = _ref;                                                                                               // 58
                                                                                                                     //
						if (item.source) {                                                                                             // 59
							var quotedSource = item.source.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&');                                        // 60
							var re = new RegExp("(^|\\s)" + quotedSource + "(\\s|$)", 'g');                                               // 61
							msgParts[index] = part.replace(re, "$1<a href=\"" + item.url + "\" target=\"_blank\">" + item.source + "</a>$2");
						}                                                                                                              // 63
					}                                                                                                               // 64
                                                                                                                     //
					return message.html = msgParts.join('');                                                                        // 65
				}                                                                                                                // 66
			});                                                                                                               // 67
			return message;                                                                                                   // 69
		}                                                                                                                  // 70
                                                                                                                     //
		return render;                                                                                                     //
	}();                                                                                                                //
                                                                                                                     //
	return Spotify;                                                                                                     //
}();                                                                                                                 //
                                                                                                                     //
RocketChat.callbacks.add('beforeSaveMessage', Spotify.transform, RocketChat.callbacks.priority.LOW, 'spotify-save');
RocketChat.callbacks.add('renderMessage', Spotify.render, RocketChat.callbacks.priority.MEDIUM, 'spotify-render');   // 74
RocketChat.Spotify = Spotify;                                                                                        // 75
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html"
  ]
});
require("./node_modules/meteor/rocketchat:spotify/lib/client/widget.js");
require("./node_modules/meteor/rocketchat:spotify/lib/client/template.oembedSpotifyWidget.js");
require("./node_modules/meteor/rocketchat:spotify/lib/spotify.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:spotify'] = {};

})();
