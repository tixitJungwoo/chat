(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var _ = Package.underscore._;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
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
var __coffeescriptShare, Irc;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:irc":{"server":{"settings.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rocketchat_irc/server/settings.js                                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
Meteor.startup(function () {                                                                                        // 1
	RocketChat.settings.addGroup('IRC', function () {                                                                  // 2
		// Is this thing on?                                                                                              // 4
		this.add('IRC_Enabled', false, {                                                                                  // 5
			type: 'boolean',                                                                                                 // 6
			i18nLabel: 'Enabled',                                                                                            // 7
			i18nDescription: 'IRC_Enabled',                                                                                  // 8
			alert: 'IRC Support is a work in progress. Use on a production system is not recommended at this time.'          // 9
		}); // The IRC host server to talk to                                                                             // 5
                                                                                                                    //
		this.add('IRC_Host', 'irc.freenode.net', {                                                                        // 13
			type: 'string',                                                                                                  // 14
			i18nLabel: 'Host',                                                                                               // 15
			i18nDescription: 'IRC_Hostname'                                                                                  // 16
		}); // The port to connect on the remote server                                                                   // 13
                                                                                                                    //
		this.add('IRC_Port', 6667, {                                                                                      // 20
			type: 'int',                                                                                                     // 21
			i18nLabel: 'Port',                                                                                               // 22
			i18nDescription: 'IRC_Port'                                                                                      // 23
		}); // Cache size of the messages we send the host IRC server                                                     // 20
                                                                                                                    //
		this.add('IRC_Message_Cache_Size', 200, {                                                                         // 27
			type: 'int',                                                                                                     // 28
			i18nLabel: 'Message Cache Size',                                                                                 // 29
			i18nDescription: 'IRC_Message_Cache_Size'                                                                        // 30
		}); // Expandable box for modifying regular expressions for IRC interaction                                       // 27
                                                                                                                    //
		this.section('Regular_Expressions', function () {                                                                 // 34
			this.add('IRC_RegEx_successLogin', 'Welcome to the freenode Internet Relay Chat Network', {                      // 35
				type: 'string',                                                                                                 // 36
				i18nLabel: 'Login Successful',                                                                                  // 37
				i18nDescription: 'IRC_Login_Success'                                                                            // 38
			});                                                                                                              // 35
			this.add('IRC_RegEx_failedLogin', 'You have not registered', {                                                   // 40
				type: 'string',                                                                                                 // 41
				i18nLabel: 'Login Failed',                                                                                      // 42
				i18nDescription: 'IRC_Login_Fail'                                                                               // 43
			});                                                                                                              // 40
			this.add('IRC_RegEx_receiveMessage', '^:(\S+)!~\S+ PRIVMSG (\S+) :(.+)$', {                                      // 45
				type: 'string',                                                                                                 // 46
				i18nLabel: 'Private Message',                                                                                   // 47
				i18nDescription: 'IRC_Private_Message'                                                                          // 48
			});                                                                                                              // 45
			this.add('IRC_RegEx_receiveMemberList', '^:\S+ \d+ \S+ = #(\S+) :(.*)$', {                                       // 50
				type: 'string',                                                                                                 // 51
				i18nLabel: 'Channel User List Start',                                                                           // 52
				i18nDescription: 'IRC_Channel_Users'                                                                            // 53
			});                                                                                                              // 50
			this.add('IRC_RegEx_endMemberList', '^.+#(\S+) :End of \/NAMES list.$', {                                        // 55
				type: 'string',                                                                                                 // 56
				i18nLabel: 'Channel User List End',                                                                             // 57
				i18nDescription: 'IRC_Channel_Users_End'                                                                        // 58
			});                                                                                                              // 55
			this.add('IRC_RegEx_addMemberToRoom', '^:(\S+)!~\S+ JOIN #(\S+)$', {                                             // 60
				type: 'string',                                                                                                 // 61
				i18nLabel: 'Join Channel',                                                                                      // 62
				i18nDescription: 'IRC_Channel_Join'                                                                             // 63
			});                                                                                                              // 60
			this.add('IRC_RegEx_removeMemberFromRoom', '^:(\S+)!~\S+ PART #(\S+)$', {                                        // 65
				type: 'string',                                                                                                 // 66
				i18nLabel: 'Leave Channel',                                                                                     // 67
				i18nDescription: 'IRC_Channel_Leave'                                                                            // 68
			});                                                                                                              // 65
			this.add('IRC_RegEx_quitMember', '^:(\S+)!~\S+ QUIT .*$', {                                                      // 70
				type: 'string',                                                                                                 // 71
				i18nLabel: 'Quit IRC Session',                                                                                  // 72
				i18nDescription: 'IRC_Quit'                                                                                     // 73
			});                                                                                                              // 70
		});                                                                                                               // 75
	});                                                                                                                // 77
});                                                                                                                 // 78
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"server.coffee.js":function(require){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rocketchat_irc/server/server.coffee.js                                                                  //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var IRC_AVAILABILITY,                                                                                               // 6
    IRC_HOST,                                                                                                       // 6
    IRC_PORT,                                                                                                       // 6
    IrcClient,                                                                                                      // 6
    IrcLoginer,                                                                                                     // 6
    IrcLogoutCleanUper,                                                                                             // 6
    IrcRoomJoiner,                                                                                                  // 6
    IrcRoomLeaver,                                                                                                  // 6
    IrcSender,                                                                                                      // 6
    Lru,                                                                                                            // 6
    MESSAGE_CACHE_SIZE,                                                                                             // 6
    async,                                                                                                          // 6
    bind,                                                                                                           // 6
    ircClientMap,                                                                                                   // 6
    ircReceiveMessageCache,                                                                                         // 6
    ircSendMessageCache,                                                                                            // 6
    net,                                                                                                            // 6
    slice = [].slice,                                                                                               // 6
    bind1 = function (fn, me) {                                                                                     // 6
  return function () {                                                                                              // 3
    return fn.apply(me, arguments);                                                                                 // 3
  };                                                                                                                // 3
};                                                                                                                  // 3
                                                                                                                    //
IRC_AVAILABILITY = RocketChat.settings.get('IRC_Enabled');                                                          // 6
net = Npm.require('net');                                                                                           // 9
Lru = Npm.require('lru-cache');                                                                                     // 10
MESSAGE_CACHE_SIZE = RocketChat.settings.get('IRC_Message_Cache_Size');                                             // 11
ircReceiveMessageCache = Lru(MESSAGE_CACHE_SIZE);                                                                   // 12
ircSendMessageCache = Lru(MESSAGE_CACHE_SIZE);                                                                      // 13
IRC_PORT = RocketChat.settings.get('IRC_Port');                                                                     // 16
IRC_HOST = RocketChat.settings.get('IRC_Host');                                                                     // 17
ircClientMap = {};                                                                                                  // 19
                                                                                                                    //
bind = function (f) {                                                                                               // 26
  var g;                                                                                                            // 27
  g = Meteor.bindEnvironment(function () {                                                                          // 27
    var args, self;                                                                                                 // 27
    self = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];                              // 27
    return f.apply(self, args);                                                                                     // 28
  });                                                                                                               // 27
  return function () {                                                                                              // 30
    var args;                                                                                                       // 28
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];                                                   // 28
    return g.apply(null, [this].concat(slice.call(args)));                                                          // 33
  };                                                                                                                // 28
};                                                                                                                  // 26
                                                                                                                    //
