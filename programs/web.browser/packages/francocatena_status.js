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
var Template = Package['templating-runtime'].Template;
var _ = Package.underscore._;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var translations, Status;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/francocatena_status/lib/template.status.js                                                            //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
                                                                                                                  // 1
Template.__checkName("status");                                                                                   // 2
Template["status"] = new Template("Template.status", (function() {                                                // 3
  var view = this;                                                                                                // 4
  return Blaze._TemplateWith(function() {                                                                         // 5
    return {                                                                                                      // 6
      template: Spacebars.call(view.lookup("template")),                                                          // 7
      data: Spacebars.call(view.lookup("helpers"))                                                                // 8
    };                                                                                                            // 9
  }, function() {                                                                                                 // 10
    return Spacebars.include(function() {                                                                         // 11
      return Spacebars.call(Template.__dynamic);                                                                  // 12
    });                                                                                                           // 13
  });                                                                                                             // 14
}));                                                                                                              // 15
                                                                                                                  // 16
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/francocatena_status/templates/template.bootstrap3.js                                                  //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
                                                                                                                  // 1
Template.__checkName("status_bootstrap3");                                                                        // 2
Template["status_bootstrap3"] = new Template("Template.status_bootstrap3", (function() {                          // 3
  var view = this;                                                                                                // 4
  return Blaze.Unless(function() {                                                                                // 5
    return Spacebars.call(view.lookup("connected"));                                                              // 6
  }, function() {                                                                                                 // 7
    return [ "\n    ", HTML.DIV({                                                                                 // 8
      class: function() {                                                                                         // 9
        return [ "alert ", Spacebars.mustache(view.lookup("option"), "classes"), " text-center" ];                // 10
      },                                                                                                          // 11
      role: "alert"                                                                                               // 12
    }, "\n      ", HTML.STRONG("\n        ", HTML.SPAN({                                                          // 13
      class: "glyphicon glyphicon-warning-sign"                                                                   // 14
    }), "\n        ", Blaze.View("lookup:message", function() {                                                   // 15
      return Spacebars.mustache(view.lookup("message"));                                                          // 16
    }), "\n      "), "\n      ", Blaze.View("lookup:extraMessage", function() {                                   // 17
      return Spacebars.mustache(view.lookup("extraMessage"));                                                     // 18
    }), "\n\n      ", Blaze.If(function() {                                                                       // 19
      return Spacebars.call(view.lookup("showReconnect"));                                                        // 20
    }, function() {                                                                                               // 21
      return [ "\n        ", HTML.A({                                                                             // 22
        href: "#",                                                                                                // 23
        class: "alert-link"                                                                                       // 24
      }, Blaze.View("lookup:reconnectLabel", function() {                                                         // 25
        return Spacebars.mustache(view.lookup("reconnectLabel"));                                                 // 26
      })), "\n      " ];                                                                                          // 27
    }), "\n    "), "\n  " ];                                                                                      // 28
  });                                                                                                             // 29
}));                                                                                                              // 30
                                                                                                                  // 31
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/francocatena_status/templates/template.semantic_ui.js                                                 //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
                                                                                                                  // 1
Template.__checkName("status_semantic_ui");                                                                       // 2
Template["status_semantic_ui"] = new Template("Template.status_semantic_ui", (function() {                        // 3
  var view = this;                                                                                                // 4
  return Blaze.Unless(function() {                                                                                // 5
    return Spacebars.call(view.lookup("connected"));                                                              // 6
  }, function() {                                                                                                 // 7
    return [ "\n    ", HTML.DIV({                                                                                 // 8
      class: function() {                                                                                         // 9
        return [ "ui ", Spacebars.mustache(view.lookup("option"), "classes"), " message" ];                       // 10
      }                                                                                                           // 11
    }, "\n      ", HTML.DIV({                                                                                     // 12
      class: "content"                                                                                            // 13
    }, "\n        ", HTML.DIV({                                                                                   // 14
      class: "header"                                                                                             // 15
    }, "\n          ", Blaze.View("lookup:message", function() {                                                  // 16
      return Spacebars.mustache(view.lookup("message"));                                                          // 17
    }), " ", HTML.CharRef({                                                                                       // 18
      html: "&nbsp;",                                                                                             // 19
      str: " "                                                                                                    // 20
    }), "\n          ", Blaze.View("lookup:extraMessage", function() {                                            // 21
      return Spacebars.mustache(view.lookup("extraMessage"));                                                     // 22
    }), "\n          ", Blaze.If(function() {                                                                     // 23
      return Spacebars.call(view.lookup("showReconnect"));                                                        // 24
    }, function() {                                                                                               // 25
      return [ "\n            ", HTML.A({                                                                         // 26
        href: "#",                                                                                                // 27
        class: "alert-link"                                                                                       // 28
      }, Blaze.View("lookup:reconnectLabel", function() {                                                         // 29
        return Spacebars.mustache(view.lookup("reconnectLabel"));                                                 // 30
      })), "\n          " ];                                                                                      // 31
    }), "\n        "), "\n      "), "\n    "), "\n  " ];                                                          // 32
  });                                                                                                             // 33
}));                                                                                                              // 34
                                                                                                                  // 35
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/francocatena_status/templates/template.materialize.js                                                 //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
                                                                                                                  // 1
