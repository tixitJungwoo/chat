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
var check = Package.check.check;
var Match = Package.check.Match;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
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
var __coffeescriptShare, Importer;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:importer":{"lib":{"_importer.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_importer/lib/_importer.coffee.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Importer = {};                                                                                                         // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"importTool.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_importer/lib/importTool.coffee.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Importer.Importers = {};                                                                                               // 1
                                                                                                                       //
Importer.addImporter = function (name, importer, options) {                                                            // 3
  if (Importer.Importers[name] == null) {                                                                              // 4
    return Importer.Importers[name] = {                                                                                // 5
      name: options.name,                                                                                              // 6
      importer: importer,                                                                                              // 7
      mimeType: options.mimeType,                                                                                      // 8
      warnings: options.warnings                                                                                       // 9
    };                                                                                                                 // 6
  }                                                                                                                    // 11
};                                                                                                                     // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"client":{"admin":{"template.adminImport.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_importer/client/admin/template.adminImport.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("adminImport");                                                                                   // 2
Template["adminImport"] = new Template("Template.adminImport", (function() {                                           // 3
  var view = this;                                                                                                     // 4
  return HTML.SECTION({                                                                                                // 5
    class: "page-container page-home page-static page-settings"                                                        // 6
  }, "\n\t\t", HTML.HEADER({                                                                                           // 7
    class: "fixed-title border-component-color"                                                                        // 8
  }, "\n\t\t\t", Spacebars.include(view.lookupTemplate("burger")), "\n\t\t\t", HTML.Raw('<h2>\n\t\t\t\t<span class="room-title">Import</span>\n\t\t\t</h2>'), "\n\t\t"), "\n\t\t", HTML.DIV({
    class: "content"                                                                                                   // 10
  }, "\n\t\t\t", Blaze.Unless(function() {                                                                             // 11
    return Spacebars.call(view.lookup("isAdmin"));                                                                     // 12
  }, function() {                                                                                                      // 13
    return [ "\n\t\t\t\t", HTML.P("You are not authorized to view this page."), "\n\t\t\t" ];                          // 14
  }, function() {                                                                                                      // 15
    return [ "\n\t\t\t\t", Blaze.If(function() {                                                                       // 16
      return Spacebars.call(view.lookup("isImporters"));                                                               // 17
    }, function() {                                                                                                    // 18
      return [ "\n\t\t\t\t", HTML.DIV({                                                                                // 19
        class: "rocket-form"                                                                                           // 20
      }, "\n\t\t\t\t\t", HTML.FIELDSET("\n\t\t\t\t\t\t", Blaze.Each(function() {                                       // 21
        return Spacebars.call(view.lookup("importers"));                                                               // 22
      }, function() {                                                                                                  // 23
        return [ "\n\t\t\t\t\t\t\t", HTML.DIV({                                                                        // 24
          class: "section"                                                                                             // 25
        }, "\n\t\t\t\t\t\t\t\t", HTML.H1(Blaze.View("lookup:name", function() {                                        // 26
          return Spacebars.mustache(view.lookup("name"));                                                              // 27
        })), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                          // 28
          class: "section-content"                                                                                     // 29
        }, "\n\t\t\t\t\t\t\t\t\t", HTML.DIV(Blaze.View("lookup:getDescription", function() {                           // 30
          return Spacebars.mustache(view.lookup("getDescription"), view.lookup("."));                                  // 31
        })), "\n\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                     // 32
          class: "button primary start-import"                                                                         // 33
        }, "Start"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t" ];                                   // 34
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t" ];                                                              // 35
    }, function() {                                                                                                    // 36
      return "\n\t\t\t\t\tNo Importers Available\n\t\t\t\t";                                                           // 37
    }), "\n\t\t\t" ];                                                                                                  // 38
  }), "\n\t\t"), "\n\t");                                                                                              // 39
}));                                                                                                                   // 40
                                                                                                                       // 41
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"adminImport.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_importer/client/admin/adminImport.coffee.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.adminImport.helpers({                                                                                         // 1
  isAdmin: function () {                                                                                               // 2
    return RocketChat.authz.hasRole(Meteor.userId(), 'admin');                                                         // 3
  },                                                                                                                   // 2
  isImporters: function () {                                                                                           // 4
    return Object.keys(Importer.Importers).length > 0;                                                                 // 5
  },                                                                                                                   // 2
  getDescription: function (importer) {                                                                                // 6
    return TAPi18n.__('Importer_From_Description', {                                                                   // 7
      from: importer.name                                                                                              // 7
    });                                                                                                                // 7
  },                                                                                                                   // 2
  importers: function () {                                                                                             // 8
    var importers;                                                                                                     // 9
    importers = [];                                                                                                    // 9
                                                                                                                       //
    _.each(Importer.Importers, function (importer, key) {                                                              // 10
      importer.key = key;                                                                                              // 11
      return importers.push(importer);                                                                                 // 18
    });                                                                                                                // 10
                                                                                                                       //
    return importers;                                                                                                  // 13
  }                                                                                                                    // 2
});                                                                                                                    // 2
Template.adminImport.events({                                                                                          // 15
  'click .start-import': function (event) {                                                                            // 16
    var importer;                                                                                                      // 17
    importer = this;                                                                                                   // 17
    return Meteor.call('setupImporter', importer.key, function (error, data) {                                         // 28
      if (error) {                                                                                                     // 20
        console.log(t('importer_setup_error'), importer.key, error);                                                   // 21
        return handleError(error);                                                                                     // 22
      } else {                                                                                                         // 20
        return FlowRouter.go('/admin/import/prepare/' + importer.key);                                                 // 33
      }                                                                                                                // 34
    });                                                                                                                // 19
  }                                                                                                                    // 16
});                                                                                                                    // 16
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.adminImportPrepare.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_importer/client/admin/template.adminImportPrepare.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("adminImportPrepare");                                                                            // 2
Template["adminImportPrepare"] = new Template("Template.adminImportPrepare", (function() {                             // 3
  var view = this;                                                                                                     // 4
  return HTML.SECTION({                                                                                                // 5
    class: "page-container page-home page-static page-settings"                                                        // 6
  }, "\n\t\t", Spacebars.With(function() {                                                                             // 7
    return Spacebars.call(view.lookup("importer"));                                                                    // 8
  }, function() {                                                                                                      // 9
    return [ "\n\t\t\t", HTML.HEADER({                                                                                 // 10
      class: "fixed-title border-component-color"                                                                      // 11
    }, "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("burger")), "\n\t\t\t\t", HTML.H2("\n\t\t\t\t\t", HTML.SPAN({
      class: "room-title"                                                                                              // 13
    }, Blaze.View("lookup:name", function() {                                                                          // 14
      return Spacebars.mustache(view.lookup("name"));                                                                  // 15
    })), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                            // 16
      class: "content"                                                                                                 // 17
    }, "\n\t\t\t\t", Blaze.Unless(function() {                                                                         // 18
      return Spacebars.call(view.lookup("isAdmin"));                                                                   // 19
    }, function() {                                                                                                    // 20
      return [ "\n\t\t\t\t\t", HTML.P("You are not authorized to view this page."), "\n\t\t\t\t" ];                    // 21
    }, function() {                                                                                                    // 22
      return [ "\n\t\t\t\t\t", HTML.DIV({                                                                              // 23
        class: "rocket-form"                                                                                           // 24
      }, "\n\t\t\t\t\t\t", HTML.FIELDSET("\n\t\t\t\t\t\t\t", Blaze.Each(function() {                                   // 25
        return Spacebars.call(view.lookup("warnings"));                                                                // 26
      }, function() {                                                                                                  // 27
        return [ "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                      // 28
          class: "section"                                                                                             // 29
        }, "\n\t\t\t\t\t\t\t\t\t", HTML.H1(Blaze.View("lookup:_", function() {                                         // 30
          return Spacebars.mustache(view.lookup("_"), "Warnings");                                                     // 31
        })), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                        // 32
          class: "section-content"                                                                                     // 33
        }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.P({                                                                          // 34
          style: "color: #bc2031;"                                                                                     // 35
        }, Blaze.View("lookup:_", function() {                                                                         // 36
          return Spacebars.mustache(view.lookup("_"), view.lookup("text"));                                            // 37
        }), " ", HTML.A({                                                                                              // 38
          href: function() {                                                                                           // 39
            return Spacebars.mustache(view.lookup("href"));                                                            // 40
          },                                                                                                           // 41
          target: "_blank"                                                                                             // 42
        }, Blaze.View("lookup:href", function() {                                                                      // 43
          return Spacebars.mustache(view.lookup("href"));                                                              // 44
        }))), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];                                    // 45
      }), "\n\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 46
        return Spacebars.call(view.lookup("isLoaded"));                                                                // 47
      }, function() {                                                                                                  // 48
        return [ "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                      // 49
          class: "section"                                                                                             // 50
        }, "\n\t\t\t\t\t\t\t\t\t", HTML.H1(Blaze.View("lookup:_", function() {                                         // 51
          return Spacebars.mustache(view.lookup("_"), "Actions");                                                      // 52
        })), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                        // 53
          class: "section-content"                                                                                     // 54
        }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                     // 55
          class: "button uncheck-deleted-users"                                                                        // 56
        }, HTML.I({                                                                                                    // 57
          class: "icon-send"                                                                                           // 58
        }), HTML.SPAN(Blaze.View("lookup:_", function() {                                                              // 59
          return Spacebars.mustache(view.lookup("_"), "Importer_Prepare_Uncheck_Deleted_Users");                       // 60
        }))), "\n\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                  // 61
          class: "button uncheck-archived-channels"                                                                    // 62
        }, HTML.I({                                                                                                    // 63
          class: "icon-send"                                                                                           // 64
        }), HTML.SPAN(Blaze.View("lookup:_", function() {                                                              // 65
          return Spacebars.mustache(view.lookup("_"), "Importer_Prepare_Uncheck_Archived_Channels");                   // 66
        }))), "\n\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                  // 67
          class: "button restart"                                                                                      // 68
        }, HTML.I({                                                                                                    // 69
          class: "icon-send"                                                                                           // 70
        }), HTML.SPAN(Blaze.View("lookup:_", function() {                                                              // 71
          return Spacebars.mustache(view.lookup("_"), "Importer_Prepare_Restart_Import");                              // 72
        }))), "\n\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                  // 73
          class: "button primary start"                                                                                // 74
        }, HTML.I({                                                                                                    // 75
          class: "icon-send"                                                                                           // 76
        }), HTML.SPAN(Blaze.View("lookup:_", function() {                                                              // 77
          return Spacebars.mustache(view.lookup("_"), "Importer_Prepare_Start_Import");                                // 78
        }))), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\n\t\t\t\t\t\t\t\t", HTML.DIV({                       // 79
          class: "section"                                                                                             // 80
        }, "\n\t\t\t\t\t\t\t\t\t", HTML.H1(Blaze.View("lookup:_", function() {                                         // 81
          return Spacebars.mustache(view.lookup("_"), "Users");                                                        // 82
        })), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                        // 83
          class: "section-content"                                                                                     // 84
        }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.UL("\n\t\t\t\t\t\t\t\t\t\t\t", Blaze.Each(function() {                       // 85
          return Spacebars.call(view.lookup("users"));                                                                 // 86
        }, function() {                                                                                                // 87
          return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.Unless(function() {                                             // 88
            return Spacebars.call(view.lookup("is_bot"));                                                              // 89
          }, function() {                                                                                              // 90
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({            // 91
              type: "checkbox",                                                                                        // 92
              name: function() {                                                                                       // 93
                return Spacebars.mustache(view.lookup("user_id"));                                                     // 94
              },                                                                                                       // 95
              checked: "checked"                                                                                       // 96
            }), Blaze.View("lookup:username", function() {                                                             // 97
              return Spacebars.mustache(view.lookup("username"));                                                      // 98
            }), " - ", Blaze.View("lookup:email", function() {                                                         // 99
              return Spacebars.mustache(view.lookup("email"));                                                         // 100
            }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                // 101
              return Spacebars.call(view.lookup("is_deleted"));                                                        // 102
            }, function() {                                                                                            // 103
              return [ " ", HTML.EM("(", Blaze.View("lookup:_", function() {                                           // 104
                return Spacebars.mustache(view.lookup("_"), "Deleted");                                                // 105
              }), ")") ];                                                                                              // 106
            }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t" ];                                       // 107
          }), "\n\t\t\t\t\t\t\t\t\t\t\t" ];                                                                            // 108
        }), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\n\t\t\t\t\t\t\t\t", HTML.DIV({
          class: "section"                                                                                             // 110
        }, "\n\t\t\t\t\t\t\t\t\t", HTML.H1(Blaze.View("lookup:_", function() {                                         // 111
          return Spacebars.mustache(view.lookup("_"), "Channels");                                                     // 112
        })), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                        // 113
          class: "section-content"                                                                                     // 114
        }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.UL("\n\t\t\t\t\t\t\t\t\t\t\t", Blaze.Each(function() {                       // 115
          return Spacebars.call(view.lookup("channels"));                                                              // 116
        }, function() {                                                                                                // 117
          return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                  // 118
            type: "checkbox",                                                                                          // 119
            name: function() {                                                                                         // 120
              return Spacebars.mustache(view.lookup("channel_id"));                                                    // 121
            },                                                                                                         // 122
            checked: "checked"                                                                                         // 123
          }), Blaze.View("lookup:name", function() {                                                                   // 124
            return Spacebars.mustache(view.lookup("name"));                                                            // 125
          }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                    // 126
            return Spacebars.call(view.lookup("is_archived"));                                                         // 127
          }, function() {                                                                                              // 128
            return [ " ", HTML.EM("(", Blaze.View("lookup:_", function() {                                             // 129
              return Spacebars.mustache(view.lookup("_"), "Importer_Archived");                                        // 130
            }), ")") ];                                                                                                // 131
          }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                    // 132
            return Spacebars.call(view.lookup("is_private"));                                                          // 133
          }, function() {                                                                                              // 134
            return [ " ", HTML.EM("(", Blaze.View("lookup:_", function() {                                             // 135
              return Spacebars.mustache(view.lookup("_"), "Private_Group");                                            // 136
            }), ")") ];                                                                                                // 137
          }), "\n\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t" ];                                             // 138
        }), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];           // 139
      }, function() {                                                                                                  // 140
        return [ "\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                           // 141
          return Spacebars.call(view.lookup("isPreparing"));                                                           // 142
        }, function() {                                                                                                // 143
          return [ "\n\t\t\t\t\t\t\t\t\t", Spacebars.include(view.lookupTemplate("loading")), "\n\t\t\t\t\t\t\t\t" ];  // 144
        }, function() {                                                                                                // 145
          return [ "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                  // 146
            class: "section"                                                                                           // 147
          }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.H1(Blaze.View("lookup:_", function() {                                     // 148
            return Spacebars.mustache(view.lookup("_"), "Importer_Source_File");                                       // 149
          })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 150
            class: "section-content"                                                                                   // 151
          }, "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                                                  // 152
            type: "file",                                                                                              // 153
            class: "import-file-input"                                                                                 // 154
          }), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t" ];                              // 155
        }), "\n\t\t\t\t\t\t\t" ];                                                                                      // 156
      }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                          // 157
    }), "\n\t\t\t"), "\n\t\t" ];                                                                                       // 158
  }), "\n\t");                                                                                                         // 159
}));                                                                                                                   // 160
                                                                                                                       // 161
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"adminImportPrepare.coffee.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_importer/client/admin/adminImportPrepare.coffee.js                                              //
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
Template.adminImportPrepare.helpers({                                                                                  // 2
  isAdmin: function () {                                                                                               // 3
    return RocketChat.authz.hasRole(Meteor.userId(), 'admin');                                                         // 4
  },                                                                                                                   // 3
  importer: function () {                                                                                              // 5
    var importer, importerKey;                                                                                         // 6
    importerKey = FlowRouter.getParam('importer');                                                                     // 6
    importer = void 0;                                                                                                 // 7
                                                                                                                       //
    _.each(Importer.Importers, function (i, key) {                                                                     // 8
      i.key = key;                                                                                                     // 9
                                                                                                                       //
      if (key === importerKey) {                                                                                       // 10
        return importer = i;                                                                                           // 14
      }                                                                                                                // 15
    });                                                                                                                // 8
                                                                                                                       //
    return importer;                                                                                                   // 13
  },                                                                                                                   // 3
  isLoaded: function () {                                                                                              // 14
    return Template.instance().loaded.get();                                                                           // 15
  },                                                                                                                   // 3
  isPreparing: function () {                                                                                           // 16
    return Template.instance().preparing.get();                                                                        // 17
  },                                                                                                                   // 3
  users: function () {                                                                                                 // 18
    return Template.instance().users.get();                                                                            // 19
  },                                                                                                                   // 3
  channels: function () {                                                                                              // 20
    return Template.instance().channels.get();                                                                         // 21
  }                                                                                                                    // 3
});                                                                                                                    // 3
Template.adminImportPrepare.events({                                                                                   // 23
  'change .import-file-input': function (event, template) {                                                            // 24
    var blob, e, files, importer, j, len, reader, ref, results;                                                        // 25
    importer = this;                                                                                                   // 25
                                                                                                                       //
    if (!importer.key) {                                                                                               // 26
      return;                                                                                                          // 26
    }                                                                                                                  // 39
                                                                                                                       //
    e = event.originalEvent || event;                                                                                  // 28
    files = e.target.files;                                                                                            // 29
                                                                                                                       //
    if (!files || files.length === 0) {                                                                                // 30
      files = ((ref = e.dataTransfer) != null ? ref.files : void 0) || [];                                             // 31
    }                                                                                                                  // 44
                                                                                                                       //
    results = [];                                                                                                      // 33
                                                                                                                       //
    for (j = 0, len = files.length; j < len; j++) {                                                                    // 46
      blob = files[j];                                                                                                 // 47
      template.preparing.set(true);                                                                                    // 34
      reader = new FileReader();                                                                                       // 36
      reader.readAsDataURL(blob);                                                                                      // 37
      results.push(reader.onloadend = function () {                                                                    // 51
        return Meteor.call('prepareImport', importer.key, reader.result, blob.type, blob.name, function (error, data) {
          if (error) {                                                                                                 // 40
            toastr.error(t('Invalid_Import_File_Type'));                                                               // 41
            template.preparing.set(false);                                                                             // 42
            return;                                                                                                    // 43
          }                                                                                                            // 57
                                                                                                                       //
          if (!data) {                                                                                                 // 45
            console.warn('The importer ' + importer.key + ' is not set up correctly, as it did not return any data.');
            toastr.error(t('Importer_not_setup'));                                                                     // 47
            template.preparing.set(false);                                                                             // 48
            return;                                                                                                    // 49
          }                                                                                                            // 63
                                                                                                                       //
          if (data.step) {                                                                                             // 51
            console.warn('Invalid file, contains `data.step`.', data);                                                 // 52
            toastr.error(t('Invalid_Export_File', importer.key));                                                      // 53
            template.preparing.set(false);                                                                             // 54
            return;                                                                                                    // 55
          }                                                                                                            // 69
                                                                                                                       //
          template.users.set(data.users);                                                                              // 57
          template.channels.set(data.channels);                                                                        // 58
          template.loaded.set(true);                                                                                   // 59
          return template.preparing.set(false);                                                                        // 73
        });                                                                                                            // 39
      });                                                                                                              // 38
    }                                                                                                                  // 33
                                                                                                                       //
    return results;                                                                                                    // 77
  },                                                                                                                   // 24
  'click .button.start': function (event, template) {                                                                  // 62
    var btn, channel, importer, j, k, len, len1, ref, ref1, user;                                                      // 63
    btn = this;                                                                                                        // 63
    $(btn).prop("disabled", true);                                                                                     // 64
    importer = this;                                                                                                   // 65
    ref = template.users.get();                                                                                        // 66
                                                                                                                       //
    for (j = 0, len = ref.length; j < len; j++) {                                                                      // 66
      user = ref[j];                                                                                                   // 86
      user.do_import = $("[name=" + user.user_id + "]").is(':checked');                                                // 67
    }                                                                                                                  // 66
                                                                                                                       //
    ref1 = template.channels.get();                                                                                    // 69
                                                                                                                       //
    for (k = 0, len1 = ref1.length; k < len1; k++) {                                                                   // 69
      channel = ref1[k];                                                                                               // 91
      channel.do_import = $("[name=" + channel.channel_id + "]").is(':checked');                                       // 70
    }                                                                                                                  // 69
                                                                                                                       //
    return Meteor.call('startImport', FlowRouter.getParam('importer'), {                                               // 94
      users: template.users.get(),                                                                                     // 72
      channels: template.channels.get()                                                                                // 72
    }, function (error, data) {                                                                                        // 72
      if (error) {                                                                                                     // 73
        console.warn('Error on starting the import:', error);                                                          // 74
        return handleError(error);                                                                                     // 75
      } else {                                                                                                         // 73
        return FlowRouter.go('/admin/import/progress/' + FlowRouter.getParam('importer'));                             // 102
      }                                                                                                                // 103
    });                                                                                                                // 72
  },                                                                                                                   // 24
  'click .button.restart': function (event, template) {                                                                // 79
    return Meteor.call('restartImport', FlowRouter.getParam('importer'), function (error, data) {                      // 107
      if (error) {                                                                                                     // 81
        console.warn('Error while restarting the import:', error);                                                     // 82
        handleError(error);                                                                                            // 83
        return;                                                                                                        // 84
      }                                                                                                                // 112
                                                                                                                       //
      template.users.set([]);                                                                                          // 86
      template.channels.set([]);                                                                                       // 87
      return template.loaded.set(false);                                                                               // 115
    });                                                                                                                // 80
  },                                                                                                                   // 24
  'click .button.uncheck-deleted-users': function (event, template) {                                                  // 90
    var j, len, ref, results, user;                                                                                    // 91
    ref = template.users.get();                                                                                        // 91
    results = [];                                                                                                      // 91
                                                                                                                       //
    for (j = 0, len = ref.length; j < len; j++) {                                                                      // 122
      user = ref[j];                                                                                                   // 123
                                                                                                                       //
      if (user.is_deleted) {                                                                                           // 124
        results.push($("[name=" + user.user_id + "]").attr('checked', false));                                         // 125
      }                                                                                                                // 126
    }                                                                                                                  // 91
                                                                                                                       //
    return results;                                                                                                    // 128
  },                                                                                                                   // 24
  'click .button.uncheck-archived-channels': function (event, template) {                                              // 94
    var channel, j, len, ref, results;                                                                                 // 95
    ref = template.channels.get();                                                                                     // 95
    results = [];                                                                                                      // 95
                                                                                                                       //
    for (j = 0, len = ref.length; j < len; j++) {                                                                      // 134
      channel = ref[j];                                                                                                // 135
                                                                                                                       //
      if (channel.is_archived) {                                                                                       // 136
        results.push($("[name=" + channel.channel_id + "]").attr('checked', false));                                   // 137
      }                                                                                                                // 138
    }                                                                                                                  // 95
                                                                                                                       //
    return results;                                                                                                    // 140
  }                                                                                                                    // 24
});                                                                                                                    // 24
Template.adminImportPrepare.onCreated(function () {                                                                    // 99
  var instance, loadSelection;                                                                                         // 100
  instance = this;                                                                                                     // 100
  this.preparing = new ReactiveVar(true);                                                                              // 101
  this.loaded = new ReactiveVar(false);                                                                                // 102
  this.users = new ReactiveVar([]);                                                                                    // 103
  this.channels = new ReactiveVar([]);                                                                                 // 104
                                                                                                                       //
  loadSelection = function (progress) {                                                                                // 106
    if (progress != null ? progress.step : void 0) {                                                                   // 107
      switch (progress.step) {                                                                                         // 108
        case 'importer_importing_started':                                                                             // 108
        case 'importer_importing_users':                                                                               // 108
        case 'importer_importing_channels':                                                                            // 108
        case 'importer_importing_messages':                                                                            // 108
        case 'importer_finishing':                                                                                     // 108
          return FlowRouter.go('/admin/import/progress/' + FlowRouter.getParam('importer'));                           // 159
                                                                                                                       //
        case 'importer_user_selection':                                                                                // 108
          return Meteor.call('getSelectionData', FlowRouter.getParam('importer'), function (error, data) {             // 161
            if (error) {                                                                                               // 115
              handleError(error);                                                                                      // 116
            }                                                                                                          // 164
                                                                                                                       //
            instance.users.set(data.users);                                                                            // 117
            instance.channels.set(data.channels);                                                                      // 118
            instance.loaded.set(true);                                                                                 // 119
            return instance.preparing.set(false);                                                                      // 168
          });                                                                                                          // 114
                                                                                                                       //
        case 'importer_new':                                                                                           // 108
          return instance.preparing.set(false);                                                                        // 171
                                                                                                                       //
        default:                                                                                                       // 108
          return Meteor.call('restartImport', FlowRouter.getParam('importer'), function (error, progress) {            // 173
            if (error) {                                                                                               // 125
              handleError(error);                                                                                      // 126
            }                                                                                                          // 176
                                                                                                                       //
            return loadSelection(progress);                                                                            // 177
          });                                                                                                          // 124
      }                                                                                                                // 108
    } else {                                                                                                           // 107
      return console.warn('Invalid progress information.', progress);                                                  // 181
    }                                                                                                                  // 182
  };                                                                                                                   // 106
                                                                                                                       //
  if (FlowRouter.getParam('importer')) {                                                                               // 132
    return Meteor.call('getImportProgress', FlowRouter.getParam('importer'), function (error, progress) {              // 185
      if (error) {                                                                                                     // 134
        console.warn('Error while getting the import progress:', error);                                               // 135
        handleError(error);                                                                                            // 136
        return;                                                                                                        // 137
      }                                                                                                                // 190
                                                                                                                       //
      if (progress === void 0) {                                                                                       // 141
        return Meteor.call('setupImporter', FlowRouter.getParam('importer'), function (err, data) {                    // 192
          if (err) {                                                                                                   // 143
            handleError(err);                                                                                          // 144
          }                                                                                                            // 195
                                                                                                                       //
          instance.preparing.set(false);                                                                               // 145
          return loadSelection(data);                                                                                  // 197
        });                                                                                                            // 142
      } else {                                                                                                         // 141
        return loadSelection(progress);                                                                                // 200
      }                                                                                                                // 201
    });                                                                                                                // 133
  } else {                                                                                                             // 132
    return FlowRouter.go('/admin/import');                                                                             // 204
  }                                                                                                                    // 205
});                                                                                                                    // 99
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.adminImportProgress.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_importer/client/admin/template.adminImportProgress.js                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("adminImportProgress");                                                                           // 2
Template["adminImportProgress"] = new Template("Template.adminImportProgress", (function() {                           // 3
  var view = this;                                                                                                     // 4
  return [ Spacebars.include(view.lookupTemplate("loading")), "\n\t", HTML.P(Blaze.View("lookup:step", function() {    // 5
    return Spacebars.mustache(view.lookup("step"));                                                                    // 6
  })), "\n\t", HTML.P(Blaze.View("lookup:completed", function() {                                                      // 7
    return Spacebars.mustache(view.lookup("completed"));                                                               // 8
  }), " / ", Blaze.View("lookup:total", function() {                                                                   // 9
    return Spacebars.mustache(view.lookup("total"));                                                                   // 10
  })) ];                                                                                                               // 11
}));                                                                                                                   // 12
                                                                                                                       // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"adminImportProgress.coffee.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_importer/client/admin/adminImportProgress.coffee.js                                             //
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
Template.adminImportProgress.helpers({                                                                                 // 2
  step: function () {                                                                                                  // 3
    return Template.instance().step.get();                                                                             // 4
  },                                                                                                                   // 3
  completed: function () {                                                                                             // 5
    return Template.instance().completed.get();                                                                        // 6
  },                                                                                                                   // 3
  total: function () {                                                                                                 // 7
    return Template.instance().total.get();                                                                            // 8
  }                                                                                                                    // 3
});                                                                                                                    // 3
Template.adminImportProgress.onCreated(function () {                                                                   // 10
  var instance;                                                                                                        // 11
  instance = this;                                                                                                     // 11
  this.step = new ReactiveVar(t('Loading...'));                                                                        // 12
  this.completed = new ReactiveVar(0);                                                                                 // 13
  this.total = new ReactiveVar(0);                                                                                     // 14
                                                                                                                       //
  this.updateProgress = function () {                                                                                  // 15
    if (FlowRouter.getParam('importer') !== '') {                                                                      // 16
      return Meteor.call('getImportProgress', FlowRouter.getParam('importer'), function (error, progress) {            // 23
        if (error) {                                                                                                   // 18
          console.warn('Error on getting the import progress:', error);                                                // 19
          handleError(error);                                                                                          // 20
          return;                                                                                                      // 21
        }                                                                                                              // 28
                                                                                                                       //
        if (progress) {                                                                                                // 23
          if (progress.step === 'importer_done') {                                                                     // 24
            toastr.success(t(progress.step[0].toUpperCase() + progress.step.slice(1)));                                // 25
            return FlowRouter.go('/admin/import');                                                                     // 32
          } else if (progress.step === 'importer_import_failed') {                                                     // 24
            toastr.error(t(progress.step[0].toUpperCase() + progress.step.slice(1)));                                  // 28
            return FlowRouter.go('/admin/import/prepare/' + FlowRouter.getParam('importer'));                          // 35
          } else {                                                                                                     // 27
            instance.step.set(t(progress.step[0].toUpperCase() + progress.step.slice(1)));                             // 31
            instance.completed.set(progress.count.completed);                                                          // 32
            instance.total.set(progress.count.total);                                                                  // 33
            return setTimeout(function () {                                                                            // 40
              return instance.updateProgress();                                                                        // 41
            }, 100);                                                                                                   // 34
          }                                                                                                            // 23
        } else {                                                                                                       // 23
          toastr.warning(t('Importer_not_in_progress'));                                                               // 38
          return FlowRouter.go('/admin/import/prepare/' + FlowRouter.getParam('importer'));                            // 46
        }                                                                                                              // 47
      });                                                                                                              // 17
    }                                                                                                                  // 49
  };                                                                                                                   // 15
                                                                                                                       //
  return instance.updateProgress();                                                                                    // 51
});                                                                                                                    // 10
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".coffee",
    ".html"
  ]
});
require("./node_modules/meteor/rocketchat:importer/lib/_importer.coffee.js");
require("./node_modules/meteor/rocketchat:importer/lib/importTool.coffee.js");
require("./node_modules/meteor/rocketchat:importer/client/admin/template.adminImport.js");
require("./node_modules/meteor/rocketchat:importer/client/admin/adminImport.coffee.js");
require("./node_modules/meteor/rocketchat:importer/client/admin/template.adminImportPrepare.js");
require("./node_modules/meteor/rocketchat:importer/client/admin/adminImportPrepare.coffee.js");
require("./node_modules/meteor/rocketchat:importer/client/admin/template.adminImportProgress.js");
require("./node_modules/meteor/rocketchat:importer/client/admin/adminImportProgress.coffee.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['rocketchat:importer'] = {}, {
  Importer: Importer
});

})();