async = function () {                                                                                               // 30
  var args, f;                                                                                                      // 31
  f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];                                   // 30
  return Meteor.wrapAsync(f).apply(null, args);                                                                     // 40
};                                                                                                                  // 30
                                                                                                                    //
IrcClient = function () {                                                                                           // 33
  function IrcClient(loginReq) {                                                                                    // 34
    this.loginReq = loginReq;                                                                                       // 34
    this.onReceiveRawMessage = bind1(this.onReceiveRawMessage, this);                                               // 46
    this.onError = bind1(this.onError, this);                                                                       // 47
    this.onTimeout = bind1(this.onTimeout, this);                                                                   // 48
    this.onClose = bind1(this.onClose, this);                                                                       // 49
    this.onConnect = bind1(this.onConnect, this);                                                                   // 50
    this.connect = bind1(this.connect, this);                                                                       // 51
    this.user = this.loginReq.user;                                                                                 // 35
    ircClientMap[this.user._id] = this;                                                                             // 36
    this.ircPort = IRC_PORT;                                                                                        // 37
    this.ircHost = IRC_HOST;                                                                                        // 38
    this.msgBuf = [];                                                                                               // 39
    this.isConnected = false;                                                                                       // 41
    this.isDistroyed = false;                                                                                       // 42
    this.socket = new net.Socket();                                                                                 // 43
    this.socket.setNoDelay;                                                                                         // 44
    this.socket.setEncoding('utf-8');                                                                               // 45
    this.socket.setKeepAlive(true);                                                                                 // 46
    this.onConnect = bind(this.onConnect);                                                                          // 47
    this.onClose = bind(this.onClose);                                                                              // 48
    this.onTimeout = bind(this.onTimeout);                                                                          // 49
    this.onError = bind(this.onError);                                                                              // 50
    this.onReceiveRawMessage = bind(this.onReceiveRawMessage);                                                      // 51
    this.socket.on('data', this.onReceiveRawMessage);                                                               // 52
    this.socket.on('close', this.onClose);                                                                          // 53
    this.socket.on('timeout', this.onTimeout);                                                                      // 54
    this.socket.on('error', this.onError);                                                                          // 55
    this.isJoiningRoom = false;                                                                                     // 57
    this.receiveMemberListBuf = {};                                                                                 // 58
    this.pendingJoinRoomBuf = [];                                                                                   // 59
    this.successLoginMessageRegex = /RocketChat.settings.get('IRC_RegEx_successLogin');/;                           // 61
    this.failedLoginMessageRegex = /RocketChat.settings.get('IRC_RegEx_failedLogin');/;                             // 62
    this.receiveMessageRegex = /RocketChat.settings.get('IRC_RegEx_receiveMessage');/;                              // 63
    this.receiveMemberListRegex = /RocketChat.settings.get('IRC_RegEx_receiveMemberList');/;                        // 64
    this.endMemberListRegex = /RocketChat.settings.get('IRC_RegEx_endMemberList');/;                                // 65
    this.addMemberToRoomRegex = /RocketChat.settings.get('IRC_RegEx_addMemberToRoom');/;                            // 66
    this.removeMemberFromRoomRegex = /RocketChat.settings.get('IRC_RegEx_removeMemberFromRoom');/;                  // 67
    this.quitMemberRegex = /RocketChat.settings.get('IRC_RegEx_quitMember');/;                                      // 68
  }                                                                                                                 // 34
                                                                                                                    //
  IrcClient.prototype.connect = function (loginCb) {                                                                // 85
    this.loginCb = loginCb;                                                                                         // 70
    this.socket.connect(this.ircPort, this.ircHost, this.onConnect);                                                // 71
    return this.initRoomList();                                                                                     // 88
  };                                                                                                                // 70
                                                                                                                    //
  IrcClient.prototype.disconnect = function () {                                                                    // 91
    this.isDistroyed = true;                                                                                        // 75
    return this.socket.destroy();                                                                                   // 93
  };                                                                                                                // 74
                                                                                                                    //
  IrcClient.prototype.onConnect = function () {                                                                     // 96
    var i, len, msg, ref, results;                                                                                  // 79
    console.log('[irc] onConnect -> '.yellow, this.user.username, 'connect success.');                              // 79
    this.socket.write("NICK " + this.user.username + "\r\n");                                                       // 80
    this.socket.write("USER " + this.user.username + " 0 * :" + this.user.name + "\r\n");                           // 81
    this.isConnected = true;                                                                                        // 83
    ref = this.msgBuf;                                                                                              // 84
    results = [];                                                                                                   // 84
                                                                                                                    //
    for (i = 0, len = ref.length; i < len; i++) {                                                                   // 104
      msg = ref[i];                                                                                                 // 105
      results.push(this.socket.write(msg));                                                                         // 106
    }                                                                                                               // 84
                                                                                                                    //
    return results;                                                                                                 // 108
  };                                                                                                                // 78
                                                                                                                    //
  IrcClient.prototype.onClose = function (data) {                                                                   // 111
    console.log('[irc] onClose -> '.yellow, this.user.username, 'connection close.');                               // 87
    this.isConnected = false;                                                                                       // 88
                                                                                                                    //
    if (this.isDistroyed) {                                                                                         // 89
      return delete ircClientMap[this.user._id];                                                                    // 115
    } else {                                                                                                        // 89
      return this.connect();                                                                                        // 117
    }                                                                                                               // 118
  };                                                                                                                // 86
                                                                                                                    //
  IrcClient.prototype.onTimeout = function () {                                                                     // 121
    return console.log('[irc] onTimeout -> '.yellow, this.user.username, 'connection timeout.', arguments);         // 122
  };                                                                                                                // 94
                                                                                                                    //
  IrcClient.prototype.onError = function () {                                                                       // 125
    return console.log('[irc] onError -> '.yellow, this.user.username, 'connection error.', arguments);             // 126
  };                                                                                                                // 97
                                                                                                                    //
  IrcClient.prototype.onReceiveRawMessage = function (data) {                                                       // 129
    var i, len, line, matchResult, results;                                                                         // 101
    data = data.toString().split('\n');                                                                             // 101
    results = [];                                                                                                   // 102
                                                                                                                    //
    for (i = 0, len = data.length; i < len; i++) {                                                                  // 133
      line = data[i];                                                                                               // 134
      line = line.trim();                                                                                           // 103
      console.log("[" + this.ircHost + ":" + this.ircPort + "]:", line);                                            // 104
                                                                                                                    //
      if (line.indexOf('PING') === 0) {                                                                             // 106
        this.socket.write(line.replace('PING :', 'PONG '));                                                         // 107
        continue;                                                                                                   // 108
      }                                                                                                             // 140
                                                                                                                    //
      matchResult = this.receiveMessageRegex.exec(line);                                                            // 110
                                                                                                                    //
      if (matchResult) {                                                                                            // 111
        this.onReceiveMessage(matchResult[1], matchResult[2], matchResult[3]);                                      // 112
        continue;                                                                                                   // 113
      }                                                                                                             // 145
                                                                                                                    //
      matchResult = this.receiveMemberListRegex.exec(line);                                                         // 115
                                                                                                                    //
      if (matchResult) {                                                                                            // 116
        this.onReceiveMemberList(matchResult[1], matchResult[2].split(' '));                                        // 117
        continue;                                                                                                   // 118
      }                                                                                                             // 150
                                                                                                                    //
      matchResult = this.endMemberListRegex.exec(line);                                                             // 120
                                                                                                                    //
      if (matchResult) {                                                                                            // 121
        this.onEndMemberList(matchResult[1]);                                                                       // 122
        continue;                                                                                                   // 123
      }                                                                                                             // 155
                                                                                                                    //
      matchResult = this.addMemberToRoomRegex.exec(line);                                                           // 125
                                                                                                                    //
      if (matchResult) {                                                                                            // 126
        this.onAddMemberToRoom(matchResult[1], matchResult[2]);                                                     // 127
        continue;                                                                                                   // 128
      }                                                                                                             // 160
                                                                                                                    //
      matchResult = this.removeMemberFromRoomRegex.exec(line);                                                      // 130
                                                                                                                    //
      if (matchResult) {                                                                                            // 131
        this.onRemoveMemberFromRoom(matchResult[1], matchResult[2]);                                                // 132
        continue;                                                                                                   // 133
      }                                                                                                             // 165
                                                                                                                    //
      matchResult = this.quitMemberRegex.exec(line);                                                                // 135
                                                                                                                    //
      if (matchResult) {                                                                                            // 136
        this.onQuitMember(matchResult[1]);                                                                          // 137
        continue;                                                                                                   // 138
      }                                                                                                             // 170
                                                                                                                    //
      matchResult = this.successLoginMessageRegex.exec(line);                                                       // 140
                                                                                                                    //
      if (matchResult) {                                                                                            // 141
        this.onSuccessLoginMessage();                                                                               // 142
        continue;                                                                                                   // 143
      }                                                                                                             // 175
                                                                                                                    //
      matchResult = this.failedLoginMessageRegex.exec(line);                                                        // 145
                                                                                                                    //
      if (matchResult) {                                                                                            // 146
        this.onFailedLoginMessage();                                                                                // 147
        continue;                                                                                                   // 148
      } else {                                                                                                      // 146
        results.push(void 0);                                                                                       // 181
      }                                                                                                             // 182
    }                                                                                                               // 102
                                                                                                                    //
    return results;                                                                                                 // 184
  };                                                                                                                // 100
                                                                                                                    //
  IrcClient.prototype.onSuccessLoginMessage = function () {                                                         // 187
    console.log('[irc] onSuccessLoginMessage -> '.yellow);                                                          // 151
                                                                                                                    //
    if (this.loginCb) {                                                                                             // 152
      return this.loginCb(null, this.loginReq);                                                                     // 190
    }                                                                                                               // 191
  };                                                                                                                // 150
                                                                                                                    //
  IrcClient.prototype.onFailedLoginMessage = function () {                                                          // 194
    console.log('[irc] onFailedLoginMessage -> '.yellow);                                                           // 156
    this.loginReq.allowed = false;                                                                                  // 157
    this.disconnect();                                                                                              // 158
                                                                                                                    //
    if (this.loginCb) {                                                                                             // 159
      return this.loginCb(null, this.loginReq);                                                                     // 199
    }                                                                                                               // 200
  };                                                                                                                // 155
                                                                                                                    //
  IrcClient.prototype.onReceiveMessage = function (source, target, content) {                                       // 203
    var cacheKey, message, now, room, timestamp;                                                                    // 163
    now = new Date();                                                                                               // 163
    timestamp = now.getTime();                                                                                      // 164
    cacheKey = [source, target, content].join(',');                                                                 // 166
    console.log('[irc] ircSendMessageCache.get -> '.yellow, 'key:', cacheKey, 'value:', ircSendMessageCache.get(cacheKey), 'ts:', timestamp - 1000);
                                                                                                                    //
    if (ircSendMessageCache.get(cacheKey) > timestamp - 1000) {                                                     // 168
      return;                                                                                                       // 169
    } else {                                                                                                        // 168
      ircSendMessageCache.set(cacheKey, timestamp);                                                                 // 171
    }                                                                                                               // 213
                                                                                                                    //
    console.log('[irc] onReceiveMessage -> '.yellow, 'source:', source, 'target:', target, 'content:', content);    // 173
    source = this.createUserWhenNotExist(source);                                                                   // 174
                                                                                                                    //
    if (target[0] === '#') {                                                                                        // 175
      room = RocketChat.models.Rooms.findOneByName(target.substring(1));                                            // 176
    } else {                                                                                                        // 175
      room = this.createDirectRoomWhenNotExist(source, this.user);                                                  // 178
    }                                                                                                               // 220
                                                                                                                    //
    message = {                                                                                                     // 180
      msg: content,                                                                                                 // 181
      ts: now                                                                                                       // 182
    };                                                                                                              // 181
    cacheKey = "" + source.username + timestamp;                                                                    // 183
    ircReceiveMessageCache.set(cacheKey, true);                                                                     // 184
    console.log('[irc] ircReceiveMessageCache.set -> '.yellow, 'key:', cacheKey);                                   // 185
    return RocketChat.sendMessage(source, message, room);                                                           // 228
  };                                                                                                                // 162
                                                                                                                    //
  IrcClient.prototype.onReceiveMemberList = function (roomName, members) {                                          // 231
    return this.receiveMemberListBuf[roomName] = this.receiveMemberListBuf[roomName].concat(members);               // 232
  };                                                                                                                // 188
                                                                                                                    //
  IrcClient.prototype.onEndMemberList = function (roomName) {                                                       // 235
    var appendMembers, i, len, member, newMembers, oldMembers, removeMembers, room;                                 // 192
    newMembers = this.receiveMemberListBuf[roomName];                                                               // 192
    console.log('[irc] onEndMemberList -> '.yellow, 'room:', roomName, 'members:', newMembers.join(','));           // 193
    room = RocketChat.models.Rooms.findOneByNameAndType(roomName, 'c');                                             // 194
                                                                                                                    //
    if (!room) {                                                                                                    // 195
      return;                                                                                                       // 196
    }                                                                                                               // 242
                                                                                                                    //
    oldMembers = room.usernames;                                                                                    // 198
    appendMembers = _.difference(newMembers, oldMembers);                                                           // 199
    removeMembers = _.difference(oldMembers, newMembers);                                                           // 200
                                                                                                                    //
    for (i = 0, len = appendMembers.length; i < len; i++) {                                                         // 202
      member = appendMembers[i];                                                                                    // 247
      this.createUserWhenNotExist(member);                                                                          // 203
    }                                                                                                               // 202
                                                                                                                    //
    RocketChat.models.Rooms.removeUsernamesById(room._id, removeMembers);                                           // 205
    RocketChat.models.Rooms.addUsernamesById(room._id, appendMembers);                                              // 206
    this.isJoiningRoom = false;                                                                                     // 208
    roomName = this.pendingJoinRoomBuf.shift();                                                                     // 209
                                                                                                                    //
    if (roomName) {                                                                                                 // 210
      return this.joinRoom({                                                                                        // 255
        t: 'c',                                                                                                     // 212
        name: roomName                                                                                              // 213
      });                                                                                                           // 212
    }                                                                                                               // 259
  };                                                                                                                // 191
                                                                                                                    //
  IrcClient.prototype.sendRawMessage = function (msg) {                                                             // 262
    console.log('[irc] sendRawMessage -> '.yellow, msg.slice(0, -2));                                               // 216
                                                                                                                    //
    if (this.isConnected) {                                                                                         // 217
      return this.socket.write(msg);                                                                                // 265
    } else {                                                                                                        // 217
      return this.msgBuf.push(msg);                                                                                 // 267
    }                                                                                                               // 268
  };                                                                                                                // 215
                                                                                                                    //
  IrcClient.prototype.sendMessage = function (room, message) {                                                      // 271
    var cacheKey, i, len, msg, name, ref, target;                                                                   // 223
    console.log('[irc] sendMessage -> '.yellow, 'userName:', message.u.username);                                   // 223
    target = '';                                                                                                    // 224
                                                                                                                    //
    if (room.t === 'c') {                                                                                           // 225
      target = "#" + room.name;                                                                                     // 226
    } else if (room.t === 'd') {                                                                                    // 225
      ref = room.usernames;                                                                                         // 228
                                                                                                                    //
      for (i = 0, len = ref.length; i < len; i++) {                                                                 // 228
        name = ref[i];                                                                                              // 280
                                                                                                                    //
        if (message.u.username !== name) {                                                                          // 229
          target = name;                                                                                            // 230
          break;                                                                                                    // 231
        }                                                                                                           // 284
      }                                                                                                             // 227
    }                                                                                                               // 286
                                                                                                                    //
    cacheKey = [this.user.username, target, message.msg].join(',');                                                 // 233
    console.log('[irc] ircSendMessageCache.set -> '.yellow, 'key:', cacheKey, 'ts:', message.ts.getTime());         // 234
    ircSendMessageCache.set(cacheKey, message.ts.getTime());                                                        // 235
    msg = "PRIVMSG " + target + " :" + message.msg + "\r\n";                                                        // 236
    return this.sendRawMessage(msg);                                                                                // 291
  };                                                                                                                // 222
                                                                                                                    //
  IrcClient.prototype.initRoomList = function () {                                                                  // 294
    var i, len, results, room, rooms, roomsCursor;                                                                  // 240
    roomsCursor = RocketChat.models.Rooms.findByTypeContainingUsername('c', this.user.username, {                   // 240
      fields: {                                                                                                     // 241
        name: 1,                                                                                                    // 242
        t: 1                                                                                                        // 243
      }                                                                                                             // 242
    });                                                                                                             // 241
    rooms = roomsCursor.fetch();                                                                                    // 245
    results = [];                                                                                                   // 246
                                                                                                                    //
    for (i = 0, len = rooms.length; i < len; i++) {                                                                 // 304
      room = rooms[i];                                                                                              // 305
      results.push(this.joinRoom(room));                                                                            // 306
    }                                                                                                               // 246
                                                                                                                    //
    return results;                                                                                                 // 308
  };                                                                                                                // 239
                                                                                                                    //
  IrcClient.prototype.joinRoom = function (room) {                                                                  // 311
    var msg;                                                                                                        // 250
                                                                                                                    //
    if (room.t !== 'c' || room.name === 'general') {                                                                // 250
      return;                                                                                                       // 251
    }                                                                                                               // 315
                                                                                                                    //
    if (this.isJoiningRoom) {                                                                                       // 253
      return this.pendingJoinRoomBuf.push(room.name);                                                               // 317
    } else {                                                                                                        // 253
      console.log('[irc] joinRoom -> '.yellow, 'roomName:', room.name, 'pendingJoinRoomBuf:', this.pendingJoinRoomBuf.join(','));
      msg = "JOIN #" + room.name + "\r\n";                                                                          // 257
      this.receiveMemberListBuf[room.name] = [];                                                                    // 258
      this.sendRawMessage(msg);                                                                                     // 259
      return this.isJoiningRoom = true;                                                                             // 323
    }                                                                                                               // 324
  };                                                                                                                // 249
                                                                                                                    //
  IrcClient.prototype.leaveRoom = function (room) {                                                                 // 327
    var msg;                                                                                                        // 263
                                                                                                                    //
    if (room.t !== 'c') {                                                                                           // 263
      return;                                                                                                       // 264
    }                                                                                                               // 331
                                                                                                                    //
    msg = "PART #" + room.name + "\r\n";                                                                            // 265
    return this.sendRawMessage(msg);                                                                                // 333
  };                                                                                                                // 262
                                                                                                                    //
  IrcClient.prototype.getMemberList = function (room) {                                                             // 336
    var msg;                                                                                                        // 269
                                                                                                                    //
    if (room.t !== 'c') {                                                                                           // 269
      return;                                                                                                       // 270
    }                                                                                                               // 340
                                                                                                                    //
    msg = "NAMES #" + room.name + "\r\n";                                                                           // 271
    this.receiveMemberListBuf[room.name] = [];                                                                      // 272
    return this.sendRawMessage(msg);                                                                                // 343
  };                                                                                                                // 268
                                                                                                                    //
  IrcClient.prototype.onAddMemberToRoom = function (member, roomName) {                                             // 346
    if (this.user.username === member) {                                                                            // 276
      return;                                                                                                       // 277
    }                                                                                                               // 349
                                                                                                                    //
    console.log('[irc] onAddMemberToRoom -> '.yellow, 'roomName:', roomName, 'member:', member);                    // 279
    this.createUserWhenNotExist(member);                                                                            // 280
    return RocketChat.models.Rooms.addUsernameByName(roomName, member);                                             // 352
  };                                                                                                                // 275
                                                                                                                    //
  IrcClient.prototype.onRemoveMemberFromRoom = function (member, roomName) {                                        // 355
    console.log('[irc] onRemoveMemberFromRoom -> '.yellow, 'roomName:', roomName, 'member:', member);               // 285
    return RocketChat.models.Rooms.removeUsernameByName(roomName, member);                                          // 357
  };                                                                                                                // 284
                                                                                                                    //
  IrcClient.prototype.onQuitMember = function (member) {                                                            // 360
    console.log('[irc] onQuitMember ->'.yellow, 'username:', member);                                               // 289
    RocketChat.models.Rooms.removeUsernameFromAll(member);                                                          // 290
    return Meteor.users.update({                                                                                    // 363
      name: member                                                                                                  // 292
    }, {                                                                                                            // 292
      $set: {                                                                                                       // 293
        status: 'offline'                                                                                           // 294
      }                                                                                                             // 294
    });                                                                                                             // 293
  };                                                                                                                // 288
                                                                                                                    //
  IrcClient.prototype.createUserWhenNotExist = function (name) {                                                    // 372
    var user;                                                                                                       // 297
    user = Meteor.users.findOne({                                                                                   // 297
      name: name                                                                                                    // 297
    });                                                                                                             // 297
                                                                                                                    //
    if (!user) {                                                                                                    // 298
      console.log('[irc] createNotExistUser ->'.yellow, 'userName:', name);                                         // 299
      Meteor.call('registerUser', {                                                                                 // 300
        email: name + "@rocketchat.org",                                                                            // 301
        pass: 'rocketchat',                                                                                         // 302
        name: name                                                                                                  // 303
      });                                                                                                           // 301
      Meteor.users.update({                                                                                         // 304
        name: name                                                                                                  // 304
      }, {                                                                                                          // 304
        $set: {                                                                                                     // 305
          status: 'online',                                                                                         // 306
          username: name                                                                                            // 307
        }                                                                                                           // 306
      });                                                                                                           // 305
      user = Meteor.users.findOne({                                                                                 // 308
        name: name                                                                                                  // 308
      });                                                                                                           // 308
    }                                                                                                               // 395
                                                                                                                    //
    return user;                                                                                                    // 309
  };                                                                                                                // 296
                                                                                                                    //
  IrcClient.prototype.createDirectRoomWhenNotExist = function (source, target) {                                    // 399
    var now, rid;                                                                                                   // 313
    console.log('[irc] createDirectRoomWhenNotExist -> '.yellow, 'source:', source, 'target:', target);             // 313
    rid = [source._id, target._id].sort().join('');                                                                 // 314
    now = new Date();                                                                                               // 315
    RocketChat.models.Rooms.upsert({                                                                                // 316
      _id: rid                                                                                                      // 317
    }, {                                                                                                            // 317
      $set: {                                                                                                       // 319
        usernames: [source.username, target.username]                                                               // 320
      },                                                                                                            // 320
      $setOnInsert: {                                                                                               // 321
        t: 'd',                                                                                                     // 322
        msgs: 0,                                                                                                    // 323
        ts: now                                                                                                     // 324
      }                                                                                                             // 322
    });                                                                                                             // 319
    RocketChat.models.Subscriptions.upsert({                                                                        // 326
      rid: rid,                                                                                                     // 327
      $and: [{                                                                                                      // 328
        'u._id': target._id                                                                                         // 328
      }]                                                                                                            // 328
    }, {                                                                                                            // 327
      $setOnInsert: {                                                                                               // 330
        name: source.username,                                                                                      // 331
        t: 'd',                                                                                                     // 332
        open: false,                                                                                                // 333
        alert: false,                                                                                               // 334
        unread: 0,                                                                                                  // 335
        u: {                                                                                                        // 336
          _id: target._id,                                                                                          // 337
          username: target.username                                                                                 // 338
        }                                                                                                           // 337
      }                                                                                                             // 331
    });                                                                                                             // 330
    return {                                                                                                        // 339
      t: 'd',                                                                                                       // 340
      _id: rid                                                                                                      // 341
    };                                                                                                              // 339
  };                                                                                                                // 312
                                                                                                                    //
  return IrcClient;                                                                                                 // 442
}();                                                                                                                // 444
                                                                                                                    //
