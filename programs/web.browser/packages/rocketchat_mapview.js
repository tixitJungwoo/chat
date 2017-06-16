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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:mapview":{"client":{"mapview.js":function(require){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// packages/rocketchat_mapview/client/mapview.js                                                  //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");                             //
                                                                                                  //
var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);                                    //
                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
                                                                                                  //
/*                                                                                                // 1
 * MapView is a named function that will replace geolocation in messages with a Google Static Map
 * @param {Object} message - The message object                                                   //
 */function MapView(message) {                                                                    //
	// get MapView settings                                                                          // 8
	var mv_googlekey = RocketChat.settings.get('MapView_GMapsAPIKey');                               // 9
                                                                                                  //
	if (message.location) {                                                                          // 11
		// GeoJSON is reversed - ie. [lng, lat]                                                         // 13
		var _message$location$coo = (0, _slicedToArray3.default)(message.location.coordinates, 2),      // 11
		    longitude = _message$location$coo[0],                                                       // 11
		    latitude = _message$location$coo[1]; // confirm we have an api key set, and generate the html required for the mapview
                                                                                                  //
                                                                                                  //
		if (mv_googlekey && mv_googlekey.length) {                                                      // 17
			message.html = "<a href=\"https://maps.google.com/maps?daddr=" + latitude + "," + longitude + "\" target=\"_blank\"><img src=\"https://maps.googleapis.com/maps/api/staticmap?zoom=14&size=250x250&markers=color:gray%7Clabel:%7C" + latitude + "," + longitude + "&key=" + mv_googlekey + "\" /></a>";
		} else {                                                                                        // 19
			message.html = "<a href=\"https://maps.google.com/maps?daddr=" + latitude + "," + longitude + "\" target=\"_blank\">" + TAPi18n.__('Shared_Location') + "</a>";
		}                                                                                               // 21
	}                                                                                                // 22
                                                                                                  //
	return message;                                                                                  // 24
}                                                                                                 // 25
                                                                                                  //
RocketChat.callbacks.add('renderMessage', MapView, RocketChat.callbacks.priority.HIGH);           // 27
////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:mapview/client/mapview.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:mapview'] = {};

})();
