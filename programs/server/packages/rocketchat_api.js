(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var _ = Package.underscore._;
var ECMAScript = Package.ecmascript.ECMAScript;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var Restivus = Package['nimble:restivus'].Restivus;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var Symbol = Package['ecmascript-runtime-server'].Symbol;
var Map = Package['ecmascript-runtime-server'].Map;
var Set = Package['ecmascript-runtime-server'].Set;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:api":{"server":{"api.js":function(require){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_api/server/api.js                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");                                                 //
                                                                                                                      //
var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);                                                        //
                                                                                                                      //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                     //
                                                                                                                      //
/* global Restivus */var API = function (_Restivus) {                                                                 // 1
	(0, _inherits3.default)(API, _Restivus);                                                                             //
                                                                                                                      //
	function API(properties) {                                                                                           // 3
		(0, _classCallCheck3.default)(this, API);                                                                           // 3
                                                                                                                      //
		var _this = (0, _possibleConstructorReturn3.default)(this, _Restivus.call(this, properties));                       // 3
                                                                                                                      //
		_this.logger = new Logger("API " + (properties.version ? properties.version : 'default') + " Logger", {});          // 5
		_this.authMethods = [];                                                                                             // 6
		_this.helperMethods = new Map();                                                                                    // 7
		_this.defaultFieldsToExclude = {                                                                                    // 8
			joinCode: 0,                                                                                                       // 9
			$loki: 0,                                                                                                          // 10
			meta: 0                                                                                                            // 11
		};                                                                                                                  // 8
                                                                                                                      //
		_this._config.defaultOptionsEndpoint = function () {                                                                // 14
			if (this.request.method === 'OPTIONS' && this.request.headers['access-control-request-method']) {                  // 15
				if (RocketChat.settings.get('API_Enable_CORS') === true) {                                                        // 16
					this.response.writeHead(200, {                                                                                   // 17
						'Access-Control-Allow-Origin': RocketChat.settings.get('API_CORS_Origin'),                                      // 18
						'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, X-User-Id, X-Auth-Token'       // 19
					});                                                                                                              // 17
				} else {                                                                                                          // 21
					this.response.writeHead(405);                                                                                    // 22
					this.response.write('CORS not enabled. Go to "Admin > General > REST Api" to enable it.');                       // 23
				}                                                                                                                 // 24
			} else {                                                                                                           // 25
				this.response.writeHead(404);                                                                                     // 26
			}                                                                                                                  // 27
                                                                                                                      //
			this.done();                                                                                                       // 29
		};                                                                                                                  // 30
                                                                                                                      //
		return _this;                                                                                                       // 3
	}                                                                                                                    // 31
                                                                                                                      //
	API.prototype.addAuthMethod = function () {                                                                          //
		function addAuthMethod(method) {                                                                                    //
			this.authMethods.push(method);                                                                                     // 34
		}                                                                                                                   // 35
                                                                                                                      //
		return addAuthMethod;                                                                                               //
	}();                                                                                                                 //
                                                                                                                      //
	API.prototype.success = function () {                                                                                //
		function success() {                                                                                                //
			var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};                               // 37
                                                                                                                      //
			if (_.isObject(result)) {                                                                                          // 38
				result.success = true;                                                                                            // 39
			}                                                                                                                  // 40
                                                                                                                      //
			return {                                                                                                           // 42
				statusCode: 200,                                                                                                  // 43
				body: result                                                                                                      // 44
			};                                                                                                                 // 42
		}                                                                                                                   // 46
                                                                                                                      //
		return success;                                                                                                     //
	}();                                                                                                                 //
                                                                                                                      //
	API.prototype.failure = function () {                                                                                //
		function failure(result, errorType) {                                                                               //
			if (_.isObject(result)) {                                                                                          // 49
				result.success = false;                                                                                           // 50
			} else {                                                                                                           // 51
				result = {                                                                                                        // 52
					success: false,                                                                                                  // 53
					error: result                                                                                                    // 54
				};                                                                                                                // 52
                                                                                                                      //
				if (errorType) {                                                                                                  // 57
					result.errorType = errorType;                                                                                    // 58
				}                                                                                                                 // 59
			}                                                                                                                  // 60
                                                                                                                      //
			return {                                                                                                           // 62
				statusCode: 400,                                                                                                  // 63
				body: result                                                                                                      // 64
			};                                                                                                                 // 62
		}                                                                                                                   // 66
                                                                                                                      //
		return failure;                                                                                                     //
	}();                                                                                                                 //
                                                                                                                      //
	API.prototype.unauthorized = function () {                                                                           //
		function unauthorized(msg) {                                                                                        //
			return {                                                                                                           // 70
				statusCode: 403,                                                                                                  // 71
				body: {                                                                                                           // 72
					success: false,                                                                                                  // 73
					error: msg ? msg : 'unauthorized'                                                                                // 74
				}                                                                                                                 // 72
			};                                                                                                                 // 70
		}                                                                                                                   // 77
                                                                                                                      //
		return unauthorized;                                                                                                //
	}();                                                                                                                 //
                                                                                                                      //
	API.prototype.addRoute = function () {                                                                               //
		function addRoute(routes, options, endpoints) {                                                                     //
			var _this2 = this;                                                                                                 // 79
                                                                                                                      //
			//Note: required if the developer didn't provide options                                                           // 80
			if (typeof endpoints === 'undefined') {                                                                            // 81
				endpoints = options;                                                                                              // 82
				options = {};                                                                                                     // 83
			} //Allow for more than one route using the same option and endpoints                                              // 84
                                                                                                                      //
                                                                                                                      //
			if (!_.isArray(routes)) {                                                                                          // 87
				routes = [routes];                                                                                                // 88
			}                                                                                                                  // 89
                                                                                                                      //
			routes.forEach(function (route) {                                                                                  // 91
				//Note: This is required due to Restivus calling `addRoute` in the constructor of itself                          // 92
				if (_this2.helperMethods) {                                                                                       // 93
					Object.keys(endpoints).forEach(function (method) {                                                               // 94
						if (typeof endpoints[method] === 'function') {                                                                  // 95
							endpoints[method] = {                                                                                          // 96
								action: endpoints[method]                                                                                     // 96
							};                                                                                                             // 96
						} //Add a try/catch for each much                                                                               // 97
                                                                                                                      //
                                                                                                                      //
						var originalAction = endpoints[method].action;                                                                  // 100
                                                                                                                      //
						endpoints[method].action = function () {                                                                        // 101
							this.logger.debug(this.request.method.toUpperCase() + ": " + this.request.url);                                // 102
							var result = void 0;                                                                                           // 103
                                                                                                                      //
							try {                                                                                                          // 104
								result = originalAction.apply(this);                                                                          // 105
							} catch (e) {                                                                                                  // 106
								this.logger.debug(method + " " + route + " threw an error:", e);                                              // 107
								return RocketChat.API.v1.failure(e.message, e.error);                                                         // 108
							}                                                                                                              // 109
                                                                                                                      //
							return result ? result : RocketChat.API.v1.success();                                                          // 111
						};                                                                                                              // 112
                                                                                                                      //
						for (var _iterator = _this2.helperMethods, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
							var _ref3;                                                                                                     // 114
                                                                                                                      //
							if (_isArray) {                                                                                                // 114
								if (_i >= _iterator.length) break;                                                                            // 114
								_ref3 = _iterator[_i++];                                                                                      // 114
							} else {                                                                                                       // 114
								_i = _iterator.next();                                                                                        // 114
								if (_i.done) break;                                                                                           // 114
								_ref3 = _i.value;                                                                                             // 114
							}                                                                                                              // 114
                                                                                                                      //
							var _ref = _ref3;                                                                                              // 114
                                                                                                                      //
							var _ref2 = (0, _slicedToArray3.default)(_ref, 2);                                                             // 114
                                                                                                                      //
							var name = _ref2[0];                                                                                           // 114
							var helperMethod = _ref2[1];                                                                                   // 114
							endpoints[method][name] = helperMethod;                                                                        // 115
						} //Allow the endpoints to make usage of the logger which respects the user's settings                          // 116
                                                                                                                      //
                                                                                                                      //
						endpoints[method].logger = _this2.logger;                                                                       // 119
					});                                                                                                              // 120
				}                                                                                                                 // 121
                                                                                                                      //
				_Restivus.prototype.addRoute.call(_this2, route, options, endpoints);                                             // 123
			});                                                                                                                // 124
		}                                                                                                                   // 125
                                                                                                                      //
		return addRoute;                                                                                                    //
	}();                                                                                                                 //
                                                                                                                      //
	return API;                                                                                                          //
}(Restivus);                                                                                                          //
                                                                                                                      //
RocketChat.API = {};                                                                                                  // 128
                                                                                                                      //
var getUserAuth = function () {                                                                                       // 130
	function _getUserAuth() {                                                                                            // 130
		var invalidResults = [undefined, null, false];                                                                      // 131
		return {                                                                                                            // 132
			token: 'services.resume.loginTokens.hashedToken',                                                                  // 133
			user: function () {                                                                                                // 134
				if (this.bodyParams && this.bodyParams.payload) {                                                                 // 135
					this.bodyParams = JSON.parse(this.bodyParams.payload);                                                           // 136
				}                                                                                                                 // 137
                                                                                                                      //
				for (var i = 0; i < RocketChat.API.v1.authMethods.length; i++) {                                                  // 139
					var method = RocketChat.API.v1.authMethods[i];                                                                   // 140
                                                                                                                      //
					if (typeof method === 'function') {                                                                              // 142
						var result = method.apply(this, arguments);                                                                     // 143
                                                                                                                      //
						if (!invalidResults.includes(result)) {                                                                         // 144
							return result;                                                                                                 // 145
						}                                                                                                               // 146
					}                                                                                                                // 147
				}                                                                                                                 // 148
                                                                                                                      //
				var token = void 0;                                                                                               // 150
                                                                                                                      //
				if (this.request.headers['x-auth-token']) {                                                                       // 151
					token = Accounts._hashLoginToken(this.request.headers['x-auth-token']);                                          // 152
				}                                                                                                                 // 153
                                                                                                                      //
				return {                                                                                                          // 155
					userId: this.request.headers['x-user-id'],                                                                       // 156
					token: token                                                                                                     // 157
				};                                                                                                                // 155
			}                                                                                                                  // 159
		};                                                                                                                  // 132
	}                                                                                                                    // 161
                                                                                                                      //
	return _getUserAuth;                                                                                                 // 130
}();                                                                                                                  // 130
                                                                                                                      //
