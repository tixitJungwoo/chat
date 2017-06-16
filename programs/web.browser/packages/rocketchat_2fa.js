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
var Accounts = Package['accounts-base'].Accounts;
var Template = Package['templating-runtime'].Template;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var SHA256 = Package.sha.SHA256;
var Random = Package.random.Random;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:2fa":{"client":{"template.accountSecurity.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/rocketchat_2fa/client/template.accountSecurity.js                                                    //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("accountSecurity");                                                                         // 2
Template["accountSecurity"] = new Template("Template.accountSecurity", (function() {                             // 3
  var view = this;                                                                                               // 4
  return HTML.SECTION({                                                                                          // 5
    class: "page-container page-home page-static"                                                                // 6
  }, "\n\t\t", HTML.HEADER({                                                                                     // 7
    class: "fixed-title border-component-color"                                                                  // 8
  }, "\n\t\t\t", Spacebars.include(view.lookupTemplate("burger")), "\n\t\t\t", HTML.H2("\n\t\t\t\t", HTML.SPAN({
    class: "room-title"                                                                                          // 10
  }, Blaze.View("lookup:_", function() {                                                                         // 11
    return Spacebars.mustache(view.lookup("_"), "Security");                                                     // 12
  })), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.DIV({                                                              // 13
    class: "content"                                                                                             // 14
  }, "\n\t\t\t", HTML.DIV({                                                                                      // 15
    class: "rocket-form"                                                                                         // 16
  }, "\n\t\t\t\t", HTML.FIELDSET("\n\t\t\t\t\t", HTML.DIV({                                                      // 17
    class: "section"                                                                                             // 18
  }, "\n\t\t\t\t\t\t", HTML.H1(Blaze.View("lookup:_", function() {                                               // 19
    return Spacebars.mustache(view.lookup("_"), "Two-factor_authentication");                                    // 20
  })), "\n\t\t\t\t\t\t", HTML.DIV({                                                                              // 21
    class: "section-content border-component-color"                                                              // 22
  }, "\n\t\t\t\t\t\t\t", HTML.Raw('<div class="alert pending-background pending-color pending-border">\n\t\t\t\t\t\t\t\t<strong>\n\t\t\t\t\t\t\t\t\tWARNING: Once you enable this, you will not be able to login on the native mobile apps (Rocket.Chat+) using your password until they implement the 2FA.\n\t\t\t\t\t\t\t\t</strong>\n\t\t\t\t\t\t\t</div>'), "\n\t\t\t\t\t\t\t", Blaze.If(function() {
    return Spacebars.call(view.lookup("isEnabled"));                                                             // 24
  }, function() {                                                                                                // 25
    return [ "\n\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                 // 26
      class: "button danger disable-2fa"                                                                         // 27
    }, Blaze.View("lookup:_", function() {                                                                       // 28
      return Spacebars.mustache(view.lookup("_"), "Disable_two-factor_authentication");                          // 29
    })), "\n\t\t\t\t\t\t\t" ];                                                                                   // 30
  }, function() {                                                                                                // 31
    return [ "\n\t\t\t\t\t\t\t\t", Blaze.Unless(function() {                                                     // 32
      return Spacebars.call(view.lookup("isRegistering"));                                                       // 33
    }, function() {                                                                                              // 34
      return [ "\n\t\t\t\t\t\t\t\t\t", HTML.P(Blaze.View("lookup:_", function() {                                // 35
        return Spacebars.mustache(view.lookup("_"), "Two-factor_authentication_is_currently_disabled");          // 36
      })), "\n\n\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                               // 37
        class: "button primary enable-2fa"                                                                       // 38
      }, Blaze.View("lookup:_", function() {                                                                     // 39
        return Spacebars.mustache(view.lookup("_"), "Enable_two-factor_authentication");                         // 40
      })), "\n\t\t\t\t\t\t\t\t" ];                                                                               // 41
    }, function() {                                                                                              // 42
      return [ "\n\t\t\t\t\t\t\t\t\t", HTML.P(Blaze.View("lookup:_", function() {                                // 43
        return Spacebars.mustache(view.lookup("_"), "Scan_QR_code");                                             // 44
      })), "\n\n\t\t\t\t\t\t\t\t\t", HTML.IMG({                                                                  // 45
        src: function() {                                                                                        // 46
          return Spacebars.mustache(view.lookup("imageData"));                                                   // 47
        }                                                                                                        // 48
      }), "\n\n\t\t\t\t\t\t\t\t\t", HTML.FORM({                                                                  // 49
        class: "inline verify-code"                                                                              // 50
      }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                                                  // 51
        type: "text",                                                                                            // 52
        id: "testCode",                                                                                          // 53
        placeholder: function() {                                                                                // 54
          return Spacebars.mustache(view.lookup("_"), "Enter_authentication_code");                              // 55
        }                                                                                                        // 56
      }), "\n\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                // 57
        type: "submit",                                                                                          // 58
        class: "button primary"                                                                                  // 59
      }, Blaze.View("lookup:_", function() {                                                                     // 60
        return Spacebars.mustache(view.lookup("_"), "Verify");                                                   // 61
      })), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t" ];                                                      // 62
    }), "\n\t\t\t\t\t\t\t" ];                                                                                    // 63
  }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\n\n\t\t\t\t", Blaze.If(function() {                 // 64
    return Spacebars.call(view.lookup("isEnabled"));                                                             // 65
  }, function() {                                                                                                // 66
    return [ "\n\t\t\t\t\t", HTML.FIELDSET("\n\t\t\t\t\t\t", HTML.DIV({                                          // 67
      class: "section"                                                                                           // 68
    }, "\n\t\t\t\t\t\t\t", HTML.H1(Blaze.View("lookup:_", function() {                                           // 69
      return Spacebars.mustache(view.lookup("_"), "Backup_codes");                                               // 70
    })), "\n\t\t\t\t\t\t\t", HTML.DIV({                                                                          // 71
      class: "section-content border-component-color"                                                            // 72
    }, "\n\t\t\t\t\t\t\t\t", HTML.P(Blaze.View("lookup:codesRemaining", function() {                             // 73
      return Spacebars.mustache(view.lookup("codesRemaining"));                                                  // 74
    })), "\n\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                     // 75
      class: "button regenerate-codes"                                                                           // 76
    }, Blaze.View("lookup:_", function() {                                                                       // 77
      return Spacebars.mustache(view.lookup("_"), "Regenerate_codes");                                           // 78
    })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                // 79
  }), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                                           // 80
}));                                                                                                             // 81
                                                                                                                 // 82
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"accountSecurity.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/rocketchat_2fa/client/accountSecurity.js                                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var toastr = void 0;                                                                                             // 1
module.watch(require("toastr"), {                                                                                // 1
	"default": function (v) {                                                                                       // 1
		toastr = v;                                                                                                    // 1
	}                                                                                                               // 1
}, 0);                                                                                                           // 1
var qrcode = void 0;                                                                                             // 1
module.watch(require("yaqrcode"), {                                                                              // 1
	"default": function (v) {                                                                                       // 1
		qrcode = v;                                                                                                    // 1
	}                                                                                                               // 1
}, 1);                                                                                                           // 1
window.qrcode = qrcode;                                                                                          // 4
Template.accountSecurity.helpers({                                                                               // 6
	showImage: function () {                                                                                        // 7
		return Template.instance().showImage.get();                                                                    // 8
	},                                                                                                              // 9
	imageData: function () {                                                                                        // 10
		return Template.instance().imageData.get();                                                                    // 11
	},                                                                                                              // 12
	isEnabled: function () {                                                                                        // 13
		var user = Meteor.user();                                                                                      // 14
		return user && user.services && user.services.totp && user.services.totp.enabled;                              // 15
	},                                                                                                              // 16
	isRegistering: function () {                                                                                    // 17
		return Template.instance().state.get() === 'registering';                                                      // 18
	},                                                                                                              // 19
	codesRemaining: function () {                                                                                   // 20
		if (Template.instance().codesRemaining.get()) {                                                                // 21
			return t('You_have_n_codes_remaining', {                                                                      // 22
				number: Template.instance().codesRemaining.get()                                                             // 22
			});                                                                                                           // 22
		}                                                                                                              // 23
	}                                                                                                               // 24
});                                                                                                              // 6
Template.accountSecurity.events({                                                                                // 27
	'click .enable-2fa': function (event, instance) {                                                               // 28
		Meteor.call('2fa:enable', function (error, result) {                                                           // 29
			instance.imageData.set(qrcode(result.url, {                                                                   // 30
				size: 200                                                                                                    // 30
			}));                                                                                                          // 30
			instance.state.set('registering');                                                                            // 32
			Meteor.defer(function () {                                                                                    // 34
				instance.find('#testCode').focus();                                                                          // 35
			});                                                                                                           // 36
		});                                                                                                            // 37
	},                                                                                                              // 38
	'click .disable-2fa': function () {                                                                             // 40
		swal({                                                                                                         // 41
			title: t('Two-factor_authentication'),                                                                        // 42
			text: t('Open_your_authentication_app_and_enter_the_code'),                                                   // 43
			type: 'input',                                                                                                // 44
			inputType: 'text',                                                                                            // 45
			showCancelButton: true,                                                                                       // 46
			closeOnConfirm: true,                                                                                         // 47
			confirmButtonText: t('Verify'),                                                                               // 48
			cancelButtonText: t('Cancel')                                                                                 // 49
		}, function (code) {                                                                                           // 41
			if (code === false) {                                                                                         // 51
				return;                                                                                                      // 52
			}                                                                                                             // 53
                                                                                                                 //
			Meteor.call('2fa:disable', code, function (error, result) {                                                   // 55
				if (error) {                                                                                                 // 56
					return toastr.error(t(error.error));                                                                        // 57
				}                                                                                                            // 58
                                                                                                                 //
				if (result) {                                                                                                // 60
					toastr.success(t('Two-factor_authentication_disabled'));                                                    // 61
				} else {                                                                                                     // 62
					return toastr.error(t('Invalid_two_factor_code'));                                                          // 63
				}                                                                                                            // 64
			});                                                                                                           // 65
		});                                                                                                            // 66
	},                                                                                                              // 67
	'submit .verify-code': function (event, instance) {                                                             // 69
		event.preventDefault();                                                                                        // 70
		Meteor.call('2fa:validateTempToken', instance.find('#testCode').value, function (error, result) {              // 72
			if (result) {                                                                                                 // 73
				instance.showBackupCodes(result.codes);                                                                      // 74
				instance.find('#testCode').value = '';                                                                       // 76
				instance.state.set();                                                                                        // 77
				toastr.success(t('Two-factor_authentication_enabled'));                                                      // 78
			} else {                                                                                                      // 79
				toastr.error(t('Invalid_two_factor_code'));                                                                  // 80
			}                                                                                                             // 81
		});                                                                                                            // 82
	},                                                                                                              // 83
	'click .regenerate-codes': function (event, instance) {                                                         // 85
		swal({                                                                                                         // 86
			title: t('Two-factor_authentication'),                                                                        // 87
			text: t('Open_your_authentication_app_and_enter_the_code'),                                                   // 88
			type: 'input',                                                                                                // 89
			inputType: 'text',                                                                                            // 90
			showCancelButton: true,                                                                                       // 91
			closeOnConfirm: false,                                                                                        // 92
			confirmButtonText: t('Verify'),                                                                               // 93
			cancelButtonText: t('Cancel')                                                                                 // 94
		}, function (code) {                                                                                           // 86
			if (code === false) {                                                                                         // 96
				return;                                                                                                      // 97
			}                                                                                                             // 98
                                                                                                                 //
			Meteor.call('2fa:regenerateCodes', code, function (error, result) {                                           // 100
				if (error) {                                                                                                 // 101
					return toastr.error(t(error.error));                                                                        // 102
				}                                                                                                            // 103
                                                                                                                 //
				if (result) {                                                                                                // 105
					instance.showBackupCodes(result.codes);                                                                     // 106
				} else {                                                                                                     // 107
					return toastr.error(t('Invalid_two_factor_code'));                                                          // 108
				}                                                                                                            // 109
			});                                                                                                           // 110
		});                                                                                                            // 111
	}                                                                                                               // 112
});                                                                                                              // 27
Template.accountSecurity.onCreated(function () {                                                                 // 115
	var _this = this;                                                                                               // 115
                                                                                                                 //
	this.showImage = new ReactiveVar(false);                                                                        // 116
	this.imageData = new ReactiveVar();                                                                             // 117
	this.state = new ReactiveVar();                                                                                 // 119
	this.codesRemaining = new ReactiveVar();                                                                        // 121
                                                                                                                 //
	this.showBackupCodes = function (userCodes) {                                                                   // 123
		var backupCodes = userCodes.map(function (value, index) {                                                      // 124
			return (index + 1) % 4 === 0 && index < 11 ? value + "\n" : value + " ";                                      // 125
		}).join('');                                                                                                   // 126
		var codes = "<code class=\"text-center allow-text-selection\">" + backupCodes + "</code>";                     // 127
		swal({                                                                                                         // 128
			title: t('Backup_codes'),                                                                                     // 129
			text: "" + t('Make_sure_you_have_a_copy_of_your_codes', {                                                     // 130
				codes: codes                                                                                                 // 130
			}),                                                                                                           // 130
			html: true                                                                                                    // 131
		});                                                                                                            // 128
	};                                                                                                              // 133
                                                                                                                 //
	this.autorun(function () {                                                                                      // 135
		var user = Meteor.user();                                                                                      // 136
                                                                                                                 //
		if (user && user.services && user.services.totp && user.services.totp.enabled) {                               // 137
			Meteor.call('2fa:checkCodesRemaining', function (error, result) {                                             // 138
				if (result) {                                                                                                // 139
					_this.codesRemaining.set(result.remaining);                                                                 // 140
				}                                                                                                            // 141
			});                                                                                                           // 142
		}                                                                                                              // 143
	});                                                                                                             // 144
});                                                                                                              // 145
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"TOTPPassword.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/rocketchat_2fa/client/TOTPPassword.js                                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var toastr = void 0;                                                                                             // 1
module.watch(require("toastr"), {                                                                                // 1
	"default": function (v) {                                                                                       // 1
		toastr = v;                                                                                                    // 1
	}                                                                                                               // 1
}, 0);                                                                                                           // 1
                                                                                                                 //
function reportError(error, callback) {                                                                          // 3
	if (callback) {                                                                                                 // 4
		callback(error);                                                                                               // 5
	} else {                                                                                                        // 6
		throw error;                                                                                                   // 7
	}                                                                                                               // 8
}                                                                                                                // 9
                                                                                                                 //
Meteor.loginWithPasswordAndTOTP = function (selector, password, code, callback) {                                // 11
	if (typeof selector === 'string') {                                                                             // 12
		if (selector.indexOf('@') === -1) {                                                                            // 13
			selector = {                                                                                                  // 14
				username: selector                                                                                           // 14
			};                                                                                                            // 14
		} else {                                                                                                       // 15
			selector = {                                                                                                  // 16
				email: selector                                                                                              // 16
			};                                                                                                            // 16
		}                                                                                                              // 17
	}                                                                                                               // 18
                                                                                                                 //
	Accounts.callLoginMethod({                                                                                      // 20
		methodArguments: [{                                                                                            // 21
			totp: {                                                                                                       // 22
				login: {                                                                                                     // 23
					user: selector,                                                                                             // 24
					password: Accounts._hashPassword(password)                                                                  // 25
				},                                                                                                           // 23
				code: code                                                                                                   // 27
			}                                                                                                             // 22
		}],                                                                                                            // 21
		userCallback: function (error) {                                                                               // 30
			if (error) {                                                                                                  // 31
				reportError(error, callback);                                                                                // 32
			} else {                                                                                                      // 33
				callback && callback();                                                                                      // 34
			}                                                                                                             // 35
		}                                                                                                              // 36
	});                                                                                                             // 20
};                                                                                                               // 38
                                                                                                                 //
var loginWithPassword = Meteor.loginWithPassword;                                                                // 40
                                                                                                                 //
Meteor.loginWithPassword = function (email, password, cb) {                                                      // 42
	loginWithPassword(email, password, function (error) {                                                           // 43
		if (!error || error.error !== 'totp-required') {                                                               // 44
			return cb(error);                                                                                             // 45
		}                                                                                                              // 46
                                                                                                                 //
		swal({                                                                                                         // 48
			title: t('Two-factor_authentication'),                                                                        // 49
			text: t('Open_your_authentication_app_and_enter_the_code'),                                                   // 50
			type: 'input',                                                                                                // 51
			inputType: 'text',                                                                                            // 52
			showCancelButton: true,                                                                                       // 53
			closeOnConfirm: true,                                                                                         // 54
			confirmButtonText: t('Verify'),                                                                               // 55
			cancelButtonText: t('Cancel')                                                                                 // 56
		}, function (code) {                                                                                           // 48
			if (code === false) {                                                                                         // 58
				return cb();                                                                                                 // 59
			}                                                                                                             // 60
                                                                                                                 //
			Meteor.loginWithPasswordAndTOTP(email, password, code, function (error) {                                     // 62
				if (error && error.error === 'totp-invalid') {                                                               // 63
					toastr.error(t('Invalid_two_factor_code'));                                                                 // 64
					cb();                                                                                                       // 65
				} else {                                                                                                     // 66
					cb(error);                                                                                                  // 67
				}                                                                                                            // 68
			});                                                                                                           // 69
		});                                                                                                            // 70
	});                                                                                                             // 71
};                                                                                                               // 72
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"node_modules":{"yaqrcode":{"index.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// node_modules/meteor/rocketchat_2fa/node_modules/yaqrcode/index.js                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var qrcode = require('./qrcode.js');                                                                             // 1
                                                                                                                 // 2
var gen = function(text, options) {                                                                              // 3
    options = options || {};                                                                                     // 4
    var typeNumber = options.typeNumber || 4;                                                                    // 5
    var errorCorrectLevel = options.errorCorrectLevel || 'M';                                                    // 6
    var size = options.size || 500;                                                                              // 7
                                                                                                                 // 8
    var qr;                                                                                                      // 9
                                                                                                                 // 10
    try {                                                                                                        // 11
        qr = qrcode(typeNumber, errorCorrectLevel || 'M');                                                       // 12
        qr.addData(text);                                                                                        // 13
        qr.make();                                                                                               // 14
    } catch (e) {                                                                                                // 15
        if(typeNumber >= 40) {                                                                                   // 16
            throw new Error('Text too long to encode');                                                          // 17
        } else {                                                                                                 // 18
            return gen(text, {                                                                                   // 19
                size: size,                                                                                      // 20
                errorCorrectLevel: errorCorrectLevel,                                                            // 21
                typeNumber: typeNumber + 1                                                                       // 22
            });                                                                                                  // 23
        }                                                                                                        // 24
    }                                                                                                            // 25
                                                                                                                 // 26
    // calc cellsize and margin                                                                                  // 27
    var cellsize = parseInt(size / qr.getModuleCount());                                                         // 28
    var margin = parseInt((size - qr.getModuleCount() * cellsize) / 2);                                          // 29
                                                                                                                 // 30
    return qr.createImgTag(cellsize, margin, size);                                                              // 31
};                                                                                                               // 32
                                                                                                                 // 33
module.exports = gen;                                                                                            // 34
                                                                                                                 // 35
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"qrcode.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// node_modules/meteor/rocketchat_2fa/node_modules/yaqrcode/qrcode.js                                            //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
//---------------------------------------------------------------------                                          // 1
//                                                                                                               // 2
// QR Code Generator for JavaScript                                                                              // 3
//                                                                                                               // 4
// Copyright (c) 2009 Kazuhiko Arase                                                                             // 5
//                                                                                                               // 6
// URL: http://www.d-project.com/                                                                                // 7
//                                                                                                               // 8
// Licensed under the MIT license:                                                                               // 9
//	http://www.opensource.org/licenses/mit-license.php                                                            // 10
//                                                                                                               // 11
// The word 'QR Code' is registered trademark of                                                                 // 12
// DENSO WAVE INCORPORATED                                                                                       // 13
//	http://www.denso-wave.com/qrcode/faqpatent-e.html                                                             // 14
//                                                                                                               // 15
//---------------------------------------------------------------------                                          // 16
                                                                                                                 // 17
//---------------------------------------------------------------------                                          // 18
// qrcode                                                                                                        // 19
//---------------------------------------------------------------------                                          // 20
                                                                                                                 // 21
/**                                                                                                              // 22
 * qrcode                                                                                                        // 23
 * @param typeNumber 1 to 40                                                                                     // 24
 * @param errorCorrectLevel 'L','M','Q','H'                                                                      // 25
 */                                                                                                              // 26
var qrcode = function(typeNumber, errorCorrectLevel) {                                                           // 27
                                                                                                                 // 28
    var PAD0 = 0xEC;                                                                                             // 29
    var PAD1 = 0x11;                                                                                             // 30
                                                                                                                 // 31
    var _typeNumber = typeNumber;                                                                                // 32
    var _errorCorrectLevel = QRErrorCorrectLevel[errorCorrectLevel];                                             // 33
    var _modules = null;                                                                                         // 34
    var _moduleCount = 0;                                                                                        // 35
    var _dataCache = null;                                                                                       // 36
    var _dataList = new Array();                                                                                 // 37
                                                                                                                 // 38
    var _this = {};                                                                                              // 39
                                                                                                                 // 40
    var makeImpl = function(test, maskPattern) {                                                                 // 41
                                                                                                                 // 42
	_moduleCount = _typeNumber * 4 + 17;                                                                            // 43
	_modules = function(moduleCount) {                                                                              // 44
	    var modules = new Array(moduleCount);                                                                       // 45
	    for (var row = 0; row < moduleCount; row += 1) {                                                            // 46
		modules[row] = new Array(moduleCount);                                                                         // 47
		for (var col = 0; col < moduleCount; col += 1) {                                                               // 48
		    modules[row][col] = null;                                                                                  // 49
		}                                                                                                              // 50
	    }                                                                                                           // 51
	    return modules;                                                                                             // 52
	}(_moduleCount);                                                                                                // 53
                                                                                                                 // 54
	setupPositionProbePattern(0, 0);                                                                                // 55
	setupPositionProbePattern(_moduleCount - 7, 0);                                                                 // 56
	setupPositionProbePattern(0, _moduleCount - 7);                                                                 // 57
	setupPositionAdjustPattern();                                                                                   // 58
	setupTimingPattern();                                                                                           // 59
	setupTypeInfo(test, maskPattern);                                                                               // 60
                                                                                                                 // 61
	if (_typeNumber >= 7) {                                                                                         // 62
	    setupTypeNumber(test);                                                                                      // 63
	}                                                                                                               // 64
                                                                                                                 // 65
	if (_dataCache == null) {                                                                                       // 66
	    _dataCache = createData(_typeNumber, _errorCorrectLevel, _dataList);                                        // 67
	}                                                                                                               // 68
                                                                                                                 // 69
	mapData(_dataCache, maskPattern);                                                                               // 70
    };                                                                                                           // 71
                                                                                                                 // 72
    var setupPositionProbePattern = function(row, col) {                                                         // 73
                                                                                                                 // 74
	for (var r = -1; r <= 7; r += 1) {                                                                              // 75
                                                                                                                 // 76
	    if (row + r <= -1 || _moduleCount <= row + r) continue;                                                     // 77
                                                                                                                 // 78
	    for (var c = -1; c <= 7; c += 1) {                                                                          // 79
                                                                                                                 // 80
		if (col + c <= -1 || _moduleCount <= col + c) continue;                                                        // 81
                                                                                                                 // 82
		if ( (0 <= r && r <= 6 && (c == 0 || c == 6) )                                                                 // 83
		     || (0 <= c && c <= 6 && (r == 0 || r == 6) )                                                              // 84
		     || (2 <= r && r <= 4 && 2 <= c && c <= 4) ) {                                                             // 85
		    _modules[row + r][col + c] = true;                                                                         // 86
		} else {                                                                                                       // 87
		    _modules[row + r][col + c] = false;                                                                        // 88
		}                                                                                                              // 89
	    }                                                                                                           // 90
	}                                                                                                               // 91
    };                                                                                                           // 92
                                                                                                                 // 93
    var getBestMaskPattern = function() {                                                                        // 94
                                                                                                                 // 95
	var minLostPoint = 0;                                                                                           // 96
	var pattern = 0;                                                                                                // 97
                                                                                                                 // 98
	for (var i = 0; i < 8; i += 1) {                                                                                // 99
                                                                                                                 // 100
	    makeImpl(true, i);                                                                                          // 101
                                                                                                                 // 102
	    var lostPoint = QRUtil.getLostPoint(_this);                                                                 // 103
                                                                                                                 // 104
	    if (i == 0 || minLostPoint > lostPoint) {                                                                   // 105
		minLostPoint = lostPoint;                                                                                      // 106
		pattern = i;                                                                                                   // 107
	    }                                                                                                           // 108
	}                                                                                                               // 109
                                                                                                                 // 110
	return pattern;                                                                                                 // 111
    };                                                                                                           // 112
                                                                                                                 // 113
    var setupTimingPattern = function() {                                                                        // 114
                                                                                                                 // 115
	for (var r = 8; r < _moduleCount - 8; r += 1) {                                                                 // 116
	    if (_modules[r][6] != null) {                                                                               // 117
		continue;                                                                                                      // 118
	    }                                                                                                           // 119
	    _modules[r][6] = (r % 2 == 0);                                                                              // 120
	}                                                                                                               // 121
                                                                                                                 // 122
	for (var c = 8; c < _moduleCount - 8; c += 1) {                                                                 // 123
	    if (_modules[6][c] != null) {                                                                               // 124
		continue;                                                                                                      // 125
	    }                                                                                                           // 126
	    _modules[6][c] = (c % 2 == 0);                                                                              // 127
	}                                                                                                               // 128
    };                                                                                                           // 129
                                                                                                                 // 130
    var setupPositionAdjustPattern = function() {                                                                // 131
                                                                                                                 // 132
	var pos = QRUtil.getPatternPosition(_typeNumber);                                                               // 133
                                                                                                                 // 134
	for (var i = 0; i < pos.length; i += 1) {                                                                       // 135
                                                                                                                 // 136
	    for (var j = 0; j < pos.length; j += 1) {                                                                   // 137
                                                                                                                 // 138
		var row = pos[i];                                                                                              // 139
		var col = pos[j];                                                                                              // 140
                                                                                                                 // 141
		if (_modules[row][col] != null) {                                                                              // 142
		    continue;                                                                                                  // 143
		}                                                                                                              // 144
                                                                                                                 // 145
		for (var r = -2; r <= 2; r += 1) {                                                                             // 146
                                                                                                                 // 147
		    for (var c = -2; c <= 2; c += 1) {                                                                         // 148
                                                                                                                 // 149
			if (r == -2 || r == 2 || c == -2 || c == 2                                                                    // 150
			    || (r == 0 && c == 0) ) {                                                                                 // 151
			    _modules[row + r][col + c] = true;                                                                        // 152
			} else {                                                                                                      // 153
			    _modules[row + r][col + c] = false;                                                                       // 154
			}                                                                                                             // 155
		    }                                                                                                          // 156
		}                                                                                                              // 157
	    }                                                                                                           // 158
	}                                                                                                               // 159
    };                                                                                                           // 160
                                                                                                                 // 161
    var setupTypeNumber = function(test) {                                                                       // 162
                                                                                                                 // 163
	var bits = QRUtil.getBCHTypeNumber(_typeNumber);                                                                // 164
                                                                                                                 // 165
	for (var i = 0; i < 18; i += 1) {                                                                               // 166
	    var mod = (!test && ( (bits >> i) & 1) == 1);                                                               // 167
	    _modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3] = mod;                                            // 168
	}                                                                                                               // 169
                                                                                                                 // 170
	for (var i = 0; i < 18; i += 1) {                                                                               // 171
	    var mod = (!test && ( (bits >> i) & 1) == 1);                                                               // 172
	    _modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)] = mod;                                            // 173
	}                                                                                                               // 174
    };                                                                                                           // 175
                                                                                                                 // 176
    var setupTypeInfo = function(test, maskPattern) {                                                            // 177
                                                                                                                 // 178
	var data = (_errorCorrectLevel << 3) | maskPattern;                                                             // 179
	var bits = QRUtil.getBCHTypeInfo(data);                                                                         // 180
                                                                                                                 // 181
	// vertical                                                                                                     // 182
	for (var i = 0; i < 15; i += 1) {                                                                               // 183
                                                                                                                 // 184
	    var mod = (!test && ( (bits >> i) & 1) == 1);                                                               // 185
                                                                                                                 // 186
	    if (i < 6) {                                                                                                // 187
		_modules[i][8] = mod;                                                                                          // 188
	    } else if (i < 8) {                                                                                         // 189
		_modules[i + 1][8] = mod;                                                                                      // 190
	    } else {                                                                                                    // 191
		_modules[_moduleCount - 15 + i][8] = mod;                                                                      // 192
	    }                                                                                                           // 193
	}                                                                                                               // 194
                                                                                                                 // 195
	// horizontal                                                                                                   // 196
	for (var i = 0; i < 15; i += 1) {                                                                               // 197
                                                                                                                 // 198
	    var mod = (!test && ( (bits >> i) & 1) == 1);                                                               // 199
                                                                                                                 // 200
	    if (i < 8) {                                                                                                // 201
		_modules[8][_moduleCount - i - 1] = mod;                                                                       // 202
	    } else if (i < 9) {                                                                                         // 203
		_modules[8][15 - i - 1 + 1] = mod;                                                                             // 204
	    } else {                                                                                                    // 205
		_modules[8][15 - i - 1] = mod;                                                                                 // 206
	    }                                                                                                           // 207
	}                                                                                                               // 208
                                                                                                                 // 209
	// fixed module                                                                                                 // 210
	_modules[_moduleCount - 8][8] = (!test);                                                                        // 211
    };                                                                                                           // 212
                                                                                                                 // 213
    var mapData = function(data, maskPattern) {                                                                  // 214
                                                                                                                 // 215
	var inc = -1;                                                                                                   // 216
	var row = _moduleCount - 1;                                                                                     // 217
	var bitIndex = 7;                                                                                               // 218
	var byteIndex = 0;                                                                                              // 219
	var maskFunc = QRUtil.getMaskFunction(maskPattern);                                                             // 220
                                                                                                                 // 221
	for (var col = _moduleCount - 1; col > 0; col -= 2) {                                                           // 222
                                                                                                                 // 223
	    if (col == 6) col -= 1;                                                                                     // 224
                                                                                                                 // 225
	    while (true) {                                                                                              // 226
                                                                                                                 // 227
		for (var c = 0; c < 2; c += 1) {                                                                               // 228
                                                                                                                 // 229
		    if (_modules[row][col - c] == null) {                                                                      // 230
                                                                                                                 // 231
			var dark = false;                                                                                             // 232
                                                                                                                 // 233
			if (byteIndex < data.length) {                                                                                // 234
			    dark = ( ( (data[byteIndex] >>> bitIndex) & 1) == 1);                                                     // 235
			}                                                                                                             // 236
                                                                                                                 // 237
			var mask = maskFunc(row, col - c);                                                                            // 238
                                                                                                                 // 239
			if (mask) {                                                                                                   // 240
			    dark = !dark;                                                                                             // 241
			}                                                                                                             // 242
                                                                                                                 // 243
			_modules[row][col - c] = dark;                                                                                // 244
			bitIndex -= 1;                                                                                                // 245
                                                                                                                 // 246
			if (bitIndex == -1) {                                                                                         // 247
			    byteIndex += 1;                                                                                           // 248
			    bitIndex = 7;                                                                                             // 249
			}                                                                                                             // 250
		    }                                                                                                          // 251
		}                                                                                                              // 252
                                                                                                                 // 253
		row += inc;                                                                                                    // 254
                                                                                                                 // 255
		if (row < 0 || _moduleCount <= row) {                                                                          // 256
		    row -= inc;                                                                                                // 257
		    inc = -inc;                                                                                                // 258
		    break;                                                                                                     // 259
		}                                                                                                              // 260
	    }                                                                                                           // 261
	}                                                                                                               // 262
    };                                                                                                           // 263
                                                                                                                 // 264
    var createBytes = function(buffer, rsBlocks) {                                                               // 265
                                                                                                                 // 266
	var offset = 0;                                                                                                 // 267
                                                                                                                 // 268
	var maxDcCount = 0;                                                                                             // 269
	var maxEcCount = 0;                                                                                             // 270
                                                                                                                 // 271
	var dcdata = new Array(rsBlocks.length);                                                                        // 272
	var ecdata = new Array(rsBlocks.length);                                                                        // 273
                                                                                                                 // 274
	for (var r = 0; r < rsBlocks.length; r += 1) {                                                                  // 275
                                                                                                                 // 276
	    var dcCount = rsBlocks[r].dataCount;                                                                        // 277
	    var ecCount = rsBlocks[r].totalCount - dcCount;                                                             // 278
                                                                                                                 // 279
	    maxDcCount = Math.max(maxDcCount, dcCount);                                                                 // 280
	    maxEcCount = Math.max(maxEcCount, ecCount);                                                                 // 281
                                                                                                                 // 282
	    dcdata[r] = new Array(dcCount);                                                                             // 283
                                                                                                                 // 284
	    for (var i = 0; i < dcdata[r].length; i += 1) {                                                             // 285
		dcdata[r][i] = 0xff & buffer.getBuffer()[i + offset];                                                          // 286
	    }                                                                                                           // 287
	    offset += dcCount;                                                                                          // 288
                                                                                                                 // 289
	    var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);                                                     // 290
	    var rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);                                              // 291
                                                                                                                 // 292
	    var modPoly = rawPoly.mod(rsPoly);                                                                          // 293
	    ecdata[r] = new Array(rsPoly.getLength() - 1);                                                              // 294
	    for (var i = 0; i < ecdata[r].length; i += 1) {                                                             // 295
		var modIndex = i + modPoly.getLength() - ecdata[r].length;                                                     // 296
		ecdata[r][i] = (modIndex >= 0)? modPoly.getAt(modIndex) : 0;                                                   // 297
	    }                                                                                                           // 298
	}                                                                                                               // 299
                                                                                                                 // 300
	var totalCodeCount = 0;                                                                                         // 301
	for (var i = 0; i < rsBlocks.length; i += 1) {                                                                  // 302
	    totalCodeCount += rsBlocks[i].totalCount;                                                                   // 303
	}                                                                                                               // 304
                                                                                                                 // 305
	var data = new Array(totalCodeCount);                                                                           // 306
	var index = 0;                                                                                                  // 307
                                                                                                                 // 308
	for (var i = 0; i < maxDcCount; i += 1) {                                                                       // 309
	    for (var r = 0; r < rsBlocks.length; r += 1) {                                                              // 310
		if (i < dcdata[r].length) {                                                                                    // 311
		    data[index] = dcdata[r][i];                                                                                // 312
		    index += 1;                                                                                                // 313
		}                                                                                                              // 314
	    }                                                                                                           // 315
	}                                                                                                               // 316
                                                                                                                 // 317
	for (var i = 0; i < maxEcCount; i += 1) {                                                                       // 318
	    for (var r = 0; r < rsBlocks.length; r += 1) {                                                              // 319
		if (i < ecdata[r].length) {                                                                                    // 320
		    data[index] = ecdata[r][i];                                                                                // 321
		    index += 1;                                                                                                // 322
		}                                                                                                              // 323
	    }                                                                                                           // 324
	}                                                                                                               // 325
                                                                                                                 // 326
	return data;                                                                                                    // 327
    };                                                                                                           // 328
                                                                                                                 // 329
    var createData = function(typeNumber, errorCorrectLevel, dataList) {                                         // 330
                                                                                                                 // 331
	var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);                                            // 332
                                                                                                                 // 333
	var buffer = qrBitBuffer();                                                                                     // 334
                                                                                                                 // 335
	for (var i = 0; i < dataList.length; i += 1) {                                                                  // 336
	    var data = dataList[i];                                                                                     // 337
	    buffer.put(data.getMode(), 4);                                                                              // 338
	    buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );                          // 339
	    data.write(buffer);                                                                                         // 340
	}                                                                                                               // 341
                                                                                                                 // 342
	// calc num max data.                                                                                           // 343
	var totalDataCount = 0;                                                                                         // 344
	for (var i = 0; i < rsBlocks.length; i += 1) {                                                                  // 345
	    totalDataCount += rsBlocks[i].dataCount;                                                                    // 346
	}                                                                                                               // 347
                                                                                                                 // 348
	if (buffer.getLengthInBits() > totalDataCount * 8) {                                                            // 349
	    throw new Error('code length overflow. ('                                                                   // 350
			    + buffer.getLengthInBits()                                                                                // 351
			    + '>'                                                                                                     // 352
			    + totalDataCount * 8                                                                                      // 353
			    + ')');                                                                                                   // 354
	}                                                                                                               // 355
                                                                                                                 // 356
	// end code                                                                                                     // 357
	if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {                                                       // 358
	    buffer.put(0, 4);                                                                                           // 359
	}                                                                                                               // 360
                                                                                                                 // 361
	// padding                                                                                                      // 362
	while (buffer.getLengthInBits() % 8 != 0) {                                                                     // 363
	    buffer.putBit(false);                                                                                       // 364
	}                                                                                                               // 365
                                                                                                                 // 366
	// padding                                                                                                      // 367
	while (true) {                                                                                                  // 368
                                                                                                                 // 369
	    if (buffer.getLengthInBits() >= totalDataCount * 8) {                                                       // 370
		break;                                                                                                         // 371
	    }                                                                                                           // 372
	    buffer.put(PAD0, 8);                                                                                        // 373
                                                                                                                 // 374
	    if (buffer.getLengthInBits() >= totalDataCount * 8) {                                                       // 375
		break;                                                                                                         // 376
	    }                                                                                                           // 377
	    buffer.put(PAD1, 8);                                                                                        // 378
	}                                                                                                               // 379
                                                                                                                 // 380
	return createBytes(buffer, rsBlocks);                                                                           // 381
    };                                                                                                           // 382
                                                                                                                 // 383
    _this.addData = function(data) {                                                                             // 384
	var newData = qr8BitByte(data);                                                                                 // 385
	_dataList.push(newData);                                                                                        // 386
	_dataCache = null;                                                                                              // 387
    };                                                                                                           // 388
                                                                                                                 // 389
    _this.isDark = function(row, col) {                                                                          // 390
	if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {                                         // 391
	    throw new Error(row + ',' + col);                                                                           // 392
	}                                                                                                               // 393
	return _modules[row][col];                                                                                      // 394
    };                                                                                                           // 395
                                                                                                                 // 396
    _this.getModuleCount = function() {                                                                          // 397
	return _moduleCount;                                                                                            // 398
    };                                                                                                           // 399
                                                                                                                 // 400
    _this.make = function() {                                                                                    // 401
	makeImpl(false, getBestMaskPattern() );                                                                         // 402
    };                                                                                                           // 403
                                                                                                                 // 404
    _this.createTableTag = function(cellSize, margin) {                                                          // 405
                                                                                                                 // 406
	cellSize = cellSize || 2;                                                                                       // 407
	margin = (typeof margin == 'undefined')? cellSize * 4 : margin;                                                 // 408
                                                                                                                 // 409
	var qrHtml = '';                                                                                                // 410
                                                                                                                 // 411
	qrHtml += '<table style="';                                                                                     // 412
	qrHtml += ' border-width: 0px; border-style: none;';                                                            // 413
	qrHtml += ' border-collapse: collapse;';                                                                        // 414
	qrHtml += ' padding: 0px; margin: ' + margin + 'px;';                                                           // 415
	qrHtml += '">';                                                                                                 // 416
	qrHtml += '<tbody>';                                                                                            // 417
                                                                                                                 // 418
	for (var r = 0; r < _this.getModuleCount(); r += 1) {                                                           // 419
                                                                                                                 // 420
	    qrHtml += '<tr>';                                                                                           // 421
                                                                                                                 // 422
	    for (var c = 0; c < _this.getModuleCount(); c += 1) {                                                       // 423
		qrHtml += '<td style="';                                                                                       // 424
		qrHtml += ' border-width: 0px; border-style: none;';                                                           // 425
		qrHtml += ' border-collapse: collapse;';                                                                       // 426
		qrHtml += ' padding: 0px; margin: 0px;';                                                                       // 427
		qrHtml += ' width: ' + cellSize + 'px;';                                                                       // 428
		qrHtml += ' height: ' + cellSize + 'px;';                                                                      // 429
		qrHtml += ' background-color: ';                                                                               // 430
		qrHtml += _this.isDark(r, c)? '#000000' : '#ffffff';                                                           // 431
		qrHtml += ';';                                                                                                 // 432
		qrHtml += '"/>';                                                                                               // 433
	    }                                                                                                           // 434
                                                                                                                 // 435
	    qrHtml += '</tr>';                                                                                          // 436
	}                                                                                                               // 437
                                                                                                                 // 438
	qrHtml += '</tbody>';                                                                                           // 439
	qrHtml += '</table>';                                                                                           // 440
                                                                                                                 // 441
	return qrHtml;                                                                                                  // 442
    };                                                                                                           // 443
                                                                                                                 // 444
    _this.createImgTag = function(cellSize, margin, size) {                                                      // 445
                                                                                                                 // 446
	cellSize = cellSize || 2;                                                                                       // 447
	margin = (typeof margin == 'undefined')? cellSize * 4 : margin;                                                 // 448
                                                                                                                 // 449
	var min = margin;                                                                                               // 450
	var max = _this.getModuleCount() * cellSize + margin;                                                           // 451
                                                                                                                 // 452
	return createImgTag(size, size, function(x, y) {                                                                // 453
	    if (min <= x && x < max && min <= y && y < max) {                                                           // 454
		var c = Math.floor( (x - min) / cellSize);                                                                     // 455
		var r = Math.floor( (y - min) / cellSize);                                                                     // 456
		return _this.isDark(r, c)? 0 : 1;                                                                              // 457
	    } else {                                                                                                    // 458
		return 1;                                                                                                      // 459
	    }                                                                                                           // 460
	} );                                                                                                            // 461
    };                                                                                                           // 462
                                                                                                                 // 463
    return _this;                                                                                                // 464
};                                                                                                               // 465
                                                                                                                 // 466
