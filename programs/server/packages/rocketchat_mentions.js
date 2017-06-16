(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:mentions":{"server.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                             //
// packages/rocketchat_mentions/server.js                                                                      //
//                                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                               //
var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");                                  //
                                                                                                               //
var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);                                         //
                                                                                                               //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }              //
                                                                                                               //
/*                                                                                                             // 1
* Mentions is a named function that will process Mentions                                                      //
* @param {Object} message - The message object                                                                 //
*/function MentionsServer(message) {                                                                           //
	var msgMentionRegex = new RegExp("(?:^|\\s|\\n)(?:@)(" + RocketChat.settings.get('UTF8_Names_Validation') + ")", 'g');
	var mentionsAll = [];                                                                                         // 8
	var userMentions = [];                                                                                        // 9
	var mentions = message.msg.match(msgMentionRegex);                                                            // 10
                                                                                                               //
	if (mentions) {                                                                                               // 11
		mentions.forEach(function (m) {                                                                              // 12
			var mention = m.trim().substr(1);                                                                           // 13
                                                                                                               //
			if (mention !== 'all' && mention !== 'here') {                                                              // 14
				return userMentions.push(mention);                                                                         // 15
			}                                                                                                           // 16
                                                                                                               //
			if (mention === 'all') {                                                                                    // 17
				var messageMaxAll = RocketChat.settings.get('Message_MaxAll');                                             // 18
				var allChannel = RocketChat.models.Rooms.findOneById(message.rid);                                         // 19
                                                                                                               //
				if (messageMaxAll !== 0 && allChannel.usernames.length >= messageMaxAll) {                                 // 20
					return;                                                                                                   // 21
				}                                                                                                          // 22
			}                                                                                                           // 23
                                                                                                               //
			mentionsAll.push({                                                                                          // 24
				_id: mention,                                                                                              // 25
				username: mention                                                                                          // 26
			});                                                                                                         // 24
		});                                                                                                          // 28
		mentions = userMentions.length ? Meteor.users.find({                                                         // 29
			username: {                                                                                                 // 29
				$in: _.unique(userMentions)                                                                                // 29
			}                                                                                                           // 29
		}, {                                                                                                         // 29
			fields: {                                                                                                   // 29
				_id: true,                                                                                                 // 29
				username: true                                                                                             // 29
			}                                                                                                           // 29
		}).fetch() : [];                                                                                             // 29
		var verifiedMentions = [].concat(mentionsAll, (0, _toConsumableArray3.default)(mentions));                   // 31
                                                                                                               //
		if (verifiedMentions.length !== 0) {                                                                         // 32
			message.mentions = verifiedMentions;                                                                        // 33
		}                                                                                                            // 34
	}                                                                                                             // 35
                                                                                                               //
	var msgChannelRegex = new RegExp("(?:^|\\s|\\n)(?:#)(" + RocketChat.settings.get('UTF8_Names_Validation') + ")", 'g');
	var channels = message.msg.match(msgChannelRegex);                                                            // 38
                                                                                                               //
	if (channels) {                                                                                               // 39
		channels = channels.map(function (c) {                                                                       // 40
			return c.trim().substr(1);                                                                                  // 40
		});                                                                                                          // 40
		var verifiedChannels = RocketChat.models.Rooms.find({                                                        // 41
			name: {                                                                                                     // 41
				$in: _.unique(channels)                                                                                    // 41
			},                                                                                                          // 41
			t: 'c'                                                                                                      // 41
		}, {                                                                                                         // 41
			fields: {                                                                                                   // 41
				_id: 1,                                                                                                    // 41
				name: 1                                                                                                    // 41
			}                                                                                                           // 41
		}).fetch();                                                                                                  // 41
                                                                                                               //
		if (verifiedChannels.length !== 0) {                                                                         // 42
			message.channels = verifiedChannels;                                                                        // 43
		}                                                                                                            // 44
	}                                                                                                             // 45
                                                                                                               //
	return message;                                                                                               // 46
}                                                                                                              // 47
                                                                                                               //
RocketChat.callbacks.add('beforeSaveMessage', MentionsServer, RocketChat.callbacks.priority.HIGH, 'mentions');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:mentions/server.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:mentions'] = {};

})();

//# sourceMappingURL=rocketchat_mentions.js.map
