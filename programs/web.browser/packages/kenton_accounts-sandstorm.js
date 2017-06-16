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
var Random = Package.random.Random;
var HTTP = Package.http.HTTP;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var ReactiveVar = Package['reactive-var'].ReactiveVar;

/* Package-scope variables */
var headers, SandstormAccounts;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                    //
// packages/kenton_accounts-sandstorm/client.js                                                       //
//                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                      //
// Copyright (c) 2014 Sandstorm Development Group, Inc. and contributors                              // 1
// Licensed under the MIT License:                                                                    // 2
//                                                                                                    // 3
// Permission is hereby granted, free of charge, to any person obtaining a copy                       // 4
// of this software and associated documentation files (the "Software"), to deal                      // 5
// in the Software without restriction, including without limitation the rights                       // 6
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell                          // 7
// copies of the Software, and to permit persons to whom the Software is                              // 8
// furnished to do so, subject to the following conditions:                                           // 9
//                                                                                                    // 10
// The above copyright notice and this permission notice shall be included in                         // 11
// all copies or substantial portions of the Software.                                                // 12
//                                                                                                    // 13
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR                         // 14
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,                           // 15
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE                        // 16
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER                             // 17
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,                      // 18
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN                          // 19
// THE SOFTWARE.                                                                                      // 20
                                                                                                      // 21
function loginWithSandstorm(connection, apiHost, apiToken) {                                          // 22
  // Log in the connection using Sandstorm authentication.                                            // 23
  //                                                                                                  // 24
  // After calling this, connection.sandstormUser() will reactively return an object containing       // 25
  // Sansdstorm user info, including permissions as authenticated by the server. Even if the user     // 26
  // is anonymous, this information is returned. `sandstormUser()` returns `null` up until the        // 27
  // point where login succeeds.                                                                      // 28
                                                                                                      // 29
  // How this works:                                                                                  // 30
  // 1. We create a cryptographically random token, which we're going to send to the server twice.    // 31
  // 2. We make a method call to log in with this token. The server initially has no idea who         // 32
  //    is calling and will block waiting for info. (The method is marked "wait" on the client side   // 33
  //    so that further method calls are blocked until login completes.)                              // 34
  // 3. We also send an XHR with the same token. When the server receives the XHR, it harvests the    // 35
  //    Sandstorm headers, looks for the corresponding login method call, marks its connection as     // 36
  //    logged in, and then lets it return.                                                           // 37
  //                                                                                                  // 38
  // We don't actually use Accounts.callLoginMethod() because we don't need or want the               // 39
  // "resume token" logic. On a disconnect, we need to re-authenticate, because the user's            // 40
  // permissions may have changed (indeed, this may be the reason for the disconnect).                // 41
                                                                                                      // 42
  // If the connection doesn't already have a sandstormUser() method, add it now.                     // 43
  if (!connection._sandstormUser) {                                                                   // 44
    connection._sandstormUser = new ReactiveVar(null);                                                // 45
    connection.sandstormUser = connection._sandstormUser.get.bind(connection._sandstormUser);         // 46
  }                                                                                                   // 47
                                                                                                      // 48
  // Generate a random token which we'll send both over an XHR and over DDP at the same time.         // 49
  var token = Random.secret();                                                                        // 50
                                                                                                      // 51
  var waiting = true;          // We'll keep retrying XHRs until the method returns.                  // 52
  var reconnected = false;                                                                            // 53
                                                                                                      // 54
  var onResultReceived = function (error, result) {                                                   // 55
    waiting = false;                                                                                  // 56
                                                                                                      // 57
    if (error) {                                                                                      // 58
      // ignore for now; loggedInAndDataReadyCallback() will get the error too                        // 59
    } else {                                                                                          // 60
      connection.onReconnect = function () {                                                          // 61
        reconnected = true;                                                                           // 62
        loginWithSandstorm(connection, apiHost, apiToken);                                            // 63
      };                                                                                              // 64
    }                                                                                                 // 65
  };                                                                                                  // 66
                                                                                                      // 67
  var loggedInAndDataReadyCallback = function (error, result) {                                       // 68
    if (reconnected) {                                                                                // 69
      // Oh, we're already on a future connection attempt. Don't mess with anything.                  // 70
      return;                                                                                         // 71
    }                                                                                                 // 72
                                                                                                      // 73
    if (error) {                                                                                      // 74
      console.error("loginWithSandstorm failed:", error);                                             // 75
    } else {                                                                                          // 76
      connection._sandstormUser.set(result.sandstorm);                                                // 77
      connection.setUserId(result.userId);                                                            // 78
    }                                                                                                 // 79
  };                                                                                                  // 80
                                                                                                      // 81
  Meteor.apply("loginWithSandstorm", [token],                                                         // 82
      {wait: true, onResultReceived: onResultReceived},                                               // 83
      loggedInAndDataReadyCallback);                                                                  // 84
                                                                                                      // 85
  var sendXhr = function () {                                                                         // 86
    if (!waiting) return;  // Method call finished.                                                   // 87
                                                                                                      // 88
    headers = {"Content-Type": "application/x-sandstorm-login-token"};                                // 89
                                                                                                      // 90
    var testInfo = localStorage.sandstormTestUserInfo;                                                // 91
    if (testInfo) {                                                                                   // 92
      testInfo = JSON.parse(testInfo);                                                                // 93
      if (testInfo.id) {                                                                              // 94
        headers["X-Sandstorm-User-Id"] = testInfo.id;                                                 // 95
      }                                                                                               // 96
      if (testInfo.name) {                                                                            // 97
        headers["X-Sandstorm-Username"] = encodeURI(testInfo.name);                                   // 98
      }                                                                                               // 99
      if (testInfo.picture) {                                                                         // 100
        headers["X-Sandstorm-User-Picture"] = testInfo.picture;                                       // 101
      }                                                                                               // 102
      if (testInfo.permissions) {                                                                     // 103
        headers["X-Sandstorm-Permissions"] = testInfo.permissions.join(",");                          // 104
      }                                                                                               // 105
      if (testInfo.preferredHandle) {                                                                 // 106
        headers["X-Sandstorm-Preferred-Handle"] = testInfo.preferredHandle;                           // 107
      }                                                                                               // 108
      if (testInfo.pronouns) {                                                                        // 109
        headers["X-Sandstorm-User-Pronouns"] = testInfo.pronouns;                                     // 110
      }                                                                                               // 111
    }                                                                                                 // 112
                                                                                                      // 113
    var postUrl = "/.sandstorm-login";                                                                // 114
    // Sandstorm mobile apps need to point at a different host and use an Authorization token.        // 115
    if (apiHost) {                                                                                    // 116
      postUrl = apiHost + postUrl;                                                                    // 117
      headers.Authorization = "Bearer " + apiToken;                                                   // 118
    }                                                                                                 // 119
                                                                                                      // 120
    // Send the token in an HTTP POST request which on the server side will allow us to receive the   // 121
    // Sandstorm headers.                                                                             // 122
    HTTP.post(postUrl,                                                                                // 123
        {content: token, headers: headers},                                                           // 124
        function (error, result) {                                                                    // 125
      if (error) {                                                                                    // 126
        console.error("couldn't get /.sandstorm-login:", error);                                      // 127
                                                                                                      // 128
        if (waiting) {                                                                                // 129
          // Try again in a second.                                                                   // 130
          Meteor.setTimeout(sendXhr, 1000);                                                           // 131
        }                                                                                             // 132
      }                                                                                               // 133
    });                                                                                               // 134
  };                                                                                                  // 135
                                                                                                      // 136
  // Wait until the connection is up before we start trying to send XHRs.                             // 137
  var stopImmediately = false;  // Unfortunately, Tracker.autorun() runs the first time inline.       // 138
  var handle = Tracker.autorun(function () {                                                          // 139
    if (!waiting) {                                                                                   // 140
      if (handle) {                                                                                   // 141
        handle.stop();                                                                                // 142
      } else {                                                                                        // 143
        stopImmediately = true;                                                                       // 144
      }                                                                                               // 145
      return;                                                                                         // 146
    } else if (connection.status().connected) {                                                       // 147
      if (handle) {                                                                                   // 148
        handle.stop();                                                                                // 149
      } else {                                                                                        // 150
        stopImmediately = true;                                                                       // 151
      }                                                                                               // 152
                                                                                                      // 153
      // Wait 10ms before our first attempt to send the rendezvous XHR because if it arrives          // 154
      // before the method call it will be rejected.                                                  // 155
      Meteor.setTimeout(sendXhr, 10);                                                                 // 156
    }                                                                                                 // 157
  });                                                                                                 // 158
  if (stopImmediately) handle.stop();                                                                 // 159
}                                                                                                     // 160
                                                                                                      // 161