//---------------------------------------------------------------------                                          // 467
// qrcode.stringToBytes                                                                                          // 468
//---------------------------------------------------------------------                                          // 469
                                                                                                                 // 470
qrcode.stringToBytes = function(s) {                                                                             // 471
    var bytes = new Array();                                                                                     // 472
    for (var i = 0; i < s.length; i += 1) {                                                                      // 473
	var c = s.charCodeAt(i);                                                                                        // 474
	bytes.push(c & 0xff);                                                                                           // 475
    }                                                                                                            // 476
    return bytes;                                                                                                // 477
};                                                                                                               // 478
                                                                                                                 // 479
//---------------------------------------------------------------------                                          // 480
// qrcode.createStringToBytes                                                                                    // 481
//---------------------------------------------------------------------                                          // 482
                                                                                                                 // 483
/**                                                                                                              // 484
 * @param unicodeData base64 string of byte array.                                                               // 485
 * [16bit Unicode],[16bit Bytes], ...                                                                            // 486
 * @param numChars                                                                                               // 487
 */                                                                                                              // 488
qrcode.createStringToBytes = function(unicodeData, numChars) {                                                   // 489
                                                                                                                 // 490
    // create conversion map.                                                                                    // 491
                                                                                                                 // 492
    var unicodeMap = function() {                                                                                // 493
                                                                                                                 // 494
	var bin = base64DecodeInputStream(unicodeData);                                                                 // 495
	var read = function() {                                                                                         // 496
	    var b = bin.read();                                                                                         // 497
	    if (b == -1) throw new Error();                                                                             // 498
	    return b;                                                                                                   // 499
	};                                                                                                              // 500
                                                                                                                 // 501
	var count = 0;                                                                                                  // 502
	var unicodeMap = {};                                                                                            // 503
	while (true) {                                                                                                  // 504
	    var b0 = bin.read();                                                                                        // 505
	    if (b0 == -1) break;                                                                                        // 506
	    var b1 = read();                                                                                            // 507
	    var b2 = read();                                                                                            // 508
	    var b3 = read();                                                                                            // 509
	    var k = String.fromCharCode( (b0 << 8) | b1);                                                               // 510
	    var v = (b2 << 8) | b3;                                                                                     // 511
	    unicodeMap[k] = v;                                                                                          // 512
	    count += 1;                                                                                                 // 513
	}                                                                                                               // 514
	if (count != numChars) {                                                                                        // 515
	    throw new Error(count + ' != ' + numChars);                                                                 // 516
	}                                                                                                               // 517
                                                                                                                 // 518
	return unicodeMap;                                                                                              // 519
    }();                                                                                                         // 520
                                                                                                                 // 521
    var unknownChar = '?'.charCodeAt(0);                                                                         // 522
                                                                                                                 // 523
    return function(s) {                                                                                         // 524
	var bytes = new Array();                                                                                        // 525
	for (var i = 0; i < s.length; i += 1) {                                                                         // 526
	    var c = s.charCodeAt(i);                                                                                    // 527
	    if (c < 128) {                                                                                              // 528
		bytes.push(c);                                                                                                 // 529
	    } else {                                                                                                    // 530
		var b = unicodeMap[s.charAt(i)];                                                                               // 531
		if (typeof b == 'number') {                                                                                    // 532
		    if ( (b & 0xff) == b) {                                                                                    // 533
			// 1byte                                                                                                      // 534
			bytes.push(b);                                                                                                // 535
		    } else {                                                                                                   // 536
			// 2bytes                                                                                                     // 537
			bytes.push(b >>> 8);                                                                                          // 538
			bytes.push(b & 0xff);                                                                                         // 539
		    }                                                                                                          // 540
		} else {                                                                                                       // 541
		    bytes.push(unknownChar);                                                                                   // 542
		}                                                                                                              // 543
	    }                                                                                                           // 544
	}                                                                                                               // 545
	return bytes;                                                                                                   // 546
    };                                                                                                           // 547
};                                                                                                               // 548
                                                                                                                 // 549