Template.__checkName("status_materialize");                                                                       // 2
Template["status_materialize"] = new Template("Template.status_materialize", (function() {                        // 3
  var view = this;                                                                                                // 4
  return Blaze.Unless(function() {                                                                                // 5
    return Spacebars.call(view.lookup("connected"));                                                              // 6
  }, function() {                                                                                                 // 7
    return [ "\n    ", HTML.DIV({                                                                                 // 8
      class: function() {                                                                                         // 9
        return [ "center card-panel orange lighten-5 ", Spacebars.mustache(view.lookup("classes")) ];             // 10
      }                                                                                                           // 11
    }, "\n      ", HTML.SPAN({                                                                                    // 12
      class: "lime-text text-darken-4"                                                                            // 13
    }, "\n      ", HTML.STRONG("\n        ", HTML.I({                                                             // 14
      class: "small mdi-alert-warning"                                                                            // 15
    }), "\n      "), "\n        ", Blaze.View("lookup:message", function() {                                      // 16
      return Spacebars.mustache(view.lookup("message"));                                                          // 17
    }), "\n      "), "\n      ", Blaze.View("lookup:extraMessage", function() {                                   // 18
      return Spacebars.mustache(view.lookup("extraMessage"));                                                     // 19
    }), "\n      ", Blaze.If(function() {                                                                         // 20
      return Spacebars.call(view.lookup("showReconnect"));                                                        // 21
    }, function() {                                                                                               // 22
      return [ "\n        ", HTML.A({                                                                             // 23
        href: "#",                                                                                                // 24
        class: "alert-link"                                                                                       // 25
      }, Blaze.View("lookup:reconnectLabel", function() {                                                         // 26
        return Spacebars.mustache(view.lookup("reconnectLabel"));                                                 // 27
      })), "\n      " ];                                                                                          // 28
    }), "\n    "), "\n  " ];                                                                                      // 29
  });                                                                                                             // 30
}));                                                                                                              // 31
                                                                                                                  // 32
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/francocatena_status/templates/template.uikit.js                                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
                                                                                                                  // 1
Template.__checkName("status_uikit");                                                                             // 2
Template["status_uikit"] = new Template("Template.status_uikit", (function() {                                    // 3
  var view = this;                                                                                                // 4
  return Blaze.Unless(function() {                                                                                // 5
    return Spacebars.call(view.lookup("connected"));                                                              // 6
  }, function() {                                                                                                 // 7
    return [ "\n    ", HTML.DIV({                                                                                 // 8
      class: function() {                                                                                         // 9
        return [ "uk-alert uk-alert-", Spacebars.mustache(view.lookup("option"), "classes"), " uk-text-center" ];
      }                                                                                                           // 11
    }, "\n      ", HTML.STRONG("\n        ", Blaze.View("lookup:message", function() {                            // 12
      return Spacebars.mustache(view.lookup("message"));                                                          // 13
    }), "\n      "), "\n      ", Blaze.View("lookup:extraMessage", function() {                                   // 14
      return Spacebars.mustache(view.lookup("extraMessage"));                                                     // 15
    }), "\n\n      ", Blaze.If(function() {                                                                       // 16
      return Spacebars.call(view.lookup("showReconnect"));                                                        // 17
    }, function() {                                                                                               // 18
      return [ "\n        ", HTML.A({                                                                             // 19
        href: "#",                                                                                                // 20
        class: "alert-link"                                                                                       // 21
      }, Blaze.View("lookup:reconnectLabel", function() {                                                         // 22
        return Spacebars.mustache(view.lookup("reconnectLabel"));                                                 // 23
      })), "\n      " ];                                                                                          // 24
    }), "\n    "), "\n  " ];                                                                                      // 25
  });                                                                                                             // 26
}));                                                                                                              // 27
                                                                                                                  // 28
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/francocatena_status/templates/template.foundation.js                                                  //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
                                                                                                                  // 1
