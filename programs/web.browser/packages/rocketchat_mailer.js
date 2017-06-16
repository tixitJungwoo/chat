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
var FlowRouter = Package['kadira:flow-router'].FlowRouter;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var Template = Package['templating-runtime'].Template;
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

/* Package-scope variables */
var Mailer;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:mailer":{"lib":{"Mailer.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/rocketchat_mailer/lib/Mailer.js                                                                      //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Mailer = {}; //eslint-disable-line                                                                               // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"client":{"startup.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/rocketchat_mailer/client/startup.js                                                                  //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
RocketChat.AdminBox.addOption({                                                                                  // 1
	href: 'mailer',                                                                                                 // 2
	i18nLabel: 'Mailer',                                                                                            // 3
	permissionGranted: function () {                                                                                // 4
		return RocketChat.authz.hasAllPermission('access-mailer');                                                     // 5
	}                                                                                                               // 6
});                                                                                                              // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"router.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/rocketchat_mailer/client/router.js                                                                   //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
FlowRouter.route('/mailer', {                                                                                    // 1
	name: 'mailer',                                                                                                 // 2
	action: function () {                                                                                           // 3
		return BlazeLayout.render('main', {                                                                            // 4
			center: 'mailer'                                                                                              // 5
		});                                                                                                            // 4
	}                                                                                                               // 7
});                                                                                                              // 1
FlowRouter.route('/mailer/unsubscribe/:_id/:createdAt', {                                                        // 10
	name: 'mailer-unsubscribe',                                                                                     // 11
	action: function (params) {                                                                                     // 12
		Meteor.call('Mailer:unsubscribe', params._id, params.createdAt);                                               // 13
		return BlazeLayout.render('mailerUnsubscribe');                                                                // 14
	}                                                                                                               // 15
});                                                                                                              // 10
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"views":{"template.mailer.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/rocketchat_mailer/client/views/template.mailer.js                                                    //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("mailer");                                                                                  // 2
Template["mailer"] = new Template("Template.mailer", (function() {                                               // 3
  var view = this;                                                                                               // 4
  return HTML.SECTION({                                                                                          // 5
    class: "page-container page-list"                                                                            // 6
  }, "\n\t\t", HTML.HEADER({                                                                                     // 7
    class: "fixed-title border-component-color"                                                                  // 8
  }, "\n\t\t\t", Spacebars.include(view.lookupTemplate("burger")), "\n\t\t\t", HTML.H2("\n\t\t\t\t", HTML.SPAN({
    class: "room-title"                                                                                          // 10
  }, Blaze.View("lookup:_", function() {                                                                         // 11
    return Spacebars.mustache(view.lookup("_"), "Mailer");                                                       // 12
  })), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.DIV({                                                              // 13
    class: "content"                                                                                             // 14
  }, "\n\t\t\t", Blaze.Unless(function() {                                                                       // 15
    return Spacebars.dataMustache(view.lookup("hasPermission"), "access-mailer");                                // 16
  }, function() {                                                                                                // 17
    return [ "\n\t\t\t\t", HTML.P(Blaze.View("lookup:_", function() {                                            // 18
      return Spacebars.mustache(view.lookup("_"), "You_are_not_authorized_to_view_this_page");                   // 19
    })), "\n\t\t\t" ];                                                                                           // 20
  }, function() {                                                                                                // 21
    return [ "\n\t\t\t\t", HTML.FORM("\n\t\t\t\t\t", HTML.DIV({                                                  // 22
      class: "rocket-form"                                                                                       // 23
    }, "\n\t\t\t\t\t\t", HTML.FIELDSET("\n\t\t\t\t\t\t\t", HTML.DIV({                                            // 24
      class: "input-line"                                                                                        // 25
    }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                      // 26
      return Spacebars.mustache(view.lookup("_"), "Email_from");                                                 // 27
    })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                     // 28
      type: "text",                                                                                              // 29
      name: "from",                                                                                              // 30
      value: "",                                                                                                 // 31
      placeholder: function() {                                                                                  // 32
        return Spacebars.mustache(view.lookup("fromEmail"));                                                     // 33
      }                                                                                                          // 34
    }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.SMALL({               // 35
      class: "settings-description secondary-font-color"                                                         // 36
    }, Blaze.View("lookup:_", function() {                                                                       // 37
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "From_email_warning"));                      // 38
    })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({                              // 39
      class: "input-line"                                                                                        // 40
    }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                      // 41
      return Spacebars.mustache(view.lookup("_"), "Dry_run");                                                    // 42
    })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                     // 43
      type: "checkbox",                                                                                          // 44
      name: "dryrun",                                                                                            // 45
      value: "1"                                                                                                 // 46
    }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.SMALL({               // 47
      class: "settings-description secondary-font-color"                                                         // 48
    }, Blaze.View("lookup:_", function() {                                                                       // 49
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Dry_run_description"));                     // 50
    })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({                              // 51
      class: "input-line"                                                                                        // 52
    }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                      // 53
      return Spacebars.mustache(view.lookup("_"), "Query");                                                      // 54
    })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                     // 55
      type: "text",                                                                                              // 56
      name: "query",                                                                                             // 57
      value: ""                                                                                                  // 58
    }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.SMALL({               // 59
      class: "settings-description secondary-font-color"                                                         // 60
    }, Blaze.View("lookup:_", function() {                                                                       // 61
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Query_description"));                       // 62
    })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({                              // 63
      class: "input-line"                                                                                        // 64
    }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                      // 65
      return Spacebars.mustache(view.lookup("_"), "Email_subject");                                              // 66
    })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                     // 67
      type: "text",                                                                                              // 68
      name: "subject",                                                                                           // 69
      value: ""                                                                                                  // 70
    }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({                               // 71
      class: "input-line"                                                                                        // 72
    }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                      // 73
      return Spacebars.mustache(view.lookup("_"), "Email_body");                                                 // 74
    })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.TEXTAREA({                                  // 75
      name: "body",                                                                                              // 76
      rows: "10",                                                                                                // 77
      style: "height: auto"                                                                                      // 78
    }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.SMALL({               // 79
      class: "settings-description secondary-font-color"                                                         // 80
    }, Blaze.View("lookup:_", function() {                                                                       // 81
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Mailer_body_tags"));                        // 82
    })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({             // 83
      class: "submit"                                                                                            // 84
    }, "\n\t\t\t\t\t\t\t", HTML.BUTTON({                                                                         // 85
      class: "button primary send"                                                                               // 86
    }, HTML.I({                                                                                                  // 87
      class: "icon-send"                                                                                         // 88
    }), HTML.SPAN(Blaze.View("lookup:_", function() {                                                            // 89
      return Spacebars.mustache(view.lookup("_"), "Send_email");                                                 // 90
    }))), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t" ];                                       // 91
  }), "\n\t\t"), "\n\t");                                                                                        // 92
}));                                                                                                             // 93
                                                                                                                 // 94
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"mailer.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/rocketchat_mailer/client/views/mailer.js                                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var toastr = void 0;                                                                                             // 1
module.watch(require("toastr"), {                                                                                // 1
	"default": function (v) {                                                                                       // 1
		toastr = v;                                                                                                    // 1
	}                                                                                                               // 1
}, 0);                                                                                                           // 1
Template.mailer.helpers({                                                                                        // 2
	fromEmail: function () {                                                                                        // 3
		return RocketChat.settings.get('From_Email');                                                                  // 4
	}                                                                                                               // 5
});                                                                                                              // 2
Template.mailer.events({                                                                                         // 8
	'click .send': function (e, t) {                                                                                // 9
		e.preventDefault();                                                                                            // 10
		var from = $(t.find('[name=from]')).val();                                                                     // 11
		var subject = $(t.find('[name=subject]')).val();                                                               // 12
		var body = $(t.find('[name=body]')).val();                                                                     // 13
		var dryrun = $(t.find('[name=dryrun]:checked')).val();                                                         // 14
		var query = $(t.find('[name=query]')).val();                                                                   // 15
                                                                                                                 //
		if (!from) {                                                                                                   // 16
			toastr.error(TAPi18n.__('error-invalid-from-address'));                                                       // 17
			return;                                                                                                       // 18
		}                                                                                                              // 19
                                                                                                                 //
		if (body.indexOf('[unsubscribe]') === -1) {                                                                    // 20
			toastr.error(TAPi18n.__('error-missing-unsubscribe-link'));                                                   // 21
			return;                                                                                                       // 22
		}                                                                                                              // 23
                                                                                                                 //
		return Meteor.call('Mailer.sendMail', from, subject, body, dryrun, query, function (err) {                     // 24
			if (err) {                                                                                                    // 25
				return handleError(err);                                                                                     // 26
			}                                                                                                             // 27
                                                                                                                 //
			return toastr.success(TAPi18n.__('The_emails_are_being_sent'));                                               // 28
		});                                                                                                            // 29
	}                                                                                                               // 30
});                                                                                                              // 8
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.mailerUnsubscribe.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/rocketchat_mailer/client/views/template.mailerUnsubscribe.js                                         //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
                                                                                                                 // 1
Template.__checkName("mailerUnsubscribe");                                                                       // 2
Template["mailerUnsubscribe"] = new Template("Template.mailerUnsubscribe", (function() {                         // 3
  var view = this;                                                                                               // 4
  return HTML.SECTION({                                                                                          // 5
    class: "full-page color-tertiary-font-color"                                                                 // 6
  }, "\n\t\t", HTML.DIV({                                                                                        // 7
    class: "wrapper"                                                                                             // 8
  }, "\n\t\t\t", HTML.Raw('<header>\n\t\t\t\t<a class="logo" href="/">\n\t\t\t\t\t<img src="images/logo/logo.svg?v=3">\n\t\t\t\t</a>\n\t\t\t</header>'), "\n\t\t\t", HTML.DIV({
    class: "cms-page content-background-color"                                                                   // 10
  }, "\n\t\t\t\t", Blaze.View("lookup:_", function() {                                                           // 11
    return Spacebars.mustache(view.lookup("_"), "You_have_successfully_unsubscribed");                           // 12
  }), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                                           // 13
}));                                                                                                             // 14
                                                                                                                 // 15
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"mailerUnsubscribe.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/rocketchat_mailer/client/views/mailerUnsubscribe.js                                                  //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Template.mailerUnsubscribe.onRendered(function () {                                                              // 1
	return $('#initial-page-loading').remove();                                                                     // 2
});                                                                                                              // 3
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html"
  ]
});
require("./node_modules/meteor/rocketchat:mailer/lib/Mailer.js");
require("./node_modules/meteor/rocketchat:mailer/client/startup.js");
require("./node_modules/meteor/rocketchat:mailer/client/router.js");
require("./node_modules/meteor/rocketchat:mailer/client/views/template.mailer.js");
require("./node_modules/meteor/rocketchat:mailer/client/views/mailer.js");
require("./node_modules/meteor/rocketchat:mailer/client/views/template.mailerUnsubscribe.js");
require("./node_modules/meteor/rocketchat:mailer/client/views/mailerUnsubscribe.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['rocketchat:mailer'] = {}, {
  Mailer: Mailer
});

})();