//---------------------------------------------------------------------                                          // 550
// QRMode                                                                                                        // 551
//---------------------------------------------------------------------                                          // 552
                                                                                                                 // 553
var QRMode = {                                                                                                   // 554
    MODE_NUMBER :		1 << 0,                                                                                       // 555
    MODE_ALPHA_NUM : 	1 << 1,                                                                                    // 556
    MODE_8BIT_BYTE : 	1 << 2,                                                                                    // 557
    MODE_KANJI :		1 << 3                                                                                         // 558
};                                                                                                               // 559
                                                                                                                 // 560
//---------------------------------------------------------------------                                          // 561
// QRErrorCorrectLevel                                                                                           // 562
//---------------------------------------------------------------------                                          // 563
                                                                                                                 // 564
var QRErrorCorrectLevel = {                                                                                      // 565
    L : 1,                                                                                                       // 566
    M : 0,                                                                                                       // 567
    Q : 3,                                                                                                       // 568
    H : 2                                                                                                        // 569
};                                                                                                               // 570
                                                                                                                 // 571
//---------------------------------------------------------------------                                          // 572
// QRMaskPattern                                                                                                 // 573
//---------------------------------------------------------------------                                          // 574
                                                                                                                 // 575
var QRMaskPattern = {                                                                                            // 576
    PATTERN000 : 0,                                                                                              // 577
    PATTERN001 : 1,                                                                                              // 578
    PATTERN010 : 2,                                                                                              // 579
    PATTERN011 : 3,                                                                                              // 580
    PATTERN100 : 4,                                                                                              // 581
    PATTERN101 : 5,                                                                                              // 582
    PATTERN110 : 6,                                                                                              // 583
    PATTERN111 : 7                                                                                               // 584
};                                                                                                               // 585
                                                                                                                 // 586
