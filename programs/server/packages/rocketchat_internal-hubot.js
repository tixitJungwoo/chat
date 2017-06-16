(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var s = Package['underscorestring:underscore.string'].s;
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
var __coffeescriptShare, Hubot, RocketChatAdapter, InternalHubotReceiver, HubotScripts, InternalHubot;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:internal-hubot":{"hubot.coffee.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/rocketchat_internal-hubot/hubot.coffee.js                                                  //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var CoffeeScript,                                                                                      // 1
    DEBUG,                                                                                             // 1
    Robot,                                                                                             // 1
    bind,                                                                                              // 1
    fs,                                                                                                // 1
    init,                                                                                              // 1
    path,                                                                                              // 1
    sendHelper,                                                                                        // 1
    slice = [].slice,                                                                                  // 1
    extend = function (child, parent) {                                                                // 1
  for (var key in meteorBabelHelpers.sanitizeForInObject(parent)) {                                    // 3
    if (hasProp.call(parent, key)) child[key] = parent[key];                                           // 3
  }                                                                                                    // 3
                                                                                                       //
  function ctor() {                                                                                    // 3
    this.constructor = child;                                                                          // 3
  }                                                                                                    // 3
                                                                                                       //
  ctor.prototype = parent.prototype;                                                                   // 3
  child.prototype = new ctor();                                                                        // 3
  child.__super__ = parent.prototype;                                                                  // 3
  return child;                                                                                        // 3
},                                                                                                     // 3
    hasProp = {}.hasOwnProperty;                                                                       // 1
                                                                                                       //
CoffeeScript = Npm.require('coffee-script');                                                           // 1
CoffeeScript.register();                                                                               // 2
Hubot = Npm.require('hubot');                                                                          // 4
fs = Npm.require('fs');                                                                                // 6
path = Npm.require('path');                                                                            // 7
DEBUG = false;                                                                                         // 13
                                                                                                       //
Hubot.Response.prototype.priv = function () {                                                          // 16
  var ref, strings;                                                                                    // 17
  strings = 1 <= arguments.length ? slice.call(arguments, 0) : [];                                     // 16
  return (ref = this.robot.adapter).priv.apply(ref, [this.envelope].concat(slice.call(strings)));      // 21
};                                                                                                     // 16
                                                                                                       //
Hubot.Robot.prototype.loadAdapter = function () {};                                                    // 20
                                                                                                       //
bind = function (f) {                                                                                  // 23
  var g;                                                                                               // 24
  g = Meteor.bindEnvironment(function () {                                                             // 24
    var args, self;                                                                                    // 24
    self = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];                 // 24
    return f.apply(self, args);                                                                        // 31
  });                                                                                                  // 24
  return function () {                                                                                 // 33
    var args;                                                                                          // 25
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];                                      // 25
    return g.apply(null, [this].concat(slice.call(args)));                                             // 36
  };                                                                                                   // 25
};                                                                                                     // 23
                                                                                                       //
