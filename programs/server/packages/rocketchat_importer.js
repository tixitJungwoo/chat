(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var check = Package.check.check;
var Match = Package.check.Match;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var Logger = Package['rocketchat:logger'].Logger;
var SystemLogger = Package['rocketchat:logger'].SystemLogger;
var LoggerManager = Package['rocketchat:logger'].LoggerManager;
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
var __coffeescriptShare, Importer;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:importer":{"lib":{"_importer.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_importer/lib/_importer.coffee.js                                                            //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Importer = {};                                                                                                     // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"importTool.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_importer/lib/importTool.coffee.js                                                           //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Importer.Importers = {};                                                                                           // 1
                                                                                                                   //
Importer.addImporter = function (name, importer, options) {                                                        // 3
  if (Importer.Importers[name] == null) {                                                                          // 4
    return Importer.Importers[name] = {                                                                            // 5
      name: options.name,                                                                                          // 6
      importer: importer,                                                                                          // 7
      mimeType: options.mimeType,                                                                                  // 8
      warnings: options.warnings                                                                                   // 9
    };                                                                                                             // 6
  }                                                                                                                // 11
};                                                                                                                 // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"classes":{"ImporterBase.coffee.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_importer/server/classes/ImporterBase.coffee.js                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var bind = function (fn, me) {                                                                                     // 14
  return function () {                                                                                             // 14
    return fn.apply(me, arguments);                                                                                // 14
  };                                                                                                               // 14
};                                                                                                                 // 14
                                                                                                                   //