Template.__checkName("status_foundation");                                                                        // 2
Template["status_foundation"] = new Template("Template.status_foundation", (function() {                          // 3
  var view = this;                                                                                                // 4
  return Blaze.Unless(function() {                                                                                // 5
    return Spacebars.call(view.lookup("connected"));                                                              // 6
  }, function() {                                                                                                 // 7
    return [ "\n    ", HTML.DIV({                                                                                 // 8
      "data-alert": "",                                                                                           // 9
      class: function() {                                                                                         // 10
        return [ "alert-box ", Spacebars.mustache(view.lookup("option"), "classes"), " text-center" ];            // 11
      }                                                                                                           // 12
    }, "\n      ", HTML.STRONG("\n        ", Blaze.View("lookup:message", function() {                            // 13
      return Spacebars.mustache(view.lookup("message"));                                                          // 14
    }), "\n      "), "\n      ", Blaze.View("lookup:extraMessage", function() {                                   // 15
      return Spacebars.mustache(view.lookup("extraMessage"));                                                     // 16
    }), "\n\n      ", Blaze.If(function() {                                                                       // 17
      return Spacebars.call(view.lookup("showReconnect"));                                                        // 18
    }, function() {                                                                                               // 19
      return [ "\n        ", HTML.A({                                                                             // 20
        href: "#",                                                                                                // 21
        class: "alert-link label secondary"                                                                       // 22
      }, Blaze.View("lookup:reconnectLabel", function() {                                                         // 23
        return Spacebars.mustache(view.lookup("reconnectLabel"));                                                 // 24
      })), "\n      " ];                                                                                          // 25
    }), "\n    "), "\n  " ];                                                                                      // 26
  });                                                                                                             // 27
}));                                                                                                              // 28
                                                                                                                  // 29
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/francocatena_status/packages/francocatena_statusi18n/cn.i18n.js                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "project",                                                                                     // 2
    namespace = "project";                                                                                        // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
TAPi18n.languages_names["cn"] = ["cn","cn"];                                                                      // 8
TAPi18n._enable({"helper_name":"_","supported_languages":null,"i18n_files_route":"/tap-i18n","preloaded_langs":[],"cdn_path":null});
TAPi18n.languages_names["en"] = ["English","English"];                                                            // 10
                                                                                                                  // 11
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/francocatena_status/packages/francocatena_statusi18n/cs.i18n.js                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "project",                                                                                     // 2
    namespace = "project";                                                                                        // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
TAPi18n.languages_names["cs"] = ["Czech","čeština‎"];                                                             // 8
                                                                                                                  // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/francocatena_status/packages/francocatena_statusi18n/da.i18n.js                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "project",                                                                                     // 2
    namespace = "project";                                                                                        // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
TAPi18n.languages_names["da"] = ["Danish","Dansk"];                                                               // 8
                                                                                                                  // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/francocatena_status/packages/francocatena_statusi18n/de.i18n.js                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "project",                                                                                     // 2
    namespace = "project";                                                                                        // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
TAPi18n.languages_names["de"] = ["German","Deutsch"];                                                             // 8
                                                                                                                  // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/francocatena_status/packages/francocatena_statusi18n/en.i18n.js                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "project",                                                                                     // 2
    namespace = "project";                                                                                        // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
// integrate the fallback language translations                                                                   // 8
translations = {};                                                                                                // 9
translations[namespace] = {"meteor_status_connected":"Connected","meteor_status_connecting":"Connecting...","meteor_status_failed":"The server connection failed","meteor_status_waiting":"Waiting for server connection,","meteor_status_offline":"Offline mode.","meteor_status_reconnect_in":"trying again in one second...","meteor_status_reconnect_in_plural":"trying again in __count__ seconds...","meteor_status_try_now_waiting":"Try now","meteor_status_try_now_offline":"Connect again"};
TAPi18n._loadLangFileObject("en", translations);                                                                  // 11
                                                                                                                  // 12
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/francocatena_status/packages/francocatena_statusi18n/es.i18n.js                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "project",                                                                                     // 2
    namespace = "project";                                                                                        // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
