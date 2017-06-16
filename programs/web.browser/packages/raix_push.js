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
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var EventState = Package['raix:eventstate'].EventState;
var check = Package.check.check;
var Match = Package.check.Match;
var Mongo = Package.mongo.Mongo;
var _ = Package.underscore._;
var EJSON = Package.ejson.EJSON;
var Random = Package.random.Random;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

/* Package-scope variables */
var Push, checkClientSecurity, _matchToken, initPushUpdates, _replaceToken, _removeToken;

var require = meteorInstall({"node_modules":{"meteor":{"raix:push":{"lib":{"common":{"main.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/raix_push/lib/common/main.js                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// The push object is an event emitter                                                                                // 1
Push = new EventState(); // Client-side security warnings, used to check options                                      // 2
                                                                                                                      //
checkClientSecurity = function (options) {                                                                            // 6
  // Warn if certificates or keys are added here on client. We dont allow the                                         // 8
  // user to do this for security reasons.                                                                            // 9
  if (options.apn && options.apn.certData) {                                                                          // 10
    throw new Error('Push.init: Dont add your APN certificate in client code!');                                      // 11
  }                                                                                                                   // 12
                                                                                                                      //
  if (options.apn && options.apn.keyData) {                                                                           // 14
    throw new Error('Push.init: Dont add your APN key in client code!');                                              // 15
  }                                                                                                                   // 16
                                                                                                                      //
  if (options.apn && options.apn.passphrase) {                                                                        // 18
    throw new Error('Push.init: Dont add your APN passphrase in client code!');                                       // 19
  }                                                                                                                   // 20
                                                                                                                      //
  if (options.gcm && options.gcm.apiKey) {                                                                            // 22
    throw new Error('Push.init: Dont add your GCM api key in client code!');                                          // 23
  }                                                                                                                   // 24
}; // DEPRECATED                                                                                                      // 25
                                                                                                                      //
                                                                                                                      //
Push.init = function () {                                                                                             // 28
  console.warn('Push.init have been deprecated in favor of "config.push.json" please migrate');                       // 29
};                                                                                                                    // 30
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"notifications.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/raix_push/lib/common/notifications.js                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// This is the match pattern for tokens                                                                               // 1
_matchToken = Match.OneOf({                                                                                           // 2
  apn: String                                                                                                         // 2
}, {                                                                                                                  // 2
  gcm: String                                                                                                         // 2
}); // Notifications collection                                                                                       // 2
                                                                                                                      //
Push.notifications = new Mongo.Collection('_raix_push_notifications'); // This is a general function to validate that the data added to notifications
// is in the correct format. If not this function will throw errors                                                   // 8
                                                                                                                      //
var _validateDocument = function (notification) {                                                                     // 9
  // Check the general notification                                                                                   // 11
  check(notification, {                                                                                               // 12
    from: String,                                                                                                     // 13
    title: String,                                                                                                    // 14
    text: String,                                                                                                     // 15
    sent: Match.Optional(Boolean),                                                                                    // 16
    sending: Match.Optional(Match.Integer),                                                                           // 17
    badge: Match.Optional(Match.Integer),                                                                             // 18
    sound: Match.Optional(String),                                                                                    // 19
    notId: Match.Optional(Match.Integer),                                                                             // 20
    contentAvailable: Match.Optional(Match.Integer),                                                                  // 21
    apn: Match.Optional({                                                                                             // 22
      from: Match.Optional(String),                                                                                   // 23
      title: Match.Optional(String),                                                                                  // 24
      text: Match.Optional(String),                                                                                   // 25
      badge: Match.Optional(Match.Integer),                                                                           // 26
      sound: Match.Optional(String),                                                                                  // 27
      notId: Match.Optional(Match.Integer)                                                                            // 28
    }),                                                                                                               // 22
    gcm: Match.Optional({                                                                                             // 30
      from: Match.Optional(String),                                                                                   // 31
      title: Match.Optional(String),                                                                                  // 32
      text: Match.Optional(String),                                                                                   // 33
      image: Match.Optional(String),                                                                                  // 34
      style: Match.Optional(String),                                                                                  // 35
      summaryText: Match.Optional(String),                                                                            // 36
      picture: Match.Optional(String),                                                                                // 37
      badge: Match.Optional(Match.Integer),                                                                           // 38
      sound: Match.Optional(String),                                                                                  // 39
      notId: Match.Optional(Match.Integer)                                                                            // 40
    }),                                                                                                               // 30
    query: Match.Optional(String),                                                                                    // 42
    token: Match.Optional(_matchToken),                                                                               // 43
    tokens: Match.Optional([_matchToken]),                                                                            // 44
    payload: Match.Optional(Object),                                                                                  // 45
    delayUntil: Match.Optional(Date),                                                                                 // 46
    createdAt: Date,                                                                                                  // 47
    createdBy: Match.OneOf(String, null)                                                                              // 48
  }); // Make sure a token selector or query have been set                                                            // 12
                                                                                                                      //
  if (!notification.token && !notification.tokens && !notification.query) {                                           // 52
    throw new Error('No token selector or query found');                                                              // 53
  } // If tokens array is set it should not be empty                                                                  // 54
                                                                                                                      //
                                                                                                                      //
  if (notification.tokens && !notification.tokens.length) {                                                           // 57
    throw new Error('No tokens in array');                                                                            // 58
  }                                                                                                                   // 59
};                                                                                                                    // 60
                                                                                                                      //
Push.send = function (options) {                                                                                      // 62
  // If on the client we set the user id - on the server we need an option                                            // 63
  // set or we default to "<SERVER>" as the creator of the notification                                               // 64
  // If current user not set see if we can set it to the logged in user                                               // 65
  // this will only run on the client if Meteor.userId is available                                                   // 66
  var currentUser = Meteor.isClient && Meteor.userId && Meteor.userId() || Meteor.isServer && (options.createdBy || '<SERVER>') || null; // Rig the notification object
                                                                                                                      //
  var notification = _.extend({                                                                                       // 71
    createdAt: new Date(),                                                                                            // 72
    createdBy: currentUser                                                                                            // 73
  }, _.pick(options, 'from', 'title', 'text')); // Add extra                                                          // 71
                                                                                                                      //
                                                                                                                      //
  _.extend(notification, _.pick(options, 'payload', 'badge', 'sound', 'notId', 'delayUntil'));                        // 77
                                                                                                                      //
  if (Match.test(options.apn, Object)) {                                                                              // 79
    notification.apn = _.pick(options.apn, 'from', 'title', 'text', 'badge', 'sound', 'notId');                       // 80
  }                                                                                                                   // 81
                                                                                                                      //
  if (Match.test(options.gcm, Object)) {                                                                              // 83
    notification.gcm = _.pick(options.gcm, 'image', 'style', 'summaryText', 'picture', 'from', 'title', 'text', 'badge', 'sound', 'notId');
  } // Set one token selector, this can be token, array of tokens or query                                            // 85
                                                                                                                      //
                                                                                                                      //
  if (options.query) {                                                                                                // 88
    // Set query to the json string version fixing #43 and #39                                                        // 89
    notification.query = JSON.stringify(options.query);                                                               // 90
  } else if (options.token) {                                                                                         // 91
    // Set token                                                                                                      // 92
    notification.token = options.token;                                                                               // 93
  } else if (options.tokens) {                                                                                        // 94
    // Set tokens                                                                                                     // 95
    notification.tokens = options.tokens;                                                                             // 96
  } //console.log(options);                                                                                           // 97
                                                                                                                      //
                                                                                                                      //
  if (typeof options.contentAvailable !== 'undefined') {                                                              // 99
    notification.contentAvailable = options.contentAvailable;                                                         // 100
  }                                                                                                                   // 101
                                                                                                                      //
  notification.sent = false;                                                                                          // 103
  notification.sending = 0; // Validate the notification                                                              // 104
                                                                                                                      //
  _validateDocument(notification); // Try to add the notification to send, we return an id to keep track              // 107
                                                                                                                      //
                                                                                                                      //
  return Push.notifications.insert(notification);                                                                     // 110
};                                                                                                                    // 111
                                                                                                                      //
Push.allow = function (rules) {                                                                                       // 113
  if (rules.send) {                                                                                                   // 114
    Push.notifications.allow({                                                                                        // 115
      'insert': function (userId, notification) {                                                                     // 116
        // Validate the notification                                                                                  // 117
        _validateDocument(notification); // Set the user defined "send" rules                                         // 118
                                                                                                                      //
                                                                                                                      //
        return rules.send.apply(this, [userId, notification]);                                                        // 120
      }                                                                                                               // 121
    });                                                                                                               // 115
  }                                                                                                                   // 123
};                                                                                                                    // 124
                                                                                                                      //
Push.deny = function (rules) {                                                                                        // 126
  if (rules.send) {                                                                                                   // 127
    Push.notifications.deny({                                                                                         // 128
      'insert': function (userId, notification) {                                                                     // 129
        // Validate the notification                                                                                  // 130
        _validateDocument(notification); // Set the user defined "send" rules                                         // 131
                                                                                                                      //
                                                                                                                      //
        return rules.send.apply(this, [userId, notification]);                                                        // 133
      }                                                                                                               // 134
    });                                                                                                               // 128
  }                                                                                                                   // 136
};                                                                                                                    // 137
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"client":{"browser.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/raix_push/lib/client/browser.js                                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/* global chrome: false */var onNotification = function (notification) {                                              // 1
  // alert('onNotification' + JSON.stringify(notification));                                                          // 3
  // Emit alert event - this requires the app to be in forground                                                      // 5
  if (notification.message && notification.foreground) {                                                              // 6
    Push.emit('alert', notification);                                                                                 // 7
  } // Emit sound event                                                                                               // 8
                                                                                                                      //
                                                                                                                      //
  if (notification.sound) {                                                                                           // 11
    Push.emit('sound', notification);                                                                                 // 12
  } // Emit badge event                                                                                               // 13
                                                                                                                      //
                                                                                                                      //
  if (notification.badge) {                                                                                           // 16
    Push.emit('badge', notification);                                                                                 // 17
  } // If within thres                                                                                                // 18
                                                                                                                      //
                                                                                                                      //
  if (notification.open) {                                                                                            // 21
    Push.emit('startup', notification);                                                                               // 22
  } else {                                                                                                            // 23
    Push.emit('message', notification);                                                                               // 24
  }                                                                                                                   // 25
};                                                                                                                    // 26
                                                                                                                      //
Push.setBadge = function () /* count */{// XXX: Not implemented                                                       // 28
};                                                                                                                    // 30
                                                                                                                      //
var isConfigured = false;                                                                                             // 32
                                                                                                                      //
Push.Configure = function (options) {                                                                                 // 34
  var self = this;                                                                                                    // 35
  options = options || {}; // check(options, {                                                                        // 37
  //   gcm: Match.Optional(Match.ObjectIncluding({                                                                    // 40
  //     projectNumber: String                                                                                        // 41
  //   })),                                                                                                           // 42
  //   apn: Match.Optional(Match.ObjectIncluding({                                                                    // 43
  //     webServiceUrl: String,                                                                                       // 44
  //     websitePushId: String                                                                                        // 45
  //   })),                                                                                                           // 46
  // });                                                                                                              // 47
  // Block multiple calls                                                                                             // 49
                                                                                                                      //
  if (isConfigured) {                                                                                                 // 50
    throw new Error('Push.Configure should not be called more than once!');                                           // 51
  }                                                                                                                   // 52
                                                                                                                      //
  isConfigured = true; // Add debug info                                                                              // 54
                                                                                                                      //
  if (Push.debug) {                                                                                                   // 57
    console.log('Push.Configure', options);                                                                           // 58
  } // Client-side security warnings                                                                                  // 59
                                                                                                                      //
                                                                                                                      //
  checkClientSecurity(options); // Start token updates                                                                // 62
                                                                                                                      //
  initPushUpdates(options.appName); // Add support for the raix:iframe push solution Deprecate this at some           // 65
  // point mid aug 2015                                                                                               // 68
                                                                                                                      //
  if (options.iframe) {                                                                                               // 69
    var coldstart = true;                                                                                             // 71
    var startupTime = new Date();                                                                                     // 72
    var startupThreshold = 1000; // ms                                                                                // 73
                                                                                                                      //
    var _atStartup = function () {                                                                                    // 75
      // If startup time is less than startupThreshold ago then lets say this is                                      // 76
      // at startup.                                                                                                  // 77
      return new Date() - startupTime < startupThreshold;                                                             // 78
    };                                                                                                                // 79
                                                                                                                      //
    var _parsePayload = function (value) {                                                                            // 81
      // Android actually parses payload into an object - this is not the case with                                   // 82
      // iOS (here is it just a string)                                                                               // 83
      if (value !== '' + value) {                                                                                     // 84
        value = JSON.stringify(value);                                                                                // 85
      } // Run the string through ejson                                                                               // 86
                                                                                                                      //
                                                                                                                      //
      try {                                                                                                           // 89
        return EJSON.parse(value);                                                                                    // 90
      } catch (err) {                                                                                                 // 91
        return {                                                                                                      // 92
          error: err                                                                                                  // 92
        };                                                                                                            // 92
      }                                                                                                               // 93
    }; // Rig iframe event listeners                                                                                  // 94
                                                                                                                      //
                                                                                                                      //
    options.iframe.addEventListener('deviceready', function () {                                                      // 97
      // Maintain properties                                                                                          // 99
      // At initial startup set startup time                                                                          // 101
      startupTime = new Date(); // Update flag if app coldstart                                                       // 102
                                                                                                                      //
      options.iframe.addEventListener("pause", function () {                                                          // 105
        coldstart = false;                                                                                            // 106
      }, false);                                                                                                      // 107
      options.iframe.addEventListener('resume', function () {                                                         // 109
        // Reset startup time at resume                                                                               // 110
        startupTime = new Date();                                                                                     // 111
      }); // EO Maintain properties                                                                                   // 112
                                                                                                                      //
      options.iframe.addEventListener('pushLaunch', function (e) {                                                    // 116
        if (e.event === 'message') {                                                                                  // 118
          // Android event                                                                                            // 119
          var sound = e.soundname || e.payload.sound; // Only prefix sound if actual text found                       // 121
                                                                                                                      //
          if (sound && sound.length) {                                                                                // 124
            sound = '/android_asset/www/' + sound;                                                                    // 125
          } // XXX: Investigate if we need more defaults                                                              // 126
                                                                                                                      //
                                                                                                                      //
          var unifiedMessage = {                                                                                      // 129
            message: e.payload.message || e.msg || '',                                                                // 130
            sound: sound,                                                                                             // 131
            badge: e.payload.msgcnt,                                                                                  // 132
            // Coldstart on android is a bit inconsistent - its only set when the                                     // 133
            // notification opens the app                                                                             // 134
            coldstart: e.coldstart === Boolean(e.coldstart) ? e.coldstart : coldstart,                                // 135
            background: !e.foreground,                                                                                // 136
            foreground: !!e.foreground,                                                                               // 137
            // open: _atStartup(),  // This is the iOS implementation                                                 // 138
            open: e.coldstart === Boolean(e.coldstart),                                                               // 139
            // If set true / false its an open event                                                                  // 139
            type: 'gcm.cordova'                                                                                       // 140
          }; // If payload.ejson this is an object - we hand it over to parsePayload,                                 // 129
          // parsePayload will do the convertion for us                                                               // 144
                                                                                                                      //
          if (e.payload.ejson) {                                                                                      // 145
            unifiedMessage.payload = _parsePayload(e.payload.ejson);                                                  // 146
          } // Trigger notification                                                                                   // 147
                                                                                                                      //
                                                                                                                      //
          onNotification(unifiedMessage);                                                                             // 150
        } else {                                                                                                      // 152
          // iOS event                                                                                                // 153
          var sound = e.sound; // jshint ignore: line                                                                 // 154
          // Only prefix sound if actual text found                                                                   // 156
                                                                                                                      //
          if (sound && sound.length) {                                                                                // 157
            sound = '' + sound;                                                                                       // 158
          } // XXX: Investigate if we need more defaults                                                              // 159
                                                                                                                      //
                                                                                                                      //
          var unifiedMessage = {                                                                                      // 162
            // jshint ignore: line                                                                                    // 162
            message: e.alert,                                                                                         // 163
            sound: sound,                                                                                             // 164
            badge: e.badge,                                                                                           // 165
            coldstart: coldstart,                                                                                     // 166
            background: !e.foreground,                                                                                // 167
            foreground: !!e.foreground,                                                                               // 168
            open: _atStartup(),                                                                                       // 169
            type: 'apn.cordova'                                                                                       // 170
          }; // E.ejson should be a string - we send it directly to payload                                           // 162
                                                                                                                      //
          if (e.ejson) {                                                                                              // 174
            unifiedMessage.payload = _parsePayload(e.ejson);                                                          // 175
          } // Trigger notification                                                                                   // 176
                                                                                                                      //
                                                                                                                      //
          onNotification(unifiedMessage);                                                                             // 179
        }                                                                                                             // 181
      });                                                                                                             // 183
      options.iframe.addEventListener('pushSuccess', function (evt) {                                                 // 186
        // Reformat into new event                                                                                    // 187
        self.emit('register', evt.success);                                                                           // 188
      });                                                                                                             // 189
      options.iframe.addEventListener('pushToken', function (evt) {                                                   // 191
        if (evt.androidToken) {                                                                                       // 192
          // Format the android token                                                                                 // 193
          Push.emitState('token', {                                                                                   // 194
            gcm: evt.androidToken                                                                                     // 194
          });                                                                                                         // 194
        } else if (evt.iosToken) {                                                                                    // 195
          // Format the ios token                                                                                     // 196
          Push.emitState('token', {                                                                                   // 197
            apn: evt.iosToken                                                                                         // 197
          });                                                                                                         // 197
        }                                                                                                             // 198
      });                                                                                                             // 199
      options.iframe.addEventListener('pushError', function (evt) {                                                   // 201
        Push.emit('error', {                                                                                          // 202
          type: 'cordova.browser',                                                                                    // 202
          error: evt.error || evt                                                                                     // 202
        });                                                                                                           // 202
      });                                                                                                             // 203
    });                                                                                                               // 205
  } // EO options iframe                                                                                              // 206
                                                                                                                      //
                                                                                                                      //
  if (typeof chrome !== 'undefined' && chrome.gcm) {                                                                  // 208
    // chrome.gcm api is supported!                                                                                   // 209
    // https://developer.chrome.com/extensions/gcm                                                                    // 210
    // Set max message size                                                                                           // 212
    // chrome.gcm.MAX_MESSAGE_SIZE = 4096;                                                                            // 213
    if (options.gcm.projectNumber) {                                                                                  // 215
      chrome.gcm.register(options.gcm.projectNumber, function (token) {                                               // 216
        if (token) {                                                                                                  // 217
          self.emitState('token', {                                                                                   // 218
            gcm: token                                                                                                // 218
          });                                                                                                         // 218
        } else {                                                                                                      // 219
          // Error                                                                                                    // 220
          self.emit('error', {                                                                                        // 221
            type: 'gcm.browser',                                                                                      // 221
            error: 'Access denied'                                                                                    // 221
          });                                                                                                         // 221
        }                                                                                                             // 222
      });                                                                                                             // 223
    }                                                                                                                 // 224
  } else if ('safari' in window && 'pushNotification' in window.safari) {                                             // 226
    // https://developer.apple.com/library/mac/documentation/NetworkingInternet/Conceptual/NotificationProgrammingGuideForWebsites/PushNotifications/PushNotifications.html#//apple_ref/doc/uid/TP40013225-CH3-SW1
    if (options.apn) {                                                                                                // 229
      Meteor.startup(function () {                                                                                    // 231
        // Ensure that the user can receive Safari Push Notifications.                                                // 232
        var permissionData = window.safari.pushNotification.permission(options.apn.websitePushId);                    // 233
        checkRemotePermission(permissionData);                                                                        // 234
      });                                                                                                             // 235
                                                                                                                      //
      var checkRemotePermission = function (permissionData) {                                                         // 237
        if (permissionData.permission === 'default') {                                                                // 238
          // This is a new web service URL and its validity is unknown.                                               // 239
          window.safari.pushNotification.requestPermission(options.apn.webServiceUrl, // The web service URL.         // 240
          options.apn.websitePushId, // The Website Push ID.                                                          // 242
          {}, // Data that you choose to send to your server to help you identify the user.                           // 243
          checkRemotePermission // The callback function.                                                             // 244
          );                                                                                                          // 240
        } else if (permissionData.permission === 'denied') {                                                          // 246
          // alert('denied');                                                                                         // 248
          // The user said no.                                                                                        // 249
          self.emit('error', {                                                                                        // 250
            type: 'apn.browser',                                                                                      // 250
            error: 'Access denied'                                                                                    // 250
          });                                                                                                         // 250
        } else if (permissionData.permission === 'granted') {                                                         // 251
          // alert('granted');                                                                                        // 253
          // The web service URL is a valid push provider, and the user said yes.                                     // 254
          // permissionData.deviceToken is now available to use.                                                      // 255
          self.emitState('token', {                                                                                   // 256
            apn: permissionData.deviceToken                                                                           // 256
          });                                                                                                         // 256
        }                                                                                                             // 257
      };                                                                                                              // 258
    }                                                                                                                 // 260
  } else if (navigator && navigator.push && navigator.push.register && navigator.mozSetMessageHandler) {              // 263
    var setupAppRegistrations = function () {                                                                         // 263
      // jshint ignore: line                                                                                          // 276
      // Issue a register() call                                                                                      // 277
      // to register to listen for a notification,                                                                    // 278
      // you simply call push.register                                                                                // 279
      // Here, we'll register a channel for "email" updates.                                                          // 280
      // Channels can be for anything the app would like to get notifications for.                                    // 281
      var requestAccess = navigator.push.register();                                                                  // 282
                                                                                                                      //
      requestAccess.onsuccess = function (e) {                                                                        // 284
        // Store the endpoint                                                                                         // 285
        pushEndpoint = e.target.result;                                                                               // 286
        self.emitState('token', {                                                                                     // 288
          SimplePush: {                                                                                               // 289
            channel: channel,                                                                                         // 290
            endPoint: pushEndpoint                                                                                    // 291
          }                                                                                                           // 289
        });                                                                                                           // 288
      };                                                                                                              // 294
    }; // Once we've registered, the AppServer can send version pings to the EndPoint.                                // 296
    // This will trigger a 'push' message to be sent to this handler.                                                 // 299
                                                                                                                      //
                                                                                                                      //
    // check navigator.mozPush should be enough?                                                                      // 264
    // https://wiki.mozilla.org/WebAPI/SimplePush                                                                     // 265
    var channel = 'push'; // Store the pushEndpoint                                                                   // 267
                                                                                                                      //
    var pushEndpoint;                                                                                                 // 270
    Meteor.startup(function () {                                                                                      // 272
      setupAppRegistrations();                                                                                        // 273
    });                                                                                                               // 274
    navigator.mozSetMessageHandler('push', function (message) {                                                       // 300
      if (message.pushEndpoint === pushEndpoint) {                                                                    // 301
        // Did we launch or were we already running?                                                                  // 302
        self.emit('startup', message);                                                                                // 303
      }                                                                                                               // 304
    }); // // to unregister, you simply call..                                                                        // 305
    // AppFramework.addEventListener('user-logout', function() {                                                      // 308
    //   navigator.push.unregister(pushEndpoint);                                                                     // 309
    // });                                                                                                            // 310
    // error recovery mechanism                                                                                       // 312
    // will be called very rarely, but application                                                                    // 313
    // should register again when it is called                                                                        // 314
                                                                                                                      //
    navigator.mozSetMessageHandler('register', function () /* e */{                                                   // 315
      setupAppRegistrations();                                                                                        // 316
    });                                                                                                               // 317
  }                                                                                                                   // 321
}; /*                                                                                                                 // 323
   TODO:                                                                                                              //
                                                                                                                      //
   add event listener api                                                                                             //
                                                                                                                      //
   */                                                                                                                 //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"client.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/raix_push/lib/client/client.js                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// Namespaced storage key                                                                                             // 1
var localStorageKey = '_raix:push_token'; // If we are using the accounts system then add the userId to appCollection
// and monitor for logout                                                                                             // 5
                                                                                                                      //
var addUserId = !!Package['accounts-base']; /*                                                                        // 6
                                              1. Check if id is already set in localstorage                           //
                                              2. If not then create an app id                                         //
                                              3. Refresh the apn/gcm push token for this app                          //
                                            */                                                                        //
                                                                                                                      //
var loadLocalstorage = function () {                                                                                  // 14
  var data = {};                                                                                                      // 15
                                                                                                                      //
  try {                                                                                                               // 17
    // Get the stored object from local storage                                                                       // 18
    data = JSON.parse(localStorage.getItem(localStorageKey));                                                         // 19
  } catch (err) {// XXX: Error using the local storage                                                                // 21
  }                                                                                                                   // 23
                                                                                                                      //
  return {                                                                                                            // 25
    // Use a new id if not set                                                                                        // 26
    id: data && data.id || Random.id(),                                                                               // 27
    // Set empty metadata object if nothing loaded                                                                    // 28
    metadata: data && data.metadata || {},                                                                            // 29
    // Set default token                                                                                              // 30
    token: null                                                                                                       // 31
  };                                                                                                                  // 25
};                                                                                                                    // 33
                                                                                                                      //
var saveLocalstorage = function (data) {                                                                              // 35
  try {                                                                                                               // 36
    // Try setting the id                                                                                             // 37
    localStorage.setItem(localStorageKey, JSON.stringify(data));                                                      // 38
  } catch (err) {// XXX: storage error                                                                                // 39
  }                                                                                                                   // 41
}; // Set stored object                                                                                               // 42
                                                                                                                      //
                                                                                                                      //
var stored = loadLocalstorage(); // Reactive id                                                                       // 45
                                                                                                                      //
var idDep = new Tracker.Dependency();                                                                                 // 47
var stateDep = new Tracker.Dependency(); // Its either set by localStorage or random                                  // 48
                                                                                                                      //
idDep.changed();                                                                                                      // 51
                                                                                                                      //
var _setEnabled = function (state) {                                                                                  // 53
  if (stored.enabled !== state) {                                                                                     // 54
    stored.enabled = state; // Save the stored object                                                                 // 55
                                                                                                                      //
    saveLocalstorage(stored);                                                                                         // 57
    stateDep.changed();                                                                                               // 58
  }                                                                                                                   // 59
};                                                                                                                    // 60
                                                                                                                      //
Push.id = function () {                                                                                               // 62
  idDep.depend();                                                                                                     // 63
  return stored.id;                                                                                                   // 64
};                                                                                                                    // 65
                                                                                                                      //
Push.enabled = function (state) {                                                                                     // 67
  if (stored) {                                                                                                       // 68
    if (typeof state === 'undefined') {                                                                               // 69
      // Act as a getter                                                                                              // 70
      stateDep.depend();                                                                                              // 71
      return stored.enabled !== false;                                                                                // 72
    } else {                                                                                                          // 73
      check(state, Boolean);                                                                                          // 74
                                                                                                                      //
      if (state !== stored.enabled && stored.id) {                                                                    // 75
        // Latency compensation                                                                                       // 76
        _setEnabled(state); // Update server                                                                          // 77
                                                                                                                      //
                                                                                                                      //
        Meteor.call('raix:push-enable', {                                                                             // 79
          id: stored.id,                                                                                              // 80
          enabled: state                                                                                              // 81
        }, function (err, found) {                                                                                    // 79
          if (err || !found) {                                                                                        // 83
            // On error or missing app item, revert                                                                   // 84
            _setEnabled(!state);                                                                                      // 85
          }                                                                                                           // 86
        });                                                                                                           // 87
      }                                                                                                               // 88
    }                                                                                                                 // 89
  }                                                                                                                   // 90
};                                                                                                                    // 91
                                                                                                                      //
Push.setUser = function () {                                                                                          // 93
  // Let the server update the userId on the id                                                                       // 94
  Meteor.call('raix:push-setuser', stored.id);                                                                        // 95
};                                                                                                                    // 96
                                                                                                                      //
Push.setMetadata = function (data) {                                                                                  // 98
  stored.metadata = data;                                                                                             // 99
  saveLocalstorage(stored); // Set the metadata on the server collection if we have a token, otherwise                // 100
  // we should only set the metadata in localstorage                                                                  // 102
                                                                                                                      //
  if (stored.token) {                                                                                                 // 103
    // Update the metadata                                                                                            // 104
    Meteor.call('raix:push-metadata', {                                                                               // 105
      id: stored.id,                                                                                                  // 106
      metadata: stored.metadata                                                                                       // 107
    });                                                                                                               // 105
  }                                                                                                                   // 109
}; // Report token to the server                                                                                      // 110
                                                                                                                      //
                                                                                                                      //
var reportTokenToServer = function (token, appName) {                                                                 // 113
  // Store the token                                                                                                  // 114
  stored.token = token; // Set the data object                                                                        // 115
                                                                                                                      //
  var data = {                                                                                                        // 118
    id: stored.id,                                                                                                    // 119
    token: token,                                                                                                     // 120
    appName: appName,                                                                                                 // 121
    userId: addUserId ? Meteor.userId() : null,                                                                       // 122
    metadata: stored.metadata                                                                                         // 123
  }; // token.gcm or token.apn                                                                                        // 118
                                                                                                                      //
  Meteor.call('raix:push-update', data, function (err, result) {                                                      // 127
    if (!err && result) {                                                                                             // 128
      // The result is the id - The server may update this if it finds a                                              // 129
      // match for an old install                                                                                     // 130
      if (stored.id !== result._id) {                                                                                 // 131
        // The server did match the push token for this device                                                        // 132
        stored.id = result._id; // Save the stored object                                                             // 133
                                                                                                                      //
        saveLocalstorage(stored); // The id has changed.                                                              // 135
                                                                                                                      //
        idDep.changed();                                                                                              // 137
      } // Make sure enabled is also updated to keep in sync                                                          // 138
                                                                                                                      //
                                                                                                                      //
      if (typeof result.enabled !== 'undefined') {                                                                    // 141
        _setEnabled(result.enabled);                                                                                  // 142
      }                                                                                                               // 143
    }                                                                                                                 // 144
  });                                                                                                                 // 145
};                                                                                                                    // 146
                                                                                                                      //
initPushUpdates = function (appName) {                                                                                // 148
  Meteor.startup(function () {                                                                                        // 149
    // Start listening for tokens                                                                                     // 150
    Push.on('token', function (token) {                                                                               // 151
      if (Push.debug) {                                                                                               // 152
        console.log('Got token:', token);                                                                             // 153
      } // The app should be ready, lets call in                                                                      // 154
                                                                                                                      //
                                                                                                                      //
      reportTokenToServer(token, appName || 'main');                                                                  // 156
    }); // Start listening for user updates if accounts package is added                                              // 157
                                                                                                                      //
    if (addUserId) {                                                                                                  // 160
      Tracker.autorun(function () {                                                                                   // 161
        // Depend on the userId                                                                                       // 162
        Meteor.userId(); // Dont run this the first time, its already done in the reportTokenToServer                 // 163
                                                                                                                      //
        if (!this.firstRun) {                                                                                         // 165
          // Update the userId                                                                                        // 166
          Push.setUser();                                                                                             // 167
        }                                                                                                             // 168
      });                                                                                                             // 169
    }                                                                                                                 // 170
  });                                                                                                                 // 171
};                                                                                                                    // 172
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/raix:push/lib/common/main.js");
require("./node_modules/meteor/raix:push/lib/common/notifications.js");
require("./node_modules/meteor/raix:push/lib/client/browser.js");
require("./node_modules/meteor/raix:push/lib/client/client.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['raix:push'] = {}, {
  Push: Push,
  _matchToken: _matchToken,
  checkClientSecurity: checkClientSecurity,
  initPushUpdates: initPushUpdates,
  _replaceToken: _replaceToken,
  _removeToken: _removeToken
});

})();
