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
var DDPCommon = Package['ddp-common'].DDPCommon;
var check = Package.check.check;
var Match = Package.check.Match;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

/* Package-scope variables */
var EV, self, Streamer;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:streamer":{"lib":{"ev.js":function(require){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rocketchat_streamer/lib/ev.js                                                                           //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                             //
                                                                                                                    //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                    //
                                                                                                                    //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                   //
                                                                                                                    //
/* globals EV:true */ /* exported EV */EV = function () {                                                           // 1
	function EV() {                                                                                                    // 5
		(0, _classCallCheck3.default)(this, EV);                                                                          // 5
		this.handlers = {};                                                                                               // 6
	}                                                                                                                  // 7
                                                                                                                    //
	EV.prototype.emit = function () {                                                                                  // 4
		function emit(event) {                                                                                            // 4
			var _this = this;                                                                                                // 9
                                                                                                                    //
			for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {        // 9
				args[_key - 1] = arguments[_key];                                                                               // 9
			}                                                                                                                // 9
                                                                                                                    //
			if (this.handlers[event]) {                                                                                      // 10
				this.handlers[event].forEach(function (handler) {                                                               // 11
					return handler.apply(_this, args);                                                                             // 11
				});                                                                                                             // 11
			}                                                                                                                // 12
		}                                                                                                                 // 13
                                                                                                                    //
		return emit;                                                                                                      // 4
	}();                                                                                                               // 4
                                                                                                                    //
	EV.prototype.emitWithScope = function () {                                                                         // 4
		function emitWithScope(event, scope) {                                                                            // 4
			for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
				args[_key2 - 2] = arguments[_key2];                                                                             // 15
			}                                                                                                                // 15
                                                                                                                    //
			if (this.handlers[event]) {                                                                                      // 16
				this.handlers[event].forEach(function (handler) {                                                               // 17
					return handler.apply(scope, args);                                                                             // 17
				});                                                                                                             // 17
			}                                                                                                                // 18
		}                                                                                                                 // 19
                                                                                                                    //
		return emitWithScope;                                                                                             // 4
	}();                                                                                                               // 4
                                                                                                                    //
	EV.prototype.on = function () {                                                                                    // 4
		function on(event, callback) {                                                                                    // 4
			if (!this.handlers[event]) {                                                                                     // 22
				this.handlers[event] = [];                                                                                      // 23
			}                                                                                                                // 24
                                                                                                                    //
			this.handlers[event].push(callback);                                                                             // 25
		}                                                                                                                 // 26
                                                                                                                    //
		return on;                                                                                                        // 4
	}();                                                                                                               // 4
                                                                                                                    //
	EV.prototype.once = function () {                                                                                  // 4
		function once(event, callback) {                                                                                  // 4
			self = this;                                                                                                     // 29
			self.on(event, function () {                                                                                     // 30
				function onetimeCallback() {                                                                                    // 30
					callback.apply(this, arguments);                                                                               // 31
					self.removeListener(event, onetimeCallback);                                                                   // 32
				}                                                                                                               // 33
                                                                                                                    //
				return onetimeCallback;                                                                                         // 30
			}());                                                                                                            // 30
		}                                                                                                                 // 34
                                                                                                                    //
		return once;                                                                                                      // 4
	}();                                                                                                               // 4
                                                                                                                    //
	EV.prototype.removeListener = function () {                                                                        // 4
		function removeListener(event, callback) {                                                                        // 4
			if (this.handlers[event]) {                                                                                      // 37
				var index = this.handlers[event].indexOf(callback);                                                             // 38
                                                                                                                    //
				if (index > -1) {                                                                                               // 39
					this.handlers[event].splice(index, 1);                                                                         // 40
				}                                                                                                               // 41
			}                                                                                                                // 42
		}                                                                                                                 // 43
                                                                                                                    //
		return removeListener;                                                                                            // 4
	}();                                                                                                               // 4
                                                                                                                    //
	EV.prototype.removeAllListeners = function () {                                                                    // 4
		function removeAllListeners(event) {                                                                              // 4
			this.handlers[event] = undefined;                                                                                // 46
		}                                                                                                                 // 47
                                                                                                                    //
		return removeAllListeners;                                                                                        // 4
	}();                                                                                                               // 4
                                                                                                                    //
	return EV;                                                                                                         // 4
}();                                                                                                                // 4
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"client":{"client.js":function(require){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rocketchat_streamer/client/client.js                                                                    //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _createClass2 = require("babel-runtime/helpers/createClass");                                                   //
                                                                                                                    //
var _createClass3 = _interopRequireDefault(_createClass2);                                                          //
                                                                                                                    //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                             //
                                                                                                                    //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                    //
                                                                                                                    //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                       //
                                                                                                                    //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                              //
                                                                                                                    //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                         //
                                                                                                                    //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                //
                                                                                                                    //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                   //
                                                                                                                    //
/* globals DDPCommon, EV */ /* eslint-disable new-cap */var NonEmptyString = Match.Where(function (x) {             // 1
	check(x, String);                                                                                                  // 5
	return x.length > 0;                                                                                               // 6
});                                                                                                                 // 7
                                                                                                                    //
var StreamerCentral = function (_EV) {                                                                              //
	(0, _inherits3.default)(StreamerCentral, _EV);                                                                     //
                                                                                                                    //
	function StreamerCentral() {                                                                                       // 10
		(0, _classCallCheck3.default)(this, StreamerCentral);                                                             // 10
                                                                                                                    //
		var _this = (0, _possibleConstructorReturn3.default)(this, _EV.call(this));                                       // 10
                                                                                                                    //
		_this.instances = {};                                                                                             // 13
		_this.ddpConnections = {}; // since each Streamer instance can provide its own ddp connection, store them by streamer name
                                                                                                                    //
		return _this;                                                                                                     // 10
	}                                                                                                                  // 16
                                                                                                                    //
	StreamerCentral.prototype.setupDdpConnection = function () {                                                       //
		function setupDdpConnection(name, ddpConnection) {                                                                //
			var _this2 = this;                                                                                               // 18
                                                                                                                    //
			// make sure we only setup event listeners for each ddp connection once                                          // 19
			if (ddpConnection.hasMeteorStreamerEventListeners) {                                                             // 20
				return;                                                                                                         // 21
			}                                                                                                                // 22
                                                                                                                    //
			ddpConnection._stream.on('message', function (raw_msg) {                                                         // 23
				var msg = DDPCommon.parseDDP(raw_msg);                                                                          // 24
                                                                                                                    //
				if (msg && msg.msg === 'changed' && msg.collection && msg.fields && msg.fields.eventName && msg.fields.args) {  // 25
					msg.fields.args.unshift(msg.fields.eventName);                                                                 // 26
					msg.fields.args.unshift(msg.collection);                                                                       // 27
                                                                                                                    //
					_this2.emit.apply(_this2, msg.fields.args);                                                                    // 28
				}                                                                                                               // 29
			}); // store ddp connection                                                                                      // 30
                                                                                                                    //
                                                                                                                    //
			this.storeDdpConnection(name, ddpConnection);                                                                    // 32
		}                                                                                                                 // 34
                                                                                                                    //
		return setupDdpConnection;                                                                                        //
	}();                                                                                                               //
                                                                                                                    //
	StreamerCentral.prototype.storeDdpConnection = function () {                                                       //
		function storeDdpConnection(name, ddpConnection) {                                                                //
			// mark the connection as setup for Streamer, and store it                                                       // 37
			ddpConnection.hasMeteorStreamerEventListeners = true;                                                            // 38
			this.ddpConnections[name] = ddpConnection;                                                                       // 39
		}                                                                                                                 // 40
                                                                                                                    //
		return storeDdpConnection;                                                                                        //
	}();                                                                                                               //
                                                                                                                    //
	return StreamerCentral;                                                                                            //
}(EV);                                                                                                              //
                                                                                                                    //
Meteor.StreamerCentral = new StreamerCentral();                                                                     // 43
                                                                                                                    //
Meteor.Streamer = function (_EV2) {                                                                                 // 45
	(0, _inherits3.default)(Streamer, _EV2);                                                                           // 45
                                                                                                                    //
	function Streamer(name) {                                                                                          // 46
		var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},                                // 46
		    _ref$useCollection = _ref.useCollection,                                                                      // 46
		    useCollection = _ref$useCollection === undefined ? false : _ref$useCollection,                                // 46
		    _ref$ddpConnection = _ref.ddpConnection,                                                                      // 46
		    ddpConnection = _ref$ddpConnection === undefined ? Meteor.connection : _ref$ddpConnection;                    // 46
                                                                                                                    //
		(0, _classCallCheck3.default)(this, Streamer);                                                                    // 46
                                                                                                                    //
		if (Meteor.StreamerCentral.instances[name]) {                                                                     // 47
			var _ret;                                                                                                        // 47
                                                                                                                    //
			console.warn('Streamer instance already exists:', name);                                                         // 48
			return _ret = Meteor.StreamerCentral.instances[name], (0, _possibleConstructorReturn3.default)(_this3, _ret);    // 49
		}                                                                                                                 // 50
                                                                                                                    //
		Meteor.StreamerCentral.setupDdpConnection(name, ddpConnection);                                                   // 51
                                                                                                                    //
		var _this3 = (0, _possibleConstructorReturn3.default)(this, _EV2.call(this));                                     // 46
                                                                                                                    //
		_this3.ddpConnection = ddpConnection || Meteor.connection;                                                        // 55
		Meteor.StreamerCentral.instances[name] = _this3;                                                                  // 57
		_this3.name = name;                                                                                               // 59
		_this3.useCollection = useCollection;                                                                             // 60
		_this3.subscriptions = {};                                                                                        // 61
		Meteor.StreamerCentral.on(_this3.subscriptionName, function (eventName) {                                         // 63
			for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {        // 63
				args[_key - 1] = arguments[_key];                                                                               // 63
			}                                                                                                                // 63
                                                                                                                    //
			if (_this3.subscriptions[eventName]) {                                                                           // 64
				var _EV2$prototype$emit;                                                                                        // 64
                                                                                                                    //
				_this3.subscriptions[eventName].lastMessage = args;                                                             // 65
                                                                                                                    //
				(_EV2$prototype$emit = _EV2.prototype.emit).call.apply(_EV2$prototype$emit, [_this3, eventName].concat(args));  // 66
			}                                                                                                                // 67
		});                                                                                                               // 68
                                                                                                                    //
		_this3.ddpConnection._stream.on('reset', function () {                                                            // 70
			_EV2.prototype.emit.call(_this3, '__reconnect__');                                                               // 71
		});                                                                                                               // 72
                                                                                                                    //
		return _this3;                                                                                                    // 46
	}                                                                                                                  // 73
                                                                                                                    //
	Streamer.prototype.stop = function () {                                                                            // 45
		function stop(eventName) {                                                                                        // 45
			if (this.subscriptions[eventName] && this.subscriptions[eventName].subscription) {                               // 98
				this.subscriptions[eventName].subscription.stop();                                                              // 99
			}                                                                                                                // 100
                                                                                                                    //
			this.unsubscribe(eventName);                                                                                     // 101
		}                                                                                                                 // 102
                                                                                                                    //
		return stop;                                                                                                      // 45
	}();                                                                                                               // 45
                                                                                                                    //
	Streamer.prototype.stopAll = function () {                                                                         // 45
		function stopAll() {                                                                                              // 45
			for (var eventName in meteorBabelHelpers.sanitizeForInObject(this.subscriptions)) {                              // 105
				if (this.subscriptions.hasOwnProperty(eventName)) {                                                             // 106
					this.stop(eventName);                                                                                          // 107
				}                                                                                                               // 108
			}                                                                                                                // 109
		}                                                                                                                 // 110
                                                                                                                    //
		return stopAll;                                                                                                   // 45
	}();                                                                                                               // 45
                                                                                                                    //
	Streamer.prototype.unsubscribe = function () {                                                                     // 45
		function unsubscribe(eventName) {                                                                                 // 45
			this.removeAllListeners(eventName);                                                                              // 113
			delete this.subscriptions[eventName];                                                                            // 114
		}                                                                                                                 // 115
                                                                                                                    //
		return unsubscribe;                                                                                               // 45
	}();                                                                                                               // 45
                                                                                                                    //
	Streamer.prototype.subscribe = function () {                                                                       // 45
		function subscribe(eventName) {                                                                                   // 45
			var _this4 = this;                                                                                               // 117
                                                                                                                    //
			var subscribe = void 0;                                                                                          // 118
			Tracker.nonreactive(function () {                                                                                // 119
				subscribe = _this4.ddpConnection.subscribe(_this4.subscriptionName, eventName, _this4.useCollection, {          // 120
					onStop: function () {                                                                                          // 121
						_this4.unsubscribe(eventName);                                                                                // 122
					}                                                                                                              // 123
				});                                                                                                             // 120
			});                                                                                                              // 125
			return subscribe;                                                                                                // 126
		}                                                                                                                 // 127
                                                                                                                    //
		return subscribe;                                                                                                 // 45
	}();                                                                                                               // 45
                                                                                                                    //
	Streamer.prototype.onReconnect = function () {                                                                     // 45
		function onReconnect(fn) {                                                                                        // 45
			if (typeof fn === 'function') {                                                                                  // 130
				_EV2.prototype.on.call(this, '__reconnect__', fn);                                                              // 131
			}                                                                                                                // 132
		}                                                                                                                 // 133
                                                                                                                    //
		return onReconnect;                                                                                               // 45
	}();                                                                                                               // 45
                                                                                                                    //
	Streamer.prototype.getLastMessageFromEvent = function () {                                                         // 45
		function getLastMessageFromEvent(eventName) {                                                                     // 45
			var subscription = this.subscriptions[eventName];                                                                // 136
                                                                                                                    //
			if (subscription && subscription.lastMessage) {                                                                  // 137
				return subscription.lastMessage;                                                                                // 138
			}                                                                                                                // 139
		}                                                                                                                 // 140
                                                                                                                    //
		return getLastMessageFromEvent;                                                                                   // 45
	}();                                                                                                               // 45
                                                                                                                    //
	Streamer.prototype.once = function () {                                                                            // 45
		function once(eventName, callback) {                                                                              // 45
			check(eventName, NonEmptyString);                                                                                // 143
			check(callback, Function);                                                                                       // 144
                                                                                                                    //
			if (!this.subscriptions[eventName]) {                                                                            // 146
				this.subscriptions[eventName] = {                                                                               // 147
					subscription: this.subscribe(eventName)                                                                        // 148
				};                                                                                                              // 147
			}                                                                                                                // 150
                                                                                                                    //
			_EV2.prototype.once.call(this, eventName, callback);                                                             // 152
		}                                                                                                                 // 153
                                                                                                                    //
		return once;                                                                                                      // 45
	}();                                                                                                               // 45
                                                                                                                    //
	Streamer.prototype.on = function () {                                                                              // 45
		function on(eventName, callback) {                                                                                // 45
			check(eventName, NonEmptyString);                                                                                // 156
			check(callback, Function);                                                                                       // 157
                                                                                                                    //
			if (!this.subscriptions[eventName]) {                                                                            // 159
				this.subscriptions[eventName] = {                                                                               // 160
					subscription: this.subscribe(eventName)                                                                        // 161
				};                                                                                                              // 160
			}                                                                                                                // 163
                                                                                                                    //
			_EV2.prototype.on.call(this, eventName, callback);                                                               // 165
		}                                                                                                                 // 166
                                                                                                                    //
		return on;                                                                                                        // 45
	}();                                                                                                               // 45
                                                                                                                    //
	Streamer.prototype.emit = function () {                                                                            // 45
		function emit() {                                                                                                 // 45
			var _ddpConnection;                                                                                              // 168
                                                                                                                    //
			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {                     // 168
				args[_key2] = arguments[_key2];                                                                                 // 168
			}                                                                                                                // 168
                                                                                                                    //
			(_ddpConnection = this.ddpConnection).call.apply(_ddpConnection, [this.subscriptionName].concat(args));          // 169
		}                                                                                                                 // 170
                                                                                                                    //
		return emit;                                                                                                      // 45
	}();                                                                                                               // 45
                                                                                                                    //
	(0, _createClass3.default)(Streamer, [{                                                                            // 45
		key: "name",                                                                                                      // 45
		get: function () {                                                                                                // 45
			return this._name;                                                                                               // 76
		},                                                                                                                // 77
		set: function (name) {                                                                                            // 45
			check(name, String);                                                                                             // 80
			this._name = name;                                                                                               // 81
		}                                                                                                                 // 82
	}, {                                                                                                               // 45
		key: "subscriptionName",                                                                                          // 45
		get: function () {                                                                                                // 45
			return "stream-" + this.name;                                                                                    // 85
		}                                                                                                                 // 86
	}, {                                                                                                               // 45
		key: "useCollection",                                                                                             // 45
		get: function () {                                                                                                // 45
			return this._useCollection;                                                                                      // 89
		},                                                                                                                // 90
		set: function (useCollection) {                                                                                   // 45
			check(useCollection, Boolean);                                                                                   // 93
			this._useCollection = useCollection;                                                                             // 94
		}                                                                                                                 // 95
	}]);                                                                                                               // 45
	return Streamer;                                                                                                   // 45
}(EV);                                                                                                              // 45
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:streamer/lib/ev.js");
require("./node_modules/meteor/rocketchat:streamer/client/client.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['rocketchat:streamer'] = {}, {
  Streamer: Streamer
});

})();