Importer.Base = Importer.Base = function () {                                                                      // 14
  Base.MaxBSONSize = 8000000;                                                                                      // 15
  Base.http = Npm.require('http');                                                                                 // 16
  Base.https = Npm.require('https');                                                                               // 17
                                                                                                                   //
  Base.getBSONSize = function (object) {                                                                           // 19
    var BSON, bson;                                                                                                // 24
    BSON = require('bson')["native"]().BSON;                                                                       // 24
    bson = new BSON();                                                                                             // 25
    return bson.calculateObjectSize(object);                                                                       // 14
  };                                                                                                               // 19
                                                                                                                   //
  Base.getBSONSafeArraysFromAnArray = function (theArray) {                                                        // 28
    var BSONSize, i, maxSize, safeArrays;                                                                          // 29
    BSONSize = Importer.Base.getBSONSize(theArray);                                                                // 29
    maxSize = Math.floor(theArray.length / Math.ceil(BSONSize / Importer.Base.MaxBSONSize));                       // 30
    safeArrays = [];                                                                                               // 31
    i = 0;                                                                                                         // 32
                                                                                                                   //
    while (i < theArray.length) {                                                                                  // 33
      safeArrays.push(theArray.slice(i, i += maxSize));                                                            // 34
    }                                                                                                              // 33
                                                                                                                   //
    return safeArrays;                                                                                             // 35
  };                                                                                                               // 28
                                                                                                                   //
  function Base(name, description, mimeType) {                                                                     // 43
    var importId;                                                                                                  // 44
    this.name = name;                                                                                              // 43
    this.description = description;                                                                                // 43
    this.mimeType = mimeType;                                                                                      // 43
    this.uploadFile = bind(this.uploadFile, this);                                                                 // 34
    this.updateRecord = bind(this.updateRecord, this);                                                             // 35
    this.addCountCompleted = bind(this.addCountCompleted, this);                                                   // 36
    this.addCountToTotal = bind(this.addCountToTotal, this);                                                       // 37
    this.updateProgress = bind(this.updateProgress, this);                                                         // 38
    this.getProgress = bind(this.getProgress, this);                                                               // 39
    this.getSelection = bind(this.getSelection, this);                                                             // 40
    this.startImport = bind(this.startImport, this);                                                               // 41
    this.prepare = bind(this.prepare, this);                                                                       // 42
    this.logger = new Logger(this.name + " Importer", {});                                                         // 44
    this.progress = new Importer.Progress(this.name);                                                              // 45
    this.collection = Importer.RawImports;                                                                         // 46
    this.AdmZip = Npm.require('adm-zip');                                                                          // 47
    this.getFileType = Npm.require('file-type');                                                                   // 48
    importId = Importer.Imports.insert({                                                                           // 49
      'type': this.name,                                                                                           // 49
      'ts': Date.now(),                                                                                            // 49
      'status': this.progress.step,                                                                                // 49
      'valid': true,                                                                                               // 49
      'user': Meteor.user()._id                                                                                    // 49
    });                                                                                                            // 49
    this.importRecord = Importer.Imports.findOne(importId);                                                        // 50
    this.users = {};                                                                                               // 51
    this.channels = {};                                                                                            // 52
    this.messages = {};                                                                                            // 53
  }                                                                                                                // 43
                                                                                                                   //
  Base.prototype.prepare = function (dataURI, sentContentType, fileName) {                                         // 61
    var fileType;                                                                                                  // 64
    fileType = this.getFileType(new Buffer(dataURI.split(',')[1], 'base64'));                                      // 64
    this.logger.debug('Uploaded file information is:', fileType);                                                  // 65
    this.logger.debug('Expected file type is:', this.mimeType);                                                    // 66
                                                                                                                   //
    if (!fileType || fileType.mime !== this.mimeType) {                                                            // 68
      this.logger.warn("Invalid file uploaded for the " + this.name + " importer.");                               // 69
      throw new Meteor.Error('error-invalid-file-uploaded', "Invalid file uploaded to import " + this.name + " data from.", {
        step: 'prepare'                                                                                            // 70
      });                                                                                                          // 70
    }                                                                                                              // 71
                                                                                                                   //
    this.updateProgress(Importer.ProgressStep.PREPARING_STARTED);                                                  // 72
    return this.updateRecord({                                                                                     // 73
      'file': fileName                                                                                             // 73
    });                                                                                                            // 73
  };                                                                                                               // 63
                                                                                                                   //
  Base.prototype.startImport = function (importSelection) {                                                        // 78
    if (importSelection === void 0) {                                                                              // 83
      throw new Error("No selected users and channel data provided to the " + this.name + " importer.");           // 84
    } else if (importSelection.users === void 0) {                                                                 // 83
      throw new Error("Users in the selected data wasn't found, it must but at least an empty array for the " + this.name + " importer.");
    } else if (importSelection.channels === void 0) {                                                              // 85
      throw new Error("Channels in the selected data wasn't found, it must but at least an empty array for the " + this.name + " importer.");
    }                                                                                                              // 85
                                                                                                                   //
    return this.updateProgress(Importer.ProgressStep.IMPORTING_STARTED);                                           // 86
  };                                                                                                               // 82
                                                                                                                   //
  Base.prototype.getSelection = function () {                                                                      // 89
    throw new Error("Invalid 'getSelection' called on " + this.name + ", it must be overridden and super can not be called.");
  };                                                                                                               // 95
                                                                                                                   //
  Base.prototype.getProgress = function () {                                                                       // 93
    return this.progress;                                                                                          // 103
  };                                                                                                               // 102
                                                                                                                   //
  Base.prototype.updateProgress = function (step) {                                                                // 97
    this.progress.step = step;                                                                                     // 110
    this.logger.debug(this.name + " is now at " + step + ".");                                                     // 112
    this.updateRecord({                                                                                            // 113
      'status': this.progress.step                                                                                 // 113
    });                                                                                                            // 113
    return this.progress;                                                                                          // 115
  };                                                                                                               // 109
                                                                                                                   //
  Base.prototype.addCountToTotal = function (count) {                                                              // 106
    this.progress.count.total = this.progress.count.total + count;                                                 // 122
    this.updateRecord({                                                                                            // 123
      'count.total': this.progress.count.total                                                                     // 123
    });                                                                                                            // 123
    return this.progress;                                                                                          // 125
  };                                                                                                               // 121
                                                                                                                   //
  Base.prototype.addCountCompleted = function (count) {                                                            // 114
    this.progress.count.completed = this.progress.count.completed + count;                                         // 132
                                                                                                                   //
    if (this.progress.count.completed % 500 === 0 || this.progress.count.completed >= this.progress.count.total) {
      this.updateRecord({                                                                                          // 137
        'count.completed': this.progress.count.completed                                                           // 137
      });                                                                                                          // 137
    }                                                                                                              // 120
                                                                                                                   //
    return this.progress;                                                                                          // 139
  };                                                                                                               // 131
                                                                                                                   //
  Base.prototype.updateRecord = function (fields) {                                                                // 124
    Importer.Imports.update({                                                                                      // 146
      _id: this.importRecord._id                                                                                   // 146
    }, {                                                                                                           // 146
      $set: fields                                                                                                 // 146
    });                                                                                                            // 146
    this.importRecord = Importer.Imports.findOne(this.importRecord._id);                                           // 147
    return this.importRecord;                                                                                      // 149
  };                                                                                                               // 145
                                                                                                                   //
  Base.prototype.uploadFile = function (details, fileUrl, user, room, timeStamp) {                                 // 134
    var requestModule;                                                                                             // 160
    this.logger.debug("Uploading the file " + details.name + " from " + fileUrl + ".");                            // 160
    requestModule = /https/i.test(fileUrl) ? Importer.Base.https : Importer.Base.http;                             // 161
    return requestModule.get(fileUrl, Meteor.bindEnvironment(function (stream) {                                   // 138
      var fileId;                                                                                                  // 164
      fileId = Meteor.fileStore.create(details);                                                                   // 164
                                                                                                                   //
      if (fileId) {                                                                                                // 165
        return Meteor.fileStore.write(stream, fileId, function (err, file) {                                       // 142
          var attachment, msg, ref, url;                                                                           // 167
                                                                                                                   //
          if (err) {                                                                                               // 167
            throw new Error(err);                                                                                  // 168
          } else {                                                                                                 // 167
            url = file.url.replace(Meteor.absoluteUrl(), '/');                                                     // 170
            attachment = {                                                                                         // 172
              title: "File Uploaded: " + file.name,                                                                // 173
              title_link: url                                                                                      // 174
            };                                                                                                     // 173
                                                                                                                   //
            if (/^image\/.+/.test(file.type)) {                                                                    // 176
              attachment.image_url = url;                                                                          // 177
              attachment.image_type = file.type;                                                                   // 178
              attachment.image_size = file.size;                                                                   // 179
              attachment.image_dimensions = (ref = file.identify) != null ? ref.size : void 0;                     // 180
            }                                                                                                      // 157
                                                                                                                   //
            if (/^audio\/.+/.test(file.type)) {                                                                    // 182
              attachment.audio_url = url;                                                                          // 183
              attachment.audio_type = file.type;                                                                   // 184
              attachment.audio_size = file.size;                                                                   // 185
            }                                                                                                      // 162
                                                                                                                   //
            if (/^video\/.+/.test(file.type)) {                                                                    // 187
              attachment.video_url = url;                                                                          // 188
              attachment.video_type = file.type;                                                                   // 189
              attachment.video_size = file.size;                                                                   // 190
            }                                                                                                      // 167
                                                                                                                   //
            msg = {                                                                                                // 192
              rid: details.rid,                                                                                    // 193
              ts: timeStamp,                                                                                       // 194
              msg: '',                                                                                             // 195
              file: {                                                                                              // 196
                _id: file._id                                                                                      // 197
              },                                                                                                   // 197
              groupable: false,                                                                                    // 198
              attachments: [attachment]                                                                            // 199
            };                                                                                                     // 193
                                                                                                                   //
            if (details.message_id != null && typeof details.message_id === 'string') {                            // 201
              msg['_id'] = details.message_id;                                                                     // 202
            }                                                                                                      // 180
                                                                                                                   //
            return RocketChat.sendMessage(user, msg, room, true);                                                  // 181
          }                                                                                                        // 182
        });                                                                                                        // 166
      } else {                                                                                                     // 165
        return this.logger.error("Failed to create the store for " + fileUrl + "!!!");                             // 185
      }                                                                                                            // 186
    }));                                                                                                           // 163
  };                                                                                                               // 159
                                                                                                                   //
  return Base;                                                                                                     // 190
}();                                                                                                               // 192
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ImporterProgress.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_importer/server/classes/ImporterProgress.coffee.js                                          //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Importer.Progress = Importer.Progress = function () {                                                              // 2
  function Progress(name) {                                                                                        // 7
    this.name = name;                                                                                              // 7
    this.step = Importer.ProgressStep.NEW;                                                                         // 8
    this.count = {                                                                                                 // 9
      completed: 0,                                                                                                // 9
      total: 0                                                                                                     // 9
    };                                                                                                             // 9
  }                                                                                                                // 7
                                                                                                                   //
  return Progress;                                                                                                 // 11
}();                                                                                                               // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ImporterProgressStep.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_importer/server/classes/ImporterProgressStep.coffee.js                                      //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Importer.ProgressStep = Object.freeze({                                                                            // 2
  NEW: 'importer_new',                                                                                             // 3
  PREPARING_STARTED: 'importer_preparing_started',                                                                 // 4
  PREPARING_USERS: 'importer_preparing_users',                                                                     // 5
  PREPARING_CHANNELS: 'importer_preparing_channels',                                                               // 6
  PREPARING_MESSAGES: 'importer_preparing_messages',                                                               // 7
  USER_SELECTION: 'importer_user_selection',                                                                       // 8
  IMPORTING_STARTED: 'importer_importing_started',                                                                 // 9
  IMPORTING_USERS: 'importer_importing_users',                                                                     // 10
  IMPORTING_CHANNELS: 'importer_importing_channels',                                                               // 11
  IMPORTING_MESSAGES: 'importer_importing_messages',                                                               // 12
  FINISHING: 'importer_finishing',                                                                                 // 13
  DONE: 'importer_done',                                                                                           // 14
  ERROR: 'importer_import_failed',                                                                                 // 15
  CANCELLED: 'importer_import_cancelled'                                                                           // 16
});                                                                                                                // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ImporterSelection.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_importer/server/classes/ImporterSelection.coffee.js                                         //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Importer.Selection = Importer.Selection = function () {                                                            // 2
  function Selection(name, users, channels) {                                                                      // 9
    this.name = name;                                                                                              // 9
    this.users = users;                                                                                            // 9
    this.channels = channels;                                                                                      // 9
  }                                                                                                                // 9
                                                                                                                   //
  return Selection;                                                                                                // 8
}();                                                                                                               // 10
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ImporterSelectionChannel.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_importer/server/classes/ImporterSelectionChannel.coffee.js                                  //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Importer.SelectionChannel = Importer.SelectionChannel = function () {                                              // 2
  function SelectionChannel(channel_id, name, is_archived, do_import, is_private) {                                // 11
    this.channel_id = channel_id;                                                                                  // 11
    this.name = name;                                                                                              // 11
    this.is_archived = is_archived;                                                                                // 11
    this.do_import = do_import;                                                                                    // 11
    this.is_private = is_private;                                                                                  // 11
  }                                                                                                                // 11
                                                                                                                   //
  return SelectionChannel;                                                                                         // 10
}();                                                                                                               // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ImporterSelectionUser.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_importer/server/classes/ImporterSelectionUser.coffee.js                                     //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Importer.SelectionUser = Importer.SelectionUser = function () {                                                    // 2
  function SelectionUser(user_id, username, email, is_deleted, is_bot, do_import) {                                // 12
    this.user_id = user_id;                                                                                        // 12
    this.username = username;                                                                                      // 12
    this.email = email;                                                                                            // 12
    this.is_deleted = is_deleted;                                                                                  // 12
    this.is_bot = is_bot;                                                                                          // 12
    this.do_import = do_import;                                                                                    // 12
  }                                                                                                                // 12
                                                                                                                   //
  return SelectionUser;                                                                                            // 11
}();                                                                                                               // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"models":{"Imports.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_importer/server/models/Imports.coffee.js                                                    //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var extend = function (child, parent) {                                                                            // 1
  for (var key in meteorBabelHelpers.sanitizeForInObject(parent)) {                                                // 1
    if (hasProp.call(parent, key)) child[key] = parent[key];                                                       // 1
  }                                                                                                                // 1
                                                                                                                   //
  function ctor() {                                                                                                // 1
    this.constructor = child;                                                                                      // 1
  }                                                                                                                // 1
                                                                                                                   //
  ctor.prototype = parent.prototype;                                                                               // 1
  child.prototype = new ctor();                                                                                    // 1
  child.__super__ = parent.prototype;                                                                              // 1
  return child;                                                                                                    // 1
},                                                                                                                 // 1
    hasProp = {}.hasOwnProperty;                                                                                   // 1
                                                                                                                   //
