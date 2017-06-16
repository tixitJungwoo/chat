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
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var Template = Package['templating-runtime'].Template;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:otr":{"client":{"rocketchat.otr.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_otr/client/rocketchat.otr.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
var OTR = function () {                                                                                                //
	function OTR() {                                                                                                      // 2
		(0, _classCallCheck3.default)(this, OTR);                                                                            // 2
		this.enabled = new ReactiveVar(false);                                                                               // 3
		this.instancesByRoomId = {};                                                                                         // 4
	}                                                                                                                     // 5
                                                                                                                       //
	OTR.prototype.isEnabled = function () {                                                                               //
		function isEnabled() {                                                                                               //
			return this.enabled.get();                                                                                          // 8
		}                                                                                                                    // 9
                                                                                                                       //
		return isEnabled;                                                                                                    //
	}();                                                                                                                  //
                                                                                                                       //
	OTR.prototype.getInstanceByRoomId = function () {                                                                     //
		function getInstanceByRoomId(roomId) {                                                                               //
			if (!this.enabled.get()) {                                                                                          // 12
				return;                                                                                                            // 13
			}                                                                                                                   // 14
                                                                                                                       //
			if (this.instancesByRoomId[roomId]) {                                                                               // 16
				return this.instancesByRoomId[roomId];                                                                             // 17
			}                                                                                                                   // 18
                                                                                                                       //
			var subscription = RocketChat.models.Subscriptions.findOne({                                                        // 20
				rid: roomId                                                                                                        // 21
			});                                                                                                                 // 20
                                                                                                                       //
			if (!subscription || subscription.t !== 'd') {                                                                      // 24
				return;                                                                                                            // 25
			}                                                                                                                   // 26
                                                                                                                       //
			this.instancesByRoomId[roomId] = new RocketChat.OTR.Room(Meteor.userId(), roomId);                                  // 28
			return this.instancesByRoomId[roomId];                                                                              // 29
		}                                                                                                                    // 30
                                                                                                                       //
		return getInstanceByRoomId;                                                                                          //
	}();                                                                                                                  //
                                                                                                                       //
	return OTR;                                                                                                           //
}();                                                                                                                   //
                                                                                                                       //