//---------------------------------------------------------------------                                          // 587
// QRUtil                                                                                                        // 588
//---------------------------------------------------------------------                                          // 589
                                                                                                                 // 590
var QRUtil = function() {                                                                                        // 591
                                                                                                                 // 592
    var PATTERN_POSITION_TABLE = [                                                                               // 593
	[],                                                                                                             // 594
	[6, 18],                                                                                                        // 595
	[6, 22],                                                                                                        // 596
	[6, 26],                                                                                                        // 597
	[6, 30],                                                                                                        // 598
	[6, 34],                                                                                                        // 599
	[6, 22, 38],                                                                                                    // 600
	[6, 24, 42],                                                                                                    // 601
	[6, 26, 46],                                                                                                    // 602
	[6, 28, 50],                                                                                                    // 603
	[6, 30, 54],                                                                                                    // 604
	[6, 32, 58],                                                                                                    // 605
	[6, 34, 62],                                                                                                    // 606
	[6, 26, 46, 66],                                                                                                // 607
	[6, 26, 48, 70],                                                                                                // 608
	[6, 26, 50, 74],                                                                                                // 609
	[6, 30, 54, 78],                                                                                                // 610
	[6, 30, 56, 82],                                                                                                // 611
	[6, 30, 58, 86],                                                                                                // 612
	[6, 34, 62, 90],                                                                                                // 613
	[6, 28, 50, 72, 94],                                                                                            // 614
	[6, 26, 50, 74, 98],                                                                                            // 615
	[6, 30, 54, 78, 102],                                                                                           // 616
	[6, 28, 54, 80, 106],                                                                                           // 617
	[6, 32, 58, 84, 110],                                                                                           // 618
	[6, 30, 58, 86, 114],                                                                                           // 619
	[6, 34, 62, 90, 118],                                                                                           // 620
	[6, 26, 50, 74, 98, 122],                                                                                       // 621
	[6, 30, 54, 78, 102, 126],                                                                                      // 622
	[6, 26, 52, 78, 104, 130],                                                                                      // 623
	[6, 30, 56, 82, 108, 134],                                                                                      // 624
	[6, 34, 60, 86, 112, 138],                                                                                      // 625
	[6, 30, 58, 86, 114, 142],                                                                                      // 626
	[6, 34, 62, 90, 118, 146],                                                                                      // 627
	[6, 30, 54, 78, 102, 126, 150],                                                                                 // 628
	[6, 24, 50, 76, 102, 128, 154],                                                                                 // 629
	[6, 28, 54, 80, 106, 132, 158],                                                                                 // 630
	[6, 32, 58, 84, 110, 136, 162],                                                                                 // 631
	[6, 26, 54, 82, 110, 138, 166],                                                                                 // 632
	[6, 30, 58, 86, 114, 142, 170]                                                                                  // 633
    ];                                                                                                           // 634
    var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);                       // 635
    var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);          // 636
    var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);                                      // 637
                                                                                                                 // 638
    var _this = {};                                                                                              // 639
                                                                                                                 // 640
    var getBCHDigit = function(data) {                                                                           // 641
	var digit = 0;                                                                                                  // 642
	while (data != 0) {                                                                                             // 643
	    digit += 1;                                                                                                 // 644
	    data >>>= 1;                                                                                                // 645
	}                                                                                                               // 646
	return digit;                                                                                                   // 647
    };                                                                                                           // 648
                                                                                                                 // 649
    _this.getBCHTypeInfo = function(data) {                                                                      // 650
	var d = data << 10;                                                                                             // 651
	while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {                                                                // 652
	    d ^= (G15 << (getBCHDigit(d) - getBCHDigit(G15) ) );                                                        // 653
	}                                                                                                               // 654
	return ( (data << 10) | d) ^ G15_MASK;                                                                          // 655
    };                                                                                                           // 656
                                                                                                                 // 657
    _this.getBCHTypeNumber = function(data) {                                                                    // 658
	var d = data << 12;                                                                                             // 659
	while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {                                                                // 660
	    d ^= (G18 << (getBCHDigit(d) - getBCHDigit(G18) ) );                                                        // 661
	}                                                                                                               // 662
	return (data << 12) | d;                                                                                        // 663
    };                                                                                                           // 664
                                                                                                                 // 665
    _this.getPatternPosition = function(typeNumber) {                                                            // 666
	return PATTERN_POSITION_TABLE[typeNumber - 1];                                                                  // 667
    };                                                                                                           // 668
                                                                                                                 // 669
    _this.getMaskFunction = function(maskPattern) {                                                              // 670
                                                                                                                 // 671
	switch (maskPattern) {                                                                                          // 672
                                                                                                                 // 673
	    case QRMaskPattern.PATTERN000 :                                                                             // 674
		return function(i, j) { return (i + j) % 2 == 0; };                                                            // 675
	    case QRMaskPattern.PATTERN001 :                                                                             // 676
		return function(i, j) { return i % 2 == 0; };                                                                  // 677
	    case QRMaskPattern.PATTERN010 :                                                                             // 678
		return function(i, j) { return j % 3 == 0; };                                                                  // 679
	    case QRMaskPattern.PATTERN011 :                                                                             // 680
		return function(i, j) { return (i + j) % 3 == 0; };                                                            // 681
	    case QRMaskPattern.PATTERN100 :                                                                             // 682
		return function(i, j) { return (Math.floor(i / 2) + Math.floor(j / 3) ) % 2 == 0; };                           // 683
	    case QRMaskPattern.PATTERN101 :                                                                             // 684
		return function(i, j) { return (i * j) % 2 + (i * j) % 3 == 0; };                                              // 685
	    case QRMaskPattern.PATTERN110 :                                                                             // 686
		return function(i, j) { return ( (i * j) % 2 + (i * j) % 3) % 2 == 0; };                                       // 687
	    case QRMaskPattern.PATTERN111 :                                                                             // 688
		return function(i, j) { return ( (i * j) % 3 + (i + j) % 2) % 2 == 0; };                                       // 689
                                                                                                                 // 690
		default :                                                                                                      // 691
		throw new Error('bad maskPattern:' + maskPattern);                                                             // 692
	}                                                                                                               // 693
    };                                                                                                           // 694
                                                                                                                 // 695
    _this.getErrorCorrectPolynomial = function(errorCorrectLength) {                                             // 696
	var a = qrPolynomial([1], 0);                                                                                   // 697
	for (var i = 0; i < errorCorrectLength; i += 1) {                                                               // 698
	    a = a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0) );                                                      // 699
	}                                                                                                               // 700
	return a;                                                                                                       // 701
    };                                                                                                           // 702
                                                                                                                 // 703
    _this.getLengthInBits = function(mode, type) {                                                               // 704
                                                                                                                 // 705
	if (1 <= type && type < 10) {                                                                                   // 706
                                                                                                                 // 707
	    // 1 - 9                                                                                                    // 708
                                                                                                                 // 709
	    switch(mode) {                                                                                              // 710
		case QRMode.MODE_NUMBER 	: return 10;                                                                          // 711
		case QRMode.MODE_ALPHA_NUM 	: return 9;                                                                        // 712
		case QRMode.MODE_8BIT_BYTE	: return 8;                                                                         // 713
		case QRMode.MODE_KANJI		: return 8;                                                                            // 714
		    default :                                                                                                  // 715
		    throw new Error('mode:' + mode);                                                                           // 716
	    }                                                                                                           // 717
                                                                                                                 // 718
	} else if (type < 27) {                                                                                         // 719
                                                                                                                 // 720
	    // 10 - 26                                                                                                  // 721
                                                                                                                 // 722
	    switch(mode) {                                                                                              // 723
		case QRMode.MODE_NUMBER 	: return 12;                                                                          // 724
		case QRMode.MODE_ALPHA_NUM 	: return 11;                                                                       // 725
		case QRMode.MODE_8BIT_BYTE	: return 16;                                                                        // 726
		case QRMode.MODE_KANJI		: return 10;                                                                           // 727
		    default :                                                                                                  // 728
		    throw new Error('mode:' + mode);                                                                           // 729
	    }                                                                                                           // 730
                                                                                                                 // 731
	} else if (type < 41) {                                                                                         // 732
                                                                                                                 // 733
	    // 27 - 40                                                                                                  // 734
                                                                                                                 // 735
	    switch(mode) {                                                                                              // 736
		case QRMode.MODE_NUMBER 	: return 14;                                                                          // 737
		case QRMode.MODE_ALPHA_NUM	: return 13;                                                                        // 738
		case QRMode.MODE_8BIT_BYTE	: return 16;                                                                        // 739
		case QRMode.MODE_KANJI		: return 12;                                                                           // 740
		    default :                                                                                                  // 741
		    throw new Error('mode:' + mode);                                                                           // 742
	    }                                                                                                           // 743
                                                                                                                 // 744
	} else {                                                                                                        // 745
	    throw new Error('type:' + type);                                                                            // 746
	}                                                                                                               // 747
    };                                                                                                           // 748
                                                                                                                 // 749
    _this.getLostPoint = function(qrcode) {                                                                      // 750
                                                                                                                 // 751
	var moduleCount = qrcode.getModuleCount();                                                                      // 752
                                                                                                                 // 753
	var lostPoint = 0;                                                                                              // 754
                                                                                                                 // 755
	// LEVEL1                                                                                                       // 756
                                                                                                                 // 757
	for (var row = 0; row < moduleCount; row += 1) {                                                                // 758
	    for (var col = 0; col < moduleCount; col += 1) {                                                            // 759
                                                                                                                 // 760
		var sameCount = 0;                                                                                             // 761
		var dark = qrcode.isDark(row, col);                                                                            // 762
                                                                                                                 // 763
		for (var r = -1; r <= 1; r += 1) {                                                                             // 764
                                                                                                                 // 765
		    if (row + r < 0 || moduleCount <= row + r) {                                                               // 766
			continue;                                                                                                     // 767
		    }                                                                                                          // 768
                                                                                                                 // 769
		    for (var c = -1; c <= 1; c += 1) {                                                                         // 770
                                                                                                                 // 771
			if (col + c < 0 || moduleCount <= col + c) {                                                                  // 772
			    continue;                                                                                                 // 773
			}                                                                                                             // 774
                                                                                                                 // 775
			if (r == 0 && c == 0) {                                                                                       // 776
			    continue;                                                                                                 // 777
			}                                                                                                             // 778
                                                                                                                 // 779
			if (dark == qrcode.isDark(row + r, col + c) ) {                                                               // 780
			    sameCount += 1;                                                                                           // 781
			}                                                                                                             // 782
		    }                                                                                                          // 783
		}                                                                                                              // 784
                                                                                                                 // 785
		if (sameCount > 5) {                                                                                           // 786
		    lostPoint += (3 + sameCount - 5);                                                                          // 787
		}                                                                                                              // 788
	    }                                                                                                           // 789
	};                                                                                                              // 790
                                                                                                                 // 791
	// LEVEL2                                                                                                       // 792
                                                                                                                 // 793
	for (var row = 0; row < moduleCount - 1; row += 1) {                                                            // 794
	    for (var col = 0; col < moduleCount - 1; col += 1) {                                                        // 795
		var count = 0;                                                                                                 // 796
		if (qrcode.isDark(row, col) ) count += 1;                                                                      // 797
		if (qrcode.isDark(row + 1, col) ) count += 1;                                                                  // 798
		if (qrcode.isDark(row, col + 1) ) count += 1;                                                                  // 799
		if (qrcode.isDark(row + 1, col + 1) ) count += 1;                                                              // 800
		if (count == 0 || count == 4) {                                                                                // 801
		    lostPoint += 3;                                                                                            // 802
		}                                                                                                              // 803
	    }                                                                                                           // 804
	}                                                                                                               // 805
                                                                                                                 // 806
	// LEVEL3                                                                                                       // 807
                                                                                                                 // 808
	for (var row = 0; row < moduleCount; row += 1) {                                                                // 809
	    for (var col = 0; col < moduleCount - 6; col += 1) {                                                        // 810
		if (qrcode.isDark(row, col)                                                                                    // 811
		    && !qrcode.isDark(row, col + 1)                                                                            // 812
		    &&  qrcode.isDark(row, col + 2)                                                                            // 813
		    &&  qrcode.isDark(row, col + 3)                                                                            // 814
		    &&  qrcode.isDark(row, col + 4)                                                                            // 815
		    && !qrcode.isDark(row, col + 5)                                                                            // 816
		    &&  qrcode.isDark(row, col + 6) ) {                                                                        // 817
		    lostPoint += 40;                                                                                           // 818
		}                                                                                                              // 819
	    }                                                                                                           // 820
	}                                                                                                               // 821
                                                                                                                 // 822
	for (var col = 0; col < moduleCount; col += 1) {                                                                // 823
	    for (var row = 0; row < moduleCount - 6; row += 1) {                                                        // 824
		if (qrcode.isDark(row, col)                                                                                    // 825
		    && !qrcode.isDark(row + 1, col)                                                                            // 826
		    &&  qrcode.isDark(row + 2, col)                                                                            // 827
		    &&  qrcode.isDark(row + 3, col)                                                                            // 828
		    &&  qrcode.isDark(row + 4, col)                                                                            // 829
		    && !qrcode.isDark(row + 5, col)                                                                            // 830
		    &&  qrcode.isDark(row + 6, col) ) {                                                                        // 831
		    lostPoint += 40;                                                                                           // 832
		}                                                                                                              // 833
	    }                                                                                                           // 834
	}                                                                                                               // 835
                                                                                                                 // 836
	// LEVEL4                                                                                                       // 837
                                                                                                                 // 838
	var darkCount = 0;                                                                                              // 839
                                                                                                                 // 840
	for (var col = 0; col < moduleCount; col += 1) {                                                                // 841
	    for (var row = 0; row < moduleCount; row += 1) {                                                            // 842
		if (qrcode.isDark(row, col) ) {                                                                                // 843
		    darkCount += 1;                                                                                            // 844
		}                                                                                                              // 845
	    }                                                                                                           // 846
	}                                                                                                               // 847
                                                                                                                 // 848
	var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;                                     // 849
	lostPoint += ratio * 10;                                                                                        // 850
                                                                                                                 // 851
	return lostPoint;                                                                                               // 852
    };                                                                                                           // 853
                                                                                                                 // 854
    return _this;                                                                                                // 855
}();                                                                                                             // 856
                                                                                                                 // 857