Importer.Imports = new (Importer.Imports = function (superClass) {                                                 // 1
  extend(Imports, superClass);                                                                                     // 5
                                                                                                                   //
  function Imports() {                                                                                             // 2
    Imports.__super__.constructor.call(this, 'import');                                                            // 3
  }                                                                                                                // 2
                                                                                                                   //
  return Imports;                                                                                                  // 11
}(RocketChat.models._Base))();                                                                                     // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"RawImports.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_importer/server/models/RawImports.coffee.js                                                 //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var extend = function (child, parent) {                                                                            // 1
  for (var key in meteorBabelHelpers.sanitizeForInObject(parent)) {                                                // 1
    if (hasProp.call(parent, key)) child[key] = parent[key];                                                       // 1
  }                                                                                                                // 1
                                                                                                                   //
  function ctor() {                                                                                                // 1
    this.constructor = child;                                                                                      // 1
  }                                                                                                                // 1
                                                                                                                   //
  ctor.prototype = parent.prototype;                                                                               // 1
  child.prototype = new ctor();                                                                                    // 1
  child.__super__ = parent.prototype;                                                                              // 1
  return child;                                                                                                    // 1
},                                                                                                                 // 1
    hasProp = {}.hasOwnProperty;                                                                                   // 1
                                                                                                                   //