IrcClient.getByUid = function (uid) {                                                                               // 344
  return ircClientMap[uid];                                                                                         // 345
};                                                                                                                  // 344
                                                                                                                    //
IrcClient.create = function (login) {                                                                               // 347
  var ircClient;                                                                                                    // 348
                                                                                                                    //
  if (login.user == null) {                                                                                         // 348
    return login;                                                                                                   // 349
  }                                                                                                                 // 454
                                                                                                                    //
  if (!(login.user._id in ircClientMap)) {                                                                          // 350
    ircClient = new IrcClient(login);                                                                               // 351
    return async(ircClient.connect);                                                                                // 352
  }                                                                                                                 // 458
                                                                                                                    //
  return login;                                                                                                     // 354
};                                                                                                                  // 347
                                                                                                                    //
IrcLoginer = function () {                                                                                          // 357
  function IrcLoginer(login) {                                                                                      // 358
    console.log('[irc] validateLogin -> '.yellow, login);                                                           // 359
    return IrcClient.create(login);                                                                                 // 360
  }                                                                                                                 // 358
                                                                                                                    //
  return IrcLoginer;                                                                                                // 468
}();                                                                                                                // 470
                                                                                                                    //
IrcSender = function () {                                                                                           // 363
  function IrcSender(message) {                                                                                     // 364
    var cacheKey, ircClient, name, room, timestamp;                                                                 // 365
    name = message.u.username;                                                                                      // 365
    timestamp = message.ts.getTime();                                                                               // 366
    cacheKey = "" + name + timestamp;                                                                               // 367
                                                                                                                    //
    if (ircReceiveMessageCache.get(cacheKey)) {                                                                     // 368
      return message;                                                                                               // 369
    }                                                                                                               // 480
                                                                                                                    //
    room = RocketChat.models.Rooms.findOneById(message.rid, {                                                       // 371
      fields: {                                                                                                     // 371
        name: 1,                                                                                                    // 371
        usernames: 1,                                                                                               // 371
        t: 1                                                                                                        // 371
      }                                                                                                             // 371
    });                                                                                                             // 371
    ircClient = IrcClient.getByUid(message.u._id);                                                                  // 372
    ircClient.sendMessage(room, message);                                                                           // 373
    return message;                                                                                                 // 374
  }                                                                                                                 // 364
                                                                                                                    //
  return IrcSender;                                                                                                 // 493
}();                                                                                                                // 495
                                                                                                                    //