//---------------------------------------------------------------------                                          // 858
// QRMath                                                                                                        // 859
//---------------------------------------------------------------------                                          // 860
                                                                                                                 // 861
var QRMath = function() {                                                                                        // 862
                                                                                                                 // 863
    var EXP_TABLE = new Array(256);                                                                              // 864
    var LOG_TABLE = new Array(256);                                                                              // 865
                                                                                                                 // 866
    // initialize tables                                                                                         // 867
    for (var i = 0; i < 8; i += 1) {                                                                             // 868
	EXP_TABLE[i] = 1 << i;                                                                                          // 869
    }                                                                                                            // 870
    for (var i = 8; i < 256; i += 1) {                                                                           // 871
	EXP_TABLE[i] = EXP_TABLE[i - 4]                                                                                 // 872
	    ^ EXP_TABLE[i - 5]                                                                                          // 873
	    ^ EXP_TABLE[i - 6]                                                                                          // 874
	    ^ EXP_TABLE[i - 8];                                                                                         // 875
    }                                                                                                            // 876
    for (var i = 0; i < 255; i += 1) {                                                                           // 877
	LOG_TABLE[EXP_TABLE[i] ] = i;                                                                                   // 878
    }                                                                                                            // 879
                                                                                                                 // 880
    var _this = {};                                                                                              // 881
                                                                                                                 // 882
    _this.glog = function(n) {                                                                                   // 883
                                                                                                                 // 884
	if (n < 1) {                                                                                                    // 885
	    throw new Error('glog(' + n + ')');                                                                         // 886
	}                                                                                                               // 887
                                                                                                                 // 888
	return LOG_TABLE[n];                                                                                            // 889
    };                                                                                                           // 890
                                                                                                                 // 891
    _this.gexp = function(n) {                                                                                   // 892
                                                                                                                 // 893
	while (n < 0) {                                                                                                 // 894
	    n += 255;                                                                                                   // 895
	}                                                                                                               // 896
                                                                                                                 // 897
	while (n >= 256) {                                                                                              // 898
	    n -= 255;                                                                                                   // 899
	}                                                                                                               // 900
                                                                                                                 // 901
	return EXP_TABLE[n];                                                                                            // 902
    };                                                                                                           // 903
                                                                                                                 // 904
    return _this;                                                                                                // 905
}();                                                                                                             // 906
                                                                                                                 // 907
