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
var RateLimiter = Package['rate-limit'].RateLimiter;
var Session = Package.session.Session;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var Accounts = Package['accounts-base'].Accounts;
var Random = Package.random.Random;
var check = Package.check.check;
var Match = Package.check.Match;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var _ = Package.underscore._;
var Mongo = Package.mongo.Mongo;
var OAuth = Package.oauth.OAuth;
var Oauth = Package.oauth.Oauth;
var s = Package['underscorestring:underscore.string'].s;
var CollectionHooks = Package['matb33:collection-hooks'].CollectionHooks;
var ServiceConfiguration = Package['service-configuration'].ServiceConfiguration;
var Streamer = Package['rocketchat:streamer'].Streamer;
var Logger = Package['rocketchat:logger'].Logger;
var SystemLogger = Package['rocketchat:logger'].SystemLogger;
var LoggerManager = Package['rocketchat:logger'].LoggerManager;
var CustomOAuth = Package['rocketchat:custom-oauth'].CustomOAuth;
var Template = Package['templating-runtime'].Template;
var FlowRouter = Package['kadira:flow-router'].FlowRouter;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var RocketChat, name, RocketChatTabBar, currentTracker;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:lib":{"lib":{"core.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/lib/core.js                                                                               //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/*                                                                                                                   // 2
* Kick off the global namespace for RocketChat.                                                                      //
* @namespace RocketChat                                                                                              //
*/RocketChat = {                                                                                                     //
	models: {}                                                                                                          // 7
};                                                                                                                   // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getURL.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/lib/getURL.js                                                                             //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
RocketChat.getURL = function (path) {                                                                                // 1
	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},                                  // 1
	    _ref$cdn = _ref.cdn,                                                                                            // 1
	    cdn = _ref$cdn === undefined ? true : _ref$cdn,                                                                 // 1
	    _ref$full = _ref.full,                                                                                          // 1
	    full = _ref$full === undefined ? false : _ref$full;                                                             // 1
                                                                                                                     //
	var cdnPrefix = _.rtrim(_.trim(RocketChat.settings.get('CDN_PREFIX') || ''), '/');                                  // 2
                                                                                                                     //
	var pathPrefix = _.rtrim(_.trim(__meteor_runtime_config__.ROOT_URL_PATH_PREFIX || ''), '/');                        // 3
                                                                                                                     //
	var basePath = void 0;                                                                                              // 5
                                                                                                                     //
	var finalPath = _.ltrim(_.trim(path), '/');                                                                         // 7
                                                                                                                     //
	if (cdn && cdnPrefix !== '') {                                                                                      // 9
		basePath = cdnPrefix + pathPrefix;                                                                                 // 10
	} else if (full || Meteor.isCordova) {                                                                              // 11
		return Meteor.absoluteUrl(finalPath);                                                                              // 12
	} else {                                                                                                            // 13
		basePath = pathPrefix;                                                                                             // 14
	}                                                                                                                   // 15
                                                                                                                     //
	return basePath + "/" + finalPath;                                                                                  // 17
};                                                                                                                   // 18
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"settings.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/lib/settings.js                                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/*                                                                                                                   // 2
* RocketChat.settings holds all packages settings                                                                    //
* @namespace RocketChat.settings                                                                                     //
*/RocketChat.settings = {                                                                                            //
	callbacks: {},                                                                                                      // 7
	regexCallbacks: {},                                                                                                 // 8
	ts: new Date(),                                                                                                     // 9
	get: function (_id, callback) {                                                                                     // 10
		if (callback != null) {                                                                                            // 11
			RocketChat.settings.onload(_id, callback);                                                                        // 12
                                                                                                                     //
			if (!Meteor.settings) {                                                                                           // 13
				return;                                                                                                          // 14
			}                                                                                                                 // 15
                                                                                                                     //
			if (_id === '*') {                                                                                                // 16
				return Object.keys(Meteor.settings).forEach(function (key) {                                                     // 17
					var value = Meteor.settings[key];                                                                               // 18
					callback(key, value);                                                                                           // 19
				});                                                                                                              // 20
			}                                                                                                                 // 21
                                                                                                                     //
			if (_.isRegExp(_id) && Meteor.settings) {                                                                         // 22
				return Object.keys(Meteor.settings).forEach(function (key) {                                                     // 23
					if (!_id.test(key)) {                                                                                           // 24
						return;                                                                                                        // 25
					}                                                                                                               // 26
                                                                                                                     //
					var value = Meteor.settings[key];                                                                               // 27
					callback(key, value);                                                                                           // 28
				});                                                                                                              // 29
			}                                                                                                                 // 30
                                                                                                                     //
			return Meteor.settings[_id] != null && callback(_id, Meteor.settings[_id]);                                       // 31
		} else {                                                                                                           // 32
			if (!Meteor.settings) {                                                                                           // 33
				return;                                                                                                          // 34
			}                                                                                                                 // 35
                                                                                                                     //
			if (_.isRegExp(_id)) {                                                                                            // 36
				return Object.keys(Meteor.settings).reduce(function (items, key) {                                               // 37
					var value = Meteor.settings[key];                                                                               // 38
                                                                                                                     //
					if (_id.test(key)) {                                                                                            // 39
						items.push({                                                                                                   // 40
							key: key,                                                                                                     // 41
							value: value                                                                                                  // 42
						});                                                                                                            // 40
					}                                                                                                               // 44
                                                                                                                     //
					return items;                                                                                                   // 45
				}, []);                                                                                                          // 46
			}                                                                                                                 // 47
                                                                                                                     //
			return Meteor.settings && Meteor.settings[_id];                                                                   // 48
		}                                                                                                                  // 49
	},                                                                                                                  // 50
	set: function (_id, value, callback) {                                                                              // 51
		return Meteor.call('saveSetting', _id, value, callback);                                                           // 52
	},                                                                                                                  // 53
	batchSet: function (settings, callback) {                                                                           // 54
		// async -> sync                                                                                                   // 55
		// http://daemon.co.za/2012/04/simple-async-with-only-underscore/                                                  // 56
		var save = function (setting) {                                                                                    // 57
			return function (callback) {                                                                                      // 58
				return Meteor.call('saveSetting', setting._id, setting.value, setting.editor, callback);                         // 59
			};                                                                                                                // 60
		};                                                                                                                 // 61
                                                                                                                     //
		var actions = _.map(settings, function (setting) {                                                                 // 62
			return save(setting);                                                                                             // 62
		});                                                                                                                // 62
                                                                                                                     //
		return _(actions).reduceRight(_.wrap, function (err, success) {                                                    // 63
			return callback(err, success);                                                                                    // 63
		})();                                                                                                              // 63
	},                                                                                                                  // 64
	load: function (key, value, initialLoad) {                                                                          // 65
		['*', key].forEach(function (item) {                                                                               // 66
			if (RocketChat.settings.callbacks[item]) {                                                                        // 67
				RocketChat.settings.callbacks[item].forEach(function (callback) {                                                // 68
					return callback(key, value, initialLoad);                                                                       // 68
				});                                                                                                              // 68
			}                                                                                                                 // 69
		});                                                                                                                // 70
		Object.keys(RocketChat.settings.regexCallbacks).forEach(function (cbKey) {                                         // 71
			var cbValue = RocketChat.settings.regexCallbacks[cbKey];                                                          // 72
                                                                                                                     //
			if (!cbValue.regex.test(key)) {                                                                                   // 73
				return;                                                                                                          // 74
			}                                                                                                                 // 75
                                                                                                                     //
			cbValue.callbacks.forEach(function (callback) {                                                                   // 76
				return callback(key, value, initialLoad);                                                                        // 76
			});                                                                                                               // 76
		});                                                                                                                // 77
	},                                                                                                                  // 78
	onload: function (key, callback) {                                                                                  // 79
		// if key is '*'                                                                                                   // 80
		// 	for key, value in Meteor.settings                                                                              // 81
		// 		callback key, value, false                                                                                    // 82
		// else if Meteor.settings?[_id]?                                                                                  // 83
		// 	callback key, Meteor.settings[_id], false                                                                      // 84
		var keys = [].concat(key);                                                                                         // 85
		keys.forEach(function (k) {                                                                                        // 86
			if (_.isRegExp(k)) {                                                                                              // 87
				RocketChat.settings.regexCallbacks[name = k.source] = RocketChat.settings.regexCallbacks[name = k.source] || {   // 88
					regex: k,                                                                                                       // 89
					callbacks: []                                                                                                   // 90
				};                                                                                                               // 88
				RocketChat.settings.regexCallbacks[k.source].callbacks.push(callback);                                           // 92
			} else {                                                                                                          // 93
				RocketChat.settings.callbacks[k] = RocketChat.settings.callbacks[k] || [];                                       // 94
				RocketChat.settings.callbacks[k].push(callback);                                                                 // 95
			}                                                                                                                 // 96
		});                                                                                                                // 97
	}                                                                                                                   // 98
};                                                                                                                   // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"callbacks.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/lib/callbacks.js                                                                          //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/*                                                                                                                   // 1
* Callback hooks provide an easy way to add extra steps to common operations.                                        //
* @namespace RocketChat.callbacks                                                                                    //
*/RocketChat.callbacks = {};                                                                                         //
                                                                                                                     //
if (Meteor.isServer) {                                                                                               // 8
	RocketChat.callbacks.showTime = true;                                                                               // 9
	RocketChat.callbacks.showTotalTime = true;                                                                          // 10
} else {                                                                                                             // 11
	RocketChat.callbacks.showTime = false;                                                                              // 12
	RocketChat.callbacks.showTotalTime = false;                                                                         // 13
} /*                                                                                                                 // 14
  * Callback priorities                                                                                              //
  */                                                                                                                 //
                                                                                                                     //
RocketChat.callbacks.priority = {                                                                                    // 21
	HIGH: -1000,                                                                                                        // 22
	MEDIUM: 0,                                                                                                          // 23
	LOW: 1000                                                                                                           // 24
}; /*                                                                                                                // 21
   * Add a callback function to a hook                                                                               //
   * @param {String} hook - The name of the hook                                                                     //
   * @param {Function} callback - The callback function                                                              //
   */                                                                                                                //
                                                                                                                     //
RocketChat.callbacks.add = function (hook, callback, priority, id) {                                                 // 34
	if (priority == null) {                                                                                             // 35
		priority = RocketChat.callbacks.priority.MEDIUM;                                                                   // 36
	}                                                                                                                   // 37
                                                                                                                     //
	if (!_.isNumber(priority)) {                                                                                        // 38
		priority = RocketChat.callbacks.priority.MEDIUM;                                                                   // 39
	}                                                                                                                   // 40
                                                                                                                     //
	callback.priority = priority;                                                                                       // 41
	callback.id = id || Random.id();                                                                                    // 42
	RocketChat.callbacks[hook] = RocketChat.callbacks[hook] || [];                                                      // 43
                                                                                                                     //
	if (RocketChat.callbacks.showTime === true) {                                                                       // 44
		var err = new Error();                                                                                             // 45
		callback.stack = err.stack;                                                                                        // 46
	}                                                                                                                   // 47
                                                                                                                     //
	if (RocketChat.callbacks[hook].find(function (cb) {                                                                 // 48
		return cb.id === callback.id;                                                                                      // 48
	})) {                                                                                                               // 48
		return;                                                                                                            // 49
	}                                                                                                                   // 50
                                                                                                                     //
	RocketChat.callbacks[hook].push(callback);                                                                          // 51
}; /*                                                                                                                // 52
   * Remove a callback from a hook                                                                                   //
   * @param {string} hook - The name of the hook                                                                     //
   * @param {string} id - The callback's id                                                                          //
   */                                                                                                                //
                                                                                                                     //
RocketChat.callbacks.remove = function (hookName, id) {                                                              // 61
	RocketChat.callbacks[hookName] = _.reject(RocketChat.callbacks[hookName], function (callback) {                     // 62
		return callback.id === id;                                                                                         // 62
	});                                                                                                                 // 62
}; /*                                                                                                                // 63
   * Successively run all of a hook's callbacks on an item                                                           //
   * @param {String} hook - The name of the hook                                                                     //
   * @param {Object} item - The post, comment, modifier, etc. on which to run the callbacks                          //
   * @param {Object} [constant] - An optional constant that will be passed along to each callback                    //
   * @returns {Object} Returns the item after it's been through all the callbacks for this hook                      //
   */                                                                                                                //
                                                                                                                     //
RocketChat.callbacks.run = function (hook, item, constant) {                                                         // 74
	var callbacks = RocketChat.callbacks[hook];                                                                         // 75
                                                                                                                     //
	if (callbacks && callbacks.length) {                                                                                // 76
		var totalTime = 0;                                                                                                 // 77
                                                                                                                     //
		var result = _.sortBy(callbacks, function (callback) {                                                             // 78
			return callback.priority || RocketChat.callbacks.priority.MEDIUM;                                                 // 79
		}).reduce(function (result, callback) {                                                                            // 80
			var time = 0;                                                                                                     // 81
                                                                                                                     //
			if (RocketChat.callbacks.showTime === true || RocketChat.callbacks.showTotalTime === true) {                      // 82
				time = Date.now();                                                                                               // 83
			}                                                                                                                 // 84
                                                                                                                     //
			var callbackResult = callback(result, constant);                                                                  // 85
                                                                                                                     //
			if (RocketChat.callbacks.showTime === true || RocketChat.callbacks.showTotalTime === true) {                      // 86
				var currentTime = Date.now() - time;                                                                             // 87
				totalTime += currentTime;                                                                                        // 88
                                                                                                                     //
				if (RocketChat.callbacks.showTime === true) {                                                                    // 89
					if (Meteor.isServer) {                                                                                          // 90
						RocketChat.statsTracker.timing('callbacks.time', currentTime, ["hook:" + hook, "callback:" + callback.id]);    // 91
					} else {                                                                                                        // 92
						var stack = callback.stack && typeof callback.stack.split === 'function' && callback.stack.split('\n');        // 93
						stack = stack && stack[2] && (stack[2].match(/\(.+\)/) || [])[0];                                              // 94
						console.log(String(currentTime), hook, callback.id, stack);                                                    // 95
					}                                                                                                               // 96
				}                                                                                                                // 97
			}                                                                                                                 // 98
                                                                                                                     //
			return typeof callbackResult === 'undefined' ? result : callbackResult;                                           // 99
		}, item);                                                                                                          // 100
                                                                                                                     //
		if (RocketChat.callbacks.showTotalTime === true) {                                                                 // 101
			if (Meteor.isServer) {                                                                                            // 102
				RocketChat.statsTracker.timing('callbacks.totalTime', totalTime, ["hook:" + hook]);                              // 103
			} else {                                                                                                          // 104
				console.log(hook + ":", totalTime);                                                                              // 105
			}                                                                                                                 // 106
		}                                                                                                                  // 107
                                                                                                                     //
		return result;                                                                                                     // 108
	} else {                                                                                                            // 109
		return item;                                                                                                       // 110
	}                                                                                                                   // 111
}; /*                                                                                                                // 112
   * Successively run all of a hook's callbacks on an item, in async mode (only works on server)                     //
   * @param {String} hook - The name of the hook                                                                     //
   * @param {Object} item - The post, comment, modifier, etc. on which to run the callbacks                          //
   * @param {Object} [constant] - An optional constant that will be passed along to each callback                    //
   */                                                                                                                //
                                                                                                                     //
RocketChat.callbacks.runAsync = function (hook, item, constant) {                                                    // 122
	var callbacks = RocketChat.callbacks[hook];                                                                         // 123
                                                                                                                     //
	if (Meteor.isServer && callbacks && callbacks.length) {                                                             // 124
		Meteor.defer(function () {                                                                                         // 125
			_.sortBy(callbacks, function (callback) {                                                                         // 126
				return callback.priority || RocketChat.callbacks.priority.MEDIUM;                                                // 126
			}).forEach(function (callback) {                                                                                  // 126
				return callback(item, constant);                                                                                 // 126
			});                                                                                                               // 126
		});                                                                                                                // 127
	} else {                                                                                                            // 128
		return item;                                                                                                       // 129
	}                                                                                                                   // 130
};                                                                                                                   // 131
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"fileUploadRestrictions.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/lib/fileUploadRestrictions.js                                                             //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
RocketChat.fileUploadMediaWhiteList = function () {                                                                  // 1
	var mediaTypeWhiteList = RocketChat.settings.get('FileUpload_MediaTypeWhiteList');                                  // 2
                                                                                                                     //
	if (!mediaTypeWhiteList || mediaTypeWhiteList === '*') {                                                            // 4
		return;                                                                                                            // 5
	}                                                                                                                   // 6
                                                                                                                     //
	return _.map(mediaTypeWhiteList.split(','), function (item) {                                                       // 7
		return item.trim();                                                                                                // 8
	});                                                                                                                 // 9
};                                                                                                                   // 10
                                                                                                                     //
RocketChat.fileUploadIsValidContentType = function (type) {                                                          // 12
	var list = RocketChat.fileUploadMediaWhiteList();                                                                   // 13
                                                                                                                     //
	if (!list || _.contains(list, type)) {                                                                              // 14
		return true;                                                                                                       // 15
	} else {                                                                                                            // 16
		var wildCardGlob = '/*';                                                                                           // 17
                                                                                                                     //
		var wildcards = _.filter(list, function (item) {                                                                   // 18
			return item.indexOf(wildCardGlob) > 0;                                                                            // 19
		});                                                                                                                // 20
                                                                                                                     //
		if (_.contains(wildcards, type.replace(/(\/.*)$/, wildCardGlob))) {                                                // 21
			return true;                                                                                                      // 22
		}                                                                                                                  // 23
	}                                                                                                                   // 24
                                                                                                                     //
	return false;                                                                                                       // 25
};                                                                                                                   // 26
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"placeholders.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/lib/placeholders.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
RocketChat.placeholders = {};                                                                                        // 1
                                                                                                                     //
RocketChat.placeholders.replace = function (str, data) {                                                             // 3
	if (!str) {                                                                                                         // 4
		return '';                                                                                                         // 5
	}                                                                                                                   // 6
                                                                                                                     //
	str = str.replace(/\[Site_Name\]/g, RocketChat.settings.get('Site_Name') || '');                                    // 8
	str = str.replace(/\[Site_URL\]/g, RocketChat.settings.get('Site_Url') || '');                                      // 9
                                                                                                                     //
	if (data) {                                                                                                         // 11
		str = str.replace(/\[name\]/g, data.name || '');                                                                   // 12
		str = str.replace(/\[fname\]/g, _.strLeft(data.name, ' ') || '');                                                  // 13
		str = str.replace(/\[lname\]/g, _.strRightBack(data.name, ' ') || '');                                             // 14
		str = str.replace(/\[email\]/g, data.email || '');                                                                 // 15
		str = str.replace(/\[password\]/g, data.password || '');                                                           // 16
                                                                                                                     //
		if (data.unsubscribe) {                                                                                            // 18
			str = str.replace(/\[unsubscribe\]/g, data.unsubscribe);                                                          // 19
		}                                                                                                                  // 20
	}                                                                                                                   // 21
                                                                                                                     //
	str = str.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br>' + '$2');                                           // 23
	return str;                                                                                                         // 26
};                                                                                                                   // 27
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"promises.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/lib/promises.js                                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/*                                                                                                                   // 2
* Callback hooks provide an easy way to add extra steps to common operations.                                        //
* @namespace RocketChat.promises                                                                                     //
*/RocketChat.promises = {}; /*                                                                                       //
                            * Callback priorities                                                                    //
                            */                                                                                       //
RocketChat.promises.priority = {                                                                                     // 14
	HIGH: -1000,                                                                                                        // 15
	MEDIUM: 0,                                                                                                          // 16
	LOW: 1000                                                                                                           // 17
}; /*                                                                                                                // 14
   * Add a callback function to a hook                                                                               //
   * @param {String} hook - The name of the hook                                                                     //
   * @param {Function} callback - The callback function                                                              //
   */                                                                                                                //
                                                                                                                     //
RocketChat.promises.add = function (hook, callback) {                                                                // 27
	var p = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : RocketChat.promises.priority.MEDIUM;    // 27
	var id = arguments[3];                                                                                              // 27
	var priority = !_.isNumber(p) ? RocketChat.promises.priority.MEDIUM : p;                                            // 28
	callback.priority = priority;                                                                                       // 29
	callback.id = id || Random.id();                                                                                    // 30
	RocketChat.promises[hook] = RocketChat.promises[hook] || [];                                                        // 31
                                                                                                                     //
	if (RocketChat.promises[hook].find(function (cb) {                                                                  // 32
		return cb.id === callback.id;                                                                                      // 32
	})) {                                                                                                               // 32
		return;                                                                                                            // 33
	}                                                                                                                   // 34
                                                                                                                     //
	RocketChat.promises[hook].push(callback);                                                                           // 35
}; /*                                                                                                                // 36
   * Remove a callback from a hook                                                                                   //
   * @param {string} hook - The name of the hook                                                                     //
   * @param {string} id - The callback's id                                                                          //
   */                                                                                                                //
                                                                                                                     //
RocketChat.promises.remove = function (hookName, id) {                                                               // 45
	RocketChat.promises[hookName] = _.reject(RocketChat.promises[hookName], function (callback) {                       // 46
		return callback.id === id;                                                                                         // 46
	});                                                                                                                 // 46
}; /*                                                                                                                // 47
   * Successively run all of a hook's callbacks on an item                                                           //
   * @param {String} hook - The name of the hook                                                                     //
   * @param {Object} item - The post, comment, modifier, etc. on which to run the callbacks                          //
   * @param {Object} [constant] - An optional constant that will be passed along to each callback                    //
   * @returns {Object} Returns the item after it's been through all the callbacks for this hook                      //
   */                                                                                                                //
                                                                                                                     //
RocketChat.promises.run = function (hook, item, constant) {                                                          // 58
	var callbacks = RocketChat.promises[hook];                                                                          // 59
                                                                                                                     //
	if (callbacks == null || callbacks.length === 0) {                                                                  // 60
		return Promise.resolve(item);                                                                                      // 61
	}                                                                                                                   // 62
                                                                                                                     //
	callbacks = _.sortBy(callbacks, function (callback) {                                                               // 63
		return callback.priority || RocketChat.promises.priority.MEDIUM;                                                   // 63
	});                                                                                                                 // 63
	return callbacks.reduce(function (previousPromise, callback) {                                                      // 64
		return new Promise(function (resolve, reject) {                                                                    // 65
			return previousPromise.then(function (result) {                                                                   // 66
				return callback(result, constant).then(resolve, reject);                                                         // 66
			});                                                                                                               // 66
		});                                                                                                                // 67
	}, Promise.resolve(item));                                                                                          // 68
}; /*                                                                                                                // 69
   * Successively run all of a hook's callbacks on an item, in async mode (only works on server)                     //
   * @param {String} hook - The name of the hook                                                                     //
   * @param {Object} item - The post, comment, modifier, etc. on which to run the callbacks                          //
   * @param {Object} [constant] - An optional constant that will be passed along to each callback                    //
   */                                                                                                                //
                                                                                                                     //
RocketChat.promises.runAsync = function (hook, item, constant) {                                                     // 79
	var callbacks = RocketChat.promises[hook];                                                                          // 80
                                                                                                                     //
	if (!Meteor.isServer || callbacks == null || callbacks.length === 0) {                                              // 81
		return item;                                                                                                       // 82
	}                                                                                                                   // 83
                                                                                                                     //
	Meteor.defer(function () {                                                                                          // 84
		_.sortBy(callbacks, function (callback) {                                                                          // 85
			return callback.priority || RocketChat.promises.priority.MEDIUM;                                                  // 85
		}).forEach(function (callback) {                                                                                   // 85
			callback(item, constant);                                                                                         // 86
		});                                                                                                                // 87
	});                                                                                                                 // 88
};                                                                                                                   // 89
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"roomTypesCommon.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/lib/roomTypesCommon.js                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                              //
                                                                                                                     //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                     //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                    //
                                                                                                                     //
/* globals roomExit*/this.roomTypesCommon = function () {                                                            // 1
	function _class() {                                                                                                 // 3
		(0, _classCallCheck3.default)(this, _class);                                                                       // 3
		this.roomTypes = {};                                                                                               // 4
		this.roomTypesOrder = [];                                                                                          // 5
		this.mainOrder = 1;                                                                                                // 6
	} /* Adds a room type to app                                                                                        // 7
   @param identifier An identifier to the room type. If a real room, MUST BE the same of `db.rocketchat_room.t` field, if not, can be null
   @param order Order number of the type                                                                             //
   @param config                                                                                                     //
   template: template name to render on sideNav                                                                      //
   icon: icon class                                                                                                  //
   route:                                                                                                            //
   name: route name                                                                                                  //
   action: route action function                                                                                     //
   */                                                                                                                //
                                                                                                                     //
	_class.prototype.add = function () {                                                                                // 2
		function add() {                                                                                                   // 2
			var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Random.id();                 // 20
			var order = arguments[1];                                                                                         // 20
			var config = arguments[2];                                                                                        // 20
                                                                                                                     //
			if (this.roomTypes[identifier] != null) {                                                                         // 21
				return false;                                                                                                    // 22
			}                                                                                                                 // 23
                                                                                                                     //
			if (order == null) {                                                                                              // 24
				order = this.mainOrder + 10;                                                                                     // 25
				this.mainOrder += 10;                                                                                            // 26
			}                                                                                                                 // 27
                                                                                                                     //
			this.roomTypesOrder.push({                                                                                        // 28
				identifier: identifier,                                                                                          // 29
				order: order                                                                                                     // 30
			});                                                                                                               // 28
			this.roomTypes[identifier] = config;                                                                              // 32
                                                                                                                     //
			if (config.route && config.route.path && config.route.name && config.route.action) {                              // 33
				var routeConfig = {                                                                                              // 34
					name: config.route.name,                                                                                        // 35
					action: config.route.action                                                                                     // 36
				};                                                                                                               // 34
                                                                                                                     //
				if (Meteor.isClient) {                                                                                           // 38
					routeConfig.triggersExit = [roomExit];                                                                          // 39
				}                                                                                                                // 40
                                                                                                                     //
				return FlowRouter.route(config.route.path, routeConfig);                                                         // 41
			}                                                                                                                 // 42
		}                                                                                                                  // 43
                                                                                                                     //
		return add;                                                                                                        // 2
	}();                                                                                                                // 2
                                                                                                                     //
	_class.prototype.hasCustomLink = function () {                                                                      // 2
		function hasCustomLink(roomType) {                                                                                 // 2
			return this.roomTypes[roomType] && this.roomTypes[roomType].route && this.roomTypes[roomType].route.link != null;
		}                                                                                                                  // 47
                                                                                                                     //
		return hasCustomLink;                                                                                              // 2
	}(); /*                                                                                                             // 2
      @param roomType: room type (e.g.: c (for channels), d (for direct channels))                                   //
      @param subData: the user's subscription data                                                                   //
      */                                                                                                             //
                                                                                                                     //
	_class.prototype.getRouteLink = function () {                                                                       // 2
		function getRouteLink(roomType, subData) {                                                                         // 2
			if (this.roomTypes[roomType] == null) {                                                                           // 55
				return false;                                                                                                    // 56
			}                                                                                                                 // 57
                                                                                                                     //
			var routeData = {};                                                                                               // 58
                                                                                                                     //
			if (this.roomTypes[roomType] && this.roomTypes[roomType].route && this.roomTypes[roomType].route.link) {          // 59
				routeData = this.roomTypes[roomType].route.link(subData);                                                        // 60
			} else if (subData && subData.name) {                                                                             // 61
				routeData = {                                                                                                    // 62
					name: subData.name                                                                                              // 63
				};                                                                                                               // 62
			}                                                                                                                 // 65
                                                                                                                     //
			return FlowRouter.path(this.roomTypes[roomType].route.name, routeData);                                           // 66
		}                                                                                                                  // 67
                                                                                                                     //
		return getRouteLink;                                                                                               // 2
	}();                                                                                                                // 2
                                                                                                                     //
	_class.prototype.openRouteLink = function () {                                                                      // 2
		function openRouteLink(roomType, subData, queryParams) {                                                           // 2
			if (this.roomTypes[roomType] == null) {                                                                           // 70
				return false;                                                                                                    // 71
			}                                                                                                                 // 72
                                                                                                                     //
			var routeData = {};                                                                                               // 73
                                                                                                                     //
			if (this.roomTypes[roomType] && this.roomTypes[roomType].route && this.roomTypes[roomType].route.link) {          // 74
				routeData = this.roomTypes[roomType].route.link(subData);                                                        // 75
			} else if (subData && subData.name) {                                                                             // 76
				routeData = {                                                                                                    // 77
					name: subData.name                                                                                              // 78
				};                                                                                                               // 77
			}                                                                                                                 // 80
                                                                                                                     //
			return FlowRouter.go(this.roomTypes[roomType].route.name, routeData, queryParams);                                // 81
		}                                                                                                                  // 82
                                                                                                                     //
		return openRouteLink;                                                                                              // 2
	}();                                                                                                                // 2
                                                                                                                     //
	return _class;                                                                                                      // 2
}();                                                                                                                 // 2
                                                                                                                     //
module.exportDefault(this.roomTypesCommon);                                                                          // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"slashCommand.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/lib/slashCommand.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
RocketChat.slashCommands = {                                                                                         // 1
	commands: {}                                                                                                        // 2
};                                                                                                                   // 1
                                                                                                                     //
RocketChat.slashCommands.add = function (command, callback) {                                                        // 5
	var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};                               // 5
	var result = arguments[3];                                                                                          // 5
	RocketChat.slashCommands.commands[command] = {                                                                      // 6
		command: command,                                                                                                  // 7
		callback: callback,                                                                                                // 8
		params: options.params,                                                                                            // 9
		description: options.description,                                                                                  // 10
		clientOnly: options.clientOnly || false,                                                                           // 11
		result: result                                                                                                     // 12
	};                                                                                                                  // 6
};                                                                                                                   // 14
                                                                                                                     //
RocketChat.slashCommands.run = function (command, params, item) {                                                    // 16
	if (RocketChat.slashCommands.commands[command] && RocketChat.slashCommands.commands[command].callback) {            // 17
		return RocketChat.slashCommands.commands[command].callback(command, params, item);                                 // 18
	}                                                                                                                   // 19
};                                                                                                                   // 20
                                                                                                                     //
Meteor.methods({                                                                                                     // 22
	slashCommand: function (command) {                                                                                  // 23
		if (!Meteor.userId()) {                                                                                            // 24
			throw new Meteor.Error('error-invalid-user', 'Invalid user', {                                                    // 25
				method: 'slashCommand'                                                                                           // 26
			});                                                                                                               // 25
		}                                                                                                                  // 28
                                                                                                                     //
		return RocketChat.slashCommands.run(command.cmd, command.params, command.msg);                                     // 29
	}                                                                                                                   // 30
});                                                                                                                  // 22
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Message.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/lib/Message.js                                                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
RocketChat.Message = {                                                                                               // 1
	parse: function (msg, language) {                                                                                   // 2
		var messageType = RocketChat.MessageTypes.getType(msg);                                                            // 3
                                                                                                                     //
		if (messageType) {                                                                                                 // 4
			if (messageType.render) {                                                                                         // 5
				return messageType.render(msg);                                                                                  // 6
			} else if (messageType.template) {                                                                                // 7
				// Render message                                                                                                // 8
				return;                                                                                                          // 9
			} else if (messageType.message) {                                                                                 // 10
				if (!language && typeof localStorage !== 'undefined') {                                                          // 11
					language = localStorage.getItem('userLanguage');                                                                // 12
				}                                                                                                                // 13
                                                                                                                     //
				var data = typeof messageType.data === 'function' && messageType.data(msg) || {};                                // 14
				return TAPi18n.__(messageType.message, data, language);                                                          // 15
			}                                                                                                                 // 16
		}                                                                                                                  // 17
                                                                                                                     //
		if (msg.u && msg.u.username === RocketChat.settings.get('Chatops_Username')) {                                     // 18
			msg.html = msg.msg;                                                                                               // 19
			return msg.html;                                                                                                  // 20
		}                                                                                                                  // 21
                                                                                                                     //
		msg.html = msg.msg;                                                                                                // 22
                                                                                                                     //
		if (_.trim(msg.html) !== '') {                                                                                     // 23
			msg.html = _.escapeHTML(msg.html);                                                                                // 24
		}                                                                                                                  // 25
                                                                                                                     //
		msg.html = msg.html.replace(/\n/gm, '<br/>');                                                                      // 26
		return msg.html;                                                                                                   // 27
	}                                                                                                                   // 28
};                                                                                                                   // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"MessageTypes.js":function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/lib/MessageTypes.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                              //
                                                                                                                     //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                     //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                    //
                                                                                                                     //
