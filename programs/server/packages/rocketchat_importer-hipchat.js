(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var Importer = Package['rocketchat:importer'].Importer;
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
var __coffeescriptShare;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:importer-hipchat":{"server.coffee.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rocketchat_importer-hipchat/server.coffee.js                                                            //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var moment = void 0;                                                                                                // 1
module.import('moment', {                                                                                           // 1
  "default": function (v) {                                                                                         // 1
    moment = v;                                                                                                     // 1
  }                                                                                                                 // 1
}, 0);                                                                                                              // 1
module.import('moment-timezone');                                                                                   // 1
                                                                                                                    //
var bind = function (fn, me) {                                                                                      // 1
  return function () {                                                                                              // 1
    return fn.apply(me, arguments);                                                                                 // 1
  };                                                                                                                // 1
},                                                                                                                  // 1
    extend = function (child, parent) {                                                                             // 1
  for (var key in meteorBabelHelpers.sanitizeForInObject(parent)) {                                                 // 2
    if (hasProp.call(parent, key)) child[key] = parent[key];                                                        // 2
  }                                                                                                                 // 2
                                                                                                                    //
  function ctor() {                                                                                                 // 2
    this.constructor = child;                                                                                       // 2
  }                                                                                                                 // 2
                                                                                                                    //
  ctor.prototype = parent.prototype;                                                                                // 2
  child.prototype = new ctor();                                                                                     // 2
  child.__super__ = parent.prototype;                                                                               // 2
  return child;                                                                                                     // 2
},                                                                                                                  // 2
    hasProp = {}.hasOwnProperty;                                                                                    // 1
                                                                                                                    //
Importer.HipChat = Importer.HipChat = function (superClass) {                                                       // 4
  extend(HipChat, superClass);                                                                                      // 10
  HipChat.RoomPrefix = 'hipchat_export/rooms/';                                                                     // 5
  HipChat.UsersPrefix = 'hipchat_export/users/';                                                                    // 6
                                                                                                                    //
  function HipChat(name, descriptionI18N, mimeType) {                                                               // 8
    this.getSelection = bind(this.getSelection, this);                                                              // 17
    this.convertHipChatMessageToRocketChat = bind(this.convertHipChatMessageToRocketChat, this);                    // 18
    this.getRocketUser = bind(this.getRocketUser, this);                                                            // 19
    this.getHipChatChannelFromName = bind(this.getHipChatChannelFromName, this);                                    // 20
    this.startImport = bind(this.startImport, this);                                                                // 21
    this.prepare = bind(this.prepare, this);                                                                        // 22
                                                                                                                    //
    HipChat.__super__.constructor.call(this, name, descriptionI18N, mimeType);                                      // 9
                                                                                                                    //
    this.logger.debug('Constructed a new Slack Importer.');                                                         // 10
    this.userTags = [];                                                                                             // 11
  }                                                                                                                 // 8
                                                                                                                    //
  HipChat.prototype.prepare = function (dataURI, sentContentType, fileName) {                                       // 28
    var channel, channelsId, contentType, entry, fn, fn1, image, j, len, messagesCount, messagesObj, ref, selectionChannels, selectionUsers, tempMessages, tempRooms, tempUsers, usersId, zip, zipEntries;
                                                                                                                    //
    HipChat.__super__.prepare.call(this, dataURI, sentContentType, fileName);                                       // 14
                                                                                                                    //
    ref = RocketChatFile.dataURIParse(dataURI), image = ref.image, contentType = ref.contentType;                   // 16
    zip = new this.AdmZip(new Buffer(image, 'base64'));                                                             // 17
    zipEntries = zip.getEntries();                                                                                  // 18
    tempRooms = [];                                                                                                 // 20
    tempUsers = [];                                                                                                 // 21
    tempMessages = {};                                                                                              // 22
                                                                                                                    //
    fn = function (_this) {                                                                                         // 37
      return function (entry) {                                                                                     // 38
        var item, k, len1, msgGroupData, results, room, roomName, usersName;                                        // 25
                                                                                                                    //
        if (entry.entryName.indexOf('__MACOSX') > -1) {                                                             // 25
          _this.logger.debug("Ignoring the file: " + entry.entryName);                                              // 27
        }                                                                                                           // 42
                                                                                                                    //
        if (!entry.isDirectory) {                                                                                   // 28
          if (entry.entryName.indexOf(Importer.HipChat.RoomPrefix) > -1) {                                          // 29
            roomName = entry.entryName.split(Importer.HipChat.RoomPrefix)[1];                                       // 30
                                                                                                                    //
            if (roomName === 'list.json') {                                                                         // 31
              _this.updateProgress(Importer.ProgressStep.PREPARING_CHANNELS);                                       // 32
                                                                                                                    //
              tempRooms = JSON.parse(entry.getData().toString()).rooms;                                             // 33
              results = [];                                                                                         // 34
                                                                                                                    //
              for (k = 0, len1 = tempRooms.length; k < len1; k++) {                                                 // 50
                room = tempRooms[k];                                                                                // 51
                results.push(room.name = _.slugify(room.name));                                                     // 52
              }                                                                                                     // 34
                                                                                                                    //
              return results;                                                                                       // 54
            } else if (roomName.indexOf('/') > -1) {                                                                // 31
              item = roomName.split('/');                                                                           // 37
              roomName = _.slugify(item[0]);                                                                        // 38
              msgGroupData = item[1].split('.')[0];                                                                 // 39
                                                                                                                    //
              if (!tempMessages[roomName]) {                                                                        // 40
                tempMessages[roomName] = {};                                                                        // 41
              }                                                                                                     // 61
                                                                                                                    //
              try {                                                                                                 // 44
                return tempMessages[roomName][msgGroupData] = JSON.parse(entry.getData().toString());               // 63
              } catch (error) {                                                                                     // 44
                return _this.logger.warn(entry.entryName + " is not a valid JSON file! Unable to import it.");      // 65
              }                                                                                                     // 36
            }                                                                                                       // 29
          } else if (entry.entryName.indexOf(Importer.HipChat.UsersPrefix) > -1) {                                  // 29
            usersName = entry.entryName.split(Importer.HipChat.UsersPrefix)[1];                                     // 49
                                                                                                                    //
            if (usersName === 'list.json') {                                                                        // 50
              _this.updateProgress(Importer.ProgressStep.PREPARING_USERS);                                          // 51
                                                                                                                    //
              return tempUsers = JSON.parse(entry.getData().toString()).users;                                      // 72
            } else {                                                                                                // 50
              return _this.logger.warn("Unexpected file in the " + _this.name + " import: " + entry.entryName);     // 74
            }                                                                                                       // 48
          }                                                                                                         // 28
        }                                                                                                           // 77
      };                                                                                                            // 24
    }(this);                                                                                                        // 24
                                                                                                                    //
    for (j = 0, len = zipEntries.length; j < len; j++) {                                                            // 23
      entry = zipEntries[j];                                                                                        // 81
      fn(entry);                                                                                                    // 82
    }                                                                                                               // 23
                                                                                                                    //
    usersId = this.collection.insert({                                                                              // 58
      'import': this.importRecord._id,                                                                              // 58
      'importer': this.name,                                                                                        // 58
      'type': 'users',                                                                                              // 58
      'users': tempUsers                                                                                            // 58
    });                                                                                                             // 58
    this.users = this.collection.findOne(usersId);                                                                  // 59
    this.updateRecord({                                                                                             // 60
      'count.users': tempUsers.length                                                                               // 60
    });                                                                                                             // 60
    this.addCountToTotal(tempUsers.length);                                                                         // 61
    channelsId = this.collection.insert({                                                                           // 64
      'import': this.importRecord._id,                                                                              // 64
      'importer': this.name,                                                                                        // 64
      'type': 'channels',                                                                                           // 64
      'channels': tempRooms                                                                                         // 64
    });                                                                                                             // 64
    this.channels = this.collection.findOne(channelsId);                                                            // 65
    this.updateRecord({                                                                                             // 66
      'count.channels': tempRooms.length                                                                            // 66
    });                                                                                                             // 66
    this.addCountToTotal(tempRooms.length);                                                                         // 67
    this.updateProgress(Importer.ProgressStep.PREPARING_MESSAGES);                                                  // 70
    messagesCount = 0;                                                                                              // 71
                                                                                                                    //
    fn1 = function (_this) {                                                                                        // 108
      return function (channel, messagesObj) {                                                                      // 109
        var date, i, messagesId, msgs, results, splitMsg;                                                           // 74
                                                                                                                    //
        if (!_this.messages[channel]) {                                                                             // 74
          _this.messages[channel] = {};                                                                             // 75
        }                                                                                                           // 113
                                                                                                                    //
        results = [];                                                                                               // 76
                                                                                                                    //
        for (date in meteorBabelHelpers.sanitizeForInObject(messagesObj)) {                                         // 115
          msgs = messagesObj[date];                                                                                 // 116
          messagesCount += msgs.length;                                                                             // 77
                                                                                                                    //
          _this.updateRecord({                                                                                      // 78
            'messagesstatus': channel + "/" + date                                                                  // 78
          });                                                                                                       // 78
                                                                                                                    //
          if (Importer.Base.getBSONSize(msgs) > Importer.Base.MaxBSONSize) {                                        // 80
            results.push(function () {                                                                              // 122
              var k, len1, ref1, results1;                                                                          // 123
              ref1 = Importer.Base.getBSONSafeArraysFromAnArray(msgs);                                              // 81
              results1 = [];                                                                                        // 81
                                                                                                                    //
              for (i = k = 0, len1 = ref1.length; k < len1; i = ++k) {                                              // 126
                splitMsg = ref1[i];                                                                                 // 127
                messagesId = this.collection.insert({                                                               // 82
                  'import': this.importRecord._id,                                                                  // 82
                  'importer': this.name,                                                                            // 82
                  'type': 'messages',                                                                               // 82
                  'name': channel + "/" + date + "." + i,                                                           // 82
                  'messages': splitMsg                                                                              // 82
                });                                                                                                 // 82
                results1.push(this.messages[channel][date + "." + i] = this.collection.findOne(messagesId));        // 135
              }                                                                                                     // 81
                                                                                                                    //
              return results1;                                                                                      // 137
            }.call(_this));                                                                                         // 138
          } else {                                                                                                  // 80
            messagesId = _this.collection.insert({                                                                  // 85
              'import': _this.importRecord._id,                                                                     // 85
              'importer': _this.name,                                                                               // 85
              'type': 'messages',                                                                                   // 85
              'name': channel + "/" + date,                                                                         // 85
              'messages': msgs                                                                                      // 85
            });                                                                                                     // 85
            results.push(_this.messages[channel][date] = _this.collection.findOne(messagesId));                     // 147
          }                                                                                                         // 148
        }                                                                                                           // 76
                                                                                                                    //
        return results;                                                                                             // 150
      };                                                                                                            // 73
    }(this);                                                                                                        // 73
                                                                                                                    //
    for (channel in meteorBabelHelpers.sanitizeForInObject(tempMessages)) {                                         // 72
      messagesObj = tempMessages[channel];                                                                          // 154
      fn1(channel, messagesObj);                                                                                    // 155
    }                                                                                                               // 72
                                                                                                                    //
    this.updateRecord({                                                                                             // 88
      'count.messages': messagesCount,                                                                              // 88
      'messagesstatus': null                                                                                        // 88
    });                                                                                                             // 88
    this.addCountToTotal(messagesCount);                                                                            // 89
                                                                                                                    //
    if (tempUsers.length === 0 || tempRooms.length === 0 || messagesCount === 0) {                                  // 91
      this.logger.warn("The loaded users count " + tempUsers.length + ", the loaded channels " + tempRooms.length + ", and the loaded messages " + messagesCount);
      this.updateProgress(Importer.ProgressStep.ERROR);                                                             // 93
      return this.getProgress();                                                                                    // 94
    }                                                                                                               // 166
                                                                                                                    //
    selectionUsers = tempUsers.map(function (user) {                                                                // 96
      return new Importer.SelectionUser(user.user_id, user.name, user.email, user.is_deleted, false, !user.is_bot);
    });                                                                                                             // 96
    selectionChannels = tempRooms.map(function (room) {                                                             // 99
      return new Importer.SelectionChannel(room.room_id, room.name, room.is_archived, true, false);                 // 100
    });                                                                                                             // 99
    this.updateProgress(Importer.ProgressStep.USER_SELECTION);                                                      // 102
    return new Importer.Selection(this.name, selectionUsers, selectionChannels);                                    // 103
  };                                                                                                                // 13
                                                                                                                    //
  HipChat.prototype.startImport = function (importSelection) {                                                      // 177
    var c, channel, j, k, l, len, len1, len2, len3, m, ref, ref1, ref2, ref3, start, startedByUserId, u, user;      // 106
                                                                                                                    //
    HipChat.__super__.startImport.call(this, importSelection);                                                      // 106
                                                                                                                    //
    start = Date.now();                                                                                             // 107
    ref = importSelection.users;                                                                                    // 109
                                                                                                                    //
    for (j = 0, len = ref.length; j < len; j++) {                                                                   // 109
      user = ref[j];                                                                                                // 183
      ref1 = this.users.users;                                                                                      // 110
                                                                                                                    //
      for (k = 0, len1 = ref1.length; k < len1; k++) {                                                              // 110
        u = ref1[k];                                                                                                // 186
                                                                                                                    //
        if (u.user_id === user.user_id) {                                                                           // 187
          u.do_import = user.do_import;                                                                             // 111
        }                                                                                                           // 189
      }                                                                                                             // 110
    }                                                                                                               // 109
                                                                                                                    //
    this.collection.update({                                                                                        // 112
      _id: this.users._id                                                                                           // 112
    }, {                                                                                                            // 112
      $set: {                                                                                                       // 112
        'users': this.users.users                                                                                   // 112
      }                                                                                                             // 112
    });                                                                                                             // 112
    ref2 = importSelection.channels;                                                                                // 114
                                                                                                                    //
    for (l = 0, len2 = ref2.length; l < len2; l++) {                                                                // 114
      channel = ref2[l];                                                                                            // 201
      ref3 = this.channels.channels;                                                                                // 115
                                                                                                                    //
      for (m = 0, len3 = ref3.length; m < len3; m++) {                                                              // 115
        c = ref3[m];                                                                                                // 204
                                                                                                                    //
        if (c.room_id === channel.channel_id) {                                                                     // 205
          c.do_import = channel.do_import;                                                                          // 116
        }                                                                                                           // 207
      }                                                                                                             // 115
    }                                                                                                               // 114
                                                                                                                    //
    this.collection.update({                                                                                        // 117
      _id: this.channels._id                                                                                        // 117
    }, {                                                                                                            // 117
      $set: {                                                                                                       // 117
        'channels': this.channels.channels                                                                          // 117
      }                                                                                                             // 117
    });                                                                                                             // 117
    startedByUserId = Meteor.userId();                                                                              // 119
    Meteor.defer(function (_this) {                                                                                 // 120
      return function () {                                                                                          // 219
        var fn, len4, len5, len6, messagesObj, n, nousers, o, p, ref4, ref5, ref6, ref7, timeTook;                  // 121
                                                                                                                    //
        _this.updateProgress(Importer.ProgressStep.IMPORTING_USERS);                                                // 121
                                                                                                                    //
        ref4 = _this.users.users;                                                                                   // 122
                                                                                                                    //
        for (n = 0, len4 = ref4.length; n < len4; n++) {                                                            // 122
          user = ref4[n];                                                                                           // 224
                                                                                                                    //
          if (user.do_import) {                                                                                     // 225
            (function (user) {                                                                                      // 123
              return Meteor.runAsUser(startedByUserId, function () {                                                // 227
                var existantUser, userId;                                                                           // 125
                existantUser = RocketChat.models.Users.findOneByEmailAddress(user.email);                           // 125
                                                                                                                    //
                if (existantUser) {                                                                                 // 126
                  user.rocketId = existantUser._id;                                                                 // 127
                                                                                                                    //
                  _this.userTags.push({                                                                             // 128
                    hipchat: "@" + user.mention_name,                                                               // 129
                    rocket: "@" + existantUser.username                                                             // 130
                  });                                                                                               // 129
                } else {                                                                                            // 126
                  userId = Accounts.createUser({                                                                    // 132
                    email: user.email,                                                                              // 132
                    password: Date.now() + user.name + user.email.toUpperCase()                                     // 132
                  });                                                                                               // 132
                  user.rocketId = userId;                                                                           // 133
                                                                                                                    //
                  _this.userTags.push({                                                                             // 134
                    hipchat: "@" + user.mention_name,                                                               // 135
                    rocket: "@" + user.mention_name                                                                 // 136
                  });                                                                                               // 135
                                                                                                                    //
                  Meteor.runAsUser(userId, function () {                                                            // 137
                    Meteor.call('setUsername', user.mention_name, {                                                 // 138
                      joinDefaultChannelsSilenced: true                                                             // 138
                    });                                                                                             // 138
                    Meteor.call('setAvatarFromService', user.photo_url, void 0, 'url');                             // 139
                    return Meteor.call('userSetUtcOffset', parseInt(moment().tz(user.timezone).format('Z').toString().split(':')[0]));
                  });                                                                                               // 137
                                                                                                                    //
                  if (user.name != null) {                                                                          // 142
                    RocketChat.models.Users.setName(userId, user.name);                                             // 143
                  }                                                                                                 // 255
                                                                                                                    //
                  if (user.is_deleted) {                                                                            // 146
                    Meteor.call('setUserActiveStatus', userId, false);                                              // 147
                  }                                                                                                 // 126
                }                                                                                                   // 259
                                                                                                                    //
                return _this.addCountCompleted(1);                                                                  // 260
              });                                                                                                   // 124
            })(user);                                                                                               // 123
          }                                                                                                         // 263
        }                                                                                                           // 122
                                                                                                                    //
        _this.collection.update({                                                                                   // 149
          _id: _this.users._id                                                                                      // 149
        }, {                                                                                                        // 149
          $set: {                                                                                                   // 149
            'users': _this.users.users                                                                              // 149
          }                                                                                                         // 149
        });                                                                                                         // 149
                                                                                                                    //
        _this.updateProgress(Importer.ProgressStep.IMPORTING_CHANNELS);                                             // 151
                                                                                                                    //
        ref5 = _this.channels.channels;                                                                             // 152
                                                                                                                    //
        for (o = 0, len5 = ref5.length; o < len5; o++) {                                                            // 152
          channel = ref5[o];                                                                                        // 275
                                                                                                                    //
          if (channel.do_import) {                                                                                  // 276
            (function (channel) {                                                                                   // 153
              return Meteor.runAsUser(startedByUserId, function () {                                                // 278
                var existantRoom, len6, p, ref6, userId;                                                            // 155
                channel.name = channel.name.replace(/ /g, '');                                                      // 155
                existantRoom = RocketChat.models.Rooms.findOneByName(channel.name);                                 // 156
                                                                                                                    //
                if (existantRoom) {                                                                                 // 157
                  channel.rocketId = existantRoom._id;                                                              // 158
                } else {                                                                                            // 157
                  userId = '';                                                                                      // 160
                  ref6 = _this.users.users;                                                                         // 161
                                                                                                                    //
                  for (p = 0, len6 = ref6.length; p < len6; p++) {                                                  // 161
                    user = ref6[p];                                                                                 // 288
                                                                                                                    //
                    if (user.user_id === channel.owner_user_id) {                                                   // 289
                      userId = user.rocketId;                                                                       // 162
                    }                                                                                               // 291
                  }                                                                                                 // 161
                                                                                                                    //
                  if (userId === '') {                                                                              // 164
                    _this.logger.warn("Failed to find the channel creator for " + channel.name + ", setting it to the current running user.");
                                                                                                                    //
                    userId = startedByUserId;                                                                       // 166
                  }                                                                                                 // 296
                                                                                                                    //
                  Meteor.runAsUser(userId, function () {                                                            // 168
                    var returned;                                                                                   // 169
                    returned = Meteor.call('createChannel', channel.name, []);                                      // 169
                    return channel.rocketId = returned.rid;                                                         // 300
                  });                                                                                               // 168
                  RocketChat.models.Rooms.update({                                                                  // 171
                    _id: channel.rocketId                                                                           // 171
                  }, {                                                                                              // 171
                    $set: {                                                                                         // 171
                      'ts': new Date(channel.created * 1000)                                                        // 171
                    }                                                                                               // 171
                  });                                                                                               // 171
                }                                                                                                   // 309
                                                                                                                    //
                return _this.addCountCompleted(1);                                                                  // 310
              });                                                                                                   // 154
            })(channel);                                                                                            // 153
          }                                                                                                         // 313
        }                                                                                                           // 152
                                                                                                                    //
        _this.collection.update({                                                                                   // 173
          _id: _this.channels._id                                                                                   // 173
        }, {                                                                                                        // 173
          $set: {                                                                                                   // 173
            'channels': _this.channels.channels                                                                     // 173
          }                                                                                                         // 173
        });                                                                                                         // 173
                                                                                                                    //
        _this.updateProgress(Importer.ProgressStep.IMPORTING_MESSAGES);                                             // 175
                                                                                                                    //
        nousers = {};                                                                                               // 176
        ref6 = _this.messages;                                                                                      // 177
                                                                                                                    //
        fn = function (channel, messagesObj) {                                                                      // 325
          return Meteor.runAsUser(startedByUserId, function () {                                                    // 326
            var date, hipchatChannel, message, msgObj, msgs, results, room;                                         // 180
            hipchatChannel = _this.getHipChatChannelFromName(channel);                                              // 180
                                                                                                                    //
            if (hipchatChannel != null ? hipchatChannel.do_import : void 0) {                                       // 181
              room = RocketChat.models.Rooms.findOneById(hipchatChannel.rocketId, {                                 // 182
                fields: {                                                                                           // 182
                  usernames: 1,                                                                                     // 182
                  t: 1,                                                                                             // 182
                  name: 1                                                                                           // 182
                }                                                                                                   // 182
              });                                                                                                   // 182
              results = [];                                                                                         // 183
                                                                                                                    //
              for (date in meteorBabelHelpers.sanitizeForInObject(messagesObj)) {                                   // 338
                msgs = messagesObj[date];                                                                           // 339
                                                                                                                    //
                _this.updateRecord({                                                                                // 184
                  'messagesstatus': channel + "/" + date + "." + msgs.messages.length                               // 184
                });                                                                                                 // 184
                                                                                                                    //
                results.push(function () {                                                                          // 343
                  var len6, p, ref7, results1;                                                                      // 344
                  ref7 = msgs.messages;                                                                             // 185
                  results1 = [];                                                                                    // 185
                                                                                                                    //
                  for (p = 0, len6 = ref7.length; p < len6; p++) {                                                  // 347
                    message = ref7[p];                                                                              // 348
                                                                                                                    //
                    if (message.from != null) {                                                                     // 186
                      user = this.getRocketUser(message.from.user_id);                                              // 187
                                                                                                                    //
                      if (user != null) {                                                                           // 188
                        msgObj = {                                                                                  // 189
                          msg: this.convertHipChatMessageToRocketChat(message.message),                             // 190
                          ts: new Date(message.date),                                                               // 191
                          u: {                                                                                      // 192
                            _id: user._id,                                                                          // 193
                            username: user.username                                                                 // 194
                          }                                                                                         // 193
                        };                                                                                          // 190
                        RocketChat.sendMessage(user, msgObj, room, true);                                           // 196
                      } else {                                                                                      // 188
                        if (!nousers[message.from.user_id]) {                                                       // 198
                          nousers[message.from.user_id] = message.from;                                             // 199
                        }                                                                                           // 188
                      }                                                                                             // 186
                    } else {                                                                                        // 186
                      if (!_.isArray(message)) {                                                                    // 201
                        console.warn('Please report the following:', message);                                      // 202
                      }                                                                                             // 186
                    }                                                                                               // 370
                                                                                                                    //
                    results1.push(this.addCountCompleted(1));                                                       // 371
                  }                                                                                                 // 185
                                                                                                                    //
                  return results1;                                                                                  // 373
                }.call(_this));                                                                                     // 374
              }                                                                                                     // 183
                                                                                                                    //
              return results;                                                                                       // 376
            }                                                                                                       // 377
          });                                                                                                       // 179
        };                                                                                                          // 178
                                                                                                                    //
        for (channel in meteorBabelHelpers.sanitizeForInObject(ref6)) {                                             // 177
          messagesObj = ref6[channel];                                                                              // 381
          fn(channel, messagesObj);                                                                                 // 382
        }                                                                                                           // 177
                                                                                                                    //
        _this.logger.warn('The following did not have users:', nousers);                                            // 204
                                                                                                                    //
        _this.updateProgress(Importer.ProgressStep.FINISHING);                                                      // 206
                                                                                                                    //
        ref7 = _this.channels.channels;                                                                             // 207
                                                                                                                    //
        for (p = 0, len6 = ref7.length; p < len6; p++) {                                                            // 207
          channel = ref7[p];                                                                                        // 388
                                                                                                                    //
          if (channel.do_import && channel.is_archived) {                                                           // 389
            (function (channel) {                                                                                   // 208
              return Meteor.runAsUser(startedByUserId, function () {                                                // 391
                return Meteor.call('archiveRoom', channel.rocketId);                                                // 392
              });                                                                                                   // 209
            })(channel);                                                                                            // 208
          }                                                                                                         // 395
        }                                                                                                           // 207
                                                                                                                    //
        _this.updateProgress(Importer.ProgressStep.DONE);                                                           // 212
                                                                                                                    //
        timeTook = Date.now() - start;                                                                              // 213
        return _this.logger.log("Import took " + timeTook + " milliseconds.");                                      // 399
      };                                                                                                            // 120
    }(this));                                                                                                       // 120
    return this.getProgress();                                                                                      // 216
  };                                                                                                                // 105
                                                                                                                    //
  HipChat.prototype.getHipChatChannelFromName = function (channelName) {                                            // 405
    var channel, j, len, ref;                                                                                       // 219
    ref = this.channels.channels;                                                                                   // 219
                                                                                                                    //
    for (j = 0, len = ref.length; j < len; j++) {                                                                   // 219
      channel = ref[j];                                                                                             // 409
                                                                                                                    //
      if (channel.name === channelName) {                                                                           // 410
        return channel;                                                                                             // 220
      }                                                                                                             // 412
    }                                                                                                               // 219
  };                                                                                                                // 218
                                                                                                                    //
  HipChat.prototype.getRocketUser = function (hipchatId) {                                                          // 416
    var j, len, ref, user;                                                                                          // 223
    ref = this.users.users;                                                                                         // 223
                                                                                                                    //
    for (j = 0, len = ref.length; j < len; j++) {                                                                   // 223
      user = ref[j];                                                                                                // 420
                                                                                                                    //
      if (user.user_id === hipchatId) {                                                                             // 421
        return RocketChat.models.Users.findOneById(user.rocketId, {                                                 // 224
          fields: {                                                                                                 // 224
            username: 1,                                                                                            // 224
            name: 1                                                                                                 // 224
          }                                                                                                         // 224
        });                                                                                                         // 224
      }                                                                                                             // 428
    }                                                                                                               // 223
  };                                                                                                                // 222
                                                                                                                    //
  HipChat.prototype.convertHipChatMessageToRocketChat = function (message) {                                        // 432
    var j, len, ref, userReplace;                                                                                   // 227
                                                                                                                    //
    if (message != null) {                                                                                          // 227
      ref = this.userTags;                                                                                          // 228
                                                                                                                    //
      for (j = 0, len = ref.length; j < len; j++) {                                                                 // 228
        userReplace = ref[j];                                                                                       // 437
        message = message.replace(userReplace.hipchat, userReplace.rocket);                                         // 229
      }                                                                                                             // 227
    } else {                                                                                                        // 227
      message = '';                                                                                                 // 231
    }                                                                                                               // 442
                                                                                                                    //
    return message;                                                                                                 // 232
  };                                                                                                                // 226
                                                                                                                    //
  HipChat.prototype.getSelection = function () {                                                                    // 446
    var selectionChannels, selectionUsers;                                                                          // 235
    selectionUsers = this.users.users.map(function (user) {                                                         // 235
      return new Importer.SelectionUser(user.user_id, user.name, user.email, user.is_deleted, false, !user.is_bot);
    });                                                                                                             // 235
    selectionChannels = this.channels.channels.map(function (room) {                                                // 238
      return new Importer.SelectionChannel(room.room_id, room.name, room.is_archived, true, false);                 // 239
    });                                                                                                             // 238
    return new Importer.Selection(this.name, selectionUsers, selectionChannels);                                    // 241
  };                                                                                                                // 234
                                                                                                                    //
  return HipChat;                                                                                                   // 457
}(Importer.Base);                                                                                                   // 459
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.coffee.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rocketchat_importer-hipchat/main.coffee.js                                                              //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Importer.addImporter('hipchat', Importer.HipChat, {                                                                 // 1
  name: 'HipChat',                                                                                                  // 2
  mimeType: 'application/zip'                                                                                       // 3
});                                                                                                                 // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".coffee"
  ]
});
require("./node_modules/meteor/rocketchat:importer-hipchat/server.coffee.js");
require("./node_modules/meteor/rocketchat:importer-hipchat/main.coffee.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:importer-hipchat'] = {};

})();

//# sourceMappingURL=rocketchat_importer-hipchat.js.map