//---------------------------------------------------------------------                                          // 908
// qrPolynomial                                                                                                  // 909
//---------------------------------------------------------------------                                          // 910
                                                                                                                 // 911
function qrPolynomial(num, shift) {                                                                              // 912
                                                                                                                 // 913
    if (typeof num.length == 'undefined') {                                                                      // 914
	throw new Error(num.length + '/' + shift);                                                                      // 915
    }                                                                                                            // 916
                                                                                                                 // 917
    var _num = function() {                                                                                      // 918
	var offset = 0;                                                                                                 // 919
	while (offset < num.length && num[offset] == 0) {                                                               // 920
	    offset += 1;                                                                                                // 921
	}                                                                                                               // 922
	var _num = new Array(num.length - offset + shift);                                                              // 923
	for (var i = 0; i < num.length - offset; i += 1) {                                                              // 924
	    _num[i] = num[i + offset];                                                                                  // 925
	}                                                                                                               // 926
	return _num;                                                                                                    // 927
    }();                                                                                                         // 928
                                                                                                                 // 929
    var _this = {};                                                                                              // 930
                                                                                                                 // 931
    _this.getAt = function(index) {                                                                              // 932
	return _num[index];                                                                                             // 933
    };                                                                                                           // 934
                                                                                                                 // 935
    _this.getLength = function() {                                                                               // 936
	return _num.length;                                                                                             // 937
    };                                                                                                           // 938
                                                                                                                 // 939
    _this.multiply = function(e) {                                                                               // 940
                                                                                                                 // 941
	var num = new Array(_this.getLength() + e.getLength() - 1);                                                     // 942
                                                                                                                 // 943
	for (var i = 0; i < _this.getLength(); i += 1) {                                                                // 944
	    for (var j = 0; j < e.getLength(); j += 1) {                                                                // 945
		num[i + j] ^= QRMath.gexp(QRMath.glog(_this.getAt(i) ) + QRMath.glog(e.getAt(j) ) );                           // 946
	    }                                                                                                           // 947
	}                                                                                                               // 948
                                                                                                                 // 949
	return qrPolynomial(num, 0);                                                                                    // 950
    };                                                                                                           // 951
                                                                                                                 // 952
    _this.mod = function(e) {                                                                                    // 953
                                                                                                                 // 954
	if (_this.getLength() - e.getLength() < 0) {                                                                    // 955
	    return _this;                                                                                               // 956
	}                                                                                                               // 957
                                                                                                                 // 958
	var ratio = QRMath.glog(_this.getAt(0) ) - QRMath.glog(e.getAt(0) );                                            // 959
                                                                                                                 // 960
	var num = new Array(_this.getLength() );                                                                        // 961
	for (var i = 0; i < _this.getLength(); i += 1) {                                                                // 962
	    num[i] = _this.getAt(i);                                                                                    // 963
	}                                                                                                               // 964
                                                                                                                 // 965
	for (var i = 0; i < e.getLength(); i += 1) {                                                                    // 966
	    num[i] ^= QRMath.gexp(QRMath.glog(e.getAt(i) ) + ratio);                                                    // 967
	}                                                                                                               // 968
                                                                                                                 // 969
	// recursive call                                                                                               // 970
	return qrPolynomial(num, 0).mod(e);                                                                             // 971
    };                                                                                                           // 972
                                                                                                                 // 973
    return _this;                                                                                                // 974
};                                                                                                               // 975
                                                                                                                 // 976
//---------------------------------------------------------------------                                          // 977
// QRRSBlock                                                                                                     // 978
//---------------------------------------------------------------------                                          // 979
                                                                                                                 // 980
var QRRSBlock = function() {                                                                                     // 981
                                                                                                                 // 982
                                                                                                                 // 983
    // [1: [L, M, Q, H], ..]                                                                                     // 984
    var RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];
                                                                                                                 // 986
    var qrRSBlock = function(totalCount, dataCount) {                                                            // 987
	var _this = {};                                                                                                 // 988
	_this.totalCount = totalCount;                                                                                  // 989
	_this.dataCount = dataCount;                                                                                    // 990
	return _this;                                                                                                   // 991
    };                                                                                                           // 992
                                                                                                                 // 993
    var _this = {};                                                                                              // 994
                                                                                                                 // 995
    var getRsBlockTable = function(typeNumber, errorCorrectLevel) {                                              // 996
                                                                                                                 // 997
	switch(errorCorrectLevel) {                                                                                     // 998
	    case QRErrorCorrectLevel.L :                                                                                // 999
		return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];                                                               // 1000
	    case QRErrorCorrectLevel.M :                                                                                // 1001
		return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];                                                               // 1002
	    case QRErrorCorrectLevel.Q :                                                                                // 1003
		return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];                                                               // 1004
	    case QRErrorCorrectLevel.H :                                                                                // 1005
		return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];                                                               // 1006
		default :                                                                                                      // 1007
		return undefined;                                                                                              // 1008
	}                                                                                                               // 1009
    };                                                                                                           // 1010
                                                                                                                 // 1011
    _this.getRSBlocks = function(typeNumber, errorCorrectLevel) {                                                // 1012
                                                                                                                 // 1013
	var rsBlock = getRsBlockTable(typeNumber, errorCorrectLevel);                                                   // 1014
                                                                                                                 // 1015
	if (typeof rsBlock == 'undefined') {                                                                            // 1016
	    throw new Error('bad rs block @ typeNumber:' + typeNumber +                                                 // 1017
			    '/errorCorrectLevel:' + errorCorrectLevel);                                                               // 1018
	}                                                                                                               // 1019
                                                                                                                 // 1020
	var length = rsBlock.length / 3;                                                                                // 1021
                                                                                                                 // 1022
	var list = new Array();                                                                                         // 1023
                                                                                                                 // 1024
	for (var i = 0; i < length; i += 1) {                                                                           // 1025
                                                                                                                 // 1026
	    var count = rsBlock[i * 3 + 0];                                                                             // 1027
	    var totalCount = rsBlock[i * 3 + 1];                                                                        // 1028
	    var dataCount = rsBlock[i * 3 + 2];                                                                         // 1029
                                                                                                                 // 1030
	    for (var j = 0; j < count; j += 1) {                                                                        // 1031
		list.push(qrRSBlock(totalCount, dataCount) );                                                                  // 1032
	    }                                                                                                           // 1033
	}                                                                                                               // 1034
                                                                                                                 // 1035
	return list;                                                                                                    // 1036
    };                                                                                                           // 1037
                                                                                                                 // 1038
    return _this;                                                                                                // 1039
}();                                                                                                             // 1040
                                                                                                                 // 1041
//---------------------------------------------------------------------                                          // 1042
// qrBitBuffer                                                                                                   // 1043
//---------------------------------------------------------------------                                          // 1044
                                                                                                                 // 1045
var qrBitBuffer = function() {                                                                                   // 1046
                                                                                                                 // 1047
    var _buffer = new Array();                                                                                   // 1048
    var _length = 0;                                                                                             // 1049
                                                                                                                 // 1050
    var _this = {};                                                                                              // 1051
                                                                                                                 // 1052
    _this.getBuffer = function() {                                                                               // 1053
	return _buffer;                                                                                                 // 1054
    };                                                                                                           // 1055
                                                                                                                 // 1056
    _this.getAt = function(index) {                                                                              // 1057
	var bufIndex = Math.floor(index / 8);                                                                           // 1058
	return ( (_buffer[bufIndex] >>> (7 - index % 8) ) & 1) == 1;                                                    // 1059
    };                                                                                                           // 1060
                                                                                                                 // 1061
    _this.put = function(num, length) {                                                                          // 1062
	for (var i = 0; i < length; i += 1) {                                                                           // 1063
	    _this.putBit( ( (num >>> (length - i - 1) ) & 1) == 1);                                                     // 1064
	}                                                                                                               // 1065
    };                                                                                                           // 1066
                                                                                                                 // 1067
    _this.getLengthInBits = function() {                                                                         // 1068
	return _length;                                                                                                 // 1069
    };                                                                                                           // 1070
                                                                                                                 // 1071
    _this.putBit = function(bit) {                                                                               // 1072
                                                                                                                 // 1073
	var bufIndex = Math.floor(_length / 8);                                                                         // 1074
	if (_buffer.length <= bufIndex) {                                                                               // 1075
	    _buffer.push(0);                                                                                            // 1076
	}                                                                                                               // 1077
                                                                                                                 // 1078
	if (bit) {                                                                                                      // 1079
	    _buffer[bufIndex] |= (0x80 >>> (_length % 8) );                                                             // 1080
	}                                                                                                               // 1081
                                                                                                                 // 1082
	_length += 1;                                                                                                   // 1083
    };                                                                                                           // 1084
                                                                                                                 // 1085
    return _this;                                                                                                // 1086
};                                                                                                               // 1087
                                                                                                                 // 1088