RocketChat.MessageTypes = new (function () {                                                                         // 1
	function _class() {                                                                                                 // 2
		(0, _classCallCheck3.default)(this, _class);                                                                       // 2
		this.types = {};                                                                                                   // 3
	}                                                                                                                   // 4
                                                                                                                     //
	_class.prototype.registerType = function () {                                                                       // 1
		function registerType(options) {                                                                                   // 1
			return this.types[options.id] = options;                                                                          // 7
		}                                                                                                                  // 8
                                                                                                                     //
		return registerType;                                                                                               // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype.getType = function () {                                                                            // 1
		function getType(message) {                                                                                        // 1
			return this.types[message && message.t];                                                                          // 11
		}                                                                                                                  // 12
                                                                                                                     //
		return getType;                                                                                                    // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype.isSystemMessage = function () {                                                                    // 1
		function isSystemMessage(message) {                                                                                // 1
			var type = this.types[message && message.t];                                                                      // 15
			return type && type.system;                                                                                       // 16
		}                                                                                                                  // 17
                                                                                                                     //
		return isSystemMessage;                                                                                            // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype.isChartMessage = function () {                                                                     // 1
		function isChartMessage(message) {                                                                                 // 1
			var type = this.types[message && message.t];                                                                      // 20
			return type && type == 'chart';                                                                                   // 21
		}                                                                                                                  // 22
                                                                                                                     //
		return isChartMessage;                                                                                             // 1
	}();                                                                                                                // 1
                                                                                                                     //
	return _class;                                                                                                      // 1
}())();                                                                                                              // 1
Meteor.startup(function () {                                                                                         // 26
	RocketChat.MessageTypes.registerType({                                                                              // 27
		id: 'r',                                                                                                           // 28
		system: true,                                                                                                      // 29
		message: 'Room_name_changed',                                                                                      // 30
		data: function (message) {                                                                                         // 31
			return {                                                                                                          // 32
				room_name: message.msg,                                                                                          // 33
				user_by: message.u.username                                                                                      // 34
			};                                                                                                                // 32
		}                                                                                                                  // 36
	});                                                                                                                 // 27
	RocketChat.MessageTypes.registerType({                                                                              // 38
		id: 'au',                                                                                                          // 39
		system: true,                                                                                                      // 40
		message: 'User_added_by',                                                                                          // 41
		data: function (message) {                                                                                         // 42
			return {                                                                                                          // 43
				user_added: message.msg,                                                                                         // 44
				user_by: message.u.username                                                                                      // 45
			};                                                                                                                // 43
		}                                                                                                                  // 47
	});                                                                                                                 // 38
	RocketChat.MessageTypes.registerType({                                                                              // 49
		id: 'ru',                                                                                                          // 50
		system: true,                                                                                                      // 51
		message: 'User_removed_by',                                                                                        // 52
		data: function (message) {                                                                                         // 53
			return {                                                                                                          // 54
				user_removed: message.msg,                                                                                       // 55
				user_by: message.u.username                                                                                      // 56
			};                                                                                                                // 54
		}                                                                                                                  // 58
	});                                                                                                                 // 49
	RocketChat.MessageTypes.registerType({                                                                              // 60
		id: 'ul',                                                                                                          // 61
		system: true,                                                                                                      // 62
		message: 'User_left',                                                                                              // 63
		data: function (message) {                                                                                         // 64
			return {                                                                                                          // 65
				user_left: message.u.username                                                                                    // 66
			};                                                                                                                // 65
		}                                                                                                                  // 68
	});                                                                                                                 // 60
	RocketChat.MessageTypes.registerType({                                                                              // 70
		id: 'uj',                                                                                                          // 71
		system: true,                                                                                                      // 72
		message: 'User_joined_channel',                                                                                    // 73
		data: function (message) {                                                                                         // 74
			return {                                                                                                          // 75
				user: message.u.username                                                                                         // 76
			};                                                                                                                // 75
		}                                                                                                                  // 78
	});                                                                                                                 // 70
	RocketChat.MessageTypes.registerType({                                                                              // 80
		id: 'wm',                                                                                                          // 81
		system: true,                                                                                                      // 82
		message: 'Welcome',                                                                                                // 83
		data: function (message) {                                                                                         // 84
			return {                                                                                                          // 85
				user: message.u.username                                                                                         // 86
			};                                                                                                                // 85
		}                                                                                                                  // 88
	});                                                                                                                 // 80
	RocketChat.MessageTypes.registerType({                                                                              // 90
		id: 'rm',                                                                                                          // 91
		system: true,                                                                                                      // 92
		message: 'Message_removed',                                                                                        // 93
		data: function (message) {                                                                                         // 94
			return {                                                                                                          // 95
				user: message.u.username                                                                                         // 96
			};                                                                                                                // 95
		}                                                                                                                  // 98
	});                                                                                                                 // 90
	RocketChat.MessageTypes.registerType({                                                                              // 100
		id: 'rtc',                                                                                                         // 101
		render: function (message) {                                                                                       // 102
			return RocketChat.callbacks.run('renderRtcMessage', message);                                                     // 103
		}                                                                                                                  // 104
	});                                                                                                                 // 100
	RocketChat.MessageTypes.registerType({                                                                              // 106
		id: 'user-muted',                                                                                                  // 107
		system: true,                                                                                                      // 108
		message: 'User_muted_by',                                                                                          // 109
		data: function (message) {                                                                                         // 110
			return {                                                                                                          // 111
				user_muted: message.msg,                                                                                         // 112
				user_by: message.u.username                                                                                      // 113
			};                                                                                                                // 111
		}                                                                                                                  // 115
	});                                                                                                                 // 106
	RocketChat.MessageTypes.registerType({                                                                              // 117
		id: 'user-unmuted',                                                                                                // 118
		system: true,                                                                                                      // 119
		message: 'User_unmuted_by',                                                                                        // 120
		data: function (message) {                                                                                         // 121
			return {                                                                                                          // 122
				user_unmuted: message.msg,                                                                                       // 123
				user_by: message.u.username                                                                                      // 124
			};                                                                                                                // 122
		}                                                                                                                  // 126
	});                                                                                                                 // 117
	RocketChat.MessageTypes.registerType({                                                                              // 128
		id: 'subscription-role-added',                                                                                     // 129
		system: true,                                                                                                      // 130
		message: '__username__was_set__role__by__user_by_',                                                                // 131
		data: function (message) {                                                                                         // 132
			return {                                                                                                          // 133
				username: message.msg,                                                                                           // 134
				role: message.role,                                                                                              // 135
				user_by: message.u.username                                                                                      // 136
			};                                                                                                                // 133
		}                                                                                                                  // 138
	});                                                                                                                 // 128
	RocketChat.MessageTypes.registerType({                                                                              // 140
		id: 'subscription-role-removed',                                                                                   // 141
		system: true,                                                                                                      // 142
		message: '__username__is_no_longer__role__defined_by__user_by_',                                                   // 143
		data: function (message) {                                                                                         // 144
			return {                                                                                                          // 145
				username: message.msg,                                                                                           // 146
				role: message.role,                                                                                              // 147
				user_by: message.u.username                                                                                      // 148
			};                                                                                                                // 145
		}                                                                                                                  // 150
	});                                                                                                                 // 140
	RocketChat.MessageTypes.registerType({                                                                              // 152
		id: 'room-archived',                                                                                               // 153
		system: true,                                                                                                      // 154
		message: 'This_room_has_been_archived_by__username_',                                                              // 155
		data: function (message) {                                                                                         // 156
			return {                                                                                                          // 157
				username: message.u.username                                                                                     // 158
			};                                                                                                                // 157
		}                                                                                                                  // 160
	});                                                                                                                 // 152
	RocketChat.MessageTypes.registerType({                                                                              // 162
		id: 'room-unarchived',                                                                                             // 163
		system: true,                                                                                                      // 164
		message: 'This_room_has_been_unarchived_by__username_',                                                            // 165
		data: function (message) {                                                                                         // 166
			return {                                                                                                          // 167
				username: message.u.username                                                                                     // 168
			};                                                                                                                // 167
		}                                                                                                                  // 170
	}); //TODO : 차트파입, 공지, 아이템 타입(여러 아이템을 별로도 정의)들을 정의                                                                  // 162
	//메리지 컬럼 't'에 타입을 넣으면 반영됨.                                                                                          // 174
                                                                                                                     //
	RocketChat.MessageTypes.registerType({                                                                              // 175
		id: 'chart',                                                                                                       // 176
		system: false                                                                                                      // 177
	});                                                                                                                 // 175
});                                                                                                                  // 179
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"startup":{"settingsOnLoadSiteUrl.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/lib/startup/settingsOnLoadSiteUrl.js                                                      //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/* globals WebAppInternals */RocketChat.settings.get('Site_Url', function (key, value) {                             // 1
	if (value == null || value.trim() === '') {                                                                         // 3
		return;                                                                                                            // 4
	}                                                                                                                   // 5
                                                                                                                     //
	var host = value.replace(/\/$/, ''); // let prefix = '';                                                            // 6
                                                                                                                     //
	var match = value.match(/([^\/]+\/{2}[^\/]+)(\/.+)/);                                                               // 8
                                                                                                                     //
	if (match != null) {                                                                                                // 9
		host = match[1]; // prefix = match[2].replace(/\/$/, '');                                                          // 10
	}                                                                                                                   // 12
                                                                                                                     //
	__meteor_runtime_config__.ROOT_URL = host;                                                                          // 13
                                                                                                                     //
	if (Meteor.absoluteUrl.defaultOptions && Meteor.absoluteUrl.defaultOptions.rootUrl) {                               // 15
		Meteor.absoluteUrl.defaultOptions.rootUrl = host;                                                                  // 16
	}                                                                                                                   // 17
                                                                                                                     //
	if (Meteor.isServer) {                                                                                              // 18
		RocketChat.hostname = host.replace(/^https?:\/\//, '');                                                            // 19
		process.env.MOBILE_ROOT_URL = host;                                                                                // 20
		process.env.MOBILE_DDP_URL = host;                                                                                 // 21
                                                                                                                     //
		if (typeof WebAppInternals !== 'undefined' && WebAppInternals.generateBoilerplate) {                               // 22
			return WebAppInternals.generateBoilerplate();                                                                     // 23
		}                                                                                                                  // 24
	}                                                                                                                   // 25
});                                                                                                                  // 26
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"client":{"Notifications.js":function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/client/Notifications.js                                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                              //
                                                                                                                     //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                     //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                    //
                                                                                                                     //
RocketChat.Notifications = new (function () {                                                                        // 1
	function _class() {                                                                                                 // 2
		var _this = this;                                                                                                  // 2
                                                                                                                     //
		(0, _classCallCheck3.default)(this, _class);                                                                       // 2
		this.logged = Meteor.userId() !== null;                                                                            // 3
		this.loginCb = [];                                                                                                 // 4
		Tracker.autorun(function () {                                                                                      // 5
			if (Meteor.userId() !== null && _this.logged === false) {                                                         // 6
				_this.loginCb.forEach(function (cb) {                                                                            // 7
					return cb();                                                                                                    // 7
				});                                                                                                              // 7
			}                                                                                                                 // 8
                                                                                                                     //
			return _this.logged = Meteor.userId() !== null;                                                                   // 9
		});                                                                                                                // 10
		this.debug = false;                                                                                                // 11
		this.streamAll = new Meteor.Streamer('notify-all');                                                                // 12
		this.streamLogged = new Meteor.Streamer('notify-logged');                                                          // 13
		this.streamRoom = new Meteor.Streamer('notify-room');                                                              // 14
		this.streamRoomUsers = new Meteor.Streamer('notify-room-users');                                                   // 15
		this.streamUser = new Meteor.Streamer('notify-user');                                                              // 16
                                                                                                                     //
		if (this.debug === true) {                                                                                         // 17
			this.onAll(function () {                                                                                          // 18
				return console.log('RocketChat.Notifications: onAll', arguments);                                                // 19
			});                                                                                                               // 20
			this.onUser(function () {                                                                                         // 21
				return console.log('RocketChat.Notifications: onAll', arguments);                                                // 22
			});                                                                                                               // 23
		}                                                                                                                  // 24
	}                                                                                                                   // 25
                                                                                                                     //
	_class.prototype.onLogin = function () {                                                                            // 1
		function onLogin(cb) {                                                                                             // 1
			this.loginCb.push(cb);                                                                                            // 28
                                                                                                                     //
			if (this.logged) {                                                                                                // 29
				return cb();                                                                                                     // 30
			}                                                                                                                 // 31
		}                                                                                                                  // 32
                                                                                                                     //
		return onLogin;                                                                                                    // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype.notifyRoom = function () {                                                                         // 1
		function notifyRoom(room, eventName) {                                                                             // 1
			for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {         // 33
				args[_key - 2] = arguments[_key];                                                                                // 33
			}                                                                                                                 // 33
                                                                                                                     //
			if (this.debug === true) {                                                                                        // 34
				console.log('RocketChat.Notifications: notifyRoom', arguments);                                                  // 35
			}                                                                                                                 // 36
                                                                                                                     //
			args.unshift(room + "/" + eventName);                                                                             // 37
			return this.streamRoom.emit.apply(this.streamRoom, args);                                                         // 38
		}                                                                                                                  // 39
                                                                                                                     //
		return notifyRoom;                                                                                                 // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype.notifyUser = function () {                                                                         // 1
		function notifyUser(userId, eventName) {                                                                           // 1
			for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {  // 40
				args[_key2 - 2] = arguments[_key2];                                                                              // 40
			}                                                                                                                 // 40
                                                                                                                     //
			if (this.debug === true) {                                                                                        // 41
				console.log('RocketChat.Notifications: notifyUser', arguments);                                                  // 42
			}                                                                                                                 // 43
                                                                                                                     //
			args.unshift(userId + "/" + eventName);                                                                           // 44
			return this.streamUser.emit.apply(this.streamUser, args);                                                         // 45
		}                                                                                                                  // 46
                                                                                                                     //
		return notifyUser;                                                                                                 // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype.notifyUsersOfRoom = function () {                                                                  // 1
		function notifyUsersOfRoom(room, eventName) {                                                                      // 1
			for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {  // 47
				args[_key3 - 2] = arguments[_key3];                                                                              // 47
			}                                                                                                                 // 47
                                                                                                                     //
			if (this.debug === true) {                                                                                        // 48
				console.log('RocketChat.Notifications: notifyUsersOfRoom', arguments);                                           // 49
			}                                                                                                                 // 50
                                                                                                                     //
			args.unshift(room + "/" + eventName);                                                                             // 51
			return this.streamRoomUsers.emit.apply(this.streamRoomUsers, args);                                               // 52
		}                                                                                                                  // 53
                                                                                                                     //
		return notifyUsersOfRoom;                                                                                          // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype.onAll = function () {                                                                              // 1
		function onAll(eventName, callback) {                                                                              // 1
			return this.streamAll.on(eventName, callback);                                                                    // 55
		}                                                                                                                  // 56
                                                                                                                     //
		return onAll;                                                                                                      // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype.onLogged = function () {                                                                           // 1
		function onLogged(eventName, callback) {                                                                           // 1
			var _this2 = this;                                                                                                // 57
                                                                                                                     //
			return this.onLogin(function () {                                                                                 // 58
				return _this2.streamLogged.on(eventName, callback);                                                              // 59
			});                                                                                                               // 60
		}                                                                                                                  // 61
                                                                                                                     //
		return onLogged;                                                                                                   // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype.onRoom = function () {                                                                             // 1
		function onRoom(room, eventName, callback) {                                                                       // 1
			if (this.debug === true) {                                                                                        // 63
				this.streamRoom.on(room, function () {                                                                           // 64
					return console.log("RocketChat.Notifications: onRoom " + room, arguments);                                      // 65
				});                                                                                                              // 66
			}                                                                                                                 // 67
                                                                                                                     //
			return this.streamRoom.on(room + "/" + eventName, callback);                                                      // 68
		}                                                                                                                  // 69
                                                                                                                     //
		return onRoom;                                                                                                     // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype.onUser = function () {                                                                             // 1
		function onUser(eventName, callback) {                                                                             // 1
			return this.streamUser.on(Meteor.userId() + "/" + eventName, callback);                                           // 71
		}                                                                                                                  // 72
                                                                                                                     //
		return onUser;                                                                                                     // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype.unAll = function () {                                                                              // 1
		function unAll(callback) {                                                                                         // 1
			return this.streamAll.removeListener('notify', callback);                                                         // 74
		}                                                                                                                  // 75
                                                                                                                     //
		return unAll;                                                                                                      // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype.unLogged = function () {                                                                           // 1
		function unLogged(callback) {                                                                                      // 1
			return this.streamLogged.removeListener('notify', callback);                                                      // 77
		}                                                                                                                  // 78
                                                                                                                     //
		return unLogged;                                                                                                   // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype.unRoom = function () {                                                                             // 1
		function unRoom(room, eventName, callback) {                                                                       // 1
			return this.streamRoom.removeListener(room + "/" + eventName, callback);                                          // 80
		}                                                                                                                  // 81
                                                                                                                     //
		return unRoom;                                                                                                     // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype.unUser = function () {                                                                             // 1
		function unUser(callback) {                                                                                        // 1
			return this.streamUser.removeListener(Meteor.userId(), callback);                                                 // 83
		}                                                                                                                  // 84
                                                                                                                     //
		return unUser;                                                                                                     // 1
	}();                                                                                                                // 1
                                                                                                                     //
	return _class;                                                                                                      // 1
}())();                                                                                                              // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"OAuthProxy.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/client/OAuthProxy.js                                                                      //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/* globals OAuth */OAuth.launchLogin = _.wrap(OAuth.launchLogin, function (func, options) {                          // 1
	var proxy = RocketChat.settings.get('Accounts_OAuth_Proxy_services').replace(/\s/g, '').split(',');                 // 4
                                                                                                                     //
	if (proxy.includes(options.loginService)) {                                                                         // 5
		var redirect_uri = options.loginUrl.match(/(&redirect_uri=)([^&]+|$)/)[2];                                         // 6
		options.loginUrl = options.loginUrl.replace(/(&redirect_uri=)([^&]+|$)/, "$1" + encodeURIComponent(RocketChat.settings.get('Accounts_OAuth_Proxy_host')) + "/oauth_redirect");
		options.loginUrl = options.loginUrl.replace(/(&state=)([^&]+|$)/, "$1" + redirect_uri + "!$2");                    // 8
		options.loginUrl = RocketChat.settings.get('Accounts_OAuth_Proxy_host') + "/redirect/" + encodeURIComponent(options.loginUrl);
	}                                                                                                                   // 10
                                                                                                                     //
	return func(options);                                                                                               // 12
});                                                                                                                  // 13
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lib":{"TabBar.js":function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/client/lib/TabBar.js                                                                      //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                              //
                                                                                                                     //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                     //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                    //
                                                                                                                     //
RocketChat.TabBar = new (function () {                                                                               // 1
	function TabBar() {                                                                                                 // 2
		(0, _classCallCheck3.default)(this, TabBar);                                                                       // 2
		this.buttons = new ReactiveVar({});                                                                                // 3
		this.extraGroups = {};                                                                                             // 5
	}                                                                                                                   // 6
                                                                                                                     //
	TabBar.prototype.show = function () {                                                                               // 1
		function show() {                                                                                                  // 1
			$('.flex-tab-bar').show();                                                                                        // 9
		}                                                                                                                  // 10
                                                                                                                     //
		return show;                                                                                                       // 1
	}();                                                                                                                // 1
                                                                                                                     //
	TabBar.prototype.hide = function () {                                                                               // 1
		function hide() {                                                                                                  // 1
			$('.flex-tab-bar').hide();                                                                                        // 13
		}                                                                                                                  // 14
                                                                                                                     //
		return hide;                                                                                                       // 1
	}();                                                                                                                // 1
                                                                                                                     //
	TabBar.prototype.addButton = function () {                                                                          // 1
		function addButton(config) {                                                                                       // 1
			if (!config || !config.id) {                                                                                      // 17
				return false;                                                                                                    // 18
			}                                                                                                                 // 19
                                                                                                                     //
			var btns = this.buttons.curValue;                                                                                 // 21
			btns[config.id] = config;                                                                                         // 22
                                                                                                                     //
			if (this.extraGroups[config.id]) {                                                                                // 24
				btns[config.id].groups = _.union(btns[config.id].groups || [], this.extraGroups[config.id]);                     // 25
			}                                                                                                                 // 26
                                                                                                                     //
			this.buttons.set(btns);                                                                                           // 28
		}                                                                                                                  // 29
                                                                                                                     //
		return addButton;                                                                                                  // 1
	}();                                                                                                                // 1
                                                                                                                     //
	TabBar.prototype.removeButton = function () {                                                                       // 1
		function removeButton(id) {                                                                                        // 1
			var btns = this.buttons.curValue;                                                                                 // 32
			delete btns[id];                                                                                                  // 33
			this.buttons.set(btns);                                                                                           // 34
		}                                                                                                                  // 35
                                                                                                                     //
		return removeButton;                                                                                               // 1
	}();                                                                                                                // 1
                                                                                                                     //
	TabBar.prototype.updateButton = function () {                                                                       // 1
		function updateButton(id, config) {                                                                                // 1
			var btns = this.buttons.curValue;                                                                                 // 38
                                                                                                                     //
			if (btns[id]) {                                                                                                   // 39
				btns[id] = _.extend(btns[id], config);                                                                           // 40
				this.buttons.set(btns);                                                                                          // 41
			}                                                                                                                 // 42
		}                                                                                                                  // 43
                                                                                                                     //
		return updateButton;                                                                                               // 1
	}();                                                                                                                // 1
                                                                                                                     //
	TabBar.prototype.getButtons = function () {                                                                         // 1
		function getButtons() {                                                                                            // 1
			return _.sortBy(_.toArray(this.buttons.get()), 'order');                                                          // 46
		}                                                                                                                  // 47
                                                                                                                     //
		return getButtons;                                                                                                 // 1
	}();                                                                                                                // 1
                                                                                                                     //
	TabBar.prototype.getButton = function () {                                                                          // 1
		function getButton(id) {                                                                                           // 1
			return _.findWhere(this.buttons.get(), {                                                                          // 50
				id: id                                                                                                           // 50
			});                                                                                                               // 50
		}                                                                                                                  // 51
                                                                                                                     //
		return getButton;                                                                                                  // 1
	}();                                                                                                                // 1
                                                                                                                     //
	TabBar.prototype.addGroup = function () {                                                                           // 1
		function addGroup(id, groups) {                                                                                    // 1
			var btns = this.buttons.curValue;                                                                                 // 54
                                                                                                                     //
			if (btns[id]) {                                                                                                   // 55
				btns[id].groups = _.union(btns[id].groups || [], groups);                                                        // 56
				this.buttons.set(btns);                                                                                          // 57
			} else {                                                                                                          // 58
				this.extraGroups[id] = _.union(this.extraGroups[id] || [], groups);                                              // 59
			}                                                                                                                 // 60
		}                                                                                                                  // 61
                                                                                                                     //
		return addGroup;                                                                                                   // 1
	}();                                                                                                                // 1
                                                                                                                     //
	TabBar.prototype.removeGroup = function () {                                                                        // 1
		function removeGroup(id, groups) {                                                                                 // 1
			var btns = this.buttons.curValue;                                                                                 // 64
                                                                                                                     //
			if (btns[id]) {                                                                                                   // 65
				btns[id].groups = _.difference(btns[id].groups || [], groups);                                                   // 66
				this.buttons.set(btns);                                                                                          // 67
			} else {                                                                                                          // 68
				this.extraGroups[id] = _.difference(this.extraGroups[id] || [], groups);                                         // 69
			}                                                                                                                 // 70
		}                                                                                                                  // 71
                                                                                                                     //
		return removeGroup;                                                                                                // 1
	}();                                                                                                                // 1
                                                                                                                     //
	return TabBar;                                                                                                      // 1
}())();                                                                                                              // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"RocketChatTabBar.js":function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/client/lib/RocketChatTabBar.js                                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _typeof2 = require("babel-runtime/helpers/typeof");                                                              //
                                                                                                                     //
var _typeof3 = _interopRequireDefault(_typeof2);                                                                     //
                                                                                                                     //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                              //
                                                                                                                     //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                     //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                    //
                                                                                                                     //
/* globals RocketChatTabBar */ /* exported RocketChatTabBar */RocketChatTabBar = function () {                       // 1
	function RocketChatTabBar() {                                                                                       // 5
		(0, _classCallCheck3.default)(this, RocketChatTabBar);                                                             // 5
		this.template = new ReactiveVar();                                                                                 // 6
		this.group = new ReactiveVar();                                                                                    // 7
		this.state = new ReactiveVar();                                                                                    // 8
		this.data = new ReactiveVar();                                                                                     // 9
	}                                                                                                                   // 10
                                                                                                                     //
	RocketChatTabBar.prototype.getTemplate = function () {                                                              // 4
		function getTemplate() {                                                                                           // 4
			return this.template.get();                                                                                       // 13
		}                                                                                                                  // 14
                                                                                                                     //
		return getTemplate;                                                                                                // 4
	}();                                                                                                                // 4
                                                                                                                     //
	RocketChatTabBar.prototype.setTemplate = function () {                                                              // 4
		function setTemplate(template) {                                                                                   // 4
			this.template.set(template);                                                                                      // 17
		}                                                                                                                  // 18
                                                                                                                     //
		return setTemplate;                                                                                                // 4
	}();                                                                                                                // 4
                                                                                                                     //
	RocketChatTabBar.prototype.currentGroup = function () {                                                             // 4
		function currentGroup() {                                                                                          // 4
			return this.group.get();                                                                                          // 21
		}                                                                                                                  // 22
                                                                                                                     //
		return currentGroup;                                                                                               // 4
	}();                                                                                                                // 4
                                                                                                                     //
	RocketChatTabBar.prototype.showGroup = function () {                                                                // 4
		function showGroup(group) {                                                                                        // 4
			this.group.set(group);                                                                                            // 25
		}                                                                                                                  // 26
                                                                                                                     //
		return showGroup;                                                                                                  // 4
	}();                                                                                                                // 4
                                                                                                                     //
	RocketChatTabBar.prototype.setData = function () {                                                                  // 4
		function setData(d) {                                                                                              // 4
			this.data.set(d);                                                                                                 // 29
		}                                                                                                                  // 30
                                                                                                                     //
		return setData;                                                                                                    // 4
	}();                                                                                                                // 4
                                                                                                                     //
	RocketChatTabBar.prototype.getData = function () {                                                                  // 4
		function getData() {                                                                                               // 4
			return this.data.get();                                                                                           // 33
		}                                                                                                                  // 34
                                                                                                                     //
		return getData;                                                                                                    // 4
	}();                                                                                                                // 4
                                                                                                                     //
	RocketChatTabBar.prototype.getButtons = function () {                                                               // 4
		function getButtons() {                                                                                            // 4
			return RocketChat.TabBar.getButtons();                                                                            // 37
		}                                                                                                                  // 38
                                                                                                                     //
		return getButtons;                                                                                                 // 4
	}();                                                                                                                // 4
                                                                                                                     //
	RocketChatTabBar.prototype.getState = function () {                                                                 // 4
		function getState() {                                                                                              // 4
			return this.state.get();                                                                                          // 41
		}                                                                                                                  // 42
                                                                                                                     //
		return getState;                                                                                                   // 4
	}();                                                                                                                // 4
                                                                                                                     //
	RocketChatTabBar.prototype.open = function () {                                                                     // 4
		function open(button) {                                                                                            // 4
			this.state.set('opened');                                                                                         // 45
                                                                                                                     //
			if (button) {                                                                                                     // 47
				if ((typeof button === "undefined" ? "undefined" : (0, _typeof3.default)(button)) !== 'object' || !button.id) {  // 48
					button = RocketChat.TabBar.getButton(button);                                                                   // 49
				}                                                                                                                // 50
                                                                                                                     //
				if (button.width) {                                                                                              // 51
					$('.flex-tab').css('width', button.width + "px");                                                               // 52
				} else {                                                                                                         // 53
					$('.flex-tab').css('width', '');                                                                                // 54
				}                                                                                                                // 55
                                                                                                                     //
				this.template.set(button.template);                                                                              // 56
			}                                                                                                                 // 57
                                                                                                                     //
			Tracker.afterFlush(function () {                                                                                  // 59
				$('.flex-tab').find('input[type=text]:first').focus();                                                           // 60
				$('.flex-tab .content').scrollTop(0);                                                                            // 61
			});                                                                                                               // 62
		}                                                                                                                  // 63
                                                                                                                     //
		return open;                                                                                                       // 4
	}();                                                                                                                // 4
                                                                                                                     //
	RocketChatTabBar.prototype.close = function () {                                                                    // 4
		function close() {                                                                                                 // 4
			this.state.set('');                                                                                               // 66
			$('.flex-tab').css('width', '');                                                                                  // 68
			this.template.set();                                                                                              // 70
		}                                                                                                                  // 71
                                                                                                                     //
		return close;                                                                                                      // 4
	}();                                                                                                                // 4
                                                                                                                     //
	return RocketChatTabBar;                                                                                            // 4
}();                                                                                                                 // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"cachedCollection.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/client/lib/cachedCollection.js                                                            //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");                                        //
                                                                                                                     //
var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);                                               //
                                                                                                                     //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                              //
                                                                                                                     //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                     //
                                                                                                                     //
var _createClass2 = require("babel-runtime/helpers/createClass");                                                    //
                                                                                                                     //
var _createClass3 = _interopRequireDefault(_createClass2);                                                           //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                    //
                                                                                                                     //
var localforage = void 0;                                                                                            // 1
module.watch(require("localforage"), {                                                                               // 1
	"default": function (v) {                                                                                           // 1
		localforage = v;                                                                                                   // 1
	}                                                                                                                   // 1
}, 0);                                                                                                               // 1
                                                                                                                     //
var CachedCollectionManager = function () {                                                                          //
	function CachedCollectionManager() {                                                                                // 4
		var _this = this;                                                                                                  // 4
                                                                                                                     //
		(0, _classCallCheck3.default)(this, CachedCollectionManager);                                                      // 4
		this.items = [];                                                                                                   // 5
		this._syncEnabled = false;                                                                                         // 6
		this.reconnectCb = [];                                                                                             // 7
		this.loginCb = [];                                                                                                 // 8
		this.logged = false;                                                                                               // 9
		var _unstoreLoginToken = Accounts._unstoreLoginToken;                                                              // 11
                                                                                                                     //
		Accounts._unstoreLoginToken = function () {                                                                        // 12
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {                            // 12
				args[_key] = arguments[_key];                                                                                    // 12
			}                                                                                                                 // 12
                                                                                                                     //
			_unstoreLoginToken.apply(Accounts, args);                                                                         // 13
                                                                                                                     //
			_this.clearAllCacheOnLogout();                                                                                    // 14
		};                                                                                                                 // 15
                                                                                                                     //
		var connectionWasOnline = true;                                                                                    // 17
		Tracker.autorun(function () {                                                                                      // 18
			var connected = Meteor.connection.status().connected;                                                             // 19
                                                                                                                     //
			if (connected === true && connectionWasOnline === false) {                                                        // 21
				for (var _iterator = _this.reconnectCb, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
					var _ref;                                                                                                       // 22
                                                                                                                     //
					if (_isArray) {                                                                                                 // 22
						if (_i >= _iterator.length) break;                                                                             // 22
						_ref = _iterator[_i++];                                                                                        // 22
					} else {                                                                                                        // 22
						_i = _iterator.next();                                                                                         // 22
						if (_i.done) break;                                                                                            // 22
						_ref = _i.value;                                                                                               // 22
					}                                                                                                               // 22
                                                                                                                     //
					var cb = _ref;                                                                                                  // 22
					cb();                                                                                                           // 23
				}                                                                                                                // 24
			}                                                                                                                 // 25
                                                                                                                     //
			connectionWasOnline = connected;                                                                                  // 27
		});                                                                                                                // 28
		Tracker.autorun(function () {                                                                                      // 30
			if (Meteor.userId() !== null) {                                                                                   // 31
				if (_this.logged === false) {                                                                                    // 32
					for (var _iterator2 = _this.loginCb, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
						var _ref2;                                                                                                     // 33
                                                                                                                     //
						if (_isArray2) {                                                                                               // 33
							if (_i2 >= _iterator2.length) break;                                                                          // 33
							_ref2 = _iterator2[_i2++];                                                                                    // 33
						} else {                                                                                                       // 33
							_i2 = _iterator2.next();                                                                                      // 33
							if (_i2.done) break;                                                                                          // 33
							_ref2 = _i2.value;                                                                                            // 33
						}                                                                                                              // 33
                                                                                                                     //
						var cb = _ref2;                                                                                                // 33
						cb();                                                                                                          // 34
					}                                                                                                               // 35
				}                                                                                                                // 36
			}                                                                                                                 // 37
                                                                                                                     //
			_this.logged = Meteor.userId() !== null;                                                                          // 39
		});                                                                                                                // 40
	}                                                                                                                   // 41
                                                                                                                     //
	CachedCollectionManager.prototype.register = function () {                                                          //
		function register(cachedCollection) {                                                                              //
			this.items.push(cachedCollection);                                                                                // 44
		}                                                                                                                  // 45
                                                                                                                     //
		return register;                                                                                                   //
	}();                                                                                                                //
                                                                                                                     //
	CachedCollectionManager.prototype.clearAllCache = function () {                                                     //
		function clearAllCache() {                                                                                         //
			for (var _iterator3 = this.items, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
				var _ref3;                                                                                                       // 48
                                                                                                                     //
				if (_isArray3) {                                                                                                 // 48
					if (_i3 >= _iterator3.length) break;                                                                            // 48
					_ref3 = _iterator3[_i3++];                                                                                      // 48
				} else {                                                                                                         // 48
					_i3 = _iterator3.next();                                                                                        // 48
					if (_i3.done) break;                                                                                            // 48
					_ref3 = _i3.value;                                                                                              // 48
				}                                                                                                                // 48
                                                                                                                     //
				var item = _ref3;                                                                                                // 48
				item.clearCache();                                                                                               // 49
			}                                                                                                                 // 50
		}                                                                                                                  // 51
                                                                                                                     //
		return clearAllCache;                                                                                              //
	}();                                                                                                                //
                                                                                                                     //
	CachedCollectionManager.prototype.clearAllCacheOnLogout = function () {                                             //
		function clearAllCacheOnLogout() {                                                                                 //
			for (var _iterator4 = this.items, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
				var _ref4;                                                                                                       // 54
                                                                                                                     //
				if (_isArray4) {                                                                                                 // 54
					if (_i4 >= _iterator4.length) break;                                                                            // 54
					_ref4 = _iterator4[_i4++];                                                                                      // 54
				} else {                                                                                                         // 54
					_i4 = _iterator4.next();                                                                                        // 54
					if (_i4.done) break;                                                                                            // 54
					_ref4 = _i4.value;                                                                                              // 54
				}                                                                                                                // 54
                                                                                                                     //
				var item = _ref4;                                                                                                // 54
				item.clearCacheOnLogout();                                                                                       // 55
			}                                                                                                                 // 56
		}                                                                                                                  // 57
                                                                                                                     //
		return clearAllCacheOnLogout;                                                                                      //
	}();                                                                                                                //
                                                                                                                     //
	CachedCollectionManager.prototype.countQueries = function () {                                                      //
		function countQueries() {                                                                                          //
			for (var _iterator5 = this.items, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
				var _ref5;                                                                                                       // 60
                                                                                                                     //
				if (_isArray5) {                                                                                                 // 60
					if (_i5 >= _iterator5.length) break;                                                                            // 60
					_ref5 = _iterator5[_i5++];                                                                                      // 60
				} else {                                                                                                         // 60
					_i5 = _iterator5.next();                                                                                        // 60
					if (_i5.done) break;                                                                                            // 60
					_ref5 = _i5.value;                                                                                              // 60
				}                                                                                                                // 60
                                                                                                                     //
				var item = _ref5;                                                                                                // 60
				item.countQueries();                                                                                             // 61
			}                                                                                                                 // 62
		}                                                                                                                  // 63
                                                                                                                     //
		return countQueries;                                                                                               //
	}();                                                                                                                //
                                                                                                                     //
	CachedCollectionManager.prototype.onReconnect = function () {                                                       //
		function onReconnect(cb) {                                                                                         //
			this.reconnectCb.push(cb);                                                                                        // 75
		}                                                                                                                  // 76
                                                                                                                     //
		return onReconnect;                                                                                                //
	}();                                                                                                                //
                                                                                                                     //
	CachedCollectionManager.prototype.onLogin = function () {                                                           //
		function onLogin(cb) {                                                                                             //
			this.loginCb.push(cb);                                                                                            // 79
                                                                                                                     //
			if (this.logged) {                                                                                                // 80
				cb();                                                                                                            // 81
			}                                                                                                                 // 82
		}                                                                                                                  // 83
                                                                                                                     //
		return onLogin;                                                                                                    //
	}();                                                                                                                //
                                                                                                                     //
	(0, _createClass3.default)(CachedCollectionManager, [{                                                              //
		key: "syncEnabled",                                                                                                //
		set: function (value) {                                                                                            //
			check(value, Boolean);                                                                                            // 66
			this._syncEnabled = value;                                                                                        // 67
		},                                                                                                                 // 68
		get: function () {                                                                                                 //
			return this._syncEnabled;                                                                                         // 71
		}                                                                                                                  // 72
	}]);                                                                                                                //
	return CachedCollectionManager;                                                                                     //
}();                                                                                                                 //
                                                                                                                     //
