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
var Template = Package['templating-runtime'].Template;
var _ = Package.underscore._;
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
var __coffeescriptShare;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:ui-admin":{"client":{"template.admin.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-admin/client/template.admin.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("admin");                                                                                         // 2
Template["admin"] = new Template("Template.admin", (function() {                                                       // 3
  var view = this;                                                                                                     // 4
  return Spacebars.With(function() {                                                                                   // 5
    return Spacebars.call(view.lookup("group"));                                                                       // 6
  }, function() {                                                                                                      // 7
    return [ "\n\t\t", HTML.SECTION({                                                                                  // 8
      class: "page-container page-home page-static page-settings"                                                      // 9
    }, "\n\t\t\t", HTML.HEADER({                                                                                       // 10
      class: "fixed-title border-component-color"                                                                      // 11
    }, "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("burger")), "\n\t\t\t\t", HTML.H2("\n\t\t\t\t\t", HTML.SPAN({
      class: "room-title"                                                                                              // 13
    }, Blaze.View("lookup:label", function() {                                                                         // 14
      return Spacebars.mustache(view.lookup("label"));                                                                 // 15
    })), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                                       // 16
      class: "submit"                                                                                                  // 17
    }, "\n\t\t\t\t\t", Blaze.If(function() {                                                                           // 18
      return Spacebars.call(view.lookup("hasChanges"));                                                                // 19
    }, function() {                                                                                                    // 20
      return [ "\n\t\t\t\t\t\t", HTML.BUTTON({                                                                         // 21
        class: "button danger discard"                                                                                 // 22
      }, HTML.I({                                                                                                      // 23
        class: "icon-send"                                                                                             // 24
      }), HTML.SPAN(Blaze.View("lookup:_", function() {                                                                // 25
        return Spacebars.mustache(view.lookup("_"), "Cancel");                                                         // 26
      }))), "\n\t\t\t\t\t" ];                                                                                          // 27
    }), "\n\t\t\t\t\t", HTML.BUTTON({                                                                                  // 28
      class: "button primary save",                                                                                    // 29
      disabled: function() {                                                                                           // 30
        return Spacebars.mustache(view.lookup("not"), view.lookup("hasChanges"));                                      // 31
      }                                                                                                                // 32
    }, HTML.I({                                                                                                        // 33
      class: "icon-send"                                                                                               // 34
    }), HTML.SPAN(Blaze.View("lookup:_", function() {                                                                  // 35
      return Spacebars.mustache(view.lookup("_"), "Save_changes");                                                     // 36
    }))), "\n\t\t\t\t"), "\n\t\t\t"), "\n\n\t\t\t", HTML.DIV({                                                         // 37
      class: "content background-transparent-dark"                                                                     // 38
    }, "\n\t\t\t\t", Blaze.Unless(function() {                                                                         // 39
      return Spacebars.dataMustache(view.lookup("hasPermission"), "view-privileged-setting");                          // 40
    }, function() {                                                                                                    // 41
      return [ "\n\t\t\t\t\t", HTML.P(Blaze.View("lookup:_", function() {                                              // 42
        return Spacebars.mustache(view.lookup("_"), "You_are_not_authorized_to_view_this_page");                       // 43
      })), "\n\t\t\t\t" ];                                                                                             // 44
    }, function() {                                                                                                    // 45
      return [ "\n\t\t\t\t\t", Blaze.If(function() {                                                                   // 46
        return Spacebars.call(view.lookup("description"));                                                             // 47
      }, function() {                                                                                                  // 48
        return [ "\n\t\t\t\t\t\t", HTML.DIV({                                                                          // 49
          class: "info"                                                                                                // 50
        }, "\n\t\t\t\t\t\t\t", HTML.P({                                                                                // 51
          class: "settings-description"                                                                                // 52
        }, Blaze.View("lookup:description", function() {                                                               // 53
          return Spacebars.mustache(view.lookup("description"));                                                       // 54
        })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                                                                      // 55
      }), "\n\t\t\t\t\t", HTML.DIV({                                                                                   // 56
        class: "rocket-form"                                                                                           // 57
      }, "\n\t\t\t\t\t\t", Blaze.Each(function() {                                                                     // 58
        return Spacebars.call(view.lookup("sections"));                                                                // 59
      }, function() {                                                                                                  // 60
        return [ "\n\t\t\t\t\t\t\t", HTML.DIV({                                                                        // 61
          class: function() {                                                                                          // 62
            return [ "section ", Blaze.If(function() {                                                                 // 63
              return Spacebars.call(view.lookup("section"));                                                           // 64
            }, function() {                                                                                            // 65
              return "section-collapsed";                                                                              // 66
            }) ];                                                                                                      // 67
          }                                                                                                            // 68
        }, "\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                                 // 69
          return Spacebars.call(view.lookup("section"));                                                               // 70
        }, function() {                                                                                                // 71
          return [ "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                  // 72
            class: "section-title"                                                                                     // 73
          }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                      // 74
            class: "section-title-text"                                                                                // 75
          }, "\n\t\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:translateSection", function() {                            // 76
            return Spacebars.mustache(view.lookup("translateSection"), view.lookup("section"));                        // 77
          }), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                          // 78
            class: "section-title-right"                                                                               // 79
          }, "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                 // 80
            class: "button primary expand"                                                                             // 81
          }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                             // 82
            return Spacebars.mustache(view.lookup("_"), "Expand");                                                     // 83
          }))), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t" ];                            // 84
        }), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                           // 85
          class: "section-content border-component-color"                                                              // 86
        }, "\n\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                               // 87
          return Spacebars.call(view.lookup("section"));                                                               // 88
        }, function() {                                                                                                // 89
          return [ "\n\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                     // 90
            return Spacebars.dataMustache(view.lookup("sectionIsCustomOAuth"), view.lookup("section"));                // 91
          }, function() {                                                                                              // 92
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                            // 93
              class: "section-helper"                                                                                  // 94
            }, "\n\t\t\t\t\t\t\t\t\t\t\t\t", Spacebars.With(function() {                                               // 95
              return Spacebars.dataMustache(view.lookup("callbackURL"), view.lookup("section"));                       // 96
            }, function() {                                                                                            // 97
              return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                             // 98
                return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Custom_oauth_helper", view.lookup(".")));
              }), "\n\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                      // 100
            }), "\n\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t" ];                                               // 101
          }), "\n\t\t\t\t\t\t\t\t\t" ];                                                                                // 102
        }), "\n\t\t\t\t\t\t\t\t\t", Blaze.Each(function() {                                                            // 103
          return Spacebars.call(view.lookup("settings"));                                                              // 104
        }, function() {                                                                                                // 105
          return [ "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV(HTML.Attrs({                                                     // 106
            class: function() {                                                                                        // 107
              return [ "input-line double-col ", Blaze.If(function() {                                                 // 108
                return Spacebars.dataMustache(view.lookup("isSettingChanged"), view.lookup("_id"));                    // 109
              }, function() {                                                                                          // 110
                return "setting-changed";                                                                              // 111
              }) ];                                                                                                    // 112
            }                                                                                                          // 113
          }, function() {                                                                                              // 114
            return Spacebars.attrMustache(view.lookup("isDisabled"));                                                  // 115
          }), "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.LABEL({                                                                 // 116
            class: "setting-label"                                                                                     // 117
          }, Blaze.View("lookup:label", function() {                                                                   // 118
            return Spacebars.mustache(view.lookup("label"));                                                           // 119
          })), "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                  // 120
            class: "setting-field"                                                                                     // 121
          }, "\n\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                       // 122
            return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("type"), "string");                          // 123
          }, function() {                                                                                              // 124
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                             // 125
              return Spacebars.call(view.lookup("multiline"));                                                         // 126
            }, function() {                                                                                            // 127
              return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.TEXTAREA(HTML.Attrs({                                    // 128
                class: "input-monitor",                                                                                // 129
                name: function() {                                                                                     // 130
                  return Spacebars.mustache(view.lookup("_id"));                                                       // 131
                },                                                                                                     // 132
                rows: "4",                                                                                             // 133
                style: "height: auto"                                                                                  // 134
              }, function() {                                                                                          // 135
                return Spacebars.attrMustache(view.lookup("isDisabled"));                                              // 136
              }, {                                                                                                     // 137
                value: function() {                                                                                    // 138
                  return Spacebars.mustache(view.lookup("value"));                                                     // 139
                }                                                                                                      // 140
              })), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                   // 141
            }, function() {                                                                                            // 142
              return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT(HTML.Attrs({                                       // 143
                class: "input-monitor",                                                                                // 144
                type: "text",                                                                                          // 145
                name: function() {                                                                                     // 146
                  return Spacebars.mustache(view.lookup("_id"));                                                       // 147
                },                                                                                                     // 148
                value: function() {                                                                                    // 149
                  return Spacebars.mustache(view.lookup("value"));                                                     // 150
                },                                                                                                     // 151
                placeholder: function() {                                                                              // 152
                  return Spacebars.mustache(view.lookup("placeholder"));                                               // 153
                }                                                                                                      // 154
              }, function() {                                                                                          // 155
                return Spacebars.attrMustache(view.lookup("isDisabled"));                                              // 156
              })), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                   // 157
            }), "\n\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                        // 158
          }), "\n\n\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                    // 159
            return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("type"), "relativeUrl");                     // 160
          }, function() {                                                                                              // 161
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT(HTML.Attrs({                                           // 162
              class: "input-monitor",                                                                                  // 163
              type: "text",                                                                                            // 164
              name: function() {                                                                                       // 165
                return Spacebars.mustache(view.lookup("_id"));                                                         // 166
              },                                                                                                       // 167
              value: function() {                                                                                      // 168
                return Spacebars.mustache(view.lookup("relativeUrl"), view.lookup("value"));                           // 169
              },                                                                                                       // 170
              placeholder: function() {                                                                                // 171
                return Spacebars.mustache(view.lookup("placeholder"));                                                 // 172
              }                                                                                                        // 173
            }, function() {                                                                                            // 174
              return Spacebars.attrMustache(view.lookup("isDisabled"));                                                // 175
            }, function() {                                                                                            // 176
              return Spacebars.attrMustache(view.lookup("isReadonly"));                                                // 177
            })), "\n\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                       // 178
          }), "\n\n\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                    // 179
            return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("type"), "password");                        // 180
          }, function() {                                                                                              // 181
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT(HTML.Attrs({                                           // 182
              class: "input-monitor",                                                                                  // 183
              type: "password",                                                                                        // 184
              name: function() {                                                                                       // 185
                return Spacebars.mustache(view.lookup("_id"));                                                         // 186
              },                                                                                                       // 187
              value: function() {                                                                                      // 188
                return Spacebars.mustache(view.lookup("value"));                                                       // 189
              },                                                                                                       // 190
              placeholder: function() {                                                                                // 191
                return Spacebars.mustache(view.lookup("placeholder"));                                                 // 192
              }                                                                                                        // 193
            }, function() {                                                                                            // 194
              return Spacebars.attrMustache(view.lookup("isDisabled"));                                                // 195
            })), "\n\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                       // 196
          }), "\n\n\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                    // 197
            return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("type"), "int");                             // 198
          }, function() {                                                                                              // 199
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT(HTML.Attrs({                                           // 200
              class: "input-monitor",                                                                                  // 201
              type: "number",                                                                                          // 202
              name: function() {                                                                                       // 203
                return Spacebars.mustache(view.lookup("_id"));                                                         // 204
              },                                                                                                       // 205
              value: function() {                                                                                      // 206
                return Spacebars.mustache(view.lookup("value"));                                                       // 207
              },                                                                                                       // 208
              placeholder: function() {                                                                                // 209
                return Spacebars.mustache(view.lookup("placeholder"));                                                 // 210
              }                                                                                                        // 211
            }, function() {                                                                                            // 212
              return Spacebars.attrMustache(view.lookup("isDisabled"));                                                // 213
            })), "\n\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                       // 214
          }), "\n\n\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                    // 215
            return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("type"), "boolean");                         // 216
          }, function() {                                                                                              // 217
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT(HTML.Attrs({                                // 218
              class: "input-monitor",                                                                                  // 219
              type: "radio",                                                                                           // 220
              name: function() {                                                                                       // 221
                return Spacebars.mustache(view.lookup("_id"));                                                         // 222
              },                                                                                                       // 223
              value: "1",                                                                                              // 224
              checked: function() {                                                                                    // 225
                return Spacebars.mustache(view.lookup("$eq"), view.lookup("value"), true);                             // 226
              }                                                                                                        // 227
            }, function() {                                                                                            // 228
              return Spacebars.attrMustache(view.lookup("isDisabled"));                                                // 229
            })), " ", Blaze.View("lookup:_", function() {                                                              // 230
              return Spacebars.mustache(view.lookup("_"), "True");                                                     // 231
            })), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT(HTML.Attrs({                                    // 232
              class: "input-monitor",                                                                                  // 233
              type: "radio",                                                                                           // 234
              name: function() {                                                                                       // 235
                return Spacebars.mustache(view.lookup("_id"));                                                         // 236
              },                                                                                                       // 237
              value: "0",                                                                                              // 238
              checked: function() {                                                                                    // 239
                return Spacebars.mustache(view.lookup("$eq"), view.lookup("value"), false);                            // 240
              }                                                                                                        // 241
            }, function() {                                                                                            // 242
              return Spacebars.attrMustache(view.lookup("isDisabled"));                                                // 243
            })), " ", Blaze.View("lookup:_", function() {                                                              // 244
              return Spacebars.mustache(view.lookup("_"), "False");                                                    // 245
            })), "\n\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                       // 246
          }), "\n\n\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                    // 247
            return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("type"), "select");                          // 248
          }, function() {                                                                                              // 249
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                        // 250
              class: "select-arrow"                                                                                    // 251
            }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.I({                                                              // 252
              class: "icon-down-open secondary-font-color"                                                             // 253
            }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.SELECT(HTML.Attrs({              // 254
              class: "input-monitor",                                                                                  // 255
              name: function() {                                                                                       // 256
                return Spacebars.mustache(view.lookup("_id"));                                                         // 257
              }                                                                                                        // 258
            }, function() {                                                                                            // 259
              return Spacebars.attrMustache(view.lookup("isDisabled"));                                                // 260
            }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.Each(function() {                                              // 261
              return Spacebars.call(view.lookup("values"));                                                            // 262
            }, function() {                                                                                            // 263
              return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                               // 264
                value: function() {                                                                                    // 265
                  return Spacebars.mustache(view.lookup("key"));                                                       // 266
                },                                                                                                     // 267
                selected: function() {                                                                                 // 268
                  return Spacebars.mustache(view.lookup("selectedOption"), Spacebars.dot(view.lookup(".."), "_id"), view.lookup("key"));
                }                                                                                                      // 270
              }, Blaze.View("lookup:_", function() {                                                                   // 271
                return Spacebars.mustache(view.lookup("_"), view.lookup("i18nLabel"));                                 // 272
              })), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                 // 273
            }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t" ];                                       // 274
          }), "\n\n\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                    // 275
            return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("type"), "language");                        // 276
          }, function() {                                                                                              // 277
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                        // 278
              class: "select-arrow"                                                                                    // 279
            }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.I({                                                              // 280
              class: "icon-down-open secondary-font-color"                                                             // 281
            }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.SELECT(HTML.Attrs({              // 282
              class: "input-monitor",                                                                                  // 283
              name: function() {                                                                                       // 284
                return Spacebars.mustache(view.lookup("_id"));                                                         // 285
              }                                                                                                        // 286
            }, function() {                                                                                            // 287
              return Spacebars.attrMustache(view.lookup("isDisabled"));                                                // 288
            }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.Each(function() {                                              // 289
              return Spacebars.call(view.lookup("languages"));                                                         // 290
            }, function() {                                                                                            // 291
              return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                                 // 292
                value: function() {                                                                                    // 293
                  return Spacebars.mustache(view.lookup("key"));                                                       // 294
                },                                                                                                     // 295
                selected: function() {                                                                                 // 296
                  return Spacebars.mustache(view.lookup("appLanguage"), view.lookup("key"));                           // 297
                },                                                                                                     // 298
                dir: "auto"                                                                                            // 299
              }, Blaze.View("lookup:name", function() {                                                                // 300
                return Spacebars.mustache(view.lookup("name"));                                                        // 301
              })), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                 // 302
            }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t" ];                                       // 303
          }), "\n\n\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                    // 304
            return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("type"), "color");                           // 305
          }, function() {                                                                                              // 306
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                        // 307
              class: "horizontal"                                                                                      // 308
            }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                 // 309
              return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("editor"), "color");                       // 310
            }, function() {                                                                                            // 311
              return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                  // 312
                class: "flex-grow-1"                                                                                   // 313
              }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT(HTML.Attrs({                                         // 314
                class: "input-monitor colorpicker-input",                                                              // 315
                type: "text",                                                                                          // 316
                name: function() {                                                                                     // 317
                  return Spacebars.mustache(view.lookup("_id"));                                                       // 318
                },                                                                                                     // 319
                value: function() {                                                                                    // 320
                  return Spacebars.mustache(view.lookup("value"));                                                     // 321
                },                                                                                                     // 322
                autocomplete: "off"                                                                                    // 323
              }, function() {                                                                                          // 324
                return Spacebars.attrMustache(view.lookup("isDisabled"));                                              // 325
              })), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.SPAN({                                                   // 326
                class: "colorpicker-swatch border-component-color",                                                    // 327
                style: function() {                                                                                    // 328
                  return [ "background-color: ", Spacebars.mustache(view.lookup("value")) ];                           // 329
                }                                                                                                      // 330
              }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" ];                             // 331
            }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                // 332
              return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("editor"), "expression");                  // 333
            }, function() {                                                                                            // 334
              return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                  // 335
                class: "flex-grow-1"                                                                                   // 336
              }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT(HTML.Attrs({                                         // 337
                class: "input-monitor",                                                                                // 338
                type: "text",                                                                                          // 339
                name: function() {                                                                                     // 340
                  return Spacebars.mustache(view.lookup("_id"));                                                       // 341
                },                                                                                                     // 342
                value: function() {                                                                                    // 343
                  return Spacebars.mustache(view.lookup("value"));                                                     // 344
                }                                                                                                      // 345
              }, function() {                                                                                          // 346
                return Spacebars.attrMustache(view.lookup("isDisabled"));                                              // 347
              })), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t" ];                            // 348
            }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                           // 349
              class: "color-editor"                                                                                    // 350
            }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                          // 351
              class: "select-arrow"                                                                                    // 352
            }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.I({                                                          // 353
              class: "icon-down-open secondary-font-color"                                                             // 354
            }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.SELECT({                 // 355
              name: "color-editor"                                                                                     // 356
            }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.Each(function() {                                           // 357
              return Spacebars.call(view.lookup("allowedTypes"));                                                      // 358
            }, function() {                                                                                            // 359
              return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                           // 360
                value: function() {                                                                                    // 361
                  return Spacebars.mustache(view.lookup("."));                                                         // 362
                },                                                                                                     // 363
                selected: function() {                                                                                 // 364
                  return Spacebars.mustache(view.lookup("$eq"), Spacebars.dot(view.lookup(".."), "editor"), view.lookup("."));
                }                                                                                                      // 366
              }, Blaze.View("lookup:_", function() {                                                                   // 367
                return Spacebars.mustache(view.lookup("_"), view.lookup("."));                                         // 368
              })), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                             // 369
            }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({
              class: "settings-description"                                                                            // 371
            }, "Variable name: ", Blaze.View("lookup:getColorVariable", function() {                                   // 372
              return Spacebars.mustache(view.lookup("getColorVariable"), view.lookup("_id"));                          // 373
            })), "\n\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                       // 374
          }), "\n\n\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                    // 375
            return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("type"), "font");                            // 376
          }, function() {                                                                                              // 377
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT(HTML.Attrs({                                           // 378
              class: "input-monitor",                                                                                  // 379
              type: "text",                                                                                            // 380
              name: function() {                                                                                       // 381
                return Spacebars.mustache(view.lookup("_id"));                                                         // 382
              },                                                                                                       // 383
              value: function() {                                                                                      // 384
                return Spacebars.mustache(view.lookup("value"));                                                       // 385
              }                                                                                                        // 386
            }, function() {                                                                                            // 387
              return Spacebars.attrMustache(view.lookup("isDisabled"));                                                // 388
            })), "\n\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                       // 389
          }), "\n\n\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                    // 390
            return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("type"), "code");                            // 391
          }, function() {                                                                                              // 392
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                             // 393
              return Spacebars.call(Spacebars.dot(view.lookup("isDisabled"), "disabled"));                             // 394
            }, function() {                                                                                            // 395
              return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                              // 396
                return {                                                                                               // 397
                  name: Spacebars.call(view.lookup("_id")),                                                            // 398
                  options: Spacebars.call(Spacebars.dataMustache(view.lookup("getEditorOptions"), true)),              // 399
                  code: Spacebars.call(Spacebars.dataMustache(view.lookup("i18nDefaultValue")))                        // 400
                };                                                                                                     // 401
              }, function() {                                                                                          // 402
                return Spacebars.include(view.lookupTemplate("CodeMirror"));                                           // 403
              }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                    // 404
            }, function() {                                                                                            // 405
              return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                    // 406
                class: "code-mirror-box",                                                                              // 407
                "data-editor-id": function() {                                                                         // 408
                  return Spacebars.mustache(view.lookup("_id"));                                                       // 409
                }                                                                                                      // 410
              }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                        // 411
                class: "title"                                                                                         // 412
              }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:label", function() {                         // 413
                return Spacebars.mustache(view.lookup("label"));                                                       // 414
              }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {
                return {                                                                                               // 416
                  name: Spacebars.call(view.lookup("_id")),                                                            // 417
                  options: Spacebars.call(view.lookup("getEditorOptions")),                                            // 418
                  code: Spacebars.call(view.lookup("value"))                                                           // 419
                };                                                                                                     // 420
              }, function() {                                                                                          // 421
                return Spacebars.include(view.lookupTemplate("CodeMirror"));                                           // 422
              }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:setEditorOnBlur", function() {                // 423
                return Spacebars.mustache(view.lookup("setEditorOnBlur"), view.lookup("_id"));                         // 424
              }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                       // 425
                class: "buttons"                                                                                       // 426
              }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                   // 427
                class: "button primary button-fullscreen"                                                              // 428
              }, "Full Screen"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                   // 429
                class: "button primary button-restore"                                                                 // 430
              }, "Exit Full Screen"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t" ];
            }), "\n\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                        // 432
          }), "\n\n\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                    // 433
            return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("type"), "action");                          // 434
          }, function() {                                                                                              // 435
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                             // 436
              return Spacebars.dataMustache(view.lookup("hasChanges"), view.lookup("section"));                        // 437
            }, function() {                                                                                            // 438
              return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.SPAN({                                                   // 439
                style: "line-height: 40px",                                                                            // 440
                class: "secondary-font-color"                                                                          // 441
              }, Blaze.View("lookup:_", function() {                                                                   // 442
                return Spacebars.mustache(view.lookup("_"), "Save_to_enable_this_action");                             // 443
              })), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                   // 444
            }, function() {                                                                                            // 445
              return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON(HTML.Attrs({                                      // 446
                type: "button",                                                                                        // 447
                class: "button primary action",                                                                        // 448
                "data-setting": function() {                                                                           // 449
                  return Spacebars.mustache(view.lookup("_id"));                                                       // 450
                },                                                                                                     // 451
                "data-action": function() {                                                                            // 452
                  return Spacebars.mustache(view.lookup("value"));                                                     // 453
                }                                                                                                      // 454
              }, function() {                                                                                          // 455
                return Spacebars.attrMustache(view.lookup("isDisabled"));                                              // 456
              }), Blaze.View("lookup:_", function() {                                                                  // 457
                return Spacebars.mustache(view.lookup("_"), view.lookup("actionText"));                                // 458
              })), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                   // 459
            }), "\n\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                        // 460
          }), "\n\n\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                    // 461
            return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("type"), "asset");                           // 462
          }, function() {                                                                                              // 463
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                             // 464
              return Spacebars.call(Spacebars.dot(view.lookup("value"), "url"));                                       // 465
            }, function() {                                                                                            // 466
              return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                    // 467
                class: "settings-file-preview"                                                                         // 468
              }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                        // 469
                class: "preview",                                                                                      // 470
                style: function() {                                                                                    // 471
                  return [ "background-image:url(", Spacebars.mustache(Spacebars.dot(view.lookup("value"), "url")), "?_dc=", Spacebars.mustache(view.lookup("random")), ");" ];
                }                                                                                                      // 473
              }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                       // 474
                class: "action"                                                                                        // 475
              }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                   // 476
                type: "button",                                                                                        // 477
                class: "button danger delete-asset"                                                                    // 478
              }, HTML.I({                                                                                              // 479
                class: "icon-trash secondary-font-color"                                                               // 480
              }), Blaze.View("lookup:_", function() {                                                                  // 481
                return Spacebars.mustache(view.lookup("_"), "Delete");                                                 // 482
              })), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t" ];
            }, function() {                                                                                            // 484
              return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                    // 485
                class: "settings-file-preview"                                                                         // 486
              }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                        // 487
                class: "preview no-file background-transparent-light secondary-font-color"                             // 488
              }, HTML.I({                                                                                              // 489
                class: "icon-upload secondary-font-color"                                                              // 490
              })), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                      // 491
                class: "action"                                                                                        // 492
              }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                      // 493
                class: "button primary"                                                                                // 494
              }, Blaze.View("lookup:_", function() {                                                                   // 495
                return Spacebars.mustache(view.lookup("_"), "Select_file");                                            // 496
              }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                                 // 497
                type: "file",                                                                                          // 498
                accept: function() {                                                                                   // 499
                  return Spacebars.mustache(view.lookup("assetAccept"), view.lookup("fileConstraints"));               // 500
                }                                                                                                      // 501
              }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t" ];
            }), "\n\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                        // 503
          }), "\n\n\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                    // 504
            return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("type"), "roomPick");                        // 505
          }, function() {                                                                                              // 506
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {
              return {                                                                                                 // 508
                settings: Spacebars.call(view.lookup("autocompleteRoom")),                                             // 509
                id: Spacebars.call(view.lookup("_id")),                                                                // 510
                name: Spacebars.call(view.lookup("_id")),                                                              // 511
                class: Spacebars.call("search autocomplete"),                                                          // 512
                autocomplete: Spacebars.call("off"),                                                                   // 513
                disabled: Spacebars.call(Spacebars.dot(view.lookup("isDisabled"), "disabled"))                         // 514
              };                                                                                                       // 515
            }, function() {                                                                                            // 516
              return Spacebars.include(view.lookupTemplate("inputAutocomplete"));                                      // 517
            }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.UL({                                                            // 518
              class: "selected-rooms"                                                                                  // 519
            }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.Each(function() {                                             // 520
              return Spacebars.call(view.lookup("selectedRooms"));                                                     // 521
            }, function() {                                                                                            // 522
              return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.LI({                                                 // 523
                class: "remove-room",                                                                                  // 524
                "data-setting": function() {                                                                           // 525
                  return Spacebars.mustache(view.lookup("_id"));                                                       // 526
                }                                                                                                      // 527
              }, Blaze.View("lookup:name", function() {                                                                // 528
                return Spacebars.mustache(view.lookup("name"));                                                        // 529
              }), " ", HTML.I({                                                                                        // 530
                class: "icon-cancel secondary-font-color"                                                              // 531
              })), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                               // 532
            }), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t\t" ];    // 533
          }), "\n\n\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                    // 534
            return Spacebars.call(view.lookup("description"));                                                         // 535
          }, function() {                                                                                              // 536
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                        // 537
              class: "settings-description"                                                                            // 538
            }, Blaze.View("lookup:RocketChatMarkdown", function() {                                                    // 539
              return Spacebars.makeRaw(Spacebars.mustache(view.lookup("RocketChatMarkdown"), view.lookup("description")));
            })), "\n\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                       // 541
          }), "\n\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                      // 542
            return Spacebars.call(view.lookup("alert"));                                                               // 543
          }, function() {                                                                                              // 544
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                        // 545
              class: "settings-alert pending-color pending-background pending-border"                                  // 546
            }, HTML.I({                                                                                                // 547
              class: "icon-attention secondary-font-color"                                                             // 548
            }), Blaze.View("lookup:_", function() {                                                                    // 549
              return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), view.lookup("alert")));                    // 550
            })), "\n\t\t\t\t\t\t\t\t\t\t\t\t" ];                                                                       // 551
          }), "\n\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                           // 552
            return Spacebars.call(view.lookup("showResetButton"));                                                     // 553
          }, function() {                                                                                              // 554
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                       // 555
              text: function() {                                                                                       // 556
                return Spacebars.mustache(view.lookup("_"), "Reset");                                                  // 557
              },                                                                                                       // 558
              "data-setting": function() {                                                                             // 559
                return Spacebars.mustache(view.lookup("_id"));                                                         // 560
              },                                                                                                       // 561
              class: "reset-setting button danger"                                                                     // 562
            }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", HTML.I({                                                                // 563
              class: "icon-ccw secondary-font-color color-error-contrast"                                              // 564
            }), "\n\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t" ];                                           // 565
          }), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t" ];                                                     // 566
        }), "\n\n\t\t\t\t\t\t\t\t\t", Blaze.Unless(function() {                                                        // 567
          return Spacebars.dataMustache(view.lookup("$eq"), Spacebars.dot(view.lookup(".."), "_id"), "Assets");        // 568
        }, function() {                                                                                                // 569
          return [ "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                // 570
            class: "input-line double-col"                                                                             // 571
          }, "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.LABEL({                                                                  // 572
            class: "setting-label"                                                                                     // 573
          }, Blaze.View("lookup:_", function() {                                                                       // 574
            return Spacebars.mustache(view.lookup("_"), "Reset_section_settings");                                     // 575
          })), "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                  // 576
            class: "setting-field"                                                                                     // 577
          }, "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                               // 578
            "data-section": function() {                                                                               // 579
              return Spacebars.mustache(view.lookup("section"));                                                       // 580
            },                                                                                                         // 581
            class: "reset-group button danger"                                                                         // 582
          }, "\n\t\t\t\t\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                       // 583
            return Spacebars.mustache(view.lookup("_"), "Reset");                                                      // 584
          }), "\n\t\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t" ];
        }), "\n\n\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                            // 586
          return Spacebars.call(view.lookup("section"));                                                               // 587
        }, function() {                                                                                                // 588
          return [ "\n\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                     // 589
            return Spacebars.dataMustache(view.lookup("sectionIsCustomOAuth"), view.lookup("section"));                // 590
          }, function() {                                                                                              // 591
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                            // 592
              class: "submit"                                                                                          // 593
            }, "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                             // 594
              class: "button danger remove-custom-oauth"                                                               // 595
            }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                           // 596
              return Spacebars.mustache(view.lookup("_"), "Remove_custom_oauth");                                      // 597
            }))), "\n\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t" ];                                             // 598
          }), "\n\t\t\t\t\t\t\t\t\t" ];                                                                                // 599
        }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t" ];                                            // 600
      }), "\n\n\t\t\t\t\t\t", HTML.DIV({                                                                               // 601
        class: "submit"                                                                                                // 602
      }, "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                                     // 603
        return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("_id"), "OAuth");                                // 604
      }, function() {                                                                                                  // 605
        return [ "\n\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                   // 606
          class: "button secondary refresh-oauth"                                                                      // 607
        }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                               // 608
          return Spacebars.mustache(view.lookup("_"), "Refresh_oauth_services");                                       // 609
        }))), "\n\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                      // 610
          class: "button secondary add-custom-oauth"                                                                   // 611
        }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                               // 612
          return Spacebars.mustache(view.lookup("_"), "Add_custom_oauth");                                             // 613
        }))), "\n\t\t\t\t\t\t\t" ];                                                                                    // 614
      }), "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                                    // 615
        return Spacebars.dataMustache(view.lookup("$eq"), view.lookup("_id"), "Assets");                               // 616
      }, function() {                                                                                                  // 617
        return [ "\n\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                   // 618
          class: "button refresh-clients"                                                                              // 619
        }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                               // 620
          return Spacebars.mustache(view.lookup("_"), "Apply_and_refresh_all_clients");                                // 621
        }))), "\n\t\t\t\t\t\t\t" ];                                                                                    // 622
      }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                          // 623
    }), "\n\t\t\t"), "\n\t\t"), "\n\t" ];                                                                              // 624
  });                                                                                                                  // 625
}));                                                                                                                   // 626
                                                                                                                       // 627
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.adminFlex.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-admin/client/template.adminFlex.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("adminFlex");                                                                                     // 2
Template["adminFlex"] = new Template("Template.adminFlex", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return [ HTML.HEADER("\n\t\t", HTML.DIV("\n\t\t\t", HTML.H4(Blaze.View("lookup:_", function() {                      // 5
    return Spacebars.mustache(view.lookup("_"), "Administration");                                                     // 6
  })), "\n\t\t"), "\n\t"), "\n\t", HTML.DIV({                                                                          // 7
    class: "content"                                                                                                   // 8
  }, "\n\t\t", HTML.DIV({                                                                                              // 9
    class: "wrapper"                                                                                                   // 10
  }, "\n\t\t\t", HTML.UL("\n\t\t\t\t", HTML.LI("\n\t\t\t\t\t", HTML.A({                                                // 11
    href: function() {                                                                                                 // 12
      return Spacebars.mustache(view.lookup("pathFor"), "admin-info");                                                 // 13
    },                                                                                                                 // 14
    class: "admin-link"                                                                                                // 15
  }, Blaze.View("lookup:_", function() {                                                                               // 16
    return Spacebars.mustache(view.lookup("_"), "Info");                                                               // 17
  })), "\n\t\t\t\t"), "\n", HTML.Raw("<!--\n\t\t\t\t{{#if hasPermission 'run-import'}}\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"{{pathFor 'admin-import'}}\" class=\"admin-link\">Import</a>\n\t\t\t\t\t</li>\n\t\t\t\t{{/if}}\n-->"), "\n\t\t\t\t", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("hasPermission"), "view-room-administration");                           // 19
  }, function() {                                                                                                      // 20
    return [ "\n\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t", HTML.A({                                                        // 21
      href: function() {                                                                                               // 22
        return Spacebars.mustache(view.lookup("pathFor"), "admin-rooms");                                              // 23
      },                                                                                                               // 24
      class: "admin-link"                                                                                              // 25
    }, Blaze.View("lookup:_", function() {                                                                             // 26
      return Spacebars.mustache(view.lookup("_"), "Rooms");                                                            // 27
    })), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                              // 28
  }), "\n\n\t\t\t\t", Blaze.If(function() {                                                                            // 29
    return Spacebars.dataMustache(view.lookup("hasPermission"), "view-user-administration");                           // 30
  }, function() {                                                                                                      // 31
    return [ "\n\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t", HTML.A({                                                        // 32
      href: function() {                                                                                               // 33
        return Spacebars.mustache(view.lookup("pathFor"), "admin-users");                                              // 34
      },                                                                                                               // 35
      class: "admin-link"                                                                                              // 36
    }, Blaze.View("lookup:_", function() {                                                                             // 37
      return Spacebars.mustache(view.lookup("_"), "Users");                                                            // 38
    })), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                              // 39
  }), "\n\n\t\t\t\t", Blaze.Each(function() {                                                                          // 40
    return Spacebars.call(view.lookup("adminBoxOptions"));                                                             // 41
  }, function() {                                                                                                      // 42
    return [ "\n\t\t\t\t\t", Blaze.If(function() {                                                                     // 43
      return Spacebars.call(view.lookup("permissionGranted"));                                                         // 44
    }, function() {                                                                                                    // 45
      return [ "\n\t\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t\t", HTML.A({                                                  // 46
        href: function() {                                                                                             // 47
          return Spacebars.mustache(view.lookup("pathFor"), view.lookup("href"));                                      // 48
        },                                                                                                             // 49
        class: "admin-link"                                                                                            // 50
      }, Blaze.View("lookup:label", function() {                                                                       // 51
        return Spacebars.mustache(view.lookup("label"));                                                               // 52
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                                                                        // 53
    }), "\n\t\t\t\t" ];                                                                                                // 54
  }), "\n\n\t\t\t\t", Blaze.If(function() {                                                                            // 55
    return Spacebars.dataMustache(view.lookup("hasPermission"), "view-privileged-setting");                            // 56
  }, function() {                                                                                                      // 57
    return [ "\n\t\t\t\t\t", HTML.H3({                                                                                 // 58
      class: "add-room"                                                                                                // 59
    }, "\n\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                           // 60
      return Spacebars.mustache(view.lookup("_"), "Settings");                                                         // 61
    }), "\n\t\t\t\t\t"), "\n\n\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t", HTML.INPUT({                                      // 62
      type: "text",                                                                                                    // 63
      name: "settings-search",                                                                                         // 64
      placeholder: function() {                                                                                        // 65
        return Spacebars.mustache(view.lookup("_"), "Search");                                                         // 66
      }                                                                                                                // 67
    }), "\n\t\t\t\t\t"), "\n\n\t\t\t\t\t", Blaze.Each(function() {                                                     // 68
      return Spacebars.call(view.lookup("groups"));                                                                    // 69
    }, function() {                                                                                                    // 70
      return [ "\n\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t", HTML.A({                                                      // 71
        href: function() {                                                                                             // 72
          return Spacebars.mustache(view.lookup("pathFor"), "admin", Spacebars.kw({                                    // 73
            group: view.lookup("_id")                                                                                  // 74
          }));                                                                                                         // 75
        },                                                                                                             // 76
        class: "admin-link"                                                                                            // 77
      }, Blaze.View("lookup:label", function() {                                                                       // 78
        return Spacebars.mustache(view.lookup("label"));                                                               // 79
      })), "\n\t\t\t\t\t"), "\n\t\t\t\t\t" ];                                                                          // 80
    }), "\n\t\t\t\t" ];                                                                                                // 81
  }), "\n\t\t\t"), "\n\t\t"), "\n\t") ];                                                                               // 82
}));                                                                                                                   // 83
                                                                                                                       // 84
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.adminInfo.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-admin/client/template.adminInfo.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("adminInfo");                                                                                     // 2
Template["adminInfo"] = new Template("Template.adminInfo", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return HTML.SECTION({                                                                                                // 5
    class: "page-container page-list"                                                                                  // 6
  }, "\n\t\t", HTML.HEADER({                                                                                           // 7
    class: "fixed-title border-component-color"                                                                        // 8
  }, "\n\t\t\t", Spacebars.include(view.lookupTemplate("burger")), "\n\t\t\t", HTML.H2("\n\t\t\t\t", HTML.SPAN({       // 9
    class: "room-title"                                                                                                // 10
  }, Blaze.View("lookup:_", function() {                                                                               // 11
    return Spacebars.mustache(view.lookup("_"), "Info");                                                               // 12
  })), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                    // 13
    class: "content"                                                                                                   // 14
  }, "\n\t\t\t", Blaze.If(function() {                                                                                 // 15
    return Spacebars.dataMustache(view.lookup("$gt"), Spacebars.dot(view.lookup("statistics"), "instanceCount"), 1);   // 16
  }, function() {                                                                                                      // 17
    return [ "\n\t\t\t\t", Blaze.Unless(function() {                                                                   // 18
      return Spacebars.call(Spacebars.dot(view.lookup("statistics"), "oplogEnabled"));                                 // 19
    }, function() {                                                                                                    // 20
      return [ "\n\t\t\t\t\t", HTML.DIV({                                                                              // 21
        class: "alert error-color error-border error-background"                                                       // 22
      }, "\n\t\t\t\t\t\t", HTML.B(Blaze.View("lookup:_", function() {                                                  // 23
        return Spacebars.mustache(view.lookup("_"), "Error_RocketChat_requires_oplog_tailing_when_running_in_multiple_instances");
      })), HTML.BR(), HTML.BR(), "\n\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                 // 25
        return Spacebars.mustache(view.lookup("_"), "Error_RocketChat_requires_oplog_tailing_when_running_in_multiple_instances_details");
      }), HTML.BR(), HTML.BR(), "\n\t\t\t\t\t\t", HTML.A({                                                             // 27
        target: "_blank",                                                                                              // 28
        href: "https://rocket.chat/docs/installation/manual-installation/multiple-instances-to-improve-performance/#running-multiple-instances-per-host-to-improve-performance"
      }, Blaze.View("lookup:_", function() {                                                                           // 30
        return Spacebars.mustache(view.lookup("_"), "Click_here_for_more_info");                                       // 31
      })), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                            // 32
    }), "\n\t\t\t" ];                                                                                                  // 33
  }), "\n\n\t\t\t", Blaze.If(function() {                                                                              // 34
    return Spacebars.dataMustache(view.lookup("hasPermission"), "view-statistics");                                    // 35
  }, function() {                                                                                                      // 36
    return [ "\n\t\t\t\t", HTML.H3(Blaze.View("lookup:_", function() {                                                 // 37
      return Spacebars.mustache(view.lookup("_"), "Rocket.Chat");                                                      // 38
    })), "\n\t\t\t\t", HTML.TABLE({                                                                                    // 39
      class: "statistics-table secondary-background-color"                                                             // 40
    }, "\n\t\t\t\t\t", HTML.TR({                                                                                       // 41
      class: "admin-table-row"                                                                                         // 42
    }, "\n\t\t\t\t\t\t", HTML.TH({                                                                                     // 43
      class: "content-background-color border-component-color"                                                         // 44
    }, Blaze.View("lookup:_", function() {                                                                             // 45
      return Spacebars.mustache(view.lookup("_"), "Version");                                                          // 46
    })), "\n\t\t\t\t\t\t", HTML.TD({                                                                                   // 47
      class: "border-component-color"                                                                                  // 48
    }, Blaze.View("lookup:statistics.version", function() {                                                            // 49
      return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "version"));                                  // 50
    })), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.TR({                                                                    // 51
      class: "admin-table-row"                                                                                         // 52
    }, "\n\t\t\t\t\t\t", HTML.TH({                                                                                     // 53
      class: "content-background-color border-component-color"                                                         // 54
    }, Blaze.View("lookup:_", function() {                                                                             // 55
      return Spacebars.mustache(view.lookup("_"), "DB_Migration");                                                     // 56
    })), "\n\t\t\t\t\t\t", HTML.TD({                                                                                   // 57
      class: "border-component-color"                                                                                  // 58
    }, Blaze.View("lookup:statistics.migration.version", function() {                                                  // 59
      return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "migration", "version"));                     // 60
    })), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.TR({                                                                    // 61
      class: "admin-table-row"                                                                                         // 62
    }, "\n\t\t\t\t\t\t", HTML.TH({                                                                                     // 63
      class: "content-background-color border-component-color"                                                         // 64
    }, Blaze.View("lookup:_", function() {                                                                             // 65
      return Spacebars.mustache(view.lookup("_"), "DB_Migration_Date");                                                // 66
    })), "\n\t\t\t\t\t\t", HTML.TD({                                                                                   // 67
      class: "border-component-color"                                                                                  // 68
    }, Blaze.View("lookup:statistics.migration.lockedAt", function() {                                                 // 69
      return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "migration", "lockedAt"));                    // 70
    })), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.TR({                                                                    // 71
      class: "admin-table-row"                                                                                         // 72
    }, "\n\t\t\t\t\t\t", HTML.TH({                                                                                     // 73
      class: "content-background-color border-component-color"                                                         // 74
    }, Blaze.View("lookup:_", function() {                                                                             // 75
      return Spacebars.mustache(view.lookup("_"), "Installed_at");                                                     // 76
    })), "\n\t\t\t\t\t\t", HTML.TD({                                                                                   // 77
      class: "border-component-color"                                                                                  // 78
    }, Blaze.View("lookup:statistics.installedAt", function() {                                                        // 79
      return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "installedAt"));                              // 80
    })), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.TR({                                                                    // 81
      class: "admin-table-row"                                                                                         // 82
    }, "\n\t\t\t\t\t\t", HTML.TH({                                                                                     // 83
      class: "content-background-color border-component-color"                                                         // 84
    }, Blaze.View("lookup:_", function() {                                                                             // 85
      return Spacebars.mustache(view.lookup("_"), "Uptime");                                                           // 86
    })), "\n\t\t\t\t\t\t", HTML.TD({                                                                                   // 87
      class: "border-component-color"                                                                                  // 88
    }, Blaze.View("lookup:humanReadableTime", function() {                                                             // 89
      return Spacebars.mustache(view.lookup("humanReadableTime"), Spacebars.dot(view.lookup("statistics"), "process", "uptime"));
    })), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.TR({                                                                    // 91
      class: "admin-table-row"                                                                                         // 92
    }, "\n\t\t\t\t\t\t", HTML.TH({                                                                                     // 93
      class: "content-background-color border-component-color"                                                         // 94
    }, Blaze.View("lookup:_", function() {                                                                             // 95
      return Spacebars.mustache(view.lookup("_"), "Deployment_ID");                                                    // 96
    })), "\n\t\t\t\t\t\t", HTML.TD({                                                                                   // 97
      class: "border-component-color"                                                                                  // 98
    }, Blaze.View("lookup:statistics.uniqueId", function() {                                                           // 99
      return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "uniqueId"));                                 // 100
    })), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.TR({                                                                    // 101
      class: "admin-table-row"                                                                                         // 102
    }, "\n\t\t\t\t\t\t", HTML.TH({                                                                                     // 103
      class: "content-background-color border-component-color"                                                         // 104
    }, Blaze.View("lookup:_", function() {                                                                             // 105
      return Spacebars.mustache(view.lookup("_"), "PID");                                                              // 106
    })), "\n\t\t\t\t\t\t", HTML.TD({                                                                                   // 107
      class: "border-component-color"                                                                                  // 108
    }, Blaze.View("lookup:statistics.process.pid", function() {                                                        // 109
      return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "process", "pid"));                           // 110
    })), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.TR({                                                                    // 111
      class: "admin-table-row"                                                                                         // 112
    }, "\n\t\t\t\t\t\t", HTML.TH({                                                                                     // 113
      class: "content-background-color border-component-color"                                                         // 114
    }, Blaze.View("lookup:_", function() {                                                                             // 115
      return Spacebars.mustache(view.lookup("_"), "Running_Instances");                                                // 116
    })), "\n\t\t\t\t\t\t", HTML.TD({                                                                                   // 117
      class: "border-component-color"                                                                                  // 118
    }, Blaze.View("lookup:statistics.instanceCount", function() {                                                      // 119
      return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "instanceCount"));                            // 120
    })), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.TR({                                                                    // 121
      class: "admin-table-row"                                                                                         // 122
    }, "\n\t\t\t\t\t\t", HTML.TH({                                                                                     // 123
      class: "content-background-color border-component-color"                                                         // 124
    }, Blaze.View("lookup:_", function() {                                                                             // 125
      return Spacebars.mustache(view.lookup("_"), "OpLog");                                                            // 126
    })), "\n\t\t\t\t\t\t", HTML.TD({                                                                                   // 127
      class: "border-component-color"                                                                                  // 128
    }, Blaze.If(function() {                                                                                           // 129
      return Spacebars.call(Spacebars.dot(view.lookup("statistics"), "oplogEnabled"));                                 // 130
    }, function() {                                                                                                    // 131
      return Blaze.View("lookup:_", function() {                                                                       // 132
        return Spacebars.mustache(view.lookup("_"), "Enabled");                                                        // 133
      });                                                                                                              // 134
    }, function() {                                                                                                    // 135
      return Blaze.View("lookup:_", function() {                                                                       // 136
        return Spacebars.mustache(view.lookup("_"), "Disabled");                                                       // 137
      });                                                                                                              // 138
    })), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                 // 139
  }), "\n\n\t\t\t", HTML.H3(Blaze.View("lookup:_", function() {                                                        // 140
    return Spacebars.mustache(view.lookup("_"), "Commit");                                                             // 141
  })), "\n\t\t\t", HTML.TABLE({                                                                                        // 142
    class: "statistics-table secondary-background-color"                                                               // 143
  }, "\n\t\t\t\t", HTML.TR({                                                                                           // 144
    class: "admin-table-row"                                                                                           // 145
  }, "\n\t\t\t\t\t", HTML.TH({                                                                                         // 146
    class: "content-background-color border-component-color"                                                           // 147
  }, Blaze.View("lookup:_", function() {                                                                               // 148
    return Spacebars.mustache(view.lookup("_"), "Hash");                                                               // 149
  })), "\n\t\t\t\t\t", HTML.TD({                                                                                       // 150
    class: "border-component-color"                                                                                    // 151
  }, Blaze.View("lookup:info.commit.hash", function() {                                                                // 152
    return Spacebars.mustache(Spacebars.dot(view.lookup("info"), "commit", "hash"));                                   // 153
  })), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.TR({                                                                          // 154
    class: "admin-table-row"                                                                                           // 155
  }, "\n\t\t\t\t\t", HTML.TH({                                                                                         // 156
    class: "content-background-color border-component-color"                                                           // 157
  }, Blaze.View("lookup:_", function() {                                                                               // 158
    return Spacebars.mustache(view.lookup("_"), "Date");                                                               // 159
  })), "\n\t\t\t\t\t", HTML.TD({                                                                                       // 160
    class: "border-component-color"                                                                                    // 161
  }, Blaze.View("lookup:info.commit.date", function() {                                                                // 162
    return Spacebars.mustache(Spacebars.dot(view.lookup("info"), "commit", "date"));                                   // 163
  })), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.TR({                                                                          // 164
    class: "admin-table-row"                                                                                           // 165
  }, "\n\t\t\t\t\t", HTML.TH({                                                                                         // 166
    class: "content-background-color border-component-color"                                                           // 167
  }, Blaze.View("lookup:_", function() {                                                                               // 168
    return Spacebars.mustache(view.lookup("_"), "Branch");                                                             // 169
  })), "\n\t\t\t\t\t", HTML.TD({                                                                                       // 170
    class: "border-component-color"                                                                                    // 171
  }, Blaze.View("lookup:info.commit.branch", function() {                                                              // 172
    return Spacebars.mustache(Spacebars.dot(view.lookup("info"), "commit", "branch"));                                 // 173
  })), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.TR({                                                                          // 174
    class: "admin-table-row"                                                                                           // 175
  }, "\n\t\t\t\t\t", HTML.TH({                                                                                         // 176
    class: "content-background-color border-component-color"                                                           // 177
  }, Blaze.View("lookup:_", function() {                                                                               // 178
    return Spacebars.mustache(view.lookup("_"), "Tag");                                                                // 179
  })), "\n\t\t\t\t\t", HTML.TD({                                                                                       // 180
    class: "border-component-color"                                                                                    // 181
  }, Blaze.View("lookup:info.commit.tag", function() {                                                                 // 182
    return Spacebars.mustache(Spacebars.dot(view.lookup("info"), "commit", "tag"));                                    // 183
  })), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.TR({                                                                          // 184
    class: "admin-table-row"                                                                                           // 185
  }, "\n\t\t\t\t\t", HTML.TH({                                                                                         // 186
    class: "content-background-color border-component-color"                                                           // 187
  }, Blaze.View("lookup:_", function() {                                                                               // 188
    return Spacebars.mustache(view.lookup("_"), "Author");                                                             // 189
  })), "\n\t\t\t\t\t", HTML.TD({                                                                                       // 190
    class: "border-component-color"                                                                                    // 191
  }, Blaze.View("lookup:info.commit.author", function() {                                                              // 192
    return Spacebars.mustache(Spacebars.dot(view.lookup("info"), "commit", "author"));                                 // 193
  })), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.TR({                                                                          // 194
    class: "admin-table-row"                                                                                           // 195
  }, "\n\t\t\t\t\t", HTML.TH({                                                                                         // 196
    class: "content-background-color border-component-color"                                                           // 197
  }, Blaze.View("lookup:_", function() {                                                                               // 198
    return Spacebars.mustache(view.lookup("_"), "Subject");                                                            // 199
  })), "\n\t\t\t\t\t", HTML.TD({                                                                                       // 200
    class: "border-component-color"                                                                                    // 201
  }, Blaze.View("lookup:info.commit.subject", function() {                                                             // 202
    return Spacebars.mustache(Spacebars.dot(view.lookup("info"), "commit", "subject"));                                // 203
  })), "\n\t\t\t\t"), "\n\t\t\t"), "\n\n\t\t\t", Blaze.If(function() {                                                 // 204
    return Spacebars.dataMustache(view.lookup("hasPermission"), "view-statistics");                                    // 205
  }, function() {                                                                                                      // 206
    return [ "\n\t\t\t\t", Blaze.If(function() {                                                                       // 207
      return Spacebars.call(view.lookup("isReady"));                                                                   // 208
    }, function() {                                                                                                    // 209
      return [ "\n\t\t\t\t\t", HTML.H3(Blaze.View("lookup:_", function() {                                             // 210
        return Spacebars.mustache(view.lookup("_"), "Runtime_Environment");                                            // 211
      })), "\n\t\t\t\t\t", HTML.TABLE({                                                                                // 212
        class: "statistics-table secondary-background-color"                                                           // 213
      }, "\n\t\t\t\t\t\t", HTML.TR({                                                                                   // 214
        class: "admin-table-row"                                                                                       // 215
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 216
        class: "content-background-color border-component-color"                                                       // 217
      }, Blaze.View("lookup:_", function() {                                                                           // 218
        return Spacebars.mustache(view.lookup("_"), "OS_Type");                                                        // 219
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 220
        class: "border-component-color"                                                                                // 221
      }, Blaze.View("lookup:statistics.os.type", function() {                                                          // 222
        return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "os", "type"));                             // 223
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 224
        class: "admin-table-row"                                                                                       // 225
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 226
        class: "content-background-color border-component-color"                                                       // 227
      }, Blaze.View("lookup:_", function() {                                                                           // 228
        return Spacebars.mustache(view.lookup("_"), "OS_Platform");                                                    // 229
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 230
        class: "border-component-color"                                                                                // 231
      }, Blaze.View("lookup:statistics.os.platform", function() {                                                      // 232
        return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "os", "platform"));                         // 233
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 234
        class: "admin-table-row"                                                                                       // 235
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 236
        class: "content-background-color border-component-color"                                                       // 237
      }, Blaze.View("lookup:_", function() {                                                                           // 238
        return Spacebars.mustache(view.lookup("_"), "OS_Arch");                                                        // 239
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 240
        class: "border-component-color"                                                                                // 241
      }, Blaze.View("lookup:statistics.os.arch", function() {                                                          // 242
        return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "os", "arch"));                             // 243
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 244
        class: "admin-table-row"                                                                                       // 245
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 246
        class: "content-background-color border-component-color"                                                       // 247
      }, Blaze.View("lookup:_", function() {                                                                           // 248
        return Spacebars.mustache(view.lookup("_"), "OS_Release");                                                     // 249
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 250
        class: "border-component-color"                                                                                // 251
      }, Blaze.View("lookup:statistics.os.release", function() {                                                       // 252
        return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "os", "release"));                          // 253
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 254
        class: "admin-table-row"                                                                                       // 255
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 256
        class: "content-background-color border-component-color"                                                       // 257
      }, Blaze.View("lookup:_", function() {                                                                           // 258
        return Spacebars.mustache(view.lookup("_"), "Node_version");                                                   // 259
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 260
        class: "border-component-color"                                                                                // 261
      }, Blaze.View("lookup:statistics.process.nodeVersion", function() {                                              // 262
        return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "process", "nodeVersion"));                 // 263
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 264
        class: "admin-table-row"                                                                                       // 265
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 266
        class: "content-background-color border-component-color"                                                       // 267
      }, Blaze.View("lookup:_", function() {                                                                           // 268
        return Spacebars.mustache(view.lookup("_"), "OS_Uptime");                                                      // 269
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 270
        class: "border-component-color"                                                                                // 271
      }, Blaze.View("lookup:humanReadableTime", function() {                                                           // 272
        return Spacebars.mustache(view.lookup("humanReadableTime"), Spacebars.dot(view.lookup("statistics"), "os", "uptime"));
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 274
        class: "admin-table-row"                                                                                       // 275
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 276
        class: "content-background-color border-component-color"                                                       // 277
      }, Blaze.View("lookup:_", function() {                                                                           // 278
        return Spacebars.mustache(view.lookup("_"), "OS_Loadavg");                                                     // 279
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 280
        class: "border-component-color"                                                                                // 281
      }, Blaze.View("lookup:numFormat", function() {                                                                   // 282
        return Spacebars.mustache(view.lookup("numFormat"), Spacebars.dot(view.lookup("statistics"), "os", "loadavg", "0"));
      }), ", ", Blaze.View("lookup:numFormat", function() {                                                            // 284
        return Spacebars.mustache(view.lookup("numFormat"), Spacebars.dot(view.lookup("statistics"), "os", "loadavg", "1"));
      }), ", ", Blaze.View("lookup:numFormat", function() {                                                            // 286
        return Spacebars.mustache(view.lookup("numFormat"), Spacebars.dot(view.lookup("statistics"), "os", "loadavg", "2"));
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 288
        class: "admin-table-row"                                                                                       // 289
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 290
        class: "content-background-color border-component-color"                                                       // 291
      }, Blaze.View("lookup:_", function() {                                                                           // 292
        return Spacebars.mustache(view.lookup("_"), "OS_Totalmem");                                                    // 293
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 294
        class: "border-component-color"                                                                                // 295
      }, Blaze.View("lookup:inGB", function() {                                                                        // 296
        return Spacebars.mustache(view.lookup("inGB"), Spacebars.dot(view.lookup("statistics"), "os", "totalmem"));    // 297
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 298
        class: "admin-table-row"                                                                                       // 299
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 300
        class: "content-background-color border-component-color"                                                       // 301
      }, Blaze.View("lookup:_", function() {                                                                           // 302
        return Spacebars.mustache(view.lookup("_"), "OS_Freemem");                                                     // 303
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 304
        class: "border-component-color"                                                                                // 305
      }, Blaze.View("lookup:inGB", function() {                                                                        // 306
        return Spacebars.mustache(view.lookup("inGB"), Spacebars.dot(view.lookup("statistics"), "os", "freemem"));     // 307
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 308
        class: "admin-table-row"                                                                                       // 309
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 310
        class: "content-background-color border-component-color"                                                       // 311
      }, Blaze.View("lookup:_", function() {                                                                           // 312
        return Spacebars.mustache(view.lookup("_"), "OS_Cpus");                                                        // 313
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 314
        class: "border-component-color"                                                                                // 315
      }, Blaze.View("lookup:statistics.os.cpus.length", function() {                                                   // 316
        return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "os", "cpus", "length"));                   // 317
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\n\t\t\t\t\t", HTML.H3(Blaze.View("lookup:_", function() {           // 318
        return Spacebars.mustache(view.lookup("_"), "Build_Environment");                                              // 319
      })), "\n\t\t\t\t\t", HTML.TABLE({                                                                                // 320
        class: "statistics-table secondary-background-color"                                                           // 321
      }, "\n\t\t\t\t\t\t", HTML.TR({                                                                                   // 322
        class: "admin-table-row"                                                                                       // 323
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 324
        class: "content-background-color border-component-color"                                                       // 325
      }, Blaze.View("lookup:_", function() {                                                                           // 326
        return Spacebars.mustache(view.lookup("_"), "OS_Platform");                                                    // 327
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 328
        class: "border-component-color"                                                                                // 329
      }, Blaze.View("lookup:build.platform", function() {                                                              // 330
        return Spacebars.mustache(Spacebars.dot(view.lookup("build"), "platform"));                                    // 331
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 332
        class: "admin-table-row"                                                                                       // 333
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 334
        class: "content-background-color border-component-color"                                                       // 335
      }, Blaze.View("lookup:_", function() {                                                                           // 336
        return Spacebars.mustache(view.lookup("_"), "OS_Arch");                                                        // 337
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 338
        class: "border-component-color"                                                                                // 339
      }, Blaze.View("lookup:build.arch", function() {                                                                  // 340
        return Spacebars.mustache(Spacebars.dot(view.lookup("build"), "arch"));                                        // 341
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 342
        class: "admin-table-row"                                                                                       // 343
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 344
        class: "content-background-color border-component-color"                                                       // 345
      }, Blaze.View("lookup:_", function() {                                                                           // 346
        return Spacebars.mustache(view.lookup("_"), "OS_Release");                                                     // 347
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 348
        class: "border-component-color"                                                                                // 349
      }, Blaze.View("lookup:build.osRelease", function() {                                                             // 350
        return Spacebars.mustache(Spacebars.dot(view.lookup("build"), "osRelease"));                                   // 351
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 352
        class: "admin-table-row"                                                                                       // 353
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 354
        class: "content-background-color border-component-color"                                                       // 355
      }, Blaze.View("lookup:_", function() {                                                                           // 356
        return Spacebars.mustache(view.lookup("_"), "Node_version");                                                   // 357
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 358
        class: "border-component-color"                                                                                // 359
      }, Blaze.View("lookup:build.nodeVersion", function() {                                                           // 360
        return Spacebars.mustache(Spacebars.dot(view.lookup("build"), "nodeVersion"));                                 // 361
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 362
        class: "admin-table-row"                                                                                       // 363
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 364
        class: "content-background-color border-component-color"                                                       // 365
      }, Blaze.View("lookup:_", function() {                                                                           // 366
        return Spacebars.mustache(view.lookup("_"), "Date");                                                           // 367
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 368
        class: "border-component-color"                                                                                // 369
      }, Blaze.View("lookup:formatDate", function() {                                                                  // 370
        return Spacebars.mustache(view.lookup("formatDate"), Spacebars.dot(view.lookup("build"), "date"));             // 371
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\n\n\t\t\t\t\t", HTML.H3(Blaze.View("lookup:_", function() {         // 372
        return Spacebars.mustache(view.lookup("_"), "Usage");                                                          // 373
      })), "\n\t\t\t\t\t", HTML.TABLE({                                                                                // 374
        class: "statistics-table secondary-background-color"                                                           // 375
      }, "\n\t\t\t\t\t\t", HTML.TR({                                                                                   // 376
        class: "admin-table-row"                                                                                       // 377
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 378
        class: "content-background-color border-component-color"                                                       // 379
      }, Blaze.View("lookup:_", function() {                                                                           // 380
        return Spacebars.mustache(view.lookup("_"), "Stats_Total_Users");                                              // 381
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 382
        class: "border-component-color"                                                                                // 383
      }, Blaze.View("lookup:statistics.totalUsers", function() {                                                       // 384
        return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "totalUsers"));                             // 385
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 386
        class: "admin-table-row"                                                                                       // 387
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 388
        class: "content-background-color border-component-color"                                                       // 389
      }, Blaze.View("lookup:_", function() {                                                                           // 390
        return Spacebars.mustache(view.lookup("_"), "Stats_Active_Users");                                             // 391
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 392
        class: "border-component-color"                                                                                // 393
      }, Blaze.View("lookup:statistics.activeUsers", function() {                                                      // 394
        return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "activeUsers"));                            // 395
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 396
        class: "admin-table-row"                                                                                       // 397
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 398
        class: "content-background-color border-component-color"                                                       // 399
      }, Blaze.View("lookup:_", function() {                                                                           // 400
        return Spacebars.mustache(view.lookup("_"), "Stats_Non_Active_Users");                                         // 401
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 402
        class: "border-component-color"                                                                                // 403
      }, Blaze.View("lookup:statistics.nonActiveUsers", function() {                                                   // 404
        return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "nonActiveUsers"));                         // 405
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 406
        class: "admin-table-row"                                                                                       // 407
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 408
        class: "content-background-color border-component-color"                                                       // 409
      }, Blaze.View("lookup:_", function() {                                                                           // 410
        return Spacebars.mustache(view.lookup("_"), "Stats_Online_Users");                                             // 411
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 412
        class: "border-component-color"                                                                                // 413
      }, Blaze.View("lookup:statistics.onlineUsers", function() {                                                      // 414
        return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "onlineUsers"));                            // 415
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 416
        class: "admin-table-row"                                                                                       // 417
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 418
        class: "content-background-color border-component-color"                                                       // 419
      }, Blaze.View("lookup:_", function() {                                                                           // 420
        return Spacebars.mustache(view.lookup("_"), "Stats_Away_Users");                                               // 421
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 422
        class: "border-component-color"                                                                                // 423
      }, Blaze.View("lookup:statistics.awayUsers", function() {                                                        // 424
        return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "awayUsers"));                              // 425
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 426
        class: "admin-table-row"                                                                                       // 427
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 428
        class: "content-background-color border-component-color"                                                       // 429
      }, Blaze.View("lookup:_", function() {                                                                           // 430
        return Spacebars.mustache(view.lookup("_"), "Stats_Offline_Users");                                            // 431
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 432
        class: "border-component-color"                                                                                // 433
      }, Blaze.View("lookup:statistics.offlineUsers", function() {                                                     // 434
        return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "offlineUsers"));                           // 435
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 436
        class: "admin-table-row"                                                                                       // 437
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 438
        class: "content-background-color border-component-color"                                                       // 439
      }, Blaze.View("lookup:_", function() {                                                                           // 440
        return Spacebars.mustache(view.lookup("_"), "Stats_Total_Rooms");                                              // 441
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 442
        class: "border-component-color"                                                                                // 443
      }, Blaze.View("lookup:statistics.totalRooms", function() {                                                       // 444
        return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "totalRooms"));                             // 445
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 446
        class: "admin-table-row"                                                                                       // 447
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 448
        class: "content-background-color border-component-color"                                                       // 449
      }, Blaze.View("lookup:_", function() {                                                                           // 450
        return Spacebars.mustache(view.lookup("_"), "Stats_Total_Channels");                                           // 451
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 452
        class: "border-component-color"                                                                                // 453
      }, Blaze.View("lookup:statistics.totalChannels", function() {                                                    // 454
        return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "totalChannels"));                          // 455
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 456
        class: "admin-table-row"                                                                                       // 457
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 458
        class: "content-background-color border-component-color"                                                       // 459
      }, Blaze.View("lookup:_", function() {                                                                           // 460
        return Spacebars.mustache(view.lookup("_"), "Stats_Total_Private_Groups");                                     // 461
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 462
        class: "border-component-color"                                                                                // 463
      }, Blaze.View("lookup:statistics.totalPrivateGroups", function() {                                               // 464
        return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "totalPrivateGroups"));                     // 465
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 466
        class: "admin-table-row"                                                                                       // 467
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 468
        class: "content-background-color border-component-color"                                                       // 469
      }, Blaze.View("lookup:_", function() {                                                                           // 470
        return Spacebars.mustache(view.lookup("_"), "Stats_Total_Direct_Messages");                                    // 471
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 472
        class: "border-component-color"                                                                                // 473
      }, Blaze.View("lookup:statistics.totalDirect", function() {                                                      // 474
        return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "totalDirect"));                            // 475
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 476
        class: "admin-table-row"                                                                                       // 477
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 478
        class: "content-background-color border-component-color"                                                       // 479
      }, Blaze.View("lookup:_", function() {                                                                           // 480
        return Spacebars.mustache(view.lookup("_"), "Stats_Total_Livechat_Rooms");                                     // 481
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 482
        class: "border-component-color"                                                                                // 483
      }, Blaze.View("lookup:statistics.totalDirect", function() {                                                      // 484
        return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "totalDirect"));                            // 485
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 486
        class: "admin-table-row"                                                                                       // 487
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 488
        class: "content-background-color border-component-color"                                                       // 489
      }, Blaze.View("lookup:_", function() {                                                                           // 490
        return Spacebars.mustache(view.lookup("_"), "Stats_Total_Messages");                                           // 491
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 492
        class: "border-component-color"                                                                                // 493
      }, Blaze.View("lookup:statistics.totalMessages", function() {                                                    // 494
        return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "totalMessages"));                          // 495
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 496
        class: "admin-table-row"                                                                                       // 497
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 498
        class: "content-background-color border-component-color"                                                       // 499
      }, Blaze.View("lookup:_", function() {                                                                           // 500
        return Spacebars.mustache(view.lookup("_"), "Stats_Total_Messages_Channel");                                   // 501
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 502
        class: "border-component-color"                                                                                // 503
      }, Blaze.View("lookup:statistics.totalChannelMessages", function() {                                             // 504
        return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "totalChannelMessages"));                   // 505
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 506
        class: "admin-table-row"                                                                                       // 507
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 508
        class: "content-background-color border-component-color"                                                       // 509
      }, Blaze.View("lookup:_", function() {                                                                           // 510
        return Spacebars.mustache(view.lookup("_"), "Stats_Total_Messages_PrivateGroup");                              // 511
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 512
        class: "border-component-color"                                                                                // 513
      }, Blaze.View("lookup:statistics.totalPrivateGroupMessages", function() {                                        // 514
        return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "totalPrivateGroupMessages"));              // 515
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 516
        class: "admin-table-row"                                                                                       // 517
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 518
        class: "content-background-color border-component-color"                                                       // 519
      }, Blaze.View("lookup:_", function() {                                                                           // 520
        return Spacebars.mustache(view.lookup("_"), "Stats_Total_Messages_Direct");                                    // 521
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 522
        class: "border-component-color"                                                                                // 523
      }, Blaze.View("lookup:statistics.totalDirectMessages", function() {                                              // 524
        return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "totalDirectMessages"));                    // 525
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.TR({                                                              // 526
        class: "admin-table-row"                                                                                       // 527
      }, "\n\t\t\t\t\t\t\t", HTML.TH({                                                                                 // 528
        class: "content-background-color border-component-color"                                                       // 529
      }, Blaze.View("lookup:_", function() {                                                                           // 530
        return Spacebars.mustache(view.lookup("_"), "Stats_Total_Messages_Livechat");                                  // 531
      })), "\n\t\t\t\t\t\t\t", HTML.TD({                                                                               // 532
        class: "border-component-color"                                                                                // 533
      }, Blaze.View("lookup:statistics.totalLivechatMessages", function() {                                            // 534
        return Spacebars.mustache(Spacebars.dot(view.lookup("statistics"), "totalLivechatMessages"));                  // 535
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\n\t\t\t\t\t", Blaze.If(function() {                                 // 536
        return Spacebars.call(view.lookup("instances"));                                                               // 537
      }, function() {                                                                                                  // 538
        return [ "\n\t\t\t\t\t\t", HTML.H3(Blaze.View("lookup:_", function() {                                         // 539
          return Spacebars.mustache(view.lookup("_"), "Broadcast_Connected_Instances");                                // 540
        })), "\n\t\t\t\t\t\t", Blaze.Each(function() {                                                                 // 541
          return Spacebars.call(view.lookup("instances"));                                                             // 542
        }, function() {                                                                                                // 543
          return [ "\n\t\t\t\t\t\t\t", HTML.TABLE({                                                                    // 544
            class: "statistics-table secondary-background-color"                                                       // 545
          }, "\n\t\t\t\t\t\t\t\t", HTML.TR({                                                                           // 546
            class: "admin-table-row"                                                                                   // 547
          }, "\n\t\t\t\t\t\t\t\t\t", HTML.TH({                                                                         // 548
            class: "content-background-color border-component-color"                                                   // 549
          }, Blaze.View("lookup:_", function() {                                                                       // 550
            return Spacebars.mustache(view.lookup("_"), "Address");                                                    // 551
          })), "\n\t\t\t\t\t\t\t\t\t", HTML.TD({                                                                       // 552
            class: "border-component-color"                                                                            // 553
          }, Blaze.View("lookup:address", function() {                                                                 // 554
            return Spacebars.mustache(view.lookup("address"));                                                         // 555
          })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.TR({                                                  // 556
            class: "admin-table-row"                                                                                   // 557
          }, "\n\t\t\t\t\t\t\t\t\t", HTML.TH({                                                                         // 558
            class: "content-background-color border-component-color"                                                   // 559
          }, Blaze.View("lookup:_", function() {                                                                       // 560
            return Spacebars.mustache(view.lookup("_"), "Auth");                                                       // 561
          })), "\n\t\t\t\t\t\t\t\t\t", HTML.TD({                                                                       // 562
            class: "border-component-color"                                                                            // 563
          }, Blaze.View("lookup:broadcastAuth", function() {                                                           // 564
            return Spacebars.mustache(view.lookup("broadcastAuth"));                                                   // 565
          })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.TR({                                                  // 566
            class: "admin-table-row"                                                                                   // 567
          }, "\n\t\t\t\t\t\t\t\t\t", HTML.TH({                                                                         // 568
            class: "content-background-color border-component-color"                                                   // 569
          }, Blaze.View("lookup:_", function() {                                                                       // 570
            return Spacebars.mustache(view.lookup("_"), "Current_Status");                                             // 571
          }), " > ", Blaze.View("lookup:_", function() {                                                               // 572
            return Spacebars.mustache(view.lookup("_"), "Connected");                                                  // 573
          })), "\n\t\t\t\t\t\t\t\t\t", HTML.TD({                                                                       // 574
            class: "border-component-color"                                                                            // 575
          }, Blaze.View("lookup:currentStatus.connected", function() {                                                 // 576
            return Spacebars.mustache(Spacebars.dot(view.lookup("currentStatus"), "connected"));                       // 577
          })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.TR({                                                  // 578
            class: "admin-table-row"                                                                                   // 579
          }, "\n\t\t\t\t\t\t\t\t\t", HTML.TH({                                                                         // 580
            class: "content-background-color border-component-color"                                                   // 581
          }, Blaze.View("lookup:_", function() {                                                                       // 582
            return Spacebars.mustache(view.lookup("_"), "Current_Status");                                             // 583
          }), " > ", Blaze.View("lookup:_", function() {                                                               // 584
            return Spacebars.mustache(view.lookup("_"), "Retry_Count");                                                // 585
          })), "\n\t\t\t\t\t\t\t\t\t", HTML.TD({                                                                       // 586
            class: "border-component-color"                                                                            // 587
          }, Blaze.View("lookup:currentStatus.retryCount", function() {                                                // 588
            return Spacebars.mustache(Spacebars.dot(view.lookup("currentStatus"), "retryCount"));                      // 589
          })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.TR({                                                  // 590
            class: "admin-table-row"                                                                                   // 591
          }, "\n\t\t\t\t\t\t\t\t\t", HTML.TH({                                                                         // 592
            class: "content-background-color border-component-color"                                                   // 593
          }, Blaze.View("lookup:_", function() {                                                                       // 594
            return Spacebars.mustache(view.lookup("_"), "Current_Status");                                             // 595
          }), " > ", Blaze.View("lookup:_", function() {                                                               // 596
            return Spacebars.mustache(view.lookup("_"), "Status");                                                     // 597
          })), "\n\t\t\t\t\t\t\t\t\t", HTML.TD({                                                                       // 598
            class: "border-component-color"                                                                            // 599
          }, Blaze.View("lookup:currentStatus.status", function() {                                                    // 600
            return Spacebars.mustache(Spacebars.dot(view.lookup("currentStatus"), "status"));                          // 601
          })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.TR({                                                  // 602
            class: "admin-table-row"                                                                                   // 603
          }, "\n\t\t\t\t\t\t\t\t\t", HTML.TH({                                                                         // 604
            class: "content-background-color border-component-color"                                                   // 605
          }, Blaze.View("lookup:_", function() {                                                                       // 606
            return Spacebars.mustache(view.lookup("_"), "Instance_Record");                                            // 607
          }), " > ", Blaze.View("lookup:_", function() {                                                               // 608
            return Spacebars.mustache(view.lookup("_"), "ID");                                                         // 609
          })), "\n\t\t\t\t\t\t\t\t\t", HTML.TD({                                                                       // 610
            class: "border-component-color"                                                                            // 611
          }, Blaze.View("lookup:instanceRecord._id", function() {                                                      // 612
            return Spacebars.mustache(Spacebars.dot(view.lookup("instanceRecord"), "_id"));                            // 613
          })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.TR({                                                  // 614
            class: "admin-table-row"                                                                                   // 615
          }, "\n\t\t\t\t\t\t\t\t\t", HTML.TH({                                                                         // 616
            class: "content-background-color border-component-color"                                                   // 617
          }, Blaze.View("lookup:_", function() {                                                                       // 618
            return Spacebars.mustache(view.lookup("_"), "Instance_Record");                                            // 619
          }), " > ", Blaze.View("lookup:_", function() {                                                               // 620
            return Spacebars.mustache(view.lookup("_"), "PID");                                                        // 621
          })), "\n\t\t\t\t\t\t\t\t\t", HTML.TD({                                                                       // 622
            class: "border-component-color"                                                                            // 623
          }, Blaze.View("lookup:instanceRecord.pid", function() {                                                      // 624
            return Spacebars.mustache(Spacebars.dot(view.lookup("instanceRecord"), "pid"));                            // 625
          })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.TR({                                                  // 626
            class: "admin-table-row"                                                                                   // 627
          }, "\n\t\t\t\t\t\t\t\t\t", HTML.TH({                                                                         // 628
            class: "content-background-color border-component-color"                                                   // 629
          }, Blaze.View("lookup:_", function() {                                                                       // 630
            return Spacebars.mustache(view.lookup("_"), "Instance_Record");                                            // 631
          }), " > ", Blaze.View("lookup:_", function() {                                                               // 632
            return Spacebars.mustache(view.lookup("_"), "Created_at");                                                 // 633
          })), "\n\t\t\t\t\t\t\t\t\t", HTML.TD({                                                                       // 634
            class: "border-component-color"                                                                            // 635
          }, Blaze.View("lookup:formatDate", function() {                                                              // 636
            return Spacebars.mustache(view.lookup("formatDate"), Spacebars.dot(view.lookup("instanceRecord"), "_createdAt"));
          })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.TR({                                                  // 638
            class: "admin-table-row"                                                                                   // 639
          }, "\n\t\t\t\t\t\t\t\t\t", HTML.TH({                                                                         // 640
            class: "content-background-color border-component-color"                                                   // 641
          }, Blaze.View("lookup:_", function() {                                                                       // 642
            return Spacebars.mustache(view.lookup("_"), "Instance_Record");                                            // 643
          }), " > ", Blaze.View("lookup:_", function() {                                                               // 644
            return Spacebars.mustache(view.lookup("_"), "Updated_at");                                                 // 645
          })), "\n\t\t\t\t\t\t\t\t\t", HTML.TD({                                                                       // 646
            class: "border-component-color"                                                                            // 647
          }, Blaze.View("lookup:formatDate", function() {                                                              // 648
            return Spacebars.mustache(view.lookup("formatDate"), Spacebars.dot(view.lookup("instanceRecord"), "_updatedAt"));
          })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t" ];                                         // 650
        }), "\n\t\t\t\t\t" ];                                                                                          // 651
      }), "\n\n\t\t\t\t\t", HTML.BUTTON({                                                                              // 652
        type: "button",                                                                                                // 653
        class: "button primary refresh"                                                                                // 654
      }, "Refresh"), "\n\t\t\t\t" ];                                                                                   // 655
    }, function() {                                                                                                    // 656
      return [ "\n\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                     // 657
        return Spacebars.mustache(view.lookup("_"), "Loading...");                                                     // 658
      }), "\n\t\t\t\t" ];                                                                                              // 659
    }), "\n\t\t\t" ];                                                                                                  // 660
  }), "\n\t\t"), "\n\t");                                                                                              // 661
}));                                                                                                                   // 662
                                                                                                                       // 663
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"rooms":{"template.adminRooms.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-admin/client/rooms/template.adminRooms.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("adminRooms");                                                                                    // 2
Template["adminRooms"] = new Template("Template.adminRooms", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "main-content-flex"                                                                                         // 6
  }, "\n\t\t", HTML.SECTION({                                                                                          // 7
    class: "page-container page-list flex-tab-main-content"                                                            // 8
  }, "\n\t\t\t", HTML.HEADER({                                                                                         // 9
    class: "fixed-title border-component-color"                                                                        // 10
  }, "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("burger")), "\n\t\t\t\t", HTML.H2("\n\t\t\t\t\t", HTML.SPAN({
    class: "room-title"                                                                                                // 12
  }, Blaze.View("lookup:_", function() {                                                                               // 13
    return Spacebars.mustache(view.lookup("_"), "Rooms");                                                              // 14
  })), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                              // 15
    class: "content"                                                                                                   // 16
  }, "\n\t\t\t\t", Blaze.Unless(function() {                                                                           // 17
    return Spacebars.dataMustache(view.lookup("hasPermission"), "view-room-administration");                           // 18
  }, function() {                                                                                                      // 19
    return [ "\n\t\t\t\t\t", HTML.P(Blaze.View("lookup:_", function() {                                                // 20
      return Spacebars.mustache(view.lookup("_"), "You_are_not_authorized_to_view_this_page");                         // 21
    })), "\n\t\t\t\t" ];                                                                                               // 22
  }, function() {                                                                                                      // 23
    return [ "\n\t\t\t\t\t", HTML.FORM({                                                                               // 24
      class: "search-form",                                                                                            // 25
      role: "form"                                                                                                     // 26
    }, "\n\t\t\t\t\t\t", HTML.DIV({                                                                                    // 27
      class: "input-line search"                                                                                       // 28
    }, "\n\t\t\t\t\t\t\t", HTML.INPUT({                                                                                // 29
      type: "text",                                                                                                    // 30
      id: "rooms-filter",                                                                                              // 31
      placeholder: function() {                                                                                        // 32
        return Spacebars.mustache(view.lookup("_"), "Search");                                                         // 33
      },                                                                                                               // 34
      dir: "auto"                                                                                                      // 35
    }), "\n\t\t\t\t\t\t\t", HTML.I({                                                                                   // 36
      class: "icon-search secondary-font-color"                                                                        // 37
    }), "\n\t\t\t\t\t\t\t", Blaze.Unless(function() {                                                                  // 38
      return Spacebars.call(view.lookup("isReady"));                                                                   // 39
    }, function() {                                                                                                    // 40
      return HTML.I({                                                                                                  // 41
        class: "icon-spin"                                                                                             // 42
      });                                                                                                              // 43
    }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                   // 44
      type: "checkbox",                                                                                                // 45
      name: "room-type",                                                                                               // 46
      value: "c"                                                                                                       // 47
    }), " ", Blaze.View("lookup:_", function() {                                                                       // 48
      return Spacebars.mustache(view.lookup("_"), "Channels");                                                         // 49
    })), "\n\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                                     // 50
      type: "checkbox",                                                                                                // 51
      name: "room-type",                                                                                               // 52
      value: "d"                                                                                                       // 53
    }), " ", Blaze.View("lookup:_", function() {                                                                       // 54
      return Spacebars.mustache(view.lookup("_"), "Direct_Messages");                                                  // 55
    })), "\n\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                                     // 56
      type: "checkbox",                                                                                                // 57
      name: "room-type",                                                                                               // 58
      value: "p"                                                                                                       // 59
    }), " ", Blaze.View("lookup:_", function() {                                                                       // 60
      return Spacebars.mustache(view.lookup("_"), "Private_Groups");                                                   // 61
    })), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                                                   // 62
      class: "results"                                                                                                 // 63
    }, "\n\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                           // 64
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Showing_results", view.lookup("roomCount")));     // 65
    }), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                                                    // 66
      class: "list"                                                                                                    // 67
    }, "\n\t\t\t\t\t\t", HTML.TABLE({                                                                                  // 68
      class: "secondary-background-color"                                                                              // 69
    }, "\n\t\t\t\t\t\t\t", HTML.THEAD("\n\t\t\t\t\t\t\t\t", HTML.TR({                                                  // 70
      class: "admin-table-row"                                                                                         // 71
    }, "\n\t\t\t\t\t\t\t\t\t", HTML.TH({                                                                               // 72
      class: "content-background-color border-component-color",                                                        // 73
      width: "30%"                                                                                                     // 74
    }, Blaze.View("lookup:_", function() {                                                                             // 75
      return Spacebars.mustache(view.lookup("_"), "Name");                                                             // 76
    })), "\n\t\t\t\t\t\t\t\t\t", HTML.TH({                                                                             // 77
      class: "content-background-color border-component-color",                                                        // 78
      width: "20%"                                                                                                     // 79
    }, Blaze.View("lookup:_", function() {                                                                             // 80
      return Spacebars.mustache(view.lookup("_"), "Type");                                                             // 81
    })), "\n\t\t\t\t\t\t\t\t\t", HTML.TH({                                                                             // 82
      class: "content-background-color border-component-color",                                                        // 83
      width: "20%"                                                                                                     // 84
    }, Blaze.View("lookup:_", function() {                                                                             // 85
      return Spacebars.mustache(view.lookup("_"), "Users");                                                            // 86
    })), "\n\t\t\t\t\t\t\t\t\t", HTML.TH({                                                                             // 87
      class: "content-background-color border-component-color",                                                        // 88
      width: "10%"                                                                                                     // 89
    }, Blaze.View("lookup:_", function() {                                                                             // 90
      return Spacebars.mustache(view.lookup("_"), "Msgs");                                                             // 91
    })), "\n\t\t\t\t\t\t\t\t\t", HTML.TH({                                                                             // 92
      class: "content-background-color border-component-color",                                                        // 93
      width: "20%"                                                                                                     // 94
    }, Blaze.View("lookup:_", function() {                                                                             // 95
      return Spacebars.mustache(view.lookup("_"), "Default");                                                          // 96
    })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.TBODY("\n\t\t\t\t\t\t\t\t", Blaze.Each(function() {
      return Spacebars.call(view.lookup("rooms"));                                                                     // 98
    }, function() {                                                                                                    // 99
      return [ "\n\t\t\t\t\t\t\t\t", HTML.TR({                                                                         // 100
        class: "room-info row-link"                                                                                    // 101
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.TD({                                                                             // 102
        class: "border-component-color"                                                                                // 103
      }, Blaze.View("lookup:name", function() {                                                                        // 104
        return Spacebars.mustache(view.lookup("name"));                                                                // 105
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.TD({                                                                           // 106
        class: "border-component-color"                                                                                // 107
      }, Blaze.View("lookup:type", function() {                                                                        // 108
        return Spacebars.mustache(view.lookup("type"));                                                                // 109
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.TD({                                                                           // 110
        class: "border-component-color"                                                                                // 111
      }, Blaze.View("lookup:usernames.length", function() {                                                            // 112
        return Spacebars.mustache(Spacebars.dot(view.lookup("usernames"), "length"));                                  // 113
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.TD({                                                                           // 114
        class: "border-component-color"                                                                                // 115
      }, Blaze.View("lookup:msgs", function() {                                                                        // 116
        return Spacebars.mustache(view.lookup("msgs"));                                                                // 117
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.TD({                                                                           // 118
        class: "border-component-color"                                                                                // 119
      }, Blaze.View("lookup:default", function() {                                                                     // 120
        return Spacebars.mustache(view.lookup("default"));                                                             // 121
      })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t" ];                                                              // 122
    }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", Blaze.If(function() {                                // 123
      return Spacebars.call(view.lookup("hasMore"));                                                                   // 124
    }, function() {                                                                                                    // 125
      return [ "\n\t\t\t\t\t\t\t", HTML.BUTTON({                                                                       // 126
        class: function() {                                                                                            // 127
          return [ "button secondary load-more ", Spacebars.mustache(view.lookup("isLoading")) ];                      // 128
        }                                                                                                              // 129
      }, Blaze.View("lookup:_", function() {                                                                           // 130
        return Spacebars.mustache(view.lookup("_"), "Load_more");                                                      // 131
      })), "\n\t\t\t\t\t\t" ];                                                                                         // 132
    }), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                               // 133
  }), "\n\t\t\t"), "\n\t\t"), "\n\t\t", Spacebars.With(function() {                                                    // 134
    return Spacebars.call(view.lookup("flexData"));                                                                    // 135
  }, function() {                                                                                                      // 136
    return [ "\n\t\t\t", Spacebars.include(view.lookupTemplate("flexTabBar")), "\n\t\t" ];                             // 137
  }), "\n\t");                                                                                                         // 138
}));                                                                                                                   // 139
                                                                                                                       // 140
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.adminRoomInfo.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-admin/client/rooms/template.adminRoomInfo.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("adminRoomInfo");                                                                                 // 2
Template["adminRoomInfo"] = new Template("Template.adminRoomInfo", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return Spacebars.With(function() {                                                                                   // 5
    return Spacebars.call(view.lookup("selectedRoom"));                                                                // 6
  }, function() {                                                                                                      // 7
    return [ "\n\t\t", HTML.DIV({                                                                                      // 8
      class: "content"                                                                                                 // 9
    }, "\n\t\t\t", HTML.DIV({                                                                                          // 10
      class: "list-view channel-settings"                                                                              // 11
    }, "\n\t\t\t\t", HTML.DIV({                                                                                        // 12
      class: "title"                                                                                                   // 13
    }, "\n\t\t\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                                                     // 14
      return Spacebars.mustache(view.lookup("_"), "Room_Info");                                                        // 15
    })), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.FORM("\n\t\t\t\t\t", HTML.UL({                                              // 16
      class: "list clearfix"                                                                                           // 17
    }, "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                         // 18
      return Spacebars.call(view.lookup("notDirect"));                                                                 // 19
    }, function() {                                                                                                    // 20
      return [ "\n\t\t\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {        // 21
        return Spacebars.mustache(view.lookup("_"), "Name");                                                           // 22
      })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                // 23
        return Spacebars.dataMustache(view.lookup("editing"), "roomName");                                             // 24
      }, function() {                                                                                                  // 25
        return [ "\n\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                                                // 26
          type: "text",                                                                                                // 27
          name: "roomName",                                                                                            // 28
          value: function() {                                                                                          // 29
            return Spacebars.mustache(view.lookup("roomName"));                                                        // 30
          },                                                                                                           // 31
          class: "content-background-color editing"                                                                    // 32
        }), "\n\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                    // 33
          type: "button",                                                                                              // 34
          class: "button cancel"                                                                                       // 35
        }, Blaze.View("lookup:_", function() {                                                                         // 36
          return Spacebars.mustache(view.lookup("_"), "Cancel");                                                       // 37
        })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                   // 38
          type: "button",                                                                                              // 39
          class: "button primary save"                                                                                 // 40
        }, Blaze.View("lookup:_", function() {                                                                         // 41
          return Spacebars.mustache(view.lookup("_"), "Save");                                                         // 42
        })), "\n\t\t\t\t\t\t\t\t\t" ];                                                                                 // 43
      }, function() {                                                                                                  // 44
        return [ "\n\t\t\t\t\t\t\t\t\t\t", HTML.SPAN(Blaze.View("lookup:roomName", function() {                        // 45
          return Spacebars.mustache(view.lookup("roomName"));                                                          // 46
        }), Blaze.If(function() {                                                                                      // 47
          return Spacebars.call(view.lookup("canEdit"));                                                               // 48
        }, function() {                                                                                                // 49
          return [ " ", HTML.I({                                                                                       // 50
            class: "icon-pencil",                                                                                      // 51
            "data-edit": "roomName"                                                                                    // 52
          }) ];                                                                                                        // 53
        })), "\n\t\t\t\t\t\t\t\t\t" ];                                                                                 // 54
      }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t" ];                                              // 55
    }), "\n\t\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                   // 56
      return Spacebars.mustache(view.lookup("_"), "Topic");                                                            // 57
    })), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                      // 58
      return Spacebars.dataMustache(view.lookup("editing"), "roomTopic");                                              // 59
    }, function() {                                                                                                    // 60
      return [ "\n\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                                                    // 61
        type: "text",                                                                                                  // 62
        name: "roomTopic",                                                                                             // 63
        value: function() {                                                                                            // 64
          return Spacebars.mustache(view.lookup("roomTopic"));                                                         // 65
        },                                                                                                             // 66
        class: "content-background-color editing"                                                                      // 67
      }), "\n\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                        // 68
        type: "button",                                                                                                // 69
        class: "button cancel"                                                                                         // 70
      }, Blaze.View("lookup:_", function() {                                                                           // 71
        return Spacebars.mustache(view.lookup("_"), "Cancel");                                                         // 72
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                       // 73
        type: "button",                                                                                                // 74
        class: "button primary save"                                                                                   // 75
      }, Blaze.View("lookup:_", function() {                                                                           // 76
        return Spacebars.mustache(view.lookup("_"), "Save");                                                           // 77
      })), "\n\t\t\t\t\t\t\t\t" ];                                                                                     // 78
    }, function() {                                                                                                    // 79
      return [ "\n\t\t\t\t\t\t\t\t\t", HTML.SPAN(Blaze.View("lookup:roomTopic", function() {                           // 80
        return Spacebars.mustache(view.lookup("roomTopic"));                                                           // 81
      }), Blaze.If(function() {                                                                                        // 82
        return Spacebars.call(view.lookup("canEdit"));                                                                 // 83
      }, function() {                                                                                                  // 84
        return [ " ", HTML.I({                                                                                         // 85
          class: "icon-pencil",                                                                                        // 86
          "data-edit": "roomTopic"                                                                                     // 87
        }) ];                                                                                                          // 88
      })), "\n\t\t\t\t\t\t\t\t" ];                                                                                     // 89
    }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", Blaze.If(function() {                                // 90
      return Spacebars.call(view.lookup("notDirect"));                                                                 // 91
    }, function() {                                                                                                    // 92
      return [ "\n\t\t\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {        // 93
        return Spacebars.mustache(view.lookup("_"), "Type");                                                           // 94
      })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                // 95
        return Spacebars.dataMustache(view.lookup("editing"), "roomType");                                             // 96
      }, function() {                                                                                                  // 97
        return [ "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                     // 98
          type: "radio",                                                                                               // 99
          name: "roomType",                                                                                            // 100
          class: "editing",                                                                                            // 101
          value: "c",                                                                                                  // 102
          checked: function() {                                                                                        // 103
            return Spacebars.mustache(view.lookup("$eq"), view.lookup("roomType"), "c");                               // 104
          }                                                                                                            // 105
        }), " ", Blaze.View("lookup:_", function() {                                                                   // 106
          return Spacebars.mustache(view.lookup("_"), "Channel");                                                      // 107
        })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                         // 108
          type: "radio",                                                                                               // 109
          name: "roomType",                                                                                            // 110
          value: "p",                                                                                                  // 111
          checked: function() {                                                                                        // 112
            return Spacebars.mustache(view.lookup("$eq"), view.lookup("roomType"), "p");                               // 113
          }                                                                                                            // 114
        }), " ", Blaze.View("lookup:_", function() {                                                                   // 115
          return Spacebars.mustache(view.lookup("_"), "Private_Group");                                                // 116
        })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                   // 117
          type: "button",                                                                                              // 118
          class: "button cancel"                                                                                       // 119
        }, Blaze.View("lookup:_", function() {                                                                         // 120
          return Spacebars.mustache(view.lookup("_"), "Cancel");                                                       // 121
        })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                   // 122
          type: "button",                                                                                              // 123
          class: "button primary save"                                                                                 // 124
        }, Blaze.View("lookup:_", function() {                                                                         // 125
          return Spacebars.mustache(view.lookup("_"), "Save");                                                         // 126
        })), "\n\t\t\t\t\t\t\t\t\t" ];                                                                                 // 127
      }, function() {                                                                                                  // 128
        return [ "\n\t\t\t\t\t\t\t\t\t\t", HTML.SPAN(Blaze.View("lookup:roomTypeDescription", function() {             // 129
          return Spacebars.mustache(view.lookup("roomTypeDescription"));                                               // 130
        }), Blaze.If(function() {                                                                                      // 131
          return Spacebars.call(view.lookup("canEdit"));                                                               // 132
        }, function() {                                                                                                // 133
          return [ " ", HTML.I({                                                                                       // 134
            class: "icon-pencil",                                                                                      // 135
            "data-edit": "roomType"                                                                                    // 136
          }) ];                                                                                                        // 137
        })), "\n\t\t\t\t\t\t\t\t\t" ];                                                                                 // 138
      }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t" ];                                              // 139
    }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                        // 140
      return Spacebars.call(view.lookup("notDirect"));                                                                 // 141
    }, function() {                                                                                                    // 142
      return [ "\n\t\t\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {        // 143
        return Spacebars.mustache(view.lookup("_"), "Room_archivation_state");                                         // 144
      })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                // 145
        return Spacebars.dataMustache(view.lookup("editing"), "archivationState");                                     // 146
      }, function() {                                                                                                  // 147
        return [ "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                     // 148
          type: "radio",                                                                                               // 149
          name: "archivationState",                                                                                    // 150
          class: "editing",                                                                                            // 151
          value: "true",                                                                                               // 152
          checked: function() {                                                                                        // 153
            return Spacebars.mustache(view.lookup("$eq"), view.lookup("archivationState"), true);                      // 154
          }                                                                                                            // 155
        }), " ", Blaze.View("lookup:_", function() {                                                                   // 156
          return Spacebars.mustache(view.lookup("_"), "Room_archivation_state_true");                                  // 157
        })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                         // 158
          type: "radio",                                                                                               // 159
          name: "archivationState",                                                                                    // 160
          value: "false",                                                                                              // 161
          checked: function() {                                                                                        // 162
            return Spacebars.mustache(view.lookup("$neq"), view.lookup("archivationState"), true);                     // 163
          }                                                                                                            // 164
        }), " ", Blaze.View("lookup:_", function() {                                                                   // 165
          return Spacebars.mustache(view.lookup("_"), "Room_archivation_state_false");                                 // 166
        })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                   // 167
          type: "button",                                                                                              // 168
          class: "button cancel"                                                                                       // 169
        }, Blaze.View("lookup:_", function() {                                                                         // 170
          return Spacebars.mustache(view.lookup("_"), "Cancel");                                                       // 171
        })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                   // 172
          type: "button",                                                                                              // 173
          class: "button primary save"                                                                                 // 174
        }, Blaze.View("lookup:_", function() {                                                                         // 175
          return Spacebars.mustache(view.lookup("_"), "Save");                                                         // 176
        })), "\n\t\t\t\t\t\t\t\t\t" ];                                                                                 // 177
      }, function() {                                                                                                  // 178
        return [ "\n\t\t\t\t\t\t\t\t\t\t", HTML.SPAN(Blaze.View("lookup:archivationStateDescription", function() {     // 179
          return Spacebars.mustache(view.lookup("archivationStateDescription"));                                       // 180
        }), Blaze.If(function() {                                                                                      // 181
          return Spacebars.call(view.lookup("canEdit"));                                                               // 182
        }, function() {                                                                                                // 183
          return [ " ", HTML.I({                                                                                       // 184
            class: "icon-pencil",                                                                                      // 185
            "data-edit": "archivationState"                                                                            // 186
          }) ];                                                                                                        // 187
        })), "\n\t\t\t\t\t\t\t\t\t" ];                                                                                 // 188
      }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t" ];                                              // 189
    }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                        // 190
      return Spacebars.call(view.lookup("notDirect"));                                                                 // 191
    }, function() {                                                                                                    // 192
      return [ "\n\t\t\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {        // 193
        return Spacebars.mustache(view.lookup("_"), "Read_only_channel");                                              // 194
      })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                // 195
        return Spacebars.dataMustache(view.lookup("editing"), "readOnly");                                             // 196
      }, function() {                                                                                                  // 197
        return [ "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                     // 198
          type: "radio",                                                                                               // 199
          name: "readOnly",                                                                                            // 200
          class: "editing",                                                                                            // 201
          value: "true",                                                                                               // 202
          checked: function() {                                                                                        // 203
            return Spacebars.mustache(view.lookup("$eq"), view.lookup("readOnly"), true);                              // 204
          }                                                                                                            // 205
        }), " ", Blaze.View("lookup:_", function() {                                                                   // 206
          return Spacebars.mustache(view.lookup("_"), "True");                                                         // 207
        })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                         // 208
          type: "radio",                                                                                               // 209
          name: "readOnly",                                                                                            // 210
          value: "false",                                                                                              // 211
          checked: function() {                                                                                        // 212
            return Spacebars.mustache(view.lookup("$neq"), view.lookup("readOnly"), true);                             // 213
          }                                                                                                            // 214
        }), " ", Blaze.View("lookup:_", function() {                                                                   // 215
          return Spacebars.mustache(view.lookup("_"), "False");                                                        // 216
        })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                   // 217
          type: "button",                                                                                              // 218
          class: "button cancel"                                                                                       // 219
        }, Blaze.View("lookup:_", function() {                                                                         // 220
          return Spacebars.mustache(view.lookup("_"), "Cancel");                                                       // 221
        })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                   // 222
          type: "button",                                                                                              // 223
          class: "button primary save"                                                                                 // 224
        }, Blaze.View("lookup:_", function() {                                                                         // 225
          return Spacebars.mustache(view.lookup("_"), "Save");                                                         // 226
        })), "\n\t\t\t\t\t\t\t\t\t" ];                                                                                 // 227
      }, function() {                                                                                                  // 228
        return [ "\n\t\t\t\t\t\t\t\t\t\t", HTML.SPAN(Blaze.View("lookup:readOnlyDescription", function() {             // 229
          return Spacebars.mustache(view.lookup("readOnlyDescription"));                                               // 230
        }), Blaze.If(function() {                                                                                      // 231
          return Spacebars.call(view.lookup("canEdit"));                                                               // 232
        }, function() {                                                                                                // 233
          return [ " ", HTML.I({                                                                                       // 234
            class: "icon-pencil",                                                                                      // 235
            "data-edit": "readOnly"                                                                                    // 236
          }) ];                                                                                                        // 237
        })), "\n\t\t\t\t\t\t\t\t\t" ];                                                                                 // 238
      }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t" ];                                              // 239
    }), "\n\t\t\t\t\t\t", Blaze.Each(function() {                                                                      // 240
      return Spacebars.call(view.lookup("channelSettings"));                                                           // 241
    }, function() {                                                                                                    // 242
      return [ "\n\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                    // 243
        return {                                                                                                       // 244
          template: Spacebars.call(view.lookup("template")),                                                           // 245
          data: Spacebars.call(view.lookup("data"))                                                                    // 246
        };                                                                                                             // 247
      }, function() {                                                                                                  // 248
        return Spacebars.include(function() {                                                                          // 249
          return Spacebars.call(Template.__dynamic);                                                                   // 250
        });                                                                                                            // 251
      }), "\n\t\t\t\t\t\t" ];                                                                                          // 252
    }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", Blaze.If(function() {                                            // 253
      return Spacebars.call(view.lookup("canDeleteRoom"));                                                             // 254
    }, function() {                                                                                                    // 255
      return [ "\n\t\t\t\t\t", HTML.NAV("\n\t\t\t\t\t\t", HTML.BUTTON({                                                // 256
        class: "button danger delete"                                                                                  // 257
      }, HTML.SPAN(HTML.I({                                                                                            // 258
        class: "icon-trash"                                                                                            // 259
      }), " ", Blaze.View("lookup:_", function() {                                                                     // 260
        return Spacebars.mustache(view.lookup("_"), "Delete");                                                         // 261
      }))), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                           // 262
    }), "\n\t\t\t"), "\n\t\t"), "\n\t" ];                                                                              // 263
  });                                                                                                                  // 264
}));                                                                                                                   // 265
                                                                                                                       // 266
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"adminRoomInfo.coffee.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-admin/client/rooms/adminRoomInfo.coffee.js                                                   //
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
Template.adminRoomInfo.helpers({                                                                                       // 2
  selectedRoom: function () {                                                                                          // 3
    return Session.get('adminRoomsSelected');                                                                          // 4
  },                                                                                                                   // 3
  canEdit: function () {                                                                                               // 5
    return RocketChat.authz.hasAllPermission('edit-room', this.rid);                                                   // 6
  },                                                                                                                   // 3
  editing: function (field) {                                                                                          // 7
    return Template.instance().editing.get() === field;                                                                // 8
  },                                                                                                                   // 3
  notDirect: function () {                                                                                             // 9
    var ref;                                                                                                           // 10
    return ((ref = AdminChatRoom.findOne(this.rid, {                                                                   // 10
      fields: {                                                                                                        // 16
        t: 1                                                                                                           // 17
      }                                                                                                                // 16
    })) != null ? ref.t : void 0) !== 'd';                                                                             // 10
  },                                                                                                                   // 3
  roomType: function () {                                                                                              // 11
    var ref;                                                                                                           // 12
    return (ref = AdminChatRoom.findOne(this.rid, {                                                                    // 12
      fields: {                                                                                                        // 24
        t: 1                                                                                                           // 25
      }                                                                                                                // 24
    })) != null ? ref.t : void 0;                                                                                      // 12
  },                                                                                                                   // 3
  channelSettings: function () {                                                                                       // 13
    return RocketChat.ChannelSettings.getOptions(null, 'admin-room');                                                  // 14
  },                                                                                                                   // 3
  roomTypeDescription: function () {                                                                                   // 15
    var ref, roomType;                                                                                                 // 16
    roomType = (ref = AdminChatRoom.findOne(this.rid, {                                                                // 16
      fields: {                                                                                                        // 35
        t: 1                                                                                                           // 36
      }                                                                                                                // 35
    })) != null ? ref.t : void 0;                                                                                      // 16
                                                                                                                       //
    if (roomType === 'c') {                                                                                            // 17
      return t('Channel');                                                                                             // 18
    } else if (roomType === 'p') {                                                                                     // 17
      return t('Private_Group');                                                                                       // 20
    }                                                                                                                  // 43
  },                                                                                                                   // 3
  roomName: function () {                                                                                              // 21
    var ref;                                                                                                           // 22
    return (ref = AdminChatRoom.findOne(this.rid, {                                                                    // 22
      fields: {                                                                                                        // 48
        name: 1                                                                                                        // 49
      }                                                                                                                // 48
    })) != null ? ref.name : void 0;                                                                                   // 22
  },                                                                                                                   // 3
  roomTopic: function () {                                                                                             // 23
    var ref;                                                                                                           // 24
    return (ref = AdminChatRoom.findOne(this.rid, {                                                                    // 24
      fields: {                                                                                                        // 56
        topic: 1                                                                                                       // 57
      }                                                                                                                // 56
    })) != null ? ref.topic : void 0;                                                                                  // 24
  },                                                                                                                   // 3
  archivationState: function () {                                                                                      // 25
    var ref;                                                                                                           // 26
    return (ref = AdminChatRoom.findOne(this.rid, {                                                                    // 26
      fields: {                                                                                                        // 64
        archived: 1                                                                                                    // 65
      }                                                                                                                // 64
    })) != null ? ref.archived : void 0;                                                                               // 26
  },                                                                                                                   // 3
  archivationStateDescription: function () {                                                                           // 27
    var archivationState, ref;                                                                                         // 28
    archivationState = (ref = AdminChatRoom.findOne(this.rid, {                                                        // 28
      fields: {                                                                                                        // 72
        archived: 1                                                                                                    // 73
      }                                                                                                                // 72
    })) != null ? ref.archived : void 0;                                                                               // 28
                                                                                                                       //
    if (archivationState === true) {                                                                                   // 29
      return t('Room_archivation_state_true');                                                                         // 30
    } else {                                                                                                           // 29
      return t('Room_archivation_state_false');                                                                        // 32
    }                                                                                                                  // 80
  },                                                                                                                   // 3
  canDeleteRoom: function () {                                                                                         // 33
    var ref, roomType;                                                                                                 // 34
    roomType = (ref = AdminChatRoom.findOne(this.rid, {                                                                // 34
      fields: {                                                                                                        // 85
        t: 1                                                                                                           // 86
      }                                                                                                                // 85
    })) != null ? ref.t : void 0;                                                                                      // 34
    return roomType != null && RocketChat.authz.hasAtLeastOnePermission("delete-" + roomType);                         // 35
  },                                                                                                                   // 3
  readOnly: function () {                                                                                              // 36
    var room;                                                                                                          // 37
    room = AdminChatRoom.findOne(this.rid, {                                                                           // 37
      fields: {                                                                                                        // 37
        ro: 1                                                                                                          // 37
      }                                                                                                                // 37
    });                                                                                                                // 37
    return room != null ? room.ro : void 0;                                                                            // 38
  },                                                                                                                   // 3
  readOnlyDescription: function () {                                                                                   // 39
    var readOnly, room;                                                                                                // 40
    room = AdminChatRoom.findOne(this.rid, {                                                                           // 40
      fields: {                                                                                                        // 40
        ro: 1                                                                                                          // 40
      }                                                                                                                // 40
    });                                                                                                                // 40
    readOnly = room != null ? room.ro : void 0;                                                                        // 41
                                                                                                                       //
    if (readOnly === true) {                                                                                           // 42
      return t('True');                                                                                                // 43
    } else {                                                                                                           // 42
      return t('False');                                                                                               // 45
    }                                                                                                                  // 112
  }                                                                                                                    // 3
});                                                                                                                    // 3
Template.adminRoomInfo.events({                                                                                        // 47
  'click .delete': function () {                                                                                       // 48
    return swal({                                                                                                      // 118
      title: t('Are_you_sure'),                                                                                        // 50
      text: t('Delete_Room_Warning'),                                                                                  // 51
      type: 'warning',                                                                                                 // 52
      showCancelButton: true,                                                                                          // 53
      confirmButtonColor: '#DD6B55',                                                                                   // 54
      confirmButtonText: t('Yes_delete_it'),                                                                           // 55
      cancelButtonText: t('Cancel'),                                                                                   // 56
      closeOnConfirm: false,                                                                                           // 57
      html: false                                                                                                      // 58
    }, function (_this) {                                                                                              // 49
      return function () {                                                                                             // 129
        swal.disableButtons();                                                                                         // 60
        return Meteor.call('eraseRoom', _this.rid, function (error, result) {                                          // 131
          if (error) {                                                                                                 // 63
            handleError(error);                                                                                        // 64
            return swal.enableButtons();                                                                               // 134
          } else {                                                                                                     // 63
            return swal({                                                                                              // 136
              title: t('Deleted'),                                                                                     // 68
              text: t('Room_has_been_deleted'),                                                                        // 69
              type: 'success',                                                                                         // 70
              timer: 2000,                                                                                             // 71
              showConfirmButton: false                                                                                 // 72
            });                                                                                                        // 68
          }                                                                                                            // 143
        });                                                                                                            // 62
      };                                                                                                               // 59
    }(this));                                                                                                          // 59
  },                                                                                                                   // 48
  'keydown input[type=text]': function (e, t) {                                                                        // 74
    if (e.keyCode === 13) {                                                                                            // 75
      e.preventDefault();                                                                                              // 76
      return t.saveSetting(this.rid);                                                                                  // 151
    }                                                                                                                  // 152
  },                                                                                                                   // 48
  'click [data-edit]': function (e, t) {                                                                               // 79
    e.preventDefault();                                                                                                // 80
    t.editing.set($(e.currentTarget).data('edit'));                                                                    // 81
    return setTimeout(function () {                                                                                    // 157
      return t.$('input.editing').focus().select();                                                                    // 158
    }, 100);                                                                                                           // 82
  },                                                                                                                   // 48
  'click .cancel': function (e, t) {                                                                                   // 84
    e.preventDefault();                                                                                                // 85
    return t.editing.set();                                                                                            // 163
  },                                                                                                                   // 48
  'click .save': function (e, t) {                                                                                     // 88
    e.preventDefault();                                                                                                // 89
    return t.saveSetting(this.rid);                                                                                    // 167
  }                                                                                                                    // 48
});                                                                                                                    // 48
Template.adminRoomInfo.onCreated(function () {                                                                         // 92
  this.editing = new ReactiveVar();                                                                                    // 93
                                                                                                                       //
  this.validateRoomType = function (_this) {                                                                           // 95
    return function (rid) {                                                                                            // 174
      var type;                                                                                                        // 96
      type = _this.$('input[name=roomType]:checked').val();                                                            // 96
                                                                                                                       //
      if (type !== 'c' && type !== 'p') {                                                                              // 97
        toastr.error(t('error-invalid-room-type', {                                                                    // 98
          type: type                                                                                                   // 98
        }));                                                                                                           // 98
      }                                                                                                                // 181
                                                                                                                       //
      return true;                                                                                                     // 99
    };                                                                                                                 // 95
  }(this);                                                                                                             // 95
                                                                                                                       //
  this.validateRoomName = function (_this) {                                                                           // 101
    return function (rid) {                                                                                            // 186
      var name, nameValidation, ref, room;                                                                             // 102
      room = AdminChatRoom.findOne(rid);                                                                               // 102
                                                                                                                       //
      if (!RocketChat.authz.hasAllPermission('edit-room', rid) || (ref = room.t) !== 'c' && ref !== 'p') {             // 104
        toastr.error(t('error-not-allowed'));                                                                          // 105
        return false;                                                                                                  // 106
      }                                                                                                                // 192
                                                                                                                       //
      name = $('input[name=roomName]').val();                                                                          // 108
                                                                                                                       //
      try {                                                                                                            // 110
        nameValidation = new RegExp('^' + RocketChat.settings.get('UTF8_Names_Validation') + '$');                     // 111
      } catch (error1) {                                                                                               // 110
        nameValidation = new RegExp('^[0-9a-zA-Z-_.]+$');                                                              // 113
      }                                                                                                                // 198
                                                                                                                       //
      if (!nameValidation.test(name)) {                                                                                // 115
        toastr.error(t('error-invalid-room-name', {                                                                    // 116
          room_name: name                                                                                              // 116
        }));                                                                                                           // 116
        return false;                                                                                                  // 117
      }                                                                                                                // 204
                                                                                                                       //
      return true;                                                                                                     // 119
    };                                                                                                                 // 101
  }(this);                                                                                                             // 101
                                                                                                                       //
  this.validateRoomTopic = function (_this) {                                                                          // 121
    return function (rid) {                                                                                            // 209
      return true;                                                                                                     // 122
    };                                                                                                                 // 121
  }(this);                                                                                                             // 121
                                                                                                                       //
  return this.saveSetting = function (_this) {                                                                         // 213
    return function (rid) {                                                                                            // 214
      var ref, ref1, saveRoomSettings, val;                                                                            // 125
                                                                                                                       //
      switch (_this.editing.get()) {                                                                                   // 125
        case 'roomName':                                                                                               // 125
          if (_this.validateRoomName(rid)) {                                                                           // 127
            RocketChat.callbacks.run('roomNameChanged', AdminChatRoom.findOne(rid));                                   // 128
            Meteor.call('saveRoomSettings', rid, 'roomName', _this.$('input[name=roomName]').val(), function (err, result) {
              if (err) {                                                                                               // 130
                return handleError(err);                                                                               // 131
              }                                                                                                        // 223
                                                                                                                       //
              return toastr.success(TAPi18n.__('Room_name_changed_successfully'));                                     // 224
            });                                                                                                        // 129
          }                                                                                                            // 226
                                                                                                                       //
          break;                                                                                                       // 126
                                                                                                                       //
        case 'roomTopic':                                                                                              // 125
          if (_this.validateRoomTopic(rid)) {                                                                          // 134
            Meteor.call('saveRoomSettings', rid, 'roomTopic', _this.$('input[name=roomTopic]').val(), function (err, result) {
              if (err) {                                                                                               // 136
                return handleError(err);                                                                               // 137
              }                                                                                                        // 233
                                                                                                                       //
              toastr.success(TAPi18n.__('Room_topic_changed_successfully'));                                           // 138
              return RocketChat.callbacks.run('roomTopicChanged', AdminChatRoom.findOne(rid));                         // 235
            });                                                                                                        // 135
          }                                                                                                            // 237
                                                                                                                       //
          break;                                                                                                       // 133
                                                                                                                       //
        case 'roomAnnouncement':                                                                                       // 125
          if (_this.validateRoomTopic(rid)) {                                                                          // 141
            Meteor.call('saveRoomSettings', rid, 'roomAnnouncement', _this.$('input[name=roomAnnouncement]').val(), function (err, result) {
              if (err) {                                                                                               // 143
                return handleError(err);                                                                               // 144
              }                                                                                                        // 244
                                                                                                                       //
              toastr.success(TAPi18n.__('Room_announcement_changed_successfully'));                                    // 145
              return RocketChat.callbacks.run('roomAnnouncementChanged', AdminChatRoom.findOne(rid));                  // 246
            });                                                                                                        // 142
          }                                                                                                            // 248
                                                                                                                       //
          break;                                                                                                       // 140
                                                                                                                       //
        case 'roomType':                                                                                               // 125
          val = _this.$('input[name=roomType]:checked').val();                                                         // 148
                                                                                                                       //
          if (_this.validateRoomType(rid)) {                                                                           // 149
            RocketChat.callbacks.run('roomTypeChanged', AdminChatRoom.findOne(rid));                                   // 150
                                                                                                                       //
            saveRoomSettings = function () {                                                                           // 151
              return Meteor.call('saveRoomSettings', rid, 'roomType', val, function (err, result) {                    // 255
                if (err) {                                                                                             // 153
                  return handleError(err);                                                                             // 154
                  return toastr.success(TAPi18n.__('Room_type_changed_successfully'));                                 // 258
                }                                                                                                      // 259
              });                                                                                                      // 152
            };                                                                                                         // 151
                                                                                                                       //
            if (!AdminChatRoom.findOne(rid, {                                                                          // 156
              fields: {                                                                                                // 156
                "default": 1                                                                                           // 156
              }                                                                                                        // 156
            })["default"]) {                                                                                           // 156
              return saveRoomSettings();                                                                               // 157
            }                                                                                                          // 268
                                                                                                                       //
            swal({                                                                                                     // 158
              title: t('Room_default_change_to_private_will_be_default_no_more'),                                      // 159
              type: 'warning',                                                                                         // 160
              showCancelButton: true,                                                                                  // 161
              confirmButtonColor: '#DD6B55',                                                                           // 162
              confirmButtonText: t('Yes'),                                                                             // 163
              cancelButtonText: t('Cancel'),                                                                           // 164
              closeOnConfirm: true,                                                                                    // 165
              html: false                                                                                              // 166
            }, function (confirmed) {                                                                                  // 159
              return !confirmed || saveRoomSettings();                                                                 // 168
            });                                                                                                        // 158
          }                                                                                                            // 281
                                                                                                                       //
          break;                                                                                                       // 147
                                                                                                                       //
        case 'archivationState':                                                                                       // 125
          if (_this.$('input[name=archivationState]:checked').val() === 'true') {                                      // 170
            if (((ref = AdminChatRoom.findOne(rid)) != null ? ref.archived : void 0) !== true) {                       // 171
              Meteor.call('archiveRoom', rid, function (err, results) {                                                // 172
                if (err) {                                                                                             // 173
                  return handleError(err);                                                                             // 173
                }                                                                                                      // 289
                                                                                                                       //
                toastr.success(TAPi18n.__('Room_archived'));                                                           // 174
                return RocketChat.callbacks.run('archiveRoom', AdminChatRoom.findOne(rid));                            // 291
              });                                                                                                      // 172
            }                                                                                                          // 170
          } else {                                                                                                     // 170
            if (((ref1 = AdminChatRoom.findOne(rid)) != null ? ref1.archived : void 0) === true) {                     // 177
              Meteor.call('unarchiveRoom', rid, function (err, results) {                                              // 178
                if (err) {                                                                                             // 179
                  return handleError(err);                                                                             // 179
                }                                                                                                      // 299
                                                                                                                       //
                toastr.success(TAPi18n.__('Room_unarchived'));                                                         // 180
                return RocketChat.callbacks.run('unarchiveRoom', AdminChatRoom.findOne(rid));                          // 301
              });                                                                                                      // 178
            }                                                                                                          // 170
          }                                                                                                            // 304
                                                                                                                       //
          break;                                                                                                       // 169
                                                                                                                       //
        case 'readOnly':                                                                                               // 125
          Meteor.call('saveRoomSettings', rid, 'readOnly', _this.$('input[name=readOnly]:checked').val() === 'true', function (err, result) {
            if (err) {                                                                                                 // 184
              return handleError(err);                                                                                 // 184
            }                                                                                                          // 310
                                                                                                                       //
            return toastr.success(TAPi18n.__('Read_only_changed_successfully'));                                       // 311
          });                                                                                                          // 183
      }                                                                                                                // 125
                                                                                                                       //
      return _this.editing.set();                                                                                      // 314
    };                                                                                                                 // 124
  }(this);                                                                                                             // 124
});                                                                                                                    // 92
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.channelSettingsDefault.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-admin/client/rooms/template.channelSettingsDefault.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("channelSettingsDefault");                                                                        // 2
Template["channelSettingsDefault"] = new Template("Template.channelSettingsDefault", (function() {                     // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("canMakeDefault"));                                                              // 6
  }, function() {                                                                                                      // 7
    return [ "\n\t\t", HTML.LI("\n\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                              // 8
      return Spacebars.mustache(view.lookup("_"), "Default");                                                          // 9
    })), "\n\t\t\t", HTML.DIV("\n\t\t\t\t", Blaze.If(function() {                                                      // 10
      return Spacebars.dataMustache(view.lookup("editing"), "default");                                                // 11
    }, function() {                                                                                                    // 12
      return [ "\n\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                                 // 13
        type: "radio",                                                                                                 // 14
        name: "default",                                                                                               // 15
        class: "editing",                                                                                              // 16
        value: "true",                                                                                                 // 17
        checked: function() {                                                                                          // 18
          return Spacebars.mustache(view.lookup("$eq"), view.lookup("roomDefault"), true);                             // 19
        }                                                                                                              // 20
      }), " ", Blaze.View("lookup:_", function() {                                                                     // 21
        return Spacebars.mustache(view.lookup("_"), "True");                                                           // 22
      })), "\n\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                                     // 23
        type: "radio",                                                                                                 // 24
        name: "default",                                                                                               // 25
        value: "false",                                                                                                // 26
        checked: function() {                                                                                          // 27
          return Spacebars.mustache(view.lookup("$neq"), view.lookup("roomDefault"), true);                            // 28
        }                                                                                                              // 29
      }), " ", Blaze.View("lookup:_", function() {                                                                     // 30
        return Spacebars.mustache(view.lookup("_"), "False");                                                          // 31
      })), "\n\t\t\t\t\t", HTML.BUTTON({                                                                               // 32
        type: "button",                                                                                                // 33
        class: "button cancel"                                                                                         // 34
      }, Blaze.View("lookup:_", function() {                                                                           // 35
        return Spacebars.mustache(view.lookup("_"), "Cancel");                                                         // 36
      })), "\n\t\t\t\t\t", HTML.BUTTON({                                                                               // 37
        type: "button",                                                                                                // 38
        class: "button primary save"                                                                                   // 39
      }, Blaze.View("lookup:_", function() {                                                                           // 40
        return Spacebars.mustache(view.lookup("_"), "Save");                                                           // 41
      })), "\n\t\t\t\t" ];                                                                                             // 42
    }, function() {                                                                                                    // 43
      return [ "\n\t\t\t\t\t", HTML.SPAN(Blaze.View("lookup:defaultDescription", function() {                          // 44
        return Spacebars.mustache(view.lookup("defaultDescription"));                                                  // 45
      }), " ", HTML.I({                                                                                                // 46
        class: "icon-pencil",                                                                                          // 47
        "data-edit": "default"                                                                                         // 48
      })), "\n\t\t\t\t" ];                                                                                             // 49
    }), "\n\t\t\t"), "\n\t\t"), "\n\t" ];                                                                              // 50
  });                                                                                                                  // 51
}));                                                                                                                   // 52
                                                                                                                       // 53
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"channelSettingsDefault.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-admin/client/rooms/channelSettingsDefault.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var toastr = void 0;                                                                                                   // 1
module.watch(require("toastr"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		toastr = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
/* globals AdminChatRoom */Template.channelSettingsDefault.helpers({                                                   // 2
	canMakeDefault: function () {                                                                                         // 5
		var room = AdminChatRoom.findOne(this.rid, {                                                                         // 6
			fields: {                                                                                                           // 6
				t: 1                                                                                                               // 6
			}                                                                                                                   // 6
		});                                                                                                                  // 6
		return room && room.t === 'c';                                                                                       // 7
	},                                                                                                                    // 8
	editing: function (field) {                                                                                           // 9
		return Template.instance().editing.get() === field;                                                                  // 10
	},                                                                                                                    // 11
	roomDefault: function () {                                                                                            // 12
		var room = AdminChatRoom.findOne(this.rid, {                                                                         // 13
			fields: {                                                                                                           // 13
				"default": 1                                                                                                       // 13
			}                                                                                                                   // 13
		});                                                                                                                  // 13
                                                                                                                       //
		if (room) {                                                                                                          // 15
			return room.default;                                                                                                // 16
		}                                                                                                                    // 17
	},                                                                                                                    // 18
	defaultDescription: function () {                                                                                     // 19
		var room = AdminChatRoom.findOne(this.rid, {                                                                         // 20
			fields: {                                                                                                           // 20
				"default": 1                                                                                                       // 20
			}                                                                                                                   // 20
		});                                                                                                                  // 20
                                                                                                                       //
		if (room && room.default) {                                                                                          // 21
			return t('True');                                                                                                   // 22
		} else {                                                                                                             // 23
			return t('False');                                                                                                  // 24
		}                                                                                                                    // 25
	}                                                                                                                     // 26
});                                                                                                                    // 4
Template.channelSettingsDefault.events({                                                                               // 29
	'click [data-edit]': function (e, t) {                                                                                // 30
		e.preventDefault();                                                                                                  // 31
		t.editing.set($(e.currentTarget).data('edit'));                                                                      // 32
		setTimeout(function () {                                                                                             // 33
			t.$('input.editing').focus().select();                                                                              // 34
		}, 100);                                                                                                             // 35
	},                                                                                                                    // 36
	'click .cancel': function (e, t) {                                                                                    // 37
		e.preventDefault();                                                                                                  // 38
		t.editing.set();                                                                                                     // 39
	},                                                                                                                    // 40
	'click .save': function (e, t) {                                                                                      // 41
		e.preventDefault();                                                                                                  // 42
		Meteor.call('saveRoomSettings', this.rid, 'default', $('input[name=default]:checked').val(), function (err /*, result*/) {
			if (err) {                                                                                                          // 45
				return handleError(err);                                                                                           // 46
			}                                                                                                                   // 47
                                                                                                                       //
			toastr.success(TAPi18n.__('Room_type_changed_successfully'));                                                       // 48
		});                                                                                                                  // 49
		t.editing.set();                                                                                                     // 51
	}                                                                                                                     // 52
});                                                                                                                    // 29
Template.channelSettingsDefault.onCreated(function () {                                                                // 55
	this.editing = new ReactiveVar();                                                                                     // 56
});                                                                                                                    // 57
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"adminRooms.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-admin/client/rooms/adminRooms.coffee.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.AdminChatRoom = new Mongo.Collection('rocketchat_room');                                                          // 1
Template.adminRooms.helpers({                                                                                          // 3
  isReady: function () {                                                                                               // 4
    var ref;                                                                                                           // 5
    return (ref = Template.instance().ready) != null ? ref.get() : void 0;                                             // 5
  },                                                                                                                   // 4
  rooms: function () {                                                                                                 // 6
    return Template.instance().rooms();                                                                                // 7
  },                                                                                                                   // 4
  isLoading: function () {                                                                                             // 8
    var ref;                                                                                                           // 9
                                                                                                                       //
    if (!((ref = Template.instance().ready) != null ? ref.get() : void 0)) {                                           // 9
      return 'btn-loading';                                                                                            // 9
    }                                                                                                                  // 15
  },                                                                                                                   // 4
  hasMore: function () {                                                                                               // 10
    var base, ref;                                                                                                     // 11
    return ((ref = Template.instance().limit) != null ? ref.get() : void 0) === (typeof (base = Template.instance()).rooms === "function" ? base.rooms().count() : void 0);
  },                                                                                                                   // 4
  roomCount: function () {                                                                                             // 12
    var base;                                                                                                          // 13
    return typeof (base = Template.instance()).rooms === "function" ? base.rooms().count() : void 0;                   // 13
  },                                                                                                                   // 4
  name: function () {                                                                                                  // 14
    if (this.t === 'c' || this.t === 'p') {                                                                            // 15
      return this.name;                                                                                                // 16
    } else if (this.t === 'd') {                                                                                       // 15
      return this.usernames.join(' x ');                                                                               // 18
    }                                                                                                                  // 30
  },                                                                                                                   // 4
  type: function () {                                                                                                  // 19
    if (this.t === 'c') {                                                                                              // 20
      return TAPi18n.__('Channel');                                                                                    // 21
    } else if (this.t === 'd') {                                                                                       // 20
      return TAPi18n.__('Direct Message');                                                                             // 23
    }                                                                                                                  // 37
                                                                                                                       //
    if (this.t === 'p') {                                                                                              // 24
      return TAPi18n.__('Private Group');                                                                              // 25
    }                                                                                                                  // 40
  },                                                                                                                   // 4
  "default": function () {                                                                                             // 26
    if (this["default"]) {                                                                                             // 27
      return t('True');                                                                                                // 28
    } else {                                                                                                           // 27
      return t('False');                                                                                               // 30
    }                                                                                                                  // 47
  },                                                                                                                   // 4
  flexData: function () {                                                                                              // 31
    return {                                                                                                           // 32
      tabBar: Template.instance().tabBar                                                                               // 33
    };                                                                                                                 // 32
  }                                                                                                                    // 4
});                                                                                                                    // 4
Template.adminRooms.onCreated(function () {                                                                            // 36
  var instance;                                                                                                        // 37
  instance = this;                                                                                                     // 37
  this.limit = new ReactiveVar(50);                                                                                    // 38
  this.filter = new ReactiveVar('');                                                                                   // 39
  this.types = new ReactiveVar([]);                                                                                    // 40
  this.ready = new ReactiveVar(true);                                                                                  // 41
  this.tabBar = new RocketChatTabBar();                                                                                // 43
  this.tabBar.showGroup(FlowRouter.current().route.name);                                                              // 44
  RocketChat.TabBar.addButton({                                                                                        // 46
    groups: ['admin-rooms'],                                                                                           // 47
    id: 'admin-room',                                                                                                  // 48
    i18nTitle: 'Room_Info',                                                                                            // 49
    icon: 'icon-info-circled',                                                                                         // 50
    template: 'adminRoomInfo',                                                                                         // 51
    order: 1                                                                                                           // 52
  });                                                                                                                  // 46
  RocketChat.ChannelSettings.addOption({                                                                               // 55
    group: ['admin-room'],                                                                                             // 56
    id: 'make-default',                                                                                                // 57
    template: 'channelSettingsDefault',                                                                                // 58
    data: function () {                                                                                                // 59
      return Session.get('adminRoomsSelected');                                                                        // 60
    },                                                                                                                 // 56
    validation: function () {                                                                                          // 61
      return RocketChat.authz.hasAllPermission('view-room-administration');                                            // 62
    }                                                                                                                  // 56
  });                                                                                                                  // 56
  this.autorun(function () {                                                                                           // 64
    var filter, limit, subscription, types;                                                                            // 65
    filter = instance.filter.get();                                                                                    // 65
    types = instance.types.get();                                                                                      // 66
                                                                                                                       //
    if (types.length === 0) {                                                                                          // 68
      types = ['c', 'd', 'p'];                                                                                         // 69
    }                                                                                                                  // 90
                                                                                                                       //
    limit = instance.limit.get();                                                                                      // 71
    subscription = instance.subscribe('adminRooms', filter, types, limit);                                             // 72
    return instance.ready.set(subscription.ready());                                                                   // 93
  });                                                                                                                  // 64
                                                                                                                       //
  this.rooms = function () {                                                                                           // 75
    var filter, filterReg, query, ref, ref1, ref2, types;                                                              // 76
    filter = _.trim((ref = instance.filter) != null ? ref.get() : void 0);                                             // 76
    types = (ref1 = instance.types) != null ? ref1.get() : void 0;                                                     // 77
                                                                                                                       //
    if (!_.isArray(types)) {                                                                                           // 79
      types = [];                                                                                                      // 80
    }                                                                                                                  // 101
                                                                                                                       //
    query = {};                                                                                                        // 82
    filter = _.trim(filter);                                                                                           // 84
                                                                                                                       //
    if (filter) {                                                                                                      // 85
      filterReg = new RegExp(s.escapeRegExp(filter), "i");                                                             // 86
      query = {                                                                                                        // 87
        $or: [{                                                                                                        // 87
          name: filterReg                                                                                              // 87
        }, {                                                                                                           // 87
          t: 'd',                                                                                                      // 87
          usernames: filterReg                                                                                         // 87
        }]                                                                                                             // 87
      };                                                                                                               // 87
    }                                                                                                                  // 116
                                                                                                                       //
    if (types.length) {                                                                                                // 89
      query['t'] = {                                                                                                   // 90
        $in: types                                                                                                     // 90
      };                                                                                                               // 90
    }                                                                                                                  // 121
                                                                                                                       //
    return AdminChatRoom.find(query, {                                                                                 // 92
      limit: (ref2 = instance.limit) != null ? ref2.get() : void 0,                                                    // 92
      sort: {                                                                                                          // 92
        "default": -1,                                                                                                 // 92
        name: 1                                                                                                        // 92
      }                                                                                                                // 92
    });                                                                                                                // 92
  };                                                                                                                   // 75
                                                                                                                       //
  return this.getSearchTypes = function () {                                                                           // 130
    return _.map($('[name=room-type]:checked'), function (input) {                                                     // 95
      return $(input).val();                                                                                           // 95
    });                                                                                                                // 95
  };                                                                                                                   // 94
});                                                                                                                    // 36
Template.adminRooms.onRendered(function () {                                                                           // 97
  return Tracker.afterFlush(function () {                                                                              // 138
    SideNav.setFlex("adminFlex");                                                                                      // 99
    return SideNav.openFlex();                                                                                         // 140
  });                                                                                                                  // 98
});                                                                                                                    // 97
Template.adminRooms.events({                                                                                           // 102
  'keydown #rooms-filter': function (e) {                                                                              // 103
    if (e.which === 13) {                                                                                              // 104
      e.stopPropagation();                                                                                             // 105
      return e.preventDefault();                                                                                       // 148
    }                                                                                                                  // 149
  },                                                                                                                   // 103
  'keyup #rooms-filter': function (e, t) {                                                                             // 108
    e.stopPropagation();                                                                                               // 109
    e.preventDefault();                                                                                                // 110
    return t.filter.set(e.currentTarget.value);                                                                        // 154
  },                                                                                                                   // 103
  'click .room-info': function (e, instance) {                                                                         // 113
    e.preventDefault();                                                                                                // 114
    Session.set('adminRoomsSelected', {                                                                                // 116
      rid: this._id                                                                                                    // 116
    });                                                                                                                // 116
    return instance.tabBar.open('admin-room');                                                                         // 161
  },                                                                                                                   // 103
  'click .load-more': function (e, t) {                                                                                // 120
    e.preventDefault();                                                                                                // 121
    e.stopPropagation();                                                                                               // 122
    return t.limit.set(t.limit.get() + 50);                                                                            // 166
  },                                                                                                                   // 103
  'change [name=room-type]': function (e, t) {                                                                         // 125
    return t.types.set(t.getSearchTypes());                                                                            // 169
  }                                                                                                                    // 103
});                                                                                                                    // 103
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"users":{"template.adminInviteUser.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-admin/client/users/template.adminInviteUser.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("adminInviteUser");                                                                               // 2
Template["adminInviteUser"] = new Template("Template.adminInviteUser", (function() {                                   // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("isAdmin"));                                                                     // 6
  }, function() {                                                                                                      // 7
    return [ "\n\t\t", HTML.DIV({                                                                                      // 8
      class: "content"                                                                                                 // 9
    }, "\n\t\t\t", HTML.DIV({                                                                                          // 10
      class: "user-view"                                                                                               // 11
    }, "\n\t\t\t\t", HTML.DIV({                                                                                        // 12
      class: "about clearfix"                                                                                          // 13
    }, "\n\t\t\t\t\t", HTML.FORM({                                                                                     // 14
      class: "edit-form"                                                                                               // 15
    }, "\n\t\t\t\t\t\t", HTML.H3(Blaze.View("lookup:_", function() {                                                   // 16
      return Spacebars.mustache(view.lookup("_"), "Send_invitation_email");                                            // 17
    })), "\n\t\t\t\t\t\t", HTML.DIV({                                                                                  // 18
      class: "input-line"                                                                                              // 19
    }, "\n\t\t\t\t\t\t\t", HTML.LABEL({                                                                                // 20
      for: "inviteEmails"                                                                                              // 21
    }, Blaze.View("lookup:_", function() {                                                                             // 22
      return Spacebars.mustache(view.lookup("_"), "Send_invitation_email_info");                                       // 23
    })), "\n\t\t\t\t\t\t\t", HTML.TEXTAREA({                                                                           // 24
      id: "inviteEmails",                                                                                              // 25
      rows: "3",                                                                                                       // 26
      style: "height: auto",                                                                                           // 27
      class: "content-background-color"                                                                                // 28
    }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.NAV("\n\t\t\t\t\t", HTML.BUTTON({        // 29
      class: "button button-block cancel"                                                                              // 30
    }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                   // 31
      return Spacebars.mustache(view.lookup("_"), "Cancel");                                                           // 32
    }))), "\n\t\t\t\t\t", HTML.BUTTON({                                                                                // 33
      class: "button button-block primary send",                                                                       // 34
      "data-loading-text": function() {                                                                                // 35
        return Spacebars.mustache(view.lookup("_"), "Please_wait");                                                    // 36
      }                                                                                                                // 37
    }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                   // 38
      return Spacebars.mustache(view.lookup("_"), "Send");                                                             // 39
    }))), "\n\t\t\t\t"), "\n\t\t\t\t", Blaze.If(function() {                                                           // 40
      return Spacebars.call(Spacebars.dot(view.lookup("inviteEmails"), "length"));                                     // 41
    }, function() {                                                                                                    // 42
      return [ "\n\t\t\t\t", HTML.DIV({                                                                                // 43
        class: "about clearfix",                                                                                       // 44
        style: "margin-top: 30px"                                                                                      // 45
      }, "\n\t\t\t\t\t", HTML.P({                                                                                      // 46
        style: "color: #51a351"                                                                                        // 47
      }, " ", Blaze.View("lookup:_", function() {                                                                      // 48
        return Spacebars.mustache(view.lookup("_"), "Send_invitation_email_success");                                  // 49
      }), " "), "\n\t\t\t\t\t", HTML.UL({                                                                              // 50
        style: "margin: 5px 10px"                                                                                      // 51
      }, "\n\t\t\t\t\t\t", Blaze.Each(function() {                                                                     // 52
        return Spacebars.call(view.lookup("inviteEmails"));                                                            // 53
      }, function() {                                                                                                  // 54
        return [ "\n\t\t\t\t\t\t", HTML.LI({                                                                           // 55
          style: "margin-top: 5px"                                                                                     // 56
        }, Blaze.View("lookup:.", function() {                                                                         // 57
          return Spacebars.mustache(view.lookup("."));                                                                 // 58
        })), "\n\t\t\t\t\t\t" ];                                                                                       // 59
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t" ];                                                              // 60
    }), "\n\t\t\t"), "\n\t\t"), "\n\t" ];                                                                              // 61
  });                                                                                                                  // 62
}));                                                                                                                   // 63
                                                                                                                       // 64
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.adminUserChannels.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-admin/client/users/template.adminUserChannels.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("adminUserChannels");                                                                             // 2
Template["adminUserChannels"] = new Template("Template.adminUserChannels", (function() {                               // 3
  var view = this;                                                                                                     // 4
  return Blaze.Unless(function() {                                                                                     // 5
    return Spacebars.dataMustache(view.lookup("hasPermission"), "view-full-other-user-info");                          // 6
  }, function() {                                                                                                      // 7
    return [ "\n\t\t", HTML.P(Blaze.View("lookup:_", function() {                                                      // 8
      return Spacebars.mustache(view.lookup("_"), "You_are_not_authorized_to_view_this_page");                         // 9
    })), "\n\t" ];                                                                                                     // 10
  }, function() {                                                                                                      // 11
    return [ "\n\t\t", HTML.DIV({                                                                                      // 12
      class: "user-info-channel"                                                                                       // 13
    }, "\n\t\t\t", HTML.H3(HTML.A({                                                                                    // 14
      href: function() {                                                                                               // 15
        return Spacebars.mustache(view.lookup("route"));                                                               // 16
      }                                                                                                                // 17
    }, HTML.I({                                                                                                        // 18
      class: function() {                                                                                              // 19
        return [ "icon-", Spacebars.mustache(view.lookup("type")) ];                                                   // 20
      }                                                                                                                // 21
    }), " ", Blaze.View("lookup:name", function() {                                                                    // 22
      return Spacebars.mustache(view.lookup("name"));                                                                  // 23
    }))), "\n\t\t"), "\n\t" ];                                                                                         // 24
  });                                                                                                                  // 25
}));                                                                                                                   // 26
                                                                                                                       // 27
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.adminUserEdit.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-admin/client/users/template.adminUserEdit.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("adminUserEdit");                                                                                 // 2
Template["adminUserEdit"] = new Template("Template.adminUserEdit", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "content"                                                                                                   // 6
  }, "\n\t\t", HTML.DIV({                                                                                              // 7
    class: "user-view"                                                                                                 // 8
  }, "\n\t\t\t", Blaze._TemplateWith(function() {                                                                      // 9
    return Spacebars.call(view.lookup("."));                                                                           // 10
  }, function() {                                                                                                      // 11
    return Spacebars.include(view.lookupTemplate("userEdit"));                                                         // 12
  }), "\n\t\t"), "\n\t");                                                                                              // 13
}));                                                                                                                   // 14
                                                                                                                       // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.adminUserInfo.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-admin/client/users/template.adminUserInfo.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("adminUserInfo");                                                                                 // 2
