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
var Template = Package['templating-runtime'].Template;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var __coffeescriptShare, WebRTC;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:webrtc":{"adapter.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_webrtc/adapter.js                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
window.RTCSessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription;
window.RTCIceCandidate = window.RTCIceCandidate || window.mozRTCIceCandidate || window.webkitRTCIceCandidate;         // 3
window.RTCSessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription;
window.AudioContext = window.AudioContext || window.mozAudioContext || window.webkitAudioContext;                     // 5
navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;         // 6
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"WebRTCClass.coffee.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_webrtc/WebRTCClass.coffee.js                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var WebRTCClass, WebRTCTransportClass, emptyFn;                                                                       // 1
                                                                                                                      //
emptyFn = function () {};                                                                                             // 1
                                                                                                                      //
WebRTCTransportClass = function () {                                                                                  // 4
  WebRTCTransportClass.prototype.debug = false;                                                                       // 6
                                                                                                                      //
  WebRTCTransportClass.prototype.log = function () {                                                                  // 8
    if (this.debug === true) {                                                                                        // 8
      return console.log.apply(console, arguments);                                                                   // 10
    }                                                                                                                 // 11
  };                                                                                                                  // 7
                                                                                                                      //
  function WebRTCTransportClass(webrtcInstance) {                                                                     // 11
    this.webrtcInstance = webrtcInstance;                                                                             // 11
    this.callbacks = {};                                                                                              // 12
    RocketChat.Notifications.onRoom(this.webrtcInstance.room, 'webrtc', function (_this) {                            // 14
      return function (type, data) {                                                                                  // 18
        var fn, i, len, ref, ref1, results;                                                                           // 15
                                                                                                                      //
        _this.log('WebRTCTransportClass - onRoom', type, data);                                                       // 15
                                                                                                                      //
        switch (type) {                                                                                               // 17
          case 'status':                                                                                              // 17
            if (((ref = _this.callbacks['onRemoteStatus']) != null ? ref.length : void 0) > 0) {                      // 19
              ref1 = _this.callbacks['onRemoteStatus'];                                                               // 20
              results = [];                                                                                           // 20
                                                                                                                      //
              for (i = 0, len = ref1.length; i < len; i++) {                                                          // 26
                fn = ref1[i];                                                                                         // 27
                results.push(fn(data));                                                                               // 28
              }                                                                                                       // 20
                                                                                                                      //
              return results;                                                                                         // 30
            }                                                                                                         // 31
                                                                                                                      //
        }                                                                                                             // 17
      };                                                                                                              // 14
    }(this));                                                                                                         // 14
  }                                                                                                                   // 11
                                                                                                                      //
  WebRTCTransportClass.prototype.onUserStream = function (type, data) {                                               // 37
    var fn, i, j, k, l, len, len1, len2, len3, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, results, results1, results2, results3;
                                                                                                                      //
    if (data.room !== this.webrtcInstance.room) {                                                                     // 23
      return;                                                                                                         // 23
    }                                                                                                                 // 41
                                                                                                                      //
    this.log('WebRTCTransportClass - onUser', type, data);                                                            // 24
                                                                                                                      //
    switch (type) {                                                                                                   // 26
      case 'call':                                                                                                    // 26
        if (((ref = this.callbacks['onRemoteCall']) != null ? ref.length : void 0) > 0) {                             // 28
          ref1 = this.callbacks['onRemoteCall'];                                                                      // 29
          results = [];                                                                                               // 29
                                                                                                                      //
          for (i = 0, len = ref1.length; i < len; i++) {                                                              // 48
            fn = ref1[i];                                                                                             // 49
            results.push(fn(data));                                                                                   // 50
          }                                                                                                           // 29
                                                                                                                      //
          return results;                                                                                             // 52
        }                                                                                                             // 53
                                                                                                                      //
        break;                                                                                                        // 27
                                                                                                                      //
      case 'join':                                                                                                    // 26
        if (((ref2 = this.callbacks['onRemoteJoin']) != null ? ref2.length : void 0) > 0) {                           // 32
          ref3 = this.callbacks['onRemoteJoin'];                                                                      // 33
          results1 = [];                                                                                              // 33
                                                                                                                      //
          for (j = 0, len1 = ref3.length; j < len1; j++) {                                                            // 59
            fn = ref3[j];                                                                                             // 60
            results1.push(fn(data));                                                                                  // 61
          }                                                                                                           // 33
                                                                                                                      //
          return results1;                                                                                            // 63
        }                                                                                                             // 64
                                                                                                                      //
        break;                                                                                                        // 31
                                                                                                                      //
      case 'candidate':                                                                                               // 26
        if (((ref4 = this.callbacks['onRemoteCandidate']) != null ? ref4.length : void 0) > 0) {                      // 36
          ref5 = this.callbacks['onRemoteCandidate'];                                                                 // 37
          results2 = [];                                                                                              // 37
                                                                                                                      //
          for (k = 0, len2 = ref5.length; k < len2; k++) {                                                            // 70
            fn = ref5[k];                                                                                             // 71
            results2.push(fn(data));                                                                                  // 72
          }                                                                                                           // 37
                                                                                                                      //
          return results2;                                                                                            // 74
        }                                                                                                             // 75
                                                                                                                      //
        break;                                                                                                        // 35
                                                                                                                      //
      case 'description':                                                                                             // 26
        if (((ref6 = this.callbacks['onRemoteDescription']) != null ? ref6.length : void 0) > 0) {                    // 40
          ref7 = this.callbacks['onRemoteDescription'];                                                               // 41
          results3 = [];                                                                                              // 41
                                                                                                                      //
          for (l = 0, len3 = ref7.length; l < len3; l++) {                                                            // 81
            fn = ref7[l];                                                                                             // 82
            results3.push(fn(data));                                                                                  // 83
          }                                                                                                           // 41
                                                                                                                      //
          return results3;                                                                                            // 85
        }                                                                                                             // 86
                                                                                                                      //
    }                                                                                                                 // 26
  };                                                                                                                  // 22
                                                                                                                      //
  WebRTCTransportClass.prototype.startCall = function (data) {                                                        // 90
    this.log('WebRTCTransportClass - startCall', this.webrtcInstance.room, this.webrtcInstance.selfId);               // 44
    return RocketChat.Notifications.notifyUsersOfRoom(this.webrtcInstance.room, 'webrtc', 'call', {                   // 92
      from: this.webrtcInstance.selfId,                                                                               // 46
      room: this.webrtcInstance.room,                                                                                 // 47
      media: data.media,                                                                                              // 48
      monitor: data.monitor                                                                                           // 49
    });                                                                                                               // 46
  };                                                                                                                  // 43
                                                                                                                      //
  WebRTCTransportClass.prototype.joinCall = function (data) {                                                         // 100
    this.log('WebRTCTransportClass - joinCall', this.webrtcInstance.room, this.webrtcInstance.selfId);                // 52
                                                                                                                      //
    if (data.monitor === true) {                                                                                      // 53
      return RocketChat.Notifications.notifyUser(data.to, 'webrtc', 'join', {                                         // 103
        from: this.webrtcInstance.selfId,                                                                             // 55
        room: this.webrtcInstance.room,                                                                               // 56
        media: data.media,                                                                                            // 57
        monitor: data.monitor                                                                                         // 58
      });                                                                                                             // 55
    } else {                                                                                                          // 53
      return RocketChat.Notifications.notifyUsersOfRoom(this.webrtcInstance.room, 'webrtc', 'join', {                 // 110
        from: this.webrtcInstance.selfId,                                                                             // 61
        room: this.webrtcInstance.room,                                                                               // 62
        media: data.media,                                                                                            // 63
        monitor: data.monitor                                                                                         // 64
      });                                                                                                             // 61
    }                                                                                                                 // 116
  };                                                                                                                  // 51
                                                                                                                      //
  WebRTCTransportClass.prototype.sendCandidate = function (data) {                                                    // 119
    data.from = this.webrtcInstance.selfId;                                                                           // 67
    data.room = this.webrtcInstance.room;                                                                             // 68
    this.log('WebRTCTransportClass - sendCandidate', data);                                                           // 69
    return RocketChat.Notifications.notifyUser(data.to, 'webrtc', 'candidate', data);                                 // 123
  };                                                                                                                  // 66
                                                                                                                      //
  WebRTCTransportClass.prototype.sendDescription = function (data) {                                                  // 126
    data.from = this.webrtcInstance.selfId;                                                                           // 73
    data.room = this.webrtcInstance.room;                                                                             // 74
    this.log('WebRTCTransportClass - sendDescription', data);                                                         // 75
    return RocketChat.Notifications.notifyUser(data.to, 'webrtc', 'description', data);                               // 130
  };                                                                                                                  // 72
                                                                                                                      //
  WebRTCTransportClass.prototype.sendStatus = function (data) {                                                       // 133
    this.log('WebRTCTransportClass - sendStatus', data, this.webrtcInstance.room);                                    // 79
    data.from = this.webrtcInstance.selfId;                                                                           // 80
    return RocketChat.Notifications.notifyRoom(this.webrtcInstance.room, 'webrtc', 'status', data);                   // 136
  };                                                                                                                  // 78
                                                                                                                      //
  WebRTCTransportClass.prototype.onRemoteCall = function (fn) {                                                       // 139
    var base;                                                                                                         // 84
                                                                                                                      //
    if ((base = this.callbacks)['onRemoteCall'] == null) {                                                            // 141
      base['onRemoteCall'] = [];                                                                                      // 142
    }                                                                                                                 // 143
                                                                                                                      //
    return this.callbacks['onRemoteCall'].push(fn);                                                                   // 144
  };                                                                                                                  // 83
                                                                                                                      //
  WebRTCTransportClass.prototype.onRemoteJoin = function (fn) {                                                       // 147
    var base;                                                                                                         // 88
                                                                                                                      //
    if ((base = this.callbacks)['onRemoteJoin'] == null) {                                                            // 149
      base['onRemoteJoin'] = [];                                                                                      // 150
    }                                                                                                                 // 151
                                                                                                                      //
    return this.callbacks['onRemoteJoin'].push(fn);                                                                   // 152
  };                                                                                                                  // 87
                                                                                                                      //
  WebRTCTransportClass.prototype.onRemoteCandidate = function (fn) {                                                  // 155
    var base;                                                                                                         // 92
                                                                                                                      //
    if ((base = this.callbacks)['onRemoteCandidate'] == null) {                                                       // 157
      base['onRemoteCandidate'] = [];                                                                                 // 158
    }                                                                                                                 // 159
                                                                                                                      //
    return this.callbacks['onRemoteCandidate'].push(fn);                                                              // 160
  };                                                                                                                  // 91
                                                                                                                      //
  WebRTCTransportClass.prototype.onRemoteDescription = function (fn) {                                                // 163
    var base;                                                                                                         // 96
                                                                                                                      //
    if ((base = this.callbacks)['onRemoteDescription'] == null) {                                                     // 165
      base['onRemoteDescription'] = [];                                                                               // 166
    }                                                                                                                 // 167
                                                                                                                      //
    return this.callbacks['onRemoteDescription'].push(fn);                                                            // 168
  };                                                                                                                  // 95
                                                                                                                      //
  WebRTCTransportClass.prototype.onRemoteStatus = function (fn) {                                                     // 171
    var base;                                                                                                         // 100
                                                                                                                      //
    if ((base = this.callbacks)['onRemoteStatus'] == null) {                                                          // 173
      base['onRemoteStatus'] = [];                                                                                    // 174
    }                                                                                                                 // 175
                                                                                                                      //
    return this.callbacks['onRemoteStatus'].push(fn);                                                                 // 176
  };                                                                                                                  // 99
                                                                                                                      //
  return WebRTCTransportClass;                                                                                        // 179
}();                                                                                                                  // 181
                                                                                                                      //