RocketChat.CachedCollectionManager = new CachedCollectionManager();                                                  // 86
                                                                                                                     //
var CachedCollection = function () {                                                                                 //
	function CachedCollection(_ref6) {                                                                                  // 90
		var _this2 = this;                                                                                                 // 103
                                                                                                                     //
		var collection = _ref6.collection,                                                                                 // 103
		    name = _ref6.name,                                                                                             // 103
		    methodName = _ref6.methodName,                                                                                 // 103
		    syncMethodName = _ref6.syncMethodName,                                                                         // 103
		    eventName = _ref6.eventName,                                                                                   // 103
		    _ref6$eventType = _ref6.eventType,                                                                             // 103
		    eventType = _ref6$eventType === undefined ? 'onUser' : _ref6$eventType,                                        // 103
		    _ref6$userRelated = _ref6.userRelated,                                                                         // 103
		    userRelated = _ref6$userRelated === undefined ? true : _ref6$userRelated,                                      // 103
		    _ref6$useSync = _ref6.useSync,                                                                                 // 103
		    useSync = _ref6$useSync === undefined ? true : _ref6$useSync,                                                  // 103
		    _ref6$useCache = _ref6.useCache,                                                                               // 103
		    useCache = _ref6$useCache === undefined ? true : _ref6$useCache,                                               // 103
		    _ref6$debug = _ref6.debug,                                                                                     // 103
		    debug = _ref6$debug === undefined ? true : _ref6$debug,                                                        // 103
		    _ref6$version = _ref6.version,                                                                                 // 103
		    version = _ref6$version === undefined ? 6 : _ref6$version,                                                     // 103
		    _ref6$maxCacheTime = _ref6.maxCacheTime,                                                                       // 103
		    maxCacheTime = _ref6$maxCacheTime === undefined ? 60 * 60 * 24 * 30 : _ref6$maxCacheTime;                      // 103
		(0, _classCallCheck3.default)(this, CachedCollection);                                                             // 103
		this.collection = collection || new Mongo.Collection(null);                                                        // 104
		this.ready = new ReactiveVar(false);                                                                               // 106
		this.name = name;                                                                                                  // 107
		this.methodName = methodName || name + "/get";                                                                     // 108
		this.syncMethodName = syncMethodName || name + "/get";                                                             // 109
		this.eventName = eventName || name + "-changed";                                                                   // 110
		this.eventType = eventType;                                                                                        // 111
		this.useSync = useSync;                                                                                            // 112
		this.useCache = useCache;                                                                                          // 113
		this.debug = debug;                                                                                                // 114
		this.version = version;                                                                                            // 115
		this.userRelated = userRelated;                                                                                    // 116
		this.updatedAt = new Date(0);                                                                                      // 117
		this.maxCacheTime = maxCacheTime;                                                                                  // 118
		RocketChat.CachedCollectionManager.register(this);                                                                 // 120
                                                                                                                     //
		if (userRelated === true) {                                                                                        // 122
			RocketChat.CachedCollectionManager.onLogin(function () {                                                          // 123
				_this2.log('Init on login');                                                                                     // 124
                                                                                                                     //
				_this2.ready.set(false);                                                                                         // 125
                                                                                                                     //
				_this2.updatedAt = new Date(0);                                                                                  // 126
				_this2.initiated = false;                                                                                        // 127
                                                                                                                     //
				_this2.init();                                                                                                   // 128
			});                                                                                                               // 129
		}                                                                                                                  // 130
                                                                                                                     //
		if (this.useCache === false) {                                                                                     // 132
			return this.clearCache();                                                                                         // 133
		}                                                                                                                  // 134
	}                                                                                                                   // 135
                                                                                                                     //
	CachedCollection.prototype.log = function () {                                                                      //
		function log() {                                                                                                   //
			if (this.debug === true) {                                                                                        // 138
				var _console;                                                                                                    // 138
                                                                                                                     //
				for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {                     // 138
					args[_key2] = arguments[_key2];                                                                                 // 137
				}                                                                                                                // 138
                                                                                                                     //
				(_console = console).log.apply(_console, ["CachedCollection " + this.name + " =>"].concat(args));                // 139
			}                                                                                                                 // 140
		}                                                                                                                  // 141
                                                                                                                     //
		return log;                                                                                                        //
	}();                                                                                                                //
                                                                                                                     //
	CachedCollection.prototype.countQueries = function () {                                                             //
		function countQueries() {                                                                                          //
			this.log(Object.keys(this.collection._collection.queries).length + " queries");                                   // 144
		}                                                                                                                  // 145
                                                                                                                     //
		return countQueries;                                                                                               //
	}();                                                                                                                //
                                                                                                                     //
	CachedCollection.prototype.recomputeCollectionQueries = function () {                                               //
		function recomputeCollectionQueries() {                                                                            //
			var _this3 = this;                                                                                                // 147
                                                                                                                     //
			this.log("recomputing " + Object.keys(this.collection._collection.queries).length + " queries");                  // 148
                                                                                                                     //
			_.each(this.collection._collection.queries, function (query) {                                                    // 149
				_this3.collection._collection._recomputeResults(query);                                                          // 150
			});                                                                                                               // 151
		}                                                                                                                  // 152
                                                                                                                     //
		return recomputeCollectionQueries;                                                                                 //
	}();                                                                                                                //
                                                                                                                     //
	CachedCollection.prototype.getToken = function () {                                                                 //
		function getToken() {                                                                                              //
			if (this.userRelated === false) {                                                                                 // 155
				return undefined;                                                                                                // 156
			}                                                                                                                 // 157
                                                                                                                     //
			return Accounts._storedLoginToken();                                                                              // 159
		}                                                                                                                  // 160
                                                                                                                     //
		return getToken;                                                                                                   //
	}();                                                                                                                //
                                                                                                                     //
	CachedCollection.prototype.loadFromCache = function () {                                                            //
		function loadFromCache() {                                                                                         //
			var _this4 = this;                                                                                                // 162
                                                                                                                     //
			var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};                // 162
                                                                                                                     //
			if (this.useCache === false) {                                                                                    // 163
				return callback(false);                                                                                          // 164
			}                                                                                                                 // 165
                                                                                                                     //
			localforage.getItem(this.name, function (error, data) {                                                           // 167
				if (data && (data.version < _this4.version || data.token !== _this4.getToken() || _this4.getToken() === undefined)) {
					_this4.clearCache();                                                                                            // 169
                                                                                                                     //
					callback(false);                                                                                                // 170
					return;                                                                                                         // 171
				}                                                                                                                // 172
                                                                                                                     //
				var now = new Date();                                                                                            // 174
                                                                                                                     //
				if (data && now - data.updatedAt >= 1000 * _this4.maxCacheTime) {                                                // 175
					_this4.clearCache();                                                                                            // 176
                                                                                                                     //
					callback(false);                                                                                                // 177
					return;                                                                                                         // 178
				}                                                                                                                // 179
                                                                                                                     //
				if (data && data.records && data.records.length > 0) {                                                           // 181
					_this4.log(data.records.length + " records loaded from cache");                                                 // 182
                                                                                                                     //
					data.records.forEach(function (record) {                                                                        // 183
						record.__cache__ = true;                                                                                       // 184
                                                                                                                     //
						_this4.collection.upsert({                                                                                     // 185
							_id: record._id                                                                                               // 185
						}, _.omit(record, '_id'));                                                                                     // 185
                                                                                                                     //
						if (record._updatedAt) {                                                                                       // 187
							var _updatedAt = new Date(record._updatedAt);                                                                 // 188
                                                                                                                     //
							if (_updatedAt > _this4.updatedAt) {                                                                          // 189
								_this4.updatedAt = _updatedAt;                                                                               // 190
							}                                                                                                             // 191
						}                                                                                                              // 192
					});                                                                                                             // 193
					callback(true);                                                                                                 // 195
				} else {                                                                                                         // 196
					callback(false);                                                                                                // 197
				}                                                                                                                // 198
			});                                                                                                               // 199
		}                                                                                                                  // 200
                                                                                                                     //
		return loadFromCache;                                                                                              //
	}();                                                                                                                //
                                                                                                                     //
	CachedCollection.prototype.loadFromServer = function () {                                                           //
		function loadFromServer() {                                                                                        //
			var _this5 = this;                                                                                                // 202
                                                                                                                     //
			var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};                // 202
			Meteor.call(this.methodName, function (error, data) {                                                             // 203
				_this5.log(data.length + " records loaded from server");                                                         // 204
                                                                                                                     //
				data.forEach(function (record) {                                                                                 // 205
					delete record.$loki;                                                                                            // 206
                                                                                                                     //
					_this5.collection.upsert({                                                                                      // 207
						_id: record._id                                                                                                // 207
					}, _.omit(record, '_id'));                                                                                      // 207
                                                                                                                     //
					if (record._updatedAt && record._updatedAt > _this5.updatedAt) {                                                // 209
						_this5.updatedAt = record._updatedAt;                                                                          // 210
					}                                                                                                               // 211
				});                                                                                                              // 212
                                                                                                                     //
				_this5.recomputeCollectionQueries();                                                                             // 213
                                                                                                                     //
				if (_this5.updatedAt < new Date()) {                                                                             // 215
					_this5.updatedAt = new Date();                                                                                  // 216
				}                                                                                                                // 217
                                                                                                                     //
				callback(data);                                                                                                  // 219
			});                                                                                                               // 220
		}                                                                                                                  // 221
                                                                                                                     //
		return loadFromServer;                                                                                             //
	}();                                                                                                                //
                                                                                                                     //
	CachedCollection.prototype.loadFromServerAndPopulate = function () {                                                //
		function loadFromServerAndPopulate() {                                                                             //
			var _this6 = this;                                                                                                // 223
                                                                                                                     //
			this.loadFromServer(function (loadedData) {                                                                       // 224
				_this6.ready.set(true);                                                                                          // 225
                                                                                                                     //
				_this6.saveCache(loadedData);                                                                                    // 226
			});                                                                                                               // 227
		}                                                                                                                  // 228
                                                                                                                     //
		return loadFromServerAndPopulate;                                                                                  //
	}();                                                                                                                //
                                                                                                                     //
	CachedCollection.prototype.sync = function () {                                                                     //
		function sync() {                                                                                                  //
			var _this7 = this;                                                                                                // 230
                                                                                                                     //
			if (RocketChat.CachedCollectionManager.syncEnabled === false || Meteor.connection._outstandingMethodBlocks.length !== 0) {
				return false;                                                                                                    // 232
			}                                                                                                                 // 233
                                                                                                                     //
			this.log("syncing from " + this.updatedAt);                                                                       // 235
			Meteor.call(this.syncMethodName, this.updatedAt, function (error, data) {                                         // 237
				var changes = [];                                                                                                // 238
                                                                                                                     //
				if (data.update && data.update.length > 0) {                                                                     // 240
					var _changes;                                                                                                   // 240
                                                                                                                     //
					_this7.log(data.update.length + " records updated in sync");                                                    // 241
                                                                                                                     //
					(_changes = changes).push.apply(_changes, (0, _toConsumableArray3.default)(data.update));                       // 242
				}                                                                                                                // 243
                                                                                                                     //
				if (data.remove && data.remove.length > 0) {                                                                     // 245
					var _changes2;                                                                                                  // 245
                                                                                                                     //
					_this7.log(data.remove.length + " records removed in sync");                                                    // 246
                                                                                                                     //
					(_changes2 = changes).push.apply(_changes2, (0, _toConsumableArray3.default)(data.remove));                     // 247
				}                                                                                                                // 248
                                                                                                                     //
				changes = changes.sort(function (a, b) {                                                                         // 250
					var valueA = a._updatedAt || a._deletedAt;                                                                      // 251
					var valueB = b._updatedAt || b._deletedAt;                                                                      // 252
                                                                                                                     //
					if (valueA < valueB) {                                                                                          // 254
						return -1;                                                                                                     // 255
					}                                                                                                               // 256
                                                                                                                     //
					if (valueA > valueB) {                                                                                          // 258
						return 1;                                                                                                      // 259
					}                                                                                                               // 260
                                                                                                                     //
					return 0;                                                                                                       // 262
				});                                                                                                              // 263
                                                                                                                     //
				for (var _iterator6 = changes, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
					var _ref7;                                                                                                      // 265
                                                                                                                     //
					if (_isArray6) {                                                                                                // 265
						if (_i6 >= _iterator6.length) break;                                                                           // 265
						_ref7 = _iterator6[_i6++];                                                                                     // 265
					} else {                                                                                                        // 265
						_i6 = _iterator6.next();                                                                                       // 265
						if (_i6.done) break;                                                                                           // 265
						_ref7 = _i6.value;                                                                                             // 265
					}                                                                                                               // 265
                                                                                                                     //
					var record = _ref7;                                                                                             // 265
					delete record.$loki;                                                                                            // 266
                                                                                                                     //
					if (record._deletedAt) {                                                                                        // 268
						_this7.collection.remove({                                                                                     // 269
							_id: record._id                                                                                               // 269
						});                                                                                                            // 269
                                                                                                                     //
						if (record._deletedAt && record._deletedAt > _this7.updatedAt) {                                               // 271
							_this7.updatedAt = record._deletedAt;                                                                         // 272
						}                                                                                                              // 273
					} else {                                                                                                        // 274
						_this7.collection.upsert({                                                                                     // 275
							_id: record._id                                                                                               // 275
						}, _.omit(record, '_id'));                                                                                     // 275
                                                                                                                     //
						if (record._updatedAt && record._updatedAt > _this7.updatedAt) {                                               // 277
							_this7.updatedAt = record._updatedAt;                                                                         // 278
						}                                                                                                              // 279
					}                                                                                                               // 280
				}                                                                                                                // 281
                                                                                                                     //
				_this7.saveCache();                                                                                              // 283
			});                                                                                                               // 284
			return true;                                                                                                      // 286
		}                                                                                                                  // 287
                                                                                                                     //
		return sync;                                                                                                       //
	}();                                                                                                                //
                                                                                                                     //
	CachedCollection.prototype.saveCache = function () {                                                                //
		function saveCache(data) {                                                                                         //
			if (this.useCache === false) {                                                                                    // 290
				return;                                                                                                          // 291
			}                                                                                                                 // 292
                                                                                                                     //
			this.log('saving cache');                                                                                         // 294
                                                                                                                     //
			if (!data) {                                                                                                      // 295
				data = this.collection.find().fetch();                                                                           // 296
			}                                                                                                                 // 297
                                                                                                                     //
			localforage.setItem(this.name, {                                                                                  // 299
				updatedAt: new Date(),                                                                                           // 300
				version: this.version,                                                                                           // 301
				token: this.getToken(),                                                                                          // 302
				records: data                                                                                                    // 303
			});                                                                                                               // 299
			this.log('saving cache (done)');                                                                                  // 305
		}                                                                                                                  // 306
                                                                                                                     //
		return saveCache;                                                                                                  //
	}();                                                                                                                //
                                                                                                                     //
	CachedCollection.prototype.clearCacheOnLogout = function () {                                                       //
		function clearCacheOnLogout() {                                                                                    //
			if (this.userRelated === true) {                                                                                  // 309
				this.clearCache();                                                                                               // 310
			}                                                                                                                 // 311
		}                                                                                                                  // 312
                                                                                                                     //
		return clearCacheOnLogout;                                                                                         //
	}();                                                                                                                //
                                                                                                                     //
	CachedCollection.prototype.clearCache = function () {                                                               //
		function clearCache() {                                                                                            //
			this.log('clearing cache');                                                                                       // 315
			localforage.removeItem(this.name);                                                                                // 316
			this.collection.remove({});                                                                                       // 317
		}                                                                                                                  // 318
                                                                                                                     //
		return clearCache;                                                                                                 //
	}();                                                                                                                //
                                                                                                                     //
	CachedCollection.prototype.setupListener = function () {                                                            //
		function setupListener(eventType, eventName) {                                                                     //
			var _this8 = this;                                                                                                // 320
                                                                                                                     //
			RocketChat.Notifications[eventType || this.eventType](eventName || this.eventName, function (t, record) {         // 321
				_this8.log('record received', t, record);                                                                        // 322
                                                                                                                     //
				if (t === 'removed') {                                                                                           // 323
					_this8.collection.remove(record._id);                                                                           // 324
				} else {                                                                                                         // 325
					delete record.$loki;                                                                                            // 326
                                                                                                                     //
					_this8.collection.upsert({                                                                                      // 327
						_id: record._id                                                                                                // 327
					}, _.omit(record, '_id'));                                                                                      // 327
				}                                                                                                                // 328
                                                                                                                     //
				_this8.saveCache();                                                                                              // 330
			});                                                                                                               // 331
		}                                                                                                                  // 332
                                                                                                                     //
		return setupListener;                                                                                              //
	}();                                                                                                                //
                                                                                                                     //
	CachedCollection.prototype.trySync = function () {                                                                  //
		function trySync() {                                                                                               //
			var _this9 = this;                                                                                                // 334
                                                                                                                     //
			// Wait for an empty queue to load data again and sync                                                            // 335
			var interval = Meteor.setInterval(function () {                                                                   // 336
				if (_this9.sync()) {                                                                                             // 337
					Meteor.clearInterval(interval);                                                                                 // 338
				}                                                                                                                // 339
			}, 200);                                                                                                          // 340
		}                                                                                                                  // 341
                                                                                                                     //
		return trySync;                                                                                                    //
	}();                                                                                                                //
                                                                                                                     //
	CachedCollection.prototype.init = function () {                                                                     //
		function init() {                                                                                                  //
			var _this10 = this;                                                                                               // 343
                                                                                                                     //
			if (this.initiated === true) {                                                                                    // 344
				return;                                                                                                          // 345
			}                                                                                                                 // 346
                                                                                                                     //
			this.initiated = true;                                                                                            // 348
			this.loadFromCache(function (cacheLoaded) {                                                                       // 349
				_this10.ready.set(cacheLoaded);                                                                                  // 350
                                                                                                                     //
				if (cacheLoaded === false) {                                                                                     // 352
					// If there is no cache load data immediately                                                                   // 353
					_this10.loadFromServerAndPopulate();                                                                            // 354
				} else if (_this10.useSync === true) {                                                                           // 355
					_this10.trySync();                                                                                              // 356
				}                                                                                                                // 357
                                                                                                                     //
				if (_this10.useSync === true) {                                                                                  // 359
					RocketChat.CachedCollectionManager.onReconnect(function () {                                                    // 360
						_this10.trySync();                                                                                             // 361
					});                                                                                                             // 362
				}                                                                                                                // 363
                                                                                                                     //
				_this10.setupListener();                                                                                         // 365
			});                                                                                                               // 366
		}                                                                                                                  // 367
                                                                                                                     //
		return init;                                                                                                       //
	}();                                                                                                                //
                                                                                                                     //
	return CachedCollection;                                                                                            //
}();                                                                                                                 //
                                                                                                                     //
RocketChat.CachedCollection = CachedCollection;                                                                      // 370
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"openRoom.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/client/lib/openRoom.js                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({                                                                                                      // 1
	openRoom: function () {                                                                                             // 1
		return openRoom;                                                                                                   // 1
	}                                                                                                                   // 1
});                                                                                                                  // 1
/* globals fireGlobalEvent readMessage currentTracker*/currentTracker = undefined;                                   // 1
                                                                                                                     //
function openRoom(type, name) {                                                                                      // 4
	Session.set('openedRoom', null);                                                                                    // 5
	return Meteor.defer(function () {                                                                                   // 7
		return currentTracker = Tracker.autorun(function (c) {                                                             // 7
			var user = Meteor.user();                                                                                         // 9
                                                                                                                     //
			if (user && user.username == null || user == null && RocketChat.settings.get('Accounts_AllowAnonymousAccess') === false) {
				BlazeLayout.render('main');                                                                                      // 11
				return;                                                                                                          // 12
			}                                                                                                                 // 13
                                                                                                                     //
			if (RoomManager.open(type + name).ready() !== true) {                                                             // 15
				BlazeLayout.render('main', {                                                                                     // 16
					modal: RocketChat.Layout.isEmbedded(),                                                                          // 16
					center: 'loading'                                                                                               // 16
				});                                                                                                              // 16
				return;                                                                                                          // 17
			}                                                                                                                 // 18
                                                                                                                     //
			if (currentTracker) {                                                                                             // 19
				currentTracker = undefined;                                                                                      // 20
			}                                                                                                                 // 21
                                                                                                                     //
			c.stop();                                                                                                         // 22
			var room = RocketChat.roomTypes.findRoom(type, name, user);                                                       // 24
                                                                                                                     //
			if (room == null) {                                                                                               // 25
				if (type === 'd') {                                                                                              // 26
					Meteor.call('createDirectMessage', name, function (err) {                                                       // 27
						if (!err) {                                                                                                    // 28
							RoomManager.close(type + name);                                                                               // 29
							return openRoom('d', name);                                                                                   // 30
						} else {                                                                                                       // 31
							Session.set('roomNotFound', {                                                                                 // 32
								type: type,                                                                                                  // 32
								name: name                                                                                                   // 32
							});                                                                                                           // 32
							BlazeLayout.render('main', {                                                                                  // 33
								center: 'roomNotFound'                                                                                       // 33
							});                                                                                                           // 33
							return;                                                                                                       // 34
						}                                                                                                              // 35
					});                                                                                                             // 36
				} else {                                                                                                         // 37
					Meteor.call('getRoomByTypeAndName', type, name, function (err, record) {                                        // 38
						if (err) {                                                                                                     // 39
							Session.set('roomNotFound', {                                                                                 // 40
								type: type,                                                                                                  // 40
								name: name                                                                                                   // 40
							});                                                                                                           // 40
							return BlazeLayout.render('main', {                                                                           // 41
								center: 'roomNotFound'                                                                                       // 41
							});                                                                                                           // 41
						} else {                                                                                                       // 42
							delete record.$loki;                                                                                          // 43
							RocketChat.models.Rooms.upsert({                                                                              // 44
								_id: record._id                                                                                              // 44
							}, _.omit(record, '_id'));                                                                                    // 44
							RoomManager.close(type + name);                                                                               // 45
							return openRoom(type, name);                                                                                  // 46
						}                                                                                                              // 47
					});                                                                                                             // 48
				}                                                                                                                // 49
                                                                                                                     //
				return;                                                                                                          // 50
			}                                                                                                                 // 51
                                                                                                                     //
			var mainNode = document.querySelector('.main-content');                                                           // 53
                                                                                                                     //
			if (mainNode) {                                                                                                   // 54
				for (var _iterator = Array.from(mainNode.children), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
					var _ref;                                                                                                       // 55
                                                                                                                     //
					if (_isArray) {                                                                                                 // 55
						if (_i >= _iterator.length) break;                                                                             // 55
						_ref = _iterator[_i++];                                                                                        // 55
					} else {                                                                                                        // 55
						_i = _iterator.next();                                                                                         // 55
						if (_i.done) break;                                                                                            // 55
						_ref = _i.value;                                                                                               // 55
					}                                                                                                               // 55
                                                                                                                     //
					var child = _ref;                                                                                               // 55
                                                                                                                     //
					if (child) {                                                                                                    // 56
						mainNode.removeChild(child);                                                                                   // 56
					}                                                                                                               // 56
				}                                                                                                                // 57
                                                                                                                     //
				var roomDom = RoomManager.getDomOfRoom(type + name, room._id);                                                   // 58
				mainNode.appendChild(roomDom);                                                                                   // 59
                                                                                                                     //
				if (roomDom.classList.contains('room-container')) {                                                              // 60
					roomDom.querySelector('.messages-box > .wrapper').scrollTop = roomDom.oldScrollTop;                             // 61
				}                                                                                                                // 62
			}                                                                                                                 // 63
                                                                                                                     //
			Session.set('openedRoom', room._id);                                                                              // 65
			fireGlobalEvent('room-opened', _.omit(room, 'usernames'));                                                        // 67
			Session.set('editRoomTitle', false);                                                                              // 69
			RoomManager.updateMentionsMarksOfRoom(type + name);                                                               // 70
			Meteor.setTimeout(function () {                                                                                   // 71
				return readMessage.readNow();                                                                                    // 71
			}, 2000); // KonchatNotification.removeRoomNotification(params._id)                                               // 71
                                                                                                                     //
			if (Meteor.Device.isDesktop() && window.chatMessages && window.chatMessages[room._id] != null) {                  // 74
				setTimeout(function () {                                                                                         // 75
					return $('.message-form .input-message').focus();                                                               // 75
				}, 100);                                                                                                         // 75
			} // update user's room subscription                                                                              // 76
                                                                                                                     //
                                                                                                                     //
			var sub = ChatSubscription.findOne({                                                                              // 79
				rid: room._id                                                                                                    // 79
			});                                                                                                               // 79
                                                                                                                     //
			if (sub && sub.open === false) {                                                                                  // 80
				Meteor.call('openRoom', room._id, function (err) {                                                               // 81
					if (err) {                                                                                                      // 82
						return handleError(err);                                                                                       // 83
					}                                                                                                               // 84
				});                                                                                                              // 85
			}                                                                                                                 // 86
                                                                                                                     //
			if (FlowRouter.getQueryParam('msg')) {                                                                            // 88
				var msg = {                                                                                                      // 89
					_id: FlowRouter.getQueryParam('msg'),                                                                           // 89
					rid: room._id                                                                                                   // 89
				};                                                                                                               // 89
				RoomHistoryManager.getSurroundingMessages(msg);                                                                  // 90
			}                                                                                                                 // 91
                                                                                                                     //
			return RocketChat.callbacks.run('enter-room', sub);                                                               // 93
		});                                                                                                                // 94
	});                                                                                                                 // 7
}                                                                                                                    // 96
                                                                                                                     //
this.openRoom = openRoom;                                                                                            // 98
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"roomExit.js":function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/client/lib/roomExit.js                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");                                        //
                                                                                                                     //
var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);                                               //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                    //
                                                                                                                     //
/*globals currentTracker */this.roomExit = function () {                                                             // 1
	RocketChat.callbacks.run('roomExit');                                                                               // 3
	BlazeLayout.render('main', {                                                                                        // 4
		center: 'none'                                                                                                     // 5
	});                                                                                                                 // 4
                                                                                                                     //
	if (typeof currentTracker !== 'undefined') {                                                                        // 8
		currentTracker.stop();                                                                                             // 9
	}                                                                                                                   // 10
                                                                                                                     //
	var mainNode = document.querySelector('.main-content');                                                             // 11
                                                                                                                     //
	if (mainNode == null) {                                                                                             // 12
		return;                                                                                                            // 13
	}                                                                                                                   // 14
                                                                                                                     //
	return [].concat((0, _toConsumableArray3.default)(mainNode.children)).forEach(function (child) {                    // 15
		if (child == null) {                                                                                               // 16
			return;                                                                                                           // 17
		}                                                                                                                  // 18
                                                                                                                     //
		if (child.classList.contains('room-container')) {                                                                  // 19
			var wrapper = child.querySelector('.messages-box > .wrapper');                                                    // 20
                                                                                                                     //
			if (wrapper) {                                                                                                    // 21
				if (wrapper.scrollTop >= wrapper.scrollHeight - wrapper.clientHeight) {                                          // 22
					child.oldScrollTop = 10e10;                                                                                     // 23
				} else {                                                                                                         // 24
					child.oldScrollTop = wrapper.scrollTop;                                                                         // 25
				}                                                                                                                // 26
			}                                                                                                                 // 27
		}                                                                                                                  // 28
                                                                                                                     //
		mainNode.removeChild(child);                                                                                       // 29
	});                                                                                                                 // 30
};                                                                                                                   // 31
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"settings.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/client/lib/settings.js                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/*                                                                                                                   // 2
* RocketChat.settings holds all packages settings                                                                    //
* @namespace RocketChat.settings                                                                                     //
*/ /* globals ReactiveDict*/RocketChat.settings.cachedCollection = new RocketChat.CachedCollection({                 //
	name: 'public-settings',                                                                                            // 10
	eventType: 'onAll',                                                                                                 // 11
	userRelated: false                                                                                                  // 12
});                                                                                                                  // 9
RocketChat.settings.collection = RocketChat.settings.cachedCollection.collection;                                    // 15
RocketChat.settings.cachedCollection.init();                                                                         // 17
RocketChat.settings.dict = new ReactiveDict('settings');                                                             // 19
                                                                                                                     //
RocketChat.settings.get = function (_id) {                                                                           // 21
	return RocketChat.settings.dict.get(_id);                                                                           // 22
};                                                                                                                   // 23
                                                                                                                     //
RocketChat.settings.init = function () {                                                                             // 25
	var initialLoad = true;                                                                                             // 26
	RocketChat.settings.collection.find().observe({                                                                     // 27
		added: function (record) {                                                                                         // 28
			Meteor.settings[record._id] = record.value;                                                                       // 29
			RocketChat.settings.dict.set(record._id, record.value);                                                           // 30
			return RocketChat.settings.load(record._id, record.value, initialLoad);                                           // 31
		},                                                                                                                 // 32
		changed: function (record) {                                                                                       // 33
			Meteor.settings[record._id] = record.value;                                                                       // 34
			RocketChat.settings.dict.set(record._id, record.value);                                                           // 35
			return RocketChat.settings.load(record._id, record.value, initialLoad);                                           // 36
		},                                                                                                                 // 37
		removed: function (record) {                                                                                       // 38
			delete Meteor.settings[record._id];                                                                               // 39
			RocketChat.settings.dict.set(record._id, null);                                                                   // 40
			return RocketChat.settings.load(record._id, null, initialLoad);                                                   // 41
		}                                                                                                                  // 42
	});                                                                                                                 // 27
	return initialLoad = false;                                                                                         // 44
};                                                                                                                   // 45
                                                                                                                     //
RocketChat.settings.init();                                                                                          // 47
Meteor.startup(function () {                                                                                         // 49
	if (Meteor.isCordova === true) {                                                                                    // 50
		return;                                                                                                            // 51
	}                                                                                                                   // 52
                                                                                                                     //
	Tracker.autorun(function (c) {                                                                                      // 53
		var siteUrl = RocketChat.settings.get('Site_Url');                                                                 // 54
                                                                                                                     //
		if (!siteUrl || Meteor.userId() == null) {                                                                         // 55
			return;                                                                                                           // 56
		}                                                                                                                  // 57
                                                                                                                     //
		if (RocketChat.authz.hasRole(Meteor.userId(), 'admin') === false || Meteor.settings['public'].sandstorm) {         // 58
			return c.stop();                                                                                                  // 59
		}                                                                                                                  // 60
                                                                                                                     //
		Meteor.setTimeout(function () {                                                                                    // 61
			if (__meteor_runtime_config__.ROOT_URL !== location.origin) {                                                     // 62
				var currentUrl = location.origin + __meteor_runtime_config__.ROOT_URL_PATH_PREFIX;                               // 63
				swal({                                                                                                           // 64
					type: 'warning',                                                                                                // 65
					title: t('Warning'),                                                                                            // 66
					text: t('The_setting_s_is_configured_to_s_and_you_are_accessing_from_s', t('Site_Url'), siteUrl, currentUrl) + "<br/><br/>" + t('Do_you_want_to_change_to_s_question', currentUrl),
					showCancelButton: true,                                                                                         // 68
					confirmButtonText: t('Yes'),                                                                                    // 69
					cancelButtonText: t('Cancel'),                                                                                  // 70
					closeOnConfirm: false,                                                                                          // 71
					html: true                                                                                                      // 72
				}, function () {                                                                                                 // 64
					Meteor.call('saveSetting', 'Site_Url', currentUrl, function () {                                                // 74
						swal({                                                                                                         // 75
							title: t('Saved'),                                                                                            // 76
							type: 'success',                                                                                              // 77
							timer: 1000,                                                                                                  // 78
							showConfirmButton: false                                                                                      // 79
						});                                                                                                            // 75
					});                                                                                                             // 81
				});                                                                                                              // 82
			}                                                                                                                 // 83
		}, 100);                                                                                                           // 84
		return c.stop();                                                                                                   // 85
	});                                                                                                                 // 86
});                                                                                                                  // 87
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"roomTypes.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/client/lib/roomTypes.js                                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                              //
                                                                                                                     //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                     //
                                                                                                                     //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                        //
                                                                                                                     //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                               //
                                                                                                                     //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                          //
                                                                                                                     //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                 //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                    //
                                                                                                                     //
