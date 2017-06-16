(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
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
var RocketChatFile, exports;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:file":{"file.server.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// packages/rocketchat_file/file.server.js                                                        //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                           //
                                                                                                  //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                  //
                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
                                                                                                  //
var Grid = void 0;                                                                                // 1
module.watch(require("gridfs-stream"), {                                                          // 1
	"default": function (v) {                                                                        // 1
		Grid = v;                                                                                       // 1
	}                                                                                                // 1
}, 0);                                                                                            // 1
var stream = void 0;                                                                              // 1
module.watch(require("stream"), {                                                                 // 1
	"default": function (v) {                                                                        // 1
		stream = v;                                                                                     // 1
	}                                                                                                // 1
}, 1);                                                                                            // 1
var fs = void 0;                                                                                  // 1
module.watch(require("fs"), {                                                                     // 1
	"default": function (v) {                                                                        // 1
		fs = v;                                                                                         // 1
	}                                                                                                // 1
}, 2);                                                                                            // 1
var path = void 0;                                                                                // 1
module.watch(require("path"), {                                                                   // 1
	"default": function (v) {                                                                        // 1
		path = v;                                                                                       // 1
	}                                                                                                // 1
}, 3);                                                                                            // 1
var mkdirp = void 0;                                                                              // 1
module.watch(require("mkdirp"), {                                                                 // 1
	"default": function (v) {                                                                        // 1
		mkdirp = v;                                                                                     // 1
	}                                                                                                // 1
}, 4);                                                                                            // 1
var gm = void 0;                                                                                  // 1
module.watch(require("gm"), {                                                                     // 1
	"default": function (v) {                                                                        // 1
		gm = v;                                                                                         // 1
	}                                                                                                // 1
}, 5);                                                                                            // 1
var exec = void 0;                                                                                // 1
module.watch(require("child_process"), {                                                          // 1
	exec: function (v) {                                                                             // 1
		exec = v;                                                                                       // 1
	}                                                                                                // 1
}, 6);                                                                                            // 1
                                                                                                  //
// Fix problem with usernames being converted to object id                                        // 9
Grid.prototype.tryParseObjectId = function () {                                                   // 10
	return false;                                                                                    // 11
}; //TODO: REMOVE RocketChatFile from globals                                                     // 12
                                                                                                  //
                                                                                                  //
RocketChatFile = {                                                                                // 14
	gm: gm,                                                                                          // 15
	enabled: undefined,                                                                              // 16
	enable: function () {                                                                            // 17
		RocketChatFile.enabled = true;                                                                  // 18
		return RocketChat.settings.updateOptionsById('Accounts_AvatarResize', {                         // 19
			alert: undefined                                                                               // 20
		});                                                                                             // 19
	},                                                                                               // 22
	disable: function () {                                                                           // 23
		RocketChatFile.enabled = false;                                                                 // 24
		return RocketChat.settings.updateOptionsById('Accounts_AvatarResize', {                         // 25
			alert: 'The_image_resize_will_not_work_because_we_can_not_detect_ImageMagick_or_GraphicsMagick_installed_in_your_server'
		});                                                                                             // 25
	}                                                                                                // 28
};                                                                                                // 14
                                                                                                  //
var detectGM = function () {                                                                      // 31
	return exec('gm version', Meteor.bindEnvironment(function (error, stdout) {                      // 32
		if (error == null && stdout.indexOf('GraphicsMagick') > -1) {                                   // 33
			RocketChatFile.enable();                                                                       // 34
			RocketChat.Info.GraphicsMagick = {                                                             // 35
				enabled: true,                                                                                // 36
				version: stdout                                                                               // 37
			};                                                                                             // 35
		} else {                                                                                        // 39
			RocketChat.Info.GraphicsMagick = {                                                             // 40
				enabled: false                                                                                // 41
			};                                                                                             // 40
		}                                                                                               // 43
                                                                                                  //
		return exec('convert -version', Meteor.bindEnvironment(function (error, stdout) {               // 44
			if (error == null && stdout.indexOf('ImageMagick') > -1) {                                     // 45
				if (RocketChatFile.enabled !== true) {                                                        // 46
					// Enable GM to work with ImageMagick if no GraphicsMagick                                   // 47
					RocketChatFile.gm = RocketChatFile.gm.subClass({                                             // 48
						imageMagick: true                                                                           // 49
					});                                                                                          // 48
					RocketChatFile.enable();                                                                     // 51
				}                                                                                             // 52
                                                                                                  //
				return RocketChat.Info.ImageMagick = {                                                        // 53
					enabled: true,                                                                               // 54
					version: stdout                                                                              // 55
				};                                                                                            // 53
			} else {                                                                                       // 57
				if (RocketChatFile.enabled !== true) {                                                        // 58
					RocketChatFile.disable();                                                                    // 59
				}                                                                                             // 60
                                                                                                  //
				return RocketChat.Info.ImageMagick = {                                                        // 61
					enabled: false                                                                               // 62
				};                                                                                            // 61
			}                                                                                              // 64
		}));                                                                                            // 65
	}));                                                                                             // 66
};                                                                                                // 67
                                                                                                  //
detectGM();                                                                                       // 69
Meteor.methods({                                                                                  // 71
	'detectGM': function () {                                                                        // 72
		detectGM();                                                                                     // 73
	}                                                                                                // 74
});                                                                                               // 71
                                                                                                  //
RocketChatFile.bufferToStream = function (buffer) {                                               // 77
	var bufferStream = new stream.PassThrough();                                                     // 78
	bufferStream.end(buffer);                                                                        // 79
	return bufferStream;                                                                             // 80
};                                                                                                // 81
                                                                                                  //
RocketChatFile.dataURIParse = function (dataURI) {                                                // 83
	var imageData = dataURI.split(';base64,');                                                       // 84
	return {                                                                                         // 85
		image: imageData[1],                                                                            // 86
		contentType: imageData[0].replace('data:', '')                                                  // 87
	};                                                                                               // 85
};                                                                                                // 89
                                                                                                  //
RocketChatFile.addPassThrough = function (st, fn) {                                               // 91
	var pass = new stream.PassThrough();                                                             // 92
	fn(pass, st);                                                                                    // 93
	return pass;                                                                                     // 94
};                                                                                                // 95
                                                                                                  //
RocketChatFile.GridFS = function () {                                                             // 97
	function _class() {                                                                              // 98
		var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};            // 98
		(0, _classCallCheck3.default)(this, _class);                                                    // 98
		var _config$name = config.name,                                                                 // 98
		    name = _config$name === undefined ? 'file' : _config$name,                                  // 98
		    transformWrite = config.transformWrite;                                                     // 98
		this.name = name;                                                                               // 101
		this.transformWrite = transformWrite;                                                           // 102
		var mongo = Package.mongo.MongoInternals.NpmModule;                                             // 103
		var db = Package.mongo.MongoInternals.defaultRemoteCollectionDriver().mongo.db;                 // 104
		this.store = new Grid(db, mongo);                                                               // 105
		this.findOneSync = Meteor.wrapAsync(this.store.collection(this.name).findOne.bind(this.store.collection(this.name)));
		this.removeSync = Meteor.wrapAsync(this.store.remove.bind(this.store));                         // 107
		this.getFileSync = Meteor.wrapAsync(this.getFile.bind(this));                                   // 108
	}                                                                                                // 109
                                                                                                  //
	_class.prototype.findOne = function () {                                                         // 97
		function findOne(fileName) {                                                                    // 97
			return this.findOneSync({                                                                      // 112
				_id: fileName                                                                                 // 113
			});                                                                                            // 112
		}                                                                                               // 115
                                                                                                  //
		return findOne;                                                                                 // 97
	}();                                                                                             // 97
                                                                                                  //
	_class.prototype.remove = function () {                                                          // 97
		function remove(fileName) {                                                                     // 97
			return this.removeSync({                                                                       // 118
				_id: fileName,                                                                                // 119
				root: this.name                                                                               // 120
			});                                                                                            // 118
		}                                                                                               // 122
                                                                                                  //
		return remove;                                                                                  // 97
	}();                                                                                             // 97
                                                                                                  //
	_class.prototype.createWriteStream = function () {                                               // 97
		function createWriteStream(fileName, contentType) {                                             // 97
			var self = this;                                                                               // 125
			var ws = this.store.createWriteStream({                                                        // 126
				_id: fileName,                                                                                // 127
				filename: fileName,                                                                           // 128
				mode: 'w',                                                                                    // 129
				root: this.name,                                                                              // 130
				content_type: contentType                                                                     // 131
			});                                                                                            // 126
                                                                                                  //
			if (self.transformWrite != null) {                                                             // 133
				ws = RocketChatFile.addPassThrough(ws, function (rs, ws) {                                    // 134
					var file = {                                                                                 // 135
						name: self.name,                                                                            // 136
						fileName: fileName,                                                                         // 137
						contentType: contentType                                                                    // 138
					};                                                                                           // 135
					return self.transformWrite(file, rs, ws);                                                    // 140
				});                                                                                           // 141
			}                                                                                              // 142
                                                                                                  //
			ws.on('close', function () {                                                                   // 143
				return ws.emit('end');                                                                        // 144
			});                                                                                            // 145
			return ws;                                                                                     // 146
		}                                                                                               // 147
                                                                                                  //
		return createWriteStream;                                                                       // 97
	}();                                                                                             // 97
                                                                                                  //
	_class.prototype.createReadStream = function () {                                                // 97
		function createReadStream(fileName) {                                                           // 97
			return this.store.createReadStream({                                                           // 150
				_id: fileName,                                                                                // 151
				root: this.name                                                                               // 152
			});                                                                                            // 150
		}                                                                                               // 154
                                                                                                  //
		return createReadStream;                                                                        // 97
	}();                                                                                             // 97
                                                                                                  //
	_class.prototype.getFileWithReadStream = function () {                                           // 97
		function getFileWithReadStream(fileName) {                                                      // 97
			var file = this.findOne(fileName);                                                             // 157
                                                                                                  //
			if (file == null) {                                                                            // 158
				return null;                                                                                  // 159
			}                                                                                              // 160
                                                                                                  //
			var rs = this.createReadStream(fileName);                                                      // 161
			return {                                                                                       // 162
				readStream: rs,                                                                               // 163
				contentType: file.contentType,                                                                // 164
				length: file.length,                                                                          // 165
				uploadDate: file.uploadDate                                                                   // 166
			};                                                                                             // 162
		}                                                                                               // 168
                                                                                                  //
		return getFileWithReadStream;                                                                   // 97
	}();                                                                                             // 97
                                                                                                  //
	_class.prototype.getFile = function () {                                                         // 97
		function getFile(fileName, cb) {                                                                // 97
			var file = this.getFileWithReadStream(fileName);                                               // 171
                                                                                                  //
			if (!file) {                                                                                   // 172
				return cb();                                                                                  // 173
			}                                                                                              // 174
                                                                                                  //
			var data = [];                                                                                 // 175
			file.readStream.on('data', Meteor.bindEnvironment(function (chunk) {                           // 176
				return data.push(chunk);                                                                      // 177
			}));                                                                                           // 178
			return file.readStream.on('end', Meteor.bindEnvironment(function () {                          // 179
				return cb(null, {                                                                             // 180
					buffer: Buffer.concat(data),                                                                 // 181
					contentType: file.contentType,                                                               // 182
					length: file.length,                                                                         // 183
					uploadDate: file.uploadDate                                                                  // 184
				});                                                                                           // 180
			}));                                                                                           // 186
		}                                                                                               // 187
                                                                                                  //
		return getFile;                                                                                 // 97
	}();                                                                                             // 97
                                                                                                  //
	_class.prototype.deleteFile = function () {                                                      // 97
		function deleteFile(fileName) {                                                                 // 97
			var file = this.findOne(fileName);                                                             // 190
                                                                                                  //
			if (file == null) {                                                                            // 191
				return undefined;                                                                             // 192
			}                                                                                              // 193
                                                                                                  //
			return this.remove(fileName);                                                                  // 194
		}                                                                                               // 195
                                                                                                  //
		return deleteFile;                                                                              // 97
	}();                                                                                             // 97
                                                                                                  //
	return _class;                                                                                   // 97
}();                                                                                              // 97
                                                                                                  //