IrcRoomJoiner = function () {                                                                                       // 377
  function IrcRoomJoiner(user, room) {                                                                              // 378
    var ircClient;                                                                                                  // 379
    ircClient = IrcClient.getByUid(user._id);                                                                       // 379
    ircClient.joinRoom(room);                                                                                       // 380
    return room;                                                                                                    // 381
  }                                                                                                                 // 378
                                                                                                                    //
  return IrcRoomJoiner;                                                                                             // 505
}();                                                                                                                // 507
                                                                                                                    //
IrcRoomLeaver = function () {                                                                                       // 384
  function IrcRoomLeaver(user, room) {                                                                              // 385
    var ircClient;                                                                                                  // 386
    ircClient = IrcClient.getByUid(user._id);                                                                       // 386
    ircClient.leaveRoom(room);                                                                                      // 387
    return room;                                                                                                    // 388
  }                                                                                                                 // 385
                                                                                                                    //
  return IrcRoomLeaver;                                                                                             // 517
}();                                                                                                                // 519
                                                                                                                    //
IrcLogoutCleanUper = function () {                                                                                  // 391
  function IrcLogoutCleanUper(user) {                                                                               // 392
    var ircClient;                                                                                                  // 393
    ircClient = IrcClient.getByUid(user._id);                                                                       // 393
    ircClient.disconnect();                                                                                         // 394
    return user;                                                                                                    // 395
  }                                                                                                                 // 392
                                                                                                                    //
  return IrcLogoutCleanUper;                                                                                        // 529
}();                                                                                                                // 531
                                                                                                                    //