var roomTypesCommon = void 0;                                                                                        // 1
module.watch(require("../../lib/roomTypesCommon"), {                                                                 // 1
	"default": function (v) {                                                                                           // 1
		roomTypesCommon = v;                                                                                               // 1
	}                                                                                                                   // 1
}, 0);                                                                                                               // 1
RocketChat.roomTypes = new (function (_roomTypesCommon) {                                                            // 3
	(0, _inherits3.default)(_class, _roomTypesCommon);                                                                  // 3
                                                                                                                     //
	function _class() {                                                                                                 // 3
		(0, _classCallCheck3.default)(this, _class);                                                                       // 3
		return (0, _possibleConstructorReturn3.default)(this, _roomTypesCommon.apply(this, arguments));                    // 3
	}                                                                                                                   // 3
                                                                                                                     //
	_class.prototype.checkCondition = function () {                                                                     // 3
		function checkCondition(roomType) {                                                                                // 3
			return roomType.condition == null || roomType.condition();                                                        // 5
		}                                                                                                                  // 6
                                                                                                                     //
		return checkCondition;                                                                                             // 3
	}();                                                                                                                // 3
                                                                                                                     //
	_class.prototype.getTypes = function () {                                                                           // 3
		function getTypes() {                                                                                              // 3
			var _this2 = this;                                                                                                // 7
                                                                                                                     //
			return _.sortBy(this.roomTypesOrder, 'order').map(function (type) {                                               // 8
				return _this2.roomTypes[type.identifier];                                                                        // 8
			});                                                                                                               // 8
		}                                                                                                                  // 9
                                                                                                                     //
		return getTypes;                                                                                                   // 3
	}();                                                                                                                // 3
                                                                                                                     //
	_class.prototype.getIcon = function () {                                                                            // 3
		function getIcon(roomType) {                                                                                       // 3
			return this.roomTypes[roomType] && this.roomTypes[roomType].icon;                                                 // 11
		}                                                                                                                  // 12
                                                                                                                     //
		return getIcon;                                                                                                    // 3
	}();                                                                                                                // 3
                                                                                                                     //
	_class.prototype.getRoomName = function () {                                                                        // 3
		function getRoomName(roomType, roomData) {                                                                         // 3
			return this.roomTypes[roomType] && this.roomTypes[roomType].roomName && this.roomTypes[roomType].roomName(roomData);
		}                                                                                                                  // 15
                                                                                                                     //
		return getRoomName;                                                                                                // 3
	}();                                                                                                                // 3
                                                                                                                     //
	_class.prototype.getSecondaryRoomName = function () {                                                               // 3
		function getSecondaryRoomName(roomType, roomData) {                                                                // 3
			return this.roomTypes[roomType] && typeof this.roomTypes[roomType].secondaryRoomName === 'function' && this.roomTypes[roomType].secondaryRoomName(roomData);
		}                                                                                                                  // 18
                                                                                                                     //
		return getSecondaryRoomName;                                                                                       // 3
	}();                                                                                                                // 3
                                                                                                                     //
	_class.prototype.getIdentifiers = function () {                                                                     // 3
		function getIdentifiers(e) {                                                                                       // 3
			var except = [].concat(e);                                                                                        // 20
                                                                                                                     //
			var list = _.reject(this.roomTypesOrder, function (t) {                                                           // 21
				return except.indexOf(t.identifier) !== -1;                                                                      // 21
			});                                                                                                               // 21
                                                                                                                     //
			return _.map(list, function (t) {                                                                                 // 22
				return t.identifier;                                                                                             // 22
			});                                                                                                               // 22
		}                                                                                                                  // 23
                                                                                                                     //
		return getIdentifiers;                                                                                             // 3
	}();                                                                                                                // 3
                                                                                                                     //
	_class.prototype.getUserStatus = function () {                                                                      // 3
		function getUserStatus(roomType, roomId) {                                                                         // 3
			return this.roomTypes[roomType] && typeof this.roomTypes[roomType].getUserStatus === 'function' && this.roomTypes[roomType].getUserStatus(roomId);
		}                                                                                                                  // 26
                                                                                                                     //
		return getUserStatus;                                                                                              // 3
	}();                                                                                                                // 3
                                                                                                                     //
	_class.prototype.findRoom = function () {                                                                           // 3
		function findRoom(roomType, identifier, user) {                                                                    // 3
			return this.roomTypes[roomType] && this.roomTypes[roomType].findRoom(identifier, user);                           // 28
		}                                                                                                                  // 29
                                                                                                                     //
		return findRoom;                                                                                                   // 3
	}();                                                                                                                // 3
                                                                                                                     //
	_class.prototype.canSendMessage = function () {                                                                     // 3
		function canSendMessage(roomId) {                                                                                  // 3
			return ChatSubscription.find({                                                                                    // 31
				rid: roomId                                                                                                      // 32
			}).count() > 0;                                                                                                   // 31
		}                                                                                                                  // 34
                                                                                                                     //
		return canSendMessage;                                                                                             // 3
	}();                                                                                                                // 3
                                                                                                                     //
	_class.prototype.readOnly = function () {                                                                           // 3
		function readOnly(roomId, user) {                                                                                  // 3
			var fields = {                                                                                                    // 36
				ro: 1                                                                                                            // 37
			};                                                                                                                // 36
                                                                                                                     //
			if (user) {                                                                                                       // 39
				fields.muted = 1;                                                                                                // 40
			}                                                                                                                 // 41
                                                                                                                     //
			var room = ChatRoom.findOne({                                                                                     // 42
				_id: roomId                                                                                                      // 43
			}, {                                                                                                              // 42
				fields: fields                                                                                                   // 45
			});                                                                                                               // 44
                                                                                                                     //
			if (!user) {                                                                                                      // 47
				return room && room.ro;                                                                                          // 48
			} /* globals RoomRoles */                                                                                         // 49
                                                                                                                     //
			var userOwner = RoomRoles.findOne({                                                                               // 51
				rid: roomId,                                                                                                     // 52
				'u._id': user._id,                                                                                               // 53
				roles: 'owner'                                                                                                   // 54
			}, {                                                                                                              // 51
				fields: {                                                                                                        // 56
					_id: 1                                                                                                          // 57
				}                                                                                                                // 56
			});                                                                                                               // 55
			return room && room.ro === true && Array.isArray(room.muted) && room.muted.indexOf(user.username) !== -1 && !userOwner;
		}                                                                                                                  // 61
                                                                                                                     //
		return readOnly;                                                                                                   // 3
	}();                                                                                                                // 3
                                                                                                                     //
	_class.prototype.archived = function () {                                                                           // 3
		function archived(roomId) {                                                                                        // 3
			var fields = {                                                                                                    // 63
				archived: 1                                                                                                      // 64
			};                                                                                                                // 63
			var room = ChatRoom.findOne({                                                                                     // 66
				_id: roomId                                                                                                      // 67
			}, {                                                                                                              // 66
				fields: fields                                                                                                   // 69
			});                                                                                                               // 68
			return room && room.archived === true;                                                                            // 71
		}                                                                                                                  // 72
                                                                                                                     //
		return archived;                                                                                                   // 3
	}();                                                                                                                // 3
                                                                                                                     //
	_class.prototype.verifyCanSendMessage = function () {                                                               // 3
		function verifyCanSendMessage(roomId) {                                                                            // 3
			var room = ChatRoom.findOne({                                                                                     // 74
				_id: roomId                                                                                                      // 74
			}, {                                                                                                              // 74
				fields: {                                                                                                        // 74
					t: 1                                                                                                            // 74
				}                                                                                                                // 74
			});                                                                                                               // 74
                                                                                                                     //
			if (!room || !room.t) {                                                                                           // 76
				return;                                                                                                          // 77
			}                                                                                                                 // 78
                                                                                                                     //
			var roomType = room.t;                                                                                            // 80
                                                                                                                     //
			if (this.roomTypes[roomType] && this.roomTypes[roomType].canSendMessage) {                                        // 81
				return this.roomTypes[roomType].canSendMessage(roomId);                                                          // 82
			}                                                                                                                 // 83
                                                                                                                     //
			return this.canSendMessage(roomId);                                                                               // 84
		}                                                                                                                  // 85
                                                                                                                     //
		return verifyCanSendMessage;                                                                                       // 3
	}();                                                                                                                // 3
                                                                                                                     //
	_class.prototype.verifyShowJoinLink = function () {                                                                 // 3
		function verifyShowJoinLink(roomId) {                                                                              // 3
			var room = ChatRoom.findOne({                                                                                     // 87
				_id: roomId                                                                                                      // 88
			}, {                                                                                                              // 87
				fields: {                                                                                                        // 90
					t: 1                                                                                                            // 91
				}                                                                                                                // 90
			});                                                                                                               // 89
                                                                                                                     //
			if (!room || !room.t) {                                                                                           // 94
				return;                                                                                                          // 95
			}                                                                                                                 // 96
                                                                                                                     //
			var roomType = room.t;                                                                                            // 97
                                                                                                                     //
			if (this.roomTypes[roomType] && !this.roomTypes[roomType].showJoinLink) {                                         // 98
				return false;                                                                                                    // 99
			}                                                                                                                 // 100
                                                                                                                     //
			return this.roomTypes[roomType].showJoinLink(roomId);                                                             // 101
		}                                                                                                                  // 102
                                                                                                                     //
		return verifyShowJoinLink;                                                                                         // 3
	}();                                                                                                                // 3
                                                                                                                     //
	_class.prototype.getNotSubscribedTpl = function () {                                                                // 3
		function getNotSubscribedTpl(roomId) {                                                                             // 3
			var room = ChatRoom.findOne({                                                                                     // 104
				_id: roomId                                                                                                      // 104
			}, {                                                                                                              // 104
				fields: {                                                                                                        // 104
					t: 1                                                                                                            // 104
				}                                                                                                                // 104
			});                                                                                                               // 104
                                                                                                                     //
			if (!room || !room.t) {                                                                                           // 105
				return;                                                                                                          // 106
			}                                                                                                                 // 107
                                                                                                                     //
			var roomType = room.t;                                                                                            // 108
                                                                                                                     //
			if (this.roomTypes[roomType] && !this.roomTypes[roomType].notSubscribedTpl) {                                     // 109
				return false;                                                                                                    // 110
			}                                                                                                                 // 111
                                                                                                                     //
			return this.roomTypes[roomType].notSubscribedTpl;                                                                 // 112
		}                                                                                                                  // 113
                                                                                                                     //
		return getNotSubscribedTpl;                                                                                        // 3
	}();                                                                                                                // 3
                                                                                                                     //
	return _class;                                                                                                      // 3
}(roomTypesCommon))();                                                                                               // 3
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userRoles.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/client/lib/userRoles.js                                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/* globals UserRoles, RoomRoles */Meteor.startup(function () {                                                       // 1
	Tracker.autorun(function () {                                                                                       // 4
		if (Meteor.userId()) {                                                                                             // 5
			Meteor.call('getUserRoles', function (error, results) {                                                           // 6
				if (error) {                                                                                                     // 7
					return handleError(error);                                                                                      // 8
				}                                                                                                                // 9
                                                                                                                     //
				for (var _iterator = results, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
					var _ref;                                                                                                       // 11
                                                                                                                     //
					if (_isArray) {                                                                                                 // 11
						if (_i >= _iterator.length) break;                                                                             // 11
						_ref = _iterator[_i++];                                                                                        // 11
					} else {                                                                                                        // 11
						_i = _iterator.next();                                                                                         // 11
						if (_i.done) break;                                                                                            // 11
						_ref = _i.value;                                                                                               // 11
					}                                                                                                               // 11
                                                                                                                     //
					var record = _ref;                                                                                              // 11
					UserRoles.upsert({                                                                                              // 12
						_id: record._id                                                                                                // 12
					}, record);                                                                                                     // 12
				}                                                                                                                // 13
			});                                                                                                               // 14
			RocketChat.Notifications.onLogged('roles-change', function (role) {                                               // 16
				if (role.type === 'added') {                                                                                     // 17
					if (role.scope) {                                                                                               // 18
						RoomRoles.upsert({                                                                                             // 19
							rid: role.scope,                                                                                              // 19
							'u._id': role.u._id                                                                                           // 19
						}, {                                                                                                           // 19
							$setOnInsert: {                                                                                               // 19
								u: role.u                                                                                                    // 19
							},                                                                                                            // 19
							$addToSet: {                                                                                                  // 19
								roles: role._id                                                                                              // 19
							}                                                                                                             // 19
						});                                                                                                            // 19
					} else {                                                                                                        // 20
						UserRoles.upsert({                                                                                             // 21
							_id: role.u._id                                                                                               // 21
						}, {                                                                                                           // 21
							$addToSet: {                                                                                                  // 21
								roles: role._id                                                                                              // 21
							},                                                                                                            // 21
							$set: {                                                                                                       // 21
								username: role.u.username                                                                                    // 21
							}                                                                                                             // 21
						});                                                                                                            // 21
						ChatMessage.update({                                                                                           // 22
							'u._id': role.u._id                                                                                           // 22
						}, {                                                                                                           // 22
							$addToSet: {                                                                                                  // 22
								roles: role._id                                                                                              // 22
							}                                                                                                             // 22
						}, {                                                                                                           // 22
							multi: true                                                                                                   // 22
						});                                                                                                            // 22
					}                                                                                                               // 23
				} else if (role.type === 'removed') {                                                                            // 24
					if (role.scope) {                                                                                               // 25
						RoomRoles.update({                                                                                             // 26
							rid: role.scope,                                                                                              // 26
							'u._id': role.u._id                                                                                           // 26
						}, {                                                                                                           // 26
							$pull: {                                                                                                      // 26
								roles: role._id                                                                                              // 26
							}                                                                                                             // 26
						});                                                                                                            // 26
					} else {                                                                                                        // 27
						UserRoles.update({                                                                                             // 28
							_id: role.u._id                                                                                               // 28
						}, {                                                                                                           // 28
							$pull: {                                                                                                      // 28
								roles: role._id                                                                                              // 28
							}                                                                                                             // 28
						});                                                                                                            // 28
						ChatMessage.update({                                                                                           // 29
							'u._id': role.u._id                                                                                           // 29
						}, {                                                                                                           // 29
							$pull: {                                                                                                      // 29
								roles: role._id                                                                                              // 29
							}                                                                                                             // 29
						}, {                                                                                                           // 29
							multi: true                                                                                                   // 29
						});                                                                                                            // 29
					}                                                                                                               // 30
				} else if (role.type === 'changed') {                                                                            // 31
					ChatMessage.update({                                                                                            // 32
						roles: role._id                                                                                                // 32
					}, {                                                                                                            // 32
						$inc: {                                                                                                        // 32
							rerender: 1                                                                                                   // 32
						}                                                                                                              // 32
					}, {                                                                                                            // 32
						multi: true                                                                                                    // 32
					});                                                                                                             // 32
				}                                                                                                                // 33
			});                                                                                                               // 34
		}                                                                                                                  // 35
	});                                                                                                                 // 36
});                                                                                                                  // 37
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Layout.js":function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/client/lib/Layout.js                                                                      //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                              //
                                                                                                                     //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                     //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                    //
                                                                                                                     //
RocketChat.Layout = new (function () {                                                                               // 1
	function RocketChatLayout() {                                                                                       // 2
		var _this = this;                                                                                                  // 2
                                                                                                                     //
		(0, _classCallCheck3.default)(this, RocketChatLayout);                                                             // 2
		Tracker.autorun(function () {                                                                                      // 3
			_this.layout = FlowRouter.getQueryParam('layout');                                                                // 4
		});                                                                                                                // 5
	}                                                                                                                   // 6
                                                                                                                     //
	RocketChatLayout.prototype.isEmbedded = function () {                                                               // 1
		function isEmbedded() {                                                                                            // 1
			return this.layout === 'embedded';                                                                                // 9
		}                                                                                                                  // 10
                                                                                                                     //
		return isEmbedded;                                                                                                 // 1
	}();                                                                                                                // 1
                                                                                                                     //
	return RocketChatLayout;                                                                                            // 1
}())();                                                                                                              // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"methods":{"sendMessage.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/client/methods/sendMessage.js                                                             //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Meteor.methods({                                                                                                     // 1
	sendMessage: function (message) {                                                                                   // 2
		if (!Meteor.userId() || _.trim(message.msg) === '') {                                                              // 3
			return false;                                                                                                     // 4
		}                                                                                                                  // 5
                                                                                                                     //
		var user = Meteor.user();                                                                                          // 6
		message.ts = isNaN(TimeSync.serverOffset()) ? new Date() : new Date(Date.now() + TimeSync.serverOffset());         // 7
		message.u = {                                                                                                      // 8
			_id: Meteor.userId(),                                                                                             // 9
			username: user.username                                                                                           // 10
		};                                                                                                                 // 8
                                                                                                                     //
		if (RocketChat.settings.get('UI_Use_Real_Name')) {                                                                 // 12
			message.u.name = user.name;                                                                                       // 13
		}                                                                                                                  // 14
                                                                                                                     //
		message.temp = true;                                                                                               // 15
		message = RocketChat.callbacks.run('beforeSaveMessage', message);                                                  // 16
		RocketChat.promises.run('onClientMessageReceived', message).then(function (message) {                              // 17
			ChatMessage.insert(message);                                                                                      // 18
			return RocketChat.callbacks.run('afterSaveMessage', message);                                                     // 19
		});                                                                                                                // 20
	}                                                                                                                   // 21
});                                                                                                                  // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"AdminBox.js":function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/client/AdminBox.js                                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                              //
                                                                                                                     //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                     //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                    //
                                                                                                                     //
RocketChat.AdminBox = new (function () {                                                                             // 1
	function _class() {                                                                                                 // 2
		(0, _classCallCheck3.default)(this, _class);                                                                       // 2
		this.options = new ReactiveVar([]);                                                                                // 3
	}                                                                                                                   // 4
                                                                                                                     //
	_class.prototype.addOption = function () {                                                                          // 1
		function addOption(option) {                                                                                       // 1
			var _this = this;                                                                                                 // 5
                                                                                                                     //
			return Tracker.nonreactive(function () {                                                                          // 6
				var actual = _this.options.get();                                                                                // 7
                                                                                                                     //
				actual.push(option);                                                                                             // 8
				return _this.options.set(actual);                                                                                // 9
			});                                                                                                               // 10
		}                                                                                                                  // 11
                                                                                                                     //
		return addOption;                                                                                                  // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype.getOptions = function () {                                                                         // 1
		function getOptions() {                                                                                            // 1
			return _.filter(this.options.get(), function (option) {                                                           // 13
				if (option.permissionGranted == null || option.permissionGranted()) {                                            // 14
					return true;                                                                                                    // 15
				}                                                                                                                // 16
			});                                                                                                               // 17
		}                                                                                                                  // 18
                                                                                                                     //
		return getOptions;                                                                                                 // 1
	}();                                                                                                                // 1
                                                                                                                     //
	return _class;                                                                                                      // 1
}())();                                                                                                              // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"MessageAction.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/client/MessageAction.js                                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                              //
                                                                                                                     //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                     //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                    //
                                                                                                                     //
var moment = void 0;                                                                                                 // 1
module.watch(require("moment"), {                                                                                    // 1
	"default": function (v) {                                                                                           // 1
		moment = v;                                                                                                        // 1
	}                                                                                                                   // 1
}, 0);                                                                                                               // 1
var toastr = void 0;                                                                                                 // 1
module.watch(require("toastr"), {                                                                                    // 1
	"default": function (v) {                                                                                           // 1
		toastr = v;                                                                                                        // 1
	}                                                                                                                   // 1
}, 1);                                                                                                               // 1
RocketChat.MessageAction = new (function () {                                                                        // 5
	/*                                                                                                                  // 6
  	config expects the following keys (only id is mandatory):                                                         //
  		id (mandatory)                                                                                                   //
  		icon: string                                                                                                     //
  		i18nLabel: string                                                                                                //
  		action: function(event, instance)                                                                                //
  		validation: function(message)                                                                                    //
  		order: integer                                                                                                   //
   */function _class() {                                                                                             //
		(0, _classCallCheck3.default)(this, _class);                                                                       // 16
		this.buttons = new ReactiveVar({});                                                                                // 17
	}                                                                                                                   // 18
                                                                                                                     //
	_class.prototype.addButton = function () {                                                                          // 5
		function addButton(config) {                                                                                       // 5
			var _this = this;                                                                                                 // 20
                                                                                                                     //
			if (!config || !config.id) {                                                                                      // 21
				return false;                                                                                                    // 22
			}                                                                                                                 // 23
                                                                                                                     //
			return Tracker.nonreactive(function () {                                                                          // 24
				var btns = _this.buttons.get();                                                                                  // 25
                                                                                                                     //
				btns[config.id] = config;                                                                                        // 26
				return _this.buttons.set(btns);                                                                                  // 27
			});                                                                                                               // 28
		}                                                                                                                  // 29
                                                                                                                     //
		return addButton;                                                                                                  // 5
	}();                                                                                                                // 5
                                                                                                                     //
	_class.prototype.removeButton = function () {                                                                       // 5
		function removeButton(id) {                                                                                        // 5
			var _this2 = this;                                                                                                // 31
                                                                                                                     //
			return Tracker.nonreactive(function () {                                                                          // 32
				var btns = _this2.buttons.get();                                                                                 // 33
                                                                                                                     //
				delete btns[id];                                                                                                 // 34
				return _this2.buttons.set(btns);                                                                                 // 35
			});                                                                                                               // 36
		}                                                                                                                  // 37
                                                                                                                     //
		return removeButton;                                                                                               // 5
	}();                                                                                                                // 5
                                                                                                                     //
	_class.prototype.updateButton = function () {                                                                       // 5
		function updateButton(id, config) {                                                                                // 5
			var _this3 = this;                                                                                                // 39
                                                                                                                     //
			return Tracker.nonreactive(function () {                                                                          // 40
				var btns = _this3.buttons.get();                                                                                 // 41
                                                                                                                     //
				if (btns[id]) {                                                                                                  // 42
					btns[id] = _.extend(btns[id], config);                                                                          // 43
					return _this3.buttons.set(btns);                                                                                // 44
				}                                                                                                                // 45
			});                                                                                                               // 46
		}                                                                                                                  // 47
                                                                                                                     //
		return updateButton;                                                                                               // 5
	}();                                                                                                                // 5
                                                                                                                     //
	_class.prototype.getButtonById = function () {                                                                      // 5
		function getButtonById(id) {                                                                                       // 5
			var allButtons = this.buttons.get();                                                                              // 50
			return allButtons[id];                                                                                            // 51
		}                                                                                                                  // 52
                                                                                                                     //
		return getButtonById;                                                                                              // 5
	}();                                                                                                                // 5
                                                                                                                     //
	_class.prototype.getButtons = function () {                                                                         // 5
		function getButtons(message, context) {                                                                            // 5
			var allButtons = _.toArray(this.buttons.get());                                                                   // 55
                                                                                                                     //
			var allowedButtons = allButtons;                                                                                  // 56
                                                                                                                     //
			if (message) {                                                                                                    // 57
				allowedButtons = _.compact(_.map(allButtons, function (button) {                                                 // 58
					if (button.context == null || button.context.includes(context)) {                                               // 59
						if (button.validation == null || button.validation(message, context)) {                                        // 60
							return button;                                                                                                // 61
						}                                                                                                              // 62
					}                                                                                                               // 63
				}));                                                                                                             // 64
			}                                                                                                                 // 65
                                                                                                                     //
			return _.sortBy(allowedButtons, 'order');                                                                         // 66
		}                                                                                                                  // 67
                                                                                                                     //
		return getButtons;                                                                                                 // 5
	}();                                                                                                                // 5
                                                                                                                     //
	_class.prototype.resetButtons = function () {                                                                       // 5
		function resetButtons() {                                                                                          // 5
			return this.buttons.set({});                                                                                      // 70
		}                                                                                                                  // 71
                                                                                                                     //
		return resetButtons;                                                                                               // 5
	}();                                                                                                                // 5
                                                                                                                     //
	_class.prototype.getPermaLink = function () {                                                                       // 5
		function getPermaLink(msgId) {                                                                                     // 5
			var roomData = ChatSubscription.findOne({                                                                         // 74
				rid: Session.get('openedRoom')                                                                                   // 75
			});                                                                                                               // 74
			var routePath = document.location.pathname;                                                                       // 77
                                                                                                                     //
			if (roomData) {                                                                                                   // 78
				routePath = RocketChat.roomTypes.getRouteLink(roomData.t, roomData);                                             // 79
			}                                                                                                                 // 80
                                                                                                                     //
			return Meteor.absoluteUrl().replace(/\/$/, '') + routePath + "?msg=" + msgId;                                     // 81
		}                                                                                                                  // 82
                                                                                                                     //
		return getPermaLink;                                                                                               // 5
	}();                                                                                                                // 5
                                                                                                                     //
	_class.prototype.hideDropDown = function () {                                                                       // 5
		function hideDropDown() {                                                                                          // 5
			return $('.message-dropdown:visible').hide();                                                                     // 85
		}                                                                                                                  // 86
                                                                                                                     //
		return hideDropDown;                                                                                               // 5
	}();                                                                                                                // 5
                                                                                                                     //
	return _class;                                                                                                      // 5
}())();                                                                                                              // 5
Meteor.startup(function () {                                                                                         // 89
	$(document).click(function (event) {                                                                                // 90
		var target = $(event.target);                                                                                      // 91
                                                                                                                     //
		if (!target.closest('.message-cog-container').length && !target.is('.message-cog-container')) {                    // 92
			return RocketChat.MessageAction.hideDropDown();                                                                   // 93
		}                                                                                                                  // 94
	});                                                                                                                 // 95
	RocketChat.MessageAction.addButton({                                                                                // 97
		id: 'reply-message',                                                                                               // 98
		icon: 'icon-reply',                                                                                                // 99
		i18nLabel: 'Reply',                                                                                                // 100
		context: ['message', 'message-mobile'],                                                                            // 101
		action: function (event, instance) {                                                                               // 102
			var message = this._arguments[1];                                                                                 // 103
			var input = instance.find('.input-message');                                                                      // 104
			var url = RocketChat.MessageAction.getPermaLink(message._id);                                                     // 105
			var text = "[ ](" + url + ") @" + message.u.username + " ";                                                       // 106
                                                                                                                     //
			if (input.value) {                                                                                                // 107
				input.value += input.value.endsWith(' ') ? '' : ' ';                                                             // 108
			}                                                                                                                 // 109
                                                                                                                     //
			input.value += text;                                                                                              // 110
			input.focus();                                                                                                    // 111
			return RocketChat.MessageAction.hideDropDown();                                                                   // 112
		},                                                                                                                 // 113
		validation: function (message) {                                                                                   // 114
			if (RocketChat.models.Subscriptions.findOne({                                                                     // 115
				rid: message.rid                                                                                                 // 116
			}) == null) {                                                                                                     // 115
				return false;                                                                                                    // 118
			}                                                                                                                 // 119
                                                                                                                     //
			return true;                                                                                                      // 120
		},                                                                                                                 // 121
		order: 1                                                                                                           // 122
	}); /* globals chatMessages*/                                                                                       // 97
	RocketChat.MessageAction.addButton({                                                                                // 125
		id: 'edit-message',                                                                                                // 126
		icon: 'icon-pencil',                                                                                               // 127
		i18nLabel: 'Edit',                                                                                                 // 128
		context: ['message', 'message-mobile'],                                                                            // 129
		action: function (e, instance) {                                                                                   // 130
			var message = $(e.currentTarget).closest('.message')[0];                                                          // 131
			chatMessages[Session.get('openedRoom')].edit(message);                                                            // 132
			RocketChat.MessageAction.hideDropDown();                                                                          // 133
			var input = instance.find('.input-message');                                                                      // 134
			Meteor.setTimeout(function () {                                                                                   // 135
				input.focus();                                                                                                   // 136
				input.updateAutogrow();                                                                                          // 137
			}, 200);                                                                                                          // 138
		},                                                                                                                 // 139
		validation: function (message) {                                                                                   // 140
			if (RocketChat.models.Subscriptions.findOne({                                                                     // 141
				rid: message.rid                                                                                                 // 142
			}) == null) {                                                                                                     // 141
				return false;                                                                                                    // 144
			}                                                                                                                 // 145
                                                                                                                     //
			var hasPermission = RocketChat.authz.hasAtLeastOnePermission('edit-message', message.rid);                        // 146
			var isEditAllowed = RocketChat.settings.get('Message_AllowEditing');                                              // 147
			var editOwn = message.u && message.u._id === Meteor.userId();                                                     // 148
                                                                                                                     //
			if (!(hasPermission || isEditAllowed && editOwn)) {                                                               // 149
				return;                                                                                                          // 150
			}                                                                                                                 // 151
                                                                                                                     //
			var blockEditInMinutes = RocketChat.settings.get('Message_AllowEditing_BlockEditInMinutes');                      // 152
                                                                                                                     //
			if (blockEditInMinutes) {                                                                                         // 153
				var msgTs = void 0;                                                                                              // 154
                                                                                                                     //
				if (message.ts != null) {                                                                                        // 155
					msgTs = moment(message.ts);                                                                                     // 156
				}                                                                                                                // 157
                                                                                                                     //
				var currentTsDiff = void 0;                                                                                      // 158
                                                                                                                     //
				if (msgTs != null) {                                                                                             // 159
					currentTsDiff = moment().diff(msgTs, 'minutes');                                                                // 160
				}                                                                                                                // 161
                                                                                                                     //
				return currentTsDiff < blockEditInMinutes;                                                                       // 162
			} else {                                                                                                          // 163
				return true;                                                                                                     // 164
			}                                                                                                                 // 165
		},                                                                                                                 // 166
		order: 2                                                                                                           // 167
	});                                                                                                                 // 125
	RocketChat.MessageAction.addButton({                                                                                // 169
		id: 'delete-message',                                                                                              // 170
		icon: 'icon-trash-alt',                                                                                            // 171
		i18nLabel: 'Delete',                                                                                               // 172
		context: ['message', 'message-mobile'],                                                                            // 173
		action: function () {                                                                                              // 174
			var message = this._arguments[1];                                                                                 // 175
			RocketChat.MessageAction.hideDropDown();                                                                          // 176
			return chatMessages[Session.get('openedRoom')].confirmDeleteMsg(message);                                         // 177
		},                                                                                                                 // 178
		validation: function (message) {                                                                                   // 179
			if (RocketChat.models.Subscriptions.findOne({                                                                     // 180
				rid: message.rid                                                                                                 // 180
			}) == null) {                                                                                                     // 180
				return false;                                                                                                    // 181
			}                                                                                                                 // 182
                                                                                                                     //
			var hasPermission = RocketChat.authz.hasAtLeastOnePermission('delete-message', message.rid);                      // 183
			var isDeleteAllowed = RocketChat.settings.get('Message_AllowDeleting');                                           // 184
			var deleteOwn = message.u && message.u._id === Meteor.userId();                                                   // 185
                                                                                                                     //
			if (!(hasPermission || isDeleteAllowed && deleteOwn)) {                                                           // 186
				return;                                                                                                          // 187
			}                                                                                                                 // 188
                                                                                                                     //
			var blockDeleteInMinutes = RocketChat.settings.get('Message_AllowDeleting_BlockDeleteInMinutes');                 // 189
                                                                                                                     //
			if (blockDeleteInMinutes != null && blockDeleteInMinutes !== 0) {                                                 // 190
				var msgTs = void 0;                                                                                              // 191
                                                                                                                     //
				if (message.ts != null) {                                                                                        // 192
					msgTs = moment(message.ts);                                                                                     // 193
				}                                                                                                                // 194
                                                                                                                     //
				var currentTsDiff = void 0;                                                                                      // 195
                                                                                                                     //
				if (msgTs != null) {                                                                                             // 196
					currentTsDiff = moment().diff(msgTs, 'minutes');                                                                // 197
				}                                                                                                                // 198
                                                                                                                     //
				return currentTsDiff < blockDeleteInMinutes;                                                                     // 199
			} else {                                                                                                          // 200
				return true;                                                                                                     // 201
			}                                                                                                                 // 202
		},                                                                                                                 // 203
		order: 3                                                                                                           // 204
	}); /* globals cordova*/                                                                                            // 169
	RocketChat.MessageAction.addButton({                                                                                // 207
		id: 'permalink',                                                                                                   // 208
		icon: 'icon-link',                                                                                                 // 209
		i18nLabel: 'Permalink',                                                                                            // 210
		classes: 'clipboard',                                                                                              // 211
		context: ['message', 'message-mobile'],                                                                            // 212
		action: function () {                                                                                              // 213
			var message = this._arguments[1];                                                                                 // 214
			var permalink = RocketChat.MessageAction.getPermaLink(message._id);                                               // 215
			RocketChat.MessageAction.hideDropDown();                                                                          // 216
                                                                                                                     //
			if (Meteor.isCordova) {                                                                                           // 217
				cordova.plugins.clipboard.copy(permalink);                                                                       // 218
			} else {                                                                                                          // 219
				$(event.currentTarget).attr('data-clipboard-text', permalink);                                                   // 220
			}                                                                                                                 // 221
                                                                                                                     //
			return toastr.success(TAPi18n.__('Copied'));                                                                      // 222
		},                                                                                                                 // 223
		validation: function (message) {                                                                                   // 224
			if (RocketChat.models.Subscriptions.findOne({                                                                     // 225
				rid: message.rid                                                                                                 // 226
			}) == null) {                                                                                                     // 225
				return false;                                                                                                    // 228
			}                                                                                                                 // 229
                                                                                                                     //
			return true;                                                                                                      // 230
		},                                                                                                                 // 231
		order: 4                                                                                                           // 232
	});                                                                                                                 // 207
	RocketChat.MessageAction.addButton({                                                                                // 234
		id: 'copy',                                                                                                        // 235
		icon: 'icon-paste',                                                                                                // 236
		i18nLabel: 'Copy',                                                                                                 // 237
		classes: 'clipboard',                                                                                              // 238
		context: ['message', 'message-mobile'],                                                                            // 239
		action: function () {                                                                                              // 240
			var message = this._arguments[1].msg;                                                                             // 241
			RocketChat.MessageAction.hideDropDown();                                                                          // 242
                                                                                                                     //
			if (Meteor.isCordova) {                                                                                           // 243
				cordova.plugins.clipboard.copy(message);                                                                         // 244
			} else {                                                                                                          // 245
				$(event.currentTarget).attr('data-clipboard-text', message);                                                     // 246
			}                                                                                                                 // 247
                                                                                                                     //
			return toastr.success(TAPi18n.__('Copied'));                                                                      // 248
		},                                                                                                                 // 249
		validation: function (message) {                                                                                   // 250
			if (RocketChat.models.Subscriptions.findOne({                                                                     // 251
				rid: message.rid                                                                                                 // 252
			}) == null) {                                                                                                     // 251
				return false;                                                                                                    // 254
			}                                                                                                                 // 255
                                                                                                                     //
			return true;                                                                                                      // 256
		},                                                                                                                 // 257
		order: 5                                                                                                           // 258
	});                                                                                                                 // 234
	return RocketChat.MessageAction.addButton({                                                                         // 260
		id: 'quote-message',                                                                                               // 261
		icon: 'icon-quote-left',                                                                                           // 262
		i18nLabel: 'Quote',                                                                                                // 263
		context: ['message', 'message-mobile'],                                                                            // 264
		action: function (event, instance) {                                                                               // 265
			var message = this._arguments[1];                                                                                 // 266
			var input = instance.find('.input-message');                                                                      // 267
			var url = RocketChat.MessageAction.getPermaLink(message._id);                                                     // 268
			var text = "[ ](" + url + ") ";                                                                                   // 269
                                                                                                                     //
			if (input.value) {                                                                                                // 270
				input.value += input.value.endsWith(' ') ? '' : ' ';                                                             // 271
			}                                                                                                                 // 272
                                                                                                                     //
			input.value += text;                                                                                              // 273
			input.focus();                                                                                                    // 274
			return RocketChat.MessageAction.hideDropDown();                                                                   // 275
		},                                                                                                                 // 276
		validation: function (message) {                                                                                   // 277
			if (RocketChat.models.Subscriptions.findOne({                                                                     // 278
				rid: message.rid                                                                                                 // 279
			}) == null) {                                                                                                     // 278
				return false;                                                                                                    // 281
			}                                                                                                                 // 282
                                                                                                                     //
			return true;                                                                                                      // 283
		},                                                                                                                 // 284
		order: 6                                                                                                           // 285
	});                                                                                                                 // 260
});                                                                                                                  // 287
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"defaultTabBars.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/client/defaultTabBars.js                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
RocketChat.TabBar.addButton({                                                                                        // 1
	groups: ['channel', 'group', 'direct'],                                                                             // 2
	id: 'message-search',                                                                                               // 3
	i18nTitle: 'Search',                                                                                                // 4
	icon: 'icon-search',                                                                                                // 5
	template: 'messageSearch',                                                                                          // 6
	order: 1                                                                                                            // 7
});                                                                                                                  // 1
RocketChat.TabBar.addButton({                                                                                        // 10
	groups: ['direct'],                                                                                                 // 11
	id: 'user-info',                                                                                                    // 12
	i18nTitle: 'User_Info',                                                                                             // 13
	icon: 'icon-user',                                                                                                  // 14
	template: 'membersList',                                                                                            // 15
	order: 2                                                                                                            // 16
});                                                                                                                  // 10
RocketChat.TabBar.addButton({                                                                                        // 19
	groups: ['channel', 'group'],                                                                                       // 20
	id: 'members-list',                                                                                                 // 21
	i18nTitle: 'Members_List',                                                                                          // 22
	icon: 'icon-users',                                                                                                 // 23
	template: 'membersList',                                                                                            // 24
	order: 2                                                                                                            // 25
});                                                                                                                  // 19
RocketChat.TabBar.addButton({                                                                                        // 28
	groups: ['channel', 'group', 'direct'],                                                                             // 29
	id: 'uploaded-files-list',                                                                                          // 30
	i18nTitle: 'Room_uploaded_file_list',                                                                               // 31
	icon: 'icon-attach',                                                                                                // 32
	template: 'uploadedFilesList',                                                                                      // 33
	order: 3                                                                                                            // 34
});                                                                                                                  // 28
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"CustomTranslations.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/client/CustomTranslations.js                                                              //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
RocketChat.applyCustomTranslations = function () {                                                                   // 1
	function applyCustomTranslations() {                                                                                // 1
		var CustomTranslations = RocketChat.settings.get('Custom_Translations');                                           // 2
                                                                                                                     //
		if (typeof CustomTranslations === 'string' && CustomTranslations.trim() !== '') {                                  // 3
			try {                                                                                                             // 4
				CustomTranslations = JSON.parse(CustomTranslations);                                                             // 5
                                                                                                                     //
				for (var lang in meteorBabelHelpers.sanitizeForInObject(CustomTranslations)) {                                   // 7
					if (CustomTranslations.hasOwnProperty(lang)) {                                                                  // 8
						var translations = CustomTranslations[lang];                                                                   // 9
						TAPi18next.addResourceBundle(lang, 'project', translations);                                                   // 10
					}                                                                                                               // 11
				}                                                                                                                // 12
                                                                                                                     //
				TAPi18n._language_changed_tracker.changed();                                                                     // 13
			} catch (e) {                                                                                                     // 14
				console.error('Invalid setting Custom_Translations', e);                                                         // 15
			}                                                                                                                 // 16
		}                                                                                                                  // 17
	}                                                                                                                   // 18
                                                                                                                     //
	return applyCustomTranslations;                                                                                     // 1
}();                                                                                                                 // 1
                                                                                                                     //
