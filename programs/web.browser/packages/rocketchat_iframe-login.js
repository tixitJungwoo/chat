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
var FlowRouter = Package['kadira:flow-router'].FlowRouter;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var Accounts = Package['accounts-base'].Accounts;
var _ = Package.underscore._;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var HTTP = Package.http.HTTP;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var check = Package.check.check;
var Match = Package.check.Match;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:iframe-login":{"iframe_client.js":function(require){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
// packages/rocketchat_iframe-login/iframe_client.js                                                //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                    //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                             //
                                                                                                    //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                    //
                                                                                                    //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }   //
                                                                                                    //
/* globals Accounts, Tracker, ReactiveVar, FlowRouter, Accounts, HTTP, facebookConnectPlugin, TwitterConnect, OAuth */var _unstoreLoginToken = Accounts._unstoreLoginToken;
                                                                                                    //
Accounts._unstoreLoginToken = function () {                                                         // 4
	RocketChat.iframeLogin.tryLogin();                                                                 // 5
                                                                                                    //
	_unstoreLoginToken.apply(Accounts, arguments);                                                     // 6
};                                                                                                  // 7
                                                                                                    //
var IframeLogin = function () {                                                                     //
	function IframeLogin() {                                                                           // 10
		var _this = this;                                                                                 // 10
                                                                                                    //
		(0, _classCallCheck3.default)(this, IframeLogin);                                                 // 10
		this.enabled = false;                                                                             // 11
		this.reactiveIframeUrl = new ReactiveVar();                                                       // 12
		this.reactiveEnabled = new ReactiveVar();                                                         // 13
		this.iframeUrl = undefined;                                                                       // 14
		this.apiUrl = undefined;                                                                          // 15
		this.apiMethod = undefined;                                                                       // 16
		Tracker.autorun(function (c) {                                                                    // 18
			_this.enabled = RocketChat.settings.get('Accounts_iframe_enabled');                              // 19
                                                                                                    //
			_this.reactiveEnabled.set(_this.enabled);                                                        // 20
                                                                                                    //
			_this.iframeUrl = RocketChat.settings.get('Accounts_iframe_url');                                // 22
			_this.apiUrl = RocketChat.settings.get('Accounts_Iframe_api_url');                               // 23
			_this.apiMethod = RocketChat.settings.get('Accounts_Iframe_api_method');                         // 24
                                                                                                    //
			if (_this.enabled === false) {                                                                   // 26
				return c.stop();                                                                                // 27
			}                                                                                                // 28
                                                                                                    //
			if (_this.enabled === true && _this.iframeUrl && _this.apiUrl && _this.apiMethod) {              // 30
				c.stop();                                                                                       // 31
                                                                                                    //
				if (!Accounts._storedLoginToken()) {                                                            // 32
					_this.tryLogin(function () {});                                                                // 33
				}                                                                                               // 34
			}                                                                                                // 35
		});                                                                                               // 36
	}                                                                                                  // 37
                                                                                                    //
	IframeLogin.prototype.tryLogin = function () {                                                     //
		function tryLogin(callback) {                                                                     //
			var _this2 = this;                                                                               // 39
                                                                                                    //
			if (!this.enabled) {                                                                             // 40
				return;                                                                                         // 41
			}                                                                                                // 42
                                                                                                    //
			if (!this.iframeUrl || !this.apiUrl || !this.apiMethod) {                                        // 44
				return;                                                                                         // 45
			}                                                                                                // 46
                                                                                                    //
			console.log('tryLogin');                                                                         // 48
			var options = {                                                                                  // 49
				beforeSend: function (xhr) {                                                                    // 50
					xhr.withCredentials = true;                                                                    // 51
				}                                                                                               // 52
			};                                                                                               // 49
			var iframeUrl = this.iframeUrl;                                                                  // 55
			var separator = '?';                                                                             // 56
                                                                                                    //
			if (iframeUrl.indexOf('?') > -1) {                                                               // 57
				separator = '&';                                                                                // 58
			}                                                                                                // 59
                                                                                                    //
			if (window.cordova) {                                                                            // 61
				iframeUrl += separator + "client=cordova";                                                      // 62
			} else if (navigator.userAgent.indexOf('Electron') > -1) {                                       // 63
				iframeUrl += separator + "client=electron";                                                     // 64
			}                                                                                                // 65
                                                                                                    //
			HTTP.call(this.apiMethod, this.apiUrl, options, function (error, result) {                       // 67
				console.log(error, result);                                                                     // 68
                                                                                                    //
				if (result && result.data && result.data.token) {                                               // 69
					_this2.loginWithToken(result.data, function (error, result) {                                  // 70
						if (error) {                                                                                  // 71
							_this2.reactiveIframeUrl.set(iframeUrl);                                                     // 72
						} else {                                                                                      // 73
							_this2.reactiveIframeUrl.set();                                                              // 74
						}                                                                                             // 75
                                                                                                    //
						callback(error, result);                                                                      // 76
					});                                                                                            // 77
				} else {                                                                                        // 78
					_this2.reactiveIframeUrl.set(iframeUrl);                                                       // 79
                                                                                                    //
					callback(error, result);                                                                       // 80
				}                                                                                               // 81
			});                                                                                              // 82
		}                                                                                                 // 83
                                                                                                    //
		return tryLogin;                                                                                  //
	}();                                                                                               //
                                                                                                    //
	IframeLogin.prototype.loginWithToken = function () {                                               //
		function loginWithToken(token, callback) {                                                        //
			if (!this.enabled) {                                                                             // 86
				return;                                                                                         // 87
			}                                                                                                // 88
                                                                                                    //
			if (Match.test(token, String)) {                                                                 // 90
				token = {                                                                                       // 91
					token: token                                                                                   // 92
				};                                                                                              // 91
			}                                                                                                // 94
                                                                                                    //
			console.log('loginWithToken');                                                                   // 96
                                                                                                    //
			if (token.loginToken) {                                                                          // 98
				return Meteor.loginWithToken(token.loginToken, callback);                                       // 99
			}                                                                                                // 100
                                                                                                    //
			Accounts.callLoginMethod({                                                                       // 102
				methodArguments: [{                                                                             // 103
					iframe: true,                                                                                  // 104
					token: token.token                                                                             // 105
				}],                                                                                             // 103
				userCallback: callback                                                                          // 107
			});                                                                                              // 102
		}                                                                                                 // 109
                                                                                                    //
		return loginWithToken;                                                                            //
	}();                                                                                               //
                                                                                                    //
	return IframeLogin;                                                                                //
}();                                                                                                //
                                                                                                    //