if (IRC_AVAILABILITY === true) {                                                                                    // 403
  RocketChat.callbacks.add('beforeValidateLogin', IrcLoginer, RocketChat.callbacks.priority.LOW, 'irc-loginer');    // 404
  RocketChat.callbacks.add('beforeSaveMessage', IrcSender, RocketChat.callbacks.priority.LOW, 'irc-sender');        // 405
  RocketChat.callbacks.add('beforeJoinRoom', IrcRoomJoiner, RocketChat.callbacks.priority.LOW, 'irc-room-joiner');  // 406
  RocketChat.callbacks.add('beforeCreateChannel', IrcRoomJoiner, RocketChat.callbacks.priority.LOW, 'irc-room-joiner-create-channel');
  RocketChat.callbacks.add('beforeLeaveRoom', IrcRoomLeaver, RocketChat.callbacks.priority.LOW, 'irc-room-leaver');
  RocketChat.callbacks.add('afterLogoutCleanUp', IrcLogoutCleanUper, RocketChat.callbacks.priority.LOW, 'irc-clean-up');
} else {                                                                                                            // 403
  return;                                                                                                           // 411
}                                                                                                                   // 542
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".coffee"
  ]
});
require("./node_modules/meteor/rocketchat:irc/server/settings.js");
require("./node_modules/meteor/rocketchat:irc/server/server.coffee.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['rocketchat:irc'] = {}, {
  Irc: Irc
});

})();

//# sourceMappingURL=rocketchat_irc.js.map
