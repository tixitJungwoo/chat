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
var WebApp = Package.webapp.WebApp;
var Mongo = Package.mongo.Mongo;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var OAuth2Server = Package['rocketchat:oauth2-server'].OAuth2Server;
var Template = Package['templating-runtime'].Template;
var FlowRouter = Package['kadira:flow-router'].FlowRouter;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
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
var __coffeescriptShare;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:oauth2-server-config":{"oauth":{"client":{"template.oauth2-client.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_oauth2-server-config/oauth/client/template.oauth2-client.js                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("authorize");                                                                                     // 2
Template["authorize"] = new Template("Template.authorize", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("currentUser"));                                                                 // 6
  }, function() {                                                                                                      // 7
    return [ "\n\t\t", HTML.DIV({                                                                                      // 8
      class: "oauth-panel"                                                                                             // 9
    }, "\n\t\t\t", HTML.FORM({                                                                                         // 10
      method: "post",                                                                                                  // 11
      action: "",                                                                                                      // 12
      role: "form",                                                                                                    // 13
      class: function() {                                                                                              // 14
        return Blaze.Unless(function() {                                                                               // 15
          return Spacebars.call(view.templateInstance().subscriptionsReady());                                         // 16
        }, function() {                                                                                                // 17
          return "hidden";                                                                                             // 18
        });                                                                                                            // 19
      }                                                                                                                // 20
    }, "\n\t\t\t\t", Blaze.If(function() {                                                                             // 21
      return Spacebars.call(view.lookup("currentUser"));                                                               // 22
    }, function() {                                                                                                    // 23
      return [ "\n\t\t\t\t\t", HTML.DIV({                                                                              // 24
        class: "user-info"                                                                                             // 25
      }, "\n\t\t\t\t\t\t", HTML.DIV({                                                                                  // 26
        class: "thumb"                                                                                                 // 27
      }, "\n\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                          // 28
        return {                                                                                                       // 29
          username: Spacebars.call(Spacebars.dot(view.lookup("currentUser"), "username"))                              // 30
        };                                                                                                             // 31
      }, function() {                                                                                                  // 32
        return Spacebars.include(view.lookupTemplate("avatar"));                                                       // 33
      }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({                                                              // 34
        class: "username"                                                                                              // 35
      }, "\n\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                       // 36
        return Spacebars.mustache(view.lookup("_"), "You_are_logged_in_as");                                           // 37
      }), "\n\t\t\t\t\t\t\t", HTML.H1(Blaze.View("lookup:currentUser.username", function() {                           // 38
        return Spacebars.mustache(Spacebars.dot(view.lookup("currentUser"), "username"));                              // 39
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                         // 40
    }), "\n\n\t\t\t\t", HTML.DIV({                                                                                     // 41
      class: "integration-info"                                                                                        // 42
    }, "\n\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t", HTML.SPAN(HTML.B(Blaze.View("lookup:getClient.name", function() {    // 43
      return Spacebars.mustache(Spacebars.dot(view.lookup("getClient"), "name"));                                      // 44
    })), " ", Blaze.View("lookup:_", function() {                                                                      // 45
      return Spacebars.mustache(view.lookup("_"), "will_be_able_to");                                                  // 46
    })), "\n\t\t\t\t\t\t", HTML.UL({                                                                                   // 47
      class: "integration-permissions"                                                                                 // 48
    }, "\n\t\t\t\t\t\t\t", HTML.LI("Post Messages"), "\n\t\t\t\t\t\t\t", HTML.LI("Create Channels"), "\n\t\t\t\t\t\t\t", HTML.LI("Change Channel Topic"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.INPUT({
      type: "hidden",                                                                                                  // 50
      name: "allow",                                                                                                   // 51
      value: "yes"                                                                                                     // 52
    }), "\n\t\t\t\t", HTML.INPUT({                                                                                     // 53
      type: "hidden",                                                                                                  // 54
      name: "token",                                                                                                   // 55
      value: function() {                                                                                              // 56
        return Spacebars.mustache(view.lookup("getToken"));                                                            // 57
      }                                                                                                                // 58
    }), "\n\t\t\t\t", HTML.INPUT({                                                                                     // 59
      type: "hidden",                                                                                                  // 60
      name: "client_id",                                                                                               // 61
      value: function() {                                                                                              // 62
        return Spacebars.mustache(view.lookup("client_id"));                                                           // 63
      }                                                                                                                // 64
    }), "\n\t\t\t\t", HTML.INPUT({                                                                                     // 65
      type: "hidden",                                                                                                  // 66
      name: "redirect_uri",                                                                                            // 67
      value: function() {                                                                                              // 68
        return Spacebars.mustache(view.lookup("redirect_uri"));                                                        // 69
      }                                                                                                                // 70
    }), "\n\t\t\t\t", HTML.INPUT({                                                                                     // 71
      type: "hidden",                                                                                                  // 72
      name: "response_type",                                                                                           // 73
      value: "code"                                                                                                    // 74
    }), "\n\t\t\t\t", HTML.DIV({                                                                                       // 75
      class: "buttons-group"                                                                                           // 76
    }, "\n\t\t\t\t\t", HTML.BUTTON({                                                                                   // 77
      id: "logout-oauth",                                                                                              // 78
      class: "button danger logout"                                                                                    // 79
    }, Blaze.View("lookup:_", function() {                                                                             // 80
      return Spacebars.mustache(view.lookup("_"), "Logout");                                                           // 81
    })), "\n\t\t\t\t\t", HTML.BUTTON({                                                                                 // 82
      id: "cancel-oauth",                                                                                              // 83
      type: "button",                                                                                                  // 84
      class: "button cancel"                                                                                           // 85
    }, Blaze.View("lookup:_", function() {                                                                             // 86
      return Spacebars.mustache(view.lookup("_"), "Cancel");                                                           // 87
    })), "\n\t\t\t\t\t", HTML.BUTTON({                                                                                 // 88
      type: "submit",                                                                                                  // 89
      class: "button primary save"                                                                                     // 90
    }, Blaze.View("lookup:_", function() {                                                                             // 91
      return Spacebars.mustache(view.lookup("_"), "Authorize");                                                        // 92
    })), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t\t", Blaze.Unless(function() {                                             // 93
      return Spacebars.call(view.templateInstance().subscriptionsReady());                                             // 94
    }, function() {                                                                                                    // 95
      return [ "\n\t\t\t\t", Blaze.View("lookup:_", function() {                                                       // 96
        return Spacebars.mustache(view.lookup("_"), "loading");                                                        // 97
      }), "...\n\t\t\t" ];                                                                                             // 98
    }), "\n\t\t"), "\n\t" ];                                                                                           // 99
  }, function() {                                                                                                      // 100
    return [ "\n\t\t", Spacebars.include(view.lookupTemplate("loginButtons")), "\n\t" ];                               // 101
  });                                                                                                                  // 102
}));                                                                                                                   // 103
                                                                                                                       // 104
Template.__checkName("oauth404");                                                                                      // 105
Template["oauth404"] = new Template("Template.oauth404", (function() {                                                 // 106
  var view = this;                                                                                                     // 107
  return HTML.DIV({                                                                                                    // 108
    class: "oauth-panel"                                                                                               // 109
  }, "\n\t\t\t", HTML.FORM("\n\t\t\t\t", Blaze.If(function() {                                                         // 110
    return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("error"), "404");                                    // 111
  }, function() {                                                                                                      // 112
    return [ "\n\t\t\t\t\t", HTML.H2("Invalid OAuth client"), "\n\t\t\t\t" ];                                          // 113
  }), "\n\t\t\t\t", Blaze.If(function() {                                                                              // 114
    return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("error"), "invalid_redirect_uri");                   // 115
  }, function() {                                                                                                      // 116
    return [ "\n\t\t\t\t\t", HTML.H2("Redirect URL does not match"), "\n\t\t\t\t" ];                                   // 117
  }), "\n\t\t\t"), "\n\t\t");                                                                                          // 118
}));                                                                                                                   // 119
                                                                                                                       // 120
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"oauth2-client.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_oauth2-server-config/oauth/client/oauth2-client.coffee.js                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
FlowRouter.route('/oauth/authorize', {                                                                                 // 3
  action: function (params, queryParams) {                                                                             // 4
    return BlazeLayout.render('main', {                                                                                // 3
      center: 'authorize',                                                                                             // 6
      modal: true,                                                                                                     // 7
      client_id: queryParams.client_id,                                                                                // 8
      redirect_uri: queryParams.redirect_uri,                                                                          // 9
      response_type: queryParams.response_type,                                                                        // 10
      state: queryParams.state                                                                                         // 11
    });                                                                                                                // 6
  }                                                                                                                    // 4
});                                                                                                                    // 4
FlowRouter.route('/oauth/error/:error', {                                                                              // 14
  action: function (params, queryParams) {                                                                             // 15
    return BlazeLayout.render('main', {                                                                                // 16
      center: 'oauth404',                                                                                              // 17
      modal: true,                                                                                                     // 18
      error: params.error                                                                                              // 19
    });                                                                                                                // 17
  }                                                                                                                    // 15
});                                                                                                                    // 15
Template.authorize.onCreated(function () {                                                                             // 22
  this.subscribe('authorizedOAuth');                                                                                   // 23
  return this.subscribe('oauthClient', this.data.client_id());                                                         // 26
});                                                                                                                    // 22
Template.authorize.helpers({                                                                                           // 27
  getToken: function () {                                                                                              // 28
    return localStorage.getItem('Meteor.loginToken');                                                                  // 29
  },                                                                                                                   // 28
  getClient: function () {                                                                                             // 31
    return ChatOAuthApps.findOne();                                                                                    // 32
  }                                                                                                                    // 28
});                                                                                                                    // 28
Template.authorize.events({                                                                                            // 35
  'click #logout-oauth': function () {                                                                                 // 36
    return Meteor.logout();                                                                                            // 37
  },                                                                                                                   // 36
  'click #cancel-oauth': function () {                                                                                 // 39
    return window.close();                                                                                             // 40
  }                                                                                                                    // 36
});                                                                                                                    // 36
Template.authorize.onRendered(function () {                                                                            // 43
  return this.autorun(function (_this) {                                                                               // 48
    return function (c) {                                                                                              // 49
      var ref, ref1, ref2;                                                                                             // 45
                                                                                                                       //
      if (((ref = Meteor.user()) != null ? (ref1 = ref.oauth) != null ? (ref2 = ref1.authorizedClients) != null ? ref2.indexOf(_this.data.client_id()) : void 0 : void 0 : void 0) > -1) {
        c.stop();                                                                                                      // 46
        return $('button[type=submit]').click();                                                                       // 53
      }                                                                                                                // 54
    };                                                                                                                 // 44
  }(this));                                                                                                            // 44
});                                                                                                                    // 43
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"admin":{"client":{"startup.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_oauth2-server-config/admin/client/startup.coffee.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
RocketChat.AdminBox.addOption({                                                                                        // 1
  href: 'admin-oauth-apps',                                                                                            // 2
  i18nLabel: 'OAuth Apps',                                                                                             // 3
  permissionGranted: function () {                                                                                     // 4
    return RocketChat.authz.hasAllPermission('manage-oauth-apps');                                                     // 5
  }                                                                                                                    // 2
});                                                                                                                    // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"collection.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_oauth2-server-config/admin/client/collection.coffee.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.ChatOAuthApps = new Mongo.Collection('rocketchat_oauth_apps');                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"route.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_oauth2-server-config/admin/client/route.coffee.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
FlowRouter.route('/admin/oauth-apps', {                                                                                // 1
  name: 'admin-oauth-apps',                                                                                            // 2
  action: function (params) {                                                                                          // 3
    return BlazeLayout.render('main', {                                                                                // 4
      center: 'pageSettingsContainer',                                                                                 // 5
      pageTitle: t('OAuth_Applications'),                                                                              // 6
      pageTemplate: 'oauthApps'                                                                                        // 7
    });                                                                                                                // 5
  }                                                                                                                    // 2
});                                                                                                                    // 2
FlowRouter.route('/admin/oauth-app/:id?', {                                                                            // 10
  name: 'admin-oauth-app',                                                                                             // 11
  action: function (params) {                                                                                          // 12
    return BlazeLayout.render('main', {                                                                                // 15
      center: 'pageSettingsContainer',                                                                                 // 14
      pageTitle: t('OAuth_Application'),                                                                               // 15
      pageTemplate: 'oauthApp',                                                                                        // 16
      params: params                                                                                                   // 17
    });                                                                                                                // 14
  }                                                                                                                    // 11
});                                                                                                                    // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"views":{"template.oauthApp.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_oauth2-server-config/admin/client/views/template.oauthApp.js                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("oauthApp");                                                                                      // 2
Template["oauthApp"] = new Template("Template.oauthApp", (function() {                                                 // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "permissions-manager"                                                                                       // 6
  }, "\n\t\t", Blaze.If(function() {                                                                                   // 7
    return Spacebars.call(view.lookup("hasPermission"));                                                               // 8
  }, function() {                                                                                                      // 9
    return [ "\n\t\t\t", HTML.A({                                                                                      // 10
      href: function() {                                                                                               // 11
        return Spacebars.mustache(view.lookup("pathFor"), "admin-oauth-apps");                                         // 12
      }                                                                                                                // 13
    }, HTML.I({                                                                                                        // 14
      class: "icon-angle-left"                                                                                         // 15
    }), " ", Blaze.View("lookup:_", function() {                                                                       // 16
      return Spacebars.mustache(view.lookup("_"), "Back_to_applications");                                             // 17
    })), HTML.BR(), HTML.BR(), "\n\t\t\t", HTML.DIV({                                                                  // 18
      class: "rocket-form"                                                                                             // 19
    }, "\n\t\t\t\t", HTML.DIV({                                                                                        // 20
      class: "section"                                                                                                 // 21
    }, "\n\t\t\t\t\t", HTML.DIV({                                                                                      // 22
      class: "section-content"                                                                                         // 23
    }, "\n\t\t\t\t\t\t", HTML.DIV({                                                                                    // 24
      class: "input-line double-col"                                                                                   // 25
    }, "\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 26
      return Spacebars.mustache(view.lookup("_"), "Active");                                                           // 27
    })), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                    // 28
      class: "input-monitor",                                                                                          // 29
      type: "radio",                                                                                                   // 30
      name: "active",                                                                                                  // 31
      value: "1",                                                                                                      // 32
      checked: function() {                                                                                            // 33
        return Spacebars.mustache(view.lookup("$eq"), Spacebars.dot(view.lookup("data"), "active"), true);             // 34
      }                                                                                                                // 35
    }), " ", Blaze.View("lookup:_", function() {                                                                       // 36
      return Spacebars.mustache(view.lookup("_"), "True");                                                             // 37
    })), "\n\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                                 // 38
      class: "input-monitor",                                                                                          // 39
      type: "radio",                                                                                                   // 40
      name: "active",                                                                                                  // 41
      value: "0",                                                                                                      // 42
      checked: function() {                                                                                            // 43
        return Spacebars.mustache(view.lookup("$eq"), Spacebars.dot(view.lookup("data"), "active"), false);            // 44
      }                                                                                                                // 45
    }), " ", Blaze.View("lookup:_", function() {                                                                       // 46
      return Spacebars.mustache(view.lookup("_"), "False");                                                            // 47
    })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({                                          // 48
      class: "input-line double-col"                                                                                   // 49
    }, "\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 50
      return Spacebars.mustache(view.lookup("_"), "Application_Name");                                                 // 51
    })), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", HTML.INPUT({                                               // 52
      type: "text",                                                                                                    // 53
      name: "name",                                                                                                    // 54
      value: function() {                                                                                              // 55
        return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "name"));                                         // 56
      }                                                                                                                // 57
    }), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                               // 58
      class: "settings-description secondary-font-color"                                                               // 59
    }, Blaze.View("lookup:_", function() {                                                                             // 60
      return Spacebars.mustache(view.lookup("_"), "Give_the_application_a_name_This_will_be_seen_by_your_users");      // 61
    })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({                                          // 62
      class: "input-line double-col"                                                                                   // 63
    }, "\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 64
      return Spacebars.mustache(view.lookup("_"), "Redirect_URI");                                                     // 65
    })), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", HTML.INPUT({                                               // 66
      type: "text",                                                                                                    // 67
      name: "redirectUri",                                                                                             // 68
      value: function() {                                                                                              // 69
        return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "redirectUri"));                                  // 70
      }                                                                                                                // 71
    }), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                               // 72
      class: "settings-description secondary-font-color"                                                               // 73
    }, Blaze.View("lookup:_", function() {                                                                             // 74
      return Spacebars.mustache(view.lookup("_"), "After_OAuth2_authentication_users_will_be_redirected_to_this_URL");
    })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", Blaze.If(function() {                               // 76
      return Spacebars.call(Spacebars.dot(view.lookup("data"), "clientId"));                                           // 77
    }, function() {                                                                                                    // 78
      return [ "\n\t\t\t\t\t\t\t", HTML.DIV({                                                                          // 79
        class: "input-line double-col"                                                                                 // 80
      }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                          // 81
        return Spacebars.mustache(view.lookup("_"), "Client_ID");                                                      // 82
      })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                         // 83
        type: "text",                                                                                                  // 84
        name: "clientId",                                                                                              // 85
        value: function() {                                                                                            // 86
          return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "clientId"));                                   // 87
        },                                                                                                             // 88
        readonly: "readonly"                                                                                           // 89
      }), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                           // 90
        class: "settings-description secondary-font-color"                                                             // 91
      }, HTML.BUTTON({                                                                                                 // 92
        class: "clipboard",                                                                                            // 93
        "data-clipboard-target": "[name=clientId]"                                                                     // 94
      }, Blaze.View("lookup:_", function() {                                                                           // 95
        return Spacebars.mustache(view.lookup("_"), "COPY_TO_CLIPBOARD");                                              // 96
      }))), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({                                 // 97
        class: "input-line double-col"                                                                                 // 98
      }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                          // 99
        return Spacebars.mustache(view.lookup("_"), "Client_Secret");                                                  // 100
      })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                         // 101
        type: "text",                                                                                                  // 102
        name: "clientSecret",                                                                                          // 103
        value: function() {                                                                                            // 104
          return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "clientSecret"));                               // 105
        },                                                                                                             // 106
        readonly: "readonly"                                                                                           // 107
      }), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                           // 108
        class: "settings-description secondary-font-color"                                                             // 109
      }, HTML.BUTTON({                                                                                                 // 110
        class: "clipboard",                                                                                            // 111
        "data-clipboard-target": "[name=clientSecret]"                                                                 // 112
      }, Blaze.View("lookup:_", function() {                                                                           // 113
        return Spacebars.mustache(view.lookup("_"), "COPY_TO_CLIPBOARD");                                              // 114
      }))), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({                                 // 115
        class: "input-line double-col"                                                                                 // 116
      }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                          // 117
        return Spacebars.mustache(view.lookup("_"), "Authorization_URL");                                              // 118
      })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                         // 119
        type: "text",                                                                                                  // 120
        name: "authorization_url",                                                                                     // 121
        value: function() {                                                                                            // 122
          return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "authorization_url"));                          // 123
        },                                                                                                             // 124
        readonly: "readonly"                                                                                           // 125
      }), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                           // 126
        class: "settings-description secondary-font-color"                                                             // 127
      }, HTML.BUTTON({                                                                                                 // 128
        class: "clipboard",                                                                                            // 129
        "data-clipboard-target": "[name=authorization_url]"                                                            // 130
      }, Blaze.View("lookup:_", function() {                                                                           // 131
        return Spacebars.mustache(view.lookup("_"), "COPY_TO_CLIPBOARD");                                              // 132
      }))), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({                                 // 133
        class: "input-line double-col"                                                                                 // 134
      }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                          // 135
        return Spacebars.mustache(view.lookup("_"), "Access_Token_URL");                                               // 136
      })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                         // 137
        type: "text",                                                                                                  // 138
        name: "access_token_url",                                                                                      // 139
        value: function() {                                                                                            // 140
          return Spacebars.mustache(Spacebars.dot(view.lookup("data"), "access_token_url"));                           // 141
        },                                                                                                             // 142
        readonly: "readonly"                                                                                           // 143
      }), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                           // 144
        class: "settings-description secondary-font-color"                                                             // 145
      }, HTML.BUTTON({                                                                                                 // 146
        class: "clipboard",                                                                                            // 147
        "data-clipboard-target": "[name=access_token_url]"                                                             // 148
      }, Blaze.View("lookup:_", function() {                                                                           // 149
        return Spacebars.mustache(view.lookup("_"), "COPY_TO_CLIPBOARD");                                              // 150
      }))), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t" ];                                            // 151
    }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                       // 152
      class: "submit"                                                                                                  // 153
    }, "\n\t\t\t\t\t", Blaze.If(function() {                                                                           // 154
      return Spacebars.call(Spacebars.dot(view.lookup("data"), "clientId"));                                           // 155
    }, function() {                                                                                                    // 156
      return [ "\n\t\t\t\t\t\t", HTML.BUTTON({                                                                         // 157
        class: "button danger delete"                                                                                  // 158
      }, HTML.I({                                                                                                      // 159
        class: "icon-trash"                                                                                            // 160
      }), HTML.SPAN(Blaze.View("lookup:_", function() {                                                                // 161
        return Spacebars.mustache(view.lookup("_"), "Delete");                                                         // 162
      }))), "\n\t\t\t\t\t" ];                                                                                          // 163
    }), "\n\t\t\t\t\t", HTML.BUTTON({                                                                                  // 164
      class: "button primary save"                                                                                     // 165
    }, HTML.I({                                                                                                        // 166
      class: "icon-send"                                                                                               // 167
    }), HTML.SPAN(Blaze.View("lookup:_", function() {                                                                  // 168
      return Spacebars.mustache(view.lookup("_"), "Save_changes");                                                     // 169
    }))), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t" ];                                                                      // 170
  }, function() {                                                                                                      // 171
    return [ "\n\t\t\t", Blaze.View("lookup:_", function() {                                                           // 172
      return Spacebars.mustache(view.lookup("_"), "Not_authorized");                                                   // 173
    }), "\n\t\t" ];                                                                                                    // 174
  }), "\n\t");                                                                                                         // 175
}));                                                                                                                   // 176
                                                                                                                       // 177
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"oauthApp.coffee.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_oauth2-server-config/admin/client/views/oauthApp.coffee.js                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var toastr = void 0;                                                                                                   // 1
module.import('toastr', {                                                                                              // 1
  "default": function (v) {                                                                                            // 1
    toastr = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
Template.oauthApp.onCreated(function () {                                                                              // 2
  this.subscribe('oauthApps');                                                                                         // 3
  return this.record = new ReactiveVar({                                                                               // 5
    active: true                                                                                                       // 5
  });                                                                                                                  // 5
});                                                                                                                    // 2
Template.oauthApp.helpers({                                                                                            // 8
  hasPermission: function () {                                                                                         // 9
    return RocketChat.authz.hasAllPermission('manage-oauth-apps');                                                     // 10
  },                                                                                                                   // 9
  data: function () {                                                                                                  // 12
    var base, data, params;                                                                                            // 13
    params = typeof (base = Template.instance().data).params === "function" ? base.params() : void 0;                  // 13
                                                                                                                       //
    if ((params != null ? params.id : void 0) != null) {                                                               // 15
      data = ChatOAuthApps.findOne({                                                                                   // 16
        _id: params.id                                                                                                 // 16
      });                                                                                                              // 16
                                                                                                                       //
      if (data != null) {                                                                                              // 17
        data.authorization_url = Meteor.absoluteUrl("oauth/authorize");                                                // 18
        data.access_token_url = Meteor.absoluteUrl("oauth/token");                                                     // 19
        Template.instance().record.set(data);                                                                          // 21
        return data;                                                                                                   // 22
      }                                                                                                                // 15
    }                                                                                                                  // 27
                                                                                                                       //
    return Template.instance().record.curValue;                                                                        // 24
  }                                                                                                                    // 9
});                                                                                                                    // 9
Template.oauthApp.events({                                                                                             // 27
  "click .submit > .delete": function () {                                                                             // 28
    var params;                                                                                                        // 29
    params = Template.instance().data.params();                                                                        // 29
    return swal({                                                                                                      // 36
      title: t('Are_you_sure'),                                                                                        // 32
      text: t('You_will_not_be_able_to_recover'),                                                                      // 33
      type: 'warning',                                                                                                 // 34
      showCancelButton: true,                                                                                          // 35
      confirmButtonColor: '#DD6B55',                                                                                   // 36
      confirmButtonText: t('Yes_delete_it'),                                                                           // 37
      cancelButtonText: t('Cancel'),                                                                                   // 38
      closeOnConfirm: false,                                                                                           // 39
      html: false                                                                                                      // 40
    }, function () {                                                                                                   // 32
      return Meteor.call("deleteOAuthApp", params.id, function (err, data) {                                           // 47
        swal({                                                                                                         // 43
          title: t('Deleted'),                                                                                         // 44
          text: t('Your_entry_has_been_deleted'),                                                                      // 45
          type: 'success',                                                                                             // 46
          timer: 1000,                                                                                                 // 47
          showConfirmButton: false                                                                                     // 48
        });                                                                                                            // 44
        return FlowRouter.go("admin-oauth-apps");                                                                      // 55
      });                                                                                                              // 42
    });                                                                                                                // 31
  },                                                                                                                   // 28
  "click .submit > .save": function () {                                                                               // 52
    var active, app, base, name, params, redirectUri;                                                                  // 53
    name = $('[name=name]').val().trim();                                                                              // 53
    active = $('[name=active]:checked').val().trim() === "1";                                                          // 54
    redirectUri = $('[name=redirectUri]').val().trim();                                                                // 55
                                                                                                                       //
    if (name === '') {                                                                                                 // 57
      return toastr.error(TAPi18n.__("The_application_name_is_required"));                                             // 58
    }                                                                                                                  // 66
                                                                                                                       //
    if (redirectUri === '') {                                                                                          // 60
      return toastr.error(TAPi18n.__("The_redirectUri_is_required"));                                                  // 61
    }                                                                                                                  // 69
                                                                                                                       //
    app = {                                                                                                            // 63
      name: name,                                                                                                      // 64
      active: active,                                                                                                  // 65
      redirectUri: redirectUri                                                                                         // 66
    };                                                                                                                 // 64
    params = typeof (base = Template.instance().data).params === "function" ? base.params() : void 0;                  // 68
                                                                                                                       //
    if ((params != null ? params.id : void 0) != null) {                                                               // 69
      return Meteor.call("updateOAuthApp", params.id, app, function (err, data) {                                      // 77
        if (err != null) {                                                                                             // 71
          return handleError(err);                                                                                     // 72
        }                                                                                                              // 80
                                                                                                                       //
        return toastr.success(TAPi18n.__("Application_updated"));                                                      // 81
      });                                                                                                              // 70
    } else {                                                                                                           // 69
      return Meteor.call("addOAuthApp", app, function (err, data) {                                                    // 84
        if (err != null) {                                                                                             // 77
          return handleError(err);                                                                                     // 78
        }                                                                                                              // 87
                                                                                                                       //
        toastr.success(TAPi18n.__("Application_added"));                                                               // 80
        return FlowRouter.go("admin-oauth-app", {                                                                      // 89
          id: data._id                                                                                                 // 81
        });                                                                                                            // 81
      });                                                                                                              // 76
    }                                                                                                                  // 93
  }                                                                                                                    // 28
});                                                                                                                    // 28
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.oauthApps.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_oauth2-server-config/admin/client/views/template.oauthApps.js                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("oauthApps");                                                                                     // 2
Template["oauthApps"] = new Template("Template.oauthApps", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "permissions-manager"                                                                                       // 6
  }, "\n\t\t", Blaze.If(function() {                                                                                   // 7
    return Spacebars.call(view.lookup("hasPermission"));                                                               // 8
  }, function() {                                                                                                      // 9
    return [ "\n\t\t\t", HTML.A({                                                                                      // 10
      href: function() {                                                                                               // 11
        return Spacebars.mustache(view.lookup("pathFor"), "admin-oauth-app");                                          // 12
      },                                                                                                               // 13
      class: "button primary new-role"                                                                                 // 14
    }, Blaze.View("lookup:_", function() {                                                                             // 15
      return Spacebars.mustache(view.lookup("_"), "New_Application");                                                  // 16
    })), "\n\n\t\t\t", HTML.DIV({                                                                                      // 17
      class: "rocket-form"                                                                                             // 18
    }, "\n\t\t\t\t", HTML.DIV({                                                                                        // 19
      class: "section"                                                                                                 // 20
    }, "\n\t\t\t\t\t", HTML.DIV({                                                                                      // 21
      class: "admin-integrations-new-panel"                                                                            // 22
    }, "\n\t\t\t\t\t\t", Blaze.Each(function() {                                                                       // 23
      return Spacebars.call(view.lookup("applications"));                                                              // 24
    }, function() {                                                                                                    // 25
      return [ "\n\t\t\t\t\t\t\t", HTML.A({                                                                            // 26
        href: function() {                                                                                             // 27
          return Spacebars.mustache(view.lookup("pathFor"), "admin-oauth-app", Spacebars.kw({                          // 28
            id: view.lookup("_id")                                                                                     // 29
          }));                                                                                                         // 30
        }                                                                                                              // 31
      }, "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                              // 32
        class: "admin-integrations-new-item"                                                                           // 33
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                            // 34
        class: "admin-integrations-new-item-body"                                                                      // 35
      }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                          // 36
        class: "admin-integrations-new-item-title"                                                                     // 37
      }, "\n\t\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:name", function() {                                            // 38
        return Spacebars.mustache(view.lookup("name"));                                                                // 39
      }), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                              // 40
        class: "admin-integrations-new-item-description"                                                               // 41
      }, "\n\t\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                               // 42
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Created_at_s_by_s", Spacebars.dataMustache(view.lookup("dateFormated"), view.lookup("_createdAt")), Spacebars.dot(view.lookup("_createdBy"), "username")));
      }), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t", HTML.I({                         // 44
        class: "icon-angle-right"                                                                                      // 45
      }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t" ];                                              // 46
    }, function() {                                                                                                    // 47
      return [ "\n\t\t\t\t\t\t\t", HTML.H1(Blaze.View("lookup:_", function() {                                         // 48
        return Spacebars.mustache(view.lookup("_"), "There_are_no_applications");                                      // 49
      })), "\n\t\t\t\t\t\t" ];                                                                                         // 50
    }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t" ];                                                       // 51
  }, function() {                                                                                                      // 52
    return [ "\n\t\t\t", Blaze.View("lookup:_", function() {                                                           // 53
      return Spacebars.mustache(view.lookup("_"), "Not_authorized");                                                   // 54
    }), "\n\t\t" ];                                                                                                    // 55
  }), "\n\t");                                                                                                         // 56
}));                                                                                                                   // 57
                                                                                                                       // 58
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"oauthApps.coffee.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_oauth2-server-config/admin/client/views/oauthApps.coffee.js                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var moment = void 0;                                                                                                   // 1
module.import('moment', {                                                                                              // 1
  "default": function (v) {                                                                                            // 1
    moment = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
Template.oauthApps.onCreated(function () {                                                                             // 3
  return this.subscribe('oauthApps');                                                                                  // 4
});                                                                                                                    // 3
Template.oauthApps.helpers({                                                                                           // 6
  hasPermission: function () {                                                                                         // 7
    return RocketChat.authz.hasAllPermission('manage-oauth-apps');                                                     // 8
  },                                                                                                                   // 7
  applications: function () {                                                                                          // 10
    return ChatOAuthApps.find();                                                                                       // 11
  },                                                                                                                   // 7
  dateFormated: function (date) {                                                                                      // 13
    return moment(date).format('L LT');                                                                                // 14
  }                                                                                                                    // 7
});                                                                                                                    // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".less",
    ".html",
    ".coffee"
  ]
});
require("./node_modules/meteor/rocketchat:oauth2-server-config/oauth/client/template.oauth2-client.js");
require("./node_modules/meteor/rocketchat:oauth2-server-config/oauth/client/oauth2-client.coffee.js");
require("./node_modules/meteor/rocketchat:oauth2-server-config/admin/client/startup.coffee.js");
require("./node_modules/meteor/rocketchat:oauth2-server-config/admin/client/collection.coffee.js");
require("./node_modules/meteor/rocketchat:oauth2-server-config/admin/client/route.coffee.js");
require("./node_modules/meteor/rocketchat:oauth2-server-config/admin/client/views/template.oauthApp.js");
require("./node_modules/meteor/rocketchat:oauth2-server-config/admin/client/views/oauthApp.coffee.js");
require("./node_modules/meteor/rocketchat:oauth2-server-config/admin/client/views/template.oauthApps.js");
require("./node_modules/meteor/rocketchat:oauth2-server-config/admin/client/views/oauthApps.coffee.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:oauth2-server-config'] = {};

})();
