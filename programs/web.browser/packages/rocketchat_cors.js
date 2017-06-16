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
var WebApp = Package.webapp.WebApp;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:cors":{"common.js":function(){

//////////////////////////////////////////////////////////////////////////
//                                                                      //
// packages/rocketchat_cors/common.js                                   //
//                                                                      //
//////////////////////////////////////////////////////////////////////////
                                                                        //
Meteor.startup(function () {                                            // 1
	return RocketChat.settings.onload('Force_SSL', function (key, value) {
		return Meteor.absoluteUrl.defaultOptions.secure = value;              // 3
	});                                                                    // 4
});                                                                     // 5
//////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:cors/common.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:cors'] = {};

})();
