(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var ECMAScript = Package.ecmascript.ECMAScript;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime-server'].Symbol;
var Map = Package['ecmascript-runtime-server'].Map;
var Set = Package['ecmascript-runtime-server'].Set;

/* Package-scope variables */
var __coffeescriptShare, WebRTC;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:webrtc":{"server":{"settings.coffee.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/rocketchat_webrtc/server/settings.coffee.js              //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
RocketChat.settings.addGroup('WebRTC', function () {                 // 1
  this.add('WebRTC_Enable_Channel', false, {                         // 2
    type: 'boolean',                                                 // 2
    group: 'WebRTC',                                                 // 2
    "public": true                                                   // 2
  });                                                                // 2
  this.add('WebRTC_Enable_Private', true, {                          // 3
    type: 'boolean',                                                 // 3
    group: 'WebRTC',                                                 // 3
    "public": true                                                   // 3
  });                                                                // 3
  this.add('WebRTC_Enable_Direct', true, {                           // 4
    type: 'boolean',                                                 // 4
    group: 'WebRTC',                                                 // 4
    "public": true                                                   // 4
  });                                                                // 4
  return this.add('WebRTC_Servers', 'stun:stun.l.google.com:19302, stun:23.21.150.121, team%40rocket.chat:demo@turn:numb.viagenie.ca:3478', {
    type: 'string',                                                  // 5
    group: 'WebRTC',                                                 // 5
    "public": true                                                   // 5
  });                                                                // 5
});                                                                  // 1
///////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".coffee"
  ]
});
require("./node_modules/meteor/rocketchat:webrtc/server/settings.coffee.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['rocketchat:webrtc'] = {}, {
  WebRTC: WebRTC
});

})();

//# sourceMappingURL=rocketchat_webrtc.js.map