Importer.RawImports = new (Importer.RawImports = function (superClass) {                                           // 1
  extend(RawImports, superClass);                                                                                  // 5
                                                                                                                   //
  function RawImports() {                                                                                          // 2
    RawImports.__super__.constructor.call(this, 'raw_imports');                                                    // 3
  }                                                                                                                // 2
                                                                                                                   //
  return RawImports;                                                                                               // 11
}(RocketChat.models._Base))();                                                                                     // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"methods":{"getImportProgress.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_importer/server/methods/getImportProgress.coffee.js                                         //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({                                                                                                   // 1
  getImportProgress: function (name) {                                                                             // 2
    var ref;                                                                                                       // 3
                                                                                                                   //
    if (!Meteor.userId()) {                                                                                        // 3
      throw new Meteor.Error('error-invalid-user', 'Invalid user', {                                               // 4
        method: 'getImportProgress'                                                                                // 4
      });                                                                                                          // 4
    }                                                                                                              // 8
                                                                                                                   //
    if (!RocketChat.authz.hasPermission(Meteor.userId(), 'run-import')) {                                          // 6
      throw new Meteor.Error('error-action-not-allowed', 'Importing is not allowed', {                             // 7
        method: 'setupImporter'                                                                                    // 7
      });                                                                                                          // 7
    }                                                                                                              // 13
                                                                                                                   //
    if (Importer.Importers[name] != null) {                                                                        // 9
      return (ref = Importer.Importers[name].importerInstance) != null ? ref.getProgress() : void 0;               // 10
    } else {                                                                                                       // 9
      throw new Meteor.Error('error-importer-not-defined', 'The importer was not defined correctly, it is missing the Import class.', {
        method: 'getImportProgress'                                                                                // 12
      });                                                                                                          // 12
    }                                                                                                              // 20
  }                                                                                                                // 2
});                                                                                                                // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"getSelectionData.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_importer/server/methods/getSelectionData.coffee.js                                          //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({                                                                                                   // 1
  getSelectionData: function (name) {                                                                              // 2
    var progress, ref;                                                                                             // 3
                                                                                                                   //
    if (!Meteor.userId()) {                                                                                        // 3
      throw new Meteor.Error('error-invalid-user', 'Invalid user', {                                               // 4
        method: 'getSelectionData'                                                                                 // 4
      });                                                                                                          // 4
    }                                                                                                              // 8
                                                                                                                   //
    if (!RocketChat.authz.hasPermission(Meteor.userId(), 'run-import')) {                                          // 6
      throw new Meteor.Error('error-action-not-allowed', 'Importing is not allowed', {                             // 7
        method: 'setupImporter'                                                                                    // 7
      });                                                                                                          // 7
    }                                                                                                              // 13
                                                                                                                   //
    if (((ref = Importer.Importers[name]) != null ? ref.importerInstance : void 0) != null) {                      // 9
      progress = Importer.Importers[name].importerInstance.getProgress();                                          // 10
                                                                                                                   //
      switch (progress.step) {                                                                                     // 11
        case Importer.ProgressStep.USER_SELECTION:                                                                 // 11
          return Importer.Importers[name].importerInstance.getSelection();                                         // 13
                                                                                                                   //
        default:                                                                                                   // 11
          return false;                                                                                            // 15
      }                                                                                                            // 11
    } else {                                                                                                       // 9
      throw new Meteor.Error('error-importer-not-defined', 'The importer was not defined correctly, it is missing the Import class.', {
        method: 'getSelectionData'                                                                                 // 17
      });                                                                                                          // 17
    }                                                                                                              // 26
  }                                                                                                                // 2
});                                                                                                                // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"prepareImport.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_importer/server/methods/prepareImport.js                                                    //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _typeof2 = require("babel-runtime/helpers/typeof");                                                            //
                                                                                                                   //