if (__meteor_runtime_config__.SANDSTORM) {                                                            // 162
  // Auto-login the main Meteor connection.                                                           // 163
  loginWithSandstorm(Meteor.connection, __meteor_runtime_config__.SANDSTORM_API_HOST,                 // 164
    __meteor_runtime_config__.SANDSTORM_API_TOKEN);                                                   // 165
                                                                                                      // 166
  if (Package["accounts-base"]) {                                                                     // 167
    // Make Meteor.loggingIn() work by calling a private method of accounts-base. If this breaks then
    // maybe we should just overwrite Meteor.loggingIn() instead.                                     // 169
    Tracker.autorun(function () {                                                                     // 170
      Package["accounts-base"].Accounts._setLoggingIn(!Meteor.connection.sandstormUser());            // 171
    });                                                                                               // 172
  }                                                                                                   // 173
                                                                                                      // 174
  Meteor.sandstormUser = function () {                                                                // 175
    return Meteor.connection.sandstormUser();                                                         // 176
  };                                                                                                  // 177
                                                                                                      // 178
  SandstormAccounts = {                                                                               // 179
    setTestUserInfo: function (info) {                                                                // 180
      localStorage.sandstormTestUserInfo = JSON.stringify(info);                                      // 181
      loginWithSandstorm(Meteor.connection, __meteor_runtime_config__.SANDSTORM_API_HOST,             // 182
         __meteor_runtime_config__.SANDSTORM_API_TOKEN);                                              // 183
    }                                                                                                 // 184
  };                                                                                                  // 185
}                                                                                                     // 186
                                                                                                      // 187
////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['kenton:accounts-sandstorm'] = {}, {
  SandstormAccounts: SandstormAccounts
});

})();