RocketChat.API.v1 = new API({                                                                                         // 163
	version: 'v1',                                                                                                       // 164
	useDefaultAuth: true,                                                                                                // 165
	prettyJson: true,                                                                                                    // 166
	enableCors: false,                                                                                                   // 167
	auth: getUserAuth()                                                                                                  // 168
});                                                                                                                   // 163
RocketChat.API.default = new API({                                                                                    // 171
	useDefaultAuth: true,                                                                                                // 172
	prettyJson: true,                                                                                                    // 173
	enableCors: false,                                                                                                   // 174
	auth: getUserAuth()                                                                                                  // 175
});                                                                                                                   // 171
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"settings.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_api/server/settings.js                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
RocketChat.settings.addGroup('General', function () {                                                                 // 1
	this.section('REST API', function () {                                                                               // 2
		this.add('API_Upper_Count_Limit', 100, {                                                                            // 3
			type: 'int',                                                                                                       // 3
			"public": false                                                                                                    // 3
		});                                                                                                                 // 3
		this.add('API_Default_Count', 50, {                                                                                 // 4
			type: 'int',                                                                                                       // 4
			"public": false                                                                                                    // 4
		});                                                                                                                 // 4
		this.add('API_Allow_Infinite_Count', true, {                                                                        // 5
			type: 'boolean',                                                                                                   // 5
			"public": false                                                                                                    // 5
		});                                                                                                                 // 5
		this.add('API_Enable_Direct_Message_History_EndPoint', false, {                                                     // 6
			type: 'boolean',                                                                                                   // 6
			"public": false                                                                                                    // 6
		});                                                                                                                 // 6
		this.add('API_Enable_Shields', true, {                                                                              // 7
			type: 'boolean',                                                                                                   // 7
			"public": false                                                                                                    // 7
		});                                                                                                                 // 7
		this.add('API_Shield_Types', '*', {                                                                                 // 8
			type: 'string',                                                                                                    // 8
			"public": false,                                                                                                   // 8
			enableQuery: {                                                                                                     // 8
				_id: 'API_Enable_Shields',                                                                                        // 8
				value: true                                                                                                       // 8
			}                                                                                                                  // 8
		});                                                                                                                 // 8
		this.add('API_Enable_CORS', false, {                                                                                // 9
			type: 'boolean',                                                                                                   // 9
			"public": false                                                                                                    // 9
		});                                                                                                                 // 9
		this.add('API_CORS_Origin', '*', {                                                                                  // 10
			type: 'string',                                                                                                    // 10
			"public": false,                                                                                                   // 10
			enableQuery: {                                                                                                     // 10
				_id: 'API_Enable_CORS',                                                                                           // 10
				value: true                                                                                                       // 10
			}                                                                                                                  // 10
		});                                                                                                                 // 10
	});                                                                                                                  // 11
});                                                                                                                   // 12
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"v1":{"helpers":{"getPaginationItems.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_api/server/v1/helpers/getPaginationItems.js                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// If the count query param is higher than the "API_Upper_Count_Limit" setting, then we limit that                    // 1
// If the count query param isn't defined, then we set it to the "API_Default_Count" setting                          // 2
// If the count is zero, then that means unlimited and is only allowed if the setting "API_Allow_Infinite_Count" is true
RocketChat.API.v1.helperMethods.set('getPaginationItems', function () {                                               // 5
	function _getPaginationItems() {                                                                                     // 5
		var hardUpperLimit = RocketChat.settings.get('API_Upper_Count_Limit') <= 0 ? 100 : RocketChat.settings.get('API_Upper_Count_Limit');
		var defaultCount = RocketChat.settings.get('API_Default_Count') <= 0 ? 50 : RocketChat.settings.get('API_Default_Count');
		var offset = this.queryParams.offset ? parseInt(this.queryParams.offset) : 0;                                       // 8
		var count = defaultCount; // Ensure count is an appropiate amount                                                   // 9
                                                                                                                      //
		if (typeof this.queryParams.count !== 'undefined') {                                                                // 12
			count = parseInt(this.queryParams.count);                                                                          // 13
		} else {                                                                                                            // 14
			count = defaultCount;                                                                                              // 15
		}                                                                                                                   // 16
                                                                                                                      //
		if (count > hardUpperLimit) {                                                                                       // 18
			count = hardUpperLimit;                                                                                            // 19
		}                                                                                                                   // 20
                                                                                                                      //
		if (count === 0 && !RocketChat.settings.get('API_Allow_Infinite_Count')) {                                          // 22
			count = defaultCount;                                                                                              // 23
		}                                                                                                                   // 24
                                                                                                                      //
		return {                                                                                                            // 26
			offset: offset,                                                                                                    // 27
			count: count                                                                                                       // 28
		};                                                                                                                  // 26
	}                                                                                                                    // 30
                                                                                                                      //
	return _getPaginationItems;                                                                                          // 5
}());                                                                                                                 // 5
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getUserFromParams.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_api/server/v1/helpers/getUserFromParams.js                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
//Convenience method, almost need to turn it into a middleware of sorts                                               // 1
RocketChat.API.v1.helperMethods.set('getUserFromParams', function () {                                                // 2
	function _getUserFromParams() {                                                                                      // 2
		var doesntExist = {                                                                                                 // 3
			_doesntExist: true                                                                                                 // 3
		};                                                                                                                  // 3
		var user = void 0;                                                                                                  // 4
                                                                                                                      //
		switch (this.request.method) {                                                                                      // 6
			case 'POST':                                                                                                       // 7
			case 'PUT':                                                                                                        // 8
				if (this.bodyParams.userId && this.bodyParams.userId.trim()) {                                                    // 9
					user = RocketChat.models.Users.findOneById(this.bodyParams.userId) || doesntExist;                               // 10
				} else if (this.bodyParams.username && this.bodyParams.username.trim()) {                                         // 11
					user = RocketChat.models.Users.findOneByUsername(this.bodyParams.username) || doesntExist;                       // 12
				} else if (this.bodyParams.user && this.bodyParams.user.trim()) {                                                 // 13
					user = RocketChat.models.Users.findOneByUsername(this.bodyParams.user) || doesntExist;                           // 14
				}                                                                                                                 // 15
                                                                                                                      //
				break;                                                                                                            // 16
                                                                                                                      //
			default:                                                                                                           // 17
				if (this.queryParams.userId && this.queryParams.userId.trim()) {                                                  // 18
					user = RocketChat.models.Users.findOneById(this.queryParams.userId) || doesntExist;                              // 19
				} else if (this.queryParams.username && this.queryParams.username.trim()) {                                       // 20
					user = RocketChat.models.Users.findOneByUsername(this.queryParams.username) || doesntExist;                      // 21
				} else if (this.queryParams.user && this.queryParams.user.trim()) {                                               // 22
					user = RocketChat.models.Users.findOneByUsername(this.queryParams.user) || doesntExist;                          // 23
				}                                                                                                                 // 24
                                                                                                                      //
				break;                                                                                                            // 25
		}                                                                                                                   // 6
                                                                                                                      //
		if (!user) {                                                                                                        // 28
			throw new Meteor.Error('error-user-param-not-provided', 'The required "userId" or "username" param was not provided');
		} else if (user._doesntExist) {                                                                                     // 30
			throw new Meteor.Error('error-invalid-user', 'The required "userId" or "username" param provided does not match any users');
		}                                                                                                                   // 32
                                                                                                                      //
		return user;                                                                                                        // 34
	}                                                                                                                    // 35
                                                                                                                      //
	return _getUserFromParams;                                                                                           // 2
}());                                                                                                                 // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"isUserFromParams.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_api/server/v1/helpers/isUserFromParams.js                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
RocketChat.API.v1.helperMethods.set('isUserFromParams', function () {                                                 // 1
	function _isUserFromParams() {                                                                                       // 1
		return this.queryParams.userId && this.userId === this.queryParams.userId || this.queryParams.username && this.user.username === this.queryParams.username || this.queryParams.user && this.user.username === this.queryParams.user;
	}                                                                                                                    // 5
                                                                                                                      //
	return _isUserFromParams;                                                                                            // 1
}());                                                                                                                 // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"parseJsonQuery.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_api/server/v1/helpers/parseJsonQuery.js                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
RocketChat.API.v1.helperMethods.set('parseJsonQuery', function () {                                                   // 1
	function _parseJsonQuery() {                                                                                         // 1
		var sort = void 0;                                                                                                  // 2
                                                                                                                      //
		if (this.queryParams.sort) {                                                                                        // 3
			try {                                                                                                              // 4
				sort = JSON.parse(this.queryParams.sort);                                                                         // 5
			} catch (e) {                                                                                                      // 6
				this.logger.warn("Invalid sort parameter provided \"" + this.queryParams.sort + "\":", e);                        // 7
				throw new Meteor.Error('error-invalid-sort', "Invalid sort parameter provided: \"" + this.queryParams.sort + "\"", {
					helperMethod: 'parseJsonQuery'                                                                                   // 8
				});                                                                                                               // 8
			}                                                                                                                  // 9
		}                                                                                                                   // 10
                                                                                                                      //
		var fields = void 0;                                                                                                // 12
                                                                                                                      //
		if (this.queryParams.fields) {                                                                                      // 13
			try {                                                                                                              // 14
				fields = JSON.parse(this.queryParams.fields);                                                                     // 15
			} catch (e) {                                                                                                      // 16
				this.logger.warn("Invalid fields parameter provided \"" + this.queryParams.fields + "\":", e);                    // 17
				throw new Meteor.Error('error-invalid-fields', "Invalid fields parameter provided: \"" + this.queryParams.fields + "\"", {
					helperMethod: 'parseJsonQuery'                                                                                   // 18
				});                                                                                                               // 18
			}                                                                                                                  // 19
		}                                                                                                                   // 20
                                                                                                                      //
		var query = void 0;                                                                                                 // 22
                                                                                                                      //
		if (this.queryParams.query) {                                                                                       // 23
			try {                                                                                                              // 24
				query = JSON.parse(this.queryParams.query);                                                                       // 25
			} catch (e) {                                                                                                      // 26
				this.logger.warn("Invalid query parameter provided \"" + this.queryParams.query + "\":", e);                      // 27
				throw new Meteor.Error('error-invalid-query', "Invalid query parameter provided: \"" + this.queryParams.query + "\"", {
					helperMethod: 'parseJsonQuery'                                                                                   // 28
				});                                                                                                               // 28
			}                                                                                                                  // 29
		}                                                                                                                   // 30
                                                                                                                      //
		return {                                                                                                            // 32
			sort: sort,                                                                                                        // 33
			fields: fields,                                                                                                    // 34
			query: query                                                                                                       // 35
		};                                                                                                                  // 32
	}                                                                                                                    // 37
                                                                                                                      //
	return _parseJsonQuery;                                                                                              // 1
}());                                                                                                                 // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getLoggedInUser.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_api/server/v1/helpers/getLoggedInUser.js                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
RocketChat.API.v1.helperMethods.set('getLoggedInUser', function () {                                                  // 1
	function _getLoggedInUser() {                                                                                        // 1
		var user = void 0;                                                                                                  // 2
                                                                                                                      //
		if (this.request.headers['x-auth-token'] && this.request.headers['x-user-id']) {                                    // 4
			user = RocketChat.models.Users.findOne({                                                                           // 5
				'_id': this.request.headers['x-user-id'],                                                                         // 6
				'services.resume.loginTokens.hashedToken': Accounts._hashLoginToken(this.request.headers['x-auth-token'])         // 7
			});                                                                                                                // 5
		}                                                                                                                   // 9
                                                                                                                      //
		return user;                                                                                                        // 11
	}                                                                                                                    // 12
                                                                                                                      //
	return _getLoggedInUser;                                                                                             // 1
}());                                                                                                                 // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"channels.js":function(require){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_api/server/v1/channels.js                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _typeof2 = require("babel-runtime/helpers/typeof");                                                               //
                                                                                                                      //
var _typeof3 = _interopRequireDefault(_typeof2);                                                                      //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                     //
                                                                                                                      //
//Returns the channel IF found otherwise it will return the failure of why it didn't. Check the `statusCode` property
function findChannelByIdOrName(_ref) {                                                                                // 2
	var roomId = _ref.roomId,                                                                                            // 2
	    roomName = _ref.roomName,                                                                                        // 2
	    _ref$checkedArchived = _ref.checkedArchived,                                                                     // 2
	    checkedArchived = _ref$checkedArchived === undefined ? true : _ref$checkedArchived;                              // 2
                                                                                                                      //
	if ((!roomId || !roomId.trim()) && (!roomName || !roomName.trim())) {                                                // 3
		throw new Meteor.Error('error-roomid-param-not-provided', 'The parameter "roomId" or "roomName" is required');      // 4
	}                                                                                                                    // 5
                                                                                                                      //
	var room = void 0;                                                                                                   // 7
                                                                                                                      //
	if (roomId) {                                                                                                        // 8
		room = RocketChat.models.Rooms.findOneById(roomId, {                                                                // 9
			fields: RocketChat.API.v1.defaultFieldsToExclude                                                                   // 9
		});                                                                                                                 // 9
	} else if (roomName) {                                                                                               // 10
		room = RocketChat.models.Rooms.findOneByName(roomName, {                                                            // 11
			fields: RocketChat.API.v1.defaultFieldsToExclude                                                                   // 11
		});                                                                                                                 // 11
	}                                                                                                                    // 12
                                                                                                                      //
	if (!room || room.t !== 'c') {                                                                                       // 14
		throw new Meteor.Error('error-room-not-found', "No channel found by the id of: " + roomId);                         // 15
	}                                                                                                                    // 16
                                                                                                                      //
	if (checkedArchived && room.archived) {                                                                              // 18
		throw new Meteor.Error('error-room-archived', "The channel, " + room.name + ", is archived");                       // 19
	}                                                                                                                    // 20
                                                                                                                      //
	return room;                                                                                                         // 22
}                                                                                                                     // 23
                                                                                                                      //
RocketChat.API.v1.addRoute('channels.addAll', {                                                                       // 25
	authRequired: true                                                                                                   // 25
}, {                                                                                                                  // 25
	post: function () {                                                                                                  // 26
		var _this = this;                                                                                                   // 26
                                                                                                                      //
		var findResult = findChannelByIdOrName({                                                                            // 27
			roomId: this.bodyParams.roomId                                                                                     // 27
		});                                                                                                                 // 27
		Meteor.runAsUser(this.userId, function () {                                                                         // 29
			Meteor.call('addAllUserToRoom', findResult._id, _this.bodyParams.activeUsersOnly);                                 // 30
		});                                                                                                                 // 31
		return RocketChat.API.v1.success({                                                                                  // 33
			channel: RocketChat.models.Rooms.findOneById(findResult._id, {                                                     // 34
				fields: RocketChat.API.v1.defaultFieldsToExclude                                                                  // 34
			})                                                                                                                 // 34
		});                                                                                                                 // 33
	}                                                                                                                    // 36
});                                                                                                                   // 25
RocketChat.API.v1.addRoute('channels.addModerator', {                                                                 // 39
	authRequired: true                                                                                                   // 39
}, {                                                                                                                  // 39
	post: function () {                                                                                                  // 40
		var findResult = findChannelByIdOrName({                                                                            // 41
			roomId: this.bodyParams.roomId                                                                                     // 41
		});                                                                                                                 // 41
		var user = this.getUserFromParams();                                                                                // 43
		Meteor.runAsUser(this.userId, function () {                                                                         // 45
			Meteor.call('addRoomModerator', findResult._id, user._id);                                                         // 46
		});                                                                                                                 // 47
		return RocketChat.API.v1.success();                                                                                 // 49
	}                                                                                                                    // 50
});                                                                                                                   // 39
RocketChat.API.v1.addRoute('channels.addOwner', {                                                                     // 53
	authRequired: true                                                                                                   // 53
}, {                                                                                                                  // 53
	post: function () {                                                                                                  // 54
		var findResult = findChannelByIdOrName({                                                                            // 55
			roomId: this.bodyParams.roomId                                                                                     // 55
		});                                                                                                                 // 55
		var user = this.getUserFromParams();                                                                                // 57
		Meteor.runAsUser(this.userId, function () {                                                                         // 59
			Meteor.call('addRoomOwner', findResult._id, user._id);                                                             // 60
		});                                                                                                                 // 61
		return RocketChat.API.v1.success();                                                                                 // 63
	}                                                                                                                    // 64
});                                                                                                                   // 53
RocketChat.API.v1.addRoute('channels.archive', {                                                                      // 67
	authRequired: true                                                                                                   // 67
}, {                                                                                                                  // 67
	post: function () {                                                                                                  // 68
		var findResult = findChannelByIdOrName({                                                                            // 69
			roomId: this.bodyParams.roomId                                                                                     // 69
		});                                                                                                                 // 69
		Meteor.runAsUser(this.userId, function () {                                                                         // 71
			Meteor.call('archiveRoom', findResult._id);                                                                        // 72
		});                                                                                                                 // 73
		return RocketChat.API.v1.success();                                                                                 // 75
	}                                                                                                                    // 76
});                                                                                                                   // 67
RocketChat.API.v1.addRoute('channels.cleanHistory', {                                                                 // 79
	authRequired: true                                                                                                   // 79
}, {                                                                                                                  // 79
	post: function () {                                                                                                  // 80
		var findResult = findChannelByIdOrName({                                                                            // 81
			roomId: this.bodyParams.roomId                                                                                     // 81
		});                                                                                                                 // 81
                                                                                                                      //
		if (!this.bodyParams.latest) {                                                                                      // 83
			return RocketChat.API.v1.failure('Body parameter "latest" is required.');                                          // 84
		}                                                                                                                   // 85
                                                                                                                      //
		if (!this.bodyParams.oldest) {                                                                                      // 87
			return RocketChat.API.v1.failure('Body parameter "oldest" is required.');                                          // 88
		}                                                                                                                   // 89
                                                                                                                      //
		var latest = new Date(this.bodyParams.latest);                                                                      // 91
		var oldest = new Date(this.bodyParams.oldest);                                                                      // 92
		var inclusive = false;                                                                                              // 94
                                                                                                                      //
		if (typeof this.bodyParams.inclusive !== 'undefined') {                                                             // 95
			inclusive = this.bodyParams.inclusive;                                                                             // 96
		}                                                                                                                   // 97
                                                                                                                      //
		Meteor.runAsUser(this.userId, function () {                                                                         // 99
			Meteor.call('cleanChannelHistory', {                                                                               // 100
				roomId: findResult._id,                                                                                           // 100
				latest: latest,                                                                                                   // 100
				oldest: oldest,                                                                                                   // 100
				inclusive: inclusive                                                                                              // 100
			});                                                                                                                // 100
		});                                                                                                                 // 101
		return RocketChat.API.v1.success();                                                                                 // 103
	}                                                                                                                    // 104
});                                                                                                                   // 79
RocketChat.API.v1.addRoute('channels.close', {                                                                        // 107
	authRequired: true                                                                                                   // 107
}, {                                                                                                                  // 107
	post: function () {                                                                                                  // 108
		var findResult = findChannelByIdOrName({                                                                            // 109
			roomId: this.bodyParams.roomId,                                                                                    // 109
			checkedArchived: false                                                                                             // 109
		});                                                                                                                 // 109
		var sub = RocketChat.models.Subscriptions.findOneByRoomIdAndUserId(findResult._id, this.userId);                    // 111
                                                                                                                      //
		if (!sub) {                                                                                                         // 113
			return RocketChat.API.v1.failure("The user/callee is not in the channel \"" + findResult.name + ".");              // 114
		}                                                                                                                   // 115
                                                                                                                      //
		if (!sub.open) {                                                                                                    // 117
			return RocketChat.API.v1.failure("The channel, " + findResult.name + ", is already closed to the sender");         // 118
		}                                                                                                                   // 119
                                                                                                                      //
		Meteor.runAsUser(this.userId, function () {                                                                         // 121
			Meteor.call('hideRoom', findResult._id);                                                                           // 122
		});                                                                                                                 // 123
		return RocketChat.API.v1.success();                                                                                 // 125
	}                                                                                                                    // 126
});                                                                                                                   // 107
RocketChat.API.v1.addRoute('channels.create', {                                                                       // 129
	authRequired: true                                                                                                   // 129
}, {                                                                                                                  // 129
	post: function () {                                                                                                  // 130
		var _this2 = this;                                                                                                  // 130
                                                                                                                      //
		if (!RocketChat.authz.hasPermission(this.userId, 'create-c')) {                                                     // 131
			return RocketChat.API.v1.unauthorized();                                                                           // 132
		}                                                                                                                   // 133
                                                                                                                      //
		if (!this.bodyParams.name) {                                                                                        // 135
			return RocketChat.API.v1.failure('Body param "name" is required');                                                 // 136
		}                                                                                                                   // 137
                                                                                                                      //
		if (this.bodyParams.members && !_.isArray(this.bodyParams.members)) {                                               // 139
			return RocketChat.API.v1.failure('Body param "members" must be an array if provided');                             // 140
		}                                                                                                                   // 141
                                                                                                                      //
		if (this.bodyParams.customFields && !((0, _typeof3.default)(this.bodyParams.customFields) === 'object')) {          // 143
			return RocketChat.API.v1.failure('Body param "customFields" must be an object if provided');                       // 144
		}                                                                                                                   // 145
                                                                                                                      //
		var readOnly = false;                                                                                               // 147
                                                                                                                      //
		if (typeof this.bodyParams.readOnly !== 'undefined') {                                                              // 148
			readOnly = this.bodyParams.readOnly;                                                                               // 149
		}                                                                                                                   // 150
                                                                                                                      //
		var id = void 0;                                                                                                    // 152
		Meteor.runAsUser(this.userId, function () {                                                                         // 153
			id = Meteor.call('createChannel', _this2.bodyParams.name, _this2.bodyParams.members ? _this2.bodyParams.members : [], readOnly, _this2.bodyParams.customFields);
		});                                                                                                                 // 155
		return RocketChat.API.v1.success({                                                                                  // 157
			channel: RocketChat.models.Rooms.findOneById(id.rid, {                                                             // 158
				fields: RocketChat.API.v1.defaultFieldsToExclude                                                                  // 158
			})                                                                                                                 // 158
		});                                                                                                                 // 157
	}                                                                                                                    // 160
});                                                                                                                   // 129
RocketChat.API.v1.addRoute('channels.delete', {                                                                       // 163
	authRequired: true                                                                                                   // 163
}, {                                                                                                                  // 163
	post: function () {                                                                                                  // 164
		var findResult = findChannelByIdOrName({                                                                            // 165
			roomId: this.bodyParams.roomId,                                                                                    // 165
			checkedArchived: false                                                                                             // 165
		}); //The find method returns either with the group or the failur                                                   // 165
                                                                                                                      //
		Meteor.runAsUser(this.userId, function () {                                                                         // 169
			Meteor.call('eraseRoom', findResult._id);                                                                          // 170
		});                                                                                                                 // 171
		return RocketChat.API.v1.success({                                                                                  // 173
			channel: findResult                                                                                                // 174
		});                                                                                                                 // 173
	}                                                                                                                    // 176
});                                                                                                                   // 163
RocketChat.API.v1.addRoute('channels.getIntegrations', {                                                              // 179
	authRequired: true                                                                                                   // 179
}, {                                                                                                                  // 179
	get: function () {                                                                                                   // 180
		if (!RocketChat.authz.hasPermission(this.userId, 'manage-integrations')) {                                          // 181
			return RocketChat.API.v1.unauthorized();                                                                           // 182
		}                                                                                                                   // 183
                                                                                                                      //
		var findResult = findChannelByIdOrName({                                                                            // 185
			roomId: this.queryParams.roomId,                                                                                   // 185
			checkedArchived: false                                                                                             // 185
		});                                                                                                                 // 185
		var includeAllPublicChannels = true;                                                                                // 187
                                                                                                                      //
		if (typeof this.queryParams.includeAllPublicChannels !== 'undefined') {                                             // 188
			includeAllPublicChannels = this.queryParams.includeAllPublicChannels === 'true';                                   // 189
		}                                                                                                                   // 190
                                                                                                                      //
		var ourQuery = {                                                                                                    // 192
			channel: "#" + findResult.name                                                                                     // 193
		};                                                                                                                  // 192
                                                                                                                      //
		if (includeAllPublicChannels) {                                                                                     // 196
			ourQuery.channel = {                                                                                               // 197
				$in: [ourQuery.channel, 'all_public_channels']                                                                    // 198
			};                                                                                                                 // 197
		}                                                                                                                   // 200
                                                                                                                      //
		var _getPaginationItems = this.getPaginationItems(),                                                                // 180
		    offset = _getPaginationItems.offset,                                                                            // 180
		    count = _getPaginationItems.count;                                                                              // 180
                                                                                                                      //
		var _parseJsonQuery = this.parseJsonQuery(),                                                                        // 180
		    sort = _parseJsonQuery.sort,                                                                                    // 180
		    fields = _parseJsonQuery.fields,                                                                                // 180
		    query = _parseJsonQuery.query;                                                                                  // 180
                                                                                                                      //
		ourQuery = Object.assign({}, query, ourQuery);                                                                      // 205
		var integrations = RocketChat.models.Integrations.find(ourQuery, {                                                  // 207
			sort: sort ? sort : {                                                                                              // 208
				_createdAt: 1                                                                                                     // 208
			},                                                                                                                 // 208
			skip: offset,                                                                                                      // 209
			limit: count,                                                                                                      // 210
			fields: Object.assign({}, fields, RocketChat.API.v1.defaultFieldsToExclude)                                        // 211
		}).fetch();                                                                                                         // 207
		return RocketChat.API.v1.success({                                                                                  // 214
			integrations: integrations,                                                                                        // 215
			count: integrations.length,                                                                                        // 216
			offset: offset,                                                                                                    // 217
			total: RocketChat.models.Integrations.find(ourQuery).count()                                                       // 218
		});                                                                                                                 // 214
	}                                                                                                                    // 220
});                                                                                                                   // 179
RocketChat.API.v1.addRoute('channels.history', {                                                                      // 223
	authRequired: true                                                                                                   // 223
}, {                                                                                                                  // 223
	get: function () {                                                                                                   // 224
		var findResult = findChannelByIdOrName({                                                                            // 225
			roomId: this.queryParams.roomId,                                                                                   // 225
			checkedArchived: false                                                                                             // 225
		});                                                                                                                 // 225
		var latestDate = new Date();                                                                                        // 227
                                                                                                                      //
		if (this.queryParams.latest) {                                                                                      // 228
			latestDate = new Date(this.queryParams.latest);                                                                    // 229
		}                                                                                                                   // 230
                                                                                                                      //
		var oldestDate = undefined;                                                                                         // 232
                                                                                                                      //
		if (this.queryParams.oldest) {                                                                                      // 233
			oldestDate = new Date(this.queryParams.oldest);                                                                    // 234
		}                                                                                                                   // 235
                                                                                                                      //
		var inclusive = false;                                                                                              // 237
                                                                                                                      //
		if (this.queryParams.inclusive) {                                                                                   // 238
			inclusive = this.queryParams.inclusive;                                                                            // 239
		}                                                                                                                   // 240
                                                                                                                      //
		var count = 20;                                                                                                     // 242
                                                                                                                      //
		if (this.queryParams.count) {                                                                                       // 243
			count = parseInt(this.queryParams.count);                                                                          // 244
		}                                                                                                                   // 245
                                                                                                                      //
		var unreads = false;                                                                                                // 247
                                                                                                                      //
		if (this.queryParams.unreads) {                                                                                     // 248
			unreads = this.queryParams.unreads;                                                                                // 249
		}                                                                                                                   // 250
                                                                                                                      //
		var result = void 0;                                                                                                // 252
		Meteor.runAsUser(this.userId, function () {                                                                         // 253
			result = Meteor.call('getChannelHistory', {                                                                        // 254
				rid: findResult._id,                                                                                              // 254
				latest: latestDate,                                                                                               // 254
				oldest: oldestDate,                                                                                               // 254
				inclusive: inclusive,                                                                                             // 254
				count: count,                                                                                                     // 254
				unreads: unreads                                                                                                  // 254
			});                                                                                                                // 254
		});                                                                                                                 // 255
		return RocketChat.API.v1.success({                                                                                  // 257
			messages: result && result.messages ? result.messages : []                                                         // 258
		});                                                                                                                 // 257
	}                                                                                                                    // 260
});                                                                                                                   // 223
RocketChat.API.v1.addRoute('channels.info', {                                                                         // 263
	authRequired: true                                                                                                   // 263
}, {                                                                                                                  // 263
	get: function () {                                                                                                   // 264
		var findResult = findChannelByIdOrName({                                                                            // 265
			roomId: this.queryParams.roomId,                                                                                   // 265
			roomName: this.queryParams.roomName,                                                                               // 265
			checkedArchived: false                                                                                             // 265
		});                                                                                                                 // 265
		return RocketChat.API.v1.success({                                                                                  // 267
			channel: RocketChat.models.Rooms.findOneById(findResult._id, {                                                     // 268
				fields: RocketChat.API.v1.defaultFieldsToExclude                                                                  // 268
			})                                                                                                                 // 268
		});                                                                                                                 // 267
	}                                                                                                                    // 270
});                                                                                                                   // 263
RocketChat.API.v1.addRoute('channels.invite', {                                                                       // 273
	authRequired: true                                                                                                   // 273
}, {                                                                                                                  // 273
	post: function () {                                                                                                  // 274
		var findResult = findChannelByIdOrName({                                                                            // 275
			roomId: this.bodyParams.roomId                                                                                     // 275
		});                                                                                                                 // 275
		var user = this.getUserFromParams();                                                                                // 277
		Meteor.runAsUser(this.userId, function () {                                                                         // 279
			Meteor.call('addUserToRoom', {                                                                                     // 280
				rid: findResult._id,                                                                                              // 280
				username: user.username                                                                                           // 280
			});                                                                                                                // 280
		});                                                                                                                 // 281
		return RocketChat.API.v1.success({                                                                                  // 283
			channel: RocketChat.models.Rooms.findOneById(findResult._id, {                                                     // 284
				fields: RocketChat.API.v1.defaultFieldsToExclude                                                                  // 284
			})                                                                                                                 // 284
		});                                                                                                                 // 283
	}                                                                                                                    // 286
});                                                                                                                   // 273
RocketChat.API.v1.addRoute('channels.join', {                                                                         // 289
	authRequired: true                                                                                                   // 289
}, {                                                                                                                  // 289
	post: function () {                                                                                                  // 290
		var _this3 = this;                                                                                                  // 290
                                                                                                                      //
		var findResult = findChannelByIdOrName({                                                                            // 291
			roomId: this.bodyParams.roomId                                                                                     // 291
		});                                                                                                                 // 291
		Meteor.runAsUser(this.userId, function () {                                                                         // 293
			Meteor.call('joinRoom', findResult._id, _this3.bodyParams.joinCode);                                               // 294
		});                                                                                                                 // 295
		return RocketChat.API.v1.success({                                                                                  // 297
			channel: RocketChat.models.Rooms.findOneById(findResult._id, {                                                     // 298
				fields: RocketChat.API.v1.defaultFieldsToExclude                                                                  // 298
			})                                                                                                                 // 298
		});                                                                                                                 // 297
	}                                                                                                                    // 300
});                                                                                                                   // 289
RocketChat.API.v1.addRoute('channels.kick', {                                                                         // 303
	authRequired: true                                                                                                   // 303
}, {                                                                                                                  // 303
	post: function () {                                                                                                  // 304
		var findResult = findChannelByIdOrName({                                                                            // 305
			roomId: this.bodyParams.roomId                                                                                     // 305
		});                                                                                                                 // 305
		var user = this.getUserFromParams();                                                                                // 307
		Meteor.runAsUser(this.userId, function () {                                                                         // 309
			Meteor.call('removeUserFromRoom', {                                                                                // 310
				rid: findResult._id,                                                                                              // 310
				username: user.username                                                                                           // 310
			});                                                                                                                // 310
		});                                                                                                                 // 311
		return RocketChat.API.v1.success({                                                                                  // 313
			channel: RocketChat.models.Rooms.findOneById(findResult._id, {                                                     // 314
				fields: RocketChat.API.v1.defaultFieldsToExclude                                                                  // 314
			})                                                                                                                 // 314
		});                                                                                                                 // 313
	}                                                                                                                    // 316
});                                                                                                                   // 303
RocketChat.API.v1.addRoute('channels.leave', {                                                                        // 319
	authRequired: true                                                                                                   // 319
}, {                                                                                                                  // 319
	post: function () {                                                                                                  // 320
		var findResult = findChannelByIdOrName({                                                                            // 321
			roomId: this.bodyParams.roomId                                                                                     // 321
		});                                                                                                                 // 321
		Meteor.runAsUser(this.userId, function () {                                                                         // 323
			Meteor.call('leaveRoom', findResult._id);                                                                          // 324
		});                                                                                                                 // 325
		return RocketChat.API.v1.success({                                                                                  // 327
			channel: RocketChat.models.Rooms.findOneById(findResult._id, {                                                     // 328
				fields: RocketChat.API.v1.defaultFieldsToExclude                                                                  // 328
			})                                                                                                                 // 328
		});                                                                                                                 // 327
	}                                                                                                                    // 330
});                                                                                                                   // 319
RocketChat.API.v1.addRoute('channels.list', {                                                                         // 333
	authRequired: true                                                                                                   // 333
}, {                                                                                                                  // 333
	get: {                                                                                                               // 334
		//This is like this only to provide an example of how we routes can be defined :X                                   // 335
		action: function () {                                                                                               // 336
			var _getPaginationItems2 = this.getPaginationItems(),                                                              // 336
			    offset = _getPaginationItems2.offset,                                                                          // 336
			    count = _getPaginationItems2.count;                                                                            // 336
                                                                                                                      //
			var _parseJsonQuery2 = this.parseJsonQuery(),                                                                      // 336
			    sort = _parseJsonQuery2.sort,                                                                                  // 336
			    fields = _parseJsonQuery2.fields,                                                                              // 336
			    query = _parseJsonQuery2.query;                                                                                // 336
                                                                                                                      //
			var ourQuery = Object.assign({}, query, {                                                                          // 340
				t: 'c'                                                                                                            // 340
			});                                                                                                                // 340
			var rooms = RocketChat.models.Rooms.find(ourQuery, {                                                               // 342
				sort: sort ? sort : {                                                                                             // 343
					name: 1                                                                                                          // 343
				},                                                                                                                // 343
				skip: offset,                                                                                                     // 344
				limit: count,                                                                                                     // 345
				fields: Object.assign({}, fields, RocketChat.API.v1.defaultFieldsToExclude)                                       // 346
			}).fetch();                                                                                                        // 342
			return RocketChat.API.v1.success({                                                                                 // 349
				channels: rooms,                                                                                                  // 350
				count: rooms.length,                                                                                              // 351
				offset: offset,                                                                                                   // 352
				total: RocketChat.models.Rooms.find(ourQuery).count()                                                             // 353
			});                                                                                                                // 349
		}                                                                                                                   // 355
	}                                                                                                                    // 334
});                                                                                                                   // 333
RocketChat.API.v1.addRoute('channels.list.joined', {                                                                  // 359
	authRequired: true                                                                                                   // 359
}, {                                                                                                                  // 359
	get: function () {                                                                                                   // 360
		var _getPaginationItems3 = this.getPaginationItems(),                                                               // 360
		    offset = _getPaginationItems3.offset,                                                                           // 360
		    count = _getPaginationItems3.count;                                                                             // 360
                                                                                                                      //
		var _parseJsonQuery3 = this.parseJsonQuery(),                                                                       // 360
		    sort = _parseJsonQuery3.sort,                                                                                   // 360
		    fields = _parseJsonQuery3.fields;                                                                               // 360
                                                                                                                      //
		var rooms = _.pluck(RocketChat.models.Subscriptions.findByTypeAndUserId('c', this.userId).fetch(), '_room');        // 363
                                                                                                                      //
		var totalCount = rooms.length;                                                                                      // 364
		rooms = RocketChat.models.Rooms.processQueryOptionsOnResult(rooms, {                                                // 366
			sort: sort ? sort : {                                                                                              // 367
				name: 1                                                                                                           // 367
			},                                                                                                                 // 367
			skip: offset,                                                                                                      // 368
			limit: count,                                                                                                      // 369
			fields: Object.assign({}, fields, RocketChat.API.v1.defaultFieldsToExclude)                                        // 370
		});                                                                                                                 // 366
		return RocketChat.API.v1.success({                                                                                  // 373
			channels: rooms,                                                                                                   // 374
			offset: offset,                                                                                                    // 375
			count: rooms.length,                                                                                               // 376
			total: totalCount                                                                                                  // 377
		});                                                                                                                 // 373
	}                                                                                                                    // 379
});                                                                                                                   // 359
RocketChat.API.v1.addRoute('channels.online', {                                                                       // 382
	authRequired: true                                                                                                   // 382
}, {                                                                                                                  // 382
	get: function () {                                                                                                   // 383
		var _parseJsonQuery4 = this.parseJsonQuery(),                                                                       // 383
		    query = _parseJsonQuery4.query;                                                                                 // 383
                                                                                                                      //
		var ourQuery = Object.assign({}, query, {                                                                           // 385
			t: 'c'                                                                                                             // 385
		});                                                                                                                 // 385
		var room = RocketChat.models.Rooms.findOne(ourQuery);                                                               // 387
                                                                                                                      //
		if (room == null) {                                                                                                 // 389
			return RocketChat.API.v1.failure('Channel does not exists');                                                       // 390
		}                                                                                                                   // 391
                                                                                                                      //
		var online = RocketChat.models.Users.findUsersNotOffline({                                                          // 393
			fields: {                                                                                                          // 394
				username: 1                                                                                                       // 395
			}                                                                                                                  // 394
		}).fetch();                                                                                                         // 393
		var onlineInRoom = [];                                                                                              // 399
		online.forEach(function (user) {                                                                                    // 400
			if (room.usernames.indexOf(user.username) !== -1) {                                                                // 401
				onlineInRoom.push({                                                                                               // 402
					_id: user._id,                                                                                                   // 403
					username: user.username                                                                                          // 404
				});                                                                                                               // 402
			}                                                                                                                  // 406
		});                                                                                                                 // 407
		return RocketChat.API.v1.success({                                                                                  // 409
			online: onlineInRoom                                                                                               // 410
		});                                                                                                                 // 409
	}                                                                                                                    // 412
});                                                                                                                   // 382
RocketChat.API.v1.addRoute('channels.open', {                                                                         // 415
	authRequired: true                                                                                                   // 415
}, {                                                                                                                  // 415
	post: function () {                                                                                                  // 416
		var findResult = findChannelByIdOrName({                                                                            // 417
			roomId: this.bodyParams.roomId,                                                                                    // 417
			checkedArchived: false                                                                                             // 417
		});                                                                                                                 // 417
		var sub = RocketChat.models.Subscriptions.findOneByRoomIdAndUserId(findResult._id, this.userId);                    // 419
                                                                                                                      //
		if (!sub) {                                                                                                         // 421
			return RocketChat.API.v1.failure("The user/callee is not in the channel \"" + findResult.name + "\".");            // 422
		}                                                                                                                   // 423
                                                                                                                      //
		if (sub.open) {                                                                                                     // 425
			return RocketChat.API.v1.failure("The channel, " + findResult.name + ", is already open to the sender");           // 426
		}                                                                                                                   // 427
                                                                                                                      //
		Meteor.runAsUser(this.userId, function () {                                                                         // 429
			Meteor.call('openRoom', findResult._id);                                                                           // 430
		});                                                                                                                 // 431
		return RocketChat.API.v1.success();                                                                                 // 433
	}                                                                                                                    // 434
});                                                                                                                   // 415
RocketChat.API.v1.addRoute('channels.removeModerator', {                                                              // 437
	authRequired: true                                                                                                   // 437
}, {                                                                                                                  // 437
	post: function () {                                                                                                  // 438
		var findResult = findChannelByIdOrName({                                                                            // 439
			roomId: this.bodyParams.roomId                                                                                     // 439
		});                                                                                                                 // 439
		var user = this.getUserFromParams();                                                                                // 441
		Meteor.runAsUser(this.userId, function () {                                                                         // 443
			Meteor.call('removeRoomModerator', findResult._id, user._id);                                                      // 444
		});                                                                                                                 // 445
		return RocketChat.API.v1.success();                                                                                 // 447
	}                                                                                                                    // 448
});                                                                                                                   // 437
RocketChat.API.v1.addRoute('channels.removeOwner', {                                                                  // 451
	authRequired: true                                                                                                   // 451
}, {                                                                                                                  // 451
	post: function () {                                                                                                  // 452
		var findResult = findChannelByIdOrName({                                                                            // 453
			roomId: this.bodyParams.roomId                                                                                     // 453
		});                                                                                                                 // 453
		var user = this.getUserFromParams();                                                                                // 455
		Meteor.runAsUser(this.userId, function () {                                                                         // 457
			Meteor.call('removeRoomOwner', findResult._id, user._id);                                                          // 458
		});                                                                                                                 // 459
		return RocketChat.API.v1.success();                                                                                 // 461
	}                                                                                                                    // 462
});                                                                                                                   // 451
RocketChat.API.v1.addRoute('channels.rename', {                                                                       // 465
	authRequired: true                                                                                                   // 465
}, {                                                                                                                  // 465
	post: function () {                                                                                                  // 466
		var _this4 = this;                                                                                                  // 466
                                                                                                                      //
		if (!this.bodyParams.name || !this.bodyParams.name.trim()) {                                                        // 467
			return RocketChat.API.v1.failure('The bodyParam "name" is required');                                              // 468
		}                                                                                                                   // 469
                                                                                                                      //
		var findResult = findChannelByIdOrName({                                                                            // 471
			roomId: this.bodyParams.roomId                                                                                     // 471
		});                                                                                                                 // 471
                                                                                                                      //
		if (findResult.name === this.bodyParams.name) {                                                                     // 473
			return RocketChat.API.v1.failure('The channel name is the same as what it would be renamed to.');                  // 474
		}                                                                                                                   // 475
                                                                                                                      //
		Meteor.runAsUser(this.userId, function () {                                                                         // 477
			Meteor.call('saveRoomSettings', findResult._id, 'roomName', _this4.bodyParams.name);                               // 478
		});                                                                                                                 // 479
		return RocketChat.API.v1.success({                                                                                  // 481
			channel: RocketChat.models.Rooms.findOneById(findResult._id, {                                                     // 482
				fields: RocketChat.API.v1.defaultFieldsToExclude                                                                  // 482
			})                                                                                                                 // 482
		});                                                                                                                 // 481
	}                                                                                                                    // 484
});                                                                                                                   // 465
RocketChat.API.v1.addRoute('channels.setDescription', {                                                               // 487
	authRequired: true                                                                                                   // 487
}, {                                                                                                                  // 487
	post: function () {                                                                                                  // 488
		var _this5 = this;                                                                                                  // 488
                                                                                                                      //
		if (!this.bodyParams.description || !this.bodyParams.description.trim()) {                                          // 489
			return RocketChat.API.v1.failure('The bodyParam "description" is required');                                       // 490
		}                                                                                                                   // 491
                                                                                                                      //
		var findResult = findChannelByIdOrName({                                                                            // 493
			roomId: this.bodyParams.roomId                                                                                     // 493
		});                                                                                                                 // 493
                                                                                                                      //
		if (findResult.description === this.bodyParams.description) {                                                       // 495
			return RocketChat.API.v1.failure('The channel description is the same as what it would be changed to.');           // 496
		}                                                                                                                   // 497
                                                                                                                      //
		Meteor.runAsUser(this.userId, function () {                                                                         // 499
			Meteor.call('saveRoomSettings', findResult._id, 'roomDescription', _this5.bodyParams.description);                 // 500
		});                                                                                                                 // 501
		return RocketChat.API.v1.success({                                                                                  // 503
			description: this.bodyParams.description                                                                           // 504
		});                                                                                                                 // 503
	}                                                                                                                    // 506
});                                                                                                                   // 487
RocketChat.API.v1.addRoute('channels.setJoinCode', {                                                                  // 509
	authRequired: true                                                                                                   // 509
}, {                                                                                                                  // 509
	post: function () {                                                                                                  // 510
		var _this6 = this;                                                                                                  // 510
                                                                                                                      //
		if (!this.bodyParams.joinCode || !this.bodyParams.joinCode.trim()) {                                                // 511
			return RocketChat.API.v1.failure('The bodyParam "joinCode" is required');                                          // 512
		}                                                                                                                   // 513
                                                                                                                      //
		var findResult = findChannelByIdOrName({                                                                            // 515
			roomId: this.bodyParams.roomId                                                                                     // 515
		});                                                                                                                 // 515
		Meteor.runAsUser(this.userId, function () {                                                                         // 517
			Meteor.call('saveRoomSettings', findResult._id, 'joinCode', _this6.bodyParams.joinCode);                           // 518
		});                                                                                                                 // 519
		return RocketChat.API.v1.success({                                                                                  // 521
			channel: RocketChat.models.Rooms.findOneById(findResult._id, {                                                     // 522
				fields: RocketChat.API.v1.defaultFieldsToExclude                                                                  // 522
			})                                                                                                                 // 522
		});                                                                                                                 // 521
	}                                                                                                                    // 524
});                                                                                                                   // 509
RocketChat.API.v1.addRoute('channels.setPurpose', {                                                                   // 527
	authRequired: true                                                                                                   // 527
}, {                                                                                                                  // 527
	post: function () {                                                                                                  // 528
		var _this7 = this;                                                                                                  // 528
                                                                                                                      //
		if (!this.bodyParams.purpose || !this.bodyParams.purpose.trim()) {                                                  // 529
			return RocketChat.API.v1.failure('The bodyParam "purpose" is required');                                           // 530
		}                                                                                                                   // 531
                                                                                                                      //
		var findResult = findChannelByIdOrName({                                                                            // 533
			roomId: this.bodyParams.roomId                                                                                     // 533
		});                                                                                                                 // 533
                                                                                                                      //
		if (findResult.description === this.bodyParams.purpose) {                                                           // 535
			return RocketChat.API.v1.failure('The channel purpose (description) is the same as what it would be changed to.');
		}                                                                                                                   // 537
                                                                                                                      //
		Meteor.runAsUser(this.userId, function () {                                                                         // 539
			Meteor.call('saveRoomSettings', findResult._id, 'roomDescription', _this7.bodyParams.purpose);                     // 540
		});                                                                                                                 // 541
		return RocketChat.API.v1.success({                                                                                  // 543
			purpose: this.bodyParams.purpose                                                                                   // 544
		});                                                                                                                 // 543
	}                                                                                                                    // 546
});                                                                                                                   // 527
RocketChat.API.v1.addRoute('channels.setReadOnly', {                                                                  // 549
	authRequired: true                                                                                                   // 549
}, {                                                                                                                  // 549
	post: function () {                                                                                                  // 550
		var _this8 = this;                                                                                                  // 550
                                                                                                                      //
		if (typeof this.bodyParams.readOnly === 'undefined') {                                                              // 551
			return RocketChat.API.v1.failure('The bodyParam "readOnly" is required');                                          // 552
		}                                                                                                                   // 553
                                                                                                                      //
		var findResult = findChannelByIdOrName({                                                                            // 555
			roomId: this.bodyParams.roomId                                                                                     // 555
		});                                                                                                                 // 555
                                                                                                                      //
		if (findResult.ro === this.bodyParams.readOnly) {                                                                   // 557
			return RocketChat.API.v1.failure('The channel read only setting is the same as what it would be changed to.');     // 558
		}                                                                                                                   // 559
                                                                                                                      //
		Meteor.runAsUser(this.userId, function () {                                                                         // 561
			Meteor.call('saveRoomSettings', findResult._id, 'readOnly', _this8.bodyParams.readOnly);                           // 562
		});                                                                                                                 // 563
		return RocketChat.API.v1.success({                                                                                  // 565
			channel: RocketChat.models.Rooms.findOneById(findResult._id, {                                                     // 566
				fields: RocketChat.API.v1.defaultFieldsToExclude                                                                  // 566
			})                                                                                                                 // 566
		});                                                                                                                 // 565
	}                                                                                                                    // 568
});                                                                                                                   // 549
RocketChat.API.v1.addRoute('channels.setTopic', {                                                                     // 571
	authRequired: true                                                                                                   // 571
}, {                                                                                                                  // 571
	post: function () {                                                                                                  // 572
		var _this9 = this;                                                                                                  // 572
                                                                                                                      //
		if (!this.bodyParams.topic || !this.bodyParams.topic.trim()) {                                                      // 573
			return RocketChat.API.v1.failure('The bodyParam "topic" is required');                                             // 574
		}                                                                                                                   // 575
                                                                                                                      //
		var findResult = findChannelByIdOrName({                                                                            // 577
			roomId: this.bodyParams.roomId                                                                                     // 577
		});                                                                                                                 // 577
                                                                                                                      //
		if (findResult.topic === this.bodyParams.topic) {                                                                   // 579
			return RocketChat.API.v1.failure('The channel topic is the same as what it would be changed to.');                 // 580
		}                                                                                                                   // 581
                                                                                                                      //
		Meteor.runAsUser(this.userId, function () {                                                                         // 583
			Meteor.call('saveRoomSettings', findResult._id, 'roomTopic', _this9.bodyParams.topic);                             // 584
		});                                                                                                                 // 585
		return RocketChat.API.v1.success({                                                                                  // 587
			topic: this.bodyParams.topic                                                                                       // 588
		});                                                                                                                 // 587
	}                                                                                                                    // 590
});                                                                                                                   // 571
RocketChat.API.v1.addRoute('channels.setType', {                                                                      // 593
	authRequired: true                                                                                                   // 593
}, {                                                                                                                  // 593
	post: function () {                                                                                                  // 594
		var _this10 = this;                                                                                                 // 594
                                                                                                                      //
		if (!this.bodyParams.type || !this.bodyParams.type.trim()) {                                                        // 595
			return RocketChat.API.v1.failure('The bodyParam "type" is required');                                              // 596
		}                                                                                                                   // 597
                                                                                                                      //
		var findResult = findChannelByIdOrName({                                                                            // 599
			roomId: this.bodyParams.roomId                                                                                     // 599
		});                                                                                                                 // 599
                                                                                                                      //
		if (findResult.t === this.bodyParams.type) {                                                                        // 601
			return RocketChat.API.v1.failure('The channel type is the same as what it would be changed to.');                  // 602
		}                                                                                                                   // 603
                                                                                                                      //
		Meteor.runAsUser(this.userId, function () {                                                                         // 605
			Meteor.call('saveRoomSettings', findResult._id, 'roomType', _this10.bodyParams.type);                              // 606
		});                                                                                                                 // 607
		return RocketChat.API.v1.success({                                                                                  // 609
			channel: RocketChat.models.Rooms.findOneById(findResult._id, {                                                     // 610
				fields: RocketChat.API.v1.defaultFieldsToExclude                                                                  // 610
			})                                                                                                                 // 610
		});                                                                                                                 // 609
	}                                                                                                                    // 612
});                                                                                                                   // 593
RocketChat.API.v1.addRoute('channels.unarchive', {                                                                    // 615
	authRequired: true                                                                                                   // 615
}, {                                                                                                                  // 615
	post: function () {                                                                                                  // 616
		var findResult = findChannelByIdOrName({                                                                            // 617
			roomId: this.bodyParams.roomId,                                                                                    // 617
			checkedArchived: false                                                                                             // 617
		});                                                                                                                 // 617
                                                                                                                      //
		if (!findResult.archived) {                                                                                         // 619
			return RocketChat.API.v1.failure("The channel, " + findResult.name + ", is not archived");                         // 620
		}                                                                                                                   // 621
                                                                                                                      //
		Meteor.runAsUser(this.userId, function () {                                                                         // 623
			Meteor.call('unarchiveRoom', findResult._id);                                                                      // 624
		});                                                                                                                 // 625
		return RocketChat.API.v1.success();                                                                                 // 627
	}                                                                                                                    // 628
});                                                                                                                   // 615
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"chat.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_api/server/v1/chat.js                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/* global processWebhookMessage */RocketChat.API.v1.addRoute('chat.delete', {                                         // 1
	authRequired: true                                                                                                   // 2
}, {                                                                                                                  // 2
	post: function () {                                                                                                  // 3
		check(this.bodyParams, Match.ObjectIncluding({                                                                      // 4
			msgId: String,                                                                                                     // 5
			roomId: String,                                                                                                    // 6
			asUser: Match.Maybe(Boolean)                                                                                       // 7
		}));                                                                                                                // 4
		var msg = RocketChat.models.Messages.findOneById(this.bodyParams.msgId, {                                           // 10
			fields: {                                                                                                          // 10
				u: 1,                                                                                                             // 10
				rid: 1                                                                                                            // 10
			}                                                                                                                  // 10
		});                                                                                                                 // 10
                                                                                                                      //
		if (!msg) {                                                                                                         // 12
			return RocketChat.API.v1.failure("No message found with the id of \"" + this.bodyParams.msgId + "\".");            // 13
		}                                                                                                                   // 14
                                                                                                                      //
		if (this.bodyParams.roomId !== msg.rid) {                                                                           // 16
			return RocketChat.API.v1.failure('The room id provided does not match where the message is from.');                // 17
		}                                                                                                                   // 18
                                                                                                                      //
		Meteor.runAsUser(this.bodyParams.asUser ? msg.u._id : this.userId, function () {                                    // 20
			Meteor.call('deleteMessage', {                                                                                     // 21
				_id: msg._id                                                                                                      // 21
			});                                                                                                                // 21
		});                                                                                                                 // 22
		return RocketChat.API.v1.success({                                                                                  // 24
			_id: msg._id,                                                                                                      // 25
			ts: Date.now()                                                                                                     // 26
		});                                                                                                                 // 24
	}                                                                                                                    // 28
});                                                                                                                   // 2
RocketChat.API.v1.addRoute('chat.postMessage', {                                                                      // 31
	authRequired: true                                                                                                   // 31
}, {                                                                                                                  // 31
	post: function () {                                                                                                  // 32
		//TODO: 아이템 관련 색상 변경 적용 시 수정될 부분.processWebhookMessage.js                                                           // 33
		var messageReturn = processWebhookMessage(this.bodyParams, this.user)[0];                                           // 34
		console.log("Message Param:" + JSON.stringify(messageReturn));                                                      // 35
                                                                                                                      //
		if (!messageReturn) {                                                                                               // 36
			return RocketChat.API.v1.failure('unknown-error');                                                                 // 37
		}                                                                                                                   // 38
                                                                                                                      //
		return RocketChat.API.v1.success({                                                                                  // 40
			ts: Date.now(),                                                                                                    // 41
			channel: messageReturn.channel,                                                                                    // 42
			message: messageReturn.message                                                                                     // 43
		});                                                                                                                 // 40
	}                                                                                                                    // 45
});                                                                                                                   // 31
RocketChat.API.v1.addRoute('chat.update', {                                                                           // 48
	authRequired: true                                                                                                   // 48
}, {                                                                                                                  // 48
	post: function () {                                                                                                  // 49
		var _this = this;                                                                                                   // 49
                                                                                                                      //
		check(this.bodyParams, Match.ObjectIncluding({                                                                      // 50
			roomId: String,                                                                                                    // 51
			msgId: String,                                                                                                     // 52
			text: String //Using text to be consistant with chat.postMessage                                                   // 53
                                                                                                                      //
		}));                                                                                                                // 50
		var msg = RocketChat.models.Messages.findOneById(this.bodyParams.msgId); //Ensure the message exists                // 56
                                                                                                                      //
		if (!msg) {                                                                                                         // 59
			return RocketChat.API.v1.failure("No message found with the id of \"" + this.bodyParams.msgId + "\".");            // 60
		}                                                                                                                   // 61
                                                                                                                      //
		if (this.bodyParams.roomId !== msg.rid) {                                                                           // 63
			return RocketChat.API.v1.failure('The room id provided does not match where the message is from.');                // 64
		} //Permission checks are already done in the updateMessage method, so no need to duplicate them                    // 65
                                                                                                                      //
                                                                                                                      //
		Meteor.runAsUser(this.userId, function () {                                                                         // 68
			Meteor.call('updateMessage', {                                                                                     // 69
				_id: msg._id,                                                                                                     // 69
				msg: _this.bodyParams.text,                                                                                       // 69
				rid: msg.rid                                                                                                      // 69
			});                                                                                                                // 69
		});                                                                                                                 // 71
		return RocketChat.API.v1.success({                                                                                  // 73
			message: RocketChat.models.Messages.findOneById(msg._id)                                                           // 74
		});                                                                                                                 // 73
	}                                                                                                                    // 76
});                                                                                                                   // 48
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"groups.js":function(require){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_api/server/v1/groups.js                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _typeof2 = require("babel-runtime/helpers/typeof");                                                               //
                                                                                                                      //
var _typeof3 = _interopRequireDefault(_typeof2);                                                                      //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                     //
                                                                                                                      //
//Returns the private group subscription IF found otherwise it will return the failure of why it didn't. Check the `statusCode` property
function findPrivateGroupByIdOrName(_ref) {                                                                           // 2
	var roomId = _ref.roomId,                                                                                            // 2
	    roomName = _ref.roomName,                                                                                        // 2
	    userId = _ref.userId,                                                                                            // 2
	    _ref$checkedArchived = _ref.checkedArchived,                                                                     // 2
	    checkedArchived = _ref$checkedArchived === undefined ? true : _ref$checkedArchived;                              // 2
                                                                                                                      //
	if ((!roomId || !roomId.trim()) && (!roomName || !roomName.trim())) {                                                // 3
		throw new Meteor.Error('error-roomid-param-not-provided', 'The parameter "roomId" or "roomName" is required');      // 4
	}                                                                                                                    // 5
                                                                                                                      //
	var roomSub = void 0;                                                                                                // 7
                                                                                                                      //
	if (roomId) {                                                                                                        // 8
		roomSub = RocketChat.models.Subscriptions.findOneByRoomIdAndUserId(roomId, userId);                                 // 9
	} else if (roomName) {                                                                                               // 10
		roomSub = RocketChat.models.Subscriptions.findOneByRoomNameAndUserId(roomName, userId);                             // 11
	}                                                                                                                    // 12
                                                                                                                      //
	if (!roomSub || roomSub.t !== 'p') {                                                                                 // 14
		throw new Meteor.Error('error-room-not-found', "No private group by the id of: " + roomId);                         // 15
	}                                                                                                                    // 16
                                                                                                                      //
	if (checkedArchived && roomSub.archived) {                                                                           // 18
		throw new Meteor.Error('error-room-archived', "The private group, " + roomSub.name + ", is archived");              // 19
	}                                                                                                                    // 20
                                                                                                                      //
	return roomSub;                                                                                                      // 22
}                                                                                                                     // 23
                                                                                                                      //
RocketChat.API.v1.addRoute('groups.addAll', {                                                                         // 25
	authRequired: true                                                                                                   // 25
}, {                                                                                                                  // 25
	post: function () {                                                                                                  // 26
		var _this = this;                                                                                                   // 26
                                                                                                                      //
		var findResult = findPrivateGroupByIdOrName({                                                                       // 27
			roomId: this.bodyParams.roomId,                                                                                    // 27
			userId: this.userId                                                                                                // 27
		});                                                                                                                 // 27
		Meteor.runAsUser(this.userId, function () {                                                                         // 29
			Meteor.call('addAllUserToRoom', findResult.rid, _this.bodyParams.activeUsersOnly);                                 // 30
		});                                                                                                                 // 31
		return RocketChat.API.v1.success({                                                                                  // 33
			group: RocketChat.models.Rooms.findOneById(findResult.rid, {                                                       // 34
				fields: RocketChat.API.v1.defaultFieldsToExclude                                                                  // 34
			})                                                                                                                 // 34
		});                                                                                                                 // 33
	}                                                                                                                    // 36
});                                                                                                                   // 25
RocketChat.API.v1.addRoute('groups.addModerator', {                                                                   // 39
	authRequired: true                                                                                                   // 39
}, {                                                                                                                  // 39
	post: function () {                                                                                                  // 40
		var findResult = findPrivateGroupByIdOrName({                                                                       // 41
			roomId: this.bodyParams.roomId,                                                                                    // 41
			userId: this.userId                                                                                                // 41
		});                                                                                                                 // 41
		var user = this.getUserFromParams();                                                                                // 43
		Meteor.runAsUser(this.userId, function () {                                                                         // 45
			Meteor.call('addRoomModerator', findResult.rid, user._id);                                                         // 46
		});                                                                                                                 // 47
		return RocketChat.API.v1.success();                                                                                 // 49
	}                                                                                                                    // 50
});                                                                                                                   // 39
RocketChat.API.v1.addRoute('groups.addOwner', {                                                                       // 53
	authRequired: true                                                                                                   // 53
}, {                                                                                                                  // 53
	post: function () {                                                                                                  // 54
		var findResult = findPrivateGroupByIdOrName({                                                                       // 55
			roomId: this.bodyParams.roomId,                                                                                    // 55
			userId: this.userId                                                                                                // 55
		});                                                                                                                 // 55
		var user = this.getUserFromParams();                                                                                // 57
		Meteor.runAsUser(this.userId, function () {                                                                         // 59
			Meteor.call('addRoomOwner', findResult.rid, user._id);                                                             // 60
		});                                                                                                                 // 61
		return RocketChat.API.v1.success();                                                                                 // 63
	}                                                                                                                    // 64
}); //Archives a private group only if it wasn't                                                                      // 53
                                                                                                                      //
RocketChat.API.v1.addRoute('groups.archive', {                                                                        // 68
	authRequired: true                                                                                                   // 68
}, {                                                                                                                  // 68
	post: function () {                                                                                                  // 69
		var findResult = findPrivateGroupByIdOrName({                                                                       // 70
			roomId: this.bodyParams.roomId,                                                                                    // 70
			userId: this.userId                                                                                                // 70
		});                                                                                                                 // 70
		Meteor.runAsUser(this.userId, function () {                                                                         // 72
			Meteor.call('archiveRoom', findResult.rid);                                                                        // 73
		});                                                                                                                 // 74
		return RocketChat.API.v1.success();                                                                                 // 76
	}                                                                                                                    // 77
});                                                                                                                   // 68
RocketChat.API.v1.addRoute('groups.close', {                                                                          // 80
	authRequired: true                                                                                                   // 80
}, {                                                                                                                  // 80
	post: function () {                                                                                                  // 81
		var findResult = findPrivateGroupByIdOrName({                                                                       // 82
			roomId: this.bodyParams.roomId,                                                                                    // 82
			userId: this.userId,                                                                                               // 82
			checkedArchived: false                                                                                             // 82
		});                                                                                                                 // 82
                                                                                                                      //
		if (!findResult.open) {                                                                                             // 84
			return RocketChat.API.v1.failure("The private group with an id \"" + this.bodyParams.roomId + "\" is already closed to the sender");
		}                                                                                                                   // 86
                                                                                                                      //
		Meteor.runAsUser(this.userId, function () {                                                                         // 88
			Meteor.call('hideRoom', findResult.rid);                                                                           // 89
		});                                                                                                                 // 90
		return RocketChat.API.v1.success();                                                                                 // 92
	}                                                                                                                    // 93
}); //Create Private Group                                                                                            // 80
                                                                                                                      //
RocketChat.API.v1.addRoute('groups.create', {                                                                         // 97
	authRequired: true                                                                                                   // 97
}, {                                                                                                                  // 97
	post: function () {                                                                                                  // 98
		var _this2 = this;                                                                                                  // 98
                                                                                                                      //
		if (!RocketChat.authz.hasPermission(this.userId, 'create-p')) {                                                     // 99
			return RocketChat.API.v1.unauthorized();                                                                           // 100
		}                                                                                                                   // 101
                                                                                                                      //
		if (!this.bodyParams.name) {                                                                                        // 103
			return RocketChat.API.v1.failure('Body param "name" is required');                                                 // 104
		}                                                                                                                   // 105
                                                                                                                      //
		if (this.bodyParams.members && !_.isArray(this.bodyParams.members)) {                                               // 107
			return RocketChat.API.v1.failure('Body param "members" must be an array if provided');                             // 108
		}                                                                                                                   // 109
                                                                                                                      //
		if (this.bodyParams.customFields && !((0, _typeof3.default)(this.bodyParams.customFields) === 'object')) {          // 111
			return RocketChat.API.v1.failure('Body param "customFields" must be an object if provided');                       // 112
		}                                                                                                                   // 113
                                                                                                                      //
		var readOnly = false;                                                                                               // 115
                                                                                                                      //
		if (typeof this.bodyParams.readOnly !== 'undefined') {                                                              // 116
			readOnly = this.bodyParams.readOnly;                                                                               // 117
		}                                                                                                                   // 118
                                                                                                                      //
		var id = void 0;                                                                                                    // 120
		Meteor.runAsUser(this.userId, function () {                                                                         // 121
			id = Meteor.call('createPrivateGroup', _this2.bodyParams.name, _this2.bodyParams.members ? _this2.bodyParams.members : [], readOnly, _this2.bodyParams.customFields);
		});                                                                                                                 // 123
		return RocketChat.API.v1.success({                                                                                  // 125
			group: RocketChat.models.Rooms.findOneById(id.rid, {                                                               // 126
				fields: RocketChat.API.v1.defaultFieldsToExclude                                                                  // 126
			})                                                                                                                 // 126
		});                                                                                                                 // 125
	}                                                                                                                    // 128
});                                                                                                                   // 97
RocketChat.API.v1.addRoute('groups.delete', {                                                                         // 131
	authRequired: true                                                                                                   // 131
}, {                                                                                                                  // 131
	post: function () {                                                                                                  // 132
		var findResult = findPrivateGroupByIdOrName({                                                                       // 133
			roomId: this.bodyParams.roomId,                                                                                    // 133
			userId: this.userId,                                                                                               // 133
			checkedArchived: false                                                                                             // 133
		});                                                                                                                 // 133
		Meteor.runAsUser(this.userId, function () {                                                                         // 135
			Meteor.call('eraseRoom', findResult.rid);                                                                          // 136
		});                                                                                                                 // 137
		return RocketChat.API.v1.success({                                                                                  // 139
			group: RocketChat.models.Rooms.processQueryOptionsOnResult([findResult._room], {                                   // 140
				fields: RocketChat.API.v1.defaultFieldsToExclude                                                                  // 140
			})[0]                                                                                                              // 140
		});                                                                                                                 // 139
	}                                                                                                                    // 142
});                                                                                                                   // 131
RocketChat.API.v1.addRoute('groups.getIntegrations', {                                                                // 145
	authRequired: true                                                                                                   // 145
}, {                                                                                                                  // 145
	get: function () {                                                                                                   // 146
		if (!RocketChat.authz.hasPermission(this.userId, 'manage-integrations')) {                                          // 147
			return RocketChat.API.v1.unauthorized();                                                                           // 148
		}                                                                                                                   // 149
                                                                                                                      //
		var findResult = findPrivateGroupByIdOrName({                                                                       // 151
			roomId: this.queryParams.roomId,                                                                                   // 151
			userId: this.userId,                                                                                               // 151
			checkedArchived: false                                                                                             // 151
		});                                                                                                                 // 151
		var includeAllPrivateGroups = true;                                                                                 // 153
                                                                                                                      //
		if (typeof this.queryParams.includeAllPrivateGroups !== 'undefined') {                                              // 154
			includeAllPrivateGroups = this.queryParams.includeAllPrivateGroups === 'true';                                     // 155
		}                                                                                                                   // 156
                                                                                                                      //
		var channelsToSearch = ["#" + findResult.name];                                                                     // 158
                                                                                                                      //
		if (includeAllPrivateGroups) {                                                                                      // 159
			channelsToSearch.push('all_private_groups');                                                                       // 160
		}                                                                                                                   // 161
                                                                                                                      //
		var _getPaginationItems = this.getPaginationItems(),                                                                // 146
		    offset = _getPaginationItems.offset,                                                                            // 146
		    count = _getPaginationItems.count;                                                                              // 146
                                                                                                                      //
		var _parseJsonQuery = this.parseJsonQuery(),                                                                        // 146
		    sort = _parseJsonQuery.sort,                                                                                    // 146
		    fields = _parseJsonQuery.fields,                                                                                // 146
		    query = _parseJsonQuery.query;                                                                                  // 146
                                                                                                                      //
		var ourQuery = Object.assign({}, query, {                                                                           // 166
			channel: {                                                                                                         // 166
				$in: channelsToSearch                                                                                             // 166
			}                                                                                                                  // 166
		});                                                                                                                 // 166
		var integrations = RocketChat.models.Integrations.find(ourQuery, {                                                  // 167
			sort: sort ? sort : {                                                                                              // 168
				_createdAt: 1                                                                                                     // 168
			},                                                                                                                 // 168
			skip: offset,                                                                                                      // 169
			limit: count,                                                                                                      // 170
			fields: Object.assign({}, fields, RocketChat.API.v1.defaultFieldsToExclude)                                        // 171
		}).fetch();                                                                                                         // 167
		return RocketChat.API.v1.success({                                                                                  // 174
			integrations: integrations,                                                                                        // 175
			count: integrations.length,                                                                                        // 176
			offset: offset,                                                                                                    // 177
			total: RocketChat.models.Integrations.find(ourQuery).count()                                                       // 178
		});                                                                                                                 // 174
	}                                                                                                                    // 180
});                                                                                                                   // 145
RocketChat.API.v1.addRoute('groups.history', {                                                                        // 183
	authRequired: true                                                                                                   // 183
}, {                                                                                                                  // 183
	get: function () {                                                                                                   // 184
		var findResult = findPrivateGroupByIdOrName({                                                                       // 185
			roomId: this.queryParams.roomId,                                                                                   // 185
			userId: this.userId,                                                                                               // 185
			checkedArchived: false                                                                                             // 185
		});                                                                                                                 // 185
		var latestDate = new Date();                                                                                        // 187
                                                                                                                      //
		if (this.queryParams.latest) {                                                                                      // 188
			latestDate = new Date(this.queryParams.latest);                                                                    // 189
		}                                                                                                                   // 190
                                                                                                                      //
		var oldestDate = undefined;                                                                                         // 192
                                                                                                                      //
		if (this.queryParams.oldest) {                                                                                      // 193
			oldestDate = new Date(this.queryParams.oldest);                                                                    // 194
		}                                                                                                                   // 195
                                                                                                                      //
		var inclusive = false;                                                                                              // 197
                                                                                                                      //
		if (this.queryParams.inclusive) {                                                                                   // 198
			inclusive = this.queryParams.inclusive;                                                                            // 199
		}                                                                                                                   // 200
                                                                                                                      //
		var count = 20;                                                                                                     // 202
                                                                                                                      //
		if (this.queryParams.count) {                                                                                       // 203
			count = parseInt(this.queryParams.count);                                                                          // 204
		}                                                                                                                   // 205
                                                                                                                      //
		var unreads = false;                                                                                                // 207
                                                                                                                      //
		if (this.queryParams.unreads) {                                                                                     // 208
			unreads = this.queryParams.unreads;                                                                                // 209
		}                                                                                                                   // 210
                                                                                                                      //
		var result = void 0;                                                                                                // 212
		Meteor.runAsUser(this.userId, function () {                                                                         // 213
			result = Meteor.call('getChannelHistory', {                                                                        // 214
				rid: findResult.rid,                                                                                              // 214
				latest: latestDate,                                                                                               // 214
				oldest: oldestDate,                                                                                               // 214
				inclusive: inclusive,                                                                                             // 214
				count: count,                                                                                                     // 214
				unreads: unreads                                                                                                  // 214
			});                                                                                                                // 214
		});                                                                                                                 // 215
		return RocketChat.API.v1.success({                                                                                  // 217
			messages: result && result.messages ? result.messages : []                                                         // 218
		});                                                                                                                 // 217
	}                                                                                                                    // 220
});                                                                                                                   // 183
RocketChat.API.v1.addRoute('groups.info', {                                                                           // 223
	authRequired: true                                                                                                   // 223
}, {                                                                                                                  // 223
	get: function () {                                                                                                   // 224
		var findResult = findPrivateGroupByIdOrName({                                                                       // 225
			roomId: this.queryParams.roomId,                                                                                   // 225
			roomName: this.queryParams.roomName,                                                                               // 225
			userId: this.userId,                                                                                               // 225
			checkedArchived: false                                                                                             // 225
		});                                                                                                                 // 225
		return RocketChat.API.v1.success({                                                                                  // 227
			group: RocketChat.models.Rooms.findOneById(findResult.rid, {                                                       // 228
				fields: RocketChat.API.v1.defaultFieldsToExclude                                                                  // 228
			})                                                                                                                 // 228
		});                                                                                                                 // 227
	}                                                                                                                    // 230
});                                                                                                                   // 223
RocketChat.API.v1.addRoute('groups.invite', {                                                                         // 233
	authRequired: true                                                                                                   // 233
}, {                                                                                                                  // 233
	post: function () {                                                                                                  // 234
		var findResult = findPrivateGroupByIdOrName({                                                                       // 235
			roomId: this.bodyParams.roomId,                                                                                    // 235
			userId: this.userId                                                                                                // 235
		});                                                                                                                 // 235
		var user = this.getUserFromParams();                                                                                // 237
		Meteor.runAsUser(this.userId, function () {                                                                         // 239
			Meteor.call('addUserToRoom', {                                                                                     // 240
				rid: findResult.rid,                                                                                              // 240
				username: user.username                                                                                           // 240
			});                                                                                                                // 240
		});                                                                                                                 // 241
		return RocketChat.API.v1.success({                                                                                  // 243
			group: RocketChat.models.Rooms.findOneById(findResult.rid, {                                                       // 244
				fields: RocketChat.API.v1.defaultFieldsToExclude                                                                  // 244
			})                                                                                                                 // 244
		});                                                                                                                 // 243
	}                                                                                                                    // 246
});                                                                                                                   // 233
RocketChat.API.v1.addRoute('groups.kick', {                                                                           // 249
	authRequired: true                                                                                                   // 249
}, {                                                                                                                  // 249
	post: function () {                                                                                                  // 250
		var findResult = findPrivateGroupByIdOrName({                                                                       // 251
			roomId: this.bodyParams.roomId,                                                                                    // 251
			userId: this.userId                                                                                                // 251
		});                                                                                                                 // 251
		var user = this.getUserFromParams();                                                                                // 253
		Meteor.runAsUser(this.userId, function () {                                                                         // 255
			Meteor.call('removeUserFromRoom', {                                                                                // 256
				rid: findResult.rid,                                                                                              // 256
				username: user.username                                                                                           // 256
			});                                                                                                                // 256
		});                                                                                                                 // 257
		return RocketChat.API.v1.success();                                                                                 // 259
	}                                                                                                                    // 260
});                                                                                                                   // 249
RocketChat.API.v1.addRoute('groups.leave', {                                                                          // 263
	authRequired: true                                                                                                   // 263
}, {                                                                                                                  // 263
	post: function () {                                                                                                  // 264
		var findResult = findPrivateGroupByIdOrName({                                                                       // 265
			roomId: this.bodyParams.roomId,                                                                                    // 265
			userId: this.userId                                                                                                // 265
		});                                                                                                                 // 265
		Meteor.runAsUser(this.userId, function () {                                                                         // 267
			Meteor.call('leaveRoom', findResult.rid);                                                                          // 268
		});                                                                                                                 // 269
		return RocketChat.API.v1.success();                                                                                 // 271
	}                                                                                                                    // 272
}); //List Private Groups a user has access to                                                                        // 263
                                                                                                                      //
RocketChat.API.v1.addRoute('groups.list', {                                                                           // 276
	authRequired: true                                                                                                   // 276
}, {                                                                                                                  // 276
	get: function () {                                                                                                   // 277
		var _getPaginationItems2 = this.getPaginationItems(),                                                               // 277
		    offset = _getPaginationItems2.offset,                                                                           // 277
		    count = _getPaginationItems2.count;                                                                             // 277
                                                                                                                      //
		var _parseJsonQuery2 = this.parseJsonQuery(),                                                                       // 277
		    sort = _parseJsonQuery2.sort,                                                                                   // 277
		    fields = _parseJsonQuery2.fields;                                                                               // 277
                                                                                                                      //
		var rooms = _.pluck(RocketChat.models.Subscriptions.findByTypeAndUserId('p', this.userId).fetch(), '_room');        // 280
                                                                                                                      //
		var totalCount = rooms.length;                                                                                      // 281
		rooms = RocketChat.models.Rooms.processQueryOptionsOnResult(rooms, {                                                // 283
			sort: sort ? sort : {                                                                                              // 284
				name: 1                                                                                                           // 284
			},                                                                                                                 // 284
			skip: offset,                                                                                                      // 285
			limit: count,                                                                                                      // 286
			fields: Object.assign({}, fields, RocketChat.API.v1.defaultFieldsToExclude)                                        // 287
		});                                                                                                                 // 283
		return RocketChat.API.v1.success({                                                                                  // 290
			groups: rooms,                                                                                                     // 291
			offset: offset,                                                                                                    // 292
			count: rooms.length,                                                                                               // 293
			total: totalCount                                                                                                  // 294
		});                                                                                                                 // 290
	}                                                                                                                    // 296
});                                                                                                                   // 276
RocketChat.API.v1.addRoute('groups.online', {                                                                         // 299
	authRequired: true                                                                                                   // 299
}, {                                                                                                                  // 299
	get: function () {                                                                                                   // 300
		var _parseJsonQuery3 = this.parseJsonQuery(),                                                                       // 300
		    query = _parseJsonQuery3.query;                                                                                 // 300
                                                                                                                      //
		var ourQuery = Object.assign({}, query, {                                                                           // 302
			t: 'p'                                                                                                             // 302
		});                                                                                                                 // 302
		var room = RocketChat.models.Rooms.findOne(ourQuery);                                                               // 304
                                                                                                                      //
		if (room == null) {                                                                                                 // 306
			return RocketChat.API.v1.failure('Group does not exists');                                                         // 307
		}                                                                                                                   // 308
                                                                                                                      //
		var online = RocketChat.models.Users.findUsersNotOffline({                                                          // 310
			fields: {                                                                                                          // 311
				username: 1                                                                                                       // 312
			}                                                                                                                  // 311
		}).fetch();                                                                                                         // 310
		var onlineInRoom = [];                                                                                              // 316
		online.forEach(function (user) {                                                                                    // 317
			if (room.usernames.indexOf(user.username) !== -1) {                                                                // 318
				onlineInRoom.push({                                                                                               // 319
					_id: user._id,                                                                                                   // 320
					username: user.username                                                                                          // 321
				});                                                                                                               // 319
			}                                                                                                                  // 323
		});                                                                                                                 // 324
		return RocketChat.API.v1.success({                                                                                  // 326
			online: onlineInRoom                                                                                               // 327
		});                                                                                                                 // 326
	}                                                                                                                    // 329
});                                                                                                                   // 299
RocketChat.API.v1.addRoute('groups.open', {                                                                           // 332
	authRequired: true                                                                                                   // 332
}, {                                                                                                                  // 332
	post: function () {                                                                                                  // 333
		var findResult = findPrivateGroupByIdOrName({                                                                       // 334
			roomId: this.bodyParams.roomId,                                                                                    // 334
			userId: this.userId,                                                                                               // 334
			checkedArchived: false                                                                                             // 334
		});                                                                                                                 // 334
                                                                                                                      //
		if (findResult.open) {                                                                                              // 336
			return RocketChat.API.v1.failure("The private group, " + this.bodyParams.name + ", is already open for the sender");
		}                                                                                                                   // 338
                                                                                                                      //
		Meteor.runAsUser(this.userId, function () {                                                                         // 340
			Meteor.call('openRoom', findResult.rid);                                                                           // 341
		});                                                                                                                 // 342
		return RocketChat.API.v1.success();                                                                                 // 344
	}                                                                                                                    // 345
});                                                                                                                   // 332
RocketChat.API.v1.addRoute('groups.removeModerator', {                                                                // 348
	authRequired: true                                                                                                   // 348
}, {                                                                                                                  // 348
	post: function () {                                                                                                  // 349
		var findResult = findPrivateGroupByIdOrName({                                                                       // 350
			roomId: this.bodyParams.roomId,                                                                                    // 350
			userId: this.userId                                                                                                // 350
		});                                                                                                                 // 350
		var user = this.getUserFromParams();                                                                                // 352
		Meteor.runAsUser(this.userId, function () {                                                                         // 354
			Meteor.call('removeRoomModerator', findResult.rid, user._id);                                                      // 355
		});                                                                                                                 // 356
		return RocketChat.API.v1.success();                                                                                 // 358
	}                                                                                                                    // 359
});                                                                                                                   // 348
RocketChat.API.v1.addRoute('groups.removeOwner', {                                                                    // 362
	authRequired: true                                                                                                   // 362
}, {                                                                                                                  // 362
	post: function () {                                                                                                  // 363
		var findResult = findPrivateGroupByIdOrName({                                                                       // 364
			roomId: this.bodyParams.roomId,                                                                                    // 364
			userId: this.userId                                                                                                // 364
		});                                                                                                                 // 364
		var user = this.getUserFromParams();                                                                                // 366
		Meteor.runAsUser(this.userId, function () {                                                                         // 368
			Meteor.call('removeRoomOwner', findResult.rid, user._id);                                                          // 369
		});                                                                                                                 // 370
		return RocketChat.API.v1.success();                                                                                 // 372
	}                                                                                                                    // 373
});                                                                                                                   // 362
RocketChat.API.v1.addRoute('groups.rename', {                                                                         // 376
	authRequired: true                                                                                                   // 376
}, {                                                                                                                  // 376
	post: function () {                                                                                                  // 377
		var _this3 = this;                                                                                                  // 377
                                                                                                                      //
		if (!this.bodyParams.name || !this.bodyParams.name.trim()) {                                                        // 378
			return RocketChat.API.v1.failure('The bodyParam "name" is required');                                              // 379
		}                                                                                                                   // 380
                                                                                                                      //
		var findResult = findPrivateGroupByIdOrName({                                                                       // 382
			roomId: this.bodyParams.roomId,                                                                                    // 382
			userId: this.userId                                                                                                // 382
		});                                                                                                                 // 382
		Meteor.runAsUser(this.userId, function () {                                                                         // 384
			Meteor.call('saveRoomSettings', findResult.rid, 'roomName', _this3.bodyParams.name);                               // 385
		});                                                                                                                 // 386
		return RocketChat.API.v1.success({                                                                                  // 388
			group: RocketChat.models.Rooms.findOneById(findResult.rid, {                                                       // 389
				fields: RocketChat.API.v1.defaultFieldsToExclude                                                                  // 389
			})                                                                                                                 // 389
		});                                                                                                                 // 388
	}                                                                                                                    // 391
});                                                                                                                   // 376
RocketChat.API.v1.addRoute('groups.setDescription', {                                                                 // 394
	authRequired: true                                                                                                   // 394
}, {                                                                                                                  // 394
	post: function () {                                                                                                  // 395
		var _this4 = this;                                                                                                  // 395
                                                                                                                      //
		if (!this.bodyParams.description || !this.bodyParams.description.trim()) {                                          // 396
			return RocketChat.API.v1.failure('The bodyParam "description" is required');                                       // 397
		}                                                                                                                   // 398
                                                                                                                      //
		var findResult = findPrivateGroupByIdOrName({                                                                       // 400
			roomId: this.bodyParams.roomId,                                                                                    // 400
			userId: this.userId                                                                                                // 400
		});                                                                                                                 // 400
		Meteor.runAsUser(this.userId, function () {                                                                         // 402
			Meteor.call('saveRoomSettings', findResult.rid, 'roomDescription', _this4.bodyParams.description);                 // 403
		});                                                                                                                 // 404
		return RocketChat.API.v1.success({                                                                                  // 406
			description: this.bodyParams.description                                                                           // 407
		});                                                                                                                 // 406
	}                                                                                                                    // 409
});                                                                                                                   // 394
RocketChat.API.v1.addRoute('groups.setPurpose', {                                                                     // 412
	authRequired: true                                                                                                   // 412
}, {                                                                                                                  // 412
	post: function () {                                                                                                  // 413
		var _this5 = this;                                                                                                  // 413
                                                                                                                      //
		if (!this.bodyParams.purpose || !this.bodyParams.purpose.trim()) {                                                  // 414
			return RocketChat.API.v1.failure('The bodyParam "purpose" is required');                                           // 415
		}                                                                                                                   // 416
                                                                                                                      //
		var findResult = findPrivateGroupByIdOrName({                                                                       // 418
			roomId: this.bodyParams.roomId,                                                                                    // 418
			userId: this.userId                                                                                                // 418
		});                                                                                                                 // 418
		Meteor.runAsUser(this.userId, function () {                                                                         // 420
			Meteor.call('saveRoomSettings', findResult.rid, 'roomDescription', _this5.bodyParams.purpose);                     // 421
		});                                                                                                                 // 422
		return RocketChat.API.v1.success({                                                                                  // 424
			purpose: this.bodyParams.purpose                                                                                   // 425
		});                                                                                                                 // 424
	}                                                                                                                    // 427
});                                                                                                                   // 412
RocketChat.API.v1.addRoute('groups.setReadOnly', {                                                                    // 430
	authRequired: true                                                                                                   // 430
}, {                                                                                                                  // 430
	post: function () {                                                                                                  // 431
		var _this6 = this;                                                                                                  // 431
                                                                                                                      //
		if (typeof this.bodyParams.readOnly === 'undefined') {                                                              // 432
			return RocketChat.API.v1.failure('The bodyParam "readOnly" is required');                                          // 433
		}                                                                                                                   // 434
                                                                                                                      //
		var findResult = findPrivateGroupByIdOrName({                                                                       // 436
			roomId: this.bodyParams.roomId,                                                                                    // 436
			userId: this.userId                                                                                                // 436
		});                                                                                                                 // 436
                                                                                                                      //
		if (findResult.ro === this.bodyParams.readOnly) {                                                                   // 438
			return RocketChat.API.v1.failure('The private group read only setting is the same as what it would be changed to.');
		}                                                                                                                   // 440
                                                                                                                      //
		Meteor.runAsUser(this.userId, function () {                                                                         // 442
			Meteor.call('saveRoomSettings', findResult.rid, 'readOnly', _this6.bodyParams.readOnly);                           // 443
		});                                                                                                                 // 444
		return RocketChat.API.v1.success({                                                                                  // 446
			group: RocketChat.models.Rooms.findOneById(findResult.rid, {                                                       // 447
				fields: RocketChat.API.v1.defaultFieldsToExclude                                                                  // 447
			})                                                                                                                 // 447
		});                                                                                                                 // 446
	}                                                                                                                    // 449
});                                                                                                                   // 430
RocketChat.API.v1.addRoute('groups.setTopic', {                                                                       // 452
	authRequired: true                                                                                                   // 452
}, {                                                                                                                  // 452
	post: function () {                                                                                                  // 453
		var _this7 = this;                                                                                                  // 453
                                                                                                                      //
		if (!this.bodyParams.topic || !this.bodyParams.topic.trim()) {                                                      // 454
			return RocketChat.API.v1.failure('The bodyParam "topic" is required');                                             // 455
		}                                                                                                                   // 456
                                                                                                                      //
		var findResult = findPrivateGroupByIdOrName({                                                                       // 458
			roomId: this.bodyParams.roomId,                                                                                    // 458
			userId: this.userId                                                                                                // 458
		});                                                                                                                 // 458
		Meteor.runAsUser(this.userId, function () {                                                                         // 460
			Meteor.call('saveRoomSettings', findResult.rid, 'roomTopic', _this7.bodyParams.topic);                             // 461
		});                                                                                                                 // 462
		return RocketChat.API.v1.success({                                                                                  // 464
			topic: this.bodyParams.topic                                                                                       // 465
		});                                                                                                                 // 464
	}                                                                                                                    // 467
});                                                                                                                   // 452
RocketChat.API.v1.addRoute('groups.setType', {                                                                        // 470
	authRequired: true                                                                                                   // 470
}, {                                                                                                                  // 470
	post: function () {                                                                                                  // 471
		var _this8 = this;                                                                                                  // 471
                                                                                                                      //
		if (!this.bodyParams.type || !this.bodyParams.type.trim()) {                                                        // 472
			return RocketChat.API.v1.failure('The bodyParam "type" is required');                                              // 473
		}                                                                                                                   // 474
                                                                                                                      //
		var findResult = findPrivateGroupByIdOrName({                                                                       // 476
			roomId: this.bodyParams.roomId,                                                                                    // 476
			userId: this.userId                                                                                                // 476
		});                                                                                                                 // 476
                                                                                                                      //
		if (findResult.t === this.bodyParams.type) {                                                                        // 478
			return RocketChat.API.v1.failure('The private group type is the same as what it would be changed to.');            // 479
		}                                                                                                                   // 480
                                                                                                                      //
		Meteor.runAsUser(this.userId, function () {                                                                         // 482
			Meteor.call('saveRoomSettings', findResult.rid, 'roomType', _this8.bodyParams.type);                               // 483
		});                                                                                                                 // 484
		return RocketChat.API.v1.success({                                                                                  // 486
			group: RocketChat.models.Rooms.findOneById(findResult.rid, {                                                       // 487
				fields: RocketChat.API.v1.defaultFieldsToExclude                                                                  // 487
			})                                                                                                                 // 487
		});                                                                                                                 // 486
	}                                                                                                                    // 489
});                                                                                                                   // 470
RocketChat.API.v1.addRoute('groups.unarchive', {                                                                      // 492
	authRequired: true                                                                                                   // 492
}, {                                                                                                                  // 492
	post: function () {                                                                                                  // 493
		var findResult = findPrivateGroupByIdOrName({                                                                       // 494
			roomId: this.bodyParams.roomId,                                                                                    // 494
			userId: this.userId,                                                                                               // 494
			checkedArchived: false                                                                                             // 494
		});                                                                                                                 // 494
		Meteor.runAsUser(this.userId, function () {                                                                         // 496
			Meteor.call('unarchiveRoom', findResult.rid);                                                                      // 497
		});                                                                                                                 // 498
		return RocketChat.API.v1.success();                                                                                 // 500
	}                                                                                                                    // 501
});                                                                                                                   // 492
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"im.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_api/server/v1/im.js                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
function findDirectMessageRoomById(roomId, userId) {                                                                  // 1
	if (!roomId || !roomId.trim()) {                                                                                     // 2
		return RocketChat.API.v1.failure('Body param "roomId" is required');                                                // 3
	}                                                                                                                    // 4
                                                                                                                      //
	var roomSub = RocketChat.models.Subscriptions.findOneByRoomIdAndUserId(roomId, userId);                              // 6
                                                                                                                      //
	if (!roomSub || roomSub.t !== 'd') {                                                                                 // 8
		return RocketChat.API.v1.failure("No direct message room found by the id of: " + roomId);                           // 9
	}                                                                                                                    // 10
                                                                                                                      //
	return roomSub;                                                                                                      // 12
}                                                                                                                     // 13
                                                                                                                      //
RocketChat.API.v1.addRoute(['dm.close', 'im.close'], {                                                                // 15
	authRequired: true                                                                                                   // 15
}, {                                                                                                                  // 15
	post: function () {                                                                                                  // 16
		var findResult = findDirectMessageRoomById(this.bodyParams.roomId, this.userId); //The find method returns either with the dm or the failure
                                                                                                                      //
		if (findResult.statusCode) {                                                                                        // 20
			return findResult;                                                                                                 // 21
		}                                                                                                                   // 22
                                                                                                                      //
		if (!findResult.open) {                                                                                             // 24
			return RocketChat.API.v1.failure("The direct message room, " + this.bodyParams.name + ", is already closed to the sender");
		}                                                                                                                   // 26
                                                                                                                      //
		Meteor.runAsUser(this.userId, function () {                                                                         // 28
			Meteor.call('hideRoom', findResult.rid);                                                                           // 29
		});                                                                                                                 // 30
		return RocketChat.API.v1.success();                                                                                 // 32
	}                                                                                                                    // 33
});                                                                                                                   // 15
RocketChat.API.v1.addRoute(['dm.history', 'im.history'], {                                                            // 36
	authRequired: true                                                                                                   // 36
}, {                                                                                                                  // 36
	get: function () {                                                                                                   // 37
		var findResult = findDirectMessageRoomById(this.queryParams.roomId, this.userId); //The find method returns either with the group or the failure
                                                                                                                      //
		if (findResult.statusCode) {                                                                                        // 41
			return findResult;                                                                                                 // 42
		}                                                                                                                   // 43
                                                                                                                      //
		var latestDate = new Date();                                                                                        // 45
                                                                                                                      //
		if (this.queryParams.latest) {                                                                                      // 46
			latestDate = new Date(this.queryParams.latest);                                                                    // 47
		}                                                                                                                   // 48
                                                                                                                      //
		var oldestDate = undefined;                                                                                         // 50
                                                                                                                      //
		if (this.queryParams.oldest) {                                                                                      // 51
			oldestDate = new Date(this.queryParams.oldest);                                                                    // 52
		}                                                                                                                   // 53
                                                                                                                      //
		var inclusive = false;                                                                                              // 55
                                                                                                                      //
		if (this.queryParams.inclusive) {                                                                                   // 56
			inclusive = this.queryParams.inclusive;                                                                            // 57
		}                                                                                                                   // 58
                                                                                                                      //
		var count = 20;                                                                                                     // 60
                                                                                                                      //
		if (this.queryParams.count) {                                                                                       // 61
			count = parseInt(this.queryParams.count);                                                                          // 62
		}                                                                                                                   // 63
                                                                                                                      //
		var unreads = false;                                                                                                // 65
                                                                                                                      //
		if (this.queryParams.unreads) {                                                                                     // 66
			unreads = this.queryParams.unreads;                                                                                // 67
		}                                                                                                                   // 68
                                                                                                                      //
		var result = void 0;                                                                                                // 70
		Meteor.runAsUser(this.userId, function () {                                                                         // 71
			result = Meteor.call('getChannelHistory', {                                                                        // 72
				rid: findResult.rid,                                                                                              // 72
				latest: latestDate,                                                                                               // 72
				oldest: oldestDate,                                                                                               // 72
				inclusive: inclusive,                                                                                             // 72
				count: count,                                                                                                     // 72
				unreads: unreads                                                                                                  // 72
			});                                                                                                                // 72
		});                                                                                                                 // 73
		return RocketChat.API.v1.success({                                                                                  // 75
			messages: result && result.messages ? result.messages : []                                                         // 76
		});                                                                                                                 // 75
	}                                                                                                                    // 78
});                                                                                                                   // 36
RocketChat.API.v1.addRoute(['dm.messages.others', 'im.messages.others'], {                                            // 81
	authRequired: true                                                                                                   // 81
}, {                                                                                                                  // 81
	get: function () {                                                                                                   // 82
		if (RocketChat.settings.get('API_Enable_Direct_Message_History_EndPoint') !== true) {                               // 83
			throw new Meteor.Error('error-endpoint-disabled', 'This endpoint is disabled', {                                   // 84
				route: '/api/v1/im.messages.others'                                                                               // 84
			});                                                                                                                // 84
		}                                                                                                                   // 85
                                                                                                                      //
		if (!RocketChat.authz.hasPermission(this.userId, 'view-room-administration')) {                                     // 87
			return RocketChat.API.v1.unauthorized();                                                                           // 88
		}                                                                                                                   // 89
                                                                                                                      //
		var roomId = this.queryParams.roomId;                                                                               // 91
                                                                                                                      //
		if (!roomId || !roomId.trim()) {                                                                                    // 92
			throw new Meteor.Error('error-roomid-param-not-provided', 'The parameter "roomId" is required');                   // 93
		}                                                                                                                   // 94
                                                                                                                      //
		var room = RocketChat.models.Rooms.findOneById(roomId);                                                             // 96
                                                                                                                      //
		if (!room || room.t !== 'd') {                                                                                      // 97
			throw new Meteor.Error('error-room-not-found', "No direct message room found by the id of: " + roomId);            // 98
		}                                                                                                                   // 99
                                                                                                                      //
		var _getPaginationItems = this.getPaginationItems(),                                                                // 82
		    offset = _getPaginationItems.offset,                                                                            // 82
		    count = _getPaginationItems.count;                                                                              // 82
                                                                                                                      //
		var _parseJsonQuery = this.parseJsonQuery(),                                                                        // 82
		    sort = _parseJsonQuery.sort,                                                                                    // 82
		    fields = _parseJsonQuery.fields,                                                                                // 82
		    query = _parseJsonQuery.query;                                                                                  // 82
                                                                                                                      //
		var ourQuery = Object.assign({}, query, {                                                                           // 103
			rid: room._id                                                                                                      // 103
		});                                                                                                                 // 103
		var msgs = RocketChat.models.Messages.find(ourQuery, {                                                              // 105
			sort: sort ? sort : {                                                                                              // 106
				ts: -1                                                                                                            // 106
			},                                                                                                                 // 106
			skip: offset,                                                                                                      // 107
			limit: count,                                                                                                      // 108
			fields: Object.assign({}, fields, RocketChat.API.v1.defaultFieldsToExclude)                                        // 109
		}).fetch();                                                                                                         // 105
		return RocketChat.API.v1.success({                                                                                  // 112
			messages: msgs,                                                                                                    // 113
			offset: offset,                                                                                                    // 114
			count: msgs.length,                                                                                                // 115
			total: RocketChat.models.Messages.find(ourQuery).count()                                                           // 116
		});                                                                                                                 // 112
	}                                                                                                                    // 118
});                                                                                                                   // 81
RocketChat.API.v1.addRoute(['dm.list', 'im.list'], {                                                                  // 121
	authRequired: true                                                                                                   // 121
}, {                                                                                                                  // 121
	get: function () {                                                                                                   // 122
		var _getPaginationItems2 = this.getPaginationItems(),                                                               // 122
		    offset = _getPaginationItems2.offset,                                                                           // 122
		    count = _getPaginationItems2.count;                                                                             // 122
                                                                                                                      //
		var _parseJsonQuery2 = this.parseJsonQuery(),                                                                       // 122
		    sort = _parseJsonQuery2.sort,                                                                                   // 122
		    fields = _parseJsonQuery2.fields;                                                                               // 122
                                                                                                                      //
		var rooms = _.pluck(RocketChat.models.Subscriptions.findByTypeAndUserId('d', this.userId).fetch(), '_room');        // 125
                                                                                                                      //
		var totalCount = rooms.length;                                                                                      // 126
		rooms = RocketChat.models.Rooms.processQueryOptionsOnResult(rooms, {                                                // 128
			sort: sort ? sort : {                                                                                              // 129
				name: 1                                                                                                           // 129
			},                                                                                                                 // 129
			skip: offset,                                                                                                      // 130
			limit: count,                                                                                                      // 131
			fields: Object.assign({}, fields, RocketChat.API.v1.defaultFieldsToExclude)                                        // 132
		});                                                                                                                 // 128
		return RocketChat.API.v1.success({                                                                                  // 135
			ims: rooms,                                                                                                        // 136
			offset: offset,                                                                                                    // 137
			count: rooms.length,                                                                                               // 138
			total: totalCount                                                                                                  // 139
		});                                                                                                                 // 135
	}                                                                                                                    // 141
});                                                                                                                   // 121
RocketChat.API.v1.addRoute(['dm.list.everyone', 'im.list.everyone'], {                                                // 144
	authRequired: true                                                                                                   // 144
}, {                                                                                                                  // 144
	get: function () {                                                                                                   // 145
		if (!RocketChat.authz.hasPermission(this.userId, 'view-room-administration')) {                                     // 146
			return RocketChat.API.v1.unauthorized();                                                                           // 147
		}                                                                                                                   // 148
                                                                                                                      //
		var _getPaginationItems3 = this.getPaginationItems(),                                                               // 145
		    offset = _getPaginationItems3.offset,                                                                           // 145
		    count = _getPaginationItems3.count;                                                                             // 145
                                                                                                                      //
		var _parseJsonQuery3 = this.parseJsonQuery(),                                                                       // 145
		    sort = _parseJsonQuery3.sort,                                                                                   // 145
		    fields = _parseJsonQuery3.fields,                                                                               // 145
		    query = _parseJsonQuery3.query;                                                                                 // 145
                                                                                                                      //
		var ourQuery = Object.assign({}, query, {                                                                           // 153
			t: 'd'                                                                                                             // 153
		});                                                                                                                 // 153
		var rooms = RocketChat.models.Rooms.find(ourQuery, {                                                                // 155
			sort: sort ? sort : {                                                                                              // 156
				name: 1                                                                                                           // 156
			},                                                                                                                 // 156
			skip: offset,                                                                                                      // 157
			limit: count,                                                                                                      // 158
			fields: Object.assign({}, fields, RocketChat.API.v1.defaultFieldsToExclude)                                        // 159
		}).fetch();                                                                                                         // 155
		return RocketChat.API.v1.success({                                                                                  // 162
			ims: rooms,                                                                                                        // 163
			offset: offset,                                                                                                    // 164
			count: rooms.length,                                                                                               // 165
			total: RocketChat.models.Rooms.find(ourQuery).count()                                                              // 166
		});                                                                                                                 // 162
	}                                                                                                                    // 168
});                                                                                                                   // 144
RocketChat.API.v1.addRoute(['dm.open', 'im.open'], {                                                                  // 171
	authRequired: true                                                                                                   // 171
}, {                                                                                                                  // 171
	post: function () {                                                                                                  // 172
		var findResult = findDirectMessageRoomById(this.bodyParams.roomId, this.userId); //The find method returns either with the group or the failure
                                                                                                                      //
		if (findResult.statusCode) {                                                                                        // 176
			return findResult;                                                                                                 // 177
		}                                                                                                                   // 178
                                                                                                                      //
		if (findResult.open) {                                                                                              // 180
			return RocketChat.API.v1.failure("The direct message room, " + this.bodyParams.name + ", is already open for the sender");
		}                                                                                                                   // 182
                                                                                                                      //
		Meteor.runAsUser(this.userId, function () {                                                                         // 184
			Meteor.call('openRoom', findResult.rid);                                                                           // 185
		});                                                                                                                 // 186
		return RocketChat.API.v1.success();                                                                                 // 188
	}                                                                                                                    // 189
});                                                                                                                   // 171
RocketChat.API.v1.addRoute(['dm.setTopic', 'im.setTopic'], {                                                          // 192
	authRequired: true                                                                                                   // 192
}, {                                                                                                                  // 192
	post: function () {                                                                                                  // 193
		var _this = this;                                                                                                   // 193
                                                                                                                      //
		if (!this.bodyParams.topic || !this.bodyParams.topic.trim()) {                                                      // 194
			return RocketChat.API.v1.failure('The bodyParam "topic" is required');                                             // 195
		}                                                                                                                   // 196
                                                                                                                      //
		var findResult = findDirectMessageRoomById(this.bodyParams.roomId, this.userId); //The find method returns either with the group or the failure
                                                                                                                      //
		if (findResult.statusCode) {                                                                                        // 201
			return findResult;                                                                                                 // 202
		}                                                                                                                   // 203
                                                                                                                      //
		Meteor.runAsUser(this.userId, function () {                                                                         // 205
			Meteor.call('saveRoomSettings', findResult.rid, 'roomTopic', _this.bodyParams.topic);                              // 206
		});                                                                                                                 // 207
		return RocketChat.API.v1.success({                                                                                  // 209
			topic: this.bodyParams.topic                                                                                       // 210
		});                                                                                                                 // 209
	}                                                                                                                    // 212
});                                                                                                                   // 192
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"integrations.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_api/server/v1/integrations.js                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
RocketChat.API.v1.addRoute('integrations.create', {                                                                   // 1
	authRequired: true                                                                                                   // 1
}, {                                                                                                                  // 1
	post: function () {                                                                                                  // 2
		var _this = this;                                                                                                   // 2
                                                                                                                      //
		check(this.bodyParams, Match.ObjectIncluding({                                                                      // 3
			type: String,                                                                                                      // 4
			name: String,                                                                                                      // 5
			enabled: Boolean,                                                                                                  // 6
			username: String,                                                                                                  // 7
			urls: Match.Maybe([String]),                                                                                       // 8
			channel: String,                                                                                                   // 9
			event: Match.Maybe(String),                                                                                        // 10
			triggerWords: Match.Maybe([String]),                                                                               // 11
			alias: Match.Maybe(String),                                                                                        // 12
			avatar: Match.Maybe(String),                                                                                       // 13
			emoji: Match.Maybe(String),                                                                                        // 14
			token: Match.Maybe(String),                                                                                        // 15
			scriptEnabled: Boolean,                                                                                            // 16
			script: Match.Maybe(String),                                                                                       // 17
			targetChannel: Match.Maybe(String)                                                                                 // 18
		}));                                                                                                                // 3
		var integration = void 0;                                                                                           // 21
                                                                                                                      //
		switch (this.bodyParams.type) {                                                                                     // 23
			case 'webhook-outgoing':                                                                                           // 24
				Meteor.runAsUser(this.userId, function () {                                                                       // 25
					integration = Meteor.call('addOutgoingIntegration', _this.bodyParams);                                           // 26
				});                                                                                                               // 27
				break;                                                                                                            // 28
                                                                                                                      //
			case 'webhook-incoming':                                                                                           // 29
				Meteor.runAsUser(this.userId, function () {                                                                       // 30
					integration = Meteor.call('addIncomingIntegration', _this.bodyParams);                                           // 31
				});                                                                                                               // 32
				break;                                                                                                            // 33
                                                                                                                      //
			default:                                                                                                           // 34
				return RocketChat.API.v1.failure('Invalid integration type.');                                                    // 35
		}                                                                                                                   // 23
                                                                                                                      //
		return RocketChat.API.v1.success({                                                                                  // 38
			integration: integration                                                                                           // 38
		});                                                                                                                 // 38
	}                                                                                                                    // 39
});                                                                                                                   // 1
RocketChat.API.v1.addRoute('integrations.history', {                                                                  // 42
	authRequired: true                                                                                                   // 42
}, {                                                                                                                  // 42
	get: function () {                                                                                                   // 43
		if (!RocketChat.authz.hasPermission(this.userId, 'manage-integrations')) {                                          // 44
			return RocketChat.API.v1.unauthorized();                                                                           // 45
		}                                                                                                                   // 46
                                                                                                                      //
		if (!this.queryParams.id || this.queryParams.id.trim() === '') {                                                    // 48
			return RocketChat.API.v1.failure('Invalid integration id.');                                                       // 49
		}                                                                                                                   // 50
                                                                                                                      //
		var id = this.queryParams.id;                                                                                       // 52
                                                                                                                      //
		var _getPaginationItems = this.getPaginationItems(),                                                                // 43
		    offset = _getPaginationItems.offset,                                                                            // 43
		    count = _getPaginationItems.count;                                                                              // 43
                                                                                                                      //
		var _parseJsonQuery = this.parseJsonQuery(),                                                                        // 43
		    sort = _parseJsonQuery.sort,                                                                                    // 43
		    fields = _parseJsonQuery.fields,                                                                                // 43
		    query = _parseJsonQuery.query;                                                                                  // 43
                                                                                                                      //
		var ourQuery = Object.assign({}, query, {                                                                           // 56
			'integration._id': id                                                                                              // 56
		});                                                                                                                 // 56
		var history = RocketChat.models.IntegrationHistory.find(ourQuery, {                                                 // 57
			sort: sort ? sort : {                                                                                              // 58
				_updatedAt: -1                                                                                                    // 58
			},                                                                                                                 // 58
			skip: offset,                                                                                                      // 59
			limit: count,                                                                                                      // 60
			fields: fields                                                                                                     // 61
		}).fetch();                                                                                                         // 57
		return RocketChat.API.v1.success({                                                                                  // 64
			history: history,                                                                                                  // 65
			offset: offset,                                                                                                    // 66
			items: history.length,                                                                                             // 67
			total: RocketChat.models.IntegrationHistory.find(ourQuery).count()                                                 // 68
		});                                                                                                                 // 64
	}                                                                                                                    // 70
});                                                                                                                   // 42
RocketChat.API.v1.addRoute('integrations.list', {                                                                     // 73
	authRequired: true                                                                                                   // 73
}, {                                                                                                                  // 73
	get: function () {                                                                                                   // 74
		if (!RocketChat.authz.hasPermission(this.userId, 'manage-integrations')) {                                          // 75
			return RocketChat.API.v1.unauthorized();                                                                           // 76
		}                                                                                                                   // 77
                                                                                                                      //
		var _getPaginationItems2 = this.getPaginationItems(),                                                               // 74
		    offset = _getPaginationItems2.offset,                                                                           // 74
		    count = _getPaginationItems2.count;                                                                             // 74
                                                                                                                      //
		var _parseJsonQuery2 = this.parseJsonQuery(),                                                                       // 74
		    sort = _parseJsonQuery2.sort,                                                                                   // 74
		    fields = _parseJsonQuery2.fields,                                                                               // 74
		    query = _parseJsonQuery2.query;                                                                                 // 74
                                                                                                                      //
		var ourQuery = Object.assign({}, query);                                                                            // 82
		var integrations = RocketChat.models.Integrations.find(ourQuery, {                                                  // 83
			sort: sort ? sort : {                                                                                              // 84
				ts: -1                                                                                                            // 84
			},                                                                                                                 // 84
			skip: offset,                                                                                                      // 85
			limit: count,                                                                                                      // 86
			fields: fields                                                                                                     // 87
		}).fetch();                                                                                                         // 83
		return RocketChat.API.v1.success({                                                                                  // 90
			integrations: integrations,                                                                                        // 91
			offset: offset,                                                                                                    // 92
			items: integrations.length,                                                                                        // 93
			total: RocketChat.models.Integrations.find(ourQuery).count()                                                       // 94
		});                                                                                                                 // 90
	}                                                                                                                    // 96
});                                                                                                                   // 73
RocketChat.API.v1.addRoute('integrations.remove', {                                                                   // 99
	authRequired: true                                                                                                   // 99
}, {                                                                                                                  // 99
	post: function () {                                                                                                  // 100
		check(this.bodyParams, Match.ObjectIncluding({                                                                      // 101
			type: String,                                                                                                      // 102
			target_url: Match.Maybe(String),                                                                                   // 103
			integrationId: Match.Maybe(String)                                                                                 // 104
		}));                                                                                                                // 101
                                                                                                                      //
		if (!this.bodyParams.target_url && !this.bodyParams.integrationId) {                                                // 107
			return RocketChat.API.v1.failure('An integrationId or target_url needs to be provided.');                          // 108
		}                                                                                                                   // 109
                                                                                                                      //
		switch (this.bodyParams.type) {                                                                                     // 111
			case 'webhook-outgoing':                                                                                           // 112
				var integration = void 0;                                                                                         // 113
                                                                                                                      //
				if (this.bodyParams.target_url) {                                                                                 // 115
					integration = RocketChat.models.Integrations.findOne({                                                           // 116
						urls: this.bodyParams.target_url                                                                                // 116
					});                                                                                                              // 116
				} else if (this.bodyParams.integrationId) {                                                                       // 117
					integration = RocketChat.models.Integrations.findOne({                                                           // 118
						_id: this.bodyParams.integrationId                                                                              // 118
					});                                                                                                              // 118
				}                                                                                                                 // 119
                                                                                                                      //
				if (!integration) {                                                                                               // 121
					return RocketChat.API.v1.failure('No integration found.');                                                       // 122
				}                                                                                                                 // 123
                                                                                                                      //
				Meteor.runAsUser(this.userId, function () {                                                                       // 125
					Meteor.call('deleteOutgoingIntegration', integration._id);                                                       // 126
				});                                                                                                               // 127
				return RocketChat.API.v1.success({                                                                                // 129
					integration: integration                                                                                         // 130
				});                                                                                                               // 129
                                                                                                                      //
			case 'webhook-incoming':                                                                                           // 132
				integration = RocketChat.models.Integrations.findOne({                                                            // 133
					_id: this.bodyParams.integrationId                                                                               // 133
				});                                                                                                               // 133
                                                                                                                      //
				if (!integration) {                                                                                               // 135
					return RocketChat.API.v1.failure('No integration found.');                                                       // 136
				}                                                                                                                 // 137
                                                                                                                      //
				Meteor.runAsUser(this.userId, function () {                                                                       // 139
					Meteor.call('deleteIncomingIntegration', integration._id);                                                       // 140
				});                                                                                                               // 141
				return RocketChat.API.v1.success({                                                                                // 143
					integration: integration                                                                                         // 144
				});                                                                                                               // 143
                                                                                                                      //
			default:                                                                                                           // 146
				return RocketChat.API.v1.failure('Invalid integration type.');                                                    // 147
		}                                                                                                                   // 111
	}                                                                                                                    // 149
});                                                                                                                   // 99
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"misc.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_api/server/v1/misc.js                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
RocketChat.API.v1.addRoute('info', {                                                                                  // 1
	authRequired: false                                                                                                  // 1
}, {                                                                                                                  // 1
	get: function () {                                                                                                   // 2
		var user = this.getLoggedInUser();                                                                                  // 3
                                                                                                                      //
		if (user && RocketChat.authz.hasRole(user._id, 'admin')) {                                                          // 5
			return RocketChat.API.v1.success({                                                                                 // 6
				info: RocketChat.Info                                                                                             // 7
			});                                                                                                                // 6
		}                                                                                                                   // 9
                                                                                                                      //
		return RocketChat.API.v1.success({                                                                                  // 11
			info: {                                                                                                            // 12
				'version': RocketChat.Info.version                                                                                // 13
			}                                                                                                                  // 12
		});                                                                                                                 // 11
	}                                                                                                                    // 16
});                                                                                                                   // 1
RocketChat.API.v1.addRoute('me', {                                                                                    // 19
	authRequired: true                                                                                                   // 19
}, {                                                                                                                  // 19
	get: function () {                                                                                                   // 20
		return RocketChat.API.v1.success(_.pick(this.user, ['_id', 'name', 'emails', 'status', 'statusConnection', 'username', 'utcOffset', 'active', 'language']));
	}                                                                                                                    // 32
});                                                                                                                   // 19
var onlineCache = 0;                                                                                                  // 35
var onlineCacheDate = 0;                                                                                              // 36
var cacheInvalid = 60000; // 1 minute                                                                                 // 37
                                                                                                                      //
RocketChat.API.v1.addRoute('shield.svg', {                                                                            // 38
	authRequired: false                                                                                                  // 38
}, {                                                                                                                  // 38
	get: function () {                                                                                                   // 39
		var _queryParams = this.queryParams,                                                                                // 39
		    type = _queryParams.type,                                                                                       // 39
		    channel = _queryParams.channel,                                                                                 // 39
		    name = _queryParams.name,                                                                                       // 39
		    icon = _queryParams.icon;                                                                                       // 39
                                                                                                                      //
		if (!RocketChat.settings.get('API_Enable_Shields')) {                                                               // 41
			throw new Meteor.Error('error-endpoint-disabled', 'This endpoint is disabled', {                                   // 42
				route: '/api/v1/shields.svg'                                                                                      // 42
			});                                                                                                                // 42
		}                                                                                                                   // 43
                                                                                                                      //
		var types = RocketChat.settings.get('API_Shield_Types');                                                            // 44
                                                                                                                      //
		if (type && types !== '*' && !types.split(',').map(function (t) {                                                   // 45
			return t.trim();                                                                                                   // 45
		}).includes(type)) {                                                                                                // 45
			throw new Meteor.Error('error-shield-disabled', 'This shield type is disabled', {                                  // 46
				route: '/api/v1/shields.svg'                                                                                      // 46
			});                                                                                                                // 46
		}                                                                                                                   // 47
                                                                                                                      //
		var hideIcon = icon === 'false';                                                                                    // 48
                                                                                                                      //
		if (hideIcon && (!name || !name.trim())) {                                                                          // 49
			return RocketChat.API.v1.failure('Name cannot be empty when icon is hidden');                                      // 50
		}                                                                                                                   // 51
                                                                                                                      //
		var text = void 0;                                                                                                  // 52
                                                                                                                      //
		switch (type) {                                                                                                     // 53
			case 'online':                                                                                                     // 54
				if (Date.now() - onlineCacheDate > cacheInvalid) {                                                                // 55
					onlineCache = RocketChat.models.Users.findUsersNotOffline().count();                                             // 56
					onlineCacheDate = Date.now();                                                                                    // 57
				}                                                                                                                 // 58
                                                                                                                      //
				text = onlineCache + " " + TAPi18n.__('Online');                                                                  // 59
				break;                                                                                                            // 60
                                                                                                                      //
			case 'channel':                                                                                                    // 61
				if (!channel) {                                                                                                   // 62
					return RocketChat.API.v1.failure('Shield channel is required for type "channel"');                               // 63
				}                                                                                                                 // 64
                                                                                                                      //
				text = "#" + channel;                                                                                             // 65
				break;                                                                                                            // 66
                                                                                                                      //
			default:                                                                                                           // 67
				text = TAPi18n.__('Join_Chat').toUpperCase();                                                                     // 68
		}                                                                                                                   // 53
                                                                                                                      //
		var iconSize = hideIcon ? 7 : 24;                                                                                   // 70
		var leftSize = name ? name.length * 6 + 7 + iconSize : iconSize;                                                    // 71
		var rightSize = text.length * 6 + 20;                                                                               // 72
		var width = leftSize + rightSize;                                                                                   // 73
		var height = 20;                                                                                                    // 74
		return {                                                                                                            // 75
			headers: {                                                                                                         // 76
				'Content-Type': 'image/svg+xml;charset=utf-8'                                                                     // 76
			},                                                                                                                 // 76
			body: ("\n\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"" + width + "\" height=\"" + height + "\">\n\t\t\t\t  <linearGradient id=\"b\" x2=\"0\" y2=\"100%\">\n\t\t\t\t    <stop offset=\"0\" stop-color=\"#bbb\" stop-opacity=\".1\"/>\n\t\t\t\t    <stop offset=\"1\" stop-opacity=\".1\"/>\n\t\t\t\t  </linearGradient>\n\t\t\t\t  <mask id=\"a\">\n\t\t\t\t    <rect width=\"" + width + "\" height=\"" + height + "\" rx=\"3\" fill=\"#fff\"/>\n\t\t\t\t  </mask>\n\t\t\t\t  <g mask=\"url(#a)\">\n\t\t\t\t    <path fill=\"#555\" d=\"M0 0h" + leftSize + "v" + height + "H0z\"/>\n\t\t\t\t    <path fill=\"#4c1\" d=\"M" + leftSize + " 0h" + rightSize + "v" + height + "H" + leftSize + "z\"/>\n\t\t\t\t    <path fill=\"url(#b)\" d=\"M0 0h" + width + "v" + height + "H0z\"/>\n\t\t\t\t  </g>\n\t\t\t\t    " + (hideIcon ? '' : '<image x="5" y="3" width="14" height="14" xlink:href="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiNDMTI3MkQiIGQ9Ik01MDIuNTg2LDI1NS4zMjJjMC0yNS4yMzYtNy41NS00OS40MzYtMjIuNDQ1LTcxLjkzMmMtMTMuMzczLTIwLjE5NS0zMi4xMDktMzguMDcyLTU1LjY4Ny01My4xMzJDMzc4LjkzNywxMDEuMTgyLDMxOS4xMDgsODUuMTY4LDI1Niw4NS4xNjhjLTIxLjA3OSwwLTQxLjg1NSwxLjc4MS02Mi4wMDksNS4zMWMtMTIuNTA0LTExLjcwMi0yNy4xMzktMjIuMjMyLTQyLjYyNy0zMC41NkM2OC42MTgsMTkuODE4LDAsNTguOTc1LDAsNTguOTc1czYzLjc5OCw1Mi40MDksNTMuNDI0LDk4LjM1Yy0yOC41NDIsMjguMzEzLTQ0LjAxLDYyLjQ1My00NC4wMSw5Ny45OThjMCwwLjExMywwLjAwNiwwLjIyNiwwLjAwNiwwLjM0YzAsMC4xMTMtMC4wMDYsMC4yMjYtMC4wMDYsMC4zMzljMCwzNS41NDUsMTUuNDY5LDY5LjY4NSw0NC4wMSw5Ny45OTlDNjMuNzk4LDM5OS45NCwwLDQ1Mi4zNSwwLDQ1Mi4zNXM2OC42MTgsMzkuMTU2LDE1MS4zNjMtMC45NDNjMTUuNDg4LTguMzI3LDMwLjEyNC0xOC44NTcsNDIuNjI3LTMwLjU2YzIwLjE1NCwzLjUyOCw0MC45MzEsNS4zMSw2Mi4wMDksNS4zMWM2My4xMDgsMCwxMjIuOTM3LTE2LjAxNCwxNjguNDU0LTQ1LjA5MWMyMy41NzctMTUuMDYsNDIuMzEzLTMyLjkzNyw1NS42ODctNTMuMTMyYzE0Ljg5Ni0yMi40OTYsMjIuNDQ1LTQ2LjY5NSwyMi40NDUtNzEuOTMyYzAtMC4xMTMtMC4wMDYtMC4yMjYtMC4wMDYtMC4zMzlDNTAyLjU4LDI1NS41NDgsNTAyLjU4NiwyNTUuNDM2LDUwMi41ODYsMjU1LjMyMnoiLz48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMjU2LDEyMC44NDdjMTE2Ljg1NCwwLDIxMS41ODYsNjAuNTA5LDIxMS41ODYsMTM1LjE1NGMwLDc0LjY0MS05NC43MzEsMTM1LjE1NS0yMTEuNTg2LDEzNS4xNTVjLTI2LjAxOSwwLTUwLjkzNy0zLjAwOS03My45NTktOC40OTVjLTIzLjM5NiwyOC4xNDctNzQuODY4LDY3LjI4LTEyNC44NjksNTQuNjI5YzE2LjI2NS0xNy40Nyw0MC4zNjEtNDYuOTg4LDM1LjIwMS05NS42MDNjLTI5Ljk2OC0yMy4zMjItNDcuOTU5LTUzLjE2My00Ny45NTktODUuNjg2QzQ0LjQxNCwxODEuMzU2LDEzOS4xNDUsMTIwLjg0NywyNTYsMTIwLjg0NyIvPjxnPjxnPjxjaXJjbGUgZmlsbD0iI0MxMjcyRCIgY3g9IjI1NiIgY3k9IjI2MC4zNTIiIHI9IjI4LjEwNSIvPjwvZz48Zz48Y2lyY2xlIGZpbGw9IiNDMTI3MkQiIGN4PSIzNTMuNzI4IiBjeT0iMjYwLjM1MiIgcj0iMjguMTA0Ii8+PC9nPjxnPjxjaXJjbGUgZmlsbD0iI0MxMjcyRCIgY3g9IjE1OC4yNzIiIGN5PSIyNjAuMzUyIiByPSIyOC4xMDUiLz48L2c+PC9nPjxnPjxwYXRoIGZpbGw9IiNDQ0NDQ0MiIGQ9Ik0yNTYsMzczLjM3M2MtMjYuMDE5LDAtNTAuOTM3LTIuNjA3LTczLjk1OS03LjM2MmMtMjAuNjU5LDIxLjU0LTYzLjIwOSw1MC40OTYtMTA3LjMwNyw0OS40M2MtNS44MDYsOC44MDUtMTIuMTIxLDE2LjAwNi0xNy41NjIsMjEuODVjNTAsMTIuNjUxLDEwMS40NzMtMjYuNDgxLDEyNC44NjktNTQuNjI5YzIzLjAyMyw1LjQ4Niw0Ny45NDEsOC40OTUsNzMuOTU5LDguNDk1YzExNS45MTcsMCwyMTAuMDQ4LTU5LjU1LDIxMS41NTEtMTMzLjM2NEM0NjYuMDQ4LDMyMS43NjUsMzcxLjkxNywzNzMuMzczLDI1NiwzNzMuMzczeiIvPjwvZz48L3N2Zz4="/>') + "\n\t\t\t\t  <g fill=\"#fff\" font-family=\"DejaVu Sans,Verdana,Geneva,sans-serif\" font-size=\"11\">\n\t\t\t\t\t\t" + (name ? "<text x=\"" + iconSize + "\" y=\"15\" fill=\"#010101\" fill-opacity=\".3\">" + name + "</text>\n\t\t\t\t    <text x=\"" + iconSize + "\" y=\"14\">" + name + "</text>" : '') + "\n\t\t\t\t    <text x=\"" + (leftSize + 7) + "\" y=\"15\" fill=\"#010101\" fill-opacity=\".3\">" + text + "</text>\n\t\t\t\t    <text x=\"" + (leftSize + 7) + "\" y=\"14\">" + text + "</text>\n\t\t\t\t  </g>\n\t\t\t\t</svg>\n\t\t\t").trim().replace(/\>[\s]+\</gm, '><')
		};                                                                                                                  // 75
	}                                                                                                                    // 101
});                                                                                                                   // 38
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"settings.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_api/server/v1/settings.js                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// settings endpoints                                                                                                 // 1
RocketChat.API.v1.addRoute('settings', {                                                                              // 2
	authRequired: true                                                                                                   // 2
}, {                                                                                                                  // 2
	get: function () {                                                                                                   // 3
		var _getPaginationItems = this.getPaginationItems(),                                                                // 3
		    offset = _getPaginationItems.offset,                                                                            // 3
		    count = _getPaginationItems.count;                                                                              // 3
                                                                                                                      //
		var _parseJsonQuery = this.parseJsonQuery(),                                                                        // 3
		    sort = _parseJsonQuery.sort,                                                                                    // 3
		    fields = _parseJsonQuery.fields,                                                                                // 3
		    query = _parseJsonQuery.query;                                                                                  // 3
                                                                                                                      //
		var ourQuery = {                                                                                                    // 7
			hidden: {                                                                                                          // 8
				$ne: true                                                                                                         // 8
			}                                                                                                                  // 8
		};                                                                                                                  // 7
                                                                                                                      //
		if (!RocketChat.authz.hasPermission(this.userId, 'view-privileged-setting')) {                                      // 11
			ourQuery.public = true;                                                                                            // 12
		}                                                                                                                   // 13
                                                                                                                      //
		ourQuery = Object.assign({}, query, ourQuery);                                                                      // 15
		var settings = RocketChat.models.Settings.find(ourQuery, {                                                          // 17
			sort: sort ? sort : {                                                                                              // 18
				_id: 1                                                                                                            // 18
			},                                                                                                                 // 18
			skip: offset,                                                                                                      // 19
			limit: count,                                                                                                      // 20
			fields: Object.assign({                                                                                            // 21
				_id: 1,                                                                                                           // 21
				value: 1                                                                                                          // 21
			}, fields)                                                                                                         // 21
		}).fetch();                                                                                                         // 17
		return RocketChat.API.v1.success({                                                                                  // 24
			settings: settings,                                                                                                // 25
			count: settings.length,                                                                                            // 26
			offset: offset,                                                                                                    // 27
			total: RocketChat.models.Settings.find(ourQuery).count()                                                           // 28
		});                                                                                                                 // 24
	}                                                                                                                    // 30
});                                                                                                                   // 2
RocketChat.API.v1.addRoute('settings/:_id', {                                                                         // 33
	authRequired: true                                                                                                   // 33
}, {                                                                                                                  // 33
	get: function () {                                                                                                   // 34
		if (!RocketChat.authz.hasPermission(this.userId, 'view-privileged-setting')) {                                      // 35
			return RocketChat.API.v1.unauthorized();                                                                           // 36
		}                                                                                                                   // 37
                                                                                                                      //
		return RocketChat.API.v1.success(_.pick(RocketChat.models.Settings.findOneNotHiddenById(this.urlParams._id), '_id', 'value'));
	},                                                                                                                   // 40
	post: function () {                                                                                                  // 41
		if (!RocketChat.authz.hasPermission(this.userId, 'edit-privileged-setting')) {                                      // 42
			return RocketChat.API.v1.unauthorized();                                                                           // 43
		}                                                                                                                   // 44
                                                                                                                      //
		check(this.bodyParams, {                                                                                            // 46
			value: Match.Any                                                                                                   // 47
		});                                                                                                                 // 46
                                                                                                                      //
		if (RocketChat.models.Settings.updateValueNotHiddenById(this.urlParams._id, this.bodyParams.value)) {               // 50
			return RocketChat.API.v1.success();                                                                                // 51
		}                                                                                                                   // 52
                                                                                                                      //
		return RocketChat.API.v1.failure();                                                                                 // 54
	}                                                                                                                    // 55
});                                                                                                                   // 33
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"stats.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_api/server/v1/stats.js                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
RocketChat.API.v1.addRoute('statistics', {                                                                            // 1
	authRequired: true                                                                                                   // 1
}, {                                                                                                                  // 1
	get: function () {                                                                                                   // 2
		var refresh = false;                                                                                                // 3
                                                                                                                      //
		if (typeof this.queryParams.refresh !== 'undefined' && this.queryParams.refresh === 'true') {                       // 4
			refresh = true;                                                                                                    // 5
		}                                                                                                                   // 6
                                                                                                                      //
		var stats = void 0;                                                                                                 // 8
		Meteor.runAsUser(this.userId, function () {                                                                         // 9
			stats = Meteor.call('getStatistics', refresh);                                                                     // 10
		});                                                                                                                 // 11
		return RocketChat.API.v1.success({                                                                                  // 13
			statistics: stats                                                                                                  // 14
		});                                                                                                                 // 13
	}                                                                                                                    // 16
});                                                                                                                   // 1
RocketChat.API.v1.addRoute('statistics.list', {                                                                       // 19
	authRequired: true                                                                                                   // 19
}, {                                                                                                                  // 19
	get: function () {                                                                                                   // 20
		if (!RocketChat.authz.hasPermission(this.userId, 'view-statistics')) {                                              // 21
			return RocketChat.API.v1.unauthorized();                                                                           // 22
		}                                                                                                                   // 23
                                                                                                                      //
		var _getPaginationItems = this.getPaginationItems(),                                                                // 20
		    offset = _getPaginationItems.offset,                                                                            // 20
		    count = _getPaginationItems.count;                                                                              // 20
                                                                                                                      //
		var _parseJsonQuery = this.parseJsonQuery(),                                                                        // 20
		    sort = _parseJsonQuery.sort,                                                                                    // 20
		    fields = _parseJsonQuery.fields,                                                                                // 20
		    query = _parseJsonQuery.query;                                                                                  // 20
                                                                                                                      //
		var ourQuery = Object.assign({}, query);                                                                            // 28
		var statistics = RocketChat.models.Statistics.find(ourQuery, {                                                      // 30
			sort: sort ? sort : {                                                                                              // 31
				name: 1                                                                                                           // 31
			},                                                                                                                 // 31
			skip: offset,                                                                                                      // 32
			limit: count,                                                                                                      // 33
			fields: Object.assign({}, fields, RocketChat.API.v1.defaultFieldsToExclude)                                        // 34
		}).fetch();                                                                                                         // 30
		return RocketChat.API.v1.success({                                                                                  // 37
			statistics: statistics,                                                                                            // 38
			count: statistics.length,                                                                                          // 39
			offset: offset,                                                                                                    // 40
			total: RocketChat.models.Statistics.find(ourQuery).count()                                                         // 41
		});                                                                                                                 // 37
	}                                                                                                                    // 43
});                                                                                                                   // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"users.js":function(require){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_api/server/v1/users.js                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
RocketChat.API.v1.addRoute('users.create', {                                                                          // 1
	authRequired: true                                                                                                   // 1
}, {                                                                                                                  // 1
	post: function () {                                                                                                  // 2
		var _this = this;                                                                                                   // 2
                                                                                                                      //
		check(this.bodyParams, {                                                                                            // 3
			email: String,                                                                                                     // 4
			name: String,                                                                                                      // 5
			password: String,                                                                                                  // 6
			username: String,                                                                                                  // 7
			active: Match.Maybe(Boolean),                                                                                      // 8
			roles: Match.Maybe(Array),                                                                                         // 9
			joinDefaultChannels: Match.Maybe(Boolean),                                                                         // 10
			requirePasswordChange: Match.Maybe(Boolean),                                                                       // 11
			sendWelcomeEmail: Match.Maybe(Boolean),                                                                            // 12
			verified: Match.Maybe(Boolean),                                                                                    // 13
			customFields: Match.Maybe(Object)                                                                                  // 14
		}); //New change made by pull request #5152                                                                         // 3
                                                                                                                      //
		if (typeof this.bodyParams.joinDefaultChannels === 'undefined') {                                                   // 18
			this.bodyParams.joinDefaultChannels = true;                                                                        // 19
		}                                                                                                                   // 20
                                                                                                                      //
		var newUserId = RocketChat.saveUser(this.userId, this.bodyParams);                                                  // 22
                                                                                                                      //
		if (this.bodyParams.customFields) {                                                                                 // 24
			RocketChat.saveCustomFields(newUserId, this.bodyParams.customFields);                                              // 25
		}                                                                                                                   // 26
                                                                                                                      //
		if (typeof this.bodyParams.active !== 'undefined') {                                                                // 28
			Meteor.runAsUser(this.userId, function () {                                                                        // 29
				Meteor.call('setUserActiveStatus', newUserId, _this.bodyParams.active);                                           // 30
			});                                                                                                                // 31
		}                                                                                                                   // 32
                                                                                                                      //
		return RocketChat.API.v1.success({                                                                                  // 34
			user: RocketChat.models.Users.findOneById(newUserId, {                                                             // 34
				fields: RocketChat.API.v1.defaultFieldsToExclude                                                                  // 34
			})                                                                                                                 // 34
		});                                                                                                                 // 34
	}                                                                                                                    // 35
});                                                                                                                   // 1
RocketChat.API.v1.addRoute('users.delete', {                                                                          // 38
	authRequired: true                                                                                                   // 38
}, {                                                                                                                  // 38
	post: function () {                                                                                                  // 39
		if (!RocketChat.authz.hasPermission(this.userId, 'delete-user')) {                                                  // 40
			return RocketChat.API.v1.unauthorized();                                                                           // 41
		}                                                                                                                   // 42
                                                                                                                      //
		var user = this.getUserFromParams();                                                                                // 44
		Meteor.runAsUser(this.userId, function () {                                                                         // 46
			Meteor.call('deleteUser', user._id);                                                                               // 47
		});                                                                                                                 // 48
		return RocketChat.API.v1.success();                                                                                 // 50
	}                                                                                                                    // 51
});                                                                                                                   // 38
RocketChat.API.v1.addRoute('users.getAvatar', {                                                                       // 54
	authRequired: false                                                                                                  // 54
}, {                                                                                                                  // 54
	get: function () {                                                                                                   // 55
		var user = this.getUserFromParams();                                                                                // 56
		var url = RocketChat.getURL("/avatar/" + user.username, {                                                           // 58
			cdn: false,                                                                                                        // 58
			full: true                                                                                                         // 58
		});                                                                                                                 // 58
		this.response.setHeader('Location', url);                                                                           // 59
		return {                                                                                                            // 61
			statusCode: 307,                                                                                                   // 62
			body: url                                                                                                          // 63
		};                                                                                                                  // 61
	}                                                                                                                    // 65
});                                                                                                                   // 54
RocketChat.API.v1.addRoute('users.getPresence', {                                                                     // 68
	authRequired: true                                                                                                   // 68
}, {                                                                                                                  // 68
	get: function () {                                                                                                   // 69
		if (this.isUserFromParams()) {                                                                                      // 70
			var _user = RocketChat.models.Users.findOneById(this.userId);                                                      // 71
                                                                                                                      //
			return RocketChat.API.v1.success({                                                                                 // 72
				presence: _user.status,                                                                                           // 73
				connectionStatus: _user.statusConnection,                                                                         // 74
				lastLogin: _user.lastLogin                                                                                        // 75
			});                                                                                                                // 72
		}                                                                                                                   // 77
                                                                                                                      //
		var user = this.getUserFromParams();                                                                                // 79
		return RocketChat.API.v1.success({                                                                                  // 81
			presence: user.status                                                                                              // 82
		});                                                                                                                 // 81
	}                                                                                                                    // 84
});                                                                                                                   // 68
RocketChat.API.v1.addRoute('users.info', {                                                                            // 87
	authRequired: true                                                                                                   // 87
}, {                                                                                                                  // 87
	get: function () {                                                                                                   // 88
		var user = this.getUserFromParams();                                                                                // 89
		var result = void 0;                                                                                                // 91
		Meteor.runAsUser(this.userId, function () {                                                                         // 92
			result = Meteor.call('getFullUserData', {                                                                          // 93
				filter: user.username,                                                                                            // 93
				limit: 1                                                                                                          // 93
			});                                                                                                                // 93
		});                                                                                                                 // 94
                                                                                                                      //
		if (!result || result.length !== 1) {                                                                               // 96
			return RocketChat.API.v1.failure("Failed to get the user data for the userId of \"" + user._id + "\".");           // 97
		}                                                                                                                   // 98
                                                                                                                      //
		return RocketChat.API.v1.success({                                                                                  // 100
			user: result[0]                                                                                                    // 101
		});                                                                                                                 // 100
	}                                                                                                                    // 103
});                                                                                                                   // 87
RocketChat.API.v1.addRoute('users.list', {                                                                            // 106
	authRequired: true                                                                                                   // 106
}, {                                                                                                                  // 106
	get: function () {                                                                                                   // 107
		var _getPaginationItems = this.getPaginationItems(),                                                                // 107
		    offset = _getPaginationItems.offset,                                                                            // 107
		    count = _getPaginationItems.count;                                                                              // 107
                                                                                                                      //
		var _parseJsonQuery = this.parseJsonQuery(),                                                                        // 107
		    sort = _parseJsonQuery.sort,                                                                                    // 107
		    fields = _parseJsonQuery.fields,                                                                                // 107
		    query = _parseJsonQuery.query;                                                                                  // 107
                                                                                                                      //
		var fieldsToKeepFromRegularUsers = void 0;                                                                          // 111
                                                                                                                      //
		if (!RocketChat.authz.hasPermission(this.userId, 'view-full-other-user-info')) {                                    // 112
			fieldsToKeepFromRegularUsers = {                                                                                   // 113
				avatarOrigin: 0,                                                                                                  // 114
				emails: 0,                                                                                                        // 115
				phone: 0,                                                                                                         // 116
				statusConnection: 0,                                                                                              // 117
				createdAt: 0,                                                                                                     // 118
				lastLogin: 0,                                                                                                     // 119
				services: 0,                                                                                                      // 120
				requirePasswordChange: 0,                                                                                         // 121
				requirePasswordChangeReason: 0,                                                                                   // 122
				roles: 0,                                                                                                         // 123
				statusDefault: 0,                                                                                                 // 124
				_updatedAt: 0,                                                                                                    // 125
				customFields: 0                                                                                                   // 126
			};                                                                                                                 // 113
		}                                                                                                                   // 128
                                                                                                                      //
		var ourQuery = Object.assign({}, query);                                                                            // 130
		var ourFields = Object.assign({}, fields, fieldsToKeepFromRegularUsers, RocketChat.API.v1.defaultFieldsToExclude);  // 131
		var users = RocketChat.models.Users.find(ourQuery, {                                                                // 133
			sort: sort ? sort : {                                                                                              // 134
				username: 1                                                                                                       // 134
			},                                                                                                                 // 134
			skip: offset,                                                                                                      // 135
			limit: count,                                                                                                      // 136
			fields: ourFields                                                                                                  // 137
		}).fetch();                                                                                                         // 133
		return RocketChat.API.v1.success({                                                                                  // 140
			users: users,                                                                                                      // 141
			count: users.length,                                                                                               // 142
			offset: offset,                                                                                                    // 143
			total: RocketChat.models.Users.find(ourQuery).count()                                                              // 144
		});                                                                                                                 // 140
	}                                                                                                                    // 146
});                                                                                                                   // 106
RocketChat.API.v1.addRoute('users.register', {                                                                        // 149
	authRequired: false                                                                                                  // 149
}, {                                                                                                                  // 149
	post: function () {                                                                                                  // 150
		var _this2 = this;                                                                                                  // 150
                                                                                                                      //
		if (this.userId) {                                                                                                  // 151
			return RocketChat.API.v1.failure('Logged in users can not register again.');                                       // 152
		} //We set their username here, so require it                                                                       // 153
		//The `registerUser` checks for the other requirements                                                              // 156
                                                                                                                      //
                                                                                                                      //
		check(this.bodyParams, Match.ObjectIncluding({                                                                      // 157
			username: String                                                                                                   // 158
		})); //Register the user                                                                                            // 157
                                                                                                                      //
		var userId = Meteor.call('registerUser', this.bodyParams); //Now set their username                                 // 162
                                                                                                                      //
		Meteor.runAsUser(userId, function () {                                                                              // 165
			return Meteor.call('setUsername', _this2.bodyParams.username);                                                     // 165
		});                                                                                                                 // 165
		return RocketChat.API.v1.success({                                                                                  // 167
			user: RocketChat.models.Users.findOneById(userId, {                                                                // 167
				fields: RocketChat.API.v1.defaultFieldsToExclude                                                                  // 167
			})                                                                                                                 // 167
		});                                                                                                                 // 167
	}                                                                                                                    // 168
});                                                                                                                   // 149
RocketChat.API.v1.addRoute('users.resetAvatar', {                                                                     // 171
	authRequired: true                                                                                                   // 171
}, {                                                                                                                  // 171
	post: function () {                                                                                                  // 172
		var user = this.getUserFromParams();                                                                                // 173
                                                                                                                      //
		if (user._id === this.userId) {                                                                                     // 175
			Meteor.runAsUser(this.userId, function () {                                                                        // 176
				return Meteor.call('resetAvatar');                                                                                // 176
			});                                                                                                                // 176
		} else if (RocketChat.authz.hasPermission(this.userId, 'edit-other-user-info')) {                                   // 177
			Meteor.runAsUser(user._id, function () {                                                                           // 178
				return Meteor.call('resetAvatar');                                                                                // 178
			});                                                                                                                // 178
		} else {                                                                                                            // 179
			return RocketChat.API.v1.unauthorized();                                                                           // 180
		}                                                                                                                   // 181
                                                                                                                      //
		return RocketChat.API.v1.success();                                                                                 // 183
	}                                                                                                                    // 184
});                                                                                                                   // 171
RocketChat.API.v1.addRoute('users.setAvatar', {                                                                       // 187
	authRequired: true                                                                                                   // 187
}, {                                                                                                                  // 187
	post: function () {                                                                                                  // 188
		var _this3 = this;                                                                                                  // 188
                                                                                                                      //
		check(this.bodyParams, {                                                                                            // 189
			avatarUrl: Match.Maybe(String),                                                                                    // 189
			userId: Match.Maybe(String)                                                                                        // 189
		});                                                                                                                 // 189
		var user = void 0;                                                                                                  // 191
                                                                                                                      //
		if (this.isUserFromParams()) {                                                                                      // 192
			user = Meteor.users.findOne(this.userId);                                                                          // 193
		} else if (RocketChat.authz.hasPermission(this.userId, 'edit-other-user-info')) {                                   // 194
			user = this.getUserFromParams();                                                                                   // 195
		} else {                                                                                                            // 196
			return RocketChat.API.v1.unauthorized();                                                                           // 197
		}                                                                                                                   // 198
                                                                                                                      //
		if (this.bodyParams.avatarUrl) {                                                                                    // 200
			RocketChat.setUserAvatar(user, this.bodyParams.avatarUrl, '', 'url');                                              // 201
		} else {                                                                                                            // 202
			var Busboy = Npm.require('busboy');                                                                                // 203
                                                                                                                      //
			var busboy = new Busboy({                                                                                          // 204
				headers: this.request.headers                                                                                     // 204
			});                                                                                                                // 204
			Meteor.wrapAsync(function (callback) {                                                                             // 206
				busboy.on('file', Meteor.bindEnvironment(function (fieldname, file, filename, encoding, mimetype) {               // 207
					if (fieldname !== 'image') {                                                                                     // 208
						return callback(new Meteor.Error('invalid-field'));                                                             // 209
					}                                                                                                                // 210
                                                                                                                      //
					var imageData = [];                                                                                              // 212
					file.on('data', Meteor.bindEnvironment(function (data) {                                                         // 213
						imageData.push(data);                                                                                           // 214
					}));                                                                                                             // 215
					file.on('end', Meteor.bindEnvironment(function () {                                                              // 217
						RocketChat.setUserAvatar(user, Buffer.concat(imageData), mimetype, 'rest');                                     // 218
						callback();                                                                                                     // 219
					}));                                                                                                             // 220
                                                                                                                      //
					_this3.request.pipe(busboy);                                                                                     // 222
				}));                                                                                                              // 223
			})();                                                                                                              // 224
		}                                                                                                                   // 225
                                                                                                                      //
		return RocketChat.API.v1.success();                                                                                 // 227
	}                                                                                                                    // 228
});                                                                                                                   // 187
RocketChat.API.v1.addRoute('users.update', {                                                                          // 231
	authRequired: true                                                                                                   // 231
}, {                                                                                                                  // 231
	post: function () {                                                                                                  // 232
		var _this4 = this;                                                                                                  // 232
                                                                                                                      //
		check(this.bodyParams, {                                                                                            // 233
			userId: String,                                                                                                    // 234
			data: Match.ObjectIncluding({                                                                                      // 235
				email: Match.Maybe(String),                                                                                       // 236
				name: Match.Maybe(String),                                                                                        // 237
				password: Match.Maybe(String),                                                                                    // 238
				username: Match.Maybe(String),                                                                                    // 239
				active: Match.Maybe(Boolean),                                                                                     // 240
				roles: Match.Maybe(Array),                                                                                        // 241
				joinDefaultChannels: Match.Maybe(Boolean),                                                                        // 242
				requirePasswordChange: Match.Maybe(Boolean),                                                                      // 243
				sendWelcomeEmail: Match.Maybe(Boolean),                                                                           // 244
				verified: Match.Maybe(Boolean),                                                                                   // 245
				customFields: Match.Maybe(Object)                                                                                 // 246
			})                                                                                                                 // 235
		});                                                                                                                 // 233
                                                                                                                      //
		var userData = _.extend({                                                                                           // 250
			_id: this.bodyParams.userId                                                                                        // 250
		}, this.bodyParams.data);                                                                                           // 250
                                                                                                                      //
		Meteor.runAsUser(this.userId, function () {                                                                         // 252
			return RocketChat.saveUser(_this4.userId, userData);                                                               // 252
		});                                                                                                                 // 252
                                                                                                                      //
		if (this.bodyParams.data.customFields) {                                                                            // 254
			RocketChat.saveCustomFields(this.bodyParams.userId, this.bodyParams.data.customFields);                            // 255
		}                                                                                                                   // 256
                                                                                                                      //
		if (typeof this.bodyParams.data.active !== 'undefined') {                                                           // 258
			Meteor.runAsUser(this.userId, function () {                                                                        // 259
				Meteor.call('setUserActiveStatus', _this4.bodyParams.userId, _this4.bodyParams.data.active);                      // 260
			});                                                                                                                // 261
		}                                                                                                                   // 262
                                                                                                                      //
		return RocketChat.API.v1.success({                                                                                  // 264
			user: RocketChat.models.Users.findOneById(this.bodyParams.userId, {                                                // 264
				fields: RocketChat.API.v1.defaultFieldsToExclude                                                                  // 264
			})                                                                                                                 // 264
		});                                                                                                                 // 264
	}                                                                                                                    // 265
});                                                                                                                   // 231
RocketChat.API.v1.addRoute('users.createToken', {                                                                     // 268
	authRequired: true                                                                                                   // 268
}, {                                                                                                                  // 268
	post: function () {                                                                                                  // 269
		var user = this.getUserFromParams();                                                                                // 270
		var data = void 0;                                                                                                  // 271
		Meteor.runAsUser(this.userId, function () {                                                                         // 272
			data = Meteor.call('createToken', user._id);                                                                       // 273
		});                                                                                                                 // 274
		return data ? RocketChat.API.v1.success({                                                                           // 275
			data: data                                                                                                         // 275
		}) : RocketChat.API.v1.unauthorized();                                                                              // 275
	}                                                                                                                    // 276
});                                                                                                                   // 268
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"default":{"helpers":{"getLoggedInUser.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_api/server/default/helpers/getLoggedInUser.js                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
RocketChat.API.default.helperMethods.set('getLoggedInUser', function () {                                             // 1
	function _getLoggedInUser() {                                                                                        // 1
		var user = void 0;                                                                                                  // 2
                                                                                                                      //
		if (this.request.headers['x-auth-token'] && this.request.headers['x-user-id']) {                                    // 4
			user = RocketChat.models.Users.findOne({                                                                           // 5
				'_id': this.request.headers['x-user-id'],                                                                         // 6
				'services.resume.loginTokens.hashedToken': Accounts._hashLoginToken(this.request.headers['x-auth-token'])         // 7
			});                                                                                                                // 5
		}                                                                                                                   // 9
                                                                                                                      //
		return user;                                                                                                        // 11
	}                                                                                                                    // 12
                                                                                                                      //
	return _getLoggedInUser;                                                                                             // 1
}());                                                                                                                 // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"info.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_api/server/default/info.js                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
RocketChat.API.default.addRoute('info', {                                                                             // 1
	authRequired: false                                                                                                  // 1
}, {                                                                                                                  // 1
	get: function () {                                                                                                   // 2
		var user = this.getLoggedInUser();                                                                                  // 3
                                                                                                                      //
		if (user && RocketChat.authz.hasRole(user._id, 'admin')) {                                                          // 5
			return RocketChat.API.v1.success({                                                                                 // 6
				info: RocketChat.Info                                                                                             // 7
			});                                                                                                                // 6
		}                                                                                                                   // 9
                                                                                                                      //
		return RocketChat.API.v1.success({                                                                                  // 11
			version: RocketChat.Info.version                                                                                   // 12
		});                                                                                                                 // 11
	}                                                                                                                    // 14
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"metrics.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_api/server/default/metrics.js                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
RocketChat.API.default.addRoute('metrics', {                                                                          // 1
	authRequired: false                                                                                                  // 1
}, {                                                                                                                  // 1
	get: function () {                                                                                                   // 2
		return {                                                                                                            // 3
			headers: {                                                                                                         // 4
				'Content-Type': 'text/plain'                                                                                      // 4
			},                                                                                                                 // 4
			body: RocketChat.promclient.register.metrics()                                                                     // 5
		};                                                                                                                  // 3
	}                                                                                                                    // 7
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:api/server/api.js");
require("./node_modules/meteor/rocketchat:api/server/settings.js");
require("./node_modules/meteor/rocketchat:api/server/v1/helpers/getPaginationItems.js");
require("./node_modules/meteor/rocketchat:api/server/v1/helpers/getUserFromParams.js");
require("./node_modules/meteor/rocketchat:api/server/v1/helpers/isUserFromParams.js");
require("./node_modules/meteor/rocketchat:api/server/v1/helpers/parseJsonQuery.js");
require("./node_modules/meteor/rocketchat:api/server/v1/helpers/getLoggedInUser.js");
require("./node_modules/meteor/rocketchat:api/server/default/helpers/getLoggedInUser.js");
require("./node_modules/meteor/rocketchat:api/server/default/info.js");
require("./node_modules/meteor/rocketchat:api/server/default/metrics.js");
require("./node_modules/meteor/rocketchat:api/server/v1/channels.js");
require("./node_modules/meteor/rocketchat:api/server/v1/chat.js");
require("./node_modules/meteor/rocketchat:api/server/v1/groups.js");
require("./node_modules/meteor/rocketchat:api/server/v1/im.js");
require("./node_modules/meteor/rocketchat:api/server/v1/integrations.js");
require("./node_modules/meteor/rocketchat:api/server/v1/misc.js");
require("./node_modules/meteor/rocketchat:api/server/v1/settings.js");
require("./node_modules/meteor/rocketchat:api/server/v1/stats.js");
require("./node_modules/meteor/rocketchat:api/server/v1/users.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:api'] = {};

})();

//# sourceMappingURL=rocketchat_api.js.map
