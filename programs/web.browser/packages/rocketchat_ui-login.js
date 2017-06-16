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
var Template = Package['templating-runtime'].Template;
var _ = Package.underscore._;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var FlowRouter = Package['kadira:flow-router'].FlowRouter;
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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:ui-login":{"client":{"routes.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-login/client/routes.js                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
FlowRouter.route('/reset-password/:token', {                                                                          // 1
	name: 'resetPassword',                                                                                               // 2
	action: function () {                                                                                                // 3
		BlazeLayout.render('loginLayout', {                                                                                 // 4
			center: 'resetPassword'                                                                                            // 4
		});                                                                                                                 // 4
	}                                                                                                                    // 5
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"reset-password":{"template.resetPassword.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-login/client/reset-password/template.resetPassword.js                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("resetPassword");                                                                                // 2
Template["resetPassword"] = new Template("Template.resetPassword", (function() {                                      // 3
  var view = this;                                                                                                    // 4
  return HTML.FORM({                                                                                                  // 5
    id: "login-card",                                                                                                 // 6
    class: "content-background-color color-primary-font-color",                                                       // 7
    action: "/"                                                                                                       // 8
  }, "\n\t\t", HTML.DIV({                                                                                             // 9
    class: "fields"                                                                                                   // 10
  }, "\n\t\t\t", HTML.HEADER("\n\t\t\t", Blaze.If(function() {                                                        // 11
    return Spacebars.call(view.lookup("requirePasswordChange"));                                                      // 12
  }, function() {                                                                                                     // 13
    return [ "\n\t\t\t\t", Blaze.If(function() {                                                                      // 14
      return Spacebars.call(view.lookup("requirePasswordChangeReason"));                                              // 15
    }, function() {                                                                                                   // 16
      return [ "\n\t\t\t\t\t", HTML.P(Blaze.View("lookup:_", function() {                                             // 17
        return Spacebars.mustache(view.lookup("_"), view.lookup("requirePasswordChangeReason"));                      // 18
      })), "\n\t\t\t\t" ];                                                                                            // 19
    }, function() {                                                                                                   // 20
      return [ "\n\t\t\t\t\t", HTML.P(Blaze.View("lookup:_", function() {                                             // 21
        return Spacebars.mustache(view.lookup("_"), "You_need_to_change_your_password");                              // 22
      })), "\n\t\t\t\t" ];                                                                                            // 23
    }), "\n\t\t\t" ];                                                                                                 // 24
  }, function() {                                                                                                     // 25
    return [ "\n\t\t\t\t", HTML.P(Blaze.View("lookup:_", function() {                                                 // 26
      return Spacebars.mustache(view.lookup("_"), "Please_enter_your_new_password_below");                            // 27
    })), "\n\t\t\t" ];                                                                                                // 28
  }), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                             // 29
    class: "input-text active"                                                                                        // 30
  }, "\n\t\t\t\t", HTML.LABEL({                                                                                       // 31
    for: "newPassword"                                                                                                // 32
  }, Blaze.View("lookup:_", function() {                                                                              // 33
    return Spacebars.mustache(view.lookup("_"), "Type_your_new_password");                                            // 34
  })), "\n\t\t\t\t", HTML.Raw('<input type="password" name="newPassword" id="newPassword" dir="auto">'), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({
    class: "submit"                                                                                                   // 36
  }, "\n\t\t\t\t", HTML.BUTTON({                                                                                      // 37
    "data-loading-text": function() {                                                                                 // 38
      return [ Spacebars.mustache(view.lookup("_"), "Please_wait"), "..." ];                                          // 39
    },                                                                                                                // 40
    class: "button primary resetpass"                                                                                 // 41
  }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                    // 42
    return Spacebars.mustache(view.lookup("_"), "Reset");                                                             // 43
  }))), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                                              // 44
}));                                                                                                                  // 45
                                                                                                                      // 46
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"resetPassword.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-login/client/reset-password/resetPassword.js                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var toastr = void 0;                                                                                                  // 1
module.watch(require("toastr"), {                                                                                     // 1
	"default": function (v) {                                                                                            // 1
		toastr = v;                                                                                                         // 1
	}                                                                                                                    // 1
}, 0);                                                                                                                // 1
Template.resetPassword.helpers({                                                                                      // 2
	requirePasswordChange: function () {                                                                                 // 3
		var user = Meteor.user();                                                                                           // 4
                                                                                                                      //
		if (user) {                                                                                                         // 5
			return user.requirePasswordChange;                                                                                 // 6
		}                                                                                                                   // 7
	},                                                                                                                   // 8
	requirePasswordChangeReason: function () {                                                                           // 9
		var user = Meteor.user();                                                                                           // 10
                                                                                                                      //
		if (user) {                                                                                                         // 11
			return user.requirePasswordChangeReason;                                                                           // 12
		}                                                                                                                   // 13
	}                                                                                                                    // 14
});                                                                                                                   // 2
Template.resetPassword.events({                                                                                       // 17
	'focus .input-text input': function (event) {                                                                        // 18
		$(event.currentTarget).parents('.input-text').addClass('focus');                                                    // 19
	},                                                                                                                   // 20
	'blur .input-text input': function (event) {                                                                         // 21
		if (event.currentTarget.value === '') {                                                                             // 22
			$(event.currentTarget).parents('.input-text').removeClass('focus');                                                // 23
		}                                                                                                                   // 24
	},                                                                                                                   // 25
	'submit #login-card': function (event, instance) {                                                                   // 26
		event.preventDefault();                                                                                             // 27
		var button = instance.$('button.resetpass');                                                                        // 29
		RocketChat.Button.loading(button);                                                                                  // 30
                                                                                                                      //
		if (Meteor.userId()) {                                                                                              // 32
			Meteor.call('setUserPassword', instance.find('[name=newPassword]').value, function (error) {                       // 33
				if (error) {                                                                                                      // 34
					console.log(error);                                                                                              // 35
					swal({                                                                                                           // 36
						title: t('Error_changing_password'),                                                                            // 37
						type: 'error'                                                                                                   // 38
					});                                                                                                              // 36
				}                                                                                                                 // 40
			});                                                                                                                // 41
		} else {                                                                                                            // 42
			Accounts.resetPassword(FlowRouter.getParam('token'), instance.find('[name=newPassword]').value, function (error) {
				RocketChat.Button.reset(button);                                                                                  // 44
                                                                                                                      //
				if (error) {                                                                                                      // 45
					console.log(error);                                                                                              // 46
					swal({                                                                                                           // 47
						title: t('Error_changing_password'),                                                                            // 48
						type: 'error'                                                                                                   // 49
					});                                                                                                              // 47
				} else {                                                                                                          // 51
					FlowRouter.go('home');                                                                                           // 52
					toastr.success(t('Password_changed_successfully'));                                                              // 53
					RocketChat.callbacks.run('userPasswordReset');                                                                   // 54
				}                                                                                                                 // 55
			});                                                                                                                // 56
		}                                                                                                                   // 57
	}                                                                                                                    // 58
});                                                                                                                   // 17
Template.resetPassword.onRendered(function () {                                                                       // 61
	this.find('[name=newPassword]').focus();                                                                             // 62
});                                                                                                                   // 63
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"login":{"template.footer.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-login/client/login/template.footer.js                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("loginFooter");                                                                                  // 2
Template["loginFooter"] = new Template("Template.loginFooter", (function() {                                          // 3
  var view = this;                                                                                                    // 4
  return HTML.FOOTER("\n\t\t", Blaze.If(function() {                                                                  // 5
    return Spacebars.call(view.lookup("LanguageVersion"));                                                            // 6
  }, function() {                                                                                                     // 7
    return HTML.DIV({                                                                                                 // 8
      class: "switch-language"                                                                                        // 9
    }, HTML.BUTTON({                                                                                                  // 10
      class: "switch-language"                                                                                        // 11
    }, Blaze.View("lookup:LanguageVersion", function() {                                                              // 12
      return Spacebars.mustache(view.lookup("LanguageVersion"));                                                      // 13
    })));                                                                                                             // 14
  }), "\n\t");                                                                                                        // 15
}));                                                                                                                  // 16
                                                                                                                      // 17
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.form.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-login/client/login/template.form.js                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("loginForm");                                                                                    // 2
Template["loginForm"] = new Template("Template.loginForm", (function() {                                              // 3
  var view = this;                                                                                                    // 4
  return Blaze.If(function() {                                                                                        // 5
    return Spacebars.dataMustache(view.lookup("state"), "sandstorm");                                                 // 6
  }, function() {                                                                                                     // 7
    return [ "\n\t\t", HTML.DIV({                                                                                     // 8
      class: "alert error-color error-background error-border"                                                        // 9
    }, "\n\t\t\tYou must login to Sandstorm (on the top right) in order to access this chat.\n\t\t"), "\n\t" ];       // 10
  }, function() {                                                                                                     // 11
    return [ "\n\t\t", HTML.FORM({                                                                                    // 12
      id: "login-card",                                                                                               // 13
      class: "content-background-color color-primary-font-color",                                                     // 14
      method: "/",                                                                                                    // 15
      novalidate: ""                                                                                                  // 16
    }, "\n\t\t\t", Blaze.If(function() {                                                                              // 17
      return Spacebars.dataMustache(view.lookup("state"), "wait-activation");                                         // 18
    }, function() {                                                                                                   // 19
      return [ "\n\t\t\t\t", HTML.HEADER("\n\t\t\t\t\t", HTML.H2({                                                    // 20
        "data-i18n": "Registration_Succeeded"                                                                         // 21
      }, Blaze.View("lookup:_", function() {                                                                          // 22
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Registration_Succeeded"));                     // 23
      })), "\n\t\t\t\t\t", HTML.P(Blaze.View("lookup:_", function() {                                                 // 24
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Wait_activation_warning"));                    // 25
      })), "\n\t\t\t\t\t", HTML.P(Blaze.View("lookup:_", function() {                                                 // 26
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Please_wait_activation"));                     // 27
      })), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                               // 28
    }, function() {                                                                                                   // 29
      return [ "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("loginServices")), "\n\t\t\t\t", Blaze.If(function() {
        return Spacebars.call(view.lookup("needsValidateEmail"));                                                     // 31
      }, function() {                                                                                                 // 32
        return [ "\n\t\t\t\t\t", HTML.DIV({                                                                           // 33
          class: "alert error-color error-background error-border"                                                    // 34
        }, "\n\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                      // 35
          return Spacebars.mustache(view.lookup("_"), "You_need_confirm_email");                                      // 36
        }), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                          // 37
      }), "\n\t\t\t\t", Blaze.If(function() {                                                                         // 38
        return Spacebars.call(view.lookup("showFormLogin"));                                                          // 39
      }, function() {                                                                                                 // 40
        return [ "\n\t\t\t\t\t", HTML.DIV({                                                                           // 41
          class: "fields"                                                                                             // 42
        }, "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                    // 43
          return Spacebars.dataMustache(view.lookup("state"), "login");                                               // 44
        }, function() {                                                                                               // 45
          return [ "\n\t\t\t\t\t\t\t", HTML.DIV({                                                                     // 46
            class: "input-line"                                                                                       // 47
          }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL({                                                                       // 48
            for: "emailOrUsername"                                                                                    // 49
          }, Blaze.View("lookup:emailOrUsernamePlaceholder", function() {                                             // 50
            return Spacebars.mustache(view.lookup("emailOrUsernamePlaceholder"));                                     // 51
          })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                    // 52
            type: "text",                                                                                             // 53
            name: "emailOrUsername",                                                                                  // 54
            id: "emailOrUsername",                                                                                    // 55
            autocapitalize: "off",                                                                                    // 56
            autocorrect: "off"                                                                                        // 57
          }), "\n\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                           // 58
            return Spacebars.call(view.lookup("hasOnePassword"));                                                     // 59
          }, function() {                                                                                             // 60
            return [ "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                             // 61
              class: "one-passsword"                                                                                  // 62
            }), "\n\t\t\t\t\t\t\t\t\t" ];                                                                             // 63
          }), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                      // 64
            class: "input-error"                                                                                      // 65
          }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({                              // 66
            class: "input-line"                                                                                       // 67
          }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL({                                                                       // 68
            for: "pass"                                                                                               // 69
          }, Blaze.View("lookup:passwordPlaceholder", function() {                                                    // 70
            return Spacebars.mustache(view.lookup("passwordPlaceholder"));                                            // 71
          })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                    // 72
            type: "password",                                                                                         // 73
            name: "pass",                                                                                             // 74
            id: "pass"                                                                                                // 75
          }), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                      // 76
            class: "input-error"                                                                                      // 77
          }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t" ];                                         // 78
        }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                   // 79
          return Spacebars.dataMustache(view.lookup("state"), "register");                                            // 80
        }, function() {                                                                                               // 81
          return [ "\n\t\t\t\t\t\t\t", HTML.DIV({                                                                     // 82
            class: "input-line"                                                                                       // 83
          }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL({                                                                       // 84
            for: "name"                                                                                               // 85
          }, Blaze.View("lookup:namePlaceholder", function() {                                                        // 86
            return Spacebars.mustache(view.lookup("namePlaceholder"));                                                // 87
          })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                    // 88
            type: "text",                                                                                             // 89
            name: "name",                                                                                             // 90
            id: "name",                                                                                               // 91
            dir: "auto"                                                                                               // 92
          }), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                      // 93
            class: "input-error"                                                                                      // 94
          }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({                              // 95
            class: "input-line"                                                                                       // 96
          }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL({                                                                       // 97
            for: "email"                                                                                              // 98
          }, Blaze.View("lookup:_", function() {                                                                      // 99
            return Spacebars.mustache(view.lookup("_"), "Email");                                                     // 100
          })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                    // 101
            type: "email",                                                                                            // 102
            name: "email",                                                                                            // 103
            id: "email"                                                                                               // 104
          }), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                      // 105
            class: "input-error"                                                                                      // 106
          }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\n\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {      // 107
            return {                                                                                                  // 108
              hideFromForm: Spacebars.call(true)                                                                      // 109
            };                                                                                                        // 110
          }, function() {                                                                                             // 111
            return Spacebars.include(view.lookupTemplate("customFieldsForm"));                                        // 112
          }), "\n\n\t\t\t\t\t\t\t", HTML.DIV({                                                                        // 113
            class: "input-line"                                                                                       // 114
          }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL({                                                                       // 115
            for: "pass"                                                                                               // 116
          }, Blaze.View("lookup:passwordPlaceholder", function() {                                                    // 117
            return Spacebars.mustache(view.lookup("passwordPlaceholder"));                                            // 118
          })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                    // 119
            type: "password",                                                                                         // 120
            name: "pass",                                                                                             // 121
            id: "pass"                                                                                                // 122
          }), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                      // 123
            class: "input-error"                                                                                      // 124
          }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", Blaze.If(function() {                   // 125
            return Spacebars.call(view.lookup("requirePasswordConfirmation"));                                        // 126
          }, function() {                                                                                             // 127
            return [ "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                 // 128
              class: "input-line"                                                                                     // 129
            }, "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL({                                                                   // 130
              for: "confirm-pass"                                                                                     // 131
            }, Blaze.View("lookup:_", function() {                                                                    // 132
              return Spacebars.mustache(view.lookup("_"), "Confirm_password");                                        // 133
            })), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                              // 134
              type: "password",                                                                                       // 135
              name: "confirm-pass",                                                                                   // 136
              id: "confirm-pass"                                                                                      // 137
            }), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                  // 138
              class: "input-error"                                                                                    // 139
            }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];                                 // 140
          }), "\n\t\t\t\t\t\t" ];                                                                                     // 141
        }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                   // 142
          return Spacebars.dataMustache(view.lookup("state"), "forgot-password", "email-verification");               // 143
        }, function() {                                                                                               // 144
          return [ "\n\t\t\t\t\t\t\t", HTML.DIV({                                                                     // 145
            class: "input-line"                                                                                       // 146
          }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL({                                                                       // 147
            for: "email"                                                                                              // 148
          }, Blaze.View("lookup:_", function() {                                                                      // 149
            return Spacebars.mustache(view.lookup("_"), "Email");                                                     // 150
          })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                    // 151
            type: "email",                                                                                            // 152
            name: "email",                                                                                            // 153
            id: "email"                                                                                               // 154
          }), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                      // 155
            class: "input-error"                                                                                      // 156
          }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t" ];                                         // 157
        }), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                                               // 158
          class: "submit"                                                                                             // 159
        }, "\n\t\t\t\t\t\t", HTML.BUTTON({                                                                            // 160
          class: "button primary login"                                                                               // 161
        }, HTML.SPAN(Blaze.View("lookup:btnLoginSave", function() {                                                   // 162
          return Spacebars.mustache(view.lookup("btnLoginSave"));                                                     // 163
        }))), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", Blaze.If(function() {                                                  // 164
          return Spacebars.dataMustache(view.lookup("state"), "login");                                               // 165
        }, function() {                                                                                               // 166
          return [ "\n\t\t\t\t\t\t", Blaze.If(function() {                                                            // 167
            return Spacebars.call(view.lookup("registrationAllowed"));                                                // 168
          }, function() {                                                                                             // 169
            return [ "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", HTML.BUTTON({                                 // 170
              type: "button",                                                                                         // 171
              class: "register"                                                                                       // 172
            }, Blaze.View("lookup:_", function() {                                                                    // 173
              return Spacebars.mustache(view.lookup("_"), "Register");                                                // 174
            })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t" ];                                                             // 175
          }, function() {                                                                                             // 176
            return [ "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                        // 177
              return Spacebars.call(view.lookup("linkReplacementText"));                                              // 178
            }, function() {                                                                                           // 179
              return [ "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                               // 180
                class: "register-link-replacement"                                                                    // 181
              }, "\n\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:linkReplacementText", function() {                        // 182
                return Spacebars.makeRaw(Spacebars.mustache(view.lookup("linkReplacementText")));                     // 183
              }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];                                                        // 184
            }), "\n\t\t\t\t\t\t" ];                                                                                   // 185
          }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                 // 186
            return Spacebars.call(view.lookup("passwordResetAllowed"));                                               // 187
          }, function() {                                                                                             // 188
            return [ "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", HTML.BUTTON({                                 // 189
              type: "button",                                                                                         // 190
              class: "forgot-password"                                                                                // 191
            }, Blaze.View("lookup:_", function() {                                                                    // 192
              return Spacebars.mustache(view.lookup("_"), "Forgot_password");                                         // 193
            })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t" ];                                                             // 194
          }), "\n\t\t\t\t\t" ];                                                                                       // 195
        }), "\n\t\t\t\t" ];                                                                                           // 196
      }), "\n\t\t\t" ];                                                                                               // 197
    }), "\n\t\t\t", Blaze.Unless(function() {                                                                         // 198
      return Spacebars.dataMustache(view.lookup("state"), "login");                                                   // 199
    }, function() {                                                                                                   // 200
      return [ "\n\t\t\t\t", HTML.DIV("\n\t\t\t\t\t", HTML.BUTTON({                                                   // 201
        type: "button",                                                                                               // 202
        class: "back-to-login"                                                                                        // 203
      }, Blaze.View("lookup:_", function() {                                                                          // 204
        return Spacebars.mustache(view.lookup("_"), "Back_to_login");                                                 // 205
      })), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                               // 206
    }), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                               // 207
      class: "login-terms"                                                                                            // 208
    }, "\n\t\t\t", Blaze.View("lookup:loginTerms", function() {                                                       // 209
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("loginTerms")));                                        // 210
    }), "\n\t\t\t", HTML.DIV({                                                                                        // 211
      class: "powered-by"                                                                                             // 212
    }, "\n\t\t\t\tPowered by ", HTML.A({                                                                              // 213
      class: "color-tertiary-font-color",                                                                             // 214
      href: "https://rocket.chat"                                                                                     // 215
    }, "Open Source Chat Platform Rocket.Chat"), ".\n\t\t\t"), "\n\t\t"), "\n\t" ];                                   // 216
  });                                                                                                                 // 217
}));                                                                                                                  // 218
                                                                                                                      // 219
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.header.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-login/client/login/template.header.js                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("loginHeader");                                                                                  // 2
Template["loginHeader"] = new Template("Template.loginHeader", (function() {                                          // 3
  var view = this;                                                                                                    // 4
  return HTML.HEADER("\n\t\t", HTML.A({                                                                               // 5
    class: "logo",                                                                                                    // 6
    href: "/"                                                                                                         // 7
  }, HTML.IMG({                                                                                                       // 8
    src: function() {                                                                                                 // 9
      return Spacebars.mustache(view.lookup("logoUrl"));                                                              // 10
    }                                                                                                                 // 11
  })), "\n\t");                                                                                                       // 12
}));                                                                                                                  // 13
                                                                                                                      // 14
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.layout.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-login/client/login/template.layout.js                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("loginLayout");                                                                                  // 2
Template["loginLayout"] = new Template("Template.loginLayout", (function() {                                          // 3
  var view = this;                                                                                                    // 4
  return HTML.SECTION({                                                                                               // 5
    class: "full-page color-tertiary-font-color"                                                                      // 6
  }, "\n\t\t", HTML.DIV({                                                                                             // 7
    class: "wrapper"                                                                                                  // 8
  }, "\n\t\t\t", Spacebars.include(view.lookupTemplate("loginHeader")), "\n\t\t\t", Blaze._TemplateWith(function() {  // 9
    return {                                                                                                          // 10
      template: Spacebars.call(view.lookup("center"))                                                                 // 11
    };                                                                                                                // 12
  }, function() {                                                                                                     // 13
    return Spacebars.include(function() {                                                                             // 14
      return Spacebars.call(Template.__dynamic);                                                                      // 15
    });                                                                                                               // 16
  }), "\n\t\t\t", Spacebars.include(view.lookupTemplate("loginFooter")), "\n\t\t"), "\n\t");                          // 17
}));                                                                                                                  // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"layout.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-login/client/login/layout.js                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.loginLayout.onRendered(function () {                                                                         // 1
	$('#initial-page-loading').remove();                                                                                 // 2
});                                                                                                                   // 3
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.services.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-login/client/login/template.services.js                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("loginServices");                                                                                // 2
Template["loginServices"] = new Template("Template.loginServices", (function() {                                      // 3
  var view = this;                                                                                                    // 4
  return Blaze.If(function() {                                                                                        // 5
    return Spacebars.call(Spacebars.dot(view.lookup("loginService"), "length"));                                      // 6
  }, function() {                                                                                                     // 7
    return [ "\n\t\t", HTML.DIV({                                                                                     // 8
      class: "social-login buttons-group"                                                                             // 9
    }, "\n\t\t\t", Blaze.Each(function() {                                                                            // 10
      return Spacebars.call(view.lookup("loginService"));                                                             // 11
    }, function() {                                                                                                   // 12
      return [ "\n\t\t\t\t", HTML.BUTTON({                                                                            // 13
        type: "button",                                                                                               // 14
        class: function() {                                                                                           // 15
          return [ "button external-login ", Spacebars.mustache(Spacebars.dot(view.lookup("service"), "service")) ];  // 16
        },                                                                                                            // 17
        title: function() {                                                                                           // 18
          return Spacebars.mustache(view.lookup("displayName"));                                                      // 19
        },                                                                                                            // 20
        style: function() {                                                                                           // 21
          return [ Blaze.If(function() {                                                                              // 22
            return Spacebars.call(Spacebars.dot(view.lookup("service"), "buttonColor"));                              // 23
          }, function() {                                                                                             // 24
            return [ "background-color:", Blaze.View("lookup:service.buttonColor", function() {                       // 25
              return Spacebars.mustache(Spacebars.dot(view.lookup("service"), "buttonColor"));                        // 26
            }), ";" ];                                                                                                // 27
          }), Blaze.If(function() {                                                                                   // 28
            return Spacebars.call(Spacebars.dot(view.lookup("service"), "buttonLabelColor"));                         // 29
          }, function() {                                                                                             // 30
            return [ "color:", Blaze.View("lookup:service.buttonLabelColor", function() {                             // 31
              return Spacebars.mustache(Spacebars.dot(view.lookup("service"), "buttonLabelColor"));                   // 32
            }), ";" ];                                                                                                // 33
          }) ];                                                                                                       // 34
        }                                                                                                             // 35
      }, HTML.I({                                                                                                     // 36
        class: function() {                                                                                           // 37
          return [ "icon-", Spacebars.mustache(view.lookup("icon")), " service-icon" ];                               // 38
        }                                                                                                             // 39
      }), HTML.I({                                                                                                    // 40
        class: "icon-spin animate-spin loading-icon hidden"                                                           // 41
      }), HTML.SPAN(Blaze.View("lookup:service.buttonLabelText", function() {                                         // 42
        return Spacebars.mustache(Spacebars.dot(view.lookup("service"), "buttonLabelText"));                          // 43
      }))), "\n\t\t\t" ];                                                                                             // 44
    }), "\n\t\t"), "\n\t" ];                                                                                          // 45
  });                                                                                                                 // 46
}));                                                                                                                  // 47
                                                                                                                      // 48
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.social.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-login/client/login/template.social.js                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("social");                                                                                       // 2
Template["social"] = new Template("Template.social", (function() {                                                    // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    class: "social"                                                                                                   // 6
  }, "\n\t\t", Blaze.If(function() {                                                                                  // 7
    return Spacebars.call(view.lookup("withParagraph"));                                                              // 8
  }, function() {                                                                                                     // 9
    return [ "\n\t\t\t", HTML.H4(Blaze.View("lookup:_", function() {                                                  // 10
      return Spacebars.mustache(view.lookup("_"), "Join_the_Community");                                              // 11
    })), "\n\t\t\t", HTML.P(Blaze.View("lookup:_", function() {                                                       // 12
      return Spacebars.mustache(view.lookup("_"), "Follow_social_profiles");                                          // 13
    })), "\n\t\t" ];                                                                                                  // 14
  }), HTML.Raw('\n\t\t<nav>\n\t\t\t<a target="_blank" class="button share twitter" href="https://twitter.com/RocketChat"><i class="icon-twitter"></i><span>Twitter</span></a>\n\t\t\t<a target="_blank" class="button share facebook" href="https://www.facebook.com/RocketChat"><i class="icon-facebook"></i><span>Facebook</span></a>\n\t\t\t<a target="_blank" class="button share google" href="https://plus.google.com/+RocketChatApp"><i class="icon-gplus"></i><span>Google Plus</span></a>\n\t\t\t<a target="_blank" class="button share github" href="https://github.com/RocketChat/Rocket.Chat"><i class="icon-github-circled"></i><span>GitHub</span></a>\n\t\t\t<a target="_blank" class="button share linkedin" href="https://www.linkedin.com/company/rocket-chat"><i class="icon-linkedin"></i><span>LinkedIn</span></a>\n\t\t</nav>\n\t'));
}));                                                                                                                  // 16
                                                                                                                      // 17
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"footer.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-login/client/login/footer.js                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/*globals defaultUserLanguage */Template.loginFooter.helpers({                                                        // 1
	LanguageVersion: function () {                                                                                       // 3
		if (Template.instance().languageVersion.get()) {                                                                    // 4
			return TAPi18n.__('Language_Version', {                                                                            // 5
				lng: Template.instance().languageVersion.get()                                                                    // 6
			});                                                                                                                // 5
		}                                                                                                                   // 8
	}                                                                                                                    // 9
});                                                                                                                   // 2
Template.loginFooter.events({                                                                                         // 12
	'click button.switch-language': function (e, t) {                                                                    // 13
		var userLanguage = t.languageVersion.get();                                                                         // 14
		localStorage.setItem('userLanguage', userLanguage);                                                                 // 15
		TAPi18n.setLanguage(userLanguage);                                                                                  // 16
		moment.locale(userLanguage);                                                                                        // 17
		return t.languageVersion.set(userLanguage !== defaultUserLanguage() ? defaultUserLanguage() : 'en');                // 18
	}                                                                                                                    // 19
});                                                                                                                   // 12
Template.loginFooter.onCreated(function () {                                                                          // 22
	var self = this;                                                                                                     // 23
	this.languageVersion = new ReactiveVar();                                                                            // 24
	var userLanguage = localStorage.getItem('userLanguage');                                                             // 25
                                                                                                                      //
	if (userLanguage !== defaultUserLanguage()) {                                                                        // 26
		return TAPi18n._loadLanguage(defaultUserLanguage()).done(function () {                                              // 27
			return self.languageVersion.set(defaultUserLanguage());                                                            // 28
		});                                                                                                                 // 29
	} else if (userLanguage.indexOf('en') !== 0) {                                                                       // 30
		return TAPi18n._loadLanguage('en').done(function () {                                                               // 31
			return self.languageVersion.set('en');                                                                             // 32
		});                                                                                                                 // 33
	}                                                                                                                    // 34
});                                                                                                                   // 35
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"form.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-login/client/login/form.js                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var toastr = void 0;                                                                                                  // 1
module.watch(require("toastr"), {                                                                                     // 1
    "default": function (v) {                                                                                         // 1
        toastr = v;                                                                                                   // 1
    }                                                                                                                 // 1
}, 0);                                                                                                                // 1
Template.loginForm.helpers({                                                                                          // 4
    userName: function () {                                                                                           // 5
        var user = Meteor.user();                                                                                     // 6
        return user && user.username;                                                                                 // 7
    },                                                                                                                // 8
    namePlaceholder: function () {                                                                                    // 9
        if (RocketChat.settings.get('Accounts_RequireNameForSignUp')) {                                               // 10
            return t('Name');                                                                                         // 11
        } else {                                                                                                      // 12
            return t('Name_optional');                                                                                // 13
        }                                                                                                             // 14
    },                                                                                                                // 15
    showFormLogin: function () {                                                                                      // 16
        return RocketChat.settings.get('Accounts_ShowFormLogin');                                                     // 17
    },                                                                                                                // 18
    state: function () {                                                                                              // 19
        for (var _len = arguments.length, state = Array(_len), _key = 0; _key < _len; _key++) {                       // 19
            state[_key] = arguments[_key];                                                                            // 19
        }                                                                                                             // 19
                                                                                                                      //
        return state.indexOf(Template.instance().state.get()) > -1;                                                   // 20
    },                                                                                                                // 21
    btnLoginSave: function () {                                                                                       // 22
        console.log("#### btnLoginSave");                                                                             // 23
                                                                                                                      //
        if (Template.instance().loading.get()) {                                                                      // 24
            return t('Please_wait') + "...";                                                                          // 25
        }                                                                                                             // 26
                                                                                                                      //
        switch (Template.instance().state.get()) {                                                                    // 27
            case 'register':                                                                                          // 28
                return t('Register');                                                                                 // 29
                                                                                                                      //
            case 'login':                                                                                             // 30
                return t('Login');                                                                                    // 31
                                                                                                                      //
            case 'email-verification':                                                                                // 32
                return t('Send_confirmation_email');                                                                  // 33
                                                                                                                      //
            case 'forgot-password':                                                                                   // 34
                return t('Reset_password');                                                                           // 35
        }                                                                                                             // 27
    },                                                                                                                // 37
    loginTerms: function () {                                                                                         // 38
        return RocketChat.settings.get('Layout_Login_Terms');                                                         // 39
    },                                                                                                                // 40
    registrationAllowed: function () {                                                                                // 41
        var validSecretUrl = Template.instance().validSecretURL;                                                      // 42
        return RocketChat.settings.get('Accounts_RegistrationForm') === 'Public' || validSecretUrl && validSecretUrl.get();
    },                                                                                                                // 44
    linkReplacementText: function () {                                                                                // 45
        return RocketChat.settings.get('Accounts_RegistrationForm_LinkReplacementText');                              // 46
    },                                                                                                                // 47
    passwordResetAllowed: function () {                                                                               // 48
        return RocketChat.settings.get('Accounts_PasswordReset');                                                     // 49
    },                                                                                                                // 50
    requirePasswordConfirmation: function () {                                                                        // 51
        return RocketChat.settings.get('Accounts_RequirePasswordConfirmation');                                       // 52
    },                                                                                                                // 53
    emailOrUsernamePlaceholder: function () {                                                                         // 54
        return RocketChat.settings.get('Accounts_EmailOrUsernamePlaceholder') || t('Email_or_username');              // 55
    },                                                                                                                // 56
    passwordPlaceholder: function () {                                                                                // 57
        return RocketChat.settings.get('Accounts_PasswordPlaceholder') || t('Password');                              // 58
    },                                                                                                                // 59
    hasOnePassword: function () {                                                                                     // 60
        return typeof OnePassword !== 'undefined' && OnePassword.findLoginForUrl && typeof device !== 'undefined' && device.platform && device.platform.toLocaleLowerCase() === 'ios';
    }                                                                                                                 // 62
});                                                                                                                   // 4
Template.loginForm.events({                                                                                           // 65
    'submit #login-card': function (event, instance) {                                                                // 66
        event.preventDefault();                                                                                       // 67
        $(event.target).find('button.login').focus();                                                                 // 68
        instance.loading.set(true);                                                                                   // 69
        var formData = instance.validate();                                                                           // 70
        var state = instance.state.get();                                                                             // 71
                                                                                                                      //
        if (formData) {                                                                                               // 72
            if (state === 'email-verification') {                                                                     // 73
                Meteor.call('sendConfirmationEmail', s.trim(formData.email), function () {                            // 74
                    instance.loading.set(false);                                                                      // 75
                    RocketChat.callbacks.run('userConfirmationEmailRequested');                                       // 76
                    toastr.success(t('We_have_sent_registration_email'));                                             // 77
                    return instance.state.set('login');                                                               // 78
                });                                                                                                   // 79
                return;                                                                                               // 80
            }                                                                                                         // 81
                                                                                                                      //
            if (state === 'forgot-password') {                                                                        // 82
                Meteor.call('sendForgotPasswordEmail', s.trim(formData.email), function (err) {                       // 83
                    if (err) {                                                                                        // 84
                        handleError(err);                                                                             // 85
                        return instance.state.set('login');                                                           // 86
                    } else {                                                                                          // 87
                        instance.loading.set(false);                                                                  // 88
                        RocketChat.callbacks.run('userForgotPasswordEmailRequested');                                 // 89
                        toastr.success(t('If_this_email_is_registered'));                                             // 90
                        return instance.state.set('login');                                                           // 91
                    }                                                                                                 // 92
                });                                                                                                   // 93
                return;                                                                                               // 94
            }                                                                                                         // 95
                                                                                                                      //
            if (state === 'register') {                                                                               // 96
                formData.secretURL = FlowRouter.getParam('hash');                                                     // 97
                return Meteor.call('registerUser', formData, function (error) {                                       // 98
                    instance.loading.set(false);                                                                      // 99
                                                                                                                      //
                    if (error != null) {                                                                              // 100
                        if (error.reason === 'Email already exists.') {                                               // 101
                            toastr.error(t('Email_already_exists'));                                                  // 102
                        } else {                                                                                      // 103
                            handleError(error);                                                                       // 104
                        }                                                                                             // 105
                                                                                                                      //
                        return;                                                                                       // 106
                    }                                                                                                 // 107
                                                                                                                      //
                    RocketChat.callbacks.run('userRegistered');                                                       // 108
                    return Meteor.loginWithPassword(s.trim(formData.email), formData.pass, function (error) {         // 109
                        if (error && error.error === 'error-invalid-email') {                                         // 110
                            toastr.success(t('We_have_sent_registration_email'));                                     // 111
                            return instance.state.set('login');                                                       // 112
                        } else if (error && error.error === 'error-user-is-not-activated') {                          // 113
                            return instance.state.set('wait-activation');                                             // 114
                        } else {                                                                                      // 115
                            Session.set('forceLogin', false);                                                         // 116
                        }                                                                                             // 117
                    });                                                                                               // 118
                });                                                                                                   // 119
            } else {                                                                                                  // 120
                var loginMethod = 'loginWithPassword';                                                                // 121
                                                                                                                      //
                if (RocketChat.settings.get('LDAP_Enable')) {                                                         // 122
                    loginMethod = 'loginWithLDAP';                                                                    // 123
                }                                                                                                     // 124
                                                                                                                      //
                if (RocketChat.settings.get('CROWD_Enable')) {                                                        // 125
                    loginMethod = 'loginWithCrowd';                                                                   // 126
                }                                                                                                     // 127
                                                                                                                      //
                return Meteor[loginMethod](s.trim(formData.emailOrUsername), formData.pass, function (error) {        // 128
                    var user = Meteor.user();                                                                         // 129
                    instance.loading.set(false);                                                                      // 130
                                                                                                                      //
                    if (error != null) {                                                                              // 131
                        if (error.error === 'no-valid-email') {                                                       // 132
                            instance.state.set('email-verification');                                                 // 133
                        } else {                                                                                      // 134
                            toastr.error(t('User_not_found_or_incorrect_password'));                                  // 135
                        }                                                                                             // 136
                                                                                                                      //
                        return;                                                                                       // 137
                    }                                                                                                 // 138
                                                                                                                      //
                    Session.set('forceLogin', false);                                                                 // 139
                                                                                                                      //
                    if (user && user.language) {                                                                      // 140
                        localStorage.setItem('userLanguage', user.language);                                          // 141
                        return setLanguage(Meteor.user().language);                                                   // 142
                    }                                                                                                 // 143
                });                                                                                                   // 144
            }                                                                                                         // 145
        }                                                                                                             // 146
    },                                                                                                                // 147
    'click .register': function () {                                                                                  // 148
        Template.instance().state.set('register');                                                                    // 149
        return RocketChat.callbacks.run('loginPageStateChange', Template.instance().state.get());                     // 150
    },                                                                                                                // 151
    'click .back-to-login': function () {                                                                             // 152
        Template.instance().state.set('login');                                                                       // 153
        return RocketChat.callbacks.run('loginPageStateChange', Template.instance().state.get());                     // 154
    },                                                                                                                // 155
    'click .forgot-password': function () {                                                                           // 156
        Template.instance().state.set('forgot-password');                                                             // 157
        return RocketChat.callbacks.run('loginPageStateChange', Template.instance().state.get());                     // 158
    },                                                                                                                // 159
    'click .one-passsword': function () {                                                                             // 160
        if (typeof OnePassword === 'undefined' || OnePassword.findLoginForUrl == null) {                              // 161
            return;                                                                                                   // 162
        }                                                                                                             // 163
                                                                                                                      //
        var succesCallback = function (credentials) {                                                                 // 164
            $('input[name=emailOrUsername]').val(credentials.username);                                               // 165
            return $('input[name=pass]').val(credentials.password);                                                   // 166
        };                                                                                                            // 167
                                                                                                                      //
        var errorCallback = function () {                                                                             // 168
            return console.log('OnePassword errorCallback', arguments);                                               // 169
        };                                                                                                            // 170
                                                                                                                      //
        return OnePassword.findLoginForUrl(succesCallback, errorCallback, Meteor.absoluteUrl());                      // 171
    }                                                                                                                 // 172
});                                                                                                                   // 65
Template.loginForm.onCreated(function () {                                                                            // 175
    var _this = this;                                                                                                 // 175
                                                                                                                      //
    var instance = this;                                                                                              // 176
    this.customFields = new ReactiveVar();                                                                            // 177
    this.loading = new ReactiveVar(false);                                                                            // 178
    Tracker.autorun(function () {                                                                                     // 179
        var Accounts_CustomFields = RocketChat.settings.get('Accounts_CustomFields');                                 // 180
                                                                                                                      //
        if (typeof Accounts_CustomFields === 'string' && Accounts_CustomFields.trim() !== '') {                       // 181
            try {                                                                                                     // 182
                return _this.customFields.set(JSON.parse(RocketChat.settings.get('Accounts_CustomFields')));          // 183
            } catch (error1) {                                                                                        // 184
                return console.error('Invalid JSON for Accounts_CustomFields');                                       // 185
            }                                                                                                         // 186
        } else {                                                                                                      // 187
            return _this.customFields.set(null);                                                                      // 188
        }                                                                                                             // 189
    });                                                                                                               // 190
                                                                                                                      //
    if (Meteor.settings['public'].sandstorm) {                                                                        // 191
        this.state = new ReactiveVar('sandstorm');                                                                    // 192
    } else if (Session.get('loginDefaultState')) {                                                                    // 193
        this.state = new ReactiveVar(Session.get('loginDefaultState'));                                               // 194
    } else {                                                                                                          // 195
        this.state = new ReactiveVar('login');                                                                        // 196
    }                                                                                                                 // 197
                                                                                                                      //
    this.validSecretURL = new ReactiveVar(false);                                                                     // 198
                                                                                                                      //
    var validateCustomFields = function (formObj, validationObj) {                                                    // 199
        var customFields = instance.customFields.get();                                                               // 200
                                                                                                                      //
        if (!customFields) {                                                                                          // 201
            return;                                                                                                   // 202
        }                                                                                                             // 203
                                                                                                                      //
        for (var field in meteorBabelHelpers.sanitizeForInObject(formObj)) {                                          // 205
            if (formObj.hasOwnProperty(field)) {                                                                      // 206
                var value = formObj[field];                                                                           // 207
                                                                                                                      //
                if (customFields[field] == null) {                                                                    // 208
                    continue;                                                                                         // 209
                }                                                                                                     // 210
                                                                                                                      //
                var customField = customFields[field];                                                                // 211
                                                                                                                      //
                if (customField.required === true && !value) {                                                        // 212
                    return validationObj[field] = t('Field_required');                                                // 213
                }                                                                                                     // 214
                                                                                                                      //
                if (customField.maxLength != null && value.length > customField.maxLength) {                          // 215
                    return validationObj[field] = t('Max_length_is', customField.maxLength);                          // 216
                }                                                                                                     // 217
                                                                                                                      //
                if (customField.minLength != null && value.length < customField.minLength) {                          // 218
                    return validationObj[field] = t('Min_length_is', customField.minLength);                          // 219
                }                                                                                                     // 220
            }                                                                                                         // 221
        }                                                                                                             // 222
    };                                                                                                                // 223
                                                                                                                      //
    this.validate = function () {                                                                                     // 224
        var formData = $('#login-card').serializeArray();                                                             // 225
        var formObj = {};                                                                                             // 226
        var validationObj = {};                                                                                       // 227
        formData.forEach(function (field) {                                                                           // 228
            formObj[field.name] = field.value;                                                                        // 229
        });                                                                                                           // 230
        var state = instance.state.get();                                                                             // 231
                                                                                                                      //
        if (state !== 'login') {                                                                                      // 232
            if (!(formObj['email'] && /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+\b/i.test(formObj['email']))) {            // 233
                validationObj['email'] = t('Invalid_email');                                                          // 234
            }                                                                                                         // 235
        }                                                                                                             // 236
                                                                                                                      //
        if (state === 'login') {                                                                                      // 237
            if (!formObj['emailOrUsername']) {                                                                        // 238
                validationObj['emailOrUsername'] = t('Invalid_email');                                                // 239
            }                                                                                                         // 240
        }                                                                                                             // 241
                                                                                                                      //
        if (state !== 'forgot-password') {                                                                            // 242
            if (!formObj['pass']) {                                                                                   // 243
                validationObj['pass'] = t('Invalid_pass');                                                            // 244
            }                                                                                                         // 245
        }                                                                                                             // 246
                                                                                                                      //
        if (state === 'register') {                                                                                   // 247
            if (RocketChat.settings.get('Accounts_RequireNameForSignUp') && !formObj['name']) {                       // 248
                validationObj['name'] = t('Invalid_name');                                                            // 249
            }                                                                                                         // 250
                                                                                                                      //
            if (RocketChat.settings.get('Accounts_RequirePasswordConfirmation') && formObj['confirm-pass'] !== formObj['pass']) {
                validationObj['confirm-pass'] = t('Invalid_confirm_pass');                                            // 252
            }                                                                                                         // 253
                                                                                                                      //
            validateCustomFields(formObj, validationObj);                                                             // 254
        }                                                                                                             // 255
                                                                                                                      //
        $('#login-card h2').removeClass('error');                                                                     // 256
        $('#login-card input.error, #login-card select.error').removeClass('error');                                  // 257
        $('#login-card .input-error').text('');                                                                       // 258
                                                                                                                      //
        if (!_.isEmpty(validationObj)) {                                                                              // 259
            $('#login-card h2').addClass('error');                                                                    // 260
            Object.keys(validationObj).forEach(function (key) {                                                       // 262
                var value = validationObj[key];                                                                       // 263
                $("#login-card input[name=" + key + "], #login-card select[name=" + key + "]").addClass('error');     // 264
                $("#login-card input[name=" + key + "]~.input-error, #login-card select[name=" + key + "]~.input-error").text(value);
            });                                                                                                       // 266
            instance.loading.set(false);                                                                              // 267
            return false;                                                                                             // 268
        }                                                                                                             // 269
                                                                                                                      //
        return formObj;                                                                                               // 270
    };                                                                                                                // 271
                                                                                                                      //
    if (FlowRouter.getParam('hash')) {                                                                                // 272
        return Meteor.call('checkRegistrationSecretURL', FlowRouter.getParam('hash'), function () {                   // 273
            return _this.validSecretURL.set(true);                                                                    // 274
        });                                                                                                           // 275
    }                                                                                                                 // 276
});                                                                                                                   // 277
Template.loginForm.onRendered(function () {                                                                           // 279
    var _this2 = this;                                                                                                // 279
                                                                                                                      //
    Session.set('loginDefaultState');                                                                                 // 280
    return Tracker.autorun(function () {                                                                              // 281
        RocketChat.callbacks.run('loginPageStateChange', _this2.state.get());                                         // 282
                                                                                                                      //
        switch (_this2.state.get()) {                                                                                 // 283
            case 'login':                                                                                             // 284
            case 'forgot-password':                                                                                   // 285
            case 'email-verification':                                                                                // 286
                return Meteor.defer(function () {                                                                     // 287
                    return $('input[name=email]').select().focus();                                                   // 288
                });                                                                                                   // 289
                                                                                                                      //
            case 'register':                                                                                          // 290
                return Meteor.defer(function () {                                                                     // 291
                    return $('input[name=name]').select().focus();                                                    // 292
                });                                                                                                   // 293
        }                                                                                                             // 283
    });                                                                                                               // 295
});                                                                                                                   // 296
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"header.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-login/client/login/header.js                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.loginHeader.helpers({                                                                                        // 1
	logoUrl: function () {                                                                                               // 2
		var asset = RocketChat.settings.get('Assets_logo');                                                                 // 3
		var prefix = __meteor_runtime_config__.ROOT_URL_PATH_PREFIX || '';                                                  // 4
                                                                                                                      //
		if (asset != null) {                                                                                                // 5
			return prefix + "/" + (asset.url || asset.defaultUrl);                                                             // 6
		}                                                                                                                   // 7
	}                                                                                                                    // 8
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"services.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-login/client/login/services.js                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var toastr = void 0;                                                                                                  // 1
module.watch(require("toastr"), {                                                                                     // 1
	"default": function (v) {                                                                                            // 1
		toastr = v;                                                                                                         // 1
	}                                                                                                                    // 1
}, 0);                                                                                                                // 1
Meteor.startup(function () {                                                                                          // 4
	return ServiceConfiguration.configurations.find({                                                                    // 5
		custom: true                                                                                                        // 6
	}).observe({                                                                                                         // 5
		added: function (record) {                                                                                          // 8
			return new CustomOAuth(record.service, {                                                                           // 9
				serverURL: record.serverURL,                                                                                      // 10
				authorizePath: record.authorizePath,                                                                              // 11
				scope: record.scope                                                                                               // 12
			});                                                                                                                // 9
		}                                                                                                                   // 14
	});                                                                                                                  // 7
});                                                                                                                   // 16
Template.loginServices.helpers({                                                                                      // 18
	loginService: function () {                                                                                          // 19
		var services = [];                                                                                                  // 20
		var authServices = ServiceConfiguration.configurations.find({}, {                                                   // 21
			sort: {                                                                                                            // 22
				service: 1                                                                                                        // 23
			}                                                                                                                  // 22
		}).fetch();                                                                                                         // 21
		authServices.forEach(function (service) {                                                                           // 26
			var icon = void 0;                                                                                                 // 27
			var serviceName = void 0;                                                                                          // 28
                                                                                                                      //
			switch (service.service) {                                                                                         // 29
				case 'meteor-developer':                                                                                          // 30
					serviceName = 'Meteor';                                                                                          // 31
					icon = 'meteor';                                                                                                 // 32
					break;                                                                                                           // 33
                                                                                                                      //
				case 'github':                                                                                                    // 34
					serviceName = 'GitHub';                                                                                          // 35
					icon = 'github-circled';                                                                                         // 36
					break;                                                                                                           // 37
                                                                                                                      //
				case 'gitlab':                                                                                                    // 38
					serviceName = 'GitLab';                                                                                          // 39
					icon = service.service;                                                                                          // 40
					break;                                                                                                           // 41
                                                                                                                      //
				case 'wordpress':                                                                                                 // 42
					serviceName = 'WordPress';                                                                                       // 43
					icon = service.service;                                                                                          // 44
					break;                                                                                                           // 45
                                                                                                                      //
				default:                                                                                                          // 46
					serviceName = _.capitalize(service.service);                                                                     // 47
					icon = service.service;                                                                                          // 48
			}                                                                                                                  // 29
                                                                                                                      //
			return services.push({                                                                                             // 50
				service: service,                                                                                                 // 51
				displayName: serviceName,                                                                                         // 52
				icon: icon                                                                                                        // 53
			});                                                                                                                // 50
		});                                                                                                                 // 55
		return services;                                                                                                    // 56
	}                                                                                                                    // 57
});                                                                                                                   // 18
var longinMethods = {                                                                                                 // 60
	'meteor-developer': 'MeteorDeveloperAccount',                                                                        // 61
	'linkedin': 'LinkedIn'                                                                                               // 62
};                                                                                                                    // 60
Template.loginServices.events({                                                                                       // 65
	'click .external-login': function (e) {                                                                              // 66
		if (this.service == null || this.service.service == null) {                                                         // 67
			return;                                                                                                            // 68
		}                                                                                                                   // 69
                                                                                                                      //
		var loadingIcon = $(e.currentTarget).find('.loading-icon');                                                         // 70
		var serviceIcon = $(e.currentTarget).find('.service-icon');                                                         // 71
		loadingIcon.removeClass('hidden');                                                                                  // 72
		serviceIcon.addClass('hidden');                                                                                     // 73
                                                                                                                      //
		if (Meteor.isCordova && this.service.service === 'facebook') {                                                      // 74
			return Meteor.loginWithFacebookCordova({}, function (error) {                                                      // 75
				loadingIcon.addClass('hidden');                                                                                   // 76
				serviceIcon.removeClass('hidden');                                                                                // 77
                                                                                                                      //
				if (error) {                                                                                                      // 78
					console.log(JSON.stringify(error));                                                                              // 79
                                                                                                                      //
					if (error.reason) {                                                                                              // 80
						toastr.error(error.reason);                                                                                     // 81
					} else {                                                                                                         // 82
						toastr.error(error.message);                                                                                    // 83
					}                                                                                                                // 84
				}                                                                                                                 // 85
			});                                                                                                                // 86
		} else {                                                                                                            // 87
			var loginWithService = "loginWith" + (longinMethods[this.service.service] || _.capitalize(this.service.service));  // 88
                                                                                                                      //
			var serviceConfig = this.service.clientConfig || {};                                                               // 89
			return Meteor[loginWithService](serviceConfig, function (error) {                                                  // 90
				loadingIcon.addClass('hidden');                                                                                   // 91
				serviceIcon.removeClass('hidden');                                                                                // 92
                                                                                                                      //
				if (error) {                                                                                                      // 93
					console.log(JSON.stringify(error));                                                                              // 94
                                                                                                                      //
					if (error.reason) {                                                                                              // 95
						toastr.error(error.reason);                                                                                     // 96
					} else {                                                                                                         // 97
						toastr.error(error.message);                                                                                    // 98
					}                                                                                                                // 99
				}                                                                                                                 // 100
			});                                                                                                                // 101
		}                                                                                                                   // 102
	}                                                                                                                    // 103
});                                                                                                                   // 65
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"social.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-login/client/login/social.js                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"username":{"template.layout.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-login/client/username/template.layout.js                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("usernameLayout");                                                                               // 2
Template["usernameLayout"] = new Template("Template.usernameLayout", (function() {                                    // 3
  var view = this;                                                                                                    // 4
  return HTML.SECTION({                                                                                               // 5
    class: "full-page color-tertiary-font-color"                                                                      // 6
  }, "\n\t\t", HTML.DIV({                                                                                             // 7
    class: "wrapper"                                                                                                  // 8
  }, "\n\t\t\t", Blaze._TemplateWith(function() {                                                                     // 9
    return {                                                                                                          // 10
      template: Spacebars.call(view.lookup("render"))                                                                 // 11
    };                                                                                                                // 12
  }, function() {                                                                                                     // 13
    return Spacebars.include(function() {                                                                             // 14
      return Spacebars.call(Template.__dynamic);                                                                      // 15
    });                                                                                                               // 16
  }), "\n\t\t"), "\n\t");                                                                                             // 17
}));                                                                                                                  // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.username.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-login/client/username/template.username.js                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("username");                                                                                     // 2
Template["username"] = new Template("Template.username", (function() {                                                // 3
  var view = this;                                                                                                    // 4
  return HTML.SECTION({                                                                                               // 5
    class: "full-page color-tertiary-font-color"                                                                      // 6
  }, "\n\t\t", HTML.DIV({                                                                                             // 7
    class: "wrapper"                                                                                                  // 8
  }, "\n\t\t\t", HTML.FORM({                                                                                          // 9
    id: "login-card",                                                                                                 // 10
    class: "content-background-color color-primary-font-color",                                                       // 11
    method: "/"                                                                                                       // 12
  }, "\n\t\t\t\t", HTML.HEADER("\n\t\t\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                            // 13
    return Spacebars.mustache(view.lookup("_"), "Username_title");                                                    // 14
  })), "\n\t\t\t\t\t", HTML.P(Blaze.View("lookup:_", function() {                                                     // 15
    return Spacebars.mustache(view.lookup("_"), "Username_description");                                              // 16
  })), "\n\t\t\t\t"), "\n\t\t\t\t", Blaze.If(function() {                                                             // 17
    return Spacebars.call(Spacebars.dot(view.lookup("username"), "error"));                                           // 18
  }, function() {                                                                                                     // 19
    return [ "\n\t\t\t\t\t", HTML.DIV({                                                                               // 20
      class: "alert error-color error-background error-border"                                                        // 21
    }, "\n\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                          // 22
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "error-field-unavailable", Spacebars.kw({         // 23
        field: Spacebars.dot(view.lookup("username"), "username")                                                     // 24
      })));                                                                                                           // 25
    }), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                              // 26
  }), "\n\t\t\t\t", Blaze.If(function() {                                                                             // 27
    return Spacebars.call(Spacebars.dot(view.lookup("username"), "invalid"));                                         // 28
  }, function() {                                                                                                     // 29
    return [ "\n\t\t\t\t\t", HTML.DIV({                                                                               // 30
      class: "alert error-color error-background error-border"                                                        // 31
    }, "\n\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                          // 32
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Username_invalid", Spacebars.dot(view.lookup("username"), "username")));
    }), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                              // 34
  }), "\n\t\t\t\t", Blaze.If(function() {                                                                             // 35
    return Spacebars.call(Spacebars.dot(view.lookup("username"), "empty"));                                           // 36
  }, function() {                                                                                                     // 37
    return [ "\n\t\t\t\t\t", HTML.DIV({                                                                               // 38
      class: "alert error-color error-background error-border"                                                        // 39
    }, "\n\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                          // 40
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Username_cant_be_empty"));                       // 41
    }), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                              // 42
  }), "\n\t\t\t\t", HTML.DIV({                                                                                        // 43
    class: "fields"                                                                                                   // 44
  }, "\n\t\t\t\t\t", HTML.DIV({                                                                                       // 45
    class: "input-text active"                                                                                        // 46
  }, "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                          // 47
    return Spacebars.call(Spacebars.dot(view.lookup("username"), "ready"));                                           // 48
  }, function() {                                                                                                     // 49
    return [ "\n\t\t\t\t\t\t\t", HTML.SPAN("\n\t\t\t\t\t\t\t\t", HTML.LABEL({                                         // 50
      for: "username"                                                                                                 // 51
    }, Blaze.View("lookup:_", function() {                                                                            // 52
      return Spacebars.mustache(view.lookup("_"), "Username");                                                        // 53
    })), "\n\t\t\t\t\t\t\t\t", HTML.INPUT({                                                                           // 54
      type: "text",                                                                                                   // 55
      name: "username",                                                                                               // 56
      id: "username",                                                                                                 // 57
      value: function() {                                                                                             // 58
        return Spacebars.mustache(Spacebars.dot(view.lookup("username"), "username"));                                // 59
      },                                                                                                              // 60
      dir: "auto"                                                                                                     // 61
    }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.I(), "\n\t\t\t\t\t\t" ];                                        // 62
  }, function() {                                                                                                     // 63
    return [ "\n\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                  // 64
      return Spacebars.mustache(view.lookup("_"), "Loading_suggestion");                                              // 65
    }), "\n\t\t\t\t\t\t" ];                                                                                           // 66
  }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\n\t\t\t\t", Blaze.If(function() {                                           // 67
    return Spacebars.call(Spacebars.dot(view.lookup("username"), "ready"));                                           // 68
  }, function() {                                                                                                     // 69
    return [ "\n\t\t\t\t\t", HTML.DIV({                                                                               // 70
      class: "submit"                                                                                                 // 71
    }, "\n\t\t\t\t\t\t", HTML.BUTTON({                                                                                // 72
      "data-loading-text": function() {                                                                               // 73
        return [ Spacebars.mustache(view.lookup("_"), "Please_wait"), "..." ];                                        // 74
      },                                                                                                              // 75
      class: "button primary login"                                                                                   // 76
    }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                  // 77
      return Spacebars.mustache(view.lookup("_"), "Use_this_username");                                               // 78
    }))), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                            // 79
  }), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                                                // 80
}));                                                                                                                  // 81
                                                                                                                      // 82
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"username.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-login/client/username/username.js                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.username.onCreated(function () {                                                                             // 1
	var self = this;                                                                                                     // 2
	self.username = new ReactiveVar();                                                                                   // 3
	return Meteor.call('getUsernameSuggestion', function (error, username) {                                             // 5
		self.username.set({                                                                                                 // 6
			ready: true,                                                                                                       // 7
			username: username                                                                                                 // 8
		});                                                                                                                 // 6
		return Meteor.defer(function () {                                                                                   // 10
			return self.find('input').focus();                                                                                 // 10
		});                                                                                                                 // 10
	});                                                                                                                  // 11
});                                                                                                                   // 12
Template.username.helpers({                                                                                           // 14
	username: function () {                                                                                              // 15
		return Template.instance().username.get();                                                                          // 16
	}                                                                                                                    // 17
});                                                                                                                   // 14
Template.username.events({                                                                                            // 20
	'focus .input-text input': function (event) {                                                                        // 21
		return $(event.currentTarget).parents('.input-text').addClass('focus');                                             // 22
	},                                                                                                                   // 23
	'blur .input-text input': function (event) {                                                                         // 25
		if (event.currentTarget.value === '') {                                                                             // 26
			return $(event.currentTarget).parents('.input-text').removeClass('focus');                                         // 27
		}                                                                                                                   // 28
	},                                                                                                                   // 29
	'submit #login-card': function (event, instance) {                                                                   // 31
		event.preventDefault();                                                                                             // 32
		var username = instance.username.get();                                                                             // 34
		username.empty = false;                                                                                             // 35
		username.error = false;                                                                                             // 36
		username.invalid = false;                                                                                           // 37
		instance.username.set(username);                                                                                    // 38
		var button = $(event.target).find('button.login');                                                                  // 40
		RocketChat.Button.loading(button);                                                                                  // 41
		var value = $('#username').val().trim();                                                                            // 43
                                                                                                                      //
		if (value === '') {                                                                                                 // 44
			username.empty = true;                                                                                             // 45
			instance.username.set(username);                                                                                   // 46
			RocketChat.Button.reset(button);                                                                                   // 47
			return;                                                                                                            // 48
		}                                                                                                                   // 49
                                                                                                                      //
		return Meteor.call('setUsername', value, function (err) {                                                           // 51
			if (err != null) {                                                                                                 // 52
				console.log(err);                                                                                                 // 53
                                                                                                                      //
				if (err.error === 'username-invalid') {                                                                           // 54
					username.invalid = true;                                                                                         // 55
				} else {                                                                                                          // 56
					username.error = true;                                                                                           // 57
				}                                                                                                                 // 58
                                                                                                                      //
				username.username = value;                                                                                        // 59
			}                                                                                                                  // 60
                                                                                                                      //
			RocketChat.Button.reset(button);                                                                                   // 62
			instance.username.set(username);                                                                                   // 63
			return RocketChat.callbacks.run('usernameSet');                                                                    // 64
		});                                                                                                                 // 65
	}                                                                                                                    // 66
});                                                                                                                   // 20
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html"
  ]
});
require("./node_modules/meteor/rocketchat:ui-login/client/routes.js");
require("./node_modules/meteor/rocketchat:ui-login/client/reset-password/template.resetPassword.js");
require("./node_modules/meteor/rocketchat:ui-login/client/reset-password/resetPassword.js");
require("./node_modules/meteor/rocketchat:ui-login/client/login/template.footer.js");
require("./node_modules/meteor/rocketchat:ui-login/client/login/template.form.js");
require("./node_modules/meteor/rocketchat:ui-login/client/login/template.header.js");
require("./node_modules/meteor/rocketchat:ui-login/client/login/template.layout.js");
require("./node_modules/meteor/rocketchat:ui-login/client/login/layout.js");
require("./node_modules/meteor/rocketchat:ui-login/client/login/template.services.js");
require("./node_modules/meteor/rocketchat:ui-login/client/login/template.social.js");
require("./node_modules/meteor/rocketchat:ui-login/client/username/template.layout.js");
require("./node_modules/meteor/rocketchat:ui-login/client/username/template.username.js");
require("./node_modules/meteor/rocketchat:ui-login/client/login/footer.js");
require("./node_modules/meteor/rocketchat:ui-login/client/login/form.js");
require("./node_modules/meteor/rocketchat:ui-login/client/login/header.js");
require("./node_modules/meteor/rocketchat:ui-login/client/login/services.js");
require("./node_modules/meteor/rocketchat:ui-login/client/login/social.js");
require("./node_modules/meteor/rocketchat:ui-login/client/username/username.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:ui-login'] = {};

})();
