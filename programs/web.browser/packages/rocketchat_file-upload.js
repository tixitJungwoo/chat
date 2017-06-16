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
var Slingshot = Package['edgee:slingshot'].Slingshot;
var AWS = Package['peerlibrary:aws-sdk'].AWS;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var Random = Package.random.Random;
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var WebApp = Package.webapp.WebApp;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

/* Package-scope variables */
var FileUpload, FileUploadBase, FileSystemStore, fileUploadHandler;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:file-upload":{"globalFileRestrictions.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/rocketchat_file-upload/globalFileRestrictions.js                                                    //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var filesize = void 0;                                                                                          // 1
module.watch(require("filesize"), {                                                                             // 1
	"default": function (v) {                                                                                      // 1
		filesize = v;                                                                                                 // 1
	}                                                                                                              // 1
}, 0);                                                                                                          // 1
var slingShotConfig = {                                                                                         // 5
	authorize: function (file /*, metaContext*/) {                                                                 // 6
		//Deny uploads if user is not logged in.                                                                      // 7
		if (!this.userId) {                                                                                           // 8
			throw new Meteor.Error('login-required', 'Please login before posting files');                               // 9
		}                                                                                                             // 10
                                                                                                                //
		if (!RocketChat.fileUploadIsValidContentType(file.type)) {                                                    // 12
			throw new Meteor.Error(TAPi18n.__('error-invalid-file-type'));                                               // 13
		}                                                                                                             // 14
                                                                                                                //
		var maxFileSize = RocketChat.settings.get('FileUpload_MaxFileSize');                                          // 16
                                                                                                                //
		if (maxFileSize && maxFileSize < file.size) {                                                                 // 18
			throw new Meteor.Error(TAPi18n.__('File_exceeds_allowed_size_of_bytes', {                                    // 19
				size: filesize(maxFileSize)                                                                                 // 19
			}));                                                                                                         // 19
		}                                                                                                             // 20
                                                                                                                //
		return true;                                                                                                  // 22
	},                                                                                                             // 23
	maxSize: 0,                                                                                                    // 24
	allowedFileTypes: null                                                                                         // 25
};                                                                                                              // 5
Slingshot.fileRestrictions('rocketchat-uploads', slingShotConfig);                                              // 28
Slingshot.fileRestrictions('rocketchat-uploads-gs', slingShotConfig);                                           // 29
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lib":{"FileUpload.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/rocketchat_file-upload/lib/FileUpload.js                                                            //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var filesize = void 0;                                                                                          // 1
module.watch(require("filesize"), {                                                                             // 1
	"default": function (v) {                                                                                      // 1
		filesize = v;                                                                                                 // 1
	}                                                                                                              // 1
}, 0);                                                                                                          // 1
var maxFileSize = 0;                                                                                            // 6
FileUpload = {                                                                                                  // 8
	validateFileUpload: function (file) {                                                                          // 9
		if (!Match.test(file.rid, String)) {                                                                          // 10
			return false;                                                                                                // 11
		}                                                                                                             // 12
                                                                                                                //
		var user = Meteor.user();                                                                                     // 14
		var room = RocketChat.models.Rooms.findOneById(file.rid);                                                     // 15
		var directMessageAllow = RocketChat.settings.get('FileUpload_Enabled_Direct');                                // 16
		var fileUploadAllowed = RocketChat.settings.get('FileUpload_Enabled');                                        // 17
                                                                                                                //
		if (RocketChat.authz.canAccessRoom(room, user) !== true) {                                                    // 19
			return false;                                                                                                // 20
		}                                                                                                             // 21
                                                                                                                //
		if (!fileUploadAllowed) {                                                                                     // 23
			var reason = TAPi18n.__('FileUpload_Disabled', user.language);                                               // 24
                                                                                                                //
			throw new Meteor.Error('error-file-upload-disabled', reason);                                                // 25
		}                                                                                                             // 26
                                                                                                                //
		if (!directMessageAllow && room.t === 'd') {                                                                  // 28
			var _reason = TAPi18n.__('File_not_allowed_direct_messages', user.language);                                 // 29
                                                                                                                //
			throw new Meteor.Error('error-direct-message-file-upload-not-allowed', _reason);                             // 30
		}                                                                                                             // 31
                                                                                                                //
		if (file.size > maxFileSize) {                                                                                // 33
			var _reason2 = TAPi18n.__('File_exceeds_allowed_size_of_bytes', {                                            // 34
				size: filesize(maxFileSize)                                                                                 // 35
			}, user.language);                                                                                           // 34
                                                                                                                //
			throw new Meteor.Error('error-file-too-large', _reason2);                                                    // 37
		}                                                                                                             // 38
                                                                                                                //
		if (parseInt(maxFileSize) > 0) {                                                                              // 40
			if (file.size > maxFileSize) {                                                                               // 41
				var _reason3 = TAPi18n.__('File_exceeds_allowed_size_of_bytes', {                                           // 42
					size: filesize(maxFileSize)                                                                                // 43
				}, user.language);                                                                                          // 42
                                                                                                                //
				throw new Meteor.Error('error-file-too-large', _reason3);                                                   // 45
			}                                                                                                            // 46
		}                                                                                                             // 47
                                                                                                                //
		if (!RocketChat.fileUploadIsValidContentType(file.type)) {                                                    // 49
			var _reason4 = TAPi18n.__('File_type_is_not_accepted', user.language);                                       // 50
                                                                                                                //
			throw new Meteor.Error('error-invalid-file-type', _reason4);                                                 // 51
		}                                                                                                             // 52
                                                                                                                //
		return true;                                                                                                  // 54
	}                                                                                                              // 55
};                                                                                                              // 8
RocketChat.settings.get('FileUpload_MaxFileSize', function (key, value) {                                       // 58
	maxFileSize = value;                                                                                           // 59
});                                                                                                             // 60
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"FileUploadBase.js":function(require){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/rocketchat_file-upload/lib/FileUploadBase.js                                                        //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                         //
                                                                                                                //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                //
                                                                                                                //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }               //
                                                                                                                //
/* globals FileUploadBase:true, UploadFS */ /* exported FileUploadBase */UploadFS.config.defaultStorePermissions = new UploadFS.StorePermissions({
	insert: function (userId /*, doc*/) {                                                                          // 5
		return userId;                                                                                                // 6
	},                                                                                                             // 7
	update: function (userId, doc) {                                                                               // 8
		return RocketChat.authz.hasPermission(Meteor.userId(), 'delete-message', doc.rid) || RocketChat.settings.get('Message_AllowDeleting') && userId === doc.userId;
	},                                                                                                             // 10
	remove: function (userId, doc) {                                                                               // 11
		return RocketChat.authz.hasPermission(Meteor.userId(), 'delete-message', doc.rid) || RocketChat.settings.get('Message_AllowDeleting') && userId === doc.userId;
	}                                                                                                              // 13
});                                                                                                             // 4
                                                                                                                //
FileUploadBase = function () {                                                                                  // 17
	function FileUploadBase(meta, file) {                                                                          // 18
		(0, _classCallCheck3.default)(this, FileUploadBase);                                                          // 18
		this.id = Random.id();                                                                                        // 19
		this.meta = meta;                                                                                             // 20
		this.file = file;                                                                                             // 21
	}                                                                                                              // 22
                                                                                                                //
	FileUploadBase.prototype.getProgress = function () {                                                           // 17
		function getProgress() {}                                                                                     // 17
                                                                                                                //
		return getProgress;                                                                                           // 17
	}();                                                                                                           // 17
                                                                                                                //
	FileUploadBase.prototype.getFileName = function () {                                                           // 17
		function getFileName() {                                                                                      // 17
			return this.meta.name;                                                                                       // 29
		}                                                                                                             // 30
                                                                                                                //
		return getFileName;                                                                                           // 17
	}();                                                                                                           // 17
                                                                                                                //
	FileUploadBase.prototype.start = function () {                                                                 // 17
		function start() {}                                                                                           // 17
                                                                                                                //
		return start;                                                                                                 // 17
	}();                                                                                                           // 17
                                                                                                                //
	FileUploadBase.prototype.stop = function () {                                                                  // 17
		function stop() {}                                                                                            // 17
                                                                                                                //
		return stop;                                                                                                  // 17
	}();                                                                                                           // 17
                                                                                                                //
	return FileUploadBase;                                                                                         // 17
}();                                                                                                            // 17
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"client":{"lib":{"FileUploadAmazonS3.js":function(require){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/rocketchat_file-upload/client/lib/FileUploadAmazonS3.js                                             //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                         //
                                                                                                                //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                //
                                                                                                                //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                   //
                                                                                                                //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                          //
                                                                                                                //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                     //
                                                                                                                //
var _inherits3 = _interopRequireDefault(_inherits2);                                                            //
                                                                                                                //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }               //
                                                                                                                //
/* globals FileUpload, FileUploadBase, Slingshot */FileUpload.AmazonS3 = function (_FileUploadBase) {           // 1
	(0, _inherits3.default)(FileUploadAmazonS3, _FileUploadBase);                                                  // 3
                                                                                                                //
	function FileUploadAmazonS3(meta, file) {                                                                      // 4
		(0, _classCallCheck3.default)(this, FileUploadAmazonS3);                                                      // 4
                                                                                                                //
		var _this = (0, _possibleConstructorReturn3.default)(this, _FileUploadBase.call(this, meta, file));           // 4
                                                                                                                //
		_this.uploader = new Slingshot.Upload('rocketchat-uploads', {                                                 // 6
			rid: meta.rid                                                                                                // 6
		});                                                                                                           // 6
		return _this;                                                                                                 // 4
	}                                                                                                              // 7
                                                                                                                //
	FileUploadAmazonS3.prototype.start = function () {                                                             // 3
		function start() {                                                                                            // 3
			var _this2 = this;                                                                                           // 9
                                                                                                                //
			this.uploader.send(this.file, function (error, downloadUrl) {                                                // 10
				if (_this2.computation) {                                                                                   // 11
					_this2.computation.stop();                                                                                 // 12
				}                                                                                                           // 13
                                                                                                                //
				if (error) {                                                                                                // 15
					var uploading = Session.get('uploading');                                                                  // 16
                                                                                                                //
					if (!Array.isArray(uploading)) {                                                                           // 17
						uploading = [];                                                                                           // 18
					}                                                                                                          // 19
                                                                                                                //
					var item = _.findWhere(uploading, {                                                                        // 21
						id: _this2.id                                                                                             // 21
					});                                                                                                        // 21
                                                                                                                //
					if (_.isObject(item)) {                                                                                    // 23
						item.error = error.error;                                                                                 // 24
						item.percentage = 0;                                                                                      // 25
					} else {                                                                                                   // 26
						uploading.push({                                                                                          // 27
							error: error.error,                                                                                      // 28
							percentage: 0                                                                                            // 29
						});                                                                                                       // 27
					}                                                                                                          // 31
                                                                                                                //
					Session.set('uploading', uploading);                                                                       // 33
				} else {                                                                                                    // 34
					var file = _.pick(_this2.meta, 'type', 'size', 'name', 'identify', 'description');                         // 35
                                                                                                                //
					file._id = downloadUrl.substr(downloadUrl.lastIndexOf('/') + 1);                                           // 36
					file.url = downloadUrl;                                                                                    // 37
					Meteor.call('sendFileMessage', _this2.meta.rid, 's3', file, function () {                                  // 39
						Meteor.setTimeout(function () {                                                                           // 40
							var uploading = Session.get('uploading');                                                                // 41
                                                                                                                //
							if (uploading !== null) {                                                                                // 42
								var _item = _.findWhere(uploading, {                                                                    // 43
									id: _this2.id                                                                                          // 44
								});                                                                                                     // 43
                                                                                                                //
								return Session.set('uploading', _.without(uploading, _item));                                           // 46
							}                                                                                                        // 47
						}, 2000);                                                                                                 // 48
					});                                                                                                        // 49
				}                                                                                                           // 50
			});                                                                                                          // 51
			this.computation = Tracker.autorun(function () {                                                             // 53
				_this2.onProgress(_this2.uploader.progress());                                                              // 54
			});                                                                                                          // 55
		}                                                                                                             // 56
                                                                                                                //
		return start;                                                                                                 // 3
	}();                                                                                                           // 3
                                                                                                                //
	FileUploadAmazonS3.prototype.onProgress = function () {                                                        // 3
		function onProgress() {}                                                                                      // 3
                                                                                                                //
		return onProgress;                                                                                            // 3
	}();                                                                                                           // 3
                                                                                                                //
	FileUploadAmazonS3.prototype.stop = function () {                                                              // 3
		function stop() {                                                                                             // 3
			if (this.uploader && this.uploader.xhr) {                                                                    // 61
				this.uploader.xhr.abort();                                                                                  // 62
			}                                                                                                            // 63
		}                                                                                                             // 64
                                                                                                                //
		return stop;                                                                                                  // 3
	}();                                                                                                           // 3
                                                                                                                //
	return FileUploadAmazonS3;                                                                                     // 3
}(FileUploadBase);                                                                                              // 3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"FileUploadFileSystem.js":function(require){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/rocketchat_file-upload/client/lib/FileUploadFileSystem.js                                           //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                         //
                                                                                                                //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                //
                                                                                                                //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                   //
                                                                                                                //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                          //
                                                                                                                //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                     //
                                                                                                                //
var _inherits3 = _interopRequireDefault(_inherits2);                                                            //
                                                                                                                //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }               //
                                                                                                                //
/* globals FileUploadBase, UploadFS, FileUpload:true, FileSystemStore:true */FileSystemStore = new UploadFS.store.Local({
	collection: RocketChat.models.Uploads.model,                                                                   // 4
	name: 'fileSystem',                                                                                            // 5
	filter: new UploadFS.Filter({                                                                                  // 6
		onCheck: FileUpload.validateFileUpload                                                                        // 7
	})                                                                                                             // 6
});                                                                                                             // 3
                                                                                                                //
FileUpload.FileSystem = function (_FileUploadBase) {                                                            // 11
	(0, _inherits3.default)(FileUploadFileSystem, _FileUploadBase);                                                // 11
                                                                                                                //
	function FileUploadFileSystem(meta, file) {                                                                    // 12
		(0, _classCallCheck3.default)(this, FileUploadFileSystem);                                                    // 12
                                                                                                                //
		var _this = (0, _possibleConstructorReturn3.default)(this, _FileUploadBase.call(this, meta, file));           // 12
                                                                                                                //
		_this.handler = new UploadFS.Uploader({                                                                       // 14
			store: FileSystemStore,                                                                                      // 15
			data: file,                                                                                                  // 16
			file: meta,                                                                                                  // 17
			onError: function (err) {                                                                                    // 18
				var uploading = Session.get('uploading');                                                                   // 19
                                                                                                                //
				if (uploading != null) {                                                                                    // 20
					var item = _.findWhere(uploading, {                                                                        // 21
						id: _this.id                                                                                              // 22
					});                                                                                                        // 21
                                                                                                                //
					if (item != null) {                                                                                        // 24
						item.error = err.reason;                                                                                  // 25
						item.percentage = 0;                                                                                      // 26
					}                                                                                                          // 27
                                                                                                                //
					return Session.set('uploading', uploading);                                                                // 28
				}                                                                                                           // 29
			},                                                                                                           // 30
			onComplete: function (fileData) {                                                                            // 31
				var file = _.pick(fileData, '_id', 'type', 'size', 'name', 'identify', 'description');                      // 32
                                                                                                                //
				file.url = fileData.url.replace(Meteor.absoluteUrl(), '/');                                                 // 34
				Meteor.call('sendFileMessage', _this.meta.rid, null, file, function () {                                    // 36
					Meteor.setTimeout(function () {                                                                            // 37
						var uploading = Session.get('uploading');                                                                 // 38
                                                                                                                //
						if (uploading != null) {                                                                                  // 39
							var item = _.findWhere(uploading, {                                                                      // 40
								id: _this.id                                                                                            // 41
							});                                                                                                      // 40
                                                                                                                //
							return Session.set('uploading', _.without(uploading, item));                                             // 43
						}                                                                                                         // 44
					}, 2000);                                                                                                  // 45
				});                                                                                                         // 46
			}                                                                                                            // 47
		});                                                                                                           // 14
                                                                                                                //
		_this.handler.onProgress = function (file, progress) {                                                        // 50
			_this.onProgress(progress);                                                                                  // 51
		};                                                                                                            // 52
                                                                                                                //
		return _this;                                                                                                 // 12
	}                                                                                                              // 53
                                                                                                                //
	FileUploadFileSystem.prototype.start = function () {                                                           // 11
		function start() {                                                                                            // 11
			return this.handler.start();                                                                                 // 56
		}                                                                                                             // 57
                                                                                                                //
		return start;                                                                                                 // 11
	}();                                                                                                           // 11
                                                                                                                //
	FileUploadFileSystem.prototype.onProgress = function () {                                                      // 11
		function onProgress() {}                                                                                      // 11
                                                                                                                //
		return onProgress;                                                                                            // 11
	}();                                                                                                           // 11
                                                                                                                //
	FileUploadFileSystem.prototype.stop = function () {                                                            // 11
		function stop() {                                                                                             // 11
			return this.handler.stop();                                                                                  // 62
		}                                                                                                             // 63
                                                                                                                //
		return stop;                                                                                                  // 11
	}();                                                                                                           // 11
                                                                                                                //
	return FileUploadFileSystem;                                                                                   // 11
}(FileUploadBase);                                                                                              // 11
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"FileUploadGoogleStorage.js":function(require){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/rocketchat_file-upload/client/lib/FileUploadGoogleStorage.js                                        //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                         //
                                                                                                                //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                //
                                                                                                                //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                   //
                                                                                                                //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                          //
                                                                                                                //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                     //
                                                                                                                //
var _inherits3 = _interopRequireDefault(_inherits2);                                                            //
                                                                                                                //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }               //
                                                                                                                //
/* globals FileUpload, FileUploadBase, Slingshot */FileUpload.GoogleCloudStorage = function (_FileUploadBase) {
	(0, _inherits3.default)(FileUploadGoogleCloudStorage, _FileUploadBase);                                        // 3
                                                                                                                //
	function FileUploadGoogleCloudStorage(meta, file) {                                                            // 4
		(0, _classCallCheck3.default)(this, FileUploadGoogleCloudStorage);                                            // 4
                                                                                                                //
		var _this = (0, _possibleConstructorReturn3.default)(this, _FileUploadBase.call(this, meta, file));           // 4
                                                                                                                //
		_this.uploader = new Slingshot.Upload('rocketchat-uploads-gs', {                                              // 6
			rid: meta.rid                                                                                                // 6
		});                                                                                                           // 6
		return _this;                                                                                                 // 4
	}                                                                                                              // 7
                                                                                                                //
	FileUploadGoogleCloudStorage.prototype.start = function () {                                                   // 3
		function start() {                                                                                            // 3
			var _this2 = this;                                                                                           // 9
                                                                                                                //
			this.uploader.send(this.file, function (error, downloadUrl) {                                                // 10
				if (_this2.computation) {                                                                                   // 11
					_this2.computation.stop();                                                                                 // 12
				}                                                                                                           // 13
                                                                                                                //
				if (error) {                                                                                                // 15
					var uploading = Session.get('uploading');                                                                  // 16
                                                                                                                //
					if (!Array.isArray(uploading)) {                                                                           // 17
						uploading = [];                                                                                           // 18
					}                                                                                                          // 19
                                                                                                                //
					var item = _.findWhere(uploading, {                                                                        // 21
						id: _this2.id                                                                                             // 21
					});                                                                                                        // 21
                                                                                                                //
					if (_.isObject(item)) {                                                                                    // 23
						item.error = error.error;                                                                                 // 24
						item.percentage = 0;                                                                                      // 25
					} else {                                                                                                   // 26
						uploading.push({                                                                                          // 27
							error: error.error,                                                                                      // 28
							percentage: 0                                                                                            // 29
						});                                                                                                       // 27
					}                                                                                                          // 31
                                                                                                                //
					Session.set('uploading', uploading);                                                                       // 33
				} else {                                                                                                    // 34
					var file = _.pick(_this2.meta, 'type', 'size', 'name', 'identify', 'description');                         // 35
                                                                                                                //
					file._id = downloadUrl.substr(downloadUrl.lastIndexOf('/') + 1);                                           // 36
					file.url = downloadUrl;                                                                                    // 37
					Meteor.call('sendFileMessage', _this2.meta.rid, 'googleCloudStorage', file, function () {                  // 39
						Meteor.setTimeout(function () {                                                                           // 40
							var uploading = Session.get('uploading');                                                                // 41
                                                                                                                //
							if (uploading !== null) {                                                                                // 42
								var _item = _.findWhere(uploading, {                                                                    // 43
									id: _this2.id                                                                                          // 44
								});                                                                                                     // 43
                                                                                                                //
								return Session.set('uploading', _.without(uploading, _item));                                           // 46
							}                                                                                                        // 47
						}, 2000);                                                                                                 // 48
					});                                                                                                        // 49
				}                                                                                                           // 50
			});                                                                                                          // 51
			this.computation = Tracker.autorun(function () {                                                             // 53
				_this2.onProgress(_this2.uploader.progress());                                                              // 54
			});                                                                                                          // 55
		}                                                                                                             // 56
                                                                                                                //
		return start;                                                                                                 // 3
	}();                                                                                                           // 3
                                                                                                                //
	FileUploadGoogleCloudStorage.prototype.onProgress = function () {                                              // 3
		function onProgress() {}                                                                                      // 3
                                                                                                                //
		return onProgress;                                                                                            // 3
	}();                                                                                                           // 3
                                                                                                                //
	FileUploadGoogleCloudStorage.prototype.stop = function () {                                                    // 3
		function stop() {                                                                                             // 3
			if (this.uploader && this.uploader.xhr) {                                                                    // 61
				this.uploader.xhr.abort();                                                                                  // 62
			}                                                                                                            // 63
		}                                                                                                             // 64
                                                                                                                //
		return stop;                                                                                                  // 3
	}();                                                                                                           // 3
                                                                                                                //
	return FileUploadGoogleCloudStorage;                                                                           // 3
}(FileUploadBase);                                                                                              // 3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"FileUploadGridFS.js":function(require){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/rocketchat_file-upload/client/lib/FileUploadGridFS.js                                               //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                         //
                                                                                                                //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                //
                                                                                                                //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                   //
                                                                                                                //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                          //
                                                                                                                //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                     //
                                                                                                                //
var _inherits3 = _interopRequireDefault(_inherits2);                                                            //
                                                                                                                //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }               //
                                                                                                                //
/* globals FileUploadBase, UploadFS, FileUpload:true */FileUpload.GridFS = function (_FileUploadBase) {         // 1
	(0, _inherits3.default)(FileUploadGridFS, _FileUploadBase);                                                    // 2
                                                                                                                //
	function FileUploadGridFS(meta, file) {                                                                        // 3
		(0, _classCallCheck3.default)(this, FileUploadGridFS);                                                        // 3
                                                                                                                //
		var _this = (0, _possibleConstructorReturn3.default)(this, _FileUploadBase.call(this, meta, file));           // 3
                                                                                                                //
		_this.handler = new UploadFS.Uploader({                                                                       // 5
			store: Meteor.fileStore,                                                                                     // 6
			data: file,                                                                                                  // 7
			file: meta,                                                                                                  // 8
			onError: function (err) {                                                                                    // 9
				var uploading = Session.get('uploading');                                                                   // 10
                                                                                                                //
				if (uploading != null) {                                                                                    // 11
					var item = _.findWhere(uploading, {                                                                        // 12
						id: _this.id                                                                                              // 13
					});                                                                                                        // 12
                                                                                                                //
					if (item != null) {                                                                                        // 15
						item.error = err.reason;                                                                                  // 16
						item.percentage = 0;                                                                                      // 17
					}                                                                                                          // 18
                                                                                                                //
					return Session.set('uploading', uploading);                                                                // 19
				}                                                                                                           // 20
			},                                                                                                           // 21
			onComplete: function (fileData) {                                                                            // 22
				var file = _.pick(fileData, '_id', 'type', 'size', 'name', 'identify', 'description');                      // 23
                                                                                                                //
				file.url = fileData.url.replace(Meteor.absoluteUrl(), '/');                                                 // 25
				Meteor.call('sendFileMessage', _this.meta.rid, null, file, function () {                                    // 27
					Meteor.setTimeout(function () {                                                                            // 28
						var uploading = Session.get('uploading');                                                                 // 29
                                                                                                                //
						if (uploading != null) {                                                                                  // 30
							var item = _.findWhere(uploading, {                                                                      // 31
								id: _this.id                                                                                            // 32
							});                                                                                                      // 31
                                                                                                                //
							return Session.set('uploading', _.without(uploading, item));                                             // 34
						}                                                                                                         // 35
					}, 2000);                                                                                                  // 36
				});                                                                                                         // 37
			}                                                                                                            // 38
		});                                                                                                           // 5
                                                                                                                //
		_this.handler.onProgress = function (file, progress) {                                                        // 41
			_this.onProgress(progress);                                                                                  // 42
		};                                                                                                            // 43
                                                                                                                //
		return _this;                                                                                                 // 3
	}                                                                                                              // 44
                                                                                                                //
	FileUploadGridFS.prototype.start = function () {                                                               // 2
		function start() {                                                                                            // 2
			return this.handler.start();                                                                                 // 47
		}                                                                                                             // 48
                                                                                                                //
		return start;                                                                                                 // 2
	}();                                                                                                           // 2
                                                                                                                //
	FileUploadGridFS.prototype.onProgress = function () {                                                          // 2
		function onProgress() {}                                                                                      // 2
                                                                                                                //
		return onProgress;                                                                                            // 2
	}();                                                                                                           // 2
                                                                                                                //
	FileUploadGridFS.prototype.stop = function () {                                                                // 2
		function stop() {                                                                                             // 2
			return this.handler.stop();                                                                                  // 53
		}                                                                                                             // 54
                                                                                                                //
		return stop;                                                                                                  // 2
	}();                                                                                                           // 2
                                                                                                                //
	return FileUploadGridFS;                                                                                       // 2
}(FileUploadBase);                                                                                              // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"fileUploadHandler.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/rocketchat_file-upload/client/lib/fileUploadHandler.js                                              //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
/* globals FileUpload, fileUploadHandler:true */ /* exported fileUploadHandler */fileUploadHandler = function (meta, file) {
	var storageType = RocketChat.settings.get('FileUpload_Storage_Type');                                          // 5
                                                                                                                //
	if (FileUpload[storageType] !== undefined) {                                                                   // 7
		return new FileUpload[storageType](meta, file);                                                               // 8
	}                                                                                                              // 9
};                                                                                                              // 10
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"node_modules":{"filesize":{"package.json":function(require,exports){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// .npm/package/node_modules/filesize/package.json                                                              //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
exports.name = "filesize";                                                                                      // 1
exports.version = "3.3.0";                                                                                      // 2
exports.main = "lib/filesize";                                                                                  // 3
                                                                                                                // 4
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lib":{"filesize.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// node_modules/meteor/rocketchat_file-upload/node_modules/filesize/lib/filesize.js                             //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
"use strict";                                                                                                   // 1
                                                                                                                // 2
/**                                                                                                             // 3
 * filesize                                                                                                     // 4
 *                                                                                                              // 5
 * @copyright 2016 Jason Mulligan <jason.mulligan@avoidwork.com>                                                // 6
 * @license BSD-3-Clause                                                                                        // 7
 * @version 3.3.0                                                                                               // 8
 */                                                                                                             // 9
(function (global) {                                                                                            // 10
	var b = /^(b|B)$/;                                                                                             // 11
	var symbol = {                                                                                                 // 12
		iec: {                                                                                                        // 13
			bits: ["b", "Kib", "Mib", "Gib", "Tib", "Pib", "Eib", "Zib", "Yib"],                                         // 14
			bytes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]                                         // 15
		},                                                                                                            // 16
		jedec: {                                                                                                      // 17
			bits: ["b", "Kb", "Mb", "Gb", "Tb", "Pb", "Eb", "Zb", "Yb"],                                                 // 18
			bytes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]                                                 // 19
		}                                                                                                             // 20
	};                                                                                                             // 21
                                                                                                                // 22
	/**                                                                                                            // 23
  * filesize                                                                                                    // 24
  *                                                                                                             // 25
  * @method filesize                                                                                            // 26
  * @param  {Mixed}   arg        String, Int or Float to transform                                              // 27
  * @param  {Object}  descriptor [Optional] Flags                                                               // 28
  * @return {String}             Readable file size String                                                      // 29
  */                                                                                                            // 30
	function filesize(arg) {                                                                                       // 31
		var descriptor = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];                     // 32
                                                                                                                // 33
		var result = [],                                                                                              // 34
		    val = 0,                                                                                                  // 35
		    e = void 0,                                                                                               // 36
		    base = void 0,                                                                                            // 37
		    bits = void 0,                                                                                            // 38
		    ceil = void 0,                                                                                            // 39
		    neg = void 0,                                                                                             // 40
		    num = void 0,                                                                                             // 41
		    output = void 0,                                                                                          // 42
		    round = void 0,                                                                                           // 43
		    unix = void 0,                                                                                            // 44
		    spacer = void 0,                                                                                          // 45
		    standard = void 0,                                                                                        // 46
		    symbols = void 0;                                                                                         // 47
                                                                                                                // 48
		if (isNaN(arg)) {                                                                                             // 49
			throw new Error("Invalid arguments");                                                                        // 50
		}                                                                                                             // 51
                                                                                                                // 52
		bits = descriptor.bits === true;                                                                              // 53
		unix = descriptor.unix === true;                                                                              // 54
		base = descriptor.base || 2;                                                                                  // 55
		round = descriptor.round !== undefined ? descriptor.round : unix ? 1 : 2;                                     // 56
		spacer = descriptor.spacer !== undefined ? descriptor.spacer : unix ? "" : " ";                               // 57
		symbols = descriptor.symbols || descriptor.suffixes || {};                                                    // 58
		standard = base === 2 ? descriptor.standard || "jedec" : "jedec";                                             // 59
		output = descriptor.output || "string";                                                                       // 60
		e = descriptor.exponent !== undefined ? descriptor.exponent : -1;                                             // 61
		num = Number(arg);                                                                                            // 62
		neg = num < 0;                                                                                                // 63
		ceil = base > 2 ? 1000 : 1024;                                                                                // 64
                                                                                                                // 65
		// Flipping a negative number to determine the size                                                           // 66
		if (neg) {                                                                                                    // 67
			num = -num;                                                                                                  // 68
		}                                                                                                             // 69
                                                                                                                // 70
		// Zero is now a special case because bytes divide by 1                                                       // 71
		if (num === 0) {                                                                                              // 72
			result[0] = 0;                                                                                               // 73
			result[1] = unix ? "" : !bits ? "B" : "b";                                                                   // 74
		} else {                                                                                                      // 75
			// Determining the exponent                                                                                  // 76
			if (e === -1 || isNaN(e)) {                                                                                  // 77
				e = Math.floor(Math.log(num) / Math.log(ceil));                                                             // 78
                                                                                                                // 79
				if (e < 0) {                                                                                                // 80
					e = 0;                                                                                                     // 81
				}                                                                                                           // 82
			}                                                                                                            // 83
                                                                                                                // 84
			// Exceeding supported length, time to reduce & multiply                                                     // 85
			if (e > 8) {                                                                                                 // 86
				e = 8;                                                                                                      // 87
			}                                                                                                            // 88
                                                                                                                // 89
			val = base === 2 ? num / Math.pow(2, e * 10) : num / Math.pow(1000, e);                                      // 90
                                                                                                                // 91
			if (bits) {                                                                                                  // 92
				val = val * 8;                                                                                              // 93
                                                                                                                // 94
				if (val > ceil && e < 8) {                                                                                  // 95
					val = val / ceil;                                                                                          // 96
					e++;                                                                                                       // 97
				}                                                                                                           // 98
			}                                                                                                            // 99
                                                                                                                // 100
			result[0] = Number(val.toFixed(e > 0 ? round : 0));                                                          // 101
			result[1] = base === 10 && e === 1 ? bits ? "kb" : "kB" : symbol[standard][bits ? "bits" : "bytes"][e];      // 102
                                                                                                                // 103
			if (unix) {                                                                                                  // 104
				result[1] = standard === "jedec" ? result[1].charAt(0) : e > 0 ? result[1].replace(/B$/, "") : result[1];   // 105
                                                                                                                // 106
				if (b.test(result[1])) {                                                                                    // 107
					result[0] = Math.floor(result[0]);                                                                         // 108
					result[1] = "";                                                                                            // 109
				}                                                                                                           // 110
			}                                                                                                            // 111
		}                                                                                                             // 112
                                                                                                                // 113
		// Decorating a 'diff'                                                                                        // 114
		if (neg) {                                                                                                    // 115
			result[0] = -result[0];                                                                                      // 116
		}                                                                                                             // 117
                                                                                                                // 118
		// Applying custom symbol                                                                                     // 119
		result[1] = symbols[result[1]] || result[1];                                                                  // 120
                                                                                                                // 121
		// Returning Array, Object, or String (default)                                                               // 122
		if (output === "array") {                                                                                     // 123
			return result;                                                                                               // 124
		}                                                                                                             // 125
                                                                                                                // 126
		if (output === "exponent") {                                                                                  // 127
			return e;                                                                                                    // 128
		}                                                                                                             // 129
                                                                                                                // 130
		if (output === "object") {                                                                                    // 131
			return { value: result[0], suffix: result[1], symbol: result[1] };                                           // 132
		}                                                                                                             // 133
                                                                                                                // 134
		return result.join(spacer);                                                                                   // 135
	}                                                                                                              // 136
                                                                                                                // 137
	// CommonJS, AMD, script tag                                                                                   // 138
	if (typeof exports !== "undefined") {                                                                          // 139
		module.exports = filesize;                                                                                    // 140
	} else if (typeof define === "function" && define.amd) {                                                       // 141
		define(function () {                                                                                          // 142
			return filesize;                                                                                             // 143
		});                                                                                                           // 144
	} else {                                                                                                       // 145
		global.filesize = filesize;                                                                                   // 146
	}                                                                                                              // 147
})(typeof window !== "undefined" ? window : global);                                                            // 148
                                                                                                                // 149
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:file-upload/globalFileRestrictions.js");
require("./node_modules/meteor/rocketchat:file-upload/lib/FileUpload.js");
require("./node_modules/meteor/rocketchat:file-upload/lib/FileUploadBase.js");
require("./node_modules/meteor/rocketchat:file-upload/client/lib/FileUploadAmazonS3.js");
require("./node_modules/meteor/rocketchat:file-upload/client/lib/FileUploadFileSystem.js");
require("./node_modules/meteor/rocketchat:file-upload/client/lib/FileUploadGoogleStorage.js");
require("./node_modules/meteor/rocketchat:file-upload/client/lib/FileUploadGridFS.js");
require("./node_modules/meteor/rocketchat:file-upload/client/lib/fileUploadHandler.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['rocketchat:file-upload'] = {}, {
  fileUploadHandler: fileUploadHandler,
  FileUpload: FileUpload
});

})();