WebRTCClass = function () {                                                                                           // 104
  WebRTCClass.prototype.config = {                                                                                    // 184
    iceServers: []                                                                                                    // 106
  };                                                                                                                  // 106
  WebRTCClass.prototype.debug = false;                                                                                // 188
  WebRTCClass.prototype.transportClass = WebRTCTransportClass; /*                                                     // 190
                                                               		@param seldId {String}                               //
                                                               		@param room {String}                                 //
                                                                */                                                    //
                                                                                                                      //
  function WebRTCClass(selfId, room) {                                                                                // 117
    var i, len, ref, server, serverConfig, servers, userAgent;                                                        // 118
    this.selfId = selfId;                                                                                             // 117
    this.room = room;                                                                                                 // 117
    this.config.iceServers = [];                                                                                      // 118
    servers = RocketChat.settings.get("WebRTC_Servers");                                                              // 120
                                                                                                                      //
    if ((servers != null ? servers.trim() : void 0) !== '') {                                                         // 121
      servers = servers.replace(/\s/g, '');                                                                           // 122
      servers = servers.split(',');                                                                                   // 123
                                                                                                                      //
      for (i = 0, len = servers.length; i < len; i++) {                                                               // 124
        server = servers[i];                                                                                          // 208
        server = server.split('@');                                                                                   // 125
        serverConfig = {                                                                                              // 126
          urls: server.pop()                                                                                          // 127
        };                                                                                                            // 127
                                                                                                                      //
        if (server.length === 1) {                                                                                    // 129
          server = server[0].split(':');                                                                              // 130
          serverConfig.username = decodeURIComponent(server[0]);                                                      // 131
          serverConfig.credential = decodeURIComponent(server[1]);                                                    // 132
        }                                                                                                             // 217
                                                                                                                      //
        this.config.iceServers.push(serverConfig);                                                                    // 134
      }                                                                                                               // 121
    }                                                                                                                 // 220
                                                                                                                      //
    this.peerConnections = {};                                                                                        // 136
    this.remoteItems = new ReactiveVar([]);                                                                           // 138
    this.remoteItemsById = new ReactiveVar({});                                                                       // 139
    this.callInProgress = new ReactiveVar(false);                                                                     // 140
    this.audioEnabled = new ReactiveVar(true);                                                                        // 141
    this.videoEnabled = new ReactiveVar(true);                                                                        // 142
    this.overlayEnabled = new ReactiveVar(false);                                                                     // 143
    this.screenShareEnabled = new ReactiveVar(false);                                                                 // 144
    this.localUrl = new ReactiveVar();                                                                                // 145
    this.active = false;                                                                                              // 147
    this.remoteMonitoring = false;                                                                                    // 148
    this.monitor = false;                                                                                             // 149
    this.autoAccept = false;                                                                                          // 150
    this.navigator = void 0;                                                                                          // 152
    userAgent = navigator.userAgent.toLocaleLowerCase();                                                              // 153
                                                                                                                      //
    if (userAgent.indexOf('electron') !== -1) {                                                                       // 154
      this.navigator = 'electron';                                                                                    // 155
    } else if (userAgent.indexOf('chrome') !== -1) {                                                                  // 154
      this.navigator = 'chrome';                                                                                      // 157
    } else if (userAgent.indexOf('firefox') !== -1) {                                                                 // 156
      this.navigator = 'firefox';                                                                                     // 159
    } else if (userAgent.indexOf('safari') !== -1) {                                                                  // 158
      this.navigator = 'safari';                                                                                      // 161
    }                                                                                                                 // 244
                                                                                                                      //
    this.screenShareAvailable = (ref = this.navigator) === 'chrome' || ref === 'firefox' || ref === 'electron';       // 163
    this.media = {                                                                                                    // 165
      video: false,                                                                                                   // 166
      audio: true                                                                                                     // 167
    };                                                                                                                // 166
    this.transport = new this.transportClass(this);                                                                   // 169
    this.transport.onRemoteCall(this.onRemoteCall.bind(this));                                                        // 171
    this.transport.onRemoteJoin(this.onRemoteJoin.bind(this));                                                        // 172
    this.transport.onRemoteCandidate(this.onRemoteCandidate.bind(this));                                              // 173
    this.transport.onRemoteDescription(this.onRemoteDescription.bind(this));                                          // 174
    this.transport.onRemoteStatus(this.onRemoteStatus.bind(this));                                                    // 175
    Meteor.setInterval(this.checkPeerConnections.bind(this), 1000);                                                   // 177
  }                                                                                                                   // 117
                                                                                                                      //
  WebRTCClass.prototype.log = function () {                                                                           // 259
    if (this.debug === true) {                                                                                        // 182
      return console.log.apply(console, arguments);                                                                   // 261
    }                                                                                                                 // 262
  };                                                                                                                  // 181
                                                                                                                      //
  WebRTCClass.prototype.onError = function () {                                                                       // 265
    return console.error.apply(console, arguments);                                                                   // 266
  };                                                                                                                  // 185
                                                                                                                      //
  WebRTCClass.prototype.checkPeerConnections = function () {                                                          // 269
    var id, peerConnection, ref, ref1, results;                                                                       // 189
    ref = this.peerConnections;                                                                                       // 189
    results = [];                                                                                                     // 189
                                                                                                                      //
    for (id in meteorBabelHelpers.sanitizeForInObject(ref)) {                                                         // 273
      peerConnection = ref[id];                                                                                       // 274
                                                                                                                      //
      if ((ref1 = peerConnection.iceConnectionState) !== 'connected' && ref1 !== 'completed' && peerConnection.createdAt + 5000 < Date.now()) {
        results.push(this.stopPeerConnection(id));                                                                    // 276
      } else {                                                                                                        // 190
        results.push(void 0);                                                                                         // 278
      }                                                                                                               // 279
    }                                                                                                                 // 189
                                                                                                                      //
    return results;                                                                                                   // 281
  };                                                                                                                  // 188
                                                                                                                      //
  WebRTCClass.prototype.updateRemoteItems = function () {                                                             // 284
    var i, id, item, items, itemsById, len, peerConnection, ref, ref1, remoteStream;                                  // 194
    items = [];                                                                                                       // 194
    itemsById = {};                                                                                                   // 195
    ref = this.peerConnections;                                                                                       // 197
                                                                                                                      //
    for (id in meteorBabelHelpers.sanitizeForInObject(ref)) {                                                         // 197
      peerConnection = ref[id];                                                                                       // 290
      ref1 = peerConnection.getRemoteStreams();                                                                       // 198
                                                                                                                      //
      for (i = 0, len = ref1.length; i < len; i++) {                                                                  // 198
        remoteStream = ref1[i];                                                                                       // 293
        item = {                                                                                                      // 199
          id: id,                                                                                                     // 200
          url: URL.createObjectURL(remoteStream),                                                                     // 201
          state: peerConnection.iceConnectionState                                                                    // 202
        };                                                                                                            // 200
                                                                                                                      //
        switch (peerConnection.iceConnectionState) {                                                                  // 204
          case 'checking':                                                                                            // 204
            item.stateText = 'Connecting...';                                                                         // 206
            break;                                                                                                    // 205
                                                                                                                      //
          case 'connected':                                                                                           // 204
          case 'completed':                                                                                           // 204
            item.stateText = 'Connected';                                                                             // 209
            item.connected = true;                                                                                    // 210
            break;                                                                                                    // 208
                                                                                                                      //
          case 'disconnected':                                                                                        // 204
            item.stateText = 'Disconnected';                                                                          // 213
            break;                                                                                                    // 212
                                                                                                                      //
          case 'failed':                                                                                              // 204
            item.stateText = 'Failed';                                                                                // 216
            break;                                                                                                    // 215
                                                                                                                      //
          case 'closed':                                                                                              // 204
            item.stateText = 'Closed';                                                                                // 219
        }                                                                                                             // 204
                                                                                                                      //
        items.push(item);                                                                                             // 221
        itemsById[id] = item;                                                                                         // 222
      }                                                                                                               // 198
    }                                                                                                                 // 197
                                                                                                                      //
    this.remoteItems.set(items);                                                                                      // 224
    return this.remoteItemsById.set(itemsById);                                                                       // 322
  };                                                                                                                  // 193
                                                                                                                      //
  WebRTCClass.prototype.resetCallInProgress = function () {                                                           // 325
    return this.callInProgress.set(false);                                                                            // 326
  };                                                                                                                  // 227
                                                                                                                      //
  WebRTCClass.prototype.broadcastStatus = function () {                                                               // 329
    var id, peerConnection, ref, remoteConnections;                                                                   // 231
                                                                                                                      //
    if (this.active !== true || this.monitor === true || this.remoteMonitoring === true) {                            // 231
      return;                                                                                                         // 231
    }                                                                                                                 // 333
                                                                                                                      //
    remoteConnections = [];                                                                                           // 233
    ref = this.peerConnections;                                                                                       // 234
                                                                                                                      //
    for (id in meteorBabelHelpers.sanitizeForInObject(ref)) {                                                         // 234
      peerConnection = ref[id];                                                                                       // 337
      remoteConnections.push({                                                                                        // 235
        id: id,                                                                                                       // 236
        media: peerConnection.remoteMedia                                                                             // 237
      });                                                                                                             // 236
    }                                                                                                                 // 234
                                                                                                                      //
    return this.transport.sendStatus({                                                                                // 343
      media: this.media,                                                                                              // 240
      remoteConnections: remoteConnections                                                                            // 241
    });                                                                                                               // 240
  }; /*                                                                                                               // 230
     		@param data {Object}                                                                                           //
     			from {String}                                                                                                 //
     			media {Object}                                                                                                //
     			remoteConnections {Array[Object]}                                                                             //
     				id {String}                                                                                                  //
     				media {Object}                                                                                               //
      */                                                                                                              //
                                                                                                                      //
  WebRTCClass.prototype.onRemoteStatus = function (data) {                                                            // 359
    var i, len, remoteConnection, remoteConnections, results;                                                         // 254
    this.callInProgress.set(true);                                                                                    // 254
    Meteor.clearTimeout(this.callInProgressTimeout);                                                                  // 256
    this.callInProgressTimeout = Meteor.setTimeout(this.resetCallInProgress.bind(this), 2000);                        // 257
                                                                                                                      //
    if (this.active !== true) {                                                                                       // 259
      return;                                                                                                         // 259
    }                                                                                                                 // 366
                                                                                                                      //
    remoteConnections = [{                                                                                            // 261
      id: data.from,                                                                                                  // 261
      media: data.media                                                                                               // 261
    }].concat(data.remoteConnections);                                                                                // 261
    results = [];                                                                                                     // 263
                                                                                                                      //
    for (i = 0, len = remoteConnections.length; i < len; i++) {                                                       // 374
      remoteConnection = remoteConnections[i];                                                                        // 375
                                                                                                                      //
      if (remoteConnection.id !== this.selfId && this.peerConnections[remoteConnection.id] == null) {                 // 264
        this.log('reconnecting with', remoteConnection.id);                                                           // 265
        results.push(this.onRemoteJoin({                                                                              // 378
          from: remoteConnection.id,                                                                                  // 267
          media: remoteConnection.media                                                                               // 268
        }));                                                                                                          // 267
      } else {                                                                                                        // 264
        results.push(void 0);                                                                                         // 383
      }                                                                                                               // 384
    }                                                                                                                 // 263
                                                                                                                      //
    return results;                                                                                                   // 386
  }; /*                                                                                                               // 251
     		@param id {String}                                                                                             //
      */                                                                                                              //
                                                                                                                      //
  WebRTCClass.prototype.getPeerConnection = function (id) {                                                           // 394
    var eventName, eventNames, i, len, peerConnection;                                                                // 274
                                                                                                                      //
    if (this.peerConnections[id] != null) {                                                                           // 274
      return this.peerConnections[id];                                                                                // 274
    }                                                                                                                 // 398
                                                                                                                      //
    peerConnection = new RTCPeerConnection(this.config);                                                              // 276
    peerConnection.createdAt = Date.now();                                                                            // 278
    peerConnection.remoteMedia = {};                                                                                  // 279
    this.peerConnections[id] = peerConnection;                                                                        // 281
    eventNames = ['icecandidate', 'addstream', 'removestream', 'iceconnectionstatechange', 'datachannel', 'identityresult', 'idpassertionerror', 'idpvalidationerror', 'negotiationneeded', 'peeridentity', 'signalingstatechange'];
                                                                                                                      //
    for (i = 0, len = eventNames.length; i < len; i++) {                                                              // 297
      eventName = eventNames[i];                                                                                      // 405
      peerConnection.addEventListener(eventName, function (_this) {                                                   // 298
        return function (e) {                                                                                         // 407
          return _this.log(id, e.type, e);                                                                            // 408
        };                                                                                                            // 298
      }(this));                                                                                                       // 298
    }                                                                                                                 // 297
                                                                                                                      //
    peerConnection.addEventListener('icecandidate', function (_this) {                                                // 301
      return function (e) {                                                                                           // 413
        if (e.candidate == null) {                                                                                    // 302
          return;                                                                                                     // 303
        }                                                                                                             // 416
                                                                                                                      //
        return _this.transport.sendCandidate({                                                                        // 417
          to: id,                                                                                                     // 306
          candidate: {                                                                                                // 307
            candidate: e.candidate.candidate,                                                                         // 308
            sdpMLineIndex: e.candidate.sdpMLineIndex,                                                                 // 309
            sdpMid: e.candidate.sdpMid                                                                                // 310
          }                                                                                                           // 308
        });                                                                                                           // 306
      };                                                                                                              // 301
    }(this));                                                                                                         // 301
    peerConnection.addEventListener('addstream', function (_this) {                                                   // 312
      return function (e) {                                                                                           // 428
        return _this.updateRemoteItems();                                                                             // 429
      };                                                                                                              // 312
    }(this));                                                                                                         // 312
    peerConnection.addEventListener('removestream', function (_this) {                                                // 315
      return function (e) {                                                                                           // 433
        return _this.updateRemoteItems();                                                                             // 434
      };                                                                                                              // 315
    }(this));                                                                                                         // 315
    peerConnection.addEventListener('iceconnectionstatechange', function (_this) {                                    // 318
      return function (e) {                                                                                           // 438
        var ref;                                                                                                      // 319
                                                                                                                      //
        if (((ref = peerConnection.iceConnectionState) === 'disconnected' || ref === 'closed') && peerConnection === _this.peerConnections[id]) {
          _this.stopPeerConnection(id);                                                                               // 320
                                                                                                                      //
          Meteor.setTimeout(function () {                                                                             // 321
            if (Object.keys(_this.peerConnections).length === 0) {                                                    // 322
              return _this.stop();                                                                                    // 444
            }                                                                                                         // 445
          }, 3000);                                                                                                   // 321
        }                                                                                                             // 447
                                                                                                                      //
        return _this.updateRemoteItems();                                                                             // 448
      };                                                                                                              // 318
    }(this));                                                                                                         // 318
    return peerConnection;                                                                                            // 328
  };                                                                                                                  // 273
                                                                                                                      //
  WebRTCClass.prototype._getUserMedia = function (media, onSuccess, onError) {                                        // 454
    var onSuccessLocal;                                                                                               // 331
                                                                                                                      //
    onSuccessLocal = function (stream) {                                                                              // 331
      var audioContext, peer, source, volume;                                                                         // 332
                                                                                                                      //
      if (typeof AudioContext !== "undefined" && AudioContext !== null && stream.getAudioTracks().length > 0) {       // 332
        audioContext = new AudioContext();                                                                            // 333
        source = audioContext.createMediaStreamSource(stream);                                                        // 334
        volume = audioContext.createGain();                                                                           // 336
        source.connect(volume);                                                                                       // 337
        peer = audioContext.createMediaStreamDestination();                                                           // 338
        volume.connect(peer);                                                                                         // 339
        volume.gain.value = 0.6;                                                                                      // 340
        stream.removeTrack(stream.getAudioTracks()[0]);                                                               // 342
        stream.addTrack(peer.stream.getAudioTracks()[0]);                                                             // 343
        stream.volume = volume;                                                                                       // 344
        this.audioContext = audioContext;                                                                             // 346
      }                                                                                                               // 470
                                                                                                                      //
      return onSuccess(stream);                                                                                       // 471
    };                                                                                                                // 331
                                                                                                                      //
    return navigator.getUserMedia(media, onSuccessLocal, onError);                                                    // 473
  };                                                                                                                  // 330
                                                                                                                      //
  WebRTCClass.prototype.getUserMedia = function (media, onSuccess, onError) {                                         // 476
    var getAudioError, getAudioSuccess, getScreen;                                                                    // 354
                                                                                                                      //
    if (onError == null) {                                                                                            // 478
      onError = this.onError;                                                                                         // 353
    }                                                                                                                 // 480
                                                                                                                      //
    if (media.desktop !== true) {                                                                                     // 354
      this._getUserMedia(media, onSuccess, onError);                                                                  // 355
                                                                                                                      //
      return;                                                                                                         // 356
    }                                                                                                                 // 484
                                                                                                                      //
    if (this.screenShareAvailable !== true) {                                                                         // 358
      console.log('Screen share is not avaliable');                                                                   // 359
      return;                                                                                                         // 360
    }                                                                                                                 // 488
                                                                                                                      //
    getScreen = function (_this) {                                                                                    // 362
      return function (audioStream) {                                                                                 // 490
        var getScreenSuccess, refresh;                                                                                // 363
                                                                                                                      //
        if (document.cookie.indexOf("rocketchatscreenshare=chrome") === -1 && window.rocketchatscreenshare == null && _this.navigator !== 'electron') {
          refresh = function () {                                                                                     // 364
            return swal({                                                                                             // 494
              type: "warning",                                                                                        // 366
              title: TAPi18n.__("Refresh_your_page_after_install_to_enable_screen_sharing")                           // 367
            });                                                                                                       // 366
          };                                                                                                          // 364
                                                                                                                      //
          swal({                                                                                                      // 369
            type: "warning",                                                                                          // 370
            title: TAPi18n.__("Screen_Share"),                                                                        // 371
            text: TAPi18n.__("You_need_install_an_extension_to_allow_screen_sharing"),                                // 372
            html: true,                                                                                               // 373
            showCancelButton: true,                                                                                   // 374
            confirmButtonText: TAPi18n.__("Install_Extension"),                                                       // 375
            cancelButtonText: TAPi18n.__("Cancel")                                                                    // 376
          }, function (isConfirm) {                                                                                   // 370
            var e, url;                                                                                               // 378
                                                                                                                      //
            if (isConfirm) {                                                                                          // 378
              if (_this.navigator === 'chrome') {                                                                     // 379
                url = 'https://chrome.google.com/webstore/detail/rocketchat-screen-share/nocfbnnmjnndkbipkabodnheejiegccf';
                                                                                                                      //
                try {                                                                                                 // 381
                  return chrome.webstore.install(url, refresh, function () {                                          // 513
                    window.open(url);                                                                                 // 383
                    return refresh();                                                                                 // 515
                  });                                                                                                 // 382
                } catch (error1) {                                                                                    // 381
                  e = error1;                                                                                         // 385
                  window.open(url);                                                                                   // 386
                  return refresh();                                                                                   // 520
                }                                                                                                     // 379
              } else if (_this.navigator === 'firefox') {                                                             // 379
                window.open('https://addons.mozilla.org/en-GB/firefox/addon/rocketchat-screen-share/');               // 389
                return refresh();                                                                                     // 524
              }                                                                                                       // 378
            }                                                                                                         // 526
          });                                                                                                         // 369
          return onError(false);                                                                                      // 392
        }                                                                                                             // 529
                                                                                                                      //
        getScreenSuccess = function (stream) {                                                                        // 394
          if (audioStream != null) {                                                                                  // 395
            stream.addTrack(audioStream.getAudioTracks()[0]);                                                         // 396
          }                                                                                                           // 533
                                                                                                                      //
          return onSuccess(stream);                                                                                   // 534
        };                                                                                                            // 394
                                                                                                                      //
        if (_this.navigator === 'firefox') {                                                                          // 399
          media = {                                                                                                   // 400
            audio: media.audio,                                                                                       // 401
            video: {                                                                                                  // 402
              mozMediaSource: 'window',                                                                               // 403
              mediaSource: 'window'                                                                                   // 404
            }                                                                                                         // 403
          };                                                                                                          // 401
          return _this._getUserMedia(media, getScreenSuccess, onError);                                               // 544
        } else {                                                                                                      // 399
          return ChromeScreenShare.getSourceId(_this.navigator, function (id) {                                       // 546
            media = {                                                                                                 // 408
              audio: false,                                                                                           // 409
              video: {                                                                                                // 410
                mandatory: {                                                                                          // 411
                  chromeMediaSource: 'desktop',                                                                       // 412
                  chromeMediaSourceId: id,                                                                            // 413
                  maxWidth: 1280,                                                                                     // 414
                  maxHeight: 720                                                                                      // 415
                }                                                                                                     // 412
              }                                                                                                       // 411
            };                                                                                                        // 409
            return _this._getUserMedia(media, getScreenSuccess, onError);                                             // 558
          });                                                                                                         // 407
        }                                                                                                             // 560
      };                                                                                                              // 362
    }(this);                                                                                                          // 362
                                                                                                                      //
    if (this.navigator === 'firefox' || media.audio == null || media.audio === false) {                               // 419
      return getScreen();                                                                                             // 564
    } else {                                                                                                          // 419
      getAudioSuccess = function (_this) {                                                                            // 422
        return function (audioStream) {                                                                               // 567
          return getScreen(audioStream);                                                                              // 568
        };                                                                                                            // 422
      }(this);                                                                                                        // 422
                                                                                                                      //
      getAudioError = function (_this) {                                                                              // 425
        return function () {                                                                                          // 572
          return getScreen();                                                                                         // 573
        };                                                                                                            // 425
      }(this);                                                                                                        // 425
                                                                                                                      //
      return this._getUserMedia({                                                                                     // 576
        audio: media.audio                                                                                            // 428
      }, getAudioSuccess, getAudioError);                                                                             // 428
    }                                                                                                                 // 579
  }; /*                                                                                                               // 353
     		@param callback {Function}                                                                                     //
      */                                                                                                              //
                                                                                                                      //
  WebRTCClass.prototype.getLocalUserMedia = function (callback) {                                                     // 587
    var onError, onSuccess;                                                                                           // 435
    this.log('getLocalUserMedia', arguments);                                                                         // 435
                                                                                                                      //
    if (this.localStream != null) {                                                                                   // 437
      return callback(null, this.localStream);                                                                        // 438
    }                                                                                                                 // 592
                                                                                                                      //
    onSuccess = function (_this) {                                                                                    // 440
      return function (stream) {                                                                                      // 594
        var id, peerConnection, ref;                                                                                  // 441
        _this.localStream = stream;                                                                                   // 441
                                                                                                                      //
        _this.localUrl.set(URL.createObjectURL(stream));                                                              // 442
                                                                                                                      //
        _this.videoEnabled.set(_this.media.video === true);                                                           // 444
                                                                                                                      //
        _this.audioEnabled.set(_this.media.audio === true);                                                           // 445
                                                                                                                      //
        ref = _this.peerConnections;                                                                                  // 447
                                                                                                                      //
        for (id in meteorBabelHelpers.sanitizeForInObject(ref)) {                                                     // 447
          peerConnection = ref[id];                                                                                   // 602
          peerConnection.addStream(stream);                                                                           // 448
        }                                                                                                             // 447
                                                                                                                      //
        return callback(null, _this.localStream);                                                                     // 605
      };                                                                                                              // 440
    }(this);                                                                                                          // 440
                                                                                                                      //
    onError = function (_this) {                                                                                      // 452
      return function (error) {                                                                                       // 609
        callback(false);                                                                                              // 453
        return _this.onError(error);                                                                                  // 611
      };                                                                                                              // 452
    }(this);                                                                                                          // 452
                                                                                                                      //
    return this.getUserMedia(this.media, onSuccess, onError);                                                         // 614
  }; /*                                                                                                               // 434
     		@param id {String}                                                                                             //
      */                                                                                                              //
                                                                                                                      //
  WebRTCClass.prototype.stopPeerConnection = function (id) {                                                          // 622
    var peerConnection;                                                                                               // 463
    peerConnection = this.peerConnections[id];                                                                        // 463
                                                                                                                      //
    if (peerConnection == null) {                                                                                     // 464
      return;                                                                                                         // 464
    }                                                                                                                 // 627
                                                                                                                      //
    delete this.peerConnections[id];                                                                                  // 466
    peerConnection.close();                                                                                           // 467
    return this.updateRemoteItems();                                                                                  // 630
  };                                                                                                                  // 462
                                                                                                                      //
  WebRTCClass.prototype.stopAllPeerConnections = function () {                                                        // 633
    var id, peerConnection, ref, ref1;                                                                                // 472
    ref = this.peerConnections;                                                                                       // 472
                                                                                                                      //
    for (id in meteorBabelHelpers.sanitizeForInObject(ref)) {                                                         // 472
      peerConnection = ref[id];                                                                                       // 637
      this.stopPeerConnection(id);                                                                                    // 473
    }                                                                                                                 // 472
                                                                                                                      //
    return (ref1 = window.audioContext) != null ? ref1.close() : void 0;                                              // 640
  };                                                                                                                  // 471
                                                                                                                      //
  WebRTCClass.prototype.setAudioEnabled = function (enabled) {                                                        // 643
    if (enabled == null) {                                                                                            // 644
      enabled = true;                                                                                                 // 476
    }                                                                                                                 // 646
                                                                                                                      //
    if (this.localStream != null) {                                                                                   // 477
      if (enabled === true && this.media.audio !== true) {                                                            // 478
        delete this.localStream;                                                                                      // 479
        this.media.audio = true;                                                                                      // 480
        return this.getLocalUserMedia(function (_this) {                                                              // 651
          return function () {                                                                                        // 652
            _this.stopAllPeerConnections();                                                                           // 482
                                                                                                                      //
            return _this.joinCall();                                                                                  // 654
          };                                                                                                          // 481
        }(this));                                                                                                     // 481
      } else {                                                                                                        // 478
        this.localStream.getAudioTracks().forEach(function (audio) {                                                  // 485
          return audio.enabled = enabled;                                                                             // 659
        });                                                                                                           // 485
        return this.audioEnabled.set(enabled);                                                                        // 661
      }                                                                                                               // 477
    }                                                                                                                 // 663
  };                                                                                                                  // 476
                                                                                                                      //
  WebRTCClass.prototype.disableAudio = function () {                                                                  // 666
    return this.setAudioEnabled(false);                                                                               // 667
  };                                                                                                                  // 488
                                                                                                                      //
  WebRTCClass.prototype.enableAudio = function () {                                                                   // 670
    return this.setAudioEnabled(true);                                                                                // 671
  };                                                                                                                  // 491
                                                                                                                      //
  WebRTCClass.prototype.setVideoEnabled = function (enabled) {                                                        // 674
    if (enabled == null) {                                                                                            // 675
      enabled = true;                                                                                                 // 494
    }                                                                                                                 // 677
                                                                                                                      //
    if (this.localStream != null) {                                                                                   // 495
      if (enabled === true && this.media.video !== true) {                                                            // 496
        delete this.localStream;                                                                                      // 497
        this.media.video = true;                                                                                      // 498
        return this.getLocalUserMedia(function (_this) {                                                              // 682
          return function () {                                                                                        // 683
            _this.stopAllPeerConnections();                                                                           // 500
                                                                                                                      //
            return _this.joinCall();                                                                                  // 685
          };                                                                                                          // 499
        }(this));                                                                                                     // 499
      } else {                                                                                                        // 496
        this.localStream.getVideoTracks().forEach(function (video) {                                                  // 503
          return video.enabled = enabled;                                                                             // 690
        });                                                                                                           // 503
        return this.videoEnabled.set(enabled);                                                                        // 692
      }                                                                                                               // 495
    }                                                                                                                 // 694
  };                                                                                                                  // 494
                                                                                                                      //
  WebRTCClass.prototype.disableScreenShare = function () {                                                            // 697
    return this.setScreenShareEnabled(false);                                                                         // 698
  };                                                                                                                  // 506
                                                                                                                      //
  WebRTCClass.prototype.enableScreenShare = function () {                                                             // 701
    return this.setScreenShareEnabled(true);                                                                          // 702
  };                                                                                                                  // 509
                                                                                                                      //
  WebRTCClass.prototype.setScreenShareEnabled = function (enabled) {                                                  // 705
    if (enabled == null) {                                                                                            // 706
      enabled = true;                                                                                                 // 512
    }                                                                                                                 // 708
                                                                                                                      //
    if (this.localStream != null) {                                                                                   // 513
      this.media.desktop = enabled;                                                                                   // 514
      delete this.localStream;                                                                                        // 515
      return this.getLocalUserMedia(function (_this) {                                                                // 712
        return function (err) {                                                                                       // 713
          if (err != null) {                                                                                          // 517
            return;                                                                                                   // 518
          }                                                                                                           // 716
                                                                                                                      //
          _this.screenShareEnabled.set(enabled);                                                                      // 519
                                                                                                                      //
          _this.stopAllPeerConnections();                                                                             // 520
                                                                                                                      //
          return _this.joinCall();                                                                                    // 719
        };                                                                                                            // 516
      }(this));                                                                                                       // 516
    }                                                                                                                 // 722
  };                                                                                                                  // 512
                                                                                                                      //
  WebRTCClass.prototype.disableVideo = function () {                                                                  // 725
    return this.setVideoEnabled(false);                                                                               // 726
  };                                                                                                                  // 523
                                                                                                                      //
  WebRTCClass.prototype.enableVideo = function () {                                                                   // 729
    return this.setVideoEnabled(true);                                                                                // 730
  };                                                                                                                  // 526
                                                                                                                      //
  WebRTCClass.prototype.stop = function () {                                                                          // 733
    this.active = false;                                                                                              // 530
    this.monitor = false;                                                                                             // 531
    this.remoteMonitoring = false;                                                                                    // 532
                                                                                                                      //
    if (this.localStream != null && typeof this.localStream !== 'undefined') {                                        // 533
      this.localStream.getTracks().forEach(function (track) {                                                         // 534
        return track.stop();                                                                                          // 739
      });                                                                                                             // 534
    }                                                                                                                 // 741
                                                                                                                      //
    this.localUrl.set(void 0);                                                                                        // 536
    delete this.localStream;                                                                                          // 537
    return this.stopAllPeerConnections();                                                                             // 744
  }; /*                                                                                                               // 529
     		@param media {Object}                                                                                          //
     			audio {Boolean}                                                                                               //
     			video {Boolean}                                                                                               //
      */                                                                                                              //
                                                                                                                      //
  WebRTCClass.prototype.startCall = function (media) {                                                                // 754
    if (media == null) {                                                                                              // 755
      media = {};                                                                                                     // 547
    }                                                                                                                 // 757
                                                                                                                      //
    this.log('startCall', arguments);                                                                                 // 548
    this.media = media;                                                                                               // 549
    return this.getLocalUserMedia(function (_this) {                                                                  // 760
      return function () {                                                                                            // 761
        _this.active = true;                                                                                          // 551
        return _this.transport.startCall({                                                                            // 763
          media: _this.media                                                                                          // 553
        });                                                                                                           // 553
      };                                                                                                              // 550
    }(this));                                                                                                         // 550
  };                                                                                                                  // 547
                                                                                                                      //
  WebRTCClass.prototype.startCallAsMonitor = function (media) {                                                       // 770
    if (media == null) {                                                                                              // 771
      media = {};                                                                                                     // 555
    }                                                                                                                 // 773
                                                                                                                      //
    this.log('startCallAsMonitor', arguments);                                                                        // 556
    this.media = media;                                                                                               // 557
    this.active = true;                                                                                               // 558
    this.monitor = true;                                                                                              // 559
    return this.transport.startCall({                                                                                 // 778
      media: this.media,                                                                                              // 561
      monitor: true                                                                                                   // 562
    });                                                                                                               // 561
  }; /*                                                                                                               // 555
     		@param data {Object}                                                                                           //
     			from {String}                                                                                                 //
     			monitor {Boolean}                                                                                             //
     			media {Object}                                                                                                //
     				audio {Boolean}                                                                                              //
     				video {Boolean}                                                                                              //
      */                                                                                                              //
                                                                                                                      //
  WebRTCClass.prototype.onRemoteCall = function (data) {                                                              // 794
    var fromUsername, icon, ref, ref1, ref2, subscription, title;                                                     // 574
                                                                                                                      //
    if (this.autoAccept === true) {                                                                                   // 574
      FlowRouter.goToRoomById(data.room);                                                                             // 575
      Meteor.defer(function (_this) {                                                                                 // 576
        return function () {                                                                                          // 799
          return _this.joinCall({                                                                                     // 800
            to: data.from,                                                                                            // 578
            monitor: data.monitor,                                                                                    // 579
            media: data.media                                                                                         // 580
          });                                                                                                         // 578
        };                                                                                                            // 576
      }(this));                                                                                                       // 576
      return;                                                                                                         // 581
    }                                                                                                                 // 808
                                                                                                                      //
    fromUsername = (ref = Meteor.users.findOne(data.from)) != null ? ref.username : void 0;                           // 583
    subscription = ChatSubscription.findOne({                                                                         // 584
      rid: data.room                                                                                                  // 584
    });                                                                                                               // 584
                                                                                                                      //
    if (data.monitor === true) {                                                                                      // 586
      icon = 'eye';                                                                                                   // 587
      title = "Monitor call from " + fromUsername;                                                                    // 588
    } else if ((subscription != null ? subscription.t : void 0) === 'd') {                                            // 586
      if ((ref1 = data.media) != null ? ref1.video : void 0) {                                                        // 590
        icon = 'videocam';                                                                                            // 591
        title = "Direct video call from " + fromUsername;                                                             // 592
      } else {                                                                                                        // 590
        icon = 'phone';                                                                                               // 594
        title = "Direct audio call from " + fromUsername;                                                             // 595
      }                                                                                                               // 589
    } else {                                                                                                          // 589
      if ((ref2 = data.media) != null ? ref2.video : void 0) {                                                        // 597
        icon = 'videocam';                                                                                            // 598
        title = "Group video call from " + subscription.name;                                                         // 599
      } else {                                                                                                        // 597
        icon = 'phone';                                                                                               // 601
        title = "Group audio call from " + subscription.name;                                                         // 602
      }                                                                                                               // 589
    }                                                                                                                 // 832
                                                                                                                      //
    return swal({                                                                                                     // 833
      title: "<i class='icon-" + icon + " alert-icon success-color'></i>" + title,                                    // 605
      text: "Do you want to accept?",                                                                                 // 606
      html: true,                                                                                                     // 607
      showCancelButton: true,                                                                                         // 608
      confirmButtonText: "Yes",                                                                                       // 609
      cancelButtonText: "No"                                                                                          // 610
    }, function (_this) {                                                                                             // 605
      return function (isConfirm) {                                                                                   // 841
        if (isConfirm) {                                                                                              // 612
          FlowRouter.goToRoomById(data.room);                                                                         // 613
          return Meteor.defer(function () {                                                                           // 844
            return _this.joinCall({                                                                                   // 845
              to: data.from,                                                                                          // 616
              monitor: data.monitor,                                                                                  // 617
              media: data.media                                                                                       // 618
            });                                                                                                       // 616
          });                                                                                                         // 614
        } else {                                                                                                      // 612
          return _this.stop();                                                                                        // 852
        }                                                                                                             // 853
      };                                                                                                              // 611
    }(this));                                                                                                         // 611
  }; /*                                                                                                               // 573
     		@param data {Object}                                                                                           //
     			to {String}                                                                                                   //
     			monitor {Boolean}                                                                                             //
     			media {Object}                                                                                                //
     				audio {Boolean}                                                                                              //
     				video {Boolean}                                                                                              //
     				desktop {Boolean}                                                                                            //
      */                                                                                                              //
                                                                                                                      //
  WebRTCClass.prototype.joinCall = function (data) {                                                                  // 869
    var ref, ref1;                                                                                                    // 633
                                                                                                                      //
    if (data == null) {                                                                                               // 871
      data = {};                                                                                                      // 632
    }                                                                                                                 // 873
                                                                                                                      //
    if (((ref = data.media) != null ? ref.audio : void 0) != null) {                                                  // 633
      this.media.audio = data.media.audio;                                                                            // 634
    }                                                                                                                 // 876
                                                                                                                      //
    if (((ref1 = data.media) != null ? ref1.video : void 0) != null) {                                                // 636
      this.media.video = data.media.video;                                                                            // 637
    }                                                                                                                 // 879
                                                                                                                      //
    data.media = this.media;                                                                                          // 639
    this.log('joinCall', arguments);                                                                                  // 641
    return this.getLocalUserMedia(function (_this) {                                                                  // 882
      return function () {                                                                                            // 883
        _this.remoteMonitoring = data.monitor;                                                                        // 643
        _this.active = true;                                                                                          // 644
        return _this.transport.joinCall(data);                                                                        // 886
      };                                                                                                              // 642
    }(this));                                                                                                         // 642
  }; /*                                                                                                               // 632
     		@param data {Object}                                                                                           //
     			from {String}                                                                                                 //
     			monitor {Boolean}                                                                                             //
     			media {Object}                                                                                                //
     				audio {Boolean}                                                                                              //
     				video {Boolean}                                                                                              //
     				desktop {Boolean}                                                                                            //
      */                                                                                                              //
                                                                                                                      //
  WebRTCClass.prototype.onRemoteJoin = function (data) {                                                              // 902
    var onOffer, peerConnection;                                                                                      // 658
                                                                                                                      //
    if (this.active !== true) {                                                                                       // 658
      return;                                                                                                         // 658
    }                                                                                                                 // 906
                                                                                                                      //
    this.log('onRemoteJoin', arguments);                                                                              // 660
    peerConnection = this.getPeerConnection(data.from);                                                               // 662
                                                                                                                      //
    if (peerConnection.signalingState !== "checking") {                                                               // 671
      this.stopPeerConnection(data.from);                                                                             // 672
      peerConnection = this.getPeerConnection(data.from);                                                             // 673
    }                                                                                                                 // 912
                                                                                                                      //
    if (peerConnection.iceConnectionState !== 'new') {                                                                // 675
      return;                                                                                                         // 676
    }                                                                                                                 // 915
                                                                                                                      //
    peerConnection.remoteMedia = data.media;                                                                          // 678
                                                                                                                      //
    if (this.localStream) {                                                                                           // 680
      peerConnection.addStream(this.localStream);                                                                     // 680
    }                                                                                                                 // 919
                                                                                                                      //
    onOffer = function (_this) {                                                                                      // 682
      return function (offer) {                                                                                       // 921
        var onLocalDescription;                                                                                       // 683
                                                                                                                      //
        onLocalDescription = function () {                                                                            // 683
          return _this.transport.sendDescription({                                                                    // 924
            to: data.from,                                                                                            // 685
            type: 'offer',                                                                                            // 686
            ts: peerConnection.createdAt,                                                                             // 687
            media: _this.media,                                                                                       // 688
            description: {                                                                                            // 689
              sdp: offer.sdp,                                                                                         // 690
              type: offer.type                                                                                        // 691
            }                                                                                                         // 690
          });                                                                                                         // 685
        };                                                                                                            // 683
                                                                                                                      //
        return peerConnection.setLocalDescription(new RTCSessionDescription(offer), onLocalDescription, _this.onError);
      };                                                                                                              // 682
    }(this);                                                                                                          // 682
                                                                                                                      //
    if (data.monitor === true) {                                                                                      // 695
      return peerConnection.createOffer(onOffer, this.onError, {                                                      // 939
        mandatory: {                                                                                                  // 697
          OfferToReceiveAudio: data.media.audio,                                                                      // 698
          OfferToReceiveVideo: data.media.video                                                                       // 699
        }                                                                                                             // 698
      });                                                                                                             // 697
    } else {                                                                                                          // 695
      return peerConnection.createOffer(onOffer, this.onError);                                                       // 946
    }                                                                                                                 // 947
  }; /*                                                                                                               // 657
     		@param data {Object}                                                                                           //
     			from {String}                                                                                                 //
     			ts {Integer}                                                                                                  //
     			description {String}                                                                                          //
      */                                                                                                              //
                                                                                                                      //
  WebRTCClass.prototype.onRemoteOffer = function (data) {                                                             // 958
    var onAnswer, peerConnection, ref;                                                                                // 711
                                                                                                                      //
    if (this.active !== true) {                                                                                       // 711
      return;                                                                                                         // 711
    }                                                                                                                 // 962
                                                                                                                      //
    this.log('onRemoteOffer', arguments);                                                                             // 713
    peerConnection = this.getPeerConnection(data.from);                                                               // 714
                                                                                                                      //
    if (((ref = peerConnection.signalingState) === "have-local-offer" || ref === "stable") && peerConnection.createdAt < data.ts) {
      this.stopPeerConnection(data.from);                                                                             // 717
      peerConnection = this.getPeerConnection(data.from);                                                             // 718
    }                                                                                                                 // 968
                                                                                                                      //
    if (peerConnection.iceConnectionState !== 'new') {                                                                // 720
      return;                                                                                                         // 721
    }                                                                                                                 // 971
                                                                                                                      //
    peerConnection.setRemoteDescription(new RTCSessionDescription(data.description));                                 // 723
                                                                                                                      //
    try {                                                                                                             // 725
      if (this.localStream) {                                                                                         // 725
        peerConnection.addStream(this.localStream);                                                                   // 725
      }                                                                                                               // 725
    } catch (error1) {}                                                                                               // 725
                                                                                                                      //
    onAnswer = function (_this) {                                                                                     // 727
      return function (answer) {                                                                                      // 979
        var onLocalDescription;                                                                                       // 728
                                                                                                                      //
        onLocalDescription = function () {                                                                            // 728
          return _this.transport.sendDescription({                                                                    // 982
            to: data.from,                                                                                            // 730
            type: 'answer',                                                                                           // 731
            ts: peerConnection.createdAt,                                                                             // 732
            description: {                                                                                            // 733
              sdp: answer.sdp,                                                                                        // 734
              type: answer.type                                                                                       // 735
            }                                                                                                         // 734
          });                                                                                                         // 730
        };                                                                                                            // 728
                                                                                                                      //
        return peerConnection.setLocalDescription(new RTCSessionDescription(answer), onLocalDescription, _this.onError);
      };                                                                                                              // 727
    }(this);                                                                                                          // 727
                                                                                                                      //
    return peerConnection.createAnswer(onAnswer, this.onError);                                                       // 995
  }; /*                                                                                                               // 710
     		@param data {Object}                                                                                           //
     			to {String}                                                                                                   //
     			from {String}                                                                                                 //
     			candidate {RTCIceCandidate JSON encoded}                                                                      //
      */                                                                                                              //
                                                                                                                      //
  WebRTCClass.prototype.onRemoteCandidate = function (data) {                                                         // 1006
    var peerConnection, ref;                                                                                          // 749
                                                                                                                      //
    if (this.active !== true) {                                                                                       // 749
      return;                                                                                                         // 749
    }                                                                                                                 // 1010
                                                                                                                      //
    if (data.to !== this.selfId) {                                                                                    // 750
      return;                                                                                                         // 750
    }                                                                                                                 // 1013
                                                                                                                      //
    this.log('onRemoteCandidate', arguments);                                                                         // 752
    peerConnection = this.getPeerConnection(data.from);                                                               // 753
                                                                                                                      //
    if ((ref = peerConnection.iceConnectionState) !== "closed" && ref !== "failed" && ref !== "disconnected" && ref !== "completed") {
      return peerConnection.addIceCandidate(new RTCIceCandidate(data.candidate));                                     // 1017
    }                                                                                                                 // 1018
  }; /*                                                                                                               // 748
     		@param data {Object}                                                                                           //
     			to {String}                                                                                                   //
     			from {String}                                                                                                 //
     			type {String} [offer, answer]                                                                                 //
     			description {RTCSessionDescription JSON encoded}                                                              //
     			ts {Integer}                                                                                                  //
     			media {Object}                                                                                                //
     				audio {Boolean}                                                                                              //
     				video {Boolean}                                                                                              //
     				desktop {Boolean}                                                                                            //
      */                                                                                                              //
                                                                                                                      //
  WebRTCClass.prototype.onRemoteDescription = function (data) {                                                       // 1035
    var peerConnection;                                                                                               // 772
                                                                                                                      //
    if (this.active !== true) {                                                                                       // 772
      return;                                                                                                         // 772
    }                                                                                                                 // 1039
                                                                                                                      //
    if (data.to !== this.selfId) {                                                                                    // 773
      return;                                                                                                         // 773
    }                                                                                                                 // 1042
                                                                                                                      //
    this.log('onRemoteDescription', arguments);                                                                       // 775
    peerConnection = this.getPeerConnection(data.from);                                                               // 776
                                                                                                                      //
    if (data.type === 'offer') {                                                                                      // 778
      peerConnection.remoteMedia = data.media;                                                                        // 779
      return this.onRemoteOffer({                                                                                     // 1047
        from: data.from,                                                                                              // 781
        ts: data.ts,                                                                                                  // 782
        description: data.description                                                                                 // 783
      });                                                                                                             // 781
    } else {                                                                                                          // 778
      return peerConnection.setRemoteDescription(new RTCSessionDescription(data.description));                        // 1053
    }                                                                                                                 // 1054
  };                                                                                                                  // 771
                                                                                                                      //
  return WebRTCClass;                                                                                                 // 1057
}();                                                                                                                  // 1059
                                                                                                                      //
