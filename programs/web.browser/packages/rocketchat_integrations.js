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
var Mongo = Package.mongo.Mongo;
var _ = Package.underscore._;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var Logger = Package['rocketchat:logger'].Logger;
var SystemLogger = Package['rocketchat:logger'].SystemLogger;
var LoggerManager = Package['rocketchat:logger'].LoggerManager;
var FlowRouter = Package['kadira:flow-router'].FlowRouter;
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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:integrations":{"lib":{"rocketchat.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_integrations/lib/rocketchat.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
RocketChat.integrations = {                                                                                            // 1
	outgoingEvents: {                                                                                                     // 2
		sendMessage: {                                                                                                       // 3
			label: 'Integrations_Outgoing_Type_SendMessage',                                                                    // 4
			value: 'sendMessage',                                                                                               // 5
			use: {                                                                                                              // 6
				channel: true,                                                                                                     // 7
				triggerWords: true,                                                                                                // 8
				targetRoom: false                                                                                                  // 9
			}                                                                                                                   // 6
		},                                                                                                                   // 3
		fileUploaded: {                                                                                                      // 12
			label: 'Integrations_Outgoing_Type_FileUploaded',                                                                   // 13
			value: 'fileUploaded',                                                                                              // 14
			use: {                                                                                                              // 15
				channel: true,                                                                                                     // 16
				triggerWords: false,                                                                                               // 17
				targetRoom: false                                                                                                  // 18
			}                                                                                                                   // 15
		},                                                                                                                   // 12
		roomArchived: {                                                                                                      // 21
			label: 'Integrations_Outgoing_Type_RoomArchived',                                                                   // 22
			value: 'roomArchived',                                                                                              // 23
			use: {                                                                                                              // 24
				channel: false,                                                                                                    // 25
				triggerWords: false,                                                                                               // 26
				targetRoom: false                                                                                                  // 27
			}                                                                                                                   // 24
		},                                                                                                                   // 21
		roomCreated: {                                                                                                       // 30
			label: 'Integrations_Outgoing_Type_RoomCreated',                                                                    // 31
			value: 'roomCreated',                                                                                               // 32
			use: {                                                                                                              // 33
				channel: false,                                                                                                    // 34
				triggerWords: false,                                                                                               // 35
				targetRoom: false                                                                                                  // 36
			}                                                                                                                   // 33
		},                                                                                                                   // 30
		roomJoined: {                                                                                                        // 39
			label: 'Integrations_Outgoing_Type_RoomJoined',                                                                     // 40
			value: 'roomJoined',                                                                                                // 41
			use: {                                                                                                              // 42
				channel: true,                                                                                                     // 43
				triggerWords: false,                                                                                               // 44
				targetRoom: false                                                                                                  // 45
			}                                                                                                                   // 42
		},                                                                                                                   // 39
		roomLeft: {                                                                                                          // 48
			label: 'Integrations_Outgoing_Type_RoomLeft',                                                                       // 49
			value: 'roomLeft',                                                                                                  // 50
			use: {                                                                                                              // 51
				channel: true,                                                                                                     // 52
				triggerWords: false,                                                                                               // 53
				targetRoom: false                                                                                                  // 54
			}                                                                                                                   // 51
		},                                                                                                                   // 48
		userCreated: {                                                                                                       // 57
			label: 'Integrations_Outgoing_Type_UserCreated',                                                                    // 58
			value: 'userCreated',                                                                                               // 59
			use: {                                                                                                              // 60
				channel: false,                                                                                                    // 61
				triggerWords: false,                                                                                               // 62
				targetRoom: true                                                                                                   // 63
			}                                                                                                                   // 60
		}                                                                                                                    // 57
	}                                                                                                                     // 2
};                                                                                                                     // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"client":{"collections.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_integrations/client/collections.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
this.ChatIntegrations = new Mongo.Collection('rocketchat_integrations');                                               // 1
this.ChatIntegrationHistory = new Mongo.Collection('rocketchat_integration_history');                                  // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"startup.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_integrations/client/startup.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
RocketChat.AdminBox.addOption({                                                                                        // 1
	href: 'admin-integrations',                                                                                           // 2
	i18nLabel: 'Integrations',                                                                                            // 3
	permissionGranted: function () {                                                                                      // 4
		return RocketChat.authz.hasAtLeastOnePermission(['manage-integrations', 'manage-own-integrations']);                 // 4
	}                                                                                                                     // 4
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"route.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_integrations/client/route.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
FlowRouter.route('/admin/integrations', {                                                                              // 1
	name: 'admin-integrations',                                                                                           // 2
	subscriptions: function () {                                                                                          // 3
		this.register('integrations', Meteor.subscribe('integrations'));                                                     // 4
	},                                                                                                                    // 5
	action: function () {                                                                                                 // 6
		return BlazeLayout.render('main', {                                                                                  // 7
			center: 'integrations',                                                                                             // 8
			pageTitle: t('Integrations')                                                                                        // 9
		});                                                                                                                  // 7
	}                                                                                                                     // 11
});                                                                                                                    // 1
FlowRouter.route('/admin/integrations/new', {                                                                          // 14
	name: 'admin-integrations-new',                                                                                       // 15
	subscriptions: function () {                                                                                          // 16
		this.register('integrations', Meteor.subscribe('integrations'));                                                     // 17
	},                                                                                                                    // 18
	action: function () {                                                                                                 // 19
		return BlazeLayout.render('main', {                                                                                  // 20
			center: 'integrationsNew',                                                                                          // 21
			pageTitle: t('Integration_New')                                                                                     // 22
		});                                                                                                                  // 20
	}                                                                                                                     // 24
});                                                                                                                    // 14
FlowRouter.route('/admin/integrations/incoming/:id?', {                                                                // 27
	name: 'admin-integrations-incoming',                                                                                  // 28
	subscriptions: function () {                                                                                          // 29
		this.register('integrations', Meteor.subscribe('integrations'));                                                     // 30
	},                                                                                                                    // 31
	action: function (params) {                                                                                           // 32
		return BlazeLayout.render('main', {                                                                                  // 33
			center: 'pageSettingsContainer',                                                                                    // 34
			pageTitle: t('Integration_Incoming_WebHook'),                                                                       // 35
			pageTemplate: 'integrationsIncoming',                                                                               // 36
			params: params                                                                                                      // 37
		});                                                                                                                  // 33
	}                                                                                                                     // 39
});                                                                                                                    // 27
FlowRouter.route('/admin/integrations/outgoing/:id?', {                                                                // 42
	name: 'admin-integrations-outgoing',                                                                                  // 43
	action: function (params) {                                                                                           // 44
		return BlazeLayout.render('main', {                                                                                  // 45
			center: 'integrationsOutgoing',                                                                                     // 46
			pageTitle: t('Integration_Outgoing_WebHook'),                                                                       // 47
			params: params                                                                                                      // 48
		});                                                                                                                  // 45
	}                                                                                                                     // 50
});                                                                                                                    // 42
FlowRouter.route('/admin/integrations/outgoing/:id?/history', {                                                        // 53
	name: 'admin-integrations-outgoing-history',                                                                          // 54
	action: function (params) {                                                                                           // 55
		return BlazeLayout.render('main', {                                                                                  // 56
			center: 'integrationsOutgoingHistory',                                                                              // 57
			pageTitle: t('Integration_Outgoing_WebHook_History'),                                                               // 58
			params: params                                                                                                      // 59
		});                                                                                                                  // 56
	}                                                                                                                     // 61
});                                                                                                                    // 53
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"views":{"template.integrations.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_integrations/client/views/template.integrations.js                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("integrations");                                                                                  // 2
Template["integrations"] = new Template("Template.integrations", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return HTML.SECTION({                                                                                                // 5
    class: "page-container page-home page-static page-settings"                                                        // 6
  }, "\n\t\t", HTML.HEADER({                                                                                           // 7
    class: "fixed-title border-component-color"                                                                        // 8
  }, "\n\t\t\t", Spacebars.include(view.lookupTemplate("burger")), "\n\t\t\t", HTML.H2("\n\t\t\t\t", HTML.SPAN({       // 9
    class: "room-title"                                                                                                // 10
  }, Blaze.View("lookup:pageTitle", function() {                                                                       // 11
    return Spacebars.mustache(view.lookup("pageTitle"));                                                               // 12
  })), "\n\t\t\t"), "\n\t\t\t", Blaze.If(function() {                                                                  // 13
    return Spacebars.call(view.lookup("hasPermission"));                                                               // 14
  }, function() {                                                                                                      // 15
    return [ "\n\t\t\t\t", HTML.DIV({                                                                                  // 16
      class: "submit"                                                                                                  // 17
    }, "\n\t\t\t\t\t", HTML.A({                                                                                        // 18
      href: function() {                                                                                               // 19
        return Spacebars.mustache(view.lookup("pathFor"), "admin-integrations-new");                                   // 20
      },                                                                                                               // 21
      class: "button primary new-role"                                                                                 // 22
    }, Blaze.View("lookup:_", function() {                                                                             // 23
      return Spacebars.mustache(view.lookup("_"), "New_integration");                                                  // 24
    })), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                                  // 25
  }), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                                  // 26
    class: "content background-transparent-dark"                                                                       // 27
  }, "\n\t\t\t", Blaze.Unless(function() {                                                                             // 28
    return Spacebars.call(view.lookup("hasPermission"));                                                               // 29
  }, function() {                                                                                                      // 30
    return [ "\n\t\t\t\t", HTML.P(Blaze.View("lookup:_", function() {                                                  // 31
      return Spacebars.mustache(view.lookup("_"), "You_are_not_authorized_to_view_this_page");                         // 32
    })), "\n\t\t\t" ];                                                                                                 // 33
  }, function() {                                                                                                      // 34
    return [ "\n\t\t\t\t", HTML.DIV({                                                                                  // 35
      class: "rocket-form"                                                                                             // 36
    }, "\n\t\t\t\t\t", HTML.DIV({                                                                                      // 37
      class: "section"                                                                                                 // 38
    }, "\n\t\t\t\t\t\t", HTML.DIV({                                                                                    // 39
      class: "admin-integrations-new-panel"                                                                            // 40
    }, "\n\t\t\t\t\t\t\t", Blaze.Each(function() {                                                                     // 41
      return Spacebars.call(view.lookup("integrations"));                                                              // 42
    }, function() {                                                                                                    // 43
      return [ "\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                             // 44
        return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("type"), "webhook-incoming");                    // 45
      }, function() {                                                                                                  // 46
        return [ "\n\t\t\t\t\t\t\t\t\t", HTML.A({                                                                      // 47
          href: function() {                                                                                           // 48
            return Spacebars.mustache(view.lookup("pathFor"), "admin-integrations-incoming", Spacebars.kw({            // 49
              id: view.lookup("_id")                                                                                   // 50
            }));                                                                                                       // 51
          }                                                                                                            // 52
        }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                        // 53
          class: "admin-integrations-new-item"                                                                         // 54
        }, "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.I({                                                                        // 55
          class: "icon-login"                                                                                          // 56
        }), "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                     // 57
          class: "admin-integrations-new-item-body"                                                                    // 58
        }, "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 59
          class: "admin-integrations-new-item-title"                                                                   // 60
        }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                         // 61
          return Spacebars.mustache(view.lookup("_"), "Incoming_WebHook");                                             // 62
        }), " ", Blaze.If(function() {                                                                                 // 63
          return Spacebars.call(view.lookup("name"));                                                                  // 64
        }, function() {                                                                                                // 65
          return [ "- ", Blaze.View("lookup:name", function() {                                                        // 66
            return Spacebars.mustache(view.lookup("name"));                                                            // 67
          }) ];                                                                                                        // 68
        }), "\n\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                    // 69
          class: "admin-integrations-new-item-description"                                                             // 70
        }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                         // 71
          return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Post_to_s_as_s", view.lookup("channel"), view.lookup("username")));
        }), "\n\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                    // 73
          class: "admin-integrations-new-item-description"                                                             // 74
        }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                         // 75
          return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Created_at_s_by_s", Spacebars.dataMustache(view.lookup("dateFormated"), view.lookup("_createdAt")), Spacebars.dot(view.lookup("_createdBy"), "username")));
        }), "\n\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.I({           // 77
          class: "icon-angle-right"                                                                                    // 78
        }), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t" ];                                // 79
      }), "\n\t\t\t\t\t\t\t" ];                                                                                        // 80
    }, function() {                                                                                                    // 81
      return [ "\n\t\t\t\t\t\t\t\t", HTML.H1(Blaze.View("lookup:_", function() {                                       // 82
        return Spacebars.mustache(view.lookup("_"), "There_are_no_integrations");                                      // 83
      })), "\n\t\t\t\t\t\t\t" ];                                                                                       // 84
    }), "\n\t\t\t\t\t\t\t", Blaze.Each(function() {                                                                    // 85
      return Spacebars.call(view.lookup("integrations"));                                                              // 86
    }, function() {                                                                                                    // 87
      return [ "\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                             // 88
        return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("type"), "webhook-outgoing");                    // 89
      }, function() {                                                                                                  // 90
        return [ "\n\t\t\t\t\t\t\t\t\t", HTML.A({                                                                      // 91
          href: function() {                                                                                           // 92
            return Spacebars.mustache(view.lookup("pathFor"), "admin-integrations-outgoing", Spacebars.kw({            // 93
              id: view.lookup("_id")                                                                                   // 94
            }));                                                                                                       // 95
          }                                                                                                            // 96
        }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                        // 97
          class: "admin-integrations-new-item"                                                                         // 98
        }, "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.I({                                                                        // 99
          class: "icon-login"                                                                                          // 100
        }), "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                     // 101
          class: "admin-integrations-new-item-body"                                                                    // 102
        }, "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 103
          class: "admin-integrations-new-item-title"                                                                   // 104
        }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                         // 105
          return Spacebars.mustache(view.lookup("_"), "Outgoing_WebHook");                                             // 106
        }), " ", Blaze.If(function() {                                                                                 // 107
          return Spacebars.call(view.lookup("name"));                                                                  // 108
        }, function() {                                                                                                // 109
          return [ "- ", Blaze.View("lookup:name", function() {                                                        // 110
            return Spacebars.mustache(view.lookup("name"));                                                            // 111
          }) ];                                                                                                        // 112
        }), "\n\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                    // 113
          class: "admin-integrations-new-item-description"                                                             // 114
        }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                         // 115
          return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Created_at_s_by_s_triggered_by_s", Spacebars.dataMustache(view.lookup("dateFormated"), view.lookup("_createdAt")), Spacebars.dot(view.lookup("_createdBy"), "username"), Spacebars.dataMustache(view.lookup("eventTypeI18n"), view.lookup("event"))));
        }), "\n\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.I({           // 117
          class: "icon-angle-right"                                                                                    // 118
        }), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t" ];                                // 119
      }), "\n\t\t\t\t\t\t\t" ];                                                                                        // 120
    }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t" ];                                               // 121
  }), "\n\t\t"), "\n\t");                                                                                              // 122
}));                                                                                                                   // 123
                                                                                                                       // 124
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"integrations.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_integrations/client/views/integrations.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var moment = void 0;                                                                                                   // 1
module.watch(require("moment"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		moment = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
Template.integrations.helpers({                                                                                        // 4
	hasPermission: function () {                                                                                          // 5
		return RocketChat.authz.hasAtLeastOnePermission(['manage-integrations', 'manage-own-integrations']);                 // 6
	},                                                                                                                    // 7
	integrations: function () {                                                                                           // 8
		return ChatIntegrations.find();                                                                                      // 9
	},                                                                                                                    // 10
	dateFormated: function (date) {                                                                                       // 11
		return moment(date).format('L LT');                                                                                  // 12
	},                                                                                                                    // 13
	eventTypeI18n: function (event) {                                                                                     // 14
		return TAPi18n.__(RocketChat.integrations.outgoingEvents[event].label);                                              // 15
	}                                                                                                                     // 16
});                                                                                                                    // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.integrationsNew.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_integrations/client/views/template.integrationsNew.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("integrationsNew");                                                                               // 2
Template["integrationsNew"] = new Template("Template.integrationsNew", (function() {                                   // 3
  var view = this;                                                                                                     // 4
  return HTML.SECTION({                                                                                                // 5
    class: "page-container page-home page-static page-settings"                                                        // 6
  }, "\n\t\t", HTML.HEADER({                                                                                           // 7
    class: "fixed-title border-component-color"                                                                        // 8
  }, "\n\t\t\t", Spacebars.include(view.lookupTemplate("burger")), "\n\t\t\t", HTML.H2("\n\t\t\t\t", HTML.SPAN({       // 9
    class: "room-title"                                                                                                // 10
  }, Blaze.View("lookup:pageTitle", function() {                                                                       // 11
    return Spacebars.mustache(view.lookup("pageTitle"));                                                               // 12
  })), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                    // 13
    class: "content background-transparent-dark"                                                                       // 14
  }, "\n\t\t\t", HTML.A({                                                                                              // 15
    href: function() {                                                                                                 // 16
      return Spacebars.mustache(view.lookup("pathFor"), "admin-integrations");                                         // 17
    }                                                                                                                  // 18
  }, HTML.Raw('<i class="icon-angle-left"></i>'), " ", Blaze.View("lookup:_", function() {                             // 19
    return Spacebars.mustache(view.lookup("_"), "Back_to_integrations");                                               // 20
  })), HTML.Raw("<br>"), HTML.Raw("<br>"), "\n\t\t\t", Blaze.If(function() {                                           // 21
    return Spacebars.call(view.lookup("hasPermission"));                                                               // 22
  }, function() {                                                                                                      // 23
    return [ "\n\n\t\t\t\t", HTML.DIV({                                                                                // 24
      class: "rocket-form"                                                                                             // 25
    }, "\n\t\t\t\t\t", HTML.DIV({                                                                                      // 26
      class: "section"                                                                                                 // 27
    }, "\n\t\t\t\t\t\t", HTML.DIV({                                                                                    // 28
      class: "admin-integrations-new-panel"                                                                            // 29
    }, "\n\t\t\t\t\t\t\t", HTML.A({                                                                                    // 30
      href: function() {                                                                                               // 31
        return Spacebars.mustache(view.lookup("pathFor"), "admin-integrations-incoming");                              // 32
      }                                                                                                                // 33
    }, "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                                // 34
      class: "admin-integrations-new-item"                                                                             // 35
    }, "\n\t\t\t\t\t\t\t\t\t", HTML.I({                                                                                // 36
      class: "icon-login"                                                                                              // 37
    }), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                             // 38
      class: "admin-integrations-new-item-body"                                                                        // 39
    }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                            // 40
      class: "admin-integrations-new-item-title"                                                                       // 41
    }, "\n\t\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                 // 42
      return Spacebars.mustache(view.lookup("_"), "Incoming_WebHook");                                                 // 43
    }), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                // 44
      class: "admin-integrations-new-item-description"                                                                 // 45
    }, "\n\t\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                 // 46
      return Spacebars.mustache(view.lookup("_"), "Send_data_into_RocketChat_in_realtime");                            // 47
    }), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t", HTML.I({                           // 48
      class: "icon-angle-right"                                                                                        // 49
    }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.A({                                       // 50
      href: function() {                                                                                               // 51
        return Spacebars.mustache(view.lookup("pathFor"), "admin-integrations-outgoing");                              // 52
      }                                                                                                                // 53
    }, "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                                // 54
      class: "admin-integrations-new-item"                                                                             // 55
    }, "\n\t\t\t\t\t\t\t\t\t", HTML.I({                                                                                // 56
      class: "icon-logout"                                                                                             // 57
    }), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                             // 58
      class: "admin-integrations-new-item-body"                                                                        // 59
    }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                            // 60
      class: "admin-integrations-new-item-title"                                                                       // 61
    }, "\n\t\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                 // 62
      return Spacebars.mustache(view.lookup("_"), "Outgoing_WebHook");                                                 // 63
    }), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                // 64
      class: "admin-integrations-new-item-description"                                                                 // 65
    }, "\n\t\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                 // 66
      return Spacebars.mustache(view.lookup("_"), "Outgoing_WebHook_Description");                                     // 67
    }), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t", HTML.I({                           // 68
      class: "icon-angle-right"                                                                                        // 69
    }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t" ];   // 70
  }, function() {                                                                                                      // 71
    return [ "\n\t\t\t\t", Blaze.View("lookup:_", function() {                                                         // 72
      return Spacebars.mustache(view.lookup("_"), "Not_authorized");                                                   // 73
    }), "\n\t\t\t" ];                                                                                                  // 74
  }), "\n\t\t"), "\n\t");                                                                                              // 75
}));                                                                                                                   // 76
                                                                                                                       // 77
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"integrationsNew.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_integrations/client/views/integrationsNew.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.integrationsNew.helpers({                                                                                     // 1
	hasPermission: function () {                                                                                          // 2
		return RocketChat.authz.hasAtLeastOnePermission(['manage-integrations', 'manage-own-integrations']);                 // 3
	}                                                                                                                     // 4
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.integrationsIncoming.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_integrations/client/views/template.integrationsIncoming.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("integrationsIncoming");                                                                          // 2
Template["integrationsIncoming"] = new Template("Template.integrationsIncoming", (function() {                         // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "permissions-manager"                                                                                       // 6
  }, "\n\t\t", Blaze.If(function() {                                                                                   // 7
    return Spacebars.call(view.lookup("hasPermission"));                                                               // 8
  }, function() {                                                                                                      // 9
    return [ "\n\t\t\t", HTML.A({                                                                                      // 10
      href: function() {                                                                                               // 11
        return Spacebars.mustache(view.lookup("pathFor"), "admin-integrations");                                       // 12
      }                                                                                                                // 13
    }, HTML.I({                                                                                                        // 14
      class: "icon-angle-left"                                                                                         // 15
    }), " ", Blaze.View("lookup:_", function() {                                                                       // 16
      return Spacebars.mustache(view.lookup("_"), "Back_to_integrations");                                             // 17
    })), HTML.BR(), HTML.BR(), "\n\t\t\t", HTML.DIV({                                                                  // 18
      class: "rocket-form"                                                                                             // 19
    }, "\n\t\t\t\t", HTML.DIV({                                                                                        // 20
      class: "section"                                                                                                 // 21
    }, "\n\t\t\t\t\t", HTML.DIV({                                                                                      // 22
      class: "section-content"                                                                                         // 23
    }, "\n\t\t\t\t\t\t", HTML.DIV({                                                                                    // 24
      class: "input-line double-col"                                                                                   // 25
    }, "\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 26
      return Spacebars.mustache(view.lookup("_"), "Enabled");                                                          // 27
    })), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                    // 28
      type: "radio",                                                                                                   // 29
      name: "enabled",                                                                                                 // 30
      value: "1",                                                                                                      // 31
      checked: function() {                                                                                            // 32
        return Spacebars.mustache(view.lookup("$eq"), Spacebars.dot(view.lookup("data"), "enabled"), true);            // 33
      }                                                                                                                // 34
    }), " ", Blaze.View("lookup:_", function() {                                                                       // 35
      return Spacebars.mustache(view.lookup("_"), "True");                                                             // 36
    })), "\n\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                                 // 37
      type: "radio",                                                                                                   // 38
      name: "enabled",                                                                                                 // 39
      value: "0",                                                                                                      // 40
      checked: function() {                                                                                            // 41
        return Spacebars.mustache(view.lookup("$neq"), Spacebars.dot(view.lookup("data"), "enabled"), true);           // 42
      }                                                                                                                // 43
    }), " ", Blaze.View("lookup:_", function() {                                                                       // 44
      return Spacebars.mustache(view.lookup("_"), "False");                                                            // 45
    })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({                                          // 46
      class: "input-line double-col"                                                                                   // 47
    }, "\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 48
      return Spacebars.mustache(view.lookup("_"), "Name");                                                             // 49
    }), " (", Blaze.View("lookup:_", function() {                                                                      // 50
      return Spacebars.mustache(view.lookup("_"), "optional");                                                         // 51
    }), ")"), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", HTML.INPUT({                                          // 52
      type: "text",                                                                                                    // 53
      name: "name",                                                                                                    // 54
      value: function() {                                                                                              // 55
        return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "name"));                                         // 56
      },                                                                                                               // 57
      placeholder: function() {                                                                                        // 58
        return Spacebars.mustache(view.lookup("_"), "Optional");                                                       // 59
      }                                                                                                                // 60
    }), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                               // 61
      class: "settings-description secondary-font-color"                                                               // 62
    }, Blaze.View("lookup:_", function() {                                                                             // 63
      return Spacebars.mustache(view.lookup("_"), "You_should_name_it_to_easily_manage_your_integrations");            // 64
    })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({                                          // 65
      class: "input-line double-col"                                                                                   // 66
    }, "\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 67
      return Spacebars.mustache(view.lookup("_"), "Post_to_Channel");                                                  // 68
    })), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", HTML.INPUT({                                               // 69
      type: "text",                                                                                                    // 70
      name: "channel",                                                                                                 // 71
      value: function() {                                                                                              // 72
        return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "channel"));                                      // 73
      },                                                                                                               // 74
      placeholder: function() {                                                                                        // 75
        return Spacebars.mustache(view.lookup("_"), "User_or_channel_name");                                           // 76
      }                                                                                                                // 77
    }), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                               // 78
      class: "settings-description secondary-font-color"                                                               // 79
    }, Blaze.View("lookup:_", function() {                                                                             // 80
      return Spacebars.mustache(view.lookup("_"), "Messages_that_are_sent_to_the_Incoming_WebHook_will_be_posted_here");
    })), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                              // 82
      class: "settings-description secondary-font-color"                                                               // 83
    }, Blaze.View("lookup:_", function() {                                                                             // 84
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Start_with_s_for_user_or_s_for_channel_Eg_s_or_s", "@", "#", "@john", "#general"));
    })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({                                          // 86
      class: "input-line double-col"                                                                                   // 87
    }, "\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 88
      return Spacebars.mustache(view.lookup("_"), "Post_as");                                                          // 89
    })), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                      // 90
      return Spacebars.call(Spacebars.dot(view.lookup("data"), "token"));                                              // 91
    }, function() {                                                                                                    // 92
      return [ "\n\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                                                    // 93
        type: "text",                                                                                                  // 94
        name: "username",                                                                                              // 95
        value: function() {                                                                                            // 96
          return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "username"));                                   // 97
        },                                                                                                             // 98
        readonly: "readonly"                                                                                           // 99
      }), "\n\t\t\t\t\t\t\t\t" ];                                                                                      // 100
    }, function() {                                                                                                    // 101
      return [ "\n\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                                                    // 102
        type: "text",                                                                                                  // 103
        name: "username",                                                                                              // 104
        value: function() {                                                                                            // 105
          return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "username"));                                   // 106
        }                                                                                                              // 107
      }), "\n\t\t\t\t\t\t\t\t" ];                                                                                      // 108
    }), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                               // 109
      class: "settings-description secondary-font-color"                                                               // 110
    }, Blaze.View("lookup:_", function() {                                                                             // 111
      return Spacebars.mustache(view.lookup("_"), "Choose_the_username_that_this_integration_will_post_as");           // 112
    })), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                              // 113
      class: "settings-description secondary-font-color"                                                               // 114
    }, Blaze.View("lookup:_", function() {                                                                             // 115
      return Spacebars.mustache(view.lookup("_"), "Should_exists_a_user_with_this_username");                          // 116
    })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({                                          // 117
      class: "input-line double-col"                                                                                   // 118
    }, "\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 119
      return Spacebars.mustache(view.lookup("_"), "Alias");                                                            // 120
    }), " (", Blaze.View("lookup:_", function() {                                                                      // 121
      return Spacebars.mustache(view.lookup("_"), "optional");                                                         // 122
    }), ")"), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", HTML.INPUT({                                          // 123
      type: "text",                                                                                                    // 124
      name: "alias",                                                                                                   // 125
      value: function() {                                                                                              // 126
        return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "alias"));                                        // 127
      },                                                                                                               // 128
      placeholder: function() {                                                                                        // 129
        return Spacebars.mustache(view.lookup("_"), "Optional");                                                       // 130
      }                                                                                                                // 131
    }), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                               // 132
      class: "settings-description secondary-font-color"                                                               // 133
    }, Blaze.View("lookup:_", function() {                                                                             // 134
      return Spacebars.mustache(view.lookup("_"), "Choose_the_alias_that_will_appear_before_the_username_in_messages");
    })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({                                          // 136
      class: "input-line double-col"                                                                                   // 137
    }, "\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 138
      return Spacebars.mustache(view.lookup("_"), "Avatar_URL");                                                       // 139
    }), " (", Blaze.View("lookup:_", function() {                                                                      // 140
      return Spacebars.mustache(view.lookup("_"), "optional");                                                         // 141
    }), ")"), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", HTML.INPUT({                                          // 142
      type: "url",                                                                                                     // 143
      name: "avatar",                                                                                                  // 144
      value: function() {                                                                                              // 145
        return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "avatar"));                                       // 146
      },                                                                                                               // 147
      placeholder: function() {                                                                                        // 148
        return Spacebars.mustache(view.lookup("_"), "Optional");                                                       // 149
      }                                                                                                                // 150
    }), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                               // 151
      class: "settings-description secondary-font-color"                                                               // 152
    }, Blaze.View("lookup:_", function() {                                                                             // 153
      return Spacebars.mustache(view.lookup("_"), "You_can_change_a_different_avatar_too");                            // 154
    })), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                              // 155
      class: "settings-description secondary-font-color"                                                               // 156
    }, Blaze.View("lookup:_", function() {                                                                             // 157
      return Spacebars.mustache(view.lookup("_"), "Should_be_a_URL_of_an_image");                                      // 158
    })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({                                          // 159
      class: "input-line double-col"                                                                                   // 160
    }, "\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 161
      return Spacebars.mustache(view.lookup("_"), "Emoji");                                                            // 162
    }), " (", Blaze.View("lookup:_", function() {                                                                      // 163
      return Spacebars.mustache(view.lookup("_"), "optional");                                                         // 164
    }), ")"), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", HTML.INPUT({                                          // 165
      type: "text",                                                                                                    // 166
      name: "emoji",                                                                                                   // 167
      value: function() {                                                                                              // 168
        return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "emoji"));                                        // 169
      },                                                                                                               // 170
      placeholder: function() {                                                                                        // 171
        return Spacebars.mustache(view.lookup("_"), "Optional");                                                       // 172
      }                                                                                                                // 173
    }), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                               // 174
      class: "settings-description secondary-font-color"                                                               // 175
    }, Blaze.View("lookup:_", function() {                                                                             // 176
      return Spacebars.mustache(view.lookup("_"), "You_can_use_an_emoji_as_avatar");                                   // 177
    })), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                              // 178
      class: "settings-description secondary-font-color"                                                               // 179
    }, Blaze.View("lookup:_", function() {                                                                             // 180
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Example_s", ":ghost:"));                          // 181
    })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({                                          // 182
      class: "input-line double-col"                                                                                   // 183
    }, "\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 184
      return Spacebars.mustache(view.lookup("_"), "Script_Enabled");                                                   // 185
    })), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                    // 186
      type: "radio",                                                                                                   // 187
      name: "scriptEnabled",                                                                                           // 188
      value: "1",                                                                                                      // 189
      checked: function() {                                                                                            // 190
        return Spacebars.mustache(view.lookup("$eq"), Spacebars.dot(view.lookup("data"), "scriptEnabled"), true);      // 191
      }                                                                                                                // 192
    }), " ", Blaze.View("lookup:_", function() {                                                                       // 193
      return Spacebars.mustache(view.lookup("_"), "True");                                                             // 194
    })), "\n\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                                 // 195
      type: "radio",                                                                                                   // 196
      name: "scriptEnabled",                                                                                           // 197
      value: "0",                                                                                                      // 198
      checked: function() {                                                                                            // 199
        return Spacebars.mustache(view.lookup("$neq"), Spacebars.dot(view.lookup("data"), "scriptEnabled"), true);     // 200
      }                                                                                                                // 201
    }), " ", Blaze.View("lookup:_", function() {                                                                       // 202
      return Spacebars.mustache(view.lookup("_"), "False");                                                            // 203
    })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({                                          // 204
      class: "input-line double-col"                                                                                   // 205
    }, "\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 206
      return Spacebars.mustache(view.lookup("_"), "Script");                                                           // 207
    })), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                 // 208
      class: "code-mirror-box"                                                                                         // 209
    }, "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                              // 210
      class: "title"                                                                                                   // 211
    }, "\n\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                   // 212
      return Spacebars.mustache(view.lookup("_"), "Script");                                                           // 213
    }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                              // 214
      return {                                                                                                         // 215
        name: Spacebars.call("script"),                                                                                // 216
        options: Spacebars.call(view.lookup("editorOptions")),                                                         // 217
        code: Spacebars.call(Spacebars.dot(view.lookup("data"), "script"))                                             // 218
      };                                                                                                               // 219
    }, function() {                                                                                                    // 220
      return Spacebars.include(view.lookupTemplate("CodeMirror"));                                                     // 221
    }), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                             // 222
      class: "buttons"                                                                                                 // 223
    }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                         // 224
      class: "button primary button-fullscreen"                                                                        // 225
    }, "Full Screen"), "\n\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                         // 226
      class: "button primary button-restore"                                                                           // 227
    }, "Exit Full Screen"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", Blaze.If(function() {
      return Spacebars.call(Spacebars.dot(view.lookup("data"), "scriptError"));                                        // 229
    }, function() {                                                                                                    // 230
      return [ "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                      // 231
        class: "code-error-box"                                                                                        // 232
      }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                          // 233
        class: "title color-content-background-color background-error-color"                                           // 234
      }, "\n\t\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:data.scriptError.name", function() {                           // 235
        return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "scriptError", "name"));                          // 236
      }), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t", HTML.PRE({                                              // 237
        class: "script-error background-transparent-lightest error-color error-border"                                 // 238
      }, Blaze.View("lookup:data.scriptError.message", function() {                                                    // 239
        return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "scriptError", "message"));                       // 240
      })), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t" ];                                                            // 241
    }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", Blaze.If(function() {                                // 242
      return Spacebars.call(Spacebars.dot(view.lookup("data"), "token"));                                              // 243
    }, function() {                                                                                                    // 244
      return [ "\n\t\t\t\t\t\t\t", HTML.DIV({                                                                          // 245
        class: "input-line double-col"                                                                                 // 246
      }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL("Webhook URL"), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.INPUT({
        type: "text",                                                                                                  // 248
        name: "webhookurl",                                                                                            // 249
        value: function() {                                                                                            // 250
          return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "url"));                                        // 251
        },                                                                                                             // 252
        readonly: "readonly"                                                                                           // 253
      }), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                           // 254
        class: "settings-description secondary-font-color"                                                             // 255
      }, Blaze.View("lookup:_", function() {                                                                           // 256
        return Spacebars.mustache(view.lookup("_"), "Send_your_JSON_payloads_to_this_URL");                            // 257
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                          // 258
        class: "settings-description secondary-font-color"                                                             // 259
      }, HTML.BUTTON({                                                                                                 // 260
        class: "clipboard",                                                                                            // 261
        "data-clipboard-target": "[name=webhookurl]"                                                                   // 262
      }, Blaze.View("lookup:_", function() {                                                                           // 263
        return Spacebars.mustache(view.lookup("_"), "COPY_TO_CLIPBOARD");                                              // 264
      }))), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({                                 // 265
        class: "input-line double-col"                                                                                 // 266
      }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL("Token"), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.INPUT({
        type: "text",                                                                                                  // 268
        name: "completeToken",                                                                                         // 269
        value: function() {                                                                                            // 270
          return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "completeToken"));                              // 271
        },                                                                                                             // 272
        readonly: "readonly"                                                                                           // 273
      }), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                           // 274
        class: "settings-description secondary-font-color"                                                             // 275
      }, HTML.BUTTON({                                                                                                 // 276
        class: "clipboard",                                                                                            // 277
        "data-clipboard-target": "[name=completeToken]"                                                                // 278
      }, Blaze.View("lookup:_", function() {                                                                           // 279
        return Spacebars.mustache(view.lookup("_"), "COPY_TO_CLIPBOARD");                                              // 280
      }))), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t" ];                                            // 281
    }), "\n\t\t\t\t\t\t", HTML.DIV({                                                                                   // 282
      class: "input-line double-col"                                                                                   // 283
    }, "\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 284
      return Spacebars.mustache(view.lookup("_"), "Example");                                                          // 285
    })), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", HTML.PRE(HTML.CODE({                                       // 286
      class: "code-colors hljs json json-example"                                                                      // 287
    }, Blaze.View("lookup:exampleJson", function() {                                                                   // 288
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("exampleJson")));                                        // 289
    }))), "\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 290
      return Spacebars.call(view.lookup("curl"));                                                                      // 291
    }, function() {                                                                                                    // 292
      return [ "\n\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                                                    // 293
        type: "text",                                                                                                  // 294
        name: "curl",                                                                                                  // 295
        value: function() {                                                                                            // 296
          return Spacebars.mustache(view.lookup("curl"));                                                              // 297
        },                                                                                                             // 298
        readonly: "readonly"                                                                                           // 299
      }), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                           // 300
        class: "settings-description secondary-font-color"                                                             // 301
      }, HTML.BUTTON({                                                                                                 // 302
        class: "clipboard",                                                                                            // 303
        "data-clipboard-target": "[name=curl]"                                                                         // 304
      }, Blaze.View("lookup:_", function() {                                                                           // 305
        return Spacebars.mustache(view.lookup("_"), "COPY_TO_CLIPBOARD");                                              // 306
      }))), "\n\t\t\t\t\t\t\t\t" ];                                                                                    // 307
    }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({                                           // 308
      class: "input-line message-example"                                                                              // 309
    }, "\n\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                            // 310
      return Spacebars.dataMustache(view.lookup("nrrargs"), "message", view.lookup("example"));                        // 311
    }, function() {                                                                                                    // 312
      return Spacebars.include(view.lookupTemplate("nrr"), function() {                                                // 313
        return null;                                                                                                   // 314
      });                                                                                                              // 315
    }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                    // 316
      class: "submit"                                                                                                  // 317
    }, "\n\t\t\t\t\t", Blaze.If(function() {                                                                           // 318
      return Spacebars.call(Spacebars.dot(view.lookup("data"), "token"));                                              // 319
    }, function() {                                                                                                    // 320
      return [ "\n\t\t\t\t\t\t", HTML.BUTTON({                                                                         // 321
        class: "button danger delete"                                                                                  // 322
      }, HTML.I({                                                                                                      // 323
        class: "icon-trash"                                                                                            // 324
      }), HTML.SPAN(Blaze.View("lookup:_", function() {                                                                // 325
        return Spacebars.mustache(view.lookup("_"), "Delete");                                                         // 326
      }))), "\n\t\t\t\t\t" ];                                                                                          // 327
    }), "\n\t\t\t\t\t", HTML.BUTTON({                                                                                  // 328
      class: "button primary save"                                                                                     // 329
    }, HTML.I({                                                                                                        // 330
      class: "icon-send"                                                                                               // 331
    }), HTML.SPAN(Blaze.View("lookup:_", function() {                                                                  // 332
      return Spacebars.mustache(view.lookup("_"), "Save_changes");                                                     // 333
    }))), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t" ];                                                                      // 334
  }, function() {                                                                                                      // 335
    return [ "\n\t\t\t", Blaze.View("lookup:_", function() {                                                           // 336
      return Spacebars.mustache(view.lookup("_"), "Not_authorized");                                                   // 337
    }), "\n\t\t" ];                                                                                                    // 338
  }), "\n\t");                                                                                                         // 339
}));                                                                                                                   // 340
                                                                                                                       // 341
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"integrationsIncoming.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_integrations/client/views/integrationsIncoming.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var hljs = void 0;                                                                                                     // 1
module.watch(require("highlight.js"), {                                                                                // 1
	"default": function (v) {                                                                                             // 1
		hljs = v;                                                                                                            // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
var toastr = void 0;                                                                                                   // 1
module.watch(require("toastr"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		toastr = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 1);                                                                                                                 // 1
Template.integrationsIncoming.onCreated(function () {                                                                  // 6
	function _incomingIntegrationsOnCreated() {                                                                           // 6
		return this.record = new ReactiveVar({                                                                               // 7
			username: 'rocket.cat'                                                                                              // 8
		});                                                                                                                  // 7
	}                                                                                                                     // 10
                                                                                                                       //
	return _incomingIntegrationsOnCreated;                                                                                // 6
}());                                                                                                                  // 6
Template.integrationsIncoming.helpers({                                                                                // 12
	hasPermission: function () {                                                                                          // 13
		return RocketChat.authz.hasAtLeastOnePermission(['manage-integrations', 'manage-own-integrations']);                 // 14
	},                                                                                                                    // 15
	data: function () {                                                                                                   // 17
		var params = Template.instance().data.params ? Template.instance().data.params() : undefined;                        // 18
                                                                                                                       //
		if (params && params.id) {                                                                                           // 20
			var data = void 0;                                                                                                  // 21
                                                                                                                       //
			if (RocketChat.authz.hasAllPermission('manage-integrations')) {                                                     // 22
				data = ChatIntegrations.findOne({                                                                                  // 23
					_id: params.id                                                                                                    // 23
				});                                                                                                                // 23
			} else if (RocketChat.authz.hasAllPermission('manage-own-integrations')) {                                          // 24
				data = ChatIntegrations.findOne({                                                                                  // 25
					_id: params.id,                                                                                                   // 25
					'_createdBy._id': Meteor.userId()                                                                                 // 25
				});                                                                                                                // 25
			}                                                                                                                   // 26
                                                                                                                       //
			if (data) {                                                                                                         // 28
				var completeToken = data._id + "/" + data.token;                                                                   // 29
				data.url = Meteor.absoluteUrl("hooks/" + completeToken);                                                           // 30
				data.completeToken = completeToken;                                                                                // 31
				Template.instance().record.set(data);                                                                              // 32
				return data;                                                                                                       // 33
			}                                                                                                                   // 34
		}                                                                                                                    // 35
                                                                                                                       //
		return Template.instance().record.curValue;                                                                          // 37
	},                                                                                                                    // 38
	example: function () {                                                                                                // 40
		var record = Template.instance().record.get();                                                                       // 41
		return {                                                                                                             // 42
			_id: Random.id(),                                                                                                   // 43
			alias: record.alias,                                                                                                // 44
			emoji: record.emoji,                                                                                                // 45
			avatar: record.avatar,                                                                                              // 46
			msg: 'Example message',                                                                                             // 47
			bot: {                                                                                                              // 48
				i: Random.id()                                                                                                     // 49
			},                                                                                                                  // 48
			groupable: false,                                                                                                   // 51
			attachments: [{                                                                                                     // 52
				title: 'Rocket.Chat',                                                                                              // 53
				title_link: 'https://rocket.chat',                                                                                 // 54
				text: 'Rocket.Chat, the best open source chat',                                                                    // 55
				image_url: 'https://rocket.chat/images/mockup.png',                                                                // 56
				color: '#764FA5'                                                                                                   // 57
			}],                                                                                                                 // 52
			ts: new Date(),                                                                                                     // 59
			u: {                                                                                                                // 60
				_id: Random.id(),                                                                                                  // 61
				username: record.username                                                                                          // 62
			}                                                                                                                   // 60
		};                                                                                                                   // 42
	},                                                                                                                    // 65
	exampleJson: function () {                                                                                            // 67
		var record = Template.instance().record.get();                                                                       // 68
		var data = {                                                                                                         // 69
			username: record.alias,                                                                                             // 70
			icon_emoji: record.emoji,                                                                                           // 71
			icon_url: record.avatar,                                                                                            // 72
			text: 'Example message',                                                                                            // 73
			attachments: [{                                                                                                     // 74
				title: 'Rocket.Chat',                                                                                              // 75
				title_link: 'https://rocket.chat',                                                                                 // 76
				text: 'Rocket.Chat, the best open source chat',                                                                    // 77
				image_url: 'https://rocket.chat/images/mockup.png',                                                                // 78
				color: '#764FA5'                                                                                                   // 79
			}]                                                                                                                  // 74
		};                                                                                                                   // 69
		var invalidData = [null, ''];                                                                                        // 83
		Object.keys(data).forEach(function (key) {                                                                           // 84
			if (invalidData.includes(data[key])) {                                                                              // 85
				delete data[key];                                                                                                  // 86
			}                                                                                                                   // 87
		});                                                                                                                  // 88
		return hljs.highlight('json', JSON.stringify(data, null, 2)).value;                                                  // 90
	},                                                                                                                    // 91
	curl: function () {                                                                                                   // 93
		var record = Template.instance().record.get();                                                                       // 94
                                                                                                                       //
		if (!record.url) {                                                                                                   // 96
			return;                                                                                                             // 97
		}                                                                                                                    // 98
                                                                                                                       //
		var data = {                                                                                                         // 100
			username: record.alias,                                                                                             // 101
			icon_emoji: record.emoji,                                                                                           // 102
			icon_url: record.avatar,                                                                                            // 103
			text: 'Example message',                                                                                            // 104
			attachments: [{                                                                                                     // 105
				title: 'Rocket.Chat',                                                                                              // 106
				title_link: 'https://rocket.chat',                                                                                 // 107
				text: 'Rocket.Chat, the best open source chat',                                                                    // 108
				image_url: 'https://rocket.chat/images/mockup.png',                                                                // 109
				color: '#764FA5'                                                                                                   // 110
			}]                                                                                                                  // 105
		};                                                                                                                   // 100
		var invalidData = [null, ''];                                                                                        // 114
		Object.keys(data).forEach(function (key) {                                                                           // 115
			if (invalidData.includes(data[key])) {                                                                              // 116
				delete data[key];                                                                                                  // 117
			}                                                                                                                   // 118
		});                                                                                                                  // 119
		return "curl -X POST -H 'Content-Type: application/json' --data '" + JSON.stringify(data) + "' " + record.url;       // 121
	},                                                                                                                    // 122
	editorOptions: function () {                                                                                          // 124
		return {                                                                                                             // 125
			lineNumbers: true,                                                                                                  // 126
			mode: 'javascript',                                                                                                 // 127
			gutters: [// 'CodeMirror-lint-markers'                                                                              // 128
			'CodeMirror-linenumbers', 'CodeMirror-foldgutter'],                                                                 // 130
			// lint: true,                                                                                                      // 133
			foldGutter: true,                                                                                                   // 134
			// lineWrapping: true,                                                                                              // 135
			matchBrackets: true,                                                                                                // 136
			autoCloseBrackets: true,                                                                                            // 137
			matchTags: true,                                                                                                    // 138
			showTrailingSpace: true,                                                                                            // 139
			highlightSelectionMatches: true                                                                                     // 140
		};                                                                                                                   // 125
	}                                                                                                                     // 142
});                                                                                                                    // 12
Template.integrationsIncoming.events({                                                                                 // 145
	'blur input': function (e, t) {                                                                                       // 146
		var value = t.record.curValue || {};                                                                                 // 147
		value.name = $('[name=name]').val().trim();                                                                          // 149
		value.alias = $('[name=alias]').val().trim();                                                                        // 150
		value.emoji = $('[name=emoji]').val().trim();                                                                        // 151
		value.avatar = $('[name=avatar]').val().trim();                                                                      // 152
		value.channel = $('[name=channel]').val().trim();                                                                    // 153
		value.username = $('[name=username]').val().trim();                                                                  // 154
		t.record.set(value);                                                                                                 // 156
	},                                                                                                                    // 157
	'click .submit > .delete': function () {                                                                              // 159
		var params = Template.instance().data.params();                                                                      // 160
		swal({                                                                                                               // 162
			title: t('Are_you_sure'),                                                                                           // 163
			text: t('You_will_not_be_able_to_recover'),                                                                         // 164
			type: 'warning',                                                                                                    // 165
			showCancelButton: true,                                                                                             // 166
			confirmButtonColor: '#DD6B55',                                                                                      // 167
			confirmButtonText: t('Yes_delete_it'),                                                                              // 168
			cancelButtonText: t('Cancel'),                                                                                      // 169
			closeOnConfirm: false,                                                                                              // 170
			html: false                                                                                                         // 171
		}, function () {                                                                                                     // 162
			Meteor.call('deleteIncomingIntegration', params.id, function (err) {                                                // 173
				if (err) {                                                                                                         // 174
					handleError(err);                                                                                                 // 175
				} else {                                                                                                           // 176
					swal({                                                                                                            // 177
						title: t('Deleted'),                                                                                             // 178
						text: t('Your_entry_has_been_deleted'),                                                                          // 179
						type: 'success',                                                                                                 // 180
						timer: 1000,                                                                                                     // 181
						showConfirmButton: false                                                                                         // 182
					});                                                                                                               // 177
					FlowRouter.go('admin-integrations');                                                                              // 185
				}                                                                                                                  // 186
			});                                                                                                                 // 187
		});                                                                                                                  // 188
	},                                                                                                                    // 189
	'click .button-fullscreen': function () {                                                                             // 191
		var codeMirrorBox = $('.code-mirror-box');                                                                           // 192
		codeMirrorBox.addClass('code-mirror-box-fullscreen content-background-color');                                       // 193
		codeMirrorBox.find('.CodeMirror')[0].CodeMirror.refresh();                                                           // 194
	},                                                                                                                    // 195
	'click .button-restore': function () {                                                                                // 197
		var codeMirrorBox = $('.code-mirror-box');                                                                           // 198
		codeMirrorBox.removeClass('code-mirror-box-fullscreen content-background-color');                                    // 199
		codeMirrorBox.find('.CodeMirror')[0].CodeMirror.refresh();                                                           // 200
	},                                                                                                                    // 201
	'click .submit > .save': function () {                                                                                // 203
		var enabled = $('[name=enabled]:checked').val().trim();                                                              // 204
		var name = $('[name=name]').val().trim();                                                                            // 205
		var alias = $('[name=alias]').val().trim();                                                                          // 206
		var emoji = $('[name=emoji]').val().trim();                                                                          // 207
		var avatar = $('[name=avatar]').val().trim();                                                                        // 208
		var channel = $('[name=channel]').val().trim();                                                                      // 209
		var username = $('[name=username]').val().trim();                                                                    // 210
		var scriptEnabled = $('[name=scriptEnabled]:checked').val().trim();                                                  // 211
		var script = $('[name=script]').val().trim();                                                                        // 212
                                                                                                                       //
		if (channel === '') {                                                                                                // 214
			return toastr.error(TAPi18n.__('The_channel_name_is_required'));                                                    // 215
		}                                                                                                                    // 216
                                                                                                                       //
		if (username === '') {                                                                                               // 218
			return toastr.error(TAPi18n.__('The_username_is_required'));                                                        // 219
		}                                                                                                                    // 220
                                                                                                                       //
		var integration = {                                                                                                  // 222
			enabled: enabled === '1',                                                                                           // 223
			channel: channel,                                                                                                   // 224
			alias: alias !== '' ? alias : undefined,                                                                            // 225
			emoji: emoji !== '' ? emoji : undefined,                                                                            // 226
			avatar: avatar !== '' ? avatar : undefined,                                                                         // 227
			name: name !== '' ? name : undefined,                                                                               // 228
			script: script !== '' ? script : undefined,                                                                         // 229
			scriptEnabled: scriptEnabled === '1'                                                                                // 230
		};                                                                                                                   // 222
		var params = Template.instance().data.params ? Template.instance().data.params() : undefined;                        // 233
                                                                                                                       //
		if (params && params.id) {                                                                                           // 234
			Meteor.call('updateIncomingIntegration', params.id, integration, function (err) {                                   // 235
				if (err) {                                                                                                         // 236
					return handleError(err);                                                                                          // 237
				}                                                                                                                  // 238
                                                                                                                       //
				toastr.success(TAPi18n.__('Integration_updated'));                                                                 // 240
			});                                                                                                                 // 241
		} else {                                                                                                             // 242
			integration.username = username;                                                                                    // 243
			Meteor.call('addIncomingIntegration', integration, function (err, data) {                                           // 245
				if (err) {                                                                                                         // 246
					return handleError(err);                                                                                          // 247
				}                                                                                                                  // 248
                                                                                                                       //
				toastr.success(TAPi18n.__('Integration_added'));                                                                   // 250
				FlowRouter.go('admin-integrations-incoming', {                                                                     // 251
					id: data._id                                                                                                      // 251
				});                                                                                                                // 251
			});                                                                                                                 // 252
		}                                                                                                                    // 253
	}                                                                                                                     // 254
});                                                                                                                    // 145
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.integrationsOutgoing.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_integrations/client/views/template.integrationsOutgoing.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("integrationsOutgoing");                                                                          // 2
Template["integrationsOutgoing"] = new Template("Template.integrationsOutgoing", (function() {                         // 3
  var view = this;                                                                                                     // 4
  return HTML.SECTION({                                                                                                // 5
    class: "page-container page-home page-static page-settings"                                                        // 6
  }, "\n\t\t", HTML.HEADER({                                                                                           // 7
    class: "fixed-title border-component-color"                                                                        // 8
  }, "\n\t\t\t", Spacebars.include(view.lookupTemplate("burger")), "\n\t\t\t", HTML.H2("\n\t\t\t\t", HTML.SPAN({       // 9
    class: "room-title"                                                                                                // 10
  }, Blaze.View("lookup:pageTitle", function() {                                                                       // 11
    return Spacebars.mustache(view.lookup("pageTitle"));                                                               // 12
  })), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                             // 13
    class: "submit"                                                                                                    // 14
  }, "\n\t\t\t\t", HTML.BUTTON({                                                                                       // 15
    class: "button history",                                                                                           // 16
    disabled: function() {                                                                                             // 17
      return Spacebars.mustache(view.lookup("not"), view.lookup("showHistoryButton"));                                 // 18
    }                                                                                                                  // 19
  }, HTML.Raw('<i class="icon-history"></i>'), Blaze.View("lookup:_", function() {                                     // 20
    return Spacebars.mustache(view.lookup("_"), "History");                                                            // 21
  })), "\n\t\t\t\t", HTML.BUTTON({                                                                                     // 22
    class: "button danger delete",                                                                                     // 23
    disabled: function() {                                                                                             // 24
      return Spacebars.mustache(view.lookup("not"), view.lookup("canDelete"));                                         // 25
    }                                                                                                                  // 26
  }, HTML.Raw('<i class="icon-trash"></i>'), " ", HTML.SPAN(Blaze.View("lookup:_", function() {                        // 27
    return Spacebars.mustache(view.lookup("_"), "Delete");                                                             // 28
  }))), "\n\t\t\t\t", HTML.BUTTON({                                                                                    // 29
    class: "button primary save",                                                                                      // 30
    disabled: function() {                                                                                             // 31
      return Spacebars.mustache(view.lookup("not"), view.lookup("hasTypeSelected"));                                   // 32
    }                                                                                                                  // 33
  }, HTML.Raw('<i class="icon-paper-plane"></i>'), " ", HTML.SPAN(Blaze.View("lookup:_", function() {                  // 34
    return Spacebars.mustache(view.lookup("_"), "Save_changes");                                                       // 35
  }))), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                   // 36
    class: "content background-transparent-dark"                                                                       // 37
  }, "\n\t\t\t", HTML.A({                                                                                              // 38
    href: function() {                                                                                                 // 39
      return Spacebars.mustache(view.lookup("pathFor"), "admin-integrations");                                         // 40
    }                                                                                                                  // 41
  }, HTML.Raw('<i class="icon-angle-left"></i>'), " ", Blaze.View("lookup:_", function() {                             // 42
    return Spacebars.mustache(view.lookup("_"), "Back_to_integrations");                                               // 43
  })), HTML.Raw("<br>"), HTML.Raw("<br>"), "\n\t\t\t", Blaze.Unless(function() {                                       // 44
    return Spacebars.call(view.lookup("hasPermission"));                                                               // 45
  }, function() {                                                                                                      // 46
    return [ "\n\t\t\t\t", HTML.P(Blaze.View("lookup:_", function() {                                                  // 47
      return Spacebars.mustache(view.lookup("_"), "You_are_not_authorized_to_view_this_page");                         // 48
    })), "\n\t\t\t" ];                                                                                                 // 49
  }, function() {                                                                                                      // 50
    return [ "\n\t\t\t\t", HTML.DIV({                                                                                  // 51
      class: "rocket-form"                                                                                             // 52
    }, "\n\t\t\t\t\t", HTML.DIV({                                                                                      // 53
      class: "section"                                                                                                 // 54
    }, "\n\t\t\t\t\t\t", HTML.DIV({                                                                                    // 55
      class: "section-title"                                                                                           // 56
    }, "\n\t\t\t\t\t\t\t", HTML.DIV({                                                                                  // 57
      class: "section-title-text"                                                                                      // 58
    }, Blaze.View("lookup:_", function() {                                                                             // 59
      return Spacebars.mustache(view.lookup("_"), "Webhook Details");                                                  // 60
    })), "\n\t\t\t\t\t\t\t", HTML.DIV({                                                                                // 61
      class: "section-title-right"                                                                                     // 62
    }, "\n\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                             // 63
      class: "button primary collapse"                                                                                 // 64
    }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                   // 65
      return Spacebars.mustache(view.lookup("_"), "Collapse");                                                         // 66
    }))), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({                                         // 67
      class: "section-content"                                                                                         // 68
    }, "\n\t\t\t\t\t\t\t", HTML.DIV({                                                                                  // 69
      class: "input-line double-col"                                                                                   // 70
    }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                            // 71
      return Spacebars.mustache(view.lookup("_"), "Event_Trigger");                                                    // 72
    })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.SELECT({                                          // 73
      name: "event",                                                                                                   // 74
      class: "required"                                                                                                // 75
    }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                         // 76
      value: ""                                                                                                        // 77
    }), "\n\t\t\t\t\t\t\t\t\t\t", Blaze.Each(function() {                                                              // 78
      return Spacebars.call(view.lookup("eventTypes"));                                                                // 79
    }, function() {                                                                                                    // 80
      return [ "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                                               // 81
        value: function() {                                                                                            // 82
          return Spacebars.mustache(view.lookup("value"));                                                             // 83
        },                                                                                                             // 84
        selected: function() {                                                                                         // 85
          return Spacebars.mustache(view.lookup("$eq"), Spacebars.dot(view.lookup("data"), "event"), view.lookup("value"));
        },                                                                                                             // 87
        dir: "auto"                                                                                                    // 88
      }, Blaze.View("lookup:_", function() {                                                                           // 89
        return Spacebars.mustache(view.lookup("_"), view.lookup("label"));                                             // 90
      })), "\n\t\t\t\t\t\t\t\t\t\t" ];                                                                                 // 91
    }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                    // 92
      class: "settings-description"                                                                                    // 93
    }, Blaze.View("lookup:_", function() {                                                                             // 94
      return Spacebars.mustache(view.lookup("_"), "Event_Trigger_Description");                                        // 95
    })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", Blaze.If(function() {                         // 96
      return Spacebars.call(view.lookup("hasTypeSelected"));                                                           // 97
    }, function() {                                                                                                    // 98
      return [ "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                        // 99
        class: "input-line double-col"                                                                                 // 100
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                        // 101
        return Spacebars.mustache(view.lookup("_"), "Enabled");                                                        // 102
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                          // 103
        type: "radio",                                                                                                 // 104
        name: "enabled",                                                                                               // 105
        value: "1",                                                                                                    // 106
        checked: function() {                                                                                          // 107
          return Spacebars.mustache(view.lookup("$eq"), Spacebars.dot(view.lookup("data"), "enabled"), true);          // 108
        }                                                                                                              // 109
      }), " ", Blaze.View("lookup:_", function() {                                                                     // 110
        return Spacebars.mustache(view.lookup("_"), "True");                                                           // 111
      })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                           // 112
        type: "radio",                                                                                                 // 113
        name: "enabled",                                                                                               // 114
        value: "0",                                                                                                    // 115
        checked: function() {                                                                                          // 116
          return Spacebars.mustache(view.lookup("$neq"), Spacebars.dot(view.lookup("data"), "enabled"), true);         // 117
        }                                                                                                              // 118
      }), " ", Blaze.View("lookup:_", function() {                                                                     // 119
        return Spacebars.mustache(view.lookup("_"), "False");                                                          // 120
      })), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                            // 121
        class: "input-line double-col"                                                                                 // 122
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                        // 123
        return Spacebars.mustache(view.lookup("_"), "Name");                                                           // 124
      }), " (", Blaze.View("lookup:_", function() {                                                                    // 125
        return Spacebars.mustache(view.lookup("_"), "optional");                                                       // 126
      }), ")"), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                // 127
        type: "text",                                                                                                  // 128
        name: "name",                                                                                                  // 129
        value: function() {                                                                                            // 130
          return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "name"));                                       // 131
        },                                                                                                             // 132
        placeholder: function() {                                                                                      // 133
          return Spacebars.mustache(view.lookup("_"), "Optional");                                                     // 134
        }                                                                                                              // 135
      }), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                         // 136
        class: "settings-description"                                                                                  // 137
      }, Blaze.View("lookup:_", function() {                                                                           // 138
        return Spacebars.mustache(view.lookup("_"), "You_should_name_it_to_easily_manage_your_integrations");          // 139
      })), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                 // 140
        return Spacebars.call(view.lookup("shouldDisplayChannel"));                                                    // 141
      }, function() {                                                                                                  // 142
        return [ "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 143
          class: "input-line double-col"                                                                               // 144
        }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                    // 145
          return Spacebars.mustache(view.lookup("_"), "Channel");                                                      // 146
        })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                               // 147
          type: "text",                                                                                                // 148
          name: "channel",                                                                                             // 149
          value: function() {                                                                                          // 150
            return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "channel"));                                  // 151
          },                                                                                                           // 152
          placeholder: function() {                                                                                    // 153
            return Spacebars.mustache(view.lookup("_"), "User_or_channel_name");                                       // 154
          }                                                                                                            // 155
        }), "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                     // 156
          class: "settings-description"                                                                                // 157
        }, Blaze.View("lookup:_", function() {                                                                         // 158
          return Spacebars.mustache(view.lookup("_"), "Channel_to_listen_on");                                         // 159
        })), "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 160
          class: "settings-description"                                                                                // 161
        }, Blaze.View("lookup:_", function() {                                                                         // 162
          return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Start_with_s_for_user_or_s_for_channel_Eg_s_or_s", "@", "#", "@john", "#general"));
        })), "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 164
          class: "settings-description"                                                                                // 165
        }, Blaze.View("lookup:_", function() {                                                                         // 166
          return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Integrations_for_all_channels"));             // 167
        })), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t" ];                               // 168
      }), "\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 169
        return Spacebars.call(view.lookup("shouldDisplayTriggerWords"));                                               // 170
      }, function() {                                                                                                  // 171
        return [ "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 172
          class: "input-line double-col"                                                                               // 173
        }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                    // 174
          return Spacebars.mustache(view.lookup("_"), "Trigger_Words");                                                // 175
        }), " (", Blaze.View("lookup:_", function() {                                                                  // 176
          return Spacebars.mustache(view.lookup("_"), "optional");                                                     // 177
        }), ")"), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                          // 178
          type: "text",                                                                                                // 179
          name: "triggerWords",                                                                                        // 180
          value: function() {                                                                                          // 181
            return Spacebars.mustache(view.lookup("join"), Spacebars.dot(view.lookup("data"), "triggerWords"), ",");   // 182
          }                                                                                                            // 183
        }), "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                     // 184
          class: "settings-description"                                                                                // 185
        }, Blaze.View("lookup:_", function() {                                                                         // 186
          return Spacebars.mustache(view.lookup("_"), "When a line starts with one of these words, post to the URL(s) below");
        })), "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 188
          class: "settings-description"                                                                                // 189
        }, Blaze.View("lookup:_", function() {                                                                         // 190
          return Spacebars.mustache(view.lookup("_"), "Separate multiple words with commas");                          // 191
        })), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t" ];                               // 192
      }), "\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 193
        return Spacebars.call(view.lookup("shouldDisplayTargetRoom"));                                                 // 194
      }, function() {                                                                                                  // 195
        return [ "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 196
          class: "input-line double-col"                                                                               // 197
        }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                    // 198
          return Spacebars.mustache(view.lookup("_"), "TargetRoom");                                                   // 199
        })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                               // 200
          type: "text",                                                                                                // 201
          name: "targetRoom",                                                                                          // 202
          value: function() {                                                                                          // 203
            return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "targetRoom"));                               // 204
          },                                                                                                           // 205
          placeholder: function() {                                                                                    // 206
            return Spacebars.mustache(view.lookup("_"), "User_or_channel_name");                                       // 207
          }                                                                                                            // 208
        }), "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                     // 209
          class: "settings-description"                                                                                // 210
        }, Blaze.View("lookup:_", function() {                                                                         // 211
          return Spacebars.mustache(view.lookup("_"), "TargetRoom_Description");                                       // 212
        })), "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 213
          class: "settings-description"                                                                                // 214
        }, Blaze.View("lookup:_", function() {                                                                         // 215
          return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Start_with_s_for_user_or_s_for_channel_Eg_s_or_s", "@", "#", "@john", "#general"));
        })), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t" ];                               // 217
      }), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                             // 218
        class: "input-line double-col"                                                                                 // 219
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                        // 220
        return Spacebars.mustache(view.lookup("_"), "URLs");                                                           // 221
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t", HTML.TEXTAREA({                                  // 222
        name: "urls",                                                                                                  // 223
        style: "height: 100px;",                                                                                       // 224
        value: function() {                                                                                            // 225
          return Spacebars.mustache(view.lookup("join"), Spacebars.dot(view.lookup("data"), "urls"), "\n");            // 226
        }                                                                                                              // 227
      }), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                         // 228
        class: "settings-description"                                                                                  // 229
      }, Blaze.View("lookup:_", function() {                                                                           // 230
        return Spacebars.mustache(view.lookup("_"), "Enter as many URLs as you like, one per line, please");           // 231
      })), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                            // 232
        class: "input-line double-col"                                                                                 // 233
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                        // 234
        return Spacebars.mustache(view.lookup("_"), "Impersonate_user");                                               // 235
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                          // 236
        type: "radio",                                                                                                 // 237
        name: "impersonateUser",                                                                                       // 238
        value: "1",                                                                                                    // 239
        checked: function() {                                                                                          // 240
          return Spacebars.mustache(view.lookup("$eq"), Spacebars.dot(view.lookup("data"), "impersonateUser"), true);  // 241
        }                                                                                                              // 242
      }), " ", Blaze.View("lookup:_", function() {                                                                     // 243
        return Spacebars.mustache(view.lookup("_"), "True");                                                           // 244
      })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                           // 245
        type: "radio",                                                                                                 // 246
        name: "impersonateUser",                                                                                       // 247
        value: "0",                                                                                                    // 248
        checked: function() {                                                                                          // 249
          return Spacebars.mustache(view.lookup("$neq"), Spacebars.dot(view.lookup("data"), "impersonateUser"), true);
        }                                                                                                              // 251
      }), " ", Blaze.View("lookup:_", function() {                                                                     // 252
        return Spacebars.mustache(view.lookup("_"), "False");                                                          // 253
      })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                        // 254
        class: "settings-description"                                                                                  // 255
      }, Blaze.View("lookup:_", function() {                                                                           // 256
        return Spacebars.mustache(view.lookup("_"), "Impersonate_user_description");                                   // 257
      })), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                            // 258
        class: "input-line double-col"                                                                                 // 259
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                        // 260
        return Spacebars.mustache(view.lookup("_"), "Post_as");                                                        // 261
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                     // 262
        type: "text",                                                                                                  // 263
        name: "username",                                                                                              // 264
        value: function() {                                                                                            // 265
          return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "username"));                                   // 266
        }                                                                                                              // 267
      }), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                         // 268
        class: "settings-description"                                                                                  // 269
      }, Blaze.View("lookup:_", function() {                                                                           // 270
        return Spacebars.mustache(view.lookup("_"), "Choose_the_username_that_this_integration_will_post_as");         // 271
      })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                        // 272
        class: "settings-description"                                                                                  // 273
      }, Blaze.View("lookup:_", function() {                                                                           // 274
        return Spacebars.mustache(view.lookup("_"), "Should_exists_a_user_with_this_username");                        // 275
      })), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                            // 276
        class: "input-line double-col"                                                                                 // 277
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                        // 278
        return Spacebars.mustache(view.lookup("_"), "Alias");                                                          // 279
      }), " (", Blaze.View("lookup:_", function() {                                                                    // 280
        return Spacebars.mustache(view.lookup("_"), "optional");                                                       // 281
      }), ")"), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                // 282
        type: "text",                                                                                                  // 283
        name: "alias",                                                                                                 // 284
        value: function() {                                                                                            // 285
          return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "alias"));                                      // 286
        },                                                                                                             // 287
        placeholder: function() {                                                                                      // 288
          return Spacebars.mustache(view.lookup("_"), "Optional");                                                     // 289
        }                                                                                                              // 290
      }), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                         // 291
        class: "settings-description"                                                                                  // 292
      }, Blaze.View("lookup:_", function() {                                                                           // 293
        return Spacebars.mustache(view.lookup("_"), "Choose_the_alias_that_will_appear_before_the_username_in_messages");
      })), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                            // 295
        class: "input-line double-col"                                                                                 // 296
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                        // 297
        return Spacebars.mustache(view.lookup("_"), "Avatar_URL");                                                     // 298
      }), " (", Blaze.View("lookup:_", function() {                                                                    // 299
        return Spacebars.mustache(view.lookup("_"), "optional");                                                       // 300
      }), ")"), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                // 301
        type: "url",                                                                                                   // 302
        name: "avatar",                                                                                                // 303
        value: function() {                                                                                            // 304
          return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "avatar"));                                     // 305
        },                                                                                                             // 306
        placeholder: function() {                                                                                      // 307
          return Spacebars.mustache(view.lookup("_"), "Optional");                                                     // 308
        }                                                                                                              // 309
      }), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                         // 310
        class: "settings-description"                                                                                  // 311
      }, Blaze.View("lookup:_", function() {                                                                           // 312
        return Spacebars.mustache(view.lookup("_"), "You_can_change_a_different_avatar_too");                          // 313
      })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                        // 314
        class: "settings-description"                                                                                  // 315
      }, Blaze.View("lookup:_", function() {                                                                           // 316
        return Spacebars.mustache(view.lookup("_"), "Should_be_a_URL_of_an_image");                                    // 317
      })), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                            // 318
        class: "input-line double-col"                                                                                 // 319
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                        // 320
        return Spacebars.mustache(view.lookup("_"), "Emoji");                                                          // 321
      }), " (", Blaze.View("lookup:_", function() {                                                                    // 322
        return Spacebars.mustache(view.lookup("_"), "optional");                                                       // 323
      }), ")"), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                // 324
        type: "text",                                                                                                  // 325
        name: "emoji",                                                                                                 // 326
        value: function() {                                                                                            // 327
          return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "emoji"));                                      // 328
        },                                                                                                             // 329
        placeholder: function() {                                                                                      // 330
          return Spacebars.mustache(view.lookup("_"), "Optional");                                                     // 331
        }                                                                                                              // 332
      }), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                         // 333
        class: "settings-description"                                                                                  // 334
      }, Blaze.View("lookup:_", function() {                                                                           // 335
        return Spacebars.mustache(view.lookup("_"), "You_can_use_an_emoji_as_avatar");                                 // 336
      })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                        // 337
        class: "settings-description"                                                                                  // 338
      }, Blaze.View("lookup:_", function() {                                                                           // 339
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Example_s", ":ghost:"));                        // 340
      })), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                            // 341
        class: "input-line double-col"                                                                                 // 342
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL("Token (", Blaze.View("lookup:_", function() {                             // 343
        return Spacebars.mustache(view.lookup("_"), "optional");                                                       // 344
      }), ")"), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                // 345
        type: "text",                                                                                                  // 346
        name: "token",                                                                                                 // 347
        value: function() {                                                                                            // 348
          return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "token"));                                      // 349
        }                                                                                                              // 350
      }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                             // 351
        class: "input-line double-col"                                                                                 // 352
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                        // 353
        return Spacebars.mustache(view.lookup("_"), "Script_Enabled");                                                 // 354
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                          // 355
        type: "radio",                                                                                                 // 356
        name: "scriptEnabled",                                                                                         // 357
        value: "1",                                                                                                    // 358
        checked: function() {                                                                                          // 359
          return Spacebars.mustache(view.lookup("$eq"), Spacebars.dot(view.lookup("data"), "scriptEnabled"), true);    // 360
        }                                                                                                              // 361
      }), " ", Blaze.View("lookup:_", function() {                                                                     // 362
        return Spacebars.mustache(view.lookup("_"), "True");                                                           // 363
      })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                           // 364
        type: "radio",                                                                                                 // 365
        name: "scriptEnabled",                                                                                         // 366
        value: "0",                                                                                                    // 367
        checked: function() {                                                                                          // 368
          return Spacebars.mustache(view.lookup("$neq"), Spacebars.dot(view.lookup("data"), "scriptEnabled"), true);   // 369
        }                                                                                                              // 370
      }), " ", Blaze.View("lookup:_", function() {                                                                     // 371
        return Spacebars.mustache(view.lookup("_"), "False");                                                          // 372
      })), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                            // 373
        class: "input-line double-col"                                                                                 // 374
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                        // 375
        return Spacebars.mustache(view.lookup("_"), "Script");                                                         // 376
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                       // 377
        class: "code-mirror-box"                                                                                       // 378
      }, "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                        // 379
        class: "title"                                                                                                 // 380
      }, "\n\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                             // 381
        return Spacebars.mustache(view.lookup("_"), "Script");                                                         // 382
      }), "\n\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                    // 383
        return {                                                                                                       // 384
          name: Spacebars.call("script"),                                                                              // 385
          options: Spacebars.call(view.lookup("editorOptions")),                                                       // 386
          code: Spacebars.call(Spacebars.dot(view.lookup("data"), "script"))                                           // 387
        };                                                                                                             // 388
      }, function() {                                                                                                  // 389
        return Spacebars.include(view.lookupTemplate("CodeMirror"));                                                   // 390
      }), "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                       // 391
        class: "buttons"                                                                                               // 392
      }, "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                   // 393
        class: "button primary button-fullscreen"                                                                      // 394
      }, "Full Screen"), "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                   // 395
        class: "button primary button-restore"                                                                         // 396
      }, "Exit Full Screen"), "\n\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {
        return Spacebars.call(Spacebars.dot(view.lookup("data"), "scriptError"));                                      // 398
      }, function() {                                                                                                  // 399
        return [ "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                // 400
          class: "code-error-box"                                                                                      // 401
        }, "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 402
          class: "title color-content-background-color background-error-color"                                         // 403
        }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:data.scriptError.name", function() {                     // 404
          return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "scriptError", "name"));                        // 405
        }), "\n\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.PRE({                                    // 406
          class: "script-error background-transparent-lightest error-color error-border"                               // 407
        }, Blaze.View("lookup:data.scriptError.message", function() {                                                  // 408
          return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "scriptError", "message"));                     // 409
        })), "\n\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t" ];                                                  // 410
      }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                             // 411
        class: "input-line double-col"                                                                                 // 412
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                        // 413
        return Spacebars.mustache(view.lookup("_"), "Responding");                                                     // 414
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                       // 415
        class: "settings-description"                                                                                  // 416
      }, Blaze.View("lookup:_", function() {                                                                           // 417
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "If the handler wishes to post a response back into the channel, the following JSON should be returned as the body of the response:"));
      })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.PRE(HTML.CODE({                                                              // 419
        class: "code-colors hljs json json-example"                                                                    // 420
      }, Blaze.View("lookup:exampleJson", function() {                                                                 // 421
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("exampleJson")));                                      // 422
      }))), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                       // 423
        class: "settings-description"                                                                                  // 424
      }, Blaze.View("lookup:_", function() {                                                                           // 425
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Empty bodies or bodies with an empty text property will simply be ignored. Non-200 responses will be retried a reasonable number of times. A response will be posted using the alias and avatar specified above. You can override these informations as in the example above."));
      })), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                            // 427
        class: "input-line message-example"                                                                            // 428
      }, "\n\t\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                      // 429
        return Spacebars.dataMustache(view.lookup("nrrargs"), "message", view.lookup("example"));                      // 430
      }, function() {                                                                                                  // 431
        return Spacebars.include(view.lookupTemplate("nrr"), function() {                                              // 432
          return null;                                                                                                 // 433
        });                                                                                                            // 434
      }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];                                                                 // 435
    }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", Blaze.If(function() {                                      // 436
      return Spacebars.call(view.lookup("hasTypeSelected"));                                                           // 437
    }, function() {                                                                                                    // 438
      return [ "\n\t\t\t\t\t\t", HTML.DIV({                                                                            // 439
        class: "section section-collapsed"                                                                             // 440
      }, "\n\t\t\t\t\t\t\t", HTML.DIV({                                                                                // 441
        class: "section-title"                                                                                         // 442
      }, "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                              // 443
        class: "section-title-text"                                                                                    // 444
      }, Blaze.View("lookup:_", function() {                                                                           // 445
        return Spacebars.mustache(view.lookup("_"), "Integration_Advanced_Settings");                                  // 446
      })), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                            // 447
        class: "section-title-right"                                                                                   // 448
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                         // 449
        class: "button primary expand"                                                                                 // 450
      }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                 // 451
        return Spacebars.mustache(view.lookup("_"), "Expand");                                                         // 452
      }))), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({                                 // 453
        class: "section-content"                                                                                       // 454
      }, "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                              // 455
        class: "input-line double-col"                                                                                 // 456
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                        // 457
        return Spacebars.mustache(view.lookup("_"), "Integration_Retry_Failed_Url_Calls");                             // 458
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                          // 459
        type: "radio",                                                                                                 // 460
        name: "retryFailedCalls",                                                                                      // 461
        value: "1",                                                                                                    // 462
        checked: function() {                                                                                          // 463
          return Spacebars.mustache(view.lookup("$eq"), Spacebars.dot(view.lookup("data"), "retryFailedCalls"), true);
        }                                                                                                              // 465
      }), " ", Blaze.View("lookup:_", function() {                                                                     // 466
        return Spacebars.mustache(view.lookup("_"), "True");                                                           // 467
      })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                           // 468
        type: "radio",                                                                                                 // 469
        name: "retryFailedCalls",                                                                                      // 470
        value: "0",                                                                                                    // 471
        checked: function() {                                                                                          // 472
          return Spacebars.mustache(view.lookup("$neq"), Spacebars.dot(view.lookup("data"), "retryFailedCalls"), true);
        }                                                                                                              // 474
      }), " ", Blaze.View("lookup:_", function() {                                                                     // 475
        return Spacebars.mustache(view.lookup("_"), "False");                                                          // 476
      })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                        // 477
        class: "settings-description"                                                                                  // 478
      }, Blaze.View("lookup:_", function() {                                                                           // 479
        return Spacebars.mustache(view.lookup("_"), "Integration_Retry_Failed_Url_Calls_Description");                 // 480
      })), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                 // 481
        return Spacebars.call(Spacebars.dot(view.lookup("data"), "retryFailedCalls"));                                 // 482
      }, function() {                                                                                                  // 483
        return [ "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 484
          class: "input-line double-col"                                                                               // 485
        }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                    // 486
          return Spacebars.mustache(view.lookup("_"), "Integration_Retry_Count");                                      // 487
        })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                               // 488
          type: "number",                                                                                              // 489
          name: "retryCount",                                                                                          // 490
          value: function() {                                                                                          // 491
            return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "retryCount"));                               // 492
          }                                                                                                            // 493
        }), "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                     // 494
          class: "settings-description"                                                                                // 495
        }, Blaze.View("lookup:_", function() {                                                                         // 496
          return Spacebars.mustache(view.lookup("_"), "Integration_Retry_Count_Description");                          // 497
        })), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                    // 498
          class: "input-line double-col"                                                                               // 499
        }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                    // 500
          return Spacebars.mustache(view.lookup("_"), "Integration_Retry_Delay");                                      // 501
        })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t\t", HTML.SELECT({                              // 502
          name: "retryDelay",                                                                                          // 503
          class: "required"                                                                                            // 504
        }, "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                 // 505
          value: "powers-of-ten",                                                                                      // 506
          selected: function() {                                                                                       // 507
            return Spacebars.mustache(view.lookup("$eq"), Spacebars.dot(view.lookup("data"), "retryDelay"), "powers-of-ten");
          },                                                                                                           // 509
          dir: "auto"                                                                                                  // 510
        }, "powers-of-ten"), "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                               // 511
          value: "powers-of-two",                                                                                      // 512
          selected: function() {                                                                                       // 513
            return Spacebars.mustache(view.lookup("$eq"), Spacebars.dot(view.lookup("data"), "retryDelay"), "powers-of-two");
          },                                                                                                           // 515
          dir: "auto"                                                                                                  // 516
        }, "powers-of-two"), "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                               // 517
          value: "increments-of-two",                                                                                  // 518
          selected: function() {                                                                                       // 519
            return Spacebars.mustache(view.lookup("$eq"), Spacebars.dot(view.lookup("data"), "retryDelay"), "increments-of-two");
          },                                                                                                           // 521
          dir: "auto"                                                                                                  // 522
        }, "increments-of-two"), "\n\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                   // 523
          class: "settings-description"                                                                                // 524
        }, Blaze.View("lookup:_", function() {                                                                         // 525
          return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Integration_Retry_Delay_Description"));       // 526
        })), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t" ];                               // 527
      }), "\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 528
        return Spacebars.call(view.lookup("shouldDisplayTriggerWords"));                                               // 529
      }, function() {                                                                                                  // 530
        return [ "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 531
          class: "input-line double-col"                                                                               // 532
        }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                    // 533
          return Spacebars.mustache(view.lookup("_"), "Integration_Word_Trigger_Placement");                           // 534
        })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                    // 535
          type: "radio",                                                                                               // 536
          name: "triggerWordAnywhere",                                                                                 // 537
          value: "1",                                                                                                  // 538
          checked: function() {                                                                                        // 539
            return Spacebars.mustache(view.lookup("$eq"), Spacebars.dot(view.lookup("data"), "triggerWordAnywhere"), true);
          }                                                                                                            // 541
        }), " ", Blaze.View("lookup:_", function() {                                                                   // 542
          return Spacebars.mustache(view.lookup("_"), "True");                                                         // 543
        })), "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                       // 544
          type: "radio",                                                                                               // 545
          name: "triggerWordAnywhere",                                                                                 // 546
          value: "0",                                                                                                  // 547
          checked: function() {                                                                                        // 548
            return Spacebars.mustache(view.lookup("$neq"), Spacebars.dot(view.lookup("data"), "triggerWordAnywhere"), true);
          }                                                                                                            // 550
        }), " ", Blaze.View("lookup:_", function() {                                                                   // 551
          return Spacebars.mustache(view.lookup("_"), "False");                                                        // 552
        })), "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 553
          class: "settings-description"                                                                                // 554
        }, Blaze.View("lookup:_", function() {                                                                         // 555
          return Spacebars.mustache(view.lookup("_"), "Integration_Word_Trigger_Placement_Description");               // 556
        })), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                    // 557
          class: "input-line double-col"                                                                               // 558
        }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                    // 559
          return Spacebars.mustache(view.lookup("_"), "Integration_Run_When_Message_Is_Edited");                       // 560
        })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                    // 561
          type: "radio",                                                                                               // 562
          name: "runOnEdits",                                                                                          // 563
          value: "1",                                                                                                  // 564
          checked: function() {                                                                                        // 565
            return Spacebars.mustache(view.lookup("$eq"), Spacebars.dot(view.lookup("data"), "runOnEdits"), true);     // 566
          }                                                                                                            // 567
        }), " ", Blaze.View("lookup:_", function() {                                                                   // 568
          return Spacebars.mustache(view.lookup("_"), "True");                                                         // 569
        })), "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                       // 570
          type: "radio",                                                                                               // 571
          name: "runOnEdits",                                                                                          // 572
          value: "0",                                                                                                  // 573
          checked: function() {                                                                                        // 574
            return Spacebars.mustache(view.lookup("$neq"), Spacebars.dot(view.lookup("data"), "runOnEdits"), true);    // 575
          }                                                                                                            // 576
        }), " ", Blaze.View("lookup:_", function() {                                                                   // 577
          return Spacebars.mustache(view.lookup("_"), "False");                                                        // 578
        })), "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 579
          class: "settings-description"                                                                                // 580
        }, Blaze.View("lookup:_", function() {                                                                         // 581
          return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Integration_Run_When_Message_Is_Edited_Description"));
        })), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t" ];                               // 583
      }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                                                    // 584
    }), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                                   // 585
  }), "\n\t\t"), "\n\t");                                                                                              // 586
}));                                                                                                                   // 587
                                                                                                                       // 588
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"integrationsOutgoing.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_integrations/client/views/integrationsOutgoing.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var hljs = void 0;                                                                                                     // 1
module.watch(require("highlight.js"), {                                                                                // 1
	"default": function (v) {                                                                                             // 1
		hljs = v;                                                                                                            // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
var toastr = void 0;                                                                                                   // 1
module.watch(require("toastr"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		toastr = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 1);                                                                                                                 // 1
Template.integrationsOutgoing.onCreated(function () {                                                                  // 6
	function _integrationsOutgoingOnCreated() {                                                                           // 6
		var _this = this;                                                                                                    // 6
                                                                                                                       //
		this.record = new ReactiveVar({                                                                                      // 7
			username: 'rocket.cat',                                                                                             // 8
			token: Random.id(24),                                                                                               // 9
			retryFailedCalls: true,                                                                                             // 10
			retryCount: 6,                                                                                                      // 11
			retryDelay: 'powers-of-ten',                                                                                        // 12
			runOnEdits: true                                                                                                    // 13
		});                                                                                                                  // 7
                                                                                                                       //
		this.updateRecord = function () {                                                                                    // 16
			_this.record.set({                                                                                                  // 17
				enabled: $('[name=enabled]:checked').val().trim() === '1',                                                         // 18
				event: $('[name=event]').val().trim(),                                                                             // 19
				name: $('[name=name]').val().trim(),                                                                               // 20
				alias: $('[name=alias]').val().trim(),                                                                             // 21
				emoji: $('[name=emoji]').val().trim(),                                                                             // 22
				avatar: $('[name=avatar]').val().trim(),                                                                           // 23
				channel: $('[name=channel]').val() ? $('[name=channel]').val().trim() : undefined,                                 // 24
				username: $('[name=username]').val().trim(),                                                                       // 25
				triggerWords: $('[name=triggerWords]').val() ? $('[name=triggerWords]').val().trim() : undefined,                  // 26
				urls: $('[name=urls]').val().trim(),                                                                               // 27
				token: $('[name=token]').val().trim(),                                                                             // 28
				scriptEnabled: $('[name=scriptEnabled]:checked').val().trim() === '1',                                             // 29
				script: $('[name=script]').val().trim(),                                                                           // 30
				targetRoom: $('[name=targetRoom]').val() ? $('[name=targetRoom]').val().trim() : undefined,                        // 31
				triggerWordAnywhere: $('[name=triggerWordAnywhere]').val() ? $('[name=triggerWordAnywhere]').val().trim() : undefined,
				retryFailedCalls: $('[name=retryFailedCalls]:checked').val().trim() === '1',                                       // 33
				retryCount: $('[name=retryCount]').val() ? $('[name=retryCount]').val().trim() : 6,                                // 34
				retryDelay: $('[name=retryDelay]').val() ? $('[name=retryDelay]').val().trim() : 'powers-of-ten',                  // 35
				runOnEdits: $('[name=runOnEdits]:checked').val().trim() === '1'                                                    // 36
			});                                                                                                                 // 17
		};                                                                                                                   // 38
                                                                                                                       //
		this.autorun(function () {                                                                                           // 40
			var id = _this.data && _this.data.params && _this.data.params().id;                                                 // 41
                                                                                                                       //
			if (id) {                                                                                                           // 43
				var sub = _this.subscribe('integrations');                                                                         // 44
                                                                                                                       //
				if (sub.ready()) {                                                                                                 // 45
					var intRecord = void 0;                                                                                           // 46
                                                                                                                       //
					if (RocketChat.authz.hasAllPermission('manage-integrations')) {                                                   // 48
						intRecord = ChatIntegrations.findOne({                                                                           // 49
							_id: id                                                                                                         // 49
						});                                                                                                              // 49
					} else if (RocketChat.authz.hasAllPermission('manage-own-integrations')) {                                        // 50
						intRecord = ChatIntegrations.findOne({                                                                           // 51
							_id: id,                                                                                                        // 51
							'_createdBy._id': Meteor.userId()                                                                               // 51
						});                                                                                                              // 51
					}                                                                                                                 // 52
                                                                                                                       //
					if (intRecord) {                                                                                                  // 54
						_this.record.set(intRecord);                                                                                     // 55
					} else {                                                                                                          // 56
						toastr.error(TAPi18n.__('No_integration_found'));                                                                // 57
						FlowRouter.go('admin-integrations');                                                                             // 58
					}                                                                                                                 // 59
				}                                                                                                                  // 60
			}                                                                                                                   // 61
		});                                                                                                                  // 62
	}                                                                                                                     // 63
                                                                                                                       //
	return _integrationsOutgoingOnCreated;                                                                                // 6
}());                                                                                                                  // 6
Template.integrationsOutgoing.helpers({                                                                                // 65
	join: function (arr, sep) {                                                                                           // 66
		if (!arr || !arr.join) {                                                                                             // 67
			return arr;                                                                                                         // 68
		}                                                                                                                    // 69
                                                                                                                       //
		return arr.join(sep);                                                                                                // 71
	},                                                                                                                    // 72
	showHistoryButton: function () {                                                                                      // 74
		return this.params && this.params() && typeof this.params().id !== 'undefined';                                      // 75
	},                                                                                                                    // 76
	hasPermission: function () {                                                                                          // 78
		return RocketChat.authz.hasAtLeastOnePermission(['manage-integrations', 'manage-own-integrations']);                 // 79
	},                                                                                                                    // 80
	data: function () {                                                                                                   // 82
		return Template.instance().record.get();                                                                             // 83
	},                                                                                                                    // 84
	canDelete: function () {                                                                                              // 86
		return this.params && this.params() && typeof this.params().id !== 'undefined';                                      // 87
	},                                                                                                                    // 88
	eventTypes: function () {                                                                                             // 90
		return Object.values(RocketChat.integrations.outgoingEvents);                                                        // 91
	},                                                                                                                    // 92
	hasTypeSelected: function () {                                                                                        // 94
		var record = Template.instance().record.get();                                                                       // 95
		return typeof record.event === 'string' && record.event !== '';                                                      // 97
	},                                                                                                                    // 98
	shouldDisplayChannel: function () {                                                                                   // 100
		var record = Template.instance().record.get();                                                                       // 101
		return typeof record.event === 'string' && RocketChat.integrations.outgoingEvents[record.event].use.channel;         // 103
	},                                                                                                                    // 104
	shouldDisplayTriggerWords: function () {                                                                              // 106
		var record = Template.instance().record.get();                                                                       // 107
		return typeof record.event === 'string' && RocketChat.integrations.outgoingEvents[record.event].use.triggerWords;    // 109
	},                                                                                                                    // 110
	shouldDisplayTargetRoom: function () {                                                                                // 112
		var record = Template.instance().record.get();                                                                       // 113
		return typeof record.event === 'string' && RocketChat.integrations.outgoingEvents[record.event].use.targetRoom;      // 115
	},                                                                                                                    // 116
	example: function () {                                                                                                // 118
		var record = Template.instance().record.get();                                                                       // 119
		return {                                                                                                             // 121
			_id: Random.id(),                                                                                                   // 122
			alias: record.alias,                                                                                                // 123
			emoji: record.emoji,                                                                                                // 124
			avatar: record.avatar,                                                                                              // 125
			msg: 'Response text',                                                                                               // 126
			bot: {                                                                                                              // 127
				i: Random.id()                                                                                                     // 128
			},                                                                                                                  // 127
			groupable: false,                                                                                                   // 130
			attachments: [{                                                                                                     // 131
				title: 'Rocket.Chat',                                                                                              // 132
				title_link: 'https://rocket.chat',                                                                                 // 133
				text: 'Rocket.Chat, the best open source chat',                                                                    // 134
				image_url: 'https://rocket.chat/images/mockup.png',                                                                // 135
				color: '#764FA5'                                                                                                   // 136
			}],                                                                                                                 // 131
			ts: new Date(),                                                                                                     // 138
			u: {                                                                                                                // 139
				_id: Random.id(),                                                                                                  // 140
				username: record.username                                                                                          // 141
			}                                                                                                                   // 139
		};                                                                                                                   // 121
	},                                                                                                                    // 144
	exampleJson: function () {                                                                                            // 146
		var record = Template.instance().record.get();                                                                       // 147
		var data = {                                                                                                         // 148
			username: record.alias,                                                                                             // 149
			icon_emoji: record.emoji,                                                                                           // 150
			icon_url: record.avatar,                                                                                            // 151
			text: 'Response text',                                                                                              // 152
			attachments: [{                                                                                                     // 153
				title: 'Rocket.Chat',                                                                                              // 154
				title_link: 'https://rocket.chat',                                                                                 // 155
				text: 'Rocket.Chat, the best open source chat',                                                                    // 156
				image_url: 'https://rocket.chat/images/mockup.png',                                                                // 157
				color: '#764FA5'                                                                                                   // 158
			}]                                                                                                                  // 153
		};                                                                                                                   // 148
		var invalidData = [null, ''];                                                                                        // 162
		Object.keys(data).forEach(function (key) {                                                                           // 163
			if (invalidData.includes(data[key])) {                                                                              // 164
				delete data[key];                                                                                                  // 165
			}                                                                                                                   // 166
		});                                                                                                                  // 167
		return hljs.highlight('json', JSON.stringify(data, null, 2)).value;                                                  // 169
	},                                                                                                                    // 170
	editorOptions: function () {                                                                                          // 172
		return {                                                                                                             // 173
			lineNumbers: true,                                                                                                  // 174
			mode: 'javascript',                                                                                                 // 175
			gutters: [// "CodeMirror-lint-markers",                                                                             // 176
			'CodeMirror-linenumbers', 'CodeMirror-foldgutter'],                                                                 // 178
			// lint: true,                                                                                                      // 181
			foldGutter: true,                                                                                                   // 182
			// lineWrapping: true,                                                                                              // 183
			matchBrackets: true,                                                                                                // 184
			autoCloseBrackets: true,                                                                                            // 185
			matchTags: true,                                                                                                    // 186
			showTrailingSpace: true,                                                                                            // 187
			highlightSelectionMatches: true                                                                                     // 188
		};                                                                                                                   // 173
	}                                                                                                                     // 190
});                                                                                                                    // 65
Template.integrationsOutgoing.events({                                                                                 // 193
	'blur input': function (e, t) {                                                                                       // 194
		t.updateRecord();                                                                                                    // 195
	},                                                                                                                    // 196
	'click input[type=radio]': function (e, t) {                                                                          // 198
		t.updateRecord();                                                                                                    // 199
	},                                                                                                                    // 200
	'change select[name=event]': function (e, t) {                                                                        // 202
		var record = t.record.get();                                                                                         // 203
		record.event = $('[name=event]').val().trim();                                                                       // 204
		t.record.set(record);                                                                                                // 206
	},                                                                                                                    // 207
	'click .button.history': function () {                                                                                // 209
		FlowRouter.go("/admin/integrations/outgoing/" + FlowRouter.getParam('id') + "/history");                             // 210
	},                                                                                                                    // 211
	'click .expand': function (e) {                                                                                       // 213
		$(e.currentTarget).closest('.section').removeClass('section-collapsed');                                             // 214
		$(e.currentTarget).closest('button').removeClass('expand').addClass('collapse').find('span').text(TAPi18n.__('Collapse'));
		$('.CodeMirror').each(function (index, codeMirror) {                                                                 // 216
			return codeMirror.CodeMirror.refresh();                                                                             // 216
		});                                                                                                                  // 216
	},                                                                                                                    // 217
	'click .collapse': function (e) {                                                                                     // 219
		$(e.currentTarget).closest('.section').addClass('section-collapsed');                                                // 220
		$(e.currentTarget).closest('button').addClass('expand').removeClass('collapse').find('span').text(TAPi18n.__('Expand'));
	},                                                                                                                    // 222
	'click .submit > .delete': function () {                                                                              // 224
		var params = Template.instance().data.params();                                                                      // 225
		swal({                                                                                                               // 227
			title: t('Are_you_sure'),                                                                                           // 228
			text: t('You_will_not_be_able_to_recover'),                                                                         // 229
			type: 'warning',                                                                                                    // 230
			showCancelButton: true,                                                                                             // 231
			confirmButtonColor: '#DD6B55',                                                                                      // 232
			confirmButtonText: t('Yes_delete_it'),                                                                              // 233
			cancelButtonText: t('Cancel'),                                                                                      // 234
			closeOnConfirm: false,                                                                                              // 235
			html: false                                                                                                         // 236
		}, function () {                                                                                                     // 227
			Meteor.call('deleteOutgoingIntegration', params.id, function (err) {                                                // 238
				if (err) {                                                                                                         // 239
					handleError(err);                                                                                                 // 240
				} else {                                                                                                           // 241
					swal({                                                                                                            // 242
						title: t('Deleted'),                                                                                             // 243
						text: t('Your_entry_has_been_deleted'),                                                                          // 244
						type: 'success',                                                                                                 // 245
						timer: 1000,                                                                                                     // 246
						showConfirmButton: false                                                                                         // 247
					});                                                                                                               // 242
					FlowRouter.go('admin-integrations');                                                                              // 250
				}                                                                                                                  // 251
			});                                                                                                                 // 252
		});                                                                                                                  // 253
	},                                                                                                                    // 254
	'click .button-fullscreen': function () {                                                                             // 256
		$('.code-mirror-box').addClass('code-mirror-box-fullscreen content-background-color');                               // 257
		$('.CodeMirror')[0].CodeMirror.refresh();                                                                            // 258
	},                                                                                                                    // 259
	'click .button-restore': function () {                                                                                // 261
		$('.code-mirror-box').removeClass('code-mirror-box-fullscreen content-background-color');                            // 262
		$('.CodeMirror')[0].CodeMirror.refresh();                                                                            // 263
	},                                                                                                                    // 264
	'click .submit > .save': function () {                                                                                // 266
		var event = $('[name=event]').val().trim();                                                                          // 267
		var enabled = $('[name=enabled]:checked').val().trim();                                                              // 268
		var name = $('[name=name]').val().trim();                                                                            // 269
		var impersonateUser = $('[name=impersonateUser]:checked').val().trim();                                              // 270
		var alias = $('[name=alias]').val().trim();                                                                          // 271
		var emoji = $('[name=emoji]').val().trim();                                                                          // 272
		var avatar = $('[name=avatar]').val().trim();                                                                        // 273
		var username = $('[name=username]').val().trim();                                                                    // 274
		var token = $('[name=token]').val().trim();                                                                          // 275
		var scriptEnabled = $('[name=scriptEnabled]:checked').val().trim();                                                  // 276
		var script = $('[name=script]').val().trim();                                                                        // 277
		var retryFailedCalls = $('[name=retryFailedCalls]:checked').val().trim();                                            // 278
		var urls = $('[name=urls]').val().trim();                                                                            // 279
                                                                                                                       //
		if (username === '' && impersonateUser === '0') {                                                                    // 281
			return toastr.error(TAPi18n.__('The_username_is_required'));                                                        // 282
		}                                                                                                                    // 283
                                                                                                                       //
		urls = urls.split('\n').filter(function (url) {                                                                      // 285
			return url.trim() !== '';                                                                                           // 285
		});                                                                                                                  // 285
                                                                                                                       //
		if (urls.length === 0) {                                                                                             // 286
			return toastr.error(TAPi18n.__('You_should_inform_one_url_at_least'));                                              // 287
		}                                                                                                                    // 288
                                                                                                                       //
		var triggerWords = void 0;                                                                                           // 290
		var triggerWordAnywhere = void 0;                                                                                    // 291
		var runOnEdits = void 0;                                                                                             // 292
                                                                                                                       //
		if (RocketChat.integrations.outgoingEvents[event].use.triggerWords) {                                                // 293
			triggerWords = $('[name=triggerWords]').val().trim();                                                               // 294
			triggerWords = triggerWords.split(',').filter(function (word) {                                                     // 295
				return word.trim() !== '';                                                                                         // 295
			});                                                                                                                 // 295
			triggerWordAnywhere = $('[name=triggerWordAnywhere]').val().trim();                                                 // 297
			runOnEdits = $('[name=runOnEdits]:checked').val().trim();                                                           // 298
		}                                                                                                                    // 299
                                                                                                                       //
		var channel = void 0;                                                                                                // 301
                                                                                                                       //
		if (RocketChat.integrations.outgoingEvents[event].use.channel) {                                                     // 302
			channel = $('[name=channel]').val().trim();                                                                         // 303
                                                                                                                       //
			if (!channel || channel.trim() === '') {                                                                            // 305
				return toastr.error(TAPi18n.__('error-the-field-is-required', {                                                    // 306
					field: TAPi18n.__('Channel')                                                                                      // 306
				}));                                                                                                               // 306
			}                                                                                                                   // 307
		}                                                                                                                    // 308
                                                                                                                       //
		var targetRoom = void 0;                                                                                             // 310
                                                                                                                       //
		if (RocketChat.integrations.outgoingEvents[event].use.targetRoom) {                                                  // 311
			targetRoom = $('[name=targetRoom]').val().trim();                                                                   // 312
                                                                                                                       //
			if (!targetRoom || targetRoom.trim() === '') {                                                                      // 314
				return toastr.error(TAPi18n.__('error-the-field-is-required', {                                                    // 315
					field: TAPi18n.__('TargetRoom')                                                                                   // 315
				}));                                                                                                               // 315
			}                                                                                                                   // 316
		}                                                                                                                    // 317
                                                                                                                       //
		var retryCount = void 0;                                                                                             // 319
		var retryDelay = void 0;                                                                                             // 320
                                                                                                                       //
		if (retryFailedCalls === '1') {                                                                                      // 321
			retryCount = parseInt($('[name=retryCount]').val().trim());                                                         // 322
			retryDelay = $('[name=retryDelay]').val().trim();                                                                   // 323
		}                                                                                                                    // 324
                                                                                                                       //
		var integration = {                                                                                                  // 326
			event: event !== '' ? event : undefined,                                                                            // 327
			enabled: enabled === '1',                                                                                           // 328
			username: username,                                                                                                 // 329
			channel: channel !== '' ? channel : undefined,                                                                      // 330
			targetRoom: targetRoom !== '' ? targetRoom : undefined,                                                             // 331
			alias: alias !== '' ? alias : undefined,                                                                            // 332
			emoji: emoji !== '' ? emoji : undefined,                                                                            // 333
			avatar: avatar !== '' ? avatar : undefined,                                                                         // 334
			name: name !== '' ? name : undefined,                                                                               // 335
			triggerWords: triggerWords !== '' ? triggerWords : undefined,                                                       // 336
			urls: urls !== '' ? urls : undefined,                                                                               // 337
			token: token !== '' ? token : undefined,                                                                            // 338
			script: script !== '' ? script : undefined,                                                                         // 339
			scriptEnabled: scriptEnabled === '1',                                                                               // 340
			impersonateUser: impersonateUser === '1',                                                                           // 341
			retryFailedCalls: retryFailedCalls === '1',                                                                         // 342
			retryCount: retryCount ? retryCount : 6,                                                                            // 343
			retryDelay: retryDelay ? retryDelay : 'powers-of-ten',                                                              // 344
			triggerWordAnywhere: triggerWordAnywhere === '1',                                                                   // 345
			runOnEdits: runOnEdits === '1'                                                                                      // 346
		};                                                                                                                   // 326
		var params = Template.instance().data.params ? Template.instance().data.params() : undefined;                        // 349
                                                                                                                       //
		if (params && params.id) {                                                                                           // 350
			Meteor.call('updateOutgoingIntegration', params.id, integration, function (err) {                                   // 351
				if (err) {                                                                                                         // 352
					return handleError(err);                                                                                          // 353
				}                                                                                                                  // 354
                                                                                                                       //
				toastr.success(TAPi18n.__('Integration_updated'));                                                                 // 356
			});                                                                                                                 // 357
		} else {                                                                                                             // 358
			Meteor.call('addOutgoingIntegration', integration, function (err, data) {                                           // 359
				if (err) {                                                                                                         // 360
					return handleError(err);                                                                                          // 361
				}                                                                                                                  // 362
                                                                                                                       //
				toastr.success(TAPi18n.__('Integration_added'));                                                                   // 364
				FlowRouter.go('admin-integrations-outgoing', {                                                                     // 365
					id: data._id                                                                                                      // 365
				});                                                                                                                // 365
			});                                                                                                                 // 366
		}                                                                                                                    // 367
	}                                                                                                                     // 368
});                                                                                                                    // 193
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.integrationsOutgoingHistory.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_integrations/client/views/template.integrationsOutgoingHistory.js                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("integrationsOutgoingHistory");                                                                   // 2
Template["integrationsOutgoingHistory"] = new Template("Template.integrationsOutgoingHistory", (function() {           // 3
  var view = this;                                                                                                     // 4
  return HTML.SECTION({                                                                                                // 5
    class: "page-container page-home page-static page-settings"                                                        // 6
  }, "\n\t\t", HTML.HEADER({                                                                                           // 7
    class: "fixed-title border-component-color"                                                                        // 8
  }, "\n\t\t\t", Spacebars.include(view.lookupTemplate("burger")), "\n\t\t\t", HTML.H2("\n\t\t\t\t", HTML.SPAN({       // 9
    class: "room-title"                                                                                                // 10
  }, Blaze.View("lookup:pageTitle", function() {                                                                       // 11
    return Spacebars.mustache(view.lookup("pageTitle"));                                                               // 12
  })), "\n\t\t\t"), "\n\t\t\t", Blaze.If(function() {                                                                  // 13
    return Spacebars.call(view.lookup("hasPermission"));                                                               // 14
  }, function() {                                                                                                      // 15
    return [ "\n\t\t\t\t", HTML.DIV({                                                                                  // 16
      class: "submit"                                                                                                  // 17
    }, "\n\t\t\t\t\t", HTML.BUTTON({                                                                                   // 18
      class: "button danger clear-history"                                                                             // 19
    }, HTML.I({                                                                                                        // 20
      class: "icon-history"                                                                                            // 21
    }), Blaze.View("lookup:_", function() {                                                                            // 22
      return Spacebars.mustache(view.lookup("_"), "clear_history");                                                    // 23
    })), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                                  // 24
  }), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                                  // 25
    class: "content background-transparent-dark"                                                                       // 26
  }, "\n\t\t\t", Blaze.Unless(function() {                                                                             // 27
    return Spacebars.call(view.lookup("hasPermission"));                                                               // 28
  }, function() {                                                                                                      // 29
    return [ "\n\t\t\t\t", HTML.P(Blaze.View("lookup:_", function() {                                                  // 30
      return Spacebars.mustache(view.lookup("_"), "You_are_not_authorized_to_view_this_page");                         // 31
    })), "\n\t\t\t" ];                                                                                                 // 32
  }, function() {                                                                                                      // 33
    return [ "\n\t\t\t\t", HTML.A({                                                                                    // 34
      href: function() {                                                                                               // 35
        return Spacebars.mustache(view.lookup("pathFor"), "admin-integrations-outgoing", Spacebars.kw({                // 36
          id: view.lookup("integrationId")                                                                             // 37
        }));                                                                                                           // 38
      }                                                                                                                // 39
    }, HTML.I({                                                                                                        // 40
      class: "icon-angle-left"                                                                                         // 41
    }), " ", Blaze.View("lookup:_", function() {                                                                       // 42
      return Spacebars.mustache(view.lookup("_"), "Back_to_integration_detail");                                       // 43
    })), HTML.BR(), HTML.BR(), "\n\n\t\t\t\t", HTML.DIV({                                                              // 44
      class: "rocket-form"                                                                                             // 45
    }, "\n\t\t\t\t\t", Blaze.Each(function() {                                                                         // 46
      return {                                                                                                         // 47
        _sequence: Spacebars.call(view.lookup("histories")),                                                           // 48
        _variable: "history"                                                                                           // 49
      };                                                                                                               // 50
    }, function() {                                                                                                    // 51
      return [ "\n\t\t\t\t\t\t", HTML.DIV({                                                                            // 52
        class: "section section-collapsed"                                                                             // 53
      }, "\n\t\t\t\t\t\t\t", HTML.DIV({                                                                                // 54
        class: "section-title"                                                                                         // 55
      }, "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                              // 56
        class: "section-title-text"                                                                                    // 57
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.I({                                                                              // 58
        class: function() {                                                                                            // 59
          return Spacebars.mustache(view.lookup("iconClass"), view.lookup("history"));                                 // 60
        }                                                                                                              // 61
      }), "\n\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:formatDate", function() {                                         // 62
        return Spacebars.mustache(view.lookup("formatDate"), Spacebars.dot(view.lookup("history"), "_createdAt"));     // 63
      }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                      // 64
        class: "section-title-right"                                                                                   // 65
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                         // 66
        class: "button replay",                                                                                        // 67
        "data-history-id": function() {                                                                                // 68
          return Spacebars.mustache(Spacebars.dot(view.lookup("history"), "_id"));                                     // 69
        }                                                                                                              // 70
      }, "Replay"), "\n\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                              // 71
        class: "button primary expand"                                                                                 // 72
      }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.SPAN(Blaze.View("lookup:_", function() {                                       // 73
        return Spacebars.mustache(view.lookup("_"), "Expand");                                                         // 74
      })), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({         // 75
        class: "section-content"                                                                                       // 76
      }, "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                              // 77
        class: "input-line double-col"                                                                                 // 78
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                        // 79
        return Spacebars.mustache(view.lookup("_"), "Status");                                                         // 80
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                     // 81
        class: "input-monitor",                                                                                        // 82
        type: "text",                                                                                                  // 83
        disabled: "",                                                                                                  // 84
        value: function() {                                                                                            // 85
          return Spacebars.mustache(view.lookup("statusI18n"), Spacebars.dot(view.lookup("history"), "error"));        // 86
        }                                                                                                              // 87
      }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                             // 88
        class: "input-line double-col"                                                                                 // 89
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                        // 90
        return Spacebars.mustache(view.lookup("_"), "Integration_Outgoing_WebHook_History_Time_Triggered");            // 91
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                     // 92
        class: "input-monitor",                                                                                        // 93
        type: "text",                                                                                                  // 94
        disabled: "",                                                                                                  // 95
        value: function() {                                                                                            // 96
          return Spacebars.mustache(view.lookup("formatDateDetail"), Spacebars.dot(view.lookup("history"), "_createdAt"));
        }                                                                                                              // 98
      }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                             // 99
        class: "input-line double-col"                                                                                 // 100
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                        // 101
        return Spacebars.mustache(view.lookup("_"), "Integration_Outgoing_WebHook_History_Time_Ended_Or_Error");       // 102
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                     // 103
        class: "input-monitor",                                                                                        // 104
        type: "text",                                                                                                  // 105
        disabled: "",                                                                                                  // 106
        value: function() {                                                                                            // 107
          return Spacebars.mustache(view.lookup("formatDateDetail"), Spacebars.dot(view.lookup("history"), "_updatedAt"));
        }                                                                                                              // 109
      }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                             // 110
        class: "input-line double-col"                                                                                 // 111
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                        // 112
        return Spacebars.mustache(view.lookup("_"), "Event_Trigger");                                                  // 113
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                     // 114
        class: "input-monitor",                                                                                        // 115
        type: "text",                                                                                                  // 116
        disabled: "",                                                                                                  // 117
        value: function() {                                                                                            // 118
          return Spacebars.mustache(view.lookup("eventTypei18n"), Spacebars.dot(view.lookup("history"), "event"));     // 119
        }                                                                                                              // 120
      }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                             // 121
        class: "input-line double-col"                                                                                 // 122
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                        // 123
        return Spacebars.mustache(view.lookup("_"), "Integration_Outgoing_WebHook_History_Trigger_Step");              // 124
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                     // 125
        class: "input-monitor",                                                                                        // 126
        type: "text",                                                                                                  // 127
        disabled: "",                                                                                                  // 128
        value: function() {                                                                                            // 129
          return Spacebars.mustache(Spacebars.dot(view.lookup("history"), "step"));                                    // 130
        }                                                                                                              // 131
      }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                             // 132
        class: "input-line double-col"                                                                                 // 133
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                        // 134
        return Spacebars.mustache(view.lookup("_"), "Integration_Outgoing_WebHook_History_Data_Passed_To_Trigger");    // 135
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t", HTML.PRE(HTML.CODE({                             // 136
        class: "code-colors hljs json"                                                                                 // 137
      }, Blaze.View("lookup:jsonStringify", function() {                                                               // 138
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("jsonStringify"), Spacebars.dot(view.lookup("history"), "data")));
      }))), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                // 140
        return Spacebars.dataMustache(view.lookup("hasProperty"), view.lookup("history"), "prepareSentMessage");       // 141
      }, function() {                                                                                                  // 142
        return [ "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 143
          class: "input-line double-col"                                                                               // 144
        }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                    // 145
          return Spacebars.mustache(view.lookup("_"), "Integration_Outgoing_WebHook_History_Messages_Sent_From_Prepare_Script");
        })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t\t", HTML.PRE(HTML.CODE({                       // 147
          class: "code-colors hljs json"                                                                               // 148
        }, Blaze.View("lookup:jsonStringify", function() {                                                             // 149
          return Spacebars.makeRaw(Spacebars.mustache(view.lookup("jsonStringify"), Spacebars.dot(view.lookup("history"), "prepareSentMessage")));
        }))), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t" ];                              // 151
      }), "\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 152
        return Spacebars.dataMustache(view.lookup("hasProperty"), view.lookup("history"), "processSentMessage");       // 153
      }, function() {                                                                                                  // 154
        return [ "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 155
          class: "input-line double-col"                                                                               // 156
        }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                    // 157
          return Spacebars.mustache(view.lookup("_"), "Integration_Outgoing_WebHook_History_Messages_Sent_From_Process_Script");
        })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t\t", HTML.PRE(HTML.CODE({                       // 159
          class: "code-colors hljs json"                                                                               // 160
        }, Blaze.View("lookup:jsonStringify", function() {                                                             // 161
          return Spacebars.makeRaw(Spacebars.mustache(view.lookup("jsonStringify"), Spacebars.dot(view.lookup("history"), "processSentMessage")));
        }))), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t" ];                              // 163
      }), "\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 164
        return Spacebars.dataMustache(view.lookup("hasProperty"), view.lookup("history"), "url");                      // 165
      }, function() {                                                                                                  // 166
        return [ "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 167
          class: "input-line double-col"                                                                               // 168
        }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                    // 169
          return Spacebars.mustache(view.lookup("_"), "URL");                                                          // 170
        })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t\t", HTML.PRE(HTML.CODE({                       // 171
          class: "code-colors hljs json"                                                                               // 172
        }, Blaze.View("lookup:history.url", function() {                                                               // 173
          return Spacebars.mustache(Spacebars.dot(view.lookup("history"), "url"));                                     // 174
        }))), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t" ];                              // 175
      }), "\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 176
        return Spacebars.dataMustache(view.lookup("hasProperty"), view.lookup("history"), "httpCallData");             // 177
      }, function() {                                                                                                  // 178
        return [ "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 179
          class: "input-line double-col"                                                                               // 180
        }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                    // 181
          return Spacebars.mustache(view.lookup("_"), "Integration_Outgoing_WebHook_History_Data_Passed_To_URL");      // 182
        })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t\t", HTML.PRE(HTML.CODE({                       // 183
          class: "code-colors hljs json"                                                                               // 184
        }, Blaze.View("lookup:jsonStringify", function() {                                                             // 185
          return Spacebars.makeRaw(Spacebars.mustache(view.lookup("jsonStringify"), Spacebars.dot(view.lookup("history"), "httpCallData")));
        }))), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t" ];                              // 187
      }), "\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 188
        return Spacebars.dataMustache(view.lookup("hasProperty"), view.lookup("history"), "httpError");                // 189
      }, function() {                                                                                                  // 190
        return [ "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 191
          class: "input-line double-col"                                                                               // 192
        }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                    // 193
          return Spacebars.mustache(view.lookup("_"), "Integration_Outgoing_WebHook_History_Http_Response_Error");     // 194
        })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t\t", HTML.PRE(HTML.CODE({                       // 195
          class: "code-colors hljs json"                                                                               // 196
        }, Blaze.View("lookup:jsonStringify", function() {                                                             // 197
          return Spacebars.makeRaw(Spacebars.mustache(view.lookup("jsonStringify"), Spacebars.dot(view.lookup("history"), "httpError")));
        }))), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t" ];                              // 199
      }), "\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 200
        return Spacebars.dataMustache(view.lookup("hasProperty"), view.lookup("history"), "httpResult");               // 201
      }, function() {                                                                                                  // 202
        return [ "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 203
          class: "input-line double-col"                                                                               // 204
        }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                    // 205
          return Spacebars.mustache(view.lookup("_"), "Integration_Outgoing_WebHook_History_Http_Response");           // 206
        })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t\t", HTML.PRE(HTML.CODE({                       // 207
          class: "code-colors hljs json"                                                                               // 208
        }, Blaze.View("lookup:jsonStringify", function() {                                                             // 209
          return Spacebars.makeRaw(Spacebars.mustache(view.lookup("jsonStringify"), Spacebars.dot(view.lookup("history"), "httpResult")));
        }))), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t" ];                              // 211
      }), "\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 212
        return Spacebars.dataMustache(view.lookup("hasProperty"), view.lookup("history"), "errorStack");               // 213
      }, function() {                                                                                                  // 214
        return [ "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 215
          class: "input-line double-col"                                                                               // 216
        }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                    // 217
          return Spacebars.mustache(view.lookup("_"), "Integration_Outgoing_WebHook_History_Error_Stacktrace");        // 218
        })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t\t", HTML.PRE(HTML.CODE({                       // 219
          class: "code-colors hljs json"                                                                               // 220
        }, Blaze.View("lookup:hljsStack", function() {                                                                 // 221
          return Spacebars.makeRaw(Spacebars.mustache(view.lookup("hljsStack"), Spacebars.dot(view.lookup("history"), "errorStack")));
        }))), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t" ];                              // 223
      }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                                                    // 224
    }, function() {                                                                                                    // 225
      return [ "\n\t\t\t\t\t\t", HTML.DIV({                                                                            // 226
        class: "section"                                                                                               // 227
      }, "\n\t\t\t\t\t\t\t", HTML.DIV({                                                                                // 228
        class: "section-title"                                                                                         // 229
      }, "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                              // 230
        class: "section-title-text"                                                                                    // 231
      }, "\n\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                   // 232
        return Spacebars.mustache(view.lookup("_"), "Integration_Outgoing_WebHook_No_History");                        // 233
      }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                             // 234
    }), "\n\t\t\t\t\t", Blaze.If(function() {                                                                          // 235
      return Spacebars.call(view.lookup("hasMore"));                                                                   // 236
    }, function() {                                                                                                    // 237
      return [ "\n\t\t\t\t\t\t", HTML.DIV({                                                                            // 238
        class: "load-more"                                                                                             // 239
      }, "\n\t\t\t\t\t\t\t", Spacebars.include(view.lookupTemplate("loading")), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];   // 240
    }), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                                   // 241
  }), "\n\t\t"), "\n\t");                                                                                              // 242
}));                                                                                                                   // 243
                                                                                                                       // 244
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"integrationsOutgoingHistory.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_integrations/client/views/integrationsOutgoingHistory.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _typeof2 = require("babel-runtime/helpers/typeof");                                                                //
                                                                                                                       //