var _typeof3 = _interopRequireDefault(_typeof2);                                                                   //
                                                                                                                   //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                  //
                                                                                                                   //
/* globals Importer */Meteor.methods({                                                                             // 1
	prepareImport: function (name, dataURI, contentType, fileName) {                                                  // 4
		if (!Meteor.userId()) {                                                                                          // 5
			throw new Meteor.Error('error-invalid-user', 'Invalid user', {                                                  // 6
				method: 'prepareImport'                                                                                        // 6
			});                                                                                                             // 6
		}                                                                                                                // 7
                                                                                                                   //
		if (!RocketChat.authz.hasPermission(Meteor.userId(), 'run-import')) {                                            // 9
			throw new Meteor.Error('error-action-not-allowed', 'Importing is not allowed', {                                // 10
				method: 'setupImporter'                                                                                        // 10
			});                                                                                                             // 10
		}                                                                                                                // 11
                                                                                                                   //
		check(name, String);                                                                                             // 13
		check(dataURI, String);                                                                                          // 14
		check(fileName, String);                                                                                         // 15
                                                                                                                   //
		if (name && Importer.Importers[name] && Importer.Importers[name].importerInstance) {                             // 17
			var results = Importer.Importers[name].importerInstance.prepare(dataURI, contentType, fileName);                // 18
                                                                                                                   //
			if ((typeof results === "undefined" ? "undefined" : (0, _typeof3.default)(results)) === 'object') {             // 20
				if (results instanceof Promise) {                                                                              // 21
					return results.catch(function (e) {                                                                           // 22
						throw new Meteor.Error(e);                                                                                   // 22
					});                                                                                                           // 22
				} else {                                                                                                       // 23
					return results;                                                                                               // 24
				}                                                                                                              // 25
			}                                                                                                               // 26
		} else if (!name) {                                                                                              // 27
			throw new Meteor.Error('error-importer-not-defined', "No Importer Found: \"" + name + "\"", {                   // 28
				method: 'prepareImport'                                                                                        // 28
			});                                                                                                             // 28
		} else {                                                                                                         // 29
			throw new Meteor.Error('error-importer-not-defined', "The importer, \"" + name + "\", was not defined correctly, it is missing the Import class.", {
				method: 'prepareImport'                                                                                        // 30
			});                                                                                                             // 30
		}                                                                                                                // 31
	}                                                                                                                 // 32
});                                                                                                                // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"restartImport.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_importer/server/methods/restartImport.coffee.js                                             //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({                                                                                                   // 1
  restartImport: function (name) {                                                                                 // 2
    var importer;                                                                                                  // 3
                                                                                                                   //
    if (!Meteor.userId()) {                                                                                        // 3
      throw new Meteor.Error('error-invalid-user', 'Invalid user', {                                               // 4
        method: 'restartImport'                                                                                    // 4
      });                                                                                                          // 4
    }                                                                                                              // 8
                                                                                                                   //
    if (!RocketChat.authz.hasPermission(Meteor.userId(), 'run-import')) {                                          // 6
      throw new Meteor.Error('error-action-not-allowed', 'Importing is not allowed', {                             // 7
        method: 'setupImporter'                                                                                    // 7
      });                                                                                                          // 7
    }                                                                                                              // 13
                                                                                                                   //
    if (Importer.Importers[name] != null) {                                                                        // 9
      importer = Importer.Importers[name];                                                                         // 10
      importer.importerInstance.updateProgress(Importer.ProgressStep.CANCELLED);                                   // 11
      importer.importerInstance.updateRecord({                                                                     // 12
        valid: false                                                                                               // 12
      });                                                                                                          // 12
      importer.importerInstance = void 0;                                                                          // 13
      importer.importerInstance = new importer.importer(importer.name, importer.description, importer.mimeType);   // 14
      return importer.importerInstance.getProgress();                                                              // 15
    } else {                                                                                                       // 9
      throw new Meteor.Error('error-importer-not-defined', 'The importer was not defined correctly, it is missing the Import class.', {
        method: 'restartImport'                                                                                    // 17
      });                                                                                                          // 17
    }                                                                                                              // 27
  }                                                                                                                // 2
});                                                                                                                // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"setupImporter.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_importer/server/methods/setupImporter.coffee.js                                             //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({                                                                                                   // 1
  setupImporter: function (name) {                                                                                 // 2
    var importer, ref;                                                                                             // 3
                                                                                                                   //
    if (!Meteor.userId()) {                                                                                        // 3
      throw new Meteor.Error('error-invalid-user', 'Invalid user', {                                               // 4
        method: 'setupImporter'                                                                                    // 4
      });                                                                                                          // 4
    }                                                                                                              // 8
                                                                                                                   //
    if (!RocketChat.authz.hasPermission(Meteor.userId(), 'run-import')) {                                          // 6
      throw new Meteor.Error('error-action-not-allowed', 'Importing is not allowed', {                             // 7
        method: 'setupImporter'                                                                                    // 7
      });                                                                                                          // 7
    }                                                                                                              // 13
                                                                                                                   //
    if (((ref = Importer.Importers[name]) != null ? ref.importer : void 0) != null) {                              // 9
      importer = Importer.Importers[name];                                                                         // 10
                                                                                                                   //
      if (importer.importerInstance) {                                                                             // 12
        return importer.importerInstance.getProgress();                                                            // 13
      } else {                                                                                                     // 12
        importer.importerInstance = new importer.importer(importer.name, importer.description, importer.mimeType);
        return importer.importerInstance.getProgress();                                                            // 16
      }                                                                                                            // 9
    } else {                                                                                                       // 9
      console.warn("Tried to setup " + name + " as an importer.");                                                 // 18
      throw new Meteor.Error('error-importer-not-defined', 'The importer was not defined correctly, it is missing the Import class.', {
        method: 'setupImporter'                                                                                    // 19
      });                                                                                                          // 19
    }                                                                                                              // 27
  }                                                                                                                // 2
});                                                                                                                // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"startImport.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_importer/server/methods/startImport.coffee.js                                               //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({                                                                                                   // 1
  startImport: function (name, input) {                                                                            // 2
    var channelsSelection, ref, selection, usersSelection;                                                         // 4
                                                                                                                   //
    if (!Meteor.userId()) {                                                                                        // 4
      throw new Meteor.Error('error-invalid-user', 'Invalid user', {                                               // 5
        method: 'startImport'                                                                                      // 5
      });                                                                                                          // 5
    }                                                                                                              // 8
                                                                                                                   //
    if (!RocketChat.authz.hasPermission(Meteor.userId(), 'run-import')) {                                          // 7
      throw new Meteor.Error('error-action-not-allowed', 'Importing is not allowed', {                             // 8
        method: 'setupImporter'                                                                                    // 8
      });                                                                                                          // 8
    }                                                                                                              // 13
                                                                                                                   //
    if (((ref = Importer.Importers[name]) != null ? ref.importerInstance : void 0) != null) {                      // 10
      usersSelection = input.users.map(function (user) {                                                           // 11
        return new Importer.SelectionUser(user.user_id, user.username, user.email, user.is_deleted, user.is_bot, user.do_import);
      });                                                                                                          // 11
      channelsSelection = input.channels.map(function (channel) {                                                  // 13
        return new Importer.SelectionChannel(channel.channel_id, channel.name, channel.is_archived, channel.do_import);
      });                                                                                                          // 13
      selection = new Importer.Selection(name, usersSelection, channelsSelection);                                 // 16
      return Importer.Importers[name].importerInstance.startImport(selection);                                     // 22
    } else {                                                                                                       // 10
      throw new Meteor.Error('error-importer-not-defined', 'The importer was not defined correctly, it is missing the Import class.', {
        method: 'startImport'                                                                                      // 19
      });                                                                                                          // 19
    }                                                                                                              // 27
  }                                                                                                                // 2
});                                                                                                                // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"startup":{"setImportsToInvalid.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_importer/server/startup/setImportsToInvalid.coffee.js                                       //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.startup(function () {                                                                                       // 1
  Importer.Imports.update({                                                                                        // 4
    valid: {                                                                                                       // 4
      $ne: false                                                                                                   // 4
    }                                                                                                              // 4
  }, {                                                                                                             // 4
    $set: {                                                                                                        // 4
      valid: false                                                                                                 // 4
    }                                                                                                              // 4
  }, {                                                                                                             // 4
    multi: true                                                                                                    // 4
  });                                                                                                              // 4
  return Importer.Imports.find({                                                                                   // 13
    valid: {                                                                                                       // 7
      $ne: true                                                                                                    // 7
    }                                                                                                              // 7
  }).forEach(function (item) {                                                                                     // 7
    return Importer.RawImports.remove({                                                                            // 18
      'import': item._id,                                                                                          // 8
      'importer': item.type                                                                                        // 8
    });                                                                                                            // 8
  });                                                                                                              // 7
});                                                                                                                // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"node_modules":{"bson":{"package.json":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// .npm/package/node_modules/bson/package.json                                                                     //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
exports.name = "bson";
exports.version = "0.5.5";
exports.main = "./lib/bson/index";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lib":{"bson":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// node_modules/meteor/rocketchat_importer/node_modules/bson/lib/bson/index.js                                     //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
try {
  exports.BSONPure = require('./bson');
  exports.BSONNative = require('./bson');
} catch(err) {
}