RocketChatFile.FileSystem = function () {                                                         // 200
	function _class2() {                                                                             // 201
		var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};            // 201
		(0, _classCallCheck3.default)(this, _class2);                                                   // 201
		var _config$absolutePath = config.absolutePath,                                                 // 201
		    absolutePath = _config$absolutePath === undefined ? '~/uploads' : _config$absolutePath;     // 201
		var transformWrite = config.transformWrite;                                                     // 201
		this.transformWrite = transformWrite;                                                           // 205
                                                                                                  //
		if (absolutePath.split(path.sep)[0] === '~') {                                                  // 206
			var homepath = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;            // 207
                                                                                                  //
			if (homepath != null) {                                                                        // 208
				absolutePath = absolutePath.replace('~', homepath);                                           // 209
			} else {                                                                                       // 210
				throw new Error('Unable to resolve "~" in path');                                             // 211
			}                                                                                              // 212
		}                                                                                               // 213
                                                                                                  //
		this.absolutePath = path.resolve(absolutePath);                                                 // 214
		mkdirp.sync(this.absolutePath);                                                                 // 215
		this.statSync = Meteor.wrapAsync(fs.stat.bind(fs));                                             // 216
		this.unlinkSync = Meteor.wrapAsync(fs.unlink.bind(fs));                                         // 217
		this.getFileSync = Meteor.wrapAsync(this.getFile.bind(this));                                   // 218
	}                                                                                                // 219
                                                                                                  //
	_class2.prototype.createWriteStream = function () {                                              // 200
		function createWriteStream(fileName, contentType) {                                             // 200
			var self = this;                                                                               // 222
			var ws = fs.createWriteStream(path.join(this.absolutePath, fileName));                         // 223
                                                                                                  //
			if (self.transformWrite != null) {                                                             // 224
				ws = RocketChatFile.addPassThrough(ws, function (rs, ws) {                                    // 225
					var file = {                                                                                 // 226
						fileName: fileName,                                                                         // 227
						contentType: contentType                                                                    // 228
					};                                                                                           // 226
					return self.transformWrite(file, rs, ws);                                                    // 230
				});                                                                                           // 231
			}                                                                                              // 232
                                                                                                  //
			ws.on('close', function () {                                                                   // 233
				return ws.emit('end');                                                                        // 234
			});                                                                                            // 235
			return ws;                                                                                     // 236
		}                                                                                               // 237
                                                                                                  //
		return createWriteStream;                                                                       // 200
	}();                                                                                             // 200
                                                                                                  //
	_class2.prototype.createReadStream = function () {                                               // 200
		function createReadStream(fileName) {                                                           // 200
			return fs.createReadStream(path.join(this.absolutePath, fileName));                            // 240
		}                                                                                               // 241
                                                                                                  //
		return createReadStream;                                                                        // 200
	}();                                                                                             // 200
                                                                                                  //
	_class2.prototype.stat = function () {                                                           // 200
		function stat(fileName) {                                                                       // 200
			return this.statSync(path.join(this.absolutePath, fileName));                                  // 244
		}                                                                                               // 245
                                                                                                  //
		return stat;                                                                                    // 200
	}();                                                                                             // 200
                                                                                                  //
	_class2.prototype.remove = function () {                                                         // 200
		function remove(fileName) {                                                                     // 200
			return this.unlinkSync(path.join(this.absolutePath, fileName));                                // 248
		}                                                                                               // 249
                                                                                                  //
		return remove;                                                                                  // 200
	}();                                                                                             // 200
                                                                                                  //
	_class2.prototype.getFileWithReadStream = function () {                                          // 200
		function getFileWithReadStream(fileName) {                                                      // 200
			try {                                                                                          // 252
				var stat = this.stat(fileName);                                                               // 253
				var rs = this.createReadStream(fileName);                                                     // 254
				return {                                                                                      // 255
					readStream: rs,                                                                              // 256
					// contentType: file.contentType                                                             // 257
					length: stat.size                                                                            // 258
				};                                                                                            // 255
			} catch (error1) {                                                                             // 260
				return null;                                                                                  // 261
			}                                                                                              // 262
		}                                                                                               // 263
                                                                                                  //
		return getFileWithReadStream;                                                                   // 200
	}();                                                                                             // 200
                                                                                                  //
	_class2.prototype.getFile = function () {                                                        // 200
		function getFile(fileName, cb) {                                                                // 200
			var file = this.getFileWithReadStream(fileName);                                               // 266
                                                                                                  //
			if (!file) {                                                                                   // 267
				return cb();                                                                                  // 268
			}                                                                                              // 269
                                                                                                  //
			var data = [];                                                                                 // 270
			file.readStream.on('data', Meteor.bindEnvironment(function (chunk) {                           // 271
				return data.push(chunk);                                                                      // 272
			}));                                                                                           // 273
			return file.readStream.on('end', Meteor.bindEnvironment(function () {                          // 274
				return {                                                                                      // 275
					buffer: Buffer.concat(data)({                                                                // 276
						contentType: file.contentType,                                                              // 277
						length: file.length,                                                                        // 278
						uploadDate: file.uploadDate                                                                 // 279
					})                                                                                           // 276
				};                                                                                            // 275
			}));                                                                                           // 282
		}                                                                                               // 283
                                                                                                  //
		return getFile;                                                                                 // 200
	}();                                                                                             // 200
                                                                                                  //
	_class2.prototype.deleteFile = function () {                                                     // 200
		function deleteFile(fileName) {                                                                 // 200
			try {                                                                                          // 286
				return this.remove(fileName);                                                                 // 287
			} catch (error1) {                                                                             // 288
				return null;                                                                                  // 289
			}                                                                                              // 290
		}                                                                                               // 291
                                                                                                  //
		return deleteFile;                                                                              // 200
	}();                                                                                             // 200
                                                                                                  //
	return _class2;                                                                                  // 200
}();                                                                                              // 200
////////////////////////////////////////////////////////////////////////////////////////////////////

},"node_modules":{"gridfs-stream":{"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// node_modules/meteor/rocketchat_file/node_modules/gridfs-stream/index.js                        //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
module.exports = exports = require('./lib');

////////////////////////////////////////////////////////////////////////////////////////////////////

}},"mkdirp":{"package.json":function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// .npm/package/node_modules/mkdirp/package.json                                                  //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
exports.name = "mkdirp";
exports.version = "0.5.1";
exports.main = "index.js";

////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// node_modules/meteor/rocketchat_file/node_modules/mkdirp/index.js                               //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var path = require('path');
var fs = require('fs');
var _0777 = parseInt('0777', 8);

module.exports = mkdirP.mkdirp = mkdirP.mkdirP = mkdirP;

function mkdirP (p, opts, f, made) {
    if (typeof opts === 'function') {
        f = opts;
        opts = {};
    }
    else if (!opts || typeof opts !== 'object') {
        opts = { mode: opts };
    }
    
    var mode = opts.mode;
    var xfs = opts.fs || fs;
    
    if (mode === undefined) {
        mode = _0777 & (~process.umask());
    }
    if (!made) made = null;
    
    var cb = f || function () {};
    p = path.resolve(p);
    
    xfs.mkdir(p, mode, function (er) {
        if (!er) {
            made = made || p;
            return cb(null, made);
        }
        switch (er.code) {
            case 'ENOENT':
                mkdirP(path.dirname(p), opts, function (er, made) {
                    if (er) cb(er, made);
                    else mkdirP(p, opts, cb, made);
                });
                break;

            // In the case of any other error, just see if there's a dir
            // there already.  If so, then hooray!  If not, then something
            // is borked.
            default:
                xfs.stat(p, function (er2, stat) {
                    // if the stat fails, then that's super weird.
                    // let the original error be the failure reason.
                    if (er2 || !stat.isDirectory()) cb(er, made)
                    else cb(null, made);
                });
                break;
        }
    });
}

mkdirP.sync = function sync (p, opts, made) {
    if (!opts || typeof opts !== 'object') {
        opts = { mode: opts };
    }
    
    var mode = opts.mode;
    var xfs = opts.fs || fs;
    
    if (mode === undefined) {
        mode = _0777 & (~process.umask());
    }
    if (!made) made = null;

    p = path.resolve(p);

    try {
        xfs.mkdirSync(p, mode);
        made = made || p;
    }
    catch (err0) {
        switch (err0.code) {
            case 'ENOENT' :
                made = sync(path.dirname(p), opts, made);
                sync(p, opts, made);
                break;

            // In the case of any other error, just see if there's a dir
            // there already.  If so, then hooray!  If not, then something
            // is borked.
            default:
                var stat;
                try {
                    stat = xfs.statSync(p);
                }
                catch (err1) {
                    throw err0;
                }
                if (!stat.isDirectory()) throw err0;
                break;
        }
    }

    return made;
};

////////////////////////////////////////////////////////////////////////////////////////////////////

}},"gm":{"package.json":function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// .npm/package/node_modules/gm/package.json                                                      //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
exports.name = "gm";
exports.version = "1.23.0";
exports.main = "./index";

////////////////////////////////////////////////////////////////////////////////////////////////////

},"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// node_modules/meteor/rocketchat_file/node_modules/gm/index.js                                   //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //

