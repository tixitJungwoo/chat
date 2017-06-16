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
if (Package['accounts-ui'] && !Package.hasOwnProperty('linkedin-config-ui')) {
  console.warn(
    "Note: You're using accounts-ui and accounts-linkedin,\n" +
    "but didn't install the configuration UI for the LinkedIn\n" +
    "OAuth. You can install it with:\n" +
    "\n" +
    "    meteor add linkedin-config-ui" +
    "\n"
  );
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/pauli_accounts-linkedin/linkedin.js                                                        //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
Accounts.oauth.registerService('linkedin');

if (Meteor.isClient) {
  Meteor.loginWithLinkedIn = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }
    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    LinkedIn.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.linkedin'],
  });
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['pauli:accounts-linkedin'] = {};

})();