var _typeof3 = _interopRequireDefault(_typeof2);                                                                       //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
var hljs = void 0;                                                                                                     // 1
module.watch(require("highlight.js"), {                                                                                // 1
	"default": function (v) {                                                                                             // 1
		hljs = v;                                                                                                            // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
var moment = void 0;                                                                                                   // 1
module.watch(require("moment"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		moment = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 1);                                                                                                                 // 1
var toastr = void 0;                                                                                                   // 1
module.watch(require("toastr"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		toastr = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 2);                                                                                                                 // 1
Template.integrationsOutgoingHistory.onCreated(function () {                                                           // 7
	function _integrationsOutgoingHistoryOnCreated() {                                                                    // 7
		var _this = this;                                                                                                    // 7
                                                                                                                       //
		this.hasMore = new ReactiveVar(false);                                                                               // 8
		this.limit = new ReactiveVar(25);                                                                                    // 9
		this.autorun(function () {                                                                                           // 10
			var id = _this.data && _this.data.params && _this.data.params().id;                                                 // 11
                                                                                                                       //
			if (id) {                                                                                                           // 13
				var sub = _this.subscribe('integrations');                                                                         // 14
                                                                                                                       //
				if (sub.ready()) {                                                                                                 // 15
					var intRecord = void 0;                                                                                           // 16
                                                                                                                       //
					if (RocketChat.authz.hasAllPermission('manage-integrations')) {                                                   // 18
						intRecord = ChatIntegrations.findOne({                                                                           // 19
							_id: id                                                                                                         // 19
						});                                                                                                              // 19
					} else if (RocketChat.authz.hasAllPermission('manage-own-integrations')) {                                        // 20
						intRecord = ChatIntegrations.findOne({                                                                           // 21
							_id: id,                                                                                                        // 21
							'_createdBy._id': Meteor.userId()                                                                               // 21
						});                                                                                                              // 21
					}                                                                                                                 // 22
                                                                                                                       //
					if (!intRecord) {                                                                                                 // 24
						toastr.error(TAPi18n.__('No_integration_found'));                                                                // 25
						FlowRouter.go('admin-integrations');                                                                             // 26
					}                                                                                                                 // 27
                                                                                                                       //
					var historySub = _this.subscribe('integrationHistory', intRecord._id, _this.limit.get());                         // 29
                                                                                                                       //
					if (historySub.ready()) {                                                                                         // 30
						if (ChatIntegrationHistory.find().count() > _this.limit.get()) {                                                 // 31
							_this.hasMore.set(true);                                                                                        // 32
						}                                                                                                                // 33
					}                                                                                                                 // 34
				}                                                                                                                  // 35
			} else {                                                                                                            // 36
				toastr.error(TAPi18n.__('No_integration_found'));                                                                  // 37
				FlowRouter.go('admin-integrations');                                                                               // 38
			}                                                                                                                   // 39
		});                                                                                                                  // 40
	}                                                                                                                     // 41
                                                                                                                       //
	return _integrationsOutgoingHistoryOnCreated;                                                                         // 7
}());                                                                                                                  // 7
Template.integrationsOutgoingHistory.helpers({                                                                         // 43
	hasPermission: function () {                                                                                          // 44
		return RocketChat.authz.hasAtLeastOnePermission(['manage-integrations', 'manage-own-integrations']);                 // 45
	},                                                                                                                    // 46
	hasMore: function () {                                                                                                // 48
		return Template.instance().hasMore.get();                                                                            // 49
	},                                                                                                                    // 50
	histories: function () {                                                                                              // 52
		return ChatIntegrationHistory.find().fetch().sort(function (a, b) {                                                  // 53
			if (+a._updatedAt < +b._updatedAt) {                                                                                // 54
				return 1;                                                                                                          // 55
			}                                                                                                                   // 56
                                                                                                                       //
			if (+a._updatedAt > +b._updatedAt) {                                                                                // 58
				return -1;                                                                                                         // 59
			}                                                                                                                   // 60
                                                                                                                       //
			return 0;                                                                                                           // 62
		});                                                                                                                  // 63
	},                                                                                                                    // 64
	hasProperty: function (history, property) {                                                                           // 66
		return typeof history[property] !== 'undefined' || history[property] != null;                                        // 67
	},                                                                                                                    // 68
	iconClass: function (history) {                                                                                       // 70
		if (typeof history.error !== 'undefined' && history.error) {                                                         // 71
			return 'icon-cancel-circled error-color';                                                                           // 72
		} else if (history.finished) {                                                                                       // 73
			return 'icon-ok-circled success-color';                                                                             // 74
		} else {                                                                                                             // 75
			return 'icon-help-circled';                                                                                         // 76
		}                                                                                                                    // 77
	},                                                                                                                    // 78
	statusI18n: function (error) {                                                                                        // 80
		return typeof error !== 'undefined' && error ? TAPi18n.__('Failure') : TAPi18n.__('Success');                        // 81
	},                                                                                                                    // 82
	formatDate: function (date) {                                                                                         // 84
		return moment(date).format('L LTS');                                                                                 // 85
	},                                                                                                                    // 86
	formatDateDetail: function (date) {                                                                                   // 88
		return moment(date).format('L HH:mm:ss:SSSS');                                                                       // 89
	},                                                                                                                    // 90
	eventTypei18n: function (event) {                                                                                     // 92
		return TAPi18n.__(RocketChat.integrations.outgoingEvents[event].label);                                              // 93
	},                                                                                                                    // 94
	jsonStringify: function (data) {                                                                                      // 96
		return data ? hljs.highlight('json', JSON.stringify(data, null, 2)).value : '';                                      // 97
	},                                                                                                                    // 98
	hljsStack: function (errorStack) {                                                                                    // 100
		if (!errorStack) {                                                                                                   // 101
			return '';                                                                                                          // 102
		} else if ((typeof errorStack === "undefined" ? "undefined" : (0, _typeof3.default)(errorStack)) === 'object') {     // 103
			return hljs.highlight('json', JSON.stringify(errorStack, null, 2)).value;                                           // 104
		} else {                                                                                                             // 105
			return hljs.highlight('json', errorStack).value;                                                                    // 106
		}                                                                                                                    // 107
	},                                                                                                                    // 108
	integrationId: function () {                                                                                          // 110
		return this.params && this.params() && this.params().id;                                                             // 111
	}                                                                                                                     // 112
});                                                                                                                    // 43
Template.integrationsOutgoingHistory.events({                                                                          // 115
	'click .expand': function (e) {                                                                                       // 116
		$(e.currentTarget).closest('.section').removeClass('section-collapsed');                                             // 117
		$(e.currentTarget).closest('button').removeClass('expand').addClass('collapse').find('span').text(TAPi18n.__('Collapse'));
		$('.CodeMirror').each(function (index, codeMirror) {                                                                 // 119
			return codeMirror.CodeMirror.refresh();                                                                             // 119
		});                                                                                                                  // 119
	},                                                                                                                    // 120
	'click .collapse': function (e) {                                                                                     // 122
		$(e.currentTarget).closest('.section').addClass('section-collapsed');                                                // 123
		$(e.currentTarget).closest('button').addClass('expand').removeClass('collapse').find('span').text(TAPi18n.__('Expand'));
	},                                                                                                                    // 125
	'click .replay': function (e, t) {                                                                                    // 127
		if (!t || !t.data || !t.data.params || !t.data.params().id) {                                                        // 128
			return;                                                                                                             // 129
		}                                                                                                                    // 130
                                                                                                                       //
		var historyId = $(e.currentTarget).attr('data-history-id');                                                          // 132
		Meteor.call('replayOutgoingIntegration', {                                                                           // 134
			integrationId: t.data.params().id,                                                                                  // 134
			historyId: historyId                                                                                                // 134
		}, function (e) {                                                                                                    // 134
			if (e) {                                                                                                            // 135
				handleError(e);                                                                                                    // 136
				return;                                                                                                            // 137
			}                                                                                                                   // 138
		});                                                                                                                  // 139
	},                                                                                                                    // 140
	'click .clear-history': function (e, t) {                                                                             // 142
		if (!t || !t.data || !t.data.params || !t.data.params().id) {                                                        // 143
			return;                                                                                                             // 144
		}                                                                                                                    // 145
                                                                                                                       //
		Meteor.call('clearIntegrationHistory', t.data.params().id, function (e) {                                            // 147
			if (e) {                                                                                                            // 148
				handleError(e);                                                                                                    // 149
				return;                                                                                                            // 150
			}                                                                                                                   // 151
                                                                                                                       //
			toastr.success(TAPi18n.__('Integration_History_Cleared'));                                                          // 153
		});                                                                                                                  // 154
	},                                                                                                                    // 155
	'scroll .content': _.throttle(function (e, instance) {                                                                // 157
		if (e.target.scrollTop >= e.target.scrollHeight - e.target.clientHeight) {                                           // 158
			instance.limit.set(instance.limit.get() + 25);                                                                      // 159
		}                                                                                                                    // 160
	}, 200)                                                                                                               // 161
});                                                                                                                    // 115
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".less"
  ]
});
require("./node_modules/meteor/rocketchat:integrations/lib/rocketchat.js");
require("./node_modules/meteor/rocketchat:integrations/client/collections.js");
require("./node_modules/meteor/rocketchat:integrations/client/startup.js");
require("./node_modules/meteor/rocketchat:integrations/client/route.js");
require("./node_modules/meteor/rocketchat:integrations/client/views/template.integrations.js");
require("./node_modules/meteor/rocketchat:integrations/client/views/integrations.js");
require("./node_modules/meteor/rocketchat:integrations/client/views/template.integrationsNew.js");
require("./node_modules/meteor/rocketchat:integrations/client/views/integrationsNew.js");
require("./node_modules/meteor/rocketchat:integrations/client/views/template.integrationsIncoming.js");
require("./node_modules/meteor/rocketchat:integrations/client/views/integrationsIncoming.js");
require("./node_modules/meteor/rocketchat:integrations/client/views/template.integrationsOutgoing.js");
require("./node_modules/meteor/rocketchat:integrations/client/views/integrationsOutgoing.js");
require("./node_modules/meteor/rocketchat:integrations/client/views/template.integrationsOutgoingHistory.js");
require("./node_modules/meteor/rocketchat:integrations/client/views/integrationsOutgoingHistory.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:integrations'] = {};

})();