Template["adminUserInfo"] = new Template("Template.adminUserInfo", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "content"                                                                                                   // 6
  }, "\n\t\t", HTML.DIV({                                                                                              // 7
    class: "user-view"                                                                                                 // 8
  }, "\n\t\t\t", Blaze.If(function() {                                                                                 // 9
    return Spacebars.call(view.lookup("_id"));                                                                         // 10
  }, function() {                                                                                                      // 11
    return [ "\n\t\t\t\t", Blaze._TemplateWith(function() {                                                            // 12
      return Spacebars.call(view.lookup("."));                                                                         // 13
    }, function() {                                                                                                    // 14
      return Spacebars.include(view.lookupTemplate("userInfo"));                                                       // 15
    }), "\n\t\t\t" ];                                                                                                  // 16
  }, function() {                                                                                                      // 17
    return [ "\n\t\t\t\t", HTML.DIV({                                                                                  // 18
      class: "edit-form"                                                                                               // 19
    }, "\n\t\t\t\t\t", HTML.DIV(Blaze.View("lookup:_", function() {                                                    // 20
      return Spacebars.mustache(view.lookup("_"), "Please_select_an_user");                                            // 21
    })), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                                  // 22
  }), "\n\t\t"), "\n\t");                                                                                              // 23
}));                                                                                                                   // 24
                                                                                                                       // 25
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.adminUsers.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-admin/client/users/template.adminUsers.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("adminUsers");                                                                                    // 2
Template["adminUsers"] = new Template("Template.adminUsers", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "main-content-flex"                                                                                         // 6
  }, "\n\t\t", HTML.SECTION({                                                                                          // 7
    class: "page-container page-list flex-tab-main-content"                                                            // 8
  }, "\n\t\t\t", HTML.HEADER({                                                                                         // 9
    class: "fixed-title border-component-color"                                                                        // 10
  }, "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("burger")), "\n\t\t\t\t", HTML.H2("\n\t\t\t\t\t", HTML.SPAN({
    class: "room-title"                                                                                                // 12
  }, Blaze.View("lookup:_", function() {                                                                               // 13
    return Spacebars.mustache(view.lookup("_"), "Users");                                                              // 14
  })), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                              // 15
    class: "content"                                                                                                   // 16
  }, "\n\t\t\t\t", Blaze.Unless(function() {                                                                           // 17
    return Spacebars.dataMustache(view.lookup("hasPermission"), "view-user-administration");                           // 18
  }, function() {                                                                                                      // 19
    return [ "\n\t\t\t\t\t", HTML.P(Blaze.View("lookup:_", function() {                                                // 20
      return Spacebars.mustache(view.lookup("_"), "You_are_not_authorized_to_view_this_page");                         // 21
    })), "\n\t\t\t\t" ];                                                                                               // 22
  }, function() {                                                                                                      // 23
    return [ "\n\t\t\t\t\t", HTML.FORM({                                                                               // 24
      class: "search-form",                                                                                            // 25
      role: "form"                                                                                                     // 26
    }, "\n\t\t\t\t\t\t", HTML.DIV({                                                                                    // 27
      class: "input-line search"                                                                                       // 28
    }, "\n\t\t\t\t\t\t\t", HTML.INPUT({                                                                                // 29
      type: "text",                                                                                                    // 30
      id: "users-filter",                                                                                              // 31
      placeholder: function() {                                                                                        // 32
        return Spacebars.mustache(view.lookup("_"), "Search");                                                         // 33
      },                                                                                                               // 34
      dir: "auto"                                                                                                      // 35
    }), "\n\t\t\t\t\t\t\t", HTML.I({                                                                                   // 36
      class: "icon-search secondary-font-color"                                                                        // 37
    }), "\n\t\t\t\t\t\t\t", Blaze.Unless(function() {                                                                  // 38
      return Spacebars.call(view.lookup("isReady"));                                                                   // 39
    }, function() {                                                                                                    // 40
      return HTML.I({                                                                                                  // 41
        class: "icon-spin secondary-font-color"                                                                        // 42
      });                                                                                                              // 43
    }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                                 // 44
      class: "results"                                                                                                 // 45
    }, "\n\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                           // 46
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Showing_results", Spacebars.dot(view.lookup("users"), "length")));
    }), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                                                    // 48
      class: "list"                                                                                                    // 49
    }, "\n\t\t\t\t\t\t", HTML.TABLE({                                                                                  // 50
      class: "secondary-background-color"                                                                              // 51
    }, "\n\t\t\t\t\t\t\t", HTML.THEAD("\n\t\t\t\t\t\t\t\t", HTML.TR({                                                  // 52
      class: "admin-table-row"                                                                                         // 53
    }, "\n\t\t\t\t\t\t\t\t\t", HTML.TH({                                                                               // 54
      class: "content-background-color border-component-color"                                                         // 55
    }, HTML.CharRef({                                                                                                  // 56
      html: "&nbsp;",                                                                                                  // 57
      str: " "                                                                                                         // 58
    })), "\n\t\t\t\t\t\t\t\t\t", HTML.TH({                                                                             // 59
      class: "content-background-color border-component-color",                                                        // 60
      width: "34%"                                                                                                     // 61
    }, Blaze.View("lookup:_", function() {                                                                             // 62
      return Spacebars.mustache(view.lookup("_"), "Name");                                                             // 63
    })), "\n\t\t\t\t\t\t\t\t\t", HTML.TH({                                                                             // 64
      class: "content-background-color border-component-color",                                                        // 65
      width: "33%"                                                                                                     // 66
    }, Blaze.View("lookup:_", function() {                                                                             // 67
      return Spacebars.mustache(view.lookup("_"), "Username");                                                         // 68
    })), "\n\t\t\t\t\t\t\t\t\t", HTML.TH({                                                                             // 69
      class: "content-background-color border-component-color",                                                        // 70
      width: "33%"                                                                                                     // 71
    }, Blaze.View("lookup:_", function() {                                                                             // 72
      return Spacebars.mustache(view.lookup("_"), "Email");                                                            // 73
    })), "\n\t\t\t\t\t\t\t\t\t", HTML.TH({                                                                             // 74
      class: "content-background-color border-component-color",                                                        // 75
      width: "33%"                                                                                                     // 76
    }, Blaze.View("lookup:_", function() {                                                                             // 77
      return Spacebars.mustache(view.lookup("_"), "Roles");                                                            // 78
    })), "\n\t\t\t\t\t\t\t\t\t", HTML.TH({                                                                             // 79
      class: "content-background-color border-component-color",                                                        // 80
      width: "33%"                                                                                                     // 81
    }, Blaze.View("lookup:_", function() {                                                                             // 82
      return Spacebars.mustache(view.lookup("_"), "Status");                                                           // 83
    })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.TBODY("\n\t\t\t\t\t\t\t\t", Blaze.Each(function() {
      return Spacebars.call(view.lookup("users"));                                                                     // 85
    }, function() {                                                                                                    // 86
      return [ "\n\t\t\t\t\t\t\t\t", HTML.TR({                                                                         // 87
        class: function() {                                                                                            // 88
          return [ "user-info row-link ", Blaze.If(function() {                                                        // 89
            return Spacebars.dataMustache(view.lookup("not"), view.lookup("active"));                                  // 90
          }, function() {                                                                                              // 91
            return "deactivated";                                                                                      // 92
          }) ];                                                                                                        // 93
        }                                                                                                              // 94
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.TD({                                                                             // 95
        class: "border-component-color"                                                                                // 96
      }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                          // 97
        class: function() {                                                                                            // 98
          return [ "user-image status-", Spacebars.mustache(view.lookup("status")) ];                                  // 99
        }                                                                                                              // 100
      }, "\n\t\t\t\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                  // 101
        return {                                                                                                       // 102
          username: Spacebars.call(view.lookup("username"))                                                            // 103
        };                                                                                                             // 104
      }, function() {                                                                                                  // 105
        return Spacebars.include(view.lookupTemplate("avatar"));                                                       // 106
      }), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t", HTML.TD({                        // 107
        class: "border-component-color"                                                                                // 108
      }, Blaze.View("lookup:name", function() {                                                                        // 109
        return Spacebars.mustache(view.lookup("name"));                                                                // 110
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.TD({                                                                           // 111
        class: "border-component-color"                                                                                // 112
      }, Blaze.View("lookup:username", function() {                                                                    // 113
        return Spacebars.mustache(view.lookup("username"));                                                            // 114
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.TD({                                                                           // 115
        class: "border-component-color"                                                                                // 116
      }, Blaze.View("lookup:emailAddress", function() {                                                                // 117
        return Spacebars.mustache(view.lookup("emailAddress"));                                                        // 118
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.TD({                                                                           // 119
        class: "border-component-color"                                                                                // 120
      }, Blaze.View("lookup:roles", function() {                                                                       // 121
        return Spacebars.mustache(view.lookup("roles"));                                                               // 122
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.TD({                                                                           // 123
        class: "border-component-color"                                                                                // 124
      }, Blaze.View("lookup:status", function() {                                                                      // 125
        return Spacebars.mustache(view.lookup("status"));                                                              // 126
      })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t" ];                                                              // 127
    }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\n\t\t\t\t\t\t", Blaze.If(function() {                              // 128
      return Spacebars.call(view.lookup("hasMore"));                                                                   // 129
    }, function() {                                                                                                    // 130
      return [ "\n\t\t\t\t\t\t\t", HTML.BUTTON({                                                                       // 131
        class: function() {                                                                                            // 132
          return [ "button secondary load-more ", Spacebars.mustache(view.lookup("isLoading")) ];                      // 133
        }                                                                                                              // 134
      }, Blaze.View("lookup:_", function() {                                                                           // 135
        return Spacebars.mustache(view.lookup("_"), "Load_more");                                                      // 136
      })), "\n\t\t\t\t\t\t" ];                                                                                         // 137
    }), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                               // 138
  }), "\n\t\t\t"), "\n\t\t"), "\n\t\t", Spacebars.With(function() {                                                    // 139
    return Spacebars.call(view.lookup("flexData"));                                                                    // 140
  }, function() {                                                                                                      // 141
    return [ "\n\t\t\t", Spacebars.include(view.lookupTemplate("flexTabBar")), "\n\t\t" ];                             // 142
  }), "\n\t");                                                                                                         // 143
}));                                                                                                                   // 144
                                                                                                                       // 145
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"adminInviteUser.coffee.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-admin/client/users/adminInviteUser.coffee.js                                                 //
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
Template.adminInviteUser.helpers({                                                                                     // 2
  isAdmin: function () {                                                                                               // 3
    return RocketChat.authz.hasRole(Meteor.userId(), 'admin');                                                         // 4
  },                                                                                                                   // 3
  inviteEmails: function () {                                                                                          // 5
    return Template.instance().inviteEmails.get();                                                                     // 6
  }                                                                                                                    // 3
});                                                                                                                    // 3
Template.adminInviteUser.events({                                                                                      // 8
  'click .send': function (e, instance) {                                                                              // 9
    var emails, rfcMailPattern, validEmails;                                                                           // 10
    emails = $('#inviteEmails').val().split(/[\s,;]/);                                                                 // 10
    rfcMailPattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    validEmails = _.compact(_.map(emails, function (email) {                                                           // 12
      if (rfcMailPattern.test(email)) {                                                                                // 12
        return email;                                                                                                  // 12
      }                                                                                                                // 20
    }));                                                                                                               // 12
                                                                                                                       //
    if (validEmails.length) {                                                                                          // 13
      return Meteor.call('sendInvitationEmail', validEmails, function (error, result) {                                // 23
        if (result) {                                                                                                  // 15
          instance.clearForm();                                                                                        // 16
          instance.inviteEmails.set(validEmails);                                                                      // 17
        }                                                                                                              // 27
                                                                                                                       //
        if (error) {                                                                                                   // 18
          return handleError(error);                                                                                   // 29
        }                                                                                                              // 30
      });                                                                                                              // 14
    } else {                                                                                                           // 13
      return toastr.error(t('Send_invitation_email_error'));                                                           // 33
    }                                                                                                                  // 34
  },                                                                                                                   // 9
  'click .cancel': function (e, instance) {                                                                            // 23
    instance.clearForm();                                                                                              // 24
    instance.inviteEmails.set([]);                                                                                     // 25
    return Template.currentData().tabBar.close();                                                                      // 39
  }                                                                                                                    // 9
});                                                                                                                    // 9
Template.adminInviteUser.onCreated(function () {                                                                       // 28
  this.inviteEmails = new ReactiveVar([]);                                                                             // 29
  return this.clearForm = function () {                                                                                // 45
    return $('#inviteEmails').val('');                                                                                 // 46
  };                                                                                                                   // 30
});                                                                                                                    // 28
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"adminUserChannels.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-admin/client/users/adminUserChannels.coffee.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.adminUserChannels.helpers({                                                                                   // 1
  type: function () {                                                                                                  // 2
    if (this.t === 'd') {                                                                                              // 3
      return 'at';                                                                                                     // 4
    } else if (this.t === 'p') {                                                                                       // 3
      return 'lock';                                                                                                   // 6
    } else {                                                                                                           // 3
      return 'hash';                                                                                                   // 8
    }                                                                                                                  // 9
  },                                                                                                                   // 2
  route: function () {                                                                                                 // 4
    switch (this.t) {                                                                                                  // 5
      case 'd':                                                                                                        // 5
        return FlowRouter.path('direct', {                                                                             // 14
          username: this.name                                                                                          // 7
        });                                                                                                            // 7
                                                                                                                       //
      case 'p':                                                                                                        // 5
        return FlowRouter.path('group', {                                                                              // 18
          name: this.name                                                                                              // 9
        });                                                                                                            // 9
                                                                                                                       //
      case 'c':                                                                                                        // 5
        return FlowRouter.path('channel', {                                                                            // 22
          name: this.name                                                                                              // 11
        });                                                                                                            // 11
    }                                                                                                                  // 5
  }                                                                                                                    // 2
});                                                                                                                    // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"adminUsers.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-admin/client/users/adminUsers.coffee.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.adminUsers.helpers({                                                                                          // 1
  isReady: function () {                                                                                               // 2
    var ref;                                                                                                           // 3
    return (ref = Template.instance().ready) != null ? ref.get() : void 0;                                             // 3
  },                                                                                                                   // 2
  users: function () {                                                                                                 // 4
    return Template.instance().users();                                                                                // 5
  },                                                                                                                   // 2
  isLoading: function () {                                                                                             // 6
    var ref;                                                                                                           // 7
                                                                                                                       //
    if (!((ref = Template.instance().ready) != null ? ref.get() : void 0)) {                                           // 7
      return 'btn-loading';                                                                                            // 7
    }                                                                                                                  // 13
  },                                                                                                                   // 2
  hasMore: function () {                                                                                               // 8
    var base, ref;                                                                                                     // 9
    return ((ref = Template.instance().limit) != null ? ref.get() : void 0) === (typeof (base = Template.instance()).users === "function" ? base.users().length : void 0);
  },                                                                                                                   // 2
  emailAddress: function () {                                                                                          // 10
    return _.map(this.emails, function (e) {                                                                           // 11
      return e.address;                                                                                                // 21
    }).join(', ');                                                                                                     // 11
  },                                                                                                                   // 2
  flexData: function () {                                                                                              // 12
    return {                                                                                                           // 13
      tabBar: Template.instance().tabBar,                                                                              // 14
      data: Template.instance().tabBarData.get()                                                                       // 15
    };                                                                                                                 // 13
  }                                                                                                                    // 2
});                                                                                                                    // 2
Template.adminUsers.onCreated(function () {                                                                            // 18
  var instance;                                                                                                        // 19
  instance = this;                                                                                                     // 19
  this.limit = new ReactiveVar(50);                                                                                    // 20
  this.filter = new ReactiveVar('');                                                                                   // 21
  this.ready = new ReactiveVar(true);                                                                                  // 22
  this.tabBar = new RocketChatTabBar();                                                                                // 24
  this.tabBar.showGroup(FlowRouter.current().route.name);                                                              // 25
  this.tabBarData = new ReactiveVar();                                                                                 // 27
  RocketChat.TabBar.addButton({                                                                                        // 29
    groups: ['admin-users'],                                                                                           // 30
    id: 'invite-user',                                                                                                 // 31
    i18nTitle: 'Invite_Users',                                                                                         // 32
    icon: 'icon-paper-plane',                                                                                          // 33
    template: 'adminInviteUser',                                                                                       // 34
    order: 1                                                                                                           // 35
  });                                                                                                                  // 29
  RocketChat.TabBar.addButton({                                                                                        // 38
    groups: ['admin-users'],                                                                                           // 39
    id: 'add-user',                                                                                                    // 40
    i18nTitle: 'Add_User',                                                                                             // 41
    icon: 'icon-plus',                                                                                                 // 42
    template: 'adminUserEdit',                                                                                         // 43
    order: 2                                                                                                           // 44
  });                                                                                                                  // 38
  RocketChat.TabBar.addButton({                                                                                        // 47
    groups: ['admin-users'],                                                                                           // 48
    id: 'admin-user-info',                                                                                             // 49
    i18nTitle: 'User_Info',                                                                                            // 50
    icon: 'icon-user',                                                                                                 // 51
    template: 'adminUserInfo',                                                                                         // 52
    order: 3                                                                                                           // 53
  });                                                                                                                  // 47
  this.autorun(function () {                                                                                           // 56
    var filter, limit, subscription;                                                                                   // 57
    filter = instance.filter.get();                                                                                    // 57
    limit = instance.limit.get();                                                                                      // 58
    subscription = instance.subscribe('fullUserData', filter, limit);                                                  // 59
    return instance.ready.set(subscription.ready());                                                                   // 70
  });                                                                                                                  // 56
  return this.users = function () {                                                                                    // 72
    var filter, filterReg, query, ref, ref1;                                                                           // 63
    filter = _.trim((ref = instance.filter) != null ? ref.get() : void 0);                                             // 63
                                                                                                                       //
    if (filter) {                                                                                                      // 64
      filterReg = new RegExp(s.escapeRegExp(filter), "i");                                                             // 65
      query = {                                                                                                        // 66
        $or: [{                                                                                                        // 66
          username: filterReg                                                                                          // 66
        }, {                                                                                                           // 66
          name: filterReg                                                                                              // 66
        }, {                                                                                                           // 66
          "emails.address": filterReg                                                                                  // 66
        }]                                                                                                             // 66
      };                                                                                                               // 66
    } else {                                                                                                           // 64
      query = {};                                                                                                      // 68
    }                                                                                                                  // 90
                                                                                                                       //
    query.type = {                                                                                                     // 70
      $in: ['user', 'bot']                                                                                             // 71
    };                                                                                                                 // 71
    return Meteor.users.find(query, {                                                                                  // 73
      limit: (ref1 = instance.limit) != null ? ref1.get() : void 0,                                                    // 73
      sort: {                                                                                                          // 73
        username: 1,                                                                                                   // 73
        name: 1                                                                                                        // 73
      }                                                                                                                // 73
    }).fetch();                                                                                                        // 73
  };                                                                                                                   // 62
});                                                                                                                    // 18
Template.adminUsers.onRendered(function () {                                                                           // 75
  return Tracker.afterFlush(function () {                                                                              // 105
    SideNav.setFlex("adminFlex");                                                                                      // 77
    return SideNav.openFlex();                                                                                         // 107
  });                                                                                                                  // 76
});                                                                                                                    // 75
Template.adminUsers.events({                                                                                           // 80
  'keydown #users-filter': function (e) {                                                                              // 81
    if (e.which === 13) {                                                                                              // 82
      e.stopPropagation();                                                                                             // 83
      return e.preventDefault();                                                                                       // 115
    }                                                                                                                  // 116
  },                                                                                                                   // 81
  'keyup #users-filter': function (e, t) {                                                                             // 86
    e.stopPropagation();                                                                                               // 87
    e.preventDefault();                                                                                                // 88
    return t.filter.set(e.currentTarget.value);                                                                        // 121
  },                                                                                                                   // 81
  'click .user-info': function (e, instance) {                                                                         // 91
    e.preventDefault();                                                                                                // 92
    instance.tabBarData.set(Meteor.users.findOne(this._id));                                                           // 94
    return instance.tabBar.open('admin-user-info');                                                                    // 126
  },                                                                                                                   // 81
  'click .info-tabs button': function (e) {                                                                            // 97
    e.preventDefault();                                                                                                // 98
    $('.info-tabs button').removeClass('active');                                                                      // 99
    $(e.currentTarget).addClass('active');                                                                             // 100
    $('.user-info-content').hide();                                                                                    // 102
    return $($(e.currentTarget).attr('href')).show();                                                                  // 133
  },                                                                                                                   // 81
  'click .load-more': function (e, t) {                                                                                // 105
    e.preventDefault();                                                                                                // 106
    e.stopPropagation();                                                                                               // 107
    return t.limit.set(t.limit.get() + 50);                                                                            // 138
  }                                                                                                                    // 81
});                                                                                                                    // 81
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"admin.coffee.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-admin/client/admin.coffee.js                                                                 //
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
var TempSettings, getDefaultSetting, setFieldValue;                                                                    // 1
TempSettings = new Mongo.Collection(null);                                                                             // 2
RocketChat.TempSettings = TempSettings;                                                                                // 3
                                                                                                                       //
getDefaultSetting = function (settingId) {                                                                             // 5
  return RocketChat.settings.collectionPrivate.findOne({                                                               // 6
    _id: settingId                                                                                                     // 6
  });                                                                                                                  // 6
};                                                                                                                     // 5
                                                                                                                       //
setFieldValue = function (settingId, value, type, editor) {                                                            // 8
  var input;                                                                                                           // 9
  input = $('.page-settings').find('[name="' + settingId + '"]');                                                      // 9
                                                                                                                       //
  switch (type) {                                                                                                      // 11
    case 'boolean':                                                                                                    // 11
      return $('.page-settings').find('[name="' + settingId + '"][value="' + Number(value) + '"]').prop('checked', true).change();
                                                                                                                       //
    case 'code':                                                                                                       // 11
      return input.next()[0].CodeMirror.setValue(value);                                                               // 22
                                                                                                                       //
    case 'color':                                                                                                      // 11
      input.parents('.horizontal').find('select[name="color-editor"]').val(editor).change();                           // 17
      input.val(value).change();                                                                                       // 18
                                                                                                                       //
      if (editor === 'color') {                                                                                        // 20
        return new jscolor(input);                                                                                     // 27
      }                                                                                                                // 28
                                                                                                                       //
      break;                                                                                                           // 16
                                                                                                                       //
    default:                                                                                                           // 11
      return input.val(value).change();                                                                                // 31
  }                                                                                                                    // 11
};                                                                                                                     // 8
                                                                                                                       //
Template.admin.onCreated(function () {                                                                                 // 26
  if (RocketChat.settings.cachedCollectionPrivate == null) {                                                           // 27
    RocketChat.settings.cachedCollectionPrivate = new RocketChat.CachedCollection({                                    // 28
      name: 'private-settings',                                                                                        // 28
      eventType: 'onLogged'                                                                                            // 28
    });                                                                                                                // 28
    RocketChat.settings.collectionPrivate = RocketChat.settings.cachedCollectionPrivate.collection;                    // 29
    RocketChat.settings.cachedCollectionPrivate.init();                                                                // 30
  }                                                                                                                    // 43
                                                                                                                       //
  this.selectedRooms = new ReactiveVar({});                                                                            // 32
  return RocketChat.settings.collectionPrivate.find().observe({                                                        // 45
    added: function (_this) {                                                                                          // 35
      return function (data) {                                                                                         // 47
        var selectedRooms;                                                                                             // 36
        selectedRooms = _this.selectedRooms.get();                                                                     // 36
                                                                                                                       //
        if (data.type === 'roomPick') {                                                                                // 37
          selectedRooms[data._id] = data.value;                                                                        // 38
                                                                                                                       //
          _this.selectedRooms.set(selectedRooms);                                                                      // 39
        }                                                                                                              // 53
                                                                                                                       //
        return TempSettings.insert(data);                                                                              // 54
      };                                                                                                               // 35
    }(this),                                                                                                           // 35
    changed: function (_this) {                                                                                        // 41
      return function (data) {                                                                                         // 58
        var selectedRooms;                                                                                             // 42
        selectedRooms = _this.selectedRooms.get();                                                                     // 42
                                                                                                                       //
        if (data.type === 'roomPick') {                                                                                // 43
          selectedRooms[data._id] = data.value;                                                                        // 44
                                                                                                                       //
          _this.selectedRooms.set(selectedRooms);                                                                      // 45
        }                                                                                                              // 64
                                                                                                                       //
        return TempSettings.update(data._id, data);                                                                    // 65
      };                                                                                                               // 41
    }(this),                                                                                                           // 41
    removed: function (_this) {                                                                                        // 47
      return function (data) {                                                                                         // 69
        var selectedRooms;                                                                                             // 48
        selectedRooms = _this.selectedRooms.get();                                                                     // 48
                                                                                                                       //
        if (data.type === 'roomPick') {                                                                                // 49
          delete selectedRooms[data._id];                                                                              // 50
                                                                                                                       //
          _this.selectedRooms.set(selectedRooms);                                                                      // 51
        }                                                                                                              // 75
                                                                                                                       //
        return TempSettings.remove(data._id);                                                                          // 76
      };                                                                                                               // 47
    }(this)                                                                                                            // 47
  });                                                                                                                  // 35
});                                                                                                                    // 26
Template.admin.onDestroyed(function () {                                                                               // 54
  return TempSettings.remove({});                                                                                      // 83
});                                                                                                                    // 54
Template.admin.helpers({                                                                                               // 57
  languages: function () {                                                                                             // 58
    var key, language, languages, result;                                                                              // 59
    languages = TAPi18n.getLanguages();                                                                                // 59
    result = [];                                                                                                       // 60
                                                                                                                       //
    for (key in meteorBabelHelpers.sanitizeForInObject(languages)) {                                                   // 61
      language = languages[key];                                                                                       // 92
      result.push(_.extend(language, {                                                                                 // 62
        key: key                                                                                                       // 62
      }));                                                                                                             // 62
    }                                                                                                                  // 61
                                                                                                                       //
    result = _.sortBy(result, 'key');                                                                                  // 63
    result.unshift({                                                                                                   // 64
      "name": "Default",                                                                                               // 65
      "en": "Default",                                                                                                 // 66
      "key": ""                                                                                                        // 67
    });                                                                                                                // 64
    return result;                                                                                                     // 69
  },                                                                                                                   // 58
  appLanguage: function (key) {                                                                                        // 71
    var ref;                                                                                                           // 72
    return ((ref = RocketChat.settings.get('Language')) != null ? ref.split('-').shift().toLowerCase() : void 0) === key;
  },                                                                                                                   // 58
  group: function () {                                                                                                 // 74
    var found, group, groupId, i, i18nDefaultQuery, item, j, key, len, len1, name1, sections, setting, settings, value;
    groupId = FlowRouter.getParam('group');                                                                            // 75
    group = RocketChat.settings.collectionPrivate.findOne({                                                            // 76
      _id: groupId,                                                                                                    // 76
      type: 'group'                                                                                                    // 76
    });                                                                                                                // 76
                                                                                                                       //
    if (!group) {                                                                                                      // 78
      return;                                                                                                          // 79
    }                                                                                                                  // 118
                                                                                                                       //
    settings = RocketChat.settings.collectionPrivate.find({                                                            // 81
      group: groupId                                                                                                   // 81
    }, {                                                                                                               // 81
      sort: {                                                                                                          // 81
        section: 1,                                                                                                    // 81
        sorter: 1,                                                                                                     // 81
        i18nLabel: 1                                                                                                   // 81
      }                                                                                                                // 81
    }).fetch();                                                                                                        // 81
    sections = {};                                                                                                     // 83
                                                                                                                       //
    for (i = 0, len = settings.length; i < len; i++) {                                                                 // 84
      setting = settings[i];                                                                                           // 130
                                                                                                                       //
      if (setting.i18nDefaultQuery != null) {                                                                          // 85
        if (_.isString(setting.i18nDefaultQuery)) {                                                                    // 86
          i18nDefaultQuery = JSON.parse(setting.i18nDefaultQuery);                                                     // 87
        } else {                                                                                                       // 86
          i18nDefaultQuery = setting.i18nDefaultQuery;                                                                 // 89
        }                                                                                                              // 136
                                                                                                                       //
        if (!_.isArray(i18nDefaultQuery)) {                                                                            // 91
          i18nDefaultQuery = [i18nDefaultQuery];                                                                       // 92
        }                                                                                                              // 139
                                                                                                                       //
        found = 0;                                                                                                     // 94
                                                                                                                       //
        for (j = 0, len1 = i18nDefaultQuery.length; j < len1; j++) {                                                   // 95
          item = i18nDefaultQuery[j];                                                                                  // 142
                                                                                                                       //
          if (RocketChat.settings.collectionPrivate.findOne(item) != null) {                                           // 96
            setting.value = TAPi18n.__(setting._id + '_Default');                                                      // 97
          }                                                                                                            // 145
        }                                                                                                              // 85
      }                                                                                                                // 147
                                                                                                                       //
      if (sections[name1 = setting.section || ''] == null) {                                                           // 148
        sections[name1] = [];                                                                                          // 99
      }                                                                                                                // 150
                                                                                                                       //
      sections[setting.section || ''].push(setting);                                                                   // 100
    }                                                                                                                  // 84
                                                                                                                       //
    group.sections = [];                                                                                               // 102
                                                                                                                       //
    for (key in meteorBabelHelpers.sanitizeForInObject(sections)) {                                                    // 103
      value = sections[key];                                                                                           // 155
      group.sections.push({                                                                                            // 104
        section: key,                                                                                                  // 105
        settings: value                                                                                                // 106
      });                                                                                                              // 105
    }                                                                                                                  // 103
                                                                                                                       //
    return group;                                                                                                      // 108
  },                                                                                                                   // 58
  i18nDefaultValue: function () {                                                                                      // 110
    return TAPi18n.__(this._id + '_Default');                                                                          // 111
  },                                                                                                                   // 58
  isDisabled: function () {                                                                                            // 113
    var enableQuery, found, i, item, len;                                                                              // 114
                                                                                                                       //
    if (this.blocked) {                                                                                                // 114
      return {                                                                                                         // 115
        disabled: 'disabled'                                                                                           // 115
      };                                                                                                               // 115
    }                                                                                                                  // 172
                                                                                                                       //
    if (this.enableQuery == null) {                                                                                    // 117
      return {};                                                                                                       // 118
    }                                                                                                                  // 175
                                                                                                                       //
    if (_.isString(this.enableQuery)) {                                                                                // 120
      enableQuery = JSON.parse(this.enableQuery);                                                                      // 121
    } else {                                                                                                           // 120
      enableQuery = this.enableQuery;                                                                                  // 123
    }                                                                                                                  // 180
                                                                                                                       //
    if (!_.isArray(enableQuery)) {                                                                                     // 125
      enableQuery = [enableQuery];                                                                                     // 126
    }                                                                                                                  // 183
                                                                                                                       //
    found = 0;                                                                                                         // 128
                                                                                                                       //
    for (i = 0, len = enableQuery.length; i < len; i++) {                                                              // 129
      item = enableQuery[i];                                                                                           // 186
                                                                                                                       //
      if (TempSettings.findOne(item) != null) {                                                                        // 130
        found++;                                                                                                       // 131
      }                                                                                                                // 189
    }                                                                                                                  // 129
                                                                                                                       //
    if (found === enableQuery.length) {                                                                                // 133
      return {};                                                                                                       // 192
    } else {                                                                                                           // 133
      return {                                                                                                         // 194
        disabled: 'disabled'                                                                                           // 133
      };                                                                                                               // 133
    }                                                                                                                  // 197
  },                                                                                                                   // 58
  isReadonly: function () {                                                                                            // 135
    if (this.readonly === true) {                                                                                      // 136
      return {                                                                                                         // 137
        readonly: 'readonly'                                                                                           // 137
      };                                                                                                               // 137
    }                                                                                                                  // 204
  },                                                                                                                   // 58
  hasChanges: function (section) {                                                                                     // 139
    var group, query;                                                                                                  // 140
    group = FlowRouter.getParam('group');                                                                              // 140
    query = {                                                                                                          // 142
      group: group,                                                                                                    // 143
      changed: true                                                                                                    // 144
    };                                                                                                                 // 143
                                                                                                                       //
    if (section != null) {                                                                                             // 146
      if (section === '') {                                                                                            // 147
        query.$or = [{                                                                                                 // 148
          section: ''                                                                                                  // 149
        }, {                                                                                                           // 149
          section: {                                                                                                   // 150
            $exists: false                                                                                             // 150
          }                                                                                                            // 150
        }];                                                                                                            // 150
      } else {                                                                                                         // 147
        query.section = section;                                                                                       // 153
      }                                                                                                                // 146
    }                                                                                                                  // 227
                                                                                                                       //
    return TempSettings.find(query).count() > 0;                                                                       // 155
  },                                                                                                                   // 58
  isSettingChanged: function (id) {                                                                                    // 157
    return TempSettings.findOne({                                                                                      // 158
      _id: id                                                                                                          // 158
    }, {                                                                                                               // 158
      fields: {                                                                                                        // 158
        changed: 1                                                                                                     // 158
      }                                                                                                                // 158
    }).changed;                                                                                                        // 158
  },                                                                                                                   // 58
  translateSection: function (section) {                                                                               // 160
    if (section.indexOf(':') > -1) {                                                                                   // 161
      return section;                                                                                                  // 162
    }                                                                                                                  // 242
                                                                                                                       //
    return t(section);                                                                                                 // 164
  },                                                                                                                   // 58
  label: function () {                                                                                                 // 166
    var label;                                                                                                         // 167
    label = this.i18nLabel || this._id;                                                                                // 167
                                                                                                                       //
    if (label) {                                                                                                       // 168
      return TAPi18n.__(label);                                                                                        // 168
    }                                                                                                                  // 250
  },                                                                                                                   // 58
  description: function () {                                                                                           // 170
    var description;                                                                                                   // 171
                                                                                                                       //
    if (this.i18nDescription) {                                                                                        // 171
      description = TAPi18n.__(this.i18nDescription);                                                                  // 171
    }                                                                                                                  // 256
                                                                                                                       //
    if (description != null && description !== this.i18nDescription) {                                                 // 172
      return description;                                                                                              // 173
    }                                                                                                                  // 259
  },                                                                                                                   // 58
  sectionIsCustomOAuth: function (section) {                                                                           // 175
    return (/^Custom OAuth:\s.+/.test(section)                                                                         // 176
    );                                                                                                                 // 176
  },                                                                                                                   // 58
  callbackURL: function (section) {                                                                                    // 178
    var id;                                                                                                            // 179
    id = s.strRight(section, 'Custom OAuth: ').toLowerCase();                                                          // 179
    return Meteor.absoluteUrl('_oauth/' + id);                                                                         // 180
  },                                                                                                                   // 58
  relativeUrl: function (url) {                                                                                        // 182
    return Meteor.absoluteUrl(url);                                                                                    // 183
  },                                                                                                                   // 58
  selectedOption: function (_id, val) {                                                                                // 185
    var ref;                                                                                                           // 186
    return ((ref = RocketChat.settings.collectionPrivate.findOne({                                                     // 186
      _id: _id                                                                                                         // 275
    })) != null ? ref.value : void 0) === val;                                                                         // 186
  },                                                                                                                   // 58
  random: function () {                                                                                                // 188
    return Random.id();                                                                                                // 189
  },                                                                                                                   // 58
  getEditorOptions: function (readOnly) {                                                                              // 191
    if (readOnly == null) {                                                                                            // 282
      readOnly = false;                                                                                                // 191
    }                                                                                                                  // 284
                                                                                                                       //
    return {                                                                                                           // 192
      lineNumbers: true,                                                                                               // 193
      mode: this.code || "javascript",                                                                                 // 194
      gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],                                                    // 195
      foldGutter: true,                                                                                                // 199
      matchBrackets: true,                                                                                             // 200
      autoCloseBrackets: true,                                                                                         // 201
      matchTags: true,                                                                                                 // 202
      showTrailingSpace: true,                                                                                         // 203
      highlightSelectionMatches: true,                                                                                 // 204
      readOnly: readOnly                                                                                               // 205
    };                                                                                                                 // 193
  },                                                                                                                   // 58
  setEditorOnBlur: function (_id) {                                                                                    // 207
    Meteor.defer(function () {                                                                                         // 208
      var codeMirror, onChange, onChangeDelayed;                                                                       // 209
                                                                                                                       //
      if (!$('.code-mirror-box[data-editor-id="' + _id + '"] .CodeMirror')[0]) {                                       // 209
        return;                                                                                                        // 209
      }                                                                                                                // 303
                                                                                                                       //
      codeMirror = $('.code-mirror-box[data-editor-id="' + _id + '"] .CodeMirror')[0].CodeMirror;                      // 211
                                                                                                                       //
      if (codeMirror.changeAdded === true) {                                                                           // 212
        return;                                                                                                        // 213
      }                                                                                                                // 307
                                                                                                                       //
      onChange = function () {                                                                                         // 215
        var value;                                                                                                     // 216
        value = codeMirror.getValue();                                                                                 // 216
        return TempSettings.update({                                                                                   // 311
          _id: _id                                                                                                     // 217
        }, {                                                                                                           // 217
          $set: {                                                                                                      // 218
            value: value,                                                                                              // 219
            changed: RocketChat.settings.collectionPrivate.findOne(_id).value !== value                                // 220
          }                                                                                                            // 219
        });                                                                                                            // 218
      };                                                                                                               // 215
                                                                                                                       //
      onChangeDelayed = _.debounce(onChange, 500);                                                                     // 222
      codeMirror.on('change', onChangeDelayed);                                                                        // 224
      return codeMirror.changeAdded = true;                                                                            // 322
    });                                                                                                                // 208
  },                                                                                                                   // 58
  assetAccept: function (fileConstraints) {                                                                            // 229
    var ref;                                                                                                           // 230
                                                                                                                       //
    if (((ref = fileConstraints.extensions) != null ? ref.length : void 0) > 0) {                                      // 230
      return '.' + fileConstraints.extensions.join(', .');                                                             // 231
    }                                                                                                                  // 329
  },                                                                                                                   // 58
  autocompleteRoom: function () {                                                                                      // 233
    return {                                                                                                           // 234
      limit: 10,                                                                                                       // 235
      rules: [{                                                                                                        // 237
        collection: 'CachedChannelList',                                                                               // 240
        subscription: 'channelAndPrivateAutocomplete',                                                                 // 241
        field: 'name',                                                                                                 // 242
        template: Template.roomSearch,                                                                                 // 243
        noMatchTemplate: Template.roomSearchEmpty,                                                                     // 244
        matchAll: true,                                                                                                // 245
        selector: function (match) {                                                                                   // 246
          return {                                                                                                     // 247
            name: match                                                                                                // 247
          };                                                                                                           // 247
        },                                                                                                             // 238
        sort: 'name'                                                                                                   // 248
      }]                                                                                                               // 238
    };                                                                                                                 // 234
  },                                                                                                                   // 58
  selectedRooms: function () {                                                                                         // 253
    return Template.instance().selectedRooms.get()[this._id] || [];                                                    // 254
  },                                                                                                                   // 58
  getColorVariable: function (color) {                                                                                 // 256
    return color.replace(/theme-color-/, '@');                                                                         // 257
  },                                                                                                                   // 58
  showResetButton: function () {                                                                                       // 259
    var setting;                                                                                                       // 260
    setting = TempSettings.findOne({                                                                                   // 260
      _id: this._id                                                                                                    // 260
    }, {                                                                                                               // 260
      fields: {                                                                                                        // 260
        value: 1,                                                                                                      // 260
        packageValue: 1                                                                                                // 260
      }                                                                                                                // 260
    });                                                                                                                // 260
    return this.type !== 'asset' && setting.value !== setting.packageValue && !this.blocked;                           // 261
  }                                                                                                                    // 58
});                                                                                                                    // 58
Template.admin.events({                                                                                                // 263
  "change .input-monitor, keyup .input-monitor": _.throttle(function (e, t) {                                          // 264
    var value;                                                                                                         // 265
    value = _.trim($(e.target).val());                                                                                 // 265
                                                                                                                       //
    switch (this.type) {                                                                                               // 267
      case 'int':                                                                                                      // 267
        value = parseInt(value);                                                                                       // 269
        break;                                                                                                         // 268
                                                                                                                       //
      case 'boolean':                                                                                                  // 267
        value = value === "1";                                                                                         // 271
    }                                                                                                                  // 267
                                                                                                                       //
    return TempSettings.update({                                                                                       // 383
      _id: this._id                                                                                                    // 273
    }, {                                                                                                               // 273
      $set: {                                                                                                          // 274
        value: value,                                                                                                  // 275
        changed: RocketChat.settings.collectionPrivate.findOne(this._id).value !== value                               // 276
      }                                                                                                                // 275
    });                                                                                                                // 274
  }, 500),                                                                                                             // 264
  "change select[name=color-editor]": function (e, t) {                                                                // 279
    var value;                                                                                                         // 280
    value = _.trim($(e.target).val());                                                                                 // 280
    return TempSettings.update({                                                                                       // 395
      _id: this._id                                                                                                    // 281
    }, {                                                                                                               // 281
      $set: {                                                                                                          // 282
        editor: value                                                                                                  // 283
      }                                                                                                                // 283
    });                                                                                                                // 282
  },                                                                                                                   // 264
  "click .submit .discard": function () {                                                                              // 285
    var group, query, settings;                                                                                        // 286
    group = FlowRouter.getParam('group');                                                                              // 286
    query = {                                                                                                          // 288
      group: group,                                                                                                    // 289
      changed: true                                                                                                    // 290
    };                                                                                                                 // 289
    settings = TempSettings.find(query, {                                                                              // 292
      fields: {                                                                                                        // 292
        _id: 1,                                                                                                        // 292
        value: 1,                                                                                                      // 292
        packageValue: 1                                                                                                // 292
      }                                                                                                                // 292
    }).fetch();                                                                                                        // 292
    return settings.forEach(function (setting) {                                                                       // 417
      var oldSetting;                                                                                                  // 295
      oldSetting = RocketChat.settings.collectionPrivate.findOne({                                                     // 295
        _id: setting._id                                                                                               // 295
      }, {                                                                                                             // 295
        fields: {                                                                                                      // 295
          value: 1,                                                                                                    // 295
          type: 1,                                                                                                     // 295
          editor: 1                                                                                                    // 295
        }                                                                                                              // 295
      });                                                                                                              // 295
      return setFieldValue(setting._id, oldSetting.value, oldSetting.type, oldSetting.editor);                         // 428
    });                                                                                                                // 294
  },                                                                                                                   // 264
  "click .reset-setting": function (e, t) {                                                                            // 299
    var defaultValue, settingId;                                                                                       // 300
    e.preventDefault();                                                                                                // 300
    settingId = $(e.target).data('setting');                                                                           // 301
                                                                                                                       //
    if (typeof settingId === 'undefined') {                                                                            // 302
      settingId = $(e.target).parent().data('setting');                                                                // 302
    }                                                                                                                  // 437
                                                                                                                       //
    defaultValue = getDefaultSetting(settingId);                                                                       // 304
    return setFieldValue(settingId, defaultValue.packageValue, defaultValue.type, defaultValue.editor);                // 439
  },                                                                                                                   // 264
  "click .reset-group": function (e, t) {                                                                              // 308
    var group, section, settings;                                                                                      // 309
    e.preventDefault();                                                                                                // 309
    group = FlowRouter.getParam('group');                                                                              // 310
    section = $(e.target).data('section');                                                                             // 311
                                                                                                                       //
    if (section === "") {                                                                                              // 313
      settings = TempSettings.find({                                                                                   // 314
        group: group,                                                                                                  // 314
        section: {                                                                                                     // 314
          $exists: false                                                                                               // 314
        }                                                                                                              // 314
      }, {                                                                                                             // 314
        fields: {                                                                                                      // 314
          _id: 1                                                                                                       // 314
        }                                                                                                              // 314
      }).fetch();                                                                                                      // 314
    } else {                                                                                                           // 313
      settings = TempSettings.find({                                                                                   // 316
        group: group,                                                                                                  // 316
        section: section                                                                                               // 316
      }, {                                                                                                             // 316
        fields: {                                                                                                      // 316
          _id: 1                                                                                                       // 316
        }                                                                                                              // 316
      }).fetch();                                                                                                      // 316
    }                                                                                                                  // 466
                                                                                                                       //
    return settings.forEach(function (setting) {                                                                       // 467
      var defaultValue;                                                                                                // 319
      defaultValue = getDefaultSetting(setting._id);                                                                   // 319
      setFieldValue(setting._id, defaultValue.packageValue, defaultValue.type, defaultValue.editor);                   // 320
      return TempSettings.update({                                                                                     // 471
        _id: setting._id                                                                                               // 322
      }, {                                                                                                             // 322
        $set: {                                                                                                        // 323
          value: defaultValue.packageValue,                                                                            // 324
          changed: RocketChat.settings.collectionPrivate.findOne(setting._id).value !== defaultValue.packageValue      // 325
        }                                                                                                              // 324
      });                                                                                                              // 323
    });                                                                                                                // 318
  },                                                                                                                   // 264
  "click .submit .save": function (e, t) {                                                                             // 327
    var group, query, settings;                                                                                        // 328
    group = FlowRouter.getParam('group');                                                                              // 328
    query = {                                                                                                          // 330
      group: group,                                                                                                    // 331
      changed: true                                                                                                    // 332
    };                                                                                                                 // 331
    settings = TempSettings.find(query, {                                                                              // 334
      fields: {                                                                                                        // 334
        _id: 1,                                                                                                        // 334
        value: 1,                                                                                                      // 334
        editor: 1                                                                                                      // 334
      }                                                                                                                // 334
    }).fetch();                                                                                                        // 334
                                                                                                                       //
    if (!_.isEmpty(settings)) {                                                                                        // 336
      return RocketChat.settings.batchSet(settings, function (err, success) {                                          // 496
        if (err) {                                                                                                     // 338
          return handleError(err);                                                                                     // 338
        }                                                                                                              // 499
                                                                                                                       //
        TempSettings.update({                                                                                          // 339
          changed: true                                                                                                // 339
        }, {                                                                                                           // 339
          $unset: {                                                                                                    // 339
            changed: 1                                                                                                 // 339
          }                                                                                                            // 339
        });                                                                                                            // 339
        return toastr.success(TAPi18n.__('Settings_updated'));                                                         // 507
      });                                                                                                              // 337
    }                                                                                                                  // 509
  },                                                                                                                   // 264
  "click .submit .refresh-clients": function (e, t) {                                                                  // 342
    return Meteor.call('refreshClients', function () {                                                                 // 512
      return toastr.success(TAPi18n.__('Clients_will_refresh_in_a_few_seconds'));                                      // 513
    });                                                                                                                // 343
  },                                                                                                                   // 264
  "click .submit .add-custom-oauth": function (e, t) {                                                                 // 346
    var config;                                                                                                        // 347
    config = {                                                                                                         // 347
      title: TAPi18n.__('Add_custom_oauth'),                                                                           // 348
      text: TAPi18n.__('Give_a_unique_name_for_the_custom_oauth'),                                                     // 349
      type: "input",                                                                                                   // 350
      showCancelButton: true,                                                                                          // 351
      closeOnConfirm: true,                                                                                            // 352
      inputPlaceholder: TAPi18n.__('Custom_oauth_unique_name')                                                         // 353
    };                                                                                                                 // 348
    return swal(config, function (inputValue) {                                                                        // 526
      if (inputValue === false) {                                                                                      // 356
        return false;                                                                                                  // 357
      }                                                                                                                // 529
                                                                                                                       //
      if (inputValue === "") {                                                                                         // 359
        swal.showInputError(TAPi18n.__('Name_cant_be_empty'));                                                         // 360
        return false;                                                                                                  // 361
      }                                                                                                                // 533
                                                                                                                       //
      return Meteor.call('addOAuthService', inputValue, function (err) {                                               // 534
        if (err) {                                                                                                     // 364
          return handleError(err);                                                                                     // 536
        }                                                                                                              // 537
      });                                                                                                              // 363
    });                                                                                                                // 355
  },                                                                                                                   // 264
  "click .submit .refresh-oauth": function (e, t) {                                                                    // 367
    toastr.info(TAPi18n.__('Refreshing'));                                                                             // 368
    return Meteor.call('refreshOAuthService', function (err) {                                                         // 543
      if (err) {                                                                                                       // 370
        return handleError(err);                                                                                       // 545
      } else {                                                                                                         // 370
        return toastr.success(TAPi18n.__('Done'));                                                                     // 547
      }                                                                                                                // 548
    });                                                                                                                // 369
  },                                                                                                                   // 264
  "click .submit .remove-custom-oauth": function (e, t) {                                                              // 375
    var config, name;                                                                                                  // 376
    name = this.section.replace('Custom OAuth: ', '');                                                                 // 376
    config = {                                                                                                         // 377
      title: TAPi18n.__('Are_you_sure'),                                                                               // 378
      type: "input",                                                                                                   // 379
      type: 'warning',                                                                                                 // 380
      showCancelButton: true,                                                                                          // 381
      confirmButtonColor: '#DD6B55',                                                                                   // 382
      confirmButtonText: TAPi18n.__('Yes_delete_it'),                                                                  // 383
      cancelButtonText: TAPi18n.__('Cancel'),                                                                          // 384
      closeOnConfirm: true                                                                                             // 385
    };                                                                                                                 // 378
    return swal(config, function () {                                                                                  // 564
      return Meteor.call('removeOAuthService', name);                                                                  // 565
    });                                                                                                                // 387
  },                                                                                                                   // 264
  "click .delete-asset": function () {                                                                                 // 390
    return Meteor.call('unsetAsset', this.asset);                                                                      // 569
  },                                                                                                                   // 264
  "change input[type=file]": function (ev) {                                                                           // 393
    var blob, e, files, i, len, reader, ref, results;                                                                  // 394
    e = ev.originalEvent || ev;                                                                                        // 394
    files = e.target.files;                                                                                            // 395
                                                                                                                       //
    if (!files || files.length === 0) {                                                                                // 396
      files = ((ref = e.dataTransfer) != null ? ref.files : void 0) || [];                                             // 397
    }                                                                                                                  // 577
                                                                                                                       //
    results = [];                                                                                                      // 399
                                                                                                                       //
    for (i = 0, len = files.length; i < len; i++) {                                                                    // 579
      blob = files[i];                                                                                                 // 580
      toastr.info(TAPi18n.__('Uploading_file'));                                                                       // 400
      reader = new FileReader();                                                                                       // 406
      reader.readAsBinaryString(blob);                                                                                 // 407
      results.push(reader.onloadend = function (_this) {                                                               // 584
        return function () {                                                                                           // 585
          return Meteor.call('setAsset', reader.result, blob.type, _this.asset, function (err, data) {                 // 586
            if (err != null) {                                                                                         // 410
              handleError(err);                                                                                        // 411
              console.log(err);                                                                                        // 413
              return;                                                                                                  // 414
            }                                                                                                          // 591
                                                                                                                       //
            return toastr.success(TAPi18n.__('File_uploaded'));                                                        // 592
          });                                                                                                          // 409
        };                                                                                                             // 408
      }(this));                                                                                                        // 408
    }                                                                                                                  // 399
                                                                                                                       //
    return results;                                                                                                    // 597
  },                                                                                                                   // 264
  "click .expand": function (e) {                                                                                      // 418
    $(e.currentTarget).closest('.section').removeClass('section-collapsed');                                           // 419
    $(e.currentTarget).closest('button').removeClass('expand').addClass('collapse').find('span').text(TAPi18n.__("Collapse"));
    return $('.CodeMirror').each(function (index, codeMirror) {                                                        // 602
      return codeMirror.CodeMirror.refresh();                                                                          // 603
    });                                                                                                                // 421
  },                                                                                                                   // 264
  "click .collapse": function (e) {                                                                                    // 424
    $(e.currentTarget).closest('.section').addClass('section-collapsed');                                              // 425
    return $(e.currentTarget).closest('button').addClass('expand').removeClass('collapse').find('span').text(TAPi18n.__("Expand"));
  },                                                                                                                   // 264
  "click button.action": function (e) {                                                                                // 428
    if (this.type !== 'action') {                                                                                      // 429
      return;                                                                                                          // 430
    }                                                                                                                  // 613
                                                                                                                       //
    return Meteor.call(this.value, function (err, data) {                                                              // 614
      var args;                                                                                                        // 433
                                                                                                                       //
      if (err != null) {                                                                                               // 433
        err.details = _.extend(err.details || {}, {                                                                    // 434
          errorTitle: 'Error'                                                                                          // 434
        });                                                                                                            // 434
        handleError(err);                                                                                              // 435
        return;                                                                                                        // 436
      }                                                                                                                // 622
                                                                                                                       //
      args = [data.message].concat(data.params);                                                                       // 438
      return toastr.success(TAPi18n.__.apply(TAPi18n, args), TAPi18n.__('Success'));                                   // 624
    });                                                                                                                // 432
  },                                                                                                                   // 264
  "click .button-fullscreen": function () {                                                                            // 442
    var codeMirrorBox;                                                                                                 // 443
    codeMirrorBox = $('.code-mirror-box[data-editor-id="' + this._id + '"]');                                          // 443
    codeMirrorBox.addClass('code-mirror-box-fullscreen content-background-color');                                     // 444
    return codeMirrorBox.find('.CodeMirror')[0].CodeMirror.refresh();                                                  // 631
  },                                                                                                                   // 264
  "click .button-restore": function () {                                                                               // 447
    var codeMirrorBox;                                                                                                 // 448
    codeMirrorBox = $('.code-mirror-box[data-editor-id="' + this._id + '"]');                                          // 448
    codeMirrorBox.removeClass('code-mirror-box-fullscreen content-background-color');                                  // 449
    return codeMirrorBox.find('.CodeMirror')[0].CodeMirror.refresh();                                                  // 637
  },                                                                                                                   // 264
  'autocompleteselect .autocomplete': function (event, instance, doc) {                                                // 452
    var selectedRooms, value;                                                                                          // 453
    selectedRooms = instance.selectedRooms.get();                                                                      // 453
    selectedRooms[this.id] = (selectedRooms[this.id] || []).concat(doc);                                               // 454
    instance.selectedRooms.set(selectedRooms);                                                                         // 455
    value = selectedRooms[this.id];                                                                                    // 456
    TempSettings.update({                                                                                              // 457
      _id: this.id                                                                                                     // 457
    }, {                                                                                                               // 457
      $set: {                                                                                                          // 458
        value: value,                                                                                                  // 459
        changed: RocketChat.settings.collectionPrivate.findOne(this.id).value !== value                                // 460
      }                                                                                                                // 459
    });                                                                                                                // 458
    event.currentTarget.value = '';                                                                                    // 461
    return event.currentTarget.focus();                                                                                // 654
  },                                                                                                                   // 264
  'click .remove-room': function (event, instance) {                                                                   // 464
    var docId, selectedRooms, settingId, value;                                                                        // 465
    docId = this._id;                                                                                                  // 465
    settingId = event.currentTarget.getAttribute('data-setting');                                                      // 466
    selectedRooms = instance.selectedRooms.get();                                                                      // 467
    selectedRooms[settingId] = _.reject(selectedRooms[settingId] || [], function (setting) {                           // 468
      return setting._id === docId;                                                                                    // 662
    });                                                                                                                // 468
    instance.selectedRooms.set(selectedRooms);                                                                         // 469
    value = selectedRooms[settingId];                                                                                  // 470
    return TempSettings.update({                                                                                       // 666
      _id: settingId                                                                                                   // 471
    }, {                                                                                                               // 471
      $set: {                                                                                                          // 472
        value: value,                                                                                                  // 473
        changed: RocketChat.settings.collectionPrivate.findOne(settingId).value !== value                              // 474
      }                                                                                                                // 473
    });                                                                                                                // 472
  }                                                                                                                    // 264
});                                                                                                                    // 264
Template.admin.onRendered(function () {                                                                                // 476
  Tracker.afterFlush(function () {                                                                                     // 477
    SideNav.setFlex("adminFlex");                                                                                      // 478
    return SideNav.openFlex();                                                                                         // 680
  });                                                                                                                  // 477
  return Tracker.autorun(function () {                                                                                 // 682
    var hasColor;                                                                                                      // 482
    hasColor = TempSettings.findOne({                                                                                  // 482
      group: FlowRouter.getParam('group'),                                                                             // 482
      type: 'color'                                                                                                    // 482
    }, {                                                                                                               // 482
      fields: {                                                                                                        // 482
        _id: 1                                                                                                         // 482
      }                                                                                                                // 482
    });                                                                                                                // 482
                                                                                                                       //
    if (hasColor) {                                                                                                    // 483
      return Meteor.setTimeout(function () {                                                                           // 693
        return $('.colorpicker-input').each(function (index, el) {                                                     // 694
          return new jscolor(el);                                                                                      // 695
        });                                                                                                            // 485
      }, 400);                                                                                                         // 484
    }                                                                                                                  // 698
  });                                                                                                                  // 481
});                                                                                                                    // 476
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"adminFlex.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-admin/client/adminFlex.coffee.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var label;                                                                                                             // 1
Template.adminFlex.onCreated(function () {                                                                             // 1
  this.settingsFilter = new ReactiveVar('');                                                                           // 2
                                                                                                                       //
  if (RocketChat.settings.cachedCollectionPrivate == null) {                                                           // 4
    RocketChat.settings.cachedCollectionPrivate = new RocketChat.CachedCollection({                                    // 5
      name: 'private-settings',                                                                                        // 5
      eventType: 'onLogged'                                                                                            // 5
    });                                                                                                                // 5
    RocketChat.settings.collectionPrivate = RocketChat.settings.cachedCollectionPrivate.collection;                    // 6
    return RocketChat.settings.cachedCollectionPrivate.init();                                                         // 11
  }                                                                                                                    // 12
});                                                                                                                    // 1
                                                                                                                       //
label = function () {                                                                                                  // 9
  return TAPi18n.__(this.i18nLabel || this._id);                                                                       // 10
};                                                                                                                     // 9
                                                                                                                       //
Template.adminFlex.helpers({                                                                                           // 12
  groups: function () {                                                                                                // 13
    var filter, filterRegex, groups, query, records;                                                                   // 14
    filter = Template.instance().settingsFilter.get();                                                                 // 14
    query = {                                                                                                          // 16
      type: 'group'                                                                                                    // 17
    };                                                                                                                 // 17
                                                                                                                       //
    if (filter) {                                                                                                      // 19
      filterRegex = new RegExp(_.escapeRegExp(filter), 'i');                                                           // 20
      records = RocketChat.settings.collectionPrivate.find().fetch();                                                  // 22
      groups = [];                                                                                                     // 23
      records = records.forEach(function (record) {                                                                    // 24
        if (filterRegex.test(TAPi18n.__(record.i18nLabel || record._id))) {                                            // 25
          return groups.push(record.group || record._id);                                                              // 32
        }                                                                                                              // 33
      });                                                                                                              // 24
      groups = _.unique(groups);                                                                                       // 28
                                                                                                                       //
      if (groups.length > 0) {                                                                                         // 29
        query._id = {                                                                                                  // 30
          $in: groups                                                                                                  // 31
        };                                                                                                             // 31
      }                                                                                                                // 19
    }                                                                                                                  // 41
                                                                                                                       //
    return RocketChat.settings.collectionPrivate.find(query).fetch().map(function (_this) {                            // 42
      return function (el) {                                                                                           // 43
        el.label = label.apply(el);                                                                                    // 34
        return el;                                                                                                     // 35
      };                                                                                                               // 33
    }(this)).sort(function (_this) {                                                                                   // 33
      return function (a, b) {                                                                                         // 48
        if (a.label.toLowerCase() >= b.label.toLowerCase()) {                                                          // 37
          return 1;                                                                                                    // 50
        } else {                                                                                                       // 37
          return -1;                                                                                                   // 52
        }                                                                                                              // 53
      };                                                                                                               // 36
    }(this));                                                                                                          // 36
  },                                                                                                                   // 13
  label: label,                                                                                                        // 39
  adminBoxOptions: function () {                                                                                       // 41
    return RocketChat.AdminBox.getOptions();                                                                           // 42
  }                                                                                                                    // 13
});                                                                                                                    // 13
Template.adminFlex.events({                                                                                            // 45
  'mouseenter header': function () {                                                                                   // 46
    return SideNav.overArrow();                                                                                        // 65
  },                                                                                                                   // 46
  'mouseleave header': function () {                                                                                   // 49
    return SideNav.leaveArrow();                                                                                       // 68
  },                                                                                                                   // 46
  'click header': function () {                                                                                        // 52
    return SideNav.closeFlex();                                                                                        // 71
  },                                                                                                                   // 46
  'click .cancel-settings': function () {                                                                              // 55
    return SideNav.closeFlex();                                                                                        // 74
  },                                                                                                                   // 46
  'click .admin-link': function () {                                                                                   // 58
    return menu.close();                                                                                               // 77
  },                                                                                                                   // 46
  'keyup [name=settings-search]': function (e, t) {                                                                    // 61
    return t.settingsFilter.set(e.target.value);                                                                       // 80
  }                                                                                                                    // 46
});                                                                                                                    // 46
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"adminInfo.coffee.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-admin/client/adminInfo.coffee.js                                                             //
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
Template.adminInfo.helpers({                                                                                           // 3
  isReady: function () {                                                                                               // 4
    return Template.instance().ready.get();                                                                            // 5
  },                                                                                                                   // 4
  statistics: function () {                                                                                            // 6
    return Template.instance().statistics.get();                                                                       // 7
  },                                                                                                                   // 4
  instances: function () {                                                                                             // 8
    return Template.instance().instances.get();                                                                        // 9
  },                                                                                                                   // 4
  inGB: function (size) {                                                                                              // 10
    if (size > 1073741824) {                                                                                           // 11
      return _.numberFormat(size / 1024 / 1024 / 1024, 2) + ' GB';                                                     // 12
    }                                                                                                                  // 16
                                                                                                                       //
    return _.numberFormat(size / 1024 / 1024, 2) + ' MB';                                                              // 13
  },                                                                                                                   // 4
  humanReadableTime: function (time) {                                                                                 // 14
    var days, hours, minutes, out, seconds;                                                                            // 15
    days = Math.floor(time / 86400);                                                                                   // 15
    hours = Math.floor(time % 86400 / 3600);                                                                           // 16
    minutes = Math.floor(time % 86400 % 3600 / 60);                                                                    // 17
    seconds = Math.floor(time % 86400 % 3600 % 60);                                                                    // 18
    out = "";                                                                                                          // 19
                                                                                                                       //
    if (days > 0) {                                                                                                    // 20
      out += days + " " + TAPi18n.__('days') + ", ";                                                                   // 21
    }                                                                                                                  // 28
                                                                                                                       //
    if (hours > 0) {                                                                                                   // 22
      out += hours + " " + TAPi18n.__('hours') + ", ";                                                                 // 23
    }                                                                                                                  // 31
                                                                                                                       //
    if (minutes > 0) {                                                                                                 // 24
      out += minutes + " " + TAPi18n.__('minutes') + ", ";                                                             // 25
    }                                                                                                                  // 34
                                                                                                                       //
    if (seconds > 0) {                                                                                                 // 26
      out += seconds + " " + TAPi18n.__('seconds');                                                                    // 27
    }                                                                                                                  // 37
                                                                                                                       //
    return out;                                                                                                        // 28
  },                                                                                                                   // 4
  formatDate: function (date) {                                                                                        // 29
    if (date) {                                                                                                        // 30
      return moment(date).format("LLL");                                                                               // 31
    }                                                                                                                  // 43
  },                                                                                                                   // 4
  numFormat: function (number) {                                                                                       // 32
    return _.numberFormat(number, 2);                                                                                  // 33
  },                                                                                                                   // 4
  info: function () {                                                                                                  // 34
    return RocketChat.Info;                                                                                            // 35
  },                                                                                                                   // 4
  build: function () {                                                                                                 // 36
    var ref, ref1;                                                                                                     // 37
    return ((ref = RocketChat.Info) != null ? ref.compile : void 0) || ((ref1 = RocketChat.Info) != null ? ref1.build : void 0);
  }                                                                                                                    // 4
});                                                                                                                    // 4
Template.adminInfo.events({                                                                                            // 39
  'click .refresh': function (e, instance) {                                                                           // 40
    instance.ready.set(false);                                                                                         // 41
    return Meteor.call('getStatistics', true, function (error, statistics) {                                           // 60
      instance.ready.set(true);                                                                                        // 43
                                                                                                                       //
      if (error) {                                                                                                     // 44
        return handleError(error);                                                                                     // 63
      } else {                                                                                                         // 44
        return instance.statistics.set(statistics);                                                                    // 65
      }                                                                                                                // 66
    });                                                                                                                // 42
  }                                                                                                                    // 40
});                                                                                                                    // 40
Template.adminInfo.onRendered(function () {                                                                            // 49
  return Tracker.afterFlush(function () {                                                                              // 72
    SideNav.setFlex("adminFlex");                                                                                      // 51
    return SideNav.openFlex();                                                                                         // 74
  });                                                                                                                  // 50
});                                                                                                                    // 49
Template.adminInfo.onCreated(function () {                                                                             // 54
  var instance;                                                                                                        // 55
  instance = this;                                                                                                     // 55
  this.statistics = new ReactiveVar({});                                                                               // 56
  this.instances = new ReactiveVar([]);                                                                                // 57
  this.ready = new ReactiveVar(false);                                                                                 // 58
                                                                                                                       //
  if (RocketChat.authz.hasAllPermission('view-statistics')) {                                                          // 60
    return Meteor.call('getStatistics', function (error, statistics) {                                                 // 85
      if (error) {                                                                                                     // 62
        handleError(error);                                                                                            // 63
      } else {                                                                                                         // 62
        instance.statistics.set(statistics);                                                                           // 65
      }                                                                                                                // 90
                                                                                                                       //
      return Meteor.call('instances/get', function (error, instances) {                                                // 91
        instance.ready.set(true);                                                                                      // 68
                                                                                                                       //
        if (error) {                                                                                                   // 69
          return handleError(error);                                                                                   // 94
        } else {                                                                                                       // 69
          return instance.instances.set(instances);                                                                    // 96
        }                                                                                                              // 97
      });                                                                                                              // 67
    });                                                                                                                // 61
  }                                                                                                                    // 100
});                                                                                                                    // 54
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".coffee"
  ]
});
require("./node_modules/meteor/rocketchat:ui-admin/client/template.admin.js");
require("./node_modules/meteor/rocketchat:ui-admin/client/template.adminFlex.js");
require("./node_modules/meteor/rocketchat:ui-admin/client/template.adminInfo.js");
require("./node_modules/meteor/rocketchat:ui-admin/client/rooms/template.adminRooms.js");
require("./node_modules/meteor/rocketchat:ui-admin/client/rooms/template.adminRoomInfo.js");
require("./node_modules/meteor/rocketchat:ui-admin/client/rooms/adminRoomInfo.coffee.js");
require("./node_modules/meteor/rocketchat:ui-admin/client/rooms/template.channelSettingsDefault.js");
require("./node_modules/meteor/rocketchat:ui-admin/client/rooms/channelSettingsDefault.js");
require("./node_modules/meteor/rocketchat:ui-admin/client/users/template.adminInviteUser.js");
require("./node_modules/meteor/rocketchat:ui-admin/client/users/template.adminUserChannels.js");
require("./node_modules/meteor/rocketchat:ui-admin/client/users/template.adminUserEdit.js");
require("./node_modules/meteor/rocketchat:ui-admin/client/users/template.adminUserInfo.js");
require("./node_modules/meteor/rocketchat:ui-admin/client/users/template.adminUsers.js");
require("./node_modules/meteor/rocketchat:ui-admin/client/admin.coffee.js");
require("./node_modules/meteor/rocketchat:ui-admin/client/adminFlex.coffee.js");
require("./node_modules/meteor/rocketchat:ui-admin/client/adminInfo.coffee.js");
require("./node_modules/meteor/rocketchat:ui-admin/client/rooms/adminRooms.coffee.js");
require("./node_modules/meteor/rocketchat:ui-admin/client/users/adminInviteUser.coffee.js");
require("./node_modules/meteor/rocketchat:ui-admin/client/users/adminUserChannels.coffee.js");
require("./node_modules/meteor/rocketchat:ui-admin/client/users/adminUsers.coffee.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:ui-admin'] = {};

})();