WebRTC = new (function () {                                                                                           // 788
  function _Class() {                                                                                                 // 789
    this.instancesByRoomId = {};                                                                                      // 790
  }                                                                                                                   // 789
                                                                                                                      //
  _Class.prototype.getInstanceByRoomId = function (roomId) {                                                          // 1066
    var enabled, subscription;                                                                                        // 793
    subscription = ChatSubscription.findOne({                                                                         // 793
      rid: roomId                                                                                                     // 793
    });                                                                                                               // 793
                                                                                                                      //
    if (!subscription) {                                                                                              // 794
      return;                                                                                                         // 795
    }                                                                                                                 // 1073
                                                                                                                      //
    enabled = false;                                                                                                  // 797
                                                                                                                      //
    switch (subscription.t) {                                                                                         // 798
      case 'd':                                                                                                       // 798
        enabled = RocketChat.settings.get('WebRTC_Enable_Direct');                                                    // 800
        break;                                                                                                        // 799
                                                                                                                      //
      case 'p':                                                                                                       // 798
        enabled = RocketChat.settings.get('WebRTC_Enable_Private');                                                   // 802
        break;                                                                                                        // 801
                                                                                                                      //
      case 'c':                                                                                                       // 798
        enabled = RocketChat.settings.get('WebRTC_Enable_Channel');                                                   // 804
    }                                                                                                                 // 798
                                                                                                                      //
    if (enabled === false) {                                                                                          // 806
      return;                                                                                                         // 807
    }                                                                                                                 // 1087
                                                                                                                      //
    if (this.instancesByRoomId[roomId] == null) {                                                                     // 809
      this.instancesByRoomId[roomId] = new WebRTCClass(Meteor.userId(), roomId);                                      // 810
    }                                                                                                                 // 1090
                                                                                                                      //
    return this.instancesByRoomId[roomId];                                                                            // 812
  };                                                                                                                  // 792
                                                                                                                      //
  return _Class;                                                                                                      // 1094
}())();                                                                                                               // 1096
Meteor.startup(function () {                                                                                          // 815
  return Tracker.autorun(function () {                                                                                // 1099
    if (Meteor.userId()) {                                                                                            // 817
      return RocketChat.Notifications.onUser('webrtc', function (_this) {                                             // 1101
        return function (type, data) {                                                                                // 1102
          var webrtc;                                                                                                 // 819
                                                                                                                      //
          if (data.room == null) {                                                                                    // 819
            return;                                                                                                   // 819
          }                                                                                                           // 1106
                                                                                                                      //
          webrtc = WebRTC.getInstanceByRoomId(data.room);                                                             // 821
          return webrtc.transport.onUserStream(type, data);                                                           // 1108
        };                                                                                                            // 818
      }(this));                                                                                                       // 818
    }                                                                                                                 // 1111
  });                                                                                                                 // 816
});                                                                                                                   // 815
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"screenShare.coffee.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_webrtc/screenShare.coffee.js                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.ChromeScreenShare = {                                                                                            // 1
  screenCallback: void 0,                                                                                             // 2
  getSourceId: function (navigator, callback) {                                                                       // 4
    if (callback == null) {                                                                                           // 5
      throw '"callback" parameter is mandatory.';                                                                     // 5
    }                                                                                                                 // 6
                                                                                                                      //
    ChromeScreenShare.screenCallback = callback;                                                                      // 7
                                                                                                                      //
    if (navigator === 'electron') {                                                                                   // 9
      return fireGlobalEvent('get-sourceId', '*');                                                                    // 9
    } else {                                                                                                          // 9
      return window.postMessage('get-sourceId', '*');                                                                 // 11
    }                                                                                                                 // 12
  }                                                                                                                   // 2
};                                                                                                                    // 2
window.addEventListener('message', function (e) {                                                                     // 14
  if (e.origin !== window.location.origin) {                                                                          // 15
    return;                                                                                                           // 16
  }                                                                                                                   // 19
                                                                                                                      //
  if (e.data === 'PermissionDeniedError') {                                                                           // 19
    if (ChromeScreenShare.screenCallback != null) {                                                                   // 20
      return ChromeScreenShare.screenCallback('PermissionDeniedError');                                               // 21
    } else {                                                                                                          // 20
      throw new Error('PermissionDeniedError');                                                                       // 23
    }                                                                                                                 // 19
  }                                                                                                                   // 26
                                                                                                                      //
  if (e.data.sourceId != null) {                                                                                      // 26
    return typeof ChromeScreenShare.screenCallback === "function" ? ChromeScreenShare.screenCallback(e.data.sourceId) : void 0;
  }                                                                                                                   // 29
});                                                                                                                   // 14
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".coffee"
  ]
});
require("./node_modules/meteor/rocketchat:webrtc/adapter.js");
require("./node_modules/meteor/rocketchat:webrtc/WebRTCClass.coffee.js");
require("./node_modules/meteor/rocketchat:webrtc/screenShare.coffee.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['rocketchat:webrtc'] = {}, {
  WebRTC: WebRTC
});

})();