Robot = function (superClass) {                                                                        // 27
  extend(Robot, superClass);                                                                           // 41
                                                                                                       //
  function Robot() {                                                                                   // 28
    var args;                                                                                          // 29
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];                                      // 28
                                                                                                       //
    Robot.__super__.constructor.apply(this, args);                                                     // 29
                                                                                                       //
    this.hear = bind(this.hear);                                                                       // 30
    this.respond = bind(this.respond);                                                                 // 31
    this.enter = bind(this.enter);                                                                     // 32
    this.leave = bind(this.leave);                                                                     // 33
    this.topic = bind(this.topic);                                                                     // 34
    this.error = bind(this.error);                                                                     // 35
    this.catchAll = bind(this.catchAll);                                                               // 36
    this.user = Meteor.users.findOne({                                                                 // 37
      username: this.name                                                                              // 37
    }, {                                                                                               // 37
      fields: {                                                                                        // 37
        username: 1                                                                                    // 37
      }                                                                                                // 37
    });                                                                                                // 37
  }                                                                                                    // 28
                                                                                                       //
  Robot.prototype.loadAdapter = function () {                                                          // 63
    return false;                                                                                      // 64
  };                                                                                                   // 38
                                                                                                       //
  Robot.prototype.hear = function (regex, callback) {                                                  // 67
    return Robot.__super__.hear.call(this, regex, Meteor.bindEnvironment(callback));                   // 68
  };                                                                                                   // 39
                                                                                                       //
  Robot.prototype.respond = function (regex, callback) {                                               // 71
    return Robot.__super__.respond.call(this, regex, Meteor.bindEnvironment(callback));                // 72
  };                                                                                                   // 40
                                                                                                       //
  Robot.prototype.enter = function (callback) {                                                        // 75
    return Robot.__super__.enter.call(this, Meteor.bindEnvironment(callback));                         // 76
  };                                                                                                   // 41
                                                                                                       //
  Robot.prototype.leave = function (callback) {                                                        // 79
    return Robot.__super__.leave.call(this, Meteor.bindEnvironment(callback));                         // 80
  };                                                                                                   // 42
                                                                                                       //
  Robot.prototype.topic = function (callback) {                                                        // 83
    return Robot.__super__.topic.call(this, Meteor.bindEnvironment(callback));                         // 84
  };                                                                                                   // 43
                                                                                                       //
  Robot.prototype.error = function (callback) {                                                        // 87
    return Robot.__super__.error.call(this, Meteor.bindEnvironment(callback));                         // 88
  };                                                                                                   // 44
                                                                                                       //
  Robot.prototype.catchAll = function (callback) {                                                     // 91
    return Robot.__super__.catchAll.call(this, Meteor.bindEnvironment(callback));                      // 92
  };                                                                                                   // 45
                                                                                                       //
  return Robot;                                                                                        // 95
}(Hubot.Robot);                                                                                        // 97
                                                                                                       //