[ './binary'
  , './code'
  , './map'
  , './db_ref'
  , './double'
  , './int_32'
  , './max_key'
  , './min_key'
  , './objectid'
  , './regexp'
  , './symbol'
  , './decimal128'
  , './timestamp'
  , './long'].forEach(function (path) {
  	var module = require(path);
  	for (var i in module) {
  		exports[i] = module[i];
    }
});

// Exports all the classes for the PURE JS BSON Parser
exports.pure = function() {
  var classes = {};
  // Map all the classes
  [ './binary'
    , './code'
    , './map'
    , './db_ref'
    , './double'
    , './int_32'
    , './max_key'
    , './min_key'
    , './objectid'
    , './regexp'
    , './symbol'
    , './decimal128'
    , './timestamp'
    , './long'
    , './bson'].forEach(function (path) {
    	var module = require(path);
    	for (var i in module) {
    		classes[i] = module[i];
      }
  });
  // Return classes list
  return classes;
}

// Exports all the classes for the NATIVE JS BSON Parser
exports.native = function() {
  var classes = {};
  // Map all the classes
  [ './binary'
    , './code'
    , './map'
    , './db_ref'
    , './double'
    , './int_32'
    , './max_key'
    , './min_key'
    , './objectid'
    , './regexp'
    , './symbol'
    , './decimal128'
    , './timestamp'
    , './long'
  ].forEach(function (path) {
      var module = require(path);
      for (var i in module) {
        classes[i] = module[i];
      }
  });

  // Catch error and return no classes found
  try {
    classes['BSON'] = require('./bson');
  } catch(err) {
    return exports.pure();
  }

  // Return classes list
  return classes;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".coffee"
  ]
});
require("./node_modules/meteor/rocketchat:importer/lib/_importer.coffee.js");
require("./node_modules/meteor/rocketchat:importer/lib/importTool.coffee.js");
require("./node_modules/meteor/rocketchat:importer/server/classes/ImporterBase.coffee.js");
require("./node_modules/meteor/rocketchat:importer/server/classes/ImporterProgress.coffee.js");
require("./node_modules/meteor/rocketchat:importer/server/classes/ImporterProgressStep.coffee.js");
require("./node_modules/meteor/rocketchat:importer/server/classes/ImporterSelection.coffee.js");
require("./node_modules/meteor/rocketchat:importer/server/classes/ImporterSelectionChannel.coffee.js");
require("./node_modules/meteor/rocketchat:importer/server/classes/ImporterSelectionUser.coffee.js");
require("./node_modules/meteor/rocketchat:importer/server/models/Imports.coffee.js");
require("./node_modules/meteor/rocketchat:importer/server/models/RawImports.coffee.js");
require("./node_modules/meteor/rocketchat:importer/server/methods/getImportProgress.coffee.js");
require("./node_modules/meteor/rocketchat:importer/server/methods/getSelectionData.coffee.js");
require("./node_modules/meteor/rocketchat:importer/server/methods/prepareImport.js");
require("./node_modules/meteor/rocketchat:importer/server/methods/restartImport.coffee.js");
require("./node_modules/meteor/rocketchat:importer/server/methods/setupImporter.coffee.js");
require("./node_modules/meteor/rocketchat:importer/server/methods/startImport.coffee.js");
require("./node_modules/meteor/rocketchat:importer/server/startup/setImportsToInvalid.coffee.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['rocketchat:importer'] = {}, {
  Importer: Importer
});

})();

//# sourceMappingURL=rocketchat_importer.js.map