RocketChat.iframeLogin = new IframeLogin();                                                         // 112
                                                                                                    //
var requestCredential = function (serviceName) {                                                    // 114
	var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};              // 114
	var callback = arguments[2];                                                                       // 114
	window[serviceName].requestCredential(options, function (tokenOrError) {                           // 115
		if (tokenOrError && tokenOrError instanceof Error) {                                              // 116
			return callback(tokenOrError);                                                                   // 117
		}                                                                                                 // 118
                                                                                                    //
		var secret = OAuth._retrieveCredentialSecret(tokenOrError);                                       // 120
                                                                                                    //
		if (!secret) {                                                                                    // 122
			return callback(new Error('Invalid secret'));                                                    // 123
		}                                                                                                 // 124
                                                                                                    //
		Meteor.call('OAuth.retrieveCredential', tokenOrError, secret, function (error, credential) {      // 126
			if (!credential) {                                                                               // 127
				return callback(new Error('Credential not found'));                                             // 128
			}                                                                                                // 129
                                                                                                    //
			callback(credential.serviceData, tokenOrError, secret);                                          // 131
		});                                                                                               // 132
	});                                                                                                // 133
};                                                                                                  // 134
                                                                                                    //
window.addEventListener('message', function (e) {                                                   // 136
	if (!_.isObject(e.data)) {                                                                         // 137
		return;                                                                                           // 138
	}                                                                                                  // 139
                                                                                                    //
	switch (e.data.event) {                                                                            // 141
		case 'try-iframe-login':                                                                          // 142
			RocketChat.iframeLogin.tryLogin(function (error) {                                               // 143
				if (error) {                                                                                    // 144
					e.source.postMessage({                                                                         // 145
						event: 'login-error',                                                                         // 146
						response: error.message                                                                       // 147
					}, e.origin);                                                                                  // 145
				}                                                                                               // 149
			});                                                                                              // 150
			break;                                                                                           // 151
                                                                                                    //
		case 'login-with-token':                                                                          // 153
			RocketChat.iframeLogin.loginWithToken(e.data, function (error) {                                 // 154
				if (error) {                                                                                    // 155
					e.source.postMessage({                                                                         // 156
						event: 'login-error',                                                                         // 157
						response: error.message                                                                       // 158
					}, e.origin);                                                                                  // 156
				}                                                                                               // 160
			});                                                                                              // 161
			break;                                                                                           // 162
                                                                                                    //
		case 'call-facebook-login':                                                                       // 164
			var fbLoginSuccess = function (response) {                                                       // 165
				console.log('facebook-login-success', response);                                                // 166
				e.source.postMessage({                                                                          // 167
					event: 'facebook-login-success',                                                               // 168
					response: response // authResponse: Object                                                     // 169
					// 	accessToken: "a7s6d8a76s8d7..."                                                            // 171
					// 	expiresIn: "5172793"                                                                       // 172
					// 	secret: "..."                                                                              // 173
					// 	session_key: true                                                                          // 174
					// 	sig: "..."                                                                                 // 175
					// userID: "675676576"                                                                         // 176
					// status: "connected"                                                                         // 177
                                                                                                    //
				}, e.origin);                                                                                   // 167
			};                                                                                               // 179
                                                                                                    //
			var fbLoginError = function (error, response) {                                                  // 181
				console.log('facebook-login-error', error, response);                                           // 182
				e.source.postMessage({                                                                          // 183
					event: 'facebook-login-error',                                                                 // 184
					error: error,                                                                                  // 185
					response: response                                                                             // 186
				}, e.origin);                                                                                   // 183
			};                                                                                               // 188
                                                                                                    //
			if (typeof window.facebookConnectPlugin === 'undefined') {                                       // 190
				requestCredential('Facebook', {}, function (serviceData, token, secret) {                       // 191
					if (serviceData && serviceData instanceof Error) {                                             // 192
						return fbLoginError('poup-login-error', serviceData);                                         // 193
					} else {                                                                                       // 194
						fbLoginSuccess({                                                                              // 195
							authResponse: {                                                                              // 196
								accessToken: serviceData.accessToken,                                                       // 197
								expiresIn: serviceData.expiresAt,                                                           // 198
								secret: secret                                                                              // 199
							},                                                                                           // 196
							userID: serviceData.id                                                                       // 201
						});                                                                                           // 195
					}                                                                                              // 203
				});                                                                                             // 204
				break;                                                                                          // 205
			}                                                                                                // 206
                                                                                                    //
			facebookConnectPlugin.getLoginStatus(function (response) {                                       // 208
				if (response.status === 'connected') {                                                          // 209
					return fbLoginSuccess(response);                                                               // 210
				}                                                                                               // 211
                                                                                                    //
				facebookConnectPlugin.login(e.data.permissions, fbLoginSuccess, function (error) {              // 213
					return fbLoginError('login-error', error);                                                     // 214
				});                                                                                             // 215
			}, function (error) {                                                                            // 216
				return fbLoginError('get-status-error', error);                                                 // 217
			});                                                                                              // 218
			break;                                                                                           // 219
                                                                                                    //
		case 'call-twitter-login':                                                                        // 221
			var twitterLoginSuccess = function (response) {                                                  // 222
				console.log('twitter-login-success', response);                                                 // 223
				e.source.postMessage({                                                                          // 224
					event: 'twitter-login-success',                                                                // 225
					response: response // {                                                                        // 226
					// 	"userName": "orodrigok",                                                                   // 228
					// 	"userId": 293123,                                                                          // 229
					// 	"secret": "asdua09sud",                                                                    // 230
					// 	"token": "2jh3k1j2h3"                                                                      // 231
					// }                                                                                           // 232
                                                                                                    //
				}, e.origin);                                                                                   // 224
			};                                                                                               // 234
                                                                                                    //
			var twitterLoginFailure = function (error) {                                                     // 236
				console.log('twitter-login-error', error);                                                      // 237
				e.source.postMessage({                                                                          // 238
					event: 'twitter-login-error',                                                                  // 239
					error: error                                                                                   // 240
				}, e.origin);                                                                                   // 238
			};                                                                                               // 242
                                                                                                    //
			if (typeof window.TwitterConnect === 'undefined') {                                              // 244
				requestCredential('Twitter', {}, function (serviceData) {                                       // 245
					if (serviceData && serviceData instanceof Error) {                                             // 246
						return twitterLoginFailure('poup-login-error', serviceData);                                  // 247
					} else {                                                                                       // 248
						twitterLoginSuccess({                                                                         // 249
							userName: serviceData.screenName,                                                            // 250
							userId: serviceData.id,                                                                      // 251
							secret: serviceData.accessTokenSecret,                                                       // 252
							token: serviceData.accessToken                                                               // 253
						});                                                                                           // 249
					}                                                                                              // 255
				});                                                                                             // 256
				break;                                                                                          // 257
			}                                                                                                // 258
                                                                                                    //
			TwitterConnect.login(twitterLoginSuccess, twitterLoginFailure);                                  // 260
			break;                                                                                           // 261
                                                                                                    //
		case 'call-google-login':                                                                         // 263
			var googleLoginSuccess = function (response) {                                                   // 264
				if (typeof response.oauthToken === 'string' && typeof response.accessToken !== 'string') {      // 265
					response.accessToken = response.oauthToken;                                                    // 266
				}                                                                                               // 267
                                                                                                    //
				console.log('google-login-success', response);                                                  // 269
				e.source.postMessage({                                                                          // 270
					event: 'google-login-success',                                                                 // 271
					response: response // {                                                                        // 272
					// 	"email": "rodrigoknascimento@gmail.com",                                                   // 274
					// 	"userId": "1082039180239",                                                                 // 275
					// 	"displayName": "Rodrigo Nascimento",                                                       // 276
					// 	"gender": "male",                                                                          // 277
					// 	"imageUrl": "https://lh5.googleusercontent.com/-shUpniJA480/AAAAAAAAAAI/AAAAAAAAAqY/_B8oyS8yBw0/photo.jpg?sz=50",
					// 	"givenName": "Rodrigo",                                                                    // 279
					// 	"familyName": "Nascimento",                                                                // 280
					// 	"ageRangeMin": 21,                                                                         // 281
					// 	"accessToken": "123198273kajhsdh1892h"                                                     // 282
					// }                                                                                           // 283
                                                                                                    //
				}, e.origin);                                                                                   // 270
			};                                                                                               // 285
                                                                                                    //
			var googleLoginFailure = function (error) {                                                      // 287
				console.log('google-login-error', error);                                                       // 288
				e.source.postMessage({                                                                          // 289
					event: 'google-login-error',                                                                   // 290
					error: error                                                                                   // 291
				}, e.origin);                                                                                   // 289
			};                                                                                               // 293
                                                                                                    //
			if (typeof window.plugins === 'undefined' || typeof window.plugins.googleplus === 'undefined') {
				requestCredential('Google', {}, function (serviceData) {                                        // 296
					if (serviceData && serviceData instanceof Error) {                                             // 297
						return googleLoginFailure('poup-login-error', serviceData);                                   // 298
					} else {                                                                                       // 299
						googleLoginSuccess({                                                                          // 300
							email: serviceData.email,                                                                    // 301
							userId: serviceData.id,                                                                      // 302
							displayName: serviceData.name,                                                               // 303
							gender: serviceData.gender,                                                                  // 304
							imageUrl: serviceData.picture,                                                               // 305
							givenName: serviceData.given_name,                                                           // 306
							familyName: serviceData.family_name,                                                         // 307
							accessToken: serviceData.accessToken                                                         // 308
						});                                                                                           // 300
					}                                                                                              // 310
				});                                                                                             // 311
				break;                                                                                          // 312
			}                                                                                                // 313
                                                                                                    //
			var options = {                                                                                  // 315
				scopes: e.data.scopes,                                                                          // 316
				webClientId: e.data.webClientId,                                                                // 317
				offline: true                                                                                   // 318
			};                                                                                               // 315
			window.plugins.googleplus.login(options, googleLoginSuccess, googleLoginFailure);                // 321
			break;                                                                                           // 322
	}                                                                                                  // 141
});                                                                                                 // 324
//////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:iframe-login/iframe_client.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:iframe-login'] = {};

})();
