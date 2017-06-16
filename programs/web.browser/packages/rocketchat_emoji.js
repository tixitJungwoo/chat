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
var Template = Package['templating-runtime'].Template;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var renderMessageBody = Package['rocketchat:ui-message'].renderMessageBody;
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

/* Package-scope variables */
var isSet, isSetNotNull, renderEmoji;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:emoji":{"function-isSet.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_emoji/function-isSet.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals isSet:true, isSetNotNull:true */ //http://stackoverflow.com/a/26990347 function isSet() from Gajus          // 1
isSet = function (fn) {                                                                                                // 3
	var value = void 0;                                                                                                   // 4
                                                                                                                       //
	try {                                                                                                                 // 5
		value = fn();                                                                                                        // 6
	} catch (e) {                                                                                                         // 7
		value = undefined;                                                                                                   // 8
	} finally {                                                                                                           // 9
		return value !== undefined;                                                                                          // 10
	}                                                                                                                     // 11
};                                                                                                                     // 12
                                                                                                                       //
isSetNotNull = function (fn) {                                                                                         // 14
	var value = void 0;                                                                                                   // 15
                                                                                                                       //
	try {                                                                                                                 // 16
		value = fn();                                                                                                        // 17
	} catch (e) {                                                                                                         // 18
		value = null;                                                                                                        // 19
	} finally {                                                                                                           // 20
		return value !== null && value !== undefined;                                                                        // 21
	}                                                                                                                     // 22
}; /* exported isSet, isSetNotNull */                                                                                  // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"rocketchat.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_emoji/rocketchat.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
RocketChat.emoji = {                                                                                                   // 1
	packages: {                                                                                                           // 2
		base: {                                                                                                              // 3
			emojiCategories: {                                                                                                  // 4
				recent: TAPi18n.__('Frequently_Used')                                                                              // 4
			},                                                                                                                  // 4
			emojisByCategory: {                                                                                                 // 5
				recent: []                                                                                                         // 6
			},                                                                                                                  // 5
			toneList: {},                                                                                                       // 8
			render: function (html) {                                                                                           // 9
				return html;                                                                                                       // 10
			}                                                                                                                   // 11
		}                                                                                                                    // 3
	},                                                                                                                    // 2
	list: {}                                                                                                              // 14
};                                                                                                                     // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"emojiParser.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_emoji/emojiParser.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals isSetNotNull */ /*                                                                                          // 1
                            * emojiParser is a function that will replace emojis                                       //
                            * @param {Object} message - The message object                                             //
                            */RocketChat.callbacks.add('renderMessage', function (message) {                           //
	if (isSetNotNull(function () {                                                                                        // 7
		return Meteor.user().settings.preferences.useEmojis;                                                                 // 7
	}) && !Meteor.user().settings.preferences.useEmojis) {                                                                // 7
		return message;                                                                                                      // 8
	}                                                                                                                     // 9
                                                                                                                       //
	if (_.trim(message.html)) {                                                                                           // 11
		//&#39; to apostrophe (') for emojis such as :')                                                                     // 12
		message.html = message.html.replace(/&#39;/g, '\'');                                                                 // 13
		Object.keys(RocketChat.emoji.packages).forEach(function (emojiPackage) {                                             // 15
			message.html = RocketChat.emoji.packages[emojiPackage].render(message.html);                                        // 16
		});                                                                                                                  // 17
		var checkEmojiOnly = $("<div>" + message.html + "</div>");                                                           // 19
		var emojiOnly = true;                                                                                                // 20
                                                                                                                       //
		for (var childNode in meteorBabelHelpers.sanitizeForInObject(checkEmojiOnly[0].childNodes)) {                        // 21
			if (checkEmojiOnly[0].childNodes.hasOwnProperty(childNode)) {                                                       // 22
				var child = $(checkEmojiOnly[0].childNodes[childNode]);                                                            // 23
                                                                                                                       //
				if (child.hasClass('emoji') || child.hasClass('emojione')) {                                                       // 25
					checkEmojiOnly[0].childNodes[childNode] = child.addClass('big');                                                  // 26
					continue;                                                                                                         // 27
				}                                                                                                                  // 28
                                                                                                                       //
				if (_.trim(child.text()) === '') {                                                                                 // 30
					continue;                                                                                                         // 31
				}                                                                                                                  // 32
                                                                                                                       //
				emojiOnly = false;                                                                                                 // 34
				break;                                                                                                             // 35
			}                                                                                                                   // 36
		}                                                                                                                    // 37
                                                                                                                       //
		if (emojiOnly) {                                                                                                     // 39
			message.html = checkEmojiOnly.unwrap().html();                                                                      // 40
		} //apostrophe (') back to &#39;                                                                                     // 41
                                                                                                                       //
                                                                                                                       //
		message.html = message.html.replace(/\'/g, '&#39;');                                                                 // 44
	}                                                                                                                     // 45
                                                                                                                       //
	return message;                                                                                                       // 47
}, RocketChat.callbacks.priority.LOW, 'emoji');                                                                        // 48
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.emojiPicker.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_emoji/template.emojiPicker.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("emojiPicker");                                                                                   // 2
Template["emojiPicker"] = new Template("Template.emojiPicker", (function() {                                           // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "emoji-picker secondary-background-color"                                                                   // 6
  }, "\n\t\t", HTML.DIV({                                                                                              // 7
    class: "emoji-top"                                                                                                 // 8
  }, "\n\t\t\t", HTML.Raw('<form class="emoji-filter input-line search search-form">\n\t\t\t\t<input type="text" class="search content-background-color" autocomplete="off">\n\t\t\t\t<i class="icon-search secondary-font-color"></i>\n\t\t\t</form>'), "\n\t\t\t", HTML.DIV({
    class: "change-tone"                                                                                               // 10
  }, "\n\t\t\t\t", HTML.A({                                                                                            // 11
    href: "#change-tone"                                                                                               // 12
  }, HTML.SPAN({                                                                                                       // 13
    class: function() {                                                                                                // 14
      return [ "current-tone ", Spacebars.mustache(view.lookup("currentTone")) ];                                      // 15
    }                                                                                                                  // 16
  })), "\n\t\t\t\t", HTML.Raw('<ul class="tone-selector secondary-background-color">\n\t\t\t\t\t<li><a href="#tone" class="tone" data-tone="0"><span class="tone-0"></span></a></li>\n\t\t\t\t\t<li><a href="#tone" class="tone" data-tone="1"><span class="tone-1"></span></a></li>\n\t\t\t\t\t<li><a href="#tone" class="tone" data-tone="2"><span class="tone-2"></span></a></li>\n\t\t\t\t\t<li><a href="#tone" class="tone" data-tone="3"><span class="tone-3"></span></a></li>\n\t\t\t\t\t<li><a href="#tone" class="tone" data-tone="4"><span class="tone-4"></span></a></li>\n\t\t\t\t\t<li><a href="#tone" class="tone" data-tone="5"><span class="tone-5"></span></a></li>\n\t\t\t\t</ul>'), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.DIV({
    class: "filter"                                                                                                    // 18
  }, "\n\t\t\t", HTML.UL({                                                                                             // 19
    class: "filter-list"                                                                                               // 20
  }, "\n\t\t\t\t", Blaze.Each(function() {                                                                             // 21
    return Spacebars.call(view.lookup("category"));                                                                    // 22
  }, function() {                                                                                                      // 23
    return [ "\n\t\t\t\t\t", HTML.LI({                                                                                 // 24
      class: function() {                                                                                              // 25
        return [ "filter-item border-secondary-background-color ", Spacebars.mustache(view.lookup("activeCategory"), view.lookup(".")) ];
      },                                                                                                               // 27
      title: function() {                                                                                              // 28
        return Spacebars.mustache(view.lookup("categoryName"), view.lookup("."));                                      // 29
      }                                                                                                                // 30
    }, "\n\t\t\t\t\t\t", HTML.A({                                                                                      // 31
      href: function() {                                                                                               // 32
        return [ "#", Spacebars.mustache(view.lookup(".")) ];                                                          // 33
      },                                                                                                               // 34
      class: "category-link color-info-font-color"                                                                     // 35
    }, HTML.I({                                                                                                        // 36
      class: function() {                                                                                              // 37
        return [ "category-icon icon-", Spacebars.mustache(view.lookup(".")) ];                                        // 38
      }                                                                                                                // 39
    })), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                              // 40
  }), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                     // 41
    class: "emojis"                                                                                                    // 42
  }, "\n\t\t\t", Blaze.Each(function() {                                                                               // 43
    return Spacebars.call(view.lookup("category"));                                                                    // 44
  }, function() {                                                                                                      // 45
    return [ "\n\t\t\t\t", HTML.UL({                                                                                   // 46
      class: function() {                                                                                              // 47
        return [ Spacebars.mustache(view.lookup(".")), " emoji-list ", Spacebars.mustache(view.lookup("isVisible"), view.lookup(".")) ];
      }                                                                                                                // 49
    }, "\n\t\t\t\t\t", Blaze.View("lookup:emojiList", function() {                                                     // 50
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("emojiList"), view.lookup(".")));                        // 51
    }), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                                   // 52
  }), "\n\t\t"), "\n\t");                                                                                              // 53
}));                                                                                                                   // 54
                                                                                                                       // 55
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"emojiPicker.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_emoji/emojiPicker.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals Template, isSetNotNull */var emojiCategories = {}; /**                                                      // 1
                                                               * Turns category hash to a nice readable translated name
                                                               * @param {string} category hash                         //
                                                               * @return {string} readable and translated              //
                                                               */                                                      //
                                                                                                                       //
function categoryName(category) {                                                                                      // 8
	for (var emojiPackage in meteorBabelHelpers.sanitizeForInObject(RocketChat.emoji.packages)) {                         // 9
		if (RocketChat.emoji.packages.hasOwnProperty(emojiPackage)) {                                                        // 10
			if (RocketChat.emoji.packages[emojiPackage].emojiCategories.hasOwnProperty(category)) {                             // 11
				return RocketChat.emoji.packages[emojiPackage].emojiCategories[category];                                          // 12
			}                                                                                                                   // 13
		}                                                                                                                    // 14
	}                                                                                                                     // 15
                                                                                                                       //
	if (emojiCategories.hasOwnProperty(category)) {                                                                       // 16
		return emojiCategories[category];                                                                                    // 17
	} // unknown category; better hash than nothing                                                                       // 18
                                                                                                                       //
                                                                                                                       //
	return category;                                                                                                      // 20
}                                                                                                                      // 21
                                                                                                                       //
function getEmojisByCategory(category) {                                                                               // 23
	var t = Template.instance();                                                                                          // 24
	var actualTone = t.tone;                                                                                              // 25
	var html = '';                                                                                                        // 26
                                                                                                                       //
	for (var emojiPackage in meteorBabelHelpers.sanitizeForInObject(RocketChat.emoji.packages)) {                         // 27
		if (RocketChat.emoji.packages.hasOwnProperty(emojiPackage)) {                                                        // 28
			if (RocketChat.emoji.packages[emojiPackage].emojisByCategory.hasOwnProperty(category)) {                            // 29
				var total = RocketChat.emoji.packages[emojiPackage].emojisByCategory[category].length;                             // 30
                                                                                                                       //
				var _loop = function (i) {                                                                                         // 29
					var emoji = RocketChat.emoji.packages[emojiPackage].emojisByCategory[category][i];                                // 32
					var tone = '';                                                                                                    // 33
                                                                                                                       //
					if (actualTone > 0 && RocketChat.emoji.packages[emojiPackage].toneList.hasOwnProperty(emoji)) {                   // 35
						tone = "_tone" + actualTone;                                                                                     // 36
					} //set correctPackage here to allow for recent emojis to work properly                                           // 37
                                                                                                                       //
                                                                                                                       //
					if (isSetNotNull(function () {                                                                                    // 40
						return RocketChat.emoji.list[":" + emoji + ":"].emojiPackage;                                                    // 40
					})) {                                                                                                             // 40
						var correctPackage = RocketChat.emoji.list[":" + emoji + ":"].emojiPackage;                                      // 41
						var image = RocketChat.emoji.packages[correctPackage].render(":" + emoji + tone + ":");                          // 42
						html += "<li class=\"emoji-" + emoji + "\" data-emoji=\"" + emoji + "\" title=\"" + emoji + "\">" + image + "</li>";
					}                                                                                                                 // 45
				};                                                                                                                 // 29
                                                                                                                       //
				for (var i = 0; i < total; i++) {                                                                                  // 31
					_loop(i);                                                                                                         // 31
				}                                                                                                                  // 46
			}                                                                                                                   // 47
		}                                                                                                                    // 48
	}                                                                                                                     // 49
                                                                                                                       //
	return html;                                                                                                          // 50
}                                                                                                                      // 51
                                                                                                                       //
function getEmojisBySearchTerm(searchTerm) {                                                                           // 53
	var html = '';                                                                                                        // 54
	var t = Template.instance();                                                                                          // 55
	var actualTone = t.tone;                                                                                              // 56
	var searchRegExp = new RegExp(RegExp.escape(searchTerm.replace(/:/g, '')), 'i');                                      // 58
                                                                                                                       //
	for (var _emoji in meteorBabelHelpers.sanitizeForInObject(RocketChat.emoji.list)) {                                   // 60
		if (!RocketChat.emoji.list.hasOwnProperty(_emoji)) {                                                                 // 61
			continue;                                                                                                           // 62
		}                                                                                                                    // 63
                                                                                                                       //
		if (searchRegExp.test(_emoji)) {                                                                                     // 65
			var emojiObject = RocketChat.emoji.list[_emoji];                                                                    // 66
			var emojiPackage = emojiObject.emojiPackage;                                                                        // 67
			var _tone = '';                                                                                                     // 68
			_emoji = _emoji.replace(/:/g, '');                                                                                  // 69
                                                                                                                       //
			if (actualTone > 0 && RocketChat.emoji.packages[emojiPackage].toneList.hasOwnProperty(_emoji)) {                    // 71
				_tone = "_tone" + actualTone;                                                                                      // 72
			}                                                                                                                   // 73
                                                                                                                       //
			var emojiFound = false;                                                                                             // 75
                                                                                                                       //
			for (var key in meteorBabelHelpers.sanitizeForInObject(RocketChat.emoji.packages[emojiPackage].emojisByCategory)) {
				if (RocketChat.emoji.packages[emojiPackage].emojisByCategory.hasOwnProperty(key)) {                                // 78
					var contents = RocketChat.emoji.packages[emojiPackage].emojisByCategory[key];                                     // 79
                                                                                                                       //
					if (contents.indexOf(_emoji) !== -1) {                                                                            // 80
						emojiFound = true;                                                                                               // 81
						break;                                                                                                           // 82
					}                                                                                                                 // 83
				}                                                                                                                  // 84
			}                                                                                                                   // 85
                                                                                                                       //
			if (emojiFound) {                                                                                                   // 87
				var image = RocketChat.emoji.packages[emojiPackage].render(":" + _emoji + _tone + ":");                            // 88
				html += "<li class=\"emoji-" + _emoji + "\" data-emoji=\"" + _emoji + "\" title=\"" + _emoji + "\">" + image + "</li>";
			}                                                                                                                   // 90
		}                                                                                                                    // 91
	}                                                                                                                     // 92
                                                                                                                       //
	return html;                                                                                                          // 94
}                                                                                                                      // 95
                                                                                                                       //
Template.emojiPicker.helpers({                                                                                         // 97
	category: function () {                                                                                               // 98
		var categories = [];                                                                                                 // 99
                                                                                                                       //
		for (var emojiPackage in meteorBabelHelpers.sanitizeForInObject(RocketChat.emoji.packages)) {                        // 100
			if (RocketChat.emoji.packages.hasOwnProperty(emojiPackage)) {                                                       // 101
				for (var key in meteorBabelHelpers.sanitizeForInObject(RocketChat.emoji.packages[emojiPackage].emojisByCategory)) {
					if (RocketChat.emoji.packages[emojiPackage].emojisByCategory.hasOwnProperty(key)) {                               // 103
						categories.push(key);                                                                                            // 104
					}                                                                                                                 // 105
				}                                                                                                                  // 106
			}                                                                                                                   // 107
		}                                                                                                                    // 108
                                                                                                                       //
		return categories;                                                                                                   // 109
	},                                                                                                                    // 110
	emojiByCategory: function (category) {                                                                                // 111
		var emojisByCategory = [];                                                                                           // 112
                                                                                                                       //
		for (var emojiPackage in meteorBabelHelpers.sanitizeForInObject(RocketChat.emoji.packages)) {                        // 113
			if (RocketChat.emoji.packages.hasOwnProperty(emojiPackage)) {                                                       // 114
				if (RocketChat.emoji.packages[emojiPackage].emojisByCategory.hasOwnProperty(category)) {                           // 115
					emojisByCategory = emojisByCategory.concat(RocketChat.emoji.packages[emojiPackage].emojisByCategory[category]);   // 116
				}                                                                                                                  // 117
			}                                                                                                                   // 118
		}                                                                                                                    // 119
                                                                                                                       //
		return emojisByCategory;                                                                                             // 120
	},                                                                                                                    // 121
	isVisible: function (category) {                                                                                      // 122
		return Template.instance().currentCategory.get() === category ? 'visible' : '';                                      // 123
	},                                                                                                                    // 124
	emojiList: function (category) {                                                                                      // 125
		var t = Template.instance();                                                                                         // 126
		var searchTerm = t.currentSearchTerm.get();                                                                          // 127
		var activeCategory = t.currentCategory.get(); //this will cause the reflow when recent list gets updated             // 128
                                                                                                                       //
		t.recentNeedsUpdate.get(); //we only need to replace the active category, since switching tabs resets the filter     // 130
                                                                                                                       //
		if (activeCategory !== category) {                                                                                   // 133
			return;                                                                                                             // 134
		}                                                                                                                    // 135
                                                                                                                       //
		if (searchTerm.length > 0) {                                                                                         // 137
			return getEmojisBySearchTerm(searchTerm);                                                                           // 138
		} else {                                                                                                             // 139
			return getEmojisByCategory(category);                                                                               // 140
		}                                                                                                                    // 141
	},                                                                                                                    // 142
	currentTone: function () {                                                                                            // 143
		return "tone-" + Template.instance().tone;                                                                           // 144
	},                                                                                                                    // 145
	/**                                                                                                                   // 146
  * Returns true if a given emoji category is active                                                                   //
  *                                                                                                                    //
  * @param {string} category hash                                                                                      //
  * @return {boolean} true if active, false otherwise                                                                  //
  */activeCategory: function (category) {                                                                              //
		return Template.instance().currentCategory.get() === category ? 'active' : '';                                       // 153
	},                                                                                                                    // 154
	categoryName: categoryName,                                                                                           // 155
	/**                                                                                                                   // 156
  * Returns currently active emoji category hash                                                                       //
  *                                                                                                                    //
  * @return {string} category hash                                                                                     //
  */currentCategory: function () {                                                                                     //
		var t = Template.instance();                                                                                         // 162
		var hash = t.currentCategory.get();                                                                                  // 163
		var searchTerm = t.currentSearchTerm.get();                                                                          // 164
                                                                                                                       //
		if (searchTerm.length > 0) {                                                                                         // 166
			return TAPi18n.__('Search');                                                                                        // 167
		} else {                                                                                                             // 168
			return categoryName(hash);                                                                                          // 169
		}                                                                                                                    // 170
	}                                                                                                                     // 171
});                                                                                                                    // 97
Template.emojiPicker.events({                                                                                          // 174
	'click .emoji-picker': function (event) {                                                                             // 175
		event.stopPropagation();                                                                                             // 176
		event.preventDefault();                                                                                              // 177
	},                                                                                                                    // 178
	'click .category-link': function (event, instance) {                                                                  // 179
		event.stopPropagation();                                                                                             // 180
		event.preventDefault();                                                                                              // 181
		instance.$('.emoji-filter .search').val('').change();                                                                // 183
		instance.$('.emoji-filter .search').focus();                                                                         // 184
		instance.currentCategory.set(event.currentTarget.hash.substr(1));                                                    // 186
		return false;                                                                                                        // 188
	},                                                                                                                    // 189
	'click .change-tone > a': function (event, instance) {                                                                // 190
		event.stopPropagation();                                                                                             // 191
		event.preventDefault();                                                                                              // 192
		instance.$('.tone-selector').toggleClass('show');                                                                    // 194
	},                                                                                                                    // 195
	'click .tone-selector .tone': function (event, instance) {                                                            // 196
		event.stopPropagation();                                                                                             // 197
		event.preventDefault();                                                                                              // 198
		var tone = parseInt(event.currentTarget.dataset.tone);                                                               // 200
		var newTone = void 0;                                                                                                // 201
                                                                                                                       //
		if (tone > 0) {                                                                                                      // 203
			newTone = "_tone" + tone;                                                                                           // 204
		} else {                                                                                                             // 205
			newTone = '';                                                                                                       // 206
		}                                                                                                                    // 207
                                                                                                                       //
		for (var emojiPackage in meteorBabelHelpers.sanitizeForInObject(RocketChat.emoji.packages)) {                        // 209
			if (RocketChat.emoji.packages.hasOwnProperty(emojiPackage)) {                                                       // 210
				if (RocketChat.emoji.packages[emojiPackage].hasOwnProperty('toneList')) {                                          // 211
					for (var _emoji2 in meteorBabelHelpers.sanitizeForInObject(RocketChat.emoji.packages[emojiPackage].toneList)) {   // 212
						if (RocketChat.emoji.packages[emojiPackage].toneList.hasOwnProperty(_emoji2)) {                                  // 213
							$(".emoji-" + _emoji2).html(RocketChat.emoji.packages[emojiPackage].render(":" + _emoji2 + newTone + ":"));     // 214
						}                                                                                                                // 215
					}                                                                                                                 // 216
				}                                                                                                                  // 217
			}                                                                                                                   // 218
		}                                                                                                                    // 219
                                                                                                                       //
		RocketChat.EmojiPicker.setTone(tone);                                                                                // 221
		instance.setCurrentTone(tone);                                                                                       // 223
		$('.tone-selector').toggleClass('show');                                                                             // 225
	},                                                                                                                    // 226
	'click .emoji-list li': function (event, instance) {                                                                  // 227
		event.stopPropagation();                                                                                             // 228
		var emoji = event.currentTarget.dataset.emoji;                                                                       // 230
		var actualTone = instance.tone;                                                                                      // 231
		var tone = '';                                                                                                       // 232
                                                                                                                       //
		for (var emojiPackage in meteorBabelHelpers.sanitizeForInObject(RocketChat.emoji.packages)) {                        // 234
			if (RocketChat.emoji.packages.hasOwnProperty(emojiPackage)) {                                                       // 235
				if (actualTone > 0 && RocketChat.emoji.packages[emojiPackage].toneList.hasOwnProperty(emoji)) {                    // 236
					tone = "_tone" + actualTone;                                                                                      // 237
				}                                                                                                                  // 238
			}                                                                                                                   // 239
		}                                                                                                                    // 240
                                                                                                                       //
		var input = $('.emoji-filter input.search');                                                                         // 242
                                                                                                                       //
		if (input) {                                                                                                         // 243
			input.val('');                                                                                                      // 244
		}                                                                                                                    // 245
                                                                                                                       //
		instance.currentSearchTerm.set('');                                                                                  // 246
		RocketChat.EmojiPicker.pickEmoji(emoji + tone);                                                                      // 248
	},                                                                                                                    // 249
	'keydown .emoji-filter .search': function (event) {                                                                   // 250
		if (event.keyCode === 13) {                                                                                          // 251
			event.preventDefault();                                                                                             // 252
		}                                                                                                                    // 253
	},                                                                                                                    // 254
	'keyup .emoji-filter .search, change .emoji-filter .search': function (event, instance) {                             // 255
		var value = event.target.value.trim();                                                                               // 256
		var cst = instance.currentSearchTerm;                                                                                // 257
                                                                                                                       //
		if (value === cst.get()) {                                                                                           // 258
			return;                                                                                                             // 259
		}                                                                                                                    // 260
                                                                                                                       //
		cst.set(value);                                                                                                      // 261
	}                                                                                                                     // 262
});                                                                                                                    // 174
Template.emojiPicker.onCreated(function () {                                                                           // 265
	var _this = this;                                                                                                     // 265
                                                                                                                       //
	this.tone = RocketChat.EmojiPicker.getTone();                                                                         // 266
	var recent = RocketChat.EmojiPicker.getRecent();                                                                      // 267
	this.recentNeedsUpdate = new ReactiveVar(false);                                                                      // 268
	this.currentCategory = new ReactiveVar(recent.length > 0 ? 'recent' : 'people');                                      // 269
	this.currentSearchTerm = new ReactiveVar('');                                                                         // 270
	recent.forEach(function (emoji) {                                                                                     // 272
		RocketChat.emoji.packages.base.emojisByCategory.recent.push(emoji);                                                  // 273
	});                                                                                                                   // 274
                                                                                                                       //
	this.setCurrentTone = function (newTone) {                                                                            // 276
		$('.current-tone').removeClass("tone-" + _this.tone);                                                                // 277
		$('.current-tone').addClass("tone-" + newTone);                                                                      // 278
		_this.tone = newTone;                                                                                                // 279
	};                                                                                                                    // 280
                                                                                                                       //
	this.autorun(function () {                                                                                            // 282
		if (_this.recentNeedsUpdate.get()) {                                                                                 // 283
			_this.recentNeedsUpdate.set(false);                                                                                 // 284
		}                                                                                                                    // 285
	});                                                                                                                   // 286
});                                                                                                                    // 287
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lib":{"emojiRenderer.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_emoji/lib/emojiRenderer.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals HTML, isSetNotNull, renderEmoji:true */renderEmoji = function (emoji) {                                     // 1
	if (isSetNotNull(function () {                                                                                        // 3
		return RocketChat.emoji.list[emoji].emojiPackage;                                                                    // 3
	})) {                                                                                                                 // 3
		var emojiPackage = RocketChat.emoji.list[emoji].emojiPackage;                                                        // 4
		return RocketChat.emoji.packages[emojiPackage].render(emoji);                                                        // 5
	}                                                                                                                     // 6
};                                                                                                                     // 7
                                                                                                                       //
Blaze.registerHelper('renderEmoji', renderEmoji);                                                                      // 9
Template.registerHelper('renderEmoji', new Template('renderEmoji', function () {                                       // 11
	var view = this;                                                                                                      // 12
	var emoji = Blaze.getData(view);                                                                                      // 13
                                                                                                                       //
	if (isSetNotNull(function () {                                                                                        // 15
		return RocketChat.emoji.list[emoji].emojiPackage;                                                                    // 15
	})) {                                                                                                                 // 15
		var emojiPackage = RocketChat.emoji.list[emoji].emojiPackage;                                                        // 16
		return new HTML.Raw(RocketChat.emoji.packages[emojiPackage].render(emoji));                                          // 17
	}                                                                                                                     // 18
                                                                                                                       //
	return '';                                                                                                            // 20
})); /* exported renderEmoji */                                                                                        // 21
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"EmojiPicker.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_emoji/lib/EmojiPicker.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals Blaze, Template */RocketChat.EmojiPicker = {                                                                // 1
	width: 390,                                                                                                           // 3
	height: 238,                                                                                                          // 4
	initiated: false,                                                                                                     // 5
	input: null,                                                                                                          // 6
	source: null,                                                                                                         // 7
	recent: [],                                                                                                           // 8
	tone: null,                                                                                                           // 9
	opened: false,                                                                                                        // 10
	pickCallback: null,                                                                                                   // 11
	init: function () {                                                                                                   // 12
		var _this = this;                                                                                                    // 12
                                                                                                                       //
		if (this.initiated) {                                                                                                // 13
			return;                                                                                                             // 14
		}                                                                                                                    // 15
                                                                                                                       //
		this.initiated = true;                                                                                               // 16
		this.recent = window.localStorage.getItem('emoji.recent') ? window.localStorage.getItem('emoji.recent').split(',') : [];
		this.tone = window.localStorage.getItem('emoji.tone') || 0;                                                          // 19
		Blaze.render(Template.emojiPicker, document.body);                                                                   // 21
		$(document).click(function (event) {                                                                                 // 23
			if (!_this.opened) {                                                                                                // 24
				return;                                                                                                            // 25
			}                                                                                                                   // 26
                                                                                                                       //
			if (!$(event.target).closest('.emoji-picker').length && !$(event.target).is('.emoji-picker')) {                     // 27
				if (_this.opened) {                                                                                                // 28
					_this.close();                                                                                                    // 29
				}                                                                                                                  // 30
			}                                                                                                                   // 31
		});                                                                                                                  // 32
		$(window).resize(_.debounce(function () {                                                                            // 34
			if (!_this.opened) {                                                                                                // 35
				return;                                                                                                            // 36
			}                                                                                                                   // 37
                                                                                                                       //
			_this.setPosition();                                                                                                // 38
		}, 300));                                                                                                            // 39
	},                                                                                                                    // 40
	isOpened: function () {                                                                                               // 41
		return this.opened;                                                                                                  // 42
	},                                                                                                                    // 43
	setTone: function (tone) {                                                                                            // 44
		this.tone = tone;                                                                                                    // 45
		window.localStorage.setItem('emoji.tone', tone);                                                                     // 46
	},                                                                                                                    // 47
	getTone: function () {                                                                                                // 48
		return this.tone;                                                                                                    // 49
	},                                                                                                                    // 50
	getRecent: function () {                                                                                              // 51
		return this.recent;                                                                                                  // 52
	},                                                                                                                    // 53
	setPosition: function () {                                                                                            // 54
		var sourcePos = $(this.source).offset();                                                                             // 55
		var left = sourcePos.left;                                                                                           // 56
		var top = sourcePos.top - this.height - 5;                                                                           // 57
		var cssProperties = {                                                                                                // 58
			top: top,                                                                                                           // 59
			left: left                                                                                                          // 60
		};                                                                                                                   // 58
                                                                                                                       //
		if (top < 0) {                                                                                                       // 63
			cssProperties.top = 10;                                                                                             // 64
		}                                                                                                                    // 65
                                                                                                                       //
		if (left < 35) {                                                                                                     // 67
			cssProperties.left = 0;                                                                                             // 68
		} else {                                                                                                             // 69
			var windowSize = $(window).width();                                                                                 // 70
			var pickerWidth = $('.emoji-picker').width();                                                                       // 71
                                                                                                                       //
			if (left + pickerWidth > windowSize) {                                                                              // 73
				var emojiButtonSize = $('.reaction-message.message-action').outerWidth();                                          // 74
				cssProperties.left = left - pickerWidth + emojiButtonSize;                                                         // 75
			}                                                                                                                   // 76
		}                                                                                                                    // 77
                                                                                                                       //
		return $('.emoji-picker').css(cssProperties);                                                                        // 79
	},                                                                                                                    // 80
	open: function (source, callback) {                                                                                   // 81
		if (!this.initiated) {                                                                                               // 82
			this.init();                                                                                                        // 83
		}                                                                                                                    // 84
                                                                                                                       //
		this.pickCallback = callback;                                                                                        // 85
		this.source = source;                                                                                                // 86
		var containerEl = this.setPosition();                                                                                // 88
		containerEl.addClass('show');                                                                                        // 89
		var emojiInput = containerEl.find('.emoji-filter input.search');                                                     // 91
                                                                                                                       //
		if (emojiInput) {                                                                                                    // 92
			emojiInput.focus();                                                                                                 // 93
		}                                                                                                                    // 94
                                                                                                                       //
		this.opened = true;                                                                                                  // 95
	},                                                                                                                    // 96
	close: function () {                                                                                                  // 97
		$('.emoji-picker').removeClass('show');                                                                              // 98
		this.opened = false;                                                                                                 // 99
	},                                                                                                                    // 100
	pickEmoji: function (emoji) {                                                                                         // 101
		this.pickCallback(emoji);                                                                                            // 102
		this.close();                                                                                                        // 104
		this.addRecent(emoji);                                                                                               // 105
	},                                                                                                                    // 106
	addRecent: function (emoji) {                                                                                         // 107
		var pos = this.recent.indexOf(emoji);                                                                                // 108
                                                                                                                       //
		if (pos !== -1) {                                                                                                    // 110
			this.recent.splice(pos, 1);                                                                                         // 111
		}                                                                                                                    // 112
                                                                                                                       //
		this.recent.unshift(emoji);                                                                                          // 114
		window.localStorage.setItem('emoji.recent', this.recent);                                                            // 116
		RocketChat.emoji.packages.base.emojisByCategory.recent = this.recent;                                                // 117
		this.updateRecent();                                                                                                 // 118
	},                                                                                                                    // 119
	updateRecent: function () {                                                                                           // 120
		var instance = Template.instance();                                                                                  // 121
                                                                                                                       //
		if (instance) {                                                                                                      // 122
			instance.recentNeedsUpdate.set(true);                                                                               // 123
		} else {                                                                                                             // 124
			this.refreshDynamicEmojiLists();                                                                                    // 125
		}                                                                                                                    // 126
	},                                                                                                                    // 127
	refreshDynamicEmojiLists: function () {                                                                               // 128
		var dynamicEmojiLists = [RocketChat.emoji.packages.base.emojisByCategory.recent, RocketChat.emoji.packages.emojiCustom.emojisByCategory.rocket];
		dynamicEmojiLists.forEach(function (category) {                                                                      // 134
			if (category) {                                                                                                     // 135
				for (var i = 0; i < category.length; i++) {                                                                        // 136
					var emoji = category[i];                                                                                          // 137
                                                                                                                       //
					if (!RocketChat.emoji.list[":" + emoji + ":"]) {                                                                  // 138
						category = _.without(category, emoji);                                                                           // 139
					}                                                                                                                 // 140
				}                                                                                                                  // 141
			}                                                                                                                   // 142
		});                                                                                                                  // 143
	}                                                                                                                     // 144
};                                                                                                                     // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"emojiButton.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_emoji/emojiButton.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals Template */Template.messageBox.events({                                                                     // 1
	'click .emoji-picker-icon': function (event) {                                                                        // 3
		event.stopPropagation();                                                                                             // 4
                                                                                                                       //
		if (RocketChat.EmojiPicker.isOpened()) {                                                                             // 5
			RocketChat.EmojiPicker.close();                                                                                     // 6
		} else {                                                                                                             // 7
			RocketChat.EmojiPicker.open(event.currentTarget, function (emoji) {                                                 // 8
				var input = $(event.currentTarget).parent().parent().find('.input-message');                                       // 9
				var emojiValue = ":" + emoji + ":";                                                                                // 11
				var caretPos = input.prop('selectionStart');                                                                       // 13
				var textAreaTxt = input.val();                                                                                     // 14
				input.val(textAreaTxt.substring(0, caretPos) + emojiValue + textAreaTxt.substring(caretPos));                      // 16
				input.focus();                                                                                                     // 18
				input.prop('selectionStart', caretPos + emojiValue.length);                                                        // 20
				input.prop('selectionEnd', caretPos + emojiValue.length);                                                          // 21
			});                                                                                                                 // 22
		}                                                                                                                    // 23
	}                                                                                                                     // 24
});                                                                                                                    // 2
Template.messageBox.onCreated(function () {                                                                            // 27
	RocketChat.EmojiPicker.init();                                                                                        // 28
});                                                                                                                    // 29
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"keyboardFix.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_emoji/keyboardFix.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* global device */if (Meteor.isCordova) {                                                                             // 1
	window.addEventListener('native.keyboardshow', function () {                                                          // 4
		if ((typeof device !== 'undefined' && device !== null ? device.platform.toLowerCase() : false) !== 'android') {      // 5
			RocketChat.EmojiPicker.setPosition();                                                                               // 6
		}                                                                                                                    // 7
	});                                                                                                                   // 8
	window.addEventListener('native.keyboardhide', function () {                                                          // 9
		if ((typeof device !== 'undefined' && device !== null ? device.platform.toLowerCase() : false) !== 'android') {      // 10
			RocketChat.EmojiPicker.setPosition();                                                                               // 11
		}                                                                                                                    // 12
	});                                                                                                                   // 13
}                                                                                                                      // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".less",
    ".css"
  ]
});
require("./node_modules/meteor/rocketchat:emoji/function-isSet.js");
require("./node_modules/meteor/rocketchat:emoji/rocketchat.js");
require("./node_modules/meteor/rocketchat:emoji/emojiParser.js");
require("./node_modules/meteor/rocketchat:emoji/template.emojiPicker.js");
require("./node_modules/meteor/rocketchat:emoji/emojiPicker.js");
require("./node_modules/meteor/rocketchat:emoji/lib/emojiRenderer.js");
require("./node_modules/meteor/rocketchat:emoji/lib/EmojiPicker.js");
require("./node_modules/meteor/rocketchat:emoji/emojiButton.js");
require("./node_modules/meteor/rocketchat:emoji/keyboardFix.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['rocketchat:emoji'] = {}, {
  renderEmoji: renderEmoji
});

})();