RocketChatAdapter = function (superClass) {                                                            // 47
  extend(RocketChatAdapter, superClass);                                                               // 100
                                                                                                       //
  function RocketChatAdapter() {                                                                       // 102
    return RocketChatAdapter.__super__.constructor.apply(this, arguments);                             // 103
  }                                                                                                    // 104
                                                                                                       //
  RocketChatAdapter.prototype.send = function () {                                                     // 106
    var envelope, strings;                                                                             // 55
    envelope = arguments[0], strings = 2 <= arguments.length ? slice.call(arguments, 1) : [];          // 54
                                                                                                       //
    if (DEBUG) {                                                                                       // 55
      console.log('ROCKETCHATADAPTER -> send'.blue);                                                   // 55
    }                                                                                                  // 111
                                                                                                       //
    return sendHelper(this.robot, envelope, strings, function (_this) {                                // 112
      return function (string) {                                                                       // 113
        if (DEBUG) {                                                                                   // 58
          console.log("send " + envelope.room + ": " + string + " (" + envelope.user.id + ")");        // 58
        }                                                                                              // 116
                                                                                                       //
        return RocketChat.sendMessage(InternalHubot.user, {                                            // 117
          msg: string                                                                                  // 59
        }, {                                                                                           // 59
          _id: envelope.room                                                                           // 59
        });                                                                                            // 59
      };                                                                                               // 57
    }(this));                                                                                          // 57
  };                                                                                                   // 54
                                                                                                       //
  RocketChatAdapter.prototype.emote = function () {                                                    // 126
    var envelope, strings;                                                                             // 68
    envelope = arguments[0], strings = 2 <= arguments.length ? slice.call(arguments, 1) : [];          // 67
                                                                                                       //
    if (DEBUG) {                                                                                       // 68
      console.log('ROCKETCHATADAPTER -> emote'.blue);                                                  // 68
    }                                                                                                  // 131
                                                                                                       //
    return sendHelper(this.robot, envelope, strings, function (_this) {                                // 132
      return function (string) {                                                                       // 133
        if (DEBUG) {                                                                                   // 70
          console.log("emote " + envelope.rid + ": " + string + " (" + envelope.u.username + ")");     // 70
        }                                                                                              // 136
                                                                                                       //
        if (envelope.message["private"]) {                                                             // 71
          return _this.priv(envelope, "*** " + string + " ***");                                       // 71
        }                                                                                              // 139
                                                                                                       //
        return Meteor.call("sendMessage", {                                                            // 140
          msg: string,                                                                                 // 73
          rid: envelope.rid,                                                                           // 74
          action: true                                                                                 // 75
        });                                                                                            // 73
      };                                                                                               // 69
    }(this));                                                                                          // 69
  };                                                                                                   // 67
                                                                                                       //
  RocketChatAdapter.prototype.priv = function () {                                                     // 149
    var envelope, strings;                                                                             // 79
    envelope = arguments[0], strings = 2 <= arguments.length ? slice.call(arguments, 1) : [];          // 78
                                                                                                       //
    if (DEBUG) {                                                                                       // 79
      console.log('ROCKETCHATADAPTER -> priv'.blue);                                                   // 79
    }                                                                                                  // 154
                                                                                                       //
    return sendHelper(this.robot, envelope, strings, function (string) {                               // 155
      if (DEBUG) {                                                                                     // 81
        console.log("priv " + envelope.room + ": " + string + " (" + envelope.user.id + ")");          // 81
      }                                                                                                // 158
                                                                                                       //
      return Meteor.call("sendMessage", {                                                              // 159
        u: {                                                                                           // 83
          username: "rocketbot"                                                                        // 84
        },                                                                                             // 84
        to: "" + envelope.user.id,                                                                     // 85
        msg: string,                                                                                   // 86
        rid: envelope.room                                                                             // 87
      });                                                                                              // 83
    });                                                                                                // 80
  };                                                                                                   // 78
                                                                                                       //
  RocketChatAdapter.prototype.reply = function () {                                                    // 170
    var envelope, strings;                                                                             // 97
    envelope = arguments[0], strings = 2 <= arguments.length ? slice.call(arguments, 1) : [];          // 96
                                                                                                       //
    if (DEBUG) {                                                                                       // 97
      console.log('ROCKETCHATADAPTER -> reply'.blue);                                                  // 97
    }                                                                                                  // 175
                                                                                                       //
    if (envelope.message["private"]) {                                                                 // 98
      return this.priv.apply(this, [envelope].concat(slice.call(strings)));                            // 177
    } else {                                                                                           // 98
      return this.send.apply(this, [envelope].concat(slice.call(strings.map(function (str) {           // 179
        return envelope.user.name + ": " + str;                                                        // 180
      }))));                                                                                           // 101
    }                                                                                                  // 182
  };                                                                                                   // 96
                                                                                                       //
  RocketChatAdapter.prototype.topic = function () {                                                    // 185
    var envelope, strings;                                                                             // 110
    envelope = arguments[0], strings = 2 <= arguments.length ? slice.call(arguments, 1) : [];          // 109
                                                                                                       //
    if (DEBUG) {                                                                                       // 110
      return console.log('ROCKETCHATADAPTER -> topic'.blue);                                           // 189
    }                                                                                                  // 190
  };                                                                                                   // 109
                                                                                                       //
  RocketChatAdapter.prototype.play = function () {                                                     // 193
    var envelope, strings;                                                                             // 119
    envelope = arguments[0], strings = 2 <= arguments.length ? slice.call(arguments, 1) : [];          // 118
                                                                                                       //
    if (DEBUG) {                                                                                       // 119
      return console.log('ROCKETCHATADAPTER -> play'.blue);                                            // 197
    }                                                                                                  // 198
  };                                                                                                   // 118
                                                                                                       //
  RocketChatAdapter.prototype.run = function () {                                                      // 201
    if (DEBUG) {                                                                                       // 125
      console.log('ROCKETCHATADAPTER -> run'.blue);                                                    // 125
    }                                                                                                  // 204
                                                                                                       //
    this.robot.emit('connected');                                                                      // 126
    return this.robot.brain.mergeData({});                                                             // 206
  };                                                                                                   // 124
                                                                                                       //
  RocketChatAdapter.prototype.close = function () {                                                    // 209
    if (DEBUG) {                                                                                       // 134
      return console.log('ROCKETCHATADAPTER -> close'.blue);                                           // 211
    }                                                                                                  // 212
  };                                                                                                   // 133
                                                                                                       //
  return RocketChatAdapter;                                                                            // 215
}(Hubot.Adapter);                                                                                      // 217
                                                                                                       //