Meteor.startup(function () {                                                                                         // 20
	Meteor.autorun(function () {                                                                                        // 21
		// Re apply translations if tap language was changed                                                               // 22
		Session.get(TAPi18n._loaded_lang_session_key);                                                                     // 23
		RocketChat.applyCustomTranslations();                                                                              // 24
	});                                                                                                                 // 25
});                                                                                                                  // 26
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"models":{"_Base.js":function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/client/models/_Base.js                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                              //
                                                                                                                     //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                     //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                    //
                                                                                                                     //
RocketChat.models._Base = function () {                                                                              // 1
	function _class() {                                                                                                 // 1
		(0, _classCallCheck3.default)(this, _class);                                                                       // 1
	}                                                                                                                   // 1
                                                                                                                     //
	_class.prototype._baseName = function () {                                                                          // 1
		function _baseName() {                                                                                             // 1
			return 'rocketchat_';                                                                                             // 4
		}                                                                                                                  // 5
                                                                                                                     //
		return _baseName;                                                                                                  // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype._initModel = function () {                                                                         // 1
		function _initModel(name) {                                                                                        // 1
			check(name, String);                                                                                              // 8
			return this.model = new Mongo.Collection(this._baseName() + name);                                                // 9
		}                                                                                                                  // 10
                                                                                                                     //
		return _initModel;                                                                                                 // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype.find = function () {                                                                               // 1
		function find() {                                                                                                  // 1
			return this.model.find.apply(this.model, arguments);                                                              // 13
		}                                                                                                                  // 14
                                                                                                                     //
		return find;                                                                                                       // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype.findOne = function () {                                                                            // 1
		function findOne() {                                                                                               // 1
			return this.model.findOne.apply(this.model, arguments);                                                           // 17
		}                                                                                                                  // 18
                                                                                                                     //
		return findOne;                                                                                                    // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype.insert = function () {                                                                             // 1
		function insert() {                                                                                                // 1
			return this.model.insert.apply(this.model, arguments);                                                            // 21
		}                                                                                                                  // 22
                                                                                                                     //
		return insert;                                                                                                     // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype.update = function () {                                                                             // 1
		function update() {                                                                                                // 1
			return this.model.update.apply(this.model, arguments);                                                            // 25
		}                                                                                                                  // 26
                                                                                                                     //
		return update;                                                                                                     // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype.upsert = function () {                                                                             // 1
		function upsert() {                                                                                                // 1
			return this.model.upsert.apply(this.model, arguments);                                                            // 29
		}                                                                                                                  // 30
                                                                                                                     //
		return upsert;                                                                                                     // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype.remove = function () {                                                                             // 1
		function remove() {                                                                                                // 1
			return this.model.remove.apply(this.model, arguments);                                                            // 33
		}                                                                                                                  // 34
                                                                                                                     //
		return remove;                                                                                                     // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype.allow = function () {                                                                              // 1
		function allow() {                                                                                                 // 1
			return this.model.allow.apply(this.model, arguments);                                                             // 37
		}                                                                                                                  // 38
                                                                                                                     //
		return allow;                                                                                                      // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype.deny = function () {                                                                               // 1
		function deny() {                                                                                                  // 1
			return this.model.deny.apply(this.model, arguments);                                                              // 41
		}                                                                                                                  // 42
                                                                                                                     //
		return deny;                                                                                                       // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype.ensureIndex = function () {                                                                        // 1
		function ensureIndex() {}                                                                                          // 1
                                                                                                                     //
		return ensureIndex;                                                                                                // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype.dropIndex = function () {                                                                          // 1
		function dropIndex() {}                                                                                            // 1
                                                                                                                     //
		return dropIndex;                                                                                                  // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype.tryEnsureIndex = function () {                                                                     // 1
		function tryEnsureIndex() {}                                                                                       // 1
                                                                                                                     //
		return tryEnsureIndex;                                                                                             // 1
	}();                                                                                                                // 1
                                                                                                                     //
	_class.prototype.tryDropIndex = function () {                                                                       // 1
		function tryDropIndex() {}                                                                                         // 1
                                                                                                                     //
		return tryDropIndex;                                                                                               // 1
	}();                                                                                                                // 1
                                                                                                                     //
	return _class;                                                                                                      // 1
}();                                                                                                                 // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Uploads.js":function(require){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/client/models/Uploads.js                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                              //
                                                                                                                     //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                     //
                                                                                                                     //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                        //
                                                                                                                     //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                               //
                                                                                                                     //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                          //
                                                                                                                     //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                 //
                                                                                                                     //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                    //
                                                                                                                     //
RocketChat.models.Uploads = new (function (_RocketChat$models$_B) {                                                  // 2
	(0, _inherits3.default)(_class, _RocketChat$models$_B);                                                             // 2
                                                                                                                     //
	function _class() {                                                                                                 // 3
		(0, _classCallCheck3.default)(this, _class);                                                                       // 3
                                                                                                                     //
		var _this = (0, _possibleConstructorReturn3.default)(this, _RocketChat$models$_B.call(this));                      // 3
                                                                                                                     //
		_this._initModel('uploads');                                                                                       // 5
                                                                                                                     //
		return _this;                                                                                                      // 3
	}                                                                                                                   // 6
                                                                                                                     //
	return _class;                                                                                                      // 2
}(RocketChat.models._Base))();                                                                                       // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"views":{"template.customFieldsForm.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/client/views/template.customFieldsForm.js                                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
                                                                                                                     // 1
Template.__checkName("customFieldsForm");                                                                            // 2
Template["customFieldsForm"] = new Template("Template.customFieldsForm", (function() {                               // 3
  var view = this;                                                                                                   // 4
  return Blaze.Each(function() {                                                                                     // 5
    return Spacebars.call(view.lookup("customFields"));                                                              // 6
  }, function() {                                                                                                    // 7
    return [ "\n\t\t", Blaze.If(function() {                                                                         // 8
      return Spacebars.dataMustache(view.lookup("$eq"), Spacebars.dot(view.lookup("field"), "type"), "select");      // 9
    }, function() {                                                                                                  // 10
      return [ "\n\t\t\t", HTML.DIV({                                                                                // 11
        class: "input-line"                                                                                          // 12
      }, "\n\t\t\t\t", HTML.LABEL({                                                                                  // 13
        for: function() {                                                                                            // 14
          return Spacebars.mustache(view.lookup("fieldName"));                                                       // 15
        }                                                                                                            // 16
      }, Blaze.View("lookup:_", function() {                                                                         // 17
        return Spacebars.mustache(view.lookup("_"), view.lookup("fieldName"));                                       // 18
      })), "\n\t\t\t\t", HTML.DIV("\n\t\t\t\t\t", HTML.SELECT({                                                      // 19
        name: function() {                                                                                           // 20
          return Spacebars.mustache(view.lookup("fieldName"));                                                       // 21
        },                                                                                                           // 22
        "data-customfield": "true"                                                                                   // 23
      }, "\n\t\t\t\t\t\t", Blaze.Each(function() {                                                                   // 24
        return Spacebars.call(Spacebars.dot(view.lookup("field"), "options"));                                       // 25
      }, function() {                                                                                                // 26
        return [ "\n\t\t\t\t\t\t\t", HTML.OPTION({                                                                   // 27
          value: function() {                                                                                        // 28
            return Spacebars.mustache(view.lookup("."));                                                             // 29
          },                                                                                                         // 30
          selected: function() {                                                                                     // 31
            return Spacebars.mustache(view.lookup("selectedField"), view.lookup("."), view.lookup(".."));            // 32
          }                                                                                                          // 33
        }, Blaze.View("lookup:_", function() {                                                                       // 34
          return Spacebars.mustache(view.lookup("_"), view.lookup("."));                                             // 35
        })), "\n\t\t\t\t\t\t" ];                                                                                     // 36
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                                                // 37
        class: "input-error"                                                                                         // 38
      }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t" ];                                                                    // 39
    }), "\n\t\t", Blaze.If(function() {                                                                              // 40
      return Spacebars.dataMustache(view.lookup("$eq"), Spacebars.dot(view.lookup("field"), "type"), "text");        // 41
    }, function() {                                                                                                  // 42
      return [ "\n\t\t\t", HTML.DIV({                                                                                // 43
        class: "input-line"                                                                                          // 44
      }, "\n\t\t\t\t", HTML.LABEL({                                                                                  // 45
        for: function() {                                                                                            // 46
          return Spacebars.mustache(view.lookup("fieldName"));                                                       // 47
        }                                                                                                            // 48
      }, Blaze.View("lookup:_", function() {                                                                         // 49
        return Spacebars.mustache(view.lookup("_"), view.lookup("fieldName"));                                       // 50
      })), "\n\t\t\t\t", HTML.DIV("\n\t\t\t\t\t", HTML.INPUT({                                                       // 51
        type: "text",                                                                                                // 52
        name: function() {                                                                                           // 53
          return Spacebars.mustache(view.lookup("fieldName"));                                                       // 54
        },                                                                                                           // 55
        id: function() {                                                                                             // 56
          return Spacebars.mustache(view.lookup("fieldName"));                                                       // 57
        },                                                                                                           // 58
        "data-customfield": "true",                                                                                  // 59
        value: function() {                                                                                          // 60
          return Spacebars.mustache(view.lookup("fieldValue"));                                                      // 61
        },                                                                                                           // 62
        maxlength: function() {                                                                                      // 63
          return Spacebars.mustache(Spacebars.dot(view.lookup("field"), "maxLength"));                               // 64
        }                                                                                                            // 65
      }), "\n\t\t\t\t\t", HTML.DIV({                                                                                 // 66
        class: "input-error"                                                                                         // 67
      }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t" ];                                                                    // 68
    }), "\n\t" ];                                                                                                    // 69
  });                                                                                                                // 70
}));                                                                                                                 // 71
                                                                                                                     // 72
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"customFieldsForm.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/client/views/customFieldsForm.js                                                          //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
Template.customFieldsForm.helpers({                                                                                  // 1
	customFields: function () {                                                                                         // 2
		var customFields = Template.instance().customFields.get();                                                         // 3
                                                                                                                     //
		if (!customFields) {                                                                                               // 5
			return [];                                                                                                        // 6
		}                                                                                                                  // 7
                                                                                                                     //
		var customFieldsArray = [];                                                                                        // 9
		Object.keys(customFields).forEach(function (key) {                                                                 // 11
			var value = customFields[key];                                                                                    // 12
                                                                                                                     //
			if (value.hideFromForm === true && Template.instance().hideFromForm === true) {                                   // 13
				return;                                                                                                          // 14
			}                                                                                                                 // 15
                                                                                                                     //
			customFieldsArray.push({                                                                                          // 16
				fieldName: key,                                                                                                  // 17
				field: value                                                                                                     // 18
			});                                                                                                               // 16
		});                                                                                                                // 20
		return customFieldsArray;                                                                                          // 22
	},                                                                                                                  // 23
	selectedField: function (current, field) {                                                                          // 24
		var formData = Template.instance().formData;                                                                       // 25
                                                                                                                     //
		if (typeof formData[field.fieldName] !== 'undefined') {                                                            // 27
			return formData[field.fieldName] === current;                                                                     // 28
		} else if (typeof field.defaultValue !== 'undefined') {                                                            // 29
			return field.defaultValue === current;                                                                            // 30
		}                                                                                                                  // 31
	},                                                                                                                  // 32
	fieldValue: function () {                                                                                           // 33
		var formData = Template.instance().formData;                                                                       // 34
		return formData[this.fieldName];                                                                                   // 36
	}                                                                                                                   // 37
});                                                                                                                  // 1
Template.customFieldsForm.onCreated(function () {                                                                    // 40
	var _this = this;                                                                                                   // 40
                                                                                                                     //
	this.customFields = new ReactiveVar();                                                                              // 41
	var currentData = Template.currentData();                                                                           // 43
	this.hideFromForm = currentData && currentData.hideFromForm;                                                        // 44
	this.formData = currentData && currentData.formData || {};                                                          // 45
	Tracker.autorun(function () {                                                                                       // 47
		var Accounts_CustomFields = RocketChat.settings.get('Accounts_CustomFields');                                      // 48
                                                                                                                     //
		if (typeof Accounts_CustomFields === 'string' && Accounts_CustomFields.trim() !== '') {                            // 49
			try {                                                                                                             // 50
				_this.customFields.set(JSON.parse(RocketChat.settings.get('Accounts_CustomFields')));                            // 51
			} catch (e) {                                                                                                     // 52
				console.error('Invalid JSON for Accounts_CustomFields');                                                         // 53
			}                                                                                                                 // 54
		} else {                                                                                                           // 55
			_this.customFields.set(undefined);                                                                                // 56
		}                                                                                                                  // 57
	});                                                                                                                 // 58
});                                                                                                                  // 59
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"startup":{"defaultRoomTypes.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/startup/defaultRoomTypes.js                                                               //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/* globals openRoom */RocketChat.roomTypes.add(null, 0, {                                                            // 1
	template: 'starredRooms',                                                                                           // 3
	icon: 'icon-star'                                                                                                   // 4
});                                                                                                                  // 2
RocketChat.roomTypes.add('c', 10, {                                                                                  // 7
	template: 'channels',                                                                                               // 8
	icon: 'icon-hash',                                                                                                  // 9
	route: {                                                                                                            // 10
		name: 'channel',                                                                                                   // 11
		path: '/channel/:name',                                                                                            // 12
		action: function (params) {                                                                                        // 13
			return openRoom('c', params.name);                                                                                // 14
		}                                                                                                                  // 15
	},                                                                                                                  // 10
	findRoom: function (identifier) {                                                                                   // 18
		var query = {                                                                                                      // 19
			t: 'c',                                                                                                           // 20
			name: identifier                                                                                                  // 21
		};                                                                                                                 // 19
		return ChatRoom.findOne(query);                                                                                    // 23
	},                                                                                                                  // 24
	roomName: function (roomData) {                                                                                     // 26
		return roomData.name;                                                                                              // 27
	},                                                                                                                  // 28
	condition: function () {                                                                                            // 30
		return RocketChat.authz.hasAtLeastOnePermission(['view-c-room', 'view-joined-room']) || RocketChat.settings.get('Accounts_AllowAnonymousRead') === true;
	},                                                                                                                  // 32
	showJoinLink: function (roomId) {                                                                                   // 34
		return !!ChatRoom.findOne({                                                                                        // 35
			_id: roomId,                                                                                                      // 35
			t: 'c'                                                                                                            // 35
		});                                                                                                                // 35
	}                                                                                                                   // 36
});                                                                                                                  // 7
RocketChat.roomTypes.add('d', 20, {                                                                                  // 39
	template: 'directMessages',                                                                                         // 40
	icon: 'icon-at',                                                                                                    // 41
	route: {                                                                                                            // 42
		name: 'direct',                                                                                                    // 43
		path: '/direct/:username',                                                                                         // 44
		action: function (params) {                                                                                        // 45
			return openRoom('d', params.username);                                                                            // 46
		},                                                                                                                 // 47
		link: function (sub) {                                                                                             // 48
			return {                                                                                                          // 49
				username: sub.name                                                                                               // 49
			};                                                                                                                // 49
		}                                                                                                                  // 50
	},                                                                                                                  // 42
	findRoom: function (identifier) {                                                                                   // 53
		var query = {                                                                                                      // 54
			t: 'd',                                                                                                           // 55
			name: identifier                                                                                                  // 56
		};                                                                                                                 // 54
		var subscription = ChatSubscription.findOne(query);                                                                // 59
                                                                                                                     //
		if (subscription && subscription.rid) {                                                                            // 60
			return ChatRoom.findOne(subscription.rid);                                                                        // 61
		}                                                                                                                  // 62
	},                                                                                                                  // 63
	roomName: function (roomData) {                                                                                     // 65
		var subscription = ChatSubscription.findOne({                                                                      // 66
			rid: roomData._id                                                                                                 // 66
		}, {                                                                                                               // 66
			fields: {                                                                                                         // 66
				name: 1,                                                                                                         // 66
				fname: 1                                                                                                         // 66
			}                                                                                                                 // 66
		});                                                                                                                // 66
                                                                                                                     //
		if (!subscription) {                                                                                               // 67
			return '';                                                                                                        // 68
		}                                                                                                                  // 69
                                                                                                                     //
		if (RocketChat.settings.get('UI_Use_Real_Name') && subscription.fname) {                                           // 70
			return subscription.fname;                                                                                        // 71
		}                                                                                                                  // 72
                                                                                                                     //
		return subscription.name;                                                                                          // 74
	},                                                                                                                  // 75
	secondaryRoomName: function (roomData) {                                                                            // 77
		if (RocketChat.settings.get('UI_Use_Real_Name')) {                                                                 // 78
			var subscription = ChatSubscription.findOne({                                                                     // 79
				rid: roomData._id                                                                                                // 79
			}, {                                                                                                              // 79
				fields: {                                                                                                        // 79
					name: 1                                                                                                         // 79
				}                                                                                                                // 79
			});                                                                                                               // 79
			return subscription && subscription.name;                                                                         // 80
		}                                                                                                                  // 81
	},                                                                                                                  // 82
	condition: function () {                                                                                            // 84
		return RocketChat.authz.hasAtLeastOnePermission(['view-d-room', 'view-joined-room']);                              // 85
	},                                                                                                                  // 86
	getUserStatus: function (roomId) {                                                                                  // 88
		var subscription = RocketChat.models.Subscriptions.findOne({                                                       // 89
			rid: roomId                                                                                                       // 89
		});                                                                                                                // 89
                                                                                                                     //
		if (subscription == null) {                                                                                        // 90
			return;                                                                                                           // 90
		}                                                                                                                  // 90
                                                                                                                     //
		return Session.get("user_" + subscription.name + "_status");                                                       // 92
	}                                                                                                                   // 93
});                                                                                                                  // 39
RocketChat.roomTypes.add('p', 30, {                                                                                  // 96
	template: 'privateGroups',                                                                                          // 97
	icon: 'icon-lock',                                                                                                  // 98
	route: {                                                                                                            // 99
		name: 'group',                                                                                                     // 100
		path: '/group/:name',                                                                                              // 101
		action: function (params) {                                                                                        // 102
			return openRoom('p', params.name);                                                                                // 103
		}                                                                                                                  // 104
	},                                                                                                                  // 99
	findRoom: function (identifier) {                                                                                   // 107
		var query = {                                                                                                      // 108
			t: 'p',                                                                                                           // 109
			name: identifier                                                                                                  // 110
		};                                                                                                                 // 108
		return ChatRoom.findOne(query);                                                                                    // 112
	},                                                                                                                  // 113
	roomName: function (roomData) {                                                                                     // 115
		return roomData.name;                                                                                              // 116
	},                                                                                                                  // 117
	condition: function () {                                                                                            // 119
		return RocketChat.authz.hasAllPermission('view-p-room');                                                           // 120
	}                                                                                                                   // 121
});                                                                                                                  // 96
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"rocketchat.info.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/rocketchat_lib/rocketchat.info.js                                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
RocketChat.Info = {                                                                                                  // 1
    "version": "0.56.0",                                                                                             // 2
    "build": {                                                                                                       // 3
        "date": "2017-06-14T04:47:46.444Z",                                                                          // 4
        "nodeVersion": "v4.8.3",                                                                                     // 5
        "arch": "x64",                                                                                               // 6
        "platform": "darwin",                                                                                        // 7
        "osRelease": "16.6.0",                                                                                       // 8
        "totalMemory": 17179869184,                                                                                  // 9
        "freeMemory": 3810533376,                                                                                    // 10
        "cpus": 8                                                                                                    // 11
    },                                                                                                               // 12
    "commit": {                                                                                                      // 13
        "hash": "ccb54455ceec4e6cb1a9845bf087fa1e740de2d0",                                                          // 14
        "date": "Tue Jun 13 13:36:49 2017 +0900",                                                                    // 15
        "author": "Jungwoo Lee",                                                                                     // 16
        "subject": "Create build.sh",                                                                                // 17
        "branch": "master"                                                                                           // 18
    }                                                                                                                // 19
};                                                                                                                   // 20
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"node_modules":{"localforage":{"package.json":function(require,exports){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// .npm/package/node_modules/localforage/package.json                                                                //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
exports.name = "localforage";                                                                                        // 1
exports.version = "1.4.2";                                                                                           // 2
exports.main = "dist/localforage.js";                                                                                // 3
                                                                                                                     // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"dist":{"localforage.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// node_modules/meteor/rocketchat_lib/node_modules/localforage/dist/localforage.js                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
/*!                                                                                                                  // 1
    localForage -- Offline Storage, Improved                                                                         // 2
    Version 1.4.2                                                                                                    // 3
    https://mozilla.github.io/localForage                                                                            // 4
    (c) 2013-2015 Mozilla, Apache License 2.0                                                                        // 5
*/                                                                                                                   // 6
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.localforage = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw (f.code="MODULE_NOT_FOUND", f)}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
'use strict';                                                                                                        // 8
var immediate = _dereq_(2);                                                                                          // 9
                                                                                                                     // 10
/* istanbul ignore next */                                                                                           // 11
function INTERNAL() {}                                                                                               // 12
                                                                                                                     // 13
var handlers = {};                                                                                                   // 14
                                                                                                                     // 15
var REJECTED = ['REJECTED'];                                                                                         // 16
var FULFILLED = ['FULFILLED'];                                                                                       // 17
var PENDING = ['PENDING'];                                                                                           // 18
                                                                                                                     // 19
module.exports = exports = Promise;                                                                                  // 20
                                                                                                                     // 21
function Promise(resolver) {                                                                                         // 22
  if (typeof resolver !== 'function') {                                                                              // 23
    throw new TypeError('resolver must be a function');                                                              // 24
  }                                                                                                                  // 25
  this.state = PENDING;                                                                                              // 26
  this.queue = [];                                                                                                   // 27
  this.outcome = void 0;                                                                                             // 28
  if (resolver !== INTERNAL) {                                                                                       // 29
    safelyResolveThenable(this, resolver);                                                                           // 30
  }                                                                                                                  // 31
}                                                                                                                    // 32
                                                                                                                     // 33
Promise.prototype["catch"] = function (onRejected) {                                                                 // 34
  return this.then(null, onRejected);                                                                                // 35
};                                                                                                                   // 36
Promise.prototype.then = function (onFulfilled, onRejected) {                                                        // 37
  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||                                               // 38
    typeof onRejected !== 'function' && this.state === REJECTED) {                                                   // 39
    return this;                                                                                                     // 40
  }                                                                                                                  // 41
  var promise = new this.constructor(INTERNAL);                                                                      // 42
  if (this.state !== PENDING) {                                                                                      // 43
    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;                                              // 44
    unwrap(promise, resolver, this.outcome);                                                                         // 45
  } else {                                                                                                           // 46
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));                                                // 47
  }                                                                                                                  // 48
                                                                                                                     // 49
  return promise;                                                                                                    // 50
};                                                                                                                   // 51
function QueueItem(promise, onFulfilled, onRejected) {                                                               // 52
  this.promise = promise;                                                                                            // 53
  if (typeof onFulfilled === 'function') {                                                                           // 54
    this.onFulfilled = onFulfilled;                                                                                  // 55
    this.callFulfilled = this.otherCallFulfilled;                                                                    // 56
  }                                                                                                                  // 57
  if (typeof onRejected === 'function') {                                                                            // 58
    this.onRejected = onRejected;                                                                                    // 59
    this.callRejected = this.otherCallRejected;                                                                      // 60
  }                                                                                                                  // 61
}                                                                                                                    // 62
QueueItem.prototype.callFulfilled = function (value) {                                                               // 63
  handlers.resolve(this.promise, value);                                                                             // 64
};                                                                                                                   // 65
QueueItem.prototype.otherCallFulfilled = function (value) {                                                          // 66
  unwrap(this.promise, this.onFulfilled, value);                                                                     // 67
};                                                                                                                   // 68
QueueItem.prototype.callRejected = function (value) {                                                                // 69
  handlers.reject(this.promise, value);                                                                              // 70
};                                                                                                                   // 71
QueueItem.prototype.otherCallRejected = function (value) {                                                           // 72
  unwrap(this.promise, this.onRejected, value);                                                                      // 73
};                                                                                                                   // 74
                                                                                                                     // 75
function unwrap(promise, func, value) {                                                                              // 76
  immediate(function () {                                                                                            // 77
    var returnValue;                                                                                                 // 78
    try {                                                                                                            // 79
      returnValue = func(value);                                                                                     // 80
    } catch (e) {                                                                                                    // 81
      return handlers.reject(promise, e);                                                                            // 82
    }                                                                                                                // 83
    if (returnValue === promise) {                                                                                   // 84
      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));                                 // 85
    } else {                                                                                                         // 86
      handlers.resolve(promise, returnValue);                                                                        // 87
    }                                                                                                                // 88
  });                                                                                                                // 89
}                                                                                                                    // 90
                                                                                                                     // 91
handlers.resolve = function (self, value) {                                                                          // 92
  var result = tryCatch(getThen, value);                                                                             // 93
  if (result.status === 'error') {                                                                                   // 94
    return handlers.reject(self, result.value);                                                                      // 95
  }                                                                                                                  // 96
  var thenable = result.value;                                                                                       // 97
                                                                                                                     // 98
  if (thenable) {                                                                                                    // 99
    safelyResolveThenable(self, thenable);                                                                           // 100
  } else {                                                                                                           // 101
    self.state = FULFILLED;                                                                                          // 102
    self.outcome = value;                                                                                            // 103
    var i = -1;                                                                                                      // 104
    var len = self.queue.length;                                                                                     // 105
    while (++i < len) {                                                                                              // 106
      self.queue[i].callFulfilled(value);                                                                            // 107
    }                                                                                                                // 108
  }                                                                                                                  // 109
  return self;                                                                                                       // 110
};                                                                                                                   // 111
handlers.reject = function (self, error) {                                                                           // 112
  self.state = REJECTED;                                                                                             // 113
  self.outcome = error;                                                                                              // 114
  var i = -1;                                                                                                        // 115
  var len = self.queue.length;                                                                                       // 116
  while (++i < len) {                                                                                                // 117
    self.queue[i].callRejected(error);                                                                               // 118
  }                                                                                                                  // 119
  return self;                                                                                                       // 120
};                                                                                                                   // 121
                                                                                                                     // 122
function getThen(obj) {                                                                                              // 123
  // Make sure we only access the accessor once as required by the spec                                              // 124
  var then = obj && obj.then;                                                                                        // 125
  if (obj && typeof obj === 'object' && typeof then === 'function') {                                                // 126
    return function appyThen() {                                                                                     // 127
      then.apply(obj, arguments);                                                                                    // 128
    };                                                                                                               // 129
  }                                                                                                                  // 130
}                                                                                                                    // 131
                                                                                                                     // 132
function safelyResolveThenable(self, thenable) {                                                                     // 133
  // Either fulfill, reject or reject with error                                                                     // 134
  var called = false;                                                                                                // 135
  function onError(value) {                                                                                          // 136
    if (called) {                                                                                                    // 137
      return;                                                                                                        // 138
    }                                                                                                                // 139
    called = true;                                                                                                   // 140
    handlers.reject(self, value);                                                                                    // 141
  }                                                                                                                  // 142
                                                                                                                     // 143
  function onSuccess(value) {                                                                                        // 144
    if (called) {                                                                                                    // 145
      return;                                                                                                        // 146
    }                                                                                                                // 147
    called = true;                                                                                                   // 148
    handlers.resolve(self, value);                                                                                   // 149
  }                                                                                                                  // 150
                                                                                                                     // 151
  function tryToUnwrap() {                                                                                           // 152
    thenable(onSuccess, onError);                                                                                    // 153
  }                                                                                                                  // 154
                                                                                                                     // 155
  var result = tryCatch(tryToUnwrap);                                                                                // 156
  if (result.status === 'error') {                                                                                   // 157
    onError(result.value);                                                                                           // 158
  }                                                                                                                  // 159
}                                                                                                                    // 160
                                                                                                                     // 161
function tryCatch(func, value) {                                                                                     // 162
  var out = {};                                                                                                      // 163
  try {                                                                                                              // 164
    out.value = func(value);                                                                                         // 165
    out.status = 'success';                                                                                          // 166
  } catch (e) {                                                                                                      // 167
    out.status = 'error';                                                                                            // 168
    out.value = e;                                                                                                   // 169
  }                                                                                                                  // 170
  return out;                                                                                                        // 171
}                                                                                                                    // 172
                                                                                                                     // 173
exports.resolve = resolve;                                                                                           // 174
function resolve(value) {                                                                                            // 175
  if (value instanceof this) {                                                                                       // 176
    return value;                                                                                                    // 177
  }                                                                                                                  // 178
  return handlers.resolve(new this(INTERNAL), value);                                                                // 179
}                                                                                                                    // 180
                                                                                                                     // 181
exports.reject = reject;                                                                                             // 182
function reject(reason) {                                                                                            // 183
  var promise = new this(INTERNAL);                                                                                  // 184
  return handlers.reject(promise, reason);                                                                           // 185
}                                                                                                                    // 186
                                                                                                                     // 187
exports.all = all;                                                                                                   // 188
function all(iterable) {                                                                                             // 189
  var self = this;                                                                                                   // 190
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {                                               // 191
    return this.reject(new TypeError('must be an array'));                                                           // 192
  }                                                                                                                  // 193
                                                                                                                     // 194
  var len = iterable.length;                                                                                         // 195
  var called = false;                                                                                                // 196
  if (!len) {                                                                                                        // 197
    return this.resolve([]);                                                                                         // 198
  }                                                                                                                  // 199
                                                                                                                     // 200
  var values = new Array(len);                                                                                       // 201
  var resolved = 0;                                                                                                  // 202
  var i = -1;                                                                                                        // 203
  var promise = new this(INTERNAL);                                                                                  // 204
                                                                                                                     // 205
  while (++i < len) {                                                                                                // 206
    allResolver(iterable[i], i);                                                                                     // 207
  }                                                                                                                  // 208
  return promise;                                                                                                    // 209
  function allResolver(value, i) {                                                                                   // 210
    self.resolve(value).then(resolveFromAll, function (error) {                                                      // 211
      if (!called) {                                                                                                 // 212
        called = true;                                                                                               // 213
        handlers.reject(promise, error);                                                                             // 214
      }                                                                                                              // 215
    });                                                                                                              // 216
    function resolveFromAll(outValue) {                                                                              // 217
      values[i] = outValue;                                                                                          // 218
      if (++resolved === len && !called) {                                                                           // 219
        called = true;                                                                                               // 220
        handlers.resolve(promise, values);                                                                           // 221
      }                                                                                                              // 222
    }                                                                                                                // 223
  }                                                                                                                  // 224
}                                                                                                                    // 225
                                                                                                                     // 226
exports.race = race;                                                                                                 // 227
function race(iterable) {                                                                                            // 228
  var self = this;                                                                                                   // 229
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {                                               // 230
    return this.reject(new TypeError('must be an array'));                                                           // 231
  }                                                                                                                  // 232
                                                                                                                     // 233
  var len = iterable.length;                                                                                         // 234
  var called = false;                                                                                                // 235
  if (!len) {                                                                                                        // 236
    return this.resolve([]);                                                                                         // 237
  }                                                                                                                  // 238
                                                                                                                     // 239
  var i = -1;                                                                                                        // 240
  var promise = new this(INTERNAL);                                                                                  // 241
                                                                                                                     // 242
  while (++i < len) {                                                                                                // 243
    resolver(iterable[i]);                                                                                           // 244
  }                                                                                                                  // 245
  return promise;                                                                                                    // 246
  function resolver(value) {                                                                                         // 247
    self.resolve(value).then(function (response) {                                                                   // 248
      if (!called) {                                                                                                 // 249
        called = true;                                                                                               // 250
        handlers.resolve(promise, response);                                                                         // 251
      }                                                                                                              // 252
    }, function (error) {                                                                                            // 253
      if (!called) {                                                                                                 // 254
        called = true;                                                                                               // 255
        handlers.reject(promise, error);                                                                             // 256
      }                                                                                                              // 257
    });                                                                                                              // 258
  }                                                                                                                  // 259
}                                                                                                                    // 260
                                                                                                                     // 261
},{"2":2}],2:[function(_dereq_,module,exports){                                                                      // 262
(function (global){                                                                                                  // 263
'use strict';                                                                                                        // 264
var Mutation = global.MutationObserver || global.WebKitMutationObserver;                                             // 265
                                                                                                                     // 266
var scheduleDrain;                                                                                                   // 267
                                                                                                                     // 268
{                                                                                                                    // 269
  if (Mutation) {                                                                                                    // 270
    var called = 0;                                                                                                  // 271
    var observer = new Mutation(nextTick);                                                                           // 272
    var element = global.document.createTextNode('');                                                                // 273
    observer.observe(element, {                                                                                      // 274
      characterData: true                                                                                            // 275
    });                                                                                                              // 276
    scheduleDrain = function () {                                                                                    // 277
      element.data = (called = ++called % 2);                                                                        // 278
    };                                                                                                               // 279
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {                                 // 280
    var channel = new global.MessageChannel();                                                                       // 281
    channel.port1.onmessage = nextTick;                                                                              // 282
    scheduleDrain = function () {                                                                                    // 283
      channel.port2.postMessage(0);                                                                                  // 284
    };                                                                                                               // 285
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {              // 286
    scheduleDrain = function () {                                                                                    // 287
                                                                                                                     // 288
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted      // 289
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.             // 290
      var scriptEl = global.document.createElement('script');                                                        // 291
      scriptEl.onreadystatechange = function () {                                                                    // 292
        nextTick();                                                                                                  // 293
                                                                                                                     // 294
        scriptEl.onreadystatechange = null;                                                                          // 295
        scriptEl.parentNode.removeChild(scriptEl);                                                                   // 296
        scriptEl = null;                                                                                             // 297
      };                                                                                                             // 298
      global.document.documentElement.appendChild(scriptEl);                                                         // 299
    };                                                                                                               // 300
  } else {                                                                                                           // 301
    scheduleDrain = function () {                                                                                    // 302
      setTimeout(nextTick, 0);                                                                                       // 303
    };                                                                                                               // 304
  }                                                                                                                  // 305
}                                                                                                                    // 306
                                                                                                                     // 307
var draining;                                                                                                        // 308
var queue = [];                                                                                                      // 309
//named nextTick for less confusing stack traces                                                                     // 310
function nextTick() {                                                                                                // 311
  draining = true;                                                                                                   // 312
  var i, oldQueue;                                                                                                   // 313
  var len = queue.length;                                                                                            // 314
  while (len) {                                                                                                      // 315
    oldQueue = queue;                                                                                                // 316
    queue = [];                                                                                                      // 317
    i = -1;                                                                                                          // 318
    while (++i < len) {                                                                                              // 319
      oldQueue[i]();                                                                                                 // 320
    }                                                                                                                // 321
    len = queue.length;                                                                                              // 322
  }                                                                                                                  // 323
  draining = false;                                                                                                  // 324
}                                                                                                                    // 325
                                                                                                                     // 326
module.exports = immediate;                                                                                          // 327
function immediate(task) {                                                                                           // 328
  if (queue.push(task) === 1 && !draining) {                                                                         // 329
    scheduleDrain();                                                                                                 // 330
  }                                                                                                                  // 331
}                                                                                                                    // 332
                                                                                                                     // 333
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(_dereq_,module,exports){                                                                           // 335
(function (global){                                                                                                  // 336
'use strict';                                                                                                        // 337
if (typeof global.Promise !== 'function') {                                                                          // 338
  global.Promise = _dereq_(1);                                                                                       // 339
}                                                                                                                    // 340
                                                                                                                     // 341
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"1":1}],4:[function(_dereq_,module,exports){                                                                      // 343
'use strict';                                                                                                        // 344
                                                                                                                     // 345
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
                                                                                                                     // 347
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
                                                                                                                     // 349
function getIDB() {                                                                                                  // 350
    /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */                                       // 351
    if (typeof indexedDB !== 'undefined') {                                                                          // 352
        return indexedDB;                                                                                            // 353
    }                                                                                                                // 354
    if (typeof webkitIndexedDB !== 'undefined') {                                                                    // 355
        return webkitIndexedDB;                                                                                      // 356
    }                                                                                                                // 357
    if (typeof mozIndexedDB !== 'undefined') {                                                                       // 358
        return mozIndexedDB;                                                                                         // 359
    }                                                                                                                // 360
    if (typeof OIndexedDB !== 'undefined') {                                                                         // 361
        return OIndexedDB;                                                                                           // 362
    }                                                                                                                // 363
    if (typeof msIndexedDB !== 'undefined') {                                                                        // 364
        return msIndexedDB;                                                                                          // 365
    }                                                                                                                // 366
}                                                                                                                    // 367
                                                                                                                     // 368
var idb = getIDB();                                                                                                  // 369
                                                                                                                     // 370
function isIndexedDBValid() {                                                                                        // 371
    try {                                                                                                            // 372
        // Initialize IndexedDB; fall back to vendor-prefixed versions                                               // 373
        // if needed.                                                                                                // 374
        if (!idb) {                                                                                                  // 375
            return false;                                                                                            // 376
        }                                                                                                            // 377
        // We mimic PouchDB here; just UA test for Safari (which, as of                                              // 378
        // iOS 8/Yosemite, doesn't properly support IndexedDB).                                                      // 379
        // IndexedDB support is broken and different from Blink's.                                                   // 380
        // This is faster than the test case (and it's sync), so we just                                             // 381
        // do this. *SIGH*                                                                                           // 382
        // http://bl.ocks.org/nolanlawson/raw/c83e9039edf2278047e9/                                                  // 383
        //                                                                                                           // 384
        // We test for openDatabase because IE Mobile identifies itself                                              // 385
        // as Safari. Oh the lulz...                                                                                 // 386
        if (typeof openDatabase !== 'undefined' && typeof navigator !== 'undefined' && navigator.userAgent && /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) {
            return false;                                                                                            // 388
        }                                                                                                            // 389
                                                                                                                     // 390
        return idb && typeof idb.open === 'function' &&                                                              // 391
        // Some Samsung/HTC Android 4.0-4.3 devices                                                                  // 392
        // have older IndexedDB specs; if this isn't available                                                       // 393
        // their IndexedDB is too old for us to use.                                                                 // 394
        // (Replaces the onupgradeneeded test.)                                                                      // 395
        typeof IDBKeyRange !== 'undefined';                                                                          // 396
    } catch (e) {                                                                                                    // 397
        return false;                                                                                                // 398
    }                                                                                                                // 399
}                                                                                                                    // 400
                                                                                                                     // 401
function isWebSQLValid() {                                                                                           // 402
    return typeof openDatabase === 'function';                                                                       // 403
}                                                                                                                    // 404
                                                                                                                     // 405
function isLocalStorageValid() {                                                                                     // 406
    try {                                                                                                            // 407
        return typeof localStorage !== 'undefined' && 'setItem' in localStorage && localStorage.setItem;             // 408
    } catch (e) {                                                                                                    // 409
        return false;                                                                                                // 410
    }                                                                                                                // 411
}                                                                                                                    // 412
                                                                                                                     // 413
// Abstracts constructing a Blob object, so it also works in older                                                   // 414
// browsers that don't support the native Blob constructor. (i.e.                                                    // 415
// old QtWebKit versions, at least).                                                                                 // 416
// Abstracts constructing a Blob object, so it also works in older                                                   // 417
// browsers that don't support the native Blob constructor. (i.e.                                                    // 418
// old QtWebKit versions, at least).                                                                                 // 419
function createBlob(parts, properties) {                                                                             // 420
    /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */                                          // 421
    parts = parts || [];                                                                                             // 422
    properties = properties || {};                                                                                   // 423
    try {                                                                                                            // 424
        return new Blob(parts, properties);                                                                          // 425
    } catch (e) {                                                                                                    // 426
        if (e.name !== 'TypeError') {                                                                                // 427
            throw e;                                                                                                 // 428
        }                                                                                                            // 429
        var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
        var builder = new Builder();                                                                                 // 431
        for (var i = 0; i < parts.length; i += 1) {                                                                  // 432
            builder.append(parts[i]);                                                                                // 433
        }                                                                                                            // 434
        return builder.getBlob(properties.type);                                                                     // 435
    }                                                                                                                // 436
}                                                                                                                    // 437
                                                                                                                     // 438
// This is CommonJS because lie is an external dependency, so Rollup                                                 // 439
// can just ignore it.                                                                                               // 440
if (typeof Promise === 'undefined' && typeof _dereq_ !== 'undefined') {                                              // 441
    _dereq_(3);                                                                                                      // 442
}                                                                                                                    // 443
var Promise$1 = Promise;                                                                                             // 444
                                                                                                                     // 445
function executeCallback(promise, callback) {                                                                        // 446
    if (callback) {                                                                                                  // 447
        promise.then(function (result) {                                                                             // 448
            callback(null, result);                                                                                  // 449
        }, function (error) {                                                                                        // 450
            callback(error);                                                                                         // 451
        });                                                                                                          // 452
    }                                                                                                                // 453
}                                                                                                                    // 454
                                                                                                                     // 455
// Some code originally from async_storage.js in                                                                     // 456
// [Gaia](https://github.com/mozilla-b2g/gaia).                                                                      // 457
                                                                                                                     // 458
var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';                                                  // 459
var supportsBlobs;                                                                                                   // 460
var dbContexts;                                                                                                      // 461
                                                                                                                     // 462
// Transform a binary string to an array buffer, because otherwise                                                   // 463
// weird stuff happens when you try to work with the binary string directly.                                         // 464
// It is known.                                                                                                      // 465
// From http://stackoverflow.com/questions/14967647/ (continues on next line)                                        // 466
// encode-decode-image-with-base64-breaks-image (2013-04-21)                                                         // 467
function _binStringToArrayBuffer(bin) {                                                                              // 468
    var length = bin.length;                                                                                         // 469
    var buf = new ArrayBuffer(length);                                                                               // 470
    var arr = new Uint8Array(buf);                                                                                   // 471
    for (var i = 0; i < length; i++) {                                                                               // 472
        arr[i] = bin.charCodeAt(i);                                                                                  // 473
    }                                                                                                                // 474
    return buf;                                                                                                      // 475
}                                                                                                                    // 476
                                                                                                                     // 477
//                                                                                                                   // 478
// Blobs are not supported in all versions of IndexedDB, notably                                                     // 479
// Chrome <37 and Android <5. In those versions, storing a blob will throw.                                          // 480
//                                                                                                                   // 481
// Various other blob bugs exist in Chrome v37-42 (inclusive).                                                       // 482
// Detecting them is expensive and confusing to users, and Chrome 37-42                                              // 483
// is at very low usage worldwide, so we do a hacky userAgent check instead.                                         // 484
//                                                                                                                   // 485
// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120                                      // 486
// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916                                               // 487
// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836                                        // 488
//                                                                                                                   // 489
// Code borrowed from PouchDB. See:                                                                                  // 490
// https://github.com/pouchdb/pouchdb/blob/9c25a23/src/adapters/idb/blobSupport.js                                   // 491
//                                                                                                                   // 492
function _checkBlobSupportWithoutCaching(txn) {                                                                      // 493
    return new Promise$1(function (resolve) {                                                                        // 494
        var blob = createBlob(['']);                                                                                 // 495
        txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');                                                 // 496
                                                                                                                     // 497
        txn.onabort = function (e) {                                                                                 // 498
            // If the transaction aborts now its due to not being able to                                            // 499
            // write to the database, likely due to the disk being full                                              // 500
            e.preventDefault();                                                                                      // 501
            e.stopPropagation();                                                                                     // 502
            resolve(false);                                                                                          // 503
        };                                                                                                           // 504
                                                                                                                     // 505
        txn.oncomplete = function () {                                                                               // 506
            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);                                          // 507
            var matchedEdge = navigator.userAgent.match(/Edge\//);                                                   // 508
            // MS Edge pretends to be Chrome 42:                                                                     // 509
            // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx                                   // 510
            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);                          // 511
        };                                                                                                           // 512
    })["catch"](function () {                                                                                        // 513
        return false; // error, so assume unsupported                                                                // 514
    });                                                                                                              // 515
}                                                                                                                    // 516
                                                                                                                     // 517
function _checkBlobSupport(idb) {                                                                                    // 518
    if (typeof supportsBlobs === 'boolean') {                                                                        // 519
        return Promise$1.resolve(supportsBlobs);                                                                     // 520
    }                                                                                                                // 521
    return _checkBlobSupportWithoutCaching(idb).then(function (value) {                                              // 522
        supportsBlobs = value;                                                                                       // 523
        return supportsBlobs;                                                                                        // 524
    });                                                                                                              // 525
}                                                                                                                    // 526
                                                                                                                     // 527
function _deferReadiness(dbInfo) {                                                                                   // 528
    var dbContext = dbContexts[dbInfo.name];                                                                         // 529
                                                                                                                     // 530
    // Create a deferred object representing the current database operation.                                         // 531
    var deferredOperation = {};                                                                                      // 532
                                                                                                                     // 533
    deferredOperation.promise = new Promise$1(function (resolve) {                                                   // 534
        deferredOperation.resolve = resolve;                                                                         // 535
    });                                                                                                              // 536
                                                                                                                     // 537
    // Enqueue the deferred operation.                                                                               // 538
    dbContext.deferredOperations.push(deferredOperation);                                                            // 539
                                                                                                                     // 540
    // Chain its promise to the database readiness.                                                                  // 541
    if (!dbContext.dbReady) {                                                                                        // 542
        dbContext.dbReady = deferredOperation.promise;                                                               // 543
    } else {                                                                                                         // 544
        dbContext.dbReady = dbContext.dbReady.then(function () {                                                     // 545
            return deferredOperation.promise;                                                                        // 546
        });                                                                                                          // 547
    }                                                                                                                // 548
}                                                                                                                    // 549
                                                                                                                     // 550
function _advanceReadiness(dbInfo) {                                                                                 // 551
    var dbContext = dbContexts[dbInfo.name];                                                                         // 552
                                                                                                                     // 553
    // Dequeue a deferred operation.                                                                                 // 554
    var deferredOperation = dbContext.deferredOperations.pop();                                                      // 555
                                                                                                                     // 556
    // Resolve its promise (which is part of the database readiness                                                  // 557
    // chain of promises).                                                                                           // 558
    if (deferredOperation) {                                                                                         // 559
        deferredOperation.resolve();                                                                                 // 560
    }                                                                                                                // 561
}                                                                                                                    // 562
                                                                                                                     // 563
function _getConnection(dbInfo, upgradeNeeded) {                                                                     // 564
    return new Promise$1(function (resolve, reject) {                                                                // 565
                                                                                                                     // 566
        if (dbInfo.db) {                                                                                             // 567
            if (upgradeNeeded) {                                                                                     // 568
                _deferReadiness(dbInfo);                                                                             // 569
                dbInfo.db.close();                                                                                   // 570
            } else {                                                                                                 // 571
                return resolve(dbInfo.db);                                                                           // 572
            }                                                                                                        // 573
        }                                                                                                            // 574
                                                                                                                     // 575
        var dbArgs = [dbInfo.name];                                                                                  // 576
                                                                                                                     // 577
        if (upgradeNeeded) {                                                                                         // 578
            dbArgs.push(dbInfo.version);                                                                             // 579
        }                                                                                                            // 580
                                                                                                                     // 581
        var openreq = idb.open.apply(idb, dbArgs);                                                                   // 582
                                                                                                                     // 583
        if (upgradeNeeded) {                                                                                         // 584
            openreq.onupgradeneeded = function (e) {                                                                 // 585
                var db = openreq.result;                                                                             // 586
                try {                                                                                                // 587
                    db.createObjectStore(dbInfo.storeName);                                                          // 588
                    if (e.oldVersion <= 1) {                                                                         // 589
                        // Added when support for blob shims was added                                               // 590
                        db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);                                             // 591
                    }                                                                                                // 592
                } catch (ex) {                                                                                       // 593
                    if (ex.name === 'ConstraintError') {                                                             // 594
                        console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                    } else {                                                                                         // 596
                        throw ex;                                                                                    // 597
                    }                                                                                                // 598
                }                                                                                                    // 599
            };                                                                                                       // 600
        }                                                                                                            // 601
                                                                                                                     // 602
        openreq.onerror = function () {                                                                              // 603
            reject(openreq.error);                                                                                   // 604
        };                                                                                                           // 605
                                                                                                                     // 606
        openreq.onsuccess = function () {                                                                            // 607
            resolve(openreq.result);                                                                                 // 608
            _advanceReadiness(dbInfo);                                                                               // 609
        };                                                                                                           // 610
    });                                                                                                              // 611
}                                                                                                                    // 612
                                                                                                                     // 613
function _getOriginalConnection(dbInfo) {                                                                            // 614
    return _getConnection(dbInfo, false);                                                                            // 615
}                                                                                                                    // 616
                                                                                                                     // 617
function _getUpgradedConnection(dbInfo) {                                                                            // 618
    return _getConnection(dbInfo, true);                                                                             // 619
}                                                                                                                    // 620
                                                                                                                     // 621
function _isUpgradeNeeded(dbInfo, defaultVersion) {                                                                  // 622
    if (!dbInfo.db) {                                                                                                // 623
        return true;                                                                                                 // 624
    }                                                                                                                // 625
                                                                                                                     // 626
    var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);                                         // 627
    var isDowngrade = dbInfo.version < dbInfo.db.version;                                                            // 628
    var isUpgrade = dbInfo.version > dbInfo.db.version;                                                              // 629
                                                                                                                     // 630
    if (isDowngrade) {                                                                                               // 631
        // If the version is not the default one                                                                     // 632
        // then warn for impossible downgrade.                                                                       // 633
        if (dbInfo.version !== defaultVersion) {                                                                     // 634
            console.warn('The database "' + dbInfo.name + '"' + ' can\'t be downgraded from version ' + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
        }                                                                                                            // 636
        // Align the versions to prevent errors.                                                                     // 637
        dbInfo.version = dbInfo.db.version;                                                                          // 638
    }                                                                                                                // 639
                                                                                                                     // 640
    if (isUpgrade || isNewStore) {                                                                                   // 641
        // If the store is new then increment the version (if needed).                                               // 642
        // This will trigger an "upgradeneeded" event which is required                                              // 643
        // for creating a store.                                                                                     // 644
        if (isNewStore) {                                                                                            // 645
            var incVersion = dbInfo.db.version + 1;                                                                  // 646
            if (incVersion > dbInfo.version) {                                                                       // 647
                dbInfo.version = incVersion;                                                                         // 648
            }                                                                                                        // 649
        }                                                                                                            // 650
                                                                                                                     // 651
        return true;                                                                                                 // 652
    }                                                                                                                // 653
                                                                                                                     // 654
    return false;                                                                                                    // 655
}                                                                                                                    // 656
                                                                                                                     // 657
// encode a blob for indexeddb engines that don't support blobs                                                      // 658
function _encodeBlob(blob) {                                                                                         // 659
    return new Promise$1(function (resolve, reject) {                                                                // 660
        var reader = new FileReader();                                                                               // 661
        reader.onerror = reject;                                                                                     // 662
        reader.onloadend = function (e) {                                                                            // 663
            var base64 = btoa(e.target.result || '');                                                                // 664
            resolve({                                                                                                // 665
                __local_forage_encoded_blob: true,                                                                   // 666
                data: base64,                                                                                        // 667
                type: blob.type                                                                                      // 668
            });                                                                                                      // 669
        };                                                                                                           // 670
        reader.readAsBinaryString(blob);                                                                             // 671
    });                                                                                                              // 672
}                                                                                                                    // 673
                                                                                                                     // 674
// decode an encoded blob                                                                                            // 675
function _decodeBlob(encodedBlob) {                                                                                  // 676
    var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));                                                 // 677
    return createBlob([arrayBuff], { type: encodedBlob.type });                                                      // 678
}                                                                                                                    // 679
                                                                                                                     // 680
// is this one of our fancy encoded blobs?                                                                           // 681
function _isEncodedBlob(value) {                                                                                     // 682
    return value && value.__local_forage_encoded_blob;                                                               // 683
}                                                                                                                    // 684
                                                                                                                     // 685
// Specialize the default `ready()` function by making it dependent                                                  // 686
// on the current database operations. Thus, the driver will be actually                                             // 687
// ready when it's been initialized (default) *and* there are no pending                                             // 688
// operations on the database (initiated by some other instances).                                                   // 689
function _fullyReady(callback) {                                                                                     // 690
    var self = this;                                                                                                 // 691
                                                                                                                     // 692
    var promise = self._initReady().then(function () {                                                               // 693
        var dbContext = dbContexts[self._dbInfo.name];                                                               // 694
                                                                                                                     // 695
        if (dbContext && dbContext.dbReady) {                                                                        // 696
            return dbContext.dbReady;                                                                                // 697
        }                                                                                                            // 698
    });                                                                                                              // 699
                                                                                                                     // 700
    promise.then(callback, callback);                                                                                // 701
    return promise;                                                                                                  // 702
}                                                                                                                    // 703
                                                                                                                     // 704
// Open the IndexedDB database (automatically creates one if one didn't                                              // 705
// previously exist), using any options set in the config.                                                           // 706
function _initStorage(options) {                                                                                     // 707
    var self = this;                                                                                                 // 708
    var dbInfo = {                                                                                                   // 709
        db: null                                                                                                     // 710
    };                                                                                                               // 711
                                                                                                                     // 712
    if (options) {                                                                                                   // 713
        for (var i in options) {                                                                                     // 714
            dbInfo[i] = options[i];                                                                                  // 715
        }                                                                                                            // 716
    }                                                                                                                // 717
                                                                                                                     // 718
    // Initialize a singleton container for all running localForages.                                                // 719
    if (!dbContexts) {                                                                                               // 720
        dbContexts = {};                                                                                             // 721
    }                                                                                                                // 722
                                                                                                                     // 723
    // Get the current context of the database;                                                                      // 724
    var dbContext = dbContexts[dbInfo.name];                                                                         // 725
                                                                                                                     // 726
    // ...or create a new context.                                                                                   // 727
    if (!dbContext) {                                                                                                // 728
        dbContext = {                                                                                                // 729
            // Running localForages sharing a database.                                                              // 730
            forages: [],                                                                                             // 731
            // Shared database.                                                                                      // 732
            db: null,                                                                                                // 733
            // Database readiness (promise).                                                                         // 734
            dbReady: null,                                                                                           // 735
            // Deferred operations on the database.                                                                  // 736
            deferredOperations: []                                                                                   // 737
        };                                                                                                           // 738
        // Register the new context in the global container.                                                         // 739
        dbContexts[dbInfo.name] = dbContext;                                                                         // 740
    }                                                                                                                // 741
                                                                                                                     // 742
    // Register itself as a running localForage in the current context.                                              // 743
    dbContext.forages.push(self);                                                                                    // 744
                                                                                                                     // 745
    // Replace the default `ready()` function with the specialized one.                                              // 746
    if (!self._initReady) {                                                                                          // 747
        self._initReady = self.ready;                                                                                // 748
        self.ready = _fullyReady;                                                                                    // 749
    }                                                                                                                // 750
                                                                                                                     // 751
    // Create an array of initialization states of the related localForages.                                         // 752
    var initPromises = [];                                                                                           // 753
                                                                                                                     // 754
    function ignoreErrors() {                                                                                        // 755
        // Don't handle errors here,                                                                                 // 756
        // just makes sure related localForages aren't pending.                                                      // 757
        return Promise$1.resolve();                                                                                  // 758
    }                                                                                                                // 759
                                                                                                                     // 760
    for (var j = 0; j < dbContext.forages.length; j++) {                                                             // 761
        var forage = dbContext.forages[j];                                                                           // 762
        if (forage !== self) {                                                                                       // 763
            // Don't wait for itself...                                                                              // 764
            initPromises.push(forage._initReady()["catch"](ignoreErrors));                                           // 765
        }                                                                                                            // 766
    }                                                                                                                // 767
                                                                                                                     // 768
    // Take a snapshot of the related localForages.                                                                  // 769
    var forages = dbContext.forages.slice(0);                                                                        // 770
                                                                                                                     // 771
    // Initialize the connection process only when                                                                   // 772
    // all the related localForages aren't pending.                                                                  // 773
    return Promise$1.all(initPromises).then(function () {                                                            // 774
        dbInfo.db = dbContext.db;                                                                                    // 775
        // Get the connection or open a new one without upgrade.                                                     // 776
        return _getOriginalConnection(dbInfo);                                                                       // 777
    }).then(function (db) {                                                                                          // 778
        dbInfo.db = db;                                                                                              // 779
        if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {                                                 // 780
            // Reopen the database for upgrading.                                                                    // 781
            return _getUpgradedConnection(dbInfo);                                                                   // 782
        }                                                                                                            // 783
        return db;                                                                                                   // 784
    }).then(function (db) {                                                                                          // 785
        dbInfo.db = dbContext.db = db;                                                                               // 786
        self._dbInfo = dbInfo;                                                                                       // 787
        // Share the final connection amongst related localForages.                                                  // 788
        for (var k = 0; k < forages.length; k++) {                                                                   // 789
            var forage = forages[k];                                                                                 // 790
            if (forage !== self) {                                                                                   // 791
                // Self is already up-to-date.                                                                       // 792
                forage._dbInfo.db = dbInfo.db;                                                                       // 793
                forage._dbInfo.version = dbInfo.version;                                                             // 794
            }                                                                                                        // 795
        }                                                                                                            // 796
    });                                                                                                              // 797
}                                                                                                                    // 798
                                                                                                                     // 799
function getItem(key, callback) {                                                                                    // 800
    var self = this;                                                                                                 // 801
                                                                                                                     // 802
    // Cast the key to a string, as that's all we can set as a key.                                                  // 803
    if (typeof key !== 'string') {                                                                                   // 804
        console.warn(key + ' used as a key, but it is not a string.');                                               // 805
        key = String(key);                                                                                           // 806
    }                                                                                                                // 807
                                                                                                                     // 808
    var promise = new Promise$1(function (resolve, reject) {                                                         // 809
        self.ready().then(function () {                                                                              // 810
            var dbInfo = self._dbInfo;                                                                               // 811
            var store = dbInfo.db.transaction(dbInfo.storeName, 'readonly').objectStore(dbInfo.storeName);           // 812
            var req = store.get(key);                                                                                // 813
                                                                                                                     // 814
            req.onsuccess = function () {                                                                            // 815
                var value = req.result;                                                                              // 816
                if (value === undefined) {                                                                           // 817
                    value = null;                                                                                    // 818
                }                                                                                                    // 819
                if (_isEncodedBlob(value)) {                                                                         // 820
                    value = _decodeBlob(value);                                                                      // 821
                }                                                                                                    // 822
                resolve(value);                                                                                      // 823
            };                                                                                                       // 824
                                                                                                                     // 825
            req.onerror = function () {                                                                              // 826
                reject(req.error);                                                                                   // 827
            };                                                                                                       // 828
        })["catch"](reject);                                                                                         // 829
    });                                                                                                              // 830
                                                                                                                     // 831
    executeCallback(promise, callback);                                                                              // 832
    return promise;                                                                                                  // 833
}                                                                                                                    // 834
                                                                                                                     // 835
// Iterate over all items stored in database.                                                                        // 836
function iterate(iterator, callback) {                                                                               // 837
    var self = this;                                                                                                 // 838
                                                                                                                     // 839
    var promise = new Promise$1(function (resolve, reject) {                                                         // 840
        self.ready().then(function () {                                                                              // 841
            var dbInfo = self._dbInfo;                                                                               // 842
            var store = dbInfo.db.transaction(dbInfo.storeName, 'readonly').objectStore(dbInfo.storeName);           // 843
                                                                                                                     // 844
            var req = store.openCursor();                                                                            // 845
            var iterationNumber = 1;                                                                                 // 846
                                                                                                                     // 847
            req.onsuccess = function () {                                                                            // 848
                var cursor = req.result;                                                                             // 849
                                                                                                                     // 850
                if (cursor) {                                                                                        // 851
                    var value = cursor.value;                                                                        // 852
                    if (_isEncodedBlob(value)) {                                                                     // 853
                        value = _decodeBlob(value);                                                                  // 854
                    }                                                                                                // 855
                    var result = iterator(value, cursor.key, iterationNumber++);                                     // 856
                                                                                                                     // 857
                    if (result !== void 0) {                                                                         // 858
                        resolve(result);                                                                             // 859
                    } else {                                                                                         // 860
                        cursor["continue"]();                                                                        // 861
                    }                                                                                                // 862
                } else {                                                                                             // 863
                    resolve();                                                                                       // 864
                }                                                                                                    // 865
            };                                                                                                       // 866
                                                                                                                     // 867
            req.onerror = function () {                                                                              // 868
                reject(req.error);                                                                                   // 869
            };                                                                                                       // 870
        })["catch"](reject);                                                                                         // 871
    });                                                                                                              // 872
                                                                                                                     // 873
    executeCallback(promise, callback);                                                                              // 874
                                                                                                                     // 875
    return promise;                                                                                                  // 876
}                                                                                                                    // 877
                                                                                                                     // 878
function setItem(key, value, callback) {                                                                             // 879
    var self = this;                                                                                                 // 880
                                                                                                                     // 881
    // Cast the key to a string, as that's all we can set as a key.                                                  // 882
    if (typeof key !== 'string') {                                                                                   // 883
        console.warn(key + ' used as a key, but it is not a string.');                                               // 884
        key = String(key);                                                                                           // 885
    }                                                                                                                // 886
                                                                                                                     // 887
    var promise = new Promise$1(function (resolve, reject) {                                                         // 888
        var dbInfo;                                                                                                  // 889
        self.ready().then(function () {                                                                              // 890
            dbInfo = self._dbInfo;                                                                                   // 891
            if (value instanceof Blob) {                                                                             // 892
                return _checkBlobSupport(dbInfo.db).then(function (blobSupport) {                                    // 893
                    if (blobSupport) {                                                                               // 894
                        return value;                                                                                // 895
                    }                                                                                                // 896
                    return _encodeBlob(value);                                                                       // 897
                });                                                                                                  // 898
            }                                                                                                        // 899
            return value;                                                                                            // 900
        }).then(function (value) {                                                                                   // 901
            var transaction = dbInfo.db.transaction(dbInfo.storeName, 'readwrite');                                  // 902
            var store = transaction.objectStore(dbInfo.storeName);                                                   // 903
                                                                                                                     // 904
            // The reason we don't _save_ null is because IE 10 does                                                 // 905
            // not support saving the `null` type in IndexedDB. How                                                  // 906
            // ironic, given the bug below!                                                                          // 907
            // See: https://github.com/mozilla/localForage/issues/161                                                // 908
            if (value === null) {                                                                                    // 909
                value = undefined;                                                                                   // 910
            }                                                                                                        // 911
                                                                                                                     // 912
            transaction.oncomplete = function () {                                                                   // 913
                // Cast to undefined so the value passed to                                                          // 914
                // callback/promise is the same as what one would get out                                            // 915
                // of `getItem()` later. This leads to some weirdness                                                // 916
                // (setItem('foo', undefined) will return `null`), but                                               // 917
                // it's not my fault localStorage is our baseline and that                                           // 918
                // it's weird.                                                                                       // 919
                if (value === undefined) {                                                                           // 920
                    value = null;                                                                                    // 921
                }                                                                                                    // 922
                                                                                                                     // 923
                resolve(value);                                                                                      // 924
            };                                                                                                       // 925
            transaction.onabort = transaction.onerror = function () {                                                // 926
                var err = req.error ? req.error : req.transaction.error;                                             // 927
                reject(err);                                                                                         // 928
            };                                                                                                       // 929
                                                                                                                     // 930
            var req = store.put(value, key);                                                                         // 931
        })["catch"](reject);                                                                                         // 932
    });                                                                                                              // 933
                                                                                                                     // 934
    executeCallback(promise, callback);                                                                              // 935
    return promise;                                                                                                  // 936
}                                                                                                                    // 937
                                                                                                                     // 938
function removeItem(key, callback) {                                                                                 // 939
    var self = this;                                                                                                 // 940
                                                                                                                     // 941
    // Cast the key to a string, as that's all we can set as a key.                                                  // 942
    if (typeof key !== 'string') {                                                                                   // 943
        console.warn(key + ' used as a key, but it is not a string.');                                               // 944
        key = String(key);                                                                                           // 945
    }                                                                                                                // 946
                                                                                                                     // 947
    var promise = new Promise$1(function (resolve, reject) {                                                         // 948
        self.ready().then(function () {                                                                              // 949
            var dbInfo = self._dbInfo;                                                                               // 950
            var transaction = dbInfo.db.transaction(dbInfo.storeName, 'readwrite');                                  // 951
            var store = transaction.objectStore(dbInfo.storeName);                                                   // 952
                                                                                                                     // 953
            // We use a Grunt task to make this safe for IE and some                                                 // 954
            // versions of Android (including those used by Cordova).                                                // 955
            // Normally IE won't like `.delete()` and will insist on                                                 // 956
            // using `['delete']()`, but we have a build step that                                                   // 957
            // fixes this for us now.                                                                                // 958
            var req = store["delete"](key);                                                                          // 959
            transaction.oncomplete = function () {                                                                   // 960
                resolve();                                                                                           // 961
            };                                                                                                       // 962
                                                                                                                     // 963
            transaction.onerror = function () {                                                                      // 964
                reject(req.error);                                                                                   // 965
            };                                                                                                       // 966
                                                                                                                     // 967
            // The request will be also be aborted if we've exceeded our storage                                     // 968
            // space.                                                                                                // 969
            transaction.onabort = function () {                                                                      // 970
                var err = req.error ? req.error : req.transaction.error;                                             // 971
                reject(err);                                                                                         // 972
            };                                                                                                       // 973
        })["catch"](reject);                                                                                         // 974
    });                                                                                                              // 975
                                                                                                                     // 976
    executeCallback(promise, callback);                                                                              // 977
    return promise;                                                                                                  // 978
}                                                                                                                    // 979
                                                                                                                     // 980
function clear(callback) {                                                                                           // 981
    var self = this;                                                                                                 // 982
                                                                                                                     // 983
    var promise = new Promise$1(function (resolve, reject) {                                                         // 984
        self.ready().then(function () {                                                                              // 985
            var dbInfo = self._dbInfo;                                                                               // 986
            var transaction = dbInfo.db.transaction(dbInfo.storeName, 'readwrite');                                  // 987
            var store = transaction.objectStore(dbInfo.storeName);                                                   // 988
            var req = store.clear();                                                                                 // 989
                                                                                                                     // 990
            transaction.oncomplete = function () {                                                                   // 991
                resolve();                                                                                           // 992
            };                                                                                                       // 993
                                                                                                                     // 994
            transaction.onabort = transaction.onerror = function () {                                                // 995
                var err = req.error ? req.error : req.transaction.error;                                             // 996
                reject(err);                                                                                         // 997
            };                                                                                                       // 998
        })["catch"](reject);                                                                                         // 999
    });                                                                                                              // 1000
                                                                                                                     // 1001
    executeCallback(promise, callback);                                                                              // 1002
    return promise;                                                                                                  // 1003
}                                                                                                                    // 1004
                                                                                                                     // 1005
function length(callback) {                                                                                          // 1006
    var self = this;                                                                                                 // 1007
                                                                                                                     // 1008
    var promise = new Promise$1(function (resolve, reject) {                                                         // 1009
        self.ready().then(function () {                                                                              // 1010
            var dbInfo = self._dbInfo;                                                                               // 1011
            var store = dbInfo.db.transaction(dbInfo.storeName, 'readonly').objectStore(dbInfo.storeName);           // 1012
            var req = store.count();                                                                                 // 1013
                                                                                                                     // 1014
            req.onsuccess = function () {                                                                            // 1015
                resolve(req.result);                                                                                 // 1016
            };                                                                                                       // 1017
                                                                                                                     // 1018
            req.onerror = function () {                                                                              // 1019
                reject(req.error);                                                                                   // 1020
            };                                                                                                       // 1021
        })["catch"](reject);                                                                                         // 1022
    });                                                                                                              // 1023
                                                                                                                     // 1024
    executeCallback(promise, callback);                                                                              // 1025
    return promise;                                                                                                  // 1026
}                                                                                                                    // 1027
                                                                                                                     // 1028
function key(n, callback) {                                                                                          // 1029
    var self = this;                                                                                                 // 1030
                                                                                                                     // 1031
    var promise = new Promise$1(function (resolve, reject) {                                                         // 1032
        if (n < 0) {                                                                                                 // 1033
            resolve(null);                                                                                           // 1034
                                                                                                                     // 1035
            return;                                                                                                  // 1036
        }                                                                                                            // 1037
                                                                                                                     // 1038
        self.ready().then(function () {                                                                              // 1039
            var dbInfo = self._dbInfo;                                                                               // 1040
            var store = dbInfo.db.transaction(dbInfo.storeName, 'readonly').objectStore(dbInfo.storeName);           // 1041
                                                                                                                     // 1042
            var advanced = false;                                                                                    // 1043
            var req = store.openCursor();                                                                            // 1044
            req.onsuccess = function () {                                                                            // 1045
                var cursor = req.result;                                                                             // 1046
                if (!cursor) {                                                                                       // 1047
                    // this means there weren't enough keys                                                          // 1048
                    resolve(null);                                                                                   // 1049
                                                                                                                     // 1050
                    return;                                                                                          // 1051
                }                                                                                                    // 1052
                                                                                                                     // 1053
                if (n === 0) {                                                                                       // 1054
                    // We have the first key, return it if that's what they                                          // 1055
                    // wanted.                                                                                       // 1056
                    resolve(cursor.key);                                                                             // 1057
                } else {                                                                                             // 1058
                    if (!advanced) {                                                                                 // 1059
                        // Otherwise, ask the cursor to skip ahead n                                                 // 1060
                        // records.                                                                                  // 1061
                        advanced = true;                                                                             // 1062
                        cursor.advance(n);                                                                           // 1063
                    } else {                                                                                         // 1064
                        // When we get here, we've got the nth key.                                                  // 1065
                        resolve(cursor.key);                                                                         // 1066
                    }                                                                                                // 1067
                }                                                                                                    // 1068
            };                                                                                                       // 1069
                                                                                                                     // 1070
            req.onerror = function () {                                                                              // 1071
                reject(req.error);                                                                                   // 1072
            };                                                                                                       // 1073
        })["catch"](reject);                                                                                         // 1074
    });                                                                                                              // 1075
                                                                                                                     // 1076
    executeCallback(promise, callback);                                                                              // 1077
    return promise;                                                                                                  // 1078
}                                                                                                                    // 1079
                                                                                                                     // 1080
function keys(callback) {                                                                                            // 1081
    var self = this;                                                                                                 // 1082
                                                                                                                     // 1083
    var promise = new Promise$1(function (resolve, reject) {                                                         // 1084
        self.ready().then(function () {                                                                              // 1085
            var dbInfo = self._dbInfo;                                                                               // 1086
            var store = dbInfo.db.transaction(dbInfo.storeName, 'readonly').objectStore(dbInfo.storeName);           // 1087
                                                                                                                     // 1088
            var req = store.openCursor();                                                                            // 1089
            var keys = [];                                                                                           // 1090
                                                                                                                     // 1091
            req.onsuccess = function () {                                                                            // 1092
                var cursor = req.result;                                                                             // 1093
                                                                                                                     // 1094
                if (!cursor) {                                                                                       // 1095
                    resolve(keys);                                                                                   // 1096
                    return;                                                                                          // 1097
                }                                                                                                    // 1098
                                                                                                                     // 1099
                keys.push(cursor.key);                                                                               // 1100
                cursor["continue"]();                                                                                // 1101
            };                                                                                                       // 1102
                                                                                                                     // 1103
            req.onerror = function () {                                                                              // 1104
                reject(req.error);                                                                                   // 1105
            };                                                                                                       // 1106
        })["catch"](reject);                                                                                         // 1107
    });                                                                                                              // 1108
                                                                                                                     // 1109
    executeCallback(promise, callback);                                                                              // 1110
    return promise;                                                                                                  // 1111
}                                                                                                                    // 1112
                                                                                                                     // 1113
var asyncStorage = {                                                                                                 // 1114
    _driver: 'asyncStorage',                                                                                         // 1115
    _initStorage: _initStorage,                                                                                      // 1116
    iterate: iterate,                                                                                                // 1117
    getItem: getItem,                                                                                                // 1118
    setItem: setItem,                                                                                                // 1119
    removeItem: removeItem,                                                                                          // 1120
    clear: clear,                                                                                                    // 1121
    length: length,                                                                                                  // 1122
    key: key,                                                                                                        // 1123
    keys: keys                                                                                                       // 1124
};                                                                                                                   // 1125
                                                                                                                     // 1126
// Sadly, the best way to save binary data in WebSQL/localStorage is serializing                                     // 1127
// it to Base64, so this is how we store it to prevent very strange errors with less                                 // 1128
// verbose ways of binary <-> string data storage.                                                                   // 1129
var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';                                 // 1130
                                                                                                                     // 1131
var BLOB_TYPE_PREFIX = '~~local_forage_type~';                                                                       // 1132
var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;                                                        // 1133
                                                                                                                     // 1134
var SERIALIZED_MARKER = '__lfsc__:';                                                                                 // 1135
var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;                                                             // 1136
                                                                                                                     // 1137
// OMG the serializations!                                                                                           // 1138
var TYPE_ARRAYBUFFER = 'arbf';                                                                                       // 1139
var TYPE_BLOB = 'blob';                                                                                              // 1140
var TYPE_INT8ARRAY = 'si08';                                                                                         // 1141
var TYPE_UINT8ARRAY = 'ui08';                                                                                        // 1142
var TYPE_UINT8CLAMPEDARRAY = 'uic8';                                                                                 // 1143
var TYPE_INT16ARRAY = 'si16';                                                                                        // 1144
var TYPE_INT32ARRAY = 'si32';                                                                                        // 1145
var TYPE_UINT16ARRAY = 'ur16';                                                                                       // 1146
var TYPE_UINT32ARRAY = 'ui32';                                                                                       // 1147
var TYPE_FLOAT32ARRAY = 'fl32';                                                                                      // 1148
var TYPE_FLOAT64ARRAY = 'fl64';                                                                                      // 1149
var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;                              // 1150
                                                                                                                     // 1151
function stringToBuffer(serializedString) {                                                                          // 1152
    // Fill the string into a ArrayBuffer.                                                                           // 1153
    var bufferLength = serializedString.length * 0.75;                                                               // 1154
    var len = serializedString.length;                                                                               // 1155
    var i;                                                                                                           // 1156
    var p = 0;                                                                                                       // 1157
    var encoded1, encoded2, encoded3, encoded4;                                                                      // 1158
                                                                                                                     // 1159
    if (serializedString[serializedString.length - 1] === '=') {                                                     // 1160
        bufferLength--;                                                                                              // 1161
        if (serializedString[serializedString.length - 2] === '=') {                                                 // 1162
            bufferLength--;                                                                                          // 1163
        }                                                                                                            // 1164
    }                                                                                                                // 1165
                                                                                                                     // 1166
    var buffer = new ArrayBuffer(bufferLength);                                                                      // 1167
    var bytes = new Uint8Array(buffer);                                                                              // 1168
                                                                                                                     // 1169
    for (i = 0; i < len; i += 4) {                                                                                   // 1170
        encoded1 = BASE_CHARS.indexOf(serializedString[i]);                                                          // 1171
        encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);                                                      // 1172
        encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);                                                      // 1173
        encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);                                                      // 1174
                                                                                                                     // 1175
        /*jslint bitwise: true */                                                                                    // 1176
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;                                                                  // 1177
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;                                                           // 1178
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;                                                            // 1179
    }                                                                                                                // 1180
    return buffer;                                                                                                   // 1181
}                                                                                                                    // 1182
                                                                                                                     // 1183
// Converts a buffer to a string to store, serialized, in the backend                                                // 1184
// storage library.                                                                                                  // 1185
function bufferToString(buffer) {                                                                                    // 1186
    // base64-arraybuffer                                                                                            // 1187
    var bytes = new Uint8Array(buffer);                                                                              // 1188
    var base64String = '';                                                                                           // 1189
    var i;                                                                                                           // 1190
                                                                                                                     // 1191
    for (i = 0; i < bytes.length; i += 3) {                                                                          // 1192
        /*jslint bitwise: true */                                                                                    // 1193
        base64String += BASE_CHARS[bytes[i] >> 2];                                                                   // 1194
        base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];                                         // 1195
        base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];                                    // 1196
        base64String += BASE_CHARS[bytes[i + 2] & 63];                                                               // 1197
    }                                                                                                                // 1198
                                                                                                                     // 1199
    if (bytes.length % 3 === 2) {                                                                                    // 1200
        base64String = base64String.substring(0, base64String.length - 1) + '=';                                     // 1201
    } else if (bytes.length % 3 === 1) {                                                                             // 1202
        base64String = base64String.substring(0, base64String.length - 2) + '==';                                    // 1203
    }                                                                                                                // 1204
                                                                                                                     // 1205
    return base64String;                                                                                             // 1206
}                                                                                                                    // 1207
                                                                                                                     // 1208
// Serialize a value, afterwards executing a callback (which usually                                                 // 1209
// instructs the `setItem()` callback/promise to be executed). This is how                                           // 1210
// we store binary data with localStorage.                                                                           // 1211
function serialize(value, callback) {                                                                                // 1212
    var valueString = '';                                                                                            // 1213
    if (value) {                                                                                                     // 1214
        valueString = value.toString();                                                                              // 1215
    }                                                                                                                // 1216
                                                                                                                     // 1217
    // Cannot use `value instanceof ArrayBuffer` or such here, as these                                              // 1218
    // checks fail when running the tests using casper.js...                                                         // 1219
    //                                                                                                               // 1220
    // TODO: See why those tests fail and use a better solution.                                                     // 1221
    if (value && (value.toString() === '[object ArrayBuffer]' || value.buffer && value.buffer.toString() === '[object ArrayBuffer]')) {
        // Convert binary arrays to a string and prefix the string with                                              // 1223
        // a special marker.                                                                                         // 1224
        var buffer;                                                                                                  // 1225
        var marker = SERIALIZED_MARKER;                                                                              // 1226
                                                                                                                     // 1227
        if (value instanceof ArrayBuffer) {                                                                          // 1228
            buffer = value;                                                                                          // 1229
            marker += TYPE_ARRAYBUFFER;                                                                              // 1230
        } else {                                                                                                     // 1231
            buffer = value.buffer;                                                                                   // 1232
                                                                                                                     // 1233
            if (valueString === '[object Int8Array]') {                                                              // 1234
                marker += TYPE_INT8ARRAY;                                                                            // 1235
            } else if (valueString === '[object Uint8Array]') {                                                      // 1236
                marker += TYPE_UINT8ARRAY;                                                                           // 1237
            } else if (valueString === '[object Uint8ClampedArray]') {                                               // 1238
                marker += TYPE_UINT8CLAMPEDARRAY;                                                                    // 1239
            } else if (valueString === '[object Int16Array]') {                                                      // 1240
                marker += TYPE_INT16ARRAY;                                                                           // 1241
            } else if (valueString === '[object Uint16Array]') {                                                     // 1242
                marker += TYPE_UINT16ARRAY;                                                                          // 1243
            } else if (valueString === '[object Int32Array]') {                                                      // 1244
                marker += TYPE_INT32ARRAY;                                                                           // 1245
            } else if (valueString === '[object Uint32Array]') {                                                     // 1246
                marker += TYPE_UINT32ARRAY;                                                                          // 1247
            } else if (valueString === '[object Float32Array]') {                                                    // 1248
                marker += TYPE_FLOAT32ARRAY;                                                                         // 1249
            } else if (valueString === '[object Float64Array]') {                                                    // 1250
                marker += TYPE_FLOAT64ARRAY;                                                                         // 1251
            } else {                                                                                                 // 1252
                callback(new Error('Failed to get type for BinaryArray'));                                           // 1253
            }                                                                                                        // 1254
        }                                                                                                            // 1255
                                                                                                                     // 1256
        callback(marker + bufferToString(buffer));                                                                   // 1257
    } else if (valueString === '[object Blob]') {                                                                    // 1258
        // Conver the blob to a binaryArray and then to a string.                                                    // 1259
        var fileReader = new FileReader();                                                                           // 1260
                                                                                                                     // 1261
        fileReader.onload = function () {                                                                            // 1262
            // Backwards-compatible prefix for the blob type.                                                        // 1263
            var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);                             // 1264
                                                                                                                     // 1265
            callback(SERIALIZED_MARKER + TYPE_BLOB + str);                                                           // 1266
        };                                                                                                           // 1267
                                                                                                                     // 1268
        fileReader.readAsArrayBuffer(value);                                                                         // 1269
    } else {                                                                                                         // 1270
        try {                                                                                                        // 1271
            callback(JSON.stringify(value));                                                                         // 1272
        } catch (e) {                                                                                                // 1273
            console.error("Couldn't convert value into a JSON string: ", value);                                     // 1274
                                                                                                                     // 1275
            callback(null, e);                                                                                       // 1276
        }                                                                                                            // 1277
    }                                                                                                                // 1278
}                                                                                                                    // 1279
                                                                                                                     // 1280
// Deserialize data we've inserted into a value column/field. We place                                               // 1281
// special markers into our strings to mark them as encoded; this isn't                                              // 1282
// as nice as a meta field, but it's the only sane thing we can do whilst                                            // 1283
// keeping localStorage support intact.                                                                              // 1284
//                                                                                                                   // 1285
// Oftentimes this will just deserialize JSON content, but if we have a                                              // 1286
// special marker (SERIALIZED_MARKER, defined above), we will extract                                                // 1287
// some kind of arraybuffer/binary data/typed array out of the string.                                               // 1288
function deserialize(value) {                                                                                        // 1289
    // If we haven't marked this string as being specially serialized (i.e.                                          // 1290
    // something other than serialized JSON), we can just return it and be                                           // 1291
    // done with it.                                                                                                 // 1292
    if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {                                        // 1293
        return JSON.parse(value);                                                                                    // 1294
    }                                                                                                                // 1295
                                                                                                                     // 1296
    // The following code deals with deserializing some kind of Blob or                                              // 1297
    // TypedArray. First we separate out the type of data we're dealing                                              // 1298
    // with from the data itself.                                                                                    // 1299
    var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);                                           // 1300
    var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);                             // 1301
                                                                                                                     // 1302
    var blobType;                                                                                                    // 1303
    // Backwards-compatible blob type serialization strategy.                                                        // 1304
    // DBs created with older versions of localForage will simply not have the blob type.                            // 1305
    if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {                                       // 1306
        var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);                                                // 1307
        blobType = matcher[1];                                                                                       // 1308
        serializedString = serializedString.substring(matcher[0].length);                                            // 1309
    }                                                                                                                // 1310
    var buffer = stringToBuffer(serializedString);                                                                   // 1311
                                                                                                                     // 1312
    // Return the right type based on the code/type set during                                                       // 1313
    // serialization.                                                                                                // 1314
    switch (type) {                                                                                                  // 1315
        case TYPE_ARRAYBUFFER:                                                                                       // 1316
            return buffer;                                                                                           // 1317
        case TYPE_BLOB:                                                                                              // 1318
            return createBlob([buffer], { type: blobType });                                                         // 1319
        case TYPE_INT8ARRAY:                                                                                         // 1320
            return new Int8Array(buffer);                                                                            // 1321
        case TYPE_UINT8ARRAY:                                                                                        // 1322
            return new Uint8Array(buffer);                                                                           // 1323
        case TYPE_UINT8CLAMPEDARRAY:                                                                                 // 1324
            return new Uint8ClampedArray(buffer);                                                                    // 1325
        case TYPE_INT16ARRAY:                                                                                        // 1326
            return new Int16Array(buffer);                                                                           // 1327
        case TYPE_UINT16ARRAY:                                                                                       // 1328
            return new Uint16Array(buffer);                                                                          // 1329
        case TYPE_INT32ARRAY:                                                                                        // 1330
            return new Int32Array(buffer);                                                                           // 1331
        case TYPE_UINT32ARRAY:                                                                                       // 1332
            return new Uint32Array(buffer);                                                                          // 1333
        case TYPE_FLOAT32ARRAY:                                                                                      // 1334
            return new Float32Array(buffer);                                                                         // 1335
        case TYPE_FLOAT64ARRAY:                                                                                      // 1336
            return new Float64Array(buffer);                                                                         // 1337
        default:                                                                                                     // 1338
            throw new Error('Unkown type: ' + type);                                                                 // 1339
    }                                                                                                                // 1340
}                                                                                                                    // 1341
                                                                                                                     // 1342
