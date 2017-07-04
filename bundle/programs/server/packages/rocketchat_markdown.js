(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var _ = Package.underscore._;
var s = Package['underscorestring:underscore.string'].s;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var Symbol = Package['ecmascript-runtime-server'].Symbol;
var Map = Package['ecmascript-runtime-server'].Map;
var Set = Package['ecmascript-runtime-server'].Set;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:markdown":{"settings.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_markdown/settings.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.startup(function () {                                                                                           // 1
	RocketChat.settings.add('Markdown_Headers', false, {                                                                  // 2
		type: 'boolean',                                                                                                     // 3
		group: 'Message',                                                                                                    // 4
		section: 'Markdown',                                                                                                 // 5
		"public": true                                                                                                       // 6
	});                                                                                                                   // 2
	return RocketChat.settings.add('Markdown_SupportSchemesForLink', 'http,https', {                                      // 9
		type: 'string',                                                                                                      // 10
		group: 'Message',                                                                                                    // 11
		section: 'Markdown',                                                                                                 // 12
		"public": true,                                                                                                      // 13
		i18nDescription: 'Markdown_SupportSchemesForLink_Description'                                                        // 14
	});                                                                                                                   // 9
});                                                                                                                    // 16
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"markdown.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_markdown/markdown.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
/*                                                                                                                     // 1
 * Markdown is a named function that will parse markdown syntax                                                        //
 * @param {Object} message - The message object                                                                        //
 */var MarkdownClass = function () {                                                                                   //
	function MarkdownClass() {                                                                                            //
		(0, _classCallCheck3.default)(this, MarkdownClass);                                                                  //
	}                                                                                                                     //
                                                                                                                       //
	MarkdownClass.prototype.parse = function () {                                                                         //
		function parse(text) {                                                                                               //
			return this.parseNotEscaped(_.escapeHTML(text));                                                                    // 8
		}                                                                                                                    // 9
                                                                                                                       //
		return parse;                                                                                                        //
	}();                                                                                                                  //
                                                                                                                       //
	MarkdownClass.prototype.parseNotEscaped = function () {                                                               //
		function parseNotEscaped(msg) {                                                                                      //
			var schemes = RocketChat.settings.get('Markdown_SupportSchemesForLink').split(',').join('|'); // Support ![alt text](http://image url)
                                                                                                                       //
			msg = msg.replace(new RegExp("!\\[([^\\]]+)\\]\\(((?:" + schemes + "):\\/\\/[^\\)]+)\\)", 'gm'), function (match, title, url) {
				var target = url.indexOf(Meteor.absoluteUrl()) === 0 ? '' : '_blank';                                              // 16
				return "<a href=\"" + _.escapeHTML(url) + "\" title=\"" + _.escapeHTML(title) + "\" target=\"" + _.escapeHTML(target) + "\"><div class=\"inline-image\" style=\"background-image: url(" + _.escapeHTML(url) + ");\"></div></a>";
			}); // Support [Text](http://link)                                                                                  // 18
                                                                                                                       //
			msg = msg.replace(new RegExp("\\[([^\\]]+)\\]\\(((?:" + schemes + "):\\/\\/[^\\)]+)\\)", 'gm'), function (match, title, url) {
				var target = url.indexOf(Meteor.absoluteUrl()) === 0 ? '' : '_blank';                                              // 22
				return "<a href=\"" + _.escapeHTML(url) + "\" target=\"" + _.escapeHTML(target) + "\">" + _.escapeHTML(title) + "</a>";
			}); // Support <http://link|Text>                                                                                   // 24
                                                                                                                       //
			msg = msg.replace(new RegExp("(?:<|&lt;)((?:" + schemes + "):\\/\\/[^\\|]+)\\|(.+?)(?=>|&gt;)(?:>|&gt;)", 'gm'), function (match, url, title) {
				var target = url.indexOf(Meteor.absoluteUrl()) === 0 ? '' : '_blank';                                              // 28
				return "<a href=\"" + _.escapeHTML(url) + "\" target=\"" + _.escapeHTML(target) + "\">" + _.escapeHTML(title) + "</a>";
			});                                                                                                                 // 30
                                                                                                                       //
			if (RocketChat.settings.get('Markdown_Headers')) {                                                                  // 32
				// Support # Text for h1                                                                                           // 33
				msg = msg.replace(/^# (([\S\w\d-_\/\*\.,\\][ \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]?)+)/gm, '<h1>$1</h1>'); // Support # Text for h2
                                                                                                                       //
				msg = msg.replace(/^## (([\S\w\d-_\/\*\.,\\][ \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]?)+)/gm, '<h2>$1</h2>'); // Support # Text for h3
                                                                                                                       //
				msg = msg.replace(/^### (([\S\w\d-_\/\*\.,\\][ \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]?)+)/gm, '<h3>$1</h3>'); // Support # Text for h4
                                                                                                                       //
				msg = msg.replace(/^#### (([\S\w\d-_\/\*\.,\\][ \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]?)+)/gm, '<h4>$1</h4>');
			} // Support *text* to make bold                                                                                    // 44
                                                                                                                       //
                                                                                                                       //
			msg = msg.replace(/(^|&gt;|[ >_~`])\*{1,2}([^\*\r\n]+)\*{1,2}([<_~`]|\B|\b|$)/gm, '$1<span class="copyonly">*</span><strong>$2</strong><span class="copyonly">*</span>$3'); // Support _text_ to make italics
                                                                                                                       //
			msg = msg.replace(/(^|&gt;|[ >*~`])\_([^\_\r\n]+)\_([<*~`]|\B|\b|$)/gm, '$1<span class="copyonly">_</span><em>$2</em><span class="copyonly">_</span>$3'); // Support ~text~ to strike through text
                                                                                                                       //
			msg = msg.replace(/(^|&gt;|[ >_*`])\~{1,2}([^~\r\n]+)\~{1,2}([<_*`]|\B|\b|$)/gm, '$1<span class="copyonly">~</span><strike>$2</strike><span class="copyonly">~</span>$3'); // Support for block quote
			// >>>                                                                                                              // 56
			// Text                                                                                                             // 57
			// <<<                                                                                                              // 58
                                                                                                                       //
			msg = msg.replace(/(?:&gt;){3}\n+([\s\S]*?)\n+(?:&lt;){3}/g, '<blockquote class="background-transparent-darker-before"><span class="copyonly">&gt;&gt;&gt;</span>$1<span class="copyonly">&lt;&lt;&lt;</span></blockquote>'); // Support >Text for quote
                                                                                                                       //
			msg = msg.replace(/^&gt;(.*)$/gm, '<blockquote class="background-transparent-darker-before"><span class="copyonly">&gt;</span>$1</blockquote>'); // Remove white-space around blockquote (prevent <br>). Because blockquote is block element.
                                                                                                                       //
			msg = msg.replace(/\s*<blockquote class="background-transparent-darker-before">/gm, '<blockquote class="background-transparent-darker-before">');
			msg = msg.replace(/<\/blockquote>\s*/gm, '</blockquote>'); // Remove new-line between blockquotes.                  // 66
                                                                                                                       //
			msg = msg.replace(/<\/blockquote>\n<blockquote/gm, '</blockquote><blockquote');                                     // 69
                                                                                                                       //
			if (typeof window !== 'undefined' && window !== null ? window.rocketDebug : undefined) {                            // 71
				console.log('Markdown', msg);                                                                                      // 71
			}                                                                                                                   // 71
                                                                                                                       //
			return msg;                                                                                                         // 73
		}                                                                                                                    // 74
                                                                                                                       //
		return parseNotEscaped;                                                                                              //
	}();                                                                                                                  //
                                                                                                                       //
	return MarkdownClass;                                                                                                 //
}();                                                                                                                   //
                                                                                                                       //
var Markdown = new MarkdownClass();                                                                                    // 77
RocketChat.Markdown = Markdown; // renderMessage already did html escape                                               // 78
                                                                                                                       //
var MarkdownMessage = function (message) {                                                                             // 81
	if (_.trim(message != null ? message.html : undefined)) {                                                             // 82
		message.html = Markdown.parseNotEscaped(message.html);                                                               // 83
	}                                                                                                                     // 84
                                                                                                                       //
	return message;                                                                                                       // 86
};                                                                                                                     // 87
                                                                                                                       //
RocketChat.callbacks.add('renderMessage', MarkdownMessage, RocketChat.callbacks.priority.HIGH, 'markdown');            // 89
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 91
	Blaze.registerHelper('RocketChatMarkdown', function (text) {                                                          // 92
		return Markdown.parse(text);                                                                                         // 92
	});                                                                                                                   // 92
}                                                                                                                      // 93
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"markdowncode.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_markdown/markdowncode.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
var hljs = void 0;                                                                                                     // 1
module.watch(require("highlight.js"), {                                                                                // 1
	"default": function (v) {                                                                                             // 1
		hljs = v;                                                                                                            // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
                                                                                                                       //
var MarkdownCode = function () {                                                                                       //
	function MarkdownCode(message) {                                                                                      // 8
		(0, _classCallCheck3.default)(this, MarkdownCode);                                                                   // 8
                                                                                                                       //
		if (s.trim(message.html)) {                                                                                          // 10
			if (message.tokens == null) {                                                                                       // 11
				message.tokens = [];                                                                                               // 12
			}                                                                                                                   // 13
                                                                                                                       //
			MarkdownCode.handle_codeblocks(message);                                                                            // 15
			MarkdownCode.handle_inlinecode(message);                                                                            // 16
                                                                                                                       //
			if (window && window.rocketDebug) {                                                                                 // 18
				console.log('Markdown', message);                                                                                  // 19
			}                                                                                                                   // 20
		}                                                                                                                    // 21
                                                                                                                       //
		return message;                                                                                                      // 23
	}                                                                                                                     // 24
                                                                                                                       //
	MarkdownCode.handle_inlinecode = function () {                                                                        //
		function handle_inlinecode(message) {                                                                                //
			// Support `text`                                                                                                   // 27
			return message.html = message.html.replace(/(^|&gt;|[ >_*~])\`([^`\r\n]+)\`([<_*~]|\B|\b|$)/gm, function (match, p1, p2, p3) {
				var token = "=!=" + Random.id() + "=!=";                                                                           // 29
				message.tokens.push({                                                                                              // 31
					token: token,                                                                                                     // 32
					text: p1 + "<span class=\"copyonly\">`</span><span><code class=\"code-colors inline\">" + p2 + "</code></span><span class=\"copyonly\">`</span>" + p3,
					noHtml: match                                                                                                     // 34
				});                                                                                                                // 31
				return token;                                                                                                      // 37
			});                                                                                                                 // 38
		}                                                                                                                    // 39
                                                                                                                       //
		return handle_inlinecode;                                                                                            //
	}();                                                                                                                  //
                                                                                                                       //
	MarkdownCode.handle_codeblocks = function () {                                                                        //
		function handle_codeblocks(message) {                                                                                //
			// Count occurencies of ```                                                                                         // 42
			var count = (message.html.match(/```/g) || []).length;                                                              // 43
                                                                                                                       //
			if (count) {                                                                                                        // 45
				// Check if we need to add a final ```                                                                             // 47
				if (count % 2 > 0) {                                                                                               // 48
					message.html = message.html + "\n```";                                                                            // 49
					message.msg = message.msg + "\n```";                                                                              // 50
				} // Separate text in code blocks and non code blocks                                                              // 51
                                                                                                                       //
                                                                                                                       //
				var msgParts = message.html.split(/(^.*)(```(?:[a-zA-Z]+)?(?:(?:.|\n)*?)```)(.*\n?)$/gm);                          // 54
                                                                                                                       //
				for (var index = 0; index < msgParts.length; index++) {                                                            // 56
					// Verify if this part is code                                                                                    // 57
					var part = msgParts[index];                                                                                       // 58
					var codeMatch = part.match(/^```(.*[\n\ ]?)([\s\S]*?)```+?$/);                                                    // 59
                                                                                                                       //
					if (codeMatch != null) {                                                                                          // 61
						// Process highlight if this part is code                                                                        // 62
						var code = void 0;                                                                                               // 63
						var lang = void 0;                                                                                               // 64
						var result = void 0;                                                                                             // 65
						var singleLine = codeMatch[0].indexOf('\n') === -1;                                                              // 66
                                                                                                                       //
						if (singleLine) {                                                                                                // 68
							lang = '';                                                                                                      // 69
							code = _.unescapeHTML(codeMatch[1] + codeMatch[2]);                                                             // 70
						} else {                                                                                                         // 71
							lang = codeMatch[1];                                                                                            // 72
							code = _.unescapeHTML(codeMatch[2]);                                                                            // 73
						}                                                                                                                // 74
                                                                                                                       //
						if (s.trim(lang) === '') {                                                                                       // 76
							lang = '';                                                                                                      // 77
						}                                                                                                                // 78
                                                                                                                       //
						if (!Array.from(hljs.listLanguages()).includes(s.trim(lang))) {                                                  // 80
							result = hljs.highlightAuto(lang + code);                                                                       // 81
						} else {                                                                                                         // 82
							result = hljs.highlight(s.trim(lang), code);                                                                    // 83
						}                                                                                                                // 84
                                                                                                                       //
						var token = "=!=" + Random.id() + "=!=";                                                                         // 86
						message.tokens.push({                                                                                            // 88
							highlight: true,                                                                                                // 89
							token: token,                                                                                                   // 90
							text: "<pre><code class='code-colors hljs " + result.language + "'><span class='copyonly'>```<br></span>" + result.value + "<span class='copyonly'><br>```</span></code></pre>",
							noHtml: "```\n" + s.stripTags(result.value) + "\n```"                                                           // 92
						});                                                                                                              // 88
						msgParts[index] = token;                                                                                         // 95
					} else {                                                                                                          // 96
						msgParts[index] = part;                                                                                          // 97
					}                                                                                                                 // 98
				} // Re-mount message                                                                                              // 99
                                                                                                                       //
                                                                                                                       //
				return message.html = msgParts.join('');                                                                           // 102
			}                                                                                                                   // 103
		}                                                                                                                    // 104
                                                                                                                       //
		return handle_codeblocks;                                                                                            //
	}();                                                                                                                  //
                                                                                                                       //
	return MarkdownCode;                                                                                                  //
}();                                                                                                                   //
                                                                                                                       //
RocketChat.MarkdownCode = MarkdownCode;                                                                                // 107
                                                                                                                       //
var MarkdownCodeCB = function (message) {                                                                              // 109
	return new MarkdownCode(message);                                                                                     // 109
}; // MarkdownCode gets higher priority over Markdown so it's possible place a callback in between (katex for exmaple)
                                                                                                                       //
                                                                                                                       //
RocketChat.callbacks.add('renderMessage', MarkdownCodeCB, RocketChat.callbacks.priority.HIGH - 2, 'markdowncode');     // 112
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:markdown/settings.js");
require("./node_modules/meteor/rocketchat:markdown/markdown.js");
require("./node_modules/meteor/rocketchat:markdown/markdowncode.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:markdown'] = {};

})();

//# sourceMappingURL=rocketchat_markdown.js.map
