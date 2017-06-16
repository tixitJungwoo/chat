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
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var check = Package.check.check;
var Match = Package.check.Match;
var OAuth = Package.oauth.OAuth;
var Oauth = Package.oauth.Oauth;
var _ = Package.underscore._;
var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;
var s = Package['underscorestring:underscore.string'].s;
var Template = Package['templating-runtime'].Template;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Accounts = Package['accounts-base'].Accounts;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var CustomOAuth;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:custom-oauth":{"custom_oauth_client.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/rocketchat_custom-oauth/custom_oauth_client.js                                             //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                //
                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                       //
                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }      //
                                                                                                       //
module.export({                                                                                        // 1
	CustomOAuth: function () {                                                                            // 1
		return CustomOAuth;                                                                                  // 1
	}                                                                                                     // 1
});                                                                                                    // 1
                                                                                                       //
var CustomOAuth = function () {                                                                        //
	function CustomOAuth(name, options) {                                                                 // 9
		(0, _classCallCheck3.default)(this, CustomOAuth);                                                    // 9
		this.name = name;                                                                                    // 10
                                                                                                       //
		if (!Match.test(this.name, String)) {                                                                // 11
			throw new Meteor.Error('CustomOAuth: Name is required and must be String');                         // 12
		}                                                                                                    // 13
                                                                                                       //
		this.configure(options);                                                                             // 15
		Accounts.oauth.registerService(this.name);                                                           // 17
		this.configureLogin();                                                                               // 19
	}                                                                                                     // 20
                                                                                                       //
	CustomOAuth.prototype.configure = function () {                                                       //
		function configure(options) {                                                                        //
			if (!Match.test(options, Object)) {                                                                 // 23
				throw new Meteor.Error('CustomOAuth: Options is required and must be Object');                     // 24
			}                                                                                                   // 25
                                                                                                       //
			if (!Match.test(options.serverURL, String)) {                                                       // 27
				throw new Meteor.Error('CustomOAuth: Options.serverURL is required and must be String');           // 28
			}                                                                                                   // 29
                                                                                                       //
			if (!Match.test(options.authorizePath, String)) {                                                   // 31
				options.authorizePath = '/oauth/authorize';                                                        // 32
			}                                                                                                   // 33
                                                                                                       //
			if (!Match.test(options.scope, String)) {                                                           // 35
				options.scope = 'openid';                                                                          // 36
			}                                                                                                   // 37
                                                                                                       //
			this.serverURL = options.serverURL;                                                                 // 39
			this.authorizePath = options.authorizePath;                                                         // 40
			this.scope = options.scope;                                                                         // 41
                                                                                                       //
			if (!/^https?:\/\/.+/.test(this.authorizePath)) {                                                   // 43
				this.authorizePath = this.serverURL + this.authorizePath;                                          // 44
			}                                                                                                   // 45
		}                                                                                                    // 46
                                                                                                       //
		return configure;                                                                                    //
	}();                                                                                                  //
                                                                                                       //
	CustomOAuth.prototype.configureLogin = function () {                                                  //
		function configureLogin() {                                                                          //
			var _this = this;                                                                                   // 48
                                                                                                       //
			var loginWithService = "loginWith" + s.capitalize(this.name);                                       // 49
                                                                                                       //
			Meteor[loginWithService] = function (options, callback) {                                           // 51
				// support a callback without options                                                              // 52
				if (!callback && typeof options === 'function') {                                                  // 53
					callback = options;                                                                               // 54
					options = null;                                                                                   // 55
				}                                                                                                  // 56
                                                                                                       //
				var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
                                                                                                       //
				_this.requestCredential(options, credentialRequestCompleteCallback);                               // 59
			};                                                                                                  // 60
		}                                                                                                    // 61
                                                                                                       //
		return configureLogin;                                                                               //
	}();                                                                                                  //
                                                                                                       //
	CustomOAuth.prototype.requestCredential = function () {                                               //
		function requestCredential(options, credentialRequestCompleteCallback) {                             //
			// support both (options, callback) and (callback).                                                 // 64
			if (!credentialRequestCompleteCallback && typeof options === 'function') {                          // 65
				credentialRequestCompleteCallback = options;                                                       // 66
				options = {};                                                                                      // 67
			}                                                                                                   // 68
                                                                                                       //
			var config = ServiceConfiguration.configurations.findOne({                                          // 70
				service: this.name                                                                                 // 70
			});                                                                                                 // 70
                                                                                                       //
			if (!config) {                                                                                      // 71
				if (credentialRequestCompleteCallback) {                                                           // 72
					credentialRequestCompleteCallback(new ServiceConfiguration.ConfigError());                        // 73
				}                                                                                                  // 74
                                                                                                       //
				return;                                                                                            // 75
			}                                                                                                   // 76
                                                                                                       //
			var credentialToken = Random.secret();                                                              // 78
                                                                                                       //
			var loginStyle = OAuth._loginStyle(this.name, config, options);                                     // 79
                                                                                                       //
			var separator = this.authorizePath.indexOf('?') !== -1 ? '&' : '?';                                 // 81
			var loginUrl = "" + this.authorizePath + separator + "client_id=" + config.clientId + "&redirect_uri=" + OAuth._redirectUri(this.name, config) + "&response_type=code" + ("&state=" + OAuth._stateParam(loginStyle, credentialToken, options.redirectUrl) + "&scope=" + this.scope);
			OAuth.launchLogin({                                                                                 // 90
				loginService: this.name,                                                                           // 91
				loginStyle: loginStyle,                                                                            // 92
				loginUrl: loginUrl,                                                                                // 93
				credentialRequestCompleteCallback: credentialRequestCompleteCallback,                              // 94
				credentialToken: credentialToken,                                                                  // 95
				popupOptions: {                                                                                    // 96
					width: 900,                                                                                       // 97
					height: 450                                                                                       // 98
				}                                                                                                  // 96
			});                                                                                                 // 90
		}                                                                                                    // 101
                                                                                                       //
		return requestCredential;                                                                            //
	}();                                                                                                  //
                                                                                                       //
	return CustomOAuth;                                                                                   //
}();                                                                                                   //
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
var exports = require("./node_modules/meteor/rocketchat:custom-oauth/custom_oauth_client.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['rocketchat:custom-oauth'] = exports, {
  CustomOAuth: CustomOAuth
});

})();