RocketChat.OTR = new OTR();                                                                                            // 33
Meteor.startup(function () {                                                                                           // 35
	Tracker.autorun(function () {                                                                                         // 36
		if (Meteor.userId()) {                                                                                               // 37
			RocketChat.Notifications.onUser('otr', function (type, data) {                                                      // 38
				if (!data.roomId || !data.userId || data.userId === Meteor.userId()) {                                             // 39
					return;                                                                                                           // 40
				} else {                                                                                                           // 41
					RocketChat.OTR.getInstanceByRoomId(data.roomId).onUserStream(type, data);                                         // 42
				}                                                                                                                  // 43
			});                                                                                                                 // 44
		}                                                                                                                    // 45
	});                                                                                                                   // 46
	RocketChat.promises.add('onClientBeforeSendMessage', function (message) {                                             // 48
		if (message.rid && RocketChat.OTR.getInstanceByRoomId(message.rid) && RocketChat.OTR.getInstanceByRoomId(message.rid).established.get()) {
			return RocketChat.OTR.getInstanceByRoomId(message.rid).encrypt(message).then(function (msg) {                       // 50
				message.msg = msg;                                                                                                 // 52
				message.t = 'otr';                                                                                                 // 53
				return message;                                                                                                    // 54
			});                                                                                                                 // 55
		} else {                                                                                                             // 56
			return Promise.resolve(message);                                                                                    // 57
		}                                                                                                                    // 58
	}, RocketChat.promises.priority.HIGH);                                                                                // 59
	RocketChat.promises.add('onClientMessageReceived', function (message) {                                               // 61
		if (message.rid && RocketChat.OTR.getInstanceByRoomId(message.rid) && RocketChat.OTR.getInstanceByRoomId(message.rid).established.get()) {
			if (message.notification) {                                                                                         // 63
				message.msg = t('Encrypted_message');                                                                              // 64
				return Promise.resolve(message);                                                                                   // 65
			} else {                                                                                                            // 66
				var otrRoom = RocketChat.OTR.getInstanceByRoomId(message.rid);                                                     // 67
				return otrRoom.decrypt(message.msg).then(function (data) {                                                         // 68
					var _id = data._id,                                                                                               // 69
					    text = data.text,                                                                                             // 69
					    ack = data.ack;                                                                                               // 69
					message._id = _id;                                                                                                // 71
					message.msg = text;                                                                                               // 72
                                                                                                                       //
					if (data.ts) {                                                                                                    // 74
						message.ts = data.ts;                                                                                            // 75
					}                                                                                                                 // 76
                                                                                                                       //
					if (message.otrAck) {                                                                                             // 78
						return otrRoom.decrypt(message.otrAck).then(function (data) {                                                    // 79
							if (ack === data.text) {                                                                                        // 81
								message.t = 'otr-ack';                                                                                         // 82
							}                                                                                                               // 83
                                                                                                                       //
							return message;                                                                                                 // 84
						});                                                                                                              // 85
					} else if (data.userId !== Meteor.userId()) {                                                                     // 86
						return otrRoom.encryptText(ack).then(function (ack) {                                                            // 87
							Meteor.call('updateOTRAck', message._id, ack);                                                                  // 89
							return message;                                                                                                 // 90
						});                                                                                                              // 91
					} else {                                                                                                          // 92
						return message;                                                                                                  // 93
					}                                                                                                                 // 94
				});                                                                                                                // 95
			}                                                                                                                   // 96
		} else {                                                                                                             // 97
			if (message.t === 'otr') {                                                                                          // 98
				message.msg = '';                                                                                                  // 99
			}                                                                                                                   // 100
                                                                                                                       //
			return Promise.resolve(message);                                                                                    // 101
		}                                                                                                                    // 102
	}, RocketChat.promises.priority.HIGH);                                                                                // 103
});                                                                                                                    // 104
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"rocketchat.otr.room.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_otr/client/rocketchat.otr.room.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
var toastr = void 0;                                                                                                   // 1
module.watch(require("toastr"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		toastr = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
                                                                                                                       //
/* globals crypto */RocketChat.OTR.Room = function () {                                                                // 2
	function _class(userId, roomId) {                                                                                     // 5
		(0, _classCallCheck3.default)(this, _class);                                                                         // 5
		this.userId = userId;                                                                                                // 6
		this.roomId = roomId;                                                                                                // 7
		this.peerId = roomId.replace(userId, '');                                                                            // 8
		this.established = new ReactiveVar(false);                                                                           // 9
		this.establishing = new ReactiveVar(false);                                                                          // 10
		this.userOnlineComputation = null;                                                                                   // 12
		this.keyPair = null;                                                                                                 // 14
		this.exportedPublicKey = null;                                                                                       // 15
		this.sessionKey = null;                                                                                              // 16
	}                                                                                                                     // 17
                                                                                                                       //
	_class.prototype.handshake = function () {                                                                            // 4
		function handshake(refresh) {                                                                                        // 4
			var _this = this;                                                                                                   // 19
                                                                                                                       //
			this.establishing.set(true);                                                                                        // 20
			this.firstPeer = true;                                                                                              // 21
			this.generateKeyPair().then(function () {                                                                           // 22
				RocketChat.Notifications.notifyUser(_this.peerId, 'otr', 'handshake', {                                            // 23
					roomId: _this.roomId,                                                                                             // 23
					userId: _this.userId,                                                                                             // 23
					publicKey: EJSON.stringify(_this.exportedPublicKey),                                                              // 23
					refresh: refresh                                                                                                  // 23
				});                                                                                                                // 23
			});                                                                                                                 // 24
		}                                                                                                                    // 25
                                                                                                                       //
		return handshake;                                                                                                    // 4
	}();                                                                                                                  // 4
                                                                                                                       //
	_class.prototype.acknowledge = function () {                                                                          // 4
		function acknowledge() {                                                                                             // 4
			RocketChat.Notifications.notifyUser(this.peerId, 'otr', 'acknowledge', {                                            // 28
				roomId: this.roomId,                                                                                               // 28
				userId: this.userId,                                                                                               // 28
				publicKey: EJSON.stringify(this.exportedPublicKey)                                                                 // 28
			});                                                                                                                 // 28
		}                                                                                                                    // 29
                                                                                                                       //
		return acknowledge;                                                                                                  // 4
	}();                                                                                                                  // 4
                                                                                                                       //
	_class.prototype.deny = function () {                                                                                 // 4
		function deny() {                                                                                                    // 4
			this.reset();                                                                                                       // 32
			RocketChat.Notifications.notifyUser(this.peerId, 'otr', 'deny', {                                                   // 33
				roomId: this.roomId,                                                                                               // 33
				userId: this.userId                                                                                                // 33
			});                                                                                                                 // 33
		}                                                                                                                    // 34
                                                                                                                       //
		return deny;                                                                                                         // 4
	}();                                                                                                                  // 4
                                                                                                                       //
	_class.prototype.end = function () {                                                                                  // 4
		function end() {                                                                                                     // 4
			this.reset();                                                                                                       // 37
			RocketChat.Notifications.notifyUser(this.peerId, 'otr', 'end', {                                                    // 38
				roomId: this.roomId,                                                                                               // 38
				userId: this.userId                                                                                                // 38
			});                                                                                                                 // 38
		}                                                                                                                    // 39
                                                                                                                       //
		return end;                                                                                                          // 4
	}();                                                                                                                  // 4
                                                                                                                       //
	_class.prototype.reset = function () {                                                                                // 4
		function reset() {                                                                                                   // 4
			this.establishing.set(false);                                                                                       // 42
			this.established.set(false);                                                                                        // 43
			this.keyPair = null;                                                                                                // 44
			this.exportedPublicKey = null;                                                                                      // 45
			this.sessionKey = null;                                                                                             // 46
			Meteor.call('deleteOldOTRMessages', this.roomId);                                                                   // 47
		}                                                                                                                    // 48
                                                                                                                       //
		return reset;                                                                                                        // 4
	}();                                                                                                                  // 4
                                                                                                                       //
	_class.prototype.generateKeyPair = function () {                                                                      // 4
		function generateKeyPair() {                                                                                         // 4
			var _this2 = this;                                                                                                  // 50
                                                                                                                       //
			if (this.userOnlineComputation) {                                                                                   // 51
				this.userOnlineComputation.stop();                                                                                 // 52
			}                                                                                                                   // 53
                                                                                                                       //
			this.userOnlineComputation = Tracker.autorun(function () {                                                          // 55
				var $room = $("#chat-window-" + _this2.roomId);                                                                    // 56
				var $title = $('.fixed-title h2', $room);                                                                          // 57
                                                                                                                       //
				if (_this2.established.get()) {                                                                                    // 58
					if ($room.length && $title.length && !$('.otr-icon', $title).length) {                                            // 59
						$title.prepend('<i class=\'otr-icon icon-key\'></i>');                                                           // 60
						$('.input-message-container').addClass('otr');                                                                   // 61
						$('.inner-right-toolbar').prepend('<i class=\'otr-icon icon-key\'></i>');                                        // 62
					}                                                                                                                 // 63
				} else if ($title.length) {                                                                                        // 64
					$('.otr-icon', $title).remove();                                                                                  // 65
					$('.input-message-container').removeClass('otr');                                                                 // 66
					$('.inner-right-toolbar .otr-icon').remove();                                                                     // 67
				}                                                                                                                  // 68
			}); // Generate an ephemeral key pair.                                                                              // 69
                                                                                                                       //
			return RocketChat.OTR.crypto.generateKey({                                                                          // 72
				name: 'ECDH',                                                                                                      // 73
				namedCurve: 'P-256'                                                                                                // 74
			}, false, ['deriveKey', 'deriveBits']).then(function (keyPair) {                                                    // 72
				_this2.keyPair = keyPair;                                                                                          // 77
				return RocketChat.OTR.crypto.exportKey('jwk', keyPair.publicKey);                                                  // 78
			}).then(function (exportedPublicKey) {                                                                              // 79
				_this2.exportedPublicKey = exportedPublicKey; // Once we have generated new keys, it's safe to delete old messages
                                                                                                                       //
				Meteor.call('deleteOldOTRMessages', _this2.roomId);                                                                // 84
			}).catch(function (e) {                                                                                             // 85
				toastr.error(e);                                                                                                   // 87
			});                                                                                                                 // 88
		}                                                                                                                    // 89
                                                                                                                       //
		return generateKeyPair;                                                                                              // 4
	}();                                                                                                                  // 4
                                                                                                                       //
	_class.prototype.importPublicKey = function () {                                                                      // 4
		function importPublicKey(publicKey) {                                                                                // 4
			var _this3 = this;                                                                                                  // 91
                                                                                                                       //
			return RocketChat.OTR.crypto.importKey('jwk', EJSON.parse(publicKey), {                                             // 92
				name: 'ECDH',                                                                                                      // 93
				namedCurve: 'P-256'                                                                                                // 94
			}, false, []).then(function (peerPublicKey) {                                                                       // 92
				return RocketChat.OTR.crypto.deriveBits({                                                                          // 96
					name: 'ECDH',                                                                                                     // 97
					namedCurve: 'P-256',                                                                                              // 98
					"public": peerPublicKey                                                                                           // 99
				}, _this3.keyPair.privateKey, 256);                                                                                // 96
			}).then(function (bits) {                                                                                           // 101
				return RocketChat.OTR.crypto.digest({                                                                              // 102
					name: 'SHA-256'                                                                                                   // 103
				}, bits);                                                                                                          // 102
			}).then(function (hashedBits) {                                                                                     // 105
				// We truncate the hash to 128 bits.                                                                               // 106
				var sessionKeyData = new Uint8Array(hashedBits).slice(0, 16);                                                      // 107
				return RocketChat.OTR.crypto.importKey('raw', sessionKeyData, {                                                    // 108
					name: 'AES-GCM'                                                                                                   // 109
				}, false, ['encrypt', 'decrypt']);                                                                                 // 108
			}).then(function (sessionKey) {                                                                                     // 111
				// Session key available.                                                                                          // 112
				_this3.sessionKey = sessionKey;                                                                                    // 113
			});                                                                                                                 // 114
		}                                                                                                                    // 115
                                                                                                                       //
		return importPublicKey;                                                                                              // 4
	}();                                                                                                                  // 4
                                                                                                                       //
	_class.prototype.encryptText = function () {                                                                          // 4
		function encryptText(data) {                                                                                         // 4
			if (!_.isObject(data)) {                                                                                            // 118
				data = new TextEncoder('UTF-8').encode(EJSON.stringify({                                                           // 119
					text: data,                                                                                                       // 119
					ack: Random.id((Random.fraction() + 1) * 20)                                                                      // 119
				}));                                                                                                               // 119
			}                                                                                                                   // 120
                                                                                                                       //
			var iv = crypto.getRandomValues(new Uint8Array(12));                                                                // 121
			return RocketChat.OTR.crypto.encrypt({                                                                              // 123
				name: 'AES-GCM',                                                                                                   // 124
				iv: iv                                                                                                             // 125
			}, this.sessionKey, data).then(function (cipherText) {                                                              // 123
				cipherText = new Uint8Array(cipherText);                                                                           // 127
				var output = new Uint8Array(iv.length + cipherText.length);                                                        // 128
				output.set(iv, 0);                                                                                                 // 129
				output.set(cipherText, iv.length);                                                                                 // 130
				return EJSON.stringify(output);                                                                                    // 131
			}).catch(function () {                                                                                              // 132
				throw new Meteor.Error('encryption-error', 'Encryption error.');                                                   // 133
			});                                                                                                                 // 134
		}                                                                                                                    // 135
                                                                                                                       //
		return encryptText;                                                                                                  // 4
	}();                                                                                                                  // 4
                                                                                                                       //
	_class.prototype.encrypt = function () {                                                                              // 4
		function encrypt(message) {                                                                                          // 4
			var ts = void 0;                                                                                                    // 138
                                                                                                                       //
			if (isNaN(TimeSync.serverOffset())) {                                                                               // 139
				ts = new Date();                                                                                                   // 140
			} else {                                                                                                            // 141
				ts = new Date(Date.now() + TimeSync.serverOffset());                                                               // 142
			}                                                                                                                   // 143
                                                                                                                       //
			var data = new TextEncoder('UTF-8').encode(EJSON.stringify({                                                        // 145
				_id: message._id,                                                                                                  // 146
				text: message.msg,                                                                                                 // 147
				userId: this.userId,                                                                                               // 148
				ack: Random.id((Random.fraction() + 1) * 20),                                                                      // 149
				ts: ts                                                                                                             // 150
			}));                                                                                                                // 145
			var enc = this.encryptText(data);                                                                                   // 152
			return enc;                                                                                                         // 153
		}                                                                                                                    // 154
                                                                                                                       //
		return encrypt;                                                                                                      // 4
	}();                                                                                                                  // 4
                                                                                                                       //
	_class.prototype.decrypt = function () {                                                                              // 4
		function decrypt(message) {                                                                                          // 4
			var cipherText = EJSON.parse(message);                                                                              // 157
			var iv = cipherText.slice(0, 12);                                                                                   // 158
			cipherText = cipherText.slice(12);                                                                                  // 159
			return RocketChat.OTR.crypto.decrypt({                                                                              // 161
				name: 'AES-GCM',                                                                                                   // 162
				iv: iv                                                                                                             // 163
			}, this.sessionKey, cipherText).then(function (data) {                                                              // 161
				data = EJSON.parse(new TextDecoder('UTF-8').decode(new Uint8Array(data)));                                         // 166
				return data;                                                                                                       // 167
			}).catch(function (e) {                                                                                             // 168
				toastr.error(e);                                                                                                   // 170
				return message;                                                                                                    // 171
			});                                                                                                                 // 172
		}                                                                                                                    // 173
                                                                                                                       //
		return decrypt;                                                                                                      // 4
	}();                                                                                                                  // 4
                                                                                                                       //
	_class.prototype.onUserStream = function () {                                                                         // 4
		function onUserStream(type, data) {                                                                                  // 4
			var _this4 = this;                                                                                                  // 175
                                                                                                                       //
			var user = Meteor.users.findOne(data.userId);                                                                       // 176
                                                                                                                       //
			switch (type) {                                                                                                     // 177
				case 'handshake':                                                                                                  // 178
					var timeout = null;                                                                                               // 179
                                                                                                                       //
					var establishConnection = function () {                                                                           // 181
						_this4.establishing.set(true);                                                                                   // 182
                                                                                                                       //
						Meteor.clearTimeout(timeout);                                                                                    // 183
                                                                                                                       //
						_this4.generateKeyPair().then(function () {                                                                      // 184
							_this4.importPublicKey(data.publicKey).then(function () {                                                       // 185
								_this4.firstPeer = false;                                                                                      // 186
								FlowRouter.goToRoomById(data.roomId);                                                                          // 187
								Meteor.defer(function () {                                                                                     // 188
									_this4.established.set(true);                                                                                 // 189
                                                                                                                       //
									_this4.acknowledge();                                                                                         // 190
								});                                                                                                            // 191
							});                                                                                                             // 192
						});                                                                                                              // 193
					};                                                                                                                // 194
                                                                                                                       //
					if (data.refresh && this.established.get()) {                                                                     // 196
						this.reset();                                                                                                    // 197
						establishConnection();                                                                                           // 198
					} else {                                                                                                          // 199
						if (this.established.get()) {                                                                                    // 200
							this.reset();                                                                                                   // 201
						}                                                                                                                // 202
                                                                                                                       //
						swal({                                                                                                           // 204
							title: "<i class='icon-key alert-icon success-color'></i>" + TAPi18n.__('OTR'),                                 // 205
							text: TAPi18n.__('Username_wants_to_start_otr_Do_you_want_to_accept', {                                         // 206
								username: user.username                                                                                        // 206
							}),                                                                                                             // 206
							html: true,                                                                                                     // 207
							showCancelButton: true,                                                                                         // 208
							allowOutsideClick: false,                                                                                       // 209
							confirmButtonText: TAPi18n.__('Yes'),                                                                           // 210
							cancelButtonText: TAPi18n.__('No')                                                                              // 211
						}, function (isConfirm) {                                                                                        // 204
							if (isConfirm) {                                                                                                // 213
								establishConnection();                                                                                         // 214
							} else {                                                                                                        // 215
								Meteor.clearTimeout(timeout);                                                                                  // 216
                                                                                                                       //
								_this4.deny();                                                                                                 // 217
							}                                                                                                               // 218
						});                                                                                                              // 219
					}                                                                                                                 // 220
                                                                                                                       //
					timeout = Meteor.setTimeout(function () {                                                                         // 222
						_this4.establishing.set(false);                                                                                  // 223
                                                                                                                       //
						swal.close();                                                                                                    // 224
					}, 10000);                                                                                                        // 225
					break;                                                                                                            // 227
                                                                                                                       //
				case 'acknowledge':                                                                                                // 229
					this.importPublicKey(data.publicKey).then(function () {                                                           // 230
						_this4.established.set(true);                                                                                    // 231
					});                                                                                                               // 232
					break;                                                                                                            // 233
                                                                                                                       //
				case 'deny':                                                                                                       // 235
					if (this.establishing.get()) {                                                                                    // 236
						this.reset();                                                                                                    // 237
                                                                                                                       //
						var _user = Meteor.users.findOne(this.peerId);                                                                   // 238
                                                                                                                       //
						swal({                                                                                                           // 239
							title: "<i class='icon-key alert-icon success-color'></i>" + TAPi18n.__('OTR'),                                 // 240
							text: TAPi18n.__('Username_denied_the_OTR_session', {                                                           // 241
								username: _user.username                                                                                       // 241
							}),                                                                                                             // 241
							html: true                                                                                                      // 242
						});                                                                                                              // 239
					}                                                                                                                 // 244
                                                                                                                       //
					break;                                                                                                            // 245
                                                                                                                       //
				case 'end':                                                                                                        // 247
					if (this.established.get()) {                                                                                     // 248
						this.reset();                                                                                                    // 249
                                                                                                                       //
						var _user2 = Meteor.users.findOne(this.peerId);                                                                  // 250
                                                                                                                       //
						swal({                                                                                                           // 251
							title: "<i class='icon-key alert-icon success-color'></i>" + TAPi18n.__('OTR'),                                 // 252
							text: TAPi18n.__('Username_ended_the_OTR_session', {                                                            // 253
								username: _user2.username                                                                                      // 253
							}),                                                                                                             // 253
							html: true                                                                                                      // 254
						});                                                                                                              // 251
					}                                                                                                                 // 256
                                                                                                                       //
					break;                                                                                                            // 257
			}                                                                                                                   // 177
		}                                                                                                                    // 259
                                                                                                                       //
		return onUserStream;                                                                                                 // 4
	}();                                                                                                                  // 4
                                                                                                                       //
	return _class;                                                                                                        // 4
}();                                                                                                                   // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"views":{"template.otrFlexTab.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_otr/client/views/template.otrFlexTab.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("otrFlexTab");                                                                                    // 2
Template["otrFlexTab"] = new Template("Template.otrFlexTab", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "content"                                                                                                   // 6
  }, "\n\t\t", HTML.DIV({                                                                                              // 7
    class: "list-view otr"                                                                                             // 8
  }, "\n\t\t\t", HTML.DIV({                                                                                            // 9
    class: "title"                                                                                                     // 10
  }, "\n\t\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                                                         // 11
    return Spacebars.mustache(view.lookup("_"), "Off_the_record_conversation");                                        // 12
  })), "\n\t\t\t"), "\n\t\t\t", Blaze.If(function() {                                                                  // 13
    return Spacebars.call(view.lookup("otrAvailable"));                                                                // 14
  }, function() {                                                                                                      // 15
    return [ "\n\t\t\t\t", HTML.FORM("\n\t\t\t\t\t", HTML.UL({                                                         // 16
      class: "list clearfix"                                                                                           // 17
    }, "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                         // 18
      return Spacebars.call(view.lookup("userIsOnline"));                                                              // 19
    }, function() {                                                                                                    // 20
      return [ "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                               // 21
        return Spacebars.call(view.lookup("established"));                                                             // 22
      }, function() {                                                                                                  // 23
        return [ "\n\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                   // 24
          class: "button refresh"                                                                                      // 25
        }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                               // 26
          return Spacebars.mustache(view.lookup("_"), "Refresh_keys");                                                 // 27
        }))), "\n\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                      // 28
          class: "button end"                                                                                          // 29
        }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                               // 30
          return Spacebars.mustache(view.lookup("_"), "End_OTR");                                                      // 31
        }))), "\n\t\t\t\t\t\t\t" ];                                                                                    // 32
      }, function() {                                                                                                  // 33
        return [ " ", Blaze.If(function() {                                                                            // 34
          return Spacebars.call(view.lookup("establishing"));                                                          // 35
        }, function() {                                                                                                // 36
          return [ "\n\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                           // 37
            return Spacebars.mustache(view.lookup("_"), "Please_wait_while_OTR_is_being_established");                 // 38
          }), "\n\t\t\t\t\t\t\t" ];                                                                                    // 39
        }, function() {                                                                                                // 40
          return [ "\n\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                 // 41
            class: "button start"                                                                                      // 42
          }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                             // 43
            return Spacebars.mustache(view.lookup("_"), "Start_OTR");                                                  // 44
          }))), "\n\t\t\t\t\t\t\t" ];                                                                                  // 45
        }), " " ];                                                                                                     // 46
      }), "\n\t\t\t\t\t\t" ];                                                                                          // 47
    }, function() {                                                                                                    // 48
      return [ "\n\t\t\t\t\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                                         // 49
        return Spacebars.mustache(view.lookup("_"), "OTR_is_only_available_when_both_users_are_online");               // 50
      })), "\n\t\t\t\t\t\t" ];                                                                                         // 51
    }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                  // 52
  }, function() {                                                                                                      // 53
    return [ "\n\t\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                                                 // 54
      return Spacebars.mustache(view.lookup("_"), "Off_the_record_conversation_is_not_available_for_your_browser_or_device");
    })), "\n\t\t\t" ];                                                                                                 // 56
  }), "\n\t\t"), "\n\t");                                                                                              // 57
}));                                                                                                                   // 58
                                                                                                                       // 59
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"otrFlexTab.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_otr/client/views/otrFlexTab.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.otrFlexTab.helpers({                                                                                          // 1
	otrAvailable: function () {                                                                                           // 2
		return RocketChat.OTR && RocketChat.OTR.isEnabled();                                                                 // 3
	},                                                                                                                    // 4
	userIsOnline: function () {                                                                                           // 5
		// I have to appear online for the other user                                                                        // 6
		if (Meteor.user().status === 'offline') {                                                                            // 7
			return false;                                                                                                       // 8
		}                                                                                                                    // 9
                                                                                                                       //
		if (this.rid) {                                                                                                      // 11
			var peerId = this.rid.replace(Meteor.userId(), '');                                                                 // 12
                                                                                                                       //
			if (peerId) {                                                                                                       // 13
				var user = Meteor.users.findOne(peerId);                                                                           // 14
				var online = user && user.status !== 'offline';                                                                    // 15
				return online;                                                                                                     // 16
			}                                                                                                                   // 17
		}                                                                                                                    // 18
	},                                                                                                                    // 19
	established: function () {                                                                                            // 20
		var otr = RocketChat.OTR.getInstanceByRoomId(this.rid);                                                              // 21
		return otr && otr.established.get();                                                                                 // 22
	},                                                                                                                    // 23
	establishing: function () {                                                                                           // 24
		var otr = RocketChat.OTR.getInstanceByRoomId(this.rid);                                                              // 25
		return otr && otr.establishing.get();                                                                                // 26
	}                                                                                                                     // 27
});                                                                                                                    // 1
Template.otrFlexTab.events({                                                                                           // 30
	'click button.start': function (e, t) {                                                                               // 31
		e.preventDefault();                                                                                                  // 32
		var otr = RocketChat.OTR.getInstanceByRoomId(this.rid);                                                              // 33
                                                                                                                       //
		if (otr) {                                                                                                           // 34
			otr.handshake();                                                                                                    // 35
			t.timeout = Meteor.setTimeout(function () {                                                                         // 36
				swal('Timeout', '', 'error');                                                                                      // 37
				otr.establishing.set(false);                                                                                       // 38
			}, 10000);                                                                                                          // 39
		}                                                                                                                    // 40
	},                                                                                                                    // 41
	'click button.refresh': function (e, t) {                                                                             // 42
		e.preventDefault();                                                                                                  // 43
		var otr = RocketChat.OTR.getInstanceByRoomId(this.rid);                                                              // 44
                                                                                                                       //
		if (otr) {                                                                                                           // 45
			otr.reset();                                                                                                        // 46
			otr.handshake(true);                                                                                                // 47
			t.timeout = Meteor.setTimeout(function () {                                                                         // 48
				swal('Timeout', '', 'error');                                                                                      // 49
				otr.establishing.set(false);                                                                                       // 50
			}, 10000);                                                                                                          // 51
		}                                                                                                                    // 52
	},                                                                                                                    // 53
	'click button.end': function (e /*, t*/) {                                                                            // 54
		e.preventDefault();                                                                                                  // 55
		var otr = RocketChat.OTR.getInstanceByRoomId(this.rid);                                                              // 56
                                                                                                                       //
		if (otr) {                                                                                                           // 57
			otr.end();                                                                                                          // 58
		}                                                                                                                    // 59
	}                                                                                                                     // 60
});                                                                                                                    // 30
Template.otrFlexTab.onCreated(function () {                                                                            // 63
	var _this = this;                                                                                                     // 63
                                                                                                                       //
	this.timeout = null;                                                                                                  // 64
	this.autorun(function () {                                                                                            // 65
		var otr = RocketChat.OTR.getInstanceByRoomId(_this.data.rid);                                                        // 66
                                                                                                                       //
		if (otr && otr.established.get()) {                                                                                  // 67
			Meteor.clearTimeout(_this.timeout);                                                                                 // 68
		}                                                                                                                    // 69
	});                                                                                                                   // 70
});                                                                                                                    // 71
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"tabBar.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_otr/client/tabBar.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.startup(function () {                                                                                           // 1
	Tracker.autorun(function () {                                                                                         // 2
		if (RocketChat.settings.get('OTR_Enable') && window.crypto) {                                                        // 3
			RocketChat.OTR.crypto = window.crypto.subtle || window.crypto.webkitSubtle;                                         // 4
			RocketChat.OTR.enabled.set(true);                                                                                   // 5
			RocketChat.TabBar.addButton({                                                                                       // 6
				groups: ['direct'],                                                                                                // 7
				id: 'otr',                                                                                                         // 8
				i18nTitle: 'OTR',                                                                                                  // 9
				icon: 'icon-key',                                                                                                  // 10
				template: 'otrFlexTab',                                                                                            // 11
				order: 11                                                                                                          // 12
			});                                                                                                                 // 6
		} else {                                                                                                             // 14
			RocketChat.OTR.enabled.set(false);                                                                                  // 15
			RocketChat.TabBar.removeButton('otr');                                                                              // 16
		}                                                                                                                    // 17
	});                                                                                                                   // 18
});                                                                                                                    // 19
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".less",
    ".html"
  ]
});
require("./node_modules/meteor/rocketchat:otr/client/rocketchat.otr.js");
require("./node_modules/meteor/rocketchat:otr/client/rocketchat.otr.room.js");
require("./node_modules/meteor/rocketchat:otr/client/views/template.otrFlexTab.js");
require("./node_modules/meteor/rocketchat:otr/client/views/otrFlexTab.js");
require("./node_modules/meteor/rocketchat:otr/client/tabBar.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:otr'] = {};

})();