//---------------------------------------------------------------------                                          // 1089
// qr8BitByte                                                                                                    // 1090
//---------------------------------------------------------------------                                          // 1091
                                                                                                                 // 1092
var qr8BitByte = function(data) {                                                                                // 1093
                                                                                                                 // 1094
    var _mode = QRMode.MODE_8BIT_BYTE;                                                                           // 1095
    var _data = data;                                                                                            // 1096
    var _parsedData = [];                                                                                        // 1097
                                                                                                                 // 1098
    var _this = {};                                                                                              // 1099
                                                                                                                 // 1100
                                                                                                                 // 1101
    // Added to support UTF-8 Characters                                                                         // 1102
    for (var i = 0, l = _data.length; i < l; i++) {                                                              // 1103
	var byteArray = [];                                                                                             // 1104
	var code = _data.charCodeAt(i);                                                                                 // 1105
                                                                                                                 // 1106
	if (code > 0x10000) {                                                                                           // 1107
	    byteArray[0] = 0xF0 | ((code & 0x1C0000) >>> 18);                                                           // 1108
	    byteArray[1] = 0x80 | ((code & 0x3F000) >>> 12);                                                            // 1109
	    byteArray[2] = 0x80 | ((code & 0xFC0) >>> 6);                                                               // 1110
	    byteArray[3] = 0x80 | (code & 0x3F);                                                                        // 1111
	} else if (code > 0x800) {                                                                                      // 1112
	    byteArray[0] = 0xE0 | ((code & 0xF000) >>> 12);                                                             // 1113
	    byteArray[1] = 0x80 | ((code & 0xFC0) >>> 6);                                                               // 1114
	    byteArray[2] = 0x80 | (code & 0x3F);                                                                        // 1115
	} else if (code > 0x80) {                                                                                       // 1116
	    byteArray[0] = 0xC0 | ((code & 0x7C0) >>> 6);                                                               // 1117
	    byteArray[1] = 0x80 | (code & 0x3F);                                                                        // 1118
	} else {                                                                                                        // 1119
	    byteArray[0] = code;                                                                                        // 1120
	}                                                                                                               // 1121
                                                                                                                 // 1122
        // Fix Unicode corruption bug                                                                            // 1123
        _parsedData.push(byteArray);                                                                             // 1124
    }                                                                                                            // 1125
                                                                                                                 // 1126
    _parsedData = Array.prototype.concat.apply([], _parsedData);                                                 // 1127
                                                                                                                 // 1128
    if (_parsedData.length != _data.length) {                                                                    // 1129
	_parsedData.unshift(191);                                                                                       // 1130
	_parsedData.unshift(187);                                                                                       // 1131
	_parsedData.unshift(239);                                                                                       // 1132
    }                                                                                                            // 1133
                                                                                                                 // 1134
    var _bytes = _parsedData;                                                                                    // 1135
                                                                                                                 // 1136
    _this.getMode = function() {                                                                                 // 1137
	return _mode;                                                                                                   // 1138
    };                                                                                                           // 1139
                                                                                                                 // 1140
    _this.getLength = function(buffer) {                                                                         // 1141
	return _bytes.length;                                                                                           // 1142
    };                                                                                                           // 1143
                                                                                                                 // 1144
    _this.write = function(buffer) {                                                                             // 1145
	for (var i = 0; i < _bytes.length; i += 1) {                                                                    // 1146
	    buffer.put(_bytes[i], 8);                                                                                   // 1147
	}                                                                                                               // 1148
    };                                                                                                           // 1149
                                                                                                                 // 1150
    return _this;                                                                                                // 1151
};                                                                                                               // 1152
                                                                                                                 // 1153
//=====================================================================                                          // 1154
// GIF Support etc.                                                                                              // 1155
//                                                                                                               // 1156
                                                                                                                 // 1157
//---------------------------------------------------------------------                                          // 1158
// byteArrayOutputStream                                                                                         // 1159
//---------------------------------------------------------------------                                          // 1160
                                                                                                                 // 1161
var byteArrayOutputStream = function() {                                                                         // 1162
                                                                                                                 // 1163
    var _bytes = new Array();                                                                                    // 1164
                                                                                                                 // 1165
    var _this = {};                                                                                              // 1166
                                                                                                                 // 1167
    _this.writeByte = function(b) {                                                                              // 1168
	_bytes.push(b & 0xff);                                                                                          // 1169
    };                                                                                                           // 1170
                                                                                                                 // 1171
    _this.writeShort = function(i) {                                                                             // 1172
	_this.writeByte(i);                                                                                             // 1173
	_this.writeByte(i >>> 8);                                                                                       // 1174
    };                                                                                                           // 1175
                                                                                                                 // 1176
    _this.writeBytes = function(b, off, len) {                                                                   // 1177
	off = off || 0;                                                                                                 // 1178
	len = len || b.length;                                                                                          // 1179
	for (var i = 0; i < len; i += 1) {                                                                              // 1180
	    _this.writeByte(b[i + off]);                                                                                // 1181
	}                                                                                                               // 1182
    };                                                                                                           // 1183
                                                                                                                 // 1184
    _this.writeString = function(s) {                                                                            // 1185
	for (var i = 0; i < s.length; i += 1) {                                                                         // 1186
	    _this.writeByte(s.charCodeAt(i) );                                                                          // 1187
	}                                                                                                               // 1188
    };                                                                                                           // 1189
                                                                                                                 // 1190
    _this.toByteArray = function() {                                                                             // 1191
	return _bytes;                                                                                                  // 1192
    };                                                                                                           // 1193
                                                                                                                 // 1194
    _this.toString = function() {                                                                                // 1195
	var s = '';                                                                                                     // 1196
	s += '[';                                                                                                       // 1197
	for (var i = 0; i < _bytes.length; i += 1) {                                                                    // 1198
	    if (i > 0) {                                                                                                // 1199
		s += ',';                                                                                                      // 1200
	    }                                                                                                           // 1201
	    s += _bytes[i];                                                                                             // 1202
	}                                                                                                               // 1203
	s += ']';                                                                                                       // 1204
	return s;                                                                                                       // 1205
    };                                                                                                           // 1206
                                                                                                                 // 1207
    return _this;                                                                                                // 1208
};                                                                                                               // 1209
                                                                                                                 // 1210
//---------------------------------------------------------------------                                          // 1211
// base64EncodeOutputStream                                                                                      // 1212
//---------------------------------------------------------------------                                          // 1213
                                                                                                                 // 1214
var base64EncodeOutputStream = function() {                                                                      // 1215
                                                                                                                 // 1216
    var _buffer = 0;                                                                                             // 1217
    var _buflen = 0;                                                                                             // 1218
    var _length = 0;                                                                                             // 1219
    var _base64 = '';                                                                                            // 1220
                                                                                                                 // 1221
    var _this = {};                                                                                              // 1222
                                                                                                                 // 1223
    var writeEncoded = function(b) {                                                                             // 1224
	_base64 += String.fromCharCode(encode(b & 0x3f) );                                                              // 1225
    };                                                                                                           // 1226
                                                                                                                 // 1227
    var encode = function(n) {                                                                                   // 1228
	if (n < 0) {                                                                                                    // 1229
	    // error.                                                                                                   // 1230
	} else if (n < 26) {                                                                                            // 1231
	    return 0x41 + n;                                                                                            // 1232
	} else if (n < 52) {                                                                                            // 1233
	    return 0x61 + (n - 26);                                                                                     // 1234
	} else if (n < 62) {                                                                                            // 1235
	    return 0x30 + (n - 52);                                                                                     // 1236
	} else if (n == 62) {                                                                                           // 1237
	    return 0x2b;                                                                                                // 1238
	} else if (n == 63) {                                                                                           // 1239
	    return 0x2f;                                                                                                // 1240
	}                                                                                                               // 1241
	throw new Error('n:' + n);                                                                                      // 1242
    };                                                                                                           // 1243
                                                                                                                 // 1244
    _this.writeByte = function(n) {                                                                              // 1245
                                                                                                                 // 1246
	_buffer = (_buffer << 8) | (n & 0xff);                                                                          // 1247
	_buflen += 8;                                                                                                   // 1248
	_length += 1;                                                                                                   // 1249
                                                                                                                 // 1250
	while (_buflen >= 6) {                                                                                          // 1251
	    writeEncoded(_buffer >>> (_buflen - 6) );                                                                   // 1252
	    _buflen -= 6;                                                                                               // 1253
	}                                                                                                               // 1254
    };                                                                                                           // 1255
                                                                                                                 // 1256
    _this.flush = function() {                                                                                   // 1257
                                                                                                                 // 1258
	if (_buflen > 0) {                                                                                              // 1259
	    writeEncoded(_buffer << (6 - _buflen) );                                                                    // 1260
	    _buffer = 0;                                                                                                // 1261
	    _buflen = 0;                                                                                                // 1262
	}                                                                                                               // 1263
                                                                                                                 // 1264
	if (_length % 3 != 0) {                                                                                         // 1265
	    // padding                                                                                                  // 1266
	    var padlen = 3 - _length % 3;                                                                               // 1267
	    for (var i = 0; i < padlen; i += 1) {                                                                       // 1268
		_base64 += '=';                                                                                                // 1269
	    }                                                                                                           // 1270
	}                                                                                                               // 1271
    };                                                                                                           // 1272
                                                                                                                 // 1273
    _this.toString = function() {                                                                                // 1274
	return _base64;                                                                                                 // 1275
    };                                                                                                           // 1276
                                                                                                                 // 1277
    return _this;                                                                                                // 1278
};                                                                                                               // 1279
                                                                                                                 // 1280
//---------------------------------------------------------------------                                          // 1281
// base64DecodeInputStream                                                                                       // 1282
//---------------------------------------------------------------------                                          // 1283
                                                                                                                 // 1284
var base64DecodeInputStream = function(str) {                                                                    // 1285
                                                                                                                 // 1286
    var _str = str;                                                                                              // 1287
    var _pos = 0;                                                                                                // 1288
    var _buffer = 0;                                                                                             // 1289
    var _buflen = 0;                                                                                             // 1290
                                                                                                                 // 1291
    var _this = {};                                                                                              // 1292
                                                                                                                 // 1293
    _this.read = function() {                                                                                    // 1294
                                                                                                                 // 1295
	while (_buflen < 8) {                                                                                           // 1296
                                                                                                                 // 1297
	    if (_pos >= _str.length) {                                                                                  // 1298
		if (_buflen == 0) {                                                                                            // 1299
		    return -1;                                                                                                 // 1300
		}                                                                                                              // 1301
		throw new Error('unexpected end of file./' + _buflen);                                                         // 1302
	    }                                                                                                           // 1303
                                                                                                                 // 1304
	    var c = _str.charAt(_pos);                                                                                  // 1305
	    _pos += 1;                                                                                                  // 1306
                                                                                                                 // 1307
	    if (c == '=') {                                                                                             // 1308
		_buflen = 0;                                                                                                   // 1309
		return -1;                                                                                                     // 1310
	    } else if (c.match(/^\s$/) ) {                                                                              // 1311
		// ignore if whitespace.                                                                                       // 1312
		continue;                                                                                                      // 1313
	    }                                                                                                           // 1314
                                                                                                                 // 1315
	    _buffer = (_buffer << 6) | decode(c.charCodeAt(0) );                                                        // 1316
	    _buflen += 6;                                                                                               // 1317
	}                                                                                                               // 1318
                                                                                                                 // 1319
	var n = (_buffer >>> (_buflen - 8) ) & 0xff;                                                                    // 1320
	_buflen -= 8;                                                                                                   // 1321
	return n;                                                                                                       // 1322
    };                                                                                                           // 1323
                                                                                                                 // 1324
    var decode = function(c) {                                                                                   // 1325
	if (0x41 <= c && c <= 0x5a) {                                                                                   // 1326
	    return c - 0x41;                                                                                            // 1327
	} else if (0x61 <= c && c <= 0x7a) {                                                                            // 1328
	    return c - 0x61 + 26;                                                                                       // 1329
	} else if (0x30 <= c && c <= 0x39) {                                                                            // 1330
	    return c - 0x30 + 52;                                                                                       // 1331
	} else if (c == 0x2b) {                                                                                         // 1332
	    return 62;                                                                                                  // 1333
	} else if (c == 0x2f) {                                                                                         // 1334
	    return 63;                                                                                                  // 1335
	} else {                                                                                                        // 1336
	    throw new Error('c:' + c);                                                                                  // 1337
	}                                                                                                               // 1338
    };                                                                                                           // 1339
                                                                                                                 // 1340
    return _this;                                                                                                // 1341
};                                                                                                               // 1342
                                                                                                                 // 1343
