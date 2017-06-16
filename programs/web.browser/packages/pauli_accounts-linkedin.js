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
var Accounts = Package['accounts-base'].Accounts;
var LinkedIn = Package['pauli:linkedin-oauth'].LinkedIn;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/pauli_accounts-linkedin/notice.js                                                          //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
if (Package['accounts-ui'] && !Package.hasOwnProperty('linkedin-config-ui')) {                         // 1
  console.warn(                                                                                        // 2
    "Note: You're using accounts-ui and accounts-linkedin,\n" +                                        // 3
    "but didn't install the configuration UI for the LinkedIn\n" +                                     // 4
    "OAuth. You can install it with:\n" +                                                              // 5
    "\n" +                                                                                             // 6
    "    meteor add linkedin-config-ui" +                                                              // 7
    "\n"                                                                                               // 8
  );                                                                                                   // 9
}                                                                                                      // 10
                                                                                                       // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/pauli_accounts-linkedin/linkedin.js                                                        //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
Accounts.oauth.registerService('linkedin');                                                            // 1
                                                                                                       // 2
if (Meteor.isClient) {                                                                                 // 3
  Meteor.loginWithLinkedIn = function(options, callback) {                                             // 4
    // support a callback without options                                                              // 5
    if (! callback && typeof options === "function") {                                                 // 6
      callback = options;                                                                              // 7
      options = null;                                                                                  // 8
    }                                                                                                  // 9
    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    LinkedIn.requestCredential(options, credentialRequestCompleteCallback);                            // 11
  };                                                                                                   // 12
} else {                                                                                               // 13
  Accounts.addAutopublishFields({                                                                      // 14
    forLoggedInUser: ['services.linkedin'],                                                            // 15
  });                                                                                                  // 16
}                                                                                                      // 17
                                                                                                       // 18
                                                                                                       // 19
                                                                                                       // 20
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['pauli:accounts-linkedin'] = {};

})();
