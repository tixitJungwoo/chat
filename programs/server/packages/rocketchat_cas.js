(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var Logger = Package['rocketchat:logger'].Logger;
var SystemLogger = Package['rocketchat:logger'].SystemLogger;
var LoggerManager = Package['rocketchat:logger'].LoggerManager;
var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;
var RoutePolicy = Package.routepolicy.RoutePolicy;
var WebApp = Package.webapp.WebApp;
var main = Package.webapp.main;
var WebAppInternals = Package.webapp.WebAppInternals;
var Accounts = Package['accounts-base'].Accounts;
var _ = Package.underscore._;
var ECMAScript = Package.ecmascript.ECMAScript;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-server'].Symbol;
var Map = Package['ecmascript-runtime-server'].Map;
var Set = Package['ecmascript-runtime-server'].Set;

/* Package-scope variables */
var logger;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:cas":{"cas_rocketchat.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/rocketchat_cas/cas_rocketchat.js                                                            //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
/* globals logger:true */logger = new Logger('CAS', {});                                                // 1
Meteor.startup(function () {                                                                            // 5
	RocketChat.settings.addGroup('CAS', function () {                                                      // 6
		this.add('CAS_enabled', false, {                                                                      // 7
			type: 'boolean',                                                                                     // 7
			group: 'CAS',                                                                                        // 7
			"public": true                                                                                       // 7
		});                                                                                                   // 7
		this.add('CAS_base_url', '', {                                                                        // 8
			type: 'string',                                                                                      // 8
			group: 'CAS',                                                                                        // 8
			"public": true                                                                                       // 8
		});                                                                                                   // 8
		this.add('CAS_login_url', '', {                                                                       // 9
			type: 'string',                                                                                      // 9
			group: 'CAS',                                                                                        // 9
			"public": true                                                                                       // 9
		});                                                                                                   // 9
		this.add('CAS_version', '1.0', {                                                                      // 10
			type: 'select',                                                                                      // 10
			values: [{                                                                                           // 10
				key: '1.0',                                                                                         // 10
				i18nLabel: '1.0'                                                                                    // 10
			}, {                                                                                                 // 10
				key: '2.0',                                                                                         // 10
				i18nLabel: '2.0'                                                                                    // 10
			}],                                                                                                  // 10
			group: 'CAS'                                                                                         // 10
		});                                                                                                   // 10
		this.section('Attribute_handling', function () {                                                      // 12
			// Enable/disable sync                                                                               // 13
			this.add('CAS_Sync_User_Data_Enabled', true, {                                                       // 14
				type: 'boolean'                                                                                     // 14
			}); // Attribute mapping table                                                                       // 14
                                                                                                        //
			this.add('CAS_Sync_User_Data_FieldMap', '{}', {                                                      // 16
				type: 'string'                                                                                      // 16
			});                                                                                                  // 16
		});                                                                                                   // 17
		this.section('CAS_Login_Layout', function () {                                                        // 19
			this.add('CAS_popup_width', '810', {                                                                 // 20
				type: 'string',                                                                                     // 20
				group: 'CAS',                                                                                       // 20
				"public": true                                                                                      // 20
			});                                                                                                  // 20
			this.add('CAS_popup_height', '610', {                                                                // 21
				type: 'string',                                                                                     // 21
				group: 'CAS',                                                                                       // 21
				"public": true                                                                                      // 21
			});                                                                                                  // 21
			this.add('CAS_button_label_text', 'CAS', {                                                           // 22
				type: 'string',                                                                                     // 22
				group: 'CAS'                                                                                        // 22
			});                                                                                                  // 22
			this.add('CAS_button_label_color', '#FFFFFF', {                                                      // 23
				type: 'color',                                                                                      // 23
				group: 'CAS'                                                                                        // 23
			});                                                                                                  // 23
			this.add('CAS_button_color', '#13679A', {                                                            // 24
				type: 'color',                                                                                      // 24
				group: 'CAS'                                                                                        // 24
			});                                                                                                  // 24
			this.add('CAS_autoclose', true, {                                                                    // 25
				type: 'boolean',                                                                                    // 25
				group: 'CAS'                                                                                        // 25
			});                                                                                                  // 25
		});                                                                                                   // 26
	});                                                                                                    // 27
});                                                                                                     // 28
var timer = void 0;                                                                                     // 30
                                                                                                        //
function updateServices() /*record*/{                                                                   // 32
	if (typeof timer !== 'undefined') {                                                                    // 33
		Meteor.clearTimeout(timer);                                                                           // 34
	}                                                                                                      // 35
                                                                                                        //
	timer = Meteor.setTimeout(function () {                                                                // 37
		var data = {                                                                                          // 38
			// These will pe passed to 'node-cas' as options                                                     // 39
			enabled: RocketChat.settings.get('CAS_enabled'),                                                     // 40
			base_url: RocketChat.settings.get('CAS_base_url'),                                                   // 41
			login_url: RocketChat.settings.get('CAS_login_url'),                                                 // 42
			// Rocketchat Visuals                                                                                // 43
			buttonLabelText: RocketChat.settings.get('CAS_button_label_text'),                                   // 44
			buttonLabelColor: RocketChat.settings.get('CAS_button_label_color'),                                 // 45
			buttonColor: RocketChat.settings.get('CAS_button_color'),                                            // 46
			width: RocketChat.settings.get('CAS_popup_width'),                                                   // 47
			height: RocketChat.settings.get('CAS_popup_height'),                                                 // 48
			autoclose: RocketChat.settings.get('CAS_autoclose')                                                  // 49
		}; // Either register or deregister the CAS login service based upon its configuration                // 38
                                                                                                        //
		if (data.enabled) {                                                                                   // 53
			logger.info('Enabling CAS login service');                                                           // 54
			ServiceConfiguration.configurations.upsert({                                                         // 55
				service: 'cas'                                                                                      // 55
			}, {                                                                                                 // 55
				$set: data                                                                                          // 55
			});                                                                                                  // 55
		} else {                                                                                              // 56
			logger.info('Disabling CAS login service');                                                          // 57
			ServiceConfiguration.configurations.remove({                                                         // 58
				service: 'cas'                                                                                      // 58
			});                                                                                                  // 58
		}                                                                                                     // 59
	}, 2000);                                                                                              // 60
}                                                                                                       // 61
                                                                                                        //
RocketChat.settings.get(/^CAS_.+/, function (key, value) {                                              // 63
	updateServices(value);                                                                                 // 64
});                                                                                                     // 65
//////////////////////////////////////////////////////////////////////////////////////////////////////////

},"cas_server.js":function(require){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/rocketchat_cas/cas_server.js                                                                //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
/* globals RoutePolicy, logger */ /* jshint newcap: false */var fiber = Npm.require('fibers');          // 1
                                                                                                        //
var url = Npm.require('url');                                                                           // 5
                                                                                                        //
var CAS = Npm.require('cas');                                                                           // 6
                                                                                                        //
var _casCredentialTokens = {};                                                                          // 8
RoutePolicy.declare('/_cas/', 'network');                                                               // 10
                                                                                                        //
var closePopup = function (res) {                                                                       // 12
	res.writeHead(200, {                                                                                   // 13
		'Content-Type': 'text/html'                                                                           // 13
	});                                                                                                    // 13
	var content = '<html><head><script>window.close()</script></head></html>';                             // 14
	res.end(content, 'utf-8');                                                                             // 15
};                                                                                                      // 16
                                                                                                        //
var casTicket = function (req, token, callback) {                                                       // 18
	// get configuration                                                                                   // 20
	if (!RocketChat.settings.get('CAS_enabled')) {                                                         // 21
		logger.error('Got ticket validation request, but CAS is not enabled');                                // 22
		callback();                                                                                           // 23
	} // get ticket and validate.                                                                          // 24
                                                                                                        //
                                                                                                        //
	var parsedUrl = url.parse(req.url, true);                                                              // 27
	var ticketId = parsedUrl.query.ticket;                                                                 // 28
	var baseUrl = RocketChat.settings.get('CAS_base_url');                                                 // 29
	var cas_version = parseFloat(RocketChat.settings.get('CAS_version'));                                  // 30
                                                                                                        //
	var appUrl = Meteor.absoluteUrl().replace(/\/$/, '') + __meteor_runtime_config__.ROOT_URL_PATH_PREFIX;
                                                                                                        //
	logger.debug("Using CAS_base_url: " + baseUrl);                                                        // 32
	var cas = new CAS({                                                                                    // 34
		base_url: baseUrl,                                                                                    // 35
		version: cas_version,                                                                                 // 36
		service: appUrl + "/_cas/" + token                                                                    // 37
	});                                                                                                    // 34
	cas.validate(ticketId, function (err, status, username, details) {                                     // 40
		if (err) {                                                                                            // 41
			logger.error("error when trying to validate: " + err.message);                                       // 42
		} else if (status) {                                                                                  // 43
			logger.info("Validated user: " + username);                                                          // 44
			var user_info = {                                                                                    // 45
				username: username                                                                                  // 45
			}; // CAS 2.0 attributes handling                                                                    // 45
                                                                                                        //
			if (details && details.attributes) {                                                                 // 48
				_.extend(user_info, {                                                                               // 49
					attributes: details.attributes                                                                     // 49
				});                                                                                                 // 49
			}                                                                                                    // 50
                                                                                                        //
			_casCredentialTokens[token] = user_info;                                                             // 51
		} else {                                                                                              // 52
			logger.error("Unable to validate ticket: " + ticketId);                                              // 53
		} //logger.debug("Receveied response: " + JSON.stringify(details, null , 4));                         // 54
                                                                                                        //
                                                                                                        //
		callback();                                                                                           // 57
	});                                                                                                    // 58
	return;                                                                                                // 60
};                                                                                                      // 61
                                                                                                        //
var middleware = function (req, res, next) {                                                            // 63
	// Make sure to catch any exceptions because otherwise we'd crash                                      // 64
	// the runner                                                                                          // 65
	try {                                                                                                  // 66
		var barePath = req.url.substring(0, req.url.indexOf('?'));                                            // 67
		var splitPath = barePath.split('/'); // Any non-cas request will continue down the default            // 68
		// middlewares.                                                                                       // 71
                                                                                                        //
		if (splitPath[1] !== '_cas') {                                                                        // 72
			next();                                                                                              // 73
			return;                                                                                              // 74
		} // get auth token                                                                                   // 75
                                                                                                        //
                                                                                                        //
		var credentialToken = splitPath[2];                                                                   // 78
                                                                                                        //
		if (!credentialToken) {                                                                               // 79
			closePopup(res);                                                                                     // 80
			return;                                                                                              // 81
		} // validate ticket                                                                                  // 82
                                                                                                        //
                                                                                                        //
		casTicket(req, credentialToken, function () {                                                         // 85
			closePopup(res);                                                                                     // 86
		});                                                                                                   // 87
	} catch (err) {                                                                                        // 89
		logger.error("Unexpected error : " + err.message);                                                    // 90
		closePopup(res);                                                                                      // 91
	}                                                                                                      // 92
}; // Listen to incoming OAuth http requests                                                            // 93
                                                                                                        //
                                                                                                        //
WebApp.connectHandlers.use(function (req, res, next) {                                                  // 96
	// Need to create a fiber since we're using synchronous http calls and nothing                         // 97
	// else is wrapping this in a fiber automatically                                                      // 98
	fiber(function () {                                                                                    // 99
		middleware(req, res, next);                                                                           // 100
	}).run();                                                                                              // 101
});                                                                                                     // 102
                                                                                                        //
var _hasCredential = function (credentialToken) {                                                       // 104
	return _.has(_casCredentialTokens, credentialToken);                                                   // 105
}; /*                                                                                                   // 106
    * Retrieve token and delete it to avoid replaying it.                                               //
    */                                                                                                  //
                                                                                                        //
var _retrieveCredential = function (credentialToken) {                                                  // 111
	var result = _casCredentialTokens[credentialToken];                                                    // 112
	delete _casCredentialTokens[credentialToken];                                                          // 113
	return result;                                                                                         // 114
}; /*                                                                                                   // 115
    * Register a server-side login handle.                                                              //
    * It is call after Accounts.callLoginMethod() is call from client.                                  //
    *                                                                                                   //
    */                                                                                                  //
                                                                                                        //
Accounts.registerLoginHandler(function (options) {                                                      // 122
	if (!options.cas) {                                                                                    // 124
		return undefined;                                                                                     // 125
	}                                                                                                      // 126
                                                                                                        //
	if (!_hasCredential(options.cas.credentialToken)) {                                                    // 128
		throw new Meteor.Error(Accounts.LoginCancelledError.numericError, 'no matching login attempt found');
	}                                                                                                      // 131
                                                                                                        //
	var result = _retrieveCredential(options.cas.credentialToken);                                         // 133
                                                                                                        //
	var syncUserDataFieldMap = RocketChat.settings.get('CAS_Sync_User_Data_FieldMap').trim();              // 134
	var cas_version = parseFloat(RocketChat.settings.get('CAS_version'));                                  // 135
	var sync_enabled = RocketChat.settings.get('CAS_Sync_User_Data_Enabled'); // We have these             // 136
                                                                                                        //
	var ext_attrs = {                                                                                      // 139
		username: result.username                                                                             // 140
	}; // We need these                                                                                    // 139
                                                                                                        //
	var int_attrs = {                                                                                      // 144
		email: undefined,                                                                                     // 145
		name: undefined,                                                                                      // 146
		username: undefined,                                                                                  // 147
		rooms: undefined                                                                                      // 148
	}; // Import response attributes                                                                       // 144
                                                                                                        //
	if (cas_version >= 2.0) {                                                                              // 152
		// Clean & import external attributes                                                                 // 153
		_.each(result.attributes, function (value, ext_name) {                                                // 154
			if (value) {                                                                                         // 155
				ext_attrs[ext_name] = value[0];                                                                     // 156
			}                                                                                                    // 157
		});                                                                                                   // 158
	} // Source internal attributes                                                                        // 159
                                                                                                        //
                                                                                                        //
	if (syncUserDataFieldMap) {                                                                            // 162
		// Our mapping table: key(int_attr) -> value(ext_attr)                                                // 164
		// Spoken: Source this internal attribute from these external attributes                              // 165
		var attr_map = JSON.parse(syncUserDataFieldMap);                                                      // 166
                                                                                                        //
		_.each(attr_map, function (source, int_name) {                                                        // 168
			// Source is our String to interpolate                                                               // 169
			if (_.isString(source)) {                                                                            // 170
				_.each(ext_attrs, function (value, ext_name) {                                                      // 171
					source = source.replace("%" + ext_name + "%", ext_attrs[ext_name]);                                // 172
				});                                                                                                 // 173
                                                                                                        //
				int_attrs[int_name] = source;                                                                       // 175
				logger.debug("Sourced internal attribute: " + int_name + " = " + source);                           // 176
			}                                                                                                    // 177
		});                                                                                                   // 178
	} // Search existing user by its external service id                                                   // 179
                                                                                                        //
                                                                                                        //
	logger.debug("Looking up user by id: " + result.username);                                             // 182
	var user = Meteor.users.findOne({                                                                      // 183
		'services.cas.external_id': result.username                                                           // 183
	});                                                                                                    // 183
                                                                                                        //
	if (user) {                                                                                            // 185
		logger.debug("Using existing user for '" + result.username + "' with id: " + user._id);               // 186
                                                                                                        //
		if (sync_enabled) {                                                                                   // 187
			logger.debug('Syncing user attributes'); // Update name                                              // 188
                                                                                                        //
			if (int_attrs.name) {                                                                                // 190
				RocketChat._setRealName(user._id, int_attrs.name);                                                  // 191
			} // Update email                                                                                    // 192
                                                                                                        //
                                                                                                        //
			if (int_attrs.email) {                                                                               // 195
				Meteor.users.update(user, {                                                                         // 196
					$set: {                                                                                            // 196
						emails: [{                                                                                        // 196
							address: int_attrs.email,                                                                        // 196
							verified: true                                                                                   // 196
						}]                                                                                                // 196
					}                                                                                                  // 196
				});                                                                                                 // 196
			}                                                                                                    // 197
		}                                                                                                     // 198
	} else {                                                                                               // 199
		// Define new user                                                                                    // 201
		var newUser = {                                                                                       // 202
			username: result.username,                                                                           // 203
			active: true,                                                                                        // 204
			globalRoles: ['user'],                                                                               // 205
			emails: [],                                                                                          // 206
			services: {                                                                                          // 207
				cas: {                                                                                              // 208
					external_id: result.username,                                                                      // 209
					version: cas_version,                                                                              // 210
					attrs: int_attrs                                                                                   // 211
				}                                                                                                   // 208
			}                                                                                                    // 207
		}; // Add User.name                                                                                   // 202
                                                                                                        //
		if (int_attrs.name) {                                                                                 // 217
			_.extend(newUser, {                                                                                  // 218
				name: int_attrs.name                                                                                // 219
			});                                                                                                  // 218
		} // Add email                                                                                        // 221
                                                                                                        //
                                                                                                        //
		if (int_attrs.email) {                                                                                // 224
			_.extend(newUser, {                                                                                  // 225
				emails: [{                                                                                          // 226
					address: int_attrs.email,                                                                          // 226
					verified: true                                                                                     // 226
				}]                                                                                                  // 226
			});                                                                                                  // 225
		} // Create the user                                                                                  // 228
                                                                                                        //
                                                                                                        //
		logger.debug("User \"" + result.username + "\" does not exist yet, creating it");                     // 231
		var userId = Accounts.insertUserDoc({}, newUser); // Fetch and use it                                 // 232
                                                                                                        //
		user = Meteor.users.findOne(userId);                                                                  // 235
		logger.debug("Created new user for '" + result.username + "' with id: " + user._id); //logger.debug(JSON.stringify(user, undefined, 4));
                                                                                                        //
		logger.debug("Joining user to attribute channels: " + int_attrs.rooms);                               // 239
                                                                                                        //
		if (int_attrs.rooms) {                                                                                // 240
			_.each(int_attrs.rooms.split(','), function (room_name) {                                            // 241
				if (room_name) {                                                                                    // 242
					var room = RocketChat.models.Rooms.findOneByNameAndType(room_name, 'c');                           // 243
                                                                                                        //
					if (!room) {                                                                                       // 244
						room = RocketChat.models.Rooms.createWithIdTypeAndName(Random.id(), 'c', room_name);              // 245
					}                                                                                                  // 246
                                                                                                        //
					RocketChat.models.Rooms.addUsernameByName(room_name, result.username);                             // 247
					RocketChat.models.Subscriptions.createWithRoomAndUser(room, user, {                                // 248
						ts: new Date(),                                                                                   // 249
						open: true,                                                                                       // 250
						alert: true,                                                                                      // 251
						unread: 1                                                                                         // 252
					});                                                                                                // 248
				}                                                                                                   // 254
			});                                                                                                  // 255
		}                                                                                                     // 256
	}                                                                                                      // 258
                                                                                                        //
	return {                                                                                               // 260
		userId: user._id                                                                                      // 260
	};                                                                                                     // 260
});                                                                                                     // 261
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:cas/cas_rocketchat.js");
require("./node_modules/meteor/rocketchat:cas/cas_server.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:cas'] = {};

})();

//# sourceMappingURL=rocketchat_cas.js.map
