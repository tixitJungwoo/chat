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
var OAuth = Package.oauth.OAuth;
var Oauth = Package.oauth.Oauth;
var Random = Package.random.Random;
var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

/* Package-scope variables */
var LinkedIn;

var require = meteorInstall({"node_modules":{"meteor":{"pauli:linkedin-oauth":{"linkedin-client.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/pauli_linkedin-oauth/linkedin-client.js                                                    //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
LinkedIn = {}; // Request LinkedIn credentials for the user                                            // 1
// @param options {optional}                                                                           // 4
// @param credentialRequestCompleteCallback {Function} Callback function to call on                    // 5
//   completion. Takes one argument, credentialToken on success, or Error on                           // 6
//   error.                                                                                            // 7
                                                                                                       //
LinkedIn.requestCredential = function (options, credentialRequestCompleteCallback) {                   // 8
  console.log('🔑', 'LinkedIn.requestCredential'); // support both (options, callback) and (callback).
                                                                                                       //
  if (!credentialRequestCompleteCallback && typeof options === 'function') {                           // 11
    credentialRequestCompleteCallback = options;                                                       // 12
    options = {};                                                                                      // 13
  }                                                                                                    // 14
                                                                                                       //
  var config = ServiceConfiguration.configurations.findOne({                                           // 16
    service: 'linkedin'                                                                                // 16
  });                                                                                                  // 16
  console.log('🔑 config', config);                                                                    // 17
                                                                                                       //
  if (!config) {                                                                                       // 18
    credentialRequestCompleteCallback && credentialRequestCompleteCallback(new ServiceConfiguration.ConfigError("Service not configured"));
    console.log('🔑', 'returning no config');                                                          // 20
    return;                                                                                            // 21
  }                                                                                                    // 22
                                                                                                       //
  var credentialToken = Random.secret();                                                               // 24
  var scope = [];                                                                                      // 26
                                                                                                       //
  if (options && options.requestPermissions) {                                                         // 27
    scope = options.requestPermissions.join('+');                                                      // 28
  }                                                                                                    // 29
                                                                                                       //
  var loginStyle = OAuth._loginStyle('linkedin', config, options);                                     // 31
                                                                                                       //
  var loginUrl = 'https://www.linkedin.com/uas/oauth2/authorization' + '?response_type=code' + '&client_id=' + config.clientId + '&redirect_uri=' + OAuth._redirectUri('linkedin', config) + '&scope=' + scope + '&state=' + OAuth._stateParam(loginStyle, credentialToken);
                                                                                                       //
  OAuth.launchLogin({                                                                                  // 40
    loginService: "linkedin",                                                                          // 41
    loginStyle: loginStyle,                                                                            // 42
    loginUrl: loginUrl,                                                                                // 43
    credentialRequestCompleteCallback: credentialRequestCompleteCallback,                              // 44
    credentialToken: credentialToken                                                                   // 45
  });                                                                                                  // 40
};                                                                                                     // 47
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/pauli:linkedin-oauth/linkedin-client.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['pauli:linkedin-oauth'] = {}, {
  LinkedIn: LinkedIn
});

})();