//---------------------------------------------------------------------                                          // 1344
// gifImage (B/W)                                                                                                // 1345
//---------------------------------------------------------------------                                          // 1346
                                                                                                                 // 1347
var gifImage = function(width, height) {                                                                         // 1348
                                                                                                                 // 1349
    var _width = width;                                                                                          // 1350
    var _height = height;                                                                                        // 1351
    var _data = new Array(width * height);                                                                       // 1352
                                                                                                                 // 1353
    var _this = {};                                                                                              // 1354
                                                                                                                 // 1355
    _this.setPixel = function(x, y, pixel) {                                                                     // 1356
	_data[y * _width + x] = pixel;                                                                                  // 1357
    };                                                                                                           // 1358
                                                                                                                 // 1359
    _this.write = function(out) {                                                                                // 1360
                                                                                                                 // 1361
	//---------------------------------                                                                             // 1362
	// GIF Signature                                                                                                // 1363
                                                                                                                 // 1364
	out.writeString('GIF87a');                                                                                      // 1365
                                                                                                                 // 1366
	//---------------------------------                                                                             // 1367
	// Screen Descriptor                                                                                            // 1368
                                                                                                                 // 1369
	out.writeShort(_width);                                                                                         // 1370
	out.writeShort(_height);                                                                                        // 1371
                                                                                                                 // 1372
	out.writeByte(0x80); // 2bit                                                                                    // 1373
	out.writeByte(0);                                                                                               // 1374
	out.writeByte(0);                                                                                               // 1375
                                                                                                                 // 1376
	//---------------------------------                                                                             // 1377
	// Global Color Map                                                                                             // 1378
                                                                                                                 // 1379
	// black                                                                                                        // 1380
	out.writeByte(0x00);                                                                                            // 1381
	out.writeByte(0x00);                                                                                            // 1382
	out.writeByte(0x00);                                                                                            // 1383
                                                                                                                 // 1384
	// white                                                                                                        // 1385
	out.writeByte(0xff);                                                                                            // 1386
	out.writeByte(0xff);                                                                                            // 1387
	out.writeByte(0xff);                                                                                            // 1388
                                                                                                                 // 1389
	//---------------------------------                                                                             // 1390
	// Image Descriptor                                                                                             // 1391
                                                                                                                 // 1392
	out.writeString(',');                                                                                           // 1393
	out.writeShort(0);                                                                                              // 1394
	out.writeShort(0);                                                                                              // 1395
	out.writeShort(_width);                                                                                         // 1396
	out.writeShort(_height);                                                                                        // 1397
	out.writeByte(0);                                                                                               // 1398
                                                                                                                 // 1399
	//---------------------------------                                                                             // 1400
	// Local Color Map                                                                                              // 1401
                                                                                                                 // 1402
	//---------------------------------                                                                             // 1403
	// Raster Data                                                                                                  // 1404
                                                                                                                 // 1405
	var lzwMinCodeSize = 2;                                                                                         // 1406
	var raster = getLZWRaster(lzwMinCodeSize);                                                                      // 1407
                                                                                                                 // 1408
	out.writeByte(lzwMinCodeSize);                                                                                  // 1409
                                                                                                                 // 1410
	var offset = 0;                                                                                                 // 1411
                                                                                                                 // 1412
	while (raster.length - offset > 255) {                                                                          // 1413
	    out.writeByte(255);                                                                                         // 1414
	    out.writeBytes(raster, offset, 255);                                                                        // 1415
	    offset += 255;                                                                                              // 1416
	}                                                                                                               // 1417
                                                                                                                 // 1418
	out.writeByte(raster.length - offset);                                                                          // 1419
	out.writeBytes(raster, offset, raster.length - offset);                                                         // 1420
	out.writeByte(0x00);                                                                                            // 1421
                                                                                                                 // 1422
	//---------------------------------                                                                             // 1423
	// GIF Terminator                                                                                               // 1424
	out.writeString(';');                                                                                           // 1425
    };                                                                                                           // 1426
                                                                                                                 // 1427
    var bitOutputStream = function(out) {                                                                        // 1428
                                                                                                                 // 1429
	var _out = out;                                                                                                 // 1430
	var _bitLength = 0;                                                                                             // 1431
	var _bitBuffer = 0;                                                                                             // 1432
                                                                                                                 // 1433
	var _this = {};                                                                                                 // 1434
                                                                                                                 // 1435
	_this.write = function(data, length) {                                                                          // 1436
                                                                                                                 // 1437
	    if ( (data >>> length) != 0) {                                                                              // 1438
		throw new Error('length over');                                                                                // 1439
	    }                                                                                                           // 1440
                                                                                                                 // 1441
	    while (_bitLength + length >= 8) {                                                                          // 1442
		_out.writeByte(0xff & ( (data << _bitLength) | _bitBuffer) );                                                  // 1443
		length -= (8 - _bitLength);                                                                                    // 1444
		data >>>= (8 - _bitLength);                                                                                    // 1445
		_bitBuffer = 0;                                                                                                // 1446
		_bitLength = 0;                                                                                                // 1447
	    }                                                                                                           // 1448
                                                                                                                 // 1449
	    _bitBuffer = (data << _bitLength) | _bitBuffer;                                                             // 1450
	    _bitLength = _bitLength + length;                                                                           // 1451
	};                                                                                                              // 1452
                                                                                                                 // 1453
	_this.flush = function() {                                                                                      // 1454
	    if (_bitLength > 0) {                                                                                       // 1455
		_out.writeByte(_bitBuffer);                                                                                    // 1456
	    }                                                                                                           // 1457
	};                                                                                                              // 1458
                                                                                                                 // 1459
	return _this;                                                                                                   // 1460
    };                                                                                                           // 1461
                                                                                                                 // 1462
    var getLZWRaster = function(lzwMinCodeSize) {                                                                // 1463
                                                                                                                 // 1464
	var clearCode = 1 << lzwMinCodeSize;                                                                            // 1465
	var endCode = (1 << lzwMinCodeSize) + 1;                                                                        // 1466
	var bitLength = lzwMinCodeSize + 1;                                                                             // 1467
                                                                                                                 // 1468
	// Setup LZWTable                                                                                               // 1469
	var table = lzwTable();                                                                                         // 1470
                                                                                                                 // 1471
	for (var i = 0; i < clearCode; i += 1) {                                                                        // 1472
	    table.add(String.fromCharCode(i) );                                                                         // 1473
	}                                                                                                               // 1474
	table.add(String.fromCharCode(clearCode) );                                                                     // 1475
	table.add(String.fromCharCode(endCode) );                                                                       // 1476
                                                                                                                 // 1477
	var byteOut = byteArrayOutputStream();                                                                          // 1478
	var bitOut = bitOutputStream(byteOut);                                                                          // 1479
                                                                                                                 // 1480
	// clear code                                                                                                   // 1481
	bitOut.write(clearCode, bitLength);                                                                             // 1482
                                                                                                                 // 1483
	var dataIndex = 0;                                                                                              // 1484
                                                                                                                 // 1485
	var s = String.fromCharCode(_data[dataIndex]);                                                                  // 1486
	dataIndex += 1;                                                                                                 // 1487
                                                                                                                 // 1488
	while (dataIndex < _data.length) {                                                                              // 1489
                                                                                                                 // 1490
	    var c = String.fromCharCode(_data[dataIndex]);                                                              // 1491
	    dataIndex += 1;                                                                                             // 1492
                                                                                                                 // 1493
	    if (table.contains(s + c) ) {                                                                               // 1494
                                                                                                                 // 1495
		s = s + c;                                                                                                     // 1496
                                                                                                                 // 1497
	    } else {                                                                                                    // 1498
                                                                                                                 // 1499
		bitOut.write(table.indexOf(s), bitLength);                                                                     // 1500
                                                                                                                 // 1501
		if (table.size() < 0xfff) {                                                                                    // 1502
                                                                                                                 // 1503
		    if (table.size() == (1 << bitLength) ) {                                                                   // 1504
			bitLength += 1;                                                                                               // 1505
		    }                                                                                                          // 1506
                                                                                                                 // 1507
		    table.add(s + c);                                                                                          // 1508
		}                                                                                                              // 1509
                                                                                                                 // 1510
		s = c;                                                                                                         // 1511
	    }                                                                                                           // 1512
	}                                                                                                               // 1513
                                                                                                                 // 1514
	bitOut.write(table.indexOf(s), bitLength);                                                                      // 1515
                                                                                                                 // 1516
	// end code                                                                                                     // 1517
	bitOut.write(endCode, bitLength);                                                                               // 1518
                                                                                                                 // 1519
	bitOut.flush();                                                                                                 // 1520
                                                                                                                 // 1521
	return byteOut.toByteArray();                                                                                   // 1522
    };                                                                                                           // 1523
                                                                                                                 // 1524
    var lzwTable = function() {                                                                                  // 1525
                                                                                                                 // 1526
	var _map = {};                                                                                                  // 1527
	var _size = 0;                                                                                                  // 1528
                                                                                                                 // 1529
	var _this = {};                                                                                                 // 1530
                                                                                                                 // 1531
	_this.add = function(key) {                                                                                     // 1532
	    if (_this.contains(key) ) {                                                                                 // 1533
		throw new Error('dup key:' + key);                                                                             // 1534
	    }                                                                                                           // 1535
	    _map[key] = _size;                                                                                          // 1536
	    _size += 1;                                                                                                 // 1537
	};                                                                                                              // 1538
                                                                                                                 // 1539
	_this.size = function() {                                                                                       // 1540
	    return _size;                                                                                               // 1541
	};                                                                                                              // 1542
                                                                                                                 // 1543
	_this.indexOf = function(key) {                                                                                 // 1544
	    return _map[key];                                                                                           // 1545
	};                                                                                                              // 1546
                                                                                                                 // 1547
	_this.contains = function(key) {                                                                                // 1548
	    return typeof _map[key] != 'undefined';                                                                     // 1549
	};                                                                                                              // 1550
                                                                                                                 // 1551
	return _this;                                                                                                   // 1552
    };                                                                                                           // 1553
                                                                                                                 // 1554
    return _this;                                                                                                // 1555
};                                                                                                               // 1556
                                                                                                                 // 1557
var createImgTag = function(width, height, getPixel, alt) {                                                      // 1558
                                                                                                                 // 1559
    var gif = gifImage(width, height);                                                                           // 1560
    for (var y = 0; y < height; y += 1) {                                                                        // 1561
	for (var x = 0; x < width; x += 1) {                                                                            // 1562
	    gif.setPixel(x, y, getPixel(x, y) );                                                                        // 1563
	}                                                                                                               // 1564
    }                                                                                                            // 1565
                                                                                                                 // 1566
    var b = byteArrayOutputStream();                                                                             // 1567
    gif.write(b);                                                                                                // 1568
                                                                                                                 // 1569
    var base64 = base64EncodeOutputStream();                                                                     // 1570
    var bytes = b.toByteArray();                                                                                 // 1571
    for (var i = 0; i < bytes.length; i += 1) {                                                                  // 1572
	base64.writeByte(bytes[i]);                                                                                     // 1573
    }                                                                                                            // 1574
    base64.flush();                                                                                              // 1575
                                                                                                                 // 1576
    var img = '';                                                                                                // 1577
    img += 'data:image/gif;base64,';                                                                             // 1578
    img += base64;                                                                                               // 1579
                                                                                                                 // 1580
    return img;                                                                                                  // 1581
};                                                                                                               // 1582
                                                                                                                 // 1583
//---------------------------------------------------------------------                                          // 1584
// returns qrcode function.                                                                                      // 1585
                                                                                                                 // 1586
module.exports = qrcode;                                                                                         // 1587
                                                                                                                 // 1588
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html"
  ]
});
require("./node_modules/meteor/rocketchat:2fa/client/template.accountSecurity.js");
require("./node_modules/meteor/rocketchat:2fa/client/accountSecurity.js");
require("./node_modules/meteor/rocketchat:2fa/client/TOTPPassword.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:2fa'] = {};

})();
