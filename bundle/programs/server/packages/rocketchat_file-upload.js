(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var RocketChatFile = Package['rocketchat:file'].RocketChatFile;
var Slingshot = Package['edgee:slingshot'].Slingshot;
var AWS = Package['peerlibrary:aws-sdk'].AWS;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var Random = Package.random.Random;
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var WebApp = Package.webapp.WebApp;
var main = Package.webapp.main;
var WebAppInternals = Package.webapp.WebAppInternals;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var Symbol = Package['ecmascript-runtime-server'].Symbol;
var Map = Package['ecmascript-runtime-server'].Map;
var Set = Package['ecmascript-runtime-server'].Set;

/* Package-scope variables */
var FileUpload, FileUploadBase, FileSystemStore, fileUploadHandler;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:file-upload":{"globalFileRestrictions.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_file-upload/globalFileRestrictions.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var filesize = void 0;                                                                                                 // 1
module.watch(require("filesize"), {                                                                                    // 1
	"default": function (v) {                                                                                             // 1
		filesize = v;                                                                                                        // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
var slingShotConfig = {                                                                                                // 5
	authorize: function (file /*, metaContext*/) {                                                                        // 6
		//Deny uploads if user is not logged in.                                                                             // 7
		if (!this.userId) {                                                                                                  // 8
			throw new Meteor.Error('login-required', 'Please login before posting files');                                      // 9
		}                                                                                                                    // 10
                                                                                                                       //
		if (!RocketChat.fileUploadIsValidContentType(file.type)) {                                                           // 12
			throw new Meteor.Error(TAPi18n.__('error-invalid-file-type'));                                                      // 13
		}                                                                                                                    // 14
                                                                                                                       //
		var maxFileSize = RocketChat.settings.get('FileUpload_MaxFileSize');                                                 // 16
                                                                                                                       //
		if (maxFileSize && maxFileSize < file.size) {                                                                        // 18
			throw new Meteor.Error(TAPi18n.__('File_exceeds_allowed_size_of_bytes', {                                           // 19
				size: filesize(maxFileSize)                                                                                        // 19
			}));                                                                                                                // 19
		}                                                                                                                    // 20
                                                                                                                       //
		return true;                                                                                                         // 22
	},                                                                                                                    // 23
	maxSize: 0,                                                                                                           // 24
	allowedFileTypes: null                                                                                                // 25
};                                                                                                                     // 5
Slingshot.fileRestrictions('rocketchat-uploads', slingShotConfig);                                                     // 28
Slingshot.fileRestrictions('rocketchat-uploads-gs', slingShotConfig);                                                  // 29
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lib":{"FileUpload.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_file-upload/lib/FileUpload.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var filesize = void 0;                                                                                                 // 1
module.watch(require("filesize"), {                                                                                    // 1
	"default": function (v) {                                                                                             // 1
		filesize = v;                                                                                                        // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
var maxFileSize = 0;                                                                                                   // 6
FileUpload = {                                                                                                         // 8
	validateFileUpload: function (file) {                                                                                 // 9
		if (!Match.test(file.rid, String)) {                                                                                 // 10
			return false;                                                                                                       // 11
		}                                                                                                                    // 12
                                                                                                                       //
		var user = Meteor.user();                                                                                            // 14
		var room = RocketChat.models.Rooms.findOneById(file.rid);                                                            // 15
		var directMessageAllow = RocketChat.settings.get('FileUpload_Enabled_Direct');                                       // 16
		var fileUploadAllowed = RocketChat.settings.get('FileUpload_Enabled');                                               // 17
                                                                                                                       //
		if (RocketChat.authz.canAccessRoom(room, user) !== true) {                                                           // 19
			return false;                                                                                                       // 20
		}                                                                                                                    // 21
                                                                                                                       //
		if (!fileUploadAllowed) {                                                                                            // 23
			var reason = TAPi18n.__('FileUpload_Disabled', user.language);                                                      // 24
                                                                                                                       //
			throw new Meteor.Error('error-file-upload-disabled', reason);                                                       // 25
		}                                                                                                                    // 26
                                                                                                                       //
		if (!directMessageAllow && room.t === 'd') {                                                                         // 28
			var _reason = TAPi18n.__('File_not_allowed_direct_messages', user.language);                                        // 29
                                                                                                                       //
			throw new Meteor.Error('error-direct-message-file-upload-not-allowed', _reason);                                    // 30
		}                                                                                                                    // 31
                                                                                                                       //
		if (file.size > maxFileSize) {                                                                                       // 33
			var _reason2 = TAPi18n.__('File_exceeds_allowed_size_of_bytes', {                                                   // 34
				size: filesize(maxFileSize)                                                                                        // 35
			}, user.language);                                                                                                  // 34
                                                                                                                       //
			throw new Meteor.Error('error-file-too-large', _reason2);                                                           // 37
		}                                                                                                                    // 38
                                                                                                                       //
		if (parseInt(maxFileSize) > 0) {                                                                                     // 40
			if (file.size > maxFileSize) {                                                                                      // 41
				var _reason3 = TAPi18n.__('File_exceeds_allowed_size_of_bytes', {                                                  // 42
					size: filesize(maxFileSize)                                                                                       // 43
				}, user.language);                                                                                                 // 42
                                                                                                                       //
				throw new Meteor.Error('error-file-too-large', _reason3);                                                          // 45
			}                                                                                                                   // 46
		}                                                                                                                    // 47
                                                                                                                       //
		if (!RocketChat.fileUploadIsValidContentType(file.type)) {                                                           // 49
			var _reason4 = TAPi18n.__('File_type_is_not_accepted', user.language);                                              // 50
                                                                                                                       //
			throw new Meteor.Error('error-invalid-file-type', _reason4);                                                        // 51
		}                                                                                                                    // 52
                                                                                                                       //
		return true;                                                                                                         // 54
	}                                                                                                                     // 55
};                                                                                                                     // 8
RocketChat.settings.get('FileUpload_MaxFileSize', function (key, value) {                                              // 58
	maxFileSize = value;                                                                                                  // 59
});                                                                                                                    // 60
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"FileUploadBase.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_file-upload/lib/FileUploadBase.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
/* globals FileUploadBase:true, UploadFS */ /* exported FileUploadBase */UploadFS.config.defaultStorePermissions = new UploadFS.StorePermissions({
	insert: function (userId /*, doc*/) {                                                                                 // 5
		return userId;                                                                                                       // 6
	},                                                                                                                    // 7
	update: function (userId, doc) {                                                                                      // 8
		return RocketChat.authz.hasPermission(Meteor.userId(), 'delete-message', doc.rid) || RocketChat.settings.get('Message_AllowDeleting') && userId === doc.userId;
	},                                                                                                                    // 10
	remove: function (userId, doc) {                                                                                      // 11
		return RocketChat.authz.hasPermission(Meteor.userId(), 'delete-message', doc.rid) || RocketChat.settings.get('Message_AllowDeleting') && userId === doc.userId;
	}                                                                                                                     // 13
});                                                                                                                    // 4
                                                                                                                       //
FileUploadBase = function () {                                                                                         // 17
	function FileUploadBase(meta, file) {                                                                                 // 18
		(0, _classCallCheck3.default)(this, FileUploadBase);                                                                 // 18
		this.id = Random.id();                                                                                               // 19
		this.meta = meta;                                                                                                    // 20
		this.file = file;                                                                                                    // 21
	}                                                                                                                     // 22
                                                                                                                       //
	FileUploadBase.prototype.getProgress = function () {                                                                  // 17
		function getProgress() {}                                                                                            // 17
                                                                                                                       //
		return getProgress;                                                                                                  // 17
	}();                                                                                                                  // 17
                                                                                                                       //
	FileUploadBase.prototype.getFileName = function () {                                                                  // 17
		function getFileName() {                                                                                             // 17
			return this.meta.name;                                                                                              // 29
		}                                                                                                                    // 30
                                                                                                                       //
		return getFileName;                                                                                                  // 17
	}();                                                                                                                  // 17
                                                                                                                       //
	FileUploadBase.prototype.start = function () {                                                                        // 17
		function start() {}                                                                                                  // 17
                                                                                                                       //
		return start;                                                                                                        // 17
	}();                                                                                                                  // 17
                                                                                                                       //
	FileUploadBase.prototype.stop = function () {                                                                         // 17
		function stop() {}                                                                                                   // 17
                                                                                                                       //
		return stop;                                                                                                         // 17
	}();                                                                                                                  // 17
                                                                                                                       //
	return FileUploadBase;                                                                                                // 17
}();                                                                                                                   // 17
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"lib":{"FileUpload.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_file-upload/server/lib/FileUpload.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var mime = void 0;                                                                                                     // 1
module.watch(require("mime-type/with-db"), {                                                                           // 1
	"default": function (v) {                                                                                             // 1
		mime = v;                                                                                                            // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
FileUpload.handlers = {};                                                                                              // 4
                                                                                                                       //
FileUpload.addHandler = function (store, handler) {                                                                    // 6
	this.handlers[store] = handler;                                                                                       // 7
};                                                                                                                     // 8
                                                                                                                       //
FileUpload.delete = function (fileId) {                                                                                // 10
	var file = RocketChat.models.Uploads.findOneById(fileId);                                                             // 11
                                                                                                                       //
	if (!file) {                                                                                                          // 13
		return;                                                                                                              // 14
	}                                                                                                                     // 15
                                                                                                                       //
	this.handlers[file.store].delete(file);                                                                               // 17
	return RocketChat.models.Uploads.remove(file._id);                                                                    // 19
};                                                                                                                     // 20
                                                                                                                       //
FileUpload.get = function (file, req, res, next) {                                                                     // 22
	if (file.store && this.handlers && this.handlers[file.store] && this.handlers[file.store].get) {                      // 23
		this.handlers[file.store].get.call(this, file, req, res, next);                                                      // 24
	} else {                                                                                                              // 25
		res.writeHead(404);                                                                                                  // 26
		res.end();                                                                                                           // 27
		return;                                                                                                              // 28
	}                                                                                                                     // 29
};                                                                                                                     // 30
                                                                                                                       //
FileUpload.addExtensionTo = function (file) {                                                                          // 32
	if (mime.lookup(file.name) === file.type) {                                                                           // 33
		return file;                                                                                                         // 34
	}                                                                                                                     // 35
                                                                                                                       //
	var ext = mime.extension(file.type);                                                                                  // 37
                                                                                                                       //
	if (ext && false === new RegExp("." + ext + "$", 'i').test(file.name)) {                                              // 38
		file.name = file.name + "." + ext;                                                                                   // 39
	}                                                                                                                     // 40
                                                                                                                       //
	return file;                                                                                                          // 42
};                                                                                                                     // 43
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"requests.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_file-upload/server/lib/requests.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Cookies = void 0;                                                                                                  // 1
module.watch(require("meteor/ostrio:cookies"), {                                                                       // 1
	Cookies: function (v) {                                                                                               // 1
		Cookies = v;                                                                                                         // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
var protectedFiles = void 0;                                                                                           // 4
RocketChat.settings.get('FileUpload_ProtectFiles', function (key, value) {                                             // 6
	protectedFiles = value;                                                                                               // 7
});                                                                                                                    // 8
WebApp.connectHandlers.use('/file-upload/', function (req, res, next) {                                                // 10
	var match = /^\/([^\/]+)\/(.*)/.exec(req.url);                                                                        // 11
                                                                                                                       //
	if (match[1]) {                                                                                                       // 13
		var file = RocketChat.models.Uploads.findOneById(match[1]);                                                          // 14
                                                                                                                       //
		if (file) {                                                                                                          // 16
			if (!Meteor.settings.public.sandstorm && protectedFiles) {                                                          // 17
				var rawCookies = void 0;                                                                                           // 18
				var token = void 0;                                                                                                // 19
				var uid = void 0;                                                                                                  // 20
				var cookie = new Cookies();                                                                                        // 21
                                                                                                                       //
				if (req.headers && req.headers.cookie != null) {                                                                   // 23
					rawCookies = req.headers.cookie;                                                                                  // 24
				}                                                                                                                  // 25
                                                                                                                       //
				if (rawCookies != null) {                                                                                          // 27
					uid = cookie.get('rc_uid', rawCookies);                                                                           // 28
				}                                                                                                                  // 29
                                                                                                                       //
				if (rawCookies != null) {                                                                                          // 31
					token = cookie.get('rc_token', rawCookies);                                                                       // 32
				}                                                                                                                  // 33
                                                                                                                       //
				if (uid == null) {                                                                                                 // 35
					uid = req.query.rc_uid;                                                                                           // 36
					token = req.query.rc_token;                                                                                       // 37
				}                                                                                                                  // 38
                                                                                                                       //
				if (!(uid && token && RocketChat.models.Users.findOneByIdAndLoginToken(uid, token))) {                             // 40
					res.writeHead(403);                                                                                               // 41
					res.end();                                                                                                        // 42
					return false;                                                                                                     // 43
				}                                                                                                                  // 44
			}                                                                                                                   // 45
                                                                                                                       //
			res.setHeader('Content-Security-Policy', 'default-src \'none\'');                                                   // 47
			return FileUpload.get(file, req, res, next);                                                                        // 49
		}                                                                                                                    // 50
	}                                                                                                                     // 51
                                                                                                                       //
	res.writeHead(404);                                                                                                   // 53
	res.end();                                                                                                            // 54
	return;                                                                                                               // 55
});                                                                                                                    // 56
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"config":{"configFileUploadAmazonS3.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_file-upload/server/config/configFileUploadAmazonS3.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals Slingshot, FileUpload, AWS, SystemLogger */var crypto = Npm.require('crypto');                              // 1
                                                                                                                       //
var S3accessKey = void 0;                                                                                              // 4
var S3secretKey = void 0;                                                                                              // 5
var S3expiryTimeSpan = void 0;                                                                                         // 6
                                                                                                                       //
var generateURL = function (file) {                                                                                    // 8
	if (!file || !file.s3) {                                                                                              // 9
		return;                                                                                                              // 10
	}                                                                                                                     // 11
                                                                                                                       //
	var resourceURL = "/" + file.s3.bucket + "/" + file.s3.path + file._id;                                               // 12
	var expires = parseInt(new Date().getTime() / 1000) + Math.max(5, S3expiryTimeSpan);                                  // 13
	var StringToSign = "GET\n\n\n" + expires + "\n" + resourceURL;                                                        // 14
	var signature = crypto.createHmac('sha1', S3secretKey).update(new Buffer(StringToSign, 'utf-8')).digest('base64');    // 15
	return file.url + "?AWSAccessKeyId=" + encodeURIComponent(S3accessKey) + "&Expires=" + expires + "&Signature=" + encodeURIComponent(signature);
};                                                                                                                     // 17
                                                                                                                       //
FileUpload.addHandler('s3', {                                                                                          // 19
	get: function (file, req, res) {                                                                                      // 20
		var fileUrl = generateURL(file);                                                                                     // 21
                                                                                                                       //
		if (fileUrl) {                                                                                                       // 23
			res.setHeader('Location', fileUrl);                                                                                 // 24
			res.writeHead(302);                                                                                                 // 25
		}                                                                                                                    // 26
                                                                                                                       //
		res.end();                                                                                                           // 27
	},                                                                                                                    // 28
	"delete": function (file) {                                                                                           // 19
		var s3 = new AWS.S3();                                                                                               // 30
		var request = s3.deleteObject({                                                                                      // 31
			Bucket: file.s3.bucket,                                                                                             // 32
			Key: file.s3.path + file._id                                                                                        // 33
		});                                                                                                                  // 31
		request.send();                                                                                                      // 35
	}                                                                                                                     // 36
});                                                                                                                    // 19
                                                                                                                       //
var createS3Directive = _.debounce(function () {                                                                       // 39
	var directiveName = 'rocketchat-uploads';                                                                             // 40
	var type = RocketChat.settings.get('FileUpload_Storage_Type');                                                        // 42
	var bucket = RocketChat.settings.get('FileUpload_S3_Bucket');                                                         // 43
	var acl = RocketChat.settings.get('FileUpload_S3_Acl');                                                               // 44
	var accessKey = RocketChat.settings.get('FileUpload_S3_AWSAccessKeyId');                                              // 45
	var secretKey = RocketChat.settings.get('FileUpload_S3_AWSSecretAccessKey');                                          // 46
	var cdn = RocketChat.settings.get('FileUpload_S3_CDN');                                                               // 47
	var region = RocketChat.settings.get('FileUpload_S3_Region');                                                         // 48
	var bucketUrl = RocketChat.settings.get('FileUpload_S3_BucketURL');                                                   // 49
	AWS.config.update({                                                                                                   // 51
		accessKeyId: RocketChat.settings.get('FileUpload_S3_AWSAccessKeyId'),                                                // 52
		secretAccessKey: RocketChat.settings.get('FileUpload_S3_AWSSecretAccessKey')                                         // 53
	});                                                                                                                   // 51
                                                                                                                       //
	if (type === 'AmazonS3' && !_.isEmpty(bucket) && !_.isEmpty(accessKey) && !_.isEmpty(secretKey)) {                    // 56
		if (Slingshot._directives[directiveName]) {                                                                          // 57
			delete Slingshot._directives[directiveName];                                                                        // 58
		}                                                                                                                    // 59
                                                                                                                       //
		var config = {                                                                                                       // 60
			bucket: bucket,                                                                                                     // 61
			AWSAccessKeyId: accessKey,                                                                                          // 62
			AWSSecretAccessKey: secretKey,                                                                                      // 63
			key: function (file, metaContext) {                                                                                 // 64
				var path = RocketChat.hostname + "/" + metaContext.rid + "/" + this.userId + "/";                                  // 65
				var upload = {                                                                                                     // 67
					s3: {                                                                                                             // 67
						bucket: bucket,                                                                                                  // 68
						region: region,                                                                                                  // 69
						path: path                                                                                                       // 70
					}                                                                                                                 // 67
				};                                                                                                                 // 67
				var fileId = RocketChat.models.Uploads.insertFileInit(metaContext.rid, this.userId, 's3', file, upload);           // 72
				return path + fileId;                                                                                              // 74
			}                                                                                                                   // 75
		};                                                                                                                   // 60
                                                                                                                       //
		if (!_.isEmpty(acl)) {                                                                                               // 78
			config.acl = acl;                                                                                                   // 79
		}                                                                                                                    // 80
                                                                                                                       //
		if (!_.isEmpty(cdn)) {                                                                                               // 82
			config.cdn = cdn;                                                                                                   // 83
		}                                                                                                                    // 84
                                                                                                                       //
		if (!_.isEmpty(region)) {                                                                                            // 86
			config.region = region;                                                                                             // 87
		}                                                                                                                    // 88
                                                                                                                       //
		if (!_.isEmpty(bucketUrl)) {                                                                                         // 90
			config.bucketUrl = bucketUrl;                                                                                       // 91
		}                                                                                                                    // 92
                                                                                                                       //
		try {                                                                                                                // 94
			Slingshot.createDirective(directiveName, Slingshot.S3Storage, config);                                              // 95
		} catch (e) {                                                                                                        // 96
			SystemLogger.error('Error configuring S3 ->', e.message);                                                           // 97
		}                                                                                                                    // 98
	} else if (Slingshot._directives[directiveName]) {                                                                    // 99
		delete Slingshot._directives[directiveName];                                                                         // 100
	}                                                                                                                     // 101
}, 500);                                                                                                               // 102
                                                                                                                       //
RocketChat.settings.get('FileUpload_Storage_Type', createS3Directive);                                                 // 104
RocketChat.settings.get('FileUpload_S3_Bucket', createS3Directive);                                                    // 106
RocketChat.settings.get('FileUpload_S3_Acl', createS3Directive);                                                       // 108
RocketChat.settings.get('FileUpload_S3_AWSAccessKeyId', function (key, value) {                                        // 110
	S3accessKey = value;                                                                                                  // 111
	createS3Directive();                                                                                                  // 112
});                                                                                                                    // 113
RocketChat.settings.get('FileUpload_S3_AWSSecretAccessKey', function (key, value) {                                    // 115
	S3secretKey = value;                                                                                                  // 116
	createS3Directive();                                                                                                  // 117
});                                                                                                                    // 118
RocketChat.settings.get('FileUpload_S3_URLExpiryTimeSpan', function (key, value) {                                     // 120
	S3expiryTimeSpan = value;                                                                                             // 121
	createS3Directive();                                                                                                  // 122
});                                                                                                                    // 123
RocketChat.settings.get('FileUpload_S3_CDN', createS3Directive);                                                       // 125
RocketChat.settings.get('FileUpload_S3_Region', createS3Directive);                                                    // 127
RocketChat.settings.get('FileUpload_S3_BucketURL', createS3Directive);                                                 // 129
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"configFileUploadFileSystem.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_file-upload/server/config/configFileUploadFileSystem.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals FileSystemStore:true, FileUpload, UploadFS, RocketChatFile */var storeName = 'fileSystem';                  // 1
FileSystemStore = null;                                                                                                // 5
                                                                                                                       //
var createFileSystemStore = _.debounce(function () {                                                                   // 7
	var stores = UploadFS.getStores();                                                                                    // 8
                                                                                                                       //
	if (stores[storeName]) {                                                                                              // 9
		delete stores[storeName];                                                                                            // 10
	}                                                                                                                     // 11
                                                                                                                       //
	FileSystemStore = new UploadFS.store.Local({                                                                          // 12
		collection: RocketChat.models.Uploads.model,                                                                         // 13
		name: storeName,                                                                                                     // 14
		path: RocketChat.settings.get('FileUpload_FileSystemPath'),                                                          // 15
		//'/tmp/uploads/photos',                                                                                             // 15
		filter: new UploadFS.Filter({                                                                                        // 16
			onCheck: FileUpload.validateFileUpload                                                                              // 17
		}),                                                                                                                  // 16
		transformWrite: function (readStream, writeStream, fileId, file) {                                                   // 19
			if (RocketChatFile.enabled === false || !/^image\/((x-windows-)?bmp|p?jpeg|png)$/.test(file.type)) {                // 20
				return readStream.pipe(writeStream);                                                                               // 21
			}                                                                                                                   // 22
                                                                                                                       //
			var stream = undefined;                                                                                             // 24
                                                                                                                       //
			var identify = function (err, data) {                                                                               // 26
				if (err != null) {                                                                                                 // 27
					return stream.pipe(writeStream);                                                                                  // 28
				}                                                                                                                  // 29
                                                                                                                       //
				file.identify = {                                                                                                  // 31
					format: data.format,                                                                                              // 32
					size: data.size                                                                                                   // 33
				};                                                                                                                 // 31
                                                                                                                       //
				if ([null, undefined, '', 'Unknown', 'Undefined'].indexOf(data.Orientation) === -1) {                              // 36
					return RocketChatFile.gm(stream).autoOrient().stream().pipe(writeStream);                                         // 37
				} else {                                                                                                           // 38
					return stream.pipe(writeStream);                                                                                  // 39
				}                                                                                                                  // 40
			};                                                                                                                  // 41
                                                                                                                       //
			stream = RocketChatFile.gm(readStream).identify(identify).stream();                                                 // 43
			return;                                                                                                             // 44
		}                                                                                                                    // 45
	});                                                                                                                   // 12
}, 500);                                                                                                               // 47
                                                                                                                       //
RocketChat.settings.get('FileUpload_FileSystemPath', createFileSystemStore);                                           // 49
                                                                                                                       //
var fs = Npm.require('fs');                                                                                            // 51
                                                                                                                       //
FileUpload.addHandler(storeName, {                                                                                     // 53
	get: function (file, req, res) {                                                                                      // 54
		var filePath = FileSystemStore.getFilePath(file._id, file);                                                          // 55
                                                                                                                       //
		try {                                                                                                                // 57
			var stat = Meteor.wrapAsync(fs.stat)(filePath);                                                                     // 58
                                                                                                                       //
			if (stat && stat.isFile()) {                                                                                        // 60
				file = FileUpload.addExtensionTo(file);                                                                            // 61
				res.setHeader('Content-Disposition', "attachment; filename*=UTF-8''" + encodeURIComponent(file.name));             // 62
				res.setHeader('Last-Modified', file.uploadedAt.toUTCString());                                                     // 63
				res.setHeader('Content-Type', file.type);                                                                          // 64
				res.setHeader('Content-Length', file.size);                                                                        // 65
				FileSystemStore.getReadStream(file._id, file).pipe(res);                                                           // 67
			}                                                                                                                   // 68
		} catch (e) {                                                                                                        // 69
			res.writeHead(404);                                                                                                 // 70
			res.end();                                                                                                          // 71
			return;                                                                                                             // 72
		}                                                                                                                    // 73
	},                                                                                                                    // 74
	"delete": function (file) {                                                                                           // 53
		return FileSystemStore.delete(file._id);                                                                             // 77
	}                                                                                                                     // 78
});                                                                                                                    // 53
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"configFileUploadGoogleStorage.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_file-upload/server/config/configFileUploadGoogleStorage.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals FileUpload, Slingshot, SystemLogger */var crypto = Npm.require('crypto');                                   // 1
                                                                                                                       //
function generateUrlParts(_ref) {                                                                                      // 5
	var file = _ref.file;                                                                                                 // 5
	var accessId = RocketChat.settings.get('FileUpload_GoogleStorage_AccessId');                                          // 6
	var secret = RocketChat.settings.get('FileUpload_GoogleStorage_Secret');                                              // 7
                                                                                                                       //
	if (!file || !file.googleCloudStorage || _.isEmpty(accessId) || _.isEmpty(secret)) {                                  // 9
		return;                                                                                                              // 10
	}                                                                                                                     // 11
                                                                                                                       //
	return {                                                                                                              // 13
		accessId: encodeURIComponent(accessId),                                                                              // 14
		secret: secret,                                                                                                      // 15
		path: file.googleCloudStorage.path + file._id                                                                        // 16
	};                                                                                                                    // 13
}                                                                                                                      // 18
                                                                                                                       //
function generateGetURL(_ref2) {                                                                                       // 20
	var file = _ref2.file;                                                                                                // 20
	var parts = generateUrlParts({                                                                                        // 21
		file: file                                                                                                           // 21
	});                                                                                                                   // 21
                                                                                                                       //
	if (!parts) {                                                                                                         // 23
		return;                                                                                                              // 24
	}                                                                                                                     // 25
                                                                                                                       //
	var expires = new Date().getTime() + 120000;                                                                          // 27
	var signature = crypto.createSign('RSA-SHA256').update("GET\n\n\n" + expires + "\n/" + file.googleCloudStorage.bucket + "/" + parts.path).sign(parts.secret, 'base64');
	return file.url + "?GoogleAccessId=" + parts.accessId + "&Expires=" + expires + "&Signature=" + encodeURIComponent(signature);
}                                                                                                                      // 31
                                                                                                                       //
function generateDeleteUrl(_ref3) {                                                                                    // 33
	var file = _ref3.file;                                                                                                // 33
	var parts = generateUrlParts({                                                                                        // 34
		file: file                                                                                                           // 34
	});                                                                                                                   // 34
                                                                                                                       //
	if (!parts) {                                                                                                         // 36
		return;                                                                                                              // 37
	}                                                                                                                     // 38
                                                                                                                       //
	var expires = new Date().getTime() + 5000;                                                                            // 40
	var signature = crypto.createSign('RSA-SHA256').update("DELETE\n\n\n" + expires + "\n/" + file.googleCloudStorage.bucket + "/" + encodeURIComponent(parts.path)).sign(parts.secret, 'base64');
	return "https://" + file.googleCloudStorage.bucket + ".storage.googleapis.com/" + encodeURIComponent(parts.path) + "?GoogleAccessId=" + parts.accessId + "&Expires=" + expires + "&Signature=" + encodeURIComponent(signature);
}                                                                                                                      // 44
                                                                                                                       //
FileUpload.addHandler('googleCloudStorage', {                                                                          // 46
	get: function (file, req, res) {                                                                                      // 47
		var fileUrl = generateGetURL({                                                                                       // 48
			file: file                                                                                                          // 48
		});                                                                                                                  // 48
                                                                                                                       //
		if (fileUrl) {                                                                                                       // 50
			res.setHeader('Location', fileUrl);                                                                                 // 51
			res.writeHead(302);                                                                                                 // 52
		}                                                                                                                    // 53
                                                                                                                       //
		res.end();                                                                                                           // 54
	},                                                                                                                    // 55
	"delete": function (file) {                                                                                           // 46
		if (!file || !file.googleCloudStorage) {                                                                             // 57
			console.warn('Failed to delete a file which is uploaded to Google Cloud Storage, the file and googleCloudStorage properties are not defined.');
			return;                                                                                                             // 59
		}                                                                                                                    // 60
                                                                                                                       //
		var url = generateDeleteUrl({                                                                                        // 62
			file: file                                                                                                          // 62
		});                                                                                                                  // 62
                                                                                                                       //
		if (_.isEmpty(url)) {                                                                                                // 64
			console.warn('Failed to delete a file which is uploaded to Google Cloud Storage, failed to generate a delete url.');
			return;                                                                                                             // 66
		}                                                                                                                    // 67
                                                                                                                       //
		HTTP.call('DELETE', url);                                                                                            // 69
	}                                                                                                                     // 70
});                                                                                                                    // 46
                                                                                                                       //
var createGoogleStorageDirective = _.debounce(function () {                                                            // 73
	var directiveName = 'rocketchat-uploads-gs';                                                                          // 74
	var type = RocketChat.settings.get('FileUpload_Storage_Type');                                                        // 76
	var bucket = RocketChat.settings.get('FileUpload_GoogleStorage_Bucket');                                              // 77
	var accessId = RocketChat.settings.get('FileUpload_GoogleStorage_AccessId');                                          // 78
	var secret = RocketChat.settings.get('FileUpload_GoogleStorage_Secret');                                              // 79
                                                                                                                       //
	if (type === 'GoogleCloudStorage' && !_.isEmpty(secret) && !_.isEmpty(accessId) && !_.isEmpty(bucket)) {              // 81
		if (Slingshot._directives[directiveName]) {                                                                          // 82
			delete Slingshot._directives[directiveName];                                                                        // 83
		}                                                                                                                    // 84
                                                                                                                       //
		var config = {                                                                                                       // 86
			bucket: bucket,                                                                                                     // 87
			GoogleAccessId: accessId,                                                                                           // 88
			GoogleSecretKey: secret,                                                                                            // 89
			key: function () {                                                                                                  // 90
				function _googleCloudStorageKey(file, metaContext) {                                                               // 90
					var path = RocketChat.settings.get('uniqueID') + "/" + metaContext.rid + "/" + this.userId + "/";                 // 91
					var fileId = RocketChat.models.Uploads.insertFileInit(metaContext.rid, this.userId, 'googleCloudStorage', file, {
						googleCloudStorage: {                                                                                            // 92
							bucket: bucket,                                                                                                 // 92
							path: path                                                                                                      // 92
						}                                                                                                                // 92
					});                                                                                                               // 92
					return path + fileId;                                                                                             // 94
				}                                                                                                                  // 95
                                                                                                                       //
				return _googleCloudStorageKey;                                                                                     // 90
			}()                                                                                                                 // 90
		};                                                                                                                   // 86
                                                                                                                       //
		try {                                                                                                                // 98
			Slingshot.createDirective(directiveName, Slingshot.GoogleCloud, config);                                            // 99
		} catch (e) {                                                                                                        // 100
			SystemLogger.error('Error configuring GoogleCloudStorage ->', e.message);                                           // 101
		}                                                                                                                    // 102
	} else {                                                                                                              // 103
		delete Slingshot._directives[directiveName];                                                                         // 104
	}                                                                                                                     // 105
}, 500);                                                                                                               // 106
                                                                                                                       //
RocketChat.settings.get('FileUpload_Storage_Type', createGoogleStorageDirective);                                      // 108
RocketChat.settings.get('FileUpload_GoogleStorage_Bucket', createGoogleStorageDirective);                              // 109
RocketChat.settings.get('FileUpload_GoogleStorage_AccessId', createGoogleStorageDirective);                            // 110
RocketChat.settings.get('FileUpload_GoogleStorage_Secret', createGoogleStorageDirective);                              // 111
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"configFileUploadGridFS.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_file-upload/server/config/configFileUploadGridFS.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals FileUpload, UploadFS */var stream = Npm.require('stream');                                                  // 1
                                                                                                                       //
var zlib = Npm.require('zlib');                                                                                        // 3
                                                                                                                       //
var util = Npm.require('util');                                                                                        // 4
                                                                                                                       //
var logger = new Logger('FileUpload');                                                                                 // 5
                                                                                                                       //
function ExtractRange(options) {                                                                                       // 7
	if (!(this instanceof ExtractRange)) {                                                                                // 8
		return new ExtractRange(options);                                                                                    // 9
	}                                                                                                                     // 10
                                                                                                                       //
	this.start = options.start;                                                                                           // 12
	this.stop = options.stop;                                                                                             // 13
	this.bytes_read = 0;                                                                                                  // 14
	stream.Transform.call(this, options);                                                                                 // 16
}                                                                                                                      // 17
                                                                                                                       //
util.inherits(ExtractRange, stream.Transform);                                                                         // 18
                                                                                                                       //
ExtractRange.prototype._transform = function (chunk, enc, cb) {                                                        // 21
	if (this.bytes_read > this.stop) {                                                                                    // 22
		// done reading                                                                                                      // 23
		this.end();                                                                                                          // 24
	} else if (this.bytes_read + chunk.length < this.start) {// this chunk is still before the start byte                 // 25
	} else {                                                                                                              // 27
		var start = void 0;                                                                                                  // 28
		var stop = void 0;                                                                                                   // 29
                                                                                                                       //
		if (this.start <= this.bytes_read) {                                                                                 // 31
			start = 0;                                                                                                          // 32
		} else {                                                                                                             // 33
			start = this.start - this.bytes_read;                                                                               // 34
		}                                                                                                                    // 35
                                                                                                                       //
		if (this.stop - this.bytes_read + 1 < chunk.length) {                                                                // 36
			stop = this.stop - this.bytes_read + 1;                                                                             // 37
		} else {                                                                                                             // 38
			stop = chunk.length;                                                                                                // 39
		}                                                                                                                    // 40
                                                                                                                       //
		var newchunk = chunk.slice(start, stop);                                                                             // 41
		this.push(newchunk);                                                                                                 // 42
	}                                                                                                                     // 43
                                                                                                                       //
	this.bytes_read += chunk.length;                                                                                      // 44
	cb();                                                                                                                 // 45
};                                                                                                                     // 46
                                                                                                                       //
var getByteRange = function (header) {                                                                                 // 49
	if (header) {                                                                                                         // 50
		var matches = header.match(/(\d+)-(\d+)/);                                                                           // 51
                                                                                                                       //
		if (matches) {                                                                                                       // 52
			return {                                                                                                            // 53
				start: parseInt(matches[1], 10),                                                                                   // 54
				stop: parseInt(matches[2], 10)                                                                                     // 55
			};                                                                                                                  // 53
		}                                                                                                                    // 57
	}                                                                                                                     // 58
                                                                                                                       //
	return null;                                                                                                          // 59
}; // code from: https://github.com/jalik/jalik-ufs/blob/master/ufs-server.js#L91                                      // 60
                                                                                                                       //
                                                                                                                       //
var readFromGridFS = function (storeName, fileId, file, headers, req, res) {                                           // 64
	var store = UploadFS.getStore(storeName);                                                                             // 65
	var rs = store.getReadStream(fileId, file);                                                                           // 66
	var ws = new stream.PassThrough();                                                                                    // 67
	rs.on('error', function (err) {                                                                                       // 69
		store.onReadError.call(store, err, fileId, file);                                                                    // 70
		res.end();                                                                                                           // 71
	});                                                                                                                   // 72
	ws.on('error', function (err) {                                                                                       // 73
		store.onReadError.call(store, err, fileId, file);                                                                    // 74
		res.end();                                                                                                           // 75
	});                                                                                                                   // 76
	ws.on('close', function () {                                                                                          // 77
		// Close output stream at the end                                                                                    // 78
		ws.emit('end');                                                                                                      // 79
	});                                                                                                                   // 80
	var accept = req.headers['accept-encoding'] || ''; // Transform stream                                                // 82
                                                                                                                       //
	store.transformRead(rs, ws, fileId, file, req, headers);                                                              // 85
	var range = getByteRange(req.headers.range);                                                                          // 87
	var out_of_range = false;                                                                                             // 88
                                                                                                                       //
	if (range) {                                                                                                          // 89
		out_of_range = range.start > file.size || range.stop <= range.start || range.stop > file.size;                       // 90
	} // Compress data using gzip                                                                                         // 91
                                                                                                                       //
                                                                                                                       //
	if (accept.match(/\bgzip\b/) && range === null) {                                                                     // 94
		headers['Content-Encoding'] = 'gzip';                                                                                // 95
		delete headers['Content-Length'];                                                                                    // 96
		res.writeHead(200, headers);                                                                                         // 97
		ws.pipe(zlib.createGzip()).pipe(res);                                                                                // 98
	} else if (accept.match(/\bdeflate\b/) && range === null) {                                                           // 99
		// Compress data using deflate                                                                                       // 100
		headers['Content-Encoding'] = 'deflate';                                                                             // 101
		delete headers['Content-Length'];                                                                                    // 102
		res.writeHead(200, headers);                                                                                         // 103
		ws.pipe(zlib.createDeflate()).pipe(res);                                                                             // 104
	} else if (range && out_of_range) {                                                                                   // 105
		// out of range request, return 416                                                                                  // 106
		delete headers['Content-Length'];                                                                                    // 107
		delete headers['Content-Type'];                                                                                      // 108
		delete headers['Content-Disposition'];                                                                               // 109
		delete headers['Last-Modified'];                                                                                     // 110
		headers['Content-Range'] = "bytes */" + file.size;                                                                   // 111
		res.writeHead(416, headers);                                                                                         // 112
		res.end();                                                                                                           // 113
	} else if (range) {                                                                                                   // 114
		headers['Content-Range'] = "bytes " + range.start + "-" + range.stop + "/" + file.size;                              // 115
		delete headers['Content-Length'];                                                                                    // 116
		headers['Content-Length'] = range.stop - range.start + 1;                                                            // 117
		res.writeHead(206, headers);                                                                                         // 118
		logger.debug('File upload extracting range');                                                                        // 119
		ws.pipe(new ExtractRange({                                                                                           // 120
			start: range.start,                                                                                                 // 120
			stop: range.stop                                                                                                    // 120
		})).pipe(res);                                                                                                       // 120
	} else {                                                                                                              // 121
		res.writeHead(200, headers);                                                                                         // 122
		ws.pipe(res);                                                                                                        // 123
	}                                                                                                                     // 124
};                                                                                                                     // 125
                                                                                                                       //
FileUpload.addHandler('rocketchat_uploads', {                                                                          // 127
	get: function (file, req, res) {                                                                                      // 128
		file = FileUpload.addExtensionTo(file);                                                                              // 129
		var headers = {                                                                                                      // 130
			'Content-Disposition': "attachment; filename*=UTF-8''" + encodeURIComponent(file.name),                             // 131
			'Last-Modified': file.uploadedAt.toUTCString(),                                                                     // 132
			'Content-Type': file.type,                                                                                          // 133
			'Content-Length': file.size                                                                                         // 134
		};                                                                                                                   // 130
		return readFromGridFS(file.store, file._id, file, headers, req, res);                                                // 136
	},                                                                                                                    // 137
	"delete": function (file) {                                                                                           // 127
		return Meteor.fileStore.delete(file._id);                                                                            // 139
	}                                                                                                                     // 140
});                                                                                                                    // 127
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"methods":{"sendFileMessage.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_file-upload/server/methods/sendFileMessage.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.methods({                                                                                                       // 1
	'sendFileMessage': function (roomId, store, file) {                                                                   // 2
		var msgData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};                                // 2
                                                                                                                       //
		if (!Meteor.userId()) {                                                                                              // 3
			throw new Meteor.Error('error-invalid-user', 'Invalid user', {                                                      // 4
				method: 'sendFileMessage'                                                                                          // 4
			});                                                                                                                 // 4
		}                                                                                                                    // 5
                                                                                                                       //
		var room = Meteor.call('canAccessRoom', roomId, Meteor.userId());                                                    // 7
                                                                                                                       //
		if (!room) {                                                                                                         // 9
			return false;                                                                                                       // 10
		}                                                                                                                    // 11
                                                                                                                       //
		check(msgData, {                                                                                                     // 13
			avatar: Match.Optional(String),                                                                                     // 14
			emoji: Match.Optional(String),                                                                                      // 15
			alias: Match.Optional(String),                                                                                      // 16
			groupable: Match.Optional(Boolean),                                                                                 // 17
			msg: Match.Optional(String)                                                                                         // 18
		});                                                                                                                  // 13
		RocketChat.models.Uploads.updateFileComplete(file._id, Meteor.userId(), _.omit(file, '_id'));                        // 21
		var fileUrl = "/file-upload/" + file._id + "/" + file.name;                                                          // 23
		var attachment = {                                                                                                   // 25
			title: TAPi18n.__('Attachment_File_Uploaded') + ": " + file.name,                                                   // 26
			description: file.description,                                                                                      // 27
			title_link: fileUrl,                                                                                                // 28
			title_link_download: true                                                                                           // 29
		};                                                                                                                   // 25
                                                                                                                       //
		if (/^image\/.+/.test(file.type)) {                                                                                  // 32
			attachment.image_url = fileUrl;                                                                                     // 33
			attachment.image_type = file.type;                                                                                  // 34
			attachment.image_size = file.size;                                                                                  // 35
                                                                                                                       //
			if (file.identify && file.identify.size) {                                                                          // 36
				attachment.image_dimensions = file.identify.size;                                                                  // 37
			}                                                                                                                   // 38
		} else if (/^audio\/.+/.test(file.type)) {                                                                           // 39
			attachment.audio_url = fileUrl;                                                                                     // 40
			attachment.audio_type = file.type;                                                                                  // 41
			attachment.audio_size = file.size;                                                                                  // 42
		} else if (/^video\/.+/.test(file.type)) {                                                                           // 43
			attachment.video_url = fileUrl;                                                                                     // 44
			attachment.video_type = file.type;                                                                                  // 45
			attachment.video_size = file.size;                                                                                  // 46
		}                                                                                                                    // 47
                                                                                                                       //
		var user = Meteor.user();                                                                                            // 49
		var msg = Object.assign({                                                                                            // 50
			_id: Random.id(),                                                                                                   // 51
			rid: roomId,                                                                                                        // 52
			ts: new Date(),                                                                                                     // 53
			msg: '',                                                                                                            // 54
			file: {                                                                                                             // 55
				_id: file._id,                                                                                                     // 56
				name: file.name                                                                                                    // 57
			},                                                                                                                  // 55
			groupable: false,                                                                                                   // 59
			attachments: [attachment]                                                                                           // 60
		}, msgData);                                                                                                         // 50
		msg = Meteor.call('sendMessage', msg);                                                                               // 63
		Meteor.defer(function () {                                                                                           // 65
			return RocketChat.callbacks.run('afterFileUpload', {                                                                // 65
				user: user,                                                                                                        // 65
				room: room,                                                                                                        // 65
				message: msg                                                                                                       // 65
			});                                                                                                                 // 65
		});                                                                                                                  // 65
		return msg;                                                                                                          // 67
	}                                                                                                                     // 68
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getS3FileUrl.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_file-upload/server/methods/getS3FileUrl.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var crypto = Npm.require('crypto');                                                                                    // 1
                                                                                                                       //
var protectedFiles = void 0;                                                                                           // 2
var S3accessKey = void 0;                                                                                              // 3
var S3secretKey = void 0;                                                                                              // 4
var S3expiryTimeSpan = void 0;                                                                                         // 5
RocketChat.settings.get('FileUpload_ProtectFiles', function (key, value) {                                             // 7
	protectedFiles = value;                                                                                               // 8
});                                                                                                                    // 9
RocketChat.settings.get('FileUpload_S3_AWSAccessKeyId', function (key, value) {                                        // 11
	S3accessKey = value;                                                                                                  // 12
});                                                                                                                    // 13
RocketChat.settings.get('FileUpload_S3_AWSSecretAccessKey', function (key, value) {                                    // 15
	S3secretKey = value;                                                                                                  // 16
});                                                                                                                    // 17
RocketChat.settings.get('FileUpload_S3_URLExpiryTimeSpan', function (key, value) {                                     // 19
	S3expiryTimeSpan = value;                                                                                             // 20
});                                                                                                                    // 21
Meteor.methods({                                                                                                       // 23
	getS3FileUrl: function (fileId) {                                                                                     // 24
		if (protectedFiles && !Meteor.userId()) {                                                                            // 25
			throw new Meteor.Error('error-invalid-user', 'Invalid user', {                                                      // 26
				method: 'sendFileMessage'                                                                                          // 26
			});                                                                                                                 // 26
		}                                                                                                                    // 27
                                                                                                                       //
		var file = RocketChat.models.Uploads.findOneById(fileId);                                                            // 28
		var resourceURL = "/" + file.s3.bucket + "/" + file.s3.path + file._id;                                              // 29
		var expires = parseInt(new Date().getTime() / 1000) + Math.max(5, S3expiryTimeSpan);                                 // 30
		var StringToSign = "GET\n\n\n" + expires + "\n" + resourceURL;                                                       // 31
		var signature = crypto.createHmac('sha1', S3secretKey).update(new Buffer(StringToSign, 'utf-8')).digest('base64');   // 32
		return {                                                                                                             // 33
			url: file.url + "?AWSAccessKeyId=" + encodeURIComponent(S3accessKey) + "&Expires=" + expires + "&Signature=" + encodeURIComponent(signature)
		};                                                                                                                   // 33
	}                                                                                                                     // 36
});                                                                                                                    // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"startup":{"settings.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_file-upload/server/startup/settings.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
RocketChat.settings.addGroup('FileUpload', function () {                                                               // 1
	this.add('FileUpload_Enabled', true, {                                                                                // 2
		type: 'boolean',                                                                                                     // 3
		"public": true                                                                                                       // 4
	});                                                                                                                   // 2
	this.add('FileUpload_MaxFileSize', 2097152, {                                                                         // 7
		type: 'int',                                                                                                         // 8
		"public": true                                                                                                       // 9
	});                                                                                                                   // 7
	this.add('FileUpload_MediaTypeWhiteList', 'image/*,audio/*,video/*,application/zip,application/x-rar-compressed,application/pdf,text/plain,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document', {
		type: 'string',                                                                                                      // 13
		"public": true,                                                                                                      // 14
		i18nDescription: 'FileUpload_MediaTypeWhiteListDescription'                                                          // 15
	});                                                                                                                   // 12
	this.add('FileUpload_ProtectFiles', true, {                                                                           // 18
		type: 'boolean',                                                                                                     // 19
		"public": true,                                                                                                      // 20
		i18nDescription: 'FileUpload_ProtectFilesDescription'                                                                // 21
	});                                                                                                                   // 18
	this.add('FileUpload_Storage_Type', 'GridFS', {                                                                       // 24
		type: 'select',                                                                                                      // 25
		values: [{                                                                                                           // 26
			key: 'GridFS',                                                                                                      // 27
			i18nLabel: 'GridFS'                                                                                                 // 28
		}, {                                                                                                                 // 26
			key: 'AmazonS3',                                                                                                    // 30
			i18nLabel: 'AmazonS3'                                                                                               // 31
		}, {                                                                                                                 // 29
			key: 'GoogleCloudStorage',                                                                                          // 33
			i18nLabel: 'GoogleCloudStorage'                                                                                     // 34
		}, {                                                                                                                 // 32
			key: 'FileSystem',                                                                                                  // 36
			i18nLabel: 'FileSystem'                                                                                             // 37
		}],                                                                                                                  // 35
		"public": true                                                                                                       // 39
	});                                                                                                                   // 24
	this.section('Amazon S3', function () {                                                                               // 42
		this.add('FileUpload_S3_Bucket', '', {                                                                               // 43
			type: 'string',                                                                                                     // 44
			enableQuery: {                                                                                                      // 45
				_id: 'FileUpload_Storage_Type',                                                                                    // 46
				value: 'AmazonS3'                                                                                                  // 47
			}                                                                                                                   // 45
		});                                                                                                                  // 43
		this.add('FileUpload_S3_Acl', '', {                                                                                  // 50
			type: 'string',                                                                                                     // 51
			enableQuery: {                                                                                                      // 52
				_id: 'FileUpload_Storage_Type',                                                                                    // 53
				value: 'AmazonS3'                                                                                                  // 54
			}                                                                                                                   // 52
		});                                                                                                                  // 50
		this.add('FileUpload_S3_AWSAccessKeyId', '', {                                                                       // 57
			type: 'string',                                                                                                     // 58
			enableQuery: {                                                                                                      // 59
				_id: 'FileUpload_Storage_Type',                                                                                    // 60
				value: 'AmazonS3'                                                                                                  // 61
			}                                                                                                                   // 59
		});                                                                                                                  // 57
		this.add('FileUpload_S3_AWSSecretAccessKey', '', {                                                                   // 64
			type: 'string',                                                                                                     // 65
			enableQuery: {                                                                                                      // 66
				_id: 'FileUpload_Storage_Type',                                                                                    // 67
				value: 'AmazonS3'                                                                                                  // 68
			}                                                                                                                   // 66
		});                                                                                                                  // 64
		this.add('FileUpload_S3_CDN', '', {                                                                                  // 71
			type: 'string',                                                                                                     // 72
			enableQuery: {                                                                                                      // 73
				_id: 'FileUpload_Storage_Type',                                                                                    // 74
				value: 'AmazonS3'                                                                                                  // 75
			}                                                                                                                   // 73
		});                                                                                                                  // 71
		this.add('FileUpload_S3_Region', '', {                                                                               // 78
			type: 'string',                                                                                                     // 79
			enableQuery: {                                                                                                      // 80
				_id: 'FileUpload_Storage_Type',                                                                                    // 81
				value: 'AmazonS3'                                                                                                  // 82
			}                                                                                                                   // 80
		});                                                                                                                  // 78
		this.add('FileUpload_S3_BucketURL', '', {                                                                            // 85
			type: 'string',                                                                                                     // 86
			enableQuery: {                                                                                                      // 87
				_id: 'FileUpload_Storage_Type',                                                                                    // 88
				value: 'AmazonS3'                                                                                                  // 89
			},                                                                                                                  // 87
			i18nDescription: 'Override_URL_to_which_files_are_uploaded_This_url_also_used_for_downloads_unless_a_CDN_is_given.'
		});                                                                                                                  // 85
		this.add('FileUpload_S3_URLExpiryTimeSpan', 120, {                                                                   // 93
			type: 'int',                                                                                                        // 94
			enableQuery: {                                                                                                      // 95
				_id: 'FileUpload_Storage_Type',                                                                                    // 96
				value: 'AmazonS3'                                                                                                  // 97
			},                                                                                                                  // 95
			i18nDescription: 'FileUpload_S3_URLExpiryTimeSpan_Description'                                                      // 99
		});                                                                                                                  // 93
	});                                                                                                                   // 101
	this.section('Google Cloud Storage', function () {                                                                    // 103
		this.add('FileUpload_GoogleStorage_Bucket', '', {                                                                    // 104
			type: 'string',                                                                                                     // 105
			"private": true,                                                                                                    // 106
			enableQuery: {                                                                                                      // 107
				_id: 'FileUpload_Storage_Type',                                                                                    // 108
				value: 'GoogleCloudStorage'                                                                                        // 109
			}                                                                                                                   // 107
		});                                                                                                                  // 104
		this.add('FileUpload_GoogleStorage_AccessId', '', {                                                                  // 112
			type: 'string',                                                                                                     // 113
			"private": true,                                                                                                    // 114
			enableQuery: {                                                                                                      // 115
				_id: 'FileUpload_Storage_Type',                                                                                    // 116
				value: 'GoogleCloudStorage'                                                                                        // 117
			}                                                                                                                   // 115
		});                                                                                                                  // 112
		this.add('FileUpload_GoogleStorage_Secret', '', {                                                                    // 120
			type: 'string',                                                                                                     // 121
			multiline: true,                                                                                                    // 122
			"private": true,                                                                                                    // 123
			enableQuery: {                                                                                                      // 124
				_id: 'FileUpload_Storage_Type',                                                                                    // 125
				value: 'GoogleCloudStorage'                                                                                        // 126
			}                                                                                                                   // 124
		});                                                                                                                  // 120
	});                                                                                                                   // 129
	this.section('File System', function () {                                                                             // 131
		this.add('FileUpload_FileSystemPath', '', {                                                                          // 132
			type: 'string',                                                                                                     // 133
			enableQuery: {                                                                                                      // 134
				_id: 'FileUpload_Storage_Type',                                                                                    // 135
				value: 'FileSystem'                                                                                                // 136
			}                                                                                                                   // 134
		});                                                                                                                  // 132
	});                                                                                                                   // 139
	this.add('FileUpload_Enabled_Direct', true, {                                                                         // 141
		type: 'boolean',                                                                                                     // 142
		"public": true                                                                                                       // 143
	});                                                                                                                   // 141
});                                                                                                                    // 145
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"node_modules":{"filesize":{"package.json":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ../../.meteor/local/isopacks/rocketchat_file-upload/npm/node_modules/filesize/package.json                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.name = "filesize";
exports.version = "3.3.0";
exports.main = "lib/filesize";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lib":{"filesize.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/rocketchat_file-upload/node_modules/filesize/lib/filesize.js                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
"use strict";

/**
 * filesize
 *
 * @copyright 2016 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @version 3.3.0
 */
(function (global) {
	var b = /^(b|B)$/;
	var symbol = {
		iec: {
			bits: ["b", "Kib", "Mib", "Gib", "Tib", "Pib", "Eib", "Zib", "Yib"],
			bytes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
		},
		jedec: {
			bits: ["b", "Kb", "Mb", "Gb", "Tb", "Pb", "Eb", "Zb", "Yb"],
			bytes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
		}
	};

	/**
  * filesize
  *
  * @method filesize
  * @param  {Mixed}   arg        String, Int or Float to transform
  * @param  {Object}  descriptor [Optional] Flags
  * @return {String}             Readable file size String
  */
	function filesize(arg) {
		var descriptor = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

		var result = [],
		    val = 0,
		    e = void 0,
		    base = void 0,
		    bits = void 0,
		    ceil = void 0,
		    neg = void 0,
		    num = void 0,
		    output = void 0,
		    round = void 0,
		    unix = void 0,
		    spacer = void 0,
		    standard = void 0,
		    symbols = void 0;

		if (isNaN(arg)) {
			throw new Error("Invalid arguments");
		}

		bits = descriptor.bits === true;
		unix = descriptor.unix === true;
		base = descriptor.base || 2;
		round = descriptor.round !== undefined ? descriptor.round : unix ? 1 : 2;
		spacer = descriptor.spacer !== undefined ? descriptor.spacer : unix ? "" : " ";
		symbols = descriptor.symbols || descriptor.suffixes || {};
		standard = base === 2 ? descriptor.standard || "jedec" : "jedec";
		output = descriptor.output || "string";
		e = descriptor.exponent !== undefined ? descriptor.exponent : -1;
		num = Number(arg);
		neg = num < 0;
		ceil = base > 2 ? 1000 : 1024;

		// Flipping a negative number to determine the size
		if (neg) {
			num = -num;
		}

		// Zero is now a special case because bytes divide by 1
		if (num === 0) {
			result[0] = 0;
			result[1] = unix ? "" : !bits ? "B" : "b";
		} else {
			// Determining the exponent
			if (e === -1 || isNaN(e)) {
				e = Math.floor(Math.log(num) / Math.log(ceil));

				if (e < 0) {
					e = 0;
				}
			}

			// Exceeding supported length, time to reduce & multiply
			if (e > 8) {
				e = 8;
			}

			val = base === 2 ? num / Math.pow(2, e * 10) : num / Math.pow(1000, e);

			if (bits) {
				val = val * 8;

				if (val > ceil && e < 8) {
					val = val / ceil;
					e++;
				}
			}

			result[0] = Number(val.toFixed(e > 0 ? round : 0));
			result[1] = base === 10 && e === 1 ? bits ? "kb" : "kB" : symbol[standard][bits ? "bits" : "bytes"][e];

			if (unix) {
				result[1] = standard === "jedec" ? result[1].charAt(0) : e > 0 ? result[1].replace(/B$/, "") : result[1];

				if (b.test(result[1])) {
					result[0] = Math.floor(result[0]);
					result[1] = "";
				}
			}
		}

		// Decorating a 'diff'
		if (neg) {
			result[0] = -result[0];
		}

		// Applying custom symbol
		result[1] = symbols[result[1]] || result[1];

		// Returning Array, Object, or String (default)
		if (output === "array") {
			return result;
		}

		if (output === "exponent") {
			return e;
		}

		if (output === "object") {
			return { value: result[0], suffix: result[1], symbol: result[1] };
		}

		return result.join(spacer);
	}

	// CommonJS, AMD, script tag
	if (typeof exports !== "undefined") {
		module.exports = filesize;
	} else if (typeof define === "function" && define.amd) {
		define(function () {
			return filesize;
		});
	} else {
		global.filesize = filesize;
	}
})(typeof window !== "undefined" ? window : global);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:file-upload/globalFileRestrictions.js");
require("./node_modules/meteor/rocketchat:file-upload/lib/FileUpload.js");
require("./node_modules/meteor/rocketchat:file-upload/lib/FileUploadBase.js");
require("./node_modules/meteor/rocketchat:file-upload/server/lib/FileUpload.js");
require("./node_modules/meteor/rocketchat:file-upload/server/lib/requests.js");
require("./node_modules/meteor/rocketchat:file-upload/server/config/configFileUploadAmazonS3.js");
require("./node_modules/meteor/rocketchat:file-upload/server/config/configFileUploadFileSystem.js");
require("./node_modules/meteor/rocketchat:file-upload/server/config/configFileUploadGoogleStorage.js");
require("./node_modules/meteor/rocketchat:file-upload/server/config/configFileUploadGridFS.js");
require("./node_modules/meteor/rocketchat:file-upload/server/methods/sendFileMessage.js");
require("./node_modules/meteor/rocketchat:file-upload/server/methods/getS3FileUrl.js");
require("./node_modules/meteor/rocketchat:file-upload/server/startup/settings.js");

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

//# sourceMappingURL=rocketchat_file-upload.js.map