InternalHubotReceiver = function () {                                                                  // 136
  function InternalHubotReceiver(message) {                                                            // 137
    var InternalHubotTextMessage, InternalHubotUser, room;                                             // 138
                                                                                                       //
    if (DEBUG) {                                                                                       // 138
      console.log(message);                                                                            // 138
    }                                                                                                  // 224
                                                                                                       //
    if (message.u.username !== InternalHubot.name) {                                                   // 139
      room = RocketChat.models.Rooms.findOneById(message.rid);                                         // 140
                                                                                                       //
      if (room.t === 'c') {                                                                            // 142
        InternalHubotUser = new Hubot.User(message.u.username, {                                       // 143
          room: message.rid                                                                            // 143
        });                                                                                            // 143
        InternalHubotTextMessage = new Hubot.TextMessage(InternalHubotUser, message.msg, message._id);
        InternalHubot.adapter.receive(InternalHubotTextMessage);                                       // 145
      }                                                                                                // 139
    }                                                                                                  // 234
                                                                                                       //
    return message;                                                                                    // 146
  }                                                                                                    // 137
                                                                                                       //
  return InternalHubotReceiver;                                                                        // 238
}();                                                                                                   // 240
                                                                                                       //
HubotScripts = function () {                                                                           // 148
  function HubotScripts(robot) {                                                                       // 149
    var e, i, j, len, len1, modulePath, modulesToLoad, scriptFile, scriptsToLoad;                      // 150
    modulesToLoad = ['hubot-help/src/help.coffee'];                                                    // 150
                                                                                                       //
    for (i = 0, len = modulesToLoad.length; i < len; i++) {                                            // 154
      modulePath = modulesToLoad[i];                                                                   // 247
                                                                                                       //
      try {                                                                                            // 155
        Npm.require(modulePath)(robot);                                                                // 156
                                                                                                       //
        robot.parseHelp(__meteor_bootstrap__.serverDir + '/npm/node_modules/meteor/rocketchat_internal-hubot/node_modules/' + modulePath);
        console.log(("Loaded " + modulePath).green);                                                   // 158
      } catch (error) {                                                                                // 155
        e = error;                                                                                     // 159
        console.log(("can't load " + modulePath).red);                                                 // 160
        console.log(e);                                                                                // 161
      }                                                                                                // 256
    }                                                                                                  // 154
                                                                                                       //
    scriptsToLoad = RocketChat.settings.get('InternalHubot_ScriptsToLoad').split(',') || [];           // 163
                                                                                                       //
    for (j = 0, len1 = scriptsToLoad.length; j < len1; j++) {                                          // 165
      scriptFile = scriptsToLoad[j];                                                                   // 260
                                                                                                       //
      try {                                                                                            // 166
        scriptFile = s.trim(scriptFile);                                                               // 167
                                                                                                       //
        Npm.require('hubot-scripts/src/scripts/' + scriptFile)(robot);                                 // 169
                                                                                                       //
        robot.parseHelp(__meteor_bootstrap__.serverDir + '/npm/node_modules/meteor/rocketchat_internal-hubot/node_modules/hubot-scripts/src/scripts/' + scriptFile);
        console.log(("Loaded " + scriptFile).green);                                                   // 172
      } catch (error) {                                                                                // 166
        e = error;                                                                                     // 173
        console.log(("can't load " + scriptFile).red);                                                 // 174
        console.log(e);                                                                                // 175
      }                                                                                                // 270
    }                                                                                                  // 165
  }                                                                                                    // 149
                                                                                                       //
  return HubotScripts;                                                                                 // 274
}();                                                                                                   // 276
                                                                                                       //
