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
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:autolinker":{"client.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_autolinker/client.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Autolinker = void 0;                                                                                               // 1
module.watch(require("autolinker"), {                                                                                  // 1
	"default": function (v) {                                                                                             // 1
		Autolinker = v;                                                                                                      // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
                                                                                                                       //
function AutoLinker(message) {                                                                                         // 8
	if (_.trim(message.html)) {                                                                                           // 9
		var regUrls = new RegExp(RocketChat.settings.get('AutoLinker_UrlsRegExp'));                                          // 10
		var autolinker = new Autolinker({                                                                                    // 12
			stripPrefix: RocketChat.settings.get('AutoLinker_StripPrefix'),                                                     // 13
			urls: {                                                                                                             // 14
				schemeMatches: RocketChat.settings.get('AutoLinker_Urls_Scheme'),                                                  // 15
				wwwMatches: RocketChat.settings.get('AutoLinker_Urls_www'),                                                        // 16
				tldMatches: RocketChat.settings.get('AutoLinker_Urls_TLD')                                                         // 17
			},                                                                                                                  // 14
			email: RocketChat.settings.get('AutoLinker_Email'),                                                                 // 19
			phone: RocketChat.settings.get('AutoLinker_Phone'),                                                                 // 20
			twitter: false,                                                                                                     // 21
			replaceFn: function (match) {                                                                                       // 22
				if (match.getType() === 'url') {                                                                                   // 23
					if (regUrls.test(match.matchedText)) {                                                                            // 24
						if (match.matchedText.indexOf(Meteor.absoluteUrl()) === 0) {                                                     // 25
							var tag = match.buildTag(); // returns an `Autolinker.HtmlTag` instance for an <a> tag                          // 26
                                                                                                                       //
							tag.setAttr('target', ''); // sets target to empty, instead of _blank                                           // 27
                                                                                                                       //
							return tag;                                                                                                     // 28
						}                                                                                                                // 29
                                                                                                                       //
						return true;                                                                                                     // 31
					}                                                                                                                 // 32
				}                                                                                                                  // 33
                                                                                                                       //
				return null;                                                                                                       // 35
			}                                                                                                                   // 36
		});                                                                                                                  // 12
		var regNonAutoLink = /(```\w*[\n ]?[\s\S]*?```+?)|(`(?:[^`]+)`)/;                                                    // 39
                                                                                                                       //
		if (RocketChat.settings.get('Katex_Enabled')) {                                                                      // 40
			regNonAutoLink = /(```\w*[\n ]?[\s\S]*?```+?)|(`(?:[^`]+)`)|(\\\(\w*[\n ]?[\s\S]*?\\\)+?)/;                         // 41
		} // Separate text in code blocks and non code blocks                                                                // 42
                                                                                                                       //
                                                                                                                       //
		var msgParts = message.html.split(regNonAutoLink);                                                                   // 45
		msgParts.forEach(function (part, index) {                                                                            // 47
			if (part && part.length > 0) {                                                                                      // 48
				// Verify if this part is code                                                                                     // 49
				var codeMatch = part.match(regNonAutoLink);                                                                        // 50
                                                                                                                       //
				if (!codeMatch) {                                                                                                  // 51
					msgParts[index] = autolinker.link(part);                                                                          // 52
				}                                                                                                                  // 53
			}                                                                                                                   // 54
		}); // Re-mount message                                                                                              // 55
                                                                                                                       //
		message.html = msgParts.join('');                                                                                    // 58
	}                                                                                                                     // 59
                                                                                                                       //
	return message;                                                                                                       // 61
}                                                                                                                      // 62
                                                                                                                       //
RocketChat.callbacks.add('renderMessage', AutoLinker);                                                                 // 64
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"node_modules":{"autolinker":{"package.json":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// .npm/package/node_modules/autolinker/package.json                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.name = "autolinker";                                                                                           // 1
exports.version = "1.4.0";                                                                                             // 2
exports.main = "dist/Autolinker.js";                                                                                   // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"dist":{"Autolinker.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/rocketchat_autolinker/node_modules/autolinker/dist/Autolinker.js                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*!                                                                                                                    // 1
 * Autolinker.js                                                                                                       // 2
 * 1.4.0                                                                                                               // 3
 *                                                                                                                     // 4
 * Copyright(c) 2016 Gregory Jacobs <greg@greg-jacobs.com>                                                             // 5
 * MIT License                                                                                                         // 6
 *                                                                                                                     // 7
 * https://github.com/gregjacobs/Autolinker.js                                                                         // 8
 */                                                                                                                    // 9
;(function(root, factory) {                                                                                            // 10
  if (typeof define === 'function' && define.amd) {                                                                    // 11
    define([], factory);                                                                                               // 12
  } else if (typeof exports === 'object') {                                                                            // 13
    module.exports = factory();                                                                                        // 14
  } else {                                                                                                             // 15
    root.Autolinker = factory();                                                                                       // 16
  }                                                                                                                    // 17
}(this, function() {                                                                                                   // 18
/**                                                                                                                    // 19
 * @class Autolinker                                                                                                   // 20
 * @extends Object                                                                                                     // 21
 *                                                                                                                     // 22
 * Utility class used to process a given string of text, and wrap the matches in                                       // 23
 * the appropriate anchor (&lt;a&gt;) tags to turn them into links.                                                    // 24
 *                                                                                                                     // 25
 * Any of the configuration options may be provided in an Object (map) provided                                        // 26
 * to the Autolinker constructor, which will configure how the {@link #link link()}                                    // 27
 * method will process the links.                                                                                      // 28
 *                                                                                                                     // 29
 * For example:                                                                                                        // 30
 *                                                                                                                     // 31
 *     var autolinker = new Autolinker( {                                                                              // 32
 *         newWindow : false,                                                                                          // 33
 *         truncate  : 30                                                                                              // 34
 *     } );                                                                                                            // 35
 *                                                                                                                     // 36
 *     var html = autolinker.link( "Joe went to www.yahoo.com" );                                                      // 37
 *     // produces: 'Joe went to <a href="http://www.yahoo.com">yahoo.com</a>'                                         // 38
 *                                                                                                                     // 39
 *                                                                                                                     // 40
 * The {@link #static-link static link()} method may also be used to inline                                            // 41
 * options into a single call, which may be more convenient for one-off uses.                                          // 42
 * For example:                                                                                                        // 43
 *                                                                                                                     // 44
 *     var html = Autolinker.link( "Joe went to www.yahoo.com", {                                                      // 45
 *         newWindow : false,                                                                                          // 46
 *         truncate  : 30                                                                                              // 47
 *     } );                                                                                                            // 48
 *     // produces: 'Joe went to <a href="http://www.yahoo.com">yahoo.com</a>'                                         // 49
 *                                                                                                                     // 50
 *                                                                                                                     // 51
 * ## Custom Replacements of Links                                                                                     // 52
 *                                                                                                                     // 53
 * If the configuration options do not provide enough flexibility, a {@link #replaceFn}                                // 54
 * may be provided to fully customize the output of Autolinker. This function is                                       // 55
 * called once for each URL/Email/Phone#/Hashtag/Mention (Twitter, Instagram)                                          // 56
 * match that is encountered.                                                                                          // 57
 *                                                                                                                     // 58
 * For example:                                                                                                        // 59
 *                                                                                                                     // 60
 *     var input = "...";  // string with URLs, Email Addresses, Phone #s, Hashtags, and Mentions (Twitter, Instagram)
 *                                                                                                                     // 62
 *     var linkedText = Autolinker.link( input, {                                                                      // 63
 *         replaceFn : function( match ) {                                                                             // 64
 *             console.log( "href = ", match.getAnchorHref() );                                                        // 65
 *             console.log( "text = ", match.getAnchorText() );                                                        // 66
 *                                                                                                                     // 67
 *             switch( match.getType() ) {                                                                             // 68
 *                 case 'url' :                                                                                        // 69
 *                     console.log( "url: ", match.getUrl() );                                                         // 70
 *                                                                                                                     // 71
 *                     if( match.getUrl().indexOf( 'mysite.com' ) === -1 ) {                                           // 72
 *                         var tag = match.buildTag();  // returns an `Autolinker.HtmlTag` instance, which provides mutator methods for easy changes
 *                         tag.setAttr( 'rel', 'nofollow' );                                                           // 74
 *                         tag.addClass( 'external-link' );                                                            // 75
 *                                                                                                                     // 76
 *                         return tag;                                                                                 // 77
 *                                                                                                                     // 78
 *                     } else {                                                                                        // 79
 *                         return true;  // let Autolinker perform its normal anchor tag replacement                   // 80
 *                     }                                                                                               // 81
 *                                                                                                                     // 82
 *                 case 'email' :                                                                                      // 83
 *                     var email = match.getEmail();                                                                   // 84
 *                     console.log( "email: ", email );                                                                // 85
 *                                                                                                                     // 86
 *                     if( email === "my@own.address" ) {                                                              // 87
 *                         return false;  // don't auto-link this particular email address; leave as-is                // 88
 *                     } else {                                                                                        // 89
 *                         return;  // no return value will have Autolinker perform its normal anchor tag replacement (same as returning `true`)
 *                     }                                                                                               // 91
 *                                                                                                                     // 92
 *                 case 'phone' :                                                                                      // 93
 *                     var phoneNumber = match.getPhoneNumber();                                                       // 94
 *                     console.log( phoneNumber );                                                                     // 95
 *                                                                                                                     // 96
 *                     return '<a href="http://newplace.to.link.phone.numbers.to/">' + phoneNumber + '</a>';           // 97
 *                                                                                                                     // 98
 *                 case 'hashtag' :                                                                                    // 99
 *                     var hashtag = match.getHashtag();                                                               // 100
 *                     console.log( hashtag );                                                                         // 101
 *                                                                                                                     // 102
 *                     return '<a href="http://newplace.to.link.hashtag.handles.to/">' + hashtag + '</a>';             // 103
 *                                                                                                                     // 104
 *                 case 'mention' :                                                                                    // 105
 *                     var mention = match.getMention();                                                               // 106
 *                     console.log( mention );                                                                         // 107
 *                                                                                                                     // 108
 *                     return '<a href="http://newplace.to.link.mention.to/">' + mention + '</a>';                     // 109
 *             }                                                                                                       // 110
 *         }                                                                                                           // 111
 *     } );                                                                                                            // 112
 *                                                                                                                     // 113
 *                                                                                                                     // 114
 * The function may return the following values:                                                                       // 115
 *                                                                                                                     // 116
 * - `true` (Boolean): Allow Autolinker to replace the match as it normally                                            // 117
 *   would.                                                                                                            // 118
 * - `false` (Boolean): Do not replace the current match at all - leave as-is.                                         // 119
 * - Any String: If a string is returned from the function, the string will be                                         // 120
 *   used directly as the replacement HTML for the match.                                                              // 121
 * - An {@link Autolinker.HtmlTag} instance, which can be used to build/modify                                         // 122
 *   an HTML tag before writing out its HTML text.                                                                     // 123
 *                                                                                                                     // 124
 * @constructor                                                                                                        // 125
 * @param {Object} [cfg] The configuration options for the Autolinker instance,                                        // 126
 *   specified in an Object (map).                                                                                     // 127
 */                                                                                                                    // 128
var Autolinker = function( cfg ) {                                                                                     // 129
	cfg = cfg || {};                                                                                                      // 130
                                                                                                                       // 131
	this.version = Autolinker.version;                                                                                    // 132
                                                                                                                       // 133
	this.urls = this.normalizeUrlsCfg( cfg.urls );                                                                        // 134
	this.email = typeof cfg.email === 'boolean' ? cfg.email : true;                                                       // 135
	this.phone = typeof cfg.phone === 'boolean' ? cfg.phone : true;                                                       // 136
	this.hashtag = cfg.hashtag || false;                                                                                  // 137
	this.mention = cfg.mention || false;                                                                                  // 138
	this.newWindow = typeof cfg.newWindow === 'boolean' ? cfg.newWindow : true;                                           // 139
	this.stripPrefix = this.normalizeStripPrefixCfg( cfg.stripPrefix );                                                   // 140
	this.stripTrailingSlash = typeof cfg.stripTrailingSlash === 'boolean' ? cfg.stripTrailingSlash : true;                // 141
                                                                                                                       // 142
	// Validate the value of the `mention` cfg                                                                            // 143
	var mention = this.mention;                                                                                           // 144
	if( mention !== false && mention !== 'twitter' && mention !== 'instagram' ) {                                         // 145
		throw new Error( "invalid `mention` cfg - see docs" );                                                               // 146
	}                                                                                                                     // 147
                                                                                                                       // 148
	// Validate the value of the `hashtag` cfg                                                                            // 149
	var hashtag = this.hashtag;                                                                                           // 150
	if( hashtag !== false && hashtag !== 'twitter' && hashtag !== 'facebook' && hashtag !== 'instagram' ) {               // 151
		throw new Error( "invalid `hashtag` cfg - see docs" );                                                               // 152
	}                                                                                                                     // 153
                                                                                                                       // 154
	this.truncate = this.normalizeTruncateCfg( cfg.truncate );                                                            // 155
	this.className = cfg.className || '';                                                                                 // 156
	this.replaceFn = cfg.replaceFn || null;                                                                               // 157
	this.context = cfg.context || this;                                                                                   // 158
                                                                                                                       // 159
	this.htmlParser = null;                                                                                               // 160
	this.matchers = null;                                                                                                 // 161
	this.tagBuilder = null;                                                                                               // 162
};                                                                                                                     // 163
                                                                                                                       // 164
                                                                                                                       // 165
                                                                                                                       // 166
/**                                                                                                                    // 167
 * Automatically links URLs, Email addresses, Phone Numbers, Twitter handles,                                          // 168
 * Hashtags, and Mentions found in the given chunk of HTML. Does not link URLs                                         // 169
 * found within HTML tags.                                                                                             // 170
 *                                                                                                                     // 171
 * For instance, if given the text: `You should go to http://www.yahoo.com`,                                           // 172
 * then the result will be `You should go to &lt;a href="http://www.yahoo.com"&gt;http://www.yahoo.com&lt;/a&gt;`      // 173
 *                                                                                                                     // 174
 * Example:                                                                                                            // 175
 *                                                                                                                     // 176
 *     var linkedText = Autolinker.link( "Go to google.com", { newWindow: false } );                                   // 177
 *     // Produces: "Go to <a href="http://google.com">google.com</a>"                                                 // 178
 *                                                                                                                     // 179
 * @static                                                                                                             // 180
 * @param {String} textOrHtml The HTML or text to find matches within (depending                                       // 181
 *   on if the {@link #urls}, {@link #email}, {@link #phone}, {@link #mention},                                        // 182
 *   {@link #hashtag}, and {@link #mention} options are enabled).                                                      // 183
 * @param {Object} [options] Any of the configuration options for the Autolinker                                       // 184
 *   class, specified in an Object (map). See the class description for an                                             // 185
 *   example call.                                                                                                     // 186
 * @return {String} The HTML text, with matches automatically linked.                                                  // 187
 */                                                                                                                    // 188
Autolinker.link = function( textOrHtml, options ) {                                                                    // 189
	var autolinker = new Autolinker( options );                                                                           // 190
	return autolinker.link( textOrHtml );                                                                                 // 191
};                                                                                                                     // 192
                                                                                                                       // 193
                                                                                                                       // 194
                                                                                                                       // 195
/**                                                                                                                    // 196
 * Parses the input `textOrHtml` looking for URLs, email addresses, phone                                              // 197
 * numbers, username handles, and hashtags (depending on the configuration                                             // 198
 * of the Autolinker instance), and returns an array of {@link Autolinker.match.Match}                                 // 199
 * objects describing those matches (without making any replacements).                                                 // 200
 *                                                                                                                     // 201
 * Note that if parsing multiple pieces of text, it is slightly more efficient                                         // 202
 * to create an Autolinker instance, and use the instance-level {@link #parse}                                         // 203
 * method.                                                                                                             // 204
 *                                                                                                                     // 205
 * Example:                                                                                                            // 206
 *                                                                                                                     // 207
 *     var matches = Autolinker.parse( "Hello google.com, I am asdf@asdf.com", {                                       // 208
 *         urls: true,                                                                                                 // 209
 *         email: true                                                                                                 // 210
 *     } );                                                                                                            // 211
 *                                                                                                                     // 212
 *     console.log( matches.length );           // 2                                                                   // 213
 *     console.log( matches[ 0 ].getType() );   // 'url'                                                               // 214
 *     console.log( matches[ 0 ].getUrl() );    // 'google.com'                                                        // 215
 *     console.log( matches[ 1 ].getType() );   // 'email'                                                             // 216
 *     console.log( matches[ 1 ].getEmail() );  // 'asdf@asdf.com'                                                     // 217
 *                                                                                                                     // 218
 * @static                                                                                                             // 219
 * @param {String} textOrHtml The HTML or text to find matches within                                                  // 220
 *   (depending on if the {@link #urls}, {@link #email}, {@link #phone},                                               // 221
 *   {@link #hashtag}, and {@link #mention} options are enabled).                                                      // 222
 * @param {Object} [options] Any of the configuration options for the Autolinker                                       // 223
 *   class, specified in an Object (map). See the class description for an                                             // 224
 *   example call.                                                                                                     // 225
 * @return {Autolinker.match.Match[]} The array of Matches found in the                                                // 226
 *   given input `textOrHtml`.                                                                                         // 227
 */                                                                                                                    // 228
Autolinker.parse = function( textOrHtml, options ) {                                                                   // 229
	var autolinker = new Autolinker( options );                                                                           // 230
	return autolinker.parse( textOrHtml );                                                                                // 231
};                                                                                                                     // 232
                                                                                                                       // 233
                                                                                                                       // 234
/**                                                                                                                    // 235
 * @static                                                                                                             // 236
 * @property {String} version (readonly)                                                                               // 237
 *                                                                                                                     // 238
 * The Autolinker version number in the form major.minor.patch                                                         // 239
 *                                                                                                                     // 240
 * Ex: 0.25.1                                                                                                          // 241
 */                                                                                                                    // 242
Autolinker.version = '1.4.0';                                                                                          // 243
                                                                                                                       // 244
                                                                                                                       // 245
Autolinker.prototype = {                                                                                               // 246
	constructor : Autolinker,  // fix constructor property                                                                // 247
                                                                                                                       // 248
	/**                                                                                                                   // 249
	 * @cfg {Boolean/Object} [urls]                                                                                       // 250
	 *                                                                                                                    // 251
	 * `true` if URLs should be automatically linked, `false` if they should not                                          // 252
	 * be. Defaults to `true`.                                                                                            // 253
	 *                                                                                                                    // 254
	 * Examples:                                                                                                          // 255
	 *                                                                                                                    // 256
	 *     urls: true                                                                                                     // 257
	 *                                                                                                                    // 258
	 *     // or                                                                                                          // 259
	 *                                                                                                                    // 260
	 *     urls: {                                                                                                        // 261
	 *         schemeMatches : true,                                                                                      // 262
	 *         wwwMatches    : true,                                                                                      // 263
	 *         tldMatches    : true                                                                                       // 264
	 *     }                                                                                                              // 265
	 *                                                                                                                    // 266
	 * As shown above, this option also accepts an Object form with 3 properties                                          // 267
	 * to allow for more customization of what exactly gets linked. All default                                           // 268
	 * to `true`:                                                                                                         // 269
	 *                                                                                                                    // 270
	 * @cfg {Boolean} [urls.schemeMatches] `true` to match URLs found prefixed                                            // 271
	 *   with a scheme, i.e. `http://google.com`, or `other+scheme://google.com`,                                         // 272
	 *   `false` to prevent these types of matches.                                                                       // 273
	 * @cfg {Boolean} [urls.wwwMatches] `true` to match urls found prefixed with                                          // 274
	 *   `'www.'`, i.e. `www.google.com`. `false` to prevent these types of                                               // 275
	 *   matches. Note that if the URL had a prefixed scheme, and                                                         // 276
	 *   `schemeMatches` is true, it will still be linked.                                                                // 277
	 * @cfg {Boolean} [urls.tldMatches] `true` to match URLs with known top                                               // 278
	 *   level domains (.com, .net, etc.) that are not prefixed with a scheme or                                          // 279
	 *   `'www.'`. This option attempts to match anything that looks like a URL                                           // 280
	 *   in the given text. Ex: `google.com`, `asdf.org/?page=1`, etc. `false`                                            // 281
	 *   to prevent these types of matches.                                                                               // 282
	 */                                                                                                                   // 283
                                                                                                                       // 284
	/**                                                                                                                   // 285
	 * @cfg {Boolean} [email=true]                                                                                        // 286
	 *                                                                                                                    // 287
	 * `true` if email addresses should be automatically linked, `false` if they                                          // 288
	 * should not be.                                                                                                     // 289
	 */                                                                                                                   // 290
                                                                                                                       // 291
	/**                                                                                                                   // 292
	 * @cfg {Boolean} [phone=true]                                                                                        // 293
	 *                                                                                                                    // 294
	 * `true` if Phone numbers ("(555)555-5555") should be automatically linked,                                          // 295
	 * `false` if they should not be.                                                                                     // 296
	 */                                                                                                                   // 297
                                                                                                                       // 298
	/**                                                                                                                   // 299
	 * @cfg {Boolean/String} [hashtag=false]                                                                              // 300
	 *                                                                                                                    // 301
	 * A string for the service name to have hashtags (ex: "#myHashtag")                                                  // 302
	 * auto-linked to. The currently-supported values are:                                                                // 303
	 *                                                                                                                    // 304
	 * - 'twitter'                                                                                                        // 305
	 * - 'facebook'                                                                                                       // 306
	 * - 'instagram'                                                                                                      // 307
	 *                                                                                                                    // 308
	 * Pass `false` to skip auto-linking of hashtags.                                                                     // 309
	 */                                                                                                                   // 310
                                                                                                                       // 311
	/**                                                                                                                   // 312
	 * @cfg {String/Boolean} [mention=false]                                                                              // 313
	 *                                                                                                                    // 314
	 * A string for the service name to have mentions (ex: "@myuser")                                                     // 315
	 * auto-linked to. The currently supported values are:                                                                // 316
	 *                                                                                                                    // 317
	 * - 'twitter'                                                                                                        // 318
	 * - 'instagram'                                                                                                      // 319
	 *                                                                                                                    // 320
	 * Defaults to `false` to skip auto-linking of mentions.                                                              // 321
	 */                                                                                                                   // 322
                                                                                                                       // 323
	/**                                                                                                                   // 324
	 * @cfg {Boolean} [newWindow=true]                                                                                    // 325
	 *                                                                                                                    // 326
	 * `true` if the links should open in a new window, `false` otherwise.                                                // 327
	 */                                                                                                                   // 328
                                                                                                                       // 329
	/**                                                                                                                   // 330
	 * @cfg {Boolean/Object} [stripPrefix]                                                                                // 331
	 *                                                                                                                    // 332
	 * `true` if 'http://' (or 'https://') and/or the 'www.' should be stripped                                           // 333
	 * from the beginning of URL links' text, `false` otherwise. Defaults to                                              // 334
	 * `true`.                                                                                                            // 335
	 *                                                                                                                    // 336
	 * Examples:                                                                                                          // 337
	 *                                                                                                                    // 338
	 *     stripPrefix: true                                                                                              // 339
	 *                                                                                                                    // 340
	 *     // or                                                                                                          // 341
	 *                                                                                                                    // 342
	 *     stripPrefix: {                                                                                                 // 343
	 *         scheme : true,                                                                                             // 344
	 *         www    : true                                                                                              // 345
	 *     }                                                                                                              // 346
	 *                                                                                                                    // 347
	 * As shown above, this option also accepts an Object form with 2 properties                                          // 348
	 * to allow for more customization of what exactly is prevented from being                                            // 349
	 * displayed. Both default to `true`:                                                                                 // 350
	 *                                                                                                                    // 351
	 * @cfg {Boolean} [stripPrefix.scheme] `true` to prevent the scheme part of                                           // 352
	 *   a URL match from being displayed to the user. Example:                                                           // 353
	 *   `'http://google.com'` will be displayed as `'google.com'`. `false` to                                            // 354
	 *   not strip the scheme. NOTE: Only an `'http://'` or `'https://'` scheme                                           // 355
	 *   will be removed, so as not to remove a potentially dangerous scheme                                              // 356
	 *   (such as `'file://'` or `'javascript:'`)                                                                         // 357
	 * @cfg {Boolean} [stripPrefix.www] www (Boolean): `true` to prevent the                                              // 358
	 *   `'www.'` part of a URL match from being displayed to the user. Ex:                                               // 359
	 *   `'www.google.com'` will be displayed as `'google.com'`. `false` to not                                           // 360
	 *   strip the `'www'`.                                                                                               // 361
	 */                                                                                                                   // 362
                                                                                                                       // 363
	/**                                                                                                                   // 364
	 * @cfg {Boolean} [stripTrailingSlash=true]                                                                           // 365
	 *                                                                                                                    // 366
	 * `true` to remove the trailing slash from URL matches, `false` to keep                                              // 367
	 *  the trailing slash.                                                                                               // 368
	 *                                                                                                                    // 369
	 *  Example when `true`: `http://google.com/` will be displayed as                                                    // 370
	 *  `http://google.com`.                                                                                              // 371
	 */                                                                                                                   // 372
                                                                                                                       // 373
	/**                                                                                                                   // 374
	 * @cfg {Number/Object} [truncate=0]                                                                                  // 375
	 *                                                                                                                    // 376
	 * ## Number Form                                                                                                     // 377
	 *                                                                                                                    // 378
	 * A number for how many characters matched text should be truncated to                                               // 379
	 * inside the text of a link. If the matched text is over this number of                                              // 380
	 * characters, it will be truncated to this length by adding a two period                                             // 381
	 * ellipsis ('..') to the end of the string.                                                                          // 382
	 *                                                                                                                    // 383
	 * For example: A url like 'http://www.yahoo.com/some/long/path/to/a/file'                                            // 384
	 * truncated to 25 characters might look something like this:                                                         // 385
	 * 'yahoo.com/some/long/pat..'                                                                                        // 386
	 *                                                                                                                    // 387
	 * Example Usage:                                                                                                     // 388
	 *                                                                                                                    // 389
	 *     truncate: 25                                                                                                   // 390
	 *                                                                                                                    // 391
	 *                                                                                                                    // 392
	 *  Defaults to `0` for "no truncation."                                                                              // 393
	 *                                                                                                                    // 394
	 *                                                                                                                    // 395
	 * ## Object Form                                                                                                     // 396
	 *                                                                                                                    // 397
	 * An Object may also be provided with two properties: `length` (Number) and                                          // 398
	 * `location` (String). `location` may be one of the following: 'end'                                                 // 399
	 * (default), 'middle', or 'smart'.                                                                                   // 400
	 *                                                                                                                    // 401
	 * Example Usage:                                                                                                     // 402
	 *                                                                                                                    // 403
	 *     truncate: { length: 25, location: 'middle' }                                                                   // 404
	 *                                                                                                                    // 405
	 * @cfg {Number} [truncate.length=0] How many characters to allow before                                              // 406
	 *   truncation will occur. Defaults to `0` for "no truncation."                                                      // 407
	 * @cfg {"end"/"middle"/"smart"} [truncate.location="end"]                                                            // 408
	 *                                                                                                                    // 409
	 * - 'end' (default): will truncate up to the number of characters, and then                                          // 410
	 *   add an ellipsis at the end. Ex: 'yahoo.com/some/long/pat..'                                                      // 411
	 * - 'middle': will truncate and add the ellipsis in the middle. Ex:                                                  // 412
	 *   'yahoo.com/s..th/to/a/file'                                                                                      // 413
	 * - 'smart': for URLs where the algorithm attempts to strip out unnecessary                                          // 414
	 *   parts first (such as the 'www.', then URL scheme, hash, etc.),                                                   // 415
	 *   attempting to make the URL human-readable before looking for a good                                              // 416
	 *   point to insert the ellipsis if it is still too long. Ex:                                                        // 417
	 *   'yahoo.com/some..to/a/file'. For more details, see                                                               // 418
	 *   {@link Autolinker.truncate.TruncateSmart}.                                                                       // 419
	 */                                                                                                                   // 420
                                                                                                                       // 421
	/**                                                                                                                   // 422
	 * @cfg {String} className                                                                                            // 423
	 *                                                                                                                    // 424
	 * A CSS class name to add to the generated links. This class will be added                                           // 425
	 * to all links, as well as this class plus match suffixes for styling                                                // 426
	 * url/email/phone/hashtag/mention links differently.                                                                 // 427
	 *                                                                                                                    // 428
	 * For example, if this config is provided as "myLink", then:                                                         // 429
	 *                                                                                                                    // 430
	 * - URL links will have the CSS classes: "myLink myLink-url"                                                         // 431
	 * - Email links will have the CSS classes: "myLink myLink-email", and                                                // 432
	 * - Phone links will have the CSS classes: "myLink myLink-phone"                                                     // 433
	 * - Hashtag links will have the CSS classes: "myLink myLink-hashtag"                                                 // 434
	 * - Mention links will have the CSS classes: "myLink myLink-mention myLink-[type]"                                   // 435
	 *   where [type] is either "instagram" or "twitter"                                                                  // 436
	 */                                                                                                                   // 437
                                                                                                                       // 438
	/**                                                                                                                   // 439
	 * @cfg {Function} replaceFn                                                                                          // 440
	 *                                                                                                                    // 441
	 * A function to individually process each match found in the input string.                                           // 442
	 *                                                                                                                    // 443
	 * See the class's description for usage.                                                                             // 444
	 *                                                                                                                    // 445
	 * The `replaceFn` can be called with a different context object (`this`                                              // 446
	 * reference) using the {@link #context} cfg.                                                                         // 447
	 *                                                                                                                    // 448
	 * This function is called with the following parameter:                                                              // 449
	 *                                                                                                                    // 450
	 * @cfg {Autolinker.match.Match} replaceFn.match The Match instance which                                             // 451
	 *   can be used to retrieve information about the match that the `replaceFn`                                         // 452
	 *   is currently processing. See {@link Autolinker.match.Match} subclasses                                           // 453
	 *   for details.                                                                                                     // 454
	 */                                                                                                                   // 455
                                                                                                                       // 456
	/**                                                                                                                   // 457
	 * @cfg {Object} context                                                                                              // 458
	 *                                                                                                                    // 459
	 * The context object (`this` reference) to call the `replaceFn` with.                                                // 460
	 *                                                                                                                    // 461
	 * Defaults to this Autolinker instance.                                                                              // 462
	 */                                                                                                                   // 463
                                                                                                                       // 464
                                                                                                                       // 465
	/**                                                                                                                   // 466
	 * @property {String} version (readonly)                                                                              // 467
	 *                                                                                                                    // 468
	 * The Autolinker version number in the form major.minor.patch                                                        // 469
	 *                                                                                                                    // 470
	 * Ex: 0.25.1                                                                                                         // 471
	 */                                                                                                                   // 472
                                                                                                                       // 473
	/**                                                                                                                   // 474
	 * @private                                                                                                           // 475
	 * @property {Autolinker.htmlParser.HtmlParser} htmlParser                                                            // 476
	 *                                                                                                                    // 477
	 * The HtmlParser instance used to skip over HTML tags, while finding text                                            // 478
	 * nodes to process. This is lazily instantiated in the {@link #getHtmlParser}                                        // 479
	 * method.                                                                                                            // 480
	 */                                                                                                                   // 481
                                                                                                                       // 482
	/**                                                                                                                   // 483
	 * @private                                                                                                           // 484
	 * @property {Autolinker.matcher.Matcher[]} matchers                                                                  // 485
	 *                                                                                                                    // 486
	 * The {@link Autolinker.matcher.Matcher} instances for this Autolinker                                               // 487
	 * instance.                                                                                                          // 488
	 *                                                                                                                    // 489
	 * This is lazily created in {@link #getMatchers}.                                                                    // 490
	 */                                                                                                                   // 491
                                                                                                                       // 492
	/**                                                                                                                   // 493
	 * @private                                                                                                           // 494
	 * @property {Autolinker.AnchorTagBuilder} tagBuilder                                                                 // 495
	 *                                                                                                                    // 496
	 * The AnchorTagBuilder instance used to build match replacement anchor tags.                                         // 497
	 * Note: this is lazily instantiated in the {@link #getTagBuilder} method.                                            // 498
	 */                                                                                                                   // 499
                                                                                                                       // 500
                                                                                                                       // 501
	/**                                                                                                                   // 502
	 * Normalizes the {@link #urls} config into an Object with 3 properties:                                              // 503
	 * `schemeMatches`, `wwwMatches`, and `tldMatches`, all Booleans.                                                     // 504
	 *                                                                                                                    // 505
	 * See {@link #urls} config for details.                                                                              // 506
	 *                                                                                                                    // 507
	 * @private                                                                                                           // 508
	 * @param {Boolean/Object} urls                                                                                       // 509
	 * @return {Object}                                                                                                   // 510
	 */                                                                                                                   // 511
	normalizeUrlsCfg : function( urls ) {                                                                                 // 512
		if( urls == null ) urls = true;  // default to `true`                                                                // 513
                                                                                                                       // 514
		if( typeof urls === 'boolean' ) {                                                                                    // 515
			return { schemeMatches: urls, wwwMatches: urls, tldMatches: urls };                                                 // 516
                                                                                                                       // 517
		} else {  // object form                                                                                             // 518
			return {                                                                                                            // 519
				schemeMatches : typeof urls.schemeMatches === 'boolean' ? urls.schemeMatches : true,                               // 520
				wwwMatches    : typeof urls.wwwMatches === 'boolean'    ? urls.wwwMatches    : true,                               // 521
				tldMatches    : typeof urls.tldMatches === 'boolean'    ? urls.tldMatches    : true                                // 522
			};                                                                                                                  // 523
		}                                                                                                                    // 524
	},                                                                                                                    // 525
                                                                                                                       // 526
                                                                                                                       // 527
	/**                                                                                                                   // 528
	 * Normalizes the {@link #stripPrefix} config into an Object with 2                                                   // 529
	 * properties: `scheme`, and `www` - both Booleans.                                                                   // 530
	 *                                                                                                                    // 531
	 * See {@link #stripPrefix} config for details.                                                                       // 532
	 *                                                                                                                    // 533
	 * @private                                                                                                           // 534
	 * @param {Boolean/Object} stripPrefix                                                                                // 535
	 * @return {Object}                                                                                                   // 536
	 */                                                                                                                   // 537
	normalizeStripPrefixCfg : function( stripPrefix ) {                                                                   // 538
		if( stripPrefix == null ) stripPrefix = true;  // default to `true`                                                  // 539
                                                                                                                       // 540
		if( typeof stripPrefix === 'boolean' ) {                                                                             // 541
			return { scheme: stripPrefix, www: stripPrefix };                                                                   // 542
                                                                                                                       // 543
		} else {  // object form                                                                                             // 544
			return {                                                                                                            // 545
				scheme : typeof stripPrefix.scheme === 'boolean' ? stripPrefix.scheme : true,                                      // 546
				www    : typeof stripPrefix.www === 'boolean'    ? stripPrefix.www    : true                                       // 547
			};                                                                                                                  // 548
		}                                                                                                                    // 549
	},                                                                                                                    // 550
                                                                                                                       // 551
                                                                                                                       // 552
	/**                                                                                                                   // 553
	 * Normalizes the {@link #truncate} config into an Object with 2 properties:                                          // 554
	 * `length` (Number), and `location` (String).                                                                        // 555
	 *                                                                                                                    // 556
	 * See {@link #truncate} config for details.                                                                          // 557
	 *                                                                                                                    // 558
	 * @private                                                                                                           // 559
	 * @param {Number/Object} truncate                                                                                    // 560
	 * @return {Object}                                                                                                   // 561
	 */                                                                                                                   // 562
	normalizeTruncateCfg : function( truncate ) {                                                                         // 563
		if( typeof truncate === 'number' ) {                                                                                 // 564
			return { length: truncate, location: 'end' };                                                                       // 565
                                                                                                                       // 566
		} else {  // object, or undefined/null                                                                               // 567
			return Autolinker.Util.defaults( truncate || {}, {                                                                  // 568
				length   : Number.POSITIVE_INFINITY,                                                                               // 569
				location : 'end'                                                                                                   // 570
			} );                                                                                                                // 571
		}                                                                                                                    // 572
	},                                                                                                                    // 573
                                                                                                                       // 574
                                                                                                                       // 575
	/**                                                                                                                   // 576
	 * Parses the input `textOrHtml` looking for URLs, email addresses, phone                                             // 577
	 * numbers, username handles, and hashtags (depending on the configuration                                            // 578
	 * of the Autolinker instance), and returns an array of {@link Autolinker.match.Match}                                // 579
	 * objects describing those matches (without making any replacements).                                                // 580
	 *                                                                                                                    // 581
	 * This method is used by the {@link #link} method, but can also be used to                                           // 582
	 * simply do parsing of the input in order to discover what kinds of links                                            // 583
	 * there are and how many.                                                                                            // 584
	 *                                                                                                                    // 585
	 * Example usage:                                                                                                     // 586
	 *                                                                                                                    // 587
	 *     var autolinker = new Autolinker( {                                                                             // 588
	 *         urls: true,                                                                                                // 589
	 *         email: true                                                                                                // 590
	 *     } );                                                                                                           // 591
	 *                                                                                                                    // 592
	 *     var matches = autolinker.parse( "Hello google.com, I am asdf@asdf.com" );                                      // 593
	 *                                                                                                                    // 594
	 *     console.log( matches.length );           // 2                                                                  // 595
	 *     console.log( matches[ 0 ].getType() );   // 'url'                                                              // 596
	 *     console.log( matches[ 0 ].getUrl() );    // 'google.com'                                                       // 597
	 *     console.log( matches[ 1 ].getType() );   // 'email'                                                            // 598
	 *     console.log( matches[ 1 ].getEmail() );  // 'asdf@asdf.com'                                                    // 599
	 *                                                                                                                    // 600
	 * @param {String} textOrHtml The HTML or text to find matches within                                                 // 601
	 *   (depending on if the {@link #urls}, {@link #email}, {@link #phone},                                              // 602
	 *   {@link #hashtag}, and {@link #mention} options are enabled).                                                     // 603
	 * @return {Autolinker.match.Match[]} The array of Matches found in the                                               // 604
	 *   given input `textOrHtml`.                                                                                        // 605
	 */                                                                                                                   // 606
	parse : function( textOrHtml ) {                                                                                      // 607
		var htmlParser = this.getHtmlParser(),                                                                               // 608
		    htmlNodes = htmlParser.parse( textOrHtml ),                                                                      // 609
		    anchorTagStackCount = 0,  // used to only process text around anchor tags, and any inner text/html they may have;
		    matches = [];                                                                                                    // 611
                                                                                                                       // 612
		// Find all matches within the `textOrHtml` (but not matches that are                                                // 613
		// already nested within <a> tags)                                                                                   // 614
		for( var i = 0, len = htmlNodes.length; i < len; i++ ) {                                                             // 615
			var node = htmlNodes[ i ],                                                                                          // 616
			    nodeType = node.getType();                                                                                      // 617
                                                                                                                       // 618
			if( nodeType === 'element' && node.getTagName() === 'a' ) {  // Process HTML anchor element nodes in the input `textOrHtml` to find out when we're within an <a> tag
				if( !node.isClosing() ) {  // it's the start <a> tag                                                               // 620
					anchorTagStackCount++;                                                                                            // 621
				} else {  // it's the end </a> tag                                                                                 // 622
					anchorTagStackCount = Math.max( anchorTagStackCount - 1, 0 );  // attempt to handle extraneous </a> tags by making sure the stack count never goes below 0
				}                                                                                                                  // 624
                                                                                                                       // 625
			} else if( nodeType === 'text' && anchorTagStackCount === 0 ) {  // Process text nodes that are not within an <a> tag
				var textNodeMatches = this.parseText( node.getText(), node.getOffset() );                                          // 627
                                                                                                                       // 628
				matches.push.apply( matches, textNodeMatches );                                                                    // 629
			}                                                                                                                   // 630
		}                                                                                                                    // 631
                                                                                                                       // 632
                                                                                                                       // 633
		// After we have found all matches, remove subsequent matches that                                                   // 634
		// overlap with a previous match. This can happen for instance with URLs,                                            // 635
		// where the url 'google.com/#link' would match '#link' as a hashtag.                                                // 636
		matches = this.compactMatches( matches );                                                                            // 637
                                                                                                                       // 638
		// And finally, remove matches for match types that have been turned                                                 // 639
		// off. We needed to have all match types turned on initially so that                                                // 640
		// things like hashtags could be filtered out if they were really just                                               // 641
		// part of a URL match (for instance, as a named anchor).                                                            // 642
		matches = this.removeUnwantedMatches( matches );                                                                     // 643
                                                                                                                       // 644
		return matches;                                                                                                      // 645
	},                                                                                                                    // 646
                                                                                                                       // 647
                                                                                                                       // 648
	/**                                                                                                                   // 649
	 * After we have found all matches, we need to remove subsequent matches                                              // 650
	 * that overlap with a previous match. This can happen for instance with                                              // 651
	 * URLs, where the url 'google.com/#link' would match '#link' as a hashtag.                                           // 652
	 *                                                                                                                    // 653
	 * @private                                                                                                           // 654
	 * @param {Autolinker.match.Match[]} matches                                                                          // 655
	 * @return {Autolinker.match.Match[]}                                                                                 // 656
	 */                                                                                                                   // 657
	compactMatches : function( matches ) {                                                                                // 658
		// First, the matches need to be sorted in order of offset                                                           // 659
		matches.sort( function( a, b ) { return a.getOffset() - b.getOffset(); } );                                          // 660
                                                                                                                       // 661
		for( var i = 0; i < matches.length - 1; i++ ) {                                                                      // 662
			var match = matches[ i ],                                                                                           // 663
			    endIdx = match.getOffset() + match.getMatchedText().length;                                                     // 664
                                                                                                                       // 665
			// Remove subsequent matches that overlap with the current match                                                    // 666
			while( i + 1 < matches.length && matches[ i + 1 ].getOffset() <= endIdx ) {                                         // 667
				matches.splice( i + 1, 1 );                                                                                        // 668
			}                                                                                                                   // 669
		}                                                                                                                    // 670
                                                                                                                       // 671
		return matches;                                                                                                      // 672
	},                                                                                                                    // 673
                                                                                                                       // 674
                                                                                                                       // 675
	/**                                                                                                                   // 676
	 * Removes matches for matchers that were turned off in the options. For                                              // 677
	 * example, if {@link #hashtag hashtags} were not to be matched, we'll                                                // 678
	 * remove them from the `matches` array here.                                                                         // 679
	 *                                                                                                                    // 680
	 * @private                                                                                                           // 681
	 * @param {Autolinker.match.Match[]} matches The array of matches to remove                                           // 682
	 *   the unwanted matches from. Note: this array is mutated for the                                                   // 683
	 *   removals.                                                                                                        // 684
	 * @return {Autolinker.match.Match[]} The mutated input `matches` array.                                              // 685
	 */                                                                                                                   // 686
	removeUnwantedMatches : function( matches ) {                                                                         // 687
		var remove = Autolinker.Util.remove;                                                                                 // 688
                                                                                                                       // 689
		if( !this.hashtag ) remove( matches, function( match ) { return match.getType() === 'hashtag'; } );                  // 690
		if( !this.email )   remove( matches, function( match ) { return match.getType() === 'email'; } );                    // 691
		if( !this.phone )   remove( matches, function( match ) { return match.getType() === 'phone'; } );                    // 692
		if( !this.mention ) remove( matches, function( match ) { return match.getType() === 'mention'; } );                  // 693
		if( !this.urls.schemeMatches ) {                                                                                     // 694
			remove( matches, function( m ) { return m.getType() === 'url' && m.getUrlMatchType() === 'scheme'; } );             // 695
		}                                                                                                                    // 696
		if( !this.urls.wwwMatches ) {                                                                                        // 697
			remove( matches, function( m ) { return m.getType() === 'url' && m.getUrlMatchType() === 'www'; } );                // 698
		}                                                                                                                    // 699
		if( !this.urls.tldMatches ) {                                                                                        // 700
			remove( matches, function( m ) { return m.getType() === 'url' && m.getUrlMatchType() === 'tld'; } );                // 701
		}                                                                                                                    // 702
                                                                                                                       // 703
		return matches;                                                                                                      // 704
	},                                                                                                                    // 705
                                                                                                                       // 706
                                                                                                                       // 707
	/**                                                                                                                   // 708
	 * Parses the input `text` looking for URLs, email addresses, phone                                                   // 709
	 * numbers, username handles, and hashtags (depending on the configuration                                            // 710
	 * of the Autolinker instance), and returns an array of {@link Autolinker.match.Match}                                // 711
	 * objects describing those matches.                                                                                  // 712
	 *                                                                                                                    // 713
	 * This method processes a **non-HTML string**, and is used to parse and                                              // 714
	 * match within the text nodes of an HTML string. This method is used                                                 // 715
	 * internally by {@link #parse}.                                                                                      // 716
	 *                                                                                                                    // 717
	 * @private                                                                                                           // 718
	 * @param {String} text The text to find matches within (depending on if the                                          // 719
	 *   {@link #urls}, {@link #email}, {@link #phone},                                                                   // 720
	 *   {@link #hashtag}, and {@link #mention} options are enabled). This must be a non-HTML string.                     // 721
	 * @param {Number} [offset=0] The offset of the text node within the                                                  // 722
	 *   original string. This is used when parsing with the {@link #parse}                                               // 723
	 *   method to generate correct offsets within the {@link Autolinker.match.Match}                                     // 724
	 *   instances, but may be omitted if calling this method publicly.                                                   // 725
	 * @return {Autolinker.match.Match[]} The array of Matches found in the                                               // 726
	 *   given input `text`.                                                                                              // 727
	 */                                                                                                                   // 728
	parseText : function( text, offset ) {                                                                                // 729
		offset = offset || 0;                                                                                                // 730
		var matchers = this.getMatchers(),                                                                                   // 731
		    matches = [];                                                                                                    // 732
                                                                                                                       // 733
		for( var i = 0, numMatchers = matchers.length; i < numMatchers; i++ ) {                                              // 734
			var textMatches = matchers[ i ].parseMatches( text );                                                               // 735
                                                                                                                       // 736
			// Correct the offset of each of the matches. They are originally                                                   // 737
			// the offset of the match within the provided text node, but we                                                    // 738
			// need to correct them to be relative to the original HTML input                                                   // 739
			// string (i.e. the one provided to #parse).                                                                        // 740
			for( var j = 0, numTextMatches = textMatches.length; j < numTextMatches; j++ ) {                                    // 741
				textMatches[ j ].setOffset( offset + textMatches[ j ].getOffset() );                                               // 742
			}                                                                                                                   // 743
                                                                                                                       // 744
			matches.push.apply( matches, textMatches );                                                                         // 745
		}                                                                                                                    // 746
		return matches;                                                                                                      // 747
	},                                                                                                                    // 748
                                                                                                                       // 749
                                                                                                                       // 750
	/**                                                                                                                   // 751
	 * Automatically links URLs, Email addresses, Phone numbers, Hashtags,                                                // 752
	 * and Mentions (Twitter, Instagram) found in the given chunk of HTML. Does not link                                  // 753
	 * URLs found within HTML tags.                                                                                       // 754
	 *                                                                                                                    // 755
	 * For instance, if given the text: `You should go to http://www.yahoo.com`,                                          // 756
	 * then the result will be `You should go to                                                                          // 757
	 * &lt;a href="http://www.yahoo.com"&gt;http://www.yahoo.com&lt;/a&gt;`                                               // 758
	 *                                                                                                                    // 759
	 * This method finds the text around any HTML elements in the input                                                   // 760
	 * `textOrHtml`, which will be the text that is processed. Any original HTML                                          // 761
	 * elements will be left as-is, as well as the text that is already wrapped                                           // 762
	 * in anchor (&lt;a&gt;) tags.                                                                                        // 763
	 *                                                                                                                    // 764
	 * @param {String} textOrHtml The HTML or text to autolink matches within                                             // 765
	 *   (depending on if the {@link #urls}, {@link #email}, {@link #phone}, {@link #hashtag}, and {@link #mention} options are enabled).
	 * @return {String} The HTML, with matches automatically linked.                                                      // 767
	 */                                                                                                                   // 768
	link : function( textOrHtml ) {                                                                                       // 769
		if( !textOrHtml ) { return ""; }  // handle `null` and `undefined`                                                   // 770
                                                                                                                       // 771
		var matches = this.parse( textOrHtml ),                                                                              // 772
			newHtml = [],                                                                                                       // 773
			lastIndex = 0;                                                                                                      // 774
                                                                                                                       // 775
		for( var i = 0, len = matches.length; i < len; i++ ) {                                                               // 776
			var match = matches[ i ];                                                                                           // 777
                                                                                                                       // 778
			newHtml.push( textOrHtml.substring( lastIndex, match.getOffset() ) );                                               // 779
			newHtml.push( this.createMatchReturnVal( match ) );                                                                 // 780
                                                                                                                       // 781
			lastIndex = match.getOffset() + match.getMatchedText().length;                                                      // 782
		}                                                                                                                    // 783
		newHtml.push( textOrHtml.substring( lastIndex ) );  // handle the text after the last match                          // 784
                                                                                                                       // 785
		return newHtml.join( '' );                                                                                           // 786
	},                                                                                                                    // 787
                                                                                                                       // 788
                                                                                                                       // 789
	/**                                                                                                                   // 790
	 * Creates the return string value for a given match in the input string.                                             // 791
	 *                                                                                                                    // 792
	 * This method handles the {@link #replaceFn}, if one was provided.                                                   // 793
	 *                                                                                                                    // 794
	 * @private                                                                                                           // 795
	 * @param {Autolinker.match.Match} match The Match object that represents                                             // 796
	 *   the match.                                                                                                       // 797
	 * @return {String} The string that the `match` should be replaced with.                                              // 798
	 *   This is usually the anchor tag string, but may be the `matchStr` itself                                          // 799
	 *   if the match is not to be replaced.                                                                              // 800
	 */                                                                                                                   // 801
	createMatchReturnVal : function( match ) {                                                                            // 802
		// Handle a custom `replaceFn` being provided                                                                        // 803
		var replaceFnResult;                                                                                                 // 804
		if( this.replaceFn ) {                                                                                               // 805
			replaceFnResult = this.replaceFn.call( this.context, match );  // Autolinker instance is the context                // 806
		}                                                                                                                    // 807
                                                                                                                       // 808
		if( typeof replaceFnResult === 'string' ) {                                                                          // 809
			return replaceFnResult;  // `replaceFn` returned a string, use that                                                 // 810
                                                                                                                       // 811
		} else if( replaceFnResult === false ) {                                                                             // 812
			return match.getMatchedText();  // no replacement for the match                                                     // 813
                                                                                                                       // 814
		} else if( replaceFnResult instanceof Autolinker.HtmlTag ) {                                                         // 815
			return replaceFnResult.toAnchorString();                                                                            // 816
                                                                                                                       // 817
		} else {  // replaceFnResult === true, or no/unknown return value from function                                      // 818
			// Perform Autolinker's default anchor tag generation                                                               // 819
			var anchorTag = match.buildTag();  // returns an Autolinker.HtmlTag instance                                        // 820
                                                                                                                       // 821
			return anchorTag.toAnchorString();                                                                                  // 822
		}                                                                                                                    // 823
	},                                                                                                                    // 824
                                                                                                                       // 825
                                                                                                                       // 826
	/**                                                                                                                   // 827
	 * Lazily instantiates and returns the {@link #htmlParser} instance for this                                          // 828
	 * Autolinker instance.                                                                                               // 829
	 *                                                                                                                    // 830
	 * @protected                                                                                                         // 831
	 * @return {Autolinker.htmlParser.HtmlParser}                                                                         // 832
	 */                                                                                                                   // 833
	getHtmlParser : function() {                                                                                          // 834
		var htmlParser = this.htmlParser;                                                                                    // 835
                                                                                                                       // 836
		if( !htmlParser ) {                                                                                                  // 837
			htmlParser = this.htmlParser = new Autolinker.htmlParser.HtmlParser();                                              // 838
		}                                                                                                                    // 839
                                                                                                                       // 840
		return htmlParser;                                                                                                   // 841
	},                                                                                                                    // 842
                                                                                                                       // 843
                                                                                                                       // 844
	/**                                                                                                                   // 845
	 * Lazily instantiates and returns the {@link Autolinker.matcher.Matcher}                                             // 846
	 * instances for this Autolinker instance.                                                                            // 847
	 *                                                                                                                    // 848
	 * @protected                                                                                                         // 849
	 * @return {Autolinker.matcher.Matcher[]}                                                                             // 850
	 */                                                                                                                   // 851
	getMatchers : function() {                                                                                            // 852
		if( !this.matchers ) {                                                                                               // 853
			var matchersNs = Autolinker.matcher,                                                                                // 854
			    tagBuilder = this.getTagBuilder();                                                                              // 855
                                                                                                                       // 856
			var matchers = [                                                                                                    // 857
				new matchersNs.Hashtag( { tagBuilder: tagBuilder, serviceName: this.hashtag } ),                                   // 858
				new matchersNs.Email( { tagBuilder: tagBuilder } ),                                                                // 859
				new matchersNs.Phone( { tagBuilder: tagBuilder } ),                                                                // 860
				new matchersNs.Mention( { tagBuilder: tagBuilder, serviceName: this.mention } ),                                   // 861
				new matchersNs.Url( { tagBuilder: tagBuilder, stripPrefix: this.stripPrefix, stripTrailingSlash: this.stripTrailingSlash } )
			];                                                                                                                  // 863
                                                                                                                       // 864
			return ( this.matchers = matchers );                                                                                // 865
                                                                                                                       // 866
		} else {                                                                                                             // 867
			return this.matchers;                                                                                               // 868
		}                                                                                                                    // 869
	},                                                                                                                    // 870
                                                                                                                       // 871
                                                                                                                       // 872
	/**                                                                                                                   // 873
	 * Returns the {@link #tagBuilder} instance for this Autolinker instance, lazily instantiating it                     // 874
	 * if it does not yet exist.                                                                                          // 875
	 *                                                                                                                    // 876
	 * This method may be used in a {@link #replaceFn} to generate the {@link Autolinker.HtmlTag HtmlTag} instance that   // 877
	 * Autolinker would normally generate, and then allow for modifications before returning it. For example:             // 878
	 *                                                                                                                    // 879
	 *     var html = Autolinker.link( "Test google.com", {                                                               // 880
	 *         replaceFn : function( match ) {                                                                            // 881
	 *             var tag = match.buildTag();  // returns an {@link Autolinker.HtmlTag} instance                         // 882
	 *             tag.setAttr( 'rel', 'nofollow' );                                                                      // 883
	 *                                                                                                                    // 884
	 *             return tag;                                                                                            // 885
	 *         }                                                                                                          // 886
	 *     } );                                                                                                           // 887
	 *                                                                                                                    // 888
	 *     // generated html:                                                                                             // 889
	 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>                            // 890
	 *                                                                                                                    // 891
	 * @return {Autolinker.AnchorTagBuilder}                                                                              // 892
	 */                                                                                                                   // 893
	getTagBuilder : function() {                                                                                          // 894
		var tagBuilder = this.tagBuilder;                                                                                    // 895
                                                                                                                       // 896
		if( !tagBuilder ) {                                                                                                  // 897
			tagBuilder = this.tagBuilder = new Autolinker.AnchorTagBuilder( {                                                   // 898
				newWindow   : this.newWindow,                                                                                      // 899
				truncate    : this.truncate,                                                                                       // 900
				className   : this.className                                                                                       // 901
			} );                                                                                                                // 902
		}                                                                                                                    // 903
                                                                                                                       // 904
		return tagBuilder;                                                                                                   // 905
	}                                                                                                                     // 906
                                                                                                                       // 907
};                                                                                                                     // 908
                                                                                                                       // 909
                                                                                                                       // 910
// Autolinker Namespaces                                                                                               // 911
                                                                                                                       // 912
Autolinker.match = {};                                                                                                 // 913
Autolinker.matcher = {};                                                                                               // 914
Autolinker.htmlParser = {};                                                                                            // 915
Autolinker.truncate = {};                                                                                              // 916
                                                                                                                       // 917
/*global Autolinker */                                                                                                 // 918
/*jshint eqnull:true, boss:true */                                                                                     // 919
/**                                                                                                                    // 920
 * @class Autolinker.Util                                                                                              // 921
 * @singleton                                                                                                          // 922
 *                                                                                                                     // 923
 * A few utility methods for Autolinker.                                                                               // 924
 */                                                                                                                    // 925
Autolinker.Util = {                                                                                                    // 926
                                                                                                                       // 927
	/**                                                                                                                   // 928
	 * @property {Function} abstractMethod                                                                                // 929
	 *                                                                                                                    // 930
	 * A function object which represents an abstract method.                                                             // 931
	 */                                                                                                                   // 932
	abstractMethod : function() { throw "abstract"; },                                                                    // 933
                                                                                                                       // 934
                                                                                                                       // 935
	/**                                                                                                                   // 936
	 * @private                                                                                                           // 937
	 * @property {RegExp} trimRegex                                                                                       // 938
	 *                                                                                                                    // 939
	 * The regular expression used to trim the leading and trailing whitespace                                            // 940
	 * from a string.                                                                                                     // 941
	 */                                                                                                                   // 942
	trimRegex : /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,                                                                     // 943
                                                                                                                       // 944
                                                                                                                       // 945
	/**                                                                                                                   // 946
	 * Assigns (shallow copies) the properties of `src` onto `dest`.                                                      // 947
	 *                                                                                                                    // 948
	 * @param {Object} dest The destination object.                                                                       // 949
	 * @param {Object} src The source object.                                                                             // 950
	 * @return {Object} The destination object (`dest`)                                                                   // 951
	 */                                                                                                                   // 952
	assign : function( dest, src ) {                                                                                      // 953
		for( var prop in src ) {                                                                                             // 954
			if( src.hasOwnProperty( prop ) ) {                                                                                  // 955
				dest[ prop ] = src[ prop ];                                                                                        // 956
			}                                                                                                                   // 957
		}                                                                                                                    // 958
                                                                                                                       // 959
		return dest;                                                                                                         // 960
	},                                                                                                                    // 961
                                                                                                                       // 962
                                                                                                                       // 963
	/**                                                                                                                   // 964
	 * Assigns (shallow copies) the properties of `src` onto `dest`, if the                                               // 965
	 * corresponding property on `dest` === `undefined`.                                                                  // 966
	 *                                                                                                                    // 967
	 * @param {Object} dest The destination object.                                                                       // 968
	 * @param {Object} src The source object.                                                                             // 969
	 * @return {Object} The destination object (`dest`)                                                                   // 970
	 */                                                                                                                   // 971
	defaults : function( dest, src ) {                                                                                    // 972
		for( var prop in src ) {                                                                                             // 973
			if( src.hasOwnProperty( prop ) && dest[ prop ] === undefined ) {                                                    // 974
				dest[ prop ] = src[ prop ];                                                                                        // 975
			}                                                                                                                   // 976
		}                                                                                                                    // 977
                                                                                                                       // 978
		return dest;                                                                                                         // 979
	},                                                                                                                    // 980
                                                                                                                       // 981
                                                                                                                       // 982
	/**                                                                                                                   // 983
	 * Extends `superclass` to create a new subclass, adding the `protoProps` to the new subclass's prototype.            // 984
	 *                                                                                                                    // 985
	 * @param {Function} superclass The constructor function for the superclass.                                          // 986
	 * @param {Object} protoProps The methods/properties to add to the subclass's prototype. This may contain the         // 987
	 *   special property `constructor`, which will be used as the new subclass's constructor function.                   // 988
	 * @return {Function} The new subclass function.                                                                      // 989
	 */                                                                                                                   // 990
	extend : function( superclass, protoProps ) {                                                                         // 991
		var superclassProto = superclass.prototype;                                                                          // 992
                                                                                                                       // 993
		var F = function() {};                                                                                               // 994
		F.prototype = superclassProto;                                                                                       // 995
                                                                                                                       // 996
		var subclass;                                                                                                        // 997
		if( protoProps.hasOwnProperty( 'constructor' ) ) {                                                                   // 998
			subclass = protoProps.constructor;                                                                                  // 999
		} else {                                                                                                             // 1000
			subclass = function() { superclassProto.constructor.apply( this, arguments ); };                                    // 1001
		}                                                                                                                    // 1002
                                                                                                                       // 1003
		var subclassProto = subclass.prototype = new F();  // set up prototype chain                                         // 1004
		subclassProto.constructor = subclass;  // fix constructor property                                                   // 1005
		subclassProto.superclass = superclassProto;                                                                          // 1006
                                                                                                                       // 1007
		delete protoProps.constructor;  // don't re-assign constructor property to the prototype, since a new function may have been created (`subclass`), which is now already there
		Autolinker.Util.assign( subclassProto, protoProps );                                                                 // 1009
                                                                                                                       // 1010
		return subclass;                                                                                                     // 1011
	},                                                                                                                    // 1012
                                                                                                                       // 1013
                                                                                                                       // 1014
	/**                                                                                                                   // 1015
	 * Truncates the `str` at `len - ellipsisChars.length`, and adds the `ellipsisChars` to the                           // 1016
	 * end of the string (by default, two periods: '..'). If the `str` length does not exceed                             // 1017
	 * `len`, the string will be returned unchanged.                                                                      // 1018
	 *                                                                                                                    // 1019
	 * @param {String} str The string to truncate and add an ellipsis to.                                                 // 1020
	 * @param {Number} truncateLen The length to truncate the string at.                                                  // 1021
	 * @param {String} [ellipsisChars=...] The ellipsis character(s) to add to the end of `str`                           // 1022
	 *   when truncated. Defaults to '...'                                                                                // 1023
	 */                                                                                                                   // 1024
	ellipsis : function( str, truncateLen, ellipsisChars ) {                                                              // 1025
		var ellipsisLength;                                                                                                  // 1026
                                                                                                                       // 1027
		if( str.length > truncateLen ) {                                                                                     // 1028
			if(ellipsisChars == null) {                                                                                         // 1029
			  ellipsisChars = '&hellip;';                                                                                       // 1030
			  ellipsisLength = 3;                                                                                               // 1031
			} else {                                                                                                            // 1032
			  ellipsisLength = ellipsisChars.length;                                                                            // 1033
			}                                                                                                                   // 1034
                                                                                                                       // 1035
			str = str.substring( 0, truncateLen - ellipsisLength ) + ellipsisChars;                                             // 1036
		}                                                                                                                    // 1037
		return str;                                                                                                          // 1038
	},                                                                                                                    // 1039
                                                                                                                       // 1040
                                                                                                                       // 1041
	/**                                                                                                                   // 1042
	 * Supports `Array.prototype.indexOf()` functionality for old IE (IE8 and below).                                     // 1043
	 *                                                                                                                    // 1044
	 * @param {Array} arr The array to find an element of.                                                                // 1045
	 * @param {*} element The element to find in the array, and return the index of.                                      // 1046
	 * @return {Number} The index of the `element`, or -1 if it was not found.                                            // 1047
	 */                                                                                                                   // 1048
	indexOf : function( arr, element ) {                                                                                  // 1049
		if( Array.prototype.indexOf ) {                                                                                      // 1050
			return arr.indexOf( element );                                                                                      // 1051
                                                                                                                       // 1052
		} else {                                                                                                             // 1053
			for( var i = 0, len = arr.length; i < len; i++ ) {                                                                  // 1054
				if( arr[ i ] === element ) return i;                                                                               // 1055
			}                                                                                                                   // 1056
			return -1;                                                                                                          // 1057
		}                                                                                                                    // 1058
	},                                                                                                                    // 1059
                                                                                                                       // 1060
                                                                                                                       // 1061
	/**                                                                                                                   // 1062
	 * Removes array elements based on a filtering function. Mutates the input                                            // 1063
	 * array.                                                                                                             // 1064
	 *                                                                                                                    // 1065
	 * Using this instead of the ES5 Array.prototype.filter() function, to allow                                          // 1066
	 * Autolinker compatibility with IE8, and also to prevent creating many new                                           // 1067
	 * arrays in memory for filtering.                                                                                    // 1068
	 *                                                                                                                    // 1069
	 * @param {Array} arr The array to remove elements from. This array is                                                // 1070
	 *   mutated.                                                                                                         // 1071
	 * @param {Function} fn A function which should return `true` to                                                      // 1072
	 *   remove an element.                                                                                               // 1073
	 * @return {Array} The mutated input `arr`.                                                                           // 1074
	 */                                                                                                                   // 1075
	remove : function( arr, fn ) {                                                                                        // 1076
		for( var i = arr.length - 1; i >= 0; i-- ) {                                                                         // 1077
			if( fn( arr[ i ] ) === true ) {                                                                                     // 1078
				arr.splice( i, 1 );                                                                                                // 1079
			}                                                                                                                   // 1080
		}                                                                                                                    // 1081
	},                                                                                                                    // 1082
                                                                                                                       // 1083
                                                                                                                       // 1084
	/**                                                                                                                   // 1085
	 * Performs the functionality of what modern browsers do when `String.prototype.split()` is called                    // 1086
	 * with a regular expression that contains capturing parenthesis.                                                     // 1087
	 *                                                                                                                    // 1088
	 * For example:                                                                                                       // 1089
	 *                                                                                                                    // 1090
	 *     // Modern browsers:                                                                                            // 1091
	 *     "a,b,c".split( /(,)/ );  // --> [ 'a', ',', 'b', ',', 'c' ]                                                    // 1092
	 *                                                                                                                    // 1093
	 *     // Old IE (including IE8):                                                                                     // 1094
	 *     "a,b,c".split( /(,)/ );  // --> [ 'a', 'b', 'c' ]                                                              // 1095
	 *                                                                                                                    // 1096
	 * This method emulates the functionality of modern browsers for the old IE case.                                     // 1097
	 *                                                                                                                    // 1098
	 * @param {String} str The string to split.                                                                           // 1099
	 * @param {RegExp} splitRegex The regular expression to split the input `str` on. The splitting                       // 1100
	 *   character(s) will be spliced into the array, as in the "modern browsers" example in the                          // 1101
	 *   description of this method.                                                                                      // 1102
	 *   Note #1: the supplied regular expression **must** have the 'g' flag specified.                                   // 1103
	 *   Note #2: for simplicity's sake, the regular expression does not need                                             // 1104
	 *   to contain capturing parenthesis - it will be assumed that any match has them.                                   // 1105
	 * @return {String[]} The split array of strings, with the splitting character(s) included.                           // 1106
	 */                                                                                                                   // 1107
	splitAndCapture : function( str, splitRegex ) {                                                                       // 1108
		if( !splitRegex.global ) throw new Error( "`splitRegex` must have the 'g' flag set" );                               // 1109
                                                                                                                       // 1110
		var result = [],                                                                                                     // 1111
		    lastIdx = 0,                                                                                                     // 1112
		    match;                                                                                                           // 1113
                                                                                                                       // 1114
		while( match = splitRegex.exec( str ) ) {                                                                            // 1115
			result.push( str.substring( lastIdx, match.index ) );                                                               // 1116
			result.push( match[ 0 ] );  // push the splitting char(s)                                                           // 1117
                                                                                                                       // 1118
			lastIdx = match.index + match[ 0 ].length;                                                                          // 1119
		}                                                                                                                    // 1120
		result.push( str.substring( lastIdx ) );                                                                             // 1121
                                                                                                                       // 1122
		return result;                                                                                                       // 1123
	},                                                                                                                    // 1124
                                                                                                                       // 1125
                                                                                                                       // 1126
	/**                                                                                                                   // 1127
	 * Trims the leading and trailing whitespace from a string.                                                           // 1128
	 *                                                                                                                    // 1129
	 * @param {String} str The string to trim.                                                                            // 1130
	 * @return {String}                                                                                                   // 1131
	 */                                                                                                                   // 1132
	trim : function( str ) {                                                                                              // 1133
		return str.replace( this.trimRegex, '' );                                                                            // 1134
	}                                                                                                                     // 1135
                                                                                                                       // 1136
};                                                                                                                     // 1137
                                                                                                                       // 1138
/*global Autolinker */                                                                                                 // 1139
/*jshint boss:true */                                                                                                  // 1140
/**                                                                                                                    // 1141
 * @class Autolinker.HtmlTag                                                                                           // 1142
 * @extends Object                                                                                                     // 1143
 *                                                                                                                     // 1144
 * Represents an HTML tag, which can be used to easily build/modify HTML tags programmatically.                        // 1145
 *                                                                                                                     // 1146
 * Autolinker uses this abstraction to create HTML tags, and then write them out as strings. You may also use          // 1147
 * this class in your code, especially within a {@link Autolinker#replaceFn replaceFn}.                                // 1148
 *                                                                                                                     // 1149
 * ## Examples                                                                                                         // 1150
 *                                                                                                                     // 1151
 * Example instantiation:                                                                                              // 1152
 *                                                                                                                     // 1153
 *     var tag = new Autolinker.HtmlTag( {                                                                             // 1154
 *         tagName : 'a',                                                                                              // 1155
 *         attrs   : { 'href': 'http://google.com', 'class': 'external-link' },                                        // 1156
 *         innerHtml : 'Google'                                                                                        // 1157
 *     } );                                                                                                            // 1158
 *                                                                                                                     // 1159
 *     tag.toAnchorString();  // <a href="http://google.com" class="external-link">Google</a>                          // 1160
 *                                                                                                                     // 1161
 *     // Individual accessor methods                                                                                  // 1162
 *     tag.getTagName();                 // 'a'                                                                        // 1163
 *     tag.getAttr( 'href' );            // 'http://google.com'                                                        // 1164
 *     tag.hasClass( 'external-link' );  // true                                                                       // 1165
 *                                                                                                                     // 1166
 *                                                                                                                     // 1167
 * Using mutator methods (which may be used in combination with instantiation config properties):                      // 1168
 *                                                                                                                     // 1169
 *     var tag = new Autolinker.HtmlTag();                                                                             // 1170
 *     tag.setTagName( 'a' );                                                                                          // 1171
 *     tag.setAttr( 'href', 'http://google.com' );                                                                     // 1172
 *     tag.addClass( 'external-link' );                                                                                // 1173
 *     tag.setInnerHtml( 'Google' );                                                                                   // 1174
 *                                                                                                                     // 1175
 *     tag.getTagName();                 // 'a'                                                                        // 1176
 *     tag.getAttr( 'href' );            // 'http://google.com'                                                        // 1177
 *     tag.hasClass( 'external-link' );  // true                                                                       // 1178
 *                                                                                                                     // 1179
 *     tag.toAnchorString();  // <a href="http://google.com" class="external-link">Google</a>                          // 1180
 *                                                                                                                     // 1181
 *                                                                                                                     // 1182
 * ## Example use within a {@link Autolinker#replaceFn replaceFn}                                                      // 1183
 *                                                                                                                     // 1184
 *     var html = Autolinker.link( "Test google.com", {                                                                // 1185
 *         replaceFn : function( match ) {                                                                             // 1186
 *             var tag = match.buildTag();  // returns an {@link Autolinker.HtmlTag} instance, configured with the Match's href and anchor text
 *             tag.setAttr( 'rel', 'nofollow' );                                                                       // 1188
 *                                                                                                                     // 1189
 *             return tag;                                                                                             // 1190
 *         }                                                                                                           // 1191
 *     } );                                                                                                            // 1192
 *                                                                                                                     // 1193
 *     // generated html:                                                                                              // 1194
 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>                             // 1195
 *                                                                                                                     // 1196
 *                                                                                                                     // 1197
 * ## Example use with a new tag for the replacement                                                                   // 1198
 *                                                                                                                     // 1199
 *     var html = Autolinker.link( "Test google.com", {                                                                // 1200
 *         replaceFn : function( match ) {                                                                             // 1201
 *             var tag = new Autolinker.HtmlTag( {                                                                     // 1202
 *                 tagName : 'button',                                                                                 // 1203
 *                 attrs   : { 'title': 'Load URL: ' + match.getAnchorHref() },                                        // 1204
 *                 innerHtml : 'Load URL: ' + match.getAnchorText()                                                    // 1205
 *             } );                                                                                                    // 1206
 *                                                                                                                     // 1207
 *             return tag;                                                                                             // 1208
 *         }                                                                                                           // 1209
 *     } );                                                                                                            // 1210
 *                                                                                                                     // 1211
 *     // generated html:                                                                                              // 1212
 *     //   Test <button title="Load URL: http://google.com">Load URL: google.com</button>                             // 1213
 */                                                                                                                    // 1214
Autolinker.HtmlTag = Autolinker.Util.extend( Object, {                                                                 // 1215
                                                                                                                       // 1216
	/**                                                                                                                   // 1217
	 * @cfg {String} tagName                                                                                              // 1218
	 *                                                                                                                    // 1219
	 * The tag name. Ex: 'a', 'button', etc.                                                                              // 1220
	 *                                                                                                                    // 1221
	 * Not required at instantiation time, but should be set using {@link #setTagName} before {@link #toAnchorString}     // 1222
	 * is executed.                                                                                                       // 1223
	 */                                                                                                                   // 1224
                                                                                                                       // 1225
	/**                                                                                                                   // 1226
	 * @cfg {Object.<String, String>} attrs                                                                               // 1227
	 *                                                                                                                    // 1228
	 * An key/value Object (map) of attributes to create the tag with. The keys are the attribute names, and the          // 1229
	 * values are the attribute values.                                                                                   // 1230
	 */                                                                                                                   // 1231
                                                                                                                       // 1232
	/**                                                                                                                   // 1233
	 * @cfg {String} innerHtml                                                                                            // 1234
	 *                                                                                                                    // 1235
	 * The inner HTML for the tag.                                                                                        // 1236
	 *                                                                                                                    // 1237
	 * Note the camel case name on `innerHtml`. Acronyms are camelCased in this utility (such as not to run into the acronym
	 * naming inconsistency that the DOM developers created with `XMLHttpRequest`). You may alternatively use {@link #innerHTML}
	 * if you prefer, but this one is recommended.                                                                        // 1240
	 */                                                                                                                   // 1241
                                                                                                                       // 1242
	/**                                                                                                                   // 1243
	 * @cfg {String} innerHTML                                                                                            // 1244
	 *                                                                                                                    // 1245
	 * Alias of {@link #innerHtml}, accepted for consistency with the browser DOM api, but prefer the camelCased version  // 1246
	 * for acronym names.                                                                                                 // 1247
	 */                                                                                                                   // 1248
                                                                                                                       // 1249
                                                                                                                       // 1250
	/**                                                                                                                   // 1251
	 * @protected                                                                                                         // 1252
	 * @property {RegExp} whitespaceRegex                                                                                 // 1253
	 *                                                                                                                    // 1254
	 * Regular expression used to match whitespace in a string of CSS classes.                                            // 1255
	 */                                                                                                                   // 1256
	whitespaceRegex : /\s+/,                                                                                              // 1257
                                                                                                                       // 1258
                                                                                                                       // 1259
	/**                                                                                                                   // 1260
	 * @constructor                                                                                                       // 1261
	 * @param {Object} [cfg] The configuration properties for this class, in an Object (map)                              // 1262
	 */                                                                                                                   // 1263
	constructor : function( cfg ) {                                                                                       // 1264
		Autolinker.Util.assign( this, cfg );                                                                                 // 1265
                                                                                                                       // 1266
		this.innerHtml = this.innerHtml || this.innerHTML;  // accept either the camelCased form or the fully capitalized acronym
	},                                                                                                                    // 1268
                                                                                                                       // 1269
                                                                                                                       // 1270
	/**                                                                                                                   // 1271
	 * Sets the tag name that will be used to generate the tag with.                                                      // 1272
	 *                                                                                                                    // 1273
	 * @param {String} tagName                                                                                            // 1274
	 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.                           // 1275
	 */                                                                                                                   // 1276
	setTagName : function( tagName ) {                                                                                    // 1277
		this.tagName = tagName;                                                                                              // 1278
		return this;                                                                                                         // 1279
	},                                                                                                                    // 1280
                                                                                                                       // 1281
                                                                                                                       // 1282
	/**                                                                                                                   // 1283
	 * Retrieves the tag name.                                                                                            // 1284
	 *                                                                                                                    // 1285
	 * @return {String}                                                                                                   // 1286
	 */                                                                                                                   // 1287
	getTagName : function() {                                                                                             // 1288
		return this.tagName || "";                                                                                           // 1289
	},                                                                                                                    // 1290
                                                                                                                       // 1291
                                                                                                                       // 1292
	/**                                                                                                                   // 1293
	 * Sets an attribute on the HtmlTag.                                                                                  // 1294
	 *                                                                                                                    // 1295
	 * @param {String} attrName The attribute name to set.                                                                // 1296
	 * @param {String} attrValue The attribute value to set.                                                              // 1297
	 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.                           // 1298
	 */                                                                                                                   // 1299
	setAttr : function( attrName, attrValue ) {                                                                           // 1300
		var tagAttrs = this.getAttrs();                                                                                      // 1301
		tagAttrs[ attrName ] = attrValue;                                                                                    // 1302
                                                                                                                       // 1303
		return this;                                                                                                         // 1304
	},                                                                                                                    // 1305
                                                                                                                       // 1306
                                                                                                                       // 1307
	/**                                                                                                                   // 1308
	 * Retrieves an attribute from the HtmlTag. If the attribute does not exist, returns `undefined`.                     // 1309
	 *                                                                                                                    // 1310
	 * @param {String} attrName The attribute name to retrieve.                                                           // 1311
	 * @return {String} The attribute's value, or `undefined` if it does not exist on the HtmlTag.                        // 1312
	 */                                                                                                                   // 1313
	getAttr : function( attrName ) {                                                                                      // 1314
		return this.getAttrs()[ attrName ];                                                                                  // 1315
	},                                                                                                                    // 1316
                                                                                                                       // 1317
                                                                                                                       // 1318
	/**                                                                                                                   // 1319
	 * Sets one or more attributes on the HtmlTag.                                                                        // 1320
	 *                                                                                                                    // 1321
	 * @param {Object.<String, String>} attrs A key/value Object (map) of the attributes to set.                          // 1322
	 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.                           // 1323
	 */                                                                                                                   // 1324
	setAttrs : function( attrs ) {                                                                                        // 1325
		var tagAttrs = this.getAttrs();                                                                                      // 1326
		Autolinker.Util.assign( tagAttrs, attrs );                                                                           // 1327
                                                                                                                       // 1328
		return this;                                                                                                         // 1329
	},                                                                                                                    // 1330
                                                                                                                       // 1331
                                                                                                                       // 1332
	/**                                                                                                                   // 1333
	 * Retrieves the attributes Object (map) for the HtmlTag.                                                             // 1334
	 *                                                                                                                    // 1335
	 * @return {Object.<String, String>} A key/value object of the attributes for the HtmlTag.                            // 1336
	 */                                                                                                                   // 1337
	getAttrs : function() {                                                                                               // 1338
		return this.attrs || ( this.attrs = {} );                                                                            // 1339
	},                                                                                                                    // 1340
                                                                                                                       // 1341
                                                                                                                       // 1342
	/**                                                                                                                   // 1343
	 * Sets the provided `cssClass`, overwriting any current CSS classes on the HtmlTag.                                  // 1344
	 *                                                                                                                    // 1345
	 * @param {String} cssClass One or more space-separated CSS classes to set (overwrite).                               // 1346
	 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.                           // 1347
	 */                                                                                                                   // 1348
	setClass : function( cssClass ) {                                                                                     // 1349
		return this.setAttr( 'class', cssClass );                                                                            // 1350
	},                                                                                                                    // 1351
                                                                                                                       // 1352
                                                                                                                       // 1353
	/**                                                                                                                   // 1354
	 * Convenience method to add one or more CSS classes to the HtmlTag. Will not add duplicate CSS classes.              // 1355
	 *                                                                                                                    // 1356
	 * @param {String} cssClass One or more space-separated CSS classes to add.                                           // 1357
	 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.                           // 1358
	 */                                                                                                                   // 1359
	addClass : function( cssClass ) {                                                                                     // 1360
		var classAttr = this.getClass(),                                                                                     // 1361
		    whitespaceRegex = this.whitespaceRegex,                                                                          // 1362
		    indexOf = Autolinker.Util.indexOf,  // to support IE8 and below                                                  // 1363
		    classes = ( !classAttr ) ? [] : classAttr.split( whitespaceRegex ),                                              // 1364
		    newClasses = cssClass.split( whitespaceRegex ),                                                                  // 1365
		    newClass;                                                                                                        // 1366
                                                                                                                       // 1367
		while( newClass = newClasses.shift() ) {                                                                             // 1368
			if( indexOf( classes, newClass ) === -1 ) {                                                                         // 1369
				classes.push( newClass );                                                                                          // 1370
			}                                                                                                                   // 1371
		}                                                                                                                    // 1372
                                                                                                                       // 1373
		this.getAttrs()[ 'class' ] = classes.join( " " );                                                                    // 1374
		return this;                                                                                                         // 1375
	},                                                                                                                    // 1376
                                                                                                                       // 1377
                                                                                                                       // 1378
	/**                                                                                                                   // 1379
	 * Convenience method to remove one or more CSS classes from the HtmlTag.                                             // 1380
	 *                                                                                                                    // 1381
	 * @param {String} cssClass One or more space-separated CSS classes to remove.                                        // 1382
	 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.                           // 1383
	 */                                                                                                                   // 1384
	removeClass : function( cssClass ) {                                                                                  // 1385
		var classAttr = this.getClass(),                                                                                     // 1386
		    whitespaceRegex = this.whitespaceRegex,                                                                          // 1387
		    indexOf = Autolinker.Util.indexOf,  // to support IE8 and below                                                  // 1388
		    classes = ( !classAttr ) ? [] : classAttr.split( whitespaceRegex ),                                              // 1389
		    removeClasses = cssClass.split( whitespaceRegex ),                                                               // 1390
		    removeClass;                                                                                                     // 1391
                                                                                                                       // 1392
		while( classes.length && ( removeClass = removeClasses.shift() ) ) {                                                 // 1393
			var idx = indexOf( classes, removeClass );                                                                          // 1394
			if( idx !== -1 ) {                                                                                                  // 1395
				classes.splice( idx, 1 );                                                                                          // 1396
			}                                                                                                                   // 1397
		}                                                                                                                    // 1398
                                                                                                                       // 1399
		this.getAttrs()[ 'class' ] = classes.join( " " );                                                                    // 1400
		return this;                                                                                                         // 1401
	},                                                                                                                    // 1402
                                                                                                                       // 1403
                                                                                                                       // 1404
	/**                                                                                                                   // 1405
	 * Convenience method to retrieve the CSS class(es) for the HtmlTag, which will each be separated by spaces when      // 1406
	 * there are multiple.                                                                                                // 1407
	 *                                                                                                                    // 1408
	 * @return {String}                                                                                                   // 1409
	 */                                                                                                                   // 1410
	getClass : function() {                                                                                               // 1411
		return this.getAttrs()[ 'class' ] || "";                                                                             // 1412
	},                                                                                                                    // 1413
                                                                                                                       // 1414
                                                                                                                       // 1415
	/**                                                                                                                   // 1416
	 * Convenience method to check if the tag has a CSS class or not.                                                     // 1417
	 *                                                                                                                    // 1418
	 * @param {String} cssClass The CSS class to check for.                                                               // 1419
	 * @return {Boolean} `true` if the HtmlTag has the CSS class, `false` otherwise.                                      // 1420
	 */                                                                                                                   // 1421
	hasClass : function( cssClass ) {                                                                                     // 1422
		return ( ' ' + this.getClass() + ' ' ).indexOf( ' ' + cssClass + ' ' ) !== -1;                                       // 1423
	},                                                                                                                    // 1424
                                                                                                                       // 1425
                                                                                                                       // 1426
	/**                                                                                                                   // 1427
	 * Sets the inner HTML for the tag.                                                                                   // 1428
	 *                                                                                                                    // 1429
	 * @param {String} html The inner HTML to set.                                                                        // 1430
	 * @return {Autolinker.HtmlTag} This HtmlTag instance, so that method calls may be chained.                           // 1431
	 */                                                                                                                   // 1432
	setInnerHtml : function( html ) {                                                                                     // 1433
		this.innerHtml = html;                                                                                               // 1434
                                                                                                                       // 1435
		return this;                                                                                                         // 1436
	},                                                                                                                    // 1437
                                                                                                                       // 1438
                                                                                                                       // 1439
	/**                                                                                                                   // 1440
	 * Retrieves the inner HTML for the tag.                                                                              // 1441
	 *                                                                                                                    // 1442
	 * @return {String}                                                                                                   // 1443
	 */                                                                                                                   // 1444
	getInnerHtml : function() {                                                                                           // 1445
		return this.innerHtml || "";                                                                                         // 1446
	},                                                                                                                    // 1447
                                                                                                                       // 1448
                                                                                                                       // 1449
	/**                                                                                                                   // 1450
	 * Override of superclass method used to generate the HTML string for the tag.                                        // 1451
	 *                                                                                                                    // 1452
	 * @return {String}                                                                                                   // 1453
	 */                                                                                                                   // 1454
	toAnchorString : function() {                                                                                         // 1455
		var tagName = this.getTagName(),                                                                                     // 1456
		    attrsStr = this.buildAttrsStr();                                                                                 // 1457
                                                                                                                       // 1458
		attrsStr = ( attrsStr ) ? ' ' + attrsStr : '';  // prepend a space if there are actually attributes                  // 1459
                                                                                                                       // 1460
		return [ '<', tagName, attrsStr, '>', this.getInnerHtml(), '</', tagName, '>' ].join( "" );                          // 1461
	},                                                                                                                    // 1462
                                                                                                                       // 1463
                                                                                                                       // 1464
	/**                                                                                                                   // 1465
	 * Support method for {@link #toAnchorString}, returns the string space-separated key="value" pairs, used to populate
	 * the stringified HtmlTag.                                                                                           // 1467
	 *                                                                                                                    // 1468
	 * @protected                                                                                                         // 1469
	 * @return {String} Example return: `attr1="value1" attr2="value2"`                                                   // 1470
	 */                                                                                                                   // 1471
	buildAttrsStr : function() {                                                                                          // 1472
		if( !this.attrs ) return "";  // no `attrs` Object (map) has been set, return empty string                           // 1473
                                                                                                                       // 1474
		var attrs = this.getAttrs(),                                                                                         // 1475
		    attrsArr = [];                                                                                                   // 1476
                                                                                                                       // 1477
		for( var prop in attrs ) {                                                                                           // 1478
			if( attrs.hasOwnProperty( prop ) ) {                                                                                // 1479
				attrsArr.push( prop + '="' + attrs[ prop ] + '"' );                                                                // 1480
			}                                                                                                                   // 1481
		}                                                                                                                    // 1482
		return attrsArr.join( " " );                                                                                         // 1483
	}                                                                                                                     // 1484
                                                                                                                       // 1485
} );                                                                                                                   // 1486
                                                                                                                       // 1487
/*global Autolinker */                                                                                                 // 1488
/**                                                                                                                    // 1489
 * @class Autolinker.RegexLib                                                                                          // 1490
 * @singleton                                                                                                          // 1491
 *                                                                                                                     // 1492
 * Builds and stores a library of the common regular expressions used by the                                           // 1493
 * Autolinker utility.                                                                                                 // 1494
 *                                                                                                                     // 1495
 * Other regular expressions may exist ad-hoc, but these are generally the                                             // 1496
 * regular expressions that are shared between source files.                                                           // 1497
 */                                                                                                                    // 1498
Autolinker.RegexLib = (function() {                                                                                    // 1499
                                                                                                                       // 1500
	/**                                                                                                                   // 1501
	 * The string form of a regular expression that would match all of the                                                // 1502
	 * alphabetic ("letter") chars in the unicode character set when placed in a                                          // 1503
	 * RegExp character class (`[]`). This includes all international alphabetic                                          // 1504
	 * characters.                                                                                                        // 1505
	 *                                                                                                                    // 1506
	 * These would be the characters matched by unicode regex engines `\p{L}`                                             // 1507
	 * escape ("all letters").                                                                                            // 1508
	 *                                                                                                                    // 1509
	 * Taken from the XRegExp library: http://xregexp.com/                                                                // 1510
	 * Specifically: http://xregexp.com/v/3.0.0/unicode-categories.js                                                     // 1511
	 *                                                                                                                    // 1512
	 * @private                                                                                                           // 1513
	 * @type {String}                                                                                                     // 1514
	 */                                                                                                                   // 1515
	var alphaCharsStr = 'A-Za-z\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC';
                                                                                                                       // 1517
	/**                                                                                                                   // 1518
	 * The string form of a regular expression that would match all of the                                                // 1519
	 * decimal number chars in the unicode character set when placed in a RegExp                                          // 1520
	 * character class (`[]`).                                                                                            // 1521
	 *                                                                                                                    // 1522
	 * These would be the characters matched by unicode regex engines `\p{Nd}`                                            // 1523
	 * escape ("all decimal numbers")                                                                                     // 1524
	 *                                                                                                                    // 1525
	 * Taken from the XRegExp library: http://xregexp.com/                                                                // 1526
	 * Specifically: http://xregexp.com/v/3.0.0/unicode-categories.js                                                     // 1527
	 *                                                                                                                    // 1528
	 * @private                                                                                                           // 1529
	 * @type {String}                                                                                                     // 1530
	 */                                                                                                                   // 1531
	var decimalNumbersStr = '0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19';
                                                                                                                       // 1533
                                                                                                                       // 1534
	// See documentation below                                                                                            // 1535
	var alphaNumericCharsStr = alphaCharsStr + decimalNumbersStr;                                                         // 1536
                                                                                                                       // 1537
                                                                                                                       // 1538
	// See documentation below                                                                                            // 1539
	var domainNameRegex = new RegExp( '[' + alphaNumericCharsStr + '.\\-]*[' + alphaNumericCharsStr + '\\-]' );           // 1540
                                                                                                                       // 1541
                                                                                                                       // 1542
	// See documentation below                                                                                            // 1543
	var tldRegex = /(?:travelersinsurance|sandvikcoromant|kerryproperties|cancerresearch|weatherchannel|kerrylogistics|spreadbetting|international|wolterskluwer|lifeinsurance|construction|pamperedchef|scholarships|versicherung|bridgestone|creditunion|kerryhotels|investments|productions|blackfriday|enterprises|lamborghini|photography|motorcycles|williamhill|playstation|contractors|barclaycard|accountants|redumbrella|engineering|management|telefonica|protection|consulting|tatamotors|creditcard|vlaanderen|schaeffler|associates|properties|foundation|republican|bnpparibas|boehringer|eurovision|extraspace|industries|immobilien|university|technology|volkswagen|healthcare|restaurant|cuisinella|vistaprint|apartments|accountant|travelers|homedepot|institute|vacations|furniture|fresenius|insurance|christmas|bloomberg|solutions|barcelona|firestone|financial|kuokgroup|fairwinds|community|passagens|goldpoint|equipment|lifestyle|yodobashi|aquarelle|marketing|analytics|education|amsterdam|statefarm|melbourne|allfinanz|directory|microsoft|stockholm|montblanc|accenture|lancaster|landrover|everbank|istanbul|graphics|grainger|ipiranga|softbank|attorney|pharmacy|saarland|catering|airforce|yokohama|mortgage|frontier|mutuelle|stcgroup|memorial|pictures|football|symantec|cipriani|ventures|telecity|cityeats|verisign|flsmidth|boutique|cleaning|firmdale|clinique|clothing|redstone|infiniti|deloitte|feedback|services|broadway|plumbing|commbank|training|barclays|exchange|computer|brussels|software|delivery|barefoot|builders|business|bargains|engineer|holdings|download|security|helsinki|lighting|movistar|discount|hdfcbank|supplies|marriott|property|diamonds|capetown|partners|democrat|jpmorgan|bradesco|budapest|rexroth|zuerich|shriram|academy|science|support|youtube|singles|surgery|alibaba|statoil|dentist|schwarz|android|cruises|cricket|digital|markets|starhub|systems|courses|coupons|netbank|country|domains|corsica|network|neustar|realtor|lincoln|limited|schmidt|yamaxun|cooking|contact|auction|spiegel|liaison|leclerc|latrobe|lasalle|abogado|compare|lanxess|exposed|express|company|cologne|college|avianca|lacaixa|fashion|recipes|ferrero|komatsu|storage|wanggou|clubmed|sandvik|fishing|fitness|bauhaus|kitchen|flights|florist|flowers|watches|weather|temasek|samsung|bentley|forsale|channel|theater|frogans|theatre|okinawa|website|tickets|jewelry|gallery|tiffany|iselect|shiksha|brother|organic|wedding|genting|toshiba|origins|philips|hyundai|hotmail|hoteles|hosting|rentals|windows|cartier|bugatti|holiday|careers|whoswho|hitachi|panerai|caravan|reviews|guitars|capital|trading|hamburg|hangout|finance|stream|family|abbott|health|review|travel|report|hermes|hiphop|gratis|career|toyota|hockey|dating|repair|google|social|soccer|reisen|global|otsuka|giving|unicom|casino|photos|center|broker|rocher|orange|bostik|garden|insure|ryukyu|bharti|safety|physio|sakura|oracle|online|jaguar|gallup|piaget|tienda|futbol|pictet|joburg|webcam|berlin|office|juegos|kaufen|chanel|chrome|xihuan|church|tennis|circle|kinder|flickr|bayern|claims|clinic|viajes|nowruz|xperia|norton|yachts|studio|coffee|camera|sanofi|nissan|author|expert|events|comsec|lawyer|tattoo|viking|estate|villas|condos|realty|yandex|energy|emerck|virgin|vision|durban|living|school|coupon|london|taobao|natura|taipei|nagoya|luxury|walter|aramco|sydney|madrid|credit|maison|makeup|schule|market|anquan|direct|design|swatch|suzuki|alsace|vuelos|dental|alipay|voyage|shouji|voting|airtel|mutual|degree|supply|agency|museum|mobily|dealer|monash|select|mormon|active|moscow|racing|datsun|quebec|nissay|rodeo|email|gifts|works|photo|chloe|edeka|cheap|earth|vista|tushu|koeln|glass|shoes|globo|tunes|gmail|nokia|space|kyoto|black|ricoh|seven|lamer|sener|epson|cisco|praxi|trust|citic|crown|shell|lease|green|legal|lexus|ninja|tatar|gripe|nikon|group|video|wales|autos|gucci|party|nexus|guide|linde|adult|parts|amica|lixil|boats|azure|loans|locus|cymru|lotte|lotto|stada|click|poker|quest|dabur|lupin|nadex|paris|faith|dance|canon|place|gives|trade|skype|rocks|mango|cloud|boots|smile|final|swiss|homes|honda|media|horse|cards|deals|watch|bosch|house|pizza|miami|osaka|tours|total|xerox|coach|sucks|style|delta|toray|iinet|tools|money|codes|beats|tokyo|salon|archi|movie|baidu|study|actor|yahoo|store|apple|world|forex|today|bible|tmall|tirol|irish|tires|forum|reise|vegas|vodka|sharp|omega|weber|jetzt|audio|promo|build|bingo|chase|gallo|drive|dubai|rehab|press|solar|sale|beer|bbva|bank|band|auto|sapo|sarl|saxo|audi|asia|arte|arpa|army|yoga|ally|zara|scor|scot|sexy|seat|zero|seek|aero|adac|zone|aarp|maif|meet|meme|menu|surf|mini|mobi|mtpc|porn|desi|star|ltda|name|talk|navy|love|loan|live|link|news|limo|like|spot|life|nico|lidl|lgbt|land|taxi|team|tech|kred|kpmg|sony|song|kiwi|kddi|jprs|jobs|sohu|java|itau|tips|info|immo|icbc|hsbc|town|host|page|toys|here|help|pars|haus|guru|guge|tube|goog|golf|gold|sncf|gmbh|gift|ggee|gent|gbiz|game|vana|pics|fund|ford|ping|pink|fish|film|fast|farm|play|fans|fail|plus|skin|pohl|fage|moda|post|erni|dvag|prod|doha|prof|docs|viva|diet|luxe|site|dell|sina|dclk|show|qpon|date|vote|cyou|voto|read|coop|cool|wang|club|city|chat|cern|cash|reit|rent|casa|cars|care|camp|rest|call|cafe|weir|wien|rich|wiki|buzz|wine|book|bond|room|work|rsvp|shia|ruhr|blue|bing|shaw|bike|safe|xbox|best|pwc|mtn|lds|aig|boo|fyi|nra|nrw|ntt|car|gal|obi|zip|aeg|vin|how|one|ong|onl|dad|ooo|bet|esq|org|htc|bar|uol|ibm|ovh|gdn|ice|icu|uno|gea|ifm|bot|top|wtf|lol|day|pet|eus|wtc|ubs|tvs|aco|ing|ltd|ink|tab|abb|afl|cat|int|pid|pin|bid|cba|gle|com|cbn|ads|man|wed|ceb|gmo|sky|ist|gmx|tui|mba|fan|ski|iwc|app|pro|med|ceo|jcb|jcp|goo|dev|men|aaa|meo|pub|jlc|bom|jll|gop|jmp|mil|got|gov|win|jot|mma|joy|trv|red|cfa|cfd|bio|moe|moi|mom|ren|biz|aws|xin|bbc|dnp|buy|kfh|mov|thd|xyz|fit|kia|rio|rip|kim|dog|vet|nyc|bcg|mtr|bcn|bms|bmw|run|bzh|rwe|tel|stc|axa|kpn|fly|krd|cab|bnl|foo|crs|eat|tci|sap|srl|nec|sas|net|cal|sbs|sfr|sca|scb|csc|edu|new|xxx|hiv|fox|wme|ngo|nhk|vip|sex|frl|lat|yun|law|you|tax|soy|sew|om|ac|hu|se|sc|sg|sh|sb|sa|rw|ru|rs|ro|re|qa|py|si|pw|pt|ps|sj|sk|pr|pn|pm|pl|sl|sm|pk|sn|ph|so|pg|pf|pe|pa|zw|nz|nu|nr|np|no|nl|ni|ng|nf|sr|ne|st|nc|na|mz|my|mx|mw|mv|mu|mt|ms|mr|mq|mp|mo|su|mn|mm|ml|mk|mh|mg|me|sv|md|mc|sx|sy|ma|ly|lv|sz|lu|lt|ls|lr|lk|li|lc|lb|la|tc|kz|td|ky|kw|kr|kp|kn|km|ki|kh|tf|tg|th|kg|ke|jp|jo|jm|je|it|is|ir|tj|tk|tl|tm|iq|tn|to|io|in|im|il|ie|ad|sd|ht|hr|hn|hm|tr|hk|gy|gw|gu|gt|gs|gr|gq|tt|gp|gn|gm|gl|tv|gi|tw|tz|ua|gh|ug|uk|gg|gf|ge|gd|us|uy|uz|va|gb|ga|vc|ve|fr|fo|fm|fk|fj|vg|vi|fi|eu|et|es|er|eg|ee|ec|dz|do|dm|dk|vn|dj|de|cz|cy|cx|cw|vu|cv|cu|cr|co|cn|cm|cl|ck|ci|ch|cg|cf|cd|cc|ca|wf|bz|by|bw|bv|bt|bs|br|bo|bn|bm|bj|bi|ws|bh|bg|bf|be|bd|bb|ba|az|ax|aw|au|at|as|ye|ar|aq|ao|am|al|yt|ai|za|ag|af|ae|zm|id)\b/;
                                                                                                                       // 1545
                                                                                                                       // 1546
	return {                                                                                                              // 1547
                                                                                                                       // 1548
		/**                                                                                                                  // 1549
		 * The string form of a regular expression that would match all of the                                               // 1550
		 * letters and decimal number chars in the unicode character set when placed                                         // 1551
		 * in a RegExp character class (`[]`).                                                                               // 1552
		 *                                                                                                                   // 1553
		 * These would be the characters matched by unicode regex engines `[\p{L}\p{Nd}]`                                    // 1554
		 * escape ("all letters and decimal numbers")                                                                        // 1555
		 *                                                                                                                   // 1556
		 * @property {String} alphaNumericCharsStr                                                                           // 1557
		 */                                                                                                                  // 1558
		alphaNumericCharsStr : alphaNumericCharsStr,                                                                         // 1559
                                                                                                                       // 1560
		/**                                                                                                                  // 1561
		 * A regular expression to match domain names of a URL or email address.                                             // 1562
		 * Ex: 'google', 'yahoo', 'some-other-company', etc.                                                                 // 1563
		 *                                                                                                                   // 1564
		 * @property {RegExp} domainNameRegex                                                                                // 1565
		 */                                                                                                                  // 1566
		domainNameRegex : domainNameRegex,                                                                                   // 1567
                                                                                                                       // 1568
		/**                                                                                                                  // 1569
		 * A regular expression to match top level domains (TLDs) for a URL or                                               // 1570
		 * email address. Ex: 'com', 'org', 'net', etc.                                                                      // 1571
		 *                                                                                                                   // 1572
		 * @property {RegExp} tldRegex                                                                                       // 1573
		 */                                                                                                                  // 1574
		tldRegex : tldRegex                                                                                                  // 1575
                                                                                                                       // 1576
	};                                                                                                                    // 1577
                                                                                                                       // 1578
                                                                                                                       // 1579
}() );                                                                                                                 // 1580
/*global Autolinker */                                                                                                 // 1581
/*jshint sub:true */                                                                                                   // 1582
/**                                                                                                                    // 1583
 * @protected                                                                                                          // 1584
 * @class Autolinker.AnchorTagBuilder                                                                                  // 1585
 * @extends Object                                                                                                     // 1586
 *                                                                                                                     // 1587
 * Builds anchor (&lt;a&gt;) tags for the Autolinker utility when a match is                                           // 1588
 * found.                                                                                                              // 1589
 *                                                                                                                     // 1590
 * Normally this class is instantiated, configured, and used internally by an                                          // 1591
 * {@link Autolinker} instance, but may actually be used indirectly in a                                               // 1592
 * {@link Autolinker#replaceFn replaceFn} to create {@link Autolinker.HtmlTag HtmlTag}                                 // 1593
 * instances which may be modified before returning from the                                                           // 1594
 * {@link Autolinker#replaceFn replaceFn}. For example:                                                                // 1595
 *                                                                                                                     // 1596
 *     var html = Autolinker.link( "Test google.com", {                                                                // 1597
 *         replaceFn : function( match ) {                                                                             // 1598
 *             var tag = match.buildTag();  // returns an {@link Autolinker.HtmlTag} instance                          // 1599
 *             tag.setAttr( 'rel', 'nofollow' );                                                                       // 1600
 *                                                                                                                     // 1601
 *             return tag;                                                                                             // 1602
 *         }                                                                                                           // 1603
 *     } );                                                                                                            // 1604
 *                                                                                                                     // 1605
 *     // generated html:                                                                                              // 1606
 *     //   Test <a href="http://google.com" target="_blank" rel="nofollow">google.com</a>                             // 1607
 */                                                                                                                    // 1608
Autolinker.AnchorTagBuilder = Autolinker.Util.extend( Object, {                                                        // 1609
                                                                                                                       // 1610
	/**                                                                                                                   // 1611
	 * @cfg {Boolean} newWindow                                                                                           // 1612
	 * @inheritdoc Autolinker#newWindow                                                                                   // 1613
	 */                                                                                                                   // 1614
                                                                                                                       // 1615
	/**                                                                                                                   // 1616
	 * @cfg {Object} truncate                                                                                             // 1617
	 * @inheritdoc Autolinker#truncate                                                                                    // 1618
	 */                                                                                                                   // 1619
                                                                                                                       // 1620
	/**                                                                                                                   // 1621
	 * @cfg {String} className                                                                                            // 1622
	 * @inheritdoc Autolinker#className                                                                                   // 1623
	 */                                                                                                                   // 1624
                                                                                                                       // 1625
                                                                                                                       // 1626
	/**                                                                                                                   // 1627
	 * @constructor                                                                                                       // 1628
	 * @param {Object} [cfg] The configuration options for the AnchorTagBuilder instance, specified in an Object (map).   // 1629
	 */                                                                                                                   // 1630
	constructor : function( cfg ) {                                                                                       // 1631
		cfg = cfg || {};                                                                                                     // 1632
                                                                                                                       // 1633
		this.newWindow = cfg.newWindow;                                                                                      // 1634
		this.truncate = cfg.truncate;                                                                                        // 1635
		this.className = cfg.className;                                                                                      // 1636
	},                                                                                                                    // 1637
                                                                                                                       // 1638
                                                                                                                       // 1639
	/**                                                                                                                   // 1640
	 * Generates the actual anchor (&lt;a&gt;) tag to use in place of the                                                 // 1641
	 * matched text, via its `match` object.                                                                              // 1642
	 *                                                                                                                    // 1643
	 * @param {Autolinker.match.Match} match The Match instance to generate an                                            // 1644
	 *   anchor tag from.                                                                                                 // 1645
	 * @return {Autolinker.HtmlTag} The HtmlTag instance for the anchor tag.                                              // 1646
	 */                                                                                                                   // 1647
	build : function( match ) {                                                                                           // 1648
		return new Autolinker.HtmlTag( {                                                                                     // 1649
			tagName   : 'a',                                                                                                    // 1650
			attrs     : this.createAttrs( match ),                                                                              // 1651
			innerHtml : this.processAnchorText( match.getAnchorText() )                                                         // 1652
		} );                                                                                                                 // 1653
	},                                                                                                                    // 1654
                                                                                                                       // 1655
                                                                                                                       // 1656
	/**                                                                                                                   // 1657
	 * Creates the Object (map) of the HTML attributes for the anchor (&lt;a&gt;)                                         // 1658
	 *   tag being generated.                                                                                             // 1659
	 *                                                                                                                    // 1660
	 * @protected                                                                                                         // 1661
	 * @param {Autolinker.match.Match} match The Match instance to generate an                                            // 1662
	 *   anchor tag from.                                                                                                 // 1663
	 * @return {Object} A key/value Object (map) of the anchor tag's attributes.                                          // 1664
	 */                                                                                                                   // 1665
	createAttrs : function( match ) {                                                                                     // 1666
		var attrs = {                                                                                                        // 1667
			'href' : match.getAnchorHref()  // we'll always have the `href` attribute                                           // 1668
		};                                                                                                                   // 1669
                                                                                                                       // 1670
		var cssClass = this.createCssClass( match );                                                                         // 1671
		if( cssClass ) {                                                                                                     // 1672
			attrs[ 'class' ] = cssClass;                                                                                        // 1673
		}                                                                                                                    // 1674
		if( this.newWindow ) {                                                                                               // 1675
			attrs[ 'target' ] = "_blank";                                                                                       // 1676
			attrs[ 'rel' ] = "noopener noreferrer";                                                                             // 1677
		}                                                                                                                    // 1678
                                                                                                                       // 1679
		if( this.truncate ) {                                                                                                // 1680
			if( this.truncate.length && this.truncate.length < match.getAnchorText().length ) {                                 // 1681
				attrs[ 'title' ] = match.getAnchorHref();                                                                          // 1682
			}                                                                                                                   // 1683
		}                                                                                                                    // 1684
                                                                                                                       // 1685
		return attrs;                                                                                                        // 1686
	},                                                                                                                    // 1687
                                                                                                                       // 1688
                                                                                                                       // 1689
	/**                                                                                                                   // 1690
	 * Creates the CSS class that will be used for a given anchor tag, based on                                           // 1691
	 * the `matchType` and the {@link #className} config.                                                                 // 1692
	 *                                                                                                                    // 1693
	 * Example returns:                                                                                                   // 1694
	 *                                                                                                                    // 1695
	 * - ""                                      // no {@link #className}                                                 // 1696
	 * - "myLink myLink-url"                     // url match                                                             // 1697
	 * - "myLink myLink-email"                   // email match                                                           // 1698
	 * - "myLink myLink-phone"                   // phone match                                                           // 1699
	 * - "myLink myLink-hashtag"                 // hashtag match                                                         // 1700
	 * - "myLink myLink-mention myLink-twitter"  // mention match with Twitter service                                    // 1701
	 *                                                                                                                    // 1702
	 * @private                                                                                                           // 1703
	 * @param {Autolinker.match.Match} match The Match instance to generate an                                            // 1704
	 *   anchor tag from.                                                                                                 // 1705
	 * @return {String} The CSS class string for the link. Example return:                                                // 1706
	 *   "myLink myLink-url". If no {@link #className} was configured, returns                                            // 1707
	 *   an empty string.                                                                                                 // 1708
	 */                                                                                                                   // 1709
	createCssClass : function( match ) {                                                                                  // 1710
		var className = this.className;                                                                                      // 1711
                                                                                                                       // 1712
		if( !className ) {                                                                                                   // 1713
			return "";                                                                                                          // 1714
                                                                                                                       // 1715
		} else {                                                                                                             // 1716
			var returnClasses = [ className ],                                                                                  // 1717
				cssClassSuffixes = match.getCssClassSuffixes();                                                                    // 1718
                                                                                                                       // 1719
			for( var i = 0, len = cssClassSuffixes.length; i < len; i++ ) {                                                     // 1720
				returnClasses.push( className + '-' + cssClassSuffixes[ i ] );                                                     // 1721
			}                                                                                                                   // 1722
			return returnClasses.join( ' ' );                                                                                   // 1723
		}                                                                                                                    // 1724
	},                                                                                                                    // 1725
                                                                                                                       // 1726
                                                                                                                       // 1727
	/**                                                                                                                   // 1728
	 * Processes the `anchorText` by truncating the text according to the                                                 // 1729
	 * {@link #truncate} config.                                                                                          // 1730
	 *                                                                                                                    // 1731
	 * @private                                                                                                           // 1732
	 * @param {String} anchorText The anchor tag's text (i.e. what will be                                                // 1733
	 *   displayed).                                                                                                      // 1734
	 * @return {String} The processed `anchorText`.                                                                       // 1735
	 */                                                                                                                   // 1736
	processAnchorText : function( anchorText ) {                                                                          // 1737
		anchorText = this.doTruncate( anchorText );                                                                          // 1738
                                                                                                                       // 1739
		return anchorText;                                                                                                   // 1740
	},                                                                                                                    // 1741
                                                                                                                       // 1742
                                                                                                                       // 1743
	/**                                                                                                                   // 1744
	 * Performs the truncation of the `anchorText` based on the {@link #truncate}                                         // 1745
	 * option. If the `anchorText` is longer than the length specified by the                                             // 1746
	 * {@link #truncate} option, the truncation is performed based on the                                                 // 1747
	 * `location` property. See {@link #truncate} for details.                                                            // 1748
	 *                                                                                                                    // 1749
	 * @private                                                                                                           // 1750
	 * @param {String} anchorText The anchor tag's text (i.e. what will be                                                // 1751
	 *   displayed).                                                                                                      // 1752
	 * @return {String} The truncated anchor text.                                                                        // 1753
	 */                                                                                                                   // 1754
	doTruncate : function( anchorText ) {                                                                                 // 1755
		var truncate = this.truncate;                                                                                        // 1756
		if( !truncate || !truncate.length ) return anchorText;                                                               // 1757
                                                                                                                       // 1758
		var truncateLength = truncate.length,                                                                                // 1759
			truncateLocation = truncate.location;                                                                               // 1760
                                                                                                                       // 1761
		if( truncateLocation === 'smart' ) {                                                                                 // 1762
			return Autolinker.truncate.TruncateSmart( anchorText, truncateLength );                                             // 1763
                                                                                                                       // 1764
		} else if( truncateLocation === 'middle' ) {                                                                         // 1765
			return Autolinker.truncate.TruncateMiddle( anchorText, truncateLength );                                            // 1766
                                                                                                                       // 1767
		} else {                                                                                                             // 1768
			return Autolinker.truncate.TruncateEnd( anchorText, truncateLength );                                               // 1769
		}                                                                                                                    // 1770
	}                                                                                                                     // 1771
                                                                                                                       // 1772
} );                                                                                                                   // 1773
                                                                                                                       // 1774
/*global Autolinker */                                                                                                 // 1775
/**                                                                                                                    // 1776
 * @class Autolinker.htmlParser.HtmlParser                                                                             // 1777
 * @extends Object                                                                                                     // 1778
 *                                                                                                                     // 1779
 * An HTML parser implementation which simply walks an HTML string and returns an array of                             // 1780
 * {@link Autolinker.htmlParser.HtmlNode HtmlNodes} that represent the basic HTML structure of the input string.       // 1781
 *                                                                                                                     // 1782
 * Autolinker uses this to only link URLs/emails/mentions within text nodes, effectively ignoring / "walking           // 1783
 * around" HTML tags.                                                                                                  // 1784
 */                                                                                                                    // 1785
Autolinker.htmlParser.HtmlParser = Autolinker.Util.extend( Object, {                                                   // 1786
                                                                                                                       // 1787
	/**                                                                                                                   // 1788
	 * @private                                                                                                           // 1789
	 * @property {RegExp} htmlRegex                                                                                       // 1790
	 *                                                                                                                    // 1791
	 * The regular expression used to pull out HTML tags from a string. Handles namespaced HTML tags and                  // 1792
	 * attribute names, as specified by http://www.w3.org/TR/html-markup/syntax.html.                                     // 1793
	 *                                                                                                                    // 1794
	 * Capturing groups:                                                                                                  // 1795
	 *                                                                                                                    // 1796
	 * 1. The "!DOCTYPE" tag name, if a tag is a &lt;!DOCTYPE&gt; tag.                                                    // 1797
	 * 2. If it is an end tag, this group will have the '/'.                                                              // 1798
	 * 3. If it is a comment tag, this group will hold the comment text (i.e.                                             // 1799
	 *    the text inside the `&lt;!--` and `--&gt;`.                                                                     // 1800
	 * 4. The tag name for a tag without attributes (other than the &lt;!DOCTYPE&gt; tag)                                 // 1801
	 * 5. The tag name for a tag with attributes (other than the &lt;!DOCTYPE&gt; tag)                                    // 1802
	 */                                                                                                                   // 1803
	htmlRegex : (function() {                                                                                             // 1804
		var commentTagRegex = /!--([\s\S]+?)--/,                                                                             // 1805
		    tagNameRegex = /[0-9a-zA-Z][0-9a-zA-Z:]*/,                                                                       // 1806
		    attrNameRegex = /[^\s"'>\/=\x00-\x1F\x7F]+/,   // the unicode range accounts for excluding control chars, and the delete char
		    attrValueRegex = /(?:"[^"]*?"|'[^']*?'|[^'"=<>`\s]+)/, // double quoted, single quoted, or unquoted attribute values
		    nameEqualsValueRegex = attrNameRegex.source + '(?:\\s*=\\s*' + attrValueRegex.source + ')?';  // optional '=[value]'
                                                                                                                       // 1810
		return new RegExp( [                                                                                                 // 1811
			// for <!DOCTYPE> tag. Ex: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">)
			'(?:',                                                                                                              // 1813
				'<(!DOCTYPE)',  // *** Capturing Group 1 - If it's a doctype tag                                                   // 1814
                                                                                                                       // 1815
					// Zero or more attributes following the tag name                                                                 // 1816
					'(?:',                                                                                                            // 1817
						'\\s+',  // one or more whitespace chars before an attribute                                                     // 1818
                                                                                                                       // 1819
						// Either:                                                                                                       // 1820
						// A. attr="value", or                                                                                           // 1821
						// B. "value" alone (To cover example doctype tag: <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">)
						'(?:', nameEqualsValueRegex, '|', attrValueRegex.source + ')',                                                   // 1823
					')*',                                                                                                             // 1824
				'>',                                                                                                               // 1825
			')',                                                                                                                // 1826
                                                                                                                       // 1827
			'|',                                                                                                                // 1828
                                                                                                                       // 1829
			// All other HTML tags (i.e. tags that are not <!DOCTYPE>)                                                          // 1830
			'(?:',                                                                                                              // 1831
				'<(/)?',  // Beginning of a tag or comment. Either '<' for a start tag, or '</' for an end tag.                    // 1832
				          // *** Capturing Group 2: The slash or an empty string. Slash ('/') for end tag, empty string for start or self-closing tag.
                                                                                                                       // 1834
					'(?:',                                                                                                            // 1835
						commentTagRegex.source,  // *** Capturing Group 3 - A Comment Tag's Text                                         // 1836
                                                                                                                       // 1837
						'|',                                                                                                             // 1838
                                                                                                                       // 1839
						// Handle tag without attributes.                                                                                // 1840
						// Doing this separately from a tag that has attributes                                                          // 1841
						// to fix a regex time complexity issue seen with the                                                            // 1842
						// example in https://github.com/gregjacobs/Autolinker.js/issues/172                                             // 1843
						'(?:',                                                                                                           // 1844
							// *** Capturing Group 4 - The tag name for a tag without attributes                                            // 1845
							'(' + tagNameRegex.source + ')',                                                                                // 1846
                                                                                                                       // 1847
							'\\s*/?',  // any trailing spaces and optional '/' before the closing '>'                                       // 1848
						')',                                                                                                             // 1849
                                                                                                                       // 1850
						'|',                                                                                                             // 1851
                                                                                                                       // 1852
						// Handle tag with attributes                                                                                    // 1853
						// Doing this separately from a tag with no attributes                                                           // 1854
						// to fix a regex time complexity issue seen with the                                                            // 1855
						// example in https://github.com/gregjacobs/Autolinker.js/issues/172                                             // 1856
						'(?:',                                                                                                           // 1857
							// *** Capturing Group 5 - The tag name for a tag with attributes                                               // 1858
							'(' + tagNameRegex.source + ')',                                                                                // 1859
                                                                                                                       // 1860
							'\\s+',  // must have at least one space after the tag name to prevent ReDoS issue (issue #172)                 // 1861
                                                                                                                       // 1862
							// Zero or more attributes following the tag name                                                               // 1863
							'(?:',                                                                                                          // 1864
								'(?:\\s+|\\b)',        // any number of whitespace chars before an attribute. NOTE: Using \s* here throws Chrome into an infinite loop for some reason, so using \s+|\b instead
								nameEqualsValueRegex,  // attr="value" (with optional ="value" part)                                           // 1866
							')*',                                                                                                           // 1867
                                                                                                                       // 1868
							'\\s*/?',  // any trailing spaces and optional '/' before the closing '>'                                       // 1869
						')',                                                                                                             // 1870
					')',                                                                                                              // 1871
				'>',                                                                                                               // 1872
			')'                                                                                                                 // 1873
		].join( "" ), 'gi' );                                                                                                // 1874
	} )(),                                                                                                                // 1875
                                                                                                                       // 1876
	/**                                                                                                                   // 1877
	 * @private                                                                                                           // 1878
	 * @property {RegExp} htmlCharacterEntitiesRegex                                                                      // 1879
	 *                                                                                                                    // 1880
	 * The regular expression that matches common HTML character entities.                                                // 1881
	 *                                                                                                                    // 1882
	 * Ignoring &amp; as it could be part of a query string -- handling it separately.                                    // 1883
	 */                                                                                                                   // 1884
	htmlCharacterEntitiesRegex: /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi,                             // 1885
                                                                                                                       // 1886
                                                                                                                       // 1887
	/**                                                                                                                   // 1888
	 * Parses an HTML string and returns a simple array of {@link Autolinker.htmlParser.HtmlNode HtmlNodes}               // 1889
	 * to represent the HTML structure of the input string.                                                               // 1890
	 *                                                                                                                    // 1891
	 * @param {String} html The HTML to parse.                                                                            // 1892
	 * @return {Autolinker.htmlParser.HtmlNode[]}                                                                         // 1893
	 */                                                                                                                   // 1894
	parse : function( html ) {                                                                                            // 1895
		var htmlRegex = this.htmlRegex,                                                                                      // 1896
		    currentResult,                                                                                                   // 1897
		    lastIndex = 0,                                                                                                   // 1898
		    textAndEntityNodes,                                                                                              // 1899
		    nodes = [];  // will be the result of the method                                                                 // 1900
                                                                                                                       // 1901
		while( ( currentResult = htmlRegex.exec( html ) ) !== null ) {                                                       // 1902
			var tagText = currentResult[ 0 ],                                                                                   // 1903
			    commentText = currentResult[ 3 ], // if we've matched a comment                                                 // 1904
			    tagName = currentResult[ 1 ] || currentResult[ 4 ] || currentResult[ 5 ],  // The <!DOCTYPE> tag (ex: "!DOCTYPE"), or another tag (ex: "a" or "img")
			    isClosingTag = !!currentResult[ 2 ],                                                                            // 1906
			    offset = currentResult.index,                                                                                   // 1907
			    inBetweenTagsText = html.substring( lastIndex, offset );                                                        // 1908
                                                                                                                       // 1909
			// Push TextNodes and EntityNodes for any text found between tags                                                   // 1910
			if( inBetweenTagsText ) {                                                                                           // 1911
				textAndEntityNodes = this.parseTextAndEntityNodes( lastIndex, inBetweenTagsText );                                 // 1912
				nodes.push.apply( nodes, textAndEntityNodes );                                                                     // 1913
			}                                                                                                                   // 1914
                                                                                                                       // 1915
			// Push the CommentNode or ElementNode                                                                              // 1916
			if( commentText ) {                                                                                                 // 1917
				nodes.push( this.createCommentNode( offset, tagText, commentText ) );                                              // 1918
			} else {                                                                                                            // 1919
				nodes.push( this.createElementNode( offset, tagText, tagName, isClosingTag ) );                                    // 1920
			}                                                                                                                   // 1921
                                                                                                                       // 1922
			lastIndex = offset + tagText.length;                                                                                // 1923
		}                                                                                                                    // 1924
                                                                                                                       // 1925
		// Process any remaining text after the last HTML element. Will process all of the text if there were no HTML elements.
		if( lastIndex < html.length ) {                                                                                      // 1927
			var text = html.substring( lastIndex );                                                                             // 1928
                                                                                                                       // 1929
			// Push TextNodes and EntityNodes for any text found between tags                                                   // 1930
			if( text ) {                                                                                                        // 1931
				textAndEntityNodes = this.parseTextAndEntityNodes( lastIndex, text );                                              // 1932
                                                                                                                       // 1933
				// Note: the following 3 lines were previously:                                                                    // 1934
				//   nodes.push.apply( nodes, textAndEntityNodes );                                                                // 1935
				// but this was causing a "Maximum Call Stack Size Exceeded"                                                       // 1936
				// error on inputs with a large number of html entities.                                                           // 1937
				textAndEntityNodes.forEach( function( node ) {                                                                     // 1938
					nodes.push( node );                                                                                               // 1939
				} );                                                                                                               // 1940
			}                                                                                                                   // 1941
		}                                                                                                                    // 1942
                                                                                                                       // 1943
		return nodes;                                                                                                        // 1944
	},                                                                                                                    // 1945
                                                                                                                       // 1946
                                                                                                                       // 1947
	/**                                                                                                                   // 1948
	 * Parses text and HTML entity nodes from a given string. The input string                                            // 1949
	 * should not have any HTML tags (elements) within it.                                                                // 1950
	 *                                                                                                                    // 1951
	 * @private                                                                                                           // 1952
	 * @param {Number} offset The offset of the text node match within the                                                // 1953
	 *   original HTML string.                                                                                            // 1954
	 * @param {String} text The string of text to parse. This is from an HTML                                             // 1955
	 *   text node.                                                                                                       // 1956
	 * @return {Autolinker.htmlParser.HtmlNode[]} An array of HtmlNodes to                                                // 1957
	 *   represent the {@link Autolinker.htmlParser.TextNode TextNodes} and                                               // 1958
	 *   {@link Autolinker.htmlParser.EntityNode EntityNodes} found.                                                      // 1959
	 */                                                                                                                   // 1960
	parseTextAndEntityNodes : function( offset, text ) {                                                                  // 1961
		var nodes = [],                                                                                                      // 1962
		    textAndEntityTokens = Autolinker.Util.splitAndCapture( text, this.htmlCharacterEntitiesRegex );  // split at HTML entities, but include the HTML entities in the results array
                                                                                                                       // 1964
		// Every even numbered token is a TextNode, and every odd numbered token is an EntityNode                            // 1965
		// For example: an input `text` of "Test &quot;this&quot; today" would turn into the                                 // 1966
		//   `textAndEntityTokens`: [ 'Test ', '&quot;', 'this', '&quot;', ' today' ]                                        // 1967
		for( var i = 0, len = textAndEntityTokens.length; i < len; i += 2 ) {                                                // 1968
			var textToken = textAndEntityTokens[ i ],                                                                           // 1969
			    entityToken = textAndEntityTokens[ i + 1 ];                                                                     // 1970
                                                                                                                       // 1971
			if( textToken ) {                                                                                                   // 1972
				nodes.push( this.createTextNode( offset, textToken ) );                                                            // 1973
				offset += textToken.length;                                                                                        // 1974
			}                                                                                                                   // 1975
			if( entityToken ) {                                                                                                 // 1976
				nodes.push( this.createEntityNode( offset, entityToken ) );                                                        // 1977
				offset += entityToken.length;                                                                                      // 1978
			}                                                                                                                   // 1979
		}                                                                                                                    // 1980
		return nodes;                                                                                                        // 1981
	},                                                                                                                    // 1982
                                                                                                                       // 1983
                                                                                                                       // 1984
	/**                                                                                                                   // 1985
	 * Factory method to create an {@link Autolinker.htmlParser.CommentNode CommentNode}.                                 // 1986
	 *                                                                                                                    // 1987
	 * @private                                                                                                           // 1988
	 * @param {Number} offset The offset of the match within the original HTML                                            // 1989
	 *   string.                                                                                                          // 1990
	 * @param {String} tagText The full text of the tag (comment) that was                                                // 1991
	 *   matched, including its &lt;!-- and --&gt;.                                                                       // 1992
	 * @param {String} commentText The full text of the comment that was matched.                                         // 1993
	 */                                                                                                                   // 1994
	createCommentNode : function( offset, tagText, commentText ) {                                                        // 1995
		return new Autolinker.htmlParser.CommentNode( {                                                                      // 1996
			offset : offset,                                                                                                    // 1997
			text   : tagText,                                                                                                   // 1998
			comment: Autolinker.Util.trim( commentText )                                                                        // 1999
		} );                                                                                                                 // 2000
	},                                                                                                                    // 2001
                                                                                                                       // 2002
                                                                                                                       // 2003
	/**                                                                                                                   // 2004
	 * Factory method to create an {@link Autolinker.htmlParser.ElementNode ElementNode}.                                 // 2005
	 *                                                                                                                    // 2006
	 * @private                                                                                                           // 2007
	 * @param {Number} offset The offset of the match within the original HTML                                            // 2008
	 *   string.                                                                                                          // 2009
	 * @param {String} tagText The full text of the tag (element) that was                                                // 2010
	 *   matched, including its attributes.                                                                               // 2011
	 * @param {String} tagName The name of the tag. Ex: An &lt;img&gt; tag would                                          // 2012
	 *   be passed to this method as "img".                                                                               // 2013
	 * @param {Boolean} isClosingTag `true` if it's a closing tag, false                                                  // 2014
	 *   otherwise.                                                                                                       // 2015
	 * @return {Autolinker.htmlParser.ElementNode}                                                                        // 2016
	 */                                                                                                                   // 2017
	createElementNode : function( offset, tagText, tagName, isClosingTag ) {                                              // 2018
		return new Autolinker.htmlParser.ElementNode( {                                                                      // 2019
			offset  : offset,                                                                                                   // 2020
			text    : tagText,                                                                                                  // 2021
			tagName : tagName.toLowerCase(),                                                                                    // 2022
			closing : isClosingTag                                                                                              // 2023
		} );                                                                                                                 // 2024
	},                                                                                                                    // 2025
                                                                                                                       // 2026
                                                                                                                       // 2027
	/**                                                                                                                   // 2028
	 * Factory method to create a {@link Autolinker.htmlParser.EntityNode EntityNode}.                                    // 2029
	 *                                                                                                                    // 2030
	 * @private                                                                                                           // 2031
	 * @param {Number} offset The offset of the match within the original HTML                                            // 2032
	 *   string.                                                                                                          // 2033
	 * @param {String} text The text that was matched for the HTML entity (such                                           // 2034
	 *   as '&amp;nbsp;').                                                                                                // 2035
	 * @return {Autolinker.htmlParser.EntityNode}                                                                         // 2036
	 */                                                                                                                   // 2037
	createEntityNode : function( offset, text ) {                                                                         // 2038
		return new Autolinker.htmlParser.EntityNode( { offset: offset, text: text } );                                       // 2039
	},                                                                                                                    // 2040
                                                                                                                       // 2041
                                                                                                                       // 2042
	/**                                                                                                                   // 2043
	 * Factory method to create a {@link Autolinker.htmlParser.TextNode TextNode}.                                        // 2044
	 *                                                                                                                    // 2045
	 * @private                                                                                                           // 2046
	 * @param {Number} offset The offset of the match within the original HTML                                            // 2047
	 *   string.                                                                                                          // 2048
	 * @param {String} text The text that was matched.                                                                    // 2049
	 * @return {Autolinker.htmlParser.TextNode}                                                                           // 2050
	 */                                                                                                                   // 2051
	createTextNode : function( offset, text ) {                                                                           // 2052
		return new Autolinker.htmlParser.TextNode( { offset: offset, text: text } );                                         // 2053
	}                                                                                                                     // 2054
                                                                                                                       // 2055
} );                                                                                                                   // 2056
                                                                                                                       // 2057
/*global Autolinker */                                                                                                 // 2058
/**                                                                                                                    // 2059
 * @abstract                                                                                                           // 2060
 * @class Autolinker.htmlParser.HtmlNode                                                                               // 2061
 *                                                                                                                     // 2062
 * Represents an HTML node found in an input string. An HTML node is one of the                                        // 2063
 * following:                                                                                                          // 2064
 *                                                                                                                     // 2065
 * 1. An {@link Autolinker.htmlParser.ElementNode ElementNode}, which represents                                       // 2066
 *    HTML tags.                                                                                                       // 2067
 * 2. A {@link Autolinker.htmlParser.CommentNode CommentNode}, which represents                                        // 2068
 *    HTML comments.                                                                                                   // 2069
 * 3. A {@link Autolinker.htmlParser.TextNode TextNode}, which represents text                                         // 2070
 *    outside or within HTML tags.                                                                                     // 2071
 * 4. A {@link Autolinker.htmlParser.EntityNode EntityNode}, which represents                                          // 2072
 *    one of the known HTML entities that Autolinker looks for. This includes                                          // 2073
 *    common ones such as &amp;quot; and &amp;nbsp;                                                                    // 2074
 */                                                                                                                    // 2075
Autolinker.htmlParser.HtmlNode = Autolinker.Util.extend( Object, {                                                     // 2076
                                                                                                                       // 2077
	/**                                                                                                                   // 2078
	 * @cfg {Number} offset (required)                                                                                    // 2079
	 *                                                                                                                    // 2080
	 * The offset of the HTML node in the original text that was parsed.                                                  // 2081
	 */                                                                                                                   // 2082
	offset : undefined,                                                                                                   // 2083
                                                                                                                       // 2084
	/**                                                                                                                   // 2085
	 * @cfg {String} text (required)                                                                                      // 2086
	 *                                                                                                                    // 2087
	 * The text that was matched for the HtmlNode.                                                                        // 2088
	 *                                                                                                                    // 2089
	 * - In the case of an {@link Autolinker.htmlParser.ElementNode ElementNode},                                         // 2090
	 *   this will be the tag's text.                                                                                     // 2091
	 * - In the case of an {@link Autolinker.htmlParser.CommentNode CommentNode},                                         // 2092
	 *   this will be the comment's text.                                                                                 // 2093
	 * - In the case of a {@link Autolinker.htmlParser.TextNode TextNode}, this                                           // 2094
	 *   will be the text itself.                                                                                         // 2095
	 * - In the case of a {@link Autolinker.htmlParser.EntityNode EntityNode},                                            // 2096
	 *   this will be the text of the HTML entity.                                                                        // 2097
	 */                                                                                                                   // 2098
	text : undefined,                                                                                                     // 2099
                                                                                                                       // 2100
                                                                                                                       // 2101
	/**                                                                                                                   // 2102
	 * @constructor                                                                                                       // 2103
	 * @param {Object} cfg The configuration properties for the Match instance,                                           // 2104
	 * specified in an Object (map).                                                                                      // 2105
	 */                                                                                                                   // 2106
	constructor : function( cfg ) {                                                                                       // 2107
		Autolinker.Util.assign( this, cfg );                                                                                 // 2108
                                                                                                                       // 2109
		if( this.offset == null ) throw new Error( '`offset` cfg required' );                                                // 2110
		if( this.text == null ) throw new Error( '`text` cfg required' );                                                    // 2111
	},                                                                                                                    // 2112
                                                                                                                       // 2113
                                                                                                                       // 2114
	/**                                                                                                                   // 2115
	 * Returns a string name for the type of node that this class represents.                                             // 2116
	 *                                                                                                                    // 2117
	 * @abstract                                                                                                          // 2118
	 * @return {String}                                                                                                   // 2119
	 */                                                                                                                   // 2120
	getType : Autolinker.Util.abstractMethod,                                                                             // 2121
                                                                                                                       // 2122
                                                                                                                       // 2123
	/**                                                                                                                   // 2124
	 * Retrieves the {@link #offset} of the HtmlNode. This is the offset of the                                           // 2125
	 * HTML node in the original string that was parsed.                                                                  // 2126
	 *                                                                                                                    // 2127
	 * @return {Number}                                                                                                   // 2128
	 */                                                                                                                   // 2129
	getOffset : function() {                                                                                              // 2130
		return this.offset;                                                                                                  // 2131
	},                                                                                                                    // 2132
                                                                                                                       // 2133
                                                                                                                       // 2134
	/**                                                                                                                   // 2135
	 * Retrieves the {@link #text} for the HtmlNode.                                                                      // 2136
	 *                                                                                                                    // 2137
	 * @return {String}                                                                                                   // 2138
	 */                                                                                                                   // 2139
	getText : function() {                                                                                                // 2140
		return this.text;                                                                                                    // 2141
	}                                                                                                                     // 2142
                                                                                                                       // 2143
} );                                                                                                                   // 2144
/*global Autolinker */                                                                                                 // 2145
/**                                                                                                                    // 2146
 * @class Autolinker.htmlParser.CommentNode                                                                            // 2147
 * @extends Autolinker.htmlParser.HtmlNode                                                                             // 2148
 *                                                                                                                     // 2149
 * Represents an HTML comment node that has been parsed by the                                                         // 2150
 * {@link Autolinker.htmlParser.HtmlParser}.                                                                           // 2151
 *                                                                                                                     // 2152
 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more                                       // 2153
 * details.                                                                                                            // 2154
 */                                                                                                                    // 2155
Autolinker.htmlParser.CommentNode = Autolinker.Util.extend( Autolinker.htmlParser.HtmlNode, {                          // 2156
                                                                                                                       // 2157
	/**                                                                                                                   // 2158
	 * @cfg {String} comment (required)                                                                                   // 2159
	 *                                                                                                                    // 2160
	 * The text inside the comment tag. This text is stripped of any leading or                                           // 2161
	 * trailing whitespace.                                                                                               // 2162
	 */                                                                                                                   // 2163
	comment : '',                                                                                                         // 2164
                                                                                                                       // 2165
                                                                                                                       // 2166
	/**                                                                                                                   // 2167
	 * Returns a string name for the type of node that this class represents.                                             // 2168
	 *                                                                                                                    // 2169
	 * @return {String}                                                                                                   // 2170
	 */                                                                                                                   // 2171
	getType : function() {                                                                                                // 2172
		return 'comment';                                                                                                    // 2173
	},                                                                                                                    // 2174
                                                                                                                       // 2175
                                                                                                                       // 2176
	/**                                                                                                                   // 2177
	 * Returns the comment inside the comment tag.                                                                        // 2178
	 *                                                                                                                    // 2179
	 * @return {String}                                                                                                   // 2180
	 */                                                                                                                   // 2181
	getComment : function() {                                                                                             // 2182
		return this.comment;                                                                                                 // 2183
	}                                                                                                                     // 2184
                                                                                                                       // 2185
} );                                                                                                                   // 2186
/*global Autolinker */                                                                                                 // 2187
/**                                                                                                                    // 2188
 * @class Autolinker.htmlParser.ElementNode                                                                            // 2189
 * @extends Autolinker.htmlParser.HtmlNode                                                                             // 2190
 *                                                                                                                     // 2191
 * Represents an HTML element node that has been parsed by the {@link Autolinker.htmlParser.HtmlParser}.               // 2192
 *                                                                                                                     // 2193
 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more                                       // 2194
 * details.                                                                                                            // 2195
 */                                                                                                                    // 2196
Autolinker.htmlParser.ElementNode = Autolinker.Util.extend( Autolinker.htmlParser.HtmlNode, {                          // 2197
                                                                                                                       // 2198
	/**                                                                                                                   // 2199
	 * @cfg {String} tagName (required)                                                                                   // 2200
	 *                                                                                                                    // 2201
	 * The name of the tag that was matched.                                                                              // 2202
	 */                                                                                                                   // 2203
	tagName : '',                                                                                                         // 2204
                                                                                                                       // 2205
	/**                                                                                                                   // 2206
	 * @cfg {Boolean} closing (required)                                                                                  // 2207
	 *                                                                                                                    // 2208
	 * `true` if the element (tag) is a closing tag, `false` if its an opening                                            // 2209
	 * tag.                                                                                                               // 2210
	 */                                                                                                                   // 2211
	closing : false,                                                                                                      // 2212
                                                                                                                       // 2213
                                                                                                                       // 2214
	/**                                                                                                                   // 2215
	 * Returns a string name for the type of node that this class represents.                                             // 2216
	 *                                                                                                                    // 2217
	 * @return {String}                                                                                                   // 2218
	 */                                                                                                                   // 2219
	getType : function() {                                                                                                // 2220
		return 'element';                                                                                                    // 2221
	},                                                                                                                    // 2222
                                                                                                                       // 2223
                                                                                                                       // 2224
	/**                                                                                                                   // 2225
	 * Returns the HTML element's (tag's) name. Ex: for an &lt;img&gt; tag,                                               // 2226
	 * returns "img".                                                                                                     // 2227
	 *                                                                                                                    // 2228
	 * @return {String}                                                                                                   // 2229
	 */                                                                                                                   // 2230
	getTagName : function() {                                                                                             // 2231
		return this.tagName;                                                                                                 // 2232
	},                                                                                                                    // 2233
                                                                                                                       // 2234
                                                                                                                       // 2235
	/**                                                                                                                   // 2236
	 * Determines if the HTML element (tag) is a closing tag. Ex: &lt;div&gt;                                             // 2237
	 * returns `false`, while &lt;/div&gt; returns `true`.                                                                // 2238
	 *                                                                                                                    // 2239
	 * @return {Boolean}                                                                                                  // 2240
	 */                                                                                                                   // 2241
	isClosing : function() {                                                                                              // 2242
		return this.closing;                                                                                                 // 2243
	}                                                                                                                     // 2244
                                                                                                                       // 2245
} );                                                                                                                   // 2246
/*global Autolinker */                                                                                                 // 2247
/**                                                                                                                    // 2248
 * @class Autolinker.htmlParser.EntityNode                                                                             // 2249
 * @extends Autolinker.htmlParser.HtmlNode                                                                             // 2250
 *                                                                                                                     // 2251
 * Represents a known HTML entity node that has been parsed by the {@link Autolinker.htmlParser.HtmlParser}.           // 2252
 * Ex: '&amp;nbsp;', or '&amp#160;' (which will be retrievable from the {@link #getText}                               // 2253
 * method.                                                                                                             // 2254
 *                                                                                                                     // 2255
 * Note that this class will only be returned from the HtmlParser for the set of                                       // 2256
 * checked HTML entity nodes  defined by the {@link Autolinker.htmlParser.HtmlParser#htmlCharacterEntitiesRegex}.      // 2257
 *                                                                                                                     // 2258
 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more                                       // 2259
 * details.                                                                                                            // 2260
 */                                                                                                                    // 2261
Autolinker.htmlParser.EntityNode = Autolinker.Util.extend( Autolinker.htmlParser.HtmlNode, {                           // 2262
                                                                                                                       // 2263
	/**                                                                                                                   // 2264
	 * Returns a string name for the type of node that this class represents.                                             // 2265
	 *                                                                                                                    // 2266
	 * @return {String}                                                                                                   // 2267
	 */                                                                                                                   // 2268
	getType : function() {                                                                                                // 2269
		return 'entity';                                                                                                     // 2270
	}                                                                                                                     // 2271
                                                                                                                       // 2272
} );                                                                                                                   // 2273
/*global Autolinker */                                                                                                 // 2274
/**                                                                                                                    // 2275
 * @class Autolinker.htmlParser.TextNode                                                                               // 2276
 * @extends Autolinker.htmlParser.HtmlNode                                                                             // 2277
 *                                                                                                                     // 2278
 * Represents a text node that has been parsed by the {@link Autolinker.htmlParser.HtmlParser}.                        // 2279
 *                                                                                                                     // 2280
 * See this class's superclass ({@link Autolinker.htmlParser.HtmlNode}) for more                                       // 2281
 * details.                                                                                                            // 2282
 */                                                                                                                    // 2283
Autolinker.htmlParser.TextNode = Autolinker.Util.extend( Autolinker.htmlParser.HtmlNode, {                             // 2284
                                                                                                                       // 2285
	/**                                                                                                                   // 2286
	 * Returns a string name for the type of node that this class represents.                                             // 2287
	 *                                                                                                                    // 2288
	 * @return {String}                                                                                                   // 2289
	 */                                                                                                                   // 2290
	getType : function() {                                                                                                // 2291
		return 'text';                                                                                                       // 2292
	}                                                                                                                     // 2293
                                                                                                                       // 2294
} );                                                                                                                   // 2295
/*global Autolinker */                                                                                                 // 2296
/**                                                                                                                    // 2297
 * @abstract                                                                                                           // 2298
 * @class Autolinker.match.Match                                                                                       // 2299
 *                                                                                                                     // 2300
 * Represents a match found in an input string which should be Autolinked. A Match object is what is provided in a     // 2301
 * {@link Autolinker#replaceFn replaceFn}, and may be used to query for details about the match.                       // 2302
 *                                                                                                                     // 2303
 * For example:                                                                                                        // 2304
 *                                                                                                                     // 2305
 *     var input = "...";  // string with URLs, Email Addresses, and Mentions (Twitter, Instagram)                     // 2306
 *                                                                                                                     // 2307
 *     var linkedText = Autolinker.link( input, {                                                                      // 2308
 *         replaceFn : function( match ) {                                                                             // 2309
 *             console.log( "href = ", match.getAnchorHref() );                                                        // 2310
 *             console.log( "text = ", match.getAnchorText() );                                                        // 2311
 *                                                                                                                     // 2312
 *             switch( match.getType() ) {                                                                             // 2313
 *                 case 'url' :                                                                                        // 2314
 *                     console.log( "url: ", match.getUrl() );                                                         // 2315
 *                                                                                                                     // 2316
 *                 case 'email' :                                                                                      // 2317
 *                     console.log( "email: ", match.getEmail() );                                                     // 2318
 *                                                                                                                     // 2319
 *                 case 'mention' :                                                                                    // 2320
 *                     console.log( "mention: ", match.getMention() );                                                 // 2321
 *             }                                                                                                       // 2322
 *         }                                                                                                           // 2323
 *     } );                                                                                                            // 2324
 *                                                                                                                     // 2325
 * See the {@link Autolinker} class for more details on using the {@link Autolinker#replaceFn replaceFn}.              // 2326
 */                                                                                                                    // 2327
Autolinker.match.Match = Autolinker.Util.extend( Object, {                                                             // 2328
                                                                                                                       // 2329
	/**                                                                                                                   // 2330
	 * @cfg {Autolinker.AnchorTagBuilder} tagBuilder (required)                                                           // 2331
	 *                                                                                                                    // 2332
	 * Reference to the AnchorTagBuilder instance to use to generate an anchor                                            // 2333
	 * tag for the Match.                                                                                                 // 2334
	 */                                                                                                                   // 2335
                                                                                                                       // 2336
	/**                                                                                                                   // 2337
	 * @cfg {String} matchedText (required)                                                                               // 2338
	 *                                                                                                                    // 2339
	 * The original text that was matched by the {@link Autolinker.matcher.Matcher}.                                      // 2340
	 */                                                                                                                   // 2341
                                                                                                                       // 2342
	/**                                                                                                                   // 2343
	 * @cfg {Number} offset (required)                                                                                    // 2344
	 *                                                                                                                    // 2345
	 * The offset of where the match was made in the input string.                                                        // 2346
	 */                                                                                                                   // 2347
                                                                                                                       // 2348
                                                                                                                       // 2349
	/**                                                                                                                   // 2350
	 * @constructor                                                                                                       // 2351
	 * @param {Object} cfg The configuration properties for the Match                                                     // 2352
	 *   instance, specified in an Object (map).                                                                          // 2353
	 */                                                                                                                   // 2354
	constructor : function( cfg ) {                                                                                       // 2355
		if( cfg.tagBuilder == null ) throw new Error( '`tagBuilder` cfg required' );                                         // 2356
		if( cfg.matchedText == null ) throw new Error( '`matchedText` cfg required' );                                       // 2357
		if( cfg.offset == null ) throw new Error( '`offset` cfg required' );                                                 // 2358
                                                                                                                       // 2359
		this.tagBuilder = cfg.tagBuilder;                                                                                    // 2360
		this.matchedText = cfg.matchedText;                                                                                  // 2361
		this.offset = cfg.offset;                                                                                            // 2362
	},                                                                                                                    // 2363
                                                                                                                       // 2364
                                                                                                                       // 2365
	/**                                                                                                                   // 2366
	 * Returns a string name for the type of match that this class represents.                                            // 2367
	 *                                                                                                                    // 2368
	 * @abstract                                                                                                          // 2369
	 * @return {String}                                                                                                   // 2370
	 */                                                                                                                   // 2371
	getType : Autolinker.Util.abstractMethod,                                                                             // 2372
                                                                                                                       // 2373
                                                                                                                       // 2374
	/**                                                                                                                   // 2375
	 * Returns the original text that was matched.                                                                        // 2376
	 *                                                                                                                    // 2377
	 * @return {String}                                                                                                   // 2378
	 */                                                                                                                   // 2379
	getMatchedText : function() {                                                                                         // 2380
		return this.matchedText;                                                                                             // 2381
	},                                                                                                                    // 2382
                                                                                                                       // 2383
                                                                                                                       // 2384
	/**                                                                                                                   // 2385
	 * Sets the {@link #offset} of where the match was made in the input string.                                          // 2386
	 *                                                                                                                    // 2387
	 * A {@link Autolinker.matcher.Matcher} will be fed only HTML text nodes,                                             // 2388
	 * and will therefore set an original offset that is relative to the HTML                                             // 2389
	 * text node itself. However, we want this offset to be relative to the full                                          // 2390
	 * HTML input string, and thus if using {@link Autolinker#parse} (rather                                              // 2391
	 * than calling a {@link Autolinker.matcher.Matcher} directly), then this                                             // 2392
	 * offset is corrected after the Matcher itself has done its job.                                                     // 2393
	 *                                                                                                                    // 2394
	 * @param {Number} offset                                                                                             // 2395
	 */                                                                                                                   // 2396
	setOffset : function( offset ) {                                                                                      // 2397
		this.offset = offset;                                                                                                // 2398
	},                                                                                                                    // 2399
                                                                                                                       // 2400
                                                                                                                       // 2401
	/**                                                                                                                   // 2402
	 * Returns the offset of where the match was made in the input string. This                                           // 2403
	 * is the 0-based index of the match.                                                                                 // 2404
	 *                                                                                                                    // 2405
	 * @return {Number}                                                                                                   // 2406
	 */                                                                                                                   // 2407
	getOffset : function() {                                                                                              // 2408
		return this.offset;                                                                                                  // 2409
	},                                                                                                                    // 2410
                                                                                                                       // 2411
                                                                                                                       // 2412
	/**                                                                                                                   // 2413
	 * Returns the anchor href that should be generated for the match.                                                    // 2414
	 *                                                                                                                    // 2415
	 * @abstract                                                                                                          // 2416
	 * @return {String}                                                                                                   // 2417
	 */                                                                                                                   // 2418
	getAnchorHref : Autolinker.Util.abstractMethod,                                                                       // 2419
                                                                                                                       // 2420
                                                                                                                       // 2421
	/**                                                                                                                   // 2422
	 * Returns the anchor text that should be generated for the match.                                                    // 2423
	 *                                                                                                                    // 2424
	 * @abstract                                                                                                          // 2425
	 * @return {String}                                                                                                   // 2426
	 */                                                                                                                   // 2427
	getAnchorText : Autolinker.Util.abstractMethod,                                                                       // 2428
                                                                                                                       // 2429
                                                                                                                       // 2430
	/**                                                                                                                   // 2431
	 * Returns the CSS class suffix(es) for this match.                                                                   // 2432
	 *                                                                                                                    // 2433
	 * A CSS class suffix is appended to the {@link Autolinker#className} in                                              // 2434
	 * the {@link Autolinker.AnchorTagBuilder} when a match is translated into                                            // 2435
	 * an anchor tag.                                                                                                     // 2436
	 *                                                                                                                    // 2437
	 * For example, if {@link Autolinker#className} was configured as 'myLink',                                           // 2438
	 * and this method returns `[ 'url' ]`, the final class name of the element                                           // 2439
	 * will become: 'myLink myLink-url'.                                                                                  // 2440
	 *                                                                                                                    // 2441
	 * The match may provide multiple CSS class suffixes to be appended to the                                            // 2442
	 * {@link Autolinker#className} in order to facilitate better styling                                                 // 2443
	 * options for different match criteria. See {@link Autolinker.match.Mention}                                         // 2444
	 * for an example.                                                                                                    // 2445
	 *                                                                                                                    // 2446
	 * By default, this method returns a single array with the match's                                                    // 2447
	 * {@link #getType type} name, but may be overridden by subclasses.                                                   // 2448
	 *                                                                                                                    // 2449
	 * @return {String[]}                                                                                                 // 2450
	 */                                                                                                                   // 2451
	getCssClassSuffixes : function() {                                                                                    // 2452
		return [ this.getType() ];                                                                                           // 2453
	},                                                                                                                    // 2454
                                                                                                                       // 2455
                                                                                                                       // 2456
	/**                                                                                                                   // 2457
	 * Builds and returns an {@link Autolinker.HtmlTag} instance based on the                                             // 2458
	 * Match.                                                                                                             // 2459
	 *                                                                                                                    // 2460
	 * This can be used to easily generate anchor tags from matches, and either                                           // 2461
	 * return their HTML string, or modify them before doing so.                                                          // 2462
	 *                                                                                                                    // 2463
	 * Example Usage:                                                                                                     // 2464
	 *                                                                                                                    // 2465
	 *     var tag = match.buildTag();                                                                                    // 2466
	 *     tag.addClass( 'cordova-link' );                                                                                // 2467
	 *     tag.setAttr( 'target', '_system' );                                                                            // 2468
	 *                                                                                                                    // 2469
	 *     tag.toAnchorString();  // <a href="http://google.com" class="cordova-link" target="_system">Google</a>         // 2470
	 */                                                                                                                   // 2471
	buildTag : function() {                                                                                               // 2472
		return this.tagBuilder.build( this );                                                                                // 2473
	}                                                                                                                     // 2474
                                                                                                                       // 2475
} );                                                                                                                   // 2476
                                                                                                                       // 2477
/*global Autolinker */                                                                                                 // 2478
/**                                                                                                                    // 2479
 * @class Autolinker.match.Email                                                                                       // 2480
 * @extends Autolinker.match.Match                                                                                     // 2481
 *                                                                                                                     // 2482
 * Represents a Email match found in an input string which should be Autolinked.                                       // 2483
 *                                                                                                                     // 2484
 * See this class's superclass ({@link Autolinker.match.Match}) for more details.                                      // 2485
 */                                                                                                                    // 2486
Autolinker.match.Email = Autolinker.Util.extend( Autolinker.match.Match, {                                             // 2487
                                                                                                                       // 2488
	/**                                                                                                                   // 2489
	 * @cfg {String} email (required)                                                                                     // 2490
	 *                                                                                                                    // 2491
	 * The email address that was matched.                                                                                // 2492
	 */                                                                                                                   // 2493
                                                                                                                       // 2494
                                                                                                                       // 2495
	/**                                                                                                                   // 2496
	 * @constructor                                                                                                       // 2497
	 * @param {Object} cfg The configuration properties for the Match                                                     // 2498
	 *   instance, specified in an Object (map).                                                                          // 2499
	 */                                                                                                                   // 2500
	constructor : function( cfg ) {                                                                                       // 2501
		Autolinker.match.Match.prototype.constructor.call( this, cfg );                                                      // 2502
                                                                                                                       // 2503
		if( !cfg.email ) throw new Error( '`email` cfg required' );                                                          // 2504
                                                                                                                       // 2505
		this.email = cfg.email;                                                                                              // 2506
	},                                                                                                                    // 2507
                                                                                                                       // 2508
                                                                                                                       // 2509
	/**                                                                                                                   // 2510
	 * Returns a string name for the type of match that this class represents.                                            // 2511
	 *                                                                                                                    // 2512
	 * @return {String}                                                                                                   // 2513
	 */                                                                                                                   // 2514
	getType : function() {                                                                                                // 2515
		return 'email';                                                                                                      // 2516
	},                                                                                                                    // 2517
                                                                                                                       // 2518
                                                                                                                       // 2519
	/**                                                                                                                   // 2520
	 * Returns the email address that was matched.                                                                        // 2521
	 *                                                                                                                    // 2522
	 * @return {String}                                                                                                   // 2523
	 */                                                                                                                   // 2524
	getEmail : function() {                                                                                               // 2525
		return this.email;                                                                                                   // 2526
	},                                                                                                                    // 2527
                                                                                                                       // 2528
                                                                                                                       // 2529
	/**                                                                                                                   // 2530
	 * Returns the anchor href that should be generated for the match.                                                    // 2531
	 *                                                                                                                    // 2532
	 * @return {String}                                                                                                   // 2533
	 */                                                                                                                   // 2534
	getAnchorHref : function() {                                                                                          // 2535
		return 'mailto:' + this.email;                                                                                       // 2536
	},                                                                                                                    // 2537
                                                                                                                       // 2538
                                                                                                                       // 2539
	/**                                                                                                                   // 2540
	 * Returns the anchor text that should be generated for the match.                                                    // 2541
	 *                                                                                                                    // 2542
	 * @return {String}                                                                                                   // 2543
	 */                                                                                                                   // 2544
	getAnchorText : function() {                                                                                          // 2545
		return this.email;                                                                                                   // 2546
	}                                                                                                                     // 2547
                                                                                                                       // 2548
} );                                                                                                                   // 2549
/*global Autolinker */                                                                                                 // 2550
/**                                                                                                                    // 2551
 * @class Autolinker.match.Hashtag                                                                                     // 2552
 * @extends Autolinker.match.Match                                                                                     // 2553
 *                                                                                                                     // 2554
 * Represents a Hashtag match found in an input string which should be                                                 // 2555
 * Autolinked.                                                                                                         // 2556
 *                                                                                                                     // 2557
 * See this class's superclass ({@link Autolinker.match.Match}) for more                                               // 2558
 * details.                                                                                                            // 2559
 */                                                                                                                    // 2560
Autolinker.match.Hashtag = Autolinker.Util.extend( Autolinker.match.Match, {                                           // 2561
                                                                                                                       // 2562
	/**                                                                                                                   // 2563
	 * @cfg {String} serviceName                                                                                          // 2564
	 *                                                                                                                    // 2565
	 * The service to point hashtag matches to. See {@link Autolinker#hashtag}                                            // 2566
	 * for available values.                                                                                              // 2567
	 */                                                                                                                   // 2568
                                                                                                                       // 2569
	/**                                                                                                                   // 2570
	 * @cfg {String} hashtag (required)                                                                                   // 2571
	 *                                                                                                                    // 2572
	 * The Hashtag that was matched, without the '#'.                                                                     // 2573
	 */                                                                                                                   // 2574
                                                                                                                       // 2575
                                                                                                                       // 2576
	/**                                                                                                                   // 2577
	 * @constructor                                                                                                       // 2578
	 * @param {Object} cfg The configuration properties for the Match                                                     // 2579
	 *   instance, specified in an Object (map).                                                                          // 2580
	 */                                                                                                                   // 2581
	constructor : function( cfg ) {                                                                                       // 2582
		Autolinker.match.Match.prototype.constructor.call( this, cfg );                                                      // 2583
                                                                                                                       // 2584
		// TODO: if( !serviceName ) throw new Error( '`serviceName` cfg required' );                                         // 2585
		if( !cfg.hashtag ) throw new Error( '`hashtag` cfg required' );                                                      // 2586
                                                                                                                       // 2587
		this.serviceName = cfg.serviceName;                                                                                  // 2588
		this.hashtag = cfg.hashtag;                                                                                          // 2589
	},                                                                                                                    // 2590
                                                                                                                       // 2591
                                                                                                                       // 2592
	/**                                                                                                                   // 2593
	 * Returns the type of match that this class represents.                                                              // 2594
	 *                                                                                                                    // 2595
	 * @return {String}                                                                                                   // 2596
	 */                                                                                                                   // 2597
	getType : function() {                                                                                                // 2598
		return 'hashtag';                                                                                                    // 2599
	},                                                                                                                    // 2600
                                                                                                                       // 2601
                                                                                                                       // 2602
	/**                                                                                                                   // 2603
	 * Returns the configured {@link #serviceName} to point the Hashtag to.                                               // 2604
	 * Ex: 'facebook', 'twitter'.                                                                                         // 2605
	 *                                                                                                                    // 2606
	 * @return {String}                                                                                                   // 2607
	 */                                                                                                                   // 2608
	getServiceName : function() {                                                                                         // 2609
		return this.serviceName;                                                                                             // 2610
	},                                                                                                                    // 2611
                                                                                                                       // 2612
                                                                                                                       // 2613
	/**                                                                                                                   // 2614
	 * Returns the matched hashtag, without the '#' character.                                                            // 2615
	 *                                                                                                                    // 2616
	 * @return {String}                                                                                                   // 2617
	 */                                                                                                                   // 2618
	getHashtag : function() {                                                                                             // 2619
		return this.hashtag;                                                                                                 // 2620
	},                                                                                                                    // 2621
                                                                                                                       // 2622
                                                                                                                       // 2623
	/**                                                                                                                   // 2624
	 * Returns the anchor href that should be generated for the match.                                                    // 2625
	 *                                                                                                                    // 2626
	 * @return {String}                                                                                                   // 2627
	 */                                                                                                                   // 2628
	getAnchorHref : function() {                                                                                          // 2629
		var serviceName = this.serviceName,                                                                                  // 2630
		    hashtag = this.hashtag;                                                                                          // 2631
                                                                                                                       // 2632
		switch( serviceName ) {                                                                                              // 2633
			case 'twitter' :                                                                                                    // 2634
				return 'https://twitter.com/hashtag/' + hashtag;                                                                   // 2635
			case 'facebook' :                                                                                                   // 2636
				return 'https://www.facebook.com/hashtag/' + hashtag;                                                              // 2637
			case 'instagram' :                                                                                                  // 2638
				return 'https://instagram.com/explore/tags/' + hashtag;                                                            // 2639
                                                                                                                       // 2640
			default :  // Shouldn't happen because Autolinker's constructor should block any invalid values, but just in case.  // 2641
				throw new Error( 'Unknown service name to point hashtag to: ', serviceName );                                      // 2642
		}                                                                                                                    // 2643
	},                                                                                                                    // 2644
                                                                                                                       // 2645
                                                                                                                       // 2646
	/**                                                                                                                   // 2647
	 * Returns the anchor text that should be generated for the match.                                                    // 2648
	 *                                                                                                                    // 2649
	 * @return {String}                                                                                                   // 2650
	 */                                                                                                                   // 2651
	getAnchorText : function() {                                                                                          // 2652
		return '#' + this.hashtag;                                                                                           // 2653
	}                                                                                                                     // 2654
                                                                                                                       // 2655
} );                                                                                                                   // 2656
                                                                                                                       // 2657
/*global Autolinker */                                                                                                 // 2658
/**                                                                                                                    // 2659
 * @class Autolinker.match.Phone                                                                                       // 2660
 * @extends Autolinker.match.Match                                                                                     // 2661
 *                                                                                                                     // 2662
 * Represents a Phone number match found in an input string which should be                                            // 2663
 * Autolinked.                                                                                                         // 2664
 *                                                                                                                     // 2665
 * See this class's superclass ({@link Autolinker.match.Match}) for more                                               // 2666
 * details.                                                                                                            // 2667
 */                                                                                                                    // 2668
Autolinker.match.Phone = Autolinker.Util.extend( Autolinker.match.Match, {                                             // 2669
                                                                                                                       // 2670
	/**                                                                                                                   // 2671
	 * @protected                                                                                                         // 2672
	 * @property {String} number (required)                                                                               // 2673
	 *                                                                                                                    // 2674
	 * The phone number that was matched, without any delimiter characters.                                               // 2675
	 *                                                                                                                    // 2676
	 * Note: This is a string to allow for prefixed 0's.                                                                  // 2677
	 */                                                                                                                   // 2678
                                                                                                                       // 2679
	/**                                                                                                                   // 2680
	 * @protected                                                                                                         // 2681
	 * @property  {Boolean} plusSign (required)                                                                           // 2682
	 *                                                                                                                    // 2683
	 * `true` if the matched phone number started with a '+' sign. We'll include                                          // 2684
	 * it in the `tel:` URL if so, as this is needed for international numbers.                                           // 2685
	 *                                                                                                                    // 2686
	 * Ex: '+1 (123) 456 7879'                                                                                            // 2687
	 */                                                                                                                   // 2688
                                                                                                                       // 2689
                                                                                                                       // 2690
	/**                                                                                                                   // 2691
	 * @constructor                                                                                                       // 2692
	 * @param {Object} cfg The configuration properties for the Match                                                     // 2693
	 *   instance, specified in an Object (map).                                                                          // 2694
	 */                                                                                                                   // 2695
	constructor : function( cfg ) {                                                                                       // 2696
		Autolinker.match.Match.prototype.constructor.call( this, cfg );                                                      // 2697
                                                                                                                       // 2698
		if( !cfg.number ) throw new Error( '`number` cfg required' );                                                        // 2699
		if( cfg.plusSign == null ) throw new Error( '`plusSign` cfg required' );                                             // 2700
                                                                                                                       // 2701
		this.number = cfg.number;                                                                                            // 2702
		this.plusSign = cfg.plusSign;                                                                                        // 2703
	},                                                                                                                    // 2704
                                                                                                                       // 2705
                                                                                                                       // 2706
	/**                                                                                                                   // 2707
	 * Returns a string name for the type of match that this class represents.                                            // 2708
	 *                                                                                                                    // 2709
	 * @return {String}                                                                                                   // 2710
	 */                                                                                                                   // 2711
	getType : function() {                                                                                                // 2712
		return 'phone';                                                                                                      // 2713
	},                                                                                                                    // 2714
                                                                                                                       // 2715
                                                                                                                       // 2716
	/**                                                                                                                   // 2717
	 * Returns the phone number that was matched as a string, without any                                                 // 2718
	 * delimiter characters.                                                                                              // 2719
	 *                                                                                                                    // 2720
	 * Note: This is a string to allow for prefixed 0's.                                                                  // 2721
	 *                                                                                                                    // 2722
	 * @return {String}                                                                                                   // 2723
	 */                                                                                                                   // 2724
	getNumber: function() {                                                                                               // 2725
		return this.number;                                                                                                  // 2726
	},                                                                                                                    // 2727
                                                                                                                       // 2728
                                                                                                                       // 2729
	/**                                                                                                                   // 2730
	 * Returns the anchor href that should be generated for the match.                                                    // 2731
	 *                                                                                                                    // 2732
	 * @return {String}                                                                                                   // 2733
	 */                                                                                                                   // 2734
	getAnchorHref : function() {                                                                                          // 2735
		return 'tel:' + ( this.plusSign ? '+' : '' ) + this.number;                                                          // 2736
	},                                                                                                                    // 2737
                                                                                                                       // 2738
                                                                                                                       // 2739
	/**                                                                                                                   // 2740
	 * Returns the anchor text that should be generated for the match.                                                    // 2741
	 *                                                                                                                    // 2742
	 * @return {String}                                                                                                   // 2743
	 */                                                                                                                   // 2744
	getAnchorText : function() {                                                                                          // 2745
		return this.matchedText;                                                                                             // 2746
	}                                                                                                                     // 2747
                                                                                                                       // 2748
} );                                                                                                                   // 2749
                                                                                                                       // 2750
/*global Autolinker */                                                                                                 // 2751
/**                                                                                                                    // 2752
 * @class Autolinker.match.Mention                                                                                     // 2753
 * @extends Autolinker.match.Match                                                                                     // 2754
 *                                                                                                                     // 2755
 * Represents a Mention match found in an input string which should be Autolinked.                                     // 2756
 *                                                                                                                     // 2757
 * See this class's superclass ({@link Autolinker.match.Match}) for more details.                                      // 2758
 */                                                                                                                    // 2759
Autolinker.match.Mention = Autolinker.Util.extend( Autolinker.match.Match, {                                           // 2760
                                                                                                                       // 2761
	/**                                                                                                                   // 2762
	 * @cfg {String} serviceName                                                                                          // 2763
	 *                                                                                                                    // 2764
	 * The service to point mention matches to. See {@link Autolinker#mention}                                            // 2765
	 * for available values.                                                                                              // 2766
	 */                                                                                                                   // 2767
                                                                                                                       // 2768
	/**                                                                                                                   // 2769
	 * @cfg {String} mention (required)                                                                                   // 2770
	 *                                                                                                                    // 2771
	 * The Mention that was matched, without the '@' character.                                                           // 2772
	 */                                                                                                                   // 2773
                                                                                                                       // 2774
                                                                                                                       // 2775
	/**                                                                                                                   // 2776
	 * @constructor                                                                                                       // 2777
	 * @param {Object} cfg The configuration properties for the Match                                                     // 2778
	 *   instance, specified in an Object (map).                                                                          // 2779
	 */                                                                                                                   // 2780
	constructor : function( cfg ) {                                                                                       // 2781
		Autolinker.match.Match.prototype.constructor.call( this, cfg );                                                      // 2782
                                                                                                                       // 2783
		if( !cfg.serviceName ) throw new Error( '`serviceName` cfg required' );                                              // 2784
		if( !cfg.mention ) throw new Error( '`mention` cfg required' );                                                      // 2785
                                                                                                                       // 2786
		this.mention = cfg.mention;                                                                                          // 2787
		this.serviceName = cfg.serviceName;                                                                                  // 2788
	},                                                                                                                    // 2789
                                                                                                                       // 2790
                                                                                                                       // 2791
	/**                                                                                                                   // 2792
	 * Returns the type of match that this class represents.                                                              // 2793
	 *                                                                                                                    // 2794
	 * @return {String}                                                                                                   // 2795
	 */                                                                                                                   // 2796
	getType : function() {                                                                                                // 2797
		return 'mention';                                                                                                    // 2798
	},                                                                                                                    // 2799
                                                                                                                       // 2800
                                                                                                                       // 2801
	/**                                                                                                                   // 2802
	 * Returns the mention, without the '@' character.                                                                    // 2803
	 *                                                                                                                    // 2804
	 * @return {String}                                                                                                   // 2805
	 */                                                                                                                   // 2806
	getMention : function() {                                                                                             // 2807
		return this.mention;                                                                                                 // 2808
	},                                                                                                                    // 2809
                                                                                                                       // 2810
                                                                                                                       // 2811
	/**                                                                                                                   // 2812
	 * Returns the configured {@link #serviceName} to point the mention to.                                               // 2813
	 * Ex: 'instagram', 'twitter'.                                                                                        // 2814
	 *                                                                                                                    // 2815
	 * @return {String}                                                                                                   // 2816
	 */                                                                                                                   // 2817
	getServiceName : function() {                                                                                         // 2818
		return this.serviceName;                                                                                             // 2819
	},                                                                                                                    // 2820
                                                                                                                       // 2821
                                                                                                                       // 2822
	/**                                                                                                                   // 2823
	 * Returns the anchor href that should be generated for the match.                                                    // 2824
	 *                                                                                                                    // 2825
	 * @return {String}                                                                                                   // 2826
	 */                                                                                                                   // 2827
	getAnchorHref : function() {                                                                                          // 2828
		switch( this.serviceName ) {                                                                                         // 2829
			case 'twitter' :                                                                                                    // 2830
				return 'https://twitter.com/' + this.mention;                                                                      // 2831
			case 'instagram' :                                                                                                  // 2832
				return 'https://instagram.com/' + this.mention;                                                                    // 2833
                                                                                                                       // 2834
			default :  // Shouldn't happen because Autolinker's constructor should block any invalid values, but just in case.  // 2835
				throw new Error( 'Unknown service name to point mention to: ', this.serviceName );                                 // 2836
		}                                                                                                                    // 2837
	},                                                                                                                    // 2838
                                                                                                                       // 2839
                                                                                                                       // 2840
	/**                                                                                                                   // 2841
	 * Returns the anchor text that should be generated for the match.                                                    // 2842
	 *                                                                                                                    // 2843
	 * @return {String}                                                                                                   // 2844
	 */                                                                                                                   // 2845
	getAnchorText : function() {                                                                                          // 2846
		return '@' + this.mention;                                                                                           // 2847
	},                                                                                                                    // 2848
                                                                                                                       // 2849
                                                                                                                       // 2850
	/**                                                                                                                   // 2851
	 * Returns the CSS class suffixes that should be used on a tag built with                                             // 2852
	 * the match. See {@link Autolinker.match.Match#getCssClassSuffixes} for                                              // 2853
	 * details.                                                                                                           // 2854
	 *                                                                                                                    // 2855
	 * @return {String[]}                                                                                                 // 2856
	 */                                                                                                                   // 2857
	getCssClassSuffixes : function() {                                                                                    // 2858
		var cssClassSuffixes = Autolinker.match.Match.prototype.getCssClassSuffixes.call( this ),                            // 2859
		    serviceName = this.getServiceName();                                                                             // 2860
                                                                                                                       // 2861
		if( serviceName ) {                                                                                                  // 2862
			cssClassSuffixes.push( serviceName );                                                                               // 2863
		}                                                                                                                    // 2864
		return cssClassSuffixes;                                                                                             // 2865
	}                                                                                                                     // 2866
                                                                                                                       // 2867
} );                                                                                                                   // 2868
                                                                                                                       // 2869
/*global Autolinker */                                                                                                 // 2870
/**                                                                                                                    // 2871
 * @class Autolinker.match.Url                                                                                         // 2872
 * @extends Autolinker.match.Match                                                                                     // 2873
 *                                                                                                                     // 2874
 * Represents a Url match found in an input string which should be Autolinked.                                         // 2875
 *                                                                                                                     // 2876
 * See this class's superclass ({@link Autolinker.match.Match}) for more details.                                      // 2877
 */                                                                                                                    // 2878
Autolinker.match.Url = Autolinker.Util.extend( Autolinker.match.Match, {                                               // 2879
                                                                                                                       // 2880
	/**                                                                                                                   // 2881
	 * @cfg {String} url (required)                                                                                       // 2882
	 *                                                                                                                    // 2883
	 * The url that was matched.                                                                                          // 2884
	 */                                                                                                                   // 2885
                                                                                                                       // 2886
	/**                                                                                                                   // 2887
	 * @cfg {"scheme"/"www"/"tld"} urlMatchType (required)                                                                // 2888
	 *                                                                                                                    // 2889
	 * The type of URL match that this class represents. This helps to determine                                          // 2890
	 * if the match was made in the original text with a prefixed scheme (ex:                                             // 2891
	 * 'http://www.google.com'), a prefixed 'www' (ex: 'www.google.com'), or                                              // 2892
	 * was matched by a known top-level domain (ex: 'google.com').                                                        // 2893
	 */                                                                                                                   // 2894
                                                                                                                       // 2895
	/**                                                                                                                   // 2896
	 * @cfg {Boolean} protocolUrlMatch (required)                                                                         // 2897
	 *                                                                                                                    // 2898
	 * `true` if the URL is a match which already has a protocol (i.e.                                                    // 2899
	 * 'http://'), `false` if the match was from a 'www' or known TLD match.                                              // 2900
	 */                                                                                                                   // 2901
                                                                                                                       // 2902
	/**                                                                                                                   // 2903
	 * @cfg {Boolean} protocolRelativeMatch (required)                                                                    // 2904
	 *                                                                                                                    // 2905
	 * `true` if the URL is a protocol-relative match. A protocol-relative match                                          // 2906
	 * is a URL that starts with '//', and will be either http:// or https://                                             // 2907
	 * based on the protocol that the site is loaded under.                                                               // 2908
	 */                                                                                                                   // 2909
                                                                                                                       // 2910
	/**                                                                                                                   // 2911
	 * @cfg {Object} stripPrefix (required)                                                                               // 2912
	 *                                                                                                                    // 2913
	 * The Object form of {@link Autolinker#cfg-stripPrefix}.                                                             // 2914
	 */                                                                                                                   // 2915
                                                                                                                       // 2916
	/**                                                                                                                   // 2917
	 * @cfg {Boolean} stripTrailingSlash (required)                                                                       // 2918
	 * @inheritdoc Autolinker#cfg-stripTrailingSlash                                                                      // 2919
	 */                                                                                                                   // 2920
                                                                                                                       // 2921
                                                                                                                       // 2922
	/**                                                                                                                   // 2923
	 * @constructor                                                                                                       // 2924
	 * @param {Object} cfg The configuration properties for the Match                                                     // 2925
	 *   instance, specified in an Object (map).                                                                          // 2926
	 */                                                                                                                   // 2927
	constructor : function( cfg ) {                                                                                       // 2928
		Autolinker.match.Match.prototype.constructor.call( this, cfg );                                                      // 2929
                                                                                                                       // 2930
		if( cfg.urlMatchType !== 'scheme' && cfg.urlMatchType !== 'www' && cfg.urlMatchType !== 'tld' ) throw new Error( '`urlMatchType` cfg must be one of: "scheme", "www", or "tld"' );
		if( !cfg.url ) throw new Error( '`url` cfg required' );                                                              // 2932
		if( cfg.protocolUrlMatch == null ) throw new Error( '`protocolUrlMatch` cfg required' );                             // 2933
		if( cfg.protocolRelativeMatch == null ) throw new Error( '`protocolRelativeMatch` cfg required' );                   // 2934
		if( cfg.stripPrefix == null ) throw new Error( '`stripPrefix` cfg required' );                                       // 2935
		if( cfg.stripTrailingSlash == null ) throw new Error( '`stripTrailingSlash` cfg required' );                         // 2936
                                                                                                                       // 2937
		this.urlMatchType = cfg.urlMatchType;                                                                                // 2938
		this.url = cfg.url;                                                                                                  // 2939
		this.protocolUrlMatch = cfg.protocolUrlMatch;                                                                        // 2940
		this.protocolRelativeMatch = cfg.protocolRelativeMatch;                                                              // 2941
		this.stripPrefix = cfg.stripPrefix;                                                                                  // 2942
		this.stripTrailingSlash = cfg.stripTrailingSlash;                                                                    // 2943
	},                                                                                                                    // 2944
                                                                                                                       // 2945
                                                                                                                       // 2946
	/**                                                                                                                   // 2947
	 * @private                                                                                                           // 2948
	 * @property {RegExp} schemePrefixRegex                                                                               // 2949
	 *                                                                                                                    // 2950
	 * A regular expression used to remove the 'http://' or 'https://' from                                               // 2951
	 * URLs.                                                                                                              // 2952
	 */                                                                                                                   // 2953
	schemePrefixRegex: /^(https?:\/\/)?/i,                                                                                // 2954
                                                                                                                       // 2955
	/**                                                                                                                   // 2956
	 * @private                                                                                                           // 2957
	 * @property {RegExp} wwwPrefixRegex                                                                                  // 2958
	 *                                                                                                                    // 2959
	 * A regular expression used to remove the 'www.' from URLs.                                                          // 2960
	 */                                                                                                                   // 2961
	wwwPrefixRegex: /^(https?:\/\/)?(www\.)?/i,                                                                           // 2962
                                                                                                                       // 2963
	/**                                                                                                                   // 2964
	 * @private                                                                                                           // 2965
	 * @property {RegExp} protocolRelativeRegex                                                                           // 2966
	 *                                                                                                                    // 2967
	 * The regular expression used to remove the protocol-relative '//' from the {@link #url} string, for purposes        // 2968
	 * of {@link #getAnchorText}. A protocol-relative URL is, for example, "//yahoo.com"                                  // 2969
	 */                                                                                                                   // 2970
	protocolRelativeRegex : /^\/\//,                                                                                      // 2971
                                                                                                                       // 2972
	/**                                                                                                                   // 2973
	 * @private                                                                                                           // 2974
	 * @property {Boolean} protocolPrepended                                                                              // 2975
	 *                                                                                                                    // 2976
	 * Will be set to `true` if the 'http://' protocol has been prepended to the {@link #url} (because the                // 2977
	 * {@link #url} did not have a protocol)                                                                              // 2978
	 */                                                                                                                   // 2979
	protocolPrepended : false,                                                                                            // 2980
                                                                                                                       // 2981
                                                                                                                       // 2982
	/**                                                                                                                   // 2983
	 * Returns a string name for the type of match that this class represents.                                            // 2984
	 *                                                                                                                    // 2985
	 * @return {String}                                                                                                   // 2986
	 */                                                                                                                   // 2987
	getType : function() {                                                                                                // 2988
		return 'url';                                                                                                        // 2989
	},                                                                                                                    // 2990
                                                                                                                       // 2991
                                                                                                                       // 2992
	/**                                                                                                                   // 2993
	 * Returns a string name for the type of URL match that this class                                                    // 2994
	 * represents.                                                                                                        // 2995
	 *                                                                                                                    // 2996
	 * This helps to determine if the match was made in the original text with a                                          // 2997
	 * prefixed scheme (ex: 'http://www.google.com'), a prefixed 'www' (ex:                                               // 2998
	 * 'www.google.com'), or was matched by a known top-level domain (ex:                                                 // 2999
	 * 'google.com').                                                                                                     // 3000
	 *                                                                                                                    // 3001
	 * @return {"scheme"/"www"/"tld"}                                                                                     // 3002
	 */                                                                                                                   // 3003
	getUrlMatchType : function() {                                                                                        // 3004
		return this.urlMatchType;                                                                                            // 3005
	},                                                                                                                    // 3006
                                                                                                                       // 3007
                                                                                                                       // 3008
	/**                                                                                                                   // 3009
	 * Returns the url that was matched, assuming the protocol to be 'http://' if the original                            // 3010
	 * match was missing a protocol.                                                                                      // 3011
	 *                                                                                                                    // 3012
	 * @return {String}                                                                                                   // 3013
	 */                                                                                                                   // 3014
	getUrl : function() {                                                                                                 // 3015
		var url = this.url;                                                                                                  // 3016
                                                                                                                       // 3017
		// if the url string doesn't begin with a protocol, assume 'http://'                                                 // 3018
		if( !this.protocolRelativeMatch && !this.protocolUrlMatch && !this.protocolPrepended ) {                             // 3019
			url = this.url = 'http://' + url;                                                                                   // 3020
                                                                                                                       // 3021
			this.protocolPrepended = true;                                                                                      // 3022
		}                                                                                                                    // 3023
                                                                                                                       // 3024
		return url;                                                                                                          // 3025
	},                                                                                                                    // 3026
                                                                                                                       // 3027
                                                                                                                       // 3028
	/**                                                                                                                   // 3029
	 * Returns the anchor href that should be generated for the match.                                                    // 3030
	 *                                                                                                                    // 3031
	 * @return {String}                                                                                                   // 3032
	 */                                                                                                                   // 3033
	getAnchorHref : function() {                                                                                          // 3034
		var url = this.getUrl();                                                                                             // 3035
                                                                                                                       // 3036
		return url.replace( /&amp;/g, '&' );  // any &amp;'s in the URL should be converted back to '&' if they were displayed as &amp; in the source html
	},                                                                                                                    // 3038
                                                                                                                       // 3039
                                                                                                                       // 3040
	/**                                                                                                                   // 3041
	 * Returns the anchor text that should be generated for the match.                                                    // 3042
	 *                                                                                                                    // 3043
	 * @return {String}                                                                                                   // 3044
	 */                                                                                                                   // 3045
	getAnchorText : function() {                                                                                          // 3046
		var anchorText = this.getMatchedText();                                                                              // 3047
                                                                                                                       // 3048
		if( this.protocolRelativeMatch ) {                                                                                   // 3049
			// Strip off any protocol-relative '//' from the anchor text                                                        // 3050
			anchorText = this.stripProtocolRelativePrefix( anchorText );                                                        // 3051
		}                                                                                                                    // 3052
		if( this.stripPrefix.scheme ) {                                                                                      // 3053
			anchorText = this.stripSchemePrefix( anchorText );                                                                  // 3054
		}                                                                                                                    // 3055
		if( this.stripPrefix.www ) {                                                                                         // 3056
			anchorText = this.stripWwwPrefix( anchorText );                                                                     // 3057
		}                                                                                                                    // 3058
		if( this.stripTrailingSlash ) {                                                                                      // 3059
			anchorText = this.removeTrailingSlash( anchorText );  // remove trailing slash, if there is one                     // 3060
		}                                                                                                                    // 3061
                                                                                                                       // 3062
		return anchorText;                                                                                                   // 3063
	},                                                                                                                    // 3064
                                                                                                                       // 3065
                                                                                                                       // 3066
	// ---------------------------------------                                                                            // 3067
                                                                                                                       // 3068
	// Utility Functionality                                                                                              // 3069
                                                                                                                       // 3070
	/**                                                                                                                   // 3071
	 * Strips the scheme prefix (such as "http://" or "https://") from the given                                          // 3072
	 * `url`.                                                                                                             // 3073
	 *                                                                                                                    // 3074
	 * @private                                                                                                           // 3075
	 * @param {String} url The text of the anchor that is being generated, for                                            // 3076
	 *   which to strip off the url scheme.                                                                               // 3077
	 * @return {String} The `url`, with the scheme stripped.                                                              // 3078
	 */                                                                                                                   // 3079
	stripSchemePrefix : function( url ) {                                                                                 // 3080
		return url.replace( this.schemePrefixRegex, '' );                                                                    // 3081
	},                                                                                                                    // 3082
                                                                                                                       // 3083
                                                                                                                       // 3084
	/**                                                                                                                   // 3085
	 * Strips the 'www' prefix from the given `url`.                                                                      // 3086
	 *                                                                                                                    // 3087
	 * @private                                                                                                           // 3088
	 * @param {String} url The text of the anchor that is being generated, for                                            // 3089
	 *   which to strip off the 'www' if it exists.                                                                       // 3090
	 * @return {String} The `url`, with the 'www' stripped.                                                               // 3091
	 */                                                                                                                   // 3092
	stripWwwPrefix : function( url ) {                                                                                    // 3093
		return url.replace( this.wwwPrefixRegex, '$1' );  // leave any scheme ($1), it one exists                            // 3094
	},                                                                                                                    // 3095
                                                                                                                       // 3096
                                                                                                                       // 3097
	/**                                                                                                                   // 3098
	 * Strips any protocol-relative '//' from the anchor text.                                                            // 3099
	 *                                                                                                                    // 3100
	 * @private                                                                                                           // 3101
	 * @param {String} text The text of the anchor that is being generated, for which to strip off the                    // 3102
	 *   protocol-relative prefix (such as stripping off "//")                                                            // 3103
	 * @return {String} The `anchorText`, with the protocol-relative prefix stripped.                                     // 3104
	 */                                                                                                                   // 3105
	stripProtocolRelativePrefix : function( text ) {                                                                      // 3106
		return text.replace( this.protocolRelativeRegex, '' );                                                               // 3107
	},                                                                                                                    // 3108
                                                                                                                       // 3109
                                                                                                                       // 3110
	/**                                                                                                                   // 3111
	 * Removes any trailing slash from the given `anchorText`, in preparation for the text to be displayed.               // 3112
	 *                                                                                                                    // 3113
	 * @private                                                                                                           // 3114
	 * @param {String} anchorText The text of the anchor that is being generated, for which to remove any trailing        // 3115
	 *   slash ('/') that may exist.                                                                                      // 3116
	 * @return {String} The `anchorText`, with the trailing slash removed.                                                // 3117
	 */                                                                                                                   // 3118
	removeTrailingSlash : function( anchorText ) {                                                                        // 3119
		if( anchorText.charAt( anchorText.length - 1 ) === '/' ) {                                                           // 3120
			anchorText = anchorText.slice( 0, -1 );                                                                             // 3121
		}                                                                                                                    // 3122
		return anchorText;                                                                                                   // 3123
	}                                                                                                                     // 3124
                                                                                                                       // 3125
} );                                                                                                                   // 3126
/*global Autolinker */                                                                                                 // 3127
/**                                                                                                                    // 3128
 * @abstract                                                                                                           // 3129
 * @class Autolinker.matcher.Matcher                                                                                   // 3130
 *                                                                                                                     // 3131
 * An abstract class and interface for individual matchers to find matches in                                          // 3132
 * an input string with linkified versions of them.                                                                    // 3133
 *                                                                                                                     // 3134
 * Note that Matchers do not take HTML into account - they must be fed the text                                        // 3135
 * nodes of any HTML string, which is handled by {@link Autolinker#parse}.                                             // 3136
 */                                                                                                                    // 3137
Autolinker.matcher.Matcher = Autolinker.Util.extend( Object, {                                                         // 3138
                                                                                                                       // 3139
	/**                                                                                                                   // 3140
	 * @cfg {Autolinker.AnchorTagBuilder} tagBuilder (required)                                                           // 3141
	 *                                                                                                                    // 3142
	 * Reference to the AnchorTagBuilder instance to use to generate HTML tags                                            // 3143
	 * for {@link Autolinker.match.Match Matches}.                                                                        // 3144
	 */                                                                                                                   // 3145
                                                                                                                       // 3146
                                                                                                                       // 3147
	/**                                                                                                                   // 3148
	 * @constructor                                                                                                       // 3149
	 * @param {Object} cfg The configuration properties for the Matcher                                                   // 3150
	 *   instance, specified in an Object (map).                                                                          // 3151
	 */                                                                                                                   // 3152
	constructor : function( cfg ) {                                                                                       // 3153
		if( !cfg.tagBuilder ) throw new Error( '`tagBuilder` cfg required' );                                                // 3154
                                                                                                                       // 3155
		this.tagBuilder = cfg.tagBuilder;                                                                                    // 3156
	},                                                                                                                    // 3157
                                                                                                                       // 3158
                                                                                                                       // 3159
	/**                                                                                                                   // 3160
	 * Parses the input `text` and returns the array of {@link Autolinker.match.Match Matches}                            // 3161
	 * for the matcher.                                                                                                   // 3162
	 *                                                                                                                    // 3163
	 * @abstract                                                                                                          // 3164
	 * @param {String} text The text to scan and replace matches in.                                                      // 3165
	 * @return {Autolinker.match.Match[]}                                                                                 // 3166
	 */                                                                                                                   // 3167
	parseMatches : Autolinker.Util.abstractMethod                                                                         // 3168
                                                                                                                       // 3169
} );                                                                                                                   // 3170
/*global Autolinker */                                                                                                 // 3171
/**                                                                                                                    // 3172
 * @class Autolinker.matcher.Email                                                                                     // 3173
 * @extends Autolinker.matcher.Matcher                                                                                 // 3174
 *                                                                                                                     // 3175
 * Matcher to find email matches in an input string.                                                                   // 3176
 *                                                                                                                     // 3177
 * See this class's superclass ({@link Autolinker.matcher.Matcher}) for more details.                                  // 3178
 */                                                                                                                    // 3179
Autolinker.matcher.Email = Autolinker.Util.extend( Autolinker.matcher.Matcher, {                                       // 3180
                                                                                                                       // 3181
	/**                                                                                                                   // 3182
	 * The regular expression to match email addresses. Example match:                                                    // 3183
	 *                                                                                                                    // 3184
	 *     person@place.com                                                                                               // 3185
	 *                                                                                                                    // 3186
	 * @private                                                                                                           // 3187
	 * @property {RegExp} matcherRegex                                                                                    // 3188
	 */                                                                                                                   // 3189
	matcherRegex : (function() {                                                                                          // 3190
		var alphaNumericChars = Autolinker.RegexLib.alphaNumericCharsStr,                                                    // 3191
		    emailRegex = new RegExp( '[' + alphaNumericChars + '\\-_\';:&=+$.,]+@' ),  // something@ for email addresses (a.k.a. local-part)
			domainNameRegex = Autolinker.RegexLib.domainNameRegex,                                                              // 3193
			tldRegex = Autolinker.RegexLib.tldRegex;  // match our known top level domains (TLDs)                               // 3194
                                                                                                                       // 3195
		return new RegExp( [                                                                                                 // 3196
			emailRegex.source,                                                                                                  // 3197
			domainNameRegex.source,                                                                                             // 3198
			'\\.', tldRegex.source   // '.com', '.net', etc                                                                     // 3199
		].join( "" ), 'gi' );                                                                                                // 3200
	} )(),                                                                                                                // 3201
                                                                                                                       // 3202
                                                                                                                       // 3203
	/**                                                                                                                   // 3204
	 * @inheritdoc                                                                                                        // 3205
	 */                                                                                                                   // 3206
	parseMatches : function( text ) {                                                                                     // 3207
		var matcherRegex = this.matcherRegex,                                                                                // 3208
		    tagBuilder = this.tagBuilder,                                                                                    // 3209
		    matches = [],                                                                                                    // 3210
		    match;                                                                                                           // 3211
                                                                                                                       // 3212
		while( ( match = matcherRegex.exec( text ) ) !== null ) {                                                            // 3213
			var matchedText = match[ 0 ];                                                                                       // 3214
                                                                                                                       // 3215
			matches.push( new Autolinker.match.Email( {                                                                         // 3216
				tagBuilder  : tagBuilder,                                                                                          // 3217
				matchedText : matchedText,                                                                                         // 3218
				offset      : match.index,                                                                                         // 3219
				email       : matchedText                                                                                          // 3220
			} ) );                                                                                                              // 3221
		}                                                                                                                    // 3222
                                                                                                                       // 3223
		return matches;                                                                                                      // 3224
	}                                                                                                                     // 3225
                                                                                                                       // 3226
} );                                                                                                                   // 3227
/*global Autolinker */                                                                                                 // 3228
/**                                                                                                                    // 3229
 * @class Autolinker.matcher.Hashtag                                                                                   // 3230
 * @extends Autolinker.matcher.Matcher                                                                                 // 3231
 *                                                                                                                     // 3232
 * Matcher to find Hashtag matches in an input string.                                                                 // 3233
 */                                                                                                                    // 3234
Autolinker.matcher.Hashtag = Autolinker.Util.extend( Autolinker.matcher.Matcher, {                                     // 3235
                                                                                                                       // 3236
	/**                                                                                                                   // 3237
	 * @cfg {String} serviceName                                                                                          // 3238
	 *                                                                                                                    // 3239
	 * The service to point hashtag matches to. See {@link Autolinker#hashtag}                                            // 3240
	 * for available values.                                                                                              // 3241
	 */                                                                                                                   // 3242
                                                                                                                       // 3243
                                                                                                                       // 3244
	/**                                                                                                                   // 3245
	 * The regular expression to match Hashtags. Example match:                                                           // 3246
	 *                                                                                                                    // 3247
	 *     #asdf                                                                                                          // 3248
	 *                                                                                                                    // 3249
	 * @private                                                                                                           // 3250
	 * @property {RegExp} matcherRegex                                                                                    // 3251
	 */                                                                                                                   // 3252
	matcherRegex : new RegExp( '#[_' + Autolinker.RegexLib.alphaNumericCharsStr + ']{1,139}', 'g' ),                      // 3253
                                                                                                                       // 3254
	/**                                                                                                                   // 3255
	 * The regular expression to use to check the character before a username match to                                    // 3256
	 * make sure we didn't accidentally match an email address.                                                           // 3257
	 *                                                                                                                    // 3258
	 * For example, the string "asdf@asdf.com" should not match "@asdf" as a username.                                    // 3259
	 *                                                                                                                    // 3260
	 * @private                                                                                                           // 3261
	 * @property {RegExp} nonWordCharRegex                                                                                // 3262
	 */                                                                                                                   // 3263
	nonWordCharRegex : new RegExp( '[^' + Autolinker.RegexLib.alphaNumericCharsStr + ']' ),                               // 3264
                                                                                                                       // 3265
                                                                                                                       // 3266
	/**                                                                                                                   // 3267
	 * @constructor                                                                                                       // 3268
	 * @param {Object} cfg The configuration properties for the Match instance,                                           // 3269
	 *   specified in an Object (map).                                                                                    // 3270
	 */                                                                                                                   // 3271
	constructor : function( cfg ) {                                                                                       // 3272
		Autolinker.matcher.Matcher.prototype.constructor.call( this, cfg );                                                  // 3273
                                                                                                                       // 3274
		this.serviceName = cfg.serviceName;                                                                                  // 3275
	},                                                                                                                    // 3276
                                                                                                                       // 3277
                                                                                                                       // 3278
	/**                                                                                                                   // 3279
	 * @inheritdoc                                                                                                        // 3280
	 */                                                                                                                   // 3281
	parseMatches : function( text ) {                                                                                     // 3282
		var matcherRegex = this.matcherRegex,                                                                                // 3283
		    nonWordCharRegex = this.nonWordCharRegex,                                                                        // 3284
		    serviceName = this.serviceName,                                                                                  // 3285
		    tagBuilder = this.tagBuilder,                                                                                    // 3286
		    matches = [],                                                                                                    // 3287
		    match;                                                                                                           // 3288
                                                                                                                       // 3289
		while( ( match = matcherRegex.exec( text ) ) !== null ) {                                                            // 3290
			var offset = match.index,                                                                                           // 3291
			    prevChar = text.charAt( offset - 1 );                                                                           // 3292
                                                                                                                       // 3293
			// If we found the match at the beginning of the string, or we found the match                                      // 3294
			// and there is a whitespace char in front of it (meaning it is not a '#' char                                      // 3295
			// in the middle of a word), then it is a hashtag match.                                                            // 3296
			if( offset === 0 || nonWordCharRegex.test( prevChar ) ) {                                                           // 3297
				var matchedText = match[ 0 ],                                                                                      // 3298
				    hashtag = match[ 0 ].slice( 1 );  // strip off the '#' character at the beginning                              // 3299
                                                                                                                       // 3300
				matches.push( new Autolinker.match.Hashtag( {                                                                      // 3301
					tagBuilder  : tagBuilder,                                                                                         // 3302
					matchedText : matchedText,                                                                                        // 3303
					offset      : offset,                                                                                             // 3304
					serviceName : serviceName,                                                                                        // 3305
					hashtag     : hashtag                                                                                             // 3306
				} ) );                                                                                                             // 3307
			}                                                                                                                   // 3308
		}                                                                                                                    // 3309
                                                                                                                       // 3310
		return matches;                                                                                                      // 3311
	}                                                                                                                     // 3312
                                                                                                                       // 3313
} );                                                                                                                   // 3314
/*global Autolinker */                                                                                                 // 3315
/**                                                                                                                    // 3316
 * @class Autolinker.matcher.Phone                                                                                     // 3317
 * @extends Autolinker.matcher.Matcher                                                                                 // 3318
 *                                                                                                                     // 3319
 * Matcher to find Phone number matches in an input string.                                                            // 3320
 *                                                                                                                     // 3321
 * See this class's superclass ({@link Autolinker.matcher.Matcher}) for more                                           // 3322
 * details.                                                                                                            // 3323
 */                                                                                                                    // 3324
Autolinker.matcher.Phone = Autolinker.Util.extend( Autolinker.matcher.Matcher, {                                       // 3325
                                                                                                                       // 3326
	/**                                                                                                                   // 3327
	 * The regular expression to match Phone numbers. Example match:                                                      // 3328
	 *                                                                                                                    // 3329
	 *     (123) 456-7890                                                                                                 // 3330
	 *                                                                                                                    // 3331
	 * This regular expression has the following capturing groups:                                                        // 3332
	 *                                                                                                                    // 3333
	 * 1. The prefixed '+' sign, if there is one.                                                                         // 3334
	 *                                                                                                                    // 3335
	 * @private                                                                                                           // 3336
	 * @property {RegExp} matcherRegex                                                                                    // 3337
	 */                                                                                                                   // 3338
	matcherRegex : /(?:(\+)?\d{1,3}[-\040.])?\(?\d{3}\)?[-\040.]?\d{3}[-\040.]\d{4}/g,  // ex: (123) 456-7890, 123 456 7890, 123-456-7890, etc.
                                                                                                                       // 3340
	/**                                                                                                                   // 3341
	 * @inheritdoc                                                                                                        // 3342
	 */                                                                                                                   // 3343
	parseMatches : function( text ) {                                                                                     // 3344
		var matcherRegex = this.matcherRegex,                                                                                // 3345
		    tagBuilder = this.tagBuilder,                                                                                    // 3346
		    matches = [],                                                                                                    // 3347
		    match;                                                                                                           // 3348
                                                                                                                       // 3349
		while( ( match = matcherRegex.exec( text ) ) !== null ) {                                                            // 3350
			// Remove non-numeric values from phone number string                                                               // 3351
			var matchedText = match[ 0 ],                                                                                       // 3352
			    cleanNumber = matchedText.replace( /\D/g, '' ),  // strip out non-digit characters                              // 3353
			    plusSign = !!match[ 1 ];  // match[ 1 ] is the prefixed plus sign, if there is one                              // 3354
                                                                                                                       // 3355
			matches.push( new Autolinker.match.Phone( {                                                                         // 3356
				tagBuilder  : tagBuilder,                                                                                          // 3357
				matchedText : matchedText,                                                                                         // 3358
				offset      : match.index,                                                                                         // 3359
				number      : cleanNumber,                                                                                         // 3360
				plusSign    : plusSign                                                                                             // 3361
			} ) );                                                                                                              // 3362
		}                                                                                                                    // 3363
                                                                                                                       // 3364
		return matches;                                                                                                      // 3365
	}                                                                                                                     // 3366
                                                                                                                       // 3367
} );                                                                                                                   // 3368
/*global Autolinker */                                                                                                 // 3369
/**                                                                                                                    // 3370
 * @class Autolinker.matcher.Mention                                                                                   // 3371
 * @extends Autolinker.matcher.Matcher                                                                                 // 3372
 *                                                                                                                     // 3373
 * Matcher to find/replace username matches in an input string.                                                        // 3374
 */                                                                                                                    // 3375
Autolinker.matcher.Mention = Autolinker.Util.extend( Autolinker.matcher.Matcher, {                                     // 3376
                                                                                                                       // 3377
	/**                                                                                                                   // 3378
	 * Hash of regular expression to match username handles. Example match:                                               // 3379
	 *                                                                                                                    // 3380
	 *     @asdf                                                                                                          // 3381
	 *                                                                                                                    // 3382
	 * @private                                                                                                           // 3383
	 * @property {Object} matcherRegexes                                                                                  // 3384
	 */                                                                                                                   // 3385
	matcherRegexes : {                                                                                                    // 3386
		"twitter": new RegExp( '@[_' + Autolinker.RegexLib.alphaNumericCharsStr + ']{1,20}', 'g' ),                          // 3387
		"instagram": new RegExp( '@[_.' + Autolinker.RegexLib.alphaNumericCharsStr + ']{1,50}', 'g' )                        // 3388
	},                                                                                                                    // 3389
                                                                                                                       // 3390
	/**                                                                                                                   // 3391
	 * The regular expression to use to check the character before a username match to                                    // 3392
	 * make sure we didn't accidentally match an email address.                                                           // 3393
	 *                                                                                                                    // 3394
	 * For example, the string "asdf@asdf.com" should not match "@asdf" as a username.                                    // 3395
	 *                                                                                                                    // 3396
	 * @private                                                                                                           // 3397
	 * @property {RegExp} nonWordCharRegex                                                                                // 3398
	 */                                                                                                                   // 3399
	nonWordCharRegex : new RegExp( '[^' + Autolinker.RegexLib.alphaNumericCharsStr + ']' ),                               // 3400
                                                                                                                       // 3401
                                                                                                                       // 3402
	/**                                                                                                                   // 3403
	 * @constructor                                                                                                       // 3404
	 * @param {Object} cfg The configuration properties for the Match instance,                                           // 3405
	 *   specified in an Object (map).                                                                                    // 3406
	 */                                                                                                                   // 3407
	constructor : function( cfg ) {                                                                                       // 3408
		Autolinker.matcher.Matcher.prototype.constructor.call( this, cfg );                                                  // 3409
                                                                                                                       // 3410
		this.serviceName = cfg.serviceName;                                                                                  // 3411
	},                                                                                                                    // 3412
                                                                                                                       // 3413
                                                                                                                       // 3414
	/**                                                                                                                   // 3415
	 * @inheritdoc                                                                                                        // 3416
	 */                                                                                                                   // 3417
	parseMatches : function( text ) {                                                                                     // 3418
		var matcherRegex = this.matcherRegexes[this.serviceName],                                                            // 3419
		    nonWordCharRegex = this.nonWordCharRegex,                                                                        // 3420
		    serviceName = this.serviceName,                                                                                  // 3421
		    tagBuilder = this.tagBuilder,                                                                                    // 3422
		    matches = [],                                                                                                    // 3423
		    match;                                                                                                           // 3424
                                                                                                                       // 3425
		if (!matcherRegex) {                                                                                                 // 3426
			return matches;                                                                                                     // 3427
		}                                                                                                                    // 3428
                                                                                                                       // 3429
		while( ( match = matcherRegex.exec( text ) ) !== null ) {                                                            // 3430
			var offset = match.index,                                                                                           // 3431
			    prevChar = text.charAt( offset - 1 );                                                                           // 3432
                                                                                                                       // 3433
			// If we found the match at the beginning of the string, or we found the match                                      // 3434
			// and there is a whitespace char in front of it (meaning it is not an email                                        // 3435
			// address), then it is a username match.                                                                           // 3436
			if( offset === 0 || nonWordCharRegex.test( prevChar ) ) {                                                           // 3437
				var matchedText = match[ 0 ].replace(/\.+$/g, ''), // strip off trailing .                                         // 3438
				    mention = matchedText.slice( 1 );  // strip off the '@' character at the beginning                             // 3439
                                                                                                                       // 3440
				matches.push( new Autolinker.match.Mention( {                                                                      // 3441
					tagBuilder    : tagBuilder,                                                                                       // 3442
					matchedText   : matchedText,                                                                                      // 3443
					offset        : offset,                                                                                           // 3444
					serviceName   : serviceName,                                                                                      // 3445
					mention       : mention                                                                                           // 3446
				} ) );                                                                                                             // 3447
			}                                                                                                                   // 3448
		}                                                                                                                    // 3449
                                                                                                                       // 3450
		return matches;                                                                                                      // 3451
	}                                                                                                                     // 3452
                                                                                                                       // 3453
} );                                                                                                                   // 3454
                                                                                                                       // 3455
/*global Autolinker */                                                                                                 // 3456
/**                                                                                                                    // 3457
 * @class Autolinker.matcher.Url                                                                                       // 3458
 * @extends Autolinker.matcher.Matcher                                                                                 // 3459
 *                                                                                                                     // 3460
 * Matcher to find URL matches in an input string.                                                                     // 3461
 *                                                                                                                     // 3462
 * See this class's superclass ({@link Autolinker.matcher.Matcher}) for more details.                                  // 3463
 */                                                                                                                    // 3464
Autolinker.matcher.Url = Autolinker.Util.extend( Autolinker.matcher.Matcher, {                                         // 3465
                                                                                                                       // 3466
	/**                                                                                                                   // 3467
	 * @cfg {Object} stripPrefix (required)                                                                               // 3468
	 *                                                                                                                    // 3469
	 * The Object form of {@link Autolinker#cfg-stripPrefix}.                                                             // 3470
	 */                                                                                                                   // 3471
                                                                                                                       // 3472
	/**                                                                                                                   // 3473
	 * @cfg {Boolean} stripTrailingSlash (required)                                                                       // 3474
	 * @inheritdoc Autolinker#stripTrailingSlash                                                                          // 3475
	 */                                                                                                                   // 3476
                                                                                                                       // 3477
                                                                                                                       // 3478
	/**                                                                                                                   // 3479
	 * @private                                                                                                           // 3480
	 * @property {RegExp} matcherRegex                                                                                    // 3481
	 *                                                                                                                    // 3482
	 * The regular expression to match URLs with an optional scheme, port                                                 // 3483
	 * number, path, query string, and hash anchor.                                                                       // 3484
	 *                                                                                                                    // 3485
	 * Example matches:                                                                                                   // 3486
	 *                                                                                                                    // 3487
	 *     http://google.com                                                                                              // 3488
	 *     www.google.com                                                                                                 // 3489
	 *     google.com/path/to/file?q1=1&q2=2#myAnchor                                                                     // 3490
	 *                                                                                                                    // 3491
	 *                                                                                                                    // 3492
	 * This regular expression will have the following capturing groups:                                                  // 3493
	 *                                                                                                                    // 3494
	 * 1.  Group that matches a scheme-prefixed URL (i.e. 'http://google.com').                                           // 3495
	 *     This is used to match scheme URLs with just a single word, such as                                             // 3496
	 *     'http://localhost', where we won't double check that the domain name                                           // 3497
	 *     has at least one dot ('.') in it.                                                                              // 3498
	 * 2.  Group that matches a 'www.' prefixed URL. This is only matched if the                                          // 3499
	 *     'www.' text was not prefixed by a scheme (i.e.: not prefixed by                                                // 3500
	 *     'http://', 'ftp:', etc.)                                                                                       // 3501
	 * 3.  A protocol-relative ('//') match for the case of a 'www.' prefixed                                             // 3502
	 *     URL. Will be an empty string if it is not a protocol-relative match.                                           // 3503
	 *     We need to know the character before the '//' in order to determine                                            // 3504
	 *     if it is a valid match or the // was in a string we don't want to                                              // 3505
	 *     auto-link.                                                                                                     // 3506
	 * 4.  Group that matches a known TLD (top level domain), when a scheme                                               // 3507
	 *     or 'www.'-prefixed domain is not matched.                                                                      // 3508
	 * 5.  A protocol-relative ('//') match for the case of a known TLD prefixed                                          // 3509
	 *     URL. Will be an empty string if it is not a protocol-relative match.                                           // 3510
	 *     See #3 for more info.                                                                                          // 3511
	 */                                                                                                                   // 3512
	matcherRegex : (function() {                                                                                          // 3513
		var schemeRegex = /(?:[A-Za-z][-.+A-Za-z0-9]*:(?![A-Za-z][-.+A-Za-z0-9]*:\/\/)(?!\d+\/?)(?:\/\/)?)/,  // match protocol, allow in format "http://" or "mailto:". However, do not match the first part of something like 'link:http://www.google.com' (i.e. don't match "link:"). Also, make sure we don't interpret 'google.com:8000' as if 'google.com' was a protocol here (i.e. ignore a trailing port number in this regex)
		    wwwRegex = /(?:www\.)/,                  // starting with 'www.'                                                 // 3515
		    domainNameRegex = Autolinker.RegexLib.domainNameRegex,                                                           // 3516
		    tldRegex = Autolinker.RegexLib.tldRegex,  // match our known top level domains (TLDs)                            // 3517
		    alphaNumericCharsStr = Autolinker.RegexLib.alphaNumericCharsStr,                                                 // 3518
                                                                                                                       // 3519
		    // Allow optional path, query string, and hash anchor, not ending in the following characters: "?!:,.;"          // 3520
		    // http://blog.codinghorror.com/the-problem-with-urls/                                                           // 3521
		    urlSuffixRegex = new RegExp( '[' + alphaNumericCharsStr + '\\-+&@#/%=~_()|\'$*\\[\\]?!:,.;\u2713]*[' + alphaNumericCharsStr + '\\-+&@#/%=~_()|\'$*\\[\\]\u2713]' );
                                                                                                                       // 3523
		return new RegExp( [                                                                                                 // 3524
			'(?:', // parens to cover match for scheme (optional), and domain                                                   // 3525
				'(',  // *** Capturing group $1, for a scheme-prefixed url (ex: http://google.com)                                 // 3526
					schemeRegex.source,                                                                                               // 3527
					domainNameRegex.source,                                                                                           // 3528
				')',                                                                                                               // 3529
                                                                                                                       // 3530
				'|',                                                                                                               // 3531
                                                                                                                       // 3532
				'(',  // *** Capturing group $2, for a 'www.' prefixed url (ex: www.google.com)                                    // 3533
					'(//)?',  // *** Capturing group $3 for an optional protocol-relative URL. Must be at the beginning of the string or start with a non-word character (handled later)
					wwwRegex.source,                                                                                                  // 3535
					domainNameRegex.source,                                                                                           // 3536
				')',                                                                                                               // 3537
                                                                                                                       // 3538
				'|',                                                                                                               // 3539
                                                                                                                       // 3540
				'(',  // *** Capturing group $4, for known a TLD url (ex: google.com)                                              // 3541
					'(//)?',  // *** Capturing group $5 for an optional protocol-relative URL. Must be at the beginning of the string or start with a non-word character (handled later)
					domainNameRegex.source + '\\.',                                                                                   // 3543
					tldRegex.source,                                                                                                  // 3544
				')',                                                                                                               // 3545
			')',                                                                                                                // 3546
                                                                                                                       // 3547
			'(?:' + urlSuffixRegex.source + ')?'  // match for path, query string, and/or hash anchor - optional                // 3548
		].join( "" ), 'gi' );                                                                                                // 3549
	} )(),                                                                                                                // 3550
                                                                                                                       // 3551
                                                                                                                       // 3552
	/**                                                                                                                   // 3553
	 * A regular expression to use to check the character before a protocol-relative                                      // 3554
	 * URL match. We don't want to match a protocol-relative URL if it is part                                            // 3555
	 * of another word.                                                                                                   // 3556
	 *                                                                                                                    // 3557
	 * For example, we want to match something like "Go to: //google.com",                                                // 3558
	 * but we don't want to match something like "abc//google.com"                                                        // 3559
	 *                                                                                                                    // 3560
	 * This regular expression is used to test the character before the '//'.                                             // 3561
	 *                                                                                                                    // 3562
	 * @private                                                                                                           // 3563
	 * @type {RegExp} wordCharRegExp                                                                                      // 3564
	 */                                                                                                                   // 3565
	wordCharRegExp : /\w/,                                                                                                // 3566
                                                                                                                       // 3567
                                                                                                                       // 3568
	/**                                                                                                                   // 3569
	 * The regular expression to match opening parenthesis in a URL match.                                                // 3570
	 *                                                                                                                    // 3571
	 * This is to determine if we have unbalanced parenthesis in the URL, and to                                          // 3572
	 * drop the final parenthesis that was matched if so.                                                                 // 3573
	 *                                                                                                                    // 3574
	 * Ex: The text "(check out: wikipedia.com/something_(disambiguation))"                                               // 3575
	 * should only autolink the inner "wikipedia.com/something_(disambiguation)"                                          // 3576
	 * part, so if we find that we have unbalanced parenthesis, we will drop the                                          // 3577
	 * last one for the match.                                                                                            // 3578
	 *                                                                                                                    // 3579
	 * @private                                                                                                           // 3580
	 * @property {RegExp}                                                                                                 // 3581
	 */                                                                                                                   // 3582
	openParensRe : /\(/g,                                                                                                 // 3583
                                                                                                                       // 3584
	/**                                                                                                                   // 3585
	 * The regular expression to match closing parenthesis in a URL match. See                                            // 3586
	 * {@link #openParensRe} for more information.                                                                        // 3587
	 *                                                                                                                    // 3588
	 * @private                                                                                                           // 3589
	 * @property {RegExp}                                                                                                 // 3590
	 */                                                                                                                   // 3591
	closeParensRe : /\)/g,                                                                                                // 3592
                                                                                                                       // 3593
                                                                                                                       // 3594
	/**                                                                                                                   // 3595
	 * @constructor                                                                                                       // 3596
	 * @param {Object} cfg The configuration properties for the Match instance,                                           // 3597
	 *   specified in an Object (map).                                                                                    // 3598
	 */                                                                                                                   // 3599
	constructor : function( cfg ) {                                                                                       // 3600
		Autolinker.matcher.Matcher.prototype.constructor.call( this, cfg );                                                  // 3601
                                                                                                                       // 3602
		if( cfg.stripPrefix == null ) throw new Error( '`stripPrefix` cfg required' );                                       // 3603
		if( cfg.stripTrailingSlash == null ) throw new Error( '`stripTrailingSlash` cfg required' );                         // 3604
                                                                                                                       // 3605
		this.stripPrefix = cfg.stripPrefix;                                                                                  // 3606
		this.stripTrailingSlash = cfg.stripTrailingSlash;                                                                    // 3607
	},                                                                                                                    // 3608
                                                                                                                       // 3609
                                                                                                                       // 3610
	/**                                                                                                                   // 3611
	 * @inheritdoc                                                                                                        // 3612
	 */                                                                                                                   // 3613
	parseMatches : function( text ) {                                                                                     // 3614
		var matcherRegex = this.matcherRegex,                                                                                // 3615
		    stripPrefix = this.stripPrefix,                                                                                  // 3616
		    stripTrailingSlash = this.stripTrailingSlash,                                                                    // 3617
		    tagBuilder = this.tagBuilder,                                                                                    // 3618
		    matches = [],                                                                                                    // 3619
		    match;                                                                                                           // 3620
                                                                                                                       // 3621
		while( ( match = matcherRegex.exec( text ) ) !== null ) {                                                            // 3622
			var matchStr = match[ 0 ],                                                                                          // 3623
			    schemeUrlMatch = match[ 1 ],                                                                                    // 3624
			    wwwUrlMatch = match[ 2 ],                                                                                       // 3625
			    wwwProtocolRelativeMatch = match[ 3 ],                                                                          // 3626
			    //tldUrlMatch = match[ 4 ],  -- not needed at the moment                                                        // 3627
			    tldProtocolRelativeMatch = match[ 5 ],                                                                          // 3628
			    offset = match.index,                                                                                           // 3629
			    protocolRelativeMatch = wwwProtocolRelativeMatch || tldProtocolRelativeMatch,                                   // 3630
				prevChar = text.charAt( offset - 1 );                                                                              // 3631
                                                                                                                       // 3632
			if( !Autolinker.matcher.UrlMatchValidator.isValid( matchStr, schemeUrlMatch ) ) {                                   // 3633
				continue;                                                                                                          // 3634
			}                                                                                                                   // 3635
                                                                                                                       // 3636
			// If the match is preceded by an '@' character, then it is either                                                  // 3637
			// an email address or a username. Skip these types of matches.                                                     // 3638
			if( offset > 0 && prevChar === '@' ) {                                                                              // 3639
				continue;                                                                                                          // 3640
			}                                                                                                                   // 3641
                                                                                                                       // 3642
			// If it's a protocol-relative '//' match, but the character before the '//'                                        // 3643
			// was a word character (i.e. a letter/number), then we found the '//' in the                                       // 3644
			// middle of another word (such as "asdf//asdf.com"). In this case, skip the                                        // 3645
			// match.                                                                                                           // 3646
			if( offset > 0 && protocolRelativeMatch && this.wordCharRegExp.test( prevChar ) ) {                                 // 3647
				continue;                                                                                                          // 3648
			}                                                                                                                   // 3649
                                                                                                                       // 3650
			// Handle a closing parenthesis at the end of the match, and exclude                                                // 3651
			// it if there is not a matching open parenthesis in the match                                                      // 3652
			// itself.                                                                                                          // 3653
			if( this.matchHasUnbalancedClosingParen( matchStr ) ) {                                                             // 3654
				matchStr = matchStr.substr( 0, matchStr.length - 1 );  // remove the trailing ")"                                  // 3655
			} else {                                                                                                            // 3656
				// Handle an invalid character after the TLD                                                                       // 3657
				var pos = this.matchHasInvalidCharAfterTld( matchStr, schemeUrlMatch );                                            // 3658
				if( pos > -1 ) {                                                                                                   // 3659
					matchStr = matchStr.substr( 0, pos ); // remove the trailing invalid chars                                        // 3660
				}                                                                                                                  // 3661
			}                                                                                                                   // 3662
                                                                                                                       // 3663
			var urlMatchType = schemeUrlMatch ? 'scheme' : ( wwwUrlMatch ? 'www' : 'tld' ),                                     // 3664
			    protocolUrlMatch = !!schemeUrlMatch;                                                                            // 3665
                                                                                                                       // 3666
			matches.push( new Autolinker.match.Url( {                                                                           // 3667
				tagBuilder            : tagBuilder,                                                                                // 3668
				matchedText           : matchStr,                                                                                  // 3669
				offset                : offset,                                                                                    // 3670
				urlMatchType          : urlMatchType,                                                                              // 3671
				url                   : matchStr,                                                                                  // 3672
				protocolUrlMatch      : protocolUrlMatch,                                                                          // 3673
				protocolRelativeMatch : !!protocolRelativeMatch,                                                                   // 3674
				stripPrefix           : stripPrefix,                                                                               // 3675
				stripTrailingSlash    : stripTrailingSlash                                                                         // 3676
			} ) );                                                                                                              // 3677
		}                                                                                                                    // 3678
                                                                                                                       // 3679
		return matches;                                                                                                      // 3680
	},                                                                                                                    // 3681
                                                                                                                       // 3682
                                                                                                                       // 3683
	/**                                                                                                                   // 3684
	 * Determines if a match found has an unmatched closing parenthesis. If so,                                           // 3685
	 * this parenthesis will be removed from the match itself, and appended                                               // 3686
	 * after the generated anchor tag.                                                                                    // 3687
	 *                                                                                                                    // 3688
	 * A match may have an extra closing parenthesis at the end of the match                                              // 3689
	 * because the regular expression must include parenthesis for URLs such as                                           // 3690
	 * "wikipedia.com/something_(disambiguation)", which should be auto-linked.                                           // 3691
	 *                                                                                                                    // 3692
	 * However, an extra parenthesis *will* be included when the URL itself is                                            // 3693
	 * wrapped in parenthesis, such as in the case of "(wikipedia.com/something_(disambiguation))".                       // 3694
	 * In this case, the last closing parenthesis should *not* be part of the                                             // 3695
	 * URL itself, and this method will return `true`.                                                                    // 3696
	 *                                                                                                                    // 3697
	 * @private                                                                                                           // 3698
	 * @param {String} matchStr The full match string from the {@link #matcherRegex}.                                     // 3699
	 * @return {Boolean} `true` if there is an unbalanced closing parenthesis at                                          // 3700
	 *   the end of the `matchStr`, `false` otherwise.                                                                    // 3701
	 */                                                                                                                   // 3702
	matchHasUnbalancedClosingParen : function( matchStr ) {                                                               // 3703
		var lastChar = matchStr.charAt( matchStr.length - 1 );                                                               // 3704
                                                                                                                       // 3705
		if( lastChar === ')' ) {                                                                                             // 3706
			var openParensMatch = matchStr.match( this.openParensRe ),                                                          // 3707
			    closeParensMatch = matchStr.match( this.closeParensRe ),                                                        // 3708
			    numOpenParens = ( openParensMatch && openParensMatch.length ) || 0,                                             // 3709
			    numCloseParens = ( closeParensMatch && closeParensMatch.length ) || 0;                                          // 3710
                                                                                                                       // 3711
			if( numOpenParens < numCloseParens ) {                                                                              // 3712
				return true;                                                                                                       // 3713
			}                                                                                                                   // 3714
		}                                                                                                                    // 3715
                                                                                                                       // 3716
		return false;                                                                                                        // 3717
	},                                                                                                                    // 3718
                                                                                                                       // 3719
                                                                                                                       // 3720
	/**                                                                                                                   // 3721
	 * Determine if there's an invalid character after the TLD in a URL. Valid                                            // 3722
	 * characters after TLD are ':/?#'. Exclude scheme matched URLs from this                                             // 3723
	 * check.                                                                                                             // 3724
	 *                                                                                                                    // 3725
	 * @private                                                                                                           // 3726
	 * @param {String} urlMatch The matched URL, if there was one. Will be an                                             // 3727
	 *   empty string if the match is not a URL match.                                                                    // 3728
	 * @param {String} schemeUrlMatch The match URL string for a scheme                                                   // 3729
	 *   match. Ex: 'http://yahoo.com'. This is used to match something like                                              // 3730
	 *   'http://localhost', where we won't double check that the domain name                                             // 3731
	 *   has at least one '.' in it.                                                                                      // 3732
	 * @return {Number} the position where the invalid character was found. If                                            // 3733
	 *   no such character was found, returns -1                                                                          // 3734
	 */                                                                                                                   // 3735
	matchHasInvalidCharAfterTld : function( urlMatch, schemeUrlMatch ) {                                                  // 3736
		if( !urlMatch ) {                                                                                                    // 3737
			return -1;                                                                                                          // 3738
		}                                                                                                                    // 3739
                                                                                                                       // 3740
		var offset = 0;                                                                                                      // 3741
		if ( schemeUrlMatch ) {                                                                                              // 3742
			offset = urlMatch.indexOf(':');                                                                                     // 3743
			urlMatch = urlMatch.slice(offset);                                                                                  // 3744
		}                                                                                                                    // 3745
                                                                                                                       // 3746
		var re = /^((.?\/\/)?[A-Za-z0-9\u00C0-\u017F\.\-]*[A-Za-z0-9\u00C0-\u017F\-]\.[A-Za-z]+)/;                           // 3747
		var res = re.exec( urlMatch );                                                                                       // 3748
		if ( res === null ) {                                                                                                // 3749
			return -1;                                                                                                          // 3750
		}                                                                                                                    // 3751
                                                                                                                       // 3752
		offset += res[1].length;                                                                                             // 3753
		urlMatch = urlMatch.slice(res[1].length);                                                                            // 3754
		if (/^[^.A-Za-z0-9:\/?#]/.test(urlMatch)) {                                                                          // 3755
			return offset;                                                                                                      // 3756
		}                                                                                                                    // 3757
                                                                                                                       // 3758
		return -1;                                                                                                           // 3759
	}                                                                                                                     // 3760
                                                                                                                       // 3761
} );                                                                                                                   // 3762
                                                                                                                       // 3763
/*global Autolinker */                                                                                                 // 3764
/*jshint scripturl:true */                                                                                             // 3765
/**                                                                                                                    // 3766
 * @private                                                                                                            // 3767
 * @class Autolinker.matcher.UrlMatchValidator                                                                         // 3768
 * @singleton                                                                                                          // 3769
 *                                                                                                                     // 3770
 * Used by Autolinker to filter out false URL positives from the                                                       // 3771
 * {@link Autolinker.matcher.Url UrlMatcher}.                                                                          // 3772
 *                                                                                                                     // 3773
 * Due to the limitations of regular expressions (including the missing feature                                        // 3774
 * of look-behinds in JS regular expressions), we cannot always determine the                                          // 3775
 * validity of a given match. This class applies a bit of additional logic to                                          // 3776
 * filter out any false positives that have been matched by the                                                        // 3777
 * {@link Autolinker.matcher.Url UrlMatcher}.                                                                          // 3778
 */                                                                                                                    // 3779
Autolinker.matcher.UrlMatchValidator = {                                                                               // 3780
                                                                                                                       // 3781
	/**                                                                                                                   // 3782
	 * Regex to test for a full protocol, with the two trailing slashes. Ex: 'http://'                                    // 3783
	 *                                                                                                                    // 3784
	 * @private                                                                                                           // 3785
	 * @property {RegExp} hasFullProtocolRegex                                                                            // 3786
	 */                                                                                                                   // 3787
	hasFullProtocolRegex : /^[A-Za-z][-.+A-Za-z0-9]*:\/\//,                                                               // 3788
                                                                                                                       // 3789
	/**                                                                                                                   // 3790
	 * Regex to find the URI scheme, such as 'mailto:'.                                                                   // 3791
	 *                                                                                                                    // 3792
	 * This is used to filter out 'javascript:' and 'vbscript:' schemes.                                                  // 3793
	 *                                                                                                                    // 3794
	 * @private                                                                                                           // 3795
	 * @property {RegExp} uriSchemeRegex                                                                                  // 3796
	 */                                                                                                                   // 3797
	uriSchemeRegex : /^[A-Za-z][-.+A-Za-z0-9]*:/,                                                                         // 3798
                                                                                                                       // 3799
	/**                                                                                                                   // 3800
	 * Regex to determine if at least one word char exists after the protocol (i.e. after the ':')                        // 3801
	 *                                                                                                                    // 3802
	 * @private                                                                                                           // 3803
	 * @property {RegExp} hasWordCharAfterProtocolRegex                                                                   // 3804
	 */                                                                                                                   // 3805
	hasWordCharAfterProtocolRegex : /:[^\s]*?[A-Za-z\u00C0-\u017F]/,                                                      // 3806
                                                                                                                       // 3807
	/**                                                                                                                   // 3808
	 * Regex to determine if the string is a valid IP address                                                             // 3809
	 *                                                                                                                    // 3810
	 * @private                                                                                                           // 3811
	 * @property {RegExp} ipRegex                                                                                         // 3812
	 */                                                                                                                   // 3813
	ipRegex: /[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?(:[0-9]*)?\/?$/,                  // 3814
                                                                                                                       // 3815
	/**                                                                                                                   // 3816
	 * Determines if a given URL match found by the {@link Autolinker.matcher.Url UrlMatcher}                             // 3817
	 * is valid. Will return `false` for:                                                                                 // 3818
	 *                                                                                                                    // 3819
	 * 1) URL matches which do not have at least have one period ('.') in the                                             // 3820
	 *    domain name (effectively skipping over matches like "abc:def").                                                 // 3821
	 *    However, URL matches with a protocol will be allowed (ex: 'http://localhost')                                   // 3822
	 * 2) URL matches which do not have at least one word character in the                                                // 3823
	 *    domain name (effectively skipping over matches like "git:1.0").                                                 // 3824
	 * 3) A protocol-relative url match (a URL beginning with '//') whose                                                 // 3825
	 *    previous character is a word character (effectively skipping over                                               // 3826
	 *    strings like "abc//google.com")                                                                                 // 3827
	 *                                                                                                                    // 3828
	 * Otherwise, returns `true`.                                                                                         // 3829
	 *                                                                                                                    // 3830
	 * @param {String} urlMatch The matched URL, if there was one. Will be an                                             // 3831
	 *   empty string if the match is not a URL match.                                                                    // 3832
	 * @param {String} protocolUrlMatch The match URL string for a protocol                                               // 3833
	 *   match. Ex: 'http://yahoo.com'. This is used to match something like                                              // 3834
	 *   'http://localhost', where we won't double check that the domain name                                             // 3835
	 *   has at least one '.' in it.                                                                                      // 3836
	 * @return {Boolean} `true` if the match given is valid and should be                                                 // 3837
	 *   processed, or `false` if the match is invalid and/or should just not be                                          // 3838
	 *   processed.                                                                                                       // 3839
	 */                                                                                                                   // 3840
	isValid : function( urlMatch, protocolUrlMatch ) {                                                                    // 3841
		if(                                                                                                                  // 3842
			( protocolUrlMatch && !this.isValidUriScheme( protocolUrlMatch ) ) ||                                               // 3843
			this.urlMatchDoesNotHaveProtocolOrDot( urlMatch, protocolUrlMatch ) ||    // At least one period ('.') must exist in the URL match for us to consider it an actual URL, *unless* it was a full protocol match (like 'http://localhost')
			(this.urlMatchDoesNotHaveAtLeastOneWordChar( urlMatch, protocolUrlMatch ) && // At least one letter character must exist in the domain name after a protocol match. Ex: skip over something like "git:1.0"
			   !this.isValidIpAddress( urlMatch )) || // Except if it's an IP address                                           // 3846
			this.containsMultipleDots( urlMatch )                                                                               // 3847
		) {                                                                                                                  // 3848
			return false;                                                                                                       // 3849
		}                                                                                                                    // 3850
                                                                                                                       // 3851
		return true;                                                                                                         // 3852
	},                                                                                                                    // 3853
                                                                                                                       // 3854
                                                                                                                       // 3855
	isValidIpAddress : function ( uriSchemeMatch ) {                                                                      // 3856
		var newRegex = new RegExp(this.hasFullProtocolRegex.source + this.ipRegex.source);                                   // 3857
		var uriScheme = uriSchemeMatch.match( newRegex );                                                                    // 3858
                                                                                                                       // 3859
		return uriScheme !== null;                                                                                           // 3860
	},                                                                                                                    // 3861
                                                                                                                       // 3862
	containsMultipleDots : function ( urlMatch ) {                                                                        // 3863
		return urlMatch.indexOf("..") > -1;                                                                                  // 3864
	},                                                                                                                    // 3865
                                                                                                                       // 3866
	/**                                                                                                                   // 3867
	 * Determines if the URI scheme is a valid scheme to be autolinked. Returns                                           // 3868
	 * `false` if the scheme is 'javascript:' or 'vbscript:'                                                              // 3869
	 *                                                                                                                    // 3870
	 * @private                                                                                                           // 3871
	 * @param {String} uriSchemeMatch The match URL string for a full URI scheme                                          // 3872
	 *   match. Ex: 'http://yahoo.com' or 'mailto:a@a.com'.                                                               // 3873
	 * @return {Boolean} `true` if the scheme is a valid one, `false` otherwise.                                          // 3874
	 */                                                                                                                   // 3875
	isValidUriScheme : function( uriSchemeMatch ) {                                                                       // 3876
		var uriScheme = uriSchemeMatch.match( this.uriSchemeRegex )[ 0 ].toLowerCase();                                      // 3877
                                                                                                                       // 3878
		return ( uriScheme !== 'javascript:' && uriScheme !== 'vbscript:' );                                                 // 3879
	},                                                                                                                    // 3880
                                                                                                                       // 3881
                                                                                                                       // 3882
	/**                                                                                                                   // 3883
	 * Determines if a URL match does not have either:                                                                    // 3884
	 *                                                                                                                    // 3885
	 * a) a full protocol (i.e. 'http://'), or                                                                            // 3886
	 * b) at least one dot ('.') in the domain name (for a non-full-protocol                                              // 3887
	 *    match).                                                                                                         // 3888
	 *                                                                                                                    // 3889
	 * Either situation is considered an invalid URL (ex: 'git:d' does not have                                           // 3890
	 * either the '://' part, or at least one dot in the domain name. If the                                              // 3891
	 * match was 'git:abc.com', we would consider this valid.)                                                            // 3892
	 *                                                                                                                    // 3893
	 * @private                                                                                                           // 3894
	 * @param {String} urlMatch The matched URL, if there was one. Will be an                                             // 3895
	 *   empty string if the match is not a URL match.                                                                    // 3896
	 * @param {String} protocolUrlMatch The match URL string for a protocol                                               // 3897
	 *   match. Ex: 'http://yahoo.com'. This is used to match something like                                              // 3898
	 *   'http://localhost', where we won't double check that the domain name                                             // 3899
	 *   has at least one '.' in it.                                                                                      // 3900
	 * @return {Boolean} `true` if the URL match does not have a full protocol,                                           // 3901
	 *   or at least one dot ('.') in a non-full-protocol match.                                                          // 3902
	 */                                                                                                                   // 3903
	urlMatchDoesNotHaveProtocolOrDot : function( urlMatch, protocolUrlMatch ) {                                           // 3904
		return ( !!urlMatch && ( !protocolUrlMatch || !this.hasFullProtocolRegex.test( protocolUrlMatch ) ) && urlMatch.indexOf( '.' ) === -1 );
	},                                                                                                                    // 3906
                                                                                                                       // 3907
                                                                                                                       // 3908
	/**                                                                                                                   // 3909
	 * Determines if a URL match does not have at least one word character after                                          // 3910
	 * the protocol (i.e. in the domain name).                                                                            // 3911
	 *                                                                                                                    // 3912
	 * At least one letter character must exist in the domain name after a                                                // 3913
	 * protocol match. Ex: skip over something like "git:1.0"                                                             // 3914
	 *                                                                                                                    // 3915
	 * @private                                                                                                           // 3916
	 * @param {String} urlMatch The matched URL, if there was one. Will be an                                             // 3917
	 *   empty string if the match is not a URL match.                                                                    // 3918
	 * @param {String} protocolUrlMatch The match URL string for a protocol                                               // 3919
	 *   match. Ex: 'http://yahoo.com'. This is used to know whether or not we                                            // 3920
	 *   have a protocol in the URL string, in order to check for a word                                                  // 3921
	 *   character after the protocol separator (':').                                                                    // 3922
	 * @return {Boolean} `true` if the URL match does not have at least one word                                          // 3923
	 *   character in it after the protocol, `false` otherwise.                                                           // 3924
	 */                                                                                                                   // 3925
	urlMatchDoesNotHaveAtLeastOneWordChar : function( urlMatch, protocolUrlMatch ) {                                      // 3926
		if( urlMatch && protocolUrlMatch ) {                                                                                 // 3927
			return !this.hasWordCharAfterProtocolRegex.test( urlMatch );                                                        // 3928
		} else {                                                                                                             // 3929
			return false;                                                                                                       // 3930
		}                                                                                                                    // 3931
	}                                                                                                                     // 3932
                                                                                                                       // 3933
};                                                                                                                     // 3934
                                                                                                                       // 3935
/*global Autolinker */                                                                                                 // 3936
/**                                                                                                                    // 3937
 * A truncation feature where the ellipsis will be placed at the end of the URL.                                       // 3938
 *                                                                                                                     // 3939
 * @param {String} anchorText                                                                                          // 3940
 * @param {Number} truncateLen The maximum length of the truncated output URL string.                                  // 3941
 * @param {String} ellipsisChars The characters to place within the url, e.g. "..".                                    // 3942
 * @return {String} The truncated URL.                                                                                 // 3943
 */                                                                                                                    // 3944
Autolinker.truncate.TruncateEnd = function(anchorText, truncateLen, ellipsisChars){                                    // 3945
	return Autolinker.Util.ellipsis( anchorText, truncateLen, ellipsisChars );                                            // 3946
};                                                                                                                     // 3947
                                                                                                                       // 3948
/*global Autolinker */                                                                                                 // 3949
/**                                                                                                                    // 3950
 * Date: 2015-10-05                                                                                                    // 3951
 * Author: Kasper Søfren <soefritz@gmail.com> (https://github.com/kafoso)                                              // 3952
 *                                                                                                                     // 3953
 * A truncation feature, where the ellipsis will be placed in the dead-center of the URL.                              // 3954
 *                                                                                                                     // 3955
 * @param {String} url             A URL.                                                                              // 3956
 * @param {Number} truncateLen     The maximum length of the truncated output URL string.                              // 3957
 * @param {String} ellipsisChars   The characters to place within the url, e.g. "..".                                  // 3958
 * @return {String} The truncated URL.                                                                                 // 3959
 */                                                                                                                    // 3960
Autolinker.truncate.TruncateMiddle = function(url, truncateLen, ellipsisChars){                                        // 3961
  if (url.length <= truncateLen) {                                                                                     // 3962
    return url;                                                                                                        // 3963
  }                                                                                                                    // 3964
                                                                                                                       // 3965
  var ellipsisLengthBeforeParsing;                                                                                     // 3966
  var ellipsisLength;                                                                                                  // 3967
                                                                                                                       // 3968
  if(ellipsisChars == null) {                                                                                          // 3969
    ellipsisChars = '&hellip;';                                                                                        // 3970
    ellipsisLengthBeforeParsing = 8;                                                                                   // 3971
    ellipsisLength = 3;                                                                                                // 3972
  } else {                                                                                                             // 3973
    ellipsisLengthBeforeParsing = ellipsisChars.length;                                                                // 3974
    ellipsisLength = ellipsisChars.length;                                                                             // 3975
  }                                                                                                                    // 3976
                                                                                                                       // 3977
  var availableLength = truncateLen - ellipsisLength;                                                                  // 3978
  var end = "";                                                                                                        // 3979
  if (availableLength > 0) {                                                                                           // 3980
    end = url.substr((-1)*Math.floor(availableLength/2));                                                              // 3981
  }                                                                                                                    // 3982
  return (url.substr(0, Math.ceil(availableLength/2)) + ellipsisChars + end).substr(0, availableLength + ellipsisLengthBeforeParsing);
};                                                                                                                     // 3984
                                                                                                                       // 3985
/*global Autolinker */                                                                                                 // 3986
/**                                                                                                                    // 3987
 * Date: 2015-10-05                                                                                                    // 3988
 * Author: Kasper Søfren <soefritz@gmail.com> (https://github.com/kafoso)                                              // 3989
 *                                                                                                                     // 3990
 * A truncation feature, where the ellipsis will be placed at a section within                                         // 3991
 * the URL making it still somewhat human readable.                                                                    // 3992
 *                                                                                                                     // 3993
 * @param {String} url						 A URL.                                                                                    // 3994
 * @param {Number} truncateLen		 The maximum length of the truncated output URL string.                                // 3995
 * @param {String} ellipsisChars	 The characters to place within the url, e.g. "...".                                  // 3996
 * @return {String} The truncated URL.                                                                                 // 3997
 */                                                                                                                    // 3998
Autolinker.truncate.TruncateSmart = function(url, truncateLen, ellipsisChars){                                         // 3999
                                                                                                                       // 4000
	var ellipsisLengthBeforeParsing;                                                                                      // 4001
	var ellipsisLength;                                                                                                   // 4002
                                                                                                                       // 4003
	if(ellipsisChars == null) {                                                                                           // 4004
		ellipsisChars = '&hellip;';                                                                                          // 4005
		ellipsisLength = 3;                                                                                                  // 4006
		ellipsisLengthBeforeParsing = 8;                                                                                     // 4007
	} else {                                                                                                              // 4008
		ellipsisLength = ellipsisChars.length;                                                                               // 4009
		ellipsisLengthBeforeParsing = ellipsisChars.length;                                                                  // 4010
	}                                                                                                                     // 4011
                                                                                                                       // 4012
	var parse_url = function(url){ // Functionality inspired by PHP function of same name                                 // 4013
		var urlObj = {};                                                                                                     // 4014
		var urlSub = url;                                                                                                    // 4015
		var match = urlSub.match(/^([a-z]+):\/\//i);                                                                         // 4016
		if (match) {                                                                                                         // 4017
			urlObj.scheme = match[1];                                                                                           // 4018
			urlSub = urlSub.substr(match[0].length);                                                                            // 4019
		}                                                                                                                    // 4020
		match = urlSub.match(/^(.*?)(?=(\?|#|\/|$))/i);                                                                      // 4021
		if (match) {                                                                                                         // 4022
			urlObj.host = match[1];                                                                                             // 4023
			urlSub = urlSub.substr(match[0].length);                                                                            // 4024
		}                                                                                                                    // 4025
		match = urlSub.match(/^\/(.*?)(?=(\?|#|$))/i);                                                                       // 4026
		if (match) {                                                                                                         // 4027
			urlObj.path = match[1];                                                                                             // 4028
			urlSub = urlSub.substr(match[0].length);                                                                            // 4029
		}                                                                                                                    // 4030
		match = urlSub.match(/^\?(.*?)(?=(#|$))/i);                                                                          // 4031
		if (match) {                                                                                                         // 4032
			urlObj.query = match[1];                                                                                            // 4033
			urlSub = urlSub.substr(match[0].length);                                                                            // 4034
		}                                                                                                                    // 4035
		match = urlSub.match(/^#(.*?)$/i);                                                                                   // 4036
		if (match) {                                                                                                         // 4037
			urlObj.fragment = match[1];                                                                                         // 4038
			//urlSub = urlSub.substr(match[0].length);  -- not used. Uncomment if adding another block.                         // 4039
		}                                                                                                                    // 4040
		return urlObj;                                                                                                       // 4041
	};                                                                                                                    // 4042
                                                                                                                       // 4043
	var buildUrl = function(urlObj){                                                                                      // 4044
		var url = "";                                                                                                        // 4045
		if (urlObj.scheme && urlObj.host) {                                                                                  // 4046
			url += urlObj.scheme + "://";                                                                                       // 4047
		}                                                                                                                    // 4048
		if (urlObj.host) {                                                                                                   // 4049
			url += urlObj.host;                                                                                                 // 4050
		}                                                                                                                    // 4051
		if (urlObj.path) {                                                                                                   // 4052
			url += "/" + urlObj.path;                                                                                           // 4053
		}                                                                                                                    // 4054
		if (urlObj.query) {                                                                                                  // 4055
			url += "?" + urlObj.query;                                                                                          // 4056
		}                                                                                                                    // 4057
		if (urlObj.fragment) {                                                                                               // 4058
			url += "#" + urlObj.fragment;                                                                                       // 4059
		}                                                                                                                    // 4060
		return url;                                                                                                          // 4061
	};                                                                                                                    // 4062
                                                                                                                       // 4063
	var buildSegment = function(segment, remainingAvailableLength){                                                       // 4064
		var remainingAvailableLengthHalf = remainingAvailableLength/ 2,                                                      // 4065
				startOffset = Math.ceil(remainingAvailableLengthHalf),                                                             // 4066
				endOffset = (-1)*Math.floor(remainingAvailableLengthHalf),                                                         // 4067
				end = "";                                                                                                          // 4068
		if (endOffset < 0) {                                                                                                 // 4069
			end = segment.substr(endOffset);                                                                                    // 4070
		}                                                                                                                    // 4071
		return segment.substr(0, startOffset) + ellipsisChars + end;                                                         // 4072
	};                                                                                                                    // 4073
	if (url.length <= truncateLen) {                                                                                      // 4074
		return url;                                                                                                          // 4075
	}                                                                                                                     // 4076
	var availableLength = truncateLen - ellipsisLength;                                                                   // 4077
	var urlObj = parse_url(url);                                                                                          // 4078
	// Clean up the URL                                                                                                   // 4079
	if (urlObj.query) {                                                                                                   // 4080
		var matchQuery = urlObj.query.match(/^(.*?)(?=(\?|\#))(.*?)$/i);                                                     // 4081
		if (matchQuery) {                                                                                                    // 4082
			// Malformed URL; two or more "?". Removed any content behind the 2nd.                                              // 4083
			urlObj.query = urlObj.query.substr(0, matchQuery[1].length);                                                        // 4084
			url = buildUrl(urlObj);                                                                                             // 4085
		}                                                                                                                    // 4086
	}                                                                                                                     // 4087
	if (url.length <= truncateLen) {                                                                                      // 4088
		return url;                                                                                                          // 4089
	}                                                                                                                     // 4090
	if (urlObj.host) {                                                                                                    // 4091
		urlObj.host = urlObj.host.replace(/^www\./, "");                                                                     // 4092
		url = buildUrl(urlObj);                                                                                              // 4093
	}                                                                                                                     // 4094
	if (url.length <= truncateLen) {                                                                                      // 4095
		return url;                                                                                                          // 4096
	}                                                                                                                     // 4097
	// Process and build the URL                                                                                          // 4098
	var str = "";                                                                                                         // 4099
	if (urlObj.host) {                                                                                                    // 4100
		str += urlObj.host;                                                                                                  // 4101
	}                                                                                                                     // 4102
	if (str.length >= availableLength) {                                                                                  // 4103
		if (urlObj.host.length == truncateLen) {                                                                             // 4104
			return (urlObj.host.substr(0, (truncateLen - ellipsisLength)) + ellipsisChars).substr(0, availableLength + ellipsisLengthBeforeParsing);
		}                                                                                                                    // 4106
		return buildSegment(str, availableLength).substr(0, availableLength + ellipsisLengthBeforeParsing);                  // 4107
	}                                                                                                                     // 4108
	var pathAndQuery = "";                                                                                                // 4109
	if (urlObj.path) {                                                                                                    // 4110
		pathAndQuery += "/" + urlObj.path;                                                                                   // 4111
	}                                                                                                                     // 4112
	if (urlObj.query) {                                                                                                   // 4113
		pathAndQuery += "?" + urlObj.query;                                                                                  // 4114
	}                                                                                                                     // 4115
	if (pathAndQuery) {                                                                                                   // 4116
		if ((str+pathAndQuery).length >= availableLength) {                                                                  // 4117
			if ((str+pathAndQuery).length == truncateLen) {                                                                     // 4118
				return (str + pathAndQuery).substr(0, truncateLen);                                                                // 4119
			}                                                                                                                   // 4120
			var remainingAvailableLength = availableLength - str.length;                                                        // 4121
			return (str + buildSegment(pathAndQuery, remainingAvailableLength)).substr(0, availableLength + ellipsisLengthBeforeParsing);
		} else {                                                                                                             // 4123
			str += pathAndQuery;                                                                                                // 4124
		}                                                                                                                    // 4125
	}                                                                                                                     // 4126
	if (urlObj.fragment) {                                                                                                // 4127
		var fragment = "#"+urlObj.fragment;                                                                                  // 4128
		if ((str+fragment).length >= availableLength) {                                                                      // 4129
			if ((str+fragment).length == truncateLen) {                                                                         // 4130
				return (str + fragment).substr(0, truncateLen);                                                                    // 4131
			}                                                                                                                   // 4132
			var remainingAvailableLength2 = availableLength - str.length;                                                       // 4133
			return (str + buildSegment(fragment, remainingAvailableLength2)).substr(0, availableLength + ellipsisLengthBeforeParsing);
		} else {                                                                                                             // 4135
			str += fragment;                                                                                                    // 4136
		}                                                                                                                    // 4137
	}                                                                                                                     // 4138
	if (urlObj.scheme && urlObj.host) {                                                                                   // 4139
		var scheme = urlObj.scheme + "://";                                                                                  // 4140
		if ((str+scheme).length < availableLength) {                                                                         // 4141
			return (scheme + str).substr(0, truncateLen);                                                                       // 4142
		}                                                                                                                    // 4143
	}                                                                                                                     // 4144
	if (str.length <= truncateLen) {                                                                                      // 4145
		return str;                                                                                                          // 4146
	}                                                                                                                     // 4147
	var end = "";                                                                                                         // 4148
	if (availableLength > 0) {                                                                                            // 4149
		end = str.substr((-1)*Math.floor(availableLength/2));                                                                // 4150
	}                                                                                                                     // 4151
	return (str.substr(0, Math.ceil(availableLength/2)) + ellipsisChars + end).substr(0, availableLength + ellipsisLengthBeforeParsing);
};                                                                                                                     // 4153
                                                                                                                       // 4154
return Autolinker;                                                                                                     // 4155
}));                                                                                                                   // 4156
                                                                                                                       // 4157
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:autolinker/client.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:autolinker'] = {};

})();