var localforageSerializer = {                                                                                        // 1343
    serialize: serialize,                                                                                            // 1344
    deserialize: deserialize,                                                                                        // 1345
    stringToBuffer: stringToBuffer,                                                                                  // 1346
    bufferToString: bufferToString                                                                                   // 1347
};                                                                                                                   // 1348
                                                                                                                     // 1349
/*                                                                                                                   // 1350
 * Includes code from:                                                                                               // 1351
 *                                                                                                                   // 1352
 * base64-arraybuffer                                                                                                // 1353
 * https://github.com/niklasvh/base64-arraybuffer                                                                    // 1354
 *                                                                                                                   // 1355
 * Copyright (c) 2012 Niklas von Hertzen                                                                             // 1356
 * Licensed under the MIT license.                                                                                   // 1357
 */                                                                                                                  // 1358
// Open the WebSQL database (automatically creates one if one didn't                                                 // 1359
// previously exist), using any options set in the config.                                                           // 1360
function _initStorage$1(options) {                                                                                   // 1361
    var self = this;                                                                                                 // 1362
    var dbInfo = {                                                                                                   // 1363
        db: null                                                                                                     // 1364
    };                                                                                                               // 1365
                                                                                                                     // 1366
    if (options) {                                                                                                   // 1367
        for (var i in options) {                                                                                     // 1368
            dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];                         // 1369
        }                                                                                                            // 1370
    }                                                                                                                // 1371
                                                                                                                     // 1372
    var dbInfoPromise = new Promise$1(function (resolve, reject) {                                                   // 1373
        // Open the database; the openDatabase API will automatically                                                // 1374
        // create it for us if it doesn't exist.                                                                     // 1375
        try {                                                                                                        // 1376
            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);          // 1377
        } catch (e) {                                                                                                // 1378
            return reject(e);                                                                                        // 1379
        }                                                                                                            // 1380
                                                                                                                     // 1381
        // Create our key/value table if it doesn't exist.                                                           // 1382
        dbInfo.db.transaction(function (t) {                                                                         // 1383
            t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' (id INTEGER PRIMARY KEY, key unique, value)', [], function () {
                self._dbInfo = dbInfo;                                                                               // 1385
                resolve();                                                                                           // 1386
            }, function (t, error) {                                                                                 // 1387
                reject(error);                                                                                       // 1388
            });                                                                                                      // 1389
        });                                                                                                          // 1390
    });                                                                                                              // 1391
                                                                                                                     // 1392
    dbInfo.serializer = localforageSerializer;                                                                       // 1393
    return dbInfoPromise;                                                                                            // 1394
}                                                                                                                    // 1395
                                                                                                                     // 1396
