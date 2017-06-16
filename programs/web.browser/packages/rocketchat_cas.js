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
var _ = Package.underscore._;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:cas":{"cas_client.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/rocketchat_cas/cas_client.js                                                                      //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var openCenteredPopup = function (url, width, height) {                                                       // 1
	var screenX = typeof window.screenX !== 'undefined' ? window.screenX : window.screenLeft;                    // 3
	var screenY = typeof window.screenY !== 'undefined' ? window.screenY : window.screenTop;                     // 4
	var outerWidth = typeof window.outerWidth !== 'undefined' ? window.outerWidth : document.body.clientWidth;   // 5
	var outerHeight = typeof window.outerHeight !== 'undefined' ? window.outerHeight : document.body.clientHeight - 22; // XXX what is the 22?
	// Use `outerWidth - width` and `outerHeight - height` for help in                                           // 9
	// positioning the popup centered relative to the current window                                             // 10
                                                                                                              //
	var left = screenX + (outerWidth - width) / 2;                                                               // 11
	var top = screenY + (outerHeight - height) / 2;                                                              // 12
	var features = "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top + ",scrollbars=yes";
	var newwindow = window.open(url, 'Login', features);                                                         // 15
                                                                                                              //
	if (newwindow.focus) {                                                                                       // 16
		newwindow.focus();                                                                                          // 17
	}                                                                                                            // 18
                                                                                                              //
	return newwindow;                                                                                            // 20
};                                                                                                            // 21
                                                                                                              //
Meteor.loginWithCas = function (options, callback) {                                                          // 23
	options = options || {};                                                                                     // 24
	var credentialToken = Random.id();                                                                           // 26
	var login_url = RocketChat.settings.get('CAS_login_url');                                                    // 27
	var popup_width = RocketChat.settings.get('CAS_popup_width');                                                // 28
	var popup_height = RocketChat.settings.get('CAS_popup_height');                                              // 29
                                                                                                              //
	if (!login_url) {                                                                                            // 31
		return;                                                                                                     // 32
	}                                                                                                            // 33
                                                                                                              //
	var appUrl = Meteor.absoluteUrl().replace(/\/$/, '') + __meteor_runtime_config__.ROOT_URL_PATH_PREFIX;       // 35
                                                                                                              //
	var loginUrl = login_url + "?service=" + appUrl + "/_cas/" + credentialToken;                                // 36
	var popup = openCenteredPopup(loginUrl, popup_width || 800, popup_height || 600); // Fix for #3200: monitor the popup differently if it's Cordova
                                                                                                              //
	if (Meteor.isCordova) {                                                                                      // 45
		// Check the URL when each page finishes loading, and if the URL contains "ticket", then close the popup because CAS has finished
		popup.addEventListener('loadstop', function (e) {                                                           // 47
			if (e.url.indexOf('?ticket=') !== -1) {                                                                    // 48
				popup.close();                                                                                            // 49
			}                                                                                                          // 50
		});                                                                                                         // 51
		popup.addEventListener('exit', function () {                                                                // 52
			// check auth on server.                                                                                   // 53
			Accounts.callLoginMethod({                                                                                 // 54
				methodArguments: [{                                                                                       // 55
					cas: {                                                                                                   // 55
						credentialToken: credentialToken                                                                        // 55
					}                                                                                                        // 55
				}],                                                                                                       // 55
				userCallback: callback                                                                                    // 56
			});                                                                                                        // 54
		});                                                                                                         // 58
	} else {                                                                                                     // 59
		var checkPopupOpen = setInterval(function () {                                                              // 60
			var popupClosed = void 0;                                                                                  // 61
                                                                                                              //
			try {                                                                                                      // 62
				// Fix for #328 - added a second test criteria (popup.closed === undefined)                               // 63
				// to humour this Android quirk:                                                                          // 64
				// http://code.google.com/p/android/issues/detail?id=21061                                                // 65
				popupClosed = popup.closed || popup.closed === undefined;                                                 // 66
			} catch (e) {                                                                                              // 67
				// For some unknown reason, IE9 (and others?) sometimes (when                                             // 68
				// the popup closes too quickly?) throws "SCRIPT16386: No such                                            // 69
				// interface supported" when trying to read 'popup.closed'. Try                                           // 70
				// again in 100ms.                                                                                        // 71
				return;                                                                                                   // 72
			}                                                                                                          // 73
                                                                                                              //
			if (popupClosed) {                                                                                         // 75
				clearInterval(checkPopupOpen); // check auth on server.                                                   // 76
                                                                                                              //
				Accounts.callLoginMethod({                                                                                // 79
					methodArguments: [{                                                                                      // 80
						cas: {                                                                                                  // 80
							credentialToken: credentialToken                                                                       // 80
						}                                                                                                       // 80
					}],                                                                                                      // 80
					userCallback: callback                                                                                   // 81
				});                                                                                                       // 79
			}                                                                                                          // 83
		}, 100);                                                                                                    // 84
	}                                                                                                            // 85
};                                                                                                            // 86
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:cas/cas_client.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:cas'] = {};

})();
