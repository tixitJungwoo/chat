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
var HTTP = Package.http.HTTP;
var Accounts = Package['accounts-base'].Accounts;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

var require = meteorInstall({"node_modules":{"meteor":{"steffo:meteor-accounts-saml":{"saml_client.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/steffo_meteor-accounts-saml/saml_client.js                                                             //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
/* globals cordova */if (!Accounts.saml) {                                                                         // 1
	Accounts.saml = {};                                                                                               // 4
} // Override the standard logout behaviour.                                                                       // 5
//                                                                                                                 // 8
// If we find a samlProvider, and we are using single                                                              // 9
// logout we will initiate logout from rocketchat via saml.                                                        // 10
// If not using single logout, we just do the standard logout.                                                     // 11
//                                                                                                                 // 12
// TODO: This may need some work as it is not clear if we are really                                               // 13
// logging out of the idp when doing the standard logout.                                                          // 14
                                                                                                                   //
                                                                                                                   //
var MeteorLogout = Meteor.logout;                                                                                  // 16
                                                                                                                   //
Meteor.logout = function () {                                                                                      // 18
	var samlService = ServiceConfiguration.configurations.findOne({                                                   // 19
		service: 'saml'                                                                                                  // 19
	});                                                                                                               // 19
                                                                                                                   //
	if (samlService) {                                                                                                // 20
		var provider = samlService.clientConfig && samlService.clientConfig.provider;                                    // 21
                                                                                                                   //
		if (provider) {                                                                                                  // 22
			if (samlService.idpSLORedirectURL) {                                                                            // 23
				return Meteor.logoutWithSaml({                                                                                 // 24
					provider: provider                                                                                            // 24
				});                                                                                                            // 24
			}                                                                                                               // 25
		}                                                                                                                // 26
	}                                                                                                                 // 27
                                                                                                                   //
	return MeteorLogout.apply(Meteor, arguments);                                                                     // 28
};                                                                                                                 // 29
                                                                                                                   //
var openCenteredPopup = function (url, width, height) {                                                            // 31
	var newwindow = void 0;                                                                                           // 32
                                                                                                                   //
	if (typeof cordova !== 'undefined' && typeof cordova.InAppBrowser !== 'undefined') {                              // 34
		newwindow = cordova.InAppBrowser.open(url, '_blank');                                                            // 35
		newwindow.closed = false;                                                                                        // 36
		var intervalId = setInterval(function () {                                                                       // 38
			newwindow.executeScript({                                                                                       // 39
				'code': 'document.getElementsByTagName("script")[0].textContent'                                               // 40
			}, function (data) {                                                                                            // 39
				if (data && data.length > 0 && data[0] === 'window.close()') {                                                 // 42
					newwindow.close();                                                                                            // 43
					newwindow.closed = true;                                                                                      // 44
				}                                                                                                              // 45
			});                                                                                                             // 46
		}, 100);                                                                                                         // 47
		newwindow.addEventListener('exit', function () {                                                                 // 49
			clearInterval(intervalId);                                                                                      // 50
		});                                                                                                              // 51
	} else {                                                                                                          // 52
		var screenX = typeof window.screenX !== 'undefined' ? window.screenX : window.screenLeft;                        // 53
		var screenY = typeof window.screenY !== 'undefined' ? window.screenY : window.screenTop;                         // 54
		var outerWidth = typeof window.outerWidth !== 'undefined' ? window.outerWidth : document.body.clientWidth;       // 55
		var outerHeight = typeof window.outerHeight !== 'undefined' ? window.outerHeight : document.body.clientHeight - 22; // XXX what is the 22?
		// Use `outerWidth - width` and `outerHeight - height` for help in                                               // 59
		// positioning the popup centered relative to the current window                                                 // 60
                                                                                                                   //
		var left = screenX + (outerWidth - width) / 2;                                                                   // 61
		var top = screenY + (outerHeight - height) / 2;                                                                  // 62
		var features = "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top + ",scrollbars=yes";     // 63
		newwindow = window.open(url, 'Login', features);                                                                 // 66
                                                                                                                   //
		if (newwindow.focus) {                                                                                           // 67
			newwindow.focus();                                                                                              // 68
		}                                                                                                                // 69
	}                                                                                                                 // 70
                                                                                                                   //
	return newwindow;                                                                                                 // 71
};                                                                                                                 // 72
                                                                                                                   //
Accounts.saml.initiateLogin = function (options, callback, dimensions) {                                           // 74
	// default dimensions that worked well for facebook and google                                                    // 75
	var popup = openCenteredPopup(Meteor.absoluteUrl("_saml/authorize/" + options.provider + "/" + options.credentialToken), dimensions && dimensions.width || 650, dimensions && dimensions.height || 500);
	var checkPopupOpen = setInterval(function () {                                                                    // 79
		var popupClosed = void 0;                                                                                        // 80
                                                                                                                   //
		try {                                                                                                            // 81
			// Fix for #328 - added a second test criteria (popup.closed === undefined)                                     // 82
			// to humour this Android quirk:                                                                                // 83
			// http://code.google.com/p/android/issues/detail?id=21061                                                      // 84
			popupClosed = popup.closed || popup.closed === undefined;                                                       // 85
		} catch (e) {                                                                                                    // 86
			// For some unknown reason, IE9 (and others?) sometimes (when                                                   // 87
			// the popup closes too quickly?) throws 'SCRIPT16386: No such                                                  // 88
			// interface supported' when trying to read 'popup.closed'. Try                                                 // 89
			// again in 100ms.                                                                                              // 90
			return;                                                                                                         // 91
		}                                                                                                                // 92
                                                                                                                   //
		if (popupClosed) {                                                                                               // 94
			clearInterval(checkPopupOpen);                                                                                  // 95
			callback(options.credentialToken);                                                                              // 96
		}                                                                                                                // 97
	}, 100);                                                                                                          // 98
};                                                                                                                 // 99
                                                                                                                   //
Meteor.loginWithSaml = function (options, callback) {                                                              // 102
	options = options || {};                                                                                          // 103
	var credentialToken = Random.id();                                                                                // 104
	options.credentialToken = credentialToken;                                                                        // 105
	Accounts.saml.initiateLogin(options, function () /*error, result*/{                                               // 107
		Accounts.callLoginMethod({                                                                                       // 108
			methodArguments: [{                                                                                             // 109
				saml: true,                                                                                                    // 110
				credentialToken: credentialToken                                                                               // 111
			}],                                                                                                             // 109
			userCallback: callback                                                                                          // 113
		});                                                                                                              // 108
	});                                                                                                               // 115
};                                                                                                                 // 116
                                                                                                                   //
Meteor.logoutWithSaml = function (options /*, callback*/) {                                                        // 118
	//Accounts.saml.idpInitiatedSLO(options, callback);                                                               // 119
	Meteor.call('samlLogout', options.provider, function (err, result) {                                              // 120
		if (err || !result) {                                                                                            // 121
			MeteorLogout.apply(Meteor);                                                                                     // 122
			return;                                                                                                         // 123
		} // A nasty bounce: 'result' has the SAML LogoutRequest but we need a proper 302 to redirected from the server.
		//window.location.replace(Meteor.absoluteUrl('_saml/sloRedirect/' + options.provider + '/?redirect='+result));   // 126
                                                                                                                   //
                                                                                                                   //
		window.location.replace(Meteor.absoluteUrl("_saml/sloRedirect/" + options.provider + "/?redirect=" + encodeURIComponent(result)));
	});                                                                                                               // 128
};                                                                                                                 // 129
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/steffo:meteor-accounts-saml/saml_client.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['steffo:meteor-accounts-saml'] = {};

})();