sendHelper = Meteor.bindEnvironment(function (robot, envelope, strings, map) {                         // 177
  var err, results, string;                                                                            // 178
  results = [];                                                                                        // 178
                                                                                                       //
  while (strings.length > 0) {                                                                         // 281
    string = strings.shift();                                                                          // 179
                                                                                                       //
    if (typeof string === 'function') {                                                                // 180
      results.push(string());                                                                          // 284
    } else {                                                                                           // 180
      try {                                                                                            // 183
        results.push(map(string));                                                                     // 287
      } catch (error) {                                                                                // 183
        err = error;                                                                                   // 185
                                                                                                       //
        if (DEBUG) {                                                                                   // 186
          console.error("Hubot error: " + err);                                                        // 186
        }                                                                                              // 292
                                                                                                       //
        results.push(robot.logger.error("RocketChat send error: " + err));                             // 293
      }                                                                                                // 180
    }                                                                                                  // 295
  }                                                                                                    // 178
                                                                                                       //
  return results;                                                                                      // 297
});                                                                                                    // 177
InternalHubot = {};                                                                                    // 189
init = _.debounce(Meteor.bindEnvironment(function (_this) {                                            // 191
  return function () {                                                                                 // 303
    if (RocketChat.settings.get('InternalHubot_Enabled')) {                                            // 192
      InternalHubot = new Robot(null, null, false, RocketChat.settings.get('InternalHubot_Username'));
      InternalHubot.alias = 'bot';                                                                     // 194
      InternalHubot.adapter = new RocketChatAdapter(InternalHubot);                                    // 195
      HubotScripts(InternalHubot);                                                                     // 196
      InternalHubot.run();                                                                             // 197
      return RocketChat.callbacks.add('afterSaveMessage', InternalHubotReceiver, RocketChat.callbacks.priority.LOW, 'InternalHubot');
    } else {                                                                                           // 192
      InternalHubot = {};                                                                              // 200
      return RocketChat.callbacks.remove('afterSaveMessage', 'InternalHubot');                         // 313
    }                                                                                                  // 314
  };                                                                                                   // 191
}(this)), 1000);                                                                                       // 191
Meteor.startup(function () {                                                                           // 204
  init();                                                                                              // 205
  return RocketChat.models.Settings.findByIds(['InternalHubot_Username', 'InternalHubot_Enabled', 'InternalHubot_ScriptsToLoad']).observe({
    changed: function () {                                                                             // 207
      return init();                                                                                   // 322
    }                                                                                                  // 207
  });                                                                                                  // 207
});                                                                                                    // 204
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"settings.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// packages/rocketchat_internal-hubot/settings.coffee.js                                               //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
RocketChat.settings.addGroup('InternalHubot');                                                         // 1
RocketChat.settings.add('InternalHubot_Enabled', false, {                                              // 2
  type: 'boolean',                                                                                     // 2
  group: 'InternalHubot',                                                                              // 2
  i18nLabel: 'Enabled'                                                                                 // 2
});                                                                                                    // 2
RocketChat.settings.add('InternalHubot_Username', 'rocket.cat', {                                      // 3
  type: 'string',                                                                                      // 3
  group: 'InternalHubot',                                                                              // 3
  i18nLabel: 'Username',                                                                               // 3
  i18nDescription: 'InternalHubot_Username_Description'                                                // 3
});                                                                                                    // 3
RocketChat.settings.add('InternalHubot_ScriptsToLoad', 'hello.coffee,zen.coffee', {                    // 4
  type: 'string',                                                                                      // 4
  group: 'InternalHubot'                                                                               // 4
});                                                                                                    // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".coffee"
  ]
});
require("./node_modules/meteor/rocketchat:internal-hubot/hubot.coffee.js");
require("./node_modules/meteor/rocketchat:internal-hubot/settings.coffee.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['rocketchat:internal-hubot'] = {}, {
  Hubot: Hubot,
  HubotScripts: HubotScripts,
  InternalHubot: InternalHubot,
  InternalHubotReceiver: InternalHubotReceiver,
  RocketChatAdapter: RocketChatAdapter
});

})();

//# sourceMappingURL=rocketchat_internal-hubot.js.map
