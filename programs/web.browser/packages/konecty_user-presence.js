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
var _ = Package.underscore._;

/* Package-scope variables */
var UsersSessions, UserPresence;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// packages/konecty_user-presence/common/common.js                                                //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
/* globals UsersSessions */                                                                       // 1
/* exported UsersSessions */                                                                      // 2
                                                                                                  // 3
UsersSessions = new Meteor.Collection('usersSessions');                                           // 4
                                                                                                  // 5
////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// packages/konecty_user-presence/client/client.js                                                //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
/* globals Deps, UserPresence */                                                                  // 1
                                                                                                  // 2
var timer, status;                                                                                // 3
                                                                                                  // 4
UserPresence = {                                                                                  // 5
	awayTime: 60000, //1 minute                                                                      // 6
	awayOnWindowBlur: false,                                                                         // 7
	callbacks: [],                                                                                   // 8
                                                                                                  // 9
	/**                                                                                              // 10
	 * The callback will receive the following parameters: user, status                              // 11
	 */                                                                                              // 12
	onSetUserStatus: function(callback) {                                                            // 13
		this.callbacks.push(callback);                                                                  // 14
	},                                                                                               // 15
                                                                                                  // 16
	runCallbacks: function(user, status) {                                                           // 17
		this.callbacks.forEach(function(callback) {                                                     // 18
			callback.call(null, user, status);                                                             // 19
		});                                                                                             // 20
	},                                                                                               // 21
                                                                                                  // 22
	startTimer: function() {                                                                         // 23
		UserPresence.stopTimer();                                                                       // 24
		timer = setTimeout(UserPresence.setAway, UserPresence.awayTime);                                // 25
	},                                                                                               // 26
	stopTimer: function() {                                                                          // 27
		clearTimeout(timer);                                                                            // 28
	},                                                                                               // 29
	restartTimer: function() {                                                                       // 30
		UserPresence.startTimer();                                                                      // 31
	},                                                                                               // 32
	setAway: function() {                                                                            // 33
		if (status !== 'away') {                                                                        // 34
			status = 'away';                                                                               // 35
			Meteor.call('UserPresence:away');                                                              // 36
		}                                                                                               // 37
		UserPresence.stopTimer();                                                                       // 38
	},                                                                                               // 39
	setOnline: _.throttle(function() {                                                               // 40
		if (status !== 'online') {                                                                      // 41
			status = 'online';                                                                             // 42
			Meteor.call('UserPresence:online');                                                            // 43
		}                                                                                               // 44
		UserPresence.startTimer();                                                                      // 45
	}, 200),                                                                                         // 46
	start: function() {                                                                              // 47
		Deps.autorun(function() {                                                                       // 48
			var user = Meteor.user();                                                                      // 49
			status = user && user.statusConnection;                                                        // 50
			UserPresence.startTimer();                                                                     // 51
		});                                                                                             // 52
                                                                                                  // 53
		Meteor.methods({                                                                                // 54
			'UserPresence:setDefaultStatus': function(status) {                                            // 55
				Meteor.users.update({_id: Meteor.userId()}, {$set: {status: status, statusDefault: status}});
			},                                                                                             // 57
			'UserPresence:online': function() {                                                            // 58
				var user = Meteor.user();                                                                     // 59
				if (user && user.statusDefault === 'online') {                                                // 60
					Meteor.users.update({_id: Meteor.userId()}, {$set: {status: 'online'}});                     // 61
				}                                                                                             // 62
				UserPresence.runCallbacks(user, 'online');                                                    // 63
			},                                                                                             // 64
			'UserPresence:away': function() {                                                              // 65
				var user = Meteor.user();                                                                     // 66
				UserPresence.runCallbacks(user, 'away');                                                      // 67
			}                                                                                              // 68
		});                                                                                             // 69
                                                                                                  // 70
		document.addEventListener('mousemove', UserPresence.setOnline);                                 // 71
		document.addEventListener('mousedown', UserPresence.setOnline);                                 // 72
		document.addEventListener('touchend', UserPresence.setOnline);                                  // 73
		document.addEventListener('keydown', UserPresence.setOnline);                                   // 74
		window.addEventListener('focus', UserPresence.setOnline);                                       // 75
                                                                                                  // 76
		if (UserPresence.awayOnWindowBlur === true) {                                                   // 77
			window.addEventListener('blur', UserPresence.setAway);                                         // 78
		}                                                                                               // 79
	}                                                                                                // 80
};                                                                                                // 81
                                                                                                  // 82
////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['konecty:user-presence'] = {}, {
  UserPresence: UserPresence
});

})();