/**
 * Module dependencies.
 */

var Stream = require('stream').Stream;
var EventEmitter = require('events').EventEmitter;
var util = require('util');

util.inherits(gm, EventEmitter);

/**
 * Constructor.
 *
 * @param {String|Number} path - path to img source or ReadableStream or width of img to create
 * @param {Number} [height] - optional filename of ReadableStream or height of img to create
 * @param {String} [color] - optional hex background color of created img
 */

function gm (source, height, color) {
  var width;

  if (!(this instanceof gm)) {
    return new gm(source, height, color);
  }

  EventEmitter.call(this);

  this._options = {};
  this.options(this.__proto__._options);

  this.data = {};
  this._in = [];
  this._out = [];
  this._outputFormat = null;
  this._subCommand = 'convert';

  if (source instanceof Stream) {
    this.sourceStream = source;
    source = height || 'unknown.jpg';
  } else if (Buffer.isBuffer(source)) {
    this.sourceBuffer = source;
    source = height || 'unknown.jpg';
  } else if (height) {
    // new images
    width = source;
    source = "";

    this.in("-size", width + "x" + height);

    if (color) {
      this.in("xc:"+ color);
    }
  }

  if (typeof source === "string") {
    // then source is a path

    // parse out gif frame brackets from filename
    // since stream doesn't use source path
    // eg. "filename.gif[0]"
    var frames = source.match(/(\[.+\])$/);
    if (frames) {
      this.sourceFrames = source.substr(frames.index, frames[0].length);
      source = source.substr(0, frames.index);
    }
  }

  this.source = source;

  this.addSrcFormatter(function (src) {
    // must be first source formatter

    var inputFromStdin = this.sourceStream || this.sourceBuffer;
    var ret = inputFromStdin ? '-' : this.source;

    if (ret && this.sourceFrames) ret += this.sourceFrames;

    src.length = 0;
    src[0] = ret;
  });
}

