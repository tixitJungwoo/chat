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
var FlowRouter = Package['kadira:flow-router'].FlowRouter;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:sandstorm":{"client":{"powerboxListener.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rocketchat_sandstorm/client/powerboxListener.js          //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
RocketChat.Sandstorm = RocketChat.Sandstorm || {};                   // 1
                                                                     //
RocketChat.Sandstorm.request = function () {};                       // 3
                                                                     //
if (Meteor.settings.public.sandstorm) {                              // 4
	var callbackMap = {};                                               // 5
                                                                     //
	var messageListener = function (event) {                            // 7
		if (event.data.rpcId) {                                            // 8
			var cb = callbackMap[event.data.rpcId];                           // 9
			cb(event.data.error, event.data);                                 // 11
		}                                                                  // 12
	};                                                                  // 13
                                                                     //
	window.addEventListener('message', messageListener);                // 14
	var interfaces = {                                                  // 16
		uiView: 'EAZQAQEAABEBF1EEAQH_5-Jn6pjXtNsAAAA'                      // 17
	};                                                                  // 16
                                                                     //
	RocketChat.Sandstorm.request = function (interfaceName, cb) {       // 20
		var rpcId = Math.random().toString();                              // 21
		callbackMap[rpcId] = cb;                                           // 22
		window.parent.postMessage({                                        // 23
			powerboxRequest: {                                                // 23
				rpcId: rpcId,                                                    // 24
				query: [interfaces[interfaceName]]                               // 25
			}                                                                 // 23
		}, '*');                                                           // 23
	};                                                                  // 27
}                                                                    // 28
///////////////////////////////////////////////////////////////////////

},"setPath.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rocketchat_sandstorm/client/setPath.js                   //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
function updateSandstormMetaData(msg) {                              // 1
	return window.parent.postMessage(msg, '*');                         // 2
}                                                                    // 3
                                                                     //
if (Meteor.settings.public.sandstorm) {                              // 5
	// Set the path of the parent frame when the grain's path changes.  // 6
	// See https://docs.sandstorm.io/en/latest/developing/path/         // 7
	FlowRouter.triggers.enter([function (_ref) {                        // 9
		var path = _ref.path;                                              // 9
		updateSandstormMetaData({                                          // 10
			setPath: path                                                     // 10
		});                                                                // 10
	}]);                                                                // 11
}                                                                    // 12
///////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:sandstorm/client/powerboxListener.js");
require("./node_modules/meteor/rocketchat:sandstorm/client/setPath.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:sandstorm'] = {};

})();
