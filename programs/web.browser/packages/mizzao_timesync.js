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
var check = Package.check.check;
var Match = Package.check.Match;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var HTTP = Package.http.HTTP;

/* Package-scope variables */
var TimeSync, SyncInternals;

(function(){

///////////////////////////////////////////////////////////////////////////////////
//                                                                               //
// packages/mizzao_timesync/timesync-client.js                                   //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////
                                                                                 //
/* eslint-disable */                                                             // 1
//IE8 doesn't have Date.now()                                                    // 2
Date.now = Date.now || function() { return +new Date; };                         // 3
                                                                                 // 4
TimeSync = {                                                                     // 5
  loggingEnabled: true                                                           // 6
};                                                                               // 7
                                                                                 // 8
function log(/* arguments */) {                                                  // 9
  if (TimeSync.loggingEnabled) {                                                 // 10
    Meteor._debug.apply(this, arguments);                                        // 11
  }                                                                              // 12
}                                                                                // 13
                                                                                 // 14
var defaultInterval = 1000;                                                      // 15
                                                                                 // 16
// Internal values, exported for testing                                         // 17
SyncInternals = {                                                                // 18
  offset: undefined,                                                             // 19
  roundTripTime: undefined,                                                      // 20
  offsetDep: new Deps.Dependency(),                                              // 21
  timeTick: {},                                                                  // 22
                                                                                 // 23
  timeCheck: function (lastTime, currentTime, interval, tolerance) {             // 24
    if (Math.abs(currentTime - lastTime - interval) < tolerance) {               // 25
      // Everything is A-OK                                                      // 26
      return true;                                                               // 27
    }                                                                            // 28
    // We're no longer in sync.                                                  // 29
    return false;                                                                // 30
  }                                                                              // 31
};                                                                               // 32
                                                                                 // 33
SyncInternals.timeTick[defaultInterval] = new Deps.Dependency();                 // 34
                                                                                 // 35
var maxAttempts = 5;                                                             // 36
var attempts = 0;                                                                // 37
                                                                                 // 38
/*                                                                               // 39
  This is an approximation of                                                    // 40
  http://en.wikipedia.org/wiki/Network_Time_Protocol                             // 41
                                                                                 // 42
  If this turns out to be more accurate under the connect handlers,              // 43
  we should try taking multiple measurements.                                    // 44
 */                                                                              // 45
                                                                                 // 46
// Only use Meteor.absoluteUrl for Cordova; see                                  // 47
// https://github.com/meteor/meteor/issues/4696                                  // 48
// https://github.com/mizzao/meteor-timesync/issues/30                           // 49
var syncUrl = "/_timesync";                                                      // 50
if (__meteor_runtime_config__.ROOT_URL_PATH_PREFIX) {                            // 51
	syncUrl = __meteor_runtime_config__.ROOT_URL_PATH_PREFIX + syncUrl;             // 52
}                                                                                // 53
                                                                                 // 54
if (Meteor.isCordova) {                                                          // 55
  syncUrl = Meteor.absoluteUrl("_timesync");                                     // 56
}                                                                                // 57
                                                                                 // 58
var updateOffset = function() {                                                  // 59
  var t0 = Date.now();                                                           // 60
                                                                                 // 61
  HTTP.get(syncUrl, function(err, response) {                                    // 62
    var t3 = Date.now(); // Grab this now                                        // 63
    if (err) {                                                                   // 64
      //  We'll still use our last computed offset if is defined                 // 65
      log("Error syncing to server time: ", err);                                // 66
      if (++attempts <= maxAttempts)                                             // 67
        Meteor.setTimeout(TimeSync.resync, 1000);                                // 68
      else                                                                       // 69
        log("Max number of time sync attempts reached. Giving up.");             // 70
      return;                                                                    // 71
    }                                                                            // 72
                                                                                 // 73
    attempts = 0; // It worked                                                   // 74
                                                                                 // 75
    var ts = parseInt(response.content);                                         // 76
    SyncInternals.offset = Math.round(((ts - t0) + (ts - t3)) / 2);              // 77
    SyncInternals.roundTripTime = t3 - t0; // - (ts - ts) which is 0             // 78
    SyncInternals.offsetDep.changed();                                           // 79
  });                                                                            // 80
};                                                                               // 81
                                                                                 // 82
// Reactive variable for server time that updates every second.                  // 83
TimeSync.serverTime = function(clientTime, interval) {                           // 84
  check(interval, Match.Optional(Match.Integer));                                // 85
  // If we don't know the offset, we can't provide the server time.              // 86
  if ( !TimeSync.isSynced() ) return undefined;                                  // 87
  // If a client time is provided, we don't need to depend on the tick.          // 88
  if ( !clientTime ) getTickDependency(interval || defaultInterval).depend();    // 89
                                                                                 // 90
  // SyncInternals.offsetDep.depend(); implicit as we call isSynced()            // 91
  // Convert Date argument to epoch as necessary                                 // 92
  return (+clientTime || Date.now()) + SyncInternals.offset;                     // 93
};                                                                               // 94
                                                                                 // 95
// Reactive variable for the difference between server and client time.          // 96
TimeSync.serverOffset = function() {                                             // 97
  SyncInternals.offsetDep.depend();                                              // 98
  return SyncInternals.offset;                                                   // 99
};                                                                               // 100
                                                                                 // 101
TimeSync.roundTripTime = function() {                                            // 102
  SyncInternals.offsetDep.depend();                                              // 103
  return SyncInternals.roundTripTime;                                            // 104
};                                                                               // 105
                                                                                 // 106
TimeSync.isSynced = function() {                                                 // 107
  SyncInternals.offsetDep.depend();                                              // 108
  return SyncInternals.offset !== undefined;                                     // 109
};                                                                               // 110
                                                                                 // 111
var resyncIntervalId = null;                                                     // 112
                                                                                 // 113
TimeSync.resync = function() {                                                   // 114
  if (resyncIntervalId !== null) Meteor.clearInterval(resyncIntervalId);         // 115
  updateOffset();                                                                // 116
  resyncIntervalId = Meteor.setInterval(updateOffset, 600000);                   // 117
};                                                                               // 118
                                                                                 // 119
// Run this as soon as we load, even before Meteor.startup()                     // 120
// Run again whenever we reconnect after losing connection                       // 121
var wasConnected = false;                                                        // 122
                                                                                 // 123
Deps.autorun(function() {                                                        // 124
  var connected = Meteor.status().connected;                                     // 125
  if ( connected && !wasConnected ) TimeSync.resync();                           // 126
  wasConnected = connected;                                                      // 127
});                                                                              // 128
                                                                                 // 129
// Resync if unexpected change by more than a few seconds. This needs to be      // 130
// somewhat lenient, or a CPU-intensive operation can trigger a re-sync even     // 131
// when the offset is still accurate. In any case, we're not going to be able to
// catch very small system-initiated NTP adjustments with this, anyway.          // 133
var tickCheckTolerance = 5000;                                                   // 134
                                                                                 // 135
var lastClientTime = Date.now();                                                 // 136
                                                                                 // 137
// Set up a new interval for any amount of reactivity.                           // 138
function getTickDependency(interval) {                                           // 139
                                                                                 // 140
  if ( !SyncInternals.timeTick[interval] ) {                                     // 141
    var dep  = new Deps.Dependency();                                            // 142
                                                                                 // 143
    Meteor.setInterval(function() {                                              // 144
      dep.changed();                                                             // 145
    }, interval);                                                                // 146
                                                                                 // 147
    SyncInternals.timeTick[interval] = dep;                                      // 148
  }                                                                              // 149
                                                                                 // 150
  return SyncInternals.timeTick[interval];                                       // 151
}                                                                                // 152
                                                                                 // 153
// Set up special interval for the default tick, which also watches for re-sync  // 154
Meteor.setInterval(function() {                                                  // 155
  var currentClientTime = Date.now();                                            // 156
                                                                                 // 157
  if ( SyncInternals.timeCheck(                                                  // 158
    lastClientTime, currentClientTime, defaultInterval, tickCheckTolerance) ) {  // 159
    // No problem here, just keep ticking along                                  // 160
    SyncInternals.timeTick[defaultInterval].changed();                           // 161
  }                                                                              // 162
  else {                                                                         // 163
    // resync on major client clock changes                                      // 164
    // based on http://stackoverflow.com/a/3367542/1656818                       // 165
    log("Clock discrepancy detected. Attempting re-sync.");                      // 166
    // Refuse to compute server time.                                            // 167
    SyncInternals.offset = undefined;                                            // 168
    SyncInternals.offsetDep.changed();                                           // 169
    TimeSync.resync();                                                           // 170
  }                                                                              // 171
                                                                                 // 172
  lastClientTime = currentClientTime;                                            // 173
}, defaultInterval);                                                             // 174
                                                                                 // 175
                                                                                 // 176
///////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['mizzao:timesync'] = {}, {
  TimeSync: TimeSync,
  SyncInternals: SyncInternals
});

})();