/**
 * Subclasses the gm constructor with custom options.
 *
 * @param {options} options
 * @return {gm} the subclasses gm constructor
 */

var parent = gm;
gm.subClass = function subClass (options) {
  function gm (source, height, color) {
    if (!(this instanceof parent)) {
      return new gm(source, height, color);
    }

    parent.call(this, source, height, color);
  }

  gm.prototype.__proto__ = parent.prototype;
  gm.prototype._options = {};
  gm.prototype.options(options);

  return gm;
}

/**
 * Augment the prototype.
 */

require("./lib/options")(gm.prototype);
require("./lib/getters")(gm);
require("./lib/args")(gm.prototype);
require("./lib/drawing")(gm.prototype);
require("./lib/convenience")(gm.prototype);
require("./lib/command")(gm.prototype);
require("./lib/compare")(gm.prototype);
require("./lib/composite")(gm.prototype);
require("./lib/montage")(gm.prototype);

/**
 * Expose.
 */

module.exports = exports = gm;
module.exports.utils = require('./lib/utils');
module.exports.compare = require('./lib/compare')();
module.exports.version = require('./package.json').version;

////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/rocketchat:file/file.server.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['rocketchat:file'] = {}, {
  RocketChatFile: RocketChatFile
});

})();

//# sourceMappingURL=rocketchat_file.js.map
