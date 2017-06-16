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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:importer-slack":{"server.coffee.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rocketchat_importer-slack/server.coffee.js                                                              //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
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
Importer.Slack = Importer.Slack = function (superClass) {                                                           // 1
  extend(Slack, superClass);                                                                                        // 6
                                                                                                                    //
  function Slack(name, descriptionI18N, mimeType) {                                                                 // 2
    this.getSelection = bind(this.getSelection, this);                                                              // 9
    this.convertSlackMessageToRocketChat = bind(this.convertSlackMessageToRocketChat, this);                        // 10
    this.getRocketUser = bind(this.getRocketUser, this);                                                            // 11
    this.getSlackChannelFromName = bind(this.getSlackChannelFromName, this);                                        // 12
    this.startImport = bind(this.startImport, this);                                                                // 13
    this.prepare = bind(this.prepare, this);                                                                        // 14
                                                                                                                    //
    Slack.__super__.constructor.call(this, name, descriptionI18N, mimeType);                                        // 3
                                                                                                                    //
    this.userTags = [];                                                                                             // 4
    this.bots = {};                                                                                                 // 5
    this.logger.debug('Constructed a new Slack Importer.');                                                         // 6
  }                                                                                                                 // 2
                                                                                                                    //
  Slack.prototype.prepare = function (dataURI, sentContentType, fileName) {                                         // 21
    var channel, channelsId, contentType, entry, fn, fn1, image, j, len, messagesCount, messagesObj, ref, selectionChannels, selectionUsers, tempChannels, tempMessages, tempUsers, usersId, zip, zipEntries;
                                                                                                                    //
    Slack.__super__.prepare.call(this, dataURI, sentContentType, fileName);                                         // 9
                                                                                                                    //
    ref = RocketChatFile.dataURIParse(dataURI), image = ref.image, contentType = ref.contentType;                   // 11
    zip = new this.AdmZip(new Buffer(image, 'base64'));                                                             // 12
    zipEntries = zip.getEntries();                                                                                  // 13
    tempChannels = [];                                                                                              // 15
    tempUsers = [];                                                                                                 // 16
    tempMessages = {};                                                                                              // 17
                                                                                                                    //
    fn = function (_this) {                                                                                         // 30
      return function (entry) {                                                                                     // 31
        var channelName, item, k, len1, msgGroupData, results, user;                                                // 20
                                                                                                                    //
        if (entry.entryName.indexOf('__MACOSX') > -1) {                                                             // 20
          return _this.logger.debug("Ignoring the file: " + entry.entryName);                                       // 34
        } else if (entry.entryName === 'channels.json') {                                                           // 20
          _this.updateProgress(Importer.ProgressStep.PREPARING_CHANNELS);                                           // 24
                                                                                                                    //
          tempChannels = JSON.parse(entry.getData().toString());                                                    // 25
          return tempChannels = tempChannels.filter(function (channel) {                                            // 38
            return channel.creator != null;                                                                         // 39
          });                                                                                                       // 26
        } else if (entry.entryName === 'users.json') {                                                              // 23
          _this.updateProgress(Importer.ProgressStep.PREPARING_USERS);                                              // 28
                                                                                                                    //
          tempUsers = JSON.parse(entry.getData().toString());                                                       // 29
          results = [];                                                                                             // 31
                                                                                                                    //
          for (k = 0, len1 = tempUsers.length; k < len1; k++) {                                                     // 45
            user = tempUsers[k];                                                                                    // 46
                                                                                                                    //
            if (user.is_bot) {                                                                                      // 47
              results.push(_this.bots[user.profile.bot_id] = user);                                                 // 48
            }                                                                                                       // 49
          }                                                                                                         // 31
                                                                                                                    //
          return results;                                                                                           // 51
        } else if (!entry.isDirectory && entry.entryName.indexOf('/') > -1) {                                       // 27
          item = entry.entryName.split('/');                                                                        // 35
          channelName = item[0];                                                                                    // 36
          msgGroupData = item[1].split('.')[0];                                                                     // 37
                                                                                                                    //
          if (!tempMessages[channelName]) {                                                                         // 38
            tempMessages[channelName] = {};                                                                         // 39
          }                                                                                                         // 58
                                                                                                                    //
          try {                                                                                                     // 41
            return tempMessages[channelName][msgGroupData] = JSON.parse(entry.getData().toString());                // 60
          } catch (error1) {                                                                                        // 41
            return _this.logger.warn(entry.entryName + " is not a valid JSON file! Unable to import it.");          // 62
          }                                                                                                         // 34
        }                                                                                                           // 64
      };                                                                                                            // 19
    }(this);                                                                                                        // 19
                                                                                                                    //
    for (j = 0, len = zipEntries.length; j < len; j++) {                                                            // 18
      entry = zipEntries[j];                                                                                        // 68
      fn(entry);                                                                                                    // 69
    }                                                                                                               // 18
                                                                                                                    //
    usersId = this.collection.insert({                                                                              // 48
      'import': this.importRecord._id,                                                                              // 48
      'importer': this.name,                                                                                        // 48
      'type': 'users',                                                                                              // 48
      'users': tempUsers                                                                                            // 48
    });                                                                                                             // 48
    this.users = this.collection.findOne(usersId);                                                                  // 49
    this.updateRecord({                                                                                             // 50
      'count.users': tempUsers.length                                                                               // 50
    });                                                                                                             // 50
    this.addCountToTotal(tempUsers.length);                                                                         // 51
    channelsId = this.collection.insert({                                                                           // 54
      'import': this.importRecord._id,                                                                              // 54
      'importer': this.name,                                                                                        // 54
      'type': 'channels',                                                                                           // 54
      'channels': tempChannels                                                                                      // 54
    });                                                                                                             // 54
    this.channels = this.collection.findOne(channelsId);                                                            // 55
    this.updateRecord({                                                                                             // 56
      'count.channels': tempChannels.length                                                                         // 56
    });                                                                                                             // 56
    this.addCountToTotal(tempChannels.length);                                                                      // 57
    this.updateProgress(Importer.ProgressStep.PREPARING_MESSAGES);                                                  // 60
    messagesCount = 0;                                                                                              // 61
                                                                                                                    //
    fn1 = function (_this) {                                                                                        // 95
      return function (channel, messagesObj) {                                                                      // 96
        var date, i, messagesId, msgs, results, splitMsg;                                                           // 64
                                                                                                                    //
        if (!_this.messages[channel]) {                                                                             // 64
          _this.messages[channel] = {};                                                                             // 65
        }                                                                                                           // 100
                                                                                                                    //
        results = [];                                                                                               // 66
                                                                                                                    //
        for (date in meteorBabelHelpers.sanitizeForInObject(messagesObj)) {                                         // 102
          msgs = messagesObj[date];                                                                                 // 103
          messagesCount += msgs.length;                                                                             // 67
                                                                                                                    //
          _this.updateRecord({                                                                                      // 68
            'messagesstatus': channel + "/" + date                                                                  // 68
          });                                                                                                       // 68
                                                                                                                    //
          if (Importer.Base.getBSONSize(msgs) > Importer.Base.MaxBSONSize) {                                        // 70
            results.push(function () {                                                                              // 109
              var k, len1, ref1, results1;                                                                          // 110
              ref1 = Importer.Base.getBSONSafeArraysFromAnArray(msgs);                                              // 71
              results1 = [];                                                                                        // 71
                                                                                                                    //
              for (i = k = 0, len1 = ref1.length; k < len1; i = ++k) {                                              // 113
                splitMsg = ref1[i];                                                                                 // 114
                messagesId = this.collection.insert({                                                               // 72
                  'import': this.importRecord._id,                                                                  // 72
                  'importer': this.name,                                                                            // 72
                  'type': 'messages',                                                                               // 72
                  'name': channel + "/" + date + "." + i,                                                           // 72
                  'messages': splitMsg                                                                              // 72
                });                                                                                                 // 72
                results1.push(this.messages[channel][date + "." + i] = this.collection.findOne(messagesId));        // 122
              }                                                                                                     // 71
                                                                                                                    //
              return results1;                                                                                      // 124
            }.call(_this));                                                                                         // 125
          } else {                                                                                                  // 70
            messagesId = _this.collection.insert({                                                                  // 75
              'import': _this.importRecord._id,                                                                     // 75
              'importer': _this.name,                                                                               // 75
              'type': 'messages',                                                                                   // 75
              'name': channel + "/" + date,                                                                         // 75
              'messages': msgs                                                                                      // 75
            });                                                                                                     // 75
            results.push(_this.messages[channel][date] = _this.collection.findOne(messagesId));                     // 134
          }                                                                                                         // 135
        }                                                                                                           // 66
                                                                                                                    //
        return results;                                                                                             // 137
      };                                                                                                            // 63
    }(this);                                                                                                        // 63
                                                                                                                    //
    for (channel in meteorBabelHelpers.sanitizeForInObject(tempMessages)) {                                         // 62
      messagesObj = tempMessages[channel];                                                                          // 141
      fn1(channel, messagesObj);                                                                                    // 142
    }                                                                                                               // 62
                                                                                                                    //
    this.updateRecord({                                                                                             // 78
      'count.messages': messagesCount,                                                                              // 78
      'messagesstatus': null                                                                                        // 78
    });                                                                                                             // 78
    this.addCountToTotal(messagesCount);                                                                            // 79
                                                                                                                    //
    if (tempUsers.length === 0 || tempChannels.length === 0 || messagesCount === 0) {                               // 81
      this.logger.warn("The loaded users count " + tempUsers.length + ", the loaded channels " + tempChannels.length + ", and the loaded messages " + messagesCount);
      this.updateProgress(Importer.ProgressStep.ERROR);                                                             // 83
      return this.getProgress();                                                                                    // 84
    }                                                                                                               // 153
                                                                                                                    //
    selectionUsers = tempUsers.map(function (user) {                                                                // 86
      return new Importer.SelectionUser(user.id, user.name, user.profile.email, user.deleted, user.is_bot, !user.is_bot);
    });                                                                                                             // 86
    selectionChannels = tempChannels.map(function (channel) {                                                       // 88
      return new Importer.SelectionChannel(channel.id, channel.name, channel.is_archived, true, false);             // 89
    });                                                                                                             // 88
    this.updateProgress(Importer.ProgressStep.USER_SELECTION);                                                      // 91
    return new Importer.Selection(this.name, selectionUsers, selectionChannels);                                    // 92
  };                                                                                                                // 8
                                                                                                                    //
  Slack.prototype.startImport = function (importSelection) {                                                        // 164
    var c, channel, j, k, l, len, len1, len2, len3, m, ref, ref1, ref2, ref3, start, startedByUserId, u, user;      // 95
                                                                                                                    //
    Slack.__super__.startImport.call(this, importSelection);                                                        // 95
                                                                                                                    //
    start = Date.now();                                                                                             // 96
    ref = importSelection.users;                                                                                    // 98
                                                                                                                    //
    for (j = 0, len = ref.length; j < len; j++) {                                                                   // 98
      user = ref[j];                                                                                                // 170
      ref1 = this.users.users;                                                                                      // 99
                                                                                                                    //
      for (k = 0, len1 = ref1.length; k < len1; k++) {                                                              // 99
        u = ref1[k];                                                                                                // 173
                                                                                                                    //
        if (u.id === user.user_id) {                                                                                // 174
          u.do_import = user.do_import;                                                                             // 100
        }                                                                                                           // 176
      }                                                                                                             // 99
    }                                                                                                               // 98
                                                                                                                    //
    this.collection.update({                                                                                        // 101
      _id: this.users._id                                                                                           // 101
    }, {                                                                                                            // 101
      $set: {                                                                                                       // 101
        'users': this.users.users                                                                                   // 101
      }                                                                                                             // 101
    });                                                                                                             // 101
    ref2 = importSelection.channels;                                                                                // 103
                                                                                                                    //
    for (l = 0, len2 = ref2.length; l < len2; l++) {                                                                // 103
      channel = ref2[l];                                                                                            // 188
      ref3 = this.channels.channels;                                                                                // 104
                                                                                                                    //
      for (m = 0, len3 = ref3.length; m < len3; m++) {                                                              // 104
        c = ref3[m];                                                                                                // 191
                                                                                                                    //
        if (c.id === channel.channel_id) {                                                                          // 192
          c.do_import = channel.do_import;                                                                          // 105
        }                                                                                                           // 194
      }                                                                                                             // 104
    }                                                                                                               // 103
                                                                                                                    //
    this.collection.update({                                                                                        // 106
      _id: this.channels._id                                                                                        // 106
    }, {                                                                                                            // 106
      $set: {                                                                                                       // 106
        'channels': this.channels.channels                                                                          // 106
      }                                                                                                             // 106
    });                                                                                                             // 106
    startedByUserId = Meteor.userId();                                                                              // 108
    Meteor.defer(function (_this) {                                                                                 // 109
      return function () {                                                                                          // 206
        var fn, ignoreTypes, len4, len5, len6, messagesObj, missedTypes, n, o, p, ref4, ref5, ref6, ref7, timeTook;
                                                                                                                    //
        _this.updateProgress(Importer.ProgressStep.IMPORTING_USERS);                                                // 110
                                                                                                                    //
        ref4 = _this.users.users;                                                                                   // 111
                                                                                                                    //
        for (n = 0, len4 = ref4.length; n < len4; n++) {                                                            // 111
          user = ref4[n];                                                                                           // 211
                                                                                                                    //
          if (user.do_import) {                                                                                     // 212
            (function (user) {                                                                                      // 112
              return Meteor.runAsUser(startedByUserId, function () {                                                // 214
                var existantUser, userId;                                                                           // 114
                existantUser = RocketChat.models.Users.findOneByEmailAddress(user.profile.email);                   // 114
                                                                                                                    //
                if (!existantUser) {                                                                                // 115
                  existantUser = RocketChat.models.Users.findOneByUsername(user.name);                              // 116
                }                                                                                                   // 219
                                                                                                                    //
                if (existantUser) {                                                                                 // 118
                  user.rocketId = existantUser._id;                                                                 // 119
                  RocketChat.models.Users.update({                                                                  // 120
                    _id: user.rocketId                                                                              // 120
                  }, {                                                                                              // 120
                    $addToSet: {                                                                                    // 120
                      importIds: user.id                                                                            // 120
                    }                                                                                               // 120
                  });                                                                                               // 120
                                                                                                                    //
                  _this.userTags.push({                                                                             // 121
                    slack: "<@" + user.id + ">",                                                                    // 122
                    slackLong: "<@" + user.id + "|" + user.name + ">",                                              // 123
                    rocket: "@" + existantUser.username                                                             // 124
                  });                                                                                               // 122
                } else {                                                                                            // 118
                  if (user.profile.email) {                                                                         // 126
                    userId = Accounts.createUser({                                                                  // 127
                      email: user.profile.email,                                                                    // 127
                      password: Date.now() + user.name + user.profile.email.toUpperCase()                           // 127
                    });                                                                                             // 127
                  } else {                                                                                          // 126
                    userId = Accounts.createUser({                                                                  // 129
                      username: user.name,                                                                          // 129
                      password: Date.now() + user.name,                                                             // 129
                      joinDefaultChannelsSilenced: true                                                             // 129
                    });                                                                                             // 129
                  }                                                                                                 // 246
                                                                                                                    //
                  Meteor.runAsUser(userId, function () {                                                            // 130
                    var error, url;                                                                                 // 131
                    Meteor.call('setUsername', user.name, {                                                         // 131
                      joinDefaultChannelsSilenced: true                                                             // 131
                    });                                                                                             // 131
                    url = null;                                                                                     // 132
                                                                                                                    //
                    if (user.profile.image_original) {                                                              // 133
                      url = user.profile.image_original;                                                            // 134
                    } else if (user.profile.image_512) {                                                            // 133
                      url = user.profile.image_512;                                                                 // 136
                    }                                                                                               // 257
                                                                                                                    //
                    try {                                                                                           // 138
                      Meteor.call('setAvatarFromService', url, void 0, 'url');                                      // 139
                    } catch (error1) {                                                                              // 138
                      error = error1;                                                                               // 140
                                                                                                                    //
                      _this.logger.warn("Failed to set " + user.name + "'s avatar from url " + url);                // 141
                    }                                                                                               // 263
                                                                                                                    //
                    if (user.tz_offset) {                                                                           // 144
                      return Meteor.call('userSetUtcOffset', user.tz_offset / 3600);                                // 265
                    }                                                                                               // 266
                  });                                                                                               // 130
                  RocketChat.models.Users.update({                                                                  // 147
                    _id: userId                                                                                     // 147
                  }, {                                                                                              // 147
                    $addToSet: {                                                                                    // 147
                      importIds: user.id                                                                            // 147
                    }                                                                                               // 147
                  });                                                                                               // 147
                                                                                                                    //
                  if (user.profile.real_name) {                                                                     // 149
                    RocketChat.models.Users.setName(userId, user.profile.real_name);                                // 150
                  }                                                                                                 // 277
                                                                                                                    //
                  if (user.deleted) {                                                                               // 152
                    Meteor.call('setUserActiveStatus', userId, false);                                              // 153
                  }                                                                                                 // 280
                                                                                                                    //
                  user.rocketId = userId;                                                                           // 155
                                                                                                                    //
                  _this.userTags.push({                                                                             // 156
                    slack: "<@" + user.id + ">",                                                                    // 157
                    slackLong: "<@" + user.id + "|" + user.name + ">",                                              // 158
                    rocket: "@" + user.name                                                                         // 159
                  });                                                                                               // 157
                }                                                                                                   // 287
                                                                                                                    //
                return _this.addCountCompleted(1);                                                                  // 288
              });                                                                                                   // 113
            })(user);                                                                                               // 112
          }                                                                                                         // 291
        }                                                                                                           // 111
                                                                                                                    //
        _this.collection.update({                                                                                   // 161
          _id: _this.users._id                                                                                      // 161
        }, {                                                                                                        // 161
          $set: {                                                                                                   // 161
            'users': _this.users.users                                                                              // 161
          }                                                                                                         // 161
        });                                                                                                         // 161
                                                                                                                    //
        _this.updateProgress(Importer.ProgressStep.IMPORTING_CHANNELS);                                             // 163
                                                                                                                    //
        ref5 = _this.channels.channels;                                                                             // 164
                                                                                                                    //
        for (o = 0, len5 = ref5.length; o < len5; o++) {                                                            // 164
          channel = ref5[o];                                                                                        // 303
                                                                                                                    //
          if (channel.do_import) {                                                                                  // 304
            (function (channel) {                                                                                   // 165
              return Meteor.runAsUser(startedByUserId, function () {                                                // 306
                var existantRoom, len6, len7, member, p, q, ref6, ref7, ref8, ref9, roomUpdate, userId, users;      // 167
                existantRoom = RocketChat.models.Rooms.findOneByName(channel.name);                                 // 167
                                                                                                                    //
                if (existantRoom || channel.is_general) {                                                           // 168
                  if (channel.is_general && channel.name !== (existantRoom != null ? existantRoom.name : void 0)) {
                    Meteor.call('saveRoomSettings', 'GENERAL', 'roomName', channel.name);                           // 170
                  }                                                                                                 // 312
                                                                                                                    //
                  channel.rocketId = channel.is_general ? 'GENERAL' : existantRoom._id;                             // 171
                  RocketChat.models.Rooms.update({                                                                  // 172
                    _id: channel.rocketId                                                                           // 172
                  }, {                                                                                              // 172
                    $addToSet: {                                                                                    // 172
                      importIds: channel.id                                                                         // 172
                    }                                                                                               // 172
                  });                                                                                               // 172
                } else {                                                                                            // 168
                  users = [];                                                                                       // 174
                  ref6 = channel.members;                                                                           // 175
                                                                                                                    //
                  for (p = 0, len6 = ref6.length; p < len6; p++) {                                                  // 175
                    member = ref6[p];                                                                               // 325
                                                                                                                    //
                    if (!(member !== channel.creator)) {                                                            // 326
                      continue;                                                                                     // 327
                    }                                                                                               // 328
                                                                                                                    //
                    user = _this.getRocketUser(member);                                                             // 176
                                                                                                                    //
                    if (user != null) {                                                                             // 177
                      users.push(user.username);                                                                    // 178
                    }                                                                                               // 332
                  }                                                                                                 // 175
                                                                                                                    //
                  userId = startedByUserId;                                                                         // 180
                  ref7 = _this.users.users;                                                                         // 181
                                                                                                                    //
                  for (q = 0, len7 = ref7.length; q < len7; q++) {                                                  // 181
                    user = ref7[q];                                                                                 // 337
                                                                                                                    //
                    if (user.id === channel.creator && user.do_import) {                                            // 338
                      userId = user.rocketId;                                                                       // 182
                    }                                                                                               // 340
                  }                                                                                                 // 181
                                                                                                                    //
                  Meteor.runAsUser(userId, function () {                                                            // 184
                    var returned;                                                                                   // 185
                    returned = Meteor.call('createChannel', channel.name, users);                                   // 185
                    return channel.rocketId = returned.rid;                                                         // 345
                  });                                                                                               // 184
                  roomUpdate = {                                                                                    // 189
                    ts: new Date(channel.created * 1000)                                                            // 190
                  };                                                                                                // 190
                                                                                                                    //
                  if (!_.isEmpty((ref8 = channel.topic) != null ? ref8.value : void 0)) {                           // 192
                    roomUpdate.topic = channel.topic.value;                                                         // 193
                  }                                                                                                 // 352
                                                                                                                    //
                  if (!_.isEmpty((ref9 = channel.purpose) != null ? ref9.value : void 0)) {                         // 195
                    roomUpdate.description = channel.purpose.value;                                                 // 196
                  }                                                                                                 // 355
                                                                                                                    //
                  RocketChat.models.Rooms.update({                                                                  // 198
                    _id: channel.rocketId                                                                           // 198
                  }, {                                                                                              // 198
                    $set: roomUpdate,                                                                               // 198
                    $addToSet: {                                                                                    // 198
                      importIds: channel.id                                                                         // 198
                    }                                                                                               // 198
                  });                                                                                               // 198
                }                                                                                                   // 364
                                                                                                                    //
                return _this.addCountCompleted(1);                                                                  // 365
              });                                                                                                   // 166
            })(channel);                                                                                            // 165
          }                                                                                                         // 368
        }                                                                                                           // 164
                                                                                                                    //
        _this.collection.update({                                                                                   // 201
          _id: _this.channels._id                                                                                   // 201
        }, {                                                                                                        // 201
          $set: {                                                                                                   // 201
            'channels': _this.channels.channels                                                                     // 201
          }                                                                                                         // 201
        });                                                                                                         // 201
                                                                                                                    //
        missedTypes = {};                                                                                           // 203
        ignoreTypes = {                                                                                             // 204
          'bot_add': true,                                                                                          // 204
          'file_comment': true,                                                                                     // 204
          'file_mention': true                                                                                      // 204
        };                                                                                                          // 204
                                                                                                                    //
        _this.updateProgress(Importer.ProgressStep.IMPORTING_MESSAGES);                                             // 205
                                                                                                                    //
        ref6 = _this.messages;                                                                                      // 206
                                                                                                                    //
        fn = function (channel, messagesObj) {                                                                      // 385
          return Meteor.runAsUser(startedByUserId, function () {                                                    // 386
            var botUser, botUsername, date, details, editedBy, message, msgDataDefaults, msgObj, msgs, rcUser, reaction, results, room, slackChannel;
            slackChannel = _this.getSlackChannelFromName(channel);                                                  // 209
                                                                                                                    //
            if (slackChannel != null ? slackChannel.do_import : void 0) {                                           // 210
              room = RocketChat.models.Rooms.findOneById(slackChannel.rocketId, {                                   // 211
                fields: {                                                                                           // 211
                  usernames: 1,                                                                                     // 211
                  t: 1,                                                                                             // 211
                  name: 1                                                                                           // 211
                }                                                                                                   // 211
              });                                                                                                   // 211
              results = [];                                                                                         // 212
                                                                                                                    //
              for (date in meteorBabelHelpers.sanitizeForInObject(messagesObj)) {                                   // 398
                msgs = messagesObj[date];                                                                           // 399
                                                                                                                    //
                _this.updateRecord({                                                                                // 213
                  'messagesstatus': channel + "/" + date + "." + msgs.messages.length                               // 213
                });                                                                                                 // 213
                                                                                                                    //
                results.push(function () {                                                                          // 403
                  var len6, len7, len8, p, q, r, ref10, ref11, ref12, ref7, ref8, ref9, results1;                   // 404
                  ref7 = msgs.messages;                                                                             // 214
                  results1 = [];                                                                                    // 214
                                                                                                                    //
                  for (p = 0, len6 = ref7.length; p < len6; p++) {                                                  // 407
                    message = ref7[p];                                                                              // 408
                    msgDataDefaults = {                                                                             // 215
                      _id: "slack-" + slackChannel.id + "-" + message.ts.replace(/\./g, '-'),                       // 216
                      ts: new Date(parseInt(message.ts.split('.')[0]) * 1000)                                       // 217
                    };                                                                                              // 216
                                                                                                                    //
                    if (message.type === 'message') {                                                               // 219
                      if (message.subtype != null) {                                                                // 220
                        if (message.subtype === 'channel_join') {                                                   // 221
                          if (this.getRocketUser(message.user) != null) {                                           // 222
                            RocketChat.models.Messages.createUserJoinWithRoomIdAndUser(room._id, this.getRocketUser(message.user), msgDataDefaults);
                          }                                                                                         // 221
                        } else if (message.subtype === 'channel_leave') {                                           // 221
                          if (this.getRocketUser(message.user) != null) {                                           // 225
                            RocketChat.models.Messages.createUserLeaveWithRoomIdAndUser(room._id, this.getRocketUser(message.user), msgDataDefaults);
                          }                                                                                         // 224
                        } else if (message.subtype === 'me_message') {                                              // 224
                          msgObj = {                                                                                // 228
                            msg: "_" + this.convertSlackMessageToRocketChat(message.text) + "_"                     // 229
                          };                                                                                        // 229
                                                                                                                    //
                          _.extend(msgObj, msgDataDefaults);                                                        // 230
                                                                                                                    //
                          RocketChat.sendMessage(this.getRocketUser(message.user), msgObj, room, true);             // 231
                        } else if (message.subtype === 'bot_message' || message.subtype === 'slackbot_response') {  // 227
                          botUser = RocketChat.models.Users.findOneById('rocket.cat', {                             // 233
                            fields: {                                                                               // 233
                              username: 1                                                                           // 233
                            }                                                                                       // 233
                          });                                                                                       // 233
                          botUsername = this.bots[message.bot_id] ? (ref8 = this.bots[message.bot_id]) != null ? ref8.name : void 0 : message.username;
                          msgObj = {                                                                                // 235
                            msg: this.convertSlackMessageToRocketChat(message.text),                                // 236
                            rid: room._id,                                                                          // 237
                            bot: true,                                                                              // 238
                            attachments: message.attachments,                                                       // 239
                            username: botUsername ? botUsername : void 0                                            // 240
                          };                                                                                        // 236
                                                                                                                    //
                          _.extend(msgObj, msgDataDefaults);                                                        // 242
                                                                                                                    //
                          if (message.edited != null) {                                                             // 244
                            msgObj.editedAt = new Date(parseInt(message.edited.ts.split('.')[0]) * 1000);           // 245
                            editedBy = this.getRocketUser(message.edited.user);                                     // 246
                                                                                                                    //
                            if (editedBy != null) {                                                                 // 247
                              msgObj.editedBy = {                                                                   // 248
                                _id: editedBy._id,                                                                  // 249
                                username: editedBy.username                                                         // 250
                              };                                                                                    // 249
                            }                                                                                       // 244
                          }                                                                                         // 453
                                                                                                                    //
                          if (message.icons != null) {                                                              // 252
                            msgObj.emoji = message.icons.emoji;                                                     // 253
                          }                                                                                         // 456
                                                                                                                    //
                          RocketChat.sendMessage(botUser, msgObj, room, true);                                      // 255
                        } else if (message.subtype === 'channel_purpose') {                                         // 232
                          if (this.getRocketUser(message.user) != null) {                                           // 257
                            RocketChat.models.Messages.createRoomSettingsChangedWithTypeRoomIdMessageAndUser('room_changed_description', room._id, message.purpose, this.getRocketUser(message.user), msgDataDefaults);
                          }                                                                                         // 256
                        } else if (message.subtype === 'channel_topic') {                                           // 256
                          if (this.getRocketUser(message.user) != null) {                                           // 260
                            RocketChat.models.Messages.createRoomSettingsChangedWithTypeRoomIdMessageAndUser('room_changed_topic', room._id, message.topic, this.getRocketUser(message.user), msgDataDefaults);
                          }                                                                                         // 259
                        } else if (message.subtype === 'channel_name') {                                            // 259
                          if (this.getRocketUser(message.user) != null) {                                           // 263
                            RocketChat.models.Messages.createRoomRenamedWithRoomIdRoomNameAndUser(room._id, message.name, this.getRocketUser(message.user), msgDataDefaults);
                          }                                                                                         // 262
                        } else if (message.subtype === 'pinned_item') {                                             // 262
                          if (message.attachments) {                                                                // 266
                            msgObj = {                                                                              // 267
                              attachments: [{                                                                       // 268
                                "text": this.convertSlackMessageToRocketChat(message.attachments[0].text),          // 269
                                "author_name": message.attachments[0].author_subname,                               // 270
                                "author_icon": getAvatarUrlFromUsername(message.attachments[0].author_subname)      // 271
                              }]                                                                                    // 269
                            };                                                                                      // 268
                                                                                                                    //
                            _.extend(msgObj, msgDataDefaults);                                                      // 273
                                                                                                                    //
                            RocketChat.models.Messages.createWithTypeRoomIdMessageAndUser('message_pinned', room._id, '', this.getRocketUser(message.user), msgObj);
                          } else {                                                                                  // 266
                            this.logger.debug('Pinned item with no attachment, needs work.');                       // 277
                          }                                                                                         // 265
                        } else if (message.subtype === 'file_share') {                                              // 265
                          if (((ref9 = message.file) != null ? ref9.url_private_download : void 0) !== void 0) {    // 280
                            details = {                                                                             // 281
                              message_id: "slack-" + message.ts.replace(/\./g, '-'),                                // 282
                              name: message.file.name,                                                              // 283
                              size: message.file.size,                                                              // 284
                              type: message.file.mimetype,                                                          // 285
                              rid: room._id                                                                         // 286
                            };                                                                                      // 282
                            this.uploadFile(details, message.file.url_private_download, this.getRocketUser(message.user), room, new Date(parseInt(message.ts.split('.')[0]) * 1000));
                          }                                                                                         // 279
                        } else {                                                                                    // 279
                          if (!missedTypes[message.subtype] && !ignoreTypes[message.subtype]) {                     // 289
                            missedTypes[message.subtype] = message;                                                 // 290
                          }                                                                                         // 279
                        }                                                                                           // 220
                      } else {                                                                                      // 220
                        user = this.getRocketUser(message.user);                                                    // 292
                                                                                                                    //
                        if (user != null) {                                                                         // 293
                          msgObj = {                                                                                // 294
                            msg: this.convertSlackMessageToRocketChat(message.text),                                // 295
                            rid: room._id,                                                                          // 296
                            u: {                                                                                    // 297
                              _id: user._id,                                                                        // 298
                              username: user.username                                                               // 299
                            }                                                                                       // 298
                          };                                                                                        // 295
                                                                                                                    //
                          _.extend(msgObj, msgDataDefaults);                                                        // 301
                                                                                                                    //
                          if (message.edited != null) {                                                             // 303
                            msgObj.editedAt = new Date(parseInt(message.edited.ts.split('.')[0]) * 1000);           // 304
                            editedBy = this.getRocketUser(message.edited.user);                                     // 305
                                                                                                                    //
                            if (editedBy != null) {                                                                 // 306
                              msgObj.editedBy = {                                                                   // 307
                                _id: editedBy._id,                                                                  // 308
                                username: editedBy.username                                                         // 309
                              };                                                                                    // 308
                            }                                                                                       // 303
                          }                                                                                         // 523
                                                                                                                    //
                          RocketChat.sendMessage(this.getRocketUser(message.user), msgObj, room, true);             // 311
                        }                                                                                           // 220
                      }                                                                                             // 219
                    }                                                                                               // 527
                                                                                                                    //
                    if (RocketChat.models.Messages.findOneById(msgDataDefaults._id) != null && ((ref10 = message.reactions) != null ? ref10.length : void 0) > 0) {
                      ref11 = message.reactions;                                                                    // 315
                                                                                                                    //
                      for (q = 0, len7 = ref11.length; q < len7; q++) {                                             // 315
                        reaction = ref11[q];                                                                        // 531
                        ref12 = reaction.users;                                                                     // 316
                                                                                                                    //
                        for (r = 0, len8 = ref12.length; r < len8; r++) {                                           // 316
                          u = ref12[r];                                                                             // 534
                          rcUser = this.getRocketUser(u);                                                           // 317
                                                                                                                    //
                          if (rcUser != null) {                                                                     // 318
                            Meteor.runAsUser(rcUser._id, function (_this) {                                         // 319
                              return function () {                                                                  // 538
                                return Meteor.call('setReaction', ":" + reaction.name + ":", msgDataDefaults._id);  // 539
                              };                                                                                    // 319
                            }(this));                                                                               // 319
                          }                                                                                         // 542
                        }                                                                                           // 316
                      }                                                                                             // 314
                    }                                                                                               // 545
                                                                                                                    //
                    results1.push(this.addCountCompleted(1));                                                       // 546
                  }                                                                                                 // 214
                                                                                                                    //
                  return results1;                                                                                  // 548
                }.call(_this));                                                                                     // 549
              }                                                                                                     // 212
                                                                                                                    //
              return results;                                                                                       // 551
            }                                                                                                       // 552
          });                                                                                                       // 208
        };                                                                                                          // 207
                                                                                                                    //
        for (channel in meteorBabelHelpers.sanitizeForInObject(ref6)) {                                             // 206
          messagesObj = ref6[channel];                                                                              // 556
          fn(channel, messagesObj);                                                                                 // 557
        }                                                                                                           // 206
                                                                                                                    //
        if (!_.isEmpty(missedTypes)) {                                                                              // 324
          console.log('Missed import types:', missedTypes);                                                         // 325
        }                                                                                                           // 561
                                                                                                                    //
        _this.updateProgress(Importer.ProgressStep.FINISHING);                                                      // 327
                                                                                                                    //
        ref7 = _this.channels.channels;                                                                             // 328
                                                                                                                    //
        for (p = 0, len6 = ref7.length; p < len6; p++) {                                                            // 328
          channel = ref7[p];                                                                                        // 565
                                                                                                                    //
          if (channel.do_import && channel.is_archived) {                                                           // 566
            (function (channel) {                                                                                   // 329
              return Meteor.runAsUser(startedByUserId, function () {                                                // 568
                return Meteor.call('archiveRoom', channel.rocketId);                                                // 569
              });                                                                                                   // 330
            })(channel);                                                                                            // 329
          }                                                                                                         // 572
        }                                                                                                           // 328
                                                                                                                    //
        _this.updateProgress(Importer.ProgressStep.DONE);                                                           // 333
                                                                                                                    //
        timeTook = Date.now() - start;                                                                              // 334
        return _this.logger.log("Import took " + timeTook + " milliseconds.");                                      // 576
      };                                                                                                            // 109
    }(this));                                                                                                       // 109
    return this.getProgress();                                                                                      // 337
  };                                                                                                                // 94
                                                                                                                    //
  Slack.prototype.getSlackChannelFromName = function (channelName) {                                                // 582
    var channel, j, len, ref;                                                                                       // 340
    ref = this.channels.channels;                                                                                   // 340
                                                                                                                    //
    for (j = 0, len = ref.length; j < len; j++) {                                                                   // 340
      channel = ref[j];                                                                                             // 586
                                                                                                                    //
      if (channel.name === channelName) {                                                                           // 587
        return channel;                                                                                             // 341
      }                                                                                                             // 589
    }                                                                                                               // 340
  };                                                                                                                // 339
                                                                                                                    //
  Slack.prototype.getRocketUser = function (slackId) {                                                              // 593
    var j, len, ref, user;                                                                                          // 344
    ref = this.users.users;                                                                                         // 344
                                                                                                                    //
    for (j = 0, len = ref.length; j < len; j++) {                                                                   // 344
      user = ref[j];                                                                                                // 597
                                                                                                                    //
      if (user.id === slackId) {                                                                                    // 598
        return RocketChat.models.Users.findOneById(user.rocketId, {                                                 // 345
          fields: {                                                                                                 // 345
            username: 1,                                                                                            // 345
            name: 1                                                                                                 // 345
          }                                                                                                         // 345
        });                                                                                                         // 345
      }                                                                                                             // 605
    }                                                                                                               // 344
  };                                                                                                                // 343
                                                                                                                    //
  Slack.prototype.convertSlackMessageToRocketChat = function (message) {                                            // 609
    var j, len, ref, userReplace;                                                                                   // 348
                                                                                                                    //
    if (message != null) {                                                                                          // 348
      message = message.replace(/<!everyone>/g, '@all');                                                            // 349
      message = message.replace(/<!channel>/g, '@all');                                                             // 350
      message = message.replace(/<!here>/g, '@here');                                                               // 351
      message = message.replace(/&gt;/g, '>');                                                                      // 352
      message = message.replace(/&lt;/g, '<');                                                                      // 353
      message = message.replace(/&amp;/g, '&');                                                                     // 354
      message = message.replace(/:simple_smile:/g, ':smile:');                                                      // 355
      message = message.replace(/:memo:/g, ':pencil:');                                                             // 356
      message = message.replace(/:piggy:/g, ':pig:');                                                               // 357
      message = message.replace(/:uk:/g, ':gb:');                                                                   // 358
      message = message.replace(/<(http[s]?:[^>]*)>/g, '$1');                                                       // 359
      ref = this.userTags;                                                                                          // 360
                                                                                                                    //
      for (j = 0, len = ref.length; j < len; j++) {                                                                 // 360
        userReplace = ref[j];                                                                                       // 625
        message = message.replace(userReplace.slack, userReplace.rocket);                                           // 361
        message = message.replace(userReplace.slackLong, userReplace.rocket);                                       // 362
      }                                                                                                             // 348
    } else {                                                                                                        // 348
      message = '';                                                                                                 // 364
    }                                                                                                               // 631
                                                                                                                    //
    return message;                                                                                                 // 365
  };                                                                                                                // 347
                                                                                                                    //
  Slack.prototype.getSelection = function () {                                                                      // 635
    var selectionChannels, selectionUsers;                                                                          // 368
    selectionUsers = this.users.users.map(function (user) {                                                         // 368
      return new Importer.SelectionUser(user.id, user.name, user.profile.email, user.deleted, user.is_bot, !user.is_bot);
    });                                                                                                             // 368
    selectionChannels = this.channels.channels.map(function (channel) {                                             // 370
      return new Importer.SelectionChannel(channel.id, channel.name, channel.is_archived, true, false);             // 371
    });                                                                                                             // 370
    return new Importer.Selection(this.name, selectionUsers, selectionChannels);                                    // 373
  };                                                                                                                // 367
                                                                                                                    //
  return Slack;                                                                                                     // 646
}(Importer.Base);                                                                                                   // 648
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.coffee.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rocketchat_importer-slack/main.coffee.js                                                                //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Importer.addImporter('slack', Importer.Slack, {                                                                     // 1
  name: 'Slack',                                                                                                    // 2
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
require("./node_modules/meteor/rocketchat:importer-slack/server.coffee.js");
require("./node_modules/meteor/rocketchat:importer-slack/main.coffee.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:importer-slack'] = {};

})();

//# sourceMappingURL=rocketchat_importer-slack.js.map