function getItem$1(key, callback) {                                                                                  // 1397
    var self = this;                                                                                                 // 1398
                                                                                                                     // 1399
    // Cast the key to a string, as that's all we can set as a key.                                                  // 1400
    if (typeof key !== 'string') {                                                                                   // 1401
        console.warn(key + ' used as a key, but it is not a string.');                                               // 1402
        key = String(key);                                                                                           // 1403
    }                                                                                                                // 1404
                                                                                                                     // 1405
    var promise = new Promise$1(function (resolve, reject) {                                                         // 1406
        self.ready().then(function () {                                                                              // 1407
            var dbInfo = self._dbInfo;                                                                               // 1408
            dbInfo.db.transaction(function (t) {                                                                     // 1409
                t.executeSql('SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).value : null;                            // 1411
                                                                                                                     // 1412
                    // Check to see if this is serialized content we need to                                         // 1413
                    // unpack.                                                                                       // 1414
                    if (result) {                                                                                    // 1415
                        result = dbInfo.serializer.deserialize(result);                                              // 1416
                    }                                                                                                // 1417
                                                                                                                     // 1418
                    resolve(result);                                                                                 // 1419
                }, function (t, error) {                                                                             // 1420
                                                                                                                     // 1421
                    reject(error);                                                                                   // 1422
                });                                                                                                  // 1423
            });                                                                                                      // 1424
        })["catch"](reject);                                                                                         // 1425
    });                                                                                                              // 1426
                                                                                                                     // 1427
    executeCallback(promise, callback);                                                                              // 1428
    return promise;                                                                                                  // 1429
}                                                                                                                    // 1430
                                                                                                                     // 1431
function iterate$1(iterator, callback) {                                                                             // 1432
    var self = this;                                                                                                 // 1433
                                                                                                                     // 1434
    var promise = new Promise$1(function (resolve, reject) {                                                         // 1435
        self.ready().then(function () {                                                                              // 1436
            var dbInfo = self._dbInfo;                                                                               // 1437
                                                                                                                     // 1438
            dbInfo.db.transaction(function (t) {                                                                     // 1439
                t.executeSql('SELECT * FROM ' + dbInfo.storeName, [], function (t, results) {                        // 1440
                    var rows = results.rows;                                                                         // 1441
                    var length = rows.length;                                                                        // 1442
                                                                                                                     // 1443
                    for (var i = 0; i < length; i++) {                                                               // 1444
                        var item = rows.item(i);                                                                     // 1445
                        var result = item.value;                                                                     // 1446
                                                                                                                     // 1447
                        // Check to see if this is serialized content                                                // 1448
                        // we need to unpack.                                                                        // 1449
                        if (result) {                                                                                // 1450
                            result = dbInfo.serializer.deserialize(result);                                          // 1451
                        }                                                                                            // 1452
                                                                                                                     // 1453
                        result = iterator(result, item.key, i + 1);                                                  // 1454
                                                                                                                     // 1455
                        // void(0) prevents problems with redefinition                                               // 1456
                        // of `undefined`.                                                                           // 1457
                        if (result !== void 0) {                                                                     // 1458
                            resolve(result);                                                                         // 1459
                            return;                                                                                  // 1460
                        }                                                                                            // 1461
                    }                                                                                                // 1462
                                                                                                                     // 1463
                    resolve();                                                                                       // 1464
                }, function (t, error) {                                                                             // 1465
                    reject(error);                                                                                   // 1466
                });                                                                                                  // 1467
            });                                                                                                      // 1468
        })["catch"](reject);                                                                                         // 1469
    });                                                                                                              // 1470
                                                                                                                     // 1471
    executeCallback(promise, callback);                                                                              // 1472
    return promise;                                                                                                  // 1473
}                                                                                                                    // 1474
                                                                                                                     // 1475
function setItem$1(key, value, callback) {                                                                           // 1476
    var self = this;                                                                                                 // 1477
                                                                                                                     // 1478
    // Cast the key to a string, as that's all we can set as a key.                                                  // 1479
    if (typeof key !== 'string') {                                                                                   // 1480
        console.warn(key + ' used as a key, but it is not a string.');                                               // 1481
        key = String(key);                                                                                           // 1482
    }                                                                                                                // 1483
                                                                                                                     // 1484
    var promise = new Promise$1(function (resolve, reject) {                                                         // 1485
        self.ready().then(function () {                                                                              // 1486
            // The localStorage API doesn't return undefined values in an                                            // 1487
            // "expected" way, so undefined is always cast to null in all                                            // 1488
            // drivers. See: https://github.com/mozilla/localForage/pull/42                                          // 1489
            if (value === undefined) {                                                                               // 1490
                value = null;                                                                                        // 1491
            }                                                                                                        // 1492
                                                                                                                     // 1493
            // Save the original value to pass to the callback.                                                      // 1494
            var originalValue = value;                                                                               // 1495
                                                                                                                     // 1496
            var dbInfo = self._dbInfo;                                                                               // 1497
            dbInfo.serializer.serialize(value, function (value, error) {                                             // 1498
                if (error) {                                                                                         // 1499
                    reject(error);                                                                                   // 1500
                } else {                                                                                             // 1501
                    dbInfo.db.transaction(function (t) {                                                             // 1502
                        t.executeSql('INSERT OR REPLACE INTO ' + dbInfo.storeName + ' (key, value) VALUES (?, ?)', [key, value], function () {
                            resolve(originalValue);                                                                  // 1504
                        }, function (t, error) {                                                                     // 1505
                            reject(error);                                                                           // 1506
                        });                                                                                          // 1507
                    }, function (sqlError) {                                                                         // 1508
                        // The transaction failed; check                                                             // 1509
                        // to see if it's a quota error.                                                             // 1510
                        if (sqlError.code === sqlError.QUOTA_ERR) {                                                  // 1511
                            // We reject the callback outright for now, but                                          // 1512
                            // it's worth trying to re-run the transaction.                                          // 1513
                            // Even if the user accepts the prompt to use                                            // 1514
                            // more storage on Safari, this error will                                               // 1515
                            // be called.                                                                            // 1516
                            //                                                                                       // 1517
                            // TODO: Try to re-run the transaction.                                                  // 1518
                            reject(sqlError);                                                                        // 1519
                        }                                                                                            // 1520
                    });                                                                                              // 1521
                }                                                                                                    // 1522
            });                                                                                                      // 1523
        })["catch"](reject);                                                                                         // 1524
    });                                                                                                              // 1525
                                                                                                                     // 1526
    executeCallback(promise, callback);                                                                              // 1527
    return promise;                                                                                                  // 1528
}                                                                                                                    // 1529
                                                                                                                     // 1530
function removeItem$1(key, callback) {                                                                               // 1531
    var self = this;                                                                                                 // 1532
                                                                                                                     // 1533
    // Cast the key to a string, as that's all we can set as a key.                                                  // 1534
    if (typeof key !== 'string') {                                                                                   // 1535
        console.warn(key + ' used as a key, but it is not a string.');                                               // 1536
        key = String(key);                                                                                           // 1537
    }                                                                                                                // 1538
                                                                                                                     // 1539
    var promise = new Promise$1(function (resolve, reject) {                                                         // 1540
        self.ready().then(function () {                                                                              // 1541
            var dbInfo = self._dbInfo;                                                                               // 1542
            dbInfo.db.transaction(function (t) {                                                                     // 1543
                t.executeSql('DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function () {              // 1544
                    resolve();                                                                                       // 1545
                }, function (t, error) {                                                                             // 1546
                                                                                                                     // 1547
                    reject(error);                                                                                   // 1548
                });                                                                                                  // 1549
            });                                                                                                      // 1550
        })["catch"](reject);                                                                                         // 1551
    });                                                                                                              // 1552
                                                                                                                     // 1553
    executeCallback(promise, callback);                                                                              // 1554
    return promise;                                                                                                  // 1555
}                                                                                                                    // 1556
                                                                                                                     // 1557
// Deletes every item in the table.                                                                                  // 1558
// TODO: Find out if this resets the AUTO_INCREMENT number.                                                          // 1559
function clear$1(callback) {                                                                                         // 1560
    var self = this;                                                                                                 // 1561
                                                                                                                     // 1562
    var promise = new Promise$1(function (resolve, reject) {                                                         // 1563
        self.ready().then(function () {                                                                              // 1564
            var dbInfo = self._dbInfo;                                                                               // 1565
            dbInfo.db.transaction(function (t) {                                                                     // 1566
                t.executeSql('DELETE FROM ' + dbInfo.storeName, [], function () {                                    // 1567
                    resolve();                                                                                       // 1568
                }, function (t, error) {                                                                             // 1569
                    reject(error);                                                                                   // 1570
                });                                                                                                  // 1571
            });                                                                                                      // 1572
        })["catch"](reject);                                                                                         // 1573
    });                                                                                                              // 1574
                                                                                                                     // 1575
    executeCallback(promise, callback);                                                                              // 1576
    return promise;                                                                                                  // 1577
}                                                                                                                    // 1578
                                                                                                                     // 1579
// Does a simple `COUNT(key)` to get the number of items stored in                                                   // 1580
// localForage.                                                                                                      // 1581
function length$1(callback) {                                                                                        // 1582
    var self = this;                                                                                                 // 1583
                                                                                                                     // 1584
    var promise = new Promise$1(function (resolve, reject) {                                                         // 1585
        self.ready().then(function () {                                                                              // 1586
            var dbInfo = self._dbInfo;                                                                               // 1587
            dbInfo.db.transaction(function (t) {                                                                     // 1588
                // Ahhh, SQL makes this one soooooo easy.                                                            // 1589
                t.executeSql('SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {          // 1590
                    var result = results.rows.item(0).c;                                                             // 1591
                                                                                                                     // 1592
                    resolve(result);                                                                                 // 1593
                }, function (t, error) {                                                                             // 1594
                                                                                                                     // 1595
                    reject(error);                                                                                   // 1596
                });                                                                                                  // 1597
            });                                                                                                      // 1598
        })["catch"](reject);                                                                                         // 1599
    });                                                                                                              // 1600
                                                                                                                     // 1601
    executeCallback(promise, callback);                                                                              // 1602
    return promise;                                                                                                  // 1603
}                                                                                                                    // 1604
                                                                                                                     // 1605
// Return the key located at key index X; essentially gets the key from a                                            // 1606
// `WHERE id = ?`. This is the most efficient way I can think to implement                                           // 1607
// this rarely-used (in my experience) part of the API, but it can seem                                              // 1608
// inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so                                           // 1609
// the ID of each key will change every time it's updated. Perhaps a stored                                          // 1610
// procedure for the `setItem()` SQL would solve this problem?                                                       // 1611
// TODO: Don't change ID on `setItem()`.                                                                             // 1612
function key$1(n, callback) {                                                                                        // 1613
    var self = this;                                                                                                 // 1614
                                                                                                                     // 1615
    var promise = new Promise$1(function (resolve, reject) {                                                         // 1616
        self.ready().then(function () {                                                                              // 1617
            var dbInfo = self._dbInfo;                                                                               // 1618
            dbInfo.db.transaction(function (t) {                                                                     // 1619
                t.executeSql('SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).key : null;                              // 1621
                    resolve(result);                                                                                 // 1622
                }, function (t, error) {                                                                             // 1623
                    reject(error);                                                                                   // 1624
                });                                                                                                  // 1625
            });                                                                                                      // 1626
        })["catch"](reject);                                                                                         // 1627
    });                                                                                                              // 1628
                                                                                                                     // 1629
    executeCallback(promise, callback);                                                                              // 1630
    return promise;                                                                                                  // 1631
}                                                                                                                    // 1632
                                                                                                                     // 1633
function keys$1(callback) {                                                                                          // 1634
    var self = this;                                                                                                 // 1635
                                                                                                                     // 1636
    var promise = new Promise$1(function (resolve, reject) {                                                         // 1637
        self.ready().then(function () {                                                                              // 1638
            var dbInfo = self._dbInfo;                                                                               // 1639
            dbInfo.db.transaction(function (t) {                                                                     // 1640
                t.executeSql('SELECT key FROM ' + dbInfo.storeName, [], function (t, results) {                      // 1641
                    var keys = [];                                                                                   // 1642
                                                                                                                     // 1643
                    for (var i = 0; i < results.rows.length; i++) {                                                  // 1644
                        keys.push(results.rows.item(i).key);                                                         // 1645
                    }                                                                                                // 1646
                                                                                                                     // 1647
                    resolve(keys);                                                                                   // 1648
                }, function (t, error) {                                                                             // 1649
                                                                                                                     // 1650
                    reject(error);                                                                                   // 1651
                });                                                                                                  // 1652
            });                                                                                                      // 1653
        })["catch"](reject);                                                                                         // 1654
    });                                                                                                              // 1655
                                                                                                                     // 1656
    executeCallback(promise, callback);                                                                              // 1657
    return promise;                                                                                                  // 1658
}                                                                                                                    // 1659
                                                                                                                     // 1660