TAPi18n.languages_names["es"] = ["Spanish (Spain)","Español"];                                                    // 8
                                                                                                                  // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/francocatena_status/packages/francocatena_statusi18n/et.i18n.js                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "project",                                                                                     // 2
    namespace = "project";                                                                                        // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
TAPi18n.languages_names["et"] = ["Estonian","Eesti"];                                                             // 8
                                                                                                                  // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/francocatena_status/packages/francocatena_statusi18n/fr.i18n.js                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "project",                                                                                     // 2
    namespace = "project";                                                                                        // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
TAPi18n.languages_names["fr"] = ["French (France)","Français"];                                                   // 8
                                                                                                                  // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/francocatena_status/packages/francocatena_statusi18n/id.i18n.js                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "project",                                                                                     // 2
    namespace = "project";                                                                                        // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
TAPi18n.languages_names["id"] = ["Indonesian","Bahasa Indonesia"];                                                // 8
                                                                                                                  // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/francocatena_status/packages/francocatena_statusi18n/it.i18n.js                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "project",                                                                                     // 2
    namespace = "project";                                                                                        // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
TAPi18n.languages_names["it"] = ["Italian","Italiano"];                                                           // 8
                                                                                                                  // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/francocatena_status/packages/francocatena_statusi18n/ms.i18n.js                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "project",                                                                                     // 2
    namespace = "project";                                                                                        // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
TAPi18n.languages_names["ms"] = ["Malay","Bahasa Melayu"];                                                        // 8
                                                                                                                  // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/francocatena_status/packages/francocatena_statusi18n/nl.i18n.js                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "project",                                                                                     // 2
    namespace = "project";                                                                                        // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
TAPi18n.languages_names["nl"] = ["Dutch","Nederlands"];                                                           // 8
                                                                                                                  // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/francocatena_status/packages/francocatena_statusi18n/pt.i18n.js                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "project",                                                                                     // 2
    namespace = "project";                                                                                        // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
TAPi18n.languages_names["pt"] = ["Portuguese (Portugal)","Português"];                                            // 8
                                                                                                                  // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/francocatena_status/packages/francocatena_statusi18n/ru.i18n.js                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "project",                                                                                     // 2
    namespace = "project";                                                                                        // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
TAPi18n.languages_names["ru"] = ["Russian","Русский"];                                                            // 8
                                                                                                                  // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/francocatena_status/packages/francocatena_statusi18n/tr.i18n.js                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "project",                                                                                     // 2
    namespace = "project";                                                                                        // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
TAPi18n.languages_names["tr"] = ["Turkish","Türkçe"];                                                             // 8
                                                                                                                  // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/francocatena_status/packages/francocatena_statusi18n/vi.i18n.js                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "project",                                                                                     // 2
    namespace = "project";                                                                                        // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
TAPi18n.languages_names["vi"] = ["Vietnamese","Tiếng Việt"];                                                      // 8
                                                                                                                  // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/francocatena_status/packages/francocatena_statusi18n/zh.i18n.js                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "project",                                                                                     // 2
    namespace = "project";                                                                                        // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
TAPi18n.languages_names["zh"] = ["Chinese","中文"];                                                                 // 8
                                                                                                                  // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/francocatena_status/packages/francocatena_statusi18n/zh-TW.i18n.js                                    //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _ = Package.underscore._,                                                                                     // 1
    package_name = "project",                                                                                     // 2
    namespace = "project";                                                                                        // 3
                                                                                                                  // 4
if (package_name != "project") {                                                                                  // 5
    namespace = TAPi18n.packages[package_name].namespace;                                                         // 6
}                                                                                                                 // 7
TAPi18n.languages_names["zh-TW"] = ["Chinese (Taiwan)","繁体中文（台湾）"];                                               // 8
                                                                                                                  // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/francocatena_status/status.js                                                                         //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var template = new ReactiveVar('bootstrap3')                                                                      // 1
