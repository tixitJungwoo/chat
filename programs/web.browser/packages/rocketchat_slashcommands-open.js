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
var check = Package.check.check;
var Match = Package.check.Match;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var FlowRouter = Package['kadira:flow-router'].FlowRouter;
var Template = Package['templating-runtime'].Template;
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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:slashcommands-open":{"client.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                    //
// packages/rocketchat_slashcommands-open/client.js                                                   //
//                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                      //
function Open(command, params /*, item*/) {                                                           // 1
	var dict = {                                                                                         // 2
		'#': ['c', 'p'],                                                                                    // 3
		'@': ['d']                                                                                          // 4
	};                                                                                                   // 2
                                                                                                      //
	if (command !== 'open' || !Match.test(params, String)) {                                             // 7
		return;                                                                                             // 8
	}                                                                                                    // 9
                                                                                                      //
	var room = params.trim();                                                                            // 11
	var type = dict[room[0]];                                                                            // 12
	room = room.replace(/#|@/, '');                                                                      // 13
	var query = {                                                                                        // 15
		name: room                                                                                          // 16
	};                                                                                                   // 15
                                                                                                      //
	if (type) {                                                                                          // 19
		query['t'] = {                                                                                      // 20
			$in: type                                                                                          // 21
		};                                                                                                  // 20
	}                                                                                                    // 23
                                                                                                      //
	var subscription = ChatSubscription.findOne(query);                                                  // 25
                                                                                                      //
	if (subscription) {                                                                                  // 27
		RocketChat.roomTypes.openRouteLink(subscription.t, subscription, FlowRouter.current().queryParams);
	}                                                                                                    // 29
                                                                                                      //
	if (type && type.indexOf('d') === -1) {                                                              // 31
		return;                                                                                             // 32
	}                                                                                                    // 33
                                                                                                      //
	return Meteor.call('createDirectMessage', room, function (err) {                                     // 34
		if (err) {                                                                                          // 35
			return;                                                                                            // 36
		}                                                                                                   // 37
                                                                                                      //
		var subscription = RocketChat.models.Subscriptions.findOne(query);                                  // 38
		RocketChat.roomTypes.openRouteLink(subscription.t, subscription, FlowRouter.current().queryParams);
	});                                                                                                  // 40
}                                                                                                     // 42
                                                                                                      //
RocketChat.slashCommands.add('open', Open, {                                                          // 44
	description: 'Opens_a_channel_group_or_direct_message',                                              // 45
	params: 'room_name',                                                                                 // 46
	clientOnly: true                                                                                     // 47
});                                                                                                   // 44
////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:slashcommands-open/client.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:slashcommands-open'] = {};

})();