var webSQLStorage = {                                                                                                // 1661
    _driver: 'webSQLStorage',                                                                                        // 1662
    _initStorage: _initStorage$1,                                                                                    // 1663
    iterate: iterate$1,                                                                                              // 1664
    getItem: getItem$1,                                                                                              // 1665
    setItem: setItem$1,                                                                                              // 1666
    removeItem: removeItem$1,                                                                                        // 1667
    clear: clear$1,                                                                                                  // 1668
    length: length$1,                                                                                                // 1669
    key: key$1,                                                                                                      // 1670
    keys: keys$1                                                                                                     // 1671
};                                                                                                                   // 1672
                                                                                                                     // 1673
// Config the localStorage backend, using options set in the config.                                                 // 1674
function _initStorage$2(options) {                                                                                   // 1675
    var self = this;                                                                                                 // 1676
    var dbInfo = {};                                                                                                 // 1677
    if (options) {                                                                                                   // 1678
        for (var i in options) {                                                                                     // 1679
            dbInfo[i] = options[i];                                                                                  // 1680
        }                                                                                                            // 1681
    }                                                                                                                // 1682
                                                                                                                     // 1683
    dbInfo.keyPrefix = dbInfo.name + '/';                                                                            // 1684
                                                                                                                     // 1685
    if (dbInfo.storeName !== self._defaultConfig.storeName) {                                                        // 1686
        dbInfo.keyPrefix += dbInfo.storeName + '/';                                                                  // 1687
    }                                                                                                                // 1688
                                                                                                                     // 1689
    self._dbInfo = dbInfo;                                                                                           // 1690
    dbInfo.serializer = localforageSerializer;                                                                       // 1691
                                                                                                                     // 1692
    return Promise$1.resolve();                                                                                      // 1693
}                                                                                                                    // 1694
                                                                                                                     // 1695
// Remove all keys from the datastore, effectively destroying all data in                                            // 1696
// the app's key/value store!                                                                                        // 1697
function clear$2(callback) {                                                                                         // 1698
    var self = this;                                                                                                 // 1699
    var promise = self.ready().then(function () {                                                                    // 1700
        var keyPrefix = self._dbInfo.keyPrefix;                                                                      // 1701
                                                                                                                     // 1702
        for (var i = localStorage.length - 1; i >= 0; i--) {                                                         // 1703
            var key = localStorage.key(i);                                                                           // 1704
                                                                                                                     // 1705
            if (key.indexOf(keyPrefix) === 0) {                                                                      // 1706
                localStorage.removeItem(key);                                                                        // 1707
            }                                                                                                        // 1708
        }                                                                                                            // 1709
    });                                                                                                              // 1710
                                                                                                                     // 1711
    executeCallback(promise, callback);                                                                              // 1712
    return promise;                                                                                                  // 1713
}                                                                                                                    // 1714
                                                                                                                     // 1715
// Retrieve an item from the store. Unlike the original async_storage                                                // 1716
// library in Gaia, we don't modify return values at all. If a key's value                                           // 1717
// is `undefined`, we pass that value to the callback function.                                                      // 1718
function getItem$2(key, callback) {                                                                                  // 1719
    var self = this;                                                                                                 // 1720
                                                                                                                     // 1721
    // Cast the key to a string, as that's all we can set as a key.                                                  // 1722
    if (typeof key !== 'string') {                                                                                   // 1723
        console.warn(key + ' used as a key, but it is not a string.');                                               // 1724
        key = String(key);                                                                                           // 1725
    }                                                                                                                // 1726
                                                                                                                     // 1727
    var promise = self.ready().then(function () {                                                                    // 1728
        var dbInfo = self._dbInfo;                                                                                   // 1729
        var result = localStorage.getItem(dbInfo.keyPrefix + key);                                                   // 1730
                                                                                                                     // 1731
        // If a result was found, parse it from the serialized                                                       // 1732
        // string into a JS object. If result isn't truthy, the key                                                  // 1733
        // is likely undefined and we'll pass it straight to the                                                     // 1734
        // callback.                                                                                                 // 1735
        if (result) {                                                                                                // 1736
            result = dbInfo.serializer.deserialize(result);                                                          // 1737
        }                                                                                                            // 1738
                                                                                                                     // 1739
        return result;                                                                                               // 1740
    });                                                                                                              // 1741
                                                                                                                     // 1742
    executeCallback(promise, callback);                                                                              // 1743
    return promise;                                                                                                  // 1744
}                                                                                                                    // 1745
                                                                                                                     // 1746
// Iterate over all items in the store.                                                                              // 1747
function iterate$2(iterator, callback) {                                                                             // 1748
    var self = this;                                                                                                 // 1749
                                                                                                                     // 1750
    var promise = self.ready().then(function () {                                                                    // 1751
        var dbInfo = self._dbInfo;                                                                                   // 1752
        var keyPrefix = dbInfo.keyPrefix;                                                                            // 1753
        var keyPrefixLength = keyPrefix.length;                                                                      // 1754
        var length = localStorage.length;                                                                            // 1755
                                                                                                                     // 1756
        // We use a dedicated iterator instead of the `i` variable below                                             // 1757
        // so other keys we fetch in localStorage aren't counted in                                                  // 1758
        // the `iterationNumber` argument passed to the `iterate()`                                                  // 1759
        // callback.                                                                                                 // 1760
        //                                                                                                           // 1761
        // See: github.com/mozilla/localForage/pull/435#discussion_r38061530                                         // 1762
        var iterationNumber = 1;                                                                                     // 1763
                                                                                                                     // 1764
        for (var i = 0; i < length; i++) {                                                                           // 1765
            var key = localStorage.key(i);                                                                           // 1766
            if (key.indexOf(keyPrefix) !== 0) {                                                                      // 1767
                continue;                                                                                            // 1768
            }                                                                                                        // 1769
            var value = localStorage.getItem(key);                                                                   // 1770
                                                                                                                     // 1771
            // If a result was found, parse it from the serialized                                                   // 1772
            // string into a JS object. If result isn't truthy, the                                                  // 1773
            // key is likely undefined and we'll pass it straight                                                    // 1774
            // to the iterator.                                                                                      // 1775
            if (value) {                                                                                             // 1776
                value = dbInfo.serializer.deserialize(value);                                                        // 1777
            }                                                                                                        // 1778
                                                                                                                     // 1779
            value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);                              // 1780
                                                                                                                     // 1781
            if (value !== void 0) {                                                                                  // 1782
                return value;                                                                                        // 1783
            }                                                                                                        // 1784
        }                                                                                                            // 1785
    });                                                                                                              // 1786
                                                                                                                     // 1787
    executeCallback(promise, callback);                                                                              // 1788
    return promise;                                                                                                  // 1789
}                                                                                                                    // 1790
                                                                                                                     // 1791
// Same as localStorage's key() method, except takes a callback.                                                     // 1792
function key$2(n, callback) {                                                                                        // 1793
    var self = this;                                                                                                 // 1794
    var promise = self.ready().then(function () {                                                                    // 1795
        var dbInfo = self._dbInfo;                                                                                   // 1796
        var result;                                                                                                  // 1797
        try {                                                                                                        // 1798
            result = localStorage.key(n);                                                                            // 1799
        } catch (error) {                                                                                            // 1800
            result = null;                                                                                           // 1801
        }                                                                                                            // 1802
                                                                                                                     // 1803
        // Remove the prefix from the key, if a key is found.                                                        // 1804
        if (result) {                                                                                                // 1805
            result = result.substring(dbInfo.keyPrefix.length);                                                      // 1806
        }                                                                                                            // 1807
                                                                                                                     // 1808
        return result;                                                                                               // 1809
    });                                                                                                              // 1810
                                                                                                                     // 1811
    executeCallback(promise, callback);                                                                              // 1812
    return promise;                                                                                                  // 1813
}                                                                                                                    // 1814
                                                                                                                     // 1815
function keys$2(callback) {                                                                                          // 1816
    var self = this;                                                                                                 // 1817
    var promise = self.ready().then(function () {                                                                    // 1818
        var dbInfo = self._dbInfo;                                                                                   // 1819
        var length = localStorage.length;                                                                            // 1820
        var keys = [];                                                                                               // 1821
                                                                                                                     // 1822
        for (var i = 0; i < length; i++) {                                                                           // 1823
            if (localStorage.key(i).indexOf(dbInfo.keyPrefix) === 0) {                                               // 1824
                keys.push(localStorage.key(i).substring(dbInfo.keyPrefix.length));                                   // 1825
            }                                                                                                        // 1826
        }                                                                                                            // 1827
                                                                                                                     // 1828
        return keys;                                                                                                 // 1829
    });                                                                                                              // 1830
                                                                                                                     // 1831
    executeCallback(promise, callback);                                                                              // 1832
    return promise;                                                                                                  // 1833
}                                                                                                                    // 1834
                                                                                                                     // 1835
// Supply the number of keys in the datastore to the callback function.                                              // 1836
function length$2(callback) {                                                                                        // 1837
    var self = this;                                                                                                 // 1838
    var promise = self.keys().then(function (keys) {                                                                 // 1839
        return keys.length;                                                                                          // 1840
    });                                                                                                              // 1841
                                                                                                                     // 1842
    executeCallback(promise, callback);                                                                              // 1843
    return promise;                                                                                                  // 1844
}                                                                                                                    // 1845
                                                                                                                     // 1846
// Remove an item from the store, nice and simple.                                                                   // 1847
function removeItem$2(key, callback) {                                                                               // 1848
    var self = this;                                                                                                 // 1849
                                                                                                                     // 1850
    // Cast the key to a string, as that's all we can set as a key.                                                  // 1851
    if (typeof key !== 'string') {                                                                                   // 1852
        console.warn(key + ' used as a key, but it is not a string.');                                               // 1853
        key = String(key);                                                                                           // 1854
    }                                                                                                                // 1855
                                                                                                                     // 1856
    var promise = self.ready().then(function () {                                                                    // 1857
        var dbInfo = self._dbInfo;                                                                                   // 1858
        localStorage.removeItem(dbInfo.keyPrefix + key);                                                             // 1859
    });                                                                                                              // 1860
                                                                                                                     // 1861
    executeCallback(promise, callback);                                                                              // 1862
    return promise;                                                                                                  // 1863
}                                                                                                                    // 1864
                                                                                                                     // 1865
// Set a key's value and run an optional callback once the value is set.                                             // 1866
// Unlike Gaia's implementation, the callback function is passed the value,                                          // 1867
// in case you want to operate on that value only after you're sure it                                               // 1868
// saved, or something like that.                                                                                    // 1869
function setItem$2(key, value, callback) {                                                                           // 1870
    var self = this;                                                                                                 // 1871
                                                                                                                     // 1872
    // Cast the key to a string, as that's all we can set as a key.                                                  // 1873
    if (typeof key !== 'string') {                                                                                   // 1874
        console.warn(key + ' used as a key, but it is not a string.');                                               // 1875
        key = String(key);                                                                                           // 1876
    }                                                                                                                // 1877
                                                                                                                     // 1878
    var promise = self.ready().then(function () {                                                                    // 1879
        // Convert undefined values to null.                                                                         // 1880
        // https://github.com/mozilla/localForage/pull/42                                                            // 1881
        if (value === undefined) {                                                                                   // 1882
            value = null;                                                                                            // 1883
        }                                                                                                            // 1884
                                                                                                                     // 1885
        // Save the original value to pass to the callback.                                                          // 1886
        var originalValue = value;                                                                                   // 1887
                                                                                                                     // 1888
        return new Promise$1(function (resolve, reject) {                                                            // 1889
            var dbInfo = self._dbInfo;                                                                               // 1890
            dbInfo.serializer.serialize(value, function (value, error) {                                             // 1891
                if (error) {                                                                                         // 1892
                    reject(error);                                                                                   // 1893
                } else {                                                                                             // 1894
                    try {                                                                                            // 1895
                        localStorage.setItem(dbInfo.keyPrefix + key, value);                                         // 1896
                        resolve(originalValue);                                                                      // 1897
                    } catch (e) {                                                                                    // 1898
                        // localStorage capacity exceeded.                                                           // 1899
                        // TODO: Make this a specific error/event.                                                   // 1900
                        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {            // 1901
                            reject(e);                                                                               // 1902
                        }                                                                                            // 1903
                        reject(e);                                                                                   // 1904
                    }                                                                                                // 1905
                }                                                                                                    // 1906
            });                                                                                                      // 1907
        });                                                                                                          // 1908
    });                                                                                                              // 1909
                                                                                                                     // 1910
    executeCallback(promise, callback);                                                                              // 1911
    return promise;                                                                                                  // 1912
}                                                                                                                    // 1913
                                                                                                                     // 1914
var localStorageWrapper = {                                                                                          // 1915
    _driver: 'localStorageWrapper',                                                                                  // 1916
    _initStorage: _initStorage$2,                                                                                    // 1917
    // Default API, from Gaia/localStorage.                                                                          // 1918
    iterate: iterate$2,                                                                                              // 1919
    getItem: getItem$2,                                                                                              // 1920
    setItem: setItem$2,                                                                                              // 1921
    removeItem: removeItem$2,                                                                                        // 1922
    clear: clear$2,                                                                                                  // 1923
    length: length$2,                                                                                                // 1924
    key: key$2,                                                                                                      // 1925
    keys: keys$2                                                                                                     // 1926
};                                                                                                                   // 1927
                                                                                                                     // 1928
function executeTwoCallbacks(promise, callback, errorCallback) {                                                     // 1929
    if (typeof callback === 'function') {                                                                            // 1930
        promise.then(callback);                                                                                      // 1931
    }                                                                                                                // 1932
                                                                                                                     // 1933
    if (typeof errorCallback === 'function') {                                                                       // 1934
        promise["catch"](errorCallback);                                                                             // 1935
    }                                                                                                                // 1936
}                                                                                                                    // 1937
                                                                                                                     // 1938
// Custom drivers are stored here when `defineDriver()` is called.                                                   // 1939
// They are shared across all instances of localForage.                                                              // 1940
var CustomDrivers = {};                                                                                              // 1941
                                                                                                                     // 1942
var DriverType = {                                                                                                   // 1943
    INDEXEDDB: 'asyncStorage',                                                                                       // 1944
    LOCALSTORAGE: 'localStorageWrapper',                                                                             // 1945
    WEBSQL: 'webSQLStorage'                                                                                          // 1946
};                                                                                                                   // 1947
                                                                                                                     // 1948
var DefaultDriverOrder = [DriverType.INDEXEDDB, DriverType.WEBSQL, DriverType.LOCALSTORAGE];                         // 1949
                                                                                                                     // 1950
var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'];              // 1951
                                                                                                                     // 1952
var DefaultConfig = {                                                                                                // 1953
    description: '',                                                                                                 // 1954
    driver: DefaultDriverOrder.slice(),                                                                              // 1955
    name: 'localforage',                                                                                             // 1956
    // Default DB size is _JUST UNDER_ 5MB, as it's the highest size                                                 // 1957
    // we can use without a prompt.                                                                                  // 1958
    size: 4980736,                                                                                                   // 1959
    storeName: 'keyvaluepairs',                                                                                      // 1960
    version: 1.0                                                                                                     // 1961
};                                                                                                                   // 1962
                                                                                                                     // 1963
var driverSupport = {};                                                                                              // 1964
// Check to see if IndexedDB is available and if it is the latest                                                    // 1965
// implementation; it's our preferred backend library. We use "_spec_test"                                           // 1966
// as the name of the database because it's not the one we'll operate on,                                            // 1967
// but it's useful to make sure its using the right spec.                                                            // 1968
// See: https://github.com/mozilla/localForage/issues/128                                                            // 1969
driverSupport[DriverType.INDEXEDDB] = isIndexedDBValid();                                                            // 1970
                                                                                                                     // 1971
driverSupport[DriverType.WEBSQL] = isWebSQLValid();                                                                  // 1972
                                                                                                                     // 1973
driverSupport[DriverType.LOCALSTORAGE] = isLocalStorageValid();                                                      // 1974
                                                                                                                     // 1975
var isArray = Array.isArray || function (arg) {                                                                      // 1976
    return Object.prototype.toString.call(arg) === '[object Array]';                                                 // 1977
};                                                                                                                   // 1978
                                                                                                                     // 1979
function callWhenReady(localForageInstance, libraryMethod) {                                                         // 1980
    localForageInstance[libraryMethod] = function () {                                                               // 1981
        var _args = arguments;                                                                                       // 1982
        return localForageInstance.ready().then(function () {                                                        // 1983
            return localForageInstance[libraryMethod].apply(localForageInstance, _args);                             // 1984
        });                                                                                                          // 1985
    };                                                                                                               // 1986
}                                                                                                                    // 1987
                                                                                                                     // 1988
function extend() {                                                                                                  // 1989
    for (var i = 1; i < arguments.length; i++) {                                                                     // 1990
        var arg = arguments[i];                                                                                      // 1991
                                                                                                                     // 1992
        if (arg) {                                                                                                   // 1993
            for (var key in arg) {                                                                                   // 1994
                if (arg.hasOwnProperty(key)) {                                                                       // 1995
                    if (isArray(arg[key])) {                                                                         // 1996
                        arguments[0][key] = arg[key].slice();                                                        // 1997
                    } else {                                                                                         // 1998
                        arguments[0][key] = arg[key];                                                                // 1999
                    }                                                                                                // 2000
                }                                                                                                    // 2001
            }                                                                                                        // 2002
        }                                                                                                            // 2003
    }                                                                                                                // 2004
                                                                                                                     // 2005
    return arguments[0];                                                                                             // 2006
}                                                                                                                    // 2007
                                                                                                                     // 2008
function isLibraryDriver(driverName) {                                                                               // 2009
    for (var driver in DriverType) {                                                                                 // 2010
        if (DriverType.hasOwnProperty(driver) && DriverType[driver] === driverName) {                                // 2011
            return true;                                                                                             // 2012
        }                                                                                                            // 2013
    }                                                                                                                // 2014
                                                                                                                     // 2015
    return false;                                                                                                    // 2016
}                                                                                                                    // 2017
                                                                                                                     // 2018
var LocalForage = function () {                                                                                      // 2019
    function LocalForage(options) {                                                                                  // 2020
        _classCallCheck(this, LocalForage);                                                                          // 2021
                                                                                                                     // 2022
        this.INDEXEDDB = DriverType.INDEXEDDB;                                                                       // 2023
        this.LOCALSTORAGE = DriverType.LOCALSTORAGE;                                                                 // 2024
        this.WEBSQL = DriverType.WEBSQL;                                                                             // 2025
                                                                                                                     // 2026
        this._defaultConfig = extend({}, DefaultConfig);                                                             // 2027
        this._config = extend({}, this._defaultConfig, options);                                                     // 2028
        this._driverSet = null;                                                                                      // 2029
        this._initDriver = null;                                                                                     // 2030
        this._ready = false;                                                                                         // 2031
        this._dbInfo = null;                                                                                         // 2032
                                                                                                                     // 2033
        this._wrapLibraryMethodsWithReady();                                                                         // 2034
        this.setDriver(this._config.driver);                                                                         // 2035
    }                                                                                                                // 2036
                                                                                                                     // 2037
    // Set any config values for localForage; can be called anytime before                                           // 2038
    // the first API call (e.g. `getItem`, `setItem`).                                                               // 2039
    // We loop through options so we don't overwrite existing config                                                 // 2040
    // values.                                                                                                       // 2041
                                                                                                                     // 2042
                                                                                                                     // 2043
    LocalForage.prototype.config = function config(options) {                                                        // 2044
        // If the options argument is an object, we use it to set values.                                            // 2045
        // Otherwise, we return either a specified config value or all                                               // 2046
        // config values.                                                                                            // 2047
        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {                        // 2048
            // If localforage is ready and fully initialized, we can't set                                           // 2049
            // any new configuration values. Instead, we return an error.                                            // 2050
            if (this._ready) {                                                                                       // 2051
                return new Error("Can't call config() after localforage " + 'has been used.');                       // 2052
            }                                                                                                        // 2053
                                                                                                                     // 2054
            for (var i in options) {                                                                                 // 2055
                if (i === 'storeName') {                                                                             // 2056
                    options[i] = options[i].replace(/\W/g, '_');                                                     // 2057
                }                                                                                                    // 2058
                                                                                                                     // 2059
                this._config[i] = options[i];                                                                        // 2060
            }                                                                                                        // 2061
                                                                                                                     // 2062
            // after all config options are set and                                                                  // 2063
            // the driver option is used, try setting it                                                             // 2064
            if ('driver' in options && options.driver) {                                                             // 2065
                this.setDriver(this._config.driver);                                                                 // 2066
            }                                                                                                        // 2067
                                                                                                                     // 2068
            return true;                                                                                             // 2069
        } else if (typeof options === 'string') {                                                                    // 2070
            return this._config[options];                                                                            // 2071
        } else {                                                                                                     // 2072
            return this._config;                                                                                     // 2073
        }                                                                                                            // 2074
    };                                                                                                               // 2075
                                                                                                                     // 2076
    // Used to define a custom driver, shared across all instances of                                                // 2077
    // localForage.                                                                                                  // 2078
                                                                                                                     // 2079
                                                                                                                     // 2080
    LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {              // 2081
        var promise = new Promise$1(function (resolve, reject) {                                                     // 2082
            try {                                                                                                    // 2083
                var driverName = driverObject._driver;                                                               // 2084
                var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver');
                var namingError = new Error('Custom driver name already in use: ' + driverObject._driver);           // 2086
                                                                                                                     // 2087
                // A driver name should be defined and not overlap with the                                          // 2088
                // library-defined, default drivers.                                                                 // 2089
                if (!driverObject._driver) {                                                                         // 2090
                    reject(complianceError);                                                                         // 2091
                    return;                                                                                          // 2092
                }                                                                                                    // 2093
                if (isLibraryDriver(driverObject._driver)) {                                                         // 2094
                    reject(namingError);                                                                             // 2095
                    return;                                                                                          // 2096
                }                                                                                                    // 2097
                                                                                                                     // 2098
                var customDriverMethods = LibraryMethods.concat('_initStorage');                                     // 2099
                for (var i = 0; i < customDriverMethods.length; i++) {                                               // 2100
                    var customDriverMethod = customDriverMethods[i];                                                 // 2101
                    if (!customDriverMethod || !driverObject[customDriverMethod] || typeof driverObject[customDriverMethod] !== 'function') {
                        reject(complianceError);                                                                     // 2103
                        return;                                                                                      // 2104
                    }                                                                                                // 2105
                }                                                                                                    // 2106
                                                                                                                     // 2107
                var supportPromise = Promise$1.resolve(true);                                                        // 2108
                if ('_support' in driverObject) {                                                                    // 2109
                    if (driverObject._support && typeof driverObject._support === 'function') {                      // 2110
                        supportPromise = driverObject._support();                                                    // 2111
                    } else {                                                                                         // 2112
                        supportPromise = Promise$1.resolve(!!driverObject._support);                                 // 2113
                    }                                                                                                // 2114
                }                                                                                                    // 2115
                                                                                                                     // 2116
                supportPromise.then(function (supportResult) {                                                       // 2117
                    driverSupport[driverName] = supportResult;                                                       // 2118
                    CustomDrivers[driverName] = driverObject;                                                        // 2119
                    resolve();                                                                                       // 2120
                }, reject);                                                                                          // 2121
            } catch (e) {                                                                                            // 2122
                reject(e);                                                                                           // 2123
            }                                                                                                        // 2124
        });                                                                                                          // 2125
                                                                                                                     // 2126
        executeTwoCallbacks(promise, callback, errorCallback);                                                       // 2127
        return promise;                                                                                              // 2128
    };                                                                                                               // 2129
                                                                                                                     // 2130
    LocalForage.prototype.driver = function driver() {                                                               // 2131
        return this._driver || null;                                                                                 // 2132
    };                                                                                                               // 2133
                                                                                                                     // 2134
    LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {                      // 2135
        var self = this;                                                                                             // 2136
        var getDriverPromise = Promise$1.resolve().then(function () {                                                // 2137
            if (isLibraryDriver(driverName)) {                                                                       // 2138
                switch (driverName) {                                                                                // 2139
                    case self.INDEXEDDB:                                                                             // 2140
                        return asyncStorage;                                                                         // 2141
                    case self.LOCALSTORAGE:                                                                          // 2142
                        return localStorageWrapper;                                                                  // 2143
                    case self.WEBSQL:                                                                                // 2144
                        return webSQLStorage;                                                                        // 2145
                }                                                                                                    // 2146
            } else if (CustomDrivers[driverName]) {                                                                  // 2147
                return CustomDrivers[driverName];                                                                    // 2148
            } else {                                                                                                 // 2149
                throw new Error('Driver not found.');                                                                // 2150
            }                                                                                                        // 2151
        });                                                                                                          // 2152
        executeTwoCallbacks(getDriverPromise, callback, errorCallback);                                              // 2153
        return getDriverPromise;                                                                                     // 2154
    };                                                                                                               // 2155
                                                                                                                     // 2156
    LocalForage.prototype.getSerializer = function getSerializer(callback) {                                         // 2157
        var serializerPromise = Promise$1.resolve(localforageSerializer);                                            // 2158
        executeTwoCallbacks(serializerPromise, callback);                                                            // 2159
        return serializerPromise;                                                                                    // 2160
    };                                                                                                               // 2161
                                                                                                                     // 2162
    LocalForage.prototype.ready = function ready(callback) {                                                         // 2163
        var self = this;                                                                                             // 2164
                                                                                                                     // 2165
        var promise = self._driverSet.then(function () {                                                             // 2166
            if (self._ready === null) {                                                                              // 2167
                self._ready = self._initDriver();                                                                    // 2168
            }                                                                                                        // 2169
                                                                                                                     // 2170
            return self._ready;                                                                                      // 2171
        });                                                                                                          // 2172
                                                                                                                     // 2173
        executeTwoCallbacks(promise, callback, callback);                                                            // 2174
        return promise;                                                                                              // 2175
    };                                                                                                               // 2176
                                                                                                                     // 2177
    LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {                         // 2178
        var self = this;                                                                                             // 2179
                                                                                                                     // 2180
        if (!isArray(drivers)) {                                                                                     // 2181
            drivers = [drivers];                                                                                     // 2182
        }                                                                                                            // 2183
                                                                                                                     // 2184
        var supportedDrivers = this._getSupportedDrivers(drivers);                                                   // 2185
                                                                                                                     // 2186
        function setDriverToConfig() {                                                                               // 2187
            self._config.driver = self.driver();                                                                     // 2188
        }                                                                                                            // 2189
                                                                                                                     // 2190
        function initDriver(supportedDrivers) {                                                                      // 2191
            return function () {                                                                                     // 2192
                var currentDriverIndex = 0;                                                                          // 2193
                                                                                                                     // 2194
                function driverPromiseLoop() {                                                                       // 2195
                    while (currentDriverIndex < supportedDrivers.length) {                                           // 2196
                        var driverName = supportedDrivers[currentDriverIndex];                                       // 2197
                        currentDriverIndex++;                                                                        // 2198
                                                                                                                     // 2199
                        self._dbInfo = null;                                                                         // 2200
                        self._ready = null;                                                                          // 2201
                                                                                                                     // 2202
                        return self.getDriver(driverName).then(function (driver) {                                   // 2203
                            self._extend(driver);                                                                    // 2204
                            setDriverToConfig();                                                                     // 2205
                                                                                                                     // 2206
                            self._ready = self._initStorage(self._config);                                           // 2207
                            return self._ready;                                                                      // 2208
                        })["catch"](driverPromiseLoop);                                                              // 2209
                    }                                                                                                // 2210
                                                                                                                     // 2211
                    setDriverToConfig();                                                                             // 2212
                    var error = new Error('No available storage method found.');                                     // 2213
                    self._driverSet = Promise$1.reject(error);                                                       // 2214
                    return self._driverSet;                                                                          // 2215
                }                                                                                                    // 2216
                                                                                                                     // 2217
                return driverPromiseLoop();                                                                          // 2218
            };                                                                                                       // 2219
        }                                                                                                            // 2220
                                                                                                                     // 2221
        // There might be a driver initialization in progress                                                        // 2222
        // so wait for it to finish in order to avoid a possible                                                     // 2223
        // race condition to set _dbInfo                                                                             // 2224
        var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function () {                     // 2225
            return Promise$1.resolve();                                                                              // 2226
        }) : Promise$1.resolve();                                                                                    // 2227
                                                                                                                     // 2228
        this._driverSet = oldDriverSetDone.then(function () {                                                        // 2229
            var driverName = supportedDrivers[0];                                                                    // 2230
            self._dbInfo = null;                                                                                     // 2231
            self._ready = null;                                                                                      // 2232
                                                                                                                     // 2233
            return self.getDriver(driverName).then(function (driver) {                                               // 2234
                self._driver = driver._driver;                                                                       // 2235
                setDriverToConfig();                                                                                 // 2236
                self._wrapLibraryMethodsWithReady();                                                                 // 2237
                self._initDriver = initDriver(supportedDrivers);                                                     // 2238
            });                                                                                                      // 2239
        })["catch"](function () {                                                                                    // 2240
            setDriverToConfig();                                                                                     // 2241
            var error = new Error('No available storage method found.');                                             // 2242
            self._driverSet = Promise$1.reject(error);                                                               // 2243
            return self._driverSet;                                                                                  // 2244
        });                                                                                                          // 2245
                                                                                                                     // 2246
        executeTwoCallbacks(this._driverSet, callback, errorCallback);                                               // 2247
        return this._driverSet;                                                                                      // 2248
    };                                                                                                               // 2249
                                                                                                                     // 2250
    LocalForage.prototype.supports = function supports(driverName) {                                                 // 2251
        return !!driverSupport[driverName];                                                                          // 2252
    };                                                                                                               // 2253
                                                                                                                     // 2254
    LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {                                  // 2255
        extend(this, libraryMethodsAndProperties);                                                                   // 2256
    };                                                                                                               // 2257
                                                                                                                     // 2258
    LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {                            // 2259
        var supportedDrivers = [];                                                                                   // 2260
        for (var i = 0, len = drivers.length; i < len; i++) {                                                        // 2261
            var driverName = drivers[i];                                                                             // 2262
            if (this.supports(driverName)) {                                                                         // 2263
                supportedDrivers.push(driverName);                                                                   // 2264
            }                                                                                                        // 2265
        }                                                                                                            // 2266
        return supportedDrivers;                                                                                     // 2267
    };                                                                                                               // 2268
                                                                                                                     // 2269
    LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {                   // 2270
        // Add a stub for each driver API method that delays the call to the                                         // 2271
        // corresponding driver method until localForage is ready. These stubs                                       // 2272
        // will be replaced by the driver methods as soon as the driver is                                           // 2273
        // loaded, so there is no performance impact.                                                                // 2274
        for (var i = 0; i < LibraryMethods.length; i++) {                                                            // 2275
            callWhenReady(this, LibraryMethods[i]);                                                                  // 2276
        }                                                                                                            // 2277
    };                                                                                                               // 2278
                                                                                                                     // 2279
    LocalForage.prototype.createInstance = function createInstance(options) {                                        // 2280
        return new LocalForage(options);                                                                             // 2281
    };                                                                                                               // 2282
                                                                                                                     // 2283
    return LocalForage;                                                                                              // 2284
}();                                                                                                                 // 2285
                                                                                                                     // 2286
// The actual localForage object that we expose as a module or via a                                                 // 2287
// global. It's extended by pulling in one of our other libraries.                                                   // 2288
                                                                                                                     // 2289
                                                                                                                     // 2290
var localforage_js = new LocalForage();                                                                              // 2291
                                                                                                                     // 2292
module.exports = localforage_js;                                                                                     // 2293
                                                                                                                     // 2294
},{"3":3}]},{},[4])(4)                                                                                               // 2295
});                                                                                                                  // 2296
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".info",
    ".coffee"
  ]
});
require("./node_modules/meteor/rocketchat:lib/lib/core.js");
require("./node_modules/meteor/rocketchat:lib/lib/getURL.js");
require("./node_modules/meteor/rocketchat:lib/lib/settings.js");
require("./node_modules/meteor/rocketchat:lib/lib/callbacks.js");
require("./node_modules/meteor/rocketchat:lib/lib/fileUploadRestrictions.js");
require("./node_modules/meteor/rocketchat:lib/lib/placeholders.js");
require("./node_modules/meteor/rocketchat:lib/lib/promises.js");
require("./node_modules/meteor/rocketchat:lib/lib/roomTypesCommon.js");
require("./node_modules/meteor/rocketchat:lib/lib/slashCommand.js");
require("./node_modules/meteor/rocketchat:lib/lib/Message.js");
require("./node_modules/meteor/rocketchat:lib/lib/MessageTypes.js");
require("./node_modules/meteor/rocketchat:lib/lib/startup/settingsOnLoadSiteUrl.js");
require("./node_modules/meteor/rocketchat:lib/client/Notifications.js");
require("./node_modules/meteor/rocketchat:lib/client/OAuthProxy.js");
require("./node_modules/meteor/rocketchat:lib/client/lib/TabBar.js");
require("./node_modules/meteor/rocketchat:lib/client/lib/RocketChatTabBar.js");
require("./node_modules/meteor/rocketchat:lib/client/lib/cachedCollection.js");
require("./node_modules/meteor/rocketchat:lib/client/lib/openRoom.js");
require("./node_modules/meteor/rocketchat:lib/client/lib/roomExit.js");
require("./node_modules/meteor/rocketchat:lib/client/lib/settings.js");
require("./node_modules/meteor/rocketchat:lib/client/lib/roomTypes.js");
require("./node_modules/meteor/rocketchat:lib/client/lib/userRoles.js");
require("./node_modules/meteor/rocketchat:lib/client/lib/Layout.js");
require("./node_modules/meteor/rocketchat:lib/client/methods/sendMessage.js");
require("./node_modules/meteor/rocketchat:lib/client/AdminBox.js");
require("./node_modules/meteor/rocketchat:lib/client/MessageAction.js");
require("./node_modules/meteor/rocketchat:lib/client/defaultTabBars.js");
require("./node_modules/meteor/rocketchat:lib/client/CustomTranslations.js");
require("./node_modules/meteor/rocketchat:lib/client/models/_Base.js");
require("./node_modules/meteor/rocketchat:lib/client/models/Uploads.js");
require("./node_modules/meteor/rocketchat:lib/client/views/template.customFieldsForm.js");
require("./node_modules/meteor/rocketchat:lib/client/views/customFieldsForm.js");
require("./node_modules/meteor/rocketchat:lib/startup/defaultRoomTypes.js");
require("./node_modules/meteor/rocketchat:lib/rocketchat.info.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['rocketchat:lib'] = {}, {
  RocketChat: RocketChat,
  RocketChatTabBar: RocketChatTabBar
});

})();