var options  = new ReactiveVar({})                                                                                // 2
var defaults = {                                                                                                  // 3
  classes: {                                                                                                      // 4
    bootstrap3:  'alert-warning',                                                                                 // 5
    semantic_ui: 'negative',                                                                                      // 6
    uikit:       'warning',                                                                                       // 7
    foundation:  'warning'                                                                                        // 8
  }                                                                                                               // 9
}                                                                                                                 // 10
                                                                                                                  // 11
Status = {                                                                                                        // 12
  template: function () {                                                                                         // 13
    return template.get()                                                                                         // 14
  },                                                                                                              // 15
                                                                                                                  // 16
  option: function (option) {                                                                                     // 17
    return options.get()[option] || defaults[option][template.get()]                                              // 18
  },                                                                                                              // 19
                                                                                                                  // 20
  setTemplate: function (name, _options) {                                                                        // 21
    template.set(name)                                                                                            // 22
                                                                                                                  // 23
    if (_options) options.set(_options)                                                                           // 24
  }                                                                                                               // 25
}                                                                                                                 // 26
                                                                                                                  // 27
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/francocatena_status/lib/status.js                                                                     //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var retryTime   = new ReactiveVar(0)                                                                              // 1
var retryHandle = null                                                                                            // 2
                                                                                                                  // 3
var clearRetryInterval = function () {                                                                            // 4
  clearInterval(retryHandle)                                                                                      // 5
                                                                                                                  // 6
  retryHandle = null                                                                                              // 7
}                                                                                                                 // 8
                                                                                                                  // 9
var trackStatus = function () {                                                                                   // 10
  if (Meteor.status().status === 'waiting')                                                                       // 11
    retryHandle = retryHandle || setInterval(function () {                                                        // 12
      var timeDiff   = Meteor.status().retryTime - (new Date).getTime()                                           // 13
      var _retryTime = timeDiff > 0 && Math.round(timeDiff / 1000) || 0                                           // 14
                                                                                                                  // 15
      retryTime.set(_retryTime)                                                                                   // 16
    }, 500)                                                                                                       // 17
  else                                                                                                            // 18
    clearRetryInterval()                                                                                          // 19
}                                                                                                                 // 20
                                                                                                                  // 21
var helpers = {                                                                                                   // 22
  connected: function () {                                                                                        // 23
    return Meteor.status().connected                                                                              // 24
  },                                                                                                              // 25
                                                                                                                  // 26
  message: function () {                                                                                          // 27
    return TAPi18n.__('meteor_status', { context: Meteor.status().status })                                       // 28
  },                                                                                                              // 29
                                                                                                                  // 30
  extraMessage: function () {                                                                                     // 31
    if (Meteor.status().status === 'waiting')                                                                     // 32
      return TAPi18n.__('meteor_status_reconnect_in', { count: retryTime.get() })                                 // 33
  },                                                                                                              // 34
                                                                                                                  // 35
  showReconnect: function () {                                                                                    // 36
    return _.contains(['waiting', 'offline'], Meteor.status().status)                                             // 37
  },                                                                                                              // 38
                                                                                                                  // 39
  reconnectLabel: function () {                                                                                   // 40
    return TAPi18n.__('meteor_status_try_now', { context: Meteor.status().status })                               // 41
  },                                                                                                              // 42
                                                                                                                  // 43
  option: function (option) {                                                                                     // 44
    return Status.option(option)                                                                                  // 45
  }                                                                                                               // 46
}                                                                                                                 // 47
                                                                                                                  // 48
Template.status.onDestroyed(clearRetryInterval)                                                                   // 49
                                                                                                                  // 50
Template.status.onCreated(function () {                                                                           // 51
  this.autorun(trackStatus)                                                                                       // 52
})                                                                                                                // 53
                                                                                                                  // 54
Template.status.helpers({                                                                                         // 55
  template: function () {                                                                                         // 56
    return 'status_' + Status.template()                                                                          // 57
  },                                                                                                              // 58
                                                                                                                  // 59
  helpers: function () {                                                                                          // 60
    return helpers                                                                                                // 61
  }                                                                                                               // 62
})                                                                                                                // 63
                                                                                                                  // 64
Template.status.events({                                                                                          // 65
  'click a.alert-link': function (e) {                                                                            // 66
    e.preventDefault()                                                                                            // 67
    Meteor.reconnect()                                                                                            // 68
  }                                                                                                               // 69
})                                                                                                                // 70
                                                                                                                  // 71
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['francocatena:status'] = {}, {
  Status: Status
});

})();
